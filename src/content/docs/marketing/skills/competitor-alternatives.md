---
title: "ckm:competitor-alternatives"
description: "Create competitor comparison and alternative pages for SEO — capture high-intent search traffic from buyers evaluating options."
section: marketing
category: skills
order: 68
---

# Competitor Alternatives

> Capture high-intent buyer traffic by building SEO-optimized comparison and alternatives pages that win at the decision stage.

## What This Skill Does

**The Challenge**: Buyers searching "[competitor] alternative" or "[competitor] vs [your product]" are moments from purchase. Most companies miss this traffic because they lack structured frameworks for building comparison content at scale.

**The Solution**: Competitor Alternatives skill provides templates for comparison pages, alternatives pages, and feature battle cards. Combines SEO keyword research, competitor positioning analysis, and conversion-optimized copy to capture decision-stage traffic.

## Activation

**Implicit**: Activates when user requests competitor comparison, alternatives pages, or SEO competitive content.

**Explicit**: Activate via prompt:
```
Activate competitor-alternatives skill to create [comparison/alternatives] page for [competitor]
```

## Capabilities

### 1. Page Type Templates

**"[Competitor] Alternatives" page**:
- Target: users frustrated with competitor seeking options
- Structure: Problem with competitor → Your solution → Feature comparison table → CTA
- URL pattern: `/alternatives/[competitor-slug]`

**"[Your Product] vs [Competitor]" page**:
- Target: users actively evaluating both products
- Structure: Overview → Comparison table → Use case fit → Pricing → CTA
- URL pattern: `/compare/[your-product]-vs-[competitor]`

**"Best [Category] Tools" page**:
- Target: top-of-funnel category research
- Structure: Criteria → Ranked list → Your product → Alternatives
- URL pattern: `/compare/best-[category]-tools`

### 2. Comparison Table Generator
Structured feature matrix with honest, factual positioning.

**Table format**:
```markdown
| Feature | Your Product | Competitor A | Competitor B |
|---------|-------------|--------------|--------------|
| Free tier | ✅ 1,000 events/mo | ❌ None | ✅ Limited |
| API access | ✅ All plans | ✅ Pro+ only | ✅ All plans |
| Data export | ✅ CSV, JSON | ✅ CSV only | ❌ None |
```

**Rule**: Only factual, verifiable claims. No subjective "better" without evidence.

### 3. SEO Keyword Research
Target keywords for each competitor page.

**Primary keywords**:
- `[competitor name] alternative` — 1,000-10,000/mo typically
- `[competitor name] vs [your product]` — 500-5,000/mo
- `[competitor name] competitors` — brand awareness traffic

**Secondary keywords**: pricing pages, cancellation alternatives, "[competitor] too expensive"

### 4. Conversion Elements
Hooks that move comparison visitors to trial.

**High-converting elements**:
- Migration tool mention ("Import from [competitor] in one click")
- Specific pricing comparison ("Save $X/year vs [competitor]")
- Social proof from switchers ("Used [competitor] for 3 years, switched because...")
- Limited-friction CTA ("Try free — no credit card")

## Prerequisites

- Competitor feature research completed
- Your product feature list accurate and up-to-date
- Pricing data verified (check competitor pricing pages)
- SEO tool access: Ahrefs, Semrush, or Google Search Console

## Best Practices

**1. Be factually accurate**
Inaccurate comparisons create legal risk and destroy credibility. Verify every claim.

**2. Acknowledge competitor strengths**
Buyers trust honest assessments. Note where competitor excels — it makes your advantages credible.

**3. Update quarterly**
Competitor pricing and features change. Stale pages hurt SEO and credibility.

## Common Use Cases

### Use Case 1: High-Intent Alternatives Page
**Scenario**: Capture traffic from users searching "[BigCompetitor] alternative".

**Workflow**:
1. Research competitor pain points (G2, Trustpilot, Reddit reviews)
2. Build feature comparison table with 15-20 key capabilities
3. Write "Why users switch" section using real customer language
4. Add migration section (import tool, time estimate)
5. Publish at `/alternatives/[competitor-slug]`
6. Build internal links from blog posts and pricing page

### Use Case 2: Vs. Page for Sales Enablement
**Scenario**: Sales team needs comparison collateral for deals against key competitor.

**Workflow**:
1. Interview 3 sales reps for most common competitive objections
2. Build objection-response table
3. Create comparison page that mirrors sales deck
4. Share `/compare/us-vs-competitor` in sales sequences

## Troubleshooting

**Issue**: Page not ranking despite good content
**Solution**: Check page authority. Build internal links from high-traffic pages. Consider acquiring backlinks from industry roundup posts.

**Issue**: Competitor sends legal threat over comparison
**Solution**: Ensure all claims are factual and verifiable. Remove superlatives. Consult legal on FTC comparative advertising guidelines.

## Related Skills

- [SEO](/docs/marketing/skills/seo) - Keyword strategy and technical SEO
- [Competitor](/docs/marketing/skills/competitor) - Competitive intelligence research
- [Copywriting](/docs/marketing/skills/copywriting) - Conversion-focused page copy
- [Content Marketing](/docs/marketing/skills/content-marketing) - Content strategy integration

## Related Commands

- `/ckm:research` - Competitor research
- `/content/good` - Write comparison page copy
