---
title: /integrate:sepay
description: Tài liệu hướng dẫn tích hợp SePay
section: engineer
kit: engineer
category: commands/integrate
order: 71
published: true
lang: vi
---

# /integrate:sepay

Triển khai tích hợp thanh toán hoàn chỉnh với SePay.vn, cổng thanh toán hàng đầu Việt Nam. Lệnh này xử lý thanh toán qua mã QR, chuyển khoản ngân hàng, xử lý webhook và tất cả các logic backend cần thiết để thương mại hóa tại thị trường Việt Nam.

## Cú pháp

```bash
/integrate:sepay [yêu cầu tích hợp]
```

## Cách hoạt động

Lệnh `/integrate:sepay` tuân theo một quy trình tích hợp toàn diện:

### 1. Phân tích yêu cầu

- Xác định các phương thức thanh toán cần thiết (QR, chuyển khoản, thẻ)
- Xác định luồng thanh toán (một lần, đăng ký, nạp tiền)
- Phân tích kiến trúc mã nguồn hiện có
- Lập kế hoạch lược đồ cơ sở dữ liệu cho dữ liệu thanh toán tại Việt Nam

### 2. Nghiên cứu SePay

Sử dụng agent **researcher** để:
- Xem xét tài liệu API SePay mới nhất
- Kiểm tra các quy định thanh toán cụ thể tại Việt Nam
- Xác định các yêu cầu địa phương hóa
- Nghiên cứu các mẫu xử lý webhook
- Nghiên cứu việc xử lý tiền tệ VND

### 3. Lập kế hoạch triển khai

Tạo kế hoạch chi tiết cho:
- Các route và endpoint API
- Các model cơ sở dữ liệu (các trường tiếng Việt)
- Các trình xử lý webhook
- Tạo mã QR
- Theo dõi chuyển khoản ngân hàng
- Luồng xác nhận thanh toán
- Xử lý lỗi (tiếng Việt)
- Chiến lược kiểm tra

### 4. Triển khai mã nguồn

Sử dụng agent **code** để triển khai:
- Tích hợp SePay SDK
- Các endpoint tạo thanh toán
- Tạo và hiển thị mã QR
- Hướng dẫn chuyển khoản ngân hàng
- Xử lý webhook
- Kiểm tra trạng thái thanh toán (polling)
- Các thao tác cơ sở dữ liệu hỗ trợ VND
- Địa phương hóa tiếng Việt

### 5. Kiểm tra & Tuân thủ

- Tạo các bài kiểm tra toàn diện
- Triển khai xác minh chữ ký webhook
- Thêm kiểm tra ID ngân hàng Việt Nam
- Kiểm tra vòng đời thanh toán
- Xác nhận tuân thủ các quy định tại Việt Nam

## Ví dụ

### Tích hợp thanh toán QR Code cơ bản

```bash
/integrate:sepay [thêm thanh toán QR SePay cho việc mua khóa học, hỗ trợ Vietcombank, Techcombank, BIDV]
```

