---
title: "/analyze"
description: "Generate analytics and performance reports for traffic, campaigns, conversions, funnels, content, and engagement with AI-powered insights"
section: marketing
category: commands
order: 7
published: true
---

> Turn data into actionable insights with AI-powered analytics

## Quick Start

```bash
/analyze traffic
```

**Output**: `reports/analytics/251229-traffic.md` with trends, insights, and recommendations

## Syntax

```bash
/analyze <type>
```

### Analysis Types

| Type | Description | Output | MCP Integration |
|------|-------------|--------|-----------------|
| `traffic` | Traffic analysis | Traffic report | GA4 |
| `campaigns` | Campaign performance | Campaign overview | GA4, Search Console |
| `conversions` | Conversion funnel | Funnel analysis | GA4 |
| `funnel` | Sales funnel metrics | Funnel report | GA4 |
| `content` | Content performance | Content analysis | GA4, Search Console |
| `engagement` | Engagement metrics | Engagement report | GA4 |

## Example: Traffic Analysis

**Input**:
```bash
/analyze traffic
```

**Expected Output**:
```markdown
✓ analytics-analyst: Data collected from GA4
✓ funnel-architect: Insights generated

---
# Traffic Analysis Report
Period: Last 30 days (Dec 29 - Jan 29, 2025)

## OVERVIEW
Total Sessions: 47,320 (+18% vs previous period)
Total Users: 32,180 (+15%)
Page Views: 156,890 (+22%)
Bounce Rate: 42.3% (-8% improvement)
Avg Session Duration: 3m 24s (+12%)

## TOP TRAFFIC SOURCES
1. Organic Search: 18,940 sessions (40%)
2. Direct: 12,530 sessions (26%)
3. Social Media: 8,210 sessions (17%)
4. Referral: 5,330 sessions (11%)
5. Paid Ads: 2,310 sessions (5%)

## TOP PAGES
1. /pricing - 12,450 views (+28%)
2. /features - 9,230 views (+15%)
3. /blog/ai-automation - 8,140 views (+45%)
4. /case-studies - 6,720 views (+22%)
5. / (homepage) - 15,890 views (+12%)

## KEY INSIGHTS
✓ Blog traffic surging (+45% growth)
✓ Pricing page conversions up 28%
✓ Social media referrals increasing
⚠ Paid ads underperforming (5% vs 15% target)
⚠ Mobile bounce rate high (52%)

## RECOMMENDATIONS
1. Increase blog publishing frequency (capitalize on growth)
2. Optimize mobile experience (reduce 52% bounce)
3. Pause underperforming ad campaigns
4. Create more case study content (+22% engagement)

Report saved: reports/analytics/250129-traffic.md

Next: /analyze conversions
```

## Workflow Integration

```bash
# Weekly analytics routine
/analyze traffic
/analyze campaigns
/analyze conversions

# Deep dive into issues
/analyze engagement  # if low engagement
/fix:fast Issues identified in analytics

# Campaign-specific
/campaign analyze "Q1 Launch"
/analyze campaigns  # compare all campaigns
```

## Agents Used

- **analytics-analyst**: Data analysis and reporting
- **funnel-architect**: Funnel insights and optimization

## Skills Activated

- **analytics**: Analysis frameworks and best practices

## MCP Integrations

- **Google Analytics 4**: Traffic and behavior data
- **Search Console**: Search performance and rankings

## Related Commands

- [/campaign](/docs/marketing/commands/campaign) - Campaign-specific analysis
- [/seo](/docs/marketing/commands/seo) - SEO performance
- [/use-mcp](/docs/marketing/commands/use-mcp) - Connect analytics tools

---

**Data-driven decisions.** AI-powered analytics that guide your strategy.
