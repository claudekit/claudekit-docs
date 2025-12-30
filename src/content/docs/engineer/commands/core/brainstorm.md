---
title: /brainstorm
description: Collaborate with expert advisors to evaluate technical approaches using YAGNI, KISS, and DRY principles
section: engineer
kit: engineer
category: commands/core
order: 9
published: true
---

# /brainstorm

Elite brainstorming command for technical solutions. Engages multi-agent collaboration to evaluate approaches against engineering principles, producing documented recommendations.

## Syntax

```bash
/brainstorm [question]
```

## When to Use

- **Architecture Decisions**: Choosing between design patterns or system architectures
- **Technology Selection**: Evaluating frameworks, libraries, or tools
- **Design Challenges**: Solving complex problems with multiple valid approaches
- **Risk Assessment**: Identifying trade-offs before committing to implementation
- **Team Alignment**: Getting structured analysis for stakeholder discussions

## Quick Example

```bash
/brainstorm [should we use Redis or PostgreSQL for session storage?]
```

**Output**:
```
Discovery Phase:
- Current user load: 10k DAU
- Session data: ~2KB per user
- Existing infrastructure: PostgreSQL primary

Analysis Against Principles:
YAGNI: PostgreSQL sessions sufficient for current scale
KISS: Single database reduces operational complexity
DRY: Reuse existing connection pooling

Recommendation:
PostgreSQL sessions with redis cache layer when >50k DAU

Report: plans/reports/brainstorm-251129-session-storage.md
```

**Result**: Structured analysis saved to markdown report.

## Arguments

- `[question]`: Technical question or challenge requiring multi-perspective analysis (required)

## Core Principles

Every brainstorm evaluates solutions against three principles:

### YAGNI (You Aren't Gonna Need It)

Don't build for hypothetical future requirements. If a simpler solution works now:
- Avoid premature optimization
- Reject features "just in case"
- Question abstractions without immediate need

### KISS (Keep It Simple, Stupid)

Favor straightforward solutions over clever ones:
- Fewer moving parts = fewer failure points
- Readable code over compressed code
- Standard patterns over custom implementations

### DRY (Don't Repeat Yourself)

Eliminate meaningful duplication:
- Extract repeated logic into functions
- Centralize configuration
- But: Don't DRY too early (three occurrences first)

## What Happens

### 6-Phase Process

**Phase 1: Discovery**

Clarifies requirements and constraints:
- What problem are we solving?
- What constraints exist? (budget, timeline, team skills)
- What's the success criteria?
- What's already been tried?

**Phase 2: Research**

Gathers information from multiple sources:
- Project docs (system-architecture.md, code-standards.md)
- External APIs via MCP tools
- Documentation lookups via docs-seeker
- Codebase analysis via scout

**Phase 3: Analysis**

Evaluates each approach against principles:
- YAGNI: Does this add unnecessary complexity?
- KISS: Is there a simpler approach?
- DRY: Does this create duplication?
- Additionally: Security, performance, maintainability

**Phase 4: Debate**

Challenges assumptions and preferences:
- Devil's advocate for each option
- Surface hidden trade-offs
- Question "obvious" choices
- Consider edge cases and failure modes

**Phase 5: Consensus**

Builds alignment on recommendation:
- Synthesizes perspectives
- Ranks options with rationale
- Identifies non-negotiables
- Notes acceptable trade-offs

**Phase 6: Documentation**

Creates comprehensive markdown report:
- Problem statement
- Options considered
- Analysis against principles
- Recommendation with rationale
- Risks and mitigations
- Success metrics

## Expertise Areas

Brainstorming draws on multiple perspectives:

| Area | Focus |
|------|-------|
| Architecture | System design, component boundaries, interfaces |
| Risk | Failure modes, security implications, tech debt |
| Development | Time estimates, implementation complexity |
| UX/DX | User experience, developer experience, ergonomics |
| Performance | Scalability, latency, resource utilization |
| Operations | Deployment, monitoring, maintenance burden |

## Collaboration Tools

The brainstorm process may invoke:

- **planner**: Structure analysis and create recommendations
- **docs-manager**: Access and update project documentation
- **searchapi MCP**: Research external solutions and patterns
- **docs-seeker**: Look up framework documentation
- **ai-multimodal**: Analyze diagrams or visual references
- **psql**: Query database schema for context

## Output Location

Reports are saved to markdown files:

**With active plan**:
```
{active-plan}/reports/brainstorm-YYMMDD-{topic}.md
```

**Without active plan**:
```
plans/reports/brainstorm-YYMMDD-{topic}.md
```

## Report Structure

Generated reports include:

```markdown
# Brainstorm: {Topic}

**Date**: YYMMDD
**Question**: {Original question}

## Problem Statement
{Clarified problem and constraints}

## Options Considered

### Option A: {Name}
- Description
- Pros
- Cons
- Principle alignment: YAGNI ✓ KISS ✓ DRY ✓

### Option B: {Name}
...

## Recommendation
{Selected option with rationale}

## Risks & Mitigations
- Risk 1: {description} → Mitigation: {approach}
...

## Success Metrics
- {Measurable criteria for success}

## Next Steps
1. {Action item}
...
```

