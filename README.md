# ZeroSkrap — Website

Marketing site for **ZeroSkrap**, a scrap buying, recycling and waste management
company in Beau Climat, La Flora, Mauritius.

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        Poppins, metadata, Navbar + Footer + floating CTAs
  page.tsx          Homepage section order
  globals.css       Design tokens (@theme) + base styles
  icon.svg          Favicon (placeholder)

components/
  layout/           Navbar, MobileNav, Footer, FloatingActions
  sections/         Hero, PickupForm, TrustBanner, Process
  ui/               Container, Section, Button, Card, Logo,
                    SectionHeading, Icon, BrandIcons

lib/
  constants.ts      Business details, nav links, WhatsApp helpers
  data.ts           Section content (trust points, steps, materials…)
  assets.ts         Image path registry
  utils.ts          cn() class helper
```

Everything is a Server Component except `MobileNav` and `PickupForm`, which
need interaction.

## Design tokens

All colour, radius, shadow and easing values live in the `@theme` block of
`app/globals.css` and map straight onto Tailwind utilities:

| Token                     | Utility            | Value              |
| ------------------------- | ------------------ | ------------------ |
| `--color-brand-500`       | `bg-brand-500`     | `#22C55E`          |
| `--color-brand-700`       | `bg-brand-700`     | `#15803D`          |
| `--color-brand-100`       | `bg-brand-100`     | `#DCFCE7`          |
| `--color-canvas`          | `bg-canvas`        | `#F8FAF9`          |
| `--color-ink` / `--color-muted` | `text-ink` / `text-muted` | `#111827` / `#6B7280` |
| `--radius-btn` / `-card` / `-media` | `rounded-btn` / `-card` / `-media` | 16 / 24 / 32px |
| `--shadow-soft`           | `shadow-soft`      | `0 10px 30px rgb(0 0 0 / .06)` |

Layout rhythm comes from two primitives — `Container` (1200px max width,
24/48/80px gutters) and `Section` (vertical spacing).

## Replacing the placeholder assets

Every image is registered in **`lib/assets.ts`**. Drop the real file into
`public/` and change the path there — no component or layout edits needed.

| Asset             | Current placeholder                    | Ratio |
| ----------------- | -------------------------------------- | ----- |
| `heroFloatLeft`   | `public/images/hero/float-left.svg`     | ~5:8  |
| `heroFloatRight`  | `public/images/hero/float-right.svg`    | ~5:8  |
| `trustWeighing`   | `public/images/trust/digital-weighing.svg` | 4:3 |

## Logo and icons

The real mark lives in `public/logo/` as a transparent PNG so it reads on both
the light page and the dark footer:

| File                                | Use                                      |
| ----------------------------------- | ---------------------------------------- |
| `zeroskrap-mark.png` (256px)        | `ASSETS.logoMark` — navbar and footer     |
| `zeroskrap-mark-full.png` (1024px)  | Master copy for print and social          |
| `app/icon.png` (192px)              | Favicon                                   |
| `app/apple-icon.png` (180px)        | iOS touch icon, white background          |

The wordmark next to the mark is live text. If a full lockup image arrives
(mark + wordmark in one file), set `SHOW_WORDMARK = false` in
`components/ui/Logo.tsx` and widen the `size` prop.

`next.config.ts` enables `dangerouslyAllowSVG` with a sandbox CSP because the
placeholders are SVG. It can be removed once every asset is a raster image.

## Business details

Phone numbers, WhatsApp number, email, address and opening hours are all in
`lib/constants.ts`. Entries marked `PLACEHOLDER` still need real values:
the secondary phone number, the email address and `SITE.url`.

## Phase status

All three phases are complete. The site is a marketing homepage plus a
`/contact` booking page, with no backend — every conversion path leads to
WhatsApp or a phone call.

## Homepage section order

| # | Section | Component | Anchor |
| - | ------- | --------- | ------ |
| 1 | Hero | `sections/Hero` | `#top` |
| 2 | Trust banner | `sections/TrustBanner` | `#about` |
| 3 | Three-step pickup flow | `sections/Process` | `#how-it-works` |
| 4 | Why choose ZeroSkrap | `sections/WhyChoose` | `#why-zeroskrap` |
| 5 | Materials we buy | `sections/Materials` | `#materials` |
| 6 | Clearance services | `sections/Clearance` | `#services` |
| 7 | Households vs businesses | `sections/Audiences` | `#for-you` |
| 8 | How ZeroSkrap works | `sections/Journey` | `#how-zeroskrap-works` |
| 9 | Sustainability | `sections/Sustainability` | `#sustainability` |
| 10 | Footer | `layout/Footer` | — |

The contact block is no longer part of the homepage. It lives on its own route,
`/contact` (`app/contact/page.tsx` rendering `sections/Contact`), and inherits
the navbar and footer from the root layout. Homepage nav hashes are written as
`/#materials` so they resolve from `/contact` too.

Backgrounds alternate `canvas` / `white` so sections separate without rules.

## WhatsApp integration

Every WhatsApp link is built by `whatsappLink(message?)` in `lib/constants.ts`,
so changing the number is a one-line edit. Entry points: floating button, navbar
CTA, hero (button + phone field), process CTA, materials CTA, clearance CTA,
audience CTAs, sustainability CTA, contact form, contact CTA, footer CTA.

Both forms are frontend-only: they validate, format the entered details into a
message and hand off to WhatsApp. Nothing is stored or POSTed.

## SEO & social

`app/robots.ts`, `app/sitemap.ts`, canonical URL, Open Graph + Twitter metadata,
and LocalBusiness JSON-LD (`lib/schema.ts`).

The link preview card is `public/og-image.jpg` (1200×630, ~130 KB), declared in
`app/layout.tsx` for both Open Graph and Twitter. It is built from the full-size
source in `assets/` — that folder holds unprocessed artwork and is never served.
To change the card, drop a new source image in `assets/` and run:

```bash
node scripts/build-share-image.mjs --source my-artwork.png
```

Keep it under 300 KB — WhatsApp downgrades heavier images to a tiny thumbnail.

**Before deploying, set `SITE.url` in `lib/constants.ts` to the live domain.**
robots, sitemap, canonical and OG URLs all derive from it.

## Adding real material photos

`MATERIALS` in `lib/data.ts` has an optional `image` field per entry. Leave it
out and the card renders its icon on a mint tile; set it and the same square
slot renders the photo with `object-cover`. Nothing else changes:

```ts
{ name: "Copper", slug: "copper", icon: "copper",
  description: "Pipes, coils, bare wire",
  image: "/images/materials/copper.webp" }
```

## Before launch

- [ ] Replace the placeholder logo, illustrations and material photos
- [ ] Set `SITE.url` to the live domain
- [ ] Fill in the real secondary phone number and email in `lib/constants.ts`
- [ ] Confirm opening hours and service coverage wording with the client

## Deployment

Push to a Git remote and import the repo on Vercel — the defaults are correct
(`npm install`, `npm run build`, no environment variables needed).
