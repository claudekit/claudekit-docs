---
title: "ckm:ui-styling"
description: "Style modern UIs with shadcn/ui components, Radix UI primitives, and Tailwind CSS utility classes with accessibility and dark mode support."
section: marketing
kit: marketing
category: skills
order: 108
---

# UI Styling

> Build polished, accessible user interfaces using shadcn/ui components, Radix UI primitives, and Tailwind CSS with built-in dark mode and theming.

## What This Skill Does

**The Challenge**: Building consistent, accessible, and themeable UIs from scratch is time-consuming. Teams reinvent component patterns, struggle with accessibility, and maintain inconsistent styling across products.

**The Solution**: UI Styling skill leverages shadcn/ui's copy-paste component library, Radix UI's accessibility primitives, and Tailwind CSS's utility classes to build production-quality UIs with proper dark mode, keyboard navigation, and ARIA support out of the box.

## Activation

**Implicit**: Activates automatically for Frontend Developer, UI Designer, and Full-Stack Developer agents.

**Explicit**: Activate via prompt:
```
Activate ui-styling skill to build a pricing table with shadcn/ui
```

## Capabilities

### 1. shadcn/ui Components
Copy-paste component library built on Radix UI and Tailwind.

**Install components**:
```bash
npx shadcn-ui@latest add button card dialog form input table
```

**Usage pattern**:
```tsx
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function PricingCard({ plan, price }: Props) {
  return (
    <Card className="border-2 border-primary">
      <CardHeader>
        <CardTitle>{plan}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold">${price}/mo</p>
        <Button className="w-full mt-4">Get started</Button>
      </CardContent>
    </Card>
  );
}
```

### 2. Tailwind CSS Utilities
Responsive, utility-first styling with consistent spacing and typography.

**Layout patterns**:
```tsx
// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

// Flex centering
<div className="flex items-center justify-between">

// Responsive padding
<section className="px-4 py-12 md:px-8 md:py-20">
```

**Design tokens**:
- Colors: `text-foreground`, `bg-background`, `border-border`
- Spacing: `space-y-4`, `gap-6`, `p-6`
- Typography: `text-sm font-medium`, `text-2xl font-bold`

### 3. CSS Variables and Theming
Centralized design tokens with automatic dark mode.

```css
/* globals.css */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --radius: 0.5rem;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 210 40% 98%;
}
```

### 4. Radix UI Primitives
Unstyled, accessible component primitives for custom designs.

```tsx
import * as Dialog from '@radix-ui/react-dialog';

<Dialog.Root>
  <Dialog.Trigger asChild>
    <Button>Open</Button>
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0 bg-black/50" />
    <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-96">
      <Dialog.Title>Title</Dialog.Title>
      <Dialog.Description>Description</Dialog.Description>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
```

## Prerequisites

- Next.js or React project with Tailwind CSS
- shadcn/ui initialized: `npx shadcn-ui@latest init`

## Configuration

**`tailwind.config.ts`**:
```ts
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { border: 'hsl(var(--border))', background: 'hsl(var(--background))' }
    }
  }
}
```

## Best Practices

**1. Use CSS variables for all colors**
Hard-coded hex values break theming. Always reference `hsl(var(--primary))`.

**2. Mobile-first responsive design**
Base styles for mobile, `md:` and `lg:` prefixes for larger screens.

**3. Prefer shadcn/ui over writing from scratch**
shadcn/ui components handle accessibility (ARIA, keyboard nav) automatically.

## Common Use Cases

### Use Case 1: SaaS Dashboard Layout
**Scenario**: Build admin dashboard with sidebar, header, and content area.

**Components**: `Sheet` (mobile sidebar), `NavigationMenu`, `Card`, `Table`, `Button`

**Output**: Responsive dashboard layout with collapsible sidebar.

### Use Case 2: Marketing Landing Page
**Scenario**: Hero section, features grid, pricing table, and CTA sections.

**Components**: Custom Tailwind classes, `Card`, `Button`, `Badge`

**Output**: Conversion-optimized landing page with dark mode.

## Troubleshooting

**Issue**: Tailwind classes not applying
**Solution**: Verify `tailwind.config.ts` content paths include all component files.

**Issue**: Dark mode not switching
**Solution**: Set `darkMode: 'class'` in Tailwind config. Toggle `.dark` class on `<html>`.

## Related Skills

- [UI/UX Pro Max](/docs/marketing/skills/ui-ux-pro-max) - Advanced design systems
- [Web Frameworks](/docs/marketing/skills/web-frameworks) - Next.js App Router setup
- [Web Design Guidelines](/docs/marketing/skills/web-design-guidelines) - Design compliance review

## Related Commands

- `/ckm:ui-styling` - UI component and styling workflows
- `/ckm:ui-ux-pro-max` - Advanced design system implementation
