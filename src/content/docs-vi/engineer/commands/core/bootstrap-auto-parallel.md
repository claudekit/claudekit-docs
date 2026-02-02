---
title: /bootstrap:auto:parallel
description: Khởi tạo dự án hoàn chỉnh với thực thi song song sử dụng các agent researcher, planner, và fullstack-developer
section: engineer
kit: engineer
category: commands/core
order: 41
published: true
lang: vi
---

# /bootstrap:auto:parallel

Khởi tạo dự án song song với điều phối đa agent. Tạo dự án hoàn chỉnh từ yêu cầu sử dụng researcher, planner, designer, và các agent triển khai làm việc theo sóng thực thi song song.

## Cú pháp

```bash
/bootstrap:auto:parallel [yêu-cầu-người-dùng]
```

## Khi nào sử dụng

- **Khởi động dự án mới**: Bắt đầu dự án từ đầu
- **Thử nghiệm khái niệm (PoC)**: Phát triển bản mẫu (prototype) nhanh
- **Microservices**: Tạo khung (scaffolding) cho nhiều dịch vụ
- **Tự động hóa hoàn toàn**: Khi không cần các bước phê duyệt trung gian
- **Ưu tiên tốc độ**: Tận dụng tối đa việc thực thi song song

## Ví dụ nhanh

```bash
/bootstrap:auto:parallel [xây dựng ứng dụng quản lý công việc với xác thực người dùng, cập nhật thời gian thực và giao diện web đáp ứng trên di động]
```

**Kết quả**:
```
Đang bắt đầu khởi tạo song song...

Sóng 1 (Song song):
├─ [researcher] Nghiên cứu tech stack...
└─ [ui-designer] Thiết kế hệ thống giao diện...

Sóng 2:
└─ [planner] Lập kế hoạch kiến trúc...

Sóng 3 (Song song):
├─ [fullstack-dev 1] Module xác thực...
├─ [fullstack-dev 2] CRUD công việc...
└─ [fullstack-dev 3] Cập nhật thời gian thực...

Sóng 4:
├─ [tester] Kiểm thử tích hợp...
└─ [docs-manager] Tài liệu hóa...

Dự án đã bàn giao: task-manager/
```

## Tham số

- `[yêu-cầu-người-dùng]`: Mô tả dự án mong muốn bằng ngôn ngữ tự nhiên (bắt buộc)

## Quy trình hoạt động

### Quy trình 10 bước

**Bước 1: Phân tích yêu cầu**
```
Đang phân tích yêu cầu...

Các tính năng được xác định:
- Xác thực người dùng
- Quản lý công việc (CRUD)
- Cập nhật thời gian thực
- Giao diện web đáp ứng (responsive)

Các ràng buộc:
- Stack hiện đại (suy luận)
- Sẵn sàng cho sản xuất (suy luận)
```

**Bước 2: Nghiên cứu Tech Stack**
```
[researcher] Đang phân tích các lựa chọn công nghệ...

Stack đề xuất:
- Frontend: Next.js 14 + TypeScript
- Backend: Node.js + PostgreSQL
- Real-time: WebSockets
- Auth: Better Auth
```

**Bước 3: Lập kế hoạch Kiến trúc**
```
[planner] Đang tạo kiến trúc...

Kiến trúc: Modular monolith
- /app - Các tuyến (routes) Next.js
- /lib - Logic nghiệp vụ
- /components - Các thành phần giao diện
- /api - Các tuyến API
```

**Bước 4: Thiết kế UI/UX (song song với bước 2-3)**
```
[ui-designer] Đang tạo hệ thống thiết kế...

Design tokens:
- Màu sắc, kiểu chữ, khoảng cách
- Các mẫu thành phần (components)
- Các điểm ngắt (breakpoints) cho responsive
```

**Bước 5: Tạo kế hoạch triển khai song song**
```
Đang tạo kế hoạch /plan:parallel...

Các giai đoạn được xác định:
- Giai đoạn 1: Xác thực (không phụ thuộc)
- Giai đoạn 2: CRUD Công việc (không phụ thuộc)
- Giai đoạn 3: Thời gian thực (phụ thuộc vào 2)
- Giai đoạn 4: Hoàn thiện giao diện (phụ thuộc vào 1, 2, 3)
```

**Bước 6: Giải quyết phụ thuộc (Dependency)**
```
Đang xây dựng các sóng thực thi...

Sóng 1: Giai đoạn 1 + Giai đoạn 2 (song song)
Sóng 2: Giai đoạn 3 (tuần tự)
Sóng 3: Giai đoạn 4 (tuần tự)
```

**Bước 7: Thực thi song song**
```
Đang khởi chạy các agent fullstack-developer...

[Agent 1] Giai đoạn 1: Module Xác thực
[Agent 2] Giai đoạn 2: CRUD Công việc

Tiến độ:
[██████████] Agent 1: Hoàn tất (8 phút)
[████████──] Agent 2: 80% (9 phút)
```

**Bước 8: Kiểm thử tích hợp (Integration Testing)**
```
[tester] Đang chạy kiểm thử tích hợp...

Kiểm thử: 24/24 đã vượt qua
Độ bao phủ: 78%
```

**Bước 9: Tài liệu hóa**
```
[docs-manager] Đang tạo tài liệu...

Đã tạo:
- README.md
- Tài liệu API
- Hướng dẫn phát triển
```

**Bước 10: Bàn giao dự án**
```
Dự án đã hoàn thành!
Vị trí: task-manager/
```

## Các sóng thực thi song song

