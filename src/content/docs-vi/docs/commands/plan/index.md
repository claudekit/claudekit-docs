---
title: /plan
description: Phân tích thông minh độ phức tạp tác vụ và định tuyến đến quy trình lập kế hoạch fast hoặc hard với nâng cao prompt
section: docs
category: commands/plan
order: 1
published: true
---

# /plan

Bộ định tuyến lập kế hoạch thông minh. Phân tích độ phức tạp tác vụ, đặt câu hỏi làm rõ nếu cần, và định tuyến đến quy trình lập kế hoạch phù hợp (`/plan:fast` hoặc `/plan:hard`).

## Cú pháp

```bash
/plan [task]
```

## Khi nào sử dụng

- **Bắt đầu tính năng mới**: Trước khi triển khai bất kỳ chức năng quan trọng nào
- **Tác vụ phức tạp**: Khi không chắc tác vụ đơn giản hay phức tạp
- **Khởi động dự án**: Khi bắt đầu công việc trên dự án hoặc module mới
- **Thay đổi kiến trúc**: Trước khi refactor hoặc tái cấu trúc code

## Ví dụ nhanh

```bash
/plan [add user authentication with OAuth support]
```

**Kết quả**:
```
Analyzing task complexity...

Task: Add user authentication with OAuth support

Complexity Assessment:
- Multiple components: auth service, OAuth providers, sessions
- External dependencies: OAuth configuration, callback handling
- Security considerations: Token storage, CSRF protection

Decision: This task requires research and detailed planning.
→ Routing to /plan:hard

Enhancing prompt with additional context...
Activating planning skill...

[/plan:hard executes with enhanced prompt]
```

**Kết quả**: Tác vụ phức tạp được định tuyến đến `/plan:hard` với prompt đã nâng cao.

## Tham số

- `[task]`: Mô tả những gì bạn muốn lập kế hoạch (bắt buộc)

## Quy trình hoạt động

### 1. Kiểm tra trước khi tạo

Trước khi tạo kế hoạch mới, kiểm tra các kế hoạch đang hoạt động:

```
Checking for active plan...
Active plan found: plans/251128-user-api/plan.md

Continue with existing plan? [Y/n]
```

- **Y (mặc định)**: Truyền đường dẫn kế hoạch hiện có cho subcommand
- **n**: Tạo kế hoạch mới trong `plans/YYMMDD-HHMM-{task-slug}/`

### 2. Phân tích độ phức tạp

Đánh giá tác vụ theo nhiều yếu tố:

| Yếu tố | Đơn giản (→ fast) | Phức tạp (→ hard) |
|--------|-------------------|-------------------|
| Phạm vi | File/module đơn lẻ | Nhiều hệ thống |
| Phụ thuộc | Không hoặc ít | API, DB bên ngoài |
| Nghiên cứu | Không cần | Cần best practice |
| Quyết định | Cách tiếp cận rõ ràng | Nhiều lựa chọn hợp lệ |
| Rủi ro | Ảnh hưởng thấp | Bảo mật, toàn vẹn dữ liệu |

### 3. Câu hỏi làm rõ

Nếu yêu cầu không rõ ràng, đặt câu hỏi làm rõ:

```
Before planning, I need to clarify a few things:

1. What authentication methods do you need?
   [ ] Email/password
   [ ] OAuth (Google, GitHub)
   [ ] Magic links
   [ ] All of the above

2. Do you need role-based access control (RBAC)?

3. What's the expected user scale?
```

### 4. Quyết định định tuyến

Dựa trên phân tích, định tuyến đến planner phù hợp:

**Định tuyến đến `/plan:fast`**:
- Tác vụ nhỏ, được định nghĩa rõ
- Đường dẫn triển khai rõ ràng
- Không cần nghiên cứu
- Thay đổi component đơn lẻ

**Định tuyến đến `/plan:hard`**:
- Tác vụ phức tạp, đa component
- Cần nghiên cứu
- Nhiều cách tiếp cận hợp lệ
- Cân nhắc bảo mật hoặc hiệu suất

### 5. Nâng cao Prompt

Trước khi ủy quyền, nâng cao prompt với:

- Ngữ cảnh dự án từ `./docs/` (system-architecture, code-standards)
- Pattern codebase từ file gần đây
- Ràng buộc và yêu cầu liên quan
- Ngữ cảnh kế hoạch đang hoạt động (nếu tiếp tục)

### 6. Kích hoạt Skill

Kích hoạt skill `planning` để tạo kế hoạch có cấu trúc.

## Các bước quy trình

```
Bước 1: Kiểm tra kế hoạch đang hoạt động
        ↓
Bước 2: Phân tích độ phức tạp tác vụ
        ↓
Bước 3: Đặt câu hỏi làm rõ (nếu cần)
        ↓
Bước 4: Quyết định: fast vs hard
        ↓
Bước 5: Nâng cao prompt với ngữ cảnh
        ↓
Bước 6: Thực thi /plan:fast hoặc /plan:hard
        ↓
Bước 7: Kích hoạt planning skill
```

## Ví dụ đầy đủ

### Kịch bản: Lập kế hoạch API Endpoint mới

