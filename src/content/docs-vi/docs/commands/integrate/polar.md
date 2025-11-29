---
title: /integrate:polar
description: "Documentation for /integrate:polar
description:
section: docs
category: commands/integrate
order: 70
published: true"
section: docs
category: commands/integrate
order: 70
published: true
---

# /integrate:polar

Implement complete payment integration with Polar.sh. This command handles subscriptions, one-time payments, webhook processing, customer portal, and all necessary backend logic for SaaS monetization.

## Syntax

```bash
/integrate:polar [integration requirements]
```

## How It Works

The `/integrate:polar` command follows a comprehensive integration workflow:

### 1. Requirements Analysis

- Identifies payment model (subscription, one-time, hybrid)
- Determines features needed (trials, coupons, metering, etc.)
- Analyzes existing codebase architecture
- Plans database schema for payment data

### 2. Polar.sh Research

Invokes **researcher** agent to:
- Review latest Polar.sh API documentation
- Check integration best practices
- Identify security requirements
- Study webhook handling patterns

### 3. Implementation Planning

Creates detailed plan for:
- API routes and endpoints
- Database models
- Webhook handlers
- Frontend components
- Error handling
- Testing strategy

### 4. Code Implementation

Invokes **code** agent to implement:
- Polar.sh SDK integration
- Payment flow endpoints
- Webhook processing
- Database operations
- Customer portal integration
- Error handling and logging

### 5. Testing & Security

- Generates comprehensive tests
- Implements webhook signature verification
- Adds error handling for all failure modes
- Tests subscription lifecycle events
- Validates PCI compliance requirements

## Examples

### Basic Subscription Integration

```bash
/integrate:polar [add Polar.sh subscription billing with 3 tiers: Free, Pro ($29/mo), Enterprise ($99/mo)]
```

