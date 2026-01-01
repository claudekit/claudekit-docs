---
title: "Email Marketing"
description: "Build email campaigns, automation flows, drip sequences, and deliverability optimization for effective email marketing."
section: marketing
category: skills
order: 5
---

> Build high-converting email campaigns with automation workflows, optimized copy, and deliverability best practices.

## What This Skill Does

**The Challenge**: Email remains the highest ROI marketing channel (average 42:1), but creating effective campaigns requires mastering automation flows, copywriting, deliverability, and A/B testing.

**The Solution**: Email Marketing skill provides campaign templates, automation flow designs, subject line formulas, and deliverability checklists. Includes proven frameworks for newsletters, promotional emails, drip sequences, and re-engagement campaigns.

## Activation

**Implicit**: Activates automatically for Email Wizard, Nurture Specialist, and Content Creator agents.

**Explicit**: Activate via prompt:
```
Activate email-marketing skill to [describe task]
```

## Capabilities

### 1. Email Campaign Templates
Pre-built templates for common campaign types with proven structures.

**Available Templates**:
- **Newsletter**: Weekly/monthly updates with content roundups
- **Promotional**: Product launches, sales, limited-time offers
- **Transactional**: Receipts, confirmations, password resets
- **Drip/Nurture**: Multi-step onboarding or education sequences
- **Re-engagement**: Win-back campaigns for inactive subscribers

**Load Templates**: `references/email-templates.md`

### 2. Automation Flow Design
Map customer journeys with trigger events, timing, and decision branches.

**Example Flow**:
```
Trigger: User signs up
├─ Email 1: Welcome + value proposition (immediate)
├─ Email 2: Feature overview (Day 2)
├─ Decision: Account activated?
│  ├─ Yes → Success sequence
│  └─ No → Activation reminder (Day 5)
└─ Email 3: Case study + CTA (Day 7)
```

**Flow Library**: `references/automation-flows.md`

### 3. Subject Line Formulas
Proven patterns for higher open rates across industries.

**Top Performers**:
- **Curiosity Gap**: "The mistake 90% of marketers make"
- **Benefit-Driven**: "Save 5 hours/week with this automation tip"
- **Question Format**: "Are you making these email mistakes?"
- **Urgency**: "Last chance: 40% off ends tonight"

**Average Benchmarks**: 15-25% open rate, 2-5% click rate

**Formula Guide**: `references/subject-line-formulas.md`

## Prerequisites

- Email service provider (ESP) account (SendGrid, Mailchimp, etc.)
- List segmentation strategy
- Brand guidelines for voice and messaging

## Configuration

No configuration needed. Skill provides frameworks and templates adaptable to any ESP.

**Optional**: Configure ESP API for automation (SendGrid, Resend MCP servers available).

## Best Practices

**1. Design Mobile-First**
Over 60% of opens occur on mobile. Test rendering on devices before sending.

**2. One Primary CTA Per Email**
Multiple CTAs dilute focus. Use one clear action per message.

**3. Personalize Beyond Name**
Use behavioral data (last purchase, feature usage) for relevant content.

## Common Use Cases

### Use Case 1: Product Launch Email Sequence
**Scenario**: Launch new feature with 3-email sequence for active users.

**Workflow**:
1. Email 1 (Day 0): Teaser announcement with waitlist
2. Email 2 (Day 3): Feature deep-dive with demo video
3. Email 3 (Day 7): Launch day with exclusive early access

**Success Metrics**: 30% open rate, 8% click-through, 3% activation

### Use Case 2: Re-engagement Campaign
**Scenario**: Win back inactive subscribers from 90+ days.

**Workflow**:
1. Segment users by last engagement date
2. Email 1: "We miss you" with top content/features
3. Wait 5 days, check engagement
4. Email 2: Survey asking why they stopped engaging
5. Email 3: Special offer or unsubscribe option

**Output**: 15-20% reactivation rate, cleaner list with engaged subscribers.

## Troubleshooting

**Issue**: Low open rates (<10%)
**Solution**:
- A/B test 5 subject line variations
- Check sender reputation score
- Verify deliverability (SPF, DKIM, DMARC records)

**Issue**: High unsubscribe rate (>1%)
**Solution**:
- Review segmentation (wrong audience?)
- Check email frequency (too many emails?)
- Audit content relevance

**Issue**: Emails landing in spam
**Solution**:
- Load deliverability checklist: `references/deliverability-checklist.md`
- Verify authentication records (SPF, DKIM, DMARC)
- Avoid spam trigger words ("free", "guaranteed", excessive caps)

## Related Skills

- [Copywriting](/docs/marketing/skills/copywriting) - Email copy formulas and CTAs
- [Content Marketing](/docs/marketing/skills/content-marketing) - Newsletter content planning
- [Analytics](/docs/marketing/skills/analytics) - Email performance tracking
- [Campaign Management](/docs/marketing/skills/campaign-management) - Multi-channel coordination

## Related Commands

- `/email/create` - Create email campaign
- `/email/sequence` - Build drip sequence
- `/email/optimize` - Improve existing emails
- `/content/enhance` - Enhance email copy
