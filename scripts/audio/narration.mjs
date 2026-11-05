// Turns a post's Markdown into plain text a narrator can read aloud, and splits it into chunks.

const PHRASES = {
  es: {
    intro: (title) => `Estás escuchando una versión narrada con inteligencia artificial de: ${title}.`,
    outro: 'Gracias por escuchar. Esta narración fue generada con inteligencia artificial. El artículo completo, con imágenes, código y fuentes, está en glacayo.com.',
    code: 'En el artículo encontrarás aquí un ejemplo de código.',
    table: 'En el artículo encontrarás aquí una tabla con más detalle.',
    sources: /^##\s+Fuentes\s*$/m,
  },
  en: {
    intro: (title) => `You're listening to an AI-narrated version of: ${title}.`,
    outro: "Thanks for listening. This narration was generated with artificial intelligence. The full article, with images, code, and sources, is at glacayo.com.",
    code: "In the article, you'll find a code example here.",
    table: "In the article, you'll find a table with more detail here.",
    sources: /^##\s+Sources\s*$/m,
  },
};

/** Splits frontmatter from body. Returns { data, body }. */
export function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { data: {}, body: raw };
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z]+):\s*(.*)$/);
    if (!kv) continue;
    let value = kv[2].trim();
    if (/^".*"$/.test(value)) value = value.slice(1, -1).replace(/\\"/g, '"');
    data[kv[1]] = value;
  }
  return { data, body: raw.slice(match[0].length) };
}

/** Removes inline Markdown and HTML so only readable words remain. */
function cleanInline(text) {
  return (
    text
      // HTML links keep their text.
      .replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi, '$1')
      // Remaining HTML tags go away.
      .replace(/<[^>]+>/g, '')
      // Images go away entirely.
      .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
      // Links keep their text.
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      // Inline code keeps its content.
      .replace(/`([^`]+)`/g, '$1')
      // Bold and italics.
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/__([^_]+)__/g, '$1')
      .replace(/(^|[^\w*])\*([^*\n]+)\*(?!\w)/g, '$1$2')
      .replace(/(^|[^\w_])_([^_\n]+)_(?!\w)/g, '$1$2')
      // Emoji and pictographs read badly.
      .replace(/[\p{Extended_Pictographic}️]/gu, '')
      // Common entities.
      .replace(/&amp;/g, '&')
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  );
}

/** Ends a heading or list item with punctuation so the narrator pauses. */
function withStop(text) {
  return /[.!?:;…]$/.test(text) ? text : `${text}.`;
}

/**
 * Builds the narration paragraphs for a post.
 * @param {string} raw - Full Markdown file, frontmatter included.
 * @param {'es'|'en'} lang
 */
export function buildNarration(raw, lang) {
  const phrases = PHRASES[lang];
  const { data, body: fullBody } = parseFrontmatter(raw);
  const sourcesAt = fullBody.search(phrases.sources);
  let body = sourcesAt >= 0 ? fullBody.slice(0, sourcesAt) : fullBody;

  // Figures are visual only.
  body = body.replace(/<figure>[\s\S]*?<\/figure>/gi, '');

  const lines = body.split(/\r?\n/);
  const paragraphs = [];
  let buffer = [];
  let inCode = false;
  let inTable = false;
  const flush = () => {
    if (buffer.length) {
      const text = cleanInline(buffer.join(' '));
      if (text) paragraphs.push(text);
      buffer = [];
    }
  };
  const placeholder = (text) => {
    flush();
    if (paragraphs[paragraphs.length - 1] !== text) paragraphs.push(text);
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (/^(```|~~~)/.test(line)) {
      if (!inCode) placeholder(phrases.code);
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;

    if (line.startsWith('|')) {
      if (!inTable) placeholder(phrases.table);
      inTable = true;
      continue;
    }
    inTable = false;

    if (line === '' || /^-{3,}$/.test(line)) {
      flush();
      continue;
    }

    const heading = line.match(/^#{1,6}\s+(.*)$/);
    if (heading) {
      flush();
      const text = cleanInline(heading[1]);
      if (text) paragraphs.push(withStop(text));
      continue;
    }

    const item = line.match(/^(?:[-*+]|\d+\.)\s+(.*)$/);
    if (item) {
      flush();
      const text = cleanInline(item[1]);
      if (text) paragraphs.push(withStop(text));
      continue;
    }

    buffer.push(line.replace(/^>\s?/, ''));
  }
  flush();

  const title = cleanInline(data.title ?? '');
  return [phrases.intro(title), ...paragraphs, phrases.outro];
}

/** Splits one long paragraph at sentence boundaries. */
function splitLong(paragraph, max) {
  const sentences = paragraph.match(/[^.!?…]+[.!?…]+["”»)]*\s*|[^.!?…]+$/g) ?? [paragraph];
  const parts = [];
  let current = '';
  for (const sentence of sentences) {
    if ((current + sentence).length > max && current) {
      parts.push(current.trim());
      current = '';
    }
    current += sentence;
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}

/** Groups paragraphs into chunks of at most `max` characters, never splitting a sentence. */
export function chunkNarration(paragraphs, max = 1400) {
  const chunks = [];
  let current = [];
  let size = 0;
  for (const paragraph of paragraphs.flatMap((p) => (p.length > max ? splitLong(p, max) : [p]))) {
    if (size + paragraph.length > max && current.length) {
      chunks.push(current.join('\n\n'));
      current = [];
      size = 0;
    }
    current.push(paragraph);
    size += paragraph.length + 2;
  }
  if (current.length) chunks.push(current.join('\n\n'));
  return chunks;
}
