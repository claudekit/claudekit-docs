---
title: Payment Integration
description: Implement payment processing with SePay (Vietnamese payments) and Polar (global SaaS monetization)
section: engineer
kit: engineer
category: skills
order: 1
published: true
---

# Payment Integration

Implement payment processing with SePay (Vietnamese market) and Polar (global SaaS monetization).

## When to Use

- Payment gateway integration and checkout flows
- Subscription management with trials, upgrades, and billing
- QR code payments (VietQR, NAPAS) and bank transfers
- Usage-based billing with metering and credits
- Automated benefit delivery (licenses, GitHub access, Discord roles)
- Webhook handling for payment notifications
- Customer portals for self-service management
- Tax compliance and global payments

## Platform Selection

### Choose SePay for:

- Vietnamese market (VND currency)
- Bank transfer automation (44+ Vietnamese banks)
- VietQR/NAPAS payments
- Local payment methods
- Direct bank account monitoring

### Choose Polar for:

- Global SaaS products
- Subscription lifecycle management
- Usage-based billing
- Automated benefits (GitHub, Discord, licenses)
- Merchant of Record (handles global tax compliance)
- Digital product sales

## Key Capabilities

| Feature | SePay | Polar |
|---------|-------|-------|
| Payment methods | QR, bank transfer, cards | Cards, subscriptions, usage-based |
| Bank monitoring | Webhooks for 44+ VN banks | N/A |
| Tax handling | Manual | MoR (global compliance) |
| Subscriptions | Manual | Full lifecycle management |
| Benefits automation | Manual | GitHub, Discord, licenses, files |
| Rate limit | 2 calls/second | 300 req/min |
| Customer portal | No | Built-in self-service |

## Common Use Cases

### Vietnamese E-commerce Checkout

Implement VietQR payment flow with bank transfer monitoring.

```
"Set up SePay checkout with VietQR generation for bank transfers. Monitor transactions via webhook and mark orders paid when bank account receives matching amount."
```

### SaaS Subscription Platform

Build subscription system with automated license delivery.

```
"Use Polar to create subscription product with 3 tiers. Implement checkout flow and webhook handler that auto-generates license keys on successful subscription."
```

### Usage-Based Billing

Implement metered billing for API usage or credits.

```
"Set up Polar usage-based pricing that tracks API calls per month. Configure webhooks to monitor usage and automatically upgrade/downgrade subscriptions."
```

### Automated GitHub Access

Deliver private repository access on payment.

```
"Use Polar's GitHub benefit to automatically grant repository access when customer subscribes. Remove access on subscription cancellation."
```

## Implementation Workflow

### SePay Quick Start

1. Load `references/sepay/overview.md` for auth setup
2. Load `references/sepay/sdk.md` for integration code
3. Load `references/sepay/webhooks.md` for payment notifications
4. Use `scripts/sepay-webhook-verify.js` for webhook verification
5. Load `references/sepay/best-practices.md` for production

### Polar Quick Start

1. Load `references/polar/overview.md` for auth and concepts
2. Load `references/polar/products.md` for product setup
3. Load `references/polar/checkouts.md` for payment flows
4. Load `references/polar/webhooks.md` for event handling
5. Load `references/polar/benefits.md` for automated delivery
6. Use `scripts/polar-webhook-verify.js` for webhook verification
7. Load `references/polar/best-practices.md` for production

## Pro Tips

- Start with sandbox/test mode before production deployment
- Always verify webhook signatures to prevent fraudulent requests
- Load references progressively - only what you need for current step
- Use provided scripts for webhook verification boilerplate
- For SePay: Monitor rate limits (2 calls/second)
- For Polar: Leverage MoR benefits to avoid tax compliance complexity
- **Not activating?** Say: "Use payment-integration skill to integrate Polar checkout"

## Related Skills

- [Backend Development](/docs/engineer/skills/backend/backend-development) - API implementation
- [Web Frameworks](/docs/engineer/skills/frontend/web-frameworks) - Checkout UI integration

---

## Key Takeaway

 Use SePay for Vietnamese market (VietQR, bank transfers, 44+ banks) and Polar for global SaaS (subscriptions, usage billing, automated benefits with tax compliance).
