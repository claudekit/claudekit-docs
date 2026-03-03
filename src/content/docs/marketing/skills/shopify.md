---
title: "ckm:shopify"
description: "Build Shopify apps, extensions, and themes using Shopify's GraphQL Admin API, REST API, and Polaris design system."
section: marketing
kit: marketing
category: skills
order: 104
---

# `ckm:shopify`

> Build production-ready Shopify apps and customizations using the Shopify App Bridge, GraphQL API, and Polaris design system.

## What This Skill Does

**The Challenge**: Shopify's ecosystem spans multiple APIs, authentication flows, webhook systems, and extension points. Building apps and themes without deep platform knowledge leads to rejected submissions, security issues, and poor merchant experience.

**The Solution**: Shopify skill provides API patterns, authentication flows, GraphQL query templates, webhook handling, and Polaris component guidance for building compliant, production-ready Shopify integrations.

## Activation

**Implicit**: Activates when building Shopify apps, themes, or e-commerce integrations.

**Explicit**: Activate via prompt:
```
Activate shopify skill to build a Shopify app that syncs inventory with our warehouse system
```

## Capabilities

### 1. GraphQL Admin API
Query and mutate Shopify store data.

```graphql
# Fetch products with variants
query GetProducts($first: Int!) {
  products(first: $first) {
    edges {
      node {
        id
        title
        handle
        variants(first: 5) {
          edges {
            node {
              id
              price
              inventoryQuantity
            }
          }
        }
      }
    }
  }
}
```

**API client setup**:
```typescript
import { createAdminApiClient } from '@shopify/admin-api-client';

const client = createAdminApiClient({
  storeDomain: process.env.SHOPIFY_STORE_DOMAIN,
  apiVersion: '2024-10',
  accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
});
```

### 2. OAuth App Authentication
Implement Shopify OAuth flow for public apps.

**OAuth flow**:
1. Redirect merchant to `/authorize` with scopes
2. Receive callback with `code`
3. Exchange code for permanent access token
4. Store token and redirect to app

**Required scopes**: Define minimal scopes in `shopify.app.toml`

### 3. Webhooks
Subscribe to store events with reliable delivery.

```typescript
// Verify Shopify webhook signature
import crypto from 'crypto';

function verifyWebhook(rawBody: Buffer, hmacHeader: string): boolean {
  const hmac = crypto
    .createHmac('sha256', process.env.SHOPIFY_WEBHOOK_SECRET!)
    .update(rawBody)
    .digest('base64');
  return crypto.timingSafeEqual(Buffer.from(hmac), Buffer.from(hmacHeader));
}
```

**Key webhook topics**: `orders/create`, `products/update`, `customers/create`, `app/uninstalled`

### 4. Polaris Design System
Build merchant-facing UIs that match Shopify admin.

```tsx
import { Page, Card, DataTable, Button } from '@shopify/polaris';

export function ProductList() {
  return (
    <Page title="Products" primaryAction={<Button>Add product</Button>}>
      <Card>
        <DataTable
          columnContentTypes={['text', 'numeric', 'text']}
          headings={['Product', 'Price', 'Status']}
          rows={productRows}
        />
      </Card>
    </Page>
  );
}
```

## Prerequisites

- Shopify Partner account
- Shopify CLI installed: `npm install -g @shopify/cli`
- Node.js 18+ and TypeScript

## Configuration

```bash
# Shopify CLI setup
shopify app create node

# Environment variables
SHOPIFY_API_KEY=xxx
SHOPIFY_API_SECRET=xxx
SHOPIFY_ACCESS_TOKEN=xxx  # For development store
```

## Best Practices

**1. Use GraphQL over REST for new apps**
GraphQL is Shopify's preferred API. Better performance, versioning, and feature support.

**2. Handle rate limits gracefully**
Shopify's API has leaky bucket rate limiting. Implement retry with exponential backoff.

**3. Verify all webhook signatures**
Never process webhooks without signature verification. Reject unsigned requests with 401.

## Common Use Cases

### Use Case 1: Inventory Sync App
**Scenario**: Sync product inventory between Shopify and warehouse management system.

**Workflow**:
1. Subscribe to `products/update` webhook
2. Receive inventory change events
3. Update WMS via REST API
4. Handle conflicts with last-write-wins logic

**Output**: Real-time inventory sync app.

### Use Case 2: Custom Discount Engine
**Scenario**: Advanced discount logic not supported by Shopify's native discounts.

**Workflow**:
1. Use Shopify Functions for checkout extensibility
2. Implement custom discount calculation logic
3. Return discount amounts via Function output
4. Test with Shopify CLI `run` command

**Output**: Custom discount Shopify Function.

## Troubleshooting

**Issue**: GraphQL mutations fail with permission errors
**Solution**: Check app scopes in `shopify.app.toml`. Re-install app to grant new scopes.

**Issue**: Webhooks not receiving events
**Solution**: Verify webhook registration in Partner Dashboard. Check HMAC verification isn't rejecting valid requests.

## Related Skills

- [Payment Integration](/docs/marketing/skills/payment-integration) - Payment processing
- [Web Frameworks](/docs/marketing/skills/web-frameworks) - Next.js for Shopify app frontend
- [Analytics](/docs/marketing/skills/analytics) - Store performance metrics

## Related Commands

- `/ckm:shopify` - Shopify app development
- `/ckm:payment-integration` - Payment flow implementation