**Điều gì xảy ra:**
```
Giai đoạn 1: Phân tích (30 giây)
---
Agent: planner

Yêu cầu đã xác định:
✓ Phương thức thanh toán QR code
✓ Mua khóa học (thanh toán một lần)
✓ Hỗ trợ các ngân hàng lớn tại Việt Nam
✓ Xử lý tiền tệ VND
✓ Luồng xác nhận thanh toán
✓ Xử lý webhook

Yêu cầu cụ thể tại Việt Nam:
✓ Xác thực tài khoản ngân hàng
✓ Hỗ trợ tiếng Việt
✓ Định dạng VND (không có số thập phân)
✓ Định dạng nội dung chuyển khoản
✓ Hướng dẫn chuyển khoản ngân hàng

Quyết định kiến trúc:
- Backend: Phát hiện Node.js/Express
- Cơ sở dữ liệu: Phát hiện PostgreSQL
- Frontend: Phát hiện React
- Tiền tệ: VND (không số thập phân)

Giai đoạn 2: Nghiên cứu (45 giây)
---
Agent: researcher

Phân tích tính năng API SePay:
✓ API Mã QR (QR động)
✓ API Chuyển khoản ngân hàng
✓ Các sự kiện Webhook (payment.success, payment.expired)
✓ Xác minh giao dịch
✓ Các ngân hàng hỗ trợ (18 ngân hàng lớn tại Việt Nam)
✓ Thời gian hết hạn mã QR (mặc định 15 phút)

Quy định thanh toán tại Việt Nam:
✓ Định dạng nội dung chuyển khoản: ABC123
✓ Giao dịch tối đa: 500.000.000 VND
✓ Giao dịch tối thiểu: 1.000 VND
✓ Xử lý thuế VAT (chuẩn 10%)
✓ Yêu cầu hóa đơn

Giai đoạn 3: Kế hoạch triển khai
---
Các tệp cần tạo:

1. Backend:
   - src/routes/payment.routes.ts
   - src/controllers/payment.controller.ts
   - src/services/sepay.service.ts
   - src/services/transaction.service.ts
   - src/webhooks/sepay.webhook.ts
   - src/models/payment.model.ts
   - src/models/transaction.model.ts
   - src/utils/vnd-formatter.ts
   - src/utils/bank-validator.ts

2. Cơ sở dữ liệu:
   - migrations/add-sepay-tables.sql

3. Frontend:
   - src/components/PaymentQR.tsx
   - src/components/BankTransferInstructions.tsx
   - src/components/PaymentStatus.tsx
   - src/components/PaymentHistory.tsx
   - src/hooks/usePayment.ts
   - src/utils/vnd-format.ts

4. Cấu hình:
   - .env.example (thêm thông tin xác thực SePay)
   - config/sepay.config.ts
   - locales/vi.json (bản dịch tiếng Việt)

5. Kiểm tra:
   - tests/integration/payment.test.ts
   - tests/webhooks/sepay.webhook.test.ts
   - tests/utils/vnd-formatter.test.ts

Giai đoạn 4: Triển khai mã nguồn (2-3 phút)
---
Agent: code

✓ Đã cài đặt SePay SDK (sepay-node-sdk)
✓ Đã tạo các migration cơ sở dữ liệu
✓ Đã triển khai các model (Payment, Transaction)
✓ Dịch vụ SePay với xử lý lỗi
✓ Dịch vụ giao dịch hỗ trợ VND
✓ Đã tạo các route API:
  - POST /api/payment/create
  - GET /api/payment/:id
  - GET /api/payment/:id/qr
  - GET /api/payment/:id/status
  - POST /api/payment/:id/verify
  - GET /api/payment/history

✓ Đã triển khai endpoint Webhook:
  - POST /api/webhooks/sepay
  - Xác minh chữ ký
  - Trình xử lý sự kiện cho:
    • payment.success
    • payment.expired
    • payment.failed
    • payment.pending

✓ Đã tạo các component Frontend:
  - Hiển thị mã QR với đồng hồ đếm ngược
  - Hướng dẫn chuyển khoản ngân hàng
  - Theo dõi trạng thái thanh toán
  - Định dạng tiếng Việt

✓ Địa phương hóa tiếng Việt:
  - Thông báo lỗi bằng tiếng Việt
  - Tên ngân hàng bằng tiếng Việt
  - Hướng dẫn thanh toán bằng tiếng Việt
  - Thông báo thành công/thất bại

✓ Tiện ích VND:
  - Định dạng: 1.000.000 ₫
  - Parse: Xử lý dấu phân cách dấu chấm
  - Xác thực: Không số thập phân, tối thiểu/tối đa

Giai đoạn 5: Lược đồ cơ sở dữ liệu
---
Các bảng đã tạo:

payments:
- id (uuid, khóa chính)
- user_id (uuid, khóa ngoại)
- sepay_transaction_id (text, duy nhất)
- order_id (text) -- ID đơn hàng khóa học
- amount (bigint) -- bằng VND, không số thập phân
- currency (text) -- luôn là 'VND'
- status (text) -- 'pending', 'success', 'expired', 'failed'
- payment_method (text) -- 'qr', 'bank_transfer'
- bank_code (text) -- 'VCB', 'TCB', 'BIDV', v.v.
- qr_code_url (text)
- qr_expires_at (timestamp)
- paid_at (timestamp)
- created_at (timestamp)
- updated_at (timestamp)

transactions:
- id (uuid, khóa chính)
- payment_id (uuid, khóa ngoại)
- transaction_ref (text) -- Tham chiếu ngân hàng Việt Nam
- bank_transaction_id (text)
- sender_account (text)
- sender_name (text)
- receiver_account (text)
- transfer_content (text)
- transferred_at (timestamp)
- verified_at (timestamp)
- created_at (timestamp)

Giai đoạn 6: Cấu hình
---
Các biến môi trường đã thêm:

SEPAY_APP_ID=your_app_id
SEPAY_SECRET_KEY=your_secret_key
SEPAY_WEBHOOK_SECRET=your_webhook_secret
SEPAY_ACCOUNT_NUMBER=0123456789
SEPAY_ACCOUNT_NAME=YOUR_COMPANY_NAME
SEPAY_BANK_CODE=VCB
FRONTEND_URL=http://localhost:3000

Giai đoạn 7: Tích hợp Frontend
---
Component mã QR thanh toán:

<PaymentQR paymentId={paymentId} />

Hiển thị:
- Hình ảnh mã QR (tự động làm mới)
- Số tiền theo định dạng VND: 1.000.000 ₫
- Đồng hồ đếm ngược (15:00)
- Hướng dẫn chuyển khoản ngân hàng
- Cập nhật trạng thái thanh toán (thời gian thực)
- Tự động chuyển hướng khi thành công

Hướng dẫn chuyển khoản ngân hàng:

<BankTransferInstructions payment={payment} />

Hiển thị:
- Tên ngân hàng (tiếng Việt)
- Số tài khoản
- Tên chủ tài khoản
- Số tiền chuyển khoản
- Nội dung chuyển khoản (tham chiếu duy nhất)
- Nút sao chép cho mỗi trường

Ví dụ:
---
Ngân hàng: Vietcombank (VCB)
Số tài khoản: 0123456789
Tên tài khoản: CONG TY CLAUDEKIT
Số tiền: 1.000.000 ₫
Nội dung: COURSE ABC123

[Sao chép tất cả]
---

Giai đoạn 8: Luồng thanh toán
---
1. Người dùng nhấp vào "Thanh toán"
2. Backend tạo thanh toán SePay
3. Frontend hiển thị mã QR
4. Người dùng quét QR bằng ứng dụng ngân hàng
5. Người dùng xác nhận thanh toán trong ứng dụng
6. Ngân hàng gửi giao dịch tới SePay
7. Webhook SePay thông báo cho backend
8. Backend xác minh thanh toán
9. Cơ sở dữ liệu được cập nhật (status: success)
10. Frontend hiển thị thông báo thành công
11. Quyền truy cập khóa học được cấp

Xử lý hết hạn:
- Mã QR hết hạn sau 15 phút
- Người dùng có thể tạo mã QR mới
- Các thanh toán hết hạn được đánh dấu 'expired'

Giai đoạn 9: Kiểm tra (1 phút)
---
Agent: tester

Các bài kiểm tra đã tạo:
✓ Kiểm tra tạo thanh toán (12 bài)
✓ Kiểm tra tạo mã QR (8 bài)
✓ Kiểm tra xử lý webhook (18 bài)
✓ Kiểm tra định dạng VND (15 bài)
✓ Kiểm tra xác thực ngân hàng (10 bài)
✓ Kiểm tra xác minh giao dịch (14 bài)
✓ Kiểm tra hết hạn thanh toán (9 bài)
✓ Kiểm tra xử lý lỗi (12 bài)

Tất cả 98 bài kiểm tra đã vượt qua
Độ bao phủ: 96%

Giai đoạn 10: Tài liệu
---
Tài liệu đã tạo:

docs/payment/sepay-integration.md:
- Hướng dẫn thiết lập
- Cấu hình tài khoản ngân hàng
- Các biến môi trường
- Các endpoint API
- Các sự kiện Webhook
- Kiểm tra với sandbox SePay
- Mã ngân hàng Việt Nam
- Hướng dẫn xử lý sự cố
- Danh sách kiểm tra triển khai thực tế

✓ Tích hợp hoàn tất (4 phút 15 giây)

Tóm tắt:
---
✓ 16 tệp được tạo
✓ 7 endpoint API được triển khai
✓ 4 sự kiện webhook được xử lý
✓ 2 bảng cơ sở dữ liệu
✓ 5 component React
✓ Địa phương hóa tiếng Việt
✓ 98 bài kiểm tra (độ bao phủ 96%)
✓ Tài liệu hoàn chỉnh

Bước tiếp theo:
1. Đăng ký tài khoản SePay tại sepay.vn
2. Lấy App ID và Secret Key
3. Cấu hình tài khoản ngân hàng
4. Thêm thông tin xác thực vào .env
5. Chạy migration: npm run migrate
6. Kiểm tra với sandbox SePay
7. Triển khai lên staging
```

