---
title: "/fix"
description: "Intelligent issue routing to specialized fix commands based on problem type - types, UI, CI/CD, tests, logs, and complex issues"
section: marketing
category: commands
order: 14
published: true
---

> Intelligent routing to the right fix strategy

## Quick Start

```bash
/fix TypeScript compilation errors in campaign module
```

**What happens**:
1. Analyzes issue type (type errors detected)
2. Routes to `/fix:types`
3. Specialized agent fixes issues
4. Verifies with type checker

## Syntax

```bash
/fix [issues]
```

## Decision Tree

The `/fix` command intelligently routes to specialized variants:

| Issue Type | Keywords | Routes To | Agent |
|------------|----------|-----------|-------|
| Type Errors | type, typescript, tsc | `/fix:types` | type-fixer |
| UI/UX | ui, ux, design, layout, style | `/fix:ui` | ui-ux-designer |
| CI/CD | github actions, pipeline, workflow | `/fix:ci` | devops-specialist |
| Tests | test, spec, jest, vitest | `/fix:test` | tester |
| Logs | logs, error logs, stack trace | `/fix:logs` | debugger |
| Multiple | 2+ unrelated issues | `/fix:parallel` | multiple agents |
| Complex | architecture, refactor, system-wide | `/fix:hard` | architect |
| Simple | single file, small bug | `/fix:fast` | generalist |

## Examples

### Example 1: Type Errors

**Input**:
```bash
/fix TypeScript compilation errors
```

**Routes to**: `/fix:types`

**Output**:
```markdown
✓ Analyzed: 14 type errors in 6 files
✓ Fixed: All 14 errors resolved
✓ Verified: tsc passes with 0 errors

Fixed files:
- lib/campaign/manager.ts (3 errors)
- lib/email/sender.ts (5 errors)
- components/CampaignCard.tsx (4 errors)
- types/campaign.ts (2 errors)

Total time: 47 seconds
```

### Example 2: UI Issues

**Input**:
```bash
/fix Button not responsive on mobile devices
```

**Routes to**: `/fix:ui`

**Output**:
```markdown
✓ ui-ux-designer: Issue analyzed
✓ Fixed: Mobile responsiveness added
✓ Verified: Tested on viewport 375px-768px

Changes:
- Added responsive classes to Button component
- Fixed padding on mobile (<640px)
- Adjusted font size for small screens
- Tested touch targets (min 44x44px)

Files modified: components/Button.tsx
```

### Example 3: CI/CD Failures

**Input**:
```bash
/fix GitHub Actions deployment pipeline failing
```

**Routes to**: `/fix:ci`

**Output**:
```markdown
✓ Pipeline analyzed: Build stage failing
✓ Root cause: Node version mismatch
✓ Fixed: Updated workflow to Node 20
✓ Verified: Build passes

Changes:
- Updated .github/workflows/deploy.yml (Node 18 → 20)
- Removed deprecated npm commands
- Added caching for node_modules

Re-run pipeline: Build now passes ✓
```

### Example 4: Multiple Issues

**Input**:
```bash
/fix Type errors in auth module + UI bugs in dashboard + test failures
```

**Routes to**: `/fix:parallel`

**Output**:
```markdown
✓ Spawned 3 agents in parallel:
   - Agent 1: Type errors (fix:types)
   - Agent 2: UI bugs (fix:ui)
   - Agent 3: Test failures (fix:test)

Results (parallel execution, 2min 15sec):
✓ Agent 1: 8 type errors fixed
✓ Agent 2: 3 UI bugs resolved
✓ Agent 3: 5 tests now passing

Total time: 2m 15s (vs 6m 45s sequential)
Time saved: 67%
```

## Variants

### /fix:fast
Quick fixes for simple issues:
```bash
/fix:fast Missing semicolon in utils.ts
```

### /fix:hard
Deep architectural fixes:
```bash
/fix:hard Refactor campaign architecture for scalability
```

### /fix:parallel
Multiple unrelated issues:
```bash
/fix:parallel Fix types + UI bugs + test failures
```

### /fix:types
TypeScript type errors only:
```bash
/fix:types
```

### /fix:ui
UI/UX issues:
```bash
/fix:ui [description]
```

### /fix:ci
CI/CD pipeline failures:
```bash
/fix:ci [github-actions-url]
```

### /fix:test
Test failures:
```bash
/fix:test [description]
```

### /fix:logs
Analyze error logs:
```bash
/fix:logs [description]
```

## Workflow Integration

```bash
# After /code if issues arise
/code plans/feature.md
# Tests fail or types error
/fix TypeScript errors + failing tests

# After /analyze identifies issues
/analyze campaigns
/fix Campaign analytics not tracking conversions

# Quick iteration
/cook add feature
# Minor issues
/fix:fast Issues from last commit
```

## Related Commands

- [/code](/docs/marketing/commands/code) - Implementation (includes testing)
- [/test](/docs/marketing/commands/test) - Run tests only
- [/review](/docs/marketing/commands/review) - Code quality check
- [/debug](/docs/marketing/commands/debug) - Deep root cause analysis

---

**Fix smart. Not hard.** Intelligent routing to the right solution strategy.
