---
title: "Astro + Content Collections: a bilingual blog published with git push"
description: Typed schemas, /es and /en routes, static search and a serverless deploy on Cloudflare Pages.
date: 2026-10-01
category: web
translationKey: bilingual-astro-blog
sample: true
---

This blog is a static site. I write a Markdown file, run `git push`, and Cloudflare Pages builds and publishes it. No database, no admin panel: **git is the CMS**.

## Typed content

Astro validates every post's frontmatter against a schema. If I forget the category, the build fails before anything ships:

```ts
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(categoryIds),
    translationKey: z.string(),
  }),
});
```

## Two languages, one source

Each language lives in its own folder (`posts/es` and `posts/en`). Translated posts share a `translationKey`, so the language switcher knows where to send the reader.

- Routes are always prefixed: `/es/p/...` and `/en/p/...`.
- If a post has no translation, the switcher goes to the other language's index.
- `hreflang` tags are generated automatically.

> A post that exists in only one language is not a bug: it is an editorial decision.

## Search without a server

Pagefind walks the built HTML and produces a static index per language. The browser downloads only the fragments it needs:

```bash
pnpm astro build && pnpm pagefind --site dist
```

## Deploy

| Step | Tool |
| --- | --- |
| Build | `astro build` |
| Index | `pagefind` |
| Publish | Cloudflare Pages |
| Like counter | Pages Functions + KV |

The Cloudflare setup fits in a few lines:

```yaml
build:
  command: pnpm build
  output: dist
env:
  NODE_VERSION: "22"
```

The result is a site that loads fast from anywhere, costs nothing and is maintained with the same workflow I use for code.
