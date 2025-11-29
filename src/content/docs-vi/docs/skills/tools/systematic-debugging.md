---
title: systematic-debugging
description: "Documentation for systematic-debugging
description:
section: docs
category: skills/tools
order: 12
published: true"
section: docs
category: skills/tools
order: 12
published: true
---

# systematic-debugging Skill

Four-phase debugging framework that ensures root cause investigation before attempting fixes. Never jump to solutions.

## Core Principle

**NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST**

Random fixes waste time and create new bugs. This skill enforces systematic investigation.

## When to Use

Use systematic-debugging for ANY technical issue:
- Test failures
- Bugs in production
- Unexpected behavior
- Performance problems
- Build failures
- Integration issues

**ESPECIALLY when:**
- Under time pressure
- "Quick fix" seems obvious
- You've tried multiple fixes
- Previous fix didn't work
- You don't fully understand the issue

## Quick Start

### Invoke the Skill

```
"Use systematic-debugging to investigate why tests are failing"
```

### What You Get

The skill guides you through:
1. Root cause investigation
2. Pattern analysis
3. Hypothesis testing
4. Fix implementation

## The Four Phases

### Phase 1: Root Cause Investigation

**BEFORE attempting ANY fix:**

1. **Read Error Messages Carefully**
   - Don't skip errors or warnings
   - They often contain exact solution
   - Read stack traces completely

2. **Reproduce Consistently**
   - Can you trigger it reliably?
   - What are exact steps?
   - If not reproducible → gather more data

3. **Check Recent Changes**
   - What changed that could cause this?
   - Git diff, recent commits
   - Dependencies, config changes

4. **Gather Evidence**
   - Add diagnostic logging
   - Check component boundaries
   - Verify data flow
   - Trace through system layers

5. **Trace Data Flow**
   - Where does bad value originate?
   - What called this with bad value?
   - Fix at source, not symptom

### Phase 2: Pattern Analysis

1. **Find Working Examples**
   - Locate similar working code
   - What works that's similar?

2. **Compare Against References**
   - Read reference implementation completely
   - Don't skim - understand fully

3. **Identify Differences**
   - List every difference
   - Don't assume "that can't matter"

4. **Understand Dependencies**
   - What components does this need?
   - What settings, config, environment?

### Phase 3: Hypothesis Testing

1. **Form Single Hypothesis**
   - State clearly: "I think X because Y"
   - Be specific, not vague

2. **Test Minimally**
   - Smallest possible change
   - One variable at a time
   - Don't fix multiple things

3. **Verify Before Continuing**
   - Did it work? → Phase 4
   - Didn't work? → New hypothesis
   - Don't add more fixes

### Phase 4: Implementation

1. **Create Failing Test**
   - Simplest reproduction
   - Automated if possible
   - MUST have before fixing

2. **Implement Single Fix**
   - Address root cause
   - ONE change at a time
   - No bundled refactoring

3. **Verify Fix**
   - Test passes?
   - Other tests OK?
   - Issue resolved?

4. **If Fix Doesn't Work**
   - Count: How many fixes tried?
   - If < 3: Return to Phase 1
   - If ≥ 3: Question architecture

## Red Flags - STOP

If you think:
- "Quick fix for now"
- "Just try changing X"
- "Add multiple changes"
- "Skip the test"
- "It's probably X"
- "I don't fully understand"
- "One more fix attempt" (after 2+)

**ALL mean: STOP. Return to Phase 1.**

## Common Use Cases

### Test Failure

```
"Use systematic-debugging to investigate test failure:
1. Read exact error message
2. Reproduce locally
3. Check recent code changes
4. Trace data flow
5. Find root cause
6. Create minimal failing test
7. Implement fix"
```

### Production Bug

```
"Use systematic-debugging for production bug:
- Gather error logs
- Reproduce in staging
- Check recent deployments
- Analyze error patterns
- Form hypothesis
- Test fix in staging
- Deploy with monitoring"
```

### Performance Issue

```
"Use systematic-debugging to investigate slow queries:
- Identify slow operations
- Check query patterns
- Analyze indexes
- Review recent changes
- Test optimization
- Verify improvement"
```

### Integration Failure

```
"Use systematic-debugging for API integration issue:
- Check both sides of integration
- Log request/response
- Verify data format
- Compare working examples
- Fix at source"
```

## Red Flags

Watch for these patterns:

**"Quick fix first, investigate later"**
→ Sets bad precedent, wastes time

**"Just try changing X"**
→ Random guessing, not systematic

**"Add multiple changes at once"**
→ Can't isolate what worked

**"Skip test, manually verify"**
→ Untested fixes don't stick

**"One more fix" (after 2+)**
→ Architecture problem, not implementation

## Example Session

**Wrong Approach:**
```
User: Tests failing
Dev: Let me try fixing the import
Dev: That didn't work, trying different config
Dev: Still failing, maybe it's the version
Dev: [2 hours later, still broken]
```

**Systematic Approach:**
```
User: Tests failing
Dev: Use systematic-debugging
Phase 1: Read error - "Module not found: ./utils"
Phase 1: Check recent changes - Moved utils folder
Phase 1: Root cause - Import path outdated
Phase 2: Find working imports in other files
Phase 3: Hypothesis - Update import path
Phase 4: Create test, fix import, verify
[15 minutes, fixed]
```

## Integration with Other Skills

Works with:
- **root-cause-tracing** - Trace through call stack
- **verification-before-completion** - Verify fix worked
- **defense-in-depth** - Add validation after fix

## Benefits

Using systematic-debugging:
- **15-30 min** to fix vs **2-3 hours** thrashing
- **95% first-time** fix rate vs **40%**
- **Near zero** new bugs vs common
- **Lower stress** - clear process

## Quick Examples

**Simple Bug:**
```
"Use systematic-debugging to investigate button not working"
```

**Complex Issue:**
```
"Use systematic-debugging for multi-service failure:
- Check each service layer
- Add diagnostic logging
- Trace request flow
- Identify failing component
- Fix root cause"
```

**Performance:**
```
"Use systematic-debugging to find why page loads slowly:
- Measure load time
- Check network requests
- Analyze bundle size
- Profile JavaScript
- Optimize bottleneck"
```

## Key Takeaways

1. **Always investigate before fixing**
2. **One change at a time**
3. **Test the fix**
4. **If 3+ fixes fail, question architecture**
5. **Systematic is faster than random**

## Next Steps

- [Root Cause Tracing](/docs/skills/)
- [Debugging Examples](/docs/use-cases/)
- [Testing Skills](/docs/agents/tester)

---

**Bottom Line:** systematic-debugging prevents random fixes. Find root cause first, fix once, move on.