```
Sóng 1 (Song song):
├── researcher: Nghiên cứu tech stack
└── ui-designer: Thiết kế hệ thống giao diện
                    │
                    ▼
Sóng 2 (Tuần tự):
└── planner: Lập kế hoạch kiến trúc
                    │
                    ▼
Sóng 3 (Song song):
├── fullstack-dev 1: Module xác thực
├── fullstack-dev 2: CRUD công việc
└── fullstack-dev 3: Thời gian thực
                    │
                    ▼
Sóng 4 (Tuần tự):
├── tester: Kiểm thử tích hợp
└── docs-manager: Tài liệu hóa
```

## Các Agent được triệu tập

| Agent | Vai trò | Sóng |
|-------|---------|------|
| researcher | Nghiên cứu tech stack | 1 |
| ui-designer | Thiết kế hệ thống giao diện | 1 |
| planner | Lập kế hoạch kiến trúc | 2 |
| fullstack-developer (x3) | Triển khai song song | 3 |
| tester | Kiểm thử tích hợp | 4 |
| docs-manager | Tài liệu hóa | 4 |

## Cấu trúc đầu ra (Output)

```
{tên-dự-án}/
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

### Kịch bản: Nền tảng Thương mại Điện tử

```bash
/bootstrap:auto:parallel [xây dựng nền tảng thương mại điện tử với danh mục sản phẩm, giỏ hàng, quy trình thanh toán và bảng điều khiển quản trị]
```

**Thực thi**:

```
═══════════════════════════════════════
        KHỞI TẠO SONG SONG
═══════════════════════════════════════

Yêu cầu:
- Danh mục sản phẩm
- Giỏ hàng
- Quy trình thanh toán
- Bảng điều khiển quản trị

Sóng 1: Nghiên cứu + Thiết kế (Song song)
─────────────────────────────────────
[researcher] Phân tích tech stack...
✓ Đề xuất: Next.js + Stripe + PostgreSQL

[ui-designer] Thiết kế hệ thống giao diện...
✓ Các mẫu TMĐT: Thẻ sản phẩm, giỏ hàng, thanh toán

Sóng 2: Kiến trúc
─────────────────────────────────────
[planner] Đang tạo kiến trúc...
✓ Cấu trúc TMĐT dạng module
✓ Đã xác định 4 module độc lập

Sóng 3: Triển khai (Song song)
─────────────────────────────────────
[fullstack-dev 1] Danh mục sản phẩm...
[fullstack-dev 2] Giỏ hàng...
[fullstack-dev 3] Thanh toán + Stripe...
[fullstack-dev 4] Bảng điều khiển quản trị...

Tiến độ:
[██████████] Agent 1: Hoàn tất (12 phút)
[██████████] Agent 2: Hoàn tất (8 phút)
[██████████] Agent 3: Hoàn tất (15 phút)
[██████████] Agent 4: Hoàn tất (14 phút)

Sóng 4: Kiểm thử + Tài liệu
─────────────────────────────────────
[tester] Kiểm thử tích hợp...
✓ 42/42 bài kiểm thử đã vượt qua

[docs-manager] Tài liệu hóa...
✓ README, tài liệu API, hướng dẫn quản trị

═══════════════════════════════════════
        DỰ ÁN ĐÃ HOÀN TẤT
═══════════════════════════════════════

Vị trí: ecommerce-platform/
Tệp tin: 87 tệp đã được tạo
Kiểm thử: 42/42 đã vượt qua
Độ bao phủ: 75%
Thời gian: 18 phút (so với ~45 phút nếu thực hiện tuần tự)

Các bước tiếp theo:
1. cd ecommerce-platform
2. npm install
3. npm run dev
═══════════════════════════════════════
```

## Các trường hợp sử dụng

### Ứng dụng Full-Stack

```bash
/bootstrap:auto:parallel [bảng điều khiển SaaS với quản lý người dùng, thanh toán và phân tích]
```

### Kiến trúc Microservices

```bash
/bootstrap:auto:parallel [microservices: auth-service, user-service, notification-service với API gateway dùng chung]
```

### Dự án Ưu tiên API (API-First)

```bash
/bootstrap:auto:parallel [REST API với đặc tả OpenAPI, xác thực JWT, giới hạn tốc độ và PostgreSQL]
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
  Ứng dụng quản lý công việc với:
  - Xác thực người dùng (email + Google OAuth)
  - Tổ chức dự án
  - Cộng tác thời gian thực
  - Đáp ứng trên di động
  - Hỗ trợ chế độ tối (dark mode)
]

# Kém hiệu quả: Mơ hồ
/bootstrap:auto:parallel [xây dựng ứng dụng công việc]
```

### Kiểm tra cấu trúc đầu ra

Sau khi hoàn tất bootstrap:
```bash
cd {tên-dự-án}
ls -la
cat README.md
```

## Các lệnh liên quan

- [/bootstrap](/docs/engineer/commands/core/bootstrap) - Khởi tạo với các bước phê duyệt
- [/bootstrap:auto](/docs/engineer/commands/core/bootstrap-auto) - Khởi tạo tự động (tuần tự)
- [/plan:parallel](/vi/docs/engineer/commands/plan/parallel) - Tạo kế hoạch thực thi song song
- [/cook --parallel](/docs/engineer/skills/cook) - Thực thi kế hoạch song song

---

**Thông điệp chính**: `/bootstrap:auto:parallel` khởi tạo các dự án hoàn chỉnh bằng cách sử dụng các sóng thực thi agent song song, giúp giảm đáng kể thời gian thiết lập dự án thông qua sự điều phối phối hợp giữa nhiều agent.
