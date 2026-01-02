---
title: /bootstrap
description: Tài liệu hướng dẫn cho lệnh bootstrap
section: engineer
kit: engineer
category: commands/core
order: 1
published: true
lang: vi
---

# /bootstrap

Khởi tạo các dự án mới theo phương pháp phát triển dựa trên đặc tả và dựa trên kiểm thử. Lệnh này hướng dẫn bạn qua các giai đoạn thu thập yêu cầu, nghiên cứu, lập kế hoạch và triển khai.

## Cú pháp

```bash
/bootstrap [mô-tả-dự-án]
```

## Cách thức hoạt động

Lệnh `/bootstrap` tuân theo một quy trình làm việc toàn diện:

### 1. Thu thập Yêu cầu (Tương tác)

Hệ thống sẽ đặt các câu hỏi lần lượt để hiểu đầy đủ các yêu cầu của bạn:

```
Bạn đang xây dựng loại ứng dụng nào?
→ REST API / Web App / Mobile App / CLI Tool

Sở thích về tech stack chính của bạn là gì?
→ Node.js / Python / Go / Rust

Bạn có cần cơ sở dữ liệu không?
→ PostgreSQL / MySQL / MongoDB / Không

Phương thức xác thực nào?
→ JWT / OAuth2 / Dựa trên Session / Không
```

### 2. Giai đoạn Nghiên cứu

Triệu tập các agent **researcher** để:
- Tìm kiếm các thực hành tốt nhất cho stack đã chọn
- Nghiên cứu các thư viện được khuyên dùng
- Xem xét các cân nhắc về bảo mật
- Xác định các mẫu (patterns) phổ biến

### 3. Giai đoạn Lập kế hoạch

Triệu tập agent **planner** để:
- Tạo kiến trúc chi tiết
- Xác định cấu trúc tệp tin
- Lập kế hoạch các bước triển khai
- Thiết kế chiến lược kiểm thử
- Tài liệu hóa các quyết định kỹ thuật

### 4. Giai đoạn Triển khai

Tự động thực hiện:
- Tạo cấu trúc dự án
- Triển khai các tính năng cốt lõi
- Tạo các tệp cấu hình
- Thiết lập hệ thống build
- Tạo các bài kiểm thử toàn diện

### 5. Giai đoạn Xác nhận

Chạy các bài kiểm thử để đảm bảo:
- Tất cả các tính năng hoạt động chính xác
- Các bài kiểm thử vượt qua
- Mã nguồn tuân thủ các tiêu chuẩn
- Tài liệu đầy đủ

## Ví dụ

### Cách sử dụng Cơ bản

```bash
/bootstrap [xây dựng một REST API để quản lý công việc]
```

**Điều gì xảy ra:**
1. Hỏi đáp tương tác về các yêu cầu
2. Nghiên cứu các thực hành tốt nhất cho REST API
3. Tạo kế hoạch triển khai
4. Tạo cấu trúc dự án
5. Triển khai các điểm cuối (endpoints - các hoạt động CRUD)
6. Tạo các bài kiểm thử
7. Tạo tài liệu API

### Với Tech Stack được chỉ định

```bash
/bootstrap [tạo một nền tảng blog với Next.js và PostgreSQL]
```

**Điều gì xảy ra:**
1. Xác nhận các lựa chọn công nghệ (Next.js, PostgreSQL)
2. Hỏi về các yêu cầu bổ sung (xác thực, bình luận, v.v.)
3. Nghiên cứu các thực hành tốt nhất cho Next.js 14 + PostgreSQL
4. Lập kế hoạch sơ đồ cơ sở dữ liệu
5. Triển khai các tính năng blog
6. Thiết lập Prisma ORM
7. Tạo các bài kiểm thử E2E

### Công cụ dòng lệnh (CLI Tool)

```bash
/bootstrap [xây dựng một công cụ CLI để quản lý các biến môi trường]
```

**Điều gì xảy ra:**
1. Hỏi về sở thích framework CLI
2. Nghiên cứu các thực hành tốt nhất cho CLI
3. Lập kế hoạch cấu trúc lệnh
4. Triển khai các lệnh
5. Thêm tài liệu hướng dẫn (help)
6. Tạo các bài kiểm thử unit

