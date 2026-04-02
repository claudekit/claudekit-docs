---
title: "API Introduction"
description: "ClaudeKit API provides AI-powered video processing and web scraping services through a unified proxy layer"
section: docs
category: overview
order: 1
published: true
---

# ClaudeKit API

> AI-powered API services through a unified proxy layer. Access video processing and web scraping/SEO capabilities via two integrated services.

## Overview

ClaudeKit API provides access to two powerful services:

| Service | Description | Capabilities |
|---------|-------------|-------------|
| **VidCap** | YouTube video processing | Metadata, captions, AI summaries, screenshots, search |
| **ReviewWeb** | Web scraping & SEO | Scraping, content extraction, markdown conversion, SEO analysis |

## Base URL

```
https://claudekit.cc
```

All API requests go through the unified proxy layer at `/api/proxy/{service}/{path}`.

## Available Services

### VidCap - Video Processing

AI-powered YouTube video analysis:

- **Video Info** - Get metadata (title, duration, thumbnail)
- **Captions** - Extract transcripts in multiple languages
- **AI Summaries** - Generate summaries with custom prompts
- **Screenshots** - Capture frames at specific timestamps
- **Search** - Search YouTube videos programmatically
- **Comments** - Retrieve video comments

### ReviewWeb - Web Scraping & SEO

Comprehensive web scraping and SEO toolkit:

- **Web Scraping** - Scrape single or multiple URLs
- **Content Extraction** - Extract main content from pages
- **Markdown Conversion** - Convert webpages to markdown
- **AI Summaries** - Summarize web content with AI
- **SEO Insights** - Backlinks, keyword analysis, traffic metrics
- **URL Utilities** - Check URL status, resolve redirects

## Quick Start

### 1. Get Your API Key

Create an API key from the [API Keys Dashboard](https://claudekit.cc/dashboard/api-keys).

### 2. Make Your First Request

```bash
curl -H "X-API-Key: ck_live_your_key" \
  "https://claudekit.cc/api/proxy/vidcap/v1/youtube/info?url=https://youtube.com/watch?v=dQw4w9WgXcQ"
```

### 3. Explore the Docs

- [Authentication & Error Codes](/docs/api/overview/authentication) - Auth methods, errors, rate limits
- [API Keys Management](/docs/api/keys/api-keys) - Create, rotate, revoke keys
- [VidCap API](/docs/api/vidcap/youtube-processing) - YouTube video processing
- [ReviewWeb API](/docs/api/reviewweb/web-scraping) - Web scraping & extraction

## Proxy Service Format

```
GET/POST /api/proxy/{service}/{path}
```

**Headers:** `X-API-Key: your_key` or `Authorization: Bearer your_key`

**List available services:**

```bash
GET /api/proxy/services
```

```json
{
  "services": [
    {
      "id": "vidcap",
      "name": "VidCap.xyz",
      "baseUrl": "https://vidcap.xyz/api",
      "timeout": 120000
    },
    {
      "id": "reviewweb",
      "name": "ReviewWeb.site",
      "baseUrl": "https://reviewweb.site/api",
      "timeout": 120000
    }
  ]
}
```

## Next Steps

- [Authentication](/docs/api/overview/authentication) - Set up authentication
- [API Keys](/docs/api/keys/api-keys) - Manage your API keys
- [VidCap](/docs/api/vidcap/youtube-processing) - Start processing videos
- [ReviewWeb](/docs/api/reviewweb/web-scraping) - Start scraping the web