### Thanh toán gói đăng ký với tự động gia hạn

```bash
/integrate:sepay [triển khai thanh toán gói đăng ký hàng tháng 299.000 VND/tháng với lời nhắc chuyển khoản ngân hàng tự động]
```

**Điều gì xảy ra:**
```
Giai đoạn 1: Phân tích
---
Yêu cầu:
✓ Gói đăng ký hàng tháng (299.000 VND)
✓ Lời nhắc tự động gia hạn qua email
✓ Phương thức thanh toán chuyển khoản ngân hàng
✓ Thời gian ân hạn (3 ngày)
✓ Tạm đình chỉ sau thời gian ân hạn
✓ Luồng kích hoạt lại

Mô hình đăng ký tại Việt Nam:
- Chuyển khoản ngân hàng thủ công mỗi tháng
- Nhắc nhở qua email 3 ngày trước khi hết hạn
- Nội dung chuyển khoản cố định để theo dõi
- Không tự động trừ tiền (do quy định)

Giai đoạn 2: Triển khai
---
Các thành phần bổ sung:

1. Quản lý gói đăng ký:
   - src/services/subscription.service.ts
   - src/models/subscription.model.ts
   - src/jobs/subscription-reminder.job.ts
   - src/jobs/subscription-expiry.job.ts

2. Thông báo Email:
   - templates/email/subscription-reminder-vi.html
   - templates/email/subscription-expired-vi.html
   - templates/email/payment-confirmed-vi.html

3. Cron Jobs:
   - Kiểm tra hàng ngày các gói đăng ký hết hạn trong 3 ngày tới
   - Kiểm tra hàng ngày các gói đăng ký đã hết hạn
   - Gửi lời nhắc qua email với hướng dẫn thanh toán

4. Xác minh thanh toán:
   - Endpoint xác minh thủ công
   - Tự động xác minh qua webhook
   - Dashboard admin để xác minh

Bổ sung lược đồ cơ sở dữ liệu:
subscriptions:
- id, user_id, plan_id
- status ('active', 'grace_period', 'suspended')
- amount (bigint, VND)
- current_period_start, current_period_end
- next_billing_date
- auto_renew (boolean)
- payment_reminder_sent (boolean)
- grace_period_end
- created_at, updated_at

subscription_payments:
- id, subscription_id, payment_id
- period_start, period_end
- amount (bigint)
- paid_at
- created_at

Ví dụ email nhắc nhở:
---
Tiêu đề: Gia hạn gói ClaudeKit Pro

Xin chào [Tên],

Gói ClaudeKit Pro của bạn sẽ hết hạn vào 3 ngày nữa
(ngày 15/11/2025).

Để tiếp tục sử dụng, vui lòng thanh toán:

Số tiền: 299.000 ₫
Ngân hàng: Vietcombank (VCB)
Số tài khoản: 0123456789
Nội dung: SUB[user_id]

[Thanh toán ngay]

Cảm ơn bạn đã tin dùng ClaudeKit!
---

✓ Hoàn tất thanh toán gói đăng ký (5 phút)
```

