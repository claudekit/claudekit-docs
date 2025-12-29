---
title: shadcn/ui Skill
description: Documentation for shadcn-ui
section: engineer
kit: engineer
category: skills/frontend
order: 4
published: true
---

# shadcn/ui Skill

Copy-paste accessible UI components built on Radix UI + Tailwind CSS that live in your codebase, not node_modules.

## When to Use

- Building React apps with Next.js, Vite, or Remix
- Need accessible components (WCAG-compliant dialogs, forms, tables)
- Want full ownership and customization of UI components
- Implementing forms with React Hook Form + Zod validation
- Building data-heavy interfaces (admin panels, dashboards)

## Quick Start

**Initialize:**
```bash
npx shadcn@latest init
```

**Add components:**
```bash
npx shadcn@latest add button dialog form
```

**Use:**
```tsx
import { Button } from "@/components/ui/button"

<Button variant="destructive">Delete</Button>
```

## Common Use Cases

### Admin Dashboard with Data Tables
**Who**: SaaS founder building analytics
```
"Build an admin dashboard with user table (sortable, filterable),
status badges, and delete confirmation dialogs"
```

### Multi-Step Form with Validation
**Who**: E-commerce developer adding checkout
```
"Create 3-step checkout form: shipping, payment, review.
Validate each step with Zod before proceeding"
```

### Modal-Heavy Workflow
**Who**: Product manager tool with popups
```
"Task management UI with create/edit modals, confirmation dialogs,
and toast notifications for all actions"
```

### Responsive Dashboard Cards
**Who**: Analytics app developer
```
"Dashboard with metric cards showing KPIs, trend charts,
and dropdown menus for time range selection"
```

### Command Palette Search
**Who**: Documentation site adding search
```
"Add Cmd+K command palette to search docs, navigate pages,
and trigger actions with keyboard shortcuts"
```

## Key Differences

| Feature | shadcn/ui | Material-UI | Ant Design |
|---------|-----------|-------------|------------|
| Distribution | Copy to codebase | npm package | npm package |
| Customization | Full control | Theme overrides | Theme config |
| Bundle Size | Only what you use | Entire library | Entire library |
| TypeScript | Native | Native | Native |
| Dependencies | Radix UI + Tailwind | Emotion | RC Components |
| Accessibility | Built-in (Radix) | Manual | Manual |

## Quick Reference

**Installation:**
```bash
npx shadcn@latest add button      # Single
npx shadcn@latest add form input  # Multiple
npx shadcn@latest add --all       # All components
```

**Essential Components:**
```bash
# Forms
npx shadcn@latest add form input label button select checkbox

# Modals/Overlays
npx shadcn@latest add dialog sheet popover toast

# Navigation
npx shadcn@latest add tabs dropdown-menu navigation-menu

# Data Display
npx shadcn@latest add table card badge avatar
```

**Form with Validation:**
```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

const form = useForm({
  resolver: zodResolver(schema)
})

<Form {...form}>
  <FormField name="email" render={({ field }) => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input type="email" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )} />
</Form>
```

**cn() Utility for Conditional Classes:**
```tsx
import { cn } from "@/lib/utils"

<Button className={cn(
  "bg-primary",
  isLoading && "opacity-50 cursor-not-allowed"
)}>
  Submit
</Button>
```

**Component Variants:**
```tsx
// Button variants: default, destructive, outline, secondary, ghost, link
<Button variant="destructive">Delete</Button>

// Sizes: default, sm, lg, icon
<Button size="sm">Small</Button>
```

## Pro Tips

- **Copy, don't import**: Components copy to `components/ui/`, modify freely
- **Compose, don't configure**: Build complex UIs by nesting simple components
- **Use cn()**: Merge Tailwind classes conditionally without conflicts
- **Dark mode**: All components support dark mode with CSS variables
- **Accessibility**: Radix UI handles focus management, ARIA, keyboard nav
- **Not activating?** Say: "Use shadcn-ui skill to build this form with validation"

## Related Skills

- [Frontend Design](/docs/skills/frontend/frontend-design) - High-design UI generation
- [UI Styling](/docs/skills/frontend/ui-styling) - Tailwind CSS patterns
- [Frontend Development](/docs/skills/frontend/frontend-development) - React best practices

## Key Takeaway

shadcn/ui gives you production-ready, accessible components you own and control. Unlike npm packages, components live in your codebase for full customization. Perfect for developers who want beautiful UIs without fighting a component library.
