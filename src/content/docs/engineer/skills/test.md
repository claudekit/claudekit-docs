---
title: "ck:test"
description: "Run unit, integration, e2e, and UI tests with coverage analysis, build verification, and QA reports"
section: engineer
kit: engineer
category: skills
order: 12
published: true
---

# Test

Comprehensive testing framework for code and UI. Runs the full test stack, analyzes failures, measures coverage, and produces QA reports.

## Core Principle

**NEVER IGNORE FAILING TESTS.**

No workarounds. No mocks to pass CI. No `--passWithNoTests`. Fix the root cause or document a legitimate skip with justification.

## What This Skill Does

Test orchestrates the complete quality verification loop: type checking, test execution, failure analysis, coverage measurement, UI validation, and report generation. Works with any test runner and integrates with the debug skill for failures requiring investigation.

## Workflows

### Code Testing

Supports all major test runners:

| Language | Runners |
|----------|---------|
| JavaScript/TypeScript | Jest, Vitest, Mocha |
| Python | pytest, unittest |
| Go | go test |
| Rust | cargo test |
| Dart/Flutter | flutter test |

### UI Testing

Delegates to the `chrome-devtools` skill for:
- Visual regression
- Interaction testing
- Accessibility checks
- Performance audits

### Report Generation

Produces structured QA reports at `{active-plan}/reports/tester-YYMMDD.md` covering: pass/fail summary, coverage metrics, failing test details, and recommendations.

## Working Process

```
Identify Scope → Typecheck First → Execute Suites
→ Analyze Failures → Coverage Report → UI Tests (if needed)
→ QA Report
```

1. **Identify Scope** — determine which suites are relevant (unit/integration/e2e/UI)
2. **Typecheck First** — run `tsc --noEmit` or equivalent before tests
3. **Execute Suites** — run test runner(s) for the project
4. **Analyze Failures** — for each failure: read error, trace root cause, recommend fix
5. **Coverage Report** — Istanbul/c8/pytest-cov/go cover output
6. **UI Tests** — browser-based validation via chrome-devtools skill
7. **QA Report** — write structured report with actionable findings

## Tools Integration

| Tool | Purpose |
|------|---------|
| Test runners | Execute suites (auto-detected from package.json / config files) |
| Istanbul/c8 | JS/TS coverage |
| pytest-cov | Python coverage |
| go cover | Go coverage |
| chrome-devtools skill | Browser/UI testing |
| ai-multimodal skill | Screenshot analysis for UI failures |
| debug skill | Root cause analysis for complex failures |

## Quality Standards

- **Critical paths**: 100% test coverage required
- **Happy + error paths**: both must be covered
- **Test isolation**: no shared state between tests
- **Deterministic**: tests must produce same result every run
- **Data cleanup**: tests clean up any created data
- **No flaky tests**: fix or remove, never retry-loop

## Diff-Aware Testing (v2.14.0+)

The tester agent integrates git diff analysis to run only tests affected by recent changes. Five mapping strategies determine which test files to include:

1. Direct file → test file mapping (e.g., `src/auth.ts` → `src/auth.test.ts`)
2. Import graph analysis (files that import changed modules)
3. Test fixture dependencies
4. Integration test scope detection
5. Full suite fallback (when scope cannot be determined)

This reduces test execution time during iteration while preserving full-suite runs for pre-push verification.

## Team Mode

In agent team sessions, the tester teammate:
- Owns all test files exclusively
- Reads implementation files but never edits them
- Reports coverage and failures back to lead

## Example Prompts

- "Run tests for the auth module and generate a coverage report"
- "Run the full test suite and fix any failures"
- "Run UI tests on the dashboard page and check for regressions"
- "Run integration tests and analyze why the payment tests are failing"

## Related Skills

- [Debug](/docs/engineer/skills/ck-debug) — activated for failures requiring root cause analysis
- [Cook](/docs/engineer/skills/cook) — cook's quality gate requires 100% test pass
- [Chrome DevTools](/docs/engineer/skills/chrome-devtools) — UI and browser testing
