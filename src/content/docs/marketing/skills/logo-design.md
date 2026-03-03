---
title: "ckm:logo-design"
description: "Logo design with 55 styles, 30 color palettes, and AI generation — from concept to production-ready vector assets."
section: marketing
category: skills
order: 84
---

# Logo Design

> Create distinctive, scalable logos with AI generation, 55 curated styles, and 30 color palettes — from concept to production-ready SVG.

## What This Skill Does

**The Challenge**: Logo design is the most visible brand decision but also the most subjective. Without structured exploration, teams iterate endlessly on superficial variations while missing fundamentally better concepts.

**The Solution**: Logo Design skill provides structured exploration with 55 visual styles, 30 color palettes, AI generation prompts, and design critique frameworks. Produces concepts that translate to vector format and scale from favicon to billboard.

## Activation

**Implicit**: Activates when user requests logo, icon, wordmark, or logomark design.

**Explicit**: Activate via prompt:
```
Activate logo-design skill to create logo for [company/product] with [style/direction]
```

## Capabilities

### 1. Brand Discovery Questions
Extract positioning before any design work.

**5 essential questions**:
1. What 3 adjectives describe your brand personality?
2. Who is your primary customer? What do they value?
3. Which competitor logos do you find effective? (For contrast, not copying)
4. Which styles feel wrong for your brand? (Equally important)
5. What industries or aesthetics inspire you?

### 2. 55 Logo Styles
Pre-cataloged aesthetic directions with examples.

**Style categories**:
| Category | Styles | Examples |
|----------|--------|---------|
| Geometric | Minimal, Bauhaus, Swiss, Constructivist | Stripe, Figma |
| Lettermark | Monogram, Typography-first, Slab | IBM, NASA |
| Symbol | Abstract, Pictorial, Emblem | Apple, Target |
| Wordmark | Script, Modern, Vintage | Google, Coca-Cola |
| Combination | Icon + Text, Badge, Shield | Slack, Reddit |

**Full style catalog**: `references/logo-styles.md`

### 3. 30 Color Palettes
Curated palettes with psychological associations and industry fit.

**Palette families**:
- Tech/SaaS: Blues, teals, deep navy
- Creative/Media: Bold primaries, neons, gradients
- Finance/Enterprise: Navy, forest green, charcoal
- Health/Wellness: Sage, warm beige, forest
- Consumer/Fun: Coral, orange, bright yellow

**Full palette catalog**: `references/logo-color-palettes.md`

### 4. AI Generation Prompts
Structured prompts for consistent, production-quality logo concepts.

**Prompt template**:
```
Minimalist logo for [company name], [style] aesthetic,
[primary color], [secondary color], vector style,
white background, no text, scalable icon,
[specific element if desired].
Negative: photorealistic, shadows, gradients, complex details.
```

**AI tools**: DALL-E 3, Midjourney v6, Ideogram (best for logos)

### 5. Scalability Testing
Verify logo works across all required sizes.

**Size test matrix**:
- 512×512px: Full color version
- 128×128px: App icon (simplified if needed)
- 32×32px: Favicon (icon-only, high contrast)
- 1200×630px: Social share card
- Monochrome: Single-color version must work

## Prerequisites

- Brand discovery questionnaire completed
- AI image generation access
- Vector tool: Figma, Adobe Illustrator, or Inkscape for refinement

## Best Practices

**1. Design in black first**
If the logo doesn't work in black on white, color won't save it.

**2. Generate 5-10 concepts, not 1**
Diversity of directions beats depth on one concept. Get client to react to variety.

**3. Always deliver vector**
SVG or AI/EPS source file, not just PNG. Logos need infinite scalability.

## Common Use Cases

### Use Case 1: Startup Logo from Scratch
**Scenario**: B2B SaaS startup needs logo before website launch.

**Workflow**:
1. Complete brand discovery (5 questions)
2. Select 3 style directions to explore (e.g., geometric, lettermark, abstract)
3. Choose 2 color palettes to try
4. Generate 10 AI concepts across styles and palettes
5. Narrow to top 3 with stakeholders
6. Refine chosen direction in Figma
7. Deliver: SVG, PNG at 5 sizes, monochrome version

### Use Case 2: Logo Refresh
**Scenario**: 5-year-old logo feels dated, needs modernization.

**Workflow**:
1. Audit existing logo equity (what's recognizable, what's dated)
2. Identify evolution vs revolution direction
3. Maintain brand equity elements (colors, core shape) while modernizing style
4. Deliver evolution concept alongside radical alternative

## Troubleshooting

**Issue**: AI-generated logos have text artifacts or poor letterforms
**Solution**: Add "no text, icon only" to prompt. For wordmarks, generate icon only, then set type separately in Figma.

**Issue**: Logo looks good on screen but fails at small sizes
**Solution**: Create icon-only lockup for sizes below 64px. Simplify internal details.

## Related Skills

- [CIP Design](/docs/marketing/skills/cip-design) - Full corporate identity system
- [Brand](/docs/marketing/skills/brand) - Brand strategy and positioning
- [AI Artist](/docs/marketing/skills/ai-artist) - Advanced AI image generation
- [Banner Design](/docs/marketing/skills/banner-design) - Marketing assets using the logo

## Related Commands

- `/ckm:design` - Design task routing
- `/ai-artist` - AI visual generation
