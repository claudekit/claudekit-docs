---
title: "Ads Management"
description: "Paid advertising campaign creation and optimization for Google Ads, Meta Ads, LinkedIn Ads, and TikTok Ads with ROAS tracking."
section: marketing
category: skills
order: 10
---

> Launch and optimize paid campaigns across major platforms with data-driven targeting, copy testing, and ROI tracking.

## What This Skill Does

**The Challenge**: Paid advertising requires platform-specific knowledge, continuous optimization, and tight budget control. Poor setup wastes ad spend quickly.

**The Solution**: Ads Management skill provides platform-specific ad templates, audience targeting frameworks, budget optimization strategies, and ROAS tracking. Covers Google Ads, Meta (Facebook/Instagram), LinkedIn Ads, and TikTok Ads.

## Activation

**Implicit**: Auto-activated by Ads Specialist and Campaign Manager agents based on task context.

**Explicit**: Activate via prompt:
```
Activate ads-management skill to create Google Ads campaign with audience targeting
```

## Capabilities

### 1. Platform-Specific Ad Creation
Ad copy templates optimized for each platform's format and audience.

**Platform specifications**:
| Platform | Ad Types | Min Budget | Character Limits |
|----------|----------|------------|------------------|
| Google Ads | Search, Display, Video | $10/day | Headlines: 30 chars, Descriptions: 90 chars |
| Meta Ads | Feed, Stories, Reels | $5/day | Text: 125 chars (primary), Headline: 27 chars |
| LinkedIn Ads | Sponsored, Message | $10/day | Text: 600 chars, Headline: 70 chars |
| TikTok Ads | In-Feed, TopView | $20/day | Text: 100 chars, Video: 5-60 seconds |

**Template library**: `references/ad-copy-templates.md`

### 2. Audience Targeting Strategies
Framework for building high-intent audience segments.

**Targeting layers**:
- **Demographics**: Age, location, income, job title
- **Interests**: Topics, pages followed, content engaged with
- **Behaviors**: Purchase history, device usage, travel patterns
- **Lookalike/Similar**: Based on existing customers or converters

**Best practice**: Start narrow (500k-1M reach), expand winners.

**Guide loaded**: `references/audience-targeting.md`

### 3. Optimization Playbook
Daily/weekly optimization checklist for scaling winners and cutting losers.

**Key metrics**:
- **CTR (Click-Through Rate)**: Benchmark 1-3% for search, 0.5-1.5% for display
- **CVR (Conversion Rate)**: Benchmark 2-5% for B2B, 1-3% for B2C
- **CPC (Cost Per Click)**: Varies by industry ($1-10 typical)
- **ROAS (Return on Ad Spend)**: Target 3:1 minimum

**Optimization workflow**: `references/optimization-playbook.md`

## Prerequisites

- Ad accounts for target platforms
- Conversion tracking pixels installed
- Landing pages or conversion destinations ready
- Budget allocated per platform

## Configuration

**Tracking setup**:
- Google Ads: Conversion actions configured
- Meta Ads: Meta Pixel installed on website
- LinkedIn Ads: Insight Tag on all pages
- TikTok Ads: TikTok Pixel active

## Best Practices

**1. Start small, scale winners**
Launch with $50/day, identify top performers in 3-5 days, then increase budget.

**2. Test one variable at a time**
Don't change audience, creative, and copy simultaneously. Isolate what works.

**3. Audience > Creative > Copy**
Right audience with mediocre creative beats wrong audience with great creative.

## Common Use Cases

### Use Case 1: Google Search Campaign for SaaS
**Scenario**: Drive demo signups for project management tool.

**Workflow**:
1. Keyword research (use seo-optimization skill)
2. Create ad groups by intent (comparison, how-to, branded)
3. Write ad variations (3 headlines, 2 descriptions each)
4. Set bid strategy (Target CPA of $40)
5. Launch with $100/day budget
6. Review daily for first week, pause underperformers

**Success metrics**: CTR >3%, CVR >5%, CPA <$50.

### Use Case 2: Meta Retargeting Campaign
**Scenario**: Convert website visitors who didn't sign up.

**Workflow**:
1. Create custom audience (visited pricing page, no signup)
2. Design ad creative (testimonial + limited-time offer)
3. Set frequency cap (max 3 impressions per person per week)
4. Budget $30/day
5. Run for 14 days
6. Measure ROAS (target 5:1 for warm audience)

**Output**: 3-5% conversion rate on retargeting typical.

## Troubleshooting

**Issue**: High spend, low conversions
**Solution**:
- Check landing page relevance (does it match ad promise?)
- Review audience quality (are you targeting decision-makers?)
- Verify conversion tracking (pixel firing correctly?)

**Issue**: Ads rejected or flagged
**Solution**: Review platform policies. Common issues: prohibited content, misleading claims, trademark violations.

**Issue**: CPC suddenly increases
**Solution**: Check auction competition (new competitors?), ad relevance score, and quality score. Refresh creative if ad fatigue detected.

## Related Skills

- [Copywriting](/docs/marketing/skills/copywriting) - Ad copy formulas
- [Campaign Management](/docs/marketing/skills/campaign-management) - Multi-channel orchestration
- [Analytics](/docs/marketing/skills/analytics) - ROAS and performance tracking
- [Creativity](/docs/marketing/skills/creativity) - Creative direction for ad visuals

## Related Commands

- `/campaign/create` - Full campaign planning
- `/content/cro` - Conversion-optimized ad copy
- `/analytics/keywords` - Search campaign keyword research
