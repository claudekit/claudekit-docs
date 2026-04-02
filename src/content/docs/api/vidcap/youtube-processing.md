---
title: "VidCap - YouTube Processing"
description: "AI-powered YouTube video processing API for metadata, captions, summaries, and screenshots"
section: docs
category: vidcap
order: 1
published: true
---

# VidCap - YouTube Video Processing

AI-powered YouTube video processing service. Extract metadata, captions, AI summaries, screenshots, and more.

**Base path:** `/api/proxy/vidcap/v1`

## Health Check

```
GET /api/proxy/vidcap/v1/healthz
```

Returns service status.

## AI Models

```
GET /api/proxy/vidcap/v1/ai/models
```

List available AI models for summaries and analysis.

## Video Info

```
GET /api/proxy/vidcap/v1/youtube/info?url={youtube_url}
```

Returns video metadata including title, duration, thumbnail, channel info.

```bash
curl -H "X-API-Key: ck_live_xxx" \
  "https://claudekit.cc/api/proxy/vidcap/v1/youtube/info?url=https://youtube.com/watch?v=dQw4w9WgXcQ"
```

## Media Formats

```
GET /api/proxy/vidcap/v1/youtube/media?url={youtube_url}
```

Returns available video/audio quality options and formats.

## Download

```
GET /api/proxy/vidcap/v1/youtube/download?url={youtube_url}&format={format}
```

Returns download URL. `format` parameter is optional.

## Captions

```
GET /api/proxy/vidcap/v1/youtube/caption?url={youtube_url}&lang={lang}
```

Extract video captions/transcripts. `lang` defaults to `en`.

```bash
curl -H "X-API-Key: ck_live_xxx" \
  "https://claudekit.cc/api/proxy/vidcap/v1/youtube/caption?url=https://youtube.com/watch?v=xxx&lang=vi"
```

## AI Summary

```
GET /api/proxy/vidcap/v1/youtube/summary?url={youtube_url}
```

Generate AI-powered video summary using default model.

### Custom Summary

```
POST /api/proxy/vidcap/v1/youtube/summary-custom
```

**Body:**
```json
{
  "url": "https://youtube.com/watch?v=...",
  "prompt": "Summarize the key technical points",
  "model": "gemini-1.5-flash"
}
```

Generate custom AI summary with your own prompt and model selection.

## Article

```
GET /api/proxy/vidcap/v1/youtube/article?url={youtube_url}
```

Convert video content into article format.

## Screenshots

### Single Screenshot

```
GET /api/proxy/vidcap/v1/youtube/screenshot?url={youtube_url}&timestamp={seconds}
```

Capture a frame at a specific timestamp. `timestamp` defaults to 0.

### Multiple Screenshots

```
GET /api/proxy/vidcap/v1/youtube/screenshot-multiple?url={youtube_url}&count={count}
```

Capture multiple screenshots at evenly distributed intervals.

## Comments

```
GET /api/proxy/vidcap/v1/youtube/comments?url={youtube_url}&limit={limit}
```

Retrieve video comments. `limit` is optional.

## Search

```
GET /api/proxy/vidcap/v1/youtube/search?q={query}&limit={limit}
```

Search YouTube videos programmatically.

```bash
curl -H "X-API-Key: ck_live_xxx" \
  "https://claudekit.cc/api/proxy/vidcap/v1/youtube/search?q=claude+ai+tutorial&limit=10"
```

## Next Steps

- [ReviewWeb API](/docs/api/reviewweb/web-scraping) - Web scraping & SEO
- [API Keys](/docs/api/keys/api-keys) - Manage your API keys
- [Authentication](/docs/api/overview/authentication) - Auth and rate limits
