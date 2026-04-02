---
title: "ReviewWeb - SEO Analysis"
description: "SEO analysis APIs including AI summaries, backlinks, keyword research, and traffic metrics"
section: docs
category: reviewweb
order: 2
published: true
---

# ReviewWeb - SEO & AI Analysis

AI-powered content summarization, SEO insights, and URL utilities.

**Base path:** `/api/proxy/reviewweb/v1`

## AI Summaries

### Summarize URL

```
POST /api/proxy/reviewweb/v1/summarize/url
```

```json
{
  "url": "https://example.com",
  "model": "gemini-1.5-flash"
}
```

AI-summarize a single URL's content.

### Summarize Website

```
POST /api/proxy/reviewweb/v1/summarize/website
```

```json
{
  "url": "https://example.com",
  "depth": 2,
  "model": "gemini-1.5-flash"
}
```

Summarize an entire website by crawling pages up to the specified depth.

### Summarize Multiple URLs

```
POST /api/proxy/reviewweb/v1/summarize/urls
```

```json
{
  "urls": ["https://example.com", "https://another.com"],
  "model": "gemini-1.5-flash"
}
```

### Available AI Models

```
GET /api/proxy/reviewweb/v1/ai/models
```

List available AI models for summaries.

## SEO Insights

### Backlinks Analysis

```
POST /api/proxy/reviewweb/v1/seo-insights/backlinks
```

```json
{
  "domain": "example.com"
}
```

Analyze domain backlink profile including referring domains, anchor text distribution, and link quality.

### Keyword Ideas

```
POST /api/proxy/reviewweb/v1/seo-insights/keyword-ideas
```

```json
{
  "keyword": "ai tools",
  "country": "US"
}
```

Generate keyword suggestions based on a seed keyword with search volume and competition data.

### Keyword Difficulty

```
POST /api/proxy/reviewweb/v1/seo-insights/keyword-difficulty
```

```json
{
  "keyword": "ai tools",
  "country": "US"
}
```

Get difficulty score for ranking on a specific keyword (0-100 scale).

### Traffic Analysis

```
POST /api/proxy/reviewweb/v1/seo-insights/traffic
```

```json
{
  "domain": "example.com"
}
```

Analyze domain traffic metrics including estimated monthly visits, traffic sources, and trends.

## URL Utilities

### Check URL Status

```
POST /api/proxy/reviewweb/v1/url/is-alive
```

```json
{
  "url": "https://example.com"
}
```

Check if a URL is accessible and returns a valid response.

### Resolve Redirects

```
POST /api/proxy/reviewweb/v1/url/get-url-after-redirects
```

```json
{
  "url": "https://bit.ly/xxx"
}
```

Follow redirects and return the final destination URL.

## Example: Full SEO Audit

```bash
# 1. Analyze backlinks
curl -X POST -H "X-API-Key: ck_live_xxx" \
  -H "Content-Type: application/json" \
  -d '{"domain": "example.com"}' \
  "https://claudekit.cc/api/proxy/reviewweb/v1/seo-insights/backlinks"

# 2. Research keywords
curl -X POST -H "X-API-Key: ck_live_xxx" \
  -H "Content-Type: application/json" \
  -d '{"keyword": "your product", "country": "US"}' \
  "https://claudekit.cc/api/proxy/reviewweb/v1/seo-insights/keyword-ideas"

# 3. Check traffic
curl -X POST -H "X-API-Key: ck_live_xxx" \
  -H "Content-Type: application/json" \
  -d '{"domain": "example.com"}' \
  "https://claudekit.cc/api/proxy/reviewweb/v1/seo-insights/traffic"
```

## Next Steps

- [Web Scraping](/docs/api/reviewweb/web-scraping) - Scraping & extraction APIs
- [VidCap API](/docs/api/vidcap/youtube-processing) - Video processing
- [API Introduction](/docs/api/overview/introduction) - Getting started
