---
title: /cook:auto:parallel
description: Triển khai tính năng với thực thi song song sử dụng plan:parallel và các agent fullstack-developer
section: docs
category: commands/core
order: 51
published: true
---

# /cook:auto:parallel

Triển khai tính năng với thực thi song song. Tạo kế hoạch song song và khởi chạy nhiều agent fullstack-developer để triển khai các phase độc lập đồng thời.

## Cú pháp

```bash
/cook:auto:parallel [tasks]
```

## Khi nào sử dụng

- **Tính năng đa module**: Tính năng trải rộng nhiều khu vực độc lập
- **Ưu tiên tốc độ**: Khi triển khai nhanh quan trọng
- **Component độc lập**: Tính năng có ranh giới module rõ ràng
- **Tự động hóa hoàn toàn**: Không cần cổng phê duyệt

## Ví dụ nhanh

```bash
/cook:auto:parallel [implement user authentication and payment processing]
```

**Kết quả**:
```
Analyzing feature requirements...

Creating parallel plan...
Phases identified:
- Phase 1: Auth module (no deps)
- Phase 2: Payment module (no deps)
- Phase 3: Integration (depends on 1,2)

Launching parallel agents...

Wave 1 (Parallel):
[Agent 1] Auth module... ████████████ Complete (6 min)
[Agent 2] Payment module... ████████████ Complete (8 min)

Wave 2 (Sequential):
[Agent 3] Integration... ████████████ Complete (4 min)

Tests: 18/18 passed
Feature complete!
```

## Tham số

- `[tasks]`: Mô tả tính năng hoặc danh sách task (bắt buộc)

## Quy trình hoạt động

### Bước 1: Phân tích yêu cầu

```
Parsing feature: auth + payment processing

Components identified:
- Authentication (signup, login, sessions)
- Payment (Stripe integration, webhooks)
- Integration (protected checkout)
```

### Bước 2: Tạo kế hoạch song song

Gọi `/plan:parallel`:

```
Creating parallel plan...

## Dependency Graph
Phase 1: Auth (no deps)
Phase 2: Payment (no deps)
Phase 3: Integration (depends on: 1, 2)

## File Ownership Matrix
Phase 1: src/auth/**, src/middleware/auth.ts
Phase 2: src/payment/**, src/api/webhooks/**
Phase 3: src/checkout/**, src/pages/checkout.tsx
```

### Bước 3: Phân tích Dependency Graph

```
Parsing dependencies...

Wave 1: Phase 1, Phase 2 (parallel)
Wave 2: Phase 3 (after Wave 1)
```

### Bước 4: Thực thi các Phase song song

```
Launching fullstack-developer agents...

[Agent 1] Starting Phase 1: Auth module
[Agent 2] Starting Phase 2: Payment module

File ownership enforced:
- Agent 1: src/auth/**
- Agent 2: src/payment/**
```

### Bước 5: Theo dõi tiến độ

```
Progress:
[████████████] Agent 1: Complete (6 min)
[██████████──] Agent 2: 85% (7 min)

Wave 1: 1/2 complete
```

### Bước 6: Tích hợp kết quả

```
Wave 1 complete.

Executing Wave 2...
[Agent 3] Starting Phase 3: Integration
```

### Bước 7: Chạy test

```
Running tests...

Auth tests: 8/8 passed
Payment tests: 6/6 passed
Integration tests: 4/4 passed

Total: 18/18 passed
```

### Bước 8: Tạo báo cáo

```
═══════════════════════════════════════
        FEATURE COMPLETE
═══════════════════════════════════════

Feature: Auth + Payment Processing

Phases Completed:
✓ Phase 1: Auth module
✓ Phase 2: Payment module
✓ Phase 3: Integration

Files Changed: 24
Tests: 18/18 passed
Time: 14 minutes (vs ~25 min sequential)

Ready for PR.
═══════════════════════════════════════
```

## Quản lý Dependency

### Đọc Dependency Graph

Từ plan.md:

```markdown
## Dependency Graph

Phase 1: Auth Module (no deps)
Phase 2: Payment Module (no deps)
Phase 3: Integration (depends on: Phase 1, Phase 2)
Phase 4: E2E Tests (depends on: Phase 3)
```

### Xây dựng sóng thực thi

