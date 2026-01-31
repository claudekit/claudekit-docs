---
title: "Brand Guidelines"
description: "Brand voice, visual identity, asset management, and consistency enforcement with automated validation and color extraction."
section: marketing
category: skills
order: 14
---

> Maintain brand consistency across all marketing materials with automated validation, asset organization, and voice frameworks.

## What This Skill Does

**The Challenge**: Brand inconsistency weakens differentiation and erodes trust. Managing assets, enforcing voice guidelines, and maintaining visual standards across teams is manual and error-prone.

**The Solution**: Brand Guidelines skill provides brand voice frameworks, visual identity systems, asset organization patterns, and automated validation scripts. Includes color extraction, asset naming conventions, and brand context injection for AI-generated content.

## Activation

**Implicit**: Activates automatically for Content Creator, Social Media Manager, Email Wizard, and UI/UX Designer agents.

**Explicit**: Activate by name when needed: "Activate brand-guidelines skill"

## Capabilities

### 1. Brand Voice Framework
Define and apply consistent tone across all content.

**Voice Dimensions**:
- **Tone**: Formal ↔ Casual
- **Language**: Simple ↔ Complex
- **Personality**: Serious ↔ Playful
- **Emotion**: Reserved ↔ Expressive

**Framework guide**: `references/voice-framework.md`

**Brand Context Injection**:
```bash
# Extract brand context for prompts
node scripts/inject-brand-context.cjs

# JSON format for programmatic use
node scripts/inject-brand-context.cjs --json
```

### 2. Visual Identity Management
Color palettes, typography, logo usage, and asset organization.

**Color Management**:
```bash
# Display brand palette
node scripts/extract-colors.cjs --palette

# Compare asset colors with brand palette
node scripts/extract-colors.cjs path/to/image.png
```

**Visual Elements**:
- Logo variations (full, icon, monochrome)
- Color palettes (primary, secondary, accent)
- Typography (headings, body, code)
- Photography style guidelines

**Visual guide**: `references/visual-identity.md`

### 3. Asset Validation and Organization
Automated checks for asset compliance and systematic file organization.

**Asset Validation**:
```bash
# Check naming, format, size compliance
node scripts/validate-asset.cjs path/to/asset.png

# JSON output for CI/CD
node scripts/validate-asset.cjs path/to/asset.png --json
```

**Naming Conventions**:
```
{type}_{campaign}_{description}_{timestamp}_{variant}.{ext}

Examples:
banner_product-launch_hero_20251209_16-9.png
logo_rebrand_horizontal_20251209.svg
```

**Organization guide**: `references/asset-organization.md`

## Prerequisites

- Brand guidelines documentation (`docs/brand-guidelines.md`)
- Asset directory structure (auto-created if missing)

## Configuration

**Brand Sync Workflow**:
```bash
# 1. Edit docs/brand-guidelines.md

# 2. Sync design tokens
node scripts/sync-brand-to-tokens.cjs

# 3. Verify sync
node scripts/inject-brand-context.cjs --json | head -20
```

**Synced Files**:
- `docs/brand-guidelines.md` → Source of truth
- `assets/design-tokens.json` → Token definitions
- `assets/design-tokens.css` → CSS variables

**Directory Structure**:
```
.assets/                  # Git-tracked metadata
├── manifest.json         # Asset registry
├── tags.json            # Tagging system
├── versions/            # Version history
└── metadata/            # Type-specific metadata

assets/                   # Raw Files
├── designs/             # Campaign, web, print
├── banners/             # Social, email, landing
├── logos/               # Full, icon, monochrome
├── videos/              # Ads, tutorials
└── generated/           # AI-generated (timestamped)
```

## Best Practices

**1. Consistency Over Perfection**
Apply guidelines consistently, even if they evolve over time. Inconsistency is more harmful than imperfect rules.

**2. Adaptive Voice, Persistent Personality**
Tone can shift by channel (LinkedIn professional, Twitter casual), but core personality stays constant.

**3. Quarterly Audits**
Review brand consistency across channels every 3 months. Update guidelines as brand evolves.

## Common Use Cases

### Use Case 1: Brand Context Injection for AI Content
**Scenario**: Generate blog post with automatically applied brand voice.

**Workflow**:
1. Extract brand context: `node scripts/inject-brand-context.cjs`
2. Pass context to AI prompt (voice, colors, messaging)
3. Generate content maintaining brand consistency
4. Validate output against voice framework

**Output**: Content aligned with brand voice without manual editing.

### Use Case 2: Asset Approval Workflow
**Scenario**: Design team creates social media banner, needs brand compliance check.

**Workflow**:
1. Designer creates asset following naming conventions
2. Run validation: `node scripts/validate-asset.cjs banner.png`
3. Check color compliance: `node scripts/extract-colors.cjs banner.png`
4. Compare with brand palette (script shows deviation)
5. Adjust colors if needed, re-validate
6. Register in manifest.json

**Output**: Brand-compliant asset ready for use.

## Troubleshooting

**Issue**: AI-generated content doesn't match brand voice
**Solution**: Use `inject-brand-context.cjs` to extract voice parameters. Include in system prompt for all content generation.

**Issue**: Asset colors don't match brand palette
**Solution**: Run `extract-colors.cjs path/to/asset.png` to compare. Adjust in design tool, re-export.

**Issue**: Team members using inconsistent asset names
**Solution**: Document naming convention in README. Add pre-commit hook to validate names (optional).

## Related Skills

- [Content Marketing](/docs/marketing/skills/content-marketing) - Apply voice to content planning
- [Social Media](/docs/marketing/skills/social-media) - Platform-specific voice adaptation
- [AI Multimodal](/docs/marketing/skills/ai-multimodal) - Generate brand-aligned imagery with Imagen 4

## Related Commands

- `/brand:update` - Update brand guidelines
- `/content/good` - Generate brand-aligned content
- `/design/good` - Create brand-compliant designs
