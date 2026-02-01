---
title: Kỹ năng tạo kỹ năng (skill-creator)
description: Tài liệu hướng dẫn sử dụng kỹ năng skill-creator
section: engineer
kit: engineer
category: skills/tools
order: 15
published: true
lang: vi
---

# Kỹ năng tạo kỹ năng (skill-creator)

Tạo các kỹ năng tùy chỉnh để mở rộng khả năng của Claude với các kiến thức chuyên môn, quy trình công việc và tích hợp công cụ.

## Kỹ năng là gì?

Kỹ năng là các gói cung cấp cho Claude:
- Kiến thức chuyên biệt
- Các quy trình công việc từng bước
- Tích hợp công cụ
- Chuyên môn trong một lĩnh vực cụ thể
- Các tài nguyên đi kèm

## Khi nào nên sử dụng

Sử dụng skill-creator khi bạn cần:
- Kỹ năng đặc thù cho một dự án
- Quy trình công việc tùy chỉnh
- Kiến thức chuyên ngành
- Các quy trình có thể tái sử dụng
- Tích hợp công cụ
- Logic đặc thù của công ty

## Bắt đầu nhanh

### Cách gọi kỹ năng

```
"Sử dụng skill-creator để tạo kỹ năng tích hợp Stripe:
- Xử lý webhook
- Quản lý gói đăng ký
- Xử lý thanh toán
- Tuân thủ các phương pháp hay nhất"
```

### Kết quả nhận được

Skill-creator sẽ:
1. Đưa ra các câu hỏi làm rõ nhu cầu
2. Thiết kế cấu trúc kỹ năng
3. Tạo tệp SKILL.md
4. Thêm các tài nguyên đi kèm
5. Viết tài liệu hướng dẫn
6. Lưu vào thư mục `.claude/skills/`

## Các trường hợp sử dụng phổ biến

### Kỹ năng tích hợp API

```
"Sử dụng skill-creator để tạo kỹ năng cho Twilio API:
- Gửi tin nhắn SMS
- Thực hiện cuộc gọi
- Xử lý các phản hồi
- Quản lý lỗi"
```

### Tự động hóa quy trình công việc

```
"Sử dụng skill-creator cho quy trình triển khai (deployment):
- Xây dựng ứng dụng
- Chạy các bản kiểm thử
- Triển khai lên môi trường thử nghiệm (staging)
- Kiểm thử khói (smoke tests)
- Triển khai lên môi trường sản xuất"
```

### Kiến thức nội bộ công ty

```
"Sử dụng skill-creator cho các tiêu chuẩn lập trình của công ty:
- Cấu trúc mã nguồn
- Quy ước đặt tên
- Các mẫu xử lý lỗi
- Các yêu cầu kiểm thử"
```

### Xử lý dữ liệu

```
"Sử dụng skill-creator cho đường ống ETL:
- Trích xuất từ các nguồn
- Biến đổi dữ liệu
- Xác thực định dạng
- Tải vào điểm đích"
```

## Giải phẫu một Kỹ năng

### Cấu trúc SKILL.md

```markdown
---
name: tên-kỹ-năng
description: Kỹ năng này làm gì và khi nào nên sử dụng
---

# Tên Kỹ năng

Các chỉ dẫn mà Claude sẽ tuân theo khi kỹ năng này được kích hoạt.

## Khi nào nên sử dụng
Các kịch bản cụ thể

## Ví dụ
Các ví dụ sử dụng thực tế

## Phương pháp hay nhất
Các nguyên tắc cần tuân theo
```

### Các tài nguyên đi kèm

**Các kịch bản (scripts/)** (`scripts/`)
- Mã nguồn có thể thực thi
- Các hàm có thể tái sử dụng
- Các công cụ tự động hóa

**Tài liệu tham khảo** (`references/`)
- Tài liệu hướng dẫn
- Thông số kỹ thuật API
- Các ví dụ
- Các bản hướng dẫn

**Tài sản (Assets)** (`assets/`)
- Các bản mẫu (templates)
- Hình ảnh
- Mã nguồn mẫu (boilerplate)
- Các tệp cấu hình

## Ví dụ về các Kỹ năng cần tạo

### Tích hợp Framework

