---
title: "ckm:banner-design"
description: "Design banners for social media, ads, website heroes with AI visuals, brand consistency, and multi-format export."
section: marketing
category: skills
order: 63
---

# Banner Design

> Generate on-brand banners for every placement — social media, display ads, email headers, and website heroes.

## What This Skill Does

**The Challenge**: Marketing teams need banners in dozens of sizes for different platforms. Manual design is slow, inconsistent, and expensive. AI-generated visuals lack brand cohesion without structured guidelines.

**The Solution**: Banner Design skill combines AI image generation (Midjourney, DALL-E, Ideogram), brand token application, copy overlay patterns, and multi-format export. Produces campaign-ready banners with consistent typography, colors, and messaging hierarchy.

## Activation

**Implicit**: Activates when user requests banners, ad creatives, hero images, or social media visuals.

**Explicit**: Activate via prompt:
```
Activate banner-design skill to create [banner type] for [platform/campaign]
```

## Capabilities

### 1. Platform Size Presets
Pre-configured dimensions for every major placement.

**Social media**:
| Platform | Size | Format |
|----------|------|--------|
| LinkedIn cover | 1584×396px | PNG |
| Twitter/X header | 1500×500px | PNG |
| Instagram post | 1080×1080px | PNG |
| Facebook ad | 1200×628px | PNG |

**Display advertising**:
- Leaderboard: 728×90px
- Medium rectangle: 300×250px
- Half page: 300×600px
- Billboard: 970×250px

### 2. AI Image Generation Prompts
Structured prompt templates for brand-consistent visuals.

**Prompt structure**:
```
[Subject] in [style], [mood], [color palette from brand],
professional marketing visual, high quality, [negative: text, watermarks]
```

**Style presets**: Photorealistic, flat illustration, isometric, abstract, gradient, dark/light mode.

### 3. Copy Overlay System
Hierarchy rules for headlines, subheads, CTAs on banners.

**Banner anatomy**:
1. Visual (60% of space)
2. Headline (large, high contrast)
3. Subhead or benefit statement (optional)
4. CTA button (bottom right or centered)
5. Logo (corner, 10% of width)

### 4. Brand Token Application
Apply brand colors, fonts, and spacing automatically.

**Brand variables**: `assets/brand/tokens.md`

## Prerequisites

- AI image API key: `OPENAI_API_KEY` or `GEMINI_API_KEY`
- ImageMagick for local compositing (optional)
- Brand guidelines in `assets/brand/`

## Best Practices

**1. Design for smallest size first**
If 300×250 looks good, scale up. Reverse rarely works.

**2. Keep copy to 5 words or fewer**
Banner viewers have 1.5 seconds. Short wins.

**3. Test dark and light versions**
Many placements appear on varied backgrounds. Create both.

## Common Use Cases

### Use Case 1: Product Launch Ad Set
**Scenario**: Create full ad set (5 sizes) for Google Display Network campaign.

**Workflow**:
1. Generate hero visual with AI (1200×628 base)
2. Write headline using copywriting skill (5 words max)
3. Export to all display sizes using size presets
4. Apply brand tokens (colors, logo placement)
5. Save to `assets/campaigns/product-launch/banners/`

### Use Case 2: Social Media Campaign Covers
**Scenario**: Update LinkedIn + Twitter covers for quarterly campaign.

**Workflow**:
1. Select campaign color from brand palette
2. Generate abstract background with AI
3. Overlay company tagline and logo
4. Export LinkedIn (1584×396) and Twitter (1500×500)

## Troubleshooting

**Issue**: AI-generated visuals don't match brand style
**Solution**: Add brand reference images to prompt. Use style transfer or img2img with existing on-brand assets.

**Issue**: Text illegible on busy backgrounds
**Solution**: Add semi-transparent overlay (60% black or white) behind text. Increase font weight.

## Related Skills

- [AI Artist](/docs/marketing/skills/ai-artist) - Advanced AI image generation
- [Design System](/docs/marketing/skills/design-system) - Brand tokens and design guidelines
- [Logo Design](/docs/marketing/skills/logo-design) - Logo assets for banners
- [Ads Management](/docs/marketing/skills/ads-management) - Deploy banners in ad campaigns

## Related Commands

- `/ckm:design` - Design task routing
- `/ai-artist` - Generate AI visuals
