# Skill: Accessibility (a11y)

> Use this skill when creating or modifying any component that a user interacts with or perceives — which is virtually everything.

## Core Principle

Accessibility is not a feature; it's a quality of the implementation. A non-profit serving communities across Africa must be usable by everyone, including people using screen readers, keyboard-only navigation, or low-bandwidth connections. Target WCAG 2.1 AA.

---

## Semantic HTML

### Use the right element for the job

| If it... | Use | Not |
|---|---|---|
| Navigates to a URL | `<a href>` | `<div onClick>`, `<span onClick>`, `<Link>` for external |
| Triggers an action | `<button type="button">` | `<div onClick>`, `<a href="#">` |
| Is a navigation block | `<nav>` | `<div className="nav">` |
| Is a page section | `<section>` | `<div>` |
| Is the main content | `<main>` | `<div className="main">` |
| Is a page heading | `<h1>`–`<h6>` | `<span className="big-text">` |
| Is a list of items | `<ul>` / `<ol>` + `<li>` | `<div>` for each item |
| Is an image | `<img>` with `alt` | CSS `background-image` for content images |

### Button vs. Link

- **Link** (`<a>`): Takes the user somewhere. Has an `href`. Can be opened in a new tab. Can be bookmarked. Crawlers follow it.
- **Button** (`<button>`): Triggers an in-page action. Has no URL. Can't be bookmarked.

```tsx
// Bad — current carousel pattern
<div className={styles.carouselButton} onClick={previous}>
  <ArrowLeft size={40} />
</div>

// Good
<button type="button" onClick={previous} aria-label="Previous slide">
  <ArrowLeft size={40} aria-hidden="true" />
</button>
```

```tsx
// Bad — current partner logo pattern
<div onClick={() => window.location.href = logo.link}>
  <img src={logo.imageSrc} />
</div>

// Good
<a href={logo.link} target="_blank" rel="noreferrer noopener">
  <img src={logo.imageSrc} alt={`${logo.name} — visit website`} />
</a>
```

### Always add `type="button"` to non-submit buttons

Without an explicit `type`, a `<button>` inside a `<form>` defaults to `type="submit"`:

```tsx
// Inside a form, this silently submits
<button onClick={handleClick}>Click me</button>

// This doesn't
<button type="button" onClick={handleClick}>Click me</button>
```

---

## Images

### Every `<img>` must have an `alt` attribute

| Image type | `alt` value |
|---|---|
| Content image (photo, illustration) | Descriptive text: `"Children skating on the new Lusaka skatepark"` |
| Logo | Company/org name: `"Skate World Better logo"` |
| Decorative icon next to text | Empty string: `alt=""` (plus `aria-hidden="true"`) |
| Background decoration | Use CSS `background-image`, not `<img>` |

```tsx
// Bad — current pattern (no alt anywhere)
<Image src={imageSrc} />
<img src={logo.imageSrc} className={styles.logoImage} />

// Good
<img src={imageSrc} alt="Skatepark under construction in Maputo" loading="lazy" />
<img src={logo.imageSrc} alt={`${partner.name} logo`} />
```

### Icons used alongside text are decorative

When an icon appears next to a text label, the icon is decorative. Hide it from screen readers:

```tsx
<a href="mailto:info@swb.org">
  <Mail size={16} aria-hidden="true" />
  info@swb.org
</a>
```

When an icon is the only content (e.g., social media icon button), provide a label:

```tsx
<a href="https://instagram.com/swb" target="_blank" rel="noreferrer noopener" aria-label="Instagram">
  <Instagram size={20} aria-hidden="true" />
</a>
```

---

## Heading Hierarchy

### Headings reflect document structure, not visual size

There must be exactly one `<h1>` per page. Headings must nest logically:

```
h1: Skate World Better — Zambia
  h2: About the Project
  h2: The Skatepark
    h3: Construction Timeline
    h3: Design Details
  h2: Gallery
```

Never choose a heading level based on how it looks. Style headings with CSS classes:

```tsx
// Bad — current pattern: <h6> used because it's small
<BaseSection.Header.Annotation>Our Partners</BaseSection.Header.Annotation>
// renders <h6> — wrong semantically

// Good — correct heading level, styled independently
<h2 className={styles.eyebrow}>Our Partners</h2>
```

```css
.eyebrow {
  font-size: var(--font-size-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
```

---

## Interactive Components

### Keyboard navigation

Every interactive element must be reachable with Tab and activatable with Enter (links, buttons) or Space (buttons, checkboxes). Custom interactive components need:

```tsx
<div
  role="button"          // Only if you absolutely can't use <button>
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }}
  aria-label="Description of action"
>
```

But really, just use `<button>`. It handles all of this natively.

### Focus management

When content changes dynamically (e.g., carousel slide change, modal open), manage focus appropriately:

- Modals: trap focus inside, return focus to trigger on close
- Carousels: don't steal focus on auto-advance
- Expand/collapse: move focus to the newly revealed content

### Carousel accessibility

```tsx
<div role="region" aria-label="Photo gallery" aria-roledescription="carousel">
  <div aria-live="polite">
    Slide {currentSlide} of {totalSlides}
  </div>
  <button type="button" aria-label="Previous slide" onClick={previous}>
    <ArrowLeft aria-hidden="true" />
  </button>
  <button type="button" aria-label="Next slide" onClick={next}>
    <ArrowRight aria-hidden="true" />
  </button>
</div>
```

---

## Iframes

### Always provide a `title`

```tsx
// Bad
<iframe src="https://www.youtube.com/embed/xyz" allowFullScreen />

// Good
<iframe
  src="https://www.youtube.com/embed/xyz"
  title="Documentary: Building Skateparks in Mozambique"
  loading="lazy"
  allowFullScreen
/>
```

---

## Color and Contrast

### Minimum contrast ratio: 4.5:1 for normal text, 3:1 for large text

Verify with browser DevTools or an online contrast checker. The brand colors:

- `#f7b70d` (primary amber) on `#16130e` (dark) — passes AA for large text only. Not suitable for body text.
- `#16130e` on `#ffffff` — passes AAA. Good for body text.
- `#8db600` (secondary green) on white — check carefully, may not meet AA for small text.

### Don't convey information with color alone

If a state or category is indicated by color, also provide a text label or icon.

---

## External Links

### Always use `rel="noreferrer noopener"` with `target="_blank"`

```tsx
// Bad — current project has a typo everywhere
rel="norefferer noopener"  // "norefferer" is not a valid token

// Good
rel="noreferrer noopener"
```

Consider adding a visual indicator that a link opens in a new tab (e.g., an external link icon) for sighted users, and an accessible label for screen reader users:

```tsx
<a href={url} target="_blank" rel="noreferrer noopener">
  {label}
  <span className="sr-only"> (opens in new tab)</span>
</a>
```

---

## Checklist

Before considering any component complete:

- [ ] All images have meaningful `alt` text (or `alt=""` + `aria-hidden` if decorative)
- [ ] All interactive elements are `<button>` or `<a>`, keyboard accessible
- [ ] Heading levels reflect document hierarchy, not visual size
- [ ] Iframes have `title` attributes
- [ ] `target="_blank"` links have `rel="noreferrer noopener"` (spelled correctly)
- [ ] Color contrast meets WCAG AA minimums
- [ ] Icons-only buttons/links have `aria-label`
- [ ] Decorative icons have `aria-hidden="true"`
