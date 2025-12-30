---
title: "Copywriting"
description: "Conversion-focused copy with proven formulas (AIDA, PAS, BAB), headline templates, CTA optimization, and custom writing style extraction."
section: marketing
category: skills
order: 8
---

> Write high-converting copy using proven formulas, headline templates, and custom writing styles extracted from your best content.

## What This Skill Does

**The Challenge**: Effective copywriting requires mastering conversion formulas, understanding psychological triggers, and maintaining consistent brand voice. Most teams lack structured frameworks for repeatable results.

**The Solution**: Copywriting skill provides battle-tested copy formulas (AIDA, PAS, BAB, 4Ps), headline templates, CTA patterns, and writing style extraction from user documents. Supports multiple formats (PDF, DOCX, images, videos) for style analysis.

## Activation

**Implicit**: Activates automatically for Copywriter, Content Creator, and Email Wizard agents.

**Explicit**: Activate via prompt:
```
Activate copywriting skill to write compelling ad copy and landing page content
```

## Capabilities

### 1. Copy Formulas for Every Format
Proven structures for landing pages, emails, ads, and product descriptions.

**Core formulas**:
| Formula | Structure | Best For |
|---------|-----------|----------|
| **AIDA** | Attention → Interest → Desire → Action | Landing pages, ads |
| **PAS** | Problem → Agitate → Solution | Email, sales pages |
| **BAB** | Before → After → Bridge | Testimonials, case studies |
| **4Ps** | Promise → Picture → Proof → Push | Long-form sales |
| **4Us** | Urgent + Unique + Useful + Ultra-specific | Headlines |
| **FAB** | Feature → Advantage → Benefit | Product descriptions |

**Formula guide**: `references/copy-formulas.md`

### 2. Headline Templates
90+ proven patterns for headlines, subject lines, and hooks.

**Top performers**:
- "How to [X] without [Y]" (removes objection)
- "[Number] ways to [benefit]" (list promise)
- "The secret to [outcome]" (curiosity gap)
- "Why [common belief] is wrong" (contrarian)

**Template library**: `references/headline-templates.md`

### 3. Writing Style Extraction
Extract tone, voice, and stylistic patterns from your best-performing content.

**Extract from multiple formats**:
```bash
# List available files
python scripts/extract-writing-styles.py --list

# Extract style from specific content
python scripts/extract-writing-styles.py --style founder-emails
```

**Supported formats**: `.md`, `.txt`, `.pdf`, `.docx`, `.xlsx`, `.pptx`, `.jpg`, `.png`, `.mp4`

**Requirements**: `GEMINI_API_KEY` for documents/media analysis

**Style catalog**: `assets/writing-styles/` (50 pre-defined styles)

## Prerequisites

**For style extraction**:
- `GEMINI_API_KEY` in `.env` for PDF/media analysis
- Python 3.8+ with `google-genai` package

**For copy formulas**:
- None (works out of the box)

## Configuration

**Writing styles directory**: `assets/writing-styles/`
```
assets/writing-styles/
├── default.md           # 50 pre-defined styles
├── founder-emails.md    # Extracted from user content
└── product-launch.md    # Campaign-specific styles
```

**Style reference**: `references/writing-styles.md`

## Best Practices

**1. Lead with benefit, not feature**
"Save 5 hours/week" (benefit) beats "Automated reporting" (feature).

**2. One CTA per piece**
Multiple calls-to-action dilute focus. Choose one primary action.

**3. Specificity beats vague claims**
"Increased conversions 47%" outperforms "Much better results".

## Common Use Cases

### Use Case 1: Landing Page Copy with AIDA
**Scenario**: Write homepage hero section for project management SaaS.

**Workflow**:
1. **Attention** (Headline): "Stop losing projects in email chaos"
2. **Interest** (Subhead): "One platform for tasks, timelines, and team collaboration"
3. **Desire** (Benefits): "See everything in one view. No more hunting through threads."
4. **Action** (CTA): "Start free 14-day trial"

**Formula used**: AIDA (loaded from `references/copy-formulas.md`)

### Use Case 2: Email Sequence with PAS
**Scenario**: Re-engagement email for inactive trial users.

**Workflow**:
1. **Problem**: "Most teams waste 30% of their time searching for information"
2. **Agitate**: "That's 12 hours/week lost. Imagine what you could build instead."
3. **Solution**: "Our search finds any file, message, or task in <2 seconds"

**Call-to-action**: "Reactivate your trial"

**Formula used**: PAS (loaded from `references/email-copy.md`)

## Troubleshooting

**Issue**: Copy feels generic, lacks brand voice
**Solution**: Use writing style extraction on your best content. Apply extracted patterns consistently.

**Issue**: Headlines not getting clicks
**Solution**: A/B test 5 variations using different templates. Track CTR over 48 hours.

**Issue**: CTA buttons not converting
**Solution**: Load CTA patterns guide (`references/cta-patterns.md`). Test benefit-driven vs action-driven CTAs.

## Related Skills

- [Content Marketing](/docs/marketing/skills/content-marketing) - Content planning and strategy
- [Email Marketing](/docs/marketing/skills/email-marketing) - Email copy patterns
- [Brand Guidelines](/docs/marketing/skills/brand-guidelines) - Voice consistency
- [Social Media](/docs/marketing/skills/social-media) - Platform-specific copy

## Related Commands

- `/content/good` - Generate high-quality copy
- `/content/cro` - Conversion-optimized copy
- `/content/enhance` - Improve existing copy
- `/email/create` - Email campaign copy
