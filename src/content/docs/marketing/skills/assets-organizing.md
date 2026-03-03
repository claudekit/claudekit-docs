---
title: "ckm:assets-organizing"
description: "Organize outputs from commands and agents in assets/ directory with consistent naming, versioning, and retrieval patterns."
section: marketing
category: skills
order: 61
---

> Keep every agent output, creative asset, and campaign artifact organized and instantly retrievable.

## What This Skill Does

**The Challenge**: Marketing teams accumulate hundreds of AI-generated outputs — copy drafts, images, reports, strategies — scattered across chat threads with no consistent naming or structure. Finding the right version becomes impossible.

**The Solution**: Assets Organizing skill enforces a structured `assets/` directory with type-based folders, date-stamped filenames, metadata tagging, and retrieval conventions. All commands and agents write outputs to predictable locations.

## Activation

**Implicit**: Activates automatically when any command produces persistent output (copy, images, reports, strategies).

**Explicit**: Activate via prompt:
```
Activate assets-organizing skill to set up asset structure for [project]
```

## Capabilities

### 1. Directory Structure
Standardized folder hierarchy for all marketing asset types.

```
assets/
├── copy/           # All text content outputs
│   ├── landing-pages/
│   ├── emails/
│   └── ads/
├── images/         # AI-generated and edited visuals
│   ├── banners/
│   ├── logos/
│   └── social/
├── reports/        # Analytics and research reports
├── strategies/     # Plans, frameworks, briefs
├── writing-styles/ # Extracted brand voice files
└── campaigns/      # Campaign-level bundles
    └── {campaign-slug}/
```

### 2. Naming Convention
Consistent filename patterns for version control and retrieval.

**Pattern**: `{YYYYMMDD}-{slug}-{version}.{ext}`

**Examples**:
```
20260303-homepage-hero-v1.md
20260303-homepage-hero-v2.md
20260210-q1-campaign-strategy.md
20260301-product-launch-email-sequence.md
```

### 3. Metadata Tagging
Frontmatter or header block for every saved asset.

**Template**:
```yaml
# Asset Metadata
created: 2026-03-03
campaign: product-launch-q1
type: email-copy
status: draft | approved | published
author: ckm:copywriting
version: 1
```

### 4. Retrieval Patterns
Find assets quickly using consistent conventions.

**List recent copy outputs**:
```bash
ls -lt assets/copy/ | head -20
```

**Find by campaign**:
```bash
find assets/ -path "*campaigns/product-launch*" -type f
```

## Prerequisites

- Project initialized with `/ckm:init`
- `assets/` directory at project root

## Best Practices

**1. Always version, never overwrite**
Append `-v2`, `-v3` rather than replacing files. Preserve iteration history.

**2. Bundle campaigns**
Group all related assets under `assets/campaigns/{slug}/`. Simplifies handoffs.

**3. Archive, don't delete**
Move unused assets to `assets/archive/` rather than deleting. Useful for retrospectives.

## Common Use Cases

### Use Case 1: Organizing Campaign Launch Assets
**Scenario**: Product launch with 10+ copy pieces, 5 banner sizes, 3 email sequences.

**Workflow**:
1. Create `assets/campaigns/product-launch-q1/`
2. Save each output with date and version suffix
3. Add metadata headers to each file
4. Create `assets/campaigns/product-launch-q1/README.md` with asset index

### Use Case 2: Writing Style Library
**Scenario**: Extract and store brand voice for consistent AI outputs.

**Workflow**:
1. Run writing style extraction
2. Save to `assets/writing-styles/brand-voice-v1.md`
3. Reference in all copy prompts: "Use style from `assets/writing-styles/brand-voice-v1.md`"

## Troubleshooting

**Issue**: Assets scattered outside the `assets/` directory
**Solution**: Run `/ckm:init` to scaffold the directory structure. Move existing files manually.

**Issue**: Cannot find which version was published
**Solution**: Add `status: published` to metadata and use `grep -r "status: published" assets/`.

## Related Skills

- [Content Hub](/docs/marketing/skills/content-hub) - Content planning and management
- [Marketing Dashboard](/docs/marketing/skills/marketing-dashboard) - Campaign command center
- [Copywriting](/docs/marketing/skills/copywriting) - Copy outputs stored here
- [AI Artist](/docs/marketing/skills/ai-artist) - Image outputs stored here

## Related Commands

- `/ckm:init` - Initialize project and assets directory
- `/ckm:storage` - Storage management operations
