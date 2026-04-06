# Ashutosh Suryawanshi — AI Engineer Portfolio

Production-grade Next.js 14 portfolio with App Router, Framer Motion animations, dark/light theme, and a live GitHub API integration.

## Tech Stack
- **Next.js 14** (App Router) — proper page-based routing, no more routing issues
- **TypeScript** — fully typed
- **Tailwind CSS** — utility-first styling with custom design tokens
- **Framer Motion** — page transitions, stagger animations, hover effects
- **next-themes** — persistent dark/light mode with no flash

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deploys.

## Structure

```
app/
  layout.tsx       ← Root layout (ThemeProvider, Navbar, Footer)
  page.tsx         ← Home page
  projects/page.tsx
  skills/page.tsx
  resume/page.tsx
  contact/page.tsx

components/
  Navbar.tsx       ← Responsive nav + theme toggle
  Animate.tsx      ← Reusable Framer Motion wrappers
  PageHero.tsx     ← Shared page header component

lib/
  data.ts          ← ALL content in one file — edit here
```

## Customising Content

All content lives in `lib/data.ts`. Edit:
- `PERSON` — name, links, tagline
- `PROJECTS` — add/remove projects
- `SKILLS` — update skill categories
- `CERTIFICATIONS` — update years
- `EXPERIENCE` — update internship bullets

## Key Fixes Applied

1. **Routing** — App Router `page.tsx` files for each route; no more resume overriding all pages
2. **Theme** — `next-themes` with `storageKey` persistence; no hydration flash
3. **Responsiveness** — mobile-first grid layouts that stack cleanly on small screens
4. **Animation** — Framer Motion `staggerChildren` on lists, `AnimatePresence` on tab switches
5. **Projects** — each card has title, description, stack chips, metrics, GitHub + live demo
6. **Skills** — 8 categories with expert/proficient/familiar visual hierarchy
7. **Resume** — certifications with updated 2026 years, clean two-column layout