**What happens:**
```
Phase 1: Analysis (30 seconds)
---
Agent: planner

Requirements identified:
✓ 3 subscription tiers
✓ Monthly billing
✓ Trial period (standard 14 days)
✓ Upgrade/downgrade flows
✓ Customer portal access
✓ Webhook processing

Architecture decisions:
- Backend: Node.js/Express detected
- Database: PostgreSQL detected
- Frontend: React detected

Phase 2: Research (45 seconds)
---
Agent: researcher

Polar.sh API features analyzed:
✓ Subscription API (v1)
✓ Webhook events (subscription.created, etc.)
✓ Customer portal (hosted)
✓ Checkout sessions
✓ Usage-based billing support
✓ Tax handling (automatic)

Best practices identified:
✓ Webhook signature verification required
✓ Idempotent webhook processing
✓ Subscription status synchronization
✓ Grace period handling

Phase 3: Implementation Plan
---
Agent: planner

Files to create:
1. Backend:
   - src/routes/billing.routes.ts
   - src/controllers/billing.controller.ts
   - src/services/polar.service.ts
   - src/services/subscription.service.ts
   - src/middleware/subscription.middleware.ts
   - src/webhooks/polar.webhook.ts
   - src/models/subscription.model.ts
   - src/models/customer.model.ts

2. Database:
   - migrations/add-billing-tables.sql

3. Frontend:
   - src/components/PricingTable.tsx
   - src/components/CheckoutButton.tsx
   - src/components/SubscriptionStatus.tsx
   - src/components/CustomerPortal.tsx
   - src/hooks/useSubscription.ts

4. Configuration:
   - .env.example (add Polar.sh keys)
   - config/polar.config.ts

5. Tests:
   - tests/integration/billing.test.ts
   - tests/webhooks/polar.webhook.test.ts
   - tests/services/subscription.service.test.ts

Phase 4: Code Implementation (2-3 minutes)
---
Agent: code

✓ Polar.sh SDK installed (@polar-sh/sdk)
✓ Database migrations created
✓ Models implemented (Subscription, Customer)
✓ Polar service with error handling
✓ Subscription service with lifecycle management
✓ API routes created:
  - POST /api/billing/checkout
  - GET /api/billing/portal
  - GET /api/billing/subscription
  - PUT /api/billing/subscription/upgrade
  - PUT /api/billing/subscription/downgrade
  - DELETE /api/billing/subscription/cancel

✓ Webhook endpoint implemented:
  - POST /api/webhooks/polar
  - Signature verification
  - Event handlers for:
    • subscription.created
    • subscription.updated
    • subscription.canceled
    • subscription.active
    • payment.succeeded
    • payment.failed

✓ Frontend components created
✓ Subscription middleware for route protection
✓ Error handling with retry logic
✓ Logging for all payment events

Phase 5: Database Schema
---
Created tables:

customers:
- id (uuid, primary key)
- user_id (uuid, foreign key)
- polar_customer_id (text, unique)
- email (text)
- created_at (timestamp)
- updated_at (timestamp)

subscriptions:
- id (uuid, primary key)
- customer_id (uuid, foreign key)
- polar_subscription_id (text, unique)
- tier (text) -- 'free', 'pro', 'enterprise'
- status (text) -- 'active', 'canceled', 'past_due', etc.
- current_period_start (timestamp)
- current_period_end (timestamp)
- cancel_at_period_end (boolean)
- created_at (timestamp)
- updated_at (timestamp)

payment_history:
- id (uuid, primary key)
- subscription_id (uuid, foreign key)
- polar_payment_id (text)
- amount (integer) -- in cents
- currency (text)
- status (text)
- paid_at (timestamp)
- created_at (timestamp)

Phase 6: Configuration
---
Environment variables added to .env.example:

POLAR_SECRET_KEY=polar_sk_...
POLAR_WEBHOOK_SECRET=whsec_...
POLAR_PRODUCT_ID_PRO=prod_...
POLAR_PRODUCT_ID_ENTERPRISE=prod_...
FRONTEND_URL=http://localhost:3000

Phase 7: Frontend Integration
---
Pricing page example created:

<PricingTable>
  <PricingTier
    name="Free"
    price="$0"
    features={[
      "Up to 5 AI agents",
      "Basic support",
      "Community access"
    ]}
    cta="Get Started"
  />

  <PricingTier
    name="Pro"
    price="$29"
    period="per month"
    features={[
      "Unlimited AI agents",
      "Priority support",
      "Advanced features",
      "API access"
    ]}
    cta={<CheckoutButton tier="pro" />}
    highlighted
  />

  <PricingTier
    name="Enterprise"
    price="$99"
    period="per month"
    features={[
      "Everything in Pro",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee"
    ]}
    cta={<CheckoutButton tier="enterprise" />}
  />
</PricingTable>

Customer portal integration:
<CustomerPortal /> component provides:
- View subscription details
- Update payment method
- Download invoices
- Cancel subscription
- Upgrade/downgrade

Phase 8: Testing (1 minute)
---
Agent: tester

Generated tests:
✓ Checkout flow tests (15 tests)
✓ Webhook processing tests (22 tests)
✓ Subscription lifecycle tests (18 tests)
✓ Upgrade/downgrade tests (12 tests)
✓ Cancellation tests (8 tests)
✓ Error handling tests (14 tests)

All 89 tests passed
Coverage: 94%

Phase 9: Documentation
---
Created documentation:

docs/billing/polar-integration.md:
- Setup instructions
- Environment variables
- API endpoints
- Webhook events
- Testing with Polar.sh CLI
- Production deployment checklist
- Common issues and solutions

✓ Integration complete (4 minutes 30 seconds)

Summary:
---
✓ 15 files created
✓ 8 API endpoints implemented
✓ 6 webhook events handled
✓ 3 database tables
✓ 4 React components
✓ 89 tests (94% coverage)
✓ Complete documentation

Next steps:
1. Add Polar.sh API keys to .env
2. Run migrations: npm run migrate
3. Test with Polar.sh test mode
4. Create products in Polar.sh dashboard
5. Update .env with product IDs
6. Deploy to staging
```

### Advanced Integration with Usage-Based Billing

```bash
/integrate:polar [implement Polar.sh with usage-based billing for API calls, $49 base + $0.01 per API call over 10k]
```

