---
title: /review:codebase
description: Phân tích codebase toàn diện với agent researcher, scout, và code-reviewer để đánh giá chất lượng
section: docs
category: commands/core
order: 72
published: true
---

# /review:codebase

Lệnh phân tích codebase đa agent. Quét toàn bộ codebase sử dụng các agent researcher, scout, và code-reviewer để đánh giá chất lượng, xác định technical debt, và tạo lộ trình cải thiện.

## Cú pháp

```bash
/review:codebase [tasks-or-prompt]
```

## Khi nào sử dụng

- **Onboarding**: Hiểu codebase mới
- **Trước Refactoring**: Đánh giá trước thay đổi lớn
- **Kiểm tra Technical Debt**: Xác định kho debt
- **Review kiến trúc**: Đánh giá pattern hiện tại
- **Kiểm tra chất lượng**: Đánh giá chất lượng code toàn diện

## Ví dụ nhanh

```bash
/review:codebase
```

**Kết quả**:
```
Starting codebase review...

Phase 1: Structure Scan
Analyzing directory structure...
Found: 234 files, 18 directories

Phase 2: Multi-Agent Exploration
Dispatching 5 scout agents...
[████████████████████] Complete

Phase 3: Pattern Analysis
Researcher analyzing architecture...
[████████████████████] Complete

Phase 4: Quality Review
Code-reviewer checking standards...
[████████████████████] Complete

Phase 5: Improvement Planning
Creating roadmap...
[████████████████████] Complete

Report: plans/reports/codebase-review-251129.md
```

## Tham số

- `[tasks-or-prompt]`: Lĩnh vực tập trung tùy chọn. Nếu để trống, review toàn bộ codebase.

## Quy trình hoạt động

### Agent được gọi

| Agent | Vai trò | Tập trung |
|-------|---------|-----------|
| scout (x5) | Khám phá | Khám phá song song theo thư mục |
| researcher | Phân tích | Pattern kiến trúc, best practice |
| code-reviewer | Review | Chất lượng code, tuân thủ tiêu chuẩn |
| planner | Kế hoạch | Tạo lộ trình cải thiện |

### Workflow

**Bước 1: Quét cấu trúc thư mục**

```
Scanning codebase...

src/
├── components/ (42 files)
├── hooks/ (12 files)
├── services/ (18 files)
├── utils/ (8 files)
└── pages/ (24 files)

Total: 234 files across 18 directories
```

**Bước 2: Dispatch agent Scout**

Năm scout song song khám phá các khu vực khác nhau:

```
Scout 1: src/components/**
Scout 2: src/hooks/** + src/utils/**
Scout 3: src/services/**
Scout 4: src/pages/**
Scout 5: tests/** + config files
```

**Bước 3: Researcher phân tích Pattern**

```
Analyzing architecture patterns...

Detected:
- Pattern: Feature-based organization
- State: Zustand stores per feature
- API: REST with React Query
- Styling: Tailwind CSS + CSS modules
```

**Bước 4: Code-Reviewer kiểm tra chất lượng**

```
Quality assessment...

Code Quality Metrics:
- Complexity: Medium (avg cyclomatic: 8)
- Duplication: Low (2.3%)
- Test Coverage: 67%
- Type Safety: High (strict mode)

Issues Found:
- 3 potential security issues
- 12 code style violations
- 5 performance concerns
```

**Bước 5: Planner tạo lộ trình**

```
Creating improvement roadmap...

Priority 1 (Critical):
- Fix security issues in auth module
- Add input validation to API endpoints

Priority 2 (High):
- Increase test coverage to 80%
- Refactor complex components

Priority 3 (Medium):
- Address code style violations
- Optimize bundle size
```

**Bước 6: Tạo báo cáo**

Tạo báo cáo markdown toàn diện.

## Lĩnh vực phân tích

### Tổ chức Code

- Pattern cấu trúc file
- Quy ước đặt tên
- Ranh giới module
- Pattern import/export

### Pattern kiến trúc

- Monolith vs microservices
- Cách tiếp cận state management
- Pattern thiết kế API
- Kiến trúc component

### Metrics chất lượng Code

- Cyclomatic complexity
- Phần trăm trùng lặp code
- Test coverage
- Mức độ type safety
- Coverage tài liệu

### Vấn đề bảo mật

- Lỗ hổng input validation
- Lỗ hổng authentication
- Lỗi authorization
- Lỗ hổng dependency