## Các tính năng SePay đã triển khai

### 1. Thanh toán mã QR

```typescript
// Tạo thanh toán và tạo mã QR
const payment = await sepay.createPayment({
  amount: 1000000, // 1.000.000 VND
  orderId: 'ORDER123',
  description: 'Course purchase',
  returnUrl: `${FRONTEND_URL}/payment/success`,
});

// Lấy URL mã QR
const qrCodeUrl = payment.qrCodeUrl;

// Frontend hiển thị QR
<img src={qrCodeUrl} alt="Scan to pay" />
```

### 2. Hướng dẫn chuyển khoản ngân hàng

```typescript
// Tạo hướng dẫn chuyển khoản
const instructions = {
  bankCode: 'VCB', // Vietcombank
  accountNumber: process.env.SEPAY_ACCOUNT_NUMBER,
  accountName: process.env.SEPAY_ACCOUNT_NAME,
  amount: 1000000,
  content: `COURSE${orderId}`, // Tham chiếu duy nhất
};

// Hiển thị cho người dùng với các nút sao chép
```

### 3. Xác minh thanh toán

```typescript
// Kiểm tra trạng thái thanh toán
const status = await sepay.verifyPayment(transactionId);

if (status === 'success') {
  // Cấp quyền truy cập
  await grantCourseAccess(userId, courseId);
}
```

