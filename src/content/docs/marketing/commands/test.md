---
title: "/ckm:test"
description: "Run test suites and analyze results with tester agent - no implementation, only testing and reporting"
section: marketing
category: commands
order: 18
published: true
---

> Run tests and analyze results (no implementation)

## Quick Start

```bash
/ckm:test
```

**What happens**:
1. Activates tester agent
2. Runs full test suite
3. Analyzes pass/fail results
4. Reports summary

**Important**: Does NOT implement fixes, only reports issues

## Syntax

```bash
/ckm:test
```

No arguments needed.

## Example Output

```markdown
✓ tester: Running test suite...

Test Results:
✓ Unit tests: 89 passed, 0 failed
✓ Integration tests: 23 passed, 0 failed
✗ E2E tests: 4 passed, 2 failed

Coverage:
- Statements: 84% (target: 80%)
- Branches: 78% (target: 75%)
- Functions: 91% (target: 85%)
- Lines: 86% (target: 80%)

Failed Tests:
1. E2E: Email campaign creation flow
   Error: Timeout waiting for API response

2. E2E: Analytics dashboard load
   Error: Chart data not rendering

Summary: 116/118 tests passing (98.3%)

Next: /ckm:fix Test failures in email campaign + analytics
```

## When to Use

### After Implementation
```bash
"Implement feature"
/ckm:test  # Verify everything works
```

### Before Commits
```bash
/ckm:test  # Ensure tests pass
/ckm:git cm  # Commit if all green
```

### Debugging
```bash
/ckm:fix feature not working
/ckm:test  # Verify fix worked
```

## Related Commands

- [/ckm:cook](/docs/engineer/skills/cook) - Includes testing automatically
- [/ckm:fix](/docs/marketing/commands/fix) - Fix test failures
- [/ckm:review](/docs/marketing/commands/review) - Code quality check

---

**Test first. Fix fast.** Know what's broken before you commit.
