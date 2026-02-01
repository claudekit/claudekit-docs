---
title: Payment Integration
description: Implement payment processing với SePay (Vietnamese payments) và Polar (global SaaS monetization)
section: engineer
kit: engineer
category: skills
order: 1
published: true
lang: vi
---

# Payment Integration

Implement payment processing với SePay (thị trường Việt Nam) và Polar (global SaaS monetization).

## Khi Nào Sử Dụng

- Payment gateway integration và checkout flows
- Subscription management với trials, upgrades và billing
- QR code payments (VietQR, NAPAS) và bank transfers
- Usage-based billing với metering và credits
- Automated benefit delivery (licenses, GitHub access, Discord roles)
- Webhook handling cho payment notifications
- Customer portals cho self-service management
- Tax compliance và global payments

## Platform Selection

### Chọn SePay Cho:

- Thị trường Việt Nam (VND currency)
- Bank transfer automation (44+ Vietnamese banks)
- VietQR/NAPAS payments
- Local payment methods
- Direct bank account monitoring

### Chọn Polar Cho:

- Global SaaS products
- Subscription lifecycle management
- Usage-based billing
- Automated benefits (GitHub, Discord, licenses)
- Merchant of Record (xử lý global tax compliance)
- Digital product sales

## Khả Năng Chính

| Tính Năng | SePay | Polar |
|-----------|-------|-------|
| Payment methods | QR, bank transfer, cards | Cards, subscriptions, usage-based |
| Bank monitoring | Webhooks cho 44+ VN banks | N/A |
| Tax handling | Manual | MoR (global compliance) |
| Subscriptions | Manual | Full lifecycle management |
| Benefits automation | Manual | GitHub, Discord, licenses, files |
| Rate limit | 2 calls/second | 300 req/min |
| Customer portal | Không | Built-in self-service |

## Common Use Cases

### Vietnamese E-commerce Checkout

Implement VietQR payment flow với bank transfer monitoring.

```
"Set up SePay checkout với VietQR generation cho bank transfers. Monitor transactions qua webhook và mark orders paid khi bank account nhận matching amount."
```

### SaaS Subscription Platform

Build subscription system với automated license delivery.

```
"Dùng Polar để tạo subscription product với 3 tiers. Implement checkout flow và webhook handler tự động generate license keys khi successful subscription."
```

### Usage-Based Billing

Implement metered billing cho API usage hoặc credits.

```
"Set up Polar usage-based pricing track API calls per month. Configure webhooks để monitor usage và tự động upgrade/downgrade subscriptions."
```

### Automated GitHub Access

Deliver private repository access khi payment.

```
"Dùng Polar's GitHub benefit để tự động grant repository access khi customer subscribes. Remove access khi subscription cancellation."
```

## Implementation Workflow

### SePay Quick Start

1. Load `references/sepay/overview.md` cho auth setup
2. Load `references/sepay/sdk.md` cho integration code
3. Load `references/sepay/webhooks.md` cho payment notifications
4. Dùng `scripts/sepay-webhook-verify.js` cho webhook verification
5. Load `references/sepay/best-practices.md` cho production

### Polar Quick Start

1. Load `references/polar/overview.md` cho auth và concepts
2. Load `references/polar/products.md` cho product setup
3. Load `references/polar/checkouts.md` cho payment flows
4. Load `references/polar/webhooks.md` cho event handling
5. Load `references/polar/benefits.md` cho automated delivery
6. Dùng `scripts/polar-webhook-verify.js` cho webhook verification
7. Load `references/polar/best-practices.md` cho production

## Pro Tips

- Start với sandbox/test mode trước production deployment
- Luôn verify webhook signatures để prevent fraudulent requests
- Load references progressively - chỉ những gì bạn cần cho current step
- Dùng provided scripts cho webhook verification boilerplate
- Cho SePay: Monitor rate limits (2 calls/second)
- Cho Polar: Leverage MoR benefits để avoid tax compliance complexity
- **Không kích hoạt?** Nói: "Use payment-integration skill to integrate Polar checkout"

## Skills Liên Quan

- [Backend Development](/vi/docs/engineer/skills/backend/backend-development) - API implementation
- [Web Frameworks](/vi/docs/engineer/skills/frontend/web-frameworks) - Checkout UI integration

---

## Key Takeaway

Dùng SePay cho thị trường Việt Nam (VietQR, bank transfers, 44+ banks) và Polar cho global SaaS (subscriptions, usage billing, automated benefits với tax compliance).
