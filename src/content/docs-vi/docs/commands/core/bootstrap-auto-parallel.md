---
title: /bootstrap:auto:parallel
description: Khởi tạo dự án hoàn chỉnh với thực thi song song sử dụng các agent researcher, planner, và fullstack-developer
section: docs
category: commands/core
order: 41
published: true
---

# /bootstrap:auto:parallel

Khởi tạo dự án song song với điều phối đa agent. Tạo dự án hoàn chỉnh từ yêu cầu sử dụng researcher, planner, designer, và các agent triển khai làm việc theo sóng thực thi song song.

## Cú pháp

```bash
/bootstrap:auto:parallel [user-requirements]
```

## Khi nào sử dụng

- **Khởi động dự án mới**: Bắt đầu dự án từ đầu
- **Proof of Concept**: Phát triển prototype nhanh
- **Microservices**: Scaffolding nhiều service
- **Tự động hóa hoàn toàn**: Khi không cần cổng phê duyệt
- **Ưu tiên tốc độ**: Song song hóa tối đa

## Ví dụ nhanh

```bash
/bootstrap:auto:parallel [build a task management app with user auth, real-time updates, and mobile-responsive UI]
```

**Kết quả**:
```
Starting parallel bootstrap...

Wave 1 (Parallel):
├─ [researcher] Tech stack research...
└─ [ui-designer] Design system...

Wave 2:
└─ [planner] Architecture planning...

Wave 3 (Parallel):
├─ [fullstack-dev 1] Auth module...
├─ [fullstack-dev 2] Task CRUD...
└─ [fullstack-dev 3] Real-time updates...

Wave 4:
├─ [tester] Integration tests...
└─ [docs-manager] Documentation...

Project delivered: task-manager/
```

## Tham số

- `[user-requirements]`: Mô tả dự án mong muốn bằng ngôn ngữ tự nhiên (bắt buộc)

## Quy trình hoạt động

### Workflow 10 bước

**Bước 1: Phân tích yêu cầu**
```
Parsing requirements...

Features identified:
- User authentication
- Task management (CRUD)
- Real-time updates
- Mobile-responsive UI

Constraints:
- Modern stack (inferred)
- Production-ready (inferred)
```

**Bước 2: Nghiên cứu Tech Stack**
```
[researcher] Analyzing tech options...

Recommended stack:
- Frontend: Next.js 14 + TypeScript
- Backend: Node.js + PostgreSQL
- Real-time: WebSockets
- Auth: Better Auth
```

**Bước 3: Lập kế hoạch kiến trúc**
```
[planner] Creating architecture...

Architecture: Modular monolith
- /app - Next.js routes
- /lib - Business logic
- /components - UI components
- /api - API routes
```

**Bước 4: UI/UX Design (song song với 2-3)**
```
[ui-designer] Creating design system...

Design tokens:
- Colors, typography, spacing
- Component patterns
- Responsive breakpoints
```

**Bước 5: Tạo kế hoạch triển khai song song**
```
Creating /plan:parallel plan...

Phases identified:
- Phase 1: Auth (no deps)
- Phase 2: Task CRUD (no deps)
- Phase 3: Real-time (depends on 2)
- Phase 4: UI polish (depends on 1,2,3)
```

**Bước 6: Giải quyết dependency**
```
Building execution waves...

Wave 1: Phase 1 + Phase 2 (parallel)
Wave 2: Phase 3 (sequential)
Wave 3: Phase 4 (sequential)
```

**Bước 7: Thực thi song song**
```
Launching fullstack-developer agents...

[Agent 1] Phase 1: Auth module
[Agent 2] Phase 2: Task CRUD

Progress:
[██████████] Agent 1: Complete (8 min)
[████████──] Agent 2: 80% (9 min)
```

**Bước 8: Integration Testing**
```
[tester] Running integration tests...

Tests: 24/24 passed
Coverage: 78%
```

**Bước 9: Tài liệu**
```
[docs-manager] Generating docs...

Created:
- README.md
- API documentation
- Development guide
```

**Bước 10: Bàn giao dự án**
```
Project complete!
Location: task-manager/
```

## Sóng thực thi song song

```
Wave 1 (Parallel):
├── researcher: Tech stack research
└── ui-designer: Design system
                    │
                    ▼
Wave 2 (Sequential):
└── planner: Architecture planning
                    │
                    ▼
Wave 3 (Parallel):
├── fullstack-dev 1: Auth module
├── fullstack-dev 2: Task CRUD
└── fullstack-dev 3: Real-time
                    │
                    ▼
Wave 4 (Sequential):
├── tester: Integration tests
└── docs-manager: Documentation
```

## Agent được gọi

