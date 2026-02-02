---
title: "Analytics Analyst Agent"
description: "Generate performance reports, analyze traffic, track conversions, and identify marketing trends."
section: marketing
category: agents
order: 9
---
# Analytics Analyst Agent

> **Your data interpreter** - Transforms marketing metrics into actionable insights

## What This Agent Does

You're running three campaigns, traffic is up 40%, but conversions dropped 15%. Is this good or bad? Which campaign is working? Where are users dropping off? You're drowning in data but starving for insights.

**The Problem**: Marketing generates massive amounts of data—sessions, conversions, revenue, traffic sources, user journeys. Raw numbers don't tell you what's working, what's broken, or what to do next. Analyzing data manually takes hours and you still might miss patterns.

**The Solution**: The Analytics Analyst Agent transforms raw marketing data into clear, actionable insights. It tracks campaign performance, identifies trends, analyzes conversion funnels, and tells you exactly what's working and what needs fixing. You get decisions, not just dashboards.

## Quick Start

Generate a performance report:

```bash
# Monthly marketing analysis
/analytics "Generate monthly marketing performance report"
```

You'll get campaign ROI, traffic analysis, conversion metrics, and prioritized recommendations.

## Capabilities

### Campaign Performance Reporting
Tracks and analyzes campaign effectiveness:
- Calculates ROI and ROAS for each campaign
- Compares campaign performance
- Identifies winning campaigns and creative
- Tracks cost per acquisition (CPA)
- Monitors campaign budgets and spending

### Traffic Analysis
Understands where your visitors come from:
- Analyzes traffic sources (organic, paid, social, direct)
- Tracks user journeys and behavior
- Monitors bounce rates and engagement
- Identifies traffic trends and anomalies
- Reports on geographic and device distribution

### Conversion Tracking
Monitors the metrics that matter:
- Tracks conversion rates across funnels
- Analyzes micro-conversions and engagement
- Identifies conversion paths and attribution
- Finds drop-off points in user journeys
- Reports funnel performance metrics

### Custom Event Analysis
Tracks specific user behaviors:
- Analyzes custom marketing events
- Monitors user engagement patterns
- Tracks feature usage and adoption
- Reports on behavioral cohorts
- Identifies power users and churn risk

### Trend Identification
Spots patterns and opportunities:
- Detects emerging trends early
- Identifies seasonality patterns
- Finds anomalies requiring attention
- Forecasts future performance
- Reports on competitive opportunities

### Dashboard Data Preparation
Structures data for visualization:
- Creates metric summaries for dashboards
- Designs data visualizations
- Prepares automated report formats
- Formats data for stakeholder presentations
- Generates executive summaries

## When to Use

Use the Analytics Analyst Agent when you need to:
- Generate monthly/weekly performance reports
- Analyze campaign effectiveness
- Understand traffic patterns and sources
- Identify conversion bottlenecks
- Track feature adoption and engagement
- Prepare data for stakeholder presentations
- Investigate performance anomalies

## Example Workflows

### Monthly Performance Report

```bash
/analytics "Create monthly marketing performance report for December"
```

**You'll get**:
```markdown
## Marketing Analytics Report - December 2025

### Executive Summary
Strong month with 23% increase in conversions despite 15% higher CPA.
Email campaigns outperformed paid social by 2.4x ROI.

### Performance Overview
| Metric       | This Month | Last Month | Change | Target |
|--------------|------------|------------|--------|--------|
| Sessions     | 45,230     | 38,102     | +18.7% | 40,000 |
| Conversions  | 1,890      | 1,534      | +23.2% | 1,800  |
| Revenue      | $94,500    | $76,800    | +23.0% | $90,000|
| Avg CPA      | $50.00     | $50.07     | -0.1%  | $55.00 |

### Traffic Analysis
| Source   | Sessions | Conv. Rate | Revenue   | vs Last Month |
|----------|----------|------------|-----------|---------------|
| Organic  | 18,092   | 5.2%       | $47,280   | +12% sessions |
| Email    | 12,456   | 6.8%       | $33,810   | +28% sessions |
| Paid Social| 8,320  | 3.1%       | $10,290   | +5% sessions  |
| Direct   | 6,362    | 4.7%       | $2,120    | -8% sessions  |

### Campaign Performance
| Campaign         | Spend   | Conversions | CPA   | ROAS |
|------------------|---------|-------------|-------|------|
| Holiday Email    | $2,400  | 846         | $2.84 | 14.1x|
| Facebook Retarget| $8,500  | 258         | $32.95| 1.2x |
| Google Search    | $12,000 | 486         | $24.69| 3.9x |

### Funnel Analysis
| Stage        | Volume | Conv. Rate | Drop-off |
|--------------|--------|------------|----------|
| Landing      | 45,230 | 100%       | -        |
| Product View | 22,615 | 50.0%      | 50.0%    |
| Add to Cart  | 9,046  | 40.0%      | 60.0%    |
| Checkout     | 4,523  | 50.0%      | 50.0%    |
| Purchase     | 1,890  | 41.8%      | 58.2%    |

### Key Insights
1. **Email campaigns exceptional**: 6.8% conversion rate (vs 4.2% average)
2. **Cart abandonment high**: 58.2% drop-off at checkout—investigate
3. **Organic traffic quality improving**: +12% traffic, +15% conversions
4. **Facebook ROAS below target**: 1.2x vs 2.0x goal—pause or optimize

### Recommendations
| Priority | Action                                    | Expected Impact |
|----------|-------------------------------------------|-----------------|
| High     | Investigate checkout drop-off causes      | +15-20% conv    |
| High     | Scale email campaigns (proven ROI)        | +25% revenue    |
| Medium   | Pause low-performing Facebook ads         | Save $3K/month  |
| Medium   | A/B test cart page design                 | +5-10% conv     |
```

