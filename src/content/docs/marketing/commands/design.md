---
title: "/design"
description: "AI-powered image generation with brand context, enhanced prompts, and automatic verification for marketing assets"
section: marketing
category: commands
order: 13
published: true
---

> Generate on-brand visual assets with AI

## Quick Start

```bash
/design hero banner for landing page
```

**What happens**:
1. Extracts brand context from docs/brand-guidelines.md
2. Enhances prompt with brand colors, style, mood
3. Generates image with Imagen 4
4. Verifies against brand palette
5. Outputs image with metadata

**Output**: `assets/banners/hero-banner-251229.png`

## What It Does

### Before /design
- Manual design work (1-4 hours)
- Hire designers ($50-500)
- Stock photos (generic, overused)
- Brand inconsistency

### After /design
- AI-generated assets (2 minutes)
- Brand-consistent by default
- Unique visuals
- Multiple variations instantly

## Syntax

```bash
/design [description]
```

## Examples

### Example 1: Hero Banner

**Input**:
```bash
/design hero banner for SaaS landing page
```

**Process**:
```markdown
✓ Brand context extracted from docs/brand-guidelines.md
   - Primary: Ocean Blue (#0077B6)
   - Accent: Golden Amber (#FFB627)
   - Style: Modern, minimalist, professional

✓ Prompt enhanced:
   Simple: "hero banner for SaaS landing page"
   Enhanced: "Modern minimalist SaaS hero section, professional team
   collaborating in sophisticated workspace, ocean blue and golden amber
   color palette, clean interface visible on screens, natural lighting,
   premium atmosphere, business-forward composition, cinematic depth,
   high-end corporate aesthetic"

✓ Image generated with Imagen 4 (16:9, 1920x1080)

✓ Verified:
   - Ocean Blue present: ✓
   - Golden Amber accents: ✓
   - Professional mood: ✓
   - High quality: ✓

Saved: assets/banners/hero-banner-saas-landing-251229.png
```

### Example 2: Social Media Graphic

**Input**:
```bash
/design LinkedIn post graphic, 1:1 aspect, stats overlay
```

**Output**:
```markdown
✓ Generated: 1080x1080 px square graphic
✓ Style: Professional, data-focused
✓ Elements: Clean chart visualization, brand colors
✓ Text space: Reserved for stat overlays

Saved: assets/banners/social-media/linkedin-stats-graphic-251229.png

Next: Add text overlays in design tool or use:
/design LinkedIn graphic with "76% faster workflows" text
```

### Example 3: Email Header

**Input**:
```bash
/design email header for welcome sequence
```

**Output**:
```markdown
✓ Generated: 600x200 px email header
✓ Style: Welcoming, friendly, professional
✓ Brand colors integrated naturally
✓ Mobile-optimized dimensions

Saved: assets/banners/email-headers/welcome-sequence-251229.png
```

## Output Paths

| Content Type | Path | Dimensions |
|--------------|------|------------|
| Banner/Header | assets/banners/ | 16:9 (1920x1080) |
| Social Media | assets/banners/social-media/ | 1:1 (1080x1080), 9:16 |
| Email Header | assets/banners/email-headers/ | 600x200 |
| Landing Page | assets/banners/landing-pages/ | 16:9 |
| Campaign Asset | assets/designs/campaigns/ | Various |
| Infographic | assets/infographics/ | Custom |

## Aspect Ratios

| Format | Ratio | Use Case |
|--------|-------|----------|
| 16:9 | Landscape | Banners, hero sections |
| 1:1 | Square | Instagram, LinkedIn |
| 9:16 | Vertical | Stories, TikTok |
| 4:3 | Standard | Presentations |

## Brand Context

Auto-extracts from docs/brand-guidelines.md:
- Primary/secondary colors
- Visual style keywords
- Typography guidelines
- Mood and tone
- Prohibited elements

If no brand docs exist, prompts to run:
```bash
/marketing:init  # Create brand guidelines first
```

## Prompt Enhancement

### Simple Input
```
"team meeting"
```

### AI-Enhanced Prompt
```
"Executive team meeting in sophisticated dark-themed boardroom,
warm golden amber lighting casting soft glows across polished
conference table, ocean blue subtle highlights in glass panels,
professional atmosphere with calm confidence, premium minimalist
interior, cinematic depth of field, business-forward"
```

### Quality Checklist
- Scene context added ✓
- Colors integrated naturally ✓
- Photography language ✓
- Mood matches brand ✓
- No prohibited elements ✓

## Models

| Model | Quality | Speed | Best For |
|-------|---------|-------|----------|
| imagen-4.0-fast-generate-001 | Good | 2-3 sec | Drafts, iterations |
| imagen-4.0-generate-001 | High | 5-8 sec | Final assets |
| imagen-4.0-ultra-generate-001 | Ultra | 15-20 sec | Hero images |

## Workflow Integration

### Content Creation Flow
```bash
# Blog post with visuals
/content blog "AI marketing guide"
/design featured image for blog post
/design infographic showing AI benefits

# Email campaign
/email launch "New Product"
/design email header for product launch
/design product showcase graphic
```

### Campaign Assets
```bash
# Complete campaign visuals
/campaign create "Q1 Launch"
/design hero banner for landing page
/design social media pack (Twitter, LinkedIn, Instagram)
/design email header series
```

## Related Commands

- [/content](/docs/marketing/commands/content) - Content needing visuals
- [/email](/docs/marketing/commands/email) - Email headers
- [/social](/docs/marketing/commands/social) - Social graphics
- [/campaign](/docs/marketing/commands/campaign) - Campaign assets

## Skills Activated

- **ai-multimodal**: Image generation (Imagen 4)
- **brand-guidelines**: Brand consistency
- **creativity**: Visual design direction

---

**Generate. Verify. Ship.** AI-powered visuals that match your brand.