### 4. Xử lý Webhook

```typescript
// Trình xử lý webhook với xác minh chữ ký
app.post('/api/webhooks/sepay', async (req, res) => {
  const signature = req.headers['sepay-signature'];

  // Xác minh chữ ký
  const isValid = sepay.verifyWebhookSignature(
    req.body,
    signature,
    SEPAY_WEBHOOK_SECRET
  );

  if (!isValid) {
    return res.status(400).json({ error: 'Invalid signature' });
  }

  const event = req.body;

  switch (event.type) {
    case 'payment.success':
      await handlePaymentSuccess(event.data);
      break;
    case 'payment.expired':
      await handlePaymentExpired(event.data);
      break;
  }

  res.json({ success: true });
});
```

## Mã ngân hàng Việt Nam

Các ngân hàng lớn được hỗ trợ:

```
VCB  - Vietcombank
TCB  - Techcombank
BIDV - BIDV
VTB  - Vietinbank
ACB  - ACB
MB   - MBBank
MSB  - MSB
SCB  - SCB
VPB  - VPBank
TPB  - TPBank
SHB  - SHB
HDB  - HDBank
OCB  - OCB
LPB  - LienVietPostBank
NAB  - NamABank
ABB  - AnBinhBank
```

## Xử lý tiền tệ VND

### Định dạng

```typescript
// Định dạng VND (không số thập phân)
function formatVND(amount: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Cách dùng
formatVND(1000000); // "1.000.000 ₫"
formatVND(299000);  // "299.000 ₫"
```

### Parse

```typescript
// Chuyển chuỗi VND thành số
function parseVND(str: string): number {
  return parseInt(str.replace(/[^\d]/g, ''), 10);
}

// Cách dùng
parseVND("1.000.000 ₫"); // 1000000
parseVND("299,000");     // 299000
```

### Xác thực

```typescript
// Xác thực số tiền VND
function validateVND(amount: number): boolean {
  const MIN = 1000;        // 1.000 VND
  const MAX = 500000000;   // 500.000.000 VND

  return (
    amount >= MIN &&
    amount <= MAX &&
    Number.isInteger(amount) // Không có số thập phân
  );
}
```

## Địa phương hóa tiếng Việt

### Thông báo trạng thái thanh toán

```typescript
const messages = {
  pending: 'Đang chờ thanh toán',
  success: 'Thanh toán thành công',
  expired: 'Đã hết hạn',
  failed: 'Thanh toán thất bại',
};
```

### Thông báo lỗi

```typescript
const errors = {
  INVALID_AMOUNT: 'Số tiền không hợp lệ',
  PAYMENT_EXPIRED: 'QR code đã hết hạn',
  PAYMENT_NOT_FOUND: 'Không tìm thấy giao dịch',
  INSUFFICIENT_AMOUNT: 'Số tiền chuyển không đủ',
};
```

## Kiểm tra

### Chế độ Sandbox

```bash
# Sử dụng thông tin xác thực sandbox SePay
SEPAY_APP_ID=test_app_id
SEPAY_SECRET_KEY=test_secret_key
SEPAY_WEBHOOK_SECRET=test_webhook_secret
```

### Tài khoản ngân hàng thử nghiệm

```
Các tài khoản thử nghiệm do SePay cung cấp:
- Tài khoản: 0123456789 (luôn thành công)
- Tài khoản: 9876543210 (luôn thất bại)
- Tài khoản: 5555555555 (hết hạn sau 1 phút)
```

### Kiểm tra Webhook

```bash
# Chuyển tiếp webhook về local (SePay CLI)
sepay webhooks forward --url http://localhost:3000/api/webhooks/sepay

# Kích hoạt sự kiện thử nghiệm
sepay trigger payment.success --transaction-id TXN123
```

## Các trường hợp sử dụng phổ biến

### 1. Mua khóa học

```bash
/integrate:sepay [thanh toán một lần cho khóa học, hỗ trợ QR và chuyển khoản ngân hàng]
```

### 2. Gói đăng ký

```bash
/integrate:sepay [gói đăng ký hàng tháng 299.000 VND với nhắc nhở qua email]
```

