---
title: /integrate:sepay
description: Implement payment integration with SePay.vn for Vietnamese market with QR codes and bank transfers
category: commands
order: 2
published: true
---

# /integrate:sepay

Implement complete payment integration with SePay.vn, Vietnam's leading payment gateway. This command handles QR code payments, bank transfers, webhook processing, and all necessary backend logic for Vietnamese market monetization.

## Syntax

```bash
/integrate:sepay [integration requirements]
```

## How It Works

The `/integrate:sepay` command follows a comprehensive integration workflow:

### 1. Requirements Analysis

- Identifies payment methods needed (QR, bank transfer, card)
- Determines payment flow (one-time, subscription, top-up)
- Analyzes existing codebase architecture
- Plans database schema for Vietnamese payment data

### 2. SePay Research

Invokes **researcher** agent to:
- Review latest SePay API documentation
- Check Vietnam-specific payment regulations
- Identify localization requirements
- Study webhook handling patterns
- Research VND currency handling

### 3. Implementation Planning

Creates detailed plan for:
- API routes and endpoints
- Database models (Vietnamese fields)
- Webhook handlers
- QR code generation
- Bank transfer tracking
- Payment confirmation flow
- Error handling (Vietnamese language)
- Testing strategy

### 4. Code Implementation

Invokes **code** agent to implement:
- SePay SDK integration
- Payment creation endpoints
- QR code generation and display
- Bank transfer instructions
- Webhook processing
- Payment status polling
- Database operations with VND support
- Vietnamese localization

### 5. Testing & Compliance

- Generates comprehensive tests
- Implements webhook signature verification
- Adds Vietnamese bank ID validation
- Tests payment lifecycle
- Validates Vietnamese regulatory compliance

## Examples

### Basic QR Code Payment Integration

```bash
/integrate:sepay [add SePay QR code payments for course purchases, support Vietcombank, Techcombank, BIDV]
```

