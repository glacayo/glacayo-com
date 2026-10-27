/**
 * Progressive enhancements for the static blog. Every feature degrades to
 * plain links and markup when JavaScript or storage is unavailable.
 */

interface SavedPost {
  slug: string;
  lang: string;
  title: string;
  date: string;
  url: string;
}

const SAVED_KEY = 'bbs:saved';
const LIKED_KEY = 'bbs:liked';
const READ_KEY = 'bbs:read';

const storage = {
  get<T>(key: string, fallback: T): T {
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : fallback;
    } catch {
      return fallback;
    }
  },
  set(key: string, value: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* storage full or blocked: feature stays session-only */
    }
  },
};

const $ = <T extends Element>(selector: string, root: ParentNode = document) => root.querySelector<T>(selector);
const $$ = <T extends Element>(selector: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(selector));

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);
}

/* ---------- Clock ---------- */

function startClock(): void {
  const clock = $<HTMLTimeElement>('#clock');
  if (!clock) return;
  const tick = () => {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString(document.documentElement.lang, { hour12: false });
    clock.dateTime = now.toISOString();
  };
  tick();
  setInterval(tick, 1000);
}

/* ---------- Status messages ---------- */

function announce(message: string, tone: 'ok' | 'error' = 'ok'): void {
  for (const status of $$<HTMLElement>('[data-action-status]')) {
    status.textContent = message;
    status.style.color = tone === 'error' ? 'var(--magenta)' : '';
  }
  window.setTimeout(() => {
    for (const status of $$<HTMLElement>('[data-action-status]')) {
      if (status.textContent === message) status.textContent = '';
    }
  }, 4000);
}

/* ---------- Saved posts ---------- */

const getSaved = () => storage.get<SavedPost[]>(SAVED_KEY, []);

function updateSavedCount(): void {
  const count = getSaved().filter((post) => post.lang === document.documentElement.lang).length;
  for (const element of $$<HTMLElement>('[data-saved-count]')) {
    element.textContent = count ? String(count) : '';
  }
}

function renderSavedList(): void {
  const list = $<HTMLElement>('#saved-list');
  if (!list) return;
  const lang = document.documentElement.lang;
  const saved = getSaved().filter((post) => post.lang === lang);
  const empty = $<HTMLElement>('[data-saved-empty]');
  if (empty) empty.hidden = saved.length > 0;
  list.innerHTML = saved
    .map(
      (post) => `
      <li>
        <a class="subj" href="${escapeHtml(post.url)}">${escapeHtml(post.title)}</a>
        <time class="num">${escapeHtml(post.date)}</time>
        <button type="button" class="term-button" data-remove="${escapeHtml(post.slug)}">${escapeHtml(list.dataset.removeLabel ?? 'Remove')}</button>
      </li>`,
    )
    .join('');
  for (const button of $$<HTMLButtonElement>('[data-remove]', list)) {
    button.addEventListener('click', () => {
      storage.set(
        SAVED_KEY,
        getSaved().filter((post) => !(post.slug === button.dataset.remove && post.lang === lang)),
      );
      renderSavedList();
      updateSavedCount();
    });
  }
}

/* ---------- Post page ---------- */

interface PostContext {
  slug: string;
  lang: string;
  title: string;
  date: string;
  url: string;
}

function readPostContext(): PostContext | undefined {
  const article = $<HTMLElement>('[data-post-slug]');
  if (!article) return undefined;
  return {
    slug: article.dataset.postSlug ?? '',
    lang: article.dataset.postLang ?? '',
    title: article.dataset.postTitle ?? document.title,
    date: article.dataset.postDate ?? '',
    url: location.pathname,
  };
}

function setPressed(action: string, pressed: boolean): void {
  for (const button of $$<HTMLButtonElement>(`[data-action="${action}"]`)) {
    button.setAttribute('aria-pressed', String(pressed));
    const label = $<HTMLElement>('[data-label]', button);
    if (label) label.textContent = (pressed ? button.dataset.labelOn : button.dataset.labelOff) ?? '';
  }
}