**What happens:**
```
Phase 1: Analysis
---
Requirements:
✓ Base subscription ($49/month)
✓ Usage-based add-on ($0.01 per API call)
✓ Included quota (10,000 calls/month)
✓ Usage tracking and reporting
✓ Overage warnings

Additional complexity:
- API call metering required
- Usage aggregation
- Invoice preview before billing
- Usage reset on billing cycle

Phase 2: Implementation
---
Added components:

1. Usage Tracking:
   - src/middleware/usage-tracking.middleware.ts
   - src/services/usage.service.ts
   - Database table: api_usage

2. Usage Reporting:
   - src/routes/usage.routes.ts
   - GET /api/usage/current
   - GET /api/usage/history
   - GET /api/usage/invoice-preview

3. Polar Metered Billing:
   - Integration with Polar metered usage API
   - Hourly usage sync to Polar
   - Usage reset on billing cycle

4. Usage Alerts:
   - Email notifications at 80%, 100%, 150%
   - Dashboard warnings
   - Webhook events for threshold crossing

Phase 3: Usage Tracking Implementation
---
Middleware added to all API routes:

import { trackUsage } from './middleware/usage-tracking';

router.use('/api/v1', trackUsage);

Usage service:
- Tracks each API call
- Aggregates by subscription
- Syncs to Polar every hour
- Calculates overage charges

Database schema:
api_usage:
- id, subscription_id, endpoint
- request_count, timestamp
- billing_period_start, billing_period_end

Phase 4: Frontend Updates
---
Added components:
- <UsageChart /> - Visual usage graph
- <UsageAlerts /> - Warning banners
- <InvoicePreview /> - Estimated next bill
- <UsageTable /> - Detailed breakdown

✓ Usage-based billing complete (6 minutes)
```

## Polar.sh Features Implemented

### 1. Checkout Sessions

```typescript
// Create checkout session
const checkout = await polar.checkouts.create({
  productId: POLAR_PRODUCT_ID,
  successUrl: `${FRONTEND_URL}/success`,
  customerEmail: user.email,
});

// Frontend redirects to:
window.location.href = checkout.url;
```

### 2. Webhook Processing

```typescript
// Webhook handler with signature verification
app.post('/api/webhooks/polar', async (req, res) => {
  const signature = req.headers['polar-signature'];

  // Verify signature
  const isValid = polar.webhooks.verify(
    req.body,
    signature,
    POLAR_WEBHOOK_SECRET
  );

  if (!isValid) {
    return res.status(400).json({ error: 'Invalid signature' });
  }

  // Handle event
  const event = req.body;

  switch (event.type) {
    case 'subscription.created':
      await handleSubscriptionCreated(event.data);
      break;
    case 'subscription.updated':
      await handleSubscriptionUpdated(event.data);
      break;
    // ... other events
  }

  res.json({ received: true });
});
```

### 3. Customer Portal

```typescript
// Generate customer portal URL
const portalUrl = await polar.customerPortal.createSession({
  customerId: customer.polarCustomerId,
  returnUrl: `${FRONTEND_URL}/settings`,
});

// Frontend redirects to:
window.location.href = portalUrl;
```

### 4. Subscription Management

```typescript
// Upgrade subscription
await polar.subscriptions.update(subscriptionId, {
  productId: NEW_PRODUCT_ID,
  prorationBehavior: 'create_prorations',
});

// Cancel subscription
await polar.subscriptions.cancel(subscriptionId, {
  cancelAtPeriodEnd: true,
});
```

## Webhook Events Handled

```
✓ subscription.created      - New subscription started
✓ subscription.updated      - Tier changed, status updated
✓ subscription.canceled     - Subscription canceled
✓ subscription.active       - Subscription became active
✓ subscription.past_due     - Payment failed
✓ payment.succeeded         - Payment successful
✓ payment.failed           - Payment failed
✓ customer.created         - New customer created
✓ customer.updated         - Customer details changed
✓ invoice.created          - New invoice generated
✓ invoice.paid             - Invoice paid
✓ invoice.payment_failed   - Invoice payment failed
```

## Database Schema

### Minimal Schema

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

## Security Best Practices

### 1. Webhook Signature Verification

```typescript
// ALWAYS verify webhook signatures
const isValid = polar.webhooks.verify(
  req.body,
  signature,
  POLAR_WEBHOOK_SECRET
);

if (!isValid) {
  throw new Error('Invalid webhook signature');
}
```

### 2. Idempotent Webhook Processing

```typescript
// Prevent duplicate processing
const existingEvent = await db.webhookEvents.findOne({
  eventId: event.id
});

if (existingEvent) {
  return; // Already processed
}

// Process event...

// Save event ID
await db.webhookEvents.create({
  eventId: event.id,
  processedAt: new Date()
});
```

### 3. API Key Security