**What happens:**
```
Phase 1: Analysis (30 seconds)
---
Agent: planner

Requirements identified:
✓ QR code payment method
✓ Course purchase (one-time payment)
✓ Support major Vietnamese banks
✓ VND currency handling
✓ Payment confirmation flow
✓ Webhook processing

Vietnam-specific requirements:
✓ Bank account validation
✓ Vietnamese language support
✓ VND formatting (no decimals)
✓ Transaction reference format
✓ Bank transfer instructions

Architecture decisions:
- Backend: Node.js/Express detected
- Database: PostgreSQL detected
- Frontend: React detected
- Currency: VND (no decimals)

Phase 2: Research (45 seconds)
---
Agent: researcher

SePay API features analyzed:
✓ QR Code API (Dynamic QR)
✓ Bank Transfer API
✓ Webhook events (payment.success, payment.expired)
✓ Transaction verification
✓ Supported banks (18 major Vietnamese banks)
✓ QR code expiry (15 minutes default)

Vietnamese payment regulations:
✓ Transaction reference format: ABC123
✓ Max transaction: 500,000,000 VND
✓ Min transaction: 1,000 VND
✓ VAT handling (10% standard)
✓ Invoice requirements

Phase 3: Implementation Plan
---
Files to create:

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

2. Database:
   - migrations/add-sepay-tables.sql

3. Frontend:
   - src/components/PaymentQR.tsx
   - src/components/BankTransferInstructions.tsx
   - src/components/PaymentStatus.tsx
   - src/components/PaymentHistory.tsx
   - src/hooks/usePayment.ts
   - src/utils/vnd-format.ts

4. Configuration:
   - .env.example (add SePay credentials)
   - config/sepay.config.ts
   - locales/vi.json (Vietnamese translations)

5. Tests:
   - tests/integration/payment.test.ts
   - tests/webhooks/sepay.webhook.test.ts
   - tests/utils/vnd-formatter.test.ts

Phase 4: Code Implementation (2-3 minutes)
---
Agent: code

✓ SePay SDK installed (sepay-node-sdk)
✓ Database migrations created
✓ Models implemented (Payment, Transaction)
✓ SePay service with error handling
✓ Transaction service with VND support
✓ API routes created:
  - POST /api/payment/create
  - GET /api/payment/:id
  - GET /api/payment/:id/qr
  - GET /api/payment/:id/status
  - POST /api/payment/:id/verify
  - GET /api/payment/history

✓ Webhook endpoint implemented:
  - POST /api/webhooks/sepay
  - Signature verification
  - Event handlers for:
    • payment.success
    • payment.expired
    • payment.failed
    • payment.pending

✓ Frontend components created:
  - QR code display with countdown
  - Bank transfer instructions
  - Payment status tracking
  - Vietnamese formatting

✓ Vietnamese localization:
  - Error messages in Vietnamese
  - Bank names in Vietnamese
  - Payment instructions in Vietnamese
  - Success/failure messages

✓ VND utilities:
  - Format: 1,000,000 ₫
  - Parse: Handle comma separators
  - Validate: No decimals, min/max

Phase 5: Database Schema
---
Created tables:

payments:
- id (uuid, primary key)
- user_id (uuid, foreign key)
- sepay_transaction_id (text, unique)
- order_id (text) -- course purchase ID
- amount (bigint) -- in VND, no decimals
- currency (text) -- always 'VND'
- status (text) -- 'pending', 'success', 'expired', 'failed'
- payment_method (text) -- 'qr', 'bank_transfer'
- bank_code (text) -- 'VCB', 'TCB', 'BIDV', etc.
- qr_code_url (text)
- qr_expires_at (timestamp)
- paid_at (timestamp)
- created_at (timestamp)
- updated_at (timestamp)

transactions:
- id (uuid, primary key)
- payment_id (uuid, foreign key)
- transaction_ref (text) -- Vietnamese bank ref
- bank_transaction_id (text)
- sender_account (text)
- sender_name (text)
- receiver_account (text)
- transfer_content (text)
- transferred_at (timestamp)
- verified_at (timestamp)
- created_at (timestamp)

Phase 6: Configuration
---
Environment variables added:

SEPAY_APP_ID=your_app_id
SEPAY_SECRET_KEY=your_secret_key
SEPAY_WEBHOOK_SECRET=your_webhook_secret
SEPAY_ACCOUNT_NUMBER=0123456789
SEPAY_ACCOUNT_NAME=YOUR_COMPANY_NAME
SEPAY_BANK_CODE=VCB
FRONTEND_URL=http://localhost:3000

Phase 7: Frontend Integration
---
Payment QR Code component:

<PaymentQR paymentId={paymentId} />

Displays:
- QR code image (auto-refreshes)
- Amount in VND format: 1,000,000 ₫
- Countdown timer (15:00)
- Bank transfer instructions
- Payment status updates (real-time)
- Auto-redirect on success

Bank Transfer Instructions:

<BankTransferInstructions payment={payment} />

Shows:
- Bank name (Vietnamese)
- Account number
- Account holder name
- Transfer amount
- Transfer content (unique ref)
- Copy buttons for each field

Example:
---
Ngân hàng: Vietcombank (VCB)
Số tài khoản: 0123456789
Tên tài khoản: CONG TY CLAUDEKIT
Số tiền: 1,000,000 ₫
Nội dung: COURSE ABC123

[Sao chép tất cả]
---

Phase 8: Payment Flow
---
1. User clicks "Thanh toán" (Pay)
2. Backend creates SePay payment
3. Frontend displays QR code
4. User scans QR with banking app
5. User confirms payment in app
6. Bank sends transaction to SePay
7. SePay webhook notifies backend
8. Backend verifies payment
9. Database updated (status: success)
10. Frontend shows success message
11. Course access granted

Timeout handling:
- QR expires after 15 minutes
- User can generate new QR
- Expired payments marked 'expired'

Phase 9: Testing (1 minute)
---
Agent: tester

Generated tests:
✓ Payment creation tests (12 tests)
✓ QR code generation tests (8 tests)
✓ Webhook processing tests (18 tests)
✓ VND formatting tests (15 tests)
✓ Bank validation tests (10 tests)
✓ Transaction verification tests (14 tests)
✓ Payment expiry tests (9 tests)
✓ Error handling tests (12 tests)

All 98 tests passed
Coverage: 96%

Phase 10: Documentation
---
Created documentation:

docs/payment/sepay-integration.md:
- Setup instructions
- Bank account configuration
- Environment variables
- API endpoints
- Webhook events
- Testing with SePay sandbox
- Vietnamese bank codes
- Troubleshooting guide
- Production deployment checklist

✓ Integration complete (4 minutes 15 seconds)

Summary:
---
✓ 16 files created
✓ 7 API endpoints implemented
✓ 4 webhook events handled
✓ 2 database tables
✓ 5 React components
✓ Vietnamese localization
✓ 98 tests (96% coverage)
✓ Complete documentation

Next steps:
1. Register SePay account at sepay.vn
2. Get App ID and Secret Key
3. Configure bank account
4. Add credentials to .env
5. Run migrations: npm run migrate
6. Test with SePay sandbox
7. Deploy to staging
```