function setLikeCount(count: number | null): void {
  for (const element of $$<HTMLElement>('[data-like-count]')) {
    element.textContent = count === null ? '—' : String(count);
  }
}

const likeKey = (post: PostContext) => `${post.lang}/${post.slug}`;
const likeApi = (post: PostContext) => `/api/likes/${encodeURIComponent(`${post.lang}--${post.slug}`)}`;

async function loadLikes(post: PostContext): Promise<void> {
  const liked = storage.get<string[]>(LIKED_KEY, []).includes(likeKey(post));
  setPressed('like', liked);
  try {
    const response = await fetch(likeApi(post), { headers: { accept: 'application/json' } });
    if (!response.ok || !response.headers.get('content-type')?.includes('application/json')) return;
    const data = (await response.json()) as { count: number; liked: boolean };
    setLikeCount(data.count);
    if (data.liked) {
      setPressed('like', true);
      rememberLike(post);
    }
  } catch {
    /* API unreachable (e.g. astro dev): keep the local state and the em dash */
  }
}

function rememberLike(post: PostContext): void {
  const liked = storage.get<string[]>(LIKED_KEY, []);
  if (!liked.includes(likeKey(post))) storage.set(LIKED_KEY, [...liked, likeKey(post)]);
}

async function like(post: PostContext): Promise<void> {
  if (storage.get<string[]>(LIKED_KEY, []).includes(likeKey(post))) return;
  const button = $<HTMLButtonElement>('[data-action="like"]');
  const countText = $<HTMLElement>('[data-like-count]')?.textContent ?? '—';
  const previous = Number.parseInt(countText, 10);
  setPressed('like', true);
  rememberLike(post);
  if (!Number.isNaN(previous)) setLikeCount(previous + 1);
  try {
    const response = await fetch(likeApi(post), {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: '{}',
    });
    if (!response.ok || !response.headers.get('content-type')?.includes('application/json')) {
      if (response.status === 404 || response.status === 405) return;
      throw new Error(String(response.status));
    }
    const data = (await response.json()) as { count: number };
    setLikeCount(data.count);
  } catch {
    if (!Number.isNaN(previous)) setLikeCount(previous);
    announce(button?.dataset.error ?? 'Error', 'error');
  }
}

async function share(post: PostContext): Promise<void> {
  const url = location.origin + post.url;
  const button = $<HTMLButtonElement>('[data-action="share"]');
  if (navigator.share) {
    try {
      await navigator.share({ title: post.title, url });
      return;
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return;
    }
  }
  try {
    await navigator.clipboard.writeText(url);
    announce(button?.dataset.copied ?? url);
  } catch {
    window.prompt('URL', url);
  }
}

function toggleBookmark(post: PostContext): void {
  const saved = getSaved();
  const exists = saved.some((item) => item.slug === post.slug && item.lang === post.lang);
  const button = $<HTMLButtonElement>('[data-action="bookmark"]');
  if (exists) {
    storage.set(
      SAVED_KEY,
      saved.filter((item) => !(item.slug === post.slug && item.lang === post.lang)),
    );
    announce(button?.dataset.unsaved ?? '');
  } else {
    storage.set(SAVED_KEY, [post, ...saved]);
    announce(button?.dataset.saved ?? '');
  }
  setPressed('bookmark', !exists);
  updateSavedCount();
}

