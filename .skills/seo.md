# Skill: SEO & Meta

> Use this skill when creating pages, modifying head/meta tags, working on routing, or deploying. Also relevant when adding social sharing features or structured data.

## Core Principle

A non-profit depends on organic search traffic and social sharing. Every page must be fully crawlable, have complete meta tags, and render meaningful content without JavaScript where possible. SEO is not an afterthought — it's a requirement for every page shipped.

---

## Current State

### Head management: `react-helmet-async`

The project uses `react-helmet-async` with a `<HelmetProvider>` wrapping the app in `src/main.tsx`. The `<SEO>` component (`src/components/SEO.tsx`) provides per-page meta tags.

### Rendering: client-side SPA

Currently a client-side SPA. Social media crawlers may not execute JavaScript, which limits meta tag visibility. Future improvement: add SSG via a Vite plugin or migrate to a framework with static generation.

---

## Meta Tags — Required Set

Every page must have all of these:

### Basic meta

```html
<title>Zambia — Building Skateparks | Skate World Better</title>
<meta name="description" content="Skate World Better built a skatepark in Lusaka, Zambia, creating opportunities for young people through skateboarding." />
<link rel="canonical" href="https://skateworldbetter.org/zambia" />
```

### Open Graph (Facebook, LinkedIn, WhatsApp)

```html
<meta property="og:type" content="website" />
<meta property="og:title" content="Zambia — Building Skateparks | Skate World Better" />
<meta property="og:description" content="Skate World Better built a skatepark in Lusaka, Zambia." />
<meta property="og:url" content="https://skateworldbetter.org/zambia" />
<meta property="og:site_name" content="Skate World Better" />
<meta property="og:image" content="https://skateworldbetter.org/og/zambia.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="en_US" />
```

### Twitter Card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Zambia — Building Skateparks | Skate World Better" />
<meta name="twitter:description" content="Skate World Better built a skatepark in Lusaka, Zambia." />
<meta name="twitter:image" content="https://skateworldbetter.org/og/zambia.jpg" />
<meta name="twitter:site" content="@skateworldbetter" />
```

### What's currently implemented

The `SEO` component (`src/components/SEO.tsx`) sets: `title` (with `%s | Skate World Better` template), `description`, `og:title`, `og:description`, `og:type`, `og:site_name`, `og:image` (generic 512px icon), `twitter:card` (summary), `twitter:title`, `twitter:description`, `twitter:image`.

### Remaining improvements

- Add `canonical` URL per page
- Add per-page OG images (1200x630px) instead of the generic icon
- Upgrade `twitter:card` to `summary_large_image`
- Add `og:url` per page

---

## Page Titles

### Titles must be descriptive and unique

```tsx
// Adequate for now — current pattern
<SEO title="Ethiopia" />
// Produces: "Ethiopia | Skate World Better"

// Better — descriptive, includes location and purpose
<SEO title="Ethiopia — Addis Ababa Skatepark Project" />
// Produces: "Ethiopia — Addis Ababa Skatepark Project | Skate World Better"
```

### Title format

```
{Page-specific description} | {Site name}
```

Home page should use a standalone title:
```
Skate World Better — Building Skateparks Across Africa
```

---

## Open Graph Images

### Requirements

- **Size**: 1200x630px (Facebook/LinkedIn standard)
- **Format**: JPG or PNG, < 5MB
- **Content**: A compelling photo from the project with the SWB logo and country/page name overlay
- **Location**: `public/og/` directory (statically served, not bundled by Vite)

### One OG image per page

Each country page should have its own OG image. The home page should have a general SWB image.

```
public/og/
  home.jpg
  zambia.jpg
  mozambique.jpg
  swaziland.jpg
  ethiopia.jpg
  lesotho.jpg
```

---

## Structured Data (JSON-LD)

### Organization schema

Add to the root layout or home page:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "Skate World Better",
  "url": "https://skateworldbetter.org",
  "logo": "https://skateworldbetter.org/logo.svg",
  "description": "Czech non-profit organization building skateparks across Africa.",
  "sameAs": [
    "https://www.instagram.com/skateworldbetter/",
    "https://www.facebook.com/skateworldbetter/",
    "https://www.youtube.com/@skateworldbetter"
  ],
  "foundingDate": "2019",
  "areaServed": ["Zambia", "Mozambique", "Eswatini", "Ethiopia", "Lesotho"]
}
</script>
```

---

## Technical SEO

### `robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://skateworldbetter.org/sitemap.xml
```

### `sitemap.xml`

List all public pages with `lastmod` dates:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://skateworldbetter.org/</loc>
    <lastmod>2025-01-15</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://skateworldbetter.org/zambia</loc>
    <lastmod>2025-01-15</lastmod>
    <priority>0.8</priority>
  </url>
  <!-- ... all country pages -->
</urlset>
```

### PWA Manifest

The `site.webmanifest` must have valid `name` and `short_name`:

```json
{
  "name": "Skate World Better",
  "short_name": "SWB",
  "icons": [/* ... */],
  "theme_color": "#f7b70d",
  "background_color": "#ffffff",
  "display": "standalone",
  "start_url": "/"
}
```

### `theme-color` meta tag

```html
<meta name="theme-color" content="#f7b70d" />
```

---

## URL Structure

### Clean, lowercase, descriptive slugs

```
/                  → Home
/zambia            → Country page
/mozambique        → Country page
/swaziland         → Country page (consider renaming to /eswatini)
/ethiopia          → Country page
/lesotho           → Country page
```

### Trailing slashes — pick one convention and enforce it

If using Netlify, configure `trailingSlash` in `netlify.toml`.

---

## Social Sharing Validation

### Test every page with these tools before shipping

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

---

## SEO Component Interface (Target)

The current `SEO` component could be enhanced:

```tsx
interface SEOProps {
  title: string
  description: string
  canonical: string
  ogImage?: string          // defaults to page-specific or site-wide fallback
  ogType?: 'website' | 'article'
  twitterCard?: 'summary' | 'summary_large_image'
  jsonLd?: Record<string, unknown>
  noIndex?: boolean         // for 404, staging, drafts
}
```

---

## Checklist

Before shipping any page:

- [ ] Title is descriptive and unique (not just a country name)
- [ ] `<meta name="description">` is present and unique (150-160 chars)
- [ ] `<link rel="canonical">` is set
- [ ] All Open Graph tags present: `og:title`, `og:description`, `og:image`, `og:url`, `og:site_name`
- [ ] All Twitter Card tags present: `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image`
- [ ] OG image exists at 1200x630px
- [ ] JSON-LD structured data is valid
- [ ] Page is indexable (not accidentally `noindex`)
- [ ] `sitemap.xml` includes the new page
- [ ] Validated with Facebook/Twitter/LinkedIn sharing tools
