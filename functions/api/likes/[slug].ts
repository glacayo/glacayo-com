/**
 * Global like counter for posts, served by Cloudflare Pages Functions.
 *
 * GET  /api/likes/:slug -> { count, liked }
 * POST /api/likes/:slug -> { count, liked: true }
 *
 * One like per reader (hashed IP + user agent, never stored in clear) and a
 * per-IP rate limit on writes. Requires a KV namespace bound as LIKES and an
 * optional LIKES_SALT secret.
 */

interface KVNamespace {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
}

interface Env {
  LIKES: KVNamespace;
  LIKES_SALT?: string;
}

interface Context {
  request: Request;
  env: Env;
  params: { slug?: string | string[] };
}

const SLUG_PATTERN = /^(es|en)--[a-z0-9]+(?:-[a-z0-9]+)*$/;
const VOTER_TTL = 60 * 60 * 24 * 365;
const RATE_WINDOW = 60;
const RATE_LIMIT = 20;
const MAX_BODY_BYTES = 256;

const json = (body: unknown, status = 200): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
    },
  });

async function sha256(value: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
}

function readSlug(params: Context['params']): string | null {
  const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;
  return slug && slug.length <= 120 && SLUG_PATTERN.test(slug) ? slug : null;
}

async function voterKey(request: Request, env: Env, slug: string): Promise<string> {
  const ip = request.headers.get('cf-connecting-ip') ?? 'unknown';
  const agent = request.headers.get('user-agent') ?? '';
  return `voter:${slug}:${await sha256(`${ip}|${agent}|${env.LIKES_SALT ?? 'glacayo'}`)}`;
}

async function readCount(env: Env, slug: string): Promise<number> {
  const value = Number.parseInt((await env.LIKES.get(`count:${slug}`)) ?? '0', 10);
  return Number.isFinite(value) && value > 0 ? value : 0;
}

export async function onRequestGet({ request, env, params }: Context): Promise<Response> {
  const slug = readSlug(params);
  if (!slug) return json({ error: 'invalid_slug' }, 400);
  const [count, voted] = await Promise.all([
    readCount(env, slug),
    env.LIKES.get(await voterKey(request, env, slug)),
  ]);
  return json({ count, liked: voted !== null });
}

export async function onRequestPost({ request, env, params }: Context): Promise<Response> {
  const slug = readSlug(params);
  if (!slug) return json({ error: 'invalid_slug' }, 400);

  if (!request.headers.get('content-type')?.includes('application/json')) {
    return json({ error: 'unsupported_media_type' }, 415);
  }
  const length = Number.parseInt(request.headers.get('content-length') ?? '0', 10);
  if (length > MAX_BODY_BYTES) return json({ error: 'payload_too_large' }, 413);
  const body = await request.text();
  if (body.length > MAX_BODY_BYTES) return json({ error: 'payload_too_large' }, 413);

  const origin = request.headers.get('origin');
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return json({ error: 'forbidden_origin' }, 403);
  }

  const ip = request.headers.get('cf-connecting-ip') ?? 'unknown';
  const rateKey = `rate:${await sha256(ip)}:${Math.floor(Date.now() / 1000 / RATE_WINDOW)}`;
  const hits = Number.parseInt((await env.LIKES.get(rateKey)) ?? '0', 10);
  if (hits >= RATE_LIMIT) return json({ error: 'rate_limited' }, 429);
  await env.LIKES.put(rateKey, String(hits + 1), { expirationTtl: RATE_WINDOW * 2 });

  const voter = await voterKey(request, env, slug);
  if (await env.LIKES.get(voter)) {
    return json({ count: await readCount(env, slug), liked: true });
  }

  // KV has no atomic increment; for a personal blog an occasional lost
  // concurrent like is acceptable. Move to D1 or a Durable Object if it is not.
  const count = (await readCount(env, slug)) + 1;
  await Promise.all([
    env.LIKES.put(`count:${slug}`, String(count)),
    env.LIKES.put(voter, '1', { expirationTtl: VOTER_TTL }),
  ]);
  return json({ count, liked: true });
}

export async function onRequest(): Promise<Response> {
  return json({ error: 'method_not_allowed' }, 405);
}
