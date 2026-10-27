---
name: glacayo.com
description: A personal computing blog run like a dial-up BBS message base, DOS 16-colour on pure black.
colors:
  ground: "#000000"
  frame-cyan: "#00aaaa"
  prompt-cyan: "#55ffff"
  title-yellow: "#ffff55"
  header-magenta: "#ff55ff"
  ok-green: "#55ff55"
  chrome-grey: "#aaaaaa"
  dim-grey: "#8a8a8a"
  rule-grey: "#555555"
  reading-white: "#e8eef0"
  title-white: "#f0f4f5"
  muted-text: "#a4b0b3"
  code-ground: "#061414"
typography:
  chrome:
    fontFamily: "Departure Mono, Ubuntu Mono NF, monospace"
    fontSize: "16.5px"
    fontWeight: 400
    lineHeight: 1.45
  box-title:
    fontFamily: "Departure Mono, Ubuntu Mono NF, monospace"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: "24px"
  post-title:
    fontFamily: "Ubuntu NF, Ubuntu, system-ui, sans-serif"
    fontSize: "clamp(30px, 4.2vw, 44px)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  message-subject:
    fontFamily: "Ubuntu NF, Ubuntu, system-ui, sans-serif"
    fontSize: "21px"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "JetBrains Mono Variable, monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  code:
    fontFamily: "Ubuntu Mono NF, Departure Mono, monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  none: "0px"
spacing:
  gutter: "24px"
  box-pad-y: "22px"
  box-pad-x: "18px"
  section: "48px"
components:
  term-button:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.reading-white}"
    rounded: "{rounded.none}"
    padding: "4px 12px"
    height: "40px"
  term-button-hover:
    backgroundColor: "{colors.frame-cyan}"
    textColor: "{colors.ground}"
  base-active:
    backgroundColor: "{colors.frame-cyan}"
    textColor: "{colors.ground}"
  status-bar:
    backgroundColor: "{colors.frame-cyan}"
    textColor: "{colors.ground}"
    height: "34px"
  sample-tag:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.header-magenta}"
    padding: "0 5px"
---

# Design System: glacayo.com

## Overview

**Creative North Star: "The Sysop's Board"**

The blog is a dial-up bulletin board kept by one sysop. Categories are message bases, posts are numbered messages, and every frame speaks the DOS 16-colour palette on a pure black screen. The world owns the frame: the pixel-art night-sky masthead, double-line panels with their titles cut into the top rule, magenta column headers and the cyan status bar of hotkeys. The reading column inside that frame stays calm: a proportional reading face in soft white at a real measure, nothing moving behind the text.

Density is that of a terminal: tight rows, tabular numbers, square corners, no decoration that a 1990s ANSI screen could not draw. Interaction is keyboard-first like a real board (search, bases, next/previous, like/share/save/download all have hotkeys), but every hotkey has a visible, clickable control beside it.