### Subscription Billing with Auto-Renewal

```bash
/integrate:sepay [implement monthly subscription billing 299,000 VND/month with auto bank transfer reminders]
```

**What happens:**
```
Phase 1: Analysis
---
Requirements:
✓ Monthly subscription (299,000 VND)
✓ Auto-renewal reminders via email
✓ Bank transfer payment method
✓ Grace period (3 days)
✓ Suspension after grace period
✓ Reactivation flow

Vietnamese subscription pattern:
- Manual bank transfer each month
- Email reminder 3 days before expiry
- Fixed transfer content for tracking
- No auto-charge (regulatory)

Phase 2: Implementation
---
Additional components:

1. Subscription Management:
   - src/services/subscription.service.ts
   - src/models/subscription.model.ts
   - src/jobs/subscription-reminder.job.ts
   - src/jobs/subscription-expiry.job.ts

2. Email Notifications:
   - templates/email/subscription-reminder-vi.html
   - templates/email/subscription-expired-vi.html
   - templates/email/payment-confirmed-vi.html

3. Cron Jobs:
   - Daily check for subscriptions expiring in 3 days
   - Daily check for expired subscriptions
   - Send email reminders with payment instructions

4. Payment Verification:
   - Manual verification endpoint
   - Auto-verification via webhook
   - Admin dashboard for verification

Database schema additions:
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

Email reminder example:
---
Tiêu đề: Gia hạn gói ClaudeKit Pro

Xin chào [Tên],

Gói ClaudeKit Pro của bạn sẽ hết hạn vào 3 ngày nữa
(ngày 15/11/2025).

Để tiếp tục sử dụng, vui lòng thanh toán:

Số tiền: 299,000 ₫
Ngân hàng: Vietcombank (VCB)
Số tài khoản: 0123456789
Nội dung: SUB[user_id]

[Thanh toán ngay]

Cảm ơn bạn đã tin dùng ClaudeKit!
---

✓ Subscription billing complete (5 minutes)
```

## SePay Features Implemented

### 1. QR Code Payment

```typescript
// Create payment and generate QR
const payment = await sepay.createPayment({
  amount: 1000000, // 1,000,000 VND
  orderId: 'ORDER123',
  description: 'Course purchase',
  returnUrl: `${FRONTEND_URL}/payment/success`,
});

// Get QR code URL
const qrCodeUrl = payment.qrCodeUrl;

// Frontend displays QR
<img src={qrCodeUrl} alt="Scan to pay" />
```

### 2. Bank Transfer Instructions

```typescript
// Generate transfer instructions
const instructions = {
  bankCode: 'VCB', // Vietcombank
  accountNumber: process.env.SEPAY_ACCOUNT_NUMBER,
  accountName: process.env.SEPAY_ACCOUNT_NAME,
  amount: 1000000,
  content: `COURSE${orderId}`, // Unique reference
};

// Display to user with copy buttons
```

### 3. Payment Verification

```typescript
// Check payment status
const status = await sepay.verifyPayment(transactionId);

if (status === 'success') {
  // Grant access
  await grantCourseAccess(userId, courseId);
}
```

### 4. Webhook Processing

