---
title: "ckm:cip-design"
description: "Corporate Identity Program design with 50 deliverables and 20 styles — complete brand identity systems from logo to collateral."
section: marketing
category: skills
order: 65
---

> Build comprehensive Corporate Identity Programs with 50+ deliverables spanning logo, typography, color, and brand collateral.

## What This Skill Does

**The Challenge**: Corporate Identity Programs traditionally require months of agency work and cost tens of thousands of dollars. Solopreneurs and small teams lack structured frameworks to produce cohesive, professional identity systems.

**The Solution**: CIP Design skill provides a complete Corporate Identity Program framework with 50 structured deliverables, 20 visual style options, AI-assisted generation, and brand guideline documentation. From naming to business cards, every touchpoint is covered.

## Activation

**Implicit**: Activates when user requests brand identity, corporate identity, visual identity, or brand system design.

**Explicit**: Activate via prompt:
```
Activate cip-design skill to create corporate identity for [company/product]
```

## Capabilities

### 1. 50 CIP Deliverables
Complete identity system across five categories.

**Category breakdown**:
| Category | Deliverables | Examples |
|----------|-------------|---------|
| Foundation | 10 | Logo system, color palette, typography, iconography |
| Print Collateral | 12 | Business cards, letterhead, envelopes, brochures |
| Digital Assets | 10 | Favicon, app icon, email signature, social avatars |
| Environmental | 8 | Signage, office graphics, event booth |
| Brand Guidelines | 10 | Usage rules, do/don'ts, voice/tone, examples |

**Full deliverables list**: `references/cip-deliverables.md`

### 2. 20 Visual Styles
Pre-defined aesthetic directions for brand positioning.

**Style options include**:
- Minimalist / Clean
- Bold / Expressive
- Luxury / Premium
- Tech / Futuristic
- Organic / Natural
- Playful / Friendly
- Corporate / Professional
- Retro / Nostalgic

**Full style catalog**: `references/cip-styles.md`

### 3. Brand Discovery Process
Structured questionnaire to extract brand DNA before design.

**Discovery dimensions**:
1. Brand personality (adjectives: serious↔playful, modern↔classic)
2. Target audience psychographics
3. Competitive landscape and differentiation
4. Color psychology preferences
5. Inspiration references (3-5 brands)

### 4. AI-Assisted Generation
Prompt templates for logo concepts, color palettes, and pattern generation.

**Logo concept prompt structure**:
```
Logo for [company] in [style] style.
Industry: [sector]. Values: [3 adjectives].
Format: vector-style, minimal, scalable.
Color: [primary from palette].
```

## Prerequisites

- Brand discovery questionnaire completed
- AI image API: `OPENAI_API_KEY` or `GEMINI_API_KEY`
- Vector tool for refinement (Figma, Illustrator)

## Best Practices

**1. Start with brand personality, not aesthetics**
Visual decisions should flow from strategic positioning. Personality first.

**2. Design at smallest size**
A logo must work at 16×16px favicon. If it fails small, redesign.

**3. Test on real surfaces**
Mock up on business card, website, and app icon before finalizing.

## Common Use Cases

### Use Case 1: Complete SaaS Brand Identity
**Scenario**: B2B analytics startup needs full brand system.

**Workflow**:
1. Complete brand discovery questionnaire (30 min)
2. Select visual style (e.g., "Tech / Professional")
3. Generate 5 logo concepts with AI
4. Build color system (primary, secondary, neutrals, semantic)
5. Select typography pairing (display + body)
6. Create 50-deliverable production checklist
7. Export brand guidelines PDF

### Use Case 2: Brand Refresh
**Scenario**: Existing company modernizing visual identity.

**Workflow**:
1. Audit existing identity against 50-deliverable checklist
2. Identify gaps and outdated elements
3. Evolve (don't replace) core brand elements
4. Update guidelines document

## Troubleshooting

**Issue**: Brand feels inconsistent across deliverables
**Solution**: Create brand tokens (exact hex codes, font names, spacing values). Reference tokens in every deliverable.

**Issue**: Logo doesn't work in all contexts
**Solution**: Build logo system: full color, reversed, monochrome, icon-only variants.

## Related Skills

- [Logo Design](/docs/marketing/skills/logo-design) - Detailed logo generation workflow
- [Design System](/docs/marketing/skills/design-system) - Digital token architecture
- [Banner Design](/docs/marketing/skills/banner-design) - Marketing collateral
- [Brand](/docs/marketing/skills/brand) - Brand strategy and voice

## Related Commands

- `/ckm:design` - Design task routing
- `/ai-artist` - AI visual generation
