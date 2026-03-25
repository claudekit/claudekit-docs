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

## Cognitive Framing

This agent operates as a **QA Lead performing systematic verification** — hunting untested code paths, coverage gaps, and edge cases that slip through normal development cycles.

## Behavioral Checklist

Before completing any task, this agent verifies:

- All changed files have corresponding test coverage
- Coverage gaps on critical code paths identified and flagged
- Edge cases for boundary conditions covered
- Error scenarios and exception paths tested
- Flaky tests detected and isolated
- Build verification passes (typecheck, lint, compile)
- Coverage targets met (80%+ overall)

## Diff-Aware Mode

By default, the tester agent analyzes the git diff and runs only the tests affected by recent changes. Five mapping strategies determine which tests to run:

| Strategy | Trigger |
|----------|---------|
| **Co-located** | Test file sits next to source file (`foo.ts` → `foo.test.ts`) |
| **Mirror directory** | Tests mirror source structure (`src/api/` → `tests/api/`) |
| **Import graph** | File is imported by a tested module (transitive impact) |
| **Config detection** | Config/infra files changed (`tsconfig`, `jest.config`, `package.json`) → full suite |
| **High fan-out** | File imported by many modules — runs broader suite |

**Auto-escalation to full suite** occurs when:
- More than 70% of total tests are mapped by the diff (overhead not worth it)
- Configuration files are modified (`package.json`, `tsconfig.json`, CI workflows, etc.) — config changes always trigger full suite

This keeps CI fast on small PRs while ensuring correctness on large changes.

## When to Use

- `/ck:test` - Run full test suite with coverage
- `/ck:fix [issue]` - Fix failing tests automatically
- Pre-commit/pre-push validation
- CI/CD pipeline verification

## Key Capabilities

| Category | Tools | Coverage Target |
|----------|-------|-----------------|
| **Unit Tests** | Jest, Vitest, pytest, cargo test, go test | 80%+ |
| **Integration** | API testing, DB interactions, service layers | Critical paths |
| **E2E** | Playwright, Cypress, Flutter integration tests | Critical paths |
| **Coverage** | Line, branch, function, statement analysis | 80%+ overall |
| **Build Check** | TypeScript, linting, bundle size, compilation | 100% pass |

## Common Use Cases

**Solo Dev - Pre-commit validation**
```
/ck:test

Validates all changes before commit with coverage report
```

**QA Engineer - Bug regression prevention**
```
/ck:test
Then review: Which areas have <80% coverage?
```

**Team Lead - PR validation**
```
/ck:test
Verify: All tests pass + coverage targets met
```

**DevOps - CI/CD integration**
```
/ck:test
Output: JSON report for pipeline integration
```

**Full-Stack Dev - Multi-framework testing**
```
/ck:test

Runs: Flutter analyze + Jest + pytest in sequence
```

## Pro Tips

**Coverage-first approach**: Always check coverage gaps after test runs - uncovered code = untested risk
**Fail fast**: Use `/ck:test` before starting new work to catch environment issues early
**Fix atomically**: Use `/ck:fix [specific failure]` for targeted repairs instead of batch fixes
**Performance baseline**: Track test execution time - >60s indicates need for optimization
**Docker isolation**: Run tests in containers for consistency across team environments

## Related Agents

- [Debugger](/docs/engineer/agents/debugger) - Investigate test failures
- [Code Reviewer](/docs/engineer/agents/code-reviewer) - Pre-test code quality
- [Fullstack Developer](/docs/engineer/agents/fullstack-developer) - Post-test build verification

## Key Takeaway

Test execution isn't about 100% coverage - it's about 80%+ on critical paths with zero flaky tests. The tester agent finds failures, diagnoses root causes, and ensures your coverage targets before any commit goes through.
