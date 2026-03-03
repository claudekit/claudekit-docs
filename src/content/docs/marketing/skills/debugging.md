---
title: "ckm:debugging"
description: "Systematic debugging with root cause analysis, reproduction steps, fix verification, and prevention strategies for marketing tools."
section: marketing
category: skills
order: 71
---

# Debugging

> Diagnose and fix bugs systematically — from reproduction to root cause to verified resolution.

## What This Skill Does

**The Challenge**: Debugging without structure leads to symptom-chasing. Developers apply random fixes, break other things, and ship the same bugs again. AI-assisted debugging risks confidently proposing wrong fixes without understanding root cause.

**The Solution**: Debugging skill enforces a systematic methodology: reproduce first, isolate variables, identify root cause, apply minimal fix, verify, and document. Covers frontend, backend, database, and integration bugs for marketing tool stacks.

## Activation

**Implicit**: Activates when user reports an error, unexpected behavior, failing test, or broken feature.

**Explicit**: Activate via prompt:
```
Activate debugging skill to investigate [describe problem]
```

## Capabilities

### 1. Bug Reproduction Protocol
Establish a reliable reproduction case before touching code.

**Reproduction checklist**:
- Exact steps to reproduce (numbered)
- Expected behavior vs actual behavior
- Environment details (OS, browser, Node version, env vars)
- Frequency (always / intermittent / under load)
- First occurrence (when did it start?)

**Minimal reproduction**: Reduce to smallest possible case. If bug disappears in isolation, it's an interaction bug.

### 2. Root Cause Analysis
Five-layer investigation framework.

**Investigation layers**:
1. **Error message**: Read it literally. Stack trace points to origin.
2. **State at failure**: What data was present when it broke?
3. **Execution path**: Which code path led to failure?
4. **System boundary**: Network, database, external API involved?
5. **Timing**: Race condition? Cache stale? Session expiry?

**5 Whys technique**:
```
Bug: Users can't submit the contact form
Why? API returns 500
Why? Database query fails
Why? Required field `source` is NULL
Why? UTM parameter not captured on form load
Why? JavaScript runs before URL params parsed → Root cause
```

### 3. Fix Strategy
Apply the minimal effective fix.

**Fix principles**:
- Fix root cause, not symptom
- One change at a time — verify each
- Write regression test before fixing
- Document the "why" in a comment

### 4. Verification Checklist
Confirm fix without introducing regressions.

**Verify**:
- Original bug no longer reproduces
- Related edge cases still work
- Automated tests pass
- No new errors in logs

## Prerequisites

- Access to error logs, stack traces, or failing test output
- Ability to reproduce the issue locally or in staging

## Best Practices

**1. Never assume — verify**
State a hypothesis, test it, confirm or reject. Don't apply fixes based on intuition alone.

**2. Binary search for intermittent bugs**
For time-based issues, narrow the time window by halves until you isolate the change that introduced the bug.

**3. Log before and after**
Add strategic logging before touching code. Remove it after fix is confirmed.

## Common Use Cases

### Use Case 1: API Integration Failing in Production
**Scenario**: Marketing automation webhook returns 500 errors sporadically.

**Workflow**:
1. Pull error logs: `grep "500" logs/api-2026-03-03.log | head -50`
2. Find common pattern in failing requests (payload size? specific fields?)
3. Reproduce with same payload in staging
4. Add logging around external API call
5. Find timeout on large payloads → Increase timeout + add retry with backoff
6. Deploy fix, monitor error rate for 24 hours

### Use Case 2: Frontend Component Not Rendering
**Scenario**: Campaign dashboard chart shows blank on some browsers.

**Workflow**:
1. Check browser console for JS errors
2. Test in Chrome, Firefox, Safari — isolate browser
3. Check if charting library has browser-specific bug
4. Add try/catch around chart render with fallback message
5. Submit upstream bug report + workaround in code

## Troubleshooting

**Issue**: Cannot reproduce bug locally
**Solution**: Check environment differences (env vars, Node version, database seed data). Use production log replay.

**Issue**: Fix works in staging but breaks in production
**Solution**: Compare env variables between environments. Check for production-only race conditions under load.

## Related Skills

- [Code Review](/docs/marketing/skills/code-review) - Catch bugs before they ship
- [Backend Development](/docs/marketing/skills/backend-development) - Backend debugging
- [Frontend Development](/docs/marketing/skills/frontend-development) - Frontend debugging
- [Databases](/docs/marketing/skills/databases) - Database query debugging

## Related Commands

- `/ckm:analyze` - Analyze error patterns
- `/ckm:plan` - Plan fix implementation
