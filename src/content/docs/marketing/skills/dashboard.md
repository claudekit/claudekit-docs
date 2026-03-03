---
title: "ckm:dashboard"
description: "Launch and manage the Marketing Dashboard"
section: marketing
kit: marketing
category: skills
order: 33
---

# `ckm:dashboard`

> Launch a live marketing dashboard to monitor KPIs, campaign metrics, and channel performance in real time.

## What This Skill Does

The Dashboard skill opens and manages the Marketing Dashboard — a visual command center for monitoring marketing performance across all channels. It provides a unified view of email metrics, social engagement, ad spend, SEO rankings, and conversion rates without switching between tools.

The dashboard is designed for daily use by marketing managers who need a quick health check, and for weekly reviews where teams discuss performance trends. It pulls data from connected integrations and refreshes on a configurable schedule.

Unlike static reports, the dashboard is interactive: drill down into specific channels, filter by date range, and compare periods side by side.

## Quick Start

```
/ckm:dashboard
```

This launches the Marketing Dashboard in your browser with default settings.

## Key Features

- Single-pane view of all marketing channels
- Real-time data refresh from connected integrations
- Date range selectors and period comparisons
- Channel-specific drill-down views
- Goal tracking with progress indicators
- Alert configuration for metric anomalies
- Export snapshots as PDF or image for reporting

## Usage Examples

**Open dashboard with specific date range**:
```
/ckm:dashboard --period last-30-days
```

**Campaign-specific view**:
```
/ckm:dashboard --campaign "Q1 Product Launch" --metrics cac,roas,conversions
```

**Weekly team review setup**:
```
Open the marketing dashboard filtered to this week's performance.
Highlight any metrics that are off-target compared to our goals
```

## Related

- [ckm:analyze](/docs/marketing/skills/analyze) - Generate detailed performance reports
- [ckm:hub](/docs/marketing/skills/hub) - Open Content Hub alongside dashboard
- [Analytics](/docs/marketing/skills/analytics) - Underlying analytics data access
