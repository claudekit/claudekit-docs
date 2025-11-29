---
title: /code:parallel
description: Thực thi các phase song song hoặc tuần tự từ kế hoạch hiện có dựa trên phân tích dependency graph
section: docs
category: commands/core
order: 81
published: true
---

# /code:parallel

Thực thi kế hoạch với điều phối phase song song/tuần tự. Đọc dependency graph từ kế hoạch hiện có và thực thi các phase sử dụng agent fullstack-developer theo sóng tối ưu.

## Cú pháp

```bash
/code:parallel [plan-path]
```

## Khi nào sử dụng

- **Kế hoạch song song có sẵn**: Thực thi kế hoạch từ `/plan:parallel`
- **Thực thi nhận biết dependency**: Khi các phase có dependency
- **Dự án đa phase**: Triển khai phức tạp với nhiều giai đoạn
- **Thực thi tối ưu**: Tự động song song hóa khi có thể

## Ví dụ nhanh

```bash
/code:parallel @plans/251129-auth-system/plan.md
```

**Kết quả**:
```
Reading plan: plans/251129-auth-system/plan.md

Parsing dependency graph...
Phase 1: Auth module (no deps)
Phase 2: Session management (no deps)
Phase 3: OAuth providers (depends on: 1)
Phase 4: Integration (depends on: 1, 2, 3)

Building execution waves...
Wave 1: Phase 1 + Phase 2 (parallel)
Wave 2: Phase 3 (sequential)
Wave 3: Phase 4 (sequential)

Executing Wave 1...
[Agent 1] Auth module... ████████████ Complete
[Agent 2] Session management... ████████████ Complete

Executing Wave 2...
[Agent 3] OAuth providers... ████████████ Complete

Executing Wave 3...
[Agent 4] Integration... ████████████ Complete

All phases complete!
```

## Tham số

- `[plan-path]`: Đường dẫn đến plan.md (tùy chọn - tự động phát hiện kế hoạch đang hoạt động)

## Quy trình hoạt động

### Bước 1: Tải kế hoạch

```
Checking for plan...

Plan provided: plans/251129-auth-system/plan.md
OR
Auto-detected: plans/251129-auth-system/plan.md (from active-plan)
```

### Bước 2: Trích xuất Dependency Graph

Tìm phần "## Dependency Graph":

```markdown
## Dependency Graph

Phase 1: Auth module (no deps)
Phase 2: Session management (no deps)
Phase 3: OAuth providers (depends on: Phase 1)
Phase 4: Integration (depends on: Phase 1, Phase 2, Phase 3)
```

Đã phân tích:
```
Phase 1: dependencies = []
Phase 2: dependencies = []
Phase 3: dependencies = [1]
Phase 4: dependencies = [1, 2, 3]
```

### Bước 3: Xây dựng sóng thực thi

```
Analyzing dependencies...

Wave 1: Phases with no dependencies
→ Phase 1, Phase 2 (can run parallel)

Wave 2: Phases depending only on Wave 1
→ Phase 3 (depends on Phase 1)

Wave 3: Phases depending on Wave 2
→ Phase 4 (depends on all previous)

Execution plan:
Wave 1: [Phase 1, Phase 2] - Parallel
Wave 2: [Phase 3] - After Wave 1
Wave 3: [Phase 4] - After Wave 2
```

### Bước 4: Thực thi Wave 1 (Song song)

```
Launching Wave 1 agents...

[Agent 1] Phase 1: Auth module
  File ownership: src/auth/**
  Status: Running...

[Agent 2] Phase 2: Session management
  File ownership: src/session/**
  Status: Running...

Progress:
[██████████] Agent 1: Complete (6 min)
[██████████] Agent 2: Complete (5 min)

Wave 1 complete.
```

### Bước 5: Chờ Wave hoàn thành

```
Wave 1 results:
✓ Phase 1: Auth module - 8 files changed
✓ Phase 2: Session management - 5 files changed

All Wave 1 phases complete.
Proceeding to Wave 2...
```

### Bước 6-7: Thực thi các Wave còn lại

```
Executing Wave 2...
[Agent 3] Phase 3: OAuth providers
  Dependencies satisfied: Phase 1 ✓
  Status: Running...

[██████████] Agent 3: Complete (7 min)

Executing Wave 3...
[Agent 4] Phase 4: Integration
  Dependencies satisfied: Phase 1 ✓, Phase 2 ✓, Phase 3 ✓
  Status: Running...

[██████████] Agent 4: Complete (4 min)
```

### Bước 8: Tích hợp & Kiểm thử

```
All waves complete.

Running integration tests...
Tests: 24/24 passed

Summary:
- Phases executed: 4
- Waves: 3
- Total time: 16 minutes
- Sequential estimate: 28 minutes
- Speedup: 1.75x
```

## Định dạng Dependency Graph

Plan.md nên bao gồm:

```markdown
## Dependency Graph

Phase 1: [Phase Name] (no deps)
Phase 2: [Phase Name] (no deps)
Phase 3: [Phase Name] (depends on: Phase 1)
Phase 4: [Phase Name] (depends on: Phase 1, Phase 2, Phase 3)
```

Hoặc định dạng trực quan:

