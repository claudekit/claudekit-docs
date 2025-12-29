---
title: /content:cro
description: Documentation for cro
section: engineer
kit: engineer
category: commands/content
order: 50
published: true
---

# /content:cro

Analyze existing content and optimize it for conversion. This command uses conversion rate optimization (CRO) best practices, psychological triggers, and A/B testing strategies to improve your copy's effectiveness.

## Syntax

```bash
/content:cro [content issues or URL]
```

## How It Works

The `/content:cro` command follows a data-driven optimization workflow:

### 1. Content Analysis

- Reads existing content (from file, URL, or description)
- Identifies conversion goals (signup, purchase, download, etc.)
- Analyzes current messaging and CTAs
- Maps user journey and friction points

### 2. Psychological Analysis

- Identifies psychological triggers used (or missing)
- Analyzes emotional resonance
- Evaluates trust signals
- Checks for cognitive biases leveraged

### 3. CRO Audit

Invokes **copywriter** agent to audit:
- Headlines and value propositions
- Call-to-action effectiveness
- Social proof and testimonials
- Urgency and scarcity elements
- Visual hierarchy and flow
- Mobile optimization

### 4. Optimization Recommendations

Provides specific improvements:
- Rewritten headlines (3-5 variations)
- Improved CTAs
- Added psychological triggers
- Enhanced social proof
- Optimized user flow

### 5. A/B Testing Strategy

Creates testing plan:
- Test variations
- Metrics to track
- Sample size requirements
- Expected lift predictions

## Examples

### Landing Page Optimization

```bash
/content:cro [analyze landing page at https://example.com/signup]
```

**What happens:**
```
1. Content Analysis
   Agent: copywriter

   Current State:
   - Headline: "Sign up for our app"
   - CTA: "Get Started"
   - No social proof visible
   - Benefits listed but not compelling
   - No urgency elements

2. Psychological Analysis
   Missing triggers:
   - Loss aversion
   - Social proof
   - Scarcity/urgency
   - Authority signals

   Current triggers:
   ✓ Reciprocity (free trial)
   ✗ Weak value proposition

3. Optimization Recommendations

   HEADLINE VARIANTS:
   A: "Join 50,000+ developers building faster"
   B: "Ship your next feature 10x faster"
   C: "The last development tool you'll need"

   CTA IMPROVEMENTS:
   Before: "Get Started"
   After: "Start Free Trial → No credit card"

   ADD SOCIAL PROOF:
   - "Trusted by 50,000+ developers"
   - Customer logos (GitHub, Shopify, etc.)
   - Testimonials with photos

   ADD URGENCY:
   - "Limited spots in beta"
   - "Join before prices increase Nov 1"

   RESTRUCTURE FLOW:
   1. Attention-grabbing headline
   2. Social proof
   3. Clear benefits (not features)
   4. Visual demo/screenshot
   5. Strong CTA
   6. Risk reversal (money-back guarantee)

4. A/B Testing Plan

   Test 1: Headlines
   - Control: Current headline
   - Variant A: "Join 50,000+ developers"
   - Variant B: "Ship 10x faster"
   - Metric: Signup rate
   - Duration: 2 weeks, 1000+ visitors/variant
   - Expected lift: 15-30%

   Test 2: CTA Button
   - Control: "Get Started"
   - Variant: "Start Free Trial"
   - Metric: Click-through rate
   - Expected lift: 10-20%

✓ CRO Analysis complete
```

### Product Page Copy

```bash
/content:cro [optimize product page copy for ClaudeKit Pro subscription]
```

**What happens:**
```
1. Analysis
   Product: ClaudeKit Pro ($49/month)
   Goal: Increase subscription conversions

   Current issues:
   - Features-focused (not benefit-focused)
   - No pricing anchoring
   - Weak urgency
   - Missing objection handling

2. Optimization Strategy

   PRICING PRESENTATION:
   Before:
   "$49/month"

   After (with anchoring):
   "Just $1.63/day"
   "Save $118/year (annual plan)"
   Compare to: "$199/month for hiring freelancer"

   TRANSFORM FEATURES TO BENEFITS:
   Before: "AI-powered code generation"
   After: "Ship features 10x faster, get home on time"

   Before: "Automated testing"
   After: "Sleep soundly knowing bugs are caught instantly"

   ADD RISK REVERSAL:
   - 30-day money-back guarantee
   - Cancel anytime
   - No questions asked refund

   SOCIAL PROOF:
   - "4.9/5 stars from 2,000+ developers"
   - "Featured on Product Hunt #1"
   - Real testimonials with metrics

3. Psychological Triggers Added

   ✓ Loss Aversion: "Don't waste 20 hours/week on manual tasks"
   ✓ Social Proof: Testimonials + user count
   ✓ Scarcity: "Limited beta pricing ends Dec 1"
   ✓ Authority: "Used by teams at Google, Meta, Amazon"
   ✓ Reciprocity: Free 14-day trial
   ✓ Commitment: "No credit card required"

4. A/B Tests Recommended

   Test 1: Pricing Display
   A: "$49/month"
   B: "$1.63/day - Less than coffee"
   Expected lift: 8-15%

   Test 2: Guarantee Position
   A: Guarantee at bottom
   B: Guarantee next to CTA
   Expected lift: 5-10%

✓ CRO complete (3 minutes)
```

