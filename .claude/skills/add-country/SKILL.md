---
name: add-country
description: Add a new country page to the SWB website with all required data files, components, and routing
user-invocable: true
---

# Add Country Page

Creates all files needed for a new country page on the SWB website.

## Required Information

Before starting, gather from the user:
1. **Country name** (e.g., "Kenya")
2. **City name** (e.g., "Nairobi")
3. **Hero image** — filename in `src/images/`
4. **About section** — heading, description text, main image, results (3 items with icon/title/description)
5. **Why section** — heading, description text
6. **Gallery images** — list of filenames in `src/images/`
7. **Skatepark type** — "standard" (single park + carousel) or "custom" (multiple parks, video, unique layout)
8. **Skatepark info** (if standard) — park name, description, park images

## Steps

### 1. Create gallery data

**File**: `src/data/galleries/{country}.ts`

Pattern: See `${CLAUDE_SKILL_DIR}/examples/gallery-data.ts`

Import images from `src/images/`, export a named array typed as `GalleryItem[]`.

### 2. Create skatepark data (standard type)

**File**: `src/data/skateparks/{country}.ts`

Pattern: See `${CLAUDE_SKILL_DIR}/examples/skatepark-data.ts`

Import park images, export a named object typed as `SkateparkData`.

### 2b. Create custom skatepark section (custom type)

**File**: `src/components/pages/CountryPage/skateparks/{Country}SkateparkSection.tsx`

Use UI primitives (`Section`, `Grid`, `VideoEmbed`, `MediaCarousel`). Reference `MozambiqueSkateparkSection.tsx` for a complex multi-park example.

### 3. Create country data

**File**: `src/data/countries/{country}.ts`

Pattern: See `${CLAUDE_SKILL_DIR}/examples/country-data.ts`

Import gallery data, hero image, about image, icon images. Export a named object typed as `CountryPageData`.

### 4. Create page entry

**File**: `src/pages/{Country}/index.tsx`

Pattern: See `${CLAUDE_SKILL_DIR}/examples/page-entry.tsx`

Import Layout, SEO, CountryPage, country data, and either:
- Shared `SkateparkSection` + skatepark data (standard)
- Custom `{Country}SkateparkSection` component (custom)

### 5. Add route to App.tsx

**File**: `src/App.tsx`

Add lazy import:
```tsx
const {Country} = lazy(() => import("./pages/{Country}"))
```

Add route inside `<Routes>` (before the `*` catch-all):
```tsx
<Route path={'/{country-slug}'} element={<{Country} />} />
```

### 6. Update sitemap

**File**: `public/sitemap.xml`

Add new `<url>` entry with the country path and `<priority>0.8</priority>`.

### 7. Update navigation

**File**: `src/components/Header/index.tsx`

Add entry to `navLinks` array:
```tsx
{ href: '/{country-slug}', label: '{Country}' },
```

### 8. Verify

```bash
npm run build
npm run lint
```

Both must pass with zero errors and zero warnings.
