---
title: "ckm:ui-ux-pro-max"
description: "UI/UX design with 50 visual styles, 21 color palettes, and 9 tech stacks — from design brief to production-ready implementation."
section: marketing
kit: marketing
category: skills
order: 109
---

> Design exceptional UIs with a curated library of 50 visual styles, 21 palettes, and multi-stack implementation across 9 technology options.

## What This Skill Does

**The Challenge**: Consistent, professional UI/UX requires design system knowledge, visual style judgment, and stack-specific implementation expertise. Teams with no dedicated designer default to generic, forgettable interfaces.

**The Solution**: UI/UX Pro Max provides an extensive style library (50 visual styles from minimal to brutalist), 21 color palettes, and implementation guidance across 9 tech stacks. Turns design briefs into production components with consistent visual identity.

## Activation

**Implicit**: Activates automatically for UI Designer, Frontend Developer, and Product Designer agents.

**Explicit**: Activate via prompt:
```
Activate ui-ux-pro-max skill to design a pricing page in neo-brutalist style with an indigo palette
```

## Capabilities

### 1. Visual Style Library (50 Styles)
Curated styles from minimal to expressive.

**Style categories**:
| Category | Examples |
|----------|---------|
| Minimal | Clean, Swiss, Bauhaus, Zen |
| Corporate | Professional, Enterprise, B2B |
| Expressive | Neo-Brutalist, Glassmorphism, Neumorphism |
| Editorial | Magazine, Blog, Content-first |
| Dark | Terminal, Dark Pro, Midnight |
| Playful | Retro, Y2K, Vaporwave, Candy |
| Technical | Developer Tool, Dashboard, Data |

**Style selection**: Describe target audience and brand personality; skill recommends 3 matching styles.

### 2. Color Palette System (21 Palettes)
Pre-defined, accessible color systems with light and dark variants.

**Featured palettes**:
- **Indigo Pro**: Deep indigo, slate, and electric blue
- **Forest**: Earth greens with warm accents
- **Sunset**: Warm coral and amber gradients
- **Monochrome Plus**: Neutral grays with single accent
- **Ocean Dark**: Deep navy with cyan highlights

**Each palette includes**: Background, foreground, primary, secondary, accent, muted, and border colors.

### 3. Tech Stack Implementation (9 Stacks)
Design-to-code across supported frameworks.

**Supported stacks**:
1. Next.js + Tailwind + shadcn/ui (primary)
2. React + CSS Modules
3. Vue 3 + UnoCSS
4. Astro + Tailwind
5. Svelte + Tailwind
6. React Native + NativeWind
7. Flutter (Dart)
8. HTML + CSS (vanilla)
9. WordPress (Gutenberg blocks)

### 4. Component Design Templates
Production-ready component specifications for common patterns.

**Component library**:
- Landing pages (hero, features, pricing, testimonials, CTA)
- Dashboards (sidebar, metrics, tables, charts)
- Forms (onboarding, settings, checkout)
- Navigation (header, mobile menu, breadcrumbs)
- Marketing (email, social, ads)

## Prerequisites

- Design brief or component description
- Target tech stack selected
- Brand color or style preference (optional — skill can recommend)

## Configuration

No setup required. Style and palette libraries are built into the skill.

**Optional**: Provide existing brand colors for palette matching.

## Best Practices

**1. Match style to audience, not personal taste**
Developer tool → Terminal or Dashboard style. Consumer app → Playful or Minimal.

**2. Limit to 2-3 palette colors per component**
More colors create visual noise. Use primary for CTAs, secondary for highlights, neutral for base.

**3. Implement one component at a time**
Design full component system before implementing. Prevents inconsistency across pages.

## Common Use Cases

### Use Case 1: SaaS Product Landing Page
**Scenario**: New SaaS product needs complete marketing site.

**Design decisions**:
1. Audience: B2B developers → Recommend: "Dark Developer" style
2. Palette: Indigo Pro with dark background
3. Stack: Next.js + Tailwind + shadcn/ui
4. Components: Hero, Features (3-col grid), Pricing (3-tier), CTA

**Output**: Complete landing page component spec + Tailwind implementation.

### Use Case 2: Mobile App UI Kit
**Scenario**: iOS app needs consistent design system.

**Design decisions**:
1. Audience: Consumer fitness app → "Clean + Energy" style
2. Palette: Sunset with high contrast
3. Stack: React Native + NativeWind
4. Components: Onboarding, Dashboard, Activity cards, Profile

**Output**: Mobile UI kit with consistent visual language.

## Troubleshooting

**Issue**: Style feels inconsistent across components
**Solution**: Export palette as CSS variables and enforce through design tokens. Don't hand-pick colors per component.

**Issue**: Design looks good in spec but poor in browser
**Solution**: Check font loading, line height ratios, and spacing scale. Use `rem` not `px` for responsive scaling.

## Related Skills

- [UI Styling](/docs/marketing/skills/ui-styling) - Tailwind + shadcn/ui implementation
- [Web Design Guidelines](/docs/marketing/skills/web-design-guidelines) - Design compliance review
- [Brand](/docs/marketing/skills/brand) - Brand identity alignment

## Related Commands

- `/ckm:ui-ux-pro-max` - Full UI/UX design workflow
- `/ckm:ui-styling` - Component implementation
