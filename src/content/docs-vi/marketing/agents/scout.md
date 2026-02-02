---
title: "Đại lý Scout (Scout)"
description: "Nhanh chóng định vị các tệp liên quan trong các cơ sở mã nguồn lớn bằng chiến lược tìm kiếm thông minh."
section: marketing
category: agents
order: 6
lang: vi
---

# Scout Agent (Đại lý Scout)

> **Người khám phá mã nguồn của bạn** - Tìm chính xác những gì bạn cần trong vài giây, thay vì hàng giờ.

## Đại lý này làm gì

Bạn cần thêm một nhà cung cấp dịch vụ thanh toán mới. Nhưng mã nguồn xử lý thanh toán nằm ở đâu? Nó nằm trong `lib/payments`? `app/api/checkout`? Hay `services/billing`? Bạn mất 20 phút nhấp qua các thư mục, sử dụng Ctrl+F, nhưng không đi đến đâu.

**Vấn đề**: Các cơ sở mã nguồn lớn giống như những mê cung. Việc tìm thấy tất cả các tệp liên quan đến một tính năng đòi hỏi bạn phải hiểu rất rõ cấu trúc dự án. Những nhà phát triển mới thường lãng phí hàng giờ chỉ để tìm kiếm. Ngay cả những nhà phát triển có kinh nghiệm cũng có lúc quên mất một chức năng cụ thể nằm ở đâu.

**Giải pháp**: Scout Agent nhanh chóng định vị các tệp liên quan bằng cách sử dụng các mô hình tìm kiếm thông minh. Nó hiểu cấu trúc dự án, tìm kiếm trong nhiều thư mục cùng một lúc và trả về danh sách các tệp được sắp xếp ngăn nắp. Bạn có thể bắt đầu làm việc ngay lập tức thay vì phải đi "săn tìm" các tệp tin.

## Bắt đầu nhanh

Tìm kiếm các tệp cho bất kỳ nhiệm vụ nào:

```bash
# Khi bắt đầu một tính năng mới
/scout "Find all email sending and template files"
```

Bạn sẽ nhận được danh sách các tệp liên quan được phân loại rõ ràng:
- Các tiện ích cốt lõi: `lib/email.ts`
- Các tuyến API (API routes): `app/api/send-email/route.ts`
- Các mẫu (Templates): `templates/welcome-email.tsx`
- Các bài kiểm tra (Tests): `__tests__/email.test.ts`

## Khả năng

### Khám phá tệp thông minh
Sử dụng nhiều chiến lược tìm kiếm kết hợp:
- Khớp mẫu với glob (`**/*.{ts,tsx}`)
- Tìm kiếm nội dung với grep (tên hàm, các lệnh import)
- Phân tích cấu trúc thư mục
- Dựa trên quy ước đặt tên tệp
- Dựa trên dấu thời gian chỉnh sửa gần đây

### Tìm kiếm song song đa thư mục
Tìm kiếm trong các phần được chia theo logic:
- Mã nguồn Backend (`lib/`, `app/api/`, `services/`)
- Các thành phần Frontend (`components/`, `app/`)
- Sơ đồ cơ sở dữ liệu (`db/`, `prisma/`)
- Cấu hình (`config/`, `.env.*`)
- Các bài kiểm tra (`__tests__/`, `*.test.ts`)

### Tìm kiếm theo ngữ cảnh
Hiểu rõ những gì bạn đang thực sự tìm kiếm:
- Tính năng thanh toán → `checkout/`, `billing/`, `webhooks/`
- Xác thực người dùng → `auth/`, `middleware/`, `session/`
- Cơ sở dữ liệu → `schema/`, `migrations/`, `queries/`
- Email → `email/`, `templates/`, `notifications/`

### Kết quả được tổ chức ngăn nắp
Trình bày các phát hiện một cách rõ ràng:
- Nhóm theo danh mục (API, tiện ích, thành phần, kiểm tra)
- Sắp xếp theo mức độ liên quan và thời gian gần đây
- Loại bỏ các kết quả trùng lặp
- Cung cấp đường dẫn tệp đầy đủ (không chỉ là tên tệp)
- Bao gồm mô tả ngắn gọn về mục đích của tệp (nếu có)

