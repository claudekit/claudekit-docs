---
title: "Tester Agent"
description: "Validate code quality through comprehensive testing, coverage analysis, and quality assurance."
section: marketing
category: agents
order: 10
---
# Tester Agent

> **Your quality guardian** - Ensures your code works before it breaks in production

## What This Agent Does

You just finished implementing email campaign automation. Code looks good, you tested it manually, everything works. You push to production and... emails aren't sending. The bug was in an edge case you didn't test manually.

**The Problem**: Manual testing misses edge cases. Shipping without comprehensive tests means bugs reach production. Writing tests yourself is tedious and time-consuming. You skip testing because it feels like extra work.

**The Solution**: The Tester Agent runs comprehensive test suites, analyzes coverage, validates error handling, checks performance, and ensures builds succeed—all automatically. You get confidence your code actually works, not just "works on my machine."

## Quick Start

Test your implementation:

```bash
# After implementing a feature
/test "Run full test suite and check coverage"
```

You'll get test results, coverage metrics, performance analysis, and actionable recommendations for missing tests.

## Capabilities

### Comprehensive Test Execution
Runs all relevant test suites:
- Unit tests for isolated components
- Integration tests for system interactions
- End-to-end tests for user workflows
- Performance and load tests
- Security and validation tests

### Coverage Analysis
Identifies untested code:
- Generates line, branch, and function coverage
- Highlights uncovered code paths
- Ensures coverage meets requirements (typically 80%+)
- Identifies critical paths lacking tests
- Suggests specific test cases to add

### Error Scenario Testing
Validates failure handling:
- Verifies error handling mechanisms
- Tests edge cases and boundary conditions
- Validates exception handling and messages
- Checks proper cleanup in error scenarios
- Tests invalid inputs and malformed data

### Performance Validation
Ensures code performs well:
- Runs performance benchmarks
- Measures test execution time
- Identifies slow-running tests
- Validates performance requirements met
- Checks for memory leaks or resource issues

### Build Process Verification
Confirms production readiness:
- Ensures build completes successfully
- Validates all dependencies resolve
- Checks for build warnings or deprecations
- Verifies production build configurations
- Tests CI/CD pipeline compatibility

## When to Use

Use the Tester Agent when you need to:
- Validate new feature implementations
- Check test coverage after code changes
- Ensure builds succeed before deployment
- Verify bug fixes don't introduce regressions
- Prepare for code reviews or PR submissions
- Confirm performance requirements are met

## Example Workflows

### Post-Implementation Testing

```bash
# After building email campaign feature
/test "Run tests for email campaign system"
```

**The tester will**:
1. Run `npm test` or appropriate test command
2. Execute all email-related test suites
3. Generate coverage report
4. Validate build succeeds
5. Check for slow tests
6. Identify gaps in test coverage
7. Report results with recommendations

**You'll get**:
```markdown
## Test Results Summary

### Overall Status: ✅ PASS
- Total tests: 142
- Passed: 140
- Failed: 0
- Skipped: 2
- Duration: 12.4s

### Coverage Metrics
- Line coverage: 87.3% ✅ (target: 80%)
- Branch coverage: 82.1% ✅ (target: 75%)
- Function coverage: 91.2% ✅ (target: 85%)

### Test Distribution
- Unit tests: 98 passed (6.2s)
- Integration tests: 42 passed (5.1s)
- E2E tests: 2 skipped (infrastructure not ready)

### Critical Issues
None - all tests passing

### Coverage Gaps
⚠️ Uncovered code paths:
- `lib/email/retry.ts` lines 45-52 (retry backoff logic)
- `lib/email/template.ts` lines 78-85 (error handling)

### Performance Analysis
- Slowest test: `email-campaign-integration.test.ts` (2.3s)
- Average test time: 87ms
- Performance: ✅ Within acceptable range

### Build Verification
✅ TypeScript compilation successful
✅ No type errors
✅ Production build complete (42s)
✅ Bundle size: 245KB (within limit)

### Recommendations
1. Add tests for retry backoff logic in `retry.ts`
2. Test error scenarios in `template.ts`
3. Unskip E2E tests once infrastructure ready
4. Consider splitting slow integration test

### Next Steps
Priority 1: Add missing coverage for retry logic
Priority 2: Complete E2E test infrastructure setup
```

### Coverage-Focused Analysis

```bash
/test "Generate coverage report and identify gaps"
```

**Provides**:
- Detailed coverage breakdown by file
- Specific line numbers of uncovered code
- Suggested test cases to improve coverage
- Critical paths requiring immediate testing
- Coverage trend over time

### Pre-Deployment Validation

```bash
/test "Full validation before production deployment"
```

**Checks**:
- All test suites pass
- Coverage meets minimum thresholds
- Build completes without errors
- No type errors or linting issues
- Performance benchmarks met
- Integration tests pass against staging

## Test Commands by Stack

The tester knows how to run tests for different stacks:

**JavaScript/TypeScript**:
```bash
npm test
npm run test:coverage
npm run build
```

**Python**:
```bash
pytest
python -m unittest discover
```

**Go**:
```bash
go test ./...
go test -cover
```

**Flutter/Dart**:
```bash
flutter analyze
flutter test --coverage
```

## Quality Standards Enforced

The tester ensures:
- All critical code paths have test coverage
- Both happy path and error scenarios tested
- Tests are isolated (no interdependencies)
- Tests are deterministic and reproducible
- Test data cleanup after execution
- Proper test naming and organization

## Test Report Format

Every test run produces:

```markdown
## Test Execution Report

### Test Results Overview
[Pass/fail counts, duration, success rate]

### Coverage Metrics
[Line, branch, function coverage with targets]

### Failed Tests
[Detailed error messages and stack traces if any]

### Performance Metrics
[Test execution time, slow tests identified]

### Build Status
[Compilation success, warnings, bundle size]

### Critical Issues
[Blocking issues needing immediate attention]

### Recommendations
[Prioritized testing improvements]

### Next Steps
[Specific actions to take]
```

## Integration with Development Workflow

The tester fits seamlessly:
- **Pre-Commit**: Run tests before committing changes
- **Pre-PR**: Validate tests pass before creating pull request
- **CI/CD**: Results inform pipeline decisions
- **Code Review**: Test reports guide review feedback

## Related Agents

- [Fullstack Developer](/docs/marketing/agents/fullstack-developer) - Implements code that tester validates
- [Git Manager](/docs/marketing/agents/git-manager) - Commits after tests pass
- [Project Manager](/docs/marketing/agents/project-manager) - Uses test results for completion verification

## Related Commands

- [`/test`](/docs/marketing/commands/test) - Run tests and generate report
- [`/coverage`](/docs/marketing/commands) - Check test coverage
- [`/build`](/docs/marketing/commands) - Verify build succeeds

## Tips

**Test Before Committing**: Make testing part of your workflow. Run tests before every commit to catch issues early.

**Don't Skip Failing Tests**: If a test fails, fix it or fix the code—never skip or comment out failing tests.

**Aim for 80%+ Coverage**: While 100% isn't necessary, 80%+ coverage catches most bugs. The tester identifies gaps to reach this threshold.

**Test Error Cases**: Happy path tests aren't enough. Test what happens when APIs fail, data is invalid, or resources are unavailable.

**Watch Performance**: Slow tests slow down development. The tester identifies slow tests so you can optimize them.

The Tester Agent makes quality assurance automatic. You ship confident your code works, because you've proven it with tests.