function setupReadPosition(post: PostContext): void {
  const key = likeKey(post);
  const positions = storage.get<Record<string, number>>(READ_KEY, {});
  const flag = $<HTMLElement>('[data-resume]');
  const saved = positions[key];

  if (flag && saved && saved > 0.05 && saved < 0.95) {
    const percent = Math.round(saved * 100);
    const value = $<HTMLElement>('[data-resume-percent]', flag);
    if (value) value.textContent = `${percent}%`;
    flag.hidden = false;
    $<HTMLButtonElement>('[data-resume-go]', flag)?.addEventListener('click', () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      window.scrollTo({ top: max * saved, behavior: 'smooth' });
      flag.hidden = true;
    });
    $<HTMLButtonElement>('[data-resume-dismiss]', flag)?.addEventListener('click', () => {
      flag.hidden = true;
    });
  }

  let frame = 0;
  window.addEventListener(
    'scroll',
    () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - innerHeight;
        if (max <= 0) return;
        const all = storage.get<Record<string, number>>(READ_KEY, {});
        all[key] = Math.min(1, scrollY / max);
        storage.set(READ_KEY, all);
      });
    },
    { passive: true },
  );
}

function setupPost(): void {
  const post = readPostContext();
  if (!post) return;

  const isSaved = getSaved().some((item) => item.slug === post.slug && item.lang === post.lang);
  setPressed('bookmark', isSaved);
  void loadLikes(post);
  setupReadPosition(post);

  for (const button of $$<HTMLButtonElement>('[data-action="like"]')) {
    button.addEventListener('click', () => void like(post));
  }
  for (const button of $$<HTMLButtonElement>('[data-action="share"]')) {
    button.addEventListener('click', () => void share(post));
  }
  for (const button of $$<HTMLButtonElement>('[data-action="bookmark"]')) {
    button.addEventListener('click', () => toggleBookmark(post));
  }
}

/* ---------- Code blocks ---------- */

function setupCodeCopy(): void {
  for (const button of $$<HTMLButtonElement>('[data-copy]')) {
    button.addEventListener('click', async () => {
      const code = button.closest('.code-box')?.querySelector('pre')?.innerText ?? '';
      try {
        await navigator.clipboard.writeText(code);
        button.textContent = '[OK]';
        window.setTimeout(() => (button.textContent = '[COPY]'), 1600);
      } catch {
        button.textContent = '[ERR]';
      }
    });
  }
}

/* ---------- Search (Pagefind) ---------- */

interface PagefindResult {
  data: () => Promise<{ url: string; meta: { title?: string }; excerpt: string }>;
}
interface Pagefind {
  init?: () => Promise<void>;
  options?: (options: Record<string, unknown>) => Promise<void>;
  debouncedSearch: (query: string, options?: unknown, ms?: number) => Promise<{ results: PagefindResult[] } | null>;
}

let pagefind: Pagefind | null | undefined;

async function loadPagefind(): Promise<Pagefind | null> {
  if (pagefind !== undefined) return pagefind;
  try {
    const path = '/pagefind/pagefind.js';
    pagefind = (await import(/* @vite-ignore */ path)) as Pagefind;
    await pagefind.options?.({ excerptLength: 18 });
    await pagefind.init?.();
  } catch {
    pagefind = null;
  }
  return pagefind;
}

function setupSearch(): void {
  const input = $<HTMLInputElement>('#search-input');
  const output = $<HTMLElement>('#search-results');
  if (!input || !output) return;

  input.addEventListener('input', async () => {
    const query = input.value.trim();
    if (query.length < 2) {
      output.innerHTML = '';
      return;
    }
    const engine = await loadPagefind();
    if (!engine) {
      output.innerHTML = `<p class="search-note">${escapeHtml(input.dataset.devMessage ?? '')}</p>`;
      return;
    }
    const search = await engine.debouncedSearch(query, {}, 220);
    if (!search) return;
    if (search.results.length === 0) {
      output.innerHTML = `<p class="search-note">${escapeHtml(input.dataset.emptyMessage ?? '')} “${escapeHtml(query)}”</p>`;
      return;
    }
    const items = await Promise.all(search.results.slice(0, 6).map((result) => result.data()));
    output.innerHTML = `
      <p class="search-note">${search.results.length} ${escapeHtml(input.dataset.resultsLabel ?? '')}</p>
      <ol class="search-list">${items
        .map(
          (item) =>
            `<li><a href="${escapeHtml(item.url)}">${escapeHtml(item.meta.title ?? item.url)}</a><p>${item.excerpt}</p></li>`,
        )
        .join('')}</ol>`;
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      input.value = '';
      output.innerHTML = '';
      input.blur();
    }
  });
}