## Khi nào nên sử dụng

Sử dụng Scout Agent khi bạn cần:
- Bắt đầu công việc trên một tính năng trải dài qua nhiều thư mục.
- Gỡ lỗi (debug) một vấn đề và cần tìm tất cả các tệp liên quan.
- Tìm hiểu cấu trúc dự án hoặc vị trí của một chức năng cụ thể.
- Tái cấu trúc (refactor) mã nguồn trên nhiều tệp tin.
- Thêm các bài kiểm tra cho các tính năng hiện có.
- Tích hợp với các hệ thống hiện có trong dự án.

## Ví dụ quy trình làm việc

### Tìm kiếm các tệp tích hợp thanh toán

```bash
/scout "Locate all payment processing files for Stripe and SePay"
```

**Scout sẽ tìm thấy**:
- Các tiện ích thanh toán: `lib/payment/stripe.ts`, `lib/payment/sepay.ts`
- Các tuyến API: `app/api/webhooks/stripe/route.ts`, `app/api/webhooks/sepay/route.ts`
- Sơ đồ cơ sở dữ liệu: `db/schema/payments.ts`, `db/schema/transactions.ts`
- Các tệp cấu hình: `.env.example` (chứa các API key thanh toán)
- Các bài kiểm tra: `__tests__/payment/stripe.test.ts`

### Gỡ lỗi luồng xác thực (Authentication)

```bash
/scout "Find all authentication and session management files"
```

**Bạn sẽ nhận được**:
- Tiện ích xác thực: `lib/auth.ts`, `lib/session.ts`
- Middleware: `middleware/auth.ts`, `middleware/session.ts`
- Tuyến API: `app/api/auth/[...nextauth]/route.ts`
- Các thành phần UI: `components/LoginForm.tsx`, `components/ProtectedRoute.tsx`
- Cơ sở dữ liệu: `db/schema/users.ts`, `db/schema/sessions.ts`

### Tìm hiểu cấu trúc cơ sở dữ liệu

```bash
/scout "Show me all database schema and migration files"
```

**Scout trả về**:
- Định nghĩa sơ đồ: `db/schema/*.ts`
- Các bản di chuyển: `db/migrations/*.sql`
- Cấu hình cơ sở dữ liệu: `db/config.ts`, `.env.database`
- Các truy vấn ORM: `db/queries/*.ts`

## Chiến lược tìm kiếm

Scout sử dụng các kỹ thuật sau:

**1. Khớp mẫu Glob**
```bash
# Tìm tất cả các tệp API TypeScript
**/api/**/*. {ts,tsx}

# Tìm tất cả các tệp kiểm tra
**/*. {test,spec}. {ts,tsx}
```

**2. Tìm kiếm nội dung (Grep)**
```bash
# Tìm các tệp có import thư viện thanh toán
grep "import.*stripe" --files-with-matches

# Tìm các định nghĩa hàm cụ thể
grep "function sendEmail" --files-with-matches
```

**3. Trí tuệ thư mục**
Biết chính xác nơi cần tìm dựa trên loại nhiệm vụ:
- Tính năng thanh toán → `lib/payment/`, `app/api/checkout/`
- Email → `lib/email/`, `templates/`
- Xác thực → `middleware/`, `lib/auth/`

## Phạm vi tìm kiếm

Các vị trí tìm kiếm mặc định:
```
Gốc Dự Án
├── app/          # Thư mục ứng dụng Next.js (routes, layouts)
├── lib/          # Các hàm tiện ích và logic cốt lõi
├── components/   # Các thành phần React
├── db/           # Sơ đồ và bản di chuyển cơ sở dữ liệu
├── public/       # Các tài sản tĩnh
├── __tests__/    # Các tệp kiểm tra
└── config/       # Các tệp cấu hình
```

## Hiệu suất

