---
title: "/ckm:fix"
description: "Intelligent issue routing to specialized fix commands based on problem type - types, UI, CI/CD, tests, logs, and complex issues"
section: marketing
category: commands
order: 14
published: true
---
> Intelligent routing to the right fix strategy

## Quick Start

```bash
/ckm:fix TypeScript compilation errors in campaign module
```

**What happens**:
1. Analyzes issue type (type errors detected)
2. Routes to type fixer (auto-detected)
3. Specialized agent fixes issues
4. Verifies with type checker

## Syntax

```bash
/ckm:fix [issues]
```

## Decision Tree

The `/ckm:fix` command intelligently routes to specialized variants:

| Issue Type | Keywords | Routes To | Agent |
|------------|----------|-----------|-------|
| Type Errors | type, typescript, tsc | `/ckm:fix` (auto-detect types) | type-fixer |
| UI/UX | ui, ux, design, layout, style | `/ckm:fix` (auto-detect UI) | ui-ux-designer |
| CI/CD | github actions, pipeline, workflow | `/ckm:fix` (auto-detect CI) | devops-specialist |
| Tests | test, spec, jest, vitest | `/ckm:fix` (auto-detect test) | tester |
| Logs | logs, error logs, stack trace | `/ckm:fix` (auto-detect logs) | debugger |
| Multiple | 2+ unrelated issues | `/ckm:fix --parallel` | multiple agents |
| Complex | architecture, refactor, system-wide | `/ckm:fix` (auto-detect complexity) | architect |
| Simple | single file, small bug | `/ckm:fix --quick` | generalist |

## Examples

### Example 1: Type Errors

**Input**:
```bash
/ckm:fix TypeScript compilation errors
```

**Routes to**: `/ckm:fix` (auto-detects type errors)

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
/ckm:fix Button not responsive on mobile devices
```

**Routes to**: `/ckm:fix` (auto-detects UI context)

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
/ckm:fix GitHub Actions deployment pipeline failing
```

**Routes to**: `/ckm:fix` (auto-detects CI context)

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
/ckm:fix Type errors in auth module + UI bugs in dashboard + test failures
```

**Routes to**: `/ckm:fix --parallel`

**Output**:
```markdown
✓ Spawned 3 agents in parallel:
   - Agent 1: Type errors (fix:types)
   - Agent 2: UI bugs (fix:ui)
   - Agent 3: Test failures (fix:test)

Results (parallel execution, 2min 15sec):
✓ Agent 1: 8 type errors fixed (auto-detected)
✓ Agent 2: 3 UI bugs resolved (auto-detected)
✓ Agent 3: 5 tests now passing (auto-detected)

Total time: 2m 15s (vs 6m 45s sequential)
Time saved: 67%
```

## Variants

### /ckm:fix --quick
Quick fixes for simple issues:
```bash
/ckm:fix --quick Missing semicolon in utils.ts
```

### /ckm:fix (complex)
Deep architectural fixes (auto-detects complexity):
```bash
/ckm:fix Refactor campaign architecture for scalability
```

### /ckm:fix --parallel
Multiple unrelated issues:
```bash
/ckm:fix --parallel Fix types + UI bugs + test failures
```

### /ckm:fix (type errors)
TypeScript type errors (auto-detected):
```bash
/ckm:fix
```

### /ckm:fix (UI issues)
UI/UX issues (auto-detected from context):
```bash
/ckm:fix [description]
```

### /ckm:fix (CI/CD)
CI/CD pipeline failures (auto-detected from context):
```bash
/ckm:fix [github-actions-url]
```

### /ckm:fix (test failures)
Test failures (auto-detected from context):
```bash
/ckm:fix [description]
```

### /ckm:fix (logs)
Analyze error logs (auto-detected from context):
```bash
/ckm:fix [description]
```

## Workflow Integration

```bash
# After /ckm:cook if issues arise
/ckm:cook plans/feature.md
# Tests fail or types error
/ckm:fix TypeScript errors + failing tests

# After /ckm:analyze identifies issues
/ckm:analyze campaigns
/ckm:fix Campaign analytics not tracking conversions

# Quick iteration
/ckm:cook add feature
# Minor issues
/ckm:fix --quick Issues from last commit
```

## Related Commands

- [/ckm:cook](/docs/engineer/skills/cook) - Implementation (includes testing)
- [/ckm:test](/docs/marketing/commands/test) - Run tests only
- [/ckm:review](/docs/marketing/commands/review) - Code quality check
- [/ck:debug](/docs/marketing/commands) - Deep root cause analysis

---

**Fix smart. Not hard.** Intelligent routing to the right solution strategy.