### 3. Nạp tiền vào ví

```bash
/integrate:sepay [nạp tiền vào ví với số tiền bất kỳ 10.000-10.000.000 VND]
```

### 4. Thanh toán dịch vụ

```bash
/integrate:sepay [thanh toán dịch vụ với xác nhận tức thì]
```

## Xử lý sự cố

### Mã QR hết hạn

**Vấn đề:** Người dùng không thanh toán trong vòng 15 phút

**Giải pháp:**
```typescript
// Cung cấp nút "Tạo mã QR mới"
const newPayment = await sepay.createPayment({
  amount: originalAmount,
  orderId: orderId,
});

// Cập nhật giao diện với QR mới
setQrCodeUrl(newPayment.qrCodeUrl);
```

### Thanh toán không được phát hiện

**Vấn đề:** Người dùng đã thanh toán nhưng không nhận được webhook

**Giải pháp:**
```typescript
// Cung cấp nút xác minh thủ công
<button onClick={async () => {
  const status = await sepay.verifyPayment(transactionId);
  if (status === 'success') {
    // Cấp quyền truy cập
  }
}}>
  Kiểm tra thanh toán
</button>
```

### Sai số tiền chuyển khoản

**Vấn đề:** Người dùng chuyển sai số tiền

**Giải pháp:**
```typescript
// Webhook nhận được số tiền thực tế
if (event.data.amount < expectedAmount) {
  // Thông báo cho người dùng về việc thiếu hụt
  await sendEmail(user, 'amount_mismatch', {
    expected: expectedAmount,
    received: event.data.amount,
    shortage: expectedAmount - event.data.amount,
  });
}
```

## Danh sách kiểm tra triển khai thực tế

Trước khi chạy chính thức:

```
□ Đăng ký tài khoản doanh nghiệp tại sepay.vn
□ Hoàn tất xác minh doanh nghiệp (1-3 ngày)
□ Lấy thông tin xác thực production
□ Cấu hình endpoint webhook (yêu cầu HTTPS)
□ Kiểm tra với tài khoản ngân hàng thật (số tiền nhỏ)
□ Thiết lập giám sát webhook
□ Cấu hình thông báo email
□ Thêm điều khoản dịch vụ tiếng Việt
□ Thêm chính sách hoàn tiền (bằng tiếng Việt)
□ Kiểm tra với nhiều ngân hàng
□ Thiết lập hỗ trợ khách hàng (tiếng Việt)
□ Cấu hình tạo hóa đơn (VAT nếu có)
□ Kiểm tra luồng gia hạn đăng ký
□ Thiết lập quy trình đối soát thanh toán
□ Thêm dashboard admin để xác minh thanh toán
```

## Bước tiếp theo

Sau khi tích hợp:

```bash
# 1. Tích hợp hoàn tất
/integrate:sepay [yêu cầu]

# 2. Đăng ký tài khoản SePay
# Truy cập sepay.vn và đăng ký

# 3. Thêm thông tin xác thực
cp .env.example .env
# Thêm SEPAY_APP_ID, SEPAY_SECRET_KEY, v.v.

# 4. Chạy migration
npm run migrate

# 5. Kiểm tra ở chế độ sandbox
npm run dev
# Thực hiện thanh toán thử nghiệm

# 6. Chạy các bài kiểm tra
/test

# 7. Triển khai lên staging
/deploy [staging]

# 8. Kiểm tra với ngân hàng thật (số tiền nhỏ)

# 9. Chuyển sang thông tin xác thực production

# 10. Triển khai lên production
/deploy [production]
```

## Các lệnh liên quan

- [/integrate:polar](/vi/docs/engineer/commands/integrate/polar) - Thanh toán quốc tế
- [/cook](/vi/docs/engineer/commands/core/cook) - Triển khai các tính năng tùy chỉnh
- [/test](/vi/docs/engineer/commands/core/test) - Chạy bộ kiểm tra

---

**Điểm mấu chốt**: `/integrate:sepay` cung cấp khả năng tích hợp thanh toán SePay.vn hoàn chỉnh, tối ưu cho thị trường Việt Nam với mã QR, chuyển khoản ngân hàng, định dạng VND, địa phương hóa tiếng Việt và tất cả mã nguồn backend/frontend cần thiết—sẵn sàng cho sản xuất tại Việt Nam chỉ trong vài phút.