```
Wave Analysis:

Phase 1: No dependencies → Wave 1
Phase 2: No dependencies → Wave 1
Phase 3: Depends on 1,2 → Wave 2
Phase 4: Depends on 3 → Wave 3

Execution Order:
Wave 1: Phase 1 + Phase 2 (parallel)
Wave 2: Phase 3 (after Wave 1)
Wave 3: Phase 4 (after Wave 2)
```

## Điều phối Agent

### Quyền sở hữu file

Mỗi agent được cấp quyền truy cập file độc quyền:

```
Agent 1 (Auth):
├── src/auth/**
├── src/middleware/auth.ts
└── tests/auth/**

Agent 2 (Payment):
├── src/payment/**
├── src/api/webhooks/**
└── tests/payment/**

No overlap = No conflicts
```

### Timeout và xử lý lỗi

```
Agent configuration:
- Timeout: 15 minutes per agent
- Failure handling: Failed agents don't block others

If Agent 2 fails:
- Agent 1 continues to completion
- Wave 2 starts with Phase 3
- Failure reported in summary
```

## Ví dụ đầy đủ

### Kịch bản: Tính năng đa module

```bash
/cook:auto:parallel [implement user dashboard with profile, settings, notifications, and activity feed]
```

**Thực thi**:

```
Analyzing feature...

Components:
- User profile (view, edit)
- Settings (preferences, security)
- Notifications (list, read/unread)
- Activity feed (timeline)

Creating parallel plan...

## Dependency Graph
Phase 1: Profile module (no deps)
Phase 2: Settings module (no deps)
Phase 3: Notifications (no deps)
Phase 4: Activity feed (no deps)
Phase 5: Dashboard integration (depends on: 1,2,3,4)

## File Ownership Matrix
Phase 1: src/profile/**
Phase 2: src/settings/**
Phase 3: src/notifications/**
Phase 4: src/activity/**
Phase 5: src/dashboard/**, src/pages/dashboard.tsx

Launching agents...

Wave 1 (4 parallel agents):
[Agent 1] Profile... ████████████ Complete (5 min)
[Agent 2] Settings... ████████████ Complete (6 min)
[Agent 3] Notifications... ████████████ Complete (4 min)
[Agent 4] Activity feed... ████████████ Complete (7 min)

Wave 2 (sequential):
[Agent 5] Dashboard integration... ████████████ Complete (5 min)

Running tests...
All phases: 32/32 tests passed

═══════════════════════════════════════
        COMPLETE
═══════════════════════════════════════

Time: 12 minutes
Sequential estimate: ~27 minutes
Speedup: 2.25x

Files changed: 38
Tests passed: 32
Ready for review!
═══════════════════════════════════════
```

## Theo dõi tiến độ

Tích hợp TodoWrite:

```
Todo List:
[████████████] Phase 1: Profile - Complete
[████████████] Phase 2: Settings - Complete
[████████████] Phase 3: Notifications - Complete
[████████████] Phase 4: Activity - Complete
[██████████──] Phase 5: Dashboard - 90%
```

## Thực hành tốt nhất

### Định nghĩa ranh giới rõ ràng

```bash
# Tốt: Ranh giới module rõ ràng
/cook:auto:parallel [
  implement:
  1. User authentication (email, OAuth)
  2. Payment processing (Stripe)
  3. Email notifications (SendGrid)
]

# Khó khăn: Concern chồng chéo
/cook:auto:parallel [fix auth bugs and update payment UI]
```

### Kiểm tra kế hoạch trước

Nếu không chắc về song song hóa:

```bash
# Tạo kế hoạch trước để xem xét
/plan:parallel [your feature]

# Xem plan.md để kiểm tra dependency
cat plans/*/plan.md

# Sau đó thực thi
/code:parallel
```

## Các lệnh liên quan

- [/cook](/vi/docs/commands/core/cook) - Triển khai từng bước
- [/cook:auto](/vi/docs/commands/core/cook-auto) - Auto cook (tuần tự)
- [/plan:parallel](/vi/docs/commands/plan/parallel) - Tạo kế hoạch song song
- [/code:parallel](/vi/docs/commands/core/code-parallel) - Thực thi kế hoạch song song hiện có

---

**Điểm chính**: `/cook:auto:parallel` tăng tốc triển khai tính năng bằng cách chạy các phase độc lập song song, sử dụng quyền sở hữu file để ngăn xung đột giữa các agent đồng thời.