### Điểm nghẽn hiệu suất

- Vấn đề bundle size
- Vấn đề hiệu suất render
- Thời gian phản hồi API
- Tiềm ẩn memory leak

### Kho Technical Debt

- Phần code legacy
- Dependency lỗi thời
- Test thiếu
- Comment TODO/FIXME
- Pattern deprecated

## Kết quả

### Vị trí báo cáo

```
plans/reports/codebase-review-YYMMDD.md
```

### Các phần báo cáo

```markdown
# Codebase Review Report

## Executive Summary
- Overall health score
- Key findings
- Critical issues

## Structure Analysis
- Directory organization
- File distribution
- Naming patterns

## Architecture Overview
- Patterns detected
- Component relationships
- Data flow

## Quality Metrics
- Complexity scores
- Duplication analysis
- Coverage statistics

## Issues Inventory
### Critical
### High
### Medium
### Low

## Technical Debt
- Debt items
- Estimated effort
- Impact assessment

## Recommendations
### Immediate Actions
### Short-term Improvements
### Long-term Refactoring

## Improvement Roadmap
- Phase 1: Critical fixes
- Phase 2: Quality improvements
- Phase 3: Architecture evolution
```

## Ví dụ đầy đủ

### Kịch bản: Đánh giá trước Refactoring

```bash
/review:codebase [assess readiness for React 19 migration]
```

**Thực thi**:

```
Starting focused codebase review...
Focus: React 19 migration readiness

Phase 1: Structure Scan
Found: 156 React components, 24 hooks, 12 context providers

Phase 2: Scout Analysis
[Scout 1] Analyzing component patterns...
[Scout 2] Checking hook implementations...
[Scout 3] Reviewing state management...
[Scout 4] Examining data fetching...
[Scout 5] Checking build configuration...

Phase 3: Research
Comparing current patterns against React 19 requirements...

Phase 4: Quality Review
Checking for deprecated patterns...

Phase 5: Migration Planning
Creating migration roadmap...

═══════════════════════════════════════
        REVIEW SUMMARY
═══════════════════════════════════════

React 19 Migration Readiness: 72%

Blockers (Must Fix):
- 8 components using deprecated lifecycle methods
- 3 class components need conversion
- Legacy context API in 2 providers

Warnings (Should Fix):
- 12 components with potential Suspense issues
- 5 effects without cleanup
- Outdated React Query patterns

Ready (No Changes):
- 134 functional components
- 19 custom hooks
- Modern state management

Estimated Migration Effort:
- Critical fixes: 2 days
- Refactoring: 5 days
- Testing: 3 days
- Total: ~2 weeks

Report: plans/reports/codebase-review-251129.md
═══════════════════════════════════════
```

## Review tập trung

Chỉ định khu vực cho phân tích có mục tiêu:

```bash
# Tập trung bảo mật
/review:codebase [security audit of authentication system]

# Tập trung hiệu suất
/review:codebase [identify performance bottlenecks]

# Tập trung test
/review:codebase [assess test coverage gaps]

# Tập trung kiến trúc
/review:codebase [evaluate microservices boundaries]
```

## Thực hành tốt nhất

### Chạy trước thay đổi lớn

```bash
# Trước refactoring
/review:codebase

# Xem báo cáo
cat plans/reports/codebase-review-*.md

# Sau đó lập kế hoạch
/plan [refactor based on review findings]
```

### Kiểm tra sức khỏe định kỳ

Chạy định kỳ cho dự án đang tiến hành:

```bash
# Kiểm tra sức khỏe hàng tháng
/review:codebase [monthly quality assessment]
```

### Tập trung khi cần

```bash
# Full review cho dự án mới
/review:codebase

# Focused review cho mối quan tâm cụ thể
/review:codebase [API security]
```

## Các lệnh liên quan

- [/scout](/vi/docs/commands/core/scout) - Khám phá codebase nhanh
- [/scout:ext](/vi/docs/commands/core/scout-ext) - Khám phá với công cụ bên ngoài
- [/ask](/vi/docs/commands/core/ask) - Câu hỏi kiến trúc
- [/plan](/vi/docs/commands/plan) - Tạo kế hoạch cải thiện

---

**Điểm chính**: `/review:codebase` cung cấp phân tích đa agent toàn diện về codebase, xác định vấn đề chất lượng, technical debt, và tạo lộ trình cải thiện có thể hành động.
