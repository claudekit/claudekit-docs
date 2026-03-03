---
title: "ckm:hub"
description: "Open Content Hub and Marketing Dashboard"
section: marketing
kit: marketing
category: skills
order: 37
---

# Hub

> Open the Content Hub and Marketing Dashboard together in a unified workspace.

## What This Skill Does

The Hub skill launches the full marketing workspace: the Content Hub for managing and publishing content assets alongside the Marketing Dashboard for monitoring performance metrics. It's the primary entry point for marketing sessions that involve both content work and performance review.

The Content Hub provides a centralized library for drafts, published pieces, templates, and media assets. The Marketing Dashboard shows live KPIs across all channels. Together, they give marketers a complete view of what's been created and how it's performing — without context switching between separate tools.

The hub is designed for morning standups, weekly planning sessions, and end-of-day reviews where teams need full context before making decisions about content priorities and budget allocation.

## Quick Start

```
/ckm:hub
```

Launches both the Content Hub and Marketing Dashboard in browser tabs.

## Key Features

- One-command launch of both Content Hub and Marketing Dashboard
- Content Hub: asset library, draft management, publishing queue
- Dashboard: live KPIs, channel performance, goal tracking
- Cross-linking between content pieces and their performance data
- Session state preserved between opens
- Configurable default views per team role

## Usage Examples

**Morning marketing session**:
```
/ckm:hub
# Opens Content Hub + Dashboard for the daily workflow
```

**Weekly planning view**:
```
/ckm:hub --period last-week --content-status published
# Shows last week's published content and its performance metrics
```

**Content performance review**:
```
Open the hub and show me how this week's blog posts performed compared to the prior week.
Flag any posts underperforming vs. average
```

## Related

- [ckm:dashboard](/docs/marketing/skills/dashboard) - Dashboard only (without Content Hub)
- [Content Hub](/docs/marketing/skills/content-hub) - Content Hub skill details
- [ckm:analyze](/docs/marketing/skills/analyze) - Deep performance analysis
