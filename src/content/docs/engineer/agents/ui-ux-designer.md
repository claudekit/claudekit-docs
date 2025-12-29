---
title: UI/UX Designer Agent
description: Award-winning UI/UX design with Three.js, responsive layouts, and conversion optimization
section: engineer
kit: engineer
category: agents
order: 11
published: true
---

# UI/UX Designer Agent

Research trending designs, create production-ready interfaces, and ship conversion-optimized layouts with Three.js 3D, pure HTML/CSS/JS, and WCAG 2.1 AA compliance.

## When to Use

- Building landing pages, dashboards, or web apps from scratch
- Recreating designs from screenshots or videos
- Implementing 3D interactive experiences with Three.js/WebGL
- Creating responsive design systems with CSS tokens

## Key Capabilities

| Capability | Output |
|------------|--------|
| **Research** | Dribbble, Behance, Awwwards trend analysis → design decisions |
| **Wireframing** | Information architecture → component hierarchy → layout structure |
| **Visual Design** | Color palettes, typography scale, spacing system → CSS tokens |
| **3D Graphics** | Three.js scenes, WebGL shaders, particle systems → interactive 3D |
| **Implementation** | Semantic HTML, CSS Grid/Flexbox, vanilla JS → production code |
| **Optimization** | WebP images, lazy loading, minification → Lighthouse 90+ score |
| **Accessibility** | Keyboard nav, ARIA, screen readers → WCAG 2.1 AA compliant |
| **Responsive** | Mobile-first (320px+, 768px+, 1024px+) → works everywhere |

## Common Use Cases

### 1. SaaS Landing Page
**Who:** Product team launching new SaaS product
**Prompt:** `/design:good [create conversion-optimized landing page for AI analytics platform with hero 3D visualization, pricing tiers, testimonials]`
**Output:** Complete landing page with hero section (animated 3D graph), value props, bento grid features, pricing comparison, FAQ accordion, sticky nav, above-fold CTA

### 2. 3D Product Showcase
**Who:** E-commerce team selling physical products
**Prompt:** `/design:3d [create interactive 3D product viewer for wireless headphones with 360° rotation, material textures, color variants]`
**Output:** Three.js scene with orbit controls, PBR materials, HDR lighting, color picker UI, zoom/pan/rotate interactions

### 3. Clone from Screenshot
**Who:** Startup replicating competitor design
**Prompt:** `/design:screenshot [./competitor-landing.png]`
**Output:** Pixel-perfect recreation with semantic HTML, modern CSS, responsive breakpoints, accessibility improvements

### 4. Dashboard Interface
**Who:** Internal tools team building analytics dashboard
**Prompt:** `/design:good [create dark-themed analytics dashboard with charts, KPI cards, data tables, filters sidebar]`
**Output:** Responsive dashboard layout with CSS Grid, chart containers, skeleton loaders, empty states, mobile nav drawer

### 5. Design System from Video
**Who:** Agency recreating client's animated prototype
**Prompt:** `/design:video [./design-prototype.mp4]`
**Output:** Component library matching video specs, micro-animations, transitions, color/typography tokens, style guide docs

## Pro Tips

- **Fast prototyping:** Use `/design:fast` for 60-120s mockups, `/design:good` for production-ready (3-5min)
- **3D performance:** Three.js scenes auto-optimize for 60fps with LOD, frustum culling, texture compression
- **Vietnamese support:** All designs include Google Fonts with Vietnamese diacritics (Inter, Roboto, Noto Sans)
- **CRO built-in:** Above-fold CTAs, social proof placement, trust signals, risk reversal automatically included
- **Design analysis:** Use `/design:describe [path]` to extract colors, typography, spacing from any screenshot
- **Bento grids:** Request "bento grid layout" for modern mixed-size card layouts (like Apple, Linear)
- **Glassmorphism:** Specify "glassmorphism" for backdrop blur + transparency effects
- **Core Web Vitals:** All designs target LCP <2.5s, FID <100ms, CLS <0.1 with lazy loading, font optimization

## Related Agents

- [Copywriter](/docs/agents/copywriter) - Generate compelling headlines, CTAs, product descriptions
- [Fullstack Developer](/docs/agents/fullstack-developer) - Integrate designs with backend APIs, databases
- [Scout](/docs/agents/scout) - Explore existing components and patterns
- [Code Reviewer](/docs/agents/code-reviewer) - Validate HTML semantics, CSS performance, accessibility

## Key Takeaway

ClaudeKit UI/UX Designer agent ships award-winning interfaces in minutes, not days. Research-backed designs with production-ready code, WCAG compliance, and Lighthouse 90+ scores out of the box. No Figma needed.
