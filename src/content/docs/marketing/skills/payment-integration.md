---
title: "ckm:payment-integration"
description: "Integrate payment processing with SePay, Polar, and Stripe — subscriptions, one-time payments, webhooks, and billing portals."
section: marketing
kit: marketing
category: skills
order: 95
---

# `ckm:payment-integration`

> Add payment processing to your product with battle-tested implementations for SePay (Vietnam), Polar (open source), and Stripe (global).

## What This Skill Does

**The Challenge**: Payment integration involves security requirements, webhook reliability, subscription lifecycle management, and compliance. Each platform has distinct APIs and patterns. Getting it wrong means lost revenue or security vulnerabilities.

**The Solution**: Payment Integration skill provides platform-specific implementation guides, webhook handling patterns, subscription management, and error recovery strategies for SePay, Polar, and Stripe.

## Activation

**Implicit**: Activates when implementing payment flows, billing systems, or subscription management.

**Explicit**: Activate via prompt:
```
Activate payment-integration skill to add Stripe subscription billing to our SaaS
```

## Capabilities

### 1. Stripe Integration
Full-featured subscription billing with Stripe.

**Core flows**:
- Checkout Session (one-time + subscription)
- Customer Portal (self-service billing management)
- Webhook handling for subscription lifecycle events
- Proration for plan upgrades/downgrades

**Setup**:
```bash
npm install stripe
```

```typescript
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Create checkout session
const session = await stripe.checkout.sessions.create({
  mode: 'subscription',
  line_items: [{ price: priceId, quantity: 1 }],
  success_url: `${baseUrl}/success`,
  cancel_url: `${baseUrl}/pricing`,
});
```

### 2. Polar Integration
Open-source billing for developer tools and open-source projects.

**Key features**: GitHub Sponsors integration, benefit delivery, usage-based billing

```bash
npm install @polar-sh/sdk
```

```typescript
import { Polar } from '@polar-sh/sdk';
const polar = new Polar({ accessToken: process.env.POLAR_ACCESS_TOKEN });
```

### 3. SePay Integration
Vietnam-specific payment gateway with bank transfer and QR code support.

**Payment methods**: Bank transfer, QR code (VietQR), domestic cards

**Webhook verification**:
```typescript
// Verify SePay webhook signature
const signature = crypto
  .createHmac('sha256', process.env.SEPAY_WEBHOOK_SECRET!)
  .update(rawBody)
  .digest('hex');
```

## Prerequisites

- HTTPS endpoint for webhooks (use ngrok for local development)
- Platform account with API keys configured
- Database table for storing payment/subscription state

## Configuration

**Environment variables** (`.env`):
```bash
# Stripe
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# Polar
POLAR_ACCESS_TOKEN=polar_xxx

# SePay
SEPAY_API_KEY=xxx
SEPAY_WEBHOOK_SECRET=xxx
```

## Best Practices

**1. Always verify webhook signatures**
Never trust webhook payloads without signature verification. Reject unsigned requests with 401.

**2. Make webhook handlers idempotent**
Webhooks can fire multiple times. Use event ID deduplication to prevent double-processing.

**3. Store payment state in your database**
Don't rely solely on payment provider state. Sync subscription status locally for performance.

## Common Use Cases

### Use Case 1: SaaS Subscription with Stripe
**Scenario**: Monthly/annual subscription with free trial.

**Webhook events to handle**:
- `checkout.session.completed` → Provision access
- `customer.subscription.updated` → Update plan
- `customer.subscription.deleted` → Revoke access
- `invoice.payment_failed` → Send dunning email

**Output**: Complete subscription lifecycle implementation.

### Use Case 2: Vietnam E-commerce with SePay
**Scenario**: Accept VietQR bank transfer payments.

**Workflow**:
1. Generate payment QR code via SePay API
2. Display QR with amount and transfer note
3. Receive webhook on successful transfer
4. Verify signature and amount
5. Fulfill order

**Output**: QR payment flow with webhook confirmation.

## Troubleshooting

**Issue**: Webhooks not receiving events
**Solution**: Verify webhook endpoint is publicly accessible. Check Stripe/Polar dashboard webhook logs for delivery attempts.

**Issue**: Subscription status out of sync
**Solution**: Implement webhook retry handling. Add background job to sync status from payment provider.

## Related Skills

- [Web Frameworks](/docs/marketing/skills/web-frameworks) - Next.js API routes for payment endpoints
- [Shopify](/docs/marketing/skills/shopify) - E-commerce payment flows

## Related Commands

- `/ckm:payment-integration` - Payment implementation workflows
- `/ckm:cook` - End-to-end feature implementation including payments
