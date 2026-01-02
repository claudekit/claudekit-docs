---
title: "Analytics"
description: "Marketing analytics with GA4 API integration, KPI tracking, attribution models, and data-driven reporting for performance optimization."
section: marketing
category: skills
order: 4
---

> Transform marketing data into actionable insights through automated reporting, attribution analysis, and ROI tracking.

## What This Skill Does

**The Challenge**: Marketing teams drown in data from GA4, ad platforms, email tools, and CRMs. Manual reporting is time-consuming and cross-channel attribution is complex.

**The Solution**: Analytics skill provides GA4 API integration, pre-built KPI frameworks, attribution models, and automated report generation. Includes Mermaid.js visualization and actionable recommendation prioritization.

## Activation

**Implicit**: Activates automatically for Analytics Analyst, Campaign Manager, and Growth Specialist agents.

**Explicit**: Activate via prompt:
```
Activate analytics skill to [describe task]
```

## Capabilities

### 1. Google Analytics 4 API Integration
Query GA4 data programmatically for custom reports and dashboards.

**Setup**:
```bash
npm install @google-analytics/admin @google-analytics/data
```

**List accounts and properties**:
```bash
node scripts/ga-list-accounts.cjs --summaries
```

**Run custom report**:
```bash
node scripts/ga-run-report.cjs \
  --property=PROPERTY_ID \
  --dimensions=country,city \
  --metrics=activeUsers,sessions \
  --start-date=30daysAgo \
  --end-date=today
```

**API documentation**:
- Admin API: `references/ga-admin-api.md`
- Data API: `references/ga-data-api.md`

### 2. KPI Framework and Tracking
Pre-defined metrics for acquisition, engagement, conversion, and retention.

**Core marketing KPIs**:
| Category | Metrics |
|----------|---------|
| Acquisition | CAC (Customer Acquisition Cost), CPL (Cost per Lead), Traffic |
| Engagement | CTR (Click-Through Rate), Time on Site, Bounce Rate |
| Conversion | CVR (Conversion Rate), ROAS (Return on Ad Spend), Revenue |
| Retention | LTV (Lifetime Value), Churn Rate, NPS (Net Promoter Score) |

**Framework loading**: `references/marketing-kpis.md`

### 3. Attribution Models
Compare attribution models to understand channel contribution.

**Available models**:
- **Last-click**: Full credit to last touchpoint
- **First-click**: Full credit to first touchpoint
- **Linear**: Equal credit across all touchpoints
- **Time-decay**: More credit to recent touchpoints
- **Position-based**: 40% first, 40% last, 20% middle

**Model guide**: `references/attribution-models.md`

## Prerequisites

**For GA4 API access**:
- Google Cloud project with GA4 APIs enabled
- Service account OR OAuth 2.0 credentials
- Credentials file in `.claude/secrets/`:
  - `ga_service_account.json` (service account)
  - OR `google_client_secret.json` (OAuth)

**For report generation**:
- Configured data sources (GA4, ad platforms, email, CRM)

## Configuration

**Credentials location**: `.claude/secrets/`
- `ga_service_account.json` - Service account (recommended for automation)
- `google_client_secret.json` - OAuth (interactive setup)
- `google_tokens.json` - OAuth tokens (auto-generated)

**Report templates**: `references/report-templates.md`

## Best Practices

**1. Track leading metrics, not just lagging**
Monitor engagement metrics (leading) to predict conversions (lagging).

**2. Compare apples to apples**
Use consistent time frames and segments. Compare year-over-year accounting for seasonality.

**3. Statistical significance before conclusions**
Ensure sample size supports insights. Use confidence intervals for A/B tests.

## Common Use Cases

### Use Case 1: Weekly Campaign Performance Report
**Scenario**: Generate weekly report comparing channel performance.

**Workflow**:
1. Fetch GA4 data for past 7 days
2. Calculate key ratios (CAC, ROAS, CVR)
3. Compare with previous week and benchmarks
4. Generate Mermaid.js charts
5. Prioritize recommendations

**Output**: Markdown report with:
- Channel performance table
- Trend visualizations
- Top 3 actions with owners

**Template**: `references/report-templates.md` → Weekly Performance

### Use Case 2: Attribution Analysis for Multi-Touch Campaign
**Scenario**: Understand how channels work together in 30-day customer journey.

**Workflow**:
1. Export GA4 path data
2. Apply attribution models (last-click, linear, position-based)
3. Compare channel contribution across models
4. Identify undervalued channels
5. Recommend budget reallocation

**Output**: Attribution comparison table with budget optimization recommendations.

## Troubleshooting

**Issue**: GA4 API returns 403 Forbidden
**Solution**:
1. Verify API is enabled in Google Cloud Console
2. Check service account has access to GA4 property (minimum Viewer role)
3. Confirm property ID format: `properties/123456789`

**Issue**: Reports show unexpected data spikes
**Solution**:
1. Check for bot traffic (filter internal IPs)
2. Verify tracking implementation (GTM tag firing)
3. Compare raw events vs processed metrics

**Issue**: Attribution model results don't match GA4 interface
**Solution**: GA4 uses data-driven attribution by default. Scripts use rule-based models. Document methodology differences.

## Related Skills

- [Campaign Management](/docs/marketing/skills/campaign-management) - Campaign tracking and optimization
- [SEO Optimization](/docs/marketing/skills/seo-optimization) - Search traffic analysis
- [Email Marketing](/docs/marketing/skills/email-marketing) - Email performance metrics
- [Ads Management](/docs/marketing/skills/ads-management) - Paid campaign ROAS tracking

## Related Commands

- `/analytics/dashboard` - Generate dashboard snapshot
- `/analytics/keywords` - Analyze search performance
- `/analyze` - General data analysis
- `/analyze:report` - Create custom report
