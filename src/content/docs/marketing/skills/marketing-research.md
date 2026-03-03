---
title: "ckm:marketing-research"
description: "Research market trends, competitors, audience insights, and demand signals to inform strategy and positioning."
section: marketing
kit: marketing
category: skills
order: 89
---

# `ckm:marketing-research`

> Turn market signals into actionable intelligence through systematic research, competitor analysis, and audience insight extraction.

## What This Skill Does

**The Challenge**: Marketing decisions made without data risk targeting wrong audiences, missing trends, and losing to competitors. Unstructured research wastes time and produces inconsistent insights.

**The Solution**: Marketing Research skill provides structured research workflows for market sizing, competitor profiling, audience segmentation, and trend identification. Combines web research with AI synthesis to deliver decision-ready reports.

## Activation

**Implicit**: Activates automatically for Market Researcher, Growth Strategist, and Product Marketing agents.

**Explicit**: Activate via prompt:
```
Activate marketing-research skill to analyze competitors in the SaaS productivity space
```

## Capabilities

### 1. Competitor Analysis
Map competitive landscape with positioning, pricing, and messaging insights.

**Research dimensions**:
- Product features and differentiators
- Pricing tiers and packaging
- Messaging and value propositions
- Marketing channels and content strategy
- Customer reviews and sentiment

**Output format**: `references/competitor-profile-template.md`

### 2. Audience Research
Identify target segments, pain points, and buying triggers.

**Research methods**:
| Method | Data Source | Use Case |
|--------|-------------|----------|
| Survey synthesis | Reddit, Quora, G2 reviews | Pain point discovery |
| Demographics | LinkedIn, Meta Insights | Audience profiling |
| Behavioral | GA4, Hotjar | Intent signals |
| Voice of customer | Customer interviews | Messaging alignment |

### 3. Market Sizing and Trends
Quantify market opportunity and identify emerging trends.

**Trend signals**: Google Trends, industry reports, VC funding data, job postings

**Market sizing approaches**:
- **TAM** (Total Addressable Market): Full market demand
- **SAM** (Serviceable Addressable Market): Reachable segment
- **SOM** (Serviceable Obtainable Market): Realistic capture

## Prerequisites

- Search access for web research
- Target market and industry defined
- Research questions prioritized

## Configuration

No API keys required for basic research. Optional integrations:
- `REVIEWWEB_API_KEY` for SEO keyword volume data
- `GEMINI_API_KEY` for document and report analysis

## Best Practices

**1. Start with jobs-to-be-done framing**
Research what outcomes customers need, not just product features.

**2. Cross-validate signals**
One data source is anecdote. Three or more sources create a pattern.

**3. Date-stamp all findings**
Market data expires quickly. Note research date on all insights.

## Common Use Cases

### Use Case 1: Pre-Launch Competitive Audit
**Scenario**: Launching a new feature, need to understand competitive landscape.

**Workflow**:
1. Define 5-10 direct and indirect competitors
2. Profile each on product, pricing, positioning, and channels
3. Identify whitespace and differentiation opportunities
4. Document findings in competitor matrix
5. Extract messaging insights for copywriting

**Output**: Competitor matrix + positioning recommendations.

### Use Case 2: Audience Persona Development
**Scenario**: ICP (Ideal Customer Profile) is unclear, need data to validate.

**Workflow**:
1. Mine G2/Capterra reviews for job titles and use cases
2. Analyze Reddit communities for pain language
3. Cross-reference with LinkedIn demographic data
4. Synthesize into 2-3 persona profiles
5. Validate personas with sales team

**Output**: Persona docs with demographics, pain points, and buying triggers.

## Troubleshooting

**Issue**: Research too broad, no clear insights
**Solution**: Narrow scope to 3 specific research questions before starting.

**Issue**: Conflicting data across sources
**Solution**: Weight primary sources (direct user feedback) over secondary (analyst reports).

## Related Skills

- [Competitor Analysis](/docs/marketing/skills/competitor) - Dedicated competitor intelligence
- [Analytics](/docs/marketing/skills/analytics) - Quantitative data analysis
- [Persona](/docs/marketing/skills/persona) - Audience profile creation
- [Research](/docs/marketing/skills/research) - Technical research workflows

## Related Commands

- `/ckm:research` - General research workflow
- `/ckm:competitor` - Competitor deep-dive
- `/ckm:analyze` - Data synthesis and reporting