## Chế độ Tự động

Để khởi tạo dự án hoàn toàn tự động mà không cần hỏi đáp:

```bash
/bootstrap:auto [mô tả dự án chi tiết với tất cả các yêu cầu]
```

**Ví dụ:**

```bash
/bootstrap:auto [
  Xây dựng một REST API cho ứng dụng todo với:
  - Node.js + Express.js
  - Cơ sở dữ liệu PostgreSQL với Prisma ORM
  - Xác thực JWT
  - Các hoạt động CRUD cho công việc (tasks)
  - Quản lý người dùng
  - Xác thực đầu vào (validation) với Joi
  - Giới hạn tốc độ (rate limiting)
  - Bộ kiểm thử toàn diện với Jest
  - Tài liệu Swagger/OpenAPI
]
```

**Quan trọng:** Chế độ tự động yêu cầu một mô tả rất chi tiết bao gồm:
- Các công nghệ cụ thể (tech stack)
- Các yêu cầu về tính năng
- Phương thức xác thực
- Lựa chọn cơ sở dữ liệu
- Sở thích về kiểm thử
- Bất kỳ cân nhắc đặc biệt nào khác

## Cấu trúc được tạo ra

Sau khi chạy lệnh `/bootstrap`, bạn sẽ có:

```
my-project/
├── .claude/              # Cấu hình ClaudeKit
│   ├── commands/         # Các lệnh slash tùy chỉnh
│   ├── agents/           # Định nghĩa agent
│   └── workflows/        # Quy trình phát triển
├── src/                  # Mã nguồn
│   ├── routes/          # Các tuyến API (cho API)
│   ├── models/          # Các mô hình dữ liệu
│   ├── middleware/      # Middleware Express
│   ├── utils/           # Các tiện ích
│   └── server.js        # Điểm bắt đầu (entry point)
├── tests/               # Bộ kiểm thử
│   ├── unit/           # Kiểm thử unit
│   ├── integration/    # Kiểm thử tích hợp
│   └── e2e/            # Kiểm thử E2E
├── docs/                # Tài liệu
│   ├── api/            # Tài liệu API
│   ├── code-standards.md
│   ├── system-architecture.md
│   └── codebase-summary.md
├── plans/               # Các kế hoạch triển khai
├── .env.example         # Tệp mẫu môi trường
├── package.json         # Các phụ thuộc (dependencies)
├── tsconfig.json        # Cấu hình TypeScript
└── README.md           # Tệp hướng dẫn dự án
```

## Các tính năng

### Phát triển dựa trên Đặc tả (Spec-Driven Development)

Tạo các đặc tả chi tiết trước khi lập trình:
- Các quyết định kiến trúc được tài liệu hóa
- Các hợp đồng API được xác định
- Sơ đồ cơ sở dữ liệu được lập kế hoạch
- Các trường hợp kiểm thử được phác thảo

### Phát triển dựa trên Kiểm thử (Test-Driven Development)

Tạo các bài kiểm thử song song với quá trình triển khai:
- Kiểm thử unit cho các hàm
- Kiểm thử tích hợp cho API
- Kiểm thử E2E cho các quy trình công việc
- Độ bao phủ kiểm thử (coverage) > 80%

### Tích hợp sẵn các Thực hành tốt nhất

Tuân thủ các tiêu chuẩn ngành:
- Xử lý lỗi (error handling)
- Xác thực đầu vào
- Các biện pháp bảo mật
- Giới hạn tốc độ
- Ghi nhật ký (logging)
- Cấu hình môi trường

## Các tùy chọn Cấu hình

Tùy chỉnh việc khởi tạo thông qua hỏi đáp:

### Loại Ứng dụng
- REST API
- GraphQL API
- Ứng dụng Web
- Ứng dụng Di động
- Công cụ CLI
- Microservice

### Tech Stack
- Node.js (Express, Fastify, NestJS)
- Python (FastAPI, Django, Flask)
- Go (Gin, Echo)
- TypeScript
- Rust (Actix, Rocket)

### Cơ sở dữ liệu
- PostgreSQL
- MySQL
- MongoDB
- SQLite
- Không (stateless)

### Xác thực
- JWT
- OAuth2 (Google, GitHub)
- Dựa trên Session
- API Keys
- Không