### Traffic Source Analysis

```bash
/analytics "Analyze traffic patterns and identify best performing sources"
```

**Identifies**:
- Which channels drive highest quality traffic
- Time-of-day and day-of-week patterns
- Geographic performance variations
- Device and browser breakdown
- Source-specific conversion rates

### Conversion Funnel Deep Dive

```bash
/analytics "Analyze checkout funnel drop-off points"
```

**Reveals**:
- Exact step where users abandon
- Comparison with industry benchmarks
- Segmentation by traffic source
- Mobile vs desktop behavior differences
- Recommended optimizations

## MCP Integration

When MCP servers configured, the analyst accesses real data:

```bash
# Query Google Analytics
mcp_google-analytics: get sessions by source for last 30 days

# Get search performance
mcp_google-search-console: get top queries for site
```

**Fallback**: If MCP unavailable, uses project files and sample data.

## Report Output Format

All reports follow this structure:

```markdown
## [Report Title]

### Executive Summary
[2-3 sentence overview with key findings]

### Performance Overview
[Metric comparison table vs last period and targets]

### [Section-Specific Analysis]
[Tables and visualizations for traffic/campaigns/conversions]

### Trends & Anomalies
[Notable patterns requiring attention]

### Key Insights
[Numbered list of actionable discoveries]

### Recommendations
[Prioritized action items with expected impact]

### Data Quality Notes
[Caveats, limitations, data sources]
```

## Metrics Tracked

**Traffic Metrics**:
- Sessions, users, pageviews
- Bounce rate, session duration
- Traffic sources and channels
- Geographic and device distribution

**Conversion Metrics**:
- Conversion rate by source
- Micro-conversions and engagement
- Funnel progression and drop-offs
- Attribution and conversion paths

**Revenue Metrics**:
- Total revenue and average order value
- Revenue by source and campaign
- Customer lifetime value
- ROI and ROAS calculations

**Engagement Metrics**:
- Feature usage and adoption
- User cohort behavior
- Retention and churn rates
- Custom event tracking

## Related Agents

- [MCP Manager](/docs/marketing/agents/mcp-manager) - Accesses analytics data via MCP
- [Project Manager](/docs/marketing/agents/project-manager) - Uses reports for project decisions
- [Planner](/docs/marketing/agents/planner) - Plans based on analytics insights

## Related Commands

- [`/analytics`](/docs/marketing/commands) - Generate analytics report
- [`/metrics`](/docs/marketing/commands) - Quick metric snapshot

## Tips

**Schedule Regular Reports**: Monthly performance reports catch trends early. Set reminders to run analytics reviews.

**Compare Periods**: Always compare to previous period and targets. Context matters more than absolute numbers.

**Segment Everything**: Overall metrics hide important patterns. Segment by source, device, geography, and user type.

**Focus on Action**: The best insight is worthless without action. Every report ends with prioritized recommendations.

**Track Leading Indicators**: Don't just track revenue (lagging). Monitor engagement, cart adds, and signups (leading).

The Analytics Analyst Agent transforms data overwhelm into decision clarity. You stop guessing and start knowing what works.
