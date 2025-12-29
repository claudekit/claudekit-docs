---
title: "Content Hub"
description: "Browser-based visual asset gallery for managing marketing assets with brand context, search/filter, and R2-ready cloud sync."
section: marketing
category: skills
order: 16
---

> Browse and manage marketing assets through visual gallery with brand context sidebar and action buttons.

## What This Skill Does

**The Challenge**: Marketing teams accumulate hundreds of assets (banners, logos, videos) across local folders. Finding the right asset or checking brand compliance requires manual searching through directories.

**The Solution**: Content Hub skill provides browser-based asset gallery with thumbnail grid, filter/search, brand context sidebar, and action buttons (preview, edit, generate). R2-ready manifest supports future cloud sync to Cloudflare R2.

## Activation

**Implicit**: Not auto-activated (on-demand tool).

**Explicit**: `/write:hub` or `node .claude/skills/content-hub/scripts/server.cjs --open`

## Capabilities

### 1. Visual Asset Gallery
Thumbnail grid showing all assets in `assets/` directory with type filtering.

**Features**:
- Thumbnail previews (images, videos, documents)
- Filter by type (banners, designs, logos, videos)
- Search by filename or description
- Click to preview full-size

**Asset types auto-detected**:
- Images: PNG, JPEG, SVG, WebP
- Videos: MP4, MOV, WebM
- Documents: PDF

### 2. Brand Context Sidebar
Live display of brand colors and voice from `docs/brand-guidelines.md`.

**Displays**:
- Color palette with hex codes
- Brand voice dimensions
- Messaging frameworks
- Visual style notes

**Use case**: Generate new assets with brand context visible for reference.

### 3. Asset Actions
Quick actions on each asset without leaving browser.

**Available actions**:
- **Preview**: Full-size view in modal
- **Edit in Claude**: Open file path for editing
- **Copy Path**: Copy absolute path to clipboard
- **Generate Similar**: Use as reference for AI generation

### 4. R2-Ready Manifest
Asset metadata stored in `.assets/manifest.json` with Cloudflare R2 fields.

**Manifest schema**:
```json
{
  "id": "unique-id",
  "path": "banners/hero.png",
  "category": "banner",
  "size": 1024000,
  "created": "2025-12-29",
  "r2": {
    "status": "local",  // local|pending|synced|error
    "bucket": null,
    "url": null
  }
}
```

**Future**: Cloud sync feature will upload to R2 (currently UI disabled).

## Prerequisites

- Node.js 18+
- Assets in `assets/` directory
- Brand guidelines in `docs/brand-guidelines.md` (optional but recommended)

## Configuration

**Start server**:
```bash
# Open gallery in browser
node .claude/skills/content-hub/scripts/server.cjs --open

# Rescan assets directory
node .claude/skills/content-hub/scripts/server.cjs --scan

# Stop server
node .claude/skills/content-hub/scripts/server.cjs --stop
```

**API routes**:
| Route | Purpose |
|-------|---------|
| `/hub` | Gallery HTML |
| `/api/assets` | Asset list JSON |
| `/api/brand` | Brand context JSON |
| `/api/scan` | Trigger rescan |
| `/file/*` | Serve local files |

## Best Practices

**1. Use consistent asset naming**
Follow `brand-guidelines` skill naming convention for easier searching.

**2. Organize by type**
Place assets in type-specific folders (banners/, logos/, videos/) for better filtering.

**3. Rescan after adding assets**
Run `--scan` flag or use `/api/scan` endpoint to refresh gallery after adding new files.

## Common Use Cases

### Use Case 1: Find Asset for Social Post
**Scenario**: Need product banner for Instagram post.

**Workflow**:
1. Open gallery: `/write:hub`
2. Filter by type: "banners"
3. Search: "product"
4. Preview candidates
5. Copy path of selected asset
6. Use in social media tool or design editor

**Time saved**: 5-10 minutes vs manual directory browsing.

### Use Case 2: Generate Brand-Aligned Asset
**Scenario**: Create new banner with brand colors visible.

**Workflow**:
1. Open gallery with brand sidebar visible
2. Note brand colors and voice from sidebar
3. Click "Generate Similar" on existing banner
4. Use brand context in AI prompt
5. Generated asset auto-matches brand guidelines

**Output**: New asset consistent with brand identity.

## Troubleshooting

**Issue**: Gallery not showing new assets
**Solution**: Run `node scripts/server.cjs --scan` to rescan `assets/` directory.

**Issue**: Brand context not displaying
**Solution**: Verify `docs/brand-guidelines.md` exists and contains color/voice sections.

**Issue**: Server won't start (port in use)
**Solution**: Check if server already running. Use `--stop` flag to stop existing instance.

## Related Skills

- [Brand Guidelines](/docs/marketing/skills/brand-guidelines) - Asset validation and brand context
- [AI Multimodal](/docs/marketing/skills/ai-multimodal) - Generate new assets
- [Design](/docs/core/skills/design) - Design asset creation

## Related Commands

- `/write:hub` - Open content hub gallery
- `/dashboard` - Open marketing dashboard (includes asset gallery)