```markdown
## Dependency Graph

```
Phase 1 ──────┐
              ├──→ Phase 3 ──→ Phase 4
Phase 2 ──────┘
```
```

## Ma trận quyền sở hữu file

Plan.md có thể bao gồm quyền sở hữu file:

```markdown
## File Ownership Matrix

| Phase | Owned Files |
|-------|-------------|
| Phase 1 | src/auth/**, tests/auth/** |
| Phase 2 | src/session/**, tests/session/** |
| Phase 3 | src/oauth/**, tests/oauth/** |
| Phase 4 | src/integration/**, tests/e2e/** |
```

Ngăn xung đột giữa các agent song song.

## Sóng thực thi

### Wave song song

Nhiều phase với dependency đã thỏa mãn:

```
Wave 1:
├── Phase 1 (no deps) ─────────┐
│                              │── Parallel
└── Phase 2 (no deps) ─────────┘

[Both agents run simultaneously]
```

### Wave tuần tự

Một phase hoặc các phase có dependency mới:

```
Wave 2:
└── Phase 3 (depends on Phase 1)

[Waits for Wave 1, then runs Phase 3]
```

## Hành vi dự phòng

Nếu không tìm thấy dependency graph:

```
No "## Dependency Graph" section found.
Falling back to sequential execution...

Executing phases in order:
1. Phase 1
2. Phase 2
3. Phase 3
4. Phase 4
```

## Ví dụ đầy đủ

### Kịch bản: Thực thi kế hoạch E-commerce

```bash
/code:parallel @plans/251129-ecommerce/plan.md
```

**Nội dung kế hoạch**:
```markdown
# E-commerce Implementation Plan

## Dependency Graph

Phase 1: Product Catalog (no deps)
Phase 2: Shopping Cart (no deps)
Phase 3: User Auth (no deps)
Phase 4: Checkout (depends on: Phase 1, Phase 2, Phase 3)
Phase 5: Order Processing (depends on: Phase 4)

## File Ownership Matrix

| Phase | Owned Files |
|-------|-------------|
| Phase 1 | src/products/**, src/api/products/** |
| Phase 2 | src/cart/**, src/api/cart/** |
| Phase 3 | src/auth/**, src/api/auth/** |
| Phase 4 | src/checkout/**, src/pages/checkout/** |
| Phase 5 | src/orders/**, src/api/orders/** |
```

**Thực thi**:

```
═══════════════════════════════════════
        PARALLEL EXECUTION
═══════════════════════════════════════

Plan: E-commerce Implementation

Dependency Analysis:
Phase 1: no deps → Wave 1
Phase 2: no deps → Wave 1
Phase 3: no deps → Wave 1
Phase 4: deps [1,2,3] → Wave 2
Phase 5: deps [4] → Wave 3

Wave 1 (Parallel - 3 agents):
─────────────────────────────────────
[Agent 1] Product Catalog...
[Agent 2] Shopping Cart...
[Agent 3] User Auth...

Progress:
[██████████] Agent 1: Complete (8 min)
[██████████] Agent 2: Complete (6 min)
[██████████] Agent 3: Complete (7 min)

Wave 2 (Sequential):
─────────────────────────────────────
[Agent 4] Checkout...
Dependencies: ✓ Phase 1, ✓ Phase 2, ✓ Phase 3

[██████████] Agent 4: Complete (9 min)

Wave 3 (Sequential):
─────────────────────────────────────
[Agent 5] Order Processing...
Dependencies: ✓ Phase 4

[██████████] Agent 5: Complete (5 min)

═══════════════════════════════════════
        EXECUTION COMPLETE
═══════════════════════════════════════

Phases: 5/5 complete
Waves: 3
Time: 17 minutes
Sequential: ~35 minutes
Speedup: 2.06x

Tests: 45/45 passed
Files: 52 changed
═══════════════════════════════════════
```

## Thực hành tốt nhất

### Xác minh cấu trúc kế hoạch

Trước khi thực thi:
```bash
# Kiểm tra kế hoạch có dependency graph
cat plans/*/plan.md | grep -A 20 "Dependency Graph"
```

### Sử dụng với /plan:parallel

```bash
# Tạo kế hoạch tối ưu
/plan:parallel [your feature]

# Thực thi với điều phối song song
/code:parallel
```

### Tự động phát hiện

Nếu không cung cấp đường dẫn, sử dụng kế hoạch đang hoạt động:
```bash
/code:parallel
# Uses plan from .claude/active-plan
```

## Các lệnh liên quan

- [/code](/vi/docs/commands/core/code) - Thực thi kế hoạch tuần tự
- [/plan:parallel](/vi/docs/commands/plan/parallel) - Tạo kế hoạch song song
- [/cook:auto:parallel](/vi/docs/commands/core/cook-auto-parallel) - Lập kế hoạch + thực thi song song
- [/fix:parallel](/vi/docs/commands/fix/parallel) - Sửa lỗi song song

---

**Điểm chính**: `/code:parallel` thực thi kế hoạch triển khai với điều phối song song/tuần tự tối ưu, sử dụng dependency graph để tối đa hóa song song hóa trong khi tôn trọng dependency giữa các phase.
