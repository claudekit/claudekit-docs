---
title: "Campaign Management"
description: "End-to-end campaign planning, execution, and optimization with budget allocation, launch checklists, and performance tracking."
section: marketing
category: skills
order: 7
---

> Orchestrate multi-channel campaigns from planning to post-mortem with systematic workflows and optimization frameworks.

## What This Skill Does

**The Challenge**: Marketing campaigns involve coordinating multiple channels, teams, assets, and timelines. Without systematic planning, campaigns launch late, miss key elements, or lack clear success metrics.

**The Solution**: Campaign Management skill provides campaign brief templates, launch checklists, budget allocation frameworks, and optimization workflows. Includes milestone tracking, multi-channel coordination, and post-campaign analysis structures.

## Activation

**Implicit**: Activates automatically for Campaign Manager, Growth Specialist, and Project Manager agents.

**Explicit**: Activate via prompt:
```
Activate campaign-management skill to orchestrate multi-channel campaign
```

## Capabilities

### 1. Campaign Brief Creation
Structured planning document defining objectives, audience, budget, channels, and success criteria.

**Brief includes**:
- Objective and primary KPIs
- Target audience segments
- Timeline with key milestones
- Budget allocation by channel
- Channel mix and role (awareness, conversion, retention)
- Key messages and creative requirements
- Success criteria and measurement plan

**Template loaded**: `references/campaign-brief.md`

### 2. Launch Checklist Management
Pre-flight verification ensuring all campaign elements are ready.

**Checklist covers**:
- [ ] Assets complete (creative, copy, landing pages)
- [ ] Tracking setup (pixels, UTM parameters, conversion goals)
- [ ] Platform campaigns configured and reviewed
- [ ] QA completed (links, forms, mobile responsiveness)
- [ ] Team briefed on launch day procedures
- [ ] Monitoring dashboard configured
- [ ] Escalation plan documented

**Full checklist**: `references/launch-checklist.md`

### 3. Budget Allocation Framework
Distribute budget across channels based on objectives and historical performance.

**Allocation strategies**:
- **Awareness campaigns**: 60% social, 25% display, 15% content
- **Lead generation**: 50% search, 30% social, 20% content
- **Conversion**: 70% search/retargeting, 20% email, 10% social

**Framework guide**: `references/budget-allocation.md`

## Prerequisites

- Campaign objectives aligned with business goals
- Historical campaign data for benchmarking
- Cross-functional team alignment (creative, product, sales)

## Configuration

No configuration required. Skill provides planning frameworks that adapt to any campaign type.

**Optional**: Define campaign templates in `assets/templates/campaigns/` for recurring campaign types.

## Best Practices

**1. Start with objective, not tactics**
Define success metrics before choosing channels. Tactics should serve objectives, not vice versa.

**2. Plan tracking before launch**
Set up conversion tracking, UTM parameters, and dashboards before campaign goes live. Retroactive tracking is unreliable.

**3. Build in buffer time**
Add 20% buffer to timelines. Creative reviews, approvals, and platform setup always take longer than estimated.

## Common Use Cases

### Use Case 1: Product Launch Campaign Planning
**Scenario**: Launch new SaaS feature with 6-week integrated campaign.

**Workflow**:
1. Create campaign brief (objectives: 500 signups, $50 CAC target)
2. Plan channel mix (search ads, email, social, PR)
3. Define milestones (pre-launch teaser, launch week blitz, follow-up nurture)
4. Allocate budget ($15k: $8k search, $4k social, $3k content)
5. Build asset list (landing page, 5 emails, 10 social posts, 3 blog posts)
6. Set up tracking (conversion pixels, UTM campaign parameter)
7. Complete launch checklist

**Output**: Campaign brief with timeline, budget, asset list, and success metrics.

### Use Case 2: Post-Campaign Analysis
**Scenario**: Evaluate Q3 lead generation campaign performance.

**Workflow**:
1. Compile performance data across channels
2. Calculate key metrics (CAC, CPL, conversion rates, ROAS)
3. Compare to targets and benchmarks
4. Identify top performers and underperformers
5. Document learnings (what worked, what didn't, why)
6. Create recommendations for next campaign

**Output**: Post-mortem report with performance summary, learnings, and optimization recommendations.

## Troubleshooting

**Issue**: Campaign launched late, missed key dates
**Solution**: Use launch checklist with built-in buffers. Schedule working sessions for asset reviews 2 weeks before launch.

**Issue**: Unclear if campaign is succeeding mid-flight
**Solution**: Define success criteria upfront with 24-hour, 1-week, and final benchmarks. Review at regular intervals (daily for first 48 hours, weekly thereafter).

**Issue**: Budget overspent in first week
**Solution**: Set daily spend caps in ad platforms. Review spend vs pacing daily for first week, then 2x/week.

## Related Skills

- [Email Marketing](/docs/marketing/skills/email-marketing) - Email campaign execution
- [Social Media](/docs/marketing/skills/social-media) - Social campaign content
- [Ads Management](/docs/marketing/skills/ads-management) - Paid campaign optimization
- [Analytics](/docs/marketing/skills/analytics) - Campaign performance tracking

## Related Commands

- `/campaign/create` - Generate campaign plan
- `/campaign/analyze` - Analyze campaign performance
- `/plan` - Create implementation plan
- `/analytics/dashboard` - Campaign dashboard
