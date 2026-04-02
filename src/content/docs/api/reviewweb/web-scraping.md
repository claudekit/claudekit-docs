---
title: "ReviewWeb - Web Scraping"
description: "Web scraping, content extraction, and markdown conversion APIs for ClaudeKit ReviewWeb service"
section: docs
category: reviewweb
order: 1
published: true
---

# ReviewWeb - Web Scraping & Extraction

Comprehensive web scraping, content extraction, and conversion service.

**Base path:** `/api/proxy/reviewweb/v1`

## Health Check

```
GET /api/proxy/reviewweb/v1/healthz
```

## Account Profile

```
GET /api/proxy/reviewweb/v1/profile
```

Get account profile and usage statistics.

## Web Scraping

### Scrape Single URL

```
POST /api/proxy/reviewweb/v1/scrape
```

```json
{
  "url": "https://example.com",
  "waitFor": "networkidle",
  "timeout": 30000
}
```

Returns raw HTML content of the page.

### Scrape Multiple URLs

```
POST /api/proxy/reviewweb/v1/scrape/urls
```

```json
{
  "urls": ["https://example.com", "https://another.com"]
}
```

### Links Map

```
POST /api/proxy/reviewweb/v1/scrape/links-map
```

```json
{
  "url": "https://example.com",
  "depth": 1
}
```

Extract all links from a page with configurable crawl depth.

## Content Extraction

### Extract Content

```
POST /api/proxy/reviewweb/v1/extract
```

```json
{
  "url": "https://example.com"
}
```

Extract main content (title, text, images) from a page.

### Extract Multiple

```
POST /api/proxy/reviewweb/v1/extract/urls
```

```json
{
  "urls": ["https://example.com", "https://another.com"]
}
```

## Markdown Conversion

### Convert to Markdown

```
POST /api/proxy/reviewweb/v1/convert/markdown
```

```json
{
  "url": "https://example.com"
}
```

Convert any webpage to clean, LLM-friendly markdown.

### Convert Multiple

```
POST /api/proxy/reviewweb/v1/convert/markdown/urls
```

```json
{
  "urls": ["https://example.com", "https://another.com"]
}
```

## Screenshots

### Take Screenshot

```
POST /api/proxy/reviewweb/v1/screenshot
```

```json
{
  "url": "https://example.com",
  "fullPage": false,
  "width": 1920,
  "height": 1080
}
```

### Get Screenshot

```
GET /api/proxy/reviewweb/v1/screenshot/{id}
```

Retrieve a previously taken screenshot by ID.

## Website Review

### Create Review

```
POST /api/proxy/reviewweb/v1/review
```

```json
{
  "url": "https://example.com"
}
```

Generate a comprehensive website review.

### Get Review

```
GET /api/proxy/reviewweb/v1/review/{reviewId}
```

## Next Steps

- [SEO Analysis](/docs/api/reviewweb/seo-analysis) - Backlinks, keywords, traffic
- [VidCap API](/docs/api/vidcap/youtube-processing) - Video processing
- [API Keys](/docs/api/keys/api-keys) - Manage keys
