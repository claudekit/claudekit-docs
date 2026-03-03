---
title: "ckm:onboarding-cro"
description: "Optimize post-signup onboarding flows and user activation to improve time-to-value, feature adoption, and trial-to-paid conversion."
section: marketing
kit: marketing
category: skills
order: 93
---

# Onboarding CRO

> Turn signups into activated users by mapping friction points, optimizing key flows, and personalizing the path to value.

## What This Skill Does

**The Challenge**: Most SaaS products lose 40-60% of trial users before they reach activation. Generic onboarding ignores user segments, creates friction at key moments, and fails to communicate value before the trial ends.

**The Solution**: Onboarding CRO skill maps user journeys, identifies activation bottlenecks, designs A/B test frameworks, and produces optimized onboarding sequences tailored to user segments and product use cases.

## Activation

**Implicit**: Activates automatically for Growth Specialist, CRO Analyst, and Product Marketing agents.

**Explicit**: Activate via prompt:
```
Activate onboarding-cro skill to improve our trial-to-paid conversion rate
```

## Capabilities

### 1. Activation Funnel Mapping
Visualize the complete post-signup journey with drop-off rates.

**Funnel stages to map**:
1. Signup → Email verification
2. Email verified → First login
3. First login → Key action completed
4. Key action → "Aha moment" achieved
5. Aha moment → Core feature activated
6. Core feature activated → Upgrade/conversion

### 2. Friction Point Identification
Diagnose where users abandon and why.

**Friction sources**:
| Source | Signals | Fix |
|--------|---------|-----|
| Cognitive overload | Long setup forms, too many choices | Progressive disclosure |
| Value gap | Users don't see ROI quickly | Faster time-to-value paths |
| Feature confusion | Low feature discovery | Contextual tooltips, empty states |
| Motivation drop | No urgency, weak CTAs | Milestone celebration, progress indicators |

### 3. Onboarding Sequence Design
Design multi-channel activation sequences.

**Channel mix**:
- **In-app**: Tooltips, checklists, progress bars, empty states
- **Email**: Welcome series, activation nudges, feature highlights
- **Push/SMS**: Re-engagement for dormant users

## Prerequisites

- Product analytics tool (Mixpanel, Amplitude, or GA4 with events)
- Signup funnel data with drop-off rates per step
- User segmentation data (role, use case, company size)

## Configuration

No additional setup required. Works with existing analytics data and user research inputs.

**Recommended integrations**:
- `MIXPANEL_API_KEY` or Amplitude for funnel data
- Email platform (Resend, SendGrid, Customer.io) for sequence delivery

## Best Practices

**1. Define activation before optimizing**
Agree on one specific "activated" action (e.g., "created first project") before testing anything.

**2. Reduce time-to-value, not steps**
Some users need guided steps. Optimize for speed to value, not shortest path.

**3. Personalize by job-to-be-done**
"I want to save time" vs "I want to track team progress" need different onboarding paths.

## Common Use Cases

### Use Case 1: Welcome Email Series Optimization
**Scenario**: Trial users aren't returning after signup email.

**Workflow**:
1. Audit current email sequence timing and copy
2. Analyze open rate, click rate, and login rate per email
3. Identify emails with high open but low click (copy issue)
4. Rewrite using PAS or BAB formula
5. A/B test subject lines and CTAs

**Output**: Optimized 5-email welcome sequence with expected lift projections.

### Use Case 2: In-App Checklist Design
**Scenario**: Users complete signup but don't reach key activation milestone.

**Workflow**:
1. Define 3-5 "activation milestones" correlated with retention
2. Design checklist UI with progress indicator
3. Map each milestone to a tooltip or contextual help
4. Add celebration micro-interaction at completion
5. Trigger upgrade prompt after activation complete

**Output**: Activation checklist specification for product team.

## Troubleshooting

**Issue**: A/B test not reaching significance
**Solution**: Calculate required sample size before running test. Use power analysis with expected lift.

**Issue**: Activation rate improves but retention doesn't
**Solution**: Activation milestone may not predict retention. Revisit definition using cohort analysis.

## Related Skills

- [Funnel](/docs/marketing/skills/funnel) - Full funnel conversion optimization
- [Email Marketing](/docs/marketing/skills/email-marketing) - Email sequence design
- [Analytics](/docs/marketing/skills/analytics) - Funnel measurement and reporting

## Related Commands

- `/ckm:funnel` - Map and optimize conversion funnels
- `/ckm:analyze` - Analyze funnel performance data
- `/content/email` - Write activation email sequences
