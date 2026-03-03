---
title: "ckm:code-review"
description: "Code review feedback processing, quality verification, and systematic improvement cycles for marketing tool implementations."
section: marketing
category: skills
order: 67
---

# `ckm:code-review`

> Apply structured code review to catch bugs, enforce quality standards, and improve maintainability before shipping.

## What This Skill Does

**The Challenge**: AI-generated code often works on the first run but contains subtle issues — security vulnerabilities, poor error handling, performance problems, or inconsistent patterns that accumulate into technical debt.

**The Solution**: Code Review skill provides a systematic review framework covering security, performance, maintainability, and correctness. Processes review feedback into actionable fix lists, verifies changes, and documents decisions for team knowledge sharing.

## Activation

**Implicit**: Activates automatically after implementation tasks complete in the primary workflow.

**Explicit**: Activate via prompt:
```
Activate code-review skill to review [file/feature/PR]
```

## Capabilities

### 1. Review Dimensions
Structured checklist covering all quality aspects.

**Security**:
- SQL injection, XSS, CSRF vulnerabilities
- Secrets in code (API keys, passwords)
- Input validation and sanitization
- Authentication and authorization checks

**Performance**:
- N+1 database query patterns
- Missing indexes on frequent queries
- Synchronous blocking in async contexts
- Memory leaks (event listeners, timers)

**Maintainability**:
- Function length > 40 lines (split candidate)
- File length > 200 lines (modularize)
- Duplicated logic (DRY violations)
- Missing error handling

**Correctness**:
- Edge cases (null, empty, zero, max values)
- Off-by-one errors
- Race conditions in async code
- Type safety violations

### 2. Severity Levels
Prioritize feedback by impact.

| Severity | Label | Action |
|----------|-------|--------|
| Critical | `[CRITICAL]` | Fix before merge — security or data loss |
| Major | `[MAJOR]` | Fix before merge — functional bugs |
| Minor | `[MINOR]` | Fix in same PR — quality issues |
| Suggestion | `[SUGGEST]` | Optional — improvements |

### 3. Feedback Processing
Convert review comments to actionable fix tasks.

**Review output format**:
```markdown
## Code Review: auth-service.ts

[CRITICAL] Line 45: SQL query uses string interpolation — SQL injection risk.
Fix: Use parameterized queries with Prisma or pg.

[MAJOR] Line 102: Missing await on async function — errors silently swallowed.
Fix: Add await or proper .catch() handler.

[MINOR] Lines 78-130: Function exceeds 50 lines — split into smaller units.
```

### 4. Verification Loop
Re-review after fixes to confirm resolution.

**Workflow**: Review → Fix → Re-review → Approve

## Prerequisites

- Access to code files or PR diff
- Understanding of project's tech stack and conventions

## Best Practices

**1. Review before testing**
Catch structural issues before running tests. Saves time on test debugging.

**2. One pass per dimension**
Do a security pass, then performance pass, then maintainability. Avoids context switching.

**3. Explain why, not just what**
"Use parameterized queries to prevent SQL injection" beats "Change this line".

## Common Use Cases

### Use Case 1: Post-Implementation Review
**Scenario**: Review backend API after implementation before writing tests.

**Workflow**:
1. Load implementation files
2. Run security dimension check
3. Run performance dimension check
4. Produce numbered fix list
5. Implement fixes
6. Re-verify critical and major items

### Use Case 2: Pull Request Review
**Scenario**: Review incoming PR from team member or AI agent.

**Workflow**:
1. Fetch PR diff: `gh pr diff 42`
2. Apply review checklist to changed files
3. Post review comments with severity labels
4. Request changes or approve

## Troubleshooting

**Issue**: Review produces too many minor suggestions, overwhelming developer
**Solution**: Filter to Critical and Major only for initial review. Schedule separate refactoring session for Minor items.

**Issue**: Same issues appear repeatedly after reviews
**Solution**: Add recurring issues to `CLAUDE.md` as coding standards. Prevents repeat violations.

## Related Skills

- [Debugging](/docs/marketing/skills/debugging) - Fix identified bugs
- [Backend Development](/docs/marketing/skills/backend-development) - Backend code standards
- [Frontend Development](/docs/marketing/skills/frontend-development) - Frontend code standards
- [Context Engineering](/docs/marketing/skills/context-engineering) - Code review with limited context

## Related Commands

- `/ckm:plan` - Plan refactoring from review findings
- `/ckm:brainstorm` - Explore architectural alternatives
