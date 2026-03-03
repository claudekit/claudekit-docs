---
title: "ckm:marketing-planning"
description: "Marketing strategy with RACE, SOSTAC, STP frameworks — create data-driven plans with OKRs, budgets, and execution roadmaps."
section: marketing
category: skills
order: 87
---

# Marketing Planning

> Build rigorous marketing strategies using proven frameworks — from situation analysis to OKRs to quarterly execution plans.

## What This Skill Does

**The Challenge**: Most marketing plans are tactical lists masquerading as strategy. They lack situation analysis, defined objectives, prioritized channels, and success metrics. Without structure, effort disperses and results stay unpredictable.

**The Solution**: Marketing Planning skill applies RACE, SOSTAC, and STP frameworks to produce structured marketing strategies with situation analysis, target segment definitions, channel mix rationale, OKRs, budgets, and quarterly execution roadmaps.

## Activation

**Implicit**: Activates when user requests marketing strategy, marketing plan, go-to-market, or annual planning.

**Explicit**: Activate via prompt:
```
Activate marketing-planning skill to create [annual/quarterly/campaign] plan for [product/company]
```

## Capabilities

### 1. SOSTAC Framework
Six-phase strategic planning model.

**S — Situation analysis**: Where are we now? (SWOT, market share, channel performance)
**O — Objectives**: Where do we want to be? (SMART goals, OKRs)
**S — Strategy**: How do we get there? (STP, positioning, channel mix)
**T — Tactics**: What specifically do we do? (Content calendar, ad campaigns, email sequences)
**A — Actions**: Who does what by when? (Task owners, deadlines, resources)
**C — Control**: How do we measure success? (KPIs, dashboards, review cadence)

### 2. STP Framework
Segment, Target, Position — define WHO and HOW.

**Segmentation dimensions**:
```markdown
## Market Segments
- Segment A: [firmographic/demographic] + [behavioral] + [psychographic]
  Size: X companies / Y people
  Reachability: [channels they use]

- Segment B: ...
```

**Positioning statement template**:
```
For [target segment] who [need/pain],
[Product] is a [category] that [unique benefit].
Unlike [competitors], [product] [key differentiator].
```

### 3. RACE Framework
Plan across full customer lifecycle.

**R — Reach**: Build awareness (SEO, social, PR, ads)
**A — Act**: Drive engagement (content, landing pages, free tools)
**C — Convert**: Generate leads and sales (email, demos, trials)
**E — Engage**: Retain and grow (onboarding, NPS, upsell)

**Budget allocation guide**:
| Stage | Early | Growth | Scale |
|-------|-------|--------|-------|
| Reach | 20% | 40% | 50% |
| Act | 30% | 25% | 20% |
| Convert | 35% | 25% | 20% |
| Engage | 15% | 10% | 10% |

### 4. OKR Planning Templates
Structured objectives with measurable key results.

**OKR example**:
```markdown
## Q2 2026 Marketing OKRs

**Objective**: Build top-of-funnel pipeline for enterprise segment

Key Result 1: Generate 500 qualified enterprise leads (from 200 in Q1)
Key Result 2: Increase organic traffic to enterprise pages by 60%
Key Result 3: Launch 2 enterprise case studies with $100K+ ARR customers
Key Result 4: Achieve 4.5 / 5 rating on G2 Enterprise category
```

## Prerequisites

- Company/product background information
- Historical marketing data (traffic, leads, revenue)
- Budget range and team capacity
- Target market definition

## Best Practices

**1. Situation before strategy**
You can't plan where to go without knowing where you are. SWOT and data analysis first.

**2. Fewer objectives, deeper execution**
3 OKRs executed well beats 10 OKRs done poorly.

**3. Review monthly, plan quarterly**
Situations change. Monthly metric review allows course correction without abandoning annual direction.

## Common Use Cases

### Use Case 1: Annual Marketing Plan
**Scenario**: SaaS company planning marketing for next fiscal year.

**Workflow**:
1. Situation analysis: Pull GA4, CRM, ad data from last 12 months
2. SWOT with leadership team input
3. Apply STP: Define 2-3 primary segments
4. Set annual OKRs (3 objectives, 4 KRs each)
5. Build RACE budget allocation
6. Create quarterly roadmap with milestones
7. Define weekly/monthly review cadence

### Use Case 2: Campaign Planning
**Scenario**: Q3 campaign for product launch.

**Workflow**:
1. Define campaign objective (Awareness / Consideration / Conversion)
2. Select primary channel mix based on segment research
3. Map content to RACE stages
4. Set campaign-specific OKRs with baseline and target
5. Build execution calendar (8-week campaign)

## Troubleshooting

**Issue**: Plan approved but never executed
**Solution**: Add "Actions" section with specific owners and weekly check-in. Plan without ownership is decoration.

**Issue**: OKRs not connected to business outcomes
**Solution**: Trace each KR to a revenue or retention metric. If you can't, reconsider the KR.

## Related Skills

- [Marketing Ideas](/docs/marketing/skills/marketing-ideas) - Tactic library for the Tactics phase
- [Analytics](/docs/marketing/skills/analytics) - Situation analysis data
- [Competitor](/docs/marketing/skills/competitor) - Competitive landscape analysis
- [Campaign](/docs/marketing/skills/campaign) - Execute individual campaigns

## Related Commands

- `/ckm:plan` - Create implementation plan
- `/ckm:analyze` - Analyze performance data for situation
