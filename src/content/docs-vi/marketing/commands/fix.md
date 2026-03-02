---
lang: vi
title: "/ckm:fix"
description: "Định tuyến vấn đề thông minh tới các lệnh fix chuyên dụng dựa trên loại vấn đề - types, UI, CI/CD, tests, logs, và complex issues"
section: marketing
category: commands
order: 14
published: true
---

> Định tuyến thông minh tới chiến lược fix đúng

## Bắt Đầu Nhanh

```bash
/ckm:fix TypeScript compilation errors in campaign module
```

**Điều gì sẽ xảy ra**:
1. Phân tích loại vấn đề (type errors detected)
2. Định tuyến tới `/ckm:fix`
3. Agent chuyên dụng sửa vấn đề
4. Xác minh với type checker

## Cú Pháp

```bash
/ckm:fix [issues]
```

## Decision Tree

Lệnh `/ckm:fix` định tuyến thông minh tới các biến thể chuyên dụng:

| Loại Vấn Đề | Từ Khóa | Định Tuyến Tới | Agent |
|------------|----------|-----------|-------|
| Type Errors | type, typescript, tsc | `/ckm:fix` | type-fixer |
| UI/UX | ui, ux, design, layout, style | `/ckm:fix` | ui-ux-designer |
| CI/CD | github actions, pipeline, workflow | `/ckm:fix` | devops-specialist |
| Tests | test, spec, jest, vitest | `/ckm:fix` | tester |
| Logs | logs, error logs, stack trace | `/ckm:fix` | debugger |
| Multiple | 2+ unrelated issues | `/ckm:fix --parallel` | multiple agents |
| Complex | architecture, refactor, system-wide | `/ckm:fix` | architect |
| Simple | single file, small bug | `/ckm:fix --quick` | generalist |

## Ví Dụ

### Ví Dụ 1: Type Errors

**Đầu vào**:
```bash
/ckm:fix TypeScript compilation errors
```

**Định Tuyến Tới**: `/ckm:fix`

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
/ckm:fix Button not responsive on mobile devices
```

**Định Tuyến Tới**: `/ckm:fix`

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
/ckm:fix GitHub Actions deployment pipeline failing
```

**Định Tuyến Tới**: `/ckm:fix`

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
/ckm:fix Type errors in auth module + UI bugs in dashboard + test failures
```

**Định Tuyến Tới**: `/ckm:fix --parallel`

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

### /ckm:fix --quick
Quick fixes for simple issues:
```bash
/ckm:fix --quick Missing semicolon in utils.ts
```

### /ckm:fix (complex)
Deep architectural fixes:
```bash
/ckm:fix Refactor campaign architecture for scalability
```

### /ckm:fix --parallel
Multiple unrelated issues:
```bash
/ckm:fix --parallel Fix types + UI bugs + test failures
```

### /ckm:fix (auto-detects types)
TypeScript type errors only:
```bash
/ckm:fix TypeScript compilation errors
```

### /ckm:fix (auto-detects UI)
UI/UX issues:
```bash
/ckm:fix Button not responsive on mobile
```

### /ckm:fix (auto-detects CI)
CI/CD pipeline failures:
```bash
/ckm:fix GitHub Actions deployment pipeline failing
```

### /ckm:fix (auto-detects tests)
Test failures:
```bash
/ckm:fix Test failures in authentication module
```

### /ckm:fix (auto-detects logs)
Analyze error logs:
```bash
/ckm:fix API returning 500 errors according to logs
```

## Tích Hợp Quy Trình Làm Việc

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

## Lệnh Liên Quan

- [/ckm:cook](/docs/marketing/commands/cook) - Implementation (includes testing)
- [/ckm:test](/docs/marketing/commands/test) - Run tests only
- [/ckm:review](/docs/marketing/commands/review) - Code quality check
- [/debug](/docs/marketing/commands) - Deep root cause analysis

---

**Fix smart. Not hard.** Định tuyến thông minh tới chiến lược giải pháp đúng.
