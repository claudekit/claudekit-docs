---
title: "Brand Guidelines"
description: "Brand voice, visual identity, asset management, and consistency enforcement with automated validation and color extraction."
section: marketing
category: skills
order: 14
---

> Maintain brand consistency across all marketing materials with automated validation, asset organization, and voice frameworks.

## What This Skill Does

**The Challenge**: Brand inconsistency dilutes recognition and erodes trust. Managing assets, enforcing voice guidelines, and maintaining visual standards across teams is manual and error-prone.

**The Solution**: Brand Guidelines skill provides brand voice frameworks, visual identity systems, asset organization patterns, and automated validation scripts. Includes color extraction, asset naming conventions, and brand context injection for AI-generated content.

## Activation

**Implicit**: Activates automatically for Content Creator, Social Media Manager, Email Wizard, and UI/UX Designer agents.

**Explicit**: Activate via prompt:
```
Activate brand-guidelines skill to create comprehensive brand style guide
```

## Capabilities

### 1. Brand Voice Framework
Define and apply consistent tone across all content.

**Voice dimensions**:
- **Tone**: Formal ↔ Casual
- **Language**: Simple ↔ Complex
- **Character**: Serious ↔ Playful
- **Emotion**: Reserved ↔ Expressive

**Framework guide**: `references/voice-framework.md`

**Inject brand context**:
```bash
# Extract brand context for prompts
node scripts/inject-brand-context.cjs

# JSON format for programmatic use
node scripts/inject-brand-context.cjs --json
```

### 2. Visual Identity Management
Color palettes, typography, logo usage, and asset organization.

**Color management**:
```bash
# Show brand palette
node scripts/extract-colors.cjs --palette

# Compare asset colors to brand palette
node scripts/extract-colors.cjs path/to/image.png
```

**Visual elements**:
- Logo variants (full, icon, monochrome)
- Color palette (primary, secondary, accent)
- Typography (headers, body, code)
- Imagery style guidelines

**Visual guide**: `references/visual-identity.md`

### 3. Asset Validation and Organization
Automated checks for asset compliance and systematic file organization.

**Validate asset**:
```bash
# Check naming, format, size compliance
node scripts/validate-asset.cjs path/to/asset.png

# JSON output for CI/CD
node scripts/validate-asset.cjs path/to/asset.png --json
```

**Naming convention**:
```
{type}_{campaign}_{description}_{timestamp}_{variant}.{ext}

Examples:
banner_product-launch_hero_20251209_16-9.png
logo_rebrand_horizontal_20251209.svg
```

**Organization guide**: `references/asset-organization.md`

## Prerequisites

- Brand guidelines document (`docs/brand-guidelines.md`)
- Asset directory structure (auto-created if missing)

## Configuration

**Brand sync workflow**:
```bash
# 1. Edit docs/brand-guidelines.md

# 2. Sync to design tokens
node scripts/sync-brand-to-tokens.cjs

# 3. Verify sync
node scripts/inject-brand-context.cjs --json | head -20
```

**Files synced**:
- `docs/brand-guidelines.md` → Source of truth
- `assets/design-tokens.json` → Token definitions
- `assets/design-tokens.css` → CSS variables

**Directory structure**:
```
.assets/                  # Git-tracked metadata
├── manifest.json         # Asset registry
├── tags.json            # Tagging system
├── versions/            # Version history
└── metadata/            # Type-specific metadata

assets/                   # Raw files
├── designs/             # Campaign, web, print
├── banners/             # Social, email, landing
├── logos/               # Full, icon, mono
├── videos/              # Ads, tutorials
└── generated/           # AI-generated (timestamped)
```

## Best Practices

**1. Consistency beats perfection**
Apply guidelines consistently, even if they evolve over time. Inconsistency is more damaging than imperfect rules.

**2. Voice adapts, personality stays**
Tone can shift by channel (LinkedIn professional, Twitter casual), but core personality remains constant.

**3. Audit quarterly**
Review brand consistency across channels every 3 months. Update guidelines as brand evolves.

## Common Use Cases

### Use Case 1: Brand Context Injection for AI Content
**Scenario**: Generate blog post with brand voice automatically applied.

**Workflow**:
1. Extract brand context: `node scripts/inject-brand-context.cjs`
2. Pass context to AI prompt (voice, colors, messaging)
3. Generate content maintaining brand consistency
4. Validate output against voice framework

**Output**: Content that matches brand voice without manual editing.

### Use Case 2: Asset Approval Workflow
**Scenario**: Design team creates social media banner, needs brand compliance check.

**Workflow**:
1. Designer creates asset following naming convention
2. Run validation: `node scripts/validate-asset.cjs banner.png`
3. Check color compliance: `node scripts/extract-colors.cjs banner.png`
4. Compare to brand palette (script shows deviation)
5. Adjust colors if needed, re-validate
6. Register in manifest.json

**Output**: Brand-compliant asset ready for use.

## Troubleshooting

**Issue**: AI-generated content doesn't match brand voice
**Solution**: Use `inject-brand-context.cjs` to extract voice parameters. Include in system prompt for all content generation.

**Issue**: Asset colors don't match brand palette
**Solution**: Run `extract-colors.cjs path/to/asset.png` to compare. Adjust in design tool, re-export.

**Issue**: Team members using inconsistent asset naming
**Solution**: Document naming convention in README. Add pre-commit hook to validate names (optional).

## Related Skills

- [Content Marketing](/docs/marketing/skills/content-marketing) - Apply voice to content strategy
- [Social Media](/docs/marketing/skills/social-media) - Platform-specific voice adaptation
- [AI Multimodal](/docs/marketing/skills/ai-multimodal) - Generate brand-aligned images with Imagen 4

## Related Commands

- `/brand:update` - Update brand guidelines
- `/content/good` - Generate brand-aligned content
- `/design/good` - Create brand-compliant designs
