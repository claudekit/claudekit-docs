---
title: "Debug"
description: "Systematic debugging with root cause analysis, defense-in-depth validation, and verification protocols"
section: engineer
kit: engineer
category: skills
order: 25
---

Comprehensive debugging framework that combines systematic investigation, root cause tracing, and multi-layer validation. No fixes without understanding the root cause first.

## Core Principle

**NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST**

Random fixes waste time and create new bugs. Find the root cause, fix at source, validate at every layer, verify before claiming success.

## When to Use

**Always use for**: Test failures, bugs, unexpected behavior, performance issues, build failures, integration problems, before claiming work complete

**Especially when**: Under time pressure, "quick fix" seems obvious, tried multiple fixes, don't fully understand issue, about to claim success

## The Four Techniques

### 1. Systematic Debugging

Four-phase framework ensuring proper investigation:
- **Phase 1**: Root Cause Investigation (read errors, reproduce, check changes, gather evidence)
- **Phase 2**: Pattern Analysis (find working examples, compare, identify differences)
- **Phase 3**: Hypothesis and Testing (form theory, test minimally, verify)
- **Phase 4**: Implementation (create test, fix once, verify)

**Key rule**: Complete each phase before proceeding. No fixes without Phase 1.

### 2. Root Cause Tracing

Trace bugs backward through call stack to find original trigger. When error appears deep in execution, trace backward level-by-level until finding source where invalid data originated. Fix at source, not at symptom.

Includes `scripts/find-polluter.sh` for bisecting test pollution.

### 3. Defense-in-Depth

Validate at every layer data passes through. Make bugs impossible.

**Four layers**: Entry validation → Business logic → Environment guards → Debug instrumentation

### 4. Verification

Run verification commands and confirm output before claiming success.

**Iron law**: NO COMPLETION CLAIMS WITHOUT FRESH VERIFICATION EVIDENCE

Run the command. Read the output. Then claim the result.

## Usage

Activate automatically for any debugging task. This skill guides the debugging process from investigation to verified fix.

## Example Prompts

- "Tests are failing in the authentication module"
- "Users report the app crashes on login"
- "Performance degraded after recent deployment"
- "Build fails with cryptic error message"
- "Integration tests pass locally but fail in CI"

## Quick Reference

```
Bug → Systematic Debugging (Phase 1-4)
  Error deep in stack? → Root Cause Tracing (trace backward)
  Found root cause? → Defense-in-Depth (add layers)
  About to claim success? → Verification (verify first)
```

## Red Flags

Stop and follow process if thinking:
- "Quick fix for now, investigate later"
- "Just try changing X and see if it works"
- "It's probably X, let me fix that"
- "Should work now" / "Seems fixed"
- "Tests pass, we're done"

**All mean**: Return to systematic process.

## Related Skills

- [Fix](/docs/engineer/skills/fix) - Complete bug fixing workflow with intelligent routing
- [Context Engineering](/docs/engineer/skills/context-engineering) - For complex debugging requiring context optimization
