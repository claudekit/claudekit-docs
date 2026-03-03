---
title: "ckm:marketing-dashboard"
description: "Local-first marketing command center for solopreneurs — unified view of analytics, campaigns, leads, and AI agent tasks."
section: marketing
category: skills
order: 85
---

# Marketing Dashboard

> Your personal marketing command center — all metrics, campaigns, and AI agent activity in one unified dashboard.

## What This Skill Does

**The Challenge**: Solopreneurs and small teams monitor metrics across GA4, ad platforms, email tools, and CRM — switching between 5+ tabs daily. There's no unified view, and critical signals get missed in the noise.

**The Solution**: Marketing Dashboard skill builds a local-first command center that aggregates your marketing metrics, campaign statuses, lead pipeline, and AI agent activity into a single terminal or web interface. Runs locally — no external SaaS dependency.

## Activation

**Implicit**: Activates when user wants to view metrics, track campaigns, or monitor marketing performance.

**Explicit**: Activate via prompt:
```
Activate marketing-dashboard skill to [build/launch/update] dashboard for [project]
```

## Capabilities

### 1. Metrics Aggregation
Pull data from multiple sources into one view.

**Integrated sources**:
| Source | Metrics Pulled | Connection |
|--------|----------------|-----------|
| Google Analytics 4 | Sessions, conversions, traffic | GA4 API |
| Google Search Console | Impressions, clicks, ranking | GSC API |
| Email platform | Open rate, CTR, list growth | Mailchimp/ConvertKit API |
| Ad platforms | Spend, ROAS, impressions | Google/Meta Ads API |
| CRM | New leads, pipeline value | HubSpot/Airtable API |

### 2. Dashboard Layouts
Pre-built views for different monitoring needs.

**Daily overview**:
```
┌─────────────────────────────────────────────┐
│  Marketing Command Center — March 3, 2026   │
├───────────────┬─────────────────────────────┤
│ Sessions (7d) │ 12,480  ↑ 8%  vs last week  │
│ Leads (7d)    │    340  ↑ 12% vs last week  │
│ MRR           │ $14,200 ↑ 3%  vs last month │
│ Ad Spend (7d) │  $2,100 ROAS: 3.2x          │
├───────────────┴─────────────────────────────┤
│ Active Campaigns: 3  │ Scheduled: 2          │
│ Email sends today: 1 │ A/B tests running: 2  │
└─────────────────────────────────────────────┘
```

### 3. Campaign Status Tracker
Monitor all active campaigns and their performance.

**Campaign card fields**:
- Name, channel, budget
- Status: Active / Paused / Ended
- Key metric vs target (e.g., CVR: 3.2% vs 4.0% target)
- Days remaining
- Quick action links

### 4. AI Agent Activity Log
Track background marketing agents and their outputs.

**Agent activity view**:
- Recently completed tasks
- In-progress tasks with ETA
- Generated assets (links to files in `assets/`)
- Errors or blocked tasks requiring attention

## Prerequisites

- API credentials configured in `.env`:
  - `GA4_SERVICE_ACCOUNT_PATH`
  - `GSC_SERVICE_ACCOUNT_PATH`
  - Email platform API key
  - Ad platform credentials

## Best Practices

**1. Morning dashboard ritual**
Open dashboard as first task of the day. 5-minute review prevents firefighting all day.

**2. Set alert thresholds**
Configure alerts for: ad spend > daily budget, CTR drop > 20%, bounce rate spike.

**3. Weekly digest mode**
On Fridays, run weekly digest view: compare current week to previous and quarterly targets.

## Common Use Cases

### Use Case 1: Solo Founder Daily Review
**Scenario**: Single founder running paid ads + email + content. Needs 5-minute daily pulse check.

**Workflow**:
1. Open dashboard terminal: `python dashboard/run.py`
2. Review daily metrics snapshot
3. Check campaign performance vs targets
4. Review agent task completions (new posts published, emails queued)
5. Flag one metric needing attention today

### Use Case 2: Agency Client Reporting
**Scenario**: Marketing agency managing 5 client accounts. Needs per-client rollups.

**Workflow**:
1. Configure per-client profile with their GA4/ad credentials
2. Generate weekly report per client: `python dashboard/report.py --client=acme`
3. Email-ready HTML report exported to `reports/clients/`

## Troubleshooting

**Issue**: GA4 API returns no data
**Solution**: Verify service account has `Viewer` role on GA4 property. Check property ID format.

**Issue**: Dashboard shows stale data
**Solution**: Check API rate limits. Add data refresh timestamp to dashboard. Schedule refresh cron.

## Related Skills

- [Analytics](/docs/marketing/skills/analytics) - GA4 and marketing analytics deep dive
- [Marketing Planning](/docs/marketing/skills/marketing-planning) - Strategy behind the metrics
- [Campaign](/docs/marketing/skills/campaign) - Campaign management
- [Ads Management](/docs/marketing/skills/ads-management) - Paid ads monitoring

## Related Commands

- `/ckm:analyze` - Deep-dive metric analysis
- `/ckm:dashboard` - Dashboard operations
