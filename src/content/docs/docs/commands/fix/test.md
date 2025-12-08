---
title: /fix:test
description: Run test suite and fix issues automatically
section: docs
category: commands/fix
order: 8
published: true
---

# /fix:test

Run tests and automatically fix failing tests.

## Syntax

```bash
/fix:test [issues]
```

## Workflow

1. **Compile**: `tester` subagent compiles code, fixes syntax errors
2. **Run Tests**: Execute test suite, report results
3. **Debug**: `debugger` subagent finds root cause of failures
4. **Plan**: `planner` subagent creates fix plan
5. **Implement**: Main agent implements fixes
6. **Re-test**: Verify fixes work
7. **Review**: `code-reviewer` validates changes
8. **Repeat**: If still failing, loop from step 2

## Example

```bash
/fix:test

# Output:
# ✗ 3 tests failed
# - auth/login.test.js: Expected 200, got 401
#
# Debugging...
# Root cause: JWT secret not loaded in test env
#
# Planning fix...
# Implementing...
#
# ✓ All tests passing (48/48)
```

## When to Use

- Test suite failing
- CI tests broken
- After refactoring
- Before merging PR

## Related Commands

| Command | Use Case |
|---------|----------|
| `/test` | Just run tests (no fix) |
| `/fix:fast` | Quick fix for simple issues |
| `/fix:ci` | Fix CI/CD specific failures |

---

**Key Takeaway**: Use `/fix:test` to automatically debug and fix failing tests with full analysis cycle.
