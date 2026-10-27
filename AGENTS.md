# AGENTS.md

Instructions for AI agents working on glacayo.com, a bilingual (es/en) BBS-style tech blog built with Astro and deployed to Cloudflare Pages. Pushing to `main` deploys the site in 1–2 minutes.

## Writing a blog post

### Where posts live

- Spanish: `src/content/posts/es/<slug>.md`
- English: `src/content/posts/en/<slug>.md`
- The file name is the URL slug: `/es/posts/<slug>/` and `/en/posts/<slug>/`. Use lowercase kebab-case.
- Always write both versions unless the user asks for only one.

### Frontmatter

```yaml
---
title: "Catchy title"
description: One or two sentences for the post list and SEO.
date: 2026-10-27
category: ai
translationKey: shared-key
---
```

- `translationKey` must be identical in both languages. It links the [ES]/[EN] switch and `hreflang`.
- `category` uses the internal English id from `src/data/categories.ts`: `programming`, `web`, `ai`, `agents`, `bots`, `homelab`, `hardware`, `skills`, `frameworks`, `libraries`, `languages`, `security`, `wordpress`.
- A new category needs an entry in `src/data/categories.ts` (id, localized slugs, number, labels, short labels, Nerd Font icon). If the icon is not in `public/fonts/departure-mono-nf.woff2`, re-subset the font from the original Departure Mono Nerd Font and bump the `?v=N` query in both `src/styles/global.css` and the preload in `src/layouts/Base.astro`.
- Optional: `updated` and `updateNote` for revisions; `draft: true` keeps a post out of the site.

### Voice and language

- Spanish: neutral Latin American Spanish, addressing the reader as "tú". Friendly and conversational.
- English: native North American English. Adapt idioms and phrasing; never translate literally. Use the real English UI names (for example WordPress menus).
- Open with a hook that connects with the reader's problem or curiosity before going technical.
- Don't reuse stock lines across posts (for example "grab a coffee"). Keep transitions short and vary them from post to post without getting flowery.
- Controversies go in their own playful section titled `☕ El chisme: …` (es) / `☕ The Tea: …` (en). Keep it factual: say who alleges what, with dates and sources, and make clear that allegations are not proven facts.
- Never tell the reader what research could not find ("I couldn't find…"). If information is missing or unnecessary, leave it out.
- When mentioning notable people or companies, link their verified X account.

### Research and accuracy

- Every fact, number, price, and date must come from a source you actually read. Prefer primary sources: official sites, docs, model cards, pricing pages, repositories.
- For posts about the user's own repositories, read the repository (README, code, changelog, releases) and do not claim features it does not have.
- Label vendor-published benchmarks as vendor-reported. Note the date for data that changes, such as indexes and prices.
- End research-heavy posts with a `## Fuentes` / `## Sources` list of links.

### Images

- Prefer official images (for example, benchmark charts) over hand-made Markdown tables, always with a caption that credits the source.
- Save them to `public/images/posts/<slug>/` as WebP, resized to 1400 px wide (1200 px for social cards). Keep each image small.
- Embed them as raw HTML, with no blank lines inside the `<figure>`:

```html
<figure>
<img src="/images/posts/<slug>/chart.webp" alt="Describe what the image shows, including key numbers" width="1400" height="433" loading="lazy" decoding="async">
<figcaption>What it shows. Image: <a href="https://source.example/page">Source name</a>.</figcaption>
</figure>
```

### Referral and sponsored links

- Disclose them in the copy ("Link de referido" / "Referral link") and describe the reward honestly.
- Use a raw `<a href="…" rel="sponsored noopener" target="_blank">` tag; Markdown links get no `rel`.
- The sidebar Kimi referral URL lives in `src/data/referrals.ts`.

## Workflow

1. Draft both versions.
2. Run `pnpm build`. It must finish without errors, and Pagefind must index the new pages.
3. Show the draft to the user (`pnpm preview` serves it at http://localhost:4321) and wait for approval before publishing.
4. Publish with Conventional Commits and push to `main`:
   - `feat(content): publish the <topic> post`
   - Never add `Co-Authored-By` or any AI attribution.
   - Never commit secrets, `.env`, `.dev.vars`, logs, or backups.
5. After the deploy, confirm both post URLs return 200 on https://glacayo.com.

## Project conventions

- Code, comments, commits, and docs are in English. UI copy is localized in `src/i18n/ui.ts`.
- Category pages: `/es/categoria/<slug-es>/` and `/en/category/<slug-en>/`. Posts: `/<lang>/posts/<slug>/`.
- Keep `DESIGN.md` in sync with visual changes.
