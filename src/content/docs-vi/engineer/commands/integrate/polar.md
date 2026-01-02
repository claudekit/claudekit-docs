---
title: /integrate:polar
description: Tài liệu hướng dẫn lệnh polar
section: engineer
kit: engineer
category: commands/integrate
order: 70
published: true
lang: vi
---

# /integrate:polar

Triển khai tích hợp thanh toán hoàn chỉnh với Polar.sh. Lệnh này xử lý các gói đăng ký (subscriptions), thanh toán một lần, xử lý webhook, cổng thông tin khách hàng (customer portal) và tất cả logic backend cần thiết để kiếm tiền từ SaaS.

## Cú pháp

```bash
/integrate:polar [yêu cầu tích hợp]
```

## Cách hoạt động

Lệnh `/integrate:polar` tuân theo một quy trình làm việc tích hợp toàn diện:

### 1. Phân tích yêu cầu

- Xác định mô hình thanh toán (đăng ký, một lần, hoặc kết hợp)
- Xác định các tính năng cần thiết (dùng thử, mã giảm giá, tính phí theo lưu lượng, v.v.)
- Phân tích kiến trúc mã nguồn hiện tại
- Lập kế hoạch sơ đồ cơ sở dữ liệu cho dữ liệu thanh toán

### 2. Nghiên cứu Polar.sh

Gọi agent **researcher** để:
- Xem xét tài liệu API Polar.sh mới nhất
- Kiểm tra các thực hành tốt nhất về tích hợp
- Xác định các yêu cầu bảo mật
- Nghiên cứu các mẫu xử lý webhook

### 3. Lập kế hoạch triển khai

Tạo kế hoạch chi tiết cho:
- Các route và endpoint API
- Các model cơ sở dữ liệu
- Các trình xử lý webhook
- Các thành phần frontend
- Xử lý lỗi
- Chiến lược kiểm tra

### 4. Triển khai mã nguồn

Gọi agent **code** để triển khai:
- Tích hợp SDK Polar.sh
- Các endpoint cho luồng thanh toán
- Xử lý webhook
- Các thao tác cơ sở dữ liệu
- Tích hợp cổng thông tin khách hàng
- Xử lý lỗi và ghi nhật ký (logging)

### 5. Kiểm tra & Bảo mật

- Tạo các bài kiểm tra toàn diện
- Triển khai xác minh chữ ký webhook
- Thêm xử lý lỗi cho tất cả các trường hợp thất bại
- Kiểm tra các sự kiện vòng đời của gói đăng ký
- Xác thực các yêu cầu tuân thủ PCI

## Ví dụ

### Tích hợp đăng ký cơ bản

```bash
/integrate:polar [thêm thanh toán đăng ký Polar.sh với 3 cấp độ: Free, Pro ($29/tháng), Enterprise ($99/tháng)]
```