```typescript
// NEVER expose secret key in frontend
// Backend only:
const polar = new Polar(process.env.POLAR_SECRET_KEY);

// Frontend uses API routes:
await fetch('/api/billing/checkout', {
  method: 'POST',
  headers: { Authorization: `Bearer ${userToken}` }
});
```

## Testing

### Test Mode

```bash
# Use Polar.sh test mode keys
POLAR_SECRET_KEY=polar_sk_test_...
POLAR_WEBHOOK_SECRET=whsec_test_...
```

### Webhook Testing

```bash
# Install Polar CLI
npm install -g @polar-sh/cli

# Forward webhooks to local
polar webhooks forward --url http://localhost:3000/api/webhooks/polar
```

### Trigger Test Events

```bash
# Test subscription created
polar trigger subscription.created --subscription-id sub_test_123

# Test payment failed
polar trigger payment.failed --subscription-id sub_test_123
```

## Common Use Cases

### 1. SaaS with Tiers

```bash
/integrate:polar [3 tiers: Starter ($19), Pro ($49), Enterprise ($199), 14-day trial]
```

### 2. Usage-Based Billing

```bash
/integrate:polar [base $29/mo + $0.10 per GB storage over 100GB]
```

### 3. One-Time Payments

```bash
/integrate:polar [sell course for $299 one-time payment]
```

### 4. Freemium Model

```bash
/integrate:polar [free tier with upgrade to Pro ($29/mo) with feature gating]
```

## Troubleshooting

### Webhook Not Received

**Problem:** Webhooks not hitting endpoint

**Check:**
```bash
# 1. Verify webhook URL in Polar dashboard
# 2. Check endpoint is accessible
curl -X POST http://your-domain.com/api/webhooks/polar

# 3. Check webhook logs in Polar dashboard
# 4. Verify webhook secret matches .env
```

### Payment Failed

**Problem:** Customer payment fails

**Handled automatically:**
- `payment.failed` webhook triggers
- Subscription status → `past_due`
- Customer notified via email
- Retry logic in Polar handles retries
- Grace period before cancellation

### Subscription Not Syncing

**Problem:** Database out of sync with Polar

**Solution:**
```bash
# Run sync script (generated during integration)
npm run sync:subscriptions

# Or manually query Polar API
const subscription = await polar.subscriptions.get(subscriptionId);
await syncToDB(subscription);
```

## Production Deployment Checklist

Before going live:

```
□ Switch to production API keys
□ Configure webhook endpoint (must be HTTPS)
□ Test webhook signature verification
□ Set up webhook monitoring (logging)
□ Configure tax settings in Polar dashboard
□ Create production products/prices
□ Update .env with production product IDs
□ Test subscription flow end-to-end
□ Test cancellation flow
□ Test upgrade/downgrade
□ Set up invoice email templates
□ Configure customer portal branding
□ Add terms of service link
□ Add privacy policy link
□ Set up payment failure notifications
□ Configure dunning settings
□ Test with real card (then refund)
```

## Generated Files

After `/integrate:polar` completes:

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

### Database

```
migrations/YYYYMMDD-add-billing-tables.sql
```

### Tests

```
tests/integration/billing.test.ts
tests/webhooks/polar.webhook.test.ts
tests/services/subscription.service.test.ts
```

### Documentation

```
docs/billing/polar-integration.md
docs/billing/webhook-events.md
docs/billing/testing-guide.md
```

## Next Steps

After integration:

```bash
# 1. Integration complete
/integrate:polar [requirements]

# 2. Add API keys
cp .env.example .env
# Add POLAR_SECRET_KEY and other keys

# 3. Run migrations
npm run migrate

# 4. Test in test mode
npm run dev
# Visit /pricing and test checkout

# 5. Run tests
/test

# 6. Deploy to staging
/deploy [staging]

# 7. Test end-to-end in staging

# 8. Switch to production keys

# 9. Deploy to production
/deploy [production]

# 10. Monitor webhooks
# Check logs and Polar dashboard
```

## Related Commands

- [/integrate:sepay](/docs/commands/integrate/sepay) - Vietnamese payment gateway
- [/cook](/docs/commands/core/cook) - Implement custom features
- [/test](/docs/commands/core/test) - Run test suite

---

**Key Takeaway**: `/integrate:polar` provides complete Polar.sh payment integration including subscriptions, webhooks, customer portal, and all necessary backend/frontend code with tests and documentation—production-ready in minutes.