Được tối ưu hóa cho tốc độ tối đa:
- Tìm kiếm song song trong các thư mục.
- Sử dụng các mẫu glob hiệu quả.
- Hạn chế tối đa việc đọc nội dung tệp (chỉ lấy đường dẫn trừ khi cần thiết).
- Hoàn thành trong 3-5 giây ngay cả với các cơ sở mã nguồn lớn.
- Sử dụng bộ nhớ đệm (caching) khi khả dụng.

## Các đại lý liên quan

- [Scout External](/vi/docs/marketing/agents/scout-external) - Sử dụng các công cụ AI cho các tìm kiếm phức tạp.
- [Planner](/vi/docs/marketing/agents/planner) - Sử dụng kết quả của Scout để lập kế hoạch.
- [Docs Manager](/vi/docs/marketing/agents/docs-manager) - Sử dụng Scout để lập bản đồ mã nguồn.

## Các lệnh liên quan

- [`/scout`](/vi/docs/marketing/commands/scout) - Tìm kiếm các tệp tin.
- [`/explore`](/docs/marketing/commands) - Khám phá mã nguồn theo cách tương tác.

## Mẹo

**Hãy cụ thể**: Thay vì "Tìm các tệp thanh toán" (quá mơ hồ), hãy dùng "Tìm các tệp xử lý webhook của Stripe và xác minh chữ ký" để có kết quả chính xác hơn.

**Sử dụng khi mới gia nhập dự án**: Bạn mới tiếp quản một dự án? Hãy dùng Scout để tìm hiểu các tính năng chính. "Find all API routes" sẽ cho bạn một bản đồ tổng quan về dự án.

**Kết hợp với Grep**: Scout giúp tìm tệp, Grep giúp tìm mã nguồn cụ thể trong tệp đó. Hãy kết hợp cả hai để tìm kiếm chuyên sâu.

**Tin tưởng vào các danh mục**: Scout nhóm các kết quả theo logic. Nếu bạn cần tìm tệp kiểm tra, hãy nhìn vào phần "Tests"—đừng mất công xem qua toàn bộ danh sách.

## Ví dụ đầu ra của Scout

```
Tìm thấy 12 tệp liên quan đến chức năng email:

Tiện ích cốt lõi:
- lib/email/mailer.ts - Dịch vụ gửi email
- lib/email/templates.ts - Xử lý hiển thị mẫu email

Các tuyến API:
- app/api/send-email/route.ts - Điểm cuối gửi email
- app/api/webhooks/sendgrid/route.ts - Xử lý webhook từ SendGrid

Mẫu Email:
- templates/welcome-email.tsx - Mẫu email chào mừng
- templates/campaign-email.tsx - Mẫu email chiến dịch
- templates/notification-email.tsx - Mẫu email thông báo

Cấu hình:
- config/email.ts - Cấu hình dịch vụ email
- .env.example - Các API key của dịch vụ email

Kiểm tra:
- __tests__/email/mailer.test.ts - Kiểm tra dịch vụ email
- __tests__/api/send-email.test.ts - Kiểm tra điểm cuối API

Cơ sở dữ liệu:
- db/schema/email-logs.ts - Theo dõi việc gửi email
```

## Sử dụng nâng cao

**Loại trừ các mẫu**:
```bash
# Tìm các tệp TypeScript nhưng bỏ qua các tệp kiểm tra
/scout "TypeScript files but skip test files"
```

**Các thay đổi gần đây**:
```bash
# Các tệp liên quan đến xác thực được thay đổi trong commit gần nhất
/scout "Files changed in last commit related to authentication"
```

**Tìm kiếm đa tính năng**:
```bash
# Tìm tất cả các trình xử lý webhook cho các nhà cung cấp thanh toán
/scout "All webhook handlers for payment providers"
```

Scout Agent loại bỏ hoàn toàn câu hỏi "Tệp tin này nằm ở đâu?". Bạn mô tả những gì bạn cần, và nó sẽ tìm thấy chúng. Đơn giản và hiệu quả.
