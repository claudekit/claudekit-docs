---
title: /plan:cro
description: Create a conversion rate optimization (CRO) plan
section: engineer
kit: engineer
category: commands/plan
order: 4
published: true
---

# /plan:cro

Create a CRO (Conversion Rate Optimization) plan for given content.

## Syntax

```bash
/plan:cro [issues or URL]
```

## CRO Framework (25 Principles)

1. **Headline 4-U Formula**: Useful, Unique, Urgent, Ultra-specific
2. **Above-Fold Value Proposition**: Customer problem focus
3. **CTA First-Person Psychology**: "Get MY Guide" > "Get YOUR Guide"
4. **5-Field Form Maximum**: Every field kills conversions
5. **Message Match Precision**: Ad copy = landing page headline
6. **Social Proof Near CTAs**: Testimonials with faces/names
7. **Cognitive Bias Stack**: Loss aversion, social proof, anchoring
8. **PAS Copy Framework**: Problem > Agitate > Solve
9. **Genuine Urgency Only**: Real deadlines, no fake timers
10. **Price Anchoring**: Show expensive option first

*... and 15 more principles*

## How It Works

1. **Input Analysis**:
   - Screenshots/videos → `ai-multimodal` skill
   - URLs → `web_fetch` for content analysis

2. **Scout**: `/scout ext` (preferred) or `/scout` (fallback) to find related codebase files

3. **Plan Creation**: `planner` agent creates CRO plan with:
   - `plan.md` overview (<80 lines)
   - `phase-XX-name.md` files with sections: Context links, Overview, Key Insights, Requirements, Architecture, Implementation Steps, Todo list, Success Criteria, Risk Assessment, Security Considerations, Next steps

## Output Structure

```
plans/
└── YYYYMMDD-HHmm-cro-plan/
    ├── plan.md              # Overview
    └── phase-XX-name.md     # Specific optimizations
```

## When to Use

- Landing page optimization
- Checkout flow improvement
- Form conversion analysis
- A/B test planning
- UX audit for conversions

**Important**: Does NOT implement changes. Creates plan for review first.

---

**Key Takeaway**: Use `/plan:cro` for data-driven conversion optimization planning using proven CRO principles.
