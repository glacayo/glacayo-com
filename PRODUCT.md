# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro, static output. Posts authored as Markdown/MDX in the repository via Astro Content Collections (git is the CMS). Deployed to Cloudflare Pages. Domain: glacayo.com.

## Users

- Primary: the author (Geovanny Lacayo), who writes to document what they learn and find interesting.
- Secondary: developers, tinkerers, and tech enthusiasts (Spanish- and English-speaking) who land on a post from search or social links and read long-form technical content, often code-heavy.

## Product Purpose

A personal tech blog ("Blog de informática") used as a learning log. It covers whatever the author finds interesting: technology, programming, web development, artificial intelligence, AI agents, bots, homelabs, hardware, agent skills, frameworks, libraries, programming languages, security, and more. Success means the author keeps publishing comfortably and readers can read long posts without eye strain and find related posts by category or search.

## Positioning

A personal, opinionated log from one developer's real experiments (homelab, agents, tooling), not a news aggregator or a tutorial mill. Its terminal/retro-console identity reflects the author's own taste.

## Operating Context

- Author writes `.md`/`.mdx` files locally, commits, and Cloudflare Pages builds and publishes.
- Readers arrive on individual posts, browse by category, or search.
- Bilingual: Spanish and English, with per-language routes (e.g. `/es`, `/en`) using Astro i18n. Not every post is guaranteed to exist in both languages (open decision: fallback behavior for untranslated posts).

## Capabilities and Constraints

- Every post belongs to a category; the category set is open-ended and will grow (initial: technology, programming, web development, AI, AI agents, bots, homelabs, hardware, skills, frameworks, libraries, programming languages, security).
- Layout requirement: left sidebar plus right content area on a 12-column grid (Bootstrap-style).
- Sidebar contains: search box, and the author's social links (GitHub, X).
- Header: the title "Blog de informática" with a description below of what readers will find.
- Search must work on a static site (no server). Proposed: Pagefind (build-time index, multilingual).
- Each post shows related posts (computed at build time, e.g. by shared category).
- Each post has action icons: heart (like), share, save/bookmark, and download the post as `.md`.
  - Share: Web Share API with copy-link fallback.
  - Save/bookmark: reader-side saved list (no accounts).
  - Download `.md`: the post's Markdown source served as a static file.
  - Heart: global public like counter per post, backed by Cloudflare Pages Functions plus KV or D1, with basic anti-spam (one like per reader, rate limiting). This is the only runtime backend; the rest of the site stays static.
- Open decisions: tags in addition to categories, RSS feed, comments, newsletter, analytics. None confirmed.

## Brand Commitments

Binding constraints from the author:

- Dark site.
- Aesthetic: retro / console / programming, with geeky ("friki") iconography.
- Dominant accent color: cyan (first attempt; may be revisited).
- Post body text: white-ish, chosen for comfortable reading rather than maximum contrast.
- Typography: a combination drawn from Nerd Fonts (https://www.nerdfonts.com/font-downloads), excluding Comic Sans–style fonts.

## Evidence on Hand

- No posts, logo, avatar, or images exist yet. Do not fabricate posts presented as real; placeholder content must be clearly sample content.
- Social profiles: GitHub https://github.com/glacayo, X https://x.com/GeovannyLacayo.

## Product Principles

1. Reading comfort first: long technical posts and code blocks must be easy on the eyes in dark mode.
2. Personality without friction: the console identity must never get in the way of finding or reading a post.
3. Low-maintenance authoring: publishing a post is writing a Markdown file and pushing.
4. Static and fast: everything is served from the CDN; the like counter is the single, minimal exception.
5. Equal footing for both languages.

## Accessibility & Inclusion

Comfortable contrast for long-form reading in dark mode (avoid pure white on pure black glare while meeting WCAG AA). Keyboard-navigable search and navigation. Respect reduced-motion preferences for any console-style effects.