**Điều gì xảy ra:**
```
Giai đoạn 1: Phân tích (30 giây)
---
Agent: planner

Các yêu cầu được xác định:
✓ 3 cấp độ đăng ký
✓ Thanh toán hàng tháng
✓ Thời gian dùng thử (mặc định 14 ngày)
✓ Luồng nâng cấp/hạ cấp
✓ Truy cập cổng thông tin khách hàng
✓ Xử lý webhook

Quyết định kiến trúc:
- Backend: Phát hiện Node.js/Express
- Cơ sở dữ liệu: Phát hiện PostgreSQL
- Frontend: Phát hiện React

Giai đoạn 2: Nghiên cứu (45 giây)
---
Agent: researcher

Các tính năng API Polar.sh được phân tích:
✓ Subscription API (v1)
✓ Các sự kiện Webhook (subscription.created, v.v.)
✓ Cổng thông tin khách hàng (được host sẵn)
✓ Các phiên thanh toán (Checkout sessions)
✓ Hỗ trợ tính phí theo lưu lượng (usage-based)
✓ Xử lý thuế (tự động)

Các thực hành tốt nhất được xác định:
✓ Yêu cầu xác minh chữ ký webhook
✓ Xử lý webhook có tính lũy đẳng (idempotent)
✓ Đồng bộ hóa trạng thái đăng ký
✓ Xử lý thời gian ân hạn (grace period)

Giai đoạn 3: Kế hoạch triển khai
---
Agent: planner

Các tệp cần tạo:
1. Backend:
   - src/routes/billing.routes.ts
   - src/controllers/billing.controller.ts
   - src/services/polar.service.ts
   - src/services/subscription.service.ts
   - src/middleware/subscription.middleware.ts
   - src/webhooks/polar.webhook.ts
   - src/models/subscription.model.ts
   - src/models/customer.model.ts

2. Cơ sở dữ liệu:
   - migrations/add-billing-tables.sql

3. Frontend:
   - src/components/PricingTable.tsx
   - src/components/CheckoutButton.tsx
   - src/components/SubscriptionStatus.tsx
   - src/components/CustomerPortal.tsx
   - src/hooks/useSubscription.ts

4. Cấu hình:
   - .env.example (thêm các khóa Polar.sh)
   - config/polar.config.ts

5. Kiểm tra:
   - tests/integration/billing.test.ts
   - tests/webhooks/polar.webhook.test.ts
   - tests/services/subscription.service.test.ts

Giai đoạn 4: Triển khai mã nguồn (2-3 phút)
---
Agent: code

✓ Đã cài đặt SDK Polar.sh (@polar-sh/sdk)
✓ Đã tạo các bản migration cơ sở dữ liệu
✓ Đã triển khai các model (Subscription, Customer)
✓ Dịch vụ Polar với xử lý lỗi
✓ Dịch vụ đăng ký với quản lý vòng đời
✓ Các route API đã được tạo:
  - POST /api/billing/checkout
  - GET /api/billing/portal
  - GET /api/billing/subscription
  - PUT /api/billing/subscription/upgrade
  - PUT /api/billing/subscription/downgrade
  - DELETE /api/billing/subscription/cancel

✓ Endpoint Webhook đã triển khai:
  - POST /api/webhooks/polar
  - Xác minh chữ ký
  - Các trình xử lý sự kiện cho:
    • subscription.created
    • subscription.updated
    • subscription.canceled
    • subscription.active
    • payment.succeeded
    • payment.failed

✓ Các thành phần Frontend đã được tạo
✓ Middleware đăng ký để bảo vệ các route
✓ Xử lý lỗi với logic thử lại
✓ Ghi nhật ký cho tất cả các sự kiện thanh toán

Giai đoạn 5: Sơ đồ cơ sở dữ liệu
---
Các bảng đã tạo:

customers:
- id (uuid, khóa chính)
- user_id (uuid, khóa ngoại)
- polar_customer_id (text, duy nhất)
- email (text)
- created_at (timestamp)
- updated_at (timestamp)

subscriptions:
- id (uuid, khóa chính)
- customer_id (uuid, khóa ngoại)
- polar_subscription_id (text, duy nhất)
- tier (text) -- 'free', 'pro', 'enterprise'
- status (text) -- 'active', 'canceled', 'past_due', v.v.
- current_period_start (timestamp)
- current_period_end (timestamp)
- cancel_at_period_end (boolean)
- created_at (timestamp)
- updated_at (timestamp)

payment_history:
- id (uuid, khóa chính)
- subscription_id (uuid, khóa ngoại)
- polar_payment_id (text)
- amount (integer) -- tính theo cent
- currency (text)
- status (text)
- paid_at (timestamp)
- created_at (timestamp)

Giai đoạn 6: Cấu hình
---
Các biến môi trường được thêm vào .env.example:

POLAR_SECRET_KEY=polar_sk_...
POLAR_WEBHOOK_SECRET=whsec_...
POLAR_PRODUCT_ID_PRO=prod_...
POLAR_PRODUCT_ID_ENTERPRISE=prod_...
FRONTEND_URL=http://localhost:3000

Giai đoạn 7: Tích hợp Frontend
---
Ví dụ trang giá cả đã được tạo:

<PricingTable>
  <PricingTier
    name="Free"
    price="$0"
    features={[
      "Lên đến 5 AI agents",
      "Hỗ trợ cơ bản",
      "Truy cập cộng đồng"
    ]}
    cta="Bắt đầu ngay"
  />

  <PricingTier
    name="Pro"
    price="$29"
    period="mỗi tháng"
    features={[
      "AI agents không giới hạn",
      "Hỗ trợ ưu tiên",
      "Các tính năng nâng cao",
      "Truy cập API"
    ]}
    cta={<CheckoutButton tier="pro" />}
    highlighted
  />

  <PricingTier
    name="Enterprise"
    price="$99"
    period="mỗi tháng"
    features={[
      "Mọi thứ trong gói Pro",
      "Hỗ trợ tận tình",
      "Tích hợp tùy chỉnh",
      "Đảm bảo SLA"
    ]}
    cta={<CheckoutButton tier="enterprise" />}
  />
</PricingTable>

Tích hợp cổng thông tin khách hàng:
Component <CustomerPortal /> cung cấp:
- Xem chi tiết đăng ký
- Cập nhật phương thức thanh toán
- Tải hóa đơn
- Hủy đăng ký
- Nâng cấp/hạ cấp

Giai đoạn 8: Kiểm tra (1 phút)
---
Agent: tester

Các bài kiểm tra đã tạo:
✓ Kiểm tra luồng thanh toán (15 bài)
✓ Kiểm tra xử lý webhook (22 bài)
✓ Kiểm tra vòng đời đăng ký (18 bài)
✓ Kiểm tra nâng cấp/hạ cấp (12 bài)
✓ Kiểm tra việc hủy bỏ (8 bài)
✓ Kiểm tra xử lý lỗi (14 bài)

Tất cả 89 bài kiểm tra đã vượt qua
Độ bao phủ: 94%

Giai đoạn 9: Tài liệu
---
Tài liệu đã tạo:

docs/billing/polar-integration.md:
- Hướng dẫn thiết lập
- Các biến môi trường
- Các endpoint API
- Các sự kiện Webhook
- Kiểm tra với Polar.sh CLI
- Danh sách kiểm tra triển khai production
- Các vấn đề thường gặp và giải pháp

✓ Tích hợp hoàn tất (4 phút 30 giây)

Tóm tắt:
---
✓ 15 tệp đã tạo
✓ 8 endpoint API đã triển khai
✓ 6 sự kiện webhook được xử lý
✓ 3 bảng cơ sở dữ liệu
✓ 4 component React
✓ 89 bài kiểm tra (độ bao phủ 94%)
✓ Tài liệu hoàn chỉnh

Các bước tiếp theo:
1. Thêm các khóa API Polar.sh vào .env
2. Chạy migration: npm run migrate
3. Kiểm tra với chế độ test của Polar.sh
4. Tạo các sản phẩm trong dashboard Polar.sh
5. Cập nhật .env với các ID sản phẩm
6. Triển khai lên staging
```

