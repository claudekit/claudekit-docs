---
title: "ckm:form-cro"
description: "Optimize lead capture, contact, demo request, and signup forms for conversion rate using CRO principles and behavioral psychology."
section: marketing
category: skills
order: 77
---

# Form CRO

> Increase form completion rates with CRO principles, friction reduction, and behavioral psychology — without sacrificing lead quality.

## What This Skill Does

**The Challenge**: Forms are the highest-friction conversion point. Most forms collect too many fields, use poor copy, miss trust signals, and ignore mobile UX. Small improvements compound into significant pipeline gains.

**The Solution**: Form CRO skill audits existing forms and designs high-converting alternatives using proven principles: field minimization, progressive disclosure, microcopy, social proof placement, and mobile-first patterns. Includes A/B test frameworks for form variants.

## Activation

**Implicit**: Activates when user requests form optimization, lead capture improvement, or signup flow redesign.

**Explicit**: Activate via prompt:
```
Activate form-cro skill to optimize [form type] for [goal]
```

## Capabilities

### 1. Form Audit Checklist
Systematic review of current form performance.

**Audit dimensions**:
| Dimension | Good | Warning |
|-----------|------|---------|
| Field count | ≤4 for top-of-funnel | >6 fields |
| CTA copy | Specific benefit | "Submit" / "Click here" |
| Error messages | Inline, immediate | Page-level after submit |
| Mobile experience | Native input types | Text input for phone/date |
| Trust signals | Privacy note, SSL, logos | None visible |
| Loading feedback | Spinner or progress | No feedback |

### 2. Field Optimization Framework
Decide which fields to keep, defer, or remove.

**Field priority tiers**:
- **Essential** (keep): Email, name — minimum viable lead
- **Qualify** (optional): Company, role, team size
- **Enrich later** (remove from form): Phone, use case, budget

**Progressive disclosure pattern**:
Step 1: Email only → Step 2: Name + company (shown after email entered)

### 3. CTA Copy Patterns
Replace generic CTAs with benefit-driven alternatives.

**High-converting formulas**:
- "Get my free [deliverable]" (possessive + specific)
- "Start [benefit] — free" (action + value + free)
- "See [product] in action" (low commitment framing)
- "Yes, show me [outcome]" (agreement + specificity)

### 4. Microcopy Library
Small copy improvements that reduce anxiety at each field.

**Examples**:
- Below email: "No spam. Unsubscribe anytime."
- Below phone: "We only call to schedule your demo — never sales calls."
- Near CTA: "Join 12,400 marketers who already..."
- Error state: "That email looks off. Try: you@company.com"

## Prerequisites

- Current form analytics (completion rate, drop-off by field)
- Form tool access: HubSpot, Typeform, React Hook Form, or HTML
- Heatmap data (Hotjar or FullStory) if available

## Best Practices

**1. Remove one field at a time**
Each field removal is an A/B test. Measure impact before removing the next.

**2. Align CTA with destination**
If form leads to a demo booking, CTA should say "Book my demo" not "Get started".

**3. Mobile-specific UX**
Use `type="email"`, `type="tel"`, `autocomplete` attributes. Reduces typing friction by 40%.

## Common Use Cases

### Use Case 1: SaaS Trial Signup Optimization
**Scenario**: Trial signup form converts at 2.8%, industry average 4.5%.

**Workflow**:
1. Audit current form (8 fields → 3 are unnecessary)
2. Remove: Company size, phone, "How did you hear about us"
3. Change CTA: "Create Account" → "Start my free trial"
4. Add microcopy: "No credit card required. 14 days free."
5. Test: 8-field vs 5-field vs 3-field
6. Measure: 7-day and 30-day conversion, not just signup rate

### Use Case 2: Demo Request Form
**Scenario**: Enterprise demo form has 40% abandonment rate.

**Workflow**:
1. Apply progressive disclosure: email → company details
2. Add calendar widget inline (reduce clicks after submit)
3. Add trust logos above CTA
4. Change CTA to "See [Product] live — pick your time"

## Troubleshooting

**Issue**: Reducing fields decreases lead quality
**Solution**: Add qualifying question in welcome email instead. Use enrichment tools (Clearbit) to fill missing fields.

**Issue**: Multi-step form has high drop-off at step 2
**Solution**: Move most valuable field to step 1. Add progress bar. Reduce step 2 fields.

## Related Skills

- [A/B Test Setup](/docs/marketing/skills/ab-test-setup) - Test form variants
- [Marketing Psychology](/docs/marketing/skills/marketing-psychology) - Behavioral triggers in forms
- [Copywriting](/docs/marketing/skills/copywriting) - CTA and microcopy writing
- [Frontend Design](/docs/marketing/skills/frontend-design) - Implement form UI

## Related Commands

- `/ckm:analyze` - Analyze form performance data
- `/content/cro` - CRO-optimized copy for forms
