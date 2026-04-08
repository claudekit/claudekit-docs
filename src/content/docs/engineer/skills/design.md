---
title: "ck:design"
description: "Comprehensive design skill covering logo generation, corporate identity, presentations, banners, icons, and social media assets"
section: engineer
kit: engineer
category: skills
order: 66
---

# Design

Unified design skill that handles brand identity, logo generation, corporate identity programs (CIP), HTML presentations, banner design, icon design, and social media assets. Uses Gemini AI for image generation across 55+ logo styles, 22 banner styles, and 15 icon styles.

## What This Skill Does

Design routes your request to the appropriate sub-capability based on what you need — logos, CIP mockups, presentation slides, banners, icons, or social photos. Each sub-capability has its own style library, color palettes, and industry-specific guides.

## When to Use

- Creating a brand identity from scratch
- Generating logo concepts with AI
- Building a corporate identity program (business cards, letterheads, etc.)
- Creating presentation slides with charts
- Designing banners for social media, ads, or print
- Generating icons for your app or site
- Creating social media post images

## Capabilities

| Capability | Styles | Output |
|------------|--------|--------|
| **Logo** | 55 styles, 30 color palettes, 25 industry guides | AI-generated logos via Gemini |
| **CIP** | 20 styles, 50+ deliverables, 20 industries | Mockup images + HTML presentation |
| **Slides** | Strategic layouts with Chart.js | Self-contained HTML presentation |
| **Banners** | 22 art direction styles | Social, ads, web, and print formats |
| **Icons** | 15 styles | SVG output via Gemini |
| **Social Photos** | Multi-platform templates | HTML-to-screenshot export |

## Arguments

| Argument | Description |
|----------|-------------|
| `design-type` | `logo`, `cip`, `slides`, `banner`, `icon`, `social` |
| `context` | Brand name, description, or project context |

## Example Usage

```
/ck:design logo "TechFlow - a developer productivity tool"
/ck:design cip "TopGroup consulting firm" --logo /path/to/logo.png
/ck:design slides "Q4 revenue analysis with charts"
/ck:design banner "Product launch announcement for Twitter and LinkedIn"
/ck:design icon "settings gear icon" --style outlined
/ck:design social "New feature announcement" --platforms twitter,linkedin
```

## Routing

Design automatically delegates to specialized sub-skills when appropriate:

| Request Type | Routes To |
|-------------|-----------|
| Brand identity, voice, assets | `brand` skill |
| Design tokens, CSS variables | `design-system` skill |
| shadcn/ui, Tailwind theming | `ui-styling` skill |
| Logo, CIP, slides, banners, icons, social | Built-in sub-capabilities |

## Supported Platforms (Social)

Facebook, Twitter/X, LinkedIn, YouTube, Instagram, Pinterest, TikTok, Threads, Google Ads

## Related Skills

- [UI Styling](/docs/engineer/skills/ui-styling) — component-level UI theming with shadcn/ui
- [AI Artist](/docs/engineer/skills/ai-artist) — standalone image generation with 129 styles
- [Frontend Design](/docs/engineer/skills/frontend-design) — polished UI implementation from designs
- [Show Off](/docs/engineer/skills/show-off) — HTML showcase pages
