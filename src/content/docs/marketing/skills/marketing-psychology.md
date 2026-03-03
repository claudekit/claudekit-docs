---
title: "ckm:marketing-psychology"
description: "70+ mental models and behavioral science principles for marketing — persuasion, decision-making, and behavioral triggers for SaaS."
section: marketing
category: skills
order: 88
---

# Marketing Psychology

> Apply behavioral science and mental models to every marketing decision — from pricing to copy to onboarding flows.

## What This Skill Does

**The Challenge**: Marketing intuition leads to inconsistent results. Copy that "feels persuasive" may miss the cognitive mechanisms that actually drive decisions. Without behavioral science grounding, teams apply psychological triggers randomly.

**The Solution**: Marketing Psychology skill provides a structured library of 70+ mental models and behavioral science principles with direct applications to SaaS and software marketing. Maps each principle to specific use cases: pricing pages, CTAs, onboarding, social proof, and urgency.

## Activation

**Implicit**: Activates when user requests persuasion techniques, copy optimization, behavioral triggers, or pricing psychology.

**Explicit**: Activate via prompt:
```
Activate marketing-psychology skill to apply [principle/topic] to [marketing element]
```

## Capabilities

### 1. Core Principle Library
70+ principles organized by decision-making mechanism.

**Principle categories**:
| Category | Count | Key Principles |
|----------|-------|----------------|
| Social Proof | 8 | Wisdom of crowds, authority bias, social validation |
| Scarcity & Urgency | 7 | Loss aversion, FOMO, scarcity heuristic |
| Anchoring & Pricing | 9 | Price anchoring, decoy effect, charm pricing |
| Trust & Credibility | 10 | Halo effect, mere exposure, authority |
| Commitment | 8 | Foot-in-the-door, consistency, sunk cost |
| Cognitive Ease | 12 | Processing fluency, chunking, recognition |
| Framing | 8 | Loss framing, gain framing, reference points |
| Reciprocity | 6 | Gift, concession, value-first |

**Full library**: `references/marketing-psychology-70.md`

### 2. Pricing Psychology Patterns
Apply behavioral economics to pricing pages.

**Key pricing principles**:

**Price anchoring**: Show highest tier first. Subsequent prices feel more reasonable.
```
Enterprise $299/mo → Pro $99/mo → Starter $29/mo
(Left to right = perceived value descent)
```

**Decoy effect**: Add a third option that makes your preferred option look best.
```
Basic $19 → Pro $49 → Elite $45 (Pro "wins" — better value than both)
```

**Charm pricing**: $99 feels meaningfully cheaper than $100. Use $X9 pricing for consumer tiers.

### 3. Copy Principles
Apply psychology to headlines, CTAs, and product descriptions.

**Loss aversion** (2x more powerful than equivalent gain):
- Instead of: "Save time with automation"
- Use: "Stop losing 3 hours/week to manual work"

**Social proof hierarchy** (most to least effective):
1. Expert testimonial with credentials
2. Customer logo + revenue stat
3. User count ("12,000+ marketers")
4. Star rating with review count
5. Press mentions

**Specificity principle**: Precise numbers are 38% more credible than round numbers.

### 4. Onboarding Psychology
Behavioral patterns for activation and retention.

**Key mechanisms**:
- **Progress effect**: Show completion % to trigger desire to complete
- **Endowment effect**: Let users customize before activation — they value it more
- **Variable reward**: Surprise "wins" during onboarding increase engagement
- **Social baseline**: "Most users complete setup in under 10 minutes" sets expectation

## Prerequisites

- Clear understanding of target ICP (to apply relevant principles)
- Marketing asset to optimize (copy, pricing page, onboarding)

## Best Practices

**1. Apply one principle at a time**
Multiple principles create noise. Pick the one most relevant to the decision moment.

**2. Verify with data**
Behavioral principles are tendencies, not laws. A/B test before assuming universal application.

**3. Ethics boundary**
Use principles to help users make decisions that are genuinely good for them. Dark patterns erode trust and LTV.

## Common Use Cases

### Use Case 1: Pricing Page Optimization
**Scenario**: 3-tier pricing page has most users choosing the cheapest plan.

**Principles to apply**:
1. Anchor with highest tier first (move Enterprise left)
2. Add decoy plan to make Pro look best value
3. Highlight "Most Popular" badge on Pro tier
4. Use "per user/month" instead of "per month" to reduce perceived cost
5. Add loss-framed copy: "What you miss without Pro..."

### Use Case 2: Trial Conversion Email
**Scenario**: Day-7 email to trial users who haven't set up a key feature.

**Principles to apply**:
1. Loss aversion: "Your trial has 7 days left" (not "7 days to try")
2. Progress effect: "You've completed 60% of setup"
3. Social proof: "Teams who complete setup convert at 4x rate"
4. Commitment: Reference actions they've already taken in the product

## Troubleshooting

**Issue**: Applied urgency but it feels manipulative
**Solution**: Urgency works when it's real (actual deadline, actual limit). Fake scarcity destroys trust. Use only real constraints.

**Issue**: Social proof not increasing conversions
**Solution**: Match social proof type to buyer stage. Early-stage: use case relevance. Late-stage: ROI proof and authority.

## Related Skills

- [Copywriting](/docs/marketing/skills/copywriting) - Apply psychology in copy formulas
- [Form CRO](/docs/marketing/skills/form-cro) - Form conversion psychology
- [A/B Test Setup](/docs/marketing/skills/ab-test-setup) - Test psychological interventions
- [Marketing Ideas](/docs/marketing/skills/marketing-ideas) - Psychology-informed campaign ideas

## Related Commands

- `/content/cro` - CRO-optimized copy using psychology
- `/ckm:analyze` - Analyze conversion data
