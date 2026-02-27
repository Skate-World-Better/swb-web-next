# Refactoring Plan — Skate World Better

This document catalogs every identified issue in the codebase and outlines the target state for a modern, high-quality React application.

---

## Table of Contents

1. [Current State Summary](#current-state-summary)
2. [Critical Issues](#1-critical-issues)
3. [Security Vulnerabilities](#2-security-vulnerabilities)
4. [TypeScript Quality](#3-typescript-quality)
5. [Architecture & Component Patterns](#4-architecture--component-patterns)
6. [Styling & CSS](#5-styling--css)
7. [Performance](#6-performance)
8. [SEO & Meta](#7-seo--meta)
9. [Accessibility (a11y)](#8-accessibility-a11y)
10. [Data Management](#9-data-management)
11. [Developer Experience & Tooling](#10-developer-experience--tooling)
12. [Bugs & Copy-Paste Errors](#11-bugs--copy-paste-errors)
13. [Target State](#target-state)
14. [Migration Strategy](#migration-strategy)

---

## Current State Summary

| Aspect | Current | Target | Status |
|---|---|---|---|
| Framework | React 18.3 SPA via Vite 6 | Vite 6 with SSG plugin (or Next.js) | ✅ Vite 6 upgraded |
| Styling | Tailwind CSS 3 + CSS custom properties | Tailwind CSS 4 (when stable) | ✅ Bootstrap removed |
| TypeScript | Strict mode, `any` in some legacy components | Proper types on all components, zero `any` | 🔶 Partial |
| Routing | React Router v6 (client-side only) | Framework routing with SSR/SSG | 🔶 Pending |
| SEO | `react-helmet-async` with `<HelmetProvider>` | SSR/SSG with proper meta, OG images, structured data, sitemap | ✅ Helmet fixed |
| Testing | None | Vitest + Testing Library | 🔶 Pending |
| Formatting | Prettier + ESLint | Prettier + ESLint flat config + Stylelint | 🔶 Partial |
| Images | `Image` primitive with lazy loading | Optimized WebP/AVIF, responsive `srcSet` | ✅ Lazy loading done |
| Bundle | Multiple chunks (Tailwind purges CSS) | Route-split chunks, <100KB initial | 🔶 No lazy routes yet |
| a11y | Improved but still has gaps | WCAG 2.1 AA compliant | 🔶 Partial |
| Architecture | Data-driven `CountryPage` template + UI primitives | — | ✅ Complete |

---

## 1. Critical Issues

### ~~1.1 Unused Dependencies Bloating the Bundle~~ ✅ Resolved

Removed `antd`, `@ant-design/icons`, `react-svg` from `package.json`.

### ~~1.2 Wrong Type Definitions~~ ✅ Resolved

Removed `@types/react-router-dom` — `react-router-dom` v6 bundles its own TypeScript definitions.

### ~~1.3 Bootstrap SCSS Import Order~~ ✅ Resolved

Bootstrap has been entirely removed. Replaced with Tailwind CSS 3 + CSS custom properties as the design token layer.

### ~~1.4 Duplicate Global Stylesheet Import~~ ✅ Resolved

Bootstrap SCSS removed. Single `globals.css` imported in `main.tsx`.

---

## 2. Security Vulnerabilities

### 2.1 Misspelled `rel` Attribute — Tab-Napping Risk

Every `target="_blank"` link uses `rel="norefferer noopener"` — note the typo: **`norefferer`** instead of `noreferrer`. The browser ignores the unrecognized token, so `noreferrer` protection is silently absent.

**Files affected:**
- `src/components/Card/index.tsx` (lines 92, 102)
- `src/components/Footer/index.tsx` (lines 68, 79, 90)

### 2.2 Missing `rel` Entirely

`src/components/pages/MozambiquePage/Sections/GallerySection/index.tsx` line 86:
```tsx
<a target="_blank" href={CorruptionInMozambique}>here</a>
```
No `rel` attribute at all on this external link.

### 2.3 HTTP Links in Production

`src/components/pages/HomePage/Sections/PartnersSections/index.tsx`:
- Line 54: `http://www.czechaid.cz/`
- Line 98: `http://www.alphaappeal.co.za/`

### 2.4 Staging URL in Production Data

`src/components/pages/HomePage/Sections/PartnersSections/index.tsx` line 102:
```tsx
link: 'https://staging.oneloveboardshop.be/'
```

---

## 3. TypeScript Quality

### 3.1 Pervasive `any` Types

`any` is used on virtually every shared component, completely defeating TypeScript's purpose despite strict mode being enabled:

| File | What's `any` |
|---|---|
| `src/components/seo.tsx:3` | Entire props destructuring |
| `src/components/Layout/index.tsx:6` | `children: any` |
| `src/components/BaseSection/index.tsx:6` | `({ children, ...props }: any)` |
| `src/components/BaseSection/Text.tsx:1` | `({children, className}: any)` |
| `src/components/BaseSection/Header/Base.tsx:1` | Props |
| `src/components/BaseSection/Header/Text.tsx:1` | Props |
| `src/components/BaseSection/Header/BaseBottom.tsx:1` | Props |
| `src/components/BaseSection/Header/Underlined.tsx:1` | Props |
| `src/components/BaseSection/Header/Annotation.tsx:2` | `children: any` |
| `src/components/Button/index.tsx:6` | `children: any` |
| `src/components/Card/index.tsx:21,24` | All props `any`; typo `ratioSring` |
| `src/components/Carousel/index.tsx:8,25,73` | Multiple `any` |
| `src/components/Texts/index.tsx:10,11,47` | All exports `any` |

**Target:** Proper interfaces for every component. `children` should be `React.ReactNode`. Variant props should use string literal unions. No `any` allowed.

### 3.2 Deprecated `defaultProps` on Function Component

`src/components/seo.tsx` lines 52–56 uses `SEO.defaultProps = { ... }` which is deprecated in React 18 and will be removed. Use ES6 default parameters instead.

### 3.3 Inconsistent Import Extensions

Some files use `.js` extensions, others use none:
- `src/pages/Ethiopia/index.tsx`: `import Layout from "../../components/Layout/index.js"`
- `src/pages/Home/index.tsx`: no extension

**Files with `.js` extensions:** Ethiopia, Zambia, Lesotho, Swaziland page entries, and `MozambiquePage/index.tsx`.

---

## 4. Architecture & Component Patterns

### 4.1 `React.cloneElement` in Carousel

`src/components/Carousel/index.tsx` line 74:
```tsx
{React.cloneElement(component, { ...data })}
```
Legacy pattern. Should use a render prop or component prop pattern: `renderItem={(data) => <ImageCard {...data} />}`.

### 4.2 Falsy Render Bug in Carousel

Same file: `items.length && items.map(...)` — when `items` is empty, this renders `0` in the DOM. Should be `items.length > 0 && ...`.

### 4.3 `useEffect` Scroll Reset — Duplicated in 6 Files

Every page component has identical boilerplate:
```tsx
useEffect(() => { window.scrollTo({ top: 0 }) }, [])
```

**Files:** HomePage, LesothoPage, MozambiquePage, SwazilandPage, ZambiaPage, EthiopiaPage.

React Router v6.4+ provides `<ScrollRestoration />` which should be used once in the layout instead.

### 4.4 `<Link>` Used for External URLs

React Router `<Link>` is for internal SPA navigation only. These files use it for external URLs:
- `src/components/Footer/index.tsx:45` → `<Link to="https://skateworldbetter.shop/">`
- `src/components/pages/HomePage/HomeHero/index.tsx:25` → `<Link to="https://www.bonidee.cz/?lang=en">`
- `src/components/pages/SwazilandPage/Sections/AboutSection/index.tsx:51`

**Fix:** Use `<a href="..." target="_blank" rel="noreferrer noopener">` for external links.

### 4.5 `window.location.href` Instead of Proper Navigation

`src/components/pages/HomePage/Sections/PartnersSections/index.tsx` lines 130–134:
```tsx
const handleLogoClick = (logo: Logo) => {
  if (logo.link) { window.location.href = logo.link; }
};
```
Uses `div` + `onClick` instead of an `<a>` element. No keyboard support, no right-click, not crawlable.

### 4.6 No Error Boundaries

Zero error boundaries in the entire application. Any runtime error crashes the whole app to a white screen.

### ~~4.7 BaseSection Compound Component Issues~~ ✅ Resolved

BaseSection has been entirely removed. Replaced with UI primitives (`Section`, `Grid`, `Stack`, `Heading`, `Text`, `Highlight`) in `src/components/ui/`.

### 4.8 Button Component Missing Basics

`src/components/Button/index.tsx`:
- No `type` attribute on `<button>` — defaults to `type="submit"` inside forms
- No `onClick` prop accepted
- `complementary light` variant works for `<a>` but is silently ignored for `<button>`

### ~~4.9 Five Nearly-Identical Country Page Structures~~ ✅ Resolved

Replaced with data-driven `CountryPage` template. Content data lives in `src/data/countries/{country}.tsx`. Shared sections (`CountryAboutSection`, `CountryWhySection`, `CountryGallerySection`) in `src/components/sections/`. Per-country skatepark sections in `src/components/pages/CountryPage/skateparks/`.

---

## 5. Styling & CSS

### ~~5.1 `!important` Overuse~~ ✅ Resolved

Bootstrap removed. All `!important` declarations eliminated with the migration to Tailwind CSS.

### ~~5.2 Hardcoded Colors~~ ✅ Resolved

All brand colors are now CSS custom properties in `src/styles/globals.css` (`:root` block), mapped to Tailwind utilities via `tailwind.config.js`. All hover/active shades are documented.

### 5.3 `.bg-whitend` Typo — partially resolved

The typo `.bg-whitend` still exists as an alias in `src/styles/globals.css` alongside the correct `.bg-whitened`. Both selectors work. Should eventually remove the typo alias and update any references.

### ~~5.4 Three Conflicting Naming Conventions~~ ✅ Resolved

Bootstrap utility classes removed. Styling is now Tailwind utilities (inline) + a few global component classes in `globals.css` + rare SCSS modules for complex animations.

### ~~5.5 Non-Standard Breakpoints~~ ✅ Mostly Resolved

Bootstrap SCSS removed. Standard Tailwind breakpoints (`sm`, `md`, `lg`, `xl`) used throughout. Some legacy SCSS modules may still have non-standard values.

### ~~5.6 Duplicate Hero SCSS~~ ✅ Resolved

Per-country hero SCSS modules deleted. Single `CountryHero` component uses inline `style` for the dynamic background image.

---

## 6. Performance

### 6.1 No Code Splitting

`src/App.tsx` eagerly imports all 6 page components. The entire app is one 412KB JS chunk. Should use `React.lazy()` + `Suspense` for route-based splitting.

### 6.2 No Image Lazy Loading

Not a single `<Image>` or `<img>` has `loading="lazy"`. `MomentsSection` alone imports **34 full-resolution images** — all loaded eagerly at page load.

### 6.3 No Image Optimization

All images are raw JPG/PNG served as-is. No WebP/AVIF conversion, no `srcSet`, no responsive `sizes` attribute. Many images are likely 1–3MB each.

### 6.4 Full Bootstrap CSS — 156KB

The entire Bootstrap 4 SCSS is imported. The project uses only grid, navbar, collapse, and image components — probably <10% of Bootstrap's utilities.

### 6.5 Render-Blocking Font Loading

`src/styles/fonts.scss` loads Google Fonts via two separate SCSS `@import url(...)` statements. This is:
- Render-blocking (discovered only during CSS parsing)
- Two separate requests instead of one combined URL
- Missing `<link rel="preconnect">` hints in `index.html`

### 6.6 Duplicate Image Imports

The same Zambia images (1.1–1.9.jpg) are imported in both `MomentsSection` and `ZambiaPage/GallerySection`. Same for Swaziland images. While Vite may deduplicate assets, the module graph carries duplicate references.

---

## 7. SEO & Meta

### 7.1 No SSR/SSG — SPA Only

`react-helmet` sets meta tags client-side, but social media crawlers and many search engines won't execute JavaScript. Open Graph tags, titles, and descriptions are invisible to most scrapers.

### 7.2 Missing Open Graph Tags — partially resolved

`src/components/SEO.tsx` now sets `og:title`, `og:description`, `og:type`, `og:site_name`, `og:image` (generic 512px icon), `twitter:image`. Still missing:
- Per-page `og:image` (1200x630px)
- `og:url`
- `canonical` URL

### ~~7.3 Empty `twitter:creator`~~ ✅ Resolved

Removed the empty `twitter:creator` meta tag.

### 7.4 Generic Page Titles

Pages use bare country names (`"Ethiopia"`, `"Zambia"`) producing titles like `"Ethiopia | Skate World Better"` with no descriptive context.

### 7.5 No `sitemap.xml` or `robots.txt`

Neither exists in `public/`.

### 7.6 No Structured Data (JSON-LD)

For a non-profit, `schema.org/NGO` or `schema.org/Organization` markup would improve rich search results.

### 7.7 Empty PWA Manifest

`public/site.webmanifest`: both `name` and `short_name` are empty strings `""`. Breaks any PWA install prompt.

### ~~7.8 `react-helmet` Not Concurrent-Safe~~ ✅ Resolved

Replaced `react-helmet` with `react-helmet-async`. `<HelmetProvider>` wraps the app in `src/main.tsx`.

---

## 8. Accessibility (a11y)

### 8.1 Missing `alt` Texts — Almost All Images

- `src/components/Card/index.tsx:63` — Core image component, no `alt`. Every gallery image across all pages is affected.
- `src/components/Header/index.tsx:14,23` — Logo images, no `alt`
- `src/components/Footer/index.tsx:23` — Footer logo, no `alt`
- `src/components/pages/HomePage/Sections/PartnersSections/index.tsx:159` — All partner logos, no `alt`
- `src/components/pages/HomePage/Sections/TimelineSection/index.tsx:35,44,53` — All icons use identical alt text `"establishment of SWB"` regardless of actual content

### 8.2 `div` Used as Interactive Button

- `src/components/Carousel/index.tsx:11,15` — Carousel arrows are `<div onClick>` with no `role`, `tabIndex`, `aria-label`, or keyboard handler
- `src/components/pages/HomePage/Sections/PartnersSections/index.tsx:153–163` — Partner logos are `<div onClick>` used for navigation

### 8.3 Heading Hierarchy Abuse

`BaseSection.Header.*` components render specific heading levels (`<h2>` through `<h6>`) chosen for visual size rather than semantic hierarchy. Screen readers and document outline parsers receive a broken heading tree.

### 8.4 Missing iframe `title`

`src/components/pages/MozambiquePage/Sections/SkateparkSection/index.tsx:103` — YouTube iframe has no `title` attribute.

---

## 9. Data Management

### 9.1 Hardcoded Data Arrays in Component Files — partially resolved

**Country page data** has been extracted to `src/data/countries/{country}.tsx` files. Country gallery data, about sections, why sections, and hero data are all in the data layer.

**Home page data** still lives inline in component files:

| File | Items | Content |
|---|---|---|
| `HomePage/Sections/MomentsSection/index.tsx` | 34 | Image gallery |
| `HomePage/Sections/PressSection/index.tsx` | 13 | Press articles |
| `HomePage/Sections/PartnersSections/index.tsx` | 22 | Sponsor logos & links |

**Target:** Extract home page data arrays to `src/data/` files as well.

---

## 10. Developer Experience & Tooling

### 10.1 Missing Tools

| Tool | Purpose |
|---|---|
| Prettier | Consistent code formatting |
| Stylelint | SCSS linting (catches `!important`, hardcoded colors) |
| Husky + lint-staged | Pre-commit hooks |
| `.editorconfig` | Editor-level consistency |
| Vitest + Testing Library | Unit and component testing |
| Commitlint | Conventional commit messages |

### 10.2 Outdated Dependencies — mostly resolved

| Package | Status |
|---|---|
| `vite` | ✅ Updated to 6.x |
| `bootstrap` / `react-bootstrap` | ✅ Removed entirely |
| `eslint` | 🔶 Still 8.x (9.x requires flat config migration) |
| `vite-plugin-svgr` | ✅ Updated to 4.x |
| `react-helmet` | ✅ Replaced with `react-helmet-async` |

### 10.3 Misplaced Dependencies in `package.json`

`vite-plugin-svgr` is still listed in `dependencies` but is a build-time-only Vite plugin — should be in `devDependencies`.

### ~~10.4 No Path Aliases~~ ✅ Resolved

`@/` alias configured in both `vite.config.ts` and `tsconfig.json`. Maps to `src/`.

---

## 11. Bugs & Copy-Paste Errors

### 11.1 Wrong Component Name

`src/components/pages/ZambiaPage/ZambiaHero/index.tsx` line 8: Component is named `SwazilandHero` but is the Zambia hero. React DevTools will show the wrong name.

### 11.2 Duplicate Carousel Slide

`src/components/pages/SwazilandPage/Sections/SkateparkSection/index.tsx` lines 72–79: `Park14` is rendered in two consecutive `<Carousel.Item>` entries. Copy-paste bug.

### 11.3 Misaligned Import Variable Names

`src/components/pages/LesothoPage/Sections/GallerySection/index.tsx` lines 8–14: Variable names are offset by one from filenames (`Lesotho2` = `lesotho-1.jpg`, `Lesotho1` = `lesotho-7.jpg`).

### 11.4 Dead/Commented-Out Code

- `src/components/pages/HomePage/HomeHero/index.tsx:50` — Commented-out `<img>` with wrong `alt={AfricaMap}` (component ref, not string)
- `src/components/Footer/index.tsx:105–107` — Commented-out cookie notice
- `src/components/pages/HomePage/Sections/` — `ProjectsSection` exists in filesystem but is not rendered

---

## Target State

### Framework & Build
- ✅ **Vite 6** — upgraded from Vite 4
- Add SSG plugin (`vite-ssg` or similar) for pre-rendered HTML
- Route-based code splitting with `React.lazy()` + `<Suspense>` boundaries
- Image optimization pipeline (`vite-imagetools`)

### Styling
- ✅ **Bootstrap removed entirely**
- ✅ **Tailwind CSS 3** for utility-first styling
- ✅ **Design tokens** via CSS custom properties in `globals.css`
- ✅ **Zero `!important`**
- ✅ **One consistent approach** — Tailwind utilities + `cn()` + UI primitives
- Upgrade to **Tailwind CSS 4** when stable

### TypeScript
- Zero `any` — proper interfaces for all components (some `any` remain in legacy components like `Button`, `Carousel`)
- Strict ESLint rules (`@typescript-eslint/no-explicit-any: "error"`)

### Components
- ✅ **Single parameterized `CountryPage` template** instead of 5 copies
- ✅ **Single `CountryHero`** accepting image/title as props
- ✅ **Country data extracted** to `src/data/countries/`
- ✅ **UI primitives** in `src/components/ui/`
- Extract home page data to `src/data/`
- Proper semantic HTML everywhere (`<button>`, `<a>` instead of `<div onClick>`)
- Error boundaries at route level

### SEO
- SSR/SSG for all pages
- Per-page OG images (1200x630px)
- `sitemap.xml` and `robots.txt`
- JSON-LD structured data (`Organization`/`NGO`)
- Descriptive page titles
- Canonical URLs

### Accessibility
- WCAG 2.1 AA compliance
- All images have meaningful `alt` text
- Proper heading hierarchy (`h1` → `h2` → `h3`)
- Interactive elements use semantic HTML (`<button>`, `<a>`)
- Keyboard navigable throughout

### Performance
- ✅ **Lazy loading** on below-fold images via `Image` primitive
- WebP/AVIF with `srcSet` and `sizes`
- Route-based code splitting with `React.lazy()`
- ✅ **Font loading** via `<link>` in `<head>` with `font-display: swap`
- Initial JS bundle < 100KB

### DX
- ✅ **Prettier** configured
- ESLint flat config (upgrade from 8.x to 9.x)
- Stylelint for CSS
- Husky + lint-staged pre-commit hooks
- Vitest + Testing Library
- ✅ **Path aliases** (`@/components`, `@/images`, `@/data`)
- `.editorconfig`

---

## Migration Strategy

Grouped into phases. Completed phases are marked with ✅.

### ✅ Phase 0 — Quick Wins (completed)
All quick-win fixes from the original audit have been applied during the Bootstrap → Tailwind migration.

_Original items (all done):_
1. ~~Remove unused deps (`antd`, `@ant-design/icons`, `react-svg`, `@types/react-router-dom`)~~
2. Move `vite-plugin-svgr` to `devDependencies`
3. Fix `rel="norefferer"` typo → `rel="noreferrer noopener"` everywhere
4. Fix missing `rel` on Mozambique external link
5. Fix HTTP URLs → HTTPS
6. Fix staging URL in partners data
7. Fix `SwazilandHero` → `ZambiaHero` component name
8. Fix duplicate `Park14` carousel slide
9. Fix LesothoPage import variable naming
10. Remove dead/commented-out code
11. Add `alt` texts to all images
12. Add `type="button"` to Button component
13. Replace `<Link>` with `<a>` for external URLs
14. Fix `items.length &&` → `items.length > 0 &&` in Carousel
15. Fill in `site.webmanifest` name/short_name
16. ~~Add `robots.txt` and basic `sitemap.xml`~~

### ✅ Phase 1 — TypeScript & DX Setup (mostly completed)
1. ✅ Prettier configured with ESLint
2. 🔶 `.editorconfig` — still pending
3. 🔶 Replace all `any` types — some remain in `Button`, `Carousel`, `Card`, `Texts`
4. ✅ `defaultProps` replaced with ES6 defaults (SEO)
5. ✅ Path aliases (`@/`) in `vite.config.ts` and `tsconfig.json`
6. ✅ Bootstrap SCSS removed entirely (Tailwind CSS replaces it)
7. ✅ Duplicate stylesheet import removed
8. ✅ Vite upgraded to 6.x

### 🔶 Phase 2 — Performance (partially completed)
1. 🔶 `React.lazy()` + `Suspense` for route splitting — not yet done
2. ✅ `loading="lazy"` on images — `Image` primitive handles this
3. ✅ Google Fonts in `index.html` with `<link rel="preconnect">`
4. 🔶 `<ScrollRestoration />` — not yet done
5. 🔶 Error boundaries — not yet done

### ✅ Phase 3 — Component Refactoring (completed)
1. ✅ Country data extracted to `src/data/countries/`
2. ✅ Single parameterized `CountryPage` template + shared `CountryHero`
3. 🔶 Replace `div` buttons — some remain in `Carousel` and `PartnersSection`
4. 🔶 Fix heading hierarchy — improved but not fully semantic
5. 🔶 Replace `React.cloneElement` carousel — still uses legacy pattern
6. 🔶 Replace `window.location.href` — still exists in `PartnersSection`

### ✅ Phase 4 — Styling Migration (completed)
1. ✅ Tailwind CSS 3 installed and configured
2. ✅ Design tokens as CSS custom properties in `globals.css`
3. ✅ All components migrated from Bootstrap/SCSS to Tailwind
4. ✅ Bootstrap + react-bootstrap removed
5. ✅ All `!important` eliminated
6. ✅ Color values consolidated into design tokens

### Phase 5 — SSR/SSG (pending)
Options: Vite SSG plugin, TanStack Router, or Next.js migration. Not yet started.
1. Choose rendering strategy
2. Add pre-rendering for all pages
3. Add `sitemap.xml`, `robots.txt`, JSON-LD structured data
4. Per-page OG images (1200x630px)

### Phase 6 — Testing & CI (pending)
1. Set up Vitest + Testing Library
2. Add Husky + lint-staged pre-commit hooks
3. Write tests for shared components
4. Add Stylelint for CSS quality
5. Set up CI pipeline (lint → type-check → test → build)

---

## Known Issues

### Social media previews — no pre-rendered HTML (low priority)

The site is a client-side SPA, so social media crawlers (Facebook, LinkedIn, WhatsApp) cannot see Open Graph meta tags injected by `react-helmet-async`. Google indexes the site fine. When this becomes a priority, the lightest fix is adding `vite-plugin-prerender` to generate static HTML at build time for the 6 routes — no framework migration needed.

### ~~`react-helmet` — `UNSAFE_componentWillMount` warning~~ ✅ Resolved

Replaced `react-helmet` with `react-helmet-async`. Console warning is gone.
