# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Rafi's freelance full-stack developer portfolio/marketing site, built with Next.js App Router. It's mostly a one-pager — the home route (`/`) is a fixed stack of `<section>` components — plus a dynamic case-study route for each featured project (`/projects/[slug]`). In-page navigation uses anchor-link scrolling (`#home`, `#about`, etc.), not client-side routing between sections.

## Commands

```bash
npm run dev     # start dev server (localhost:3000)
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint (flat config via eslint-config-next)
```

There is no test setup in this repo (no test runner, no test files).

## Stack

Next.js 16 (App Router), React 19, Tailwind CSS v4 (CSS-first config via `@theme inline` in `globals.css`, not `tailwind.config.js` — that file only configures `content` globs and the `container` breakpoints/centering). `lucide-react` for icons. No state management library, no data fetching layer, no CMS — everything is static/hardcoded in component files or in `src/data/projects.js`.

## Routes

| Route | File | Purpose |
|---|---|---|
| `/` | `src/app/page.js` | The one-pager — all sections stacked in order. |
| `/projects/[slug]` | `src/app/projects/[slug]/page.js` | Case-study detail page for one project. Statically generated (`generateStaticParams`) from `src/data/projects.js`; 404s via `notFound()` if the slug isn't found. |
| `/robots.txt` | `src/app/robots.js` | Generated metadata route. |
| `/sitemap.xml` | `src/app/sitemap.js` | Generated metadata route — includes `/` plus one entry per project slug. |

## Page composition (`/`)

`src/app/page.js` stacks these in order, plus a floating `BackToTop` button:

```
Navbar → Hero → About → TechnicalExpertise → HowIWork → FeaturedProject → Testimonials → Contact → Footer
```

Each section is self-contained: its copy/content lives as a hardcoded data object/array at the top of the component file. To change site copy, edit the data in that component — there is no CMS.

### Navbar — `Navbar.jsx`
- Content: `navLinks` array.
- Sticky header, `"use client"`. Active-link state is a scroll-spy (`IntersectionObserver` over section ids), not just click state. Mobile menu toggle.
- Links point to `/#id` (not bare `#id`) so they still work from `/projects/[slug]`.
- Blog and Contact nav entries exist in code but are commented out.

### Hero — `id="home"` — `Hero.jsx`
- Content: `HERO_DATA`.
- Single primary CTA (WhatsApp).
- The "Trusted By" client-logo marquee (`HERO_DATA.trustedBy`, assets in `public/logo/`) is fully built but **deliberately commented out** — leave disabled unless asked to re-enable.

### About — `id="about"` — `About.jsx`
- Content: `aboutIntro`, `services`.
- Intro copy + 4 service cards: Business Website, E-Commerce, Custom Web, AI Integration.

### Technical Expertise — `id="skills"` — `TechnicalExpertise.jsx`
- Content: `expertiseGroups`, `services`.
- 4 skill-group cards as pill lists: Frontend, Backend & Systems, AI Development, Tools & Workflow.
- A "Specialized Services" sub-section exists in code but is commented out.

### How I Work — `id="process"` — `HowIWork.jsx`
- Content: `steps`.
- 4-step process cards: Understand → Design → Test & Iterate → Deliver & Support.
- Not in `navLinks` — reachable only by scrolling.

### Featured Projects — `id="projects"` — `FeaturedProject.jsx`
- Content: `projects` array from `src/data/projects.js`.
- `"use client"`. Shows 3 projects at a time with a "Load More" button (`visibleCount` state, +3 per click).
- Each card's title and CTA link to `/projects/[slug]`.

### Testimonials — `id="testimonials"` — `Testimonials.jsx`
- Content: derived from `projects[].testimonial` in `src/data/projects.js` — no separate data array, just a filter for projects that have a `testimonial` field.
- Not in `navLinks`.

### Contact — `id="contact"` — `Contact.jsx`
- Content: `contactData`.
- Renders `CtaCard` (WhatsApp CTA) at the top, then a 3-card info grid: Location, Email, Availability.
- Not in `navLinks`.

### Footer — `Footer.jsx`
- Content: `FOOTER_DATA`.
- Socials (GitHub/LinkedIn/Instagram) + `AvailabilityBadge`.

### Not wired in — `StatsSection.jsx`
Stat cards (Projects Completed / Happy Clients / Years Experience), fully built but intentionally **not** imported into `page.js`. A deliberate exclusion, not an oversight — don't wire it in without checking first.

## Project data (`src/data/projects.js`)

Single source of truth for both the `FeaturedProject` grid on `/` and each `/projects/[slug]` case-study page. Each entry:

```js
{
  id, slug, title, description, image,   // image: null → gradient-initials fallback (see Images below)
  category, tags, link,                  // used on the card grid
  industry, location, techStack,         // used on the case-study meta row
  challenge, solution,                   // used on the case-study "Challenge/Solution" cards
  testimonial: { quote, name, role },    // optional — presence drives the Testimonials section
  status: "inactive",                    // optional — swaps the case-study CTA for a disabled "Site No Longer Live" state
}
```

