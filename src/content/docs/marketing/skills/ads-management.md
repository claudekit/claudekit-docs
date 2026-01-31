---
title: "Ads Management"
description: "Create and optimize paid advertising campaigns on Google Ads, Meta Ads, LinkedIn Ads, and TikTok Ads with ROAS tracking."
section: marketing
category: skills
order: 10
---

> Launch and optimize paid campaigns across major platforms with data-driven targeting, copy testing, and ROI tracking.

## What This Skill Does

**Challenge**: Paid advertising requires platform-specific knowledge, continuous optimization, and tight budget control. Poor configuration wastes ad spend quickly.

**Solution**: The Ads Management skill provides platform-specific ad templates, audience targeting frameworks, budget optimization strategies, and ROAS tracking. Covers Google Ads, Meta (Facebook/Instagram), LinkedIn Ads, and TikTok Ads.

## Activation

**Implicit**: Activates automatically for Ads Specialist and Campaign Manager agents.

**Explicit**: Activate by name when needed: "Activate ads-management skill"

## Capabilities

### 1. Platform-Specific Ad Creation
Ad copy templates optimized for each platform's format and audience.

**Platform specifications**:
| Platform | Ad Types | Minimum Budget | Character Limits |
|----------|----------|------------|------------------|
| Google Ads | Search, Display, Video | $10/day | Headline: 30 chars, Description: 90 chars |
| Meta Ads | Feed, Stories, Reels | $5/day | Text: 125 chars (primary), Headline: 27 chars |
| LinkedIn Ads | Sponsored, Message | $10/day | Text: 600 chars, Headline: 70 chars |
| TikTok Ads | In-Feed, TopView | $20/day | Text: 100 chars, Video: 5-60 seconds |

**Template library**: `references/ad-copy-templates.md`

### 2. Audience Targeting Strategy
Framework for building high-intent audience segments.

**Targeting Layers**:
- **Demographics**: Age, location, income, job titles
- **Interests**: Topics, pages followed, content engaged
- **Behaviors**: Purchase history, device usage, travel patterns
- **Lookalike/Similar**: Based on existing customers or converters

**Best Practice**: Start narrow (500k-1M reach), scale winners.

**Download guide**: `references/audience-targeting.md`

### 3. Optimization Playbook
Daily/weekly optimization checklists to scale winners and cut losers.

**Key Metrics**:
- **CTR (Click-Through Rate)**: Benchmark 1-3% for search, 0.5-1.5% for display
- **CVR (Conversion Rate)**: Benchmark 2-5% for B2B, 1-3% for B2C
- **CPC (Cost Per Click)**: Varies by industry ($1-10 typical)
- **ROAS (Return On Ad Spend)**: Minimum target 3:1

**Optimization workflow**: `references/optimization-playbook.md`

## Prerequisites

- Ad accounts for target platforms
- Conversion tracking pixels installed
- Landing pages or conversion destinations ready
- Budget allocated per platform

## Configuration

**Tracking Setup**:
- Google Ads: Conversion actions configured
- Meta Ads: Meta Pixel installed on website
- LinkedIn Ads: Insight Tag on all pages
- TikTok Ads: TikTok Pixel active

## Best Practices

**1. Start Small, Scale Winners**
Launch with $50/day, identify top performers in 3-5 days, then increase budget.

**2. Test One Variable At A Time**
Don't change audience, creative, and copy simultaneously. Isolate what works.

**3. Audience > Creative > Copy**
Right audience with average creative still beats wrong audience with great creative.

## Common Use Cases

### Use Case 1: Google Search Campaign for SaaS
**Scenario**: Drive demo signups for project management tool.

**Workflow**:
1. Keyword research (use seo-optimization skill)
2. Create intent-based ad groups (comparison, how-to, branded)
3. Write ad variations (3 headlines, 2 descriptions each)
4. Set bidding strategy (target CPA $40)
5. Launch with $100/day budget
6. Review daily for first week, pause underperformers

**Success Metrics**: CTR >3%, CVR >5%, CPA <$50.

### Use Case 2: Meta Retargeting Campaign
**Scenario**: Convert website visitors who didn't sign up.

**Workflow**:
1. Create custom audience (visited pricing page, didn't sign up)
2. Design ad creative (testimonials + limited-time offer)
3. Set frequency cap (max 3 impressions per person per week)
4. Budget $30/day
5. Run for 14 days
6. Measure ROAS (target 5:1 for warm audience)

**Outcome**: 3-5% conversion rate on retargeting typical.

## Troubleshooting

**Issue**: High spend, low conversions
**Solution**:
- Check landing page relevance (does it match ad promise?)
- Review audience quality (are you targeting decision-makers?)
- Verify conversion tracking (is pixel firing correctly?)

**Issue**: Ads rejected or flagged
**Solution**: Review platform policies. Common issues: prohibited content, misleading claims, trademark violations.

**Issue**: CPC suddenly increases
**Solution**: Check auction competition (new competitors?), ad relevance score, and quality score. Refresh creative if ad fatigue detected.

## Related Skills

- [Copywriting](/docs/marketing/skills/copywriting) - Ad copy formulas
- [Campaign Management](/docs/marketing/skills/campaign-management) - Multi-channel coordination
- [Analytics](/docs/marketing/skills/analytics) - ROAS and performance tracking
- [Creativity](/docs/marketing/skills/creativity) - Creative direction for ad visuals

## Related Commands

- `/campaign/create` - Full campaign planning
- `/content/cro` - Conversion-optimized ad copy
- `/analytics/keywords` - Search campaign keyword research
