# ZeroSkrap Website — Technical Specification

## Technology Stack

The project must be built using:

* **Next.js 15 (App Router)**
* **React 19**
* **TypeScript**
* **Tailwind CSS**
* **Next/Image**
* **Next/Link**

Do **not** use component libraries such as:

* shadcn/ui
* Material UI
* Chakra UI
* Ant Design
* Bootstrap

The UI should be built entirely with **Tailwind CSS utility classes** and custom reusable React components.

---

# Project Goals

The website should be:

* Fast
* Lightweight
* SEO-friendly
* Mobile-first
* Accessible
* Easy to maintain
* Easy to extend later

The codebase should feel like a professionally structured Next.js production project.

---

# Project Structure

Use the Next.js App Router architecture.

Recommended structure:

app/
layout.tsx
page.tsx
globals.css
rates/
page.tsx

components/
layout/
Navbar.tsx
Footer.tsx
sections/
Hero.tsx
TrustBanner.tsx
Process.tsx
Materials.tsx
Services.tsx
Clearance.tsx
BusinessVsHousehold.tsx
Sustainability.tsx
Contact.tsx
ui/
Button.tsx
Section.tsx
Container.tsx
Card.tsx

public/
logo/
images/
materials/
sections/
icons/

lib/
constants.ts
data.ts

---

# Routing

Required pages:

/                    Homepage

/rates               Scrap rates page

Optional later:

/about

/contact

/services

For now, keep the project focused on the homepage and rates page.

---

# Styling System

Use Tailwind CSS only.

Do not write large custom CSS files.

Use:

* Tailwind spacing
* Tailwind typography
* Tailwind colors
* Tailwind responsive utilities

Create reusable utility patterns through React components rather than custom CSS classes.

---

# Responsive Strategy

Design mobile-first.

Breakpoints:

sm

md

lg

xl

2xl

All sections must work naturally on:

* Mobile phones
* Tablets
* Laptops
* Desktop monitors

No horizontal scrolling.

---

# Image Handling

All images should use **next/image**.

Images will be placed in:

public/images/

Use optimized responsive sizing.

Do not use unoptimized img tags unless absolutely necessary.

---

# Performance

Target:

* Lighthouse 90+
* Fast First Contentful Paint
* Fast Largest Contentful Paint
* Minimal JavaScript

Guidelines:

* Use server components by default
* Use client components only when interaction is required
* Lazy-load below-the-fold images
* Avoid unnecessary animation libraries

---

# Animations

Use CSS transitions and Tailwind animations where possible.

Only use Framer Motion if explicitly required later.

Preferred interactions:

* Hover lift
* Fade in
* Slide up
* Scale on hover
* Smooth scrolling

Keep animations subtle.

---

# Component Architecture

Each major section should be an isolated React component.

Example:

Hero

TrustBanner

Process

Materials

Services

Clearance

BusinessVsHousehold

Sustainability

Contact

Footer

Components should receive data through props whenever reasonable.

---

# Reusability

Create reusable primitives:

## Container

Handles max-width and horizontal padding.

## Section

Handles vertical spacing.

## Button

Primary and secondary variants.

## Card

Used across materials, services, trust, and rates.

---

# Data Strategy

Do not hardcode repeated content inside components.

Create structured data files.

Example:

materials = [
{
name: "Iron Scrap",
slug: "iron",
image: "/materials/iron.webp",
category: "metal"
}
]

This will make the rates page and materials section easy to maintain.

---

# Rates Page

The rates page should be inspired by ScrapUncle.

Features:

* Search input
* Category filter
* Material cards
* Price per kg
* Responsive grid
* Clean card layout

Initially use placeholder pricing data.

The page should be easy to update later.

---

# Contact Strategy

Primary contact method:

**WhatsApp**

Use a reusable helper:

https://wa.me/23057962874

Secondary:

tel:+23059297307

The contact section should support:

* Name
* Phone
* Material type
* Quantity
* Pickup location

The form can remain frontend-only for now.

---

# SEO

Use Next.js metadata.

Homepage metadata:

* Title
* Description
* Keywords
* Open Graph
* Twitter tags

Use semantic HTML:

header

main

section

article

footer

Headings should follow:

H1

H2

H3

Proper hierarchy throughout.

---

# Accessibility

Requirements:

* Keyboard navigable
* Visible focus states
* Proper button semantics
* Form labels
* Alt text for images
* Sufficient color contrast

---

# Deployment

Target deployment:

**Vercel**

The project should deploy with:

npm install

npm run dev

npm run build

No additional backend is required.

---

# Code Quality

Use TypeScript throughout.

Prefer:

const

Functional components

Named exports

Small focused components

Readable Tailwind class ordering

Avoid:

Inline styles

Massive page files

Deep prop drilling

Unused dependencies

Complex abstractions

---

# Development Philosophy

Build the website incrementally.

Each phase should leave the project in a **fully working state**.

Do not create placeholder pages that break navigation.

Prioritize:

* Structure
* Responsiveness
* Typography
* Spacing
* Conversion-focused UI

The final result should feel like a premium, production-ready Next.js website for **ZeroSkrap Mauritius**, inspired by ScrapUncle but built cleanly from scratch using **Next.js + Tailwind CSS**.