### Tích hợp nâng cao với tính phí theo lưu lượng (Usage-Based)

```bash
/integrate:polar [triển khai Polar.sh với tính phí theo lưu lượng cho các cuộc gọi API, phí cơ bản $49 + $0.01 cho mỗi cuộc gọi API trên 10k]
```

**Điều gì xảy ra:**
```
Giai đoạn 1: Phân tích
---
Yêu cầu:
✓ Gói đăng ký cơ bản ($49/tháng)
✓ Tiện ích bổ sung dựa trên lưu lượng ($0.01 mỗi cuộc gọi API)
✓ Hạn mức bao gồm (10,000 cuộc gọi/tháng)
✓ Theo dõi và báo cáo lưu lượng sử dụng
✓ Cảnh báo khi vượt hạn mức

Độ phức tạp bổ sung:
- Yêu cầu đo lường cuộc gọi API
- Tổng hợp lưu lượng sử dụng
- Xem trước hóa đơn trước khi tính phí
- Đặt lại lưu lượng theo chu kỳ thanh toán

Giai đoạn 2: Triển khai
---
Các thành phần được thêm vào:

1. Theo dõi lưu lượng sử dụng:
   - src/middleware/usage-tracking.middleware.ts
   - src/services/usage.service.ts
   - Bảng cơ sở dữ liệu: api_usage

2. Báo cáo lưu lượng sử dụng:
   - src/routes/usage.routes.ts
   - GET /api/usage/current
   - GET /api/usage/history
   - GET /api/usage/invoice-preview

3. Tính phí theo lưu lượng Polar:
   - Tích hợp với API metered usage của Polar
   - Đồng bộ lưu lượng theo giờ lên Polar
   - Đặt lại lưu lượng theo chu kỳ thanh toán

4. Cảnh báo sử dụng:
   - Thông báo email ở mức 80%, 100%, 150%
   - Biểu ngữ cảnh báo trên dashboard
   - Sự kiện webhook khi vượt ngưỡng

Giai đoạn 3: Triển khai theo dõi lưu lượng
---
Middleware được thêm vào tất cả các route API:

import { trackUsage } from './middleware/usage-tracking';

router.use('/api/v1', trackUsage);

Dịch vụ lưu lượng:
- Theo dõi từng cuộc gọi API
- Tổng hợp theo đăng ký
- Đồng bộ lên Polar mỗi giờ
- Tính toán phí vượt hạn mức

Sơ đồ cơ sở dữ liệu:
api_usage:
- id, subscription_id, endpoint
- request_count, timestamp
- billing_period_start, billing_period_end

Giai đoạn 4: Cập nhật Frontend
---
Các thành phần được thêm vào:
- <UsageChart /> - Biểu đồ lưu lượng trực quan
- <UsageAlerts /> - Biểu ngữ cảnh báo
- <InvoicePreview /> - Ước tính hóa đơn tiếp theo
- <UsageTable /> - Chi tiết phân tích

✓ Tính phí theo lưu lượng hoàn tất (6 phút)
```

