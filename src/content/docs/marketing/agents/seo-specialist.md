---
title: "SEO Specialist"
description: "Your technical SEO expert for audits, optimization, schema markup, and search rankings"
section: marketing
category: agents
order: 2
---

# SEO Specialist

> **Your search visibility guardian** - Fix technical issues, optimize content, and climb the rankings

## What This Agent Does

Your site is fast and your content is good, but you're stuck on page 2 of Google. You've heard about Core Web Vitals and schema markup but don't know where to start. Your competitors rank higher even though your product is better.

**The Problem**: SEO has become incredibly complex. It's not just about keywords anymore—it's technical performance, mobile experience, structured data, E-E-A-T signals, and hundreds of other ranking factors. Most teams lack the expertise to audit and optimize all these elements.

**The Solution**: The SEO Specialist is your senior technical SEO expert who knows every ranking factor that matters. This agent performs comprehensive technical SEO audits, optimizes on-page content for search intent, generates proper JSON-LD schema markup, analyzes Core Web Vitals, develops link building strategies, and identifies exactly what's holding your rankings back.

This agent follows Google's latest guidelines and uses proven optimization techniques from top-ranking sites to improve your search visibility.

## Quick Start

Run your first SEO audit in 30 seconds:

```bash
# Audit your site for SEO issues
/ask "Perform a technical SEO audit on [your-domain.com]"

# The agent will analyze crawlability, indexation, speed, mobile experience, and more
```

## Capabilities

### Technical SEO Audit

Get a comprehensive health check of your site's technical foundation. The agent crawls your site structure, checks indexation status, analyzes page speed metrics, reviews mobile optimization, assesses Core Web Vitals (LCP, FID, CLS), and reviews schema markup implementation. You'll receive a prioritized list of issues by severity.

**Example**: The agent identifies 23 critical issues including missing canonical tags, slow image loading (LCP 4.2s), and crawl errors preventing Google from indexing 15% of your pages.

### Content Optimization

Improve every page's on-page SEO factors. The agent analyzes title tags and meta descriptions, reviews header hierarchy (H1-H6), audits internal linking structure, evaluates content quality and depth, and assesses E-E-A-T signals (Experience, Expertise, Authoritativeness, Trust). You'll get specific recommendations for each page.

### Keyword Analysis

Understand what you should be ranking for and why you're not. The agent performs keyword research with search volume data, maps search intent to content types, calculates keyword difficulty scores, analyzes SERP features and competitors, and identifies low-hanging fruit opportunities.

### Link Building Strategy

Build authority through strategic backlinks. The agent analyzes your current backlink profile, identifies link gap opportunities, suggests outreach strategies for relevant sites, finds guest posting opportunities in your niche, and develops digital PR ideas for earning links naturally.

### JSON-LD Schema Generation

Help Google understand your content with proper structured data. The agent generates schema markup for articles, products, organizations, FAQs, how-tos, local businesses, and reviews. Proper schema can earn rich snippets, increasing click-through rates by 20-30%.

### Competitor SEO Analysis

See exactly where competitors are beating you. The agent identifies competitive keyword gaps, compares backlink profiles, analyzes content gaps in your coverage, tracks SERP feature ownership, and extracts strategy insights from what's working for them.

## When to Use

Use the SEO Specialist when you need to:
- Audit your site for technical SEO issues preventing rankings
- Optimize existing content to improve search positions
- Generate proper schema markup for rich snippets
- Analyze why competitors rank higher than you
- Develop a link building strategy for authority building
- Fix Core Web Vitals issues affecting user experience

## Example Workflows

### Workflow 1: Complete Technical Audit

Identify and fix technical issues:

```bash
# Step 1: Run comprehensive audit
/ask "Audit [your-domain.com] for technical SEO issues"

# The agent analyzes:
# - Crawlability and indexation
# - Page speed and Core Web Vitals
# - Mobile optimization
# - Schema markup
# - Internal linking
# - XML sitemap and robots.txt

# Step 2: Get prioritized action plan
# Agent returns issues ranked by:
# - Severity (high/medium/low)
# - Pages affected (count)
# - Fix difficulty (easy/medium/hard)
# - Expected impact on rankings
```

**Output**: Technical audit report with prioritized fixes and implementation guidance.

### Workflow 2: Content Optimization

Optimize a page for target keywords:

```bash
# Provide URL and target keyword
/ask "Optimize [page-url] for keyword '[target keyword]'"

# The agent will:
# - Analyze current ranking factors
# - Review title, meta, headers
# - Assess content depth vs. competitors
# - Check internal linking
# - Provide specific optimization recommendations
```

**Output**: Page-specific optimization checklist with before/after recommendations.

### Workflow 3: Schema Markup Generation

Add structured data for rich snippets:

```bash
# Request schema for your content type
/ask "Generate JSON-LD schema for [article/product/FAQ] page"

# The agent creates:
# - Properly formatted JSON-LD code
# - All required and recommended fields
# - Implementation instructions
# - Testing recommendations
```

**Output**: Production-ready JSON-LD code to paste in your page.

### Workflow 4: Competitor Gap Analysis

Find opportunities competitors are exploiting:

```bash
# Compare against competitors
/ask "Analyze SEO gaps between us and [competitor-domains]"

# The agent identifies:
# - Keywords they rank for that you don't
# - Backlinks they have that you don't
# - Content topics they cover that you're missing
# - SERP features they own
# - Estimated traffic opportunity
```

**Output**: Competitor gap analysis with actionable opportunities.

## Best Practices

1. **Fix Critical Issues First**: Focus on high-severity technical issues that affect crawling, indexing, or user experience. These have the biggest impact on rankings.

2. **Mobile First**: Google uses mobile-first indexing. Ensure your mobile experience is excellent—test everything on mobile devices.

3. **Page Speed Matters**: Core Web Vitals are ranking factors. Aim for LCP < 2.5s, FID < 100ms, CLS < 0.1. The agent will flag performance issues.

4. **Quality Over Quantity**: One well-optimized page beats ten mediocre ones. Use the agent's content optimization guidance to create comprehensive, helpful content.

5. **Schema is Free Real Estate**: Proper schema markup can earn rich snippets, increasing CTR by 20-30%. Implement it on all eligible pages.

6. **Monitor Competitors**: SEO is competitive. Use the agent's competitor analysis quarterly to stay ahead of changes in your market.

## MCP Integrations

The SEO Specialist can integrate with external tools:

- **ReviewWebsite MCP**: Live URL scraping, keyword research, backlink analysis
- **Google Search Console MCP**: Real search performance data, indexing status, query rankings

When MCP servers are unavailable, the agent uses manual analysis methods.

## Output Assets

The agent organizes outputs in standardized locations:

- **Audits**: `assets/seo/audits/{date}-{domain}-audit.md`
- **Keyword Research**: `assets/seo/keywords/{date}-{topic}-keywords.md`
- **Schema Markup**: `assets/seo/schemas/{page}-schema.json`
- **Reports**: `reports/seo/seo-specialist-{date}-{audit-slug}.md`

## Related Agents

- [Attraction Specialist](/docs/marketing/agents/attraction-specialist) - TOFU content and keyword strategy
- [Content Creator](/docs/marketing/agents/content-creator) - Content execution
- [Funnel Architect](/docs/marketing/agents/funnel-architect) - Conversion optimization

## Related Commands

- `/ask` - Query the agent directly
- `/scout` - Find relevant files and context
- `/plan` - Create comprehensive SEO plans
