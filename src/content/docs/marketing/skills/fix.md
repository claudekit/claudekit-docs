---
title: "ckm:fix"
description: "Bug fixing with intelligent complexity routing — from simple typo to deep system investigation, auto-selecting the right diagnostic approach."
section: marketing
kit: marketing
category: skills
order: 114
---

> Fix bugs efficiently with intelligent routing — simple fixes applied immediately, complex issues diagnosed systematically before touching code.

## What This Skill Does

**The Challenge**: Not all bugs are equal. A typo and a race condition require completely different approaches. Using heavy investigation for simple bugs wastes time; applying quick fixes to complex bugs creates more bugs.

**The Solution**: Fix skill analyzes bug reports, classifies complexity, and routes to the appropriate fixing strategy — direct fix for obvious issues, systematic investigation for complex ones. Prevents the common mistake of guessing at root causes for intermittent or systemic bugs.

## Activation

**Implicit**: Activates when user reports a bug, error, or unexpected behavior.

**Explicit**: Activate via prompt:
```
/fix the checkout button throws a 500 error when cart is empty
```

## Capabilities

### 1. Bug Classification
Assess complexity before deciding fix approach.

**Complexity tiers**:
| Tier | Characteristics | Approach |
|------|----------------|---------|
| Trivial | Typo, wrong value, obvious error | Direct fix |
| Simple | Single function, clear root cause | Fix + test |
| Medium | Multiple files, needs investigation | Diagnose → fix → test |
| Complex | Intermittent, cross-system, race condition | Deep investigation → targeted fix |

### 2. Error Message Parsing
Extract structured information from error messages and stack traces.

**Parsed elements**:
- Error type and message
- Stack trace file and line number
- Affected component or function
- Request context (URL, user, timestamp)

**Quick wins from error messages**:
- `Cannot read property 'X' of undefined` → Null check needed
- `ETIMEDOUT` → Network or connection pool issue
- `UNIQUE constraint failed` → Duplicate entry handling missing

### 3. Systematic Investigation
For complex bugs, trace from symptom to root cause.

**Investigation sequence**:
1. Reproduce the bug consistently
2. Identify the earliest point of failure in the call stack
3. Trace data flow to find where state diverges
4. Isolate the fix to minimum change
5. Verify fix doesn't break adjacent behavior

### 4. Regression Prevention
Ensure the fix includes safeguards against recurrence.

**Prevention measures**:
- Unit test covering the bug scenario
- Error handling for the failure mode
- Monitoring alert for the metric that should have caught this
- Code comment explaining non-obvious defensive code

## Prerequisites

- Error message, stack trace, or bug description
- Steps to reproduce (ideally)
- Environment where bug occurs (production, staging, local)

## Configuration

No configuration required. Operates through codebase analysis and targeted fixes.

**Debug skill integration**: For production issues, `fix` delegates investigation to `debugger` agent.

## Best Practices

**1. Reproduce before fixing**
A bug you can't reproduce is a bug you might not fix. Insist on reproduction steps.

**2. Fix the root cause, not the symptom**
Adding a null check around a symptom hides the real problem. Find where the null originates.

**3. One bug, one commit**
Keep bug fixes isolated. Bundling fixes with features makes bisecting future regressions impossible.

## Common Use Cases

### Use Case 1: API 500 Error
**Scenario**: Users report intermittent 500 errors on the payment endpoint.

**Investigation workflow**:
1. Check error logs for stack trace
2. Identify error type (DB timeout? Validation failure? Third-party API?)
3. Find earliest stack frame in application code
4. Check for missing null handling, race conditions, or missing error handling
5. Apply targeted fix + add error logging

**Output**: Fix with explanation + test case + monitoring recommendation.

### Use Case 2: UI State Bug
**Scenario**: Shopping cart count shows wrong number after adding items.

**Investigation workflow**:
1. Identify state update logic
2. Check if state is mutated vs replaced (common React bug)
3. Verify event handler calls correct state updater
4. Check for stale closure or missing dependency in useEffect

**Output**: State fix + unit test for cart count behavior.

## Troubleshooting

**Issue**: Fix works locally but not in production
**Solution**: Check environment differences (env vars, DB version, feature flags). Production bugs often have environmental root causes.

**Issue**: Fix breaks other tests
**Solution**: The fix may have exposed a pre-existing assumption. Review related test failures as new bugs, not regressions.

## Related Skills

- [Cook](/docs/marketing/skills/cook) - Full feature implementation
- [Sequential Thinking](/docs/marketing/skills/sequential-thinking) - Step-by-step bug investigation
- [Analytics](/docs/marketing/skills/analytics) - Monitor fix effectiveness

## Related Commands

- `/fix` — Primary bug fixing command
- `/ckm:sequential-thinking` — Deep investigation workflow
- `/ckm:cook` — Full implementation after fix
