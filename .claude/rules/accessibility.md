---
paths: ["src/components/**/*.tsx"]
---

# Accessibility

## Use the right element

| If it... | Use | Not |
|----------|-----|-----|
| Navigates to a URL | `<a href>` | `<div onClick>`, `<Link>` for external |
| Triggers an action | `<button type="button">` | `<div onClick>`, `<a href="#">` |
| Is a navigation block | `<nav>` | `<div>` |
| Is a page section | `<section>` | `<div>` |
| Is the main content | `<main>` | `<div>` |
| Is a heading | `<h1>`–`<h6>` | `<span className="big-text">` |
| Is a content image | `<img>` with `alt` | CSS `background-image` |

## Button vs Link

- **Link** (`<a>`): Has `href`, opens a URL, can be bookmarked, crawlers follow it
- **Button** (`<button>`): Triggers in-page action, no URL

```tsx
// Navigation
<a href={url} target="_blank" rel="noreferrer noopener">
  <img src={logo} alt={`${name} — visit website`} />
</a>

// Action
<button type="button" onClick={previous} aria-label="Previous slide">
  <ArrowLeft size={40} aria-hidden="true" />
</button>
```

## Always `type="button"` on non-submit buttons

Without `type`, buttons inside forms default to `type="submit"`:

```tsx
<button type="button" onClick={handleClick}>Click me</button>
```

## Every `<img>` must have `alt`

| Image type | `alt` value |
|------------|-------------|
| Content photo | Descriptive: `"Children skating on the new Lusaka skatepark"` |
| Logo | Company name: `"Skate World Better logo"` |
| Decorative icon next to text | Empty: `alt=""` + `aria-hidden="true"` |
| Background decoration | Use CSS `background-image`, not `<img>` |

Use the `Image` primitive from `src/components/ui/`:

```tsx
<Image src={imageSrc} alt="Skatepark under construction in Maputo" />
```

## Icons alongside text are decorative

Hide from screen readers:

```tsx
<a href="mailto:info@swb.org">
  <Mail size={16} aria-hidden="true" />
  info@swb.org
</a>
```

When an icon is the **only content**, provide a label:

```tsx
<a href="https://instagram.com/swb" aria-label="Instagram">
  <Instagram size={20} aria-hidden="true" />
</a>
```

## Heading hierarchy reflects document structure

One `<h1>` per page. Headings nest logically. Never choose a heading level for visual size — style with CSS:

```tsx
// Bad — h6 chosen for small size
<h6>Our Partners</h6>

// Good — correct level, styled independently
<Heading level={2} className="text-sm font-semibold uppercase">Our Partners</Heading>
```

## Keyboard navigation

Every interactive element must be reachable with Tab and activatable with Enter/Space. Custom interactive elements need `role`, `tabIndex`, `onKeyDown` — but prefer native `<button>` which handles this automatically.

## Carousel accessibility

```tsx
<div role="region" aria-label="Photo gallery" aria-roledescription="carousel">
  <button type="button" aria-label="Previous slide" onClick={previous}>
    <ArrowLeft aria-hidden="true" />
  </button>
  <button type="button" aria-label="Next slide" onClick={next}>
    <ArrowRight aria-hidden="true" />
  </button>
</div>
```

## Iframes must have `title`

The `VideoEmbed` primitive requires a `title` prop:

```tsx
<VideoEmbed src="https://youtube.com/embed/xyz" title="Documentary: Building Skateparks" />
```

## Color contrast

Minimum: 4.5:1 for normal text, 3:1 for large text (WCAG AA).

Brand color notes:
- `#f7b70d` on `#16130e` — passes for large text only
- `#16130e` on `#ffffff` — passes AAA
- `#8db600` on white — check carefully, may not meet AA for small text

## External links

Always `rel="noreferrer noopener"` with `target="_blank"`. Note the correct spelling (not `norefferer`).