To add/remove/edit a project, edit this array only — it's picked up automatically by the grid, the case-study route (via `generateStaticParams`), the sitemap, and (if a `testimonial` is present) the testimonials section.

## Client components

Only components with interactivity are `"use client"`:
- **`Navbar`** — mobile menu toggle; active-link state driven by `IntersectionObserver` scroll-spy over section ids, not just click state.
- **`FeaturedProject`** — show-more pagination via `visibleCount` state.
- **`BackToTop`** — scroll-listener visibility.
- **`Footer`** — marked `"use client"` (renders `AvailabilityBadge`, which is itself static — no state of its own currently).

Everything else, including the `/projects/[slug]` page, is a plain server component (static JSX, no hooks).

## Layout primitive

`Container.jsx` is the shared horizontal-padding/max-width wrapper (`container mx-auto px-4 lg:px-8 py-3 xl:px-24`) used by every section and by the project detail page — reuse it instead of duplicating width/padding classes.

## Fonts

Loaded in `src/app/layout.js` via `next/font/google`: **Plus Jakarta Sans** (400-800) -> `--font-jakarta`. In `globals.css` (`@theme inline`) both `--font-body` and `--font-title` map to it, so the `font-body` / `font-title` utilities still work everywhere: one typeface site-wide. Don't reach for raw `font-[...]`.

## Color system (design tokens)

All colors are tokens defined once in `src/app/globals.css`: raw values on `:root`, exposed to Tailwind via `@theme inline` as `--color-*`. **To change the brand palette, edit the `:root` values only.** Never hardcode hex or `blue-*` in components.

| Token (class suffix) | Use |
|---|---|
| `primary` / `primary-hover` | Solid CTAs, links, accent text, icon color, card-hover glow (`hover:border-primary/50 hover:shadow-primary/10`) |
| `primary-light` | Accent on top of `surface-dark` (step numbers, focus rings on dark) |
| `tint` / `tint-strong` | Low-weight fills: icon chips, badges, pills, tag chips |
| `ink` | Headings and body text |
| `muted` | Secondary/paragraph text |
| `line` | Borders (slate-200 is also still used for card borders) |
| `surface` / `surface-soft` / `surface-dark` | Section backgrounds, see rhythm below |
| `on-dark-muted` | Secondary text on `surface-dark` |

Section rhythm on `/`: Hero (surface) -> About (`surface-soft`) -> Skills (surface) -> Projects (surface) -> How I Work (`surface-dark`) -> Testimonials (`surface-soft`) -> Contact (surface, with `CtaCard` as a `surface-dark` block). Section H2s share one scale: `font-title font-bold text-3xl lg:text-4xl tracking-tight`.

Page background is plain `surface` (white) on `body`. There's no dark mode implementation.

## Recurring visual pattern (card hover)

Most content cards share the same hover treatment:

```
border-slate-200
hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10
hover:-translate-y-1.5 transition-all duration-300 ease-out
```

Cards on `surface-dark` (How I Work) use the dark variant: `bg-white/5 border-white/10 hover:border-primary-light/50`. Keep new cards consistent with these rather than inventing a new hover style.

## Images

Static assets (client logos for `Hero`'s marquee, project cover images for `FeaturedProject`/case-study pages) live in `public/` (`public/logo/`, `public/portfolio/`) and are referenced by root-relative path, rendered via `next/image` with `fill`. When a project's `image` is `null`, both the grid card and the case-study cover fall back to the same pattern: a `getInitials(title)` string on a `primary -> primary-hover` gradient background (see Color system).

## SEO/metadata

`src/app/layout.js` sets `metadataBase`, Open Graph, Twitter card, `robots`, and icons off a `SITE_URL` constant (currently the Vercel preview domain, `https://portfolio-website-beta-kohl.vercel.app` — update this if a custom domain is ever attached; note the same constant is currently duplicated in `src/app/projects/[slug]/page.js`, `robots.js`, and `sitemap.js` rather than shared from one place). `src/app/robots.js` and `src/app/sitemap.js` are Next.js App Router metadata routes generated from that same URL, and the sitemap includes every project slug. Each `/projects/[slug]` page also generates its own per-project metadata (title, description, canonical, Open Graph) via `generateMetadata`. There's no dedicated 1200×630 OG image yet — Open Graph currently relies on title/description only.

## Known intentional exclusions

Don't "fix" these without checking with the user first — they're deliberate, not oversights:
- `StatsSection.jsx` — built but not imported into `page.js`.
- `Hero.jsx`'s "Trusted By" logo marquee — built but commented out.
- `Navbar.jsx`'s Blog and Contact nav links — commented out in `navLinks`.
- `TechnicalExpertise.jsx`'s "Specialized Services" sub-section — built but commented out.