### Các tính năng bổ sung
- Thời gian thực (WebSockets)
- Bộ nhớ đệm (Redis)
- Tải lên tệp tin
- Gửi email
- Các công việc định kỳ (scheduled jobs)

## Thực hành tốt nhất

### Cung cấp Mô tả Rõ ràng

✅ **Tốt:**
```bash
/bootstrap [xây dựng một REST API để quản lý kho hàng với xác thực người dùng và cập nhật tồn kho thời gian thực]
```

❌ **Mơ hồ:**
```bash
/bootstrap [làm một ứng dụng]
```

### Trả lời các câu hỏi một cách Chu đáo

Trong quá trình hỏi đáp:
- ✅ Nghĩ về các nhu cầu mở rộng
- ✅ Xem xét các yêu cầu bảo mật
- ✅ Lập kế hoạch cho việc kiểm thử
- ✅ Cụ thể về các tính năng

### Xem xét Kế hoạch đã được tạo

Trước khi quá trình triển khai bắt đầu:
1. Kiểm tra thư mục `plans/`
2. Xem xét các quyết định kiến trúc
3. Xác nhận danh sách tính năng khớp với mong đợi
4. Cung cấp phản hồi nếu cần

### Lặp lại các Yêu cầu

Nếu kết quả ban đầu chưa hoàn hảo:
```bash
# Xem xét những gì đã được tạo
ls src/

# Cung cấp phản hồi
"Mô hình người dùng cần có quyền truy cập dựa trên vai trò (role-based access control)"

# Hệ thống sẽ điều chỉnh tương ứng
```

## Các trường hợp sử dụng phổ biến

### Microservice

```bash
/bootstrap [tạo một microservice xử lý thanh toán tích hợp với Stripe]
```

### Ứng dụng Full-Stack

```bash
/bootstrap [xây dựng một nền tảng mạng xã hội với các bài đăng, bình luận và lượt thích]
```

### API Gateway

```bash
/bootstrap [triển khai một API gateway với xác thực và giới hạn tốc độ]
```

### Background Worker

```bash
/bootstrap [tạo một bộ xử lý công việc chạy ngầm để gửi email]
```

## Xử lý sự cố

### Quá nhiều câu hỏi

**Vấn đề:** Quá trình hỏi đáp diễn ra quá lâu

**Giải pháp:** Sử dụng `/bootstrap:auto` với mô tả chi tiết

### Chọn sai Tech Stack

**Vấn đề:** Hệ thống chọn công nghệ mà bạn không mong muốn

**Giải pháp:** Hãy nêu rõ ràng trong mô tả ban đầu hoặc trong quá trình hỏi đáp

### Thiếu tính năng

**Vấn đề:** Một số tính năng không được triển khai

**Giải pháp:** Thêm các tính năng sau khi bootstrap bằng lệnh `/cook`

### Kiểm thử thất bại

**Vấn đề:** Các bài kiểm thử được tạo ra không vượt qua

**Giải pháp:** Sử dụng `/fix:test` để chẩn đoán và sửa lỗi

## Sau khi Bootstrap

Sau khi dự án đã được khởi tạo:

```bash
# 1. Xem xét mã nguồn đã tạo
cat src/server.js

# 2. Kiểm tra các bài kiểm thử vượt qua
npm test

# 3. Cập nhật tài liệu
/docs:update

# 4. Thêm các tính năng bổ sung
/cook [thêm chức năng đặt lại mật khẩu]

# 5. Commit cấu trúc ban đầu
/git:cm
```

## Các bước tiếp theo

- [/cook](/docs/engineer/commands/core/cook) - Thêm tính năng mới
- [/plan](/docs/engineer/commands/core/plan) - Lập kế hoạch bổ sung
- [/test](/docs/engineer/commands/core/test) - Chạy bộ kiểm thử
- [/docs:update](/docs/engineer/commands/docs/update) - Cập nhật tài liệu

---

**Thông điệp chính**: `/bootstrap` xử lý toàn bộ quá trình khởi tạo dự án, từ việc thu thập yêu cầu đến mã nguồn đã được kiểm thử và tài liệu hóa, tuân theo các thực hành tốt nhất của ngành.
