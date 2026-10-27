import { getCollection, type CollectionEntry } from 'astro:content';
import { isLang, type Lang } from '../i18n/ui';

export type PostEntry = CollectionEntry<'posts'>;

export interface Post {
  entry: PostEntry;
  lang: Lang;
  slug: string;
  /** Stable message number, oldest post = 0001, per language. */
  number: string;
  url: string;
  mdUrl: string;
  readMinutes: number;
}

const WORDS_PER_MINUTE = 220;

function splitId(id: string): { lang: Lang; slug: string } {
  const [prefix, ...rest] = id.split('/');
  if (!isLang(prefix) || rest.length === 0) {
    throw new Error(`Post "${id}" must live under src/content/posts/es or /en`);
  }
  return { lang: prefix, slug: rest.join('/') };
}

let cache: Post[] | undefined;

/** All published posts, newest first. */
export async function getAllPosts(): Promise<Post[]> {
  if (cache) return cache;
  const entries = await getCollection('posts', ({ data }) => !data.draft);
  const posts = entries.map((entry) => {
    const { lang, slug } = splitId(entry.id);
    const words = (entry.body ?? '').split(/\s+/).filter(Boolean).length;
    return {
      entry,
      lang,
      slug,
      number: '',
      url: `/${lang}/posts/${slug}/`,
      mdUrl: `/${lang}/posts/${slug}.md`,
      readMinutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
    } satisfies Post;
  });

  for (const lang of ['es', 'en'] as const) {
    posts
      .filter((post) => post.lang === lang)
      .sort((a, b) => a.entry.data.date.valueOf() - b.entry.data.date.valueOf())
      .forEach((post, index) => {
        post.number = String(index + 1).padStart(4, '0');
      });
  }

  cache = posts.sort((a, b) => b.entry.data.date.valueOf() - a.entry.data.date.valueOf());
  return cache;
}

export async function getPostsByLang(lang: Lang): Promise<Post[]> {
  return (await getAllPosts()).filter((post) => post.lang === lang);
}

export async function findTranslation(post: Post): Promise<Post | undefined> {
  return (await getAllPosts()).find(
    (other) => other.lang !== post.lang && other.entry.data.translationKey === post.entry.data.translationKey,
  );
}

/** Same category first, then the most recent others; never the post itself. */
export function relatedPosts(post: Post, pool: Post[], limit = 3): Post[] {
  const others = pool.filter((other) => other.lang === post.lang && other.slug !== post.slug);
  const sameCategory = others.filter((other) => other.entry.data.category === post.entry.data.category);
  const rest = others.filter((other) => other.entry.data.category !== post.entry.data.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