## Các tính năng Polar.sh được triển khai

### 1. Các phiên thanh toán (Checkout Sessions)

```typescript
// Tạo phiên thanh toán
const checkout = await polar.checkouts.create({
  productId: POLAR_PRODUCT_ID,
  successUrl: `${FRONTEND_URL}/success`,
  customerEmail: user.email,
});

// Frontend chuyển hướng đến:
window.location.href = checkout.url;
```

### 2. Xử lý Webhook

```typescript
// Trình xử lý webhook với xác minh chữ ký
app.post('/api/webhooks/polar', async (req, res) => {
  const signature = req.headers['polar-signature'];

  // Xác minh chữ ký
  const isValid = polar.webhooks.verify(
    req.body,
    signature,
    POLAR_WEBHOOK_SECRET
  );

  if (!isValid) {
    return res.status(400).json({ error: 'Chữ ký không hợp lệ' });
  }

  // Xử lý sự kiện
  const event = req.body;

  switch (event.type) {
    case 'subscription.created':
      await handleSubscriptionCreated(event.data);
      break;
    case 'subscription.updated':
      await handleSubscriptionUpdated(event.data);
      break;
    // ... các sự kiện khác
  }

  res.json({ received: true });
});
```

### 3. Cổng thông tin khách hàng

```typescript
// Tạo URL cổng thông tin khách hàng
const portalUrl = await polar.customerPortal.createSession({
  customerId: customer.polarCustomerId,
  returnUrl: `${FRONTEND_URL}/settings`,
});

// Frontend chuyển hướng đến:
window.location.href = portalUrl;
```

### 4. Quản lý đăng ký

```typescript
// Nâng cấp đăng ký
await polar.subscriptions.update(subscriptionId, {
  productId: NEW_PRODUCT_ID,
  prorationBehavior: 'create_prorations',
});

// Hủy đăng ký
await polar.subscriptions.cancel(subscriptionId, {
  cancelAtPeriodEnd: true,
});
```

## Các sự kiện Webhook được xử lý

```
✓ subscription.created      - Gói đăng ký mới bắt đầu
✓ subscription.updated      - Cấp độ thay đổi, trạng thái được cập nhật
✓ subscription.canceled     - Gói đăng ký bị hủy
✓ subscription.active       - Gói đăng ký trở nên hoạt động
✓ subscription.past_due     - Thanh toán thất bại
✓ payment.succeeded         - Thanh toán thành công
✓ payment.failed           - Thanh toán thất bại
✓ customer.created         - Khách hàng mới được tạo
✓ customer.updated         - Thông tin khách hàng thay đổi
✓ invoice.created          - Hóa đơn mới được tạo
✓ invoice.paid             - Hóa đơn đã thanh toán
✓ invoice.payment_failed   - Thanh toán hóa đơn thất bại
```

