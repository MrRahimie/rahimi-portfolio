# Muhammad Rahimi — Portfolio

A modern, animated, fully-static personal portfolio built with **Next.js (App Router) + Tailwind CSS + Framer Motion + TypeScript**. Designed in a warm pastel palette and ready to deploy to Vercel out of the box.

---

## Tech stack

- **Next.js 14** (App Router, React Server Components)
- **TypeScript** (strict)
- **Tailwind CSS** with custom warm-pastel design tokens
- **Framer Motion** for scroll, stagger, and hover animations
- **react-icons** for skill / social icons
- **No backend** — fully stateless, static-friendly

---

## Project structure

```
app/
├── components/        # Reusable UI primitives
│   ├── Navbar.tsx           Sticky glass navbar with active section highlight
│   ├── Footer.tsx           Minimal footer with socials
│   ├── SectionWrapper.tsx   Animated section container (fade-in on scroll)
│   └── AnimatedText.tsx     Word/char staggered text reveal
├── sections/          # One file per page section
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
├── data/
│   └── resumeData.ts        Single source of truth — edit your content here
├── styles/
│   └── globals.css          Tailwind base + design system utilities
├── layout.tsx
└── page.tsx                 Composes all sections
public/
└── images/                  Drop your photos here (see public/images/README.md)
tailwind.config.ts
next.config.mjs
```

---

## Getting started

```bash
# 1. install dependencies
npm install

# 2. run the dev server
npm run dev
# open http://localhost:3000

# 3. build for production
npm run build
npm run start
```

> Requires Node 18.17+ (Next.js 14 minimum).

---

## Customising the content

**Almost everything you'll want to change lives in [`app/data/resumeData.ts`](app/data/resumeData.ts).** Edit it and the UI updates everywhere.

- `personalInfo` — name, role, tagline, email, phone, socials, image paths
- `aboutMe` — bio paragraphs and the four small fact cards
- `experiences` — timeline entries (role, company, duration, bullets, tags)
- `projects` — cards (image, title, subtitle, description, stack, links)
- `skillGroups` — grouped skills with icons (icons come from `react-icons`)
- `achievements` — small bullet list shown in About
- `navLinks` — what shows in the navbar

### Replacing images

Drop files into `public/images/...` using the paths in [`public/images/README.md`](public/images/README.md). Missing images degrade gracefully — the section will show a soft placeholder instead of breaking.

### Changing the colour palette

Open [`tailwind.config.ts`](tailwind.config.ts) and tweak the `colors` block. The defaults are:

| Token | Hex | Usage |
| --- | --- | --- |
| `cream` | `#FFF7F1` | Page background |
| `coral` | `#FFB5A7` | Primary accent |
| `peach` | `#FCD5CE` | Secondary accent |
| `sky` | `#BDE0FE` | Cool accent |
| `ink` | `#4A4A4A` | Body text |
| `mocha` | `#7A5C4F` | Eyebrow / muted text |

CSS-level helpers (gradient text, noise overlay, pretty scrollbar) live in [`app/styles/globals.css`](app/styles/globals.css).

---

## Deploying to Vercel

The repo is ready for one-click Vercel deploys.

1. Push the project to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset will auto-detect as **Next.js** — no env vars needed.
4. Click **Deploy**. That's it.

Or via CLI:

```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

Because there's no backend or database, this site can also be exported as a fully static bundle if you ever want to host it on Netlify, GitHub Pages, etc. — just add `output: "export"` to `next.config.mjs` and run `npm run build`.

---

## Accessibility & performance notes

- Honours `prefers-reduced-motion` — animations disable themselves for users who request reduced motion.
- All section anchors have `scroll-mt-24` so deep links don't hide behind the sticky navbar.
- Images use `next/image` for automatic responsive sizing and lazy loading.
- Mobile nav is keyboard-accessible (`aria-expanded`, focus styles on all interactive elements).

---

## License

Personal portfolio — feel free to fork and adapt for your own use. Replace the content in `app/data/resumeData.ts` and the photos in `public/images/` and you're good to go.
