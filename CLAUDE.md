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

Loaded in `src/app/layout.js` via `next/font/google`, exposed as CSS variables on `<body>`:
- `Inter` → `--font-inter` → mapped to `--font-body` → Tailwind utility `font-body` (default body/paragraph text)
- `Poppins` → `--font-poppins` → mapped to `--font-title` → Tailwind utility `font-title` (headings, logo, emphasis, and — a bit inconsistently in places like `Hero`'s description — some body copy too)

The mapping happens in `globals.css` under `@theme inline`. To use a font, apply `font-body` or `font-title` — don't reach for raw `font-[Poppins]` etc.

## Color system

No Tailwind color tokens are defined (the `colors` block in `tailwind.config.js` is commented out) — colors are hardcoded inline as arbitrary values throughout components. There are two blues in the system, each reserved for a different weight of UI, and they should not be swapped:

- **Tint blue** — Tailwind's stock `blue-50`/`blue-100`/`blue-500`/`blue-600` (light Tailwind "royal blue" family). Used for anything low-weight/decorative: icon boxes (`bg-blue-50 text-blue-600`), badges (role badge, `AvailabilityBadge`), skill pills, tag chips, section background tints (`bg-blue-600/5`), and the standard card-hover glow (`hover:border-blue-500/50 hover:shadow-blue-500/10`, see below). This is the "soft" blue — small area, colored text/icon/border on a light background.
- **Solid blue** — the custom hex `#4251EB` (base) with `#3845C8` as its hover/darker shade. Used exclusively for solid-fill elements where blue covers the whole shape with white text on top: primary CTA buttons (Hero, `CtaCard`, `FeaturedProject` Load More, case-study "Visit Live Website"), the `FeaturedProject`/case-study category tag background gradient (initials fallback), and hover-fill states (`BackToTop`'s hover).
- Rule of thumb: if blue is the *text/icon/border* color on a light background → tint (`blue-600`). If blue *is* the background and something else sits on top of it → solid (`#4251EB` / `#3845C8` hover).
- Body text: `#333` / `#333333` for headings, `#6c757d` for secondary/paragraph text.
- Page background: a subtle top-to-bottom gradient (`--background` in `globals.css`, `linear-gradient(to top, #cfd9df, #e2ebf0)`), `background-attachment: fixed`, applied globally on `body` — individual `<main>` wrappers set `bg-white` on top of it per-page.

There's no dark mode implementation.

## Recurring visual pattern (card hover)

Most content cards across sections and the case-study page (`About` services, `TechnicalExpertise` groups, `HowIWork` steps, `FeaturedProject` cards, `Testimonials` cards, `Contact` info cards, case-study Challenge/Solution cards) share the same hover treatment:

```
border-slate-200
hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10
hover:-translate-y-1.5 transition-all duration-300 ease-out
```

Keep new cards consistent with this rather than inventing a new hover style.

## Images

Static assets (client logos for `Hero`'s marquee, project cover images for `FeaturedProject`/case-study pages) live in `public/` (`public/logo/`, `public/portfolio/`) and are referenced by root-relative path, rendered via `next/image` with `fill`. When a project's `image` is `null`, both the grid card and the case-study cover fall back to the same pattern: a `getInitials(title)` string on a `#4251EB → #3845C8` gradient background (see Color system).

## SEO/metadata

`src/app/layout.js` sets `metadataBase`, Open Graph, Twitter card, `robots`, and icons off a `SITE_URL` constant (currently the Vercel preview domain, `https://portfolio-website-beta-kohl.vercel.app` — update this if a custom domain is ever attached; note the same constant is currently duplicated in `src/app/projects/[slug]/page.js`, `robots.js`, and `sitemap.js` rather than shared from one place). `src/app/robots.js` and `src/app/sitemap.js` are Next.js App Router metadata routes generated from that same URL, and the sitemap includes every project slug. Each `/projects/[slug]` page also generates its own per-project metadata (title, description, canonical, Open Graph) via `generateMetadata`. There's no dedicated 1200×630 OG image yet — Open Graph currently relies on title/description only.

## Known intentional exclusions

Don't "fix" these without checking with the user first — they're deliberate, not oversights:
- `StatsSection.jsx` — built but not imported into `page.js`.
- `Hero.jsx`'s "Trusted By" logo marquee — built but commented out.
- `Navbar.jsx`'s Blog and Contact nav links — commented out in `navLinks`.
- `TechnicalExpertise.jsx`'s "Specialized Services" sub-section — built but commented out.