```bash
/plan [add product inventory management API]
```

**Luồng thực thi**:

```
Checking for active plan...
No active plan found.

Analyzing task complexity...

Task: Add product inventory management API

Factors analyzed:
✓ Scope: Multiple endpoints (CRUD + inventory tracking)
✓ Dependencies: Database schema changes needed
✓ Research: Inventory patterns (SKU, variants, stock levels)
✓ Decisions: Real-time vs batch inventory updates
✓ Risk: Data integrity for stock counts

Complexity Score: 7/10 (High)

Clarifying questions:

1. Do you need variant support (size, color, etc.)?
   > Yes, products have multiple variants

2. Real-time inventory updates or batch processing?
   > Real-time for point of sale

3. Multi-warehouse support?
   > Single warehouse for now, but design for future multi-warehouse

Decision: Complex task requiring research
→ Routing to /plan:hard

Enhancing prompt...
Added context:
- Existing product model structure
- Database schema patterns
- API conventions from code-standards.md

Executing /plan:hard with enhanced prompt...
Activating planning skill...

[/plan:hard creates detailed implementation plan]

Plan created: plans/251129-inventory-api/plan.md
```

## Ví dụ định tuyến

### Định tuyến đến /plan:fast

```bash
# Tác vụ đơn giản, rõ ràng
/plan [add pagination to products list]
/plan [fix date formatting in dashboard]
/plan [add loading spinner to submit button]
/plan [update error messages in validation]
```

### Định tuyến đến /plan:hard

```bash
# Tác vụ phức tạp, cần nghiên cứu
/plan [implement real-time notifications system]
/plan [add multi-tenant support to the platform]
/plan [migrate from REST to GraphQL]
/plan [implement end-to-end encryption for messages]
```

## Quản lý kế hoạch đang hoạt động

### Tiếp tục kế hoạch hiện có

```bash
/plan [add tests for auth module]
```

```
Active plan found: plans/251128-auth-system/plan.md
Phase 2 (testing) not yet started.

Continue with existing plan? [Y/n] Y

Adding test phase to existing plan...
→ Routing to /plan:fast (clear scope within existing plan)
```

### Tạo kế hoạch mới

```bash
/plan [completely new feature unrelated to current work]
```

```
Active plan found: plans/251128-auth-system/plan.md

Continue with existing plan? [Y/n] n

Creating new plan directory...
→ plans/251129-new-feature/

Analyzing complexity...
```

## Các lệnh liên quan

| Lệnh | Mô tả | Khi nào sử dụng |
|------|-------|-----------------|
| [/plan:fast](/vi/docs/commands/plan/fast) | Lập kế hoạch nhanh không nghiên cứu | Tác vụ đơn giản, rõ ràng |
| [/plan:hard](/vi/docs/commands/plan/hard) | Lập kế hoạch chi tiết có nghiên cứu | Tác vụ phức tạp |
| [/plan:parallel](/vi/docs/commands/plan/parallel) | Kế hoạch với giai đoạn thực thi song song | Thực thi đa agent |
| [/plan:two](/vi/docs/commands/plan/two) | So sánh hai cách triển khai | Quyết định kiến trúc |
| [/plan:ci](/vi/docs/commands/plan/ci) | Kế hoạch dựa trên lỗi CI/CD | Sửa lỗi pipeline |

## Thực hành tốt nhất

### Cung cấp ngữ cảnh

```bash
# Tốt: Cụ thể với ràng buộc
/plan [add search functionality using Elasticsearch, must support fuzzy matching and filters]

# Ít hữu ích: Mơ hồ
/plan [add search]
```

### Tin tưởng bộ định tuyến

Để `/plan` quyết định độ phức tạp:

```bash
# Để nó định tuyến
/plan [add caching layer]

# Đừng quyết định trước
/plan:hard [add caching layer]  # Có thể quá mức cần thiết
```

### Sử dụng kế hoạch đang hoạt động

Khi làm việc trên các tác vụ liên quan, tiếp tục kế hoạch hiện có:

```
Continue with existing plan? [Y/n] Y
```

Điều này giữ công việc liên quan được tổ chức trong một thư mục kế hoạch.

## Vấn đề thường gặp

### Định tuyến Hard thường xuyên

**Vấn đề**: Hầu hết tác vụ được định tuyến đến `/plan:hard`

**Giải pháp**: Chia tác vụ lớn thành phần nhỏ hơn
```bash
# Thay vì
/plan [build entire e-commerce platform]

# Chia nhỏ
/plan [add product catalog]
/plan [add shopping cart]
/plan [add checkout flow]
```

### Thiếu ngữ cảnh

**Vấn đề**: Kế hoạch không phản ánh pattern hiện có

**Giải pháp**: Đảm bảo `./docs/` được cập nhật
- `system-architecture.md` - Kiến trúc hiện tại
- `code-standards.md` - Quy ước coding

---

**Điểm chính**: `/plan` là điểm vào lập kế hoạch thông minh của bạn. Nó phân tích độ phức tạp, đặt câu hỏi đúng, và định tuyến đến quy trình lập kế hoạch phù hợp - để bạn có đủ kế hoạch cho mỗi tác vụ.
