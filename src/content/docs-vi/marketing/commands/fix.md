---
lang: vi
title: "/fix"
description: "Định tuyến vấn đề thông minh tới các lệnh fix chuyên dụng dựa trên loại vấn đề - types, UI, CI/CD, tests, logs, và complex issues"
section: marketing
category: commands
order: 14
published: true
---

> Định tuyến thông minh tới chiến lược fix đúng

## Bắt Đầu Nhanh

```bash
/fix TypeScript compilation errors in campaign module
```

**Điều gì sẽ xảy ra**:
1. Phân tích loại vấn đề (type errors detected)
2. Định tuyến tới `/fix`
3. Agent chuyên dụng sửa vấn đề
4. Xác minh với type checker

## Cú Pháp

```bash
/fix [issues]
```

## Decision Tree

Lệnh `/fix` định tuyến thông minh tới các biến thể chuyên dụng:

| Loại Vấn Đề | Từ Khóa | Định Tuyến Tới | Agent |
|------------|----------|-----------|-------|
| Type Errors | type, typescript, tsc | `/fix` | type-fixer |
| UI/UX | ui, ux, design, layout, style | `/fix` | ui-ux-designer |
| CI/CD | github actions, pipeline, workflow | `/fix` | devops-specialist |
| Tests | test, spec, jest, vitest | `/fix` | tester |
| Logs | logs, error logs, stack trace | `/fix` | debugger |
| Multiple | 2+ unrelated issues | `/fix --parallel` | multiple agents |
| Complex | architecture, refactor, system-wide | `/fix` | architect |
| Simple | single file, small bug | `/fix --quick` | generalist |

## Ví Dụ

### Ví Dụ 1: Type Errors

**Đầu vào**:
```bash
/fix TypeScript compilation errors
```

**Định Tuyến Tới**: `/fix`

**Kết Quả**:
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

### Ví Dụ 2: UI Issues

**Đầu vào**:
```bash
/fix Button not responsive on mobile devices
```

**Định Tuyến Tới**: `/fix`

**Kết Quả**:
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

### Ví Dụ 3: CI/CD Failures

**Đầu vào**:
```bash
/fix GitHub Actions deployment pipeline failing
```

**Định Tuyến Tới**: `/fix`

**Kết Quả**:
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

### Ví Dụ 4: Multiple Issues

**Đầu vào**:
```bash
/fix Type errors in auth module + UI bugs in dashboard + test failures
```

**Định Tuyến Tới**: `/fix --parallel`

**Kết Quả**:
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

## Biến Thể

### /fix --quick
Quick fixes for simple issues:
```bash
/fix --quick Missing semicolon in utils.ts
```

### /fix (complex)
Deep architectural fixes:
```bash
/fix Refactor campaign architecture for scalability
```

### /fix --parallel
Multiple unrelated issues:
```bash
/fix --parallel Fix types + UI bugs + test failures
```

### /fix (auto-detects types)
TypeScript type errors only:
```bash
/fix TypeScript compilation errors
```

### /fix (auto-detects UI)
UI/UX issues:
```bash
/fix Button not responsive on mobile
```

### /fix (auto-detects CI)
CI/CD pipeline failures:
```bash
/fix GitHub Actions deployment pipeline failing
```

### /fix (auto-detects tests)
Test failures:
```bash
/fix Test failures in authentication module
```

### /fix (auto-detects logs)
Analyze error logs:
```bash
/fix API returning 500 errors according to logs
```

## Tích Hợp Quy Trình Làm Việc

```bash
# After /cook if issues arise
/cook plans/feature.md
# Tests fail or types error
/fix TypeScript errors + failing tests

# After /analyze identifies issues
/analyze campaigns
/fix Campaign analytics not tracking conversions

# Quick iteration
/cook add feature
# Minor issues
/fix --quick Issues from last commit
```

## Lệnh Liên Quan

- [/cook](/docs/marketing/commands/cook) - Implementation (includes testing)
- [/test](/docs/marketing/commands/test) - Run tests only
- [/review](/docs/marketing/commands/review) - Code quality check
- [/debug](/docs/marketing/commands) - Deep root cause analysis

---

**Fix smart. Not hard.** Định tuyến thông minh tới chiến lược giải pháp đúng.