## Complete Example

### Scenario: Choosing State Management

```bash
/brainstorm [what state management should we use for a React dashboard with real-time updates?]
```

**Phase Outputs**:

**Discovery**:
```
Requirements clarified:
- Dashboard with 20+ widgets
- Real-time data via WebSocket
- User preferences persistence
- Team: 3 devs, familiar with React hooks

Constraints:
- No Redux experience on team
- Performance critical (60fps animations)
- Must support offline mode
```

**Research**:
```
Options identified:
- Redux Toolkit + RTK Query
- Zustand
- Jotai
- React Query + Context
- Recoil

External sources consulted:
- State management benchmarks 2024
- React documentation on state patterns
- Real-time dashboard case studies
```

**Analysis**:
```
YAGNI Analysis:
- Redux: Overkill for 20 widgets, adds boilerplate
- Zustand: Minimal API, no unnecessary abstractions
- React Query: Built-in caching eliminates manual sync

KISS Analysis:
- Zustand: ~10 lines for basic store
- Redux: Requires slices, actions, selectors
- Jotai: Atomic model adds cognitive load

DRY Analysis:
- React Query: Centralizes data fetching logic
- All options support shared state
```

**Debate**:
```
Devil's Advocate Points:
- Zustand: Less ecosystem than Redux
  Counter: Ecosystem not needed for dashboard scope

- React Query: Not for WebSocket
  Counter: Can integrate with WS for cache invalidation

- No Redux: Team won't learn industry standard
  Counter: Modern React prefers lighter solutions
```

**Recommendation**:
```
Zustand + React Query

Rationale:
- Zustand: UI state (widget positions, preferences)
- React Query: Server state (API data, caching)
- WebSocket: Triggers React Query invalidation

Principle alignment:
- YAGNI: No unused Redux infrastructure
- KISS: Two focused tools vs one complex one
- DRY: React Query eliminates fetch boilerplate
```

**Report saved**: `plans/reports/brainstorm-251129-state-management.md`

## Common Use Cases

### Architecture Evaluation

```bash
/brainstorm [monorepo with Turborepo vs separate repos for 5 services?]
```

Gets analysis on build complexity, code sharing, and deployment trade-offs.

### Technology Selection

```bash
/brainstorm [Prisma vs Drizzle vs raw SQL for new Node.js API?]
```

Receives comparison based on team experience, query complexity, and type safety needs.

### Design Challenge

```bash
/brainstorm [how to handle file uploads: direct to S3 vs through API server?]
```

Gets security, cost, and complexity analysis for each approach.

### Migration Strategy

```bash
/brainstorm [gradual migration from Express to Fastify or full rewrite?]
```

Receives risk analysis and phased approach recommendations.

## What /brainstorm DOES NOT Do

- ❌ Implement code (use `/cook` or `/code`)
- ❌ Fix bugs (use `/debug` or `/fix:*`)
- ❌ Make final decisions (you decide, it advises)
- ❌ Skip documentation (always produces report)

## Best Practices

### Provide Context

Include constraints in your question:
```bash
/brainstorm [
  Authentication approach for:
  - 50k users, 5k concurrent
  - Team knows JWT basics
  - Must support SSO later
  - Budget: startup (minimize vendor costs)
]
```

### Ask Comparative Questions

✅ **Good**:
```bash
/brainstorm [PostgreSQL vs MongoDB for user-generated content with nested comments?]
/brainstorm [SSR vs SSG vs ISR for documentation site with daily updates?]
```

❌ **Too Vague**:
```bash
/brainstorm [what database should I use?]
/brainstorm [how to build this?]
```

### Review Report Before Acting

The markdown report contains nuanced analysis not shown in terminal output:
```bash
# After brainstorm
cat plans/reports/brainstorm-251129-{topic}.md
```

## Integration with Workflow

### Before Planning

```bash
# 1. Brainstorm approach
/brainstorm [best auth strategy for multi-tenant SaaS?]

# 2. Review report, discuss with team
cat plans/reports/brainstorm-251129-auth-strategy.md

# 3. Create implementation plan
/plan [implement JWT auth with tenant isolation]

# 4. Execute
/code
```

### During Architecture Review

```bash
# 1. Reviewing PR with complex changes
git diff main

# 2. Question the approach
/brainstorm [is this service abstraction worth the complexity?]

# 3. Adjust based on recommendation
```

## Related Commands

- [/ask](/docs/engineer/commands/core/ask) - Quick architectural questions without full report
- [/plan](/docs/engineer/commands/core/plan) - Create implementation plan after brainstorming
- [/code](/docs/engineer/commands/core/code) - Execute plans with quality gates
- [/cook](/docs/engineer/commands/core/cook) - Implement features step-by-step

---

**Key Takeaway**: `/brainstorm` provides structured multi-perspective analysis on technical decisions, documenting recommendations against YAGNI, KISS, and DRY principles. It advises - you decide.
