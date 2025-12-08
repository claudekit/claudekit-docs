---
title: UI Styling Skill
description: Create beautiful, accessible user interfaces with shadcn/ui components, Tailwind CSS, and canvas-based visual designs
section: docs
category: skills/frontend
order: 6
published: true
---

# UI Styling Skill

Beautiful, accessible UI with shadcn/ui components (Radix UI + Tailwind), utility-first styling, and canvas-based visual design systems.

## Just Ask Claude To...

```
"Add a login form with email/password validation using shadcn form components"
```

```
"Create a responsive dashboard with cards, buttons, and dark mode support"
```

```
"Build a data table with sorting, filtering, and pagination"
```

```
"Style this component with Tailwind - mobile-first, add hover effects and smooth transitions"
```

```
"Add a command palette with keyboard shortcuts and search"
```

```
"Create a visual design poster for our product launch - minimal text, bold colors"
```

```
"Implement a settings page with tabs, switches, and form validation"
```

## What You'll Get

- **Accessible Components**: Dialog, Dropdown, Form, Table, Navigation with full keyboard support and ARIA
- **Responsive Layouts**: Mobile-first grid systems, breakpoint utilities (sm/md/lg/xl), dark mode variants
- **Consistent Styling**: Design tokens (colors, spacing, typography), utility classes, custom theme configurations
- **Visual Designs**: Canvas-based posters, brand materials, sophisticated compositions with minimal text

## Supported Stacks

**Component Library**: shadcn/ui (Radix UI primitives)
**Styling**: Tailwind CSS v3+ with Vite or PostCSS
**Frameworks**: Next.js, Vite, Remix, Astro (React-based)
**Languages**: TypeScript (preferred), JavaScript
**Visual Design**: Canvas-based visual compositions

| Component Type | Examples |
|----------------|----------|
| Forms & Inputs | Button, Input, Select, Checkbox, Date Picker, Form validation |
| Layout & Nav | Card, Tabs, Accordion, Navigation Menu |
| Overlays | Dialog, Drawer, Popover, Toast, Command |
| Feedback | Alert, Progress, Skeleton |
| Display | Table, Data Table, Avatar, Badge |

## Common Use Cases

### Landing Page Hero
**Who**: SaaS founder building marketing site
```
"Create a hero section with gradient background, large heading, subtitle,
CTA buttons (primary + secondary), and a product screenshot card.
Mobile-responsive with Tailwind."
```

### Admin Dashboard
**Who**: Backend dev needing quick admin UI
```
"Build a dashboard layout: sidebar nav (collapsible on mobile), header with
user dropdown, main content area with stats cards showing metrics (users, revenue,
orders). Use shadcn components and chart library."
```

### Form Wizard
**Who**: Product manager prototyping onboarding flow
```
"Create a 3-step signup wizard with progress indicator. Step 1: email/password,
Step 2: profile info (name, avatar upload), Step 3: preferences (checkboxes).
Add validation with error messages."
```

### Design Assets
**Who**: Startup founder needing event poster
```
"Generate a visual design for our launch event - bold geometric shapes,
company colors (blue/purple gradient), date/location minimal text.
Museum-quality aesthetic, canvas-based."
```

### E-commerce Product Page
**Who**: Frontend dev building shop UI
```
"Create a product page: image gallery with thumbnails, title, price,
size selector (radio buttons), quantity input, Add to Cart button,
collapsible description tabs. Dark mode support."
```

## Pro Tips

- **Setup shortcut**: Run `npx shadcn@latest init` once per project - configures both shadcn and Tailwind
- **Mobile-first**: Always start with base mobile styles, add `md:` and `lg:` prefixes for larger screens
- **Dark mode**: Use `dark:` prefix for all themed elements (`dark:bg-gray-900`, `dark:text-white`)
- **Avoid dynamic classes**: Use full class names (`bg-blue-500` not `bg-${color}-500`) for Tailwind purge
- **Component variants**: Customize in `components/ui/*.tsx` for project-wide consistency
- **Not activating?** Say: **"Use ui-styling skill to build this interface with shadcn and Tailwind"**

## Related Skills

- [Frontend Design](/docs/skills/frontend/frontend-design) - Full design system creation
- [Frontend Design Pro](/docs/skills/frontend/frontend-design-pro) - Advanced visual design
- [Aesthetic](/docs/skills/frontend/aesthetic) - Visual polish and refinement
- [Canvas Design](/docs/skills/ai/canvas-design) - Museum-quality visual compositions
- [Frontend Development](/docs/skills/frontend/frontend-development) - React/Next.js implementation

## Key Takeaway

Combine shadcn/ui (accessible Radix components), Tailwind CSS (utility-first styling), and canvas design for production-ready interfaces. Copy components into your codebase, style with utilities, ship fast with full TypeScript safety and accessibility built-in.
