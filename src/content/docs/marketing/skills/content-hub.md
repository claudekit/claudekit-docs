---
title: "Content Hub"
description: "Browser-based asset gallery for managing marketing assets with brand context, search/filters, and R2 sync."
section: marketing
category: skills
order: 16
---
> Browse and manage marketing assets through visual gallery with brand context sidebar and action buttons.

## What This Skill Does

**Challenge**: Marketing teams accumulate hundreds of assets (banners, logos, videos) across local folders. Finding the right asset or checking brand compliance requires manual searching through directories.

**Solution**: Content Hub skill provides browser-based asset gallery with thumbnail grid, filters/search, brand context sidebar, and action buttons (preview, edit, generate). R2-ready manifest supports future cloud sync with Cloudflare R2.

## Activation

**Implicit**: Not automatically activated (on-demand tool).

**Explicit**: `/write:hub` or `node .claude/skills/content-hub/scripts/server.cjs --open`

## Capabilities

### 1. Asset Gallery View
Thumbnail grid displaying all assets in `assets/` folder with type filtering.

**Features**:
- Thumbnail preview (images, videos, documents)
- Filter by type (banner, design, logo, video)
- Search by filename or description
- Click to view full size

**Auto-detected Asset Types**:
- Images: PNG, JPEG, SVG, WebP
- Videos: MP4, MOV, WebM
- Documents: PDF

### 2. Brand Context Sidebar
Live display of brand colors and voice from `docs/brand-guidelines.md`.

**Display**:
- Color palette with hex codes
- Brand voice dimensions
- Messaging framework
- Visual style notes

**Use Case**: Create new assets with visible brand context for reference.

### 3. Asset Actions
Quick actions on each asset without leaving browser.

**Available Actions**:
- **Preview**: View full size in modal
- **Edit in Claude**: Open file path for editing
- **Copy Path**: Copy absolute path to clipboard
- **Generate Similar**: Use as reference for AI generation

### 4. R2-Ready Manifest
Asset metadata stored in `.assets/manifest.json` with Cloudflare R2 fields.

**Manifest Schema**:
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
- Assets in `assets/` folder
- Brand guidelines in `docs/brand-guidelines.md` (optional but recommended)

## Configuration

**Start Server**:
```bash
# Open gallery in browser
node .claude/skills/content-hub/scripts/server.cjs --open

# Rescan asset folder
node .claude/skills/content-hub/scripts/server.cjs --scan

# Stop server
node .claude/skills/content-hub/scripts/server.cjs --stop
```

**API Routes**:
| Route | Purpose |
|-------|---------|
| `/hub` | Gallery HTML |
| `/api/assets` | Asset List JSON |
| `/api/brand` | Brand Context JSON |
| `/api/scan` | Trigger Rescan |
| `/file/*` | Serve Local Files |

## Best Practices

**1. Use Consistent Asset Names**
Follow naming conventions from `brand-guidelines` skill for easier searching.

**2. Organize by Type**
Place assets in type-specific folders (banner/, logo/, video/) for better filtering.

**3. Rescan After Adding Assets**
Run `--scan` flag or use `/api/scan` endpoint to refresh gallery after adding new files.

## Common Use Cases

### Use Case 1: Find Asset for Social Media Post
**Scenario**: Need product banner for Instagram post.

**Workflow**:
1. Open gallery: `/write:hub`
2. Filter by type: "banner"
3. Search: "product"
4. Preview candidates
5. Copy path of selected asset
6. Use in social media tool or design editor

**Time Saved**: 5-10 minutes vs manual folder browsing.

### Use Case 2: Create Brand-Aligned Asset
**Scenario**: Create new banner with brand colors visible.

**Workflow**:
1. Open gallery with brand context sidebar visible
2. Note brand colors and voice from sidebar
3. Click "Generate Similar" on existing banner
4. Use brand context in AI prompt
5. Generated asset auto-matches brand guidelines

**Result**: New asset consistent with brand identity.

## Troubleshooting

**Issue**: Gallery not showing new assets
**Solution**: Run `node scripts/server.cjs --scan` to rescan `assets/` folder.

**Issue**: Brand context not showing
**Solution**: Verify `docs/brand-guidelines.md` exists and contains color/voice sections.

**Issue**: Server won't start (port in use)
**Solution**: Check if server already running. Use `--stop` flag to stop current session.

## Related Skills

- [Brand Guidelines](/docs/marketing/skills/brand-guidelines) - Asset validation and brand context
- [AI Multimodal](/docs/marketing/skills/ai-multimodal) - Generate new assets
- [Design](/docs/engineer/skills/frontend-design) - Create design assets

## Related Commands

- `/write:hub` - Open content hub gallery
- `/dashboard` - Open marketing dashboard (includes asset gallery)
