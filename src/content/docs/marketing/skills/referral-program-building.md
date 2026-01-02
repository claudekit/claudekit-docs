---
title: "Referral Program Building"
description: "Build viral referral programs for SaaS with dual rewards, platform integrations, fraud prevention, and attribution tracking."
section: marketing
category: skills
order: 13
---

> Build referral programs that drive 2-3x higher conversion rates with 37% better retention using proven viral mechanics.

## What This Skill Does

**Challenge**: Customer referrals are the highest quality leads, but most programs fail due to poor reward structures, complex mechanics, or lack of integration into user workflows.

**Solution**: Referral Program Building skill provides reward structure templates, platform comparisons (Rewardful, ReferralCandy, Viral Loops), technical implementation models, fraud prevention rules, and case studies (Dropbox 3900% growth, PayPal 100M users).

## Activation

**Implicit**: Activated when agents discuss customer referrals, viral loops, or word-of-mouth marketing.

**Explicit**: Activate via prompt:
```
Activate referral-program-building skill to [describe task]
```

## Capabilities

### 1. Reward Structure Design
Choose incentive model based on product type and customer economics.

**Reward structures**:
- **Two-sided**: Both referrer and referee receive rewards (68% higher participation)
- **Product-aligned**: Use product as reward (Dropbox storage model)
- **Tiered**: Escalating rewards for multiple referrals
- **Multi-step**: Rewards unlock at signup, activation, purchase

**Structure guide**: `references/reward-structures.md`

### 2. Platform Selection
Compare referral platforms by integrations, pricing, and feature sets.

**Platform quick reference**:
| Platform | Best for | Price | Setup time |
|----------|----------|-------|------------|
| **Rewardful** | SaaS subscriptions | $49/mo | 1 hour |
| **ReferralCandy** | E-commerce | $49/mo | 1-click |
| **Viral Loops** | Custom campaigns | Custom | Visual builder |
| **FirstPromoter** | Recurring commissions | Custom | Dashboard |

**Selection guide**: `references/platform-selection.md`

### 3. Technical Implementation Models
Database schemas, API patterns, and attribution logic.

**Core components**:
- Unique referral links per user
- Cookie-based attribution (30-90 day window)
- Automated reward fulfillment
- Fraud detection rules

**Implementation guide**: `references/technical-implementation.md`

## Prerequisites

- Product with proven conversion funnel
- Customer LTV data (to calculate sustainable rewards)
- Technical resources for integration

## Configuration

**Referral program checklist**:
- [ ] Reward values defined (both referrer and referee)
- [ ] Attribution window set (30-90 days typical)
- [ ] Fraud prevention rules established
- [ ] Onboarding placement chosen (post-signup, in-app, email)
- [ ] Tracking and analytics configured

## Best Practices

**1. Two-sided rewards work best**
Dropbox model: referrer gets 500MB storage, referee gets 500MB. Both benefit equally.

**2. Integrate into user workflow**
Don't hide referrals in settings. Place where users experience value (after feature use, success moments).

**3. Simplicity is key**
Explain program in 2-3 lines. Complex rules kill participation.

## Common Use Cases

### Use Case 1: Launch SaaS Referral Program
**Scenario**: Launch refer-a-friend program for project management SaaS.

**Workflow**:
1. Define rewards: Referrer gets $50 credit, referee gets 1 month free
2. Choose platform: Rewardful (Stripe integration)
3. Set attribution: 60-day cookie window
4. Place referral CTA: Project completion page (success moment)
5. Email campaign: Announce to existing customers
6. Track KPIs: Participation rate (target 5-9%), referral rate (target 5-10%)

**Success metrics**: 30-50% lower CAC vs paid channels, 16-25% higher LTV for referred customers.

### Use Case 2: Optimize Viral Loop
**Scenario**: Existing program has 2% participation, want to increase to 8%.

**Workflow**:
1. Audit existing program:
   - Reward value (attractive enough?)
   - Placement (hidden in settings?)
   - Friction (too many steps?)
2. Improvements:
   - Increase reward value (try 2x current)
   - Move to high-traffic page (dashboard)
   - Pre-populate share message (reduce friction)
   - Add social proof ("5,000 users referred friends")
3. A/B test changes, measure lift

**Result**: 3-4x participation increase typical with optimization.

## Troubleshooting

**Issue**: Low participation rate (<3%)
**Solution**: Increase reward value, simplify mechanics, improve placement (move to high-traffic area).

**Issue**: High fraud (fake signups for rewards)
**Solution**: Implement reward hold (don't pay until referee activates/purchases), require email verification, manually review bulk signups.

**Issue**: Users refer but referees don't convert
**Solution**: Optimize referee onboarding (first-time user experience). Referred users should see value quickly.

## Related Skills

- [Affiliate Marketing](/docs/marketing/skills/affiliate-marketing) - Partner-driven referrals
- [Gamification Marketing](/docs/marketing/skills/gamification-marketing) - Referral leaderboards and challenges
- [Email Marketing](/docs/marketing/skills/email-marketing) - Referral campaign emails

## Related Commands

- `/campaign/create` - Launch referral campaign
- `/plan` - Implementation planning
- `/analyze:report` - Analyze referral performance
