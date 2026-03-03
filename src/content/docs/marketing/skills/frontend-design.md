---
title: "ckm:frontend-design"
description: "Create polished frontend interfaces from designs, screenshots, and mockups using React, Tailwind CSS, and design system tokens."
section: marketing
category: skills
order: 79
---

> Translate designs, screenshots, and mockups into pixel-accurate, responsive frontend components — fast.

## What This Skill Does

**The Challenge**: Bridging design and development requires interpreting visual intent, maintaining brand consistency, handling responsive breakpoints, and producing maintainable code. AI-assisted implementation often misses nuances that cause design drift.

**The Solution**: Frontend Design skill accepts screenshots, Figma exports, or design descriptions and produces clean React + Tailwind CSS implementations. Applies design system tokens, follows component patterns, and handles responsive behavior automatically.

## Activation

**Implicit**: Activates when user shares a screenshot, mockup, or visual description for implementation.

**Explicit**: Activate via prompt:
```
Activate frontend-design skill to implement [component/page] from [design/screenshot/description]
```

## Capabilities

### 1. Visual-to-Code Translation
Implement UI from multiple input types.

**Input types accepted**:
- Screenshots (PNG, JPG) — describe spacing, layout, typography
- Figma exports (SVG, component specs)
- Verbal descriptions ("card with left avatar, title, subtitle, CTA button")
- Existing HTML for React conversion

**Translation process**:
1. Identify layout type (flex, grid, stack)
2. Map typography to design system scale
3. Extract colors to design tokens
4. Build component with semantic HTML
5. Add responsive breakpoints

### 2. Component Implementation Patterns
Production-ready patterns for common marketing components.

**Marketing component library**:
```tsx
// Hero section
<section className="flex flex-col items-center text-center py-24 px-6">
  <Badge>New Feature</Badge>
  <h1 className="text-5xl font-bold tracking-tight mt-4">{headline}</h1>
  <p className="text-xl text-muted-foreground mt-6 max-w-2xl">{subheadline}</p>
  <div className="flex gap-4 mt-10">
    <Button size="lg">{primaryCTA}</Button>
    <Button variant="ghost" size="lg">{secondaryCTA}</Button>
  </div>
</section>
```

### 3. Responsive Implementation
Mobile-first breakpoint patterns.

**Standard breakpoints (Tailwind)**:
```
sm: 640px   (large phone)
md: 768px   (tablet)
lg: 1024px  (laptop)
xl: 1280px  (desktop)
2xl: 1536px (wide)
```

**Pattern**: Design desktop → add `sm:`, `md:` overrides for mobile-specific layouts.

### 4. Design-to-Token Mapping
Automatically map design values to system tokens.

**Mapping rules**:
- Colors → use semantic tokens (`text-primary`, `bg-surface`)
- Spacing → use scale (`p-4` = 16px, `p-6` = 24px)
- Typography → use scale (`text-xl`, `text-2xl`)
- Never hardcode hex values or px in Tailwind classes

## Prerequisites

- React 18+ project
- Tailwind CSS configured
- Design system tokens set up (see [Design System](/docs/marketing/skills/design-system))
- Component library: Shadcn/ui or Radix UI (recommended)

## Best Practices

**1. Semantic HTML first**
Use `<section>`, `<article>`, `<header>` correctly. SEO and accessibility depend on it.

**2. Extract to components early**
If a block appears twice or exceeds 50 lines, extract to a named component.

**3. Name by purpose, not appearance**
`<PricingCard>` not `<BlueBoxWithBorder>`.

## Common Use Cases

### Use Case 1: Implement Pricing Page from Screenshot
**Scenario**: Designer provides screenshot of desired pricing page layout.

**Workflow**:
1. Analyze screenshot with AI multimodal
2. Identify layout: 3-column card grid
3. Map colors and spacing to design system tokens
4. Implement `PricingCard` component
5. Build `PricingPage` composing 3 cards + header
6. Add responsive: stack columns on mobile

### Use Case 2: Landing Page Hero Section
**Scenario**: Marketing team describes hero verbally: "Big headline, two CTAs, product screenshot to the right".

**Workflow**:
1. Build two-column layout (copy | image)
2. Implement headline with gradient text effect
3. Add primary + secondary CTA buttons
4. Add product screenshot with drop shadow
5. Stack columns on mobile (image below on small screens)

## Troubleshooting

**Issue**: Component looks right in desktop but breaks on mobile
**Solution**: Open browser devtools, set to 375px width. Check `flex-wrap`, `overflow`, and text truncation.

**Issue**: Colors don't match design
**Solution**: Verify design system tokens are loaded. Check Tailwind config extends the right custom colors.

## Related Skills

- [Design System](/docs/marketing/skills/design-system) - Tokens and component specs
- [Frontend Development](/docs/marketing/skills/frontend-development) - Full frontend implementation
- [Brand](/docs/marketing/skills/brand) - Brand guidelines to follow
- [AI Multimodal](/docs/marketing/skills/ai-multimodal) - Analyze design screenshots

## Related Commands

- `/ckm:design` - Design task routing
- `/ui-styling` - Apply styles to components
