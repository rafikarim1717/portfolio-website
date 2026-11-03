# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Rafi's freelance web developer portfolio/marketing site (target: local businesses / UMKM in Indonesia), built with Next.js App Router. It's mostly a one-pager — the home route (`/`) is a fixed stack of `<section>` components — plus a dynamic case-study route for each project (`/projects/[slug]`). In-page navigation uses anchor-link scrolling (`#home`, `#about`, etc.), not client-side routing between sections.

The site is **bilingual (Bahasa Indonesia default + English)** with a client-side toggle — see Language (i18n) below. Indonesian copy uses a casual "gue/lo" voice.

## Commands

```bash
npm run dev     # start dev server (localhost:3000)
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint (flat config via eslint-config-next)
```

There is no test setup in this repo (no test runner, no test files).

## Stack

Next.js 16 (App Router), React 19, Tailwind CSS v4 (CSS-first config via `@theme inline` in `globals.css`, not `tailwind.config.js` — that file only configures `content` globs and the `container` breakpoints/centering). `lucide-react` for UI icons; brand/tool logos are inline Simple Icons SVG paths. No state management library (only `LanguageContext`), no data fetching layer, no CMS — everything is static/hardcoded in component files or in `src/data/projects.js`.

## Routes

| Route | File | Purpose |
|---|---|---|
| `/` | `src/app/page.js` | The one-pager — all sections stacked in order. |
| `/projects/[slug]` | `src/app/projects/[slug]/page.js` + `ProjectDetailClient.jsx` | Case-study page. `page.js` is a server component (`generateStaticParams`, `generateMetadata`, `notFound()` for unknown slugs) that renders the `"use client"` `ProjectDetailClient` (needs `useLanguage`). |
| `/robots.txt` | `src/app/robots.js` | Generated metadata route. |
| `/sitemap.xml` | `src/app/sitemap.js` | Generated metadata route — includes `/` plus one entry per project slug. |

## Page composition (`/`)

`src/app/page.js` stacks these in order, plus floating `BackToTop` and `FloatingWhatsApp` buttons:

```
Navbar → Hero → About → TechnicalExpertise (Tools) → FeaturedProject → HowIWork → Pricing → Testimonials → Contact → Footer
```

Rationale for the order (agreed with Rafi): Tools sits right after About as supporting credibility, so it doesn't interrupt the decision flow at the bottom. **Pricing → Testimonials → Contact** is deliberate: testimonials answer "is it worth the price?" right before the WhatsApp CTA. Don't reshuffle without checking.

Each section is self-contained: its copy lives as a hardcoded data object/array at the top of the component file, usually shaped `{ id: ..., en: ... }`. To change site copy, edit the data in that component (both languages).

### Navbar — `Navbar.jsx`
- Content: `navLinks` (Beranda, Tentang, Tools, Proyek, Harga — same order as the page).
- Sticky header with a shadow after scrolling, language toggle (ID/EN), WhatsApp CTA, mobile menu.
- Active-link state is a scroll-spy (`IntersectionObserver` over section ids). On `/projects/*` "Proyek" is always active.
- Links point to `/#id` (not bare `#id`) so they still work from `/projects/[slug]`.
- Blog and Contact nav entries exist in code but are commented out.

### Hero — `id="home"` — `Hero.jsx`
- Content: `HERO_DATA` (title with last N words highlighted, description, stats row: 24+ Proyek / 5+ Tahun / Enterprise), `role`, `cta`.
- Single primary CTA (WhatsApp).
- A `trustedBy` client-logo array (assets in `public/logo/`) is still defined but **not rendered** — the marquee is deliberately disabled. Leave it unless asked.

### About — `id="about"` — `About.jsx`
- Content: `aboutIntro`, `services`.
- Intro copy + 3 service cards: Website Bisnis, Toko Online, Sistem Custom.

### Tools — `id="tools"` — `TechnicalExpertise.jsx`
- Content: `tools` — one flat array of `{ name, path }` (Simple Icons SVG path).
- Heading "Tools yang Gue Pakai" + a single centered wrap of icon pills. No category grouping (removed on purpose).

### Featured Projects — `id="projects"` — `FeaturedProject.jsx`
- Content: `projects` from `src/data/projects.js`.
- Shows 3 projects at a time with a "Load More" button (`visibleCount` state, +3 per click).
- Each card's title and CTA link to `/projects/[slug]`.

### How I Work — `id="process"` — `HowIWork.jsx`
- Content: `steps` — 4 steps written from the client's point of view: Ngobrol → Desain → Bikin & Revisi → Online & Support.
- Not in `navLinks`.

