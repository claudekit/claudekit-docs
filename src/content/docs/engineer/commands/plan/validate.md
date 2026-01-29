---
title: /plan:validate
description: Validate implementation plan with critical questions interview
section: engineer
kit: engineer
category: commands/plan
order: 11
published: true
---

# /plan:validate

Interview-based validation to surface assumptions, risks, and edge cases before implementation.

## Syntax

```bash
/plan:validate                # Validate active plan
/plan:validate [plan-path]    # Validate specific plan
```

## What It Does

Systematically reviews plan for:
- **Architecture decisions** - Design patterns, database choices, API structures
- **Assumptions** - Implicit expectations that may be wrong
- **Tradeoffs** - Comparing alternatives and their implications
- **Risks** - Dependencies, blockers, potential failures
- **Scope** - MVP boundaries, future phases, out-of-scope items

## Question Categories

| Category | Detects |
|----------|---------|
| Architecture | "approach", "pattern", "design", "structure", "database", "API" |
| Assumptions | "assume", "expect", "should", "will", "must", "default" |
| Tradeoffs | "tradeoff", "vs", "alternative", "option", "choice" |
| Risks | "risk", "might", "could fail", "dependency", "blocker" |
| Scope | "phase", "MVP", "future", "out of scope", "nice to have" |

## Interview Process

1. **Reads Plan** - Analyzes `plan.md` and all `phase-*.md` files
2. **Generates Questions** - 3-8 critical questions with 2-4 concrete options each
3. **User Interview** - Presents questions via interactive prompts
4. **Documents Answers** - Adds `## Validation Summary` to `plan.md`
5. **Action Items** - Flags any plan revisions needed

## Configuration

Set in `.claude/.ck.json`:

```json
{
  "validation": {
    "mode": "auto",           // auto|prompt|off
    "questions": "3-8"        // min-max range
  }
}
```

## Example Output

```markdown
## Validation Summary

**Validated:** 2026-01-28
**Questions asked:** 5

### Confirmed Decisions
- Validation persistence: Save to plan.md frontmatter
- Rate limiting: Add basic implementation now
- Database: PostgreSQL with TimescaleDB extension

### Action Items
- [ ] Update phase-02 to include rate limiting middleware
- [ ] Add PostgreSQL setup to phase-01
```

## Best Practice

**After validation, run `/clear` then `/cook`** to start implementation with fresh context.

This prevents planning context pollution and improves plan adherence.

## Related Commands

- [/plan:hard](/docs/engineer/commands/plan/hard) - Research-based planning
- [/cook](/docs/engineer/commands/core/cook) - Implementation from validated plan