**Key Characteristics:**
- Pure black ground with DOS 16-colour roles, never gradients or glow.
- Double-line panels (3px double cyan) with yellow titles sitting on the top rule.
- A pixel-art night-sky masthead; Departure Mono for the board, Ubuntu for titles, JetBrains Mono for paragraphs.
- Numbered messages (#0001…) and numbered bases (00–12) as the wayfinding system.
- One cyan status bar, sticky at the bottom, carrying hotkeys, language and the node clock.

## Colors

A strict DOS 16-colour subset, each colour holding one job.

### Primary
- **Frame Cyan** (frame-cyan): every panel border, the active message base, the status bar, the logo shade row and focus-adjacent fills. It is the colour of the board itself.
- **Prompt Cyan** (prompt-cyan): message numbers, the search prompt and caret, links, logo letter faces, inline code. Bright cyan means "you can act here or this is an identifier".

### Secondary
- **Title Yellow** (title-yellow): box titles cut into rules, base codes in the message table, the hotkey keycaps, the update/errata line and the unread marker.

### Tertiary
- **Header Magenta** (header-magenta): table column headers, the heart icon and the SAMPLE tag. Bright magenta replaces DOS dark magenta (#aa00aa) everywhere text is under 24px, because the dark variant fails 4.5:1 on black.

### Neutral
- **Ground** (ground): the only background. Panels are not filled; they are drawn.
- **Reading White** (reading-white): post body text; softened from pure white for long reads.
- **Title White** (title-white): post titles and message subjects.
- **Muted Text** (muted-text): descriptions, ledes, empty states.
- **Chrome Grey** (chrome-grey): sidebar entries, dates, blockquotes, metadata.
- **Dim Grey** (dim-grey): counts, placeholders, read markers; the minimum for small text.
- **Rule Grey** (rule-grey): dotted row separators and the 1px blockquote rule only; never text.
- **Code Ground** (code-ground): inline code background.

### Named Rules
**The Sixteen Colours Rule.** Every interface colour comes from this list; the masthead art alone adds its own stepped greys for the sky and clouds. A new role reuses an existing colour; it never introduces a tint, gradient or translucent overlay.

**The Drawn Panel Rule.** Panels are lines on black, not filled surfaces; the contents index is the single unboxed exception, marked by its 5px gray left rule. Fill appears only as state: the active base, a hovered or pressed button, the status bar.

## Typography

**Chrome and Headline Font:** Departure Mono (DepartureMono Nerd Font, self-hosted, includes Codicons and box drawing): every label, number, button, table header, status bar, box title and icon
**Title Font:** Ubuntu NF (Ubuntu Nerd Font Propo, weights 400/500/700): post titles, prose headings and message subjects
**Paragraph Font:** JetBrains Mono Variable (via @fontsource-variable/jetbrains-mono, self-hosted, weights 100–800 + italic): every paragraph, lede, description, list, table cell and inline code
**Code Font:** Ubuntu Mono NF (UbuntuMono Nerd Font)

**Character:** A pixel voice for everything the board says, a humanist sans for the author's titles, and a programmer's mono for the author's paragraphs. The contrast between the two is the point: the machine speaks in CP437, the person speaks in prose.

### Hierarchy
- **Box title** (Departure Mono 700 synthesized, 22px; the face ships Regular only): panel titles in uppercase, e.g. NEW MESSAGES, MESSAGE BASES; also the site title "BLOG DE INFORMÁTICA" and code-box language labels.
- **Post title** (700, clamp 30–44px, 1.12): one per post, max 32ch.
- **Message subject** (500, 21px, 1.3): titles in message lists.
- **Body** (JetBrains Mono Variable 400, 16px, 1.75; 15px under 600px): the reading column, max 72ch; ledes 17px, list descriptions 14px, site description 15px; headings 28px/700 and 22px/500 with a cyan `##`/`###` prefix in the chrome face.
- **Chrome** (Departure Mono 400, 16.5px): sidebar, metadata, buttons, status bar, table headers, numbers, icons.
- **Code** (400, 16px, 1.55): code blocks and inline code.

### Named Rules
**The Voices Rule.** Pixel faces never set paragraphs or post titles; Ubuntu sets only titles and subjects; JetBrains Mono sets only paragraph text and inline code. The masthead is pixel art, not type.

**The Pixel Grid Rule.** Departure Mono is drawn on an 11px grid; set it only at 16.5px (1.5x, crisp on 2x displays) for chrome and 22px (2x) for titles.

**The Wide Glyph Rule.** Departure Mono advances about 0.64em per character. Table columns use the categories' uppercase short codes (max ~11 characters) and never wrap; navigation always shows the full category names and may wrap to a second line.

## Layout

A Bootstrap-style 12-column grid (24px gutter) inside a 1320px container with 24px side padding. At 992px and up the sidebar spans columns 1–3 (SEARCH, SYSOP, MESSAGE BASES) and the main column spans 4–12. Below 992px the sidebar dissolves into the layout grid: search first, then the main content, then bases and sysop; on post pages the post comes before search. Message tables become stacked rows below 768px (number and date, then subject, then base code). The masthead banner spans the content width; on narrow screens it keeps 76px of height and crops its sides.

On post pages the header and the top ACTIONS box span the full main column; below them the column splits: the text column (prose, previous/next, related messages) takes the left two thirds (grid columns 4–9) and a sticky CONTENTS index takes the right third (columns 10–12), starting level with the first paragraph. Below 992px the index is hidden.

Panels separate by 20–26px; sections inside a post use more space above a heading than below it. No horizontal scroll at any width; code blocks and wide tables scroll inside their own box.

## Elevation & Depth

Completely flat. There are no shadows; depth is expressed the way an ANSI screen does it: by line weight (double rule for panels, single cyan rule for headers, dotted grey for rows) and by inverse video (cyan fill with black text) for the active or pressed state. The masthead sky gets its depth from dithered grey steps and layered cloud banks, with a cyan rim on the nearest clouds.

### Named Rules
**The Inverse Video Rule.** Selection, hover and pressed states invert to cyan background with black text. Never a glow, blur, lift or shadow.

## Shapes

Square everything (0px radius). Borders are the shape language: 3px double cyan for panels and code boxes, 1px cyan for buttons and message navigation, 1px dotted rule grey between rows. Titles break the top border of their panel by sitting on a black label.

## Components

### Buttons (term-button)
- **Shape:** square, 1px Frame Cyan border, min-height 40px.
- **Default:** black with Reading White label, a Codicons glyph and a yellow `[KEY]` hotkey hint.
- **Hover / Pressed:** inverse video (cyan fill, black text and hotkey). `aria-pressed="true"` keeps the inverse state for Like and Save.

### Panels (Box)
- **Style:** 3px double Frame Cyan border, 22px/18px padding, yellow uppercase title on the top rule.
- **Use:** every grouped region: search, sysop, bases, message lists, actions, related messages.

### Inputs (search)
- **Style:** borderless input inside its panel, Prompt Cyan text after a `>` prompt, a blinking block caret while empty and unfocused (static under reduced motion).
- **Focus:** 2px Prompt Cyan outline around the whole prompt line.

### Navigation (message bases)
- **Style:** numbered rows `NN  icon  label  count` in the chrome face; active base in inverse video.
- **Mobile:** wrapping chips with 1px rule-grey borders, numbers and counts hidden.

### Message table (signature)
- **Style:** real table with magenta headers over a cyan rule; `#` column shows a yellow `*` for unread (or `›` in progress) before the bright cyan number; subject in Title White Ubuntu 500 with description below; base as a yellow uppercase short code with its icon; date in grey tabular numbers.

### Code box (signature)
- **Style:** double-line box whose top rule carries the language in yellow uppercase on the left and a `[COPY]` control on the right; Shiki theme mapped to the palette (keywords cyan, strings yellow, numbers magenta, functions green, comments dim italic).

### Contents index
- **Style:** the one unboxed panel: a 5px solid Dark Gray (#555555) left rule, title in Departure Mono 700 22px and entries in Light Gray (#aaaaaa), the DOS colours 8 and 7. H3 entries indent 2ch.
- **State:** the section being read turns Prompt Cyan with a `>` marker; hover lifts the entry to Reading White. Sticky at 24px from the top.

### Post header
- **Principle:** two groups. The *what* (title and lede) reads as one block; the *context* (update line, actions) starts after a wider gap (32px).
- **Meta line:** one tone above the title: only `MSG #nnnn` in Prompt Cyan; category, date and read time in Dim/Chrome Grey separated by Rule Grey `·`, no icons; the outlined SAMPLE tag closes the line. Separators drop when the line wraps on narrow screens.
- **Update line:** a single quiet Dim Grey line `↻ actualizado <date> — <note>`; never yellow or bold.
- **Actions bar:** unboxed row between two 1px dotted Rule Grey lines; buttons use Rule Grey borders and Chrome Grey labels with Dim Grey hotkey hints (hidden on touch), inverting to cyan on hover or when pressed.
- **Language switch:** lives only in the status bar; the header carries no translation link.

### Post ending
- **Principle:** the end of a post is quiet and unboxed; a single ACTIONS box lives at the top of the post only.
- **Previous / next:** one line under a 1px dotted Rule Grey separator: `‹ P title` on the left, `title N ›` on the right, Chrome Grey text with Dim Grey arrows, truncated with an ellipsis; hover turns the title Prompt Cyan.
- **Related messages:** a Departure Mono 700 22px heading in Chrome Grey, then up to three single-line rows `number · title · BASE CODE` (Frame Cyan number, Reading White title, Dim Grey code); no table headers, descriptions or dates.

### Masthead night sky (signature)
- **Art:** an original pixel-art night sky as a 320×40 grid: a banded cool-grey sky gradient (black at the top to a blue-grey horizon with a soft central glow) blended with 4×4 Bayer dithering; scattered white and grey stars with a few four-point sparkles in Title Yellow and Prompt Cyan; two layers of puffy cumulus banks framing an open centre: back banks in DOS greys (Light Gray highlights over Dark Gray), front banks in near-black greys with a Prompt Cyan rim and Frame Cyan rim shade along their tops. Generated by `scripts/banner.mjs`, which writes the sky and clouds to `public/banner.png` (one image pixel per art pixel) and the star layer to `src/data/banner.json`. The inner ends of the grey banks finish in tapering tails of shrinking puffs that slope down into the scene, so they trail off instead of ending in a wall; the open centre keeps a small gap above the low middle bank.
- **Rendering:** one inline SVG: the PNG as an `<image>` with `image-rendering: pixelated`, plus about 150 star `<rect>`s on top (`shape-rendering: crispEdges`), full content width at a 320:40 ratio (about 160px tall on desktop); below 768px it keeps a 76px height and crops the sides (`preserveAspectRatio="xMidYMid slice"`). The link carries the accessible name "GLACAYO BBS".
- **Motion:** draws in top to bottom in 25 steps once per session. About a third of the stars twinkle: opacity eases 1 → 0.3 → 1 over 3.4–6.1s in five offset rhythm groups; the four-point sparkles glint slower (5.8–7.4s, down to 0.45). Stars never switch fully off. All of it stops under reduced motion.

### Status bar
- **Style:** sticky bottom bar in Frame Cyan with black chrome text, yellow keycaps for hotkeys, `[EN]/[ES]` language switch and `Node 1 · HH:MM:SS`.

## Do's and Don'ts

### Do:
- **Do** put every new grouped region in a double-line panel with a yellow title on the top rule.
- **Do** give every new keyboard action a visible control and show its key as a yellow `[KEY]` hint.
- **Do** use Codicons from the patched Departure Mono Nerd Font for icons, one glyph per meaning, at the text size; draw an inline SVG only when Nerd Fonts lacks the mark (the X logo).
- **Do** keep small text at Dim Grey (#8a8a8a) or brighter on black.
- **Do** label demonstration content with the outlined magenta SAMPLE tag.

### Don't:
- **Don't** add rounded corners, gradients, glows, shadows or translucent glass.
- **Don't** set paragraphs or post titles in a pixel face, or paragraphs in Ubuntu.
- **Don't** use pure white (#ffffff) for running text; Reading White is the ceiling.
- **Don't** use DOS dark magenta (#aa00aa) for text under 24px.
- **Don't** let the world reach into the reading column: no textures, scanlines or animation behind prose.
- **Don't** add more motion than the one-time top-to-bottom masthead reveal, the masthead star twinkle and the search caret blink, and disable all of them under reduced motion.
