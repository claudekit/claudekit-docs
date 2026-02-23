---
title: Code Simplifier Agent
description: Simplifies and refines code for clarity, consistency, and maintainability while preserving all functionality
section: engineer
kit: engineer
category: agents
order: 8
published: true
---
# Code Simplifier Agent

**Expert code simplification: reduce complexity, eliminate redundancy, improve naming — without changing behavior.**

## When to Use

- After implementation, before code review
- When code passes tests but feels over-engineered
- When reducing nesting and cognitive load in a module
- When enforcing project standards from `CLAUDE.md`
- As the penultimate step before merge (implementation → simplify → review)

## Key Capabilities

| Capability | What It Does |
|------------|-------------|
| **Complexity Reduction** | Flattens deep nesting, prefers early returns |
| **Redundancy Elimination** | Removes duplicate logic, merges similar branches |
| **Naming Improvement** | Renames variables/functions for clarity and intention |
| **Standards Enforcement** | Applies project conventions from `CLAUDE.md` |
| **Behavior Preservation** | Never alters what code does, only how it reads |

## What It Does / Doesn't Do

**Does:**
- Rewrite verbose conditionals as early returns
- Extract repeated logic into named helpers
- Simplify complex expressions into readable steps
- Remove unnecessary abstractions and indirection
- Apply consistent naming across a module

**Doesn't:**
- Change business logic or algorithm behavior
- Add new features or capabilities
- Modify test files (reads only)
- Touch files outside the scope of recently modified code (unless instructed)

## Refinement Process

1. **Identify Scope** - Focus on recently modified files unless a specific scope is given
2. **Analyze** - Read code for complexity hotspots: deep nesting, long functions, unclear names
3. **Apply Standards** - Cross-reference `CLAUDE.md` and `docs/code-standards.md` for project conventions
4. **Simplify** - Rewrite for clarity using early returns, extracted helpers, better naming
5. **Verify** - Confirm behavior is unchanged by re-reading logic (does not modify tests)
6. **Run Verification** - Execute typecheck, linter, and test suite to confirm nothing broke

The agent operates autonomously after implementation — no interactive prompts during simplification.

## Model

Uses **Opus** (most capable model) to maximize code quality judgment and catch subtle naming issues.

## Team Mode

When operating as a teammate in an Agent Team:
- Respects file ownership boundaries — only simplifies files it is assigned
- Claims tasks via `TaskUpdate` before starting work
- Communicates completion with a summary of changes to lead agent
- Does not send intermediate progress messages

## Pro Tips

**Sequence matters** — always simplify after tests pass, before code review:
```
implement → test → simplify → review → merge
```

**Scope it explicitly** when working on large codebases:
```
/simplify [src/auth/token-manager.ts]
/simplify [recently modified files in src/api/]
```

**Pair with code-reviewer** — simplified code yields cleaner, more actionable review findings.

## Related Agents

- [Code Reviewer](/docs/engineer/agents/code-reviewer) - Quality gates after simplification is complete

## Key Takeaway

The code simplifier runs between implementation and review — producing cleaner, more readable code without altering behavior. It catches the over-engineering that tests can't see.
