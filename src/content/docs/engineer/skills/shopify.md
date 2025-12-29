---
title: Shopify Skill
description: Build Shopify apps, extensions, and themes using GraphQL/REST APIs, Shopify CLI, and Polaris UI
section: engineer
kit: engineer
category: skills/ecommerce
order: 23
published: true
---

# Shopify Skill

Build production-ready Shopify apps, checkout extensions, admin integrations, and themes with GraphQL APIs and Shopify CLI.

## When to Use

- Building public or custom Shopify apps
- Creating checkout/admin/POS UI extensions
- Developing themes with Liquid templating
- Integrating external services with webhooks
- Managing products, orders, inventory via API

## Key Capabilities

| Feature | Technology | Use Case |
|---------|-----------|----------|
| **App Development** | Shopify CLI, OAuth | Multi-store functionality, merchant tools |
| **GraphQL Admin API** | GraphQL | Product/order/customer management |
| **Checkout Extensions** | React, UI Extensions | Custom checkout fields, validation |
| **Admin Extensions** | React, Polaris | Dashboard widgets, bulk actions |
| **Theme Development** | Liquid, Sections | Custom storefront design |
| **Webhooks** | HMAC Verification | Real-time event handling |
| **Shopify Functions** | JavaScript | Custom discounts, payments, shipping |
| **Metafields** | GraphQL | Store custom data on resources |

**Frameworks**: React (extensions), Remix, Node.js (apps)

**APIs**: GraphQL Admin (recommended), REST Admin (legacy), Storefront API

## Common Use Cases

### Custom Checkout Fields
**Who**: E-commerce store adding gift options
```
"Use shopify skill to create checkout extension with gift message field,
delivery instructions, and save to order metafields. Show in admin order view."
```

### Inventory Management App
**Who**: Multi-location retailer
```
"Build Shopify app that tracks inventory across locations, sends low stock
alerts via email, and auto-creates purchase orders. PostgreSQL backend."
```

### Admin Analytics Dashboard
**Who**: Store owner needing custom reports
```
"Use shopify skill to add admin extension showing top products this month,
revenue by category, and customer lifetime value charts with Polaris."
```

### Product Sync Integration
**Who**: Business with external ERP system
```
"Create Shopify app that syncs products from our REST API every hour,
updates inventory via GraphQL, handles webhooks for order fulfillment."
```

### Custom Discount Logic
**Who**: B2B wholesaler
```
"Use shopify skill to build Shopify Function applying tiered discounts
based on customer tags, order volume, and product collections."
```

## Quick Start

```bash
# Install Shopify CLI
npm install -g @shopify/cli@latest

# Verify
shopify version
```

**Create App:**
```bash
shopify app init
shopify app dev          # Local development
shopify app deploy       # Production deploy
```

**Create Theme:**
```bash
shopify theme init
shopify theme dev        # Preview at localhost:9292
shopify theme push       # Deploy to store
```

## Core Patterns

### GraphQL Product Query
```graphql
query {
  products(first: 10) {
    edges {
      node {
        id
        title
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

### Checkout Extension
```javascript
import { reactExtension, BlockStack, TextField } from '@shopify/ui-extensions-react/checkout';

export default reactExtension('purchase.checkout.block.render', () => <Extension />);

function Extension() {
  return (
    <BlockStack>
      <TextField label="Gift Message" />
    </BlockStack>
  );
}
```

### Handle Webhooks
```javascript
app.post('/webhooks/orders', async (req, res) => {
  const hmac = req.headers['x-shopify-hmac-sha256'];
  const verified = verifyWebhook(req.body, hmac);

  if (verified) {
    const order = req.body;
    // Process order
  }

  res.status(200).send();
});
```

## Pro Tips

- **Use GraphQL over REST** for new development (better performance, cost-based limits)
- **Request minimal scopes** in OAuth to pass app review faster
- **Implement retry logic** for API calls with exponential backoff
- **Cache API responses** to reduce costs and improve speed
- **Test on development stores** (free via Partner Dashboard)
- **Monitor rate limits** via `X-Shopify-Shop-Api-Call-Limit` header
- **Use bulk operations** for processing 1000+ resources
- **Verify webhook signatures** with HMAC to prevent spoofing
- **Not activating?** Say: "Use shopify skill to..."

## Related Skills

- [Backend Development](/docs/engineer/skills/backend/backend-development) - API integration patterns
- [Databases](/docs/engineer/skills/backend/databases) - PostgreSQL for app data
- [Frontend Development](/docs/engineer/skills/frontend/frontend-development) - React extensions

---

## Key Takeaway

 Use Shopify skill to build apps, extensions, and themes with GraphQL APIs, Shopify CLI, and React. Handles authentication, webhooks, metafields, and all Shopify platform integrations.