### Pricing — `id="pricing"` — `Pricing.jsx`
- Content: `packages` (Landing Page / Company Profile, Toko Online, Sistem Custom — the middle one is the featured "Paling dicari" card), `addons` (Domain & Hosting, Maintenance).
- Each package CTA opens WhatsApp with a prefilled message (`waHref(text)`).

### Testimonials — `id="testimonials"` — `Testimonials.jsx`
- Content: derived from `projects[].testimonial` — no separate data array, just a filter for projects that have a `testimonial` field.
- Not in `navLinks`.

### Contact — `id="contact"` — `Contact.jsx`
- Content: `contactData`.
- `CtaCard` (WhatsApp CTA on a `surface-dark` block) on top, then a 3-card info grid: Location, Email, Availability.
- Not in `navLinks`.

### Footer — `Footer.jsx`
- Content: `FOOTER_DATA`, `COPYRIGHT_TEXT`.
- Copyright + socials (GitHub/LinkedIn/Instagram) + `AvailabilityBadge`. No top border. Mobile keeps `pb-24` so content isn't covered by the floating buttons.

### Floating buttons
- `FloatingWhatsApp.jsx` — fixed bottom-right WhatsApp button (server component).
- `BackToTop.jsx` — appears after scrolling, positioned just above the WhatsApp button.

### Not wired in — `StatsSection.jsx`
Stat cards, fully built but intentionally **not** imported into `page.js`. Don't wire it in without checking first.

## Language (i18n)

- `src/context/LanguageContext.jsx` provides `{ lang, toggleLang }` via `useLanguage()`; `LanguageProvider` wraps the app in `layout.js`.
- Default `"id"`; the choice is persisted in `localStorage` (`lang`) and applied after mount (server always renders `id`).
- Any component that reads `lang` must be `"use client"` — which is why most sections are client components.
- Metadata (layout + per-project) is locked to Indonesian; it does not follow the toggle.
- When editing copy, keep the `id` and `en` versions in sync.

## WhatsApp & analytics

- All CTAs go to `wa.me/6287879206730` with a prefilled `?text=` message. The number is duplicated in several files (Hero, Navbar, CtaCard, FloatingWhatsApp, Pricing, ProjectDetailClient).
- Umami analytics is loaded in `layout.js` (`next/script`, `afterInteractive`).
- Every WhatsApp link carries `data-umami-event="wa-click"` plus `data-umami-event-source` (`hero`, `navbar`, `floating`, `cta`, `pricing-<key>`, `case-study-<slug>`). **Add both attributes to any new WhatsApp button.**

## Project data (`src/data/projects.js`)

Single source of truth for the `FeaturedProject` grid, each `/projects/[slug]` page, the sitemap and the Testimonials section. Currently 6 projects (Seven Retail, Ikonoa, Wisma 52, Genova, Multi Sarana Pelindung, Aura Clinic). Each entry:

```js
{
  id, slug, title,
  description: { id, en },
  image,                                 // null → gradient-initials fallback (see Images)
  category, tags, link,                  // used on the card grid
  industry: { id, en }, location, techStack,   // case-study meta row
  caseStudy: {                           // case-study page: Masalahnya / Yang gue kerjain
    problemTitle: { id, en }, problem: { id, en },
    solutionTitle: { id, en }, points: { id: [], en: [] }
  },
  testimonial: {                         // optional — presence drives the Testimonials section
    quote: { id, en }, name, role: { id, en }, rating, clientLogo
  },
  status: "inactive",                    // optional — swaps the "visit live" CTA for a disabled "site no longer live" state
}
```

The case-study page also shows prev/next "Proyek Lainnya" links (wrapping around the array) and its own WhatsApp CTA.

## Client components

Most components are `"use client"` because they read `useLanguage()`. The exceptions (plain server components) are `Container`, `FloatingWhatsApp`, `StatsSection`, and `src/app/projects/[slug]/page.js`. Components with real local state/effects: `Navbar` (menu, scroll shadow, scroll-spy), `FeaturedProject` (`visibleCount`), `BackToTop` (scroll listener), `LanguageContext`.

## Layout primitive

`Container.jsx` is the shared horizontal-padding/max-width wrapper (`container mx-auto px-4 lg:px-8 py-3 xl:px-24`) used by every section and by the project detail page — reuse it instead of duplicating width/padding classes.

## Fonts

