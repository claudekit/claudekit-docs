---
title: Tailwind CSS Skill
description: Documentation for tailwindcss
section: engineer
kit: engineer
category: skills/frontend
order: 3
published: true
---

# Tailwind CSS Skill

Utility-first CSS framework that enables rapid UI development through composable classes - write zero custom CSS.

## When to Use

- Building responsive layouts with mobile-first breakpoints
- Implementing consistent design systems (colors, spacing, typography)
- Rapid UI prototyping without switching between CSS/HTML
- Dark mode implementation with class-based theming

## Quick Start

**Next.js (includes Tailwind by default):**
```bash
npx create-next-app@latest
# Select "Yes" for Tailwind CSS
```

**Vite:**
```bash
npm create vite@latest my-app
npm install -D tailwindcss @tailwindcss/vite
```

```javascript
// vite.config.ts
import tailwindcss from '@tailwindcss/vite'
export default { plugins: [tailwindcss()] }
```

```css
/* src/index.css */
@import "tailwindcss";
```

## Common Use Cases

### Startup founder building MVP landing page
**Prompt:** "Create a landing page with hero section, feature cards, and pricing table"

**What happens:** ClaudeKit generates mobile-first layout using Tailwind grid/flexbox utilities, consistent spacing scale (p-4, gap-6), responsive breakpoints (md:, lg:), and hover states - zero custom CSS files.

### Product designer implementing design system
**Prompt:** "Build component library with our brand colors: primary #0066FF, secondary #00CC88"

**What happens:** ClaudeKit configures custom theme in `tailwind.config.js`, extends color palette with 50-950 shades, applies brand colors across buttons/cards/inputs, implements dark mode variants.

### Developer adding responsive dashboard
**Prompt:** "Create admin dashboard with sidebar, stats cards, and data table"

**What happens:** ClaudeKit uses Tailwind utilities for layout (`grid grid-cols-1 md:grid-cols-3`), spacing (`space-y-4`), shadows (`shadow-lg`), and breakpoint-specific navigation (`hidden md:block`).

### SaaS team implementing dark mode
**Prompt:** "Add dark mode toggle with system preference detection"

**What happens:** ClaudeKit configures `darkMode: 'class'`, adds dark variants (`bg-white dark:bg-gray-900`), implements toggle component with localStorage persistence, applies theme to all UI elements.

## Key Differences

| Aspect | Tailwind CSS | Traditional CSS |
|--------|-------------|-----------------|
| **Approach** | Utility classes in HTML | Separate CSS files |
| **Customization** | Config file + @theme | Custom stylesheets |
| **File Size** | Auto-purged (tiny bundle) | Manual optimization |
| **Responsive** | Inline prefixes (md:, lg:) | Media queries |
| **Dark Mode** | Class variants (dark:) | Manual theming |

## Quick Reference

**Layout:**
```html
<div class="flex justify-between items-center gap-4">
<div class="grid grid-cols-3 gap-6">
<div class="absolute top-0 right-0">
```

**Spacing (4px increments):**
```html
<div class="p-4 m-6 space-y-2">  <!-- padding, margin, gap -->
```

**Typography:**
```html
<h1 class="text-2xl font-bold text-gray-900">
<p class="text-sm text-gray-600 leading-relaxed">
```

**Responsive breakpoints:**
```html
<div class="w-full md:w-1/2 lg:w-1/3">
<!-- Mobile: full, Tablet: half, Desktop: third -->
```

**Dark mode:**
```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
```

**Custom theme (@theme directive):**
```css
@import "tailwindcss";

@theme {
  --color-brand-500: oklch(0.55 0.22 264);
  --font-display: "Inter", sans-serif;
  --spacing-navbar: 4.5rem;
}
```

**Common patterns:**
```html
<!-- Card -->
<div class="bg-white rounded-lg shadow-lg p-6">

<!-- Button -->
<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">

<!-- Input -->
<input class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">

<!-- Centered container -->
<div class="flex items-center justify-center min-h-screen">
```

## Pro Tips

**Organize long class names:**
```tsx
const cardClasses = `
  max-w-sm rounded-lg shadow-lg
  bg-white dark:bg-gray-800
  hover:shadow-xl transition-shadow
`;

<div className={cardClasses}>Content</div>
```

**Extract repeated patterns:**
```tsx
// Create component instead of repeating classes
function Button({ children }) {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      {children}
    </button>
  );
}
```

**Use @apply for complex components:**
```css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded-lg;
    @apply hover:bg-blue-600 focus:ring-2 focus:ring-blue-500;
  }
}
```

**Not activating?** Say: "Use ui-styling skill to build this with Tailwind CSS"

## Related Skills

- [UI Styling](/docs/skills/frontend/ui-styling) - Combined shadcn/ui + Tailwind
- [Frontend Design](/docs/skills/frontend/frontend-design) - Design-focused UI creation
- [Frontend Development](/docs/skills/frontend/frontend-development) - Full-stack React development

## Key Takeaway

Tailwind eliminates context switching between HTML/CSS by putting all styling in utility classes. ClaudeKit leverages this for rapid prototyping - responsive layouts, dark mode, custom themes - all without writing a single CSS file.
