---
title: Research Skill
description: Systematic research methodology cho technical solutions với multi-source validation và comprehensive reporting
section: engineer
kit: engineer
category: skills/tools
order: 15
published: true
lang: vi
---

# Research

Validate technical decisions với multi-source research trước implementation. Max 5 searches per task.

## Nguyên Tắc Cốt Lõi

**Honor YAGNI, KISS, DRY. Research để eliminate uncertainty, không satisfy curiosity.**

Research là waste nếu nó không inform một decision. Trước khi searching, biết decision nào depends on answer. Focus on authoritative sources (docs, repos, CVEs), cross-reference cho accuracy, prioritize last 12 months. Brutal honesty over diplomatic hedging.

## Khi Nào Sử Dụng

Luôn cho:
- Evaluating libraries/frameworks trước adoption
- Investigating security vulnerabilities hoặc best practices
- Comparing solution approaches với unclear trade-offs
- Tạo technical specs cần evidence

Đặc biệt khi:
- Team unfamiliar với technology (reduce guesswork)
- Security/performance critical (cần benchmarks, CVEs)
- Multiple solutions exist (comparative analysis required)
- Legacy migration (phải verify deprecation/compatibility)

## Quy Trình

### 1. Define Scope + Decision Criteria
Identify: Decision nào cần research này? Facts nào sẽ change outcome? Set boundaries (depth, recency, sources). Example: "Which auth lib cho Next.js?" → Criteria: maintained, security track record, TypeScript support, <50kb.

### 2. Systematic Search (Max 5)
**Preferred**: `gemini -m gemini-2.5-flash -p "your prompt"` (nếu available)
**Fallback**: `WebSearch` tool

**Query fan-out** across:
- Official docs, GitHub repos, changelogs
- CVE databases (security topics)
- Recognized experts/conferences (videos)
- Benchmarks, case studies (performance)

Cross-reference minimum 3 sources. Check dates. Identify consensus vs. outliers.

### 3. Analyze + Synthesize
Compare: Pros/cons, maturity, adoption, security, performance, compatibility. Flag: Deprecated features, breaking changes, unresolved issues. Output: Actionable recommendation với evidence.

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
[Links với titles]

## Unresolved
[Open questions nếu có]
```

Sacrifice grammar cho concision. Dùng code blocks, mermaid/ASCII diagrams.

## Common Use Cases

### Auth Library Selection
**Ai**: Full-stack dev building SaaS
```
"Research Next.js auth solutions. Cần: Prisma integration, OAuth providers, session management, TypeScript. Compare NextAuth vs Clerk vs Supabase Auth. Recommend one."
```

### Performance Optimization Approach
**Ai**: Frontend engineer với slow app
```
"React dashboard renders slowly. Research: Code splitting strategies, lazy loading patterns, bundle analysis tools. Focus trên Vite-specific optimizations và real-world benchmarks."
```

### Database Migration Path
**Ai**: Backend lead planning Postgres upgrade
```
"Migrating từ Postgres 12 tới 16. Research breaking changes, performance improvements, migration tools. Check cho issues với Prisma 5.x compatibility."
```

### Security Vulnerability Assessment
**Ai**: DevOps investigating CVE
```
"CVE-2024-XXXX affects Express version của chúng ta. Research: Impact scope, exploit difficulty, patching strategy, workaround options. Check nếu Next.js 14 affected."
```

### New Framework Evaluation
**Ai**: Team considering framework switch
```
"Evaluate Astro vs Next.js cho content site. Priorities: Build speed, SEO, partial hydration, markdown support, deployment simplicity. Cần hard data trên build times."
```

## Pro Tips

**Không kích hoạt?** Nói: *"Use research skill to investigate [topic] with multi-source validation and generate a report."*

**Budget searches**:
- Search 1-2: Broad discovery (official docs, popular articles)
- Search 3-4: Deep dive (specific features, benchmarks, CVEs)
- Search 5: Edge cases/unresolved questions

**Red flags**:
- Chỉ one source cho critical claim
- Dates >2 years old cho fast-moving tech
- Vague claims mà không có examples/data

**Quality checklist**:
- [ ] 3+ authoritative sources cross-referenced
- [ ] Code examples included (nếu applicable)
- [ ] Security implications addressed
- [ ] Performance data cited (nếu relevant)
- [ ] Migration/compatibility notes clear

**Report efficiently**:
- Dùng bullet points hơn paragraphs
- Lead với recommendation, evidence second
- Skip obvious background (assume technical audience)
- List unresolved questions at end

## Skills Liên Quan

- [Docs Seeker](/docs/engineer/skills/docs-seeker) - Documentation lookup
- [Sequential Thinking](/docs/engineer/skills/sequential-thinking) - Structured analysis
- [Planning](/docs/engineer/skills/planning) - Solution design

## Key Takeaway

Research skill produces evidence-based technical decisions thông qua systematic multi-source validation, với reports focusing on actionable recommendations over theory. Max 5 searches—think trước mỗi query.