```
"Sử dụng skill-creator cho kỹ năng Vue.js:
- Các mẫu component
- Composition API
- Quản lý trạng thái (state management)
- Các phương pháp hay nhất
- Các lỗi thường gặp"
```

### Các thao tác Cơ sở dữ liệu

```
"Sử dụng skill-creator cho kỹ năng MongoDB:
- Thiết kế schema
- Tối ưu hóa truy vấn
- Các đường ống tổng hợp (aggregation pipelines)
- Chiến lược lập chỉ mục
- Các mẫu di cư (migration patterns)"
```

### Quy trình kiểm thử

```
"Sử dụng skill-creator cho kiểm thử E2E:
- Thiết lập Playwright
- Page objects
- Các kịch bản kiểm thử
- Các khẳng định (assertions)
- Tích hợp CI"
```

### Thực hành bảo mật

```
"Sử dụng skill-creator cho kỹ năng bảo mật:
- Xác thực đầu vào
- Ngăn chặn SQL injection
- Bảo vệ XSS
- Mã thông báo CSRF
- Các header bảo mật"
```

## Quy trình thiết kế

### Bước 1: Xác định mục đích

```
"Sử dụng skill-creator để lập kế hoạch kỹ năng cho:
- Nó giải quyết vấn đề gì?
- Ai sẽ sử dụng nó?
- Kết quả mong đợi là gì?
- Cần những kiến thức gì?"
```

### Bước 2: Thu thập ví dụ

```
"Sử dụng skill-creator để thu thập các ví dụ:
- Các mẫu mã nguồn đang hoạt động
- Các mẫu phổ biến
- Các kịch bản lỗi
- Các trường hợp biên (edge cases)"
```

### Bước 3: Cấu trúc nội dung

```
"Sử dụng skill-creator để tổ chức:
- Các chỉ dẫn cốt lõi
- Các tài liệu tham khảo
- Các kịch bản có thể tái sử dụng
- Các tài sản mẫu"
```

### Bước 4: Kiểm thử & Tinh chỉnh

```
"Sử dụng skill-creator để xác thực:
- Kiểm thử trên các nhiệm vụ thực tế
- Thu thập phản hồi
- Cập nhật nội dung
- Cải thiện sự rõ ràng"
```

## Phương pháp hay nhất

### Mô tả rõ ràng

**Tốt:**
```yaml
description: Hướng dẫn triển khai thanh toán Stripe với TypeScript, bao gồm webhook, gói đăng ký và xử lý lỗi. Sử dụng khi thêm tính năng xử lý thanh toán vào ứng dụng.
```

**Chưa tốt:**
```yaml
description: Kỹ năng Stripe
```

### Chỉ dẫn cụ thể

**Tốt:**
```markdown
## Tạo một Khách hàng

Để tạo một khách hàng Stripe:
1. Khởi tạo stripe client
2. Gọi hàm stripe.customers.create()
3. Truyền email và siêu dữ liệu (metadata)
4. Lưu ID khách hàng vào cơ sở dữ liệu
5. Xử lý lỗi bằng try/catch
```

**Chưa tốt:**
```markdown
Tạo khách hàng khi cần thiết.
```

### Bao gồm các ví dụ

**Tốt:**
```markdown
## Ví dụ: Tạo một gói đăng ký (Subscription)

```typescript
const subscription = await stripe.subscriptions.create({
  customer: customerId,
  items: [{ price: priceId }],
  payment_behavior: 'default_incomplete',
  expand: ['latest_invoice.payment_intent']
});
```
```

### Cung cấp ngữ cảnh

**Tốt:**
```markdown
## Khi nào nên sử dụng

Sử dụng kỹ năng này khi:
- Triển khai xử lý thanh toán
- Xử lý hóa đơn định kỳ
- Quản lý các gói đăng ký của khách hàng
- Xử lý các sự kiện webhook
```

## Các tính năng nâng cao

### Kỹ năng đa tệp tin

```
"Sử dụng skill-creator để xây dựng kỹ năng phức tạp:
- Tệp SKILL.md chính
- scripts/helper.py
- references/api-docs.md
- assets/template.json"
```

### Nội dung động

```
"Sử dụng skill-creator với:
- Các chỉ dẫn có tham số hóa
- Logic có điều kiện
- Cấu hình đặc thù cho môi trường
- Các biến trong mẫu"
```

