---
paths: ["src/components/SEO.tsx", "public/**", "index.html", "src/pages/*/index.tsx"]
---

# SEO & Meta

## Required Meta Tags (per page)

### Basic

```html
<title>Zambia — Mongu Skatepark | Skate World Better</title>
<meta name="description" content="SWB built a skatepark in Mongu, Zambia, empowering youth through skateboarding." />
<link rel="canonical" href="https://skateworldbetter.org/zambia" />
```

### Open Graph

```html
<meta property="og:type" content="website" />
<meta property="og:title" content="Zambia — Mongu Skatepark | Skate World Better" />
<meta property="og:description" content="SWB built a skatepark in Mongu, Zambia." />
<meta property="og:url" content="https://skateworldbetter.org/zambia" />
<meta property="og:site_name" content="Skate World Better" />
<meta property="og:image" content="https://skateworldbetter.org/og/zambia.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

### Twitter Card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Zambia — Mongu Skatepark | Skate World Better" />
<meta name="twitter:description" content="SWB built a skatepark in Mongu, Zambia." />
<meta name="twitter:image" content="https://skateworldbetter.org/og/zambia.jpg" />
```

## Current Implementation

`src/components/SEO.tsx` sets: title (with `%s | Skate World Better` template), description, og:title, og:description, og:type, og:site_name, og:image (generic 512px icon), twitter:card (summary), twitter:title, twitter:description, twitter:image.

### Remaining improvements

- Per-page `og:image` (1200x630px) instead of generic icon
- `og:url` per page
- `<link rel="canonical">` per page
- Upgrade `twitter:card` to `summary_large_image`

## Page Title Format

```
{Descriptive title} | Skate World Better
```

Home page: standalone `Skate World Better — Building Skateparks Across Africa`.

## OG Images

- Size: 1200x630px, JPG or PNG, < 5MB
- Location: `public/og/{country}.jpg`
- Content: compelling project photo with SWB logo overlay
- One per page (home + each country)

## JSON-LD Structured Data

Add to root layout:

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

## Technical SEO

### robots.txt (`public/robots.txt`)
```
User-agent: *
Allow: /
Sitemap: https://skateworldbetter.org/sitemap.xml
```

### sitemap.xml (`public/sitemap.xml`)
Must list all public pages with `<loc>` and `<priority>`. Update when adding pages.

### PWA Manifest (`public/site.webmanifest`)
Must have valid `name` ("Skate World Better") and `short_name` ("SWB").

## URL Structure

```
/              Home
/mozambique    Country page
/zambia        Country page
/swaziland     Country page (consider /eswatini rename)
/ethiopia      Country page
/lesotho       Country page
```

Clean, lowercase slugs. No trailing slashes.

## Target SEO Component Interface

```tsx
interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  twitterCard?: 'summary' | 'summary_large_image'
  jsonLd?: Record<string, unknown>
  noIndex?: boolean
}
```
