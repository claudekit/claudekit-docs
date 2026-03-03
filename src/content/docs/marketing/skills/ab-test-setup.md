---
title: "ckm:ab-test-setup"
description: "A/B test planning, design, and implementation for marketing experiments to improve conversion rates and validate hypotheses."
section: marketing
category: skills
order: 60
---

# `ckm:ab-test-setup`

> Design rigorous A/B tests, calculate sample sizes, and validate results with statistical confidence.

## What This Skill Does

**The Challenge**: Most A/B tests fail due to underpowered samples, premature stopping, or poorly defined hypotheses. Teams waste months on inconclusive tests that produce no actionable insight.

**The Solution**: A/B Test Setup skill provides structured experiment design with hypothesis frameworks, statistical power calculators, segmentation strategies, and result interpretation guidelines. Covers landing pages, emails, ads, and in-product experiments.

## Activation

**Implicit**: Activates when user mentions "A/B test", "split test", "experiment", or "test variant".

**Explicit**: Activate via prompt:
```
Activate ab-test-setup skill to design an experiment for [describe goal]
```

## Capabilities

### 1. Hypothesis Framework
Structure testable hypotheses with clear success metrics.

**Hypothesis template**:
```
We believe [changing X] for [user segment]
will result in [metric change] because [reason].
We'll know this is true when [measurable outcome].
```

### 2. Sample Size Calculator
Determine minimum detectable effect and required traffic.

**Key inputs**:
| Parameter | Typical Value | Notes |
|-----------|--------------|-------|
| Baseline CVR | Current rate | From analytics |
| MDE | 5-20% relative | Minimum meaningful lift |
| Statistical power | 80% | Probability of detecting true effect |
| Significance level | 95% (p<0.05) | False positive tolerance |

### 3. Test Design Patterns
Pre-built frameworks for common marketing experiments.

**Experiment types**:
- **Landing page**: Hero copy, CTA color, form length, social proof placement
- **Email**: Subject line, send time, CTA text, personalization
- **Ad creative**: Headline, image, audience segment, bid strategy
- **Pricing page**: Price anchoring, plan names, feature ordering

### 4. Results Interpretation
Analyze outcomes with statistical rigor.

**Checklist before calling a winner**:
- Reached minimum sample size
- Run for at least 2 full business cycles
- No external events skewing data
- Segment analysis completed (no Simpson's paradox)

## Prerequisites

- Access to analytics platform (GA4, Mixpanel, Amplitude)
- A/B testing tool (Optimizely, VWO, LaunchDarkly, or custom)
- Defined baseline conversion rate
- Estimated weekly traffic volume

## Best Practices

**1. One variable at a time**
Multivariate tests require 4x the traffic. Start simple.

**2. Never stop early**
Peeking at results inflates false positives. Commit to sample size upfront.

**3. Document everything**
Record hypothesis, dates, traffic split, and results. Build institutional memory.

## Common Use Cases

### Use Case 1: Landing Page CTA Test
**Scenario**: Test "Start Free Trial" vs "Get Started Free" on homepage.

**Workflow**:
1. Define baseline CVR (e.g., 3.2%)
2. Set MDE to 15% relative lift → target 3.68%
3. Calculate sample: ~4,800 visitors per variant
4. Run for 3 weeks minimum
5. Analyze with segmentation (device, source, new vs returning)

### Use Case 2: Email Subject Line Test
**Scenario**: Personalized vs generic subject line for onboarding sequence.

**Workflow**:
1. Split list 50/50 by cohort (not random per send)
2. Track 48-hour open rate and 7-day conversion
3. Run on 3 consecutive sends before declaring winner

## Troubleshooting

**Issue**: Test shows significant result but no business impact
**Solution**: Check if metric tested (clicks) correlates with revenue. Move measurement downstream.

**Issue**: Results flip week over week
**Solution**: Extend test duration. Segment by day-of-week to detect cyclical behavior.

## Related Skills

- [Analytics](/docs/marketing/skills/analytics) - Baseline metrics and tracking
- [Form CRO](/docs/marketing/skills/form-cro) - Conversion rate optimization
- [Marketing Psychology](/docs/marketing/skills/marketing-psychology) - Behavioral science for hypotheses
- [Copywriting](/docs/marketing/skills/copywriting) - Copy variants for tests

## Related Commands

- `/ckm:analyze` - Analyze test results
- `/ckm:plan` - Plan experiment roadmap
