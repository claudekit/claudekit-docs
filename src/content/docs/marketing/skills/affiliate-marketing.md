---
title: "Affiliate Marketing"
description: "Build high-converting SaaS affiliate programs with commission structures, platform selection, KOL partnerships, and fraud prevention."
section: marketing
category: skills
order: 11
---

> Design affiliate programs that drive 20-50% of customer acquisition at 30-50% lower CAC through strategic partner recruitment.

## What This Skill Does

**The Challenge**: Building an affiliate program requires choosing commission models, selecting platforms, recruiting quality partners, and preventing fraud—all while maintaining profitability.

**The Solution**: Affiliate Marketing skill provides program structure templates, platform comparison guides, KOL/KOC partnership strategies, fraud detection patterns, and case studies (Dropbox 3900% growth, PayPal 100M users).

## Activation

**Implicit**: Activates automatically for Growth Specialist and Campaign Manager agents when discussing partner/affiliate strategies.

**Explicit**: Activate via prompt:
```
Activate affiliate-marketing skill to create affiliate program strategy
```

## Capabilities

### 1. Commission Model Selection
Choose structure based on business stage and customer lifetime value.

**Commission models**:
| Model | Best For | Rate | Cookie Window |
|-------|----------|------|---------------|
| **Recurring** | SaaS subscriptions | 20-30% | 90 days |
| **One-time** | High-ticket products | $50-200 | 60 days |
| **Tiered** | Scaling programs | 20→40% | 90 days |
| **Hybrid** | Top affiliates | Base + % | 120 days |

**Structure guide**: `references/program-structure.md`

### 2. Platform Selection Framework
Compare affiliate platforms by features, pricing, and integration complexity.

**Platform comparison**:
| Platform | Best For | Price | Setup Time |
|----------|----------|-------|------------|
| **FirstPromoter** | Early-stage SaaS | $49/mo | 1 hour |
| **Rewardful** | Stripe-first SaaS | $29/mo | 30 min |
| **PartnerStack** | Enterprise scale | $500+/mo | 1 week |
| **Impact.com** | Large affiliates | Custom | 2 weeks |

**Selection guide**: `references/platform-selection.md`

### 3. KOL/KOC Partnership Strategy
Identify, vet, and recruit Key Opinion Leaders and Key Opinion Consumers.

**Recruitment workflow**:
1. Identify influencers in niche (10k-100k followers for micro-influencers)
2. Vet content quality and audience engagement (>3% engagement rate)
3. Personalized outreach (use templates from `references/outreach-templates.md`)
4. Negotiate compensation (affiliate % vs flat fee vs hybrid)
5. Onboard with content kit and tracking links

**Partnership guide**: `references/kol-koc-partnerships.md`

## Prerequisites

- Product/service with proven conversion funnel
- Customer LTV data for commission calculation
- Affiliate agreement template (legal review recommended)

## Configuration

**Program design checklist**:
- [ ] Commission structure defined
- [ ] Cookie window set (60-120 days typical for SaaS)
- [ ] Payout terms established (Net 30/60/90)
- [ ] Fraud prevention rules configured
- [ ] Affiliate onboarding kit ready
- [ ] Tracking and attribution setup verified

## Best Practices

**1. Two-sided rewards work best**
Both referrer AND referee get incentives. Increases participation 68%.

**2. 90-day cookie for B2B SaaS**
B2B sales cycles are longer. Short cookies lose conversions to long consideration periods.

**3. Commission holds prevent fraud**
Hold payments 60-90 days to match refund window. Deters fraudulent signups.

## Common Use Cases

### Use Case 1: Launch SaaS Affiliate Program
**Scenario**: Early-stage SaaS wants partner channel to complement paid ads.

**Workflow**:
1. Calculate max affordable commission (30% of MRR typical)
2. Select platform (FirstPromoter recommended for <$500k ARR)
3. Create affiliate onboarding kit (brand assets, messaging guidelines, demo video)
4. Recruit 10-20 initial affiliates (existing customers, micro-influencers)
5. Launch with 90-day cookie, Net 60 payout
6. Monitor EPC (Earnings Per Click) - target $5-50 for SaaS

**Success metrics**: 5-9% participation rate, 5-10% referral rate.

### Use Case 2: Scale Existing Program
**Scenario**: Program has 50 affiliates, want to increase quality and reduce fraud.

**Workflow**:
1. Analyze affiliate performance (top 20% drive 80% of revenue)
2. Implement tiered commissions (20% base, 30% at 10+ referrals, 40% at 50+)
3. Add vetting process for new affiliates (application review)
4. Implement fraud detection (90-day payment hold, manual review of bulk signups)
5. Create retention program (monthly check-ins, content support for top 10%)

**Output**: Improved EPC, reduced fraud, higher affiliate retention.

## Troubleshooting

**Issue**: Low affiliate participation (<3%)
**Solution**: Increase commission to 25-30% OR improve affiliate resources (better content kit, landing pages).

**Issue**: High fraud rate
**Solution**: Implement 90-day holds, require affiliate vetting, add TOS prohibitions on brand bidding and incent traffic.

**Issue**: Inactive affiliates after onboarding
**Solution**: Monthly check-ins, provide pre-made content, feature top performers to motivate others.

## Related Skills

- [Referral Program Building](/docs/marketing/skills/referral-program-building) - Customer-driven referrals
- [Campaign Management](/docs/marketing/skills/campaign-management) - Launch coordination
- [Analytics](/docs/marketing/skills/analytics) - Performance tracking and attribution

## Related Commands

- `/campaign/create` - Affiliate launch campaign
- `/plan` - Implementation planning
- `/analyze:report` - Performance analysis