Loaded in `src/app/layout.js` via `next/font/google`: **Inter** (400–600) → `--font-inter`, **Plus Jakarta Sans** (400–800) → `--font-jakarta`. In `globals.css` (`@theme inline`): `--font-body` = Inter, `--font-title` = Plus Jakarta Sans. Use the `font-body` / `font-title` utilities, never raw `font-[...]`.

## Color system (design tokens)

All colors are tokens defined once in `src/app/globals.css`: raw values on `:root`, exposed to Tailwind via `@theme inline` as `--color-*`. **To change the brand palette, edit the `:root` values only.** Never hardcode hex or `blue-*`/`teal-*` in components. Current brand is teal (`primary` = `#0f766e`).

| Token (class suffix) | Use |
|---|---|
| `primary` / `primary-hover` | Solid CTAs, links, accent text, icon color, card-hover glow (`hover:border-primary/50 hover:shadow-primary/10`) |
| `primary-light` | Accent on top of `surface-dark` (step numbers, focus rings on dark) |
| `tint` / `tint-strong` | Low-weight fills: icon chips, badges, pills, tag chips |
| `ink` | Headings and body text |
| `muted` | Secondary/paragraph text |
| `line` | Borders (slate-200 is also still used for card borders) |
| `surface` / `surface-soft` / `surface-dark` | Section backgrounds, see rhythm below (`surface` is off-white `#fbfbf9`) |
| `on-dark-muted` | Secondary text on `surface-dark` |

Section rhythm on `/` (alternates cleanly — keep it that way when adding/moving sections):

```
Hero (surface) → About (soft) → Tools (surface) → Projects (soft) → How I Work (dark)
→ Pricing (soft) → Testimonials (surface) → Contact (soft, with CtaCard as a dark block) → Footer (surface)
```

Section H2s share one scale: `font-title font-bold text-3xl lg:text-4xl tracking-tight`. Page background is `surface` on `<main>`. There's no dark mode.

## Recurring visual pattern (card hover)

Most content cards share the same hover treatment:

```
border-slate-200
hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10
hover:-translate-y-1.5 transition-all duration-300 ease-out
```

Cards on `surface-dark` (How I Work) use the dark variant: `bg-white/5 border-white/10 hover:border-primary-light/50`. Keep new cards consistent with these rather than inventing a new hover style.

## Images

Static assets live in `public/`: client logos in `public/logo/` (used by testimonials' `clientLogo`), project covers in `public/portfolio/`. Referenced by root-relative path and rendered via `next/image` with `fill`. When a project's `image` is `null`, both the grid card and the case-study cover fall back to a `getInitials(title)` string on a `primary → primary-hover` gradient.

### Project cover format (standar)

Semua `image` di `src/data/projects.js` pakai format cover yang sama (`public/portfolio/cover-<slug>.png`):

- Kanvas **1600×767**, latar `#f1f4f2` (= `surface-soft`).
- **Frame browser** lebar 1408px, jarak atas 64px, nempel ke bawah: bar 48px (titik merah/kuning/hijau + URL domain di tengah), sudut atas rounded 16px, bayangan tipis.
- Isi frame = screenshot hero desktop di viewport **1440px** (tanpa kursor, tombol WA melayang, atau popup).
- **HP** versi mobile (viewport 390px) lebar 230px, bezel hitam rounded, ditaruh kanan-atas di dalam frame (70px dari kanan, 150px dari atas frame). Skip HP kalau situsnya udah nggak live (contoh: Genova).
- Gambar dirender pakai `object-cover object-top` di kartu & halaman detail, jadi yang kepotong selalu bagian bawah.

## SEO/metadata

`src/app/layout.js` sets `metadataBase`, title, description, keywords, Open Graph (`locale: id_ID`), Twitter card, `robots`, manifest and icons off a `SITE_URL` constant (currently the Vercel preview domain, `https://portfolio-website-beta-kohl.vercel.app` — update it if a custom domain is attached; the same constant is duplicated in `src/app/projects/[slug]/page.js`, `robots.js`, and `sitemap.js`). `<html lang="id">`. Each `/projects/[slug]` page generates its own metadata (title `"<Project> — Studi Kasus"`, Indonesian description, canonical, Open Graph). There's no dedicated 1200×630 OG image yet.

## Known intentional exclusions

Don't "fix" these without checking with the user first — they're deliberate, not oversights:
- `StatsSection.jsx` — built but not imported into `page.js`.
- `Hero.jsx`'s `trustedBy` logo marquee — data kept, not rendered.
- `Navbar.jsx`'s Blog and Contact nav links — commented out in `navLinks`.
