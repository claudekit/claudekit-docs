---
title: "Referral Program Building"
description: "Build viral referral programs for SaaS with two-sided rewards, platform integration, fraud prevention, and attribution tracking."
section: marketing
category: skills
order: 13
---

> Build referral programs that drive 2-3x higher conversion rates with 37% better retention using proven viral mechanics.

## What This Skill Does

**The Challenge**: Customer referrals are highest-quality leads, but most programs fail due to poor reward structure, complex mechanics, or lack of integration into user workflow.

**The Solution**: Referral Program Building skill provides reward structure templates, platform comparison (Rewardful, ReferralCandy, Viral Loops), technical implementation patterns, fraud prevention rules, and case studies (Dropbox 3900% growth, PayPal 100M users).

## Activation

**Implicit**: Activates when agents discuss customer referrals, viral loops, or word-of-mouth marketing.

**Explicit**: `/skill:add referral-program-building`

## Capabilities

### 1. Reward Structure Design
Choose incentive model based on product type and customer economics.

**Reward structures**:
- **Two-sided**: Both referrer and referee get rewards (68% higher participation)
- **Product-aligned**: Use product as reward (Dropbox storage model)
- **Tiered**: Escalating rewards for multiple referrals
- **Multi-step**: Rewards unlock at signup, activation, purchase

**Structure guide**: `references/reward-structures.md`

### 2. Platform Selection
Compare referral platforms by integration, pricing, and feature set.

**Platform quick reference**:
| Platform | Best For | Price | Setup Time |
|----------|----------|-------|------------|
| **Rewardful** | SaaS subscriptions | $49/mo | 1 hour |
| **ReferralCandy** | Ecommerce | $49/mo | 1-click |
| **Viral Loops** | Custom campaigns | Custom | Visual builder |
| **FirstPromoter** | Recurring commissions | Custom | Dashboard |

**Selection guide**: `references/platform-selection.md`

### 3. Technical Implementation Patterns
Database schemas, API patterns, and attribution logic.

**Core components**:
- Unique referral links per user
- Cookie-based attribution (30-90 day window)
- Reward fulfillment automation
- Fraud detection rules

**Implementation guide**: `references/technical-implementation.md`

## Prerequisites

- Product with proven conversion funnel
- Customer LTV data (to calculate sustainable rewards)
- Technical resources for integration

## Configuration

**Referral program checklist**:
- [ ] Reward value defined (both referrer and referee)
- [ ] Attribution window set (30-90 days typical)
- [ ] Fraud prevention rules established
- [ ] Onboarding placement chosen (post-signup, in-app, email)
- [ ] Tracking and analytics configured

## Best Practices

**1. Two-sided rewards work best**
Dropbox model: referrer gets 500MB storage, referee gets 500MB. Both benefit equally.

**2. Integrate into user workflow**
Don't hide referral in settings. Place where users experience value (post-feature-use, success moments).

**3. Simplicity is key**
Explain program in 2-3 bullet points. Complex rules kill participation.

## Common Use Cases

### Use Case 1: SaaS Referral Program Launch
**Scenario**: Launch refer-a-friend program for project management SaaS.

**Workflow**:
1. Define rewards: Referrer gets $50 credit, referee gets 1 month free
2. Select platform: Rewardful (Stripe integration)
3. Set attribution: 60-day cookie window
4. Place referral CTA: Post-project-completion page (moment of success)
5. Email campaign: Announce to existing customers
6. Track KPIs: Participation rate (target 5-9%), referral rate (target 5-10%)

**Success metrics**: 30-50% lower CAC vs paid channels, 16-25% higher LTV for referred customers.

### Use Case 2: Viral Loop Optimization
**Scenario**: Existing program has 2% participation, want to increase to 8%.

**Workflow**:
1. Audit current program:
   - Reward value (is it compelling?)
   - Placement (hidden in settings?)
   - Friction (too many steps?)
2. Improvements:
   - Increase reward value (test 2x current)
   - Move to high-traffic page (dashboard)
   - Pre-fill share messages (reduce friction)
   - Add social proof ("5,000 users referred friends")
3. A/B test changes, measure lift

**Output**: 3-4x participation increase typical with optimization.

## Troubleshooting

**Issue**: Low participation rate (<3%)
**Solution**: Increase reward value, simplify mechanics, improve placement (move to high-traffic area).

**Issue**: High fraud (fake signups for rewards)
**Solution**: Implement reward holds (don't pay until referee activates/purchases), require email verification, manual review of bulk signups.

**Issue**: Users refer but referees don't convert
**Solution**: Optimize referee onboarding (first-time-user experience). Referred users should see value quickly.

## Related Skills

- [Affiliate Marketing](/docs/marketing/skills/affiliate-marketing) - Partner-driven referrals
- [Gamification Marketing](/docs/marketing/skills/gamification-marketing) - Referral leaderboards and challenges
- [Email Marketing](/docs/marketing/skills/email-marketing) - Referral campaign emails

## Related Commands

- `/campaign/create` - Referral launch campaign
- `/plan` - Implementation planning
- `/analyze:report` - Referral performance analysis
