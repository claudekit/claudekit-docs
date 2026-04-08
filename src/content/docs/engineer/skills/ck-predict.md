---
title: "ck:predict"
description: "5 expert personas debate proposed changes to catch architectural, security, performance, and UX issues before implementation"
section: engineer
kit: engineer
category: skills
order: 63
---

# Predict

Five expert personas independently analyze a proposed change and debate trade-offs before you write any code. Catches architectural, security, performance, and UX issues early.

## What This Skill Does

Predict simulates a design review by running your proposal through five distinct perspectives: Architect, Security Expert, Performance Engineer, UX Specialist, and Devil's Advocate. Each persona analyzes independently, then conflicts are identified and resolved into a clear verdict.

## When to Use

- Before implementing a major feature
- Before risky architectural changes (database migration, auth rewrite)
- When evaluating competing approaches
- Before touching production-critical code paths

## Personas

| Persona | Focus |
|---------|-------|
| **Architect** | System design, coupling, extensibility, API contracts |
| **Security** | Attack surfaces, auth flows, data exposure, OWASP risks |
| **Performance** | Latency, memory, N+1 queries, caching, scalability |
| **UX** | User impact, cognitive load, accessibility, error states |
| **Devil's Advocate** | Hidden assumptions, edge cases, what could go wrong |

## Arguments

| Argument | Description |
|----------|-------------|
| `description` | Feature or change proposal (natural language) |
| `--files <glob>` | Optional glob to read affected code areas |

## Example Usage

```
/ck:predict "Add WebSocket support for real-time notifications"
/ck:predict "Migrate authentication from JWT to session cookies"
/ck:predict "Replace REST API with GraphQL" --files src/api/**/*.ts
```

## Workflow

1. **Read** — parse proposal and optional file paths
2. **Analyze** — each persona reviews independently
3. **Agreements** — identify points where 4+ personas align
4. **Conflicts** — surface competing concerns between personas
5. **Resolve** — weigh trade-offs for each conflict
6. **Verdict** — produce final recommendation

## Output

| Section | Content |
|---------|---------|
| **Verdict** | `GO` / `CAUTION` / `STOP` |
| **Agreements** | Points all personas aligned on |
| **Conflicts & Resolutions** | Table with each persona's position + recommendation |
| **Risk Summary** | Risk, Severity, Mitigation |
| **Recommendations** | Numbered action items |

## Related Skills

- [Scenario](/docs/engineer/skills/ck-scenario) — generate edge cases to test after Predict approves
- [Plan](/docs/engineer/skills/ck-plan) — create implementation plan after debate
- [Cook](/docs/engineer/skills/cook) — implement after planning
