---
title: /review:codebase:parallel
description: Parallel edge case verification with multiple code reviewers
section: engineer
kit: engineer
category: commands/review
order: 2
published: true
---

# /review:codebase:parallel

Ultrathink edge cases exhaustively, then dispatch parallel code reviewers to verify handling.

## Syntax

```bash
/review:codebase:parallel [scope]
```

## Workflow

### 1. Ultrathink Edge Cases

Main agent deeply analyzes scope to LIST all potential edge cases:
- Null/undefined scenarios
- Boundary conditions (off-by-one, empty, max values)
- Error handling gaps
- Race conditions, async edge cases
- Input validation holes
- Security vulnerabilities
- Resource leaks
- Untested code paths

### 2. Categorize & Assign

Groups edge cases by scope (max 6 categories):
- Each category → one `code-reviewer` agent
- Each reviewer gets specific edge cases to verify

### 3. Parallel Verification

Launches N reviewers simultaneously to verify if edge cases are handled:
- ✅ Handled - Properly addressed in code
- ❌ Unhandled - Missing implementation
- ⚠️ Partial - Needs improvement

### 4. Aggregate Results

Collects verification reports:

```markdown
## Edge Case Verification Report

### Summary
- Total edge cases: 12
- Handled: 8 ✅
- Unhandled: 3 ❌
- Partial: 1 ⚠️

### Unhandled Edge Cases
| # | Edge Case | File | Status |
|---|-----------|------|--------|
| 1 | Empty password submission | auth.ts | ❌ |
| 2 | Token expiry during request | middleware.ts | ❌ |
```

### 5. Auto-Fix Pipeline

If unhandled/partial cases found:
- Prompts: "Fix with /fix --parallel?"
- If approved → Triggers parallel fix execution

## Example

```bash
/review:codebase:parallel auth module

# 1. Lists 12 edge cases:
#    - Empty password submission
#    - Token expiry during request
#    - Concurrent login attempts
#    - Invalid refresh token
#    ...

# 2. Categorizes into 3 groups:
#    - Login flow (4 cases)
#    - Token handling (5 cases)
#    - Session management (3 cases)

# 3. 3 reviewers verify in parallel

# 4. Reports: 8 handled, 3 unhandled, 1 partial

# 5. User approves → /fix --parallel executes

# 6. Commits changes
```

## Best For

- Security audits
- Pre-production reviews
- High-risk code paths
- API boundary validation
- Complex state management

## Related Commands

- [/review:codebase](/docs/engineer/commands/review/codebase) - Standard codebase review
- [/fix --parallel](/docs/engineer/commands/fix/parallel) - Parallel issue fixing
