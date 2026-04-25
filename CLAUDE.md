# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project Overview

Single-page personal landing site for `hawkinson.dev`. Companion to the blog at `tuckers.tech` — visually aligned, but a separate static site whose only job is to introduce Tucker and route readers to the blog.

## Stack

Astro 5 + Tailwind CSS 4 (via `@tailwindcss/vite`), static output, pnpm. No content collections, no JS islands — pure server-rendered HTML.

## Commands

- `pnpm dev` — dev server
- `pnpm build` — produces `dist/`
- `pnpm preview` — preview the build

## Structure

- `src/pages/index.astro` — the landing page; placeholder data (`projects`, `experience`, `contactLinks`) lives at the top of the file. Edit there to update content.
- `src/layouts/BaseLayout.astro` — html shell, font loading, Nav + Footer.
- `src/components/`
  - `AccentSquare.astro`, `Nav.astro`, `Footer.astro` — chrome.
  - `Hero.astro`, `SectionHeading.astro`, `ProjectCard.astro`, `ExperienceItem.astro`, `ContactLinks.astro` — landing-page sections.
- `src/styles/global.css` — Tailwind import + design tokens (`@theme`) + prose styles. Mirrors the tokens used by `tuckers-tech`.

## Theming

Light/dark via `prefers-color-scheme` only — no toggle, no localStorage. The `@custom-variant dark (@media (prefers-color-scheme: dark));` line in `global.css` makes `dark:` Tailwind utilities still work if needed.

## Design Tokens

Match `tuckers-tech` exactly. If colors, fonts, or spacing change there, mirror the change here.

- Fonts: Inter (sans), JetBrains Mono (mono), loaded from Google Fonts.
- Surface, text, accent (green), border tokens defined in `src/styles/global.css`.

## Content Updates

The page is intentionally a single file plus a few presentational components. To update copy, edit `src/pages/index.astro`. To restyle, edit the relevant component or `global.css`.

## Blog Link

`BLOG_URL = "https://tuckers.tech"` is referenced in `Nav.astro`, `Footer.astro`, and `index.astro`. Update all three if the blog domain changes.
