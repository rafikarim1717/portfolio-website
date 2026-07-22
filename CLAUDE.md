# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page portfolio/marketing site for Rafi, a freelance full-stack web developer. It's a one-pager built with the Next.js App Router — there is only one route (`/`), and "pages" are really just stacked `<section>` components rendered in order on `src/app/page.js`. Navigation is anchor-link scrolling (`#home`, `#about`, etc.), not client-side routing.

## Commands

```bash
npm run dev     # start dev server (localhost:3000)
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint (flat config via eslint-config-next)
```

There is no test setup in this repo (no test runner, no test files).

## Architecture

**Stack**: Next.js 16 (App Router), React 19, Tailwind CSS v4 (CSS-first config via `@theme inline` in `globals.css`, not `tailwind.config.js` — that file only configures `content` globs and the `container` breakpoints). `lucide-react` for icons. No state management library, no data fetching layer — everything is static/hardcoded.

**Page composition** (`src/app/page.js`): the home page is literally a fixed stack of section components, in this order:
`Navbar → Hero → About → TechnicalExpertise → FeaturedProject → CtaCard → Contact → Footer`, plus a floating `BackToTop` button. Each section is self-contained: its own copy/content lives as a hardcoded data object/array at the top of the component file (e.g. `HERO_DATA` in `Hero.jsx`, `projects` in `FeaturedProject.jsx`, `contactData` in `Contact.jsx`). To change site copy or add/remove a project/service/stat, edit the data array in that component — there is no CMS or external data source.

**Layout primitive**: `Container.jsx` is the shared horizontal-padding/max-width wrapper (`container mx-auto px-4 lg:px-8 xl:px-24`) used by every section — reuse it instead of duplicating width/padding classes.

**Client components**: only components with interactivity are `"use client"` — `Navbar` (mobile menu toggle, active-link state), `FeaturedProject` (show-more pagination via `visibleCount` state), `BackToTop` (scroll-listener visibility). Everything else is a plain server component (static JSX, no hooks).

**Fonts**: loaded in `src/app/layout.js` via `next/font/google`, exposed as CSS variables on `<body>`:
- `Inter` → `--font-inter` → mapped to `--font-body` → Tailwind utility `font-body` (default body/paragraph text)
- `Poppins` → `--font-poppins` → mapped to `--font-title` → Tailwind utility `font-title` (headings, logo, emphasis)

The mapping happens in `globals.css` under `@theme inline`. To use a font, apply `font-body` or `font-title` — don't reach for raw `font-[Poppins]` etc.

**Color system**: no Tailwind color tokens are defined (the `colors` block in `tailwind.config.js` is commented out) — colors are hardcoded inline as arbitrary values throughout components. The palette in practice:
- Primary accent: `#4251EB` (blue — used for the logo mark, active/link states, buttons, stat values) alongside Tailwind's stock `blue-50`/`blue-600`/`blue-700` for backgrounds, borders, and hover glows (`hover:shadow-blue-500/10` is the standard card-hover treatment across `About`, `TechnicalExpertise`, `FeaturedProject`, `Contact`).
- Body text: `#333` / `#333333` for headings, `#6c757d` for secondary/paragraph text.
- Page background: a subtle top-to-bottom gradient (`--background` in `globals.css`, `linear-gradient(to top, #cfd9df, #e2ebf0)`), `background-attachment: fixed`.

There's no dark mode implementation despite a `Moon` icon import sitting unused in `Navbar.jsx`.

**Recurring visual pattern**: most content cards across sections (`About` services, `TechnicalExpertise` groups, `FeaturedProject` cards, `Contact` cards) share the same hover treatment: `border-slate-200`, `hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 ease-out`. Keep new cards consistent with this rather than inventing a new hover style.

**Images**: static assets (client logos for `FeaturedProject`) live in `public/` and are referenced by root-relative path (`/Genova.png`, etc.), rendered via `next/image` with `fill`.