### Sự phụ thuộc giữa các Kỹ năng

```
"Sử dụng skill-creator để tham chiếu các kỹ năng khác:
- Xây dựng dựa trên các kỹ năng hiện có
- Kết hợp các khả năng
- Chia sẻ tài nguyên
- Tránh trùng lặp"
```

## Kiểm thử Kỹ năng

### Xác thực cấu trúc

```
"Sử dụng skill-creator để kiểm tra:
- YAML frontmatter có chính xác không
- Có đầy đủ các trường bắt buộc không
- Định dạng Markdown có hợp lệ không
- Cấu trúc tệp tin có đúng không"
```

### Kiểm thử cách sử dụng

```
"Sử dụng skill-creator sau đó kiểm thử kỹ năng mới:
1. Gọi kỹ năng trong cuộc hội thoại
2. Xác minh Claude tuân theo các chỉ dẫn
3. Kiểm tra chất lượng đầu ra
4. Thu thập phản hồi
5. Lặp lại để cải thiện"
```

## Các danh mục Kỹ năng

### Kỹ năng Kỹ thuật

- Hướng dẫn Framework (React, Vue, Django)
- Thao tác Cơ sở dữ liệu (PostgreSQL, MongoDB)
- Các công cụ DevOps (Docker, Kubernetes)
- Tích hợp API (Stripe, Twilio)

### Kỹ năng Kinh doanh

- Quy trình của công ty
- Các tiêu chuẩn ngành
- Các yêu cầu tuân thủ
- Nguyên tắc thương hiệu

### Kỹ năng Quy trình công việc

- Quy trình triển khai
- Các giao thức kiểm thử
- Danh sách kiểm tra đánh giá mã nguồn (code review)
- Các tiêu chuẩn tài liệu hướng dẫn

## Ví dụ nhanh

**Kỹ năng đơn giản:**
```
"Sử dụng skill-creator cho các mẫu xử lý lỗi API"
```

**Kỹ năng phức tạp:**
```
"Sử dụng skill-creator cho hệ thống xác thực hoàn chỉnh:
- Đăng ký người dùng
- Đăng nhập/Đăng xuất
- Đặt lại mật khẩu
- Quản lý phiên làm việc
- Tích hợp OAuth
- Hỗ trợ 2FA"
```

**Kỹ năng chuyên môn:**
```
"Sử dụng skill-creator cho các tính toán tài chính:
- Tính toán lãi suất
- Lịch trình trả nợ
- Chuyển đổi tiền tệ
- Tính toán thuế"
```

## Lặp lại & Cải thiện

### Thu thập phản hồi

```
"Sử dụng skill-creator để cải thiện kỹ năng hiện có:
- Kiểm thử trên các nhiệm vụ thực tế
- Ghi lại các điểm gây khó khăn
- Thu thập các gợi ý
- Cập nhật nội dung"
```

### Quản lý phiên bản

```
"Sử dụng skill-creator để quản lý các phiên bản:
- Theo dõi các thay đổi
- Tài liệu hóa các cập nhật
- Duy trì tính tương thích
- Loại bỏ các mẫu cũ"
```

### Chia sẻ Kỹ năng

```
"Sử dụng skill-creator sau đó:
- Xuất dưới dạng file ZIP
- Chia sẻ với đội ngũ
- Đóng góp cho cộng đồng
- Tài liệu hóa cách sử dụng"
```

## Lưu trữ Kỹ năng

### Kỹ năng Dự án

Nằm trong thư mục `.claude/skills/`
- Chia sẻ với đội ngũ
- Được quản lý bằng phiên bản (version controlled)
- Đặc thù cho dự án

### Kỹ năng Cá nhân

Nằm trong thư mục `~/.claude/skills/`
- Có sẵn ở mọi nơi
- Các quy trình công việc cá nhân
- Sử dụng xuyên suốt các dự án

## Bước tiếp theo

- [Các kỹ năng hiện có](/vi/docs/engineer/skills/)
- [Ví dụ về kỹ năng](/vi/docs/use-cases/)
- [Các mẫu nâng cao](/vi/docs/use-cases/)

---

**Tóm lại:** skill-creator biến kiến thức của bạn thành các kỹ năng có thể tái sử dụng. Hãy mô tả những gì bạn cần và để skill-creator xây dựng nó.