```typescript
// Webhook handler with signature verification
app.post('/api/webhooks/sepay', async (req, res) => {
  const signature = req.headers['sepay-signature'];

  // Verify signature
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

## Vietnamese Bank Codes

Supported major banks:

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

## VND Currency Handling

### Formatting

```typescript
// Format VND (no decimals)
function formatVND(amount: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Usage
formatVND(1000000); // "1.000.000 ₫"
formatVND(299000);  // "299.000 ₫"
```

### Parsing

```typescript
// Parse VND string to number
function parseVND(str: string): number {
  return parseInt(str.replace(/[^\d]/g, ''), 10);
}

// Usage
parseVND("1.000.000 ₫"); // 1000000
parseVND("299,000");     // 299000
```

### Validation

```typescript
// Validate VND amount
function validateVND(amount: number): boolean {
  const MIN = 1000;        // 1,000 VND
  const MAX = 500000000;   // 500,000,000 VND

  return (
    amount >= MIN &&
    amount <= MAX &&
    Number.isInteger(amount) // No decimals
  );
}
```

## Vietnamese Localization

### Payment Status Messages

```typescript
const messages = {
  pending: 'Đang chờ thanh toán',
  success: 'Thanh toán thành công',
  expired: 'Đã hết hạn',
  failed: 'Thanh toán thất bại',
};
```

### Error Messages

```typescript
const errors = {
  INVALID_AMOUNT: 'Số tiền không hợp lệ',
  PAYMENT_EXPIRED: 'QR code đã hết hạn',
  PAYMENT_NOT_FOUND: 'Không tìm thấy giao dịch',
  INSUFFICIENT_AMOUNT: 'Số tiền chuyển không đủ',
};
```

## Testing

### Sandbox Mode

```bash
# Use SePay sandbox credentials
SEPAY_APP_ID=test_app_id
SEPAY_SECRET_KEY=test_secret_key
SEPAY_WEBHOOK_SECRET=test_webhook_secret
```

### Test Bank Accounts

```
Test accounts provided by SePay:
- Account: 0123456789 (always success)
- Account: 9876543210 (always fail)
- Account: 5555555555 (expires after 1 min)
```

### Webhook Testing

```bash
# Forward webhooks to local (SePay CLI)
sepay webhooks forward --url http://localhost:3000/api/webhooks/sepay

# Trigger test event
sepay trigger payment.success --transaction-id TXN123
```

## Common Use Cases

### 1. Course Purchase

```bash
/integrate:sepay [one-time payment for course, support QR and bank transfer]
```

### 2. Subscription

```bash
/integrate:sepay [monthly subscription 299,000 VND with email reminders]
```

### 3. Wallet Top-Up

```bash
/integrate:sepay [wallet top-up any amount 10,000-10,000,000 VND]
```

### 4. Service Payment

```bash
/integrate:sepay [pay for services with instant confirmation]
```

## Troubleshooting

### QR Code Expired

**Problem:** User didn't pay within 15 minutes

**Solution:**
```typescript
// Provide "Generate New QR" button
const newPayment = await sepay.createPayment({
  amount: originalAmount,
  orderId: orderId,
});

// Update UI with new QR
setQrCodeUrl(newPayment.qrCodeUrl);
```

### Payment Not Detected

**Problem:** User paid but webhook not received

**Solution:**
```typescript
// Provide manual verification button
<button onClick={async () => {
  const status = await sepay.verifyPayment(transactionId);
  if (status === 'success') {
    // Grant access
  }
}}>
  Kiểm tra thanh toán
</button>
```

### Wrong Transfer Amount

**Problem:** User transferred incorrect amount

**Solution:**
```typescript
// Webhook receives actual amount
if (event.data.amount < expectedAmount) {
  // Notify user of shortage
  await sendEmail(user, 'amount_mismatch', {
    expected: expectedAmount,
    received: event.data.amount,
    shortage: expectedAmount - event.data.amount,
  });
}
```

## Production Checklist

Before going live:

```
□ Register business account at sepay.vn
□ Complete business verification (1-3 days)
□ Get production credentials
□ Configure webhook endpoint (HTTPS required)
□ Test with real bank account (small amount)
□ Set up webhook monitoring
□ Configure email notifications
□ Add Vietnamese terms of service
□ Add refund policy (in Vietnamese)
□ Test with multiple banks
□ Set up customer support (Vietnamese language)
□ Configure invoice generation (VAT if applicable)
□ Test subscription renewal flow
□ Set up payment reconciliation process
□ Add admin dashboard for payment verification
```

## Next Steps

After integration:

```bash
# 1. Integration complete
/integrate:sepay [requirements]

# 2. Register SePay account
# Visit sepay.vn and register

# 3. Add credentials
cp .env.example .env
# Add SEPAY_APP_ID, SEPAY_SECRET_KEY, etc.

# 4. Run migrations
npm run migrate

# 5. Test in sandbox mode
npm run dev
# Make test payment

# 6. Run tests
/test

# 7. Deploy to staging
/deploy [staging]

# 8. Test with real bank (small amount)

# 9. Switch to production credentials

# 10. Deploy to production
/deploy [production]
```

## Related Commands

- [/integrate:polar](/docs/commands/integrate/polar) - International payments
- [/cook](/docs/commands/core/cook) - Implement custom features
- [/test](/docs/commands/core/test) - Run test suite

---

**Key Takeaway**: `/integrate:sepay` provides complete SePay.vn payment integration optimized for Vietnamese market with QR codes, bank transfers, VND formatting, Vietnamese localization, and all necessary backend/frontend code—production-ready for Vietnam in minutes.
