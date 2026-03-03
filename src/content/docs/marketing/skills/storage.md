---
title: "ckm:storage"
description: "S3 storage operations - upload, sync, list, get URLs"
section: marketing
kit: marketing
category: skills
order: 46
---

# `ckm:storage`

> Manage marketing assets in S3 storage — upload, sync, list, and retrieve public URLs.

## What This Skill Does

The Storage skill handles S3-compatible object storage operations for marketing assets. It uploads generated images, videos, documents, and campaign materials to cloud storage, syncs local asset directories with remote buckets, and retrieves public URLs for use in campaigns, emails, and landing pages.

The skill abstracts the complexity of S3 APIs into simple commands usable within marketing workflows. When the AI Artist generates product images or the Video skill exports a clip, Storage automatically handles the upload and returns a CDN-ready URL — no manual S3 console interaction required.

Supports AWS S3, Cloudflare R2, and other S3-compatible providers.

## Quick Start

```
/ckm:storage upload assets/generated/hero-image.png --bucket marketing-assets
```

## Key Features

- Upload single files or directories to S3/R2 buckets
- Sync local asset folders with remote storage
- Generate public CDN URLs for uploaded assets
- List bucket contents with filtering by type or campaign tag
- Presigned URL generation for time-limited private access
- Automatic content-type detection
- Integration with AI image/video generation for auto-upload

## Usage Examples

**Upload generated image**:
```
/ckm:storage upload assets/generated/product-banner.png
# Returns: https://cdn.example.com/marketing-assets/product-banner.png
```

**Sync campaign assets**:
```
/ckm:storage sync assets/campaigns/q2-launch/ --bucket marketing-assets --prefix campaigns/q2/
```

**List and get URLs**:
```
/ckm:storage list --bucket marketing-assets --prefix campaigns/q2/ --format urls
# Returns list of public URLs for all Q2 campaign assets
```

## Configuration

**Environment Variables** (`.env`):
```bash
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_REGION=us-east-1
S3_BUCKET=your-marketing-bucket
CDN_BASE_URL=https://cdn.yourdomain.com  # Optional
```

## Related

- [AI Multimodal](/docs/marketing/skills/ai-multimodal) - Generate assets that Storage uploads
- [Media Processing](/docs/marketing/skills/media-processing) - Process media before storage
- [ckm:campaign](/docs/marketing/skills/campaign) - Campaign assets managed with Storage
