---
title: "ckm:design-system"
description: "Token architecture, component specifications, and systematic design for consistent, scalable marketing interfaces."
section: marketing
category: skills
order: 73
---

> Build systematic design foundations — token architecture, component specs, and style guides that scale across your entire product.

## What This Skill Does

**The Challenge**: Marketing sites and tools become visually inconsistent as teams grow. Colors drift, spacing varies, components diverge across pages. Without a design system, every new page requires starting from scratch.

**The Solution**: Design System skill establishes token architecture (colors, typography, spacing, motion), component specifications, usage guidelines, and Tailwind CSS integration. Produces a living design reference that teams can actually follow.

## Activation

**Implicit**: Activates when user requests design tokens, component library, style guide, or systematic design work.

**Explicit**: Activate via prompt:
```
Activate design-system skill to [create/extend/document] design system for [project]
```

## Capabilities

### 1. Token Architecture
Structured design token layers from primitive to semantic.

**Three-tier token model**:
```
Primitive tokens     →  Semantic tokens      →  Component tokens
blue-600: #2563eb   →  color-primary: blue-600  →  btn-bg: color-primary
gray-100: #f3f4f6   →  color-surface: gray-100  →  card-bg: color-surface
```

**Token categories**:
| Category | Tokens | Examples |
|----------|--------|---------|
| Color | brand, semantic, neutral | `--color-primary`, `--color-danger` |
| Typography | scale, weight, line-height | `--text-xl`, `--font-bold` |
| Spacing | scale 4px-based | `--space-4`, `--space-8` |
| Radius | size variants | `--radius-sm`, `--radius-full` |
| Shadow | elevation levels | `--shadow-md`, `--shadow-xl` |
| Motion | duration, easing | `--duration-200`, `--ease-in-out` |

### 2. Tailwind CSS Integration
Map design tokens to Tailwind config.

**`tailwind.config.ts`**:
```typescript
theme: {
  extend: {
    colors: {
      primary: { DEFAULT: "#2563eb", hover: "#1d4ed8" },
      surface: { DEFAULT: "#0f172a", muted: "#1e293b" },
    },
    fontFamily: { sans: ["Inter", "sans-serif"], mono: ["Geist Mono", "monospace"] },
  },
}
```

### 3. Component Specifications
Document component anatomy, variants, and states.

**Component spec template**:
```markdown
## Button Component
**Variants**: primary | secondary | ghost | danger
**Sizes**: sm | md | lg
**States**: default | hover | focus | active | disabled | loading
**Anatomy**: [icon?] + label + [icon?]
**Spacing**: px-4 py-2 (md), px-3 py-1 (sm), px-6 py-3 (lg)
```

### 4. Documentation Generator
Produce style guide markdown from token files.

**Output**: `docs/design-system.md` with color swatches, typography specimens, spacing scale.

## Prerequisites

- Tailwind CSS project
- Brand colors and fonts defined (or provide direction)
- Component library choices made (Radix, Shadcn, headless)

## Best Practices

**1. Semantic tokens over primitive**
Use `--color-primary` not `--blue-600` in component code. Semantics survive brand changes.

**2. Scale spacing by 4px**
4, 8, 12, 16, 24, 32, 48, 64, 96. Consistent rhythm eliminates visual chaos.

**3. Document intent, not just value**
"Used for interactive elements needing high contrast" + `#2563eb` beats `#2563eb` alone.

## Common Use Cases

### Use Case 1: New SaaS Marketing Site
**Scenario**: Build design system for B2B marketing site before development starts.

**Workflow**:
1. Extract brand colors from logo/guidelines
2. Build primitive color scale (10 shades per brand color)
3. Map semantic tokens (primary, secondary, surface, text, border)
4. Configure Tailwind with semantic tokens
5. Define typography scale (5 levels: xs to 3xl display)
6. Document spacing and component specs

### Use Case 2: Extending Existing System
**Scenario**: Add dark mode support to existing Tailwind-based site.

**Workflow**:
1. Audit existing color usage (find all hardcoded hex values)
2. Replace with semantic tokens using CSS custom properties
3. Add dark mode variants using `dark:` prefix or `[data-theme='dark']`
4. Test all component states in dark mode

## Troubleshooting

**Issue**: Tailwind purges custom token classes
**Solution**: Add token classes to `safelist` in Tailwind config, or use CSS custom properties instead of Tailwind classes for dynamic values.

**Issue**: Design tokens not consistent across team
**Solution**: Single source of truth: `src/styles/tokens.css`. Import everywhere. Document in `docs/design-system.md`.

## Related Skills

- [Brand](/docs/marketing/skills/brand) - Brand foundation for token values
- [Frontend Design](/docs/marketing/skills/frontend-design) - Implement system in components
- [Frontend Development](/docs/marketing/skills/frontend-development) - Technical implementation
- [Design](/docs/marketing/skills/design) - Design task routing

## Related Commands

- `/ckm:design` - Design task router
- `/ui-styling` - Apply styling to components
