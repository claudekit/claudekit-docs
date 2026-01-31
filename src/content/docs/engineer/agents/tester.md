---
title: Tester Agent
description: Execute tests, validate implementations, and ensure code quality with comprehensive coverage analysis
section: engineer
kit: engineer
category: agents
order: 4
published: true
---

# Tester Agent

Automated test execution with 80%+ coverage targets, failure diagnosis, and build verification across all major frameworks.

## When to Use

- `/test` - Run full test suite with coverage
- `/fix [issue]` - Fix failing tests automatically
- Pre-commit/pre-push validation
- CI/CD pipeline verification

## Key Capabilities

| Category | Tools | Coverage Target |
|----------|-------|-----------------|
| **Unit Tests** | Jest, Vitest, pytest, cargo test, go test | 80%+ |
| **Integration** | API testing, DB interactions, service layers | 75%+ |
| **E2E** | Playwright, Cypress, Flutter integration tests | Critical paths |
| **Coverage** | Line, branch, function, statement analysis | 80%+ overall |
| **Build Check** | TypeScript, linting, bundle size, compilation | 100% pass |

## Common Use Cases

**Solo Dev - Pre-commit validation**
```
/test

Validates all changes before commit with coverage report
```

**QA Engineer - Bug regression prevention**
```
/test
Then review: Which areas have <80% coverage?
```

**Team Lead - PR validation**
```
/test
Verify: All tests pass + coverage targets met
```

**DevOps - CI/CD integration**
```
/test
Output: JSON report for pipeline integration
```

**Full-Stack Dev - Multi-framework testing**
```
/test

Runs: Flutter analyze + Jest + pytest in sequence
```

## Pro Tips

**Coverage-first approach**: Always check coverage gaps after test runs - uncovered code = untested risk
**Fail fast**: Use `/test` before starting new work to catch environment issues early
**Fix atomically**: Use `/fix [specific failure]` for targeted repairs instead of batch fixes
**Performance baseline**: Track test execution time - >60s indicates need for optimization
**Docker isolation**: Run tests in containers for consistency across team environments

## Related Agents

- [Debugger](/docs/engineer/agents/debugger) - Investigate test failures
- [Code Reviewer](/docs/engineer/agents/code-reviewer) - Pre-test code quality
- [Fullstack Developer](/docs/engineer/agents/fullstack-developer) - Post-test build verification

## Key Takeaway

Test execution isn't about 100% coverage - it's about 80%+ on critical paths with zero flaky tests. The tester agent finds failures, diagnoses root causes, and ensures your coverage targets before any commit goes through.
