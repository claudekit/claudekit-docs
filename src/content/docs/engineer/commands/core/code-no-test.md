---
title: /code:no-test
description: Implement plan without running tests
section: engineer
kit: engineer
category: commands/core
order: 23
published: true
---

# /code:no-test

Implement a plan without the testing phase.

## Syntax

```bash
/code:no-test [plan]
```

## Workflow Steps

| Step | Description | Output |
|------|-------------|--------|
| Step 0 | Plan detection & phase selection | `✓ Step 0: [Plan] - [Phase]` |
| Step 1 | Analysis & task extraction | `✓ Step 1: Found [N] tasks` |
| Step 2 | Implementation | `✓ Step 2: Implemented [N] files` |
| Step 3 | Code review | `✓ Step 3: Code reviewed - [0] critical issues` |
| Step 4 | User approval (blocking) | `✓ Step 4: User approved` |
| Step 5 | Finalize (status, docs, commit) | `✓ Step 5: Finalize complete` |

## Key Differences from /code

| Feature | /code | /code:no-test |
|---------|-------|---------------|
| Testing | Yes | No |
| Code Review | Yes | Yes |
| User Approval | Yes | Yes |

## When to Use

- Rapid prototyping
- Non-critical code changes
- When tests will be added later
- Time-constrained iterations

## Mandatory Subagents

- Step 3: `code-reviewer`
- Step 5: `project-manager`, `docs-manager`

## Blocking Gates

- Step 3: Critical issues must be 0
- Step 4: User must explicitly approve

---

**Key Takeaway**: Use `/code:no-test` for faster implementation cycles when testing can be deferred.