## Sơ đồ cơ sở dữ liệu

### Sơ đồ tối giản

```sql
CREATE TABLE customers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  polar_customer_id TEXT UNIQUE,
  email TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID NOT NULL REFERENCES customers(id),
  polar_subscription_id TEXT UNIQUE,
  tier TEXT NOT NULL,
  status TEXT NOT NULL,
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  cancel_at_period_end BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_subscriptions_customer ON subscriptions(customer_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);
```

## Thực hành tốt nhất về bảo mật

### 1. Xác minh chữ ký Webhook

```typescript
// LUÔN xác minh chữ ký webhook
const isValid = polar.webhooks.verify(
  req.body,
  signature,
  POLAR_WEBHOOK_SECRET
);

if (!isValid) {
  throw new Error('Chữ ký webhook không hợp lệ');
}
```

### 2. Xử lý Webhook lũy đẳng

```typescript
// Ngăn chặn xử lý trùng lặp
const existingEvent = await db.webhookEvents.findOne({
  eventId: event.id
});

if (existingEvent) {
  return; // Đã xử lý rồi
}

// Xử lý sự kiện...

// Lưu ID sự kiện
await db.webhookEvents.create({
  eventId: event.id,
  processedAt: new Date()
});
```

### 3. Bảo mật khóa API

```typescript
// KHÔNG BAO GIỜ để lộ khóa bí mật ở frontend
// Chỉ dùng ở Backend:
const polar = new Polar(process.env.POLAR_SECRET_KEY);

// Frontend sử dụng các route API:
await fetch('/api/billing/checkout', {
  method: 'POST',
  headers: { Authorization: `Bearer ${userToken}` }
});
```

## Kiểm tra

### Chế độ Test

```bash
# Sử dụng các khóa chế độ test của Polar.sh
POLAR_SECRET_KEY=polar_sk_test_...
POLAR_WEBHOOK_SECRET=whsec_test_...
```

### Kiểm tra Webhook

```bash
# Cài đặt Polar CLI
npm install -g @polar-sh/cli

# Chuyển tiếp webhook về local
polar webhooks forward --url http://localhost:3000/api/webhooks/polar
```

### Kích hoạt các sự kiện kiểm tra

```bash
# Kiểm tra việc tạo đăng ký
polar trigger subscription.created --subscription-id sub_test_123

# Kiểm tra thanh toán thất bại
polar trigger payment.failed --subscription-id sub_test_123
```

## Các trường hợp sử dụng phổ biến

### 1. SaaS với các cấp độ (Tiers)

```bash
/integrate:polar [3 cấp độ: Starter ($19), Pro ($49), Enterprise ($199), dùng thử 14 ngày]
```

### 2. Tính phí theo lưu lượng

```bash
/integrate:polar [cơ bản $29/tháng + $0.10 cho mỗi GB lưu trữ trên 100GB]
```

### 3. Thanh toán một lần

```bash
/integrate:polar [bán khóa học với thanh toán một lần $299]
```

### 4. Mô hình Freemium

```bash
/integrate:polar [cấp độ miễn phí với khả năng nâng cấp lên Pro ($29/tháng) kèm theo chặn tính năng]
```

## Xử lý sự cố

### Không nhận được Webhook

**Vấn đề:** Webhook không gửi tới endpoint

**Kiểm tra:**
```bash
# 1. Xác minh URL webhook trong dashboard Polar
# 2. Kiểm tra endpoint có thể truy cập được không
curl -X POST http://your-domain.com/api/webhooks/polar

# 3. Kiểm tra nhật ký webhook trong dashboard Polar
# 4. Xác minh bí mật webhook khớp với .env
```

### Thanh toán thất bại

**Vấn đề:** Thanh toán của khách hàng thất bại

**Được xử lý tự động:**
- Webhook `payment.failed` được kích hoạt
- Trạng thái đăng ký → `past_due`
- Khách hàng được thông báo qua email
- Logic thử lại trong Polar xử lý việc thanh toán lại
- Thời gian ân hạn trước khi hủy bỏ

