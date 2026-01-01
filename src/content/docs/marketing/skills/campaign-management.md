---
title: "Campaign Management"
description: "Comprehensive campaign planning, execution, and optimization with budget allocation, launch checklists, and performance tracking."
section: marketing
category: skills
order: 7
---

> Orchestrate multi-channel campaigns from planning to post-mortem with systematic workflows and optimization frameworks.

## What This Skill Does

**The Challenge**: Marketing campaigns involve coordinating multiple channels, teams, assets, and timelines. Without systematic planning, campaigns launch late, miss key elements, or lack clear success metrics.

**The Solution**: Campaign Management skill provides campaign brief templates, launch checklists, budget allocation frameworks, and optimization workflows. Includes milestone tracking, multi-channel coordination, and post-campaign analysis structure.

## Activation

**Implicit**: Activates automatically for Campaign Manager, Growth Specialist, and Project Manager agents.

**Explicit**: `/skill:add campaign-management`

## Capabilities

### 1. Campaign Brief Generation
Structured planning documents defining objectives, audience, budget, channels, and success criteria.

**Brief Includes**:
- Goals and key KPIs
- Target audience segmentation
- Timeline with key milestones
- Budget allocation by channel
- Channel mix and roles (awareness, conversion, retention)
- Key messaging and creative requirements
- Success criteria and measurement plan

**Loaded Template**: `references/campaign-brief.md`

### 2. Launch Checklist Management
Pre-flight verification ensuring all campaign elements are ready.

**Checklist Includes**:
- [ ] Assets complete (creative, copy, landing pages)
- [ ] Tracking setup (pixels, UTM parameters, conversion goals)
- [ ] Platform campaigns configured and reviewed
- [ ] QA complete (links, forms, mobile responsiveness)
- [ ] Team briefed on launch day procedures
- [ ] Monitoring dashboards configured
- [ ] Escalation plan documented

**Full Checklist**: `references/launch-checklist.md`

### 3. Budget Allocation Framework
Distribute budget across channels based on goals and historical performance.

**Allocation Strategies**:
- **Awareness Campaign**: 60% social media, 25% display, 15% content
- **Lead Generation**: 50% search, 30% social media, 20% content
- **Conversion**: 70% search/retargeting, 20% email, 10% social media

**Framework Guide**: `references/budget-allocation.md`

## Prerequisites

- Campaign objectives aligned with business goals
- Historical campaign data for benchmarking
- Cross-functional team alignment (creative, product, sales)

## Configuration

No configuration needed. Skill provides planning frameworks adaptable to any campaign type.

**Optional**: Define campaign templates in `assets/templates/campaigns/` for recurring campaign types.

## Best Practices

**1. Start with Goals, Not Tactics**
Define success metrics before choosing channels. Tactics should serve goals, not vice versa.

**2. Plan Tracking Before Launch**
Set up conversion tracking, UTM parameters, and dashboards before campaign starts. Retrospective tracking is unreliable.

**3. Build in Buffer Time**
Add 20% buffer to timelines. Creative reviews, approvals, and platform setup always take longer than expected.

## Common Use Cases

### Use Case 1: Product Launch Campaign Planning
**Scenario**: Launch new SaaS feature with integrated 6-week campaign.

**Workflow**:
1. Create campaign brief (goal: 500 signups, target CAC $50)
2. Plan channel mix (search ads, email, social media, PR)
3. Define milestones (pre-launch teaser, launch week blitz, nurture follow-up)
4. Allocate budget ($15k: $8k search, $4k social, $3k content)
5. Build asset list (landing page, 5 emails, 10 social posts, 3 blog posts)
6. Set up tracking (conversion pixels, campaign UTM parameters)
7. Complete launch checklist

**Output**: Campaign brief with timeline, budget, asset list, and success metrics.

### Use Case 2: Post-Campaign Analysis
**Scenario**: Evaluate Q3 lead generation campaign performance.

**Workflow**:
1. Compile performance data across channels
2. Calculate key metrics (CAC, CPL, conversion rate, ROAS)
3. Compare with goals and benchmarks
4. Identify high performers and underperformers
5. Document lessons learned (what worked, what didn't, why)
6. Create recommendations for next campaign

**Output**: Post-mortem report with performance summary, learnings, and optimization recommendations.

## Troubleshooting

**Issue**: Campaign launches late, missing key dates
**Solution**: Use launch checklist with built-in buffers. Schedule review sessions for asset approval 2 weeks before launch.

**Issue**: Unclear whether campaign is succeeding mid-flight
**Solution**: Define success criteria upfront with 24-hour, 1-week, and final benchmarks. Review at regular intervals (daily first 48 hours, weekly thereafter).

**Issue**: Budget overspend in first week
**Solution**: Set daily spend caps on ad platforms. Review spend vs pacing daily in first week, then 2x/week.

## Related Skills

- [Email Marketing](/docs/marketing/skills/email-marketing) - Email campaign execution
- [Social Media](/docs/marketing/skills/social-media) - Social campaign content
- [Ads Management](/docs/marketing/skills/ads-management) - Paid campaign optimization
- [Analytics](/docs/marketing/skills/analytics) - Campaign performance tracking

## Related Commands

- `/campaign/create` - Create campaign plan
- `/campaign/analyze` - Analyze campaign performance
- `/plan` - Generate implementation plan
- `/analytics/dashboard` - Campaign dashboard
