---
title: Debugging
description: Systematic debugging framework ensuring root cause investigation before fixes
section: engineer
kit: engineer
category: skills
order: 20
published: true
---

# Debugging

Systematic debugging framework that ensures root cause investigation before implementing any fixes.

## Core Principle

**NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST**

Random fixes waste time and create new bugs. Find the root cause, fix at source, validate at every layer, verify before claiming success.

## When to Use

**Always use for:**
- Test failures, bugs, unexpected behavior
- Performance issues, build failures
- Integration problems
- Before claiming work complete

**Especially when:**
- Under time pressure or "quick fix" seems obvious
- Already tried multiple fixes
- Don't fully understand the issue
- About to claim success

## The Four Techniques

### 1. Systematic Debugging

Four-phase framework ensuring proper investigation:
- **Phase 1**: Root Cause Investigation (read errors, reproduce, check changes)
- **Phase 2**: Pattern Analysis (find working examples, compare differences)
- **Phase 3**: Hypothesis and Testing (form theory, test minimally)
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

## Common Use Cases

### Fixing Test Failures
"This test is failing with error X. Use the debugging skill to investigate the root cause before proposing a fix."

### Performance Debugging
"API endpoint is slow. Use debugging skill to trace the performance bottleneck systematically."

### Production Bug Investigation
"Users report feature X breaking. Use debugging skill to reproduce and investigate root cause."

## Red Flags

Stop and follow process if thinking:
- "Quick fix for now, investigate later"
- "Just try changing X and see if it works"
- "It's probably X, let me fix that"
- "Should work now" / "Seems fixed"
- "Tests pass, we're done"

**All mean**: Return to systematic process.

## Pro Tips

- Always complete Phase 1 investigation before attempting any fix
- Trace errors backward to their origin, not just where they surface
- Add validation at multiple layers to prevent recurrence
- **Not activating?** Say: "Use debugging skill to investigate this systematically"

## Related Skills

- [Problem Solving](/docs/skills/tools/problem-solving) - Structured approach to complex problems
- [Sequential Thinking](/docs/skills/tools/sequential-thinking) - Step-by-step reasoning

---

## Key Takeaway

 Always investigate root cause before fixing, validate at every layer, and verify with fresh evidence before claiming success.
