---
title: "Research"
description: "Systematic technical research and analysis with multi-source validation, cross-referencing, and comprehensive reporting."
section: marketing
category: skills
order: 21
---

> Conduct thorough research with systematic information gathering, cross-validation, and actionable insights.

## What This Skill Does

**Challenge**: Marketing decisions require deep understanding of market trends, competitor strategies, technology options, and best practices. Ad-hoc research wastes time and misses key insights.

**Solution**: Research skill provides systematic research methodology with multi-source strategies, cross-validation protocols, and structured reporting. Respects YAGNI/KISS/DRY principles. Supports Gemini-powered research or WebSearch fallback.

## Activation

**Implicit**: Activated when agents need to research topics, analyze competitors, or validate technical approaches.

**Explicit**: Activate via prompt:
```
Activate research skill to [describe task]
``` or `/scout` command

## Capabilities

### 1. Multi-source Research Strategy
Combine web search, documentation analysis, and GitHub repository exploration.

**Research layers**:
1. **Web search**: Current trends, recent documentation (priority: 2024-2025)
2. **Official docs**: API documentation, specifications
3. **GitHub repos**: README files, changelogs, release notes
4. **Video content**: Tutorials from official and expert channels
5. **Cross-validation**: Verify across 3+ independent sources

**Search priorities**:
- Check if `gemini` bash command available → use for research (10min timeout)
- Fall back to `WebSearch` tool if needed
- Run maximum 5 research queries in parallel

### 2. Structured Report Generation
Comprehensive markdown reports with executive summary, findings, and actionable recommendations.

**Report sections**:
- Executive summary (2-3 paragraphs)
- Research methodology
- Key findings (technology, trends, best practices, security, performance)
- Comparative analysis (if applicable)
- Implementation recommendations
- Resources & References
- Appendix (glossary, compatibility matrix)

**Reports saved to**: Path from `## Naming` section or prompt user for output path

### 3. Cross-validation Protocol
Verify information across multiple independent sources before inclusion.

**Validation criteria**:
- **Accuracy**: Verify across 3+ sources
- **Currency**: Prioritize last 12 months unless historical context needed
- **Completeness**: Cover all requested aspects
- **Actionability**: Provide implementable recommendations

## Prerequisites

- Clear research question or topic
- Context for research scope (depth, recency, technical level)

## Configuration

**Research limits**:
- Maximum 5 research tool calls (default)
- User can request fewer: "research this in 3 searches"
- Strictly respect user-specified limits

**Output format**: Markdown report with citations

## Best Practices

**1. Start with clear scope**
Define key terms, recency requirements, and evaluation criteria before searching.

**2. Prioritize authoritative sources**
Official documentation, major tech companies, recognized experts > random blogs.

**3. Document conflicting information**
Note when sources disagree. Present multiple viewpoints with context.

## Common Use Cases

### Use Case 1: Competitor Analysis
**Scenario**: Research competitor marketing strategies and positioning.

**Workflow**:
1. **Scope**: Identify 3-5 main competitors
2. **Search**: Website messaging, pricing, content marketing, social presence
3. **Analyze**: Compare positioning, value props, target audiences
4. **Findings**: Market gaps, differentiation opportunities
5. **Report**: Competitive landscape with strategic recommendations

**Result**: Markdown report with competitor matrix and positioning insights.

### Use Case 2: Technology Evaluation
**Scenario**: Evaluate email service providers for campaign automation.

**Workflow**:
1. **Scope**: SendGrid, Mailchimp, Resend, ConvertKit
2. **Criteria**: Pricing, API quality, deliverability, automation features
3. **Search**: Official docs, user reviews, case studies
4. **Compare**: Feature matrix with pros/cons
5. **Recommendation**: Best fit for specific use case

**Result**: Decision matrix with justified recommendation.

## Troubleshooting

**Issue**: Research too broad, too much information
**Solution**: Narrow scope. Define specific questions to answer (max 3-5).

**Issue**: Conflicting information across sources
**Solution**: Present both viewpoints with context. Note source authority and recency.

**Issue**: Research feels shallow
**Solution**: Increase research depth. Use `docs-seeker` skill for GitHub repo analysis. Check official documentation.

## Related Skills

- [SEO Optimization](/docs/marketing/skills/seo-optimization) - Keyword research and competitor analysis
- [Analytics](/docs/marketing/skills/analytics) - Data analysis and insights
- [Brainstorming](/docs/marketing/skills/brainstorming) - Convert research into decisions

## Related Commands

- `/scout` - Research current project context
- `/scout:ext` - Research external topics
- `/ask` - Quick research questions
- `/plan` - Convert research into action plan
