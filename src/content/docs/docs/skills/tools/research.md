---
title: Research Skill
description: Systematic research methodology for technical solutions with multi-source validation and comprehensive reporting
section: docs
category: skills/tools
order: 15
published: true
---

# Research

Validate technical decisions with multi-source research before implementation. Max 5 searches per task.

## Core Principle

**Honor YAGNI, KISS, DRY. Research to eliminate uncertainty, not satisfy curiosity.**

Research is waste if it doesn't inform a decision. Before searching, know what decision depends on the answer. Focus on authoritative sources (docs, repos, CVEs), cross-reference for accuracy, prioritize last 12 months. Brutal honesty over diplomatic hedging.

## When to Use

Always for:
- Evaluating libraries/frameworks before adoption
- Investigating security vulnerabilities or best practices
- Comparing solution approaches with unclear trade-offs
- Creating technical specs that require evidence

Especially when:
- Team unfamiliar with technology (reduce guesswork)
- Security/performance critical (need benchmarks, CVEs)
- Multiple solutions exist (comparative analysis required)
- Legacy migration (must verify deprecation/compatibility)

## The Process

### 1. Define Scope + Decision Criteria
Identify: What decision needs this research? What facts will change the outcome? Set boundaries (depth, recency, sources). Example: "Which auth lib for Next.js?" → Criteria: maintained, security track record, TypeScript support, <50kb.

### 2. Systematic Search (Max 5)
**Preferred**: `gemini -m gemini-2.5-flash -p "your prompt"` (if available)
**Fallback**: `WebSearch` tool

**Query fan-out** across:
- Official docs, GitHub repos, changelogs
- CVE databases (security topics)
- Recognized experts/conferences (videos)
- Benchmarks, case studies (performance)

Cross-reference minimum 3 sources. Check dates. Identify consensus vs. outliers.

### 3. Analyze + Synthesize
Compare: Pros/cons, maturity, adoption, security, performance, compatibility. Flag: Deprecated features, breaking changes, unresolved issues. Output: Actionable recommendation with evidence.

### 4. Generate Report
**Location**: `{active-plan}/reports/researcher-YYMMDD-topic.md` (fallback: `plans/reports/`)

**Structure**:
```markdown
# Research: [Topic]

## Decision Summary
[1-2 paragraphs: recommendation + reasoning]

## Methodology
Sources: [list], Date range: [X], Search terms: [Y]

## Findings
### Technology Overview
### Best Practices
### Security/Performance
### Trade-offs

## Recommendation
### Quick Start
### Code Example
### Pitfalls to Avoid

## References
[Links with titles]

## Unresolved
[Open questions if any]
```

Sacrifice grammar for concision. Use code blocks, mermaid/ASCII diagrams.

## Common Use Cases

### Auth Library Selection
**Who**: Full-stack dev building SaaS
```
"Research Next.js auth solutions. Need: Prisma integration, OAuth providers, session management, TypeScript. Compare NextAuth vs Clerk vs Supabase Auth. Recommend one."
```

### Performance Optimization Approach
**Who**: Frontend engineer with slow app
```
"React dashboard renders slowly. Research: Code splitting strategies, lazy loading patterns, bundle analysis tools. Focus on Vite-specific optimizations and real-world benchmarks."
```

### Database Migration Path
**Who**: Backend lead planning Postgres upgrade
```
"Migrating from Postgres 12 to 16. Research breaking changes, performance improvements, migration tools. Check for issues with Prisma 5.x compatibility."
```

### Security Vulnerability Assessment
**Who**: DevOps investigating CVE
```
"CVE-2024-XXXX affects our Express version. Research: Impact scope, exploit difficulty, patching strategy, workaround options. Check if Next.js 14 affected."
```

### New Framework Evaluation
**Who**: Team considering framework switch
```
"Evaluate Astro vs Next.js for content site. Priorities: Build speed, SEO, partial hydration, markdown support, deployment simplicity. Need hard data on build times."
```

## Pro Tips

**Not activating?** Say: *"Use research skill to investigate [topic] with multi-source validation and generate a report."*

**Budget searches**:
- Search 1-2: Broad discovery (official docs, popular articles)
- Search 3-4: Deep dive (specific features, benchmarks, CVEs)
- Search 5: Edge cases/unresolved questions

**Red flags**:
- Only one source for critical claim
- Dates >2 years old for fast-moving tech
- Vague claims without examples/data

**Quality checklist**:
- [ ] 3+ authoritative sources cross-referenced
- [ ] Code examples included (if applicable)
- [ ] Security implications addressed
- [ ] Performance data cited (if relevant)
- [ ] Migration/compatibility notes clear

**Report efficiently**:
- Use bullet points over paragraphs
- Lead with recommendation, evidence second
- Skip obvious background (assume technical audience)
- List unresolved questions at end

## Related Skills

- [Docs Seeker](/docs/skills/tools/docs-seeker) - Documentation lookup
- [Sequential Thinking](/docs/skills/tools/sequential-thinking) - Structured analysis
- [Planning](/docs/skills/tools/planning) - Solution design

## Key Takeaway

Research skill produces evidence-based technical decisions through systematic multi-source validation, with reports focusing on actionable recommendations over theory. Max 5 searches—think before each query.
