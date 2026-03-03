---
title: "ckm:persona"
description: "Customer persona management and creation"
section: marketing
kit: marketing
category: skills
order: 41
---

# ckm:persona

> Build detailed customer personas grounded in real data to sharpen targeting, messaging, and product positioning.

## What This Skill Does

The Persona skill creates and manages customer persona profiles for marketing use. It combines market research, customer interview synthesis, behavioral data, and competitive ICP analysis to produce detailed persona documents that teams can reference across campaigns, content, and product decisions.

Personas aren't just demographic profiles — the skill builds psychographic depth: motivations, frustrations, decision-making processes, information sources, and objection patterns. This depth is what makes personas actually useful for writing copy, designing campaigns, and aligning sales and marketing.

The skill also manages the persona library over time: updating profiles as market understanding evolves, creating variants for different segments, and validating personas against real customer data.

## Quick Start

```
/ckm:persona create --name "Sarah, Head of Marketing" --segment B2B-SMB
```

## Key Features

- Structured persona creation with demographic and psychographic depth
- Motivations, frustrations, goals, and objections documented
- Information sources and decision-making journey mapped
- Persona library management in `docs/personas/`
- Multiple personas for different segments and ICPs
- Integration with copywriting skill for persona-targeted copy
- Persona validation against customer interview data

## Usage Examples

**Create a new persona**:
```
Create a detailed persona for our primary ICP: a Head of Marketing at a B2B SaaS company,
50-200 employees, managing a team of 3-5. Focus on their daily frustrations with
content production and what they look for in a marketing tool
```

**Update existing persona**:
```
Update the "Sarah" persona based on these 5 customer interview summaries: [summaries].
Add any new frustrations or motivations that emerged from the interviews
```

**Persona-based messaging**:
```
Using the "David, CTO" persona, write the product positioning statement and
top 3 value propositions most relevant to his priorities
```

## Related

- [ckm:competitor](/docs/marketing/skills/competitor) - Competitive ICP research informs personas
- [Research](/docs/marketing/skills/research) - Market research for persona grounding
- [Copywriting](/docs/marketing/skills/copywriting) - Persona-targeted copy creation