### Email Campaign

```bash
/content:cro [improve conversion on welcome email sequence]
```

**What happens:**
```
1. Email Sequence Analysis

   Current: 3 emails over 7 days
   Goal: Activate trial users

   Issues found:
   - Email 1: Too long, buried CTA
   - Email 2: Features, not benefits
   - Email 3: Weak urgency, no social proof

2. Optimization Recommendations

   EMAIL 1 (Day 0 - Welcome)

   Before:
   Subject: "Welcome to ClaudeKit!"

   After:
   Subject: "Your first AI agent is ready 🚀"
   Alt: "Here's your complete setup guide"

   Body improvements:
   - Cut from 300 words to 100 words
   - Single clear CTA: "Create Your First Agent"
   - Add quick win: "5-minute setup"

   EMAIL 2 (Day 3 - Value)

   Subject: "See how [Company] saved 20 hours/week"

   Changes:
   - Real customer story (with permission)
   - Specific metrics
   - CTA: "Get Similar Results"

   EMAIL 3 (Day 6 - Conversion)

   Subject: "Your trial ends in 24 hours ⏰"

   Add:
   - Urgency (trial ending)
   - Loss aversion (lose access to agents)
   - Special offer (20% off if upgrade now)
   - Social proof (join 50,000+ users)

3. A/B Testing Plan

   Test: Subject Lines (Email 1)
   A: "Welcome to ClaudeKit!"
   B: "Your first AI agent is ready 🚀"
   Metric: Open rate
   Expected lift: 20-35%

   Test: CTA Text (Email 2)
   A: "Learn More"
   B: "Get Similar Results"
   Metric: Click rate
   Expected lift: 15-25%

✓ Email sequence optimized
```

## When to Use

### ✅ Use /content:cro for:

**Landing Pages**
```bash
/content:cro [optimize homepage for signups]
```

**Product Pages**
```bash
/content:cro [improve pricing page conversion]
```

**Email Campaigns**
```bash
/content:cro [optimize onboarding email sequence]
```

**CTAs**
```bash
/content:cro [improve signup button conversion]
```

**Sales Pages**
```bash
/content:cro [optimize checkout flow copy]
```

### ❌ Don't use for:

**Brand New Content**
- Use `/content:fast` or `/content:good` instead

**Blog Posts**
- Use `/content:enhance` for improving blog content

**Technical Documentation**
- Use `/docs:update` instead

## Optimization Frameworks Used

### 1. AIDA Framework

```
Attention: Compelling headline
Interest: Engaging subheadline and benefits
Desire: Social proof, testimonials, guarantees
Action: Clear, compelling CTA
```

### 2. PAS Framework

```
Problem: Identify user pain point
Agitate: Emphasize consequences of inaction
Solution: Present your product as the solution
```

### 3. Before-After-Bridge

```
Before: Current unsatisfactory state
After: Desired ideal state
Bridge: How your product gets them there
```

## Psychological Triggers

### Loss Aversion

```
Before: "Get 50% more features"
After: "Don't lose 50% of your productivity"
```

### Social Proof

```
Add:
- User counts: "Join 50,000+ developers"
- Testimonials with photos and names
- Trust badges: "Featured in TechCrunch"
- Customer logos
```

### Scarcity & Urgency

```
- "Limited spots available"
- "Price increases in 48 hours"
- "Only 12 left at this price"
- "Offer ends midnight tonight"
```

### Authority

```
- "Recommended by Y Combinator"
- "Used by Fortune 500 companies"
- Expert endorsements
- Industry awards
```

### Reciprocity

```
- Free trial
- Free tools or resources
- Free consultation
- Valuable content
```

