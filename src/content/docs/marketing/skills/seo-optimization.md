---
title: "SEO Optimization"
description: "Technical SEO audits, keyword research with ReviewWeb API, Google Search Console integration, and programmatic SEO for search visibility."
section: marketing
category: skills
order: 3
---

> Boost search visibility through data-driven keyword research, technical audits, and programmatic SEO strategies.

## What This Skill Does

**The Challenge**: SEO requires combining keyword research, technical audits, content optimization, and performance monitoring across multiple tools and platforms. Manual workflows are time-consuming and error-prone.

**The Solution**: SEO Optimization skill integrates ReviewWeb.site API for keyword data (volume, difficulty, CPC), Google Search Console API for ranking insights, Core Web Vitals measurement, and programmatic SEO templates. Provides automated audits, schema generation, and sitemap management.

## Activation

**Implicit**: Auto-activated by SEO Specialist, Attraction Specialist, and Content Creator agents based on task context.

**Explicit**: Activate via prompt:
```
Activate seo-optimization and analytics skills to audit site performance and identify keyword opportunities
```

## Capabilities

### 1. Keyword Research with ReviewWeb API
Get real keyword data including search volume, difficulty, CPC, and top-ranking pages.

```bash
node scripts/analyze-keywords.cjs -k "react tutorial" -o report.md
```

**Output**: Markdown report with:
- Primary keyword metrics (volume, difficulty, CPC)
- Related keywords with opportunities
- Top 10 ranking pages analysis
- Content gap recommendations

**API Documentation**: `references/reviewweb-api.md`

### 2. Google Search Console Integration
Query search performance data including clicks, impressions, CTR, and rankings.

**Setup (one-time)**:
1. Enable Search Console API in Google Cloud
2. Download OAuth credentials as `google_client_secret.json`
3. Place in `.claude/secrets/` (project or global)
4. Authenticate: `node scripts/gsc-auth.cjs --auth`

**Query examples**:
```bash
# List verified sites
node scripts/gsc-query.cjs --sites

# Top search queries
node scripts/gsc-query.cjs --top-queries -s https://example.com

# Low CTR opportunities
node scripts/gsc-query.cjs --low-ctr -s https://example.com -o low-ctr.csv -f csv
```

**Full guide**: `references/google-search-console-api-guide.md`

### 3. Core Web Vitals Measurement
Audit page performance using PageSpeed Insights API.

```bash
# Single URL audit
node scripts/audit-core-web-vitals.cjs -u https://example.com

# Sitemap-based batch audit
node scripts/audit-core-web-vitals.cjs -s sitemap.xml -f md -o cwv-report.md
```

**Metrics tracked**: LCP (Largest Contentful Paint), FID (First Input Delay), CLS (Cumulative Layout Shift)

**Remediation guide**: `references/core-web-vitals-remediation.md`

## Environment Setup

Dependencies auto-installed during `ck init`.

**Required Environment Variables**:
- `REVIEWWEB_API_KEY` - ReviewWeb.site API key for keyword research

**Optional Environment Variables**:
- `PAGESPEED_API_KEY` - PageSpeed Insights API key (free tier available)

**Configuration Priority** (highest to lowest):
1. Project `.env` file
2. Global `~/.env` file
3. System environment variables

Setup:
```bash
# Project-specific (recommended)
echo "REVIEWWEB_API_KEY=your_api_key_here" >> .env
echo "PAGESPEED_API_KEY=your_key_here" >> .env

# Global (all projects)
echo "REVIEWWEB_API_KEY=your_api_key_here" >> ~/.env
```

**Required Files**:
Place credentials in `.claude/secrets/`:
- `google_client_secret.json` - OAuth 2.0 credentials for Search Console API
- `google_tokens.json` - OAuth tokens (auto-generated after first auth)

**Prerequisites**:
- Google Cloud project with Search Console API enabled
- OAuth 2.0 credentials (Desktop app type) for Search Console access

## Best Practices

**1. Target long-tail keywords first**
Lower difficulty, higher conversion intent. Build authority before competing for head terms.

**2. Optimize for search intent, not just keywords**
Match content format to search intent: informational, navigational, commercial, transactional.

**3. Fix technical SEO before content**
Core Web Vitals, mobile-friendliness, and crawlability issues block ranking improvements.

## Common Use Cases

### Use Case 1: Content Opportunity Discovery
**Scenario**: Find keyword opportunities for next quarter's blog content.

**Workflow**:
1. Research seed keyword: `node scripts/analyze-keywords.cjs -k "saas marketing"`
2. Extract related keywords from report
3. Filter by difficulty <40 and volume >500
4. Map keywords to content pillars
5. Create editorial calendar

**Output**: 20+ keyword opportunities with search volume and difficulty scores.

### Use Case 2: Search Performance Analysis
**Scenario**: Identify pages with low CTR despite high impressions.

**Workflow**:
1. Query Search Console: `node scripts/gsc-query.cjs --low-ctr -s https://yoursite.com`
2. Analyze title tags and meta descriptions
3. Rewrite to improve CTR
4. Monitor changes over 2-4 weeks

**Output**: Prioritized list of pages with optimization recommendations.

## Troubleshooting

**Issue**: ReviewWeb API returns 401 Unauthorized
**Solution**: Verify `REVIEWWEB_API_KEY` in `.env` file. Check API quota at ReviewWeb dashboard.

**Issue**: Google Search Console authentication fails
**Solution**:
1. Verify OAuth credentials match application type (Desktop app)
2. Delete existing `google_tokens.json` and re-authenticate
3. Check API is enabled in Google Cloud Console

**Issue**: Core Web Vitals script times out
**Solution**: Use `--timeout 60000` flag or audit smaller URL batches. PageSpeed API has rate limits.

## Related Skills

- [Content Marketing](/docs/marketing/skills/content-marketing) - Content planning and strategy
- [Analytics](/docs/marketing/skills/analytics) - Traffic and conversion tracking
- [Chrome DevTools](/docs/marketing/skills/chrome-devtools) - Browser-based CWV measurement
- [Research](/docs/marketing/skills/research) - Competitor analysis

## Related Commands

- `/seo/keywords` - Keyword research workflow
- `/seo/audit` - Full SEO audit
- `/seo/competitor` - Competitor analysis
- `/content/blog` - SEO-optimized blog creation