/* ---------- Hotkeys ---------- */

function isTyping(target: EventTarget | null): boolean {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))
  );
}

let baseDigits = '';
let baseTimer = 0;

/** Collects one or two digits so bases 00-12 are all reachable. */
function pushBaseDigit(digit: string): void {
  window.clearTimeout(baseTimer);
  baseDigits += digit;
  const go = () => {
    const index = Number.parseInt(baseDigits, 10);
    baseDigits = '';
    $<HTMLElement>(`[data-base-index="${index}"]`)?.click();
  };
  if (baseDigits.length >= 2) go();
  else baseTimer = window.setTimeout(go, 550);
}

function setupHotkeys(): void {
  document.addEventListener('keydown', (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey || isTyping(event.target)) return;
    const key = event.key.toLowerCase();
    const click = (selector: string) => {
      const element = $<HTMLElement>(selector);
      if (!element) return false;
      element.click();
      return true;
    };

    if (key === '/' || key === 's') {
      const input = $<HTMLInputElement>('#search-input');
      if (input) {
        event.preventDefault();
        input.focus();
      }
      return;
    }
    if (key === 'n' && click('[data-nav="next"]')) return;
    if (key === 'p' && click('[data-nav="prev"]')) return;
    if (key === 'l' && click('[data-action="like"]')) return;
    if (key === 'h' && click('[data-action="share"]')) return;
    if (key === 'b' && click('[data-action="bookmark"]')) return;
    if (key === 'd' && click('[data-action="download"]')) return;
    if (/^[0-9]$/.test(key) && !$('[data-post-slug]')) {
      pushBaseDigit(key);
    }
  });
}

/* ---------- Contents index (scroll spy) ---------- */

function setupToc(): void {
  const links = $$<HTMLAnchorElement>('[data-toc-link]');
  if (links.length === 0 || !('IntersectionObserver' in window)) return;
  const headings = links
    .map((link) => document.getElementById(link.dataset.tocLink ?? ''))
    .filter((heading): heading is HTMLElement => heading !== null);
  const setCurrent = (id: string) => {
    for (const link of links) link.setAttribute('aria-current', String(link.dataset.tocLink === id));
  };
  const observer = new IntersectionObserver(
    () => {
      // The current section is the last heading that has scrolled past the top third.
      const limit = innerHeight / 3;
      const passed = headings.filter((heading) => heading.getBoundingClientRect().top <= limit);
      setCurrent((passed.at(-1) ?? headings[0]).id);
    },
    { rootMargin: '0px 0px -66% 0px', threshold: [0, 1] },
  );
  for (const heading of headings) observer.observe(heading);
}

/* ---------- Read marks on message lists ---------- */

function markReadState(): void {
  const positions = storage.get<Record<string, number>>(READ_KEY, {});
  const unread = document.documentElement.lang === 'es' ? 'Sin leer' : 'Unread';
  for (const mark of $$<HTMLElement>('[data-read-key]')) {
    const progress = positions[mark.dataset.readKey ?? ''];
    if (progress === undefined) {
      mark.textContent = '*';
      mark.title = unread;
    } else {
      mark.textContent = progress >= 0.9 ? '' : '›';
      mark.classList.add('is-read');
    }
  }
}

/* ---------- Boot ---------- */

startClock();
markReadState();
updateSavedCount();
renderSavedList();
setupPost();
setupToc();
setupCodeCopy();
setupSearch();
setupHotkeys();