### Đăng ký không đồng bộ

**Vấn đề:** Cơ sở dữ liệu không khớp với Polar

**Giải pháp:**
```bash
# Chạy script đồng bộ (được tạo trong quá trình tích hợp)
npm run sync:subscriptions

# Hoặc truy vấn API Polar thủ công
const subscription = await polar.subscriptions.get(subscriptionId);
await syncToDB(subscription);
```

## Danh sách kiểm tra triển khai Production

Trước khi chạy thực tế:

```
□ Chuyển sang các khóa API production
□ Cấu hình endpoint webhook (phải là HTTPS)
□ Kiểm tra việc xác minh chữ ký webhook
□ Thiết lập giám sát webhook (ghi nhật ký)
□ Cấu hình cài đặt thuế trong dashboard Polar
□ Tạo các sản phẩm/giá cả trên production
□ Cập nhật .env với các ID sản phẩm production
□ Kiểm tra luồng đăng ký từ đầu đến cuối
□ Kiểm tra luồng hủy bỏ
□ Kiểm tra nâng cấp/hạ cấp
□ Thiết lập các mẫu email hóa đơn
□ Cấu hình thương hiệu cổng thông tin khách hàng
□ Thêm liên kết điều khoản dịch vụ
□ Thêm liên kết chính sách bảo mật
□ Thiết lập thông báo thất bại thanh toán
□ Cấu hình cài đặt dunning
□ Kiểm tra với thẻ thật (sau đó hoàn tiền)
```

## Các tệp được tạo

Sau khi `/integrate:polar` hoàn thành:

### Backend

```
src/routes/billing.routes.ts
src/controllers/billing.controller.ts
src/services/polar.service.ts
src/services/subscription.service.ts
src/webhooks/polar.webhook.ts
src/models/subscription.model.ts
src/models/customer.model.ts
src/middleware/subscription.middleware.ts
```

### Frontend

```
src/components/PricingTable.tsx
src/components/CheckoutButton.tsx
src/components/SubscriptionStatus.tsx
src/components/CustomerPortal.tsx
src/hooks/useSubscription.ts
```

### Cơ sở dữ liệu

```
migrations/YYYYMMDD-add-billing-tables.sql
```

### Kiểm tra

```
tests/integration/billing.test.ts
tests/webhooks/polar.webhook.test.ts
tests/services/subscription.service.test.ts
```

### Tài liệu

```
docs/billing/polar-integration.md
docs/billing/webhook-events.md
docs/billing/testing-guide.md
```

## Bước tiếp theo

Sau khi tích hợp:

```bash
# 1. Tích hợp hoàn tất
/integrate:polar [các yêu cầu]

# 2. Thêm khóa API
cp .env.example .env
# Thêm POLAR_SECRET_KEY và các khóa khác

# 3. Chạy migration
npm run migrate

# 4. Kiểm tra trong chế độ test
npm run dev
# Truy cập /pricing và kiểm tra thanh toán

# 5. Chạy các bài kiểm tra
/test

# 6. Triển khai lên staging
/deploy [staging]

# 7. Kiểm tra từ đầu đến cuối trên staging

# 8. Chuyển sang các khóa production

# 9. Triển khai lên production
/deploy [production]

# 10. Giám sát webhook
# Kiểm tra nhật ký và dashboard Polar
```

## Các lệnh liên quan

- [/integrate:sepay](/vi/docs/engineer/commands/integrate/sepay) - Cổng thanh toán Việt Nam
- [/cook](/vi/docs/engineer/commands/core/cook) - Triển khai các tính năng tùy chỉnh
- [/test](/vi/docs/engineer/commands/core/test) - Chạy bộ kiểm tra

---

**Điểm mấu chốt**: `/integrate:polar` cung cấp giải pháp tích hợp thanh toán Polar.sh hoàn chỉnh bao gồm đăng ký, webhook, cổng thông tin khách hàng và tất cả mã nguồn backend/frontend cần thiết kèm theo kiểm tra và tài liệu—sẵn sàng cho production trong vài phút.