## A/B Testing Best Practices

### Test One Thing at a Time

✅ **Good:**
```
Test 1: Headline only
Test 2: CTA button only
Test 3: Social proof placement only
```

❌ **Bad:**
```
Test: Change headline + CTA + layout + colors
(Can't tell what caused the improvement)
```

### Minimum Sample Size

```
Small changes (5-10% lift):
- Need 10,000+ visitors per variant
- Run for 2-4 weeks

Large changes (30%+ lift):
- Need 1,000+ visitors per variant
- Can conclude in 1-2 weeks
```

### Statistical Significance

```
Don't stop test early!

Minimum requirements:
- 95% confidence level
- Complete 2+ full weeks (account for day-of-week effects)
- Reach minimum sample size
```

## Output Files

After `/content:cro` completes:

### Analysis Report

```
plans/content-cro-[page-name]-YYYYMMDD.md
```

Contains:
- Current state analysis
- Issues identified
- Optimization recommendations
- A/B test plans
- Expected improvements

### Optimized Copy Variations

```
content/optimized/
├── headline-variants.md
├── cta-variations.md
├── social-proof-suggestions.md
└── complete-optimized-page.md
```

## Metrics to Track

### Primary Metrics

- **Conversion Rate**: % of visitors who complete goal action
- **Click-Through Rate**: % who click CTA
- **Bounce Rate**: % who leave without engaging
- **Time on Page**: Average engagement time

### Secondary Metrics

- **Scroll Depth**: How far users scroll
- **Heat Maps**: Where users click
- **Form Abandonment**: Where users drop off
- **Exit Rate**: Where users leave

## Common CRO Patterns

### Above the Fold

```
Must include:
1. Clear headline (value proposition)
2. Supporting subheadline
3. Visual (hero image/video)
4. Primary CTA
5. Trust signal (logo, social proof)
```

### Pricing Page

```
Optimize:
- Show value, not just price
- Use pricing anchoring
- Add social proof
- Include guarantee
- Clear feature comparison
- Address objections
```

### Checkout Flow

```
Reduce friction:
- Remove unnecessary fields
- Show progress indicator
- Include trust badges
- Offer guest checkout
- Display security assurance
```

## Best Practices

### Headlines That Convert

✅ **Good:**
```
"Ship Features 10x Faster With AI"
"Join 50,000+ Developers Building Better"
"The Last Dev Tool You'll Ever Need"
```

❌ **Bad:**
```
"Welcome to Our Platform"
"We Are the Best"
"Revolutionary Technology"
```

### CTAs That Work

✅ **Good:**
```
"Start Free Trial → No credit card"
"Get Instant Access"
"Show Me How It Works"
```

❌ **Bad:**
```
"Submit"
"Click Here"
"Learn More"
```

### Social Proof

✅ **Specific:**
```
"Trusted by 50,000+ developers at Google, Meta, Amazon"
"4.9/5 stars from 2,341 reviews"
"Helped teams ship 10x faster"
```

❌ **Vague:**
```
"Trusted by many companies"
"Highly rated"
"Popular choice"
```

## Troubleshooting

### Low Conversion Despite Optimization

**Check:**
- Is offer compelling?
- Is pricing competitive?
- Does product match promise?
- Is traffic qualified?

**Solution:**
```bash
# Analyze deeper issues
/content:cro [full funnel analysis including traffic sources]
```

### A/B Test Shows No Winner

**Possible reasons:**
- Sample size too small
- Change too subtle
- Test run too short
- Traffic quality issues

**Solution:**
```
- Extend test duration
- Increase traffic
- Test bigger changes
- Segment results by traffic source
```

## Next Steps

After optimization:

```bash
# 1. Analyze content
/content:cro [page description]

# 2. Review recommendations
cat plans/content-cro-*.md

# 3. Implement changes
/cook [implement CRO recommendations]

# 4. Set up A/B tests
# (Use your testing platform)

# 5. Monitor results
# Track metrics for 2-4 weeks

# 6. Iterate
/content:cro [further optimize winning variant]
```

## Related Commands

- [/content:enhance](/docs/commands/content/enhance) - Improve existing copy
- [/content:good](/docs/commands/content/good) - Write new optimized copy
- [/plan:cro](/docs/commands/plan/cro) - Create CRO strategy plan

---

**Key Takeaway**: `/content:cro` analyzes your content through a conversion optimization lens, providing specific recommendations, rewritten variations, and A/B testing strategies to maximize conversion rates using proven psychological triggers and CRO best practices.