| Agent | Vai trò | Wave |
|-------|---------|------|
| researcher | Nghiên cứu tech stack | 1 |
| ui-designer | Design system | 1 |
| planner | Lập kế hoạch kiến trúc | 2 |
| fullstack-developer (x3) | Triển khai song song | 3 |
| tester | Integration testing | 4 |
| docs-manager | Tài liệu | 4 |

## Cấu trúc output

```
{project-name}/
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── styles/
├── tests/
│   ├── unit/
│   └── integration/
├── docs/
│   ├── api.md
│   └── development.md
├── plans/
│   └── bootstrap-YYMMDD/
│       ├── plan.md
│       ├── research-report.md
│       └── design-spec.md
├── README.md
├── package.json
└── tsconfig.json
```

## Ví dụ đầy đủ

### Kịch bản: E-commerce Platform

```bash
/bootstrap:auto:parallel [build e-commerce platform with product catalog, shopping cart, checkout, and admin dashboard]
```

**Thực thi**:

```
═══════════════════════════════════════
        PARALLEL BOOTSTRAP
═══════════════════════════════════════

Requirements:
- Product catalog
- Shopping cart
- Checkout flow
- Admin dashboard

Wave 1: Research + Design (Parallel)
─────────────────────────────────────
[researcher] Tech stack analysis...
✓ Recommended: Next.js + Stripe + PostgreSQL

[ui-designer] Design system...
✓ E-commerce patterns: Product cards, cart, checkout

Wave 2: Architecture
─────────────────────────────────────
[planner] Creating architecture...
✓ Modular e-commerce structure
✓ 4 independent modules identified

Wave 3: Implementation (Parallel)
─────────────────────────────────────
[fullstack-dev 1] Product catalog...
[fullstack-dev 2] Shopping cart...
[fullstack-dev 3] Checkout + Stripe...
[fullstack-dev 4] Admin dashboard...

Progress:
[██████████] Agent 1: Complete (12 min)
[██████████] Agent 2: Complete (8 min)
[██████████] Agent 3: Complete (15 min)
[██████████] Agent 4: Complete (14 min)

Wave 4: Testing + Docs
─────────────────────────────────────
[tester] Integration tests...
✓ 42 tests passed

[docs-manager] Documentation...
✓ README, API docs, admin guide

═══════════════════════════════════════
        PROJECT COMPLETE
═══════════════════════════════════════

Location: ecommerce-platform/
Files: 87 files created
Tests: 42/42 passed
Coverage: 75%
Time: 18 minutes (vs ~45 min sequential)

Next steps:
1. cd ecommerce-platform
2. npm install
3. npm run dev
═══════════════════════════════════════
```

## Use Cases

### Ứng dụng Full-Stack

```bash
/bootstrap:auto:parallel [SaaS dashboard with user management, billing, and analytics]
```

### Kiến trúc Microservices

```bash
/bootstrap:auto:parallel [microservices: auth-service, user-service, notification-service with shared API gateway]
```

### Dự án API-First

```bash
/bootstrap:auto:parallel [REST API with OpenAPI spec, JWT auth, rate limiting, and PostgreSQL]
```

## So sánh

| Lệnh | Phê duyệt | Song song hóa | Tốc độ |
|------|-----------|---------------|--------|
| /bootstrap | Bắt buộc | Không | Chậm nhất |
| /bootstrap:auto | Không | Không | Trung bình |
| /bootstrap:auto:parallel | Không | Có | Nhanh nhất |

## Thực hành tốt nhất

### Yêu cầu chi tiết

```bash
# Tốt: Yêu cầu cụ thể
/bootstrap:auto:parallel [
  Task management app with:
  - User auth (email + Google OAuth)
  - Project organization
  - Real-time collaboration
  - Mobile-responsive
  - Dark mode support
]

# Kém hiệu quả: Mơ hồ
/bootstrap:auto:parallel [build a task app]
```

### Kiểm tra cấu trúc output

Sau bootstrap:
```bash
cd {project-name}
ls -la
cat README.md
```

## Các lệnh liên quan

- [/bootstrap](/vi/docs/commands/core/bootstrap) - Bootstrap với cổng phê duyệt
- [/bootstrap:auto](/vi/docs/commands/core/bootstrap-auto) - Auto bootstrap (tuần tự)
- [/plan:parallel](/vi/docs/commands/plan/parallel) - Tạo kế hoạch song song
- [/code:parallel](/vi/docs/commands/core/code-parallel) - Thực thi kế hoạch song song

---

**Điểm chính**: `/bootstrap:auto:parallel` tạo dự án hoàn chỉnh sử dụng sóng thực thi agent song song, giảm đáng kể thời gian thiết lập dự án thông qua điều phối đa agent phối hợp.
