---
title: systematic-debugging
description: Four-phase debugging framework that enforces root cause investigation before fixes - prevents random changes that waste time and create new bugs
section: engineer
kit: engineer
category: skills/tools
order: 12
published: true
---

# systematic-debugging

Four-phase debugging framework that enforces root cause investigation before attempting any fixes - turning hours of thrashing into 15-minute resolutions.

## Core Principle

**NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST**

Random fixes waste 2-3 hours thrashing. Systematic investigation takes 15-30 minutes and achieves 95% first-time fix rate. If you don't understand the root cause, you're guessing - and guessing introduces new bugs.

## When to Use

Always use for ANY technical issue:
- Test failures, bugs in production, unexpected behavior
- Performance problems, build failures, integration issues

Especially when:
- Under time pressure (systematic is FASTER than random)
- "Quick fix" seems obvious (usually wrong)
- You've tried multiple fixes already
- You don't fully understand the issue

## The Process

### 1. Root Cause Investigation (REQUIRED FIRST)

**Read error messages carefully** - Stack traces often contain exact solution
**Reproduce consistently** - Can you trigger it reliably? If not, gather more data first
**Check recent changes** - Git diff, dependencies, config changes
**Gather evidence** - Add diagnostic logging at component boundaries, trace data flow
**Trace to source** - Where does bad value originate? Fix source, not symptom

### 2. Pattern Analysis

**Find working examples** - Locate similar working code in codebase
**Compare references** - Read reference implementation COMPLETELY, understand fully
**Identify differences** - List every difference, don't assume "that can't matter"
**Check dependencies** - What components, settings, config, environment needed?

### 3. Hypothesis Testing

**Form single hypothesis** - "I think X because Y" (specific, not vague)
**Test minimally** - SMALLEST possible change, one variable at a time
**Verify before continuing** - Worked → Phase 4. Didn't work → NEW hypothesis (don't stack fixes)
**Count attempts** - If 3+ fixes failed → STOP, question architecture

### 4. Implementation

**Create failing test** - Simplest reproduction, automated if possible (MUST have before fixing)
**Implement single fix** - Address root cause, ONE change, no "while I'm here" improvements
**Verify completely** - Test passes? No other tests broken? Issue actually resolved?

## Common Use Cases

### Senior Backend Dev: Test Suite Failing After Dependency Update
**"Use systematic-debugging to investigate test failures: Read error messages completely, check what dependency changed, reproduce locally, trace data flow to find where new version breaks contract, create minimal failing test, fix root cause"**

### Frontend Engineer: Button Click Not Working
**"Use systematic-debugging for button not responding: Check browser console for errors, verify event handler attached, trace click event flow, compare with working buttons, identify missing handler or binding issue"**

### DevOps Engineer: Production API Returning 500 Errors
**"Use systematic-debugging for production 500s: Gather error logs, reproduce in staging, check recent deployments, analyze error patterns, trace request flow through services, identify failing component, fix at source"**

### Full-Stack Dev: Slow Page Load Performance
**"Use systematic-debugging to investigate slow page loads: Measure actual load time, check network waterfall, analyze bundle size, profile JavaScript execution, identify bottleneck, test optimization, verify improvement"**

### Integration Specialist: Third-Party API Integration Failing
**"Use systematic-debugging for API integration: Log request/response at boundary, verify data format matches contract, compare with working examples, check both sides of integration, trace to source of mismatch"**

## Pro Tips

**Red flags to STOP immediately:**
- "Quick fix for now" → Sets bad precedent
- "Just try changing X" → Random guessing
- "Add multiple changes" → Can't isolate what worked
- "Skip the test" → Untested fixes don't stick
- "One more fix" (after 2+) → Architecture problem

**If 3+ fixes failed:** Don't try more fixes. Each failure revealing new problem = architectural issue. Question fundamentals before continuing.

**Emergency = MORE systematic:** Time pressure makes random fixes tempting, but systematic is 8-12x faster than thrashing.

**Not activating?** Say: "Use systematic-debugging skill to investigate this issue - follow the four phases starting with root cause investigation"

## Related Skills

- [debugging](/docs/skills/tools/debugging) - General debugging skill
- [problem-solving](/docs/skills/tools/problem-solving) - Structured problem solving
- [sequential-thinking](/docs/skills/tools/sequential-thinking) - Step-by-step analysis

## Key Takeaway

Systematic debugging converts 2-3 hours of random fix attempts into 15-30 minutes of focused investigation. Always investigate root cause first, fix once, move on. If 3+ fixes fail, stop and question architecture - don't keep trying.
