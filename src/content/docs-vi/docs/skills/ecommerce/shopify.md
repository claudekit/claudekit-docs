---
title: shopify
description: "Documentation for shopify
description:
section: docs
category: skills/ecommerce
order: 23
published: true"
section: docs
category: skills/ecommerce
order: 23
published: true
---

# shopify Skill

Build Shopify apps, extensions, themes, and integrations using GraphQL/REST APIs and Shopify CLI.

## When to Use

Use shopify when building:
- Shopify apps (public or custom)
- Checkout/admin extensions
- Themes with Liquid
- API integrations
- Shopify Functions
- Headless storefronts

## Quick Start

### Invoke the Skill

```
"Use shopify to create app that:
- Adds custom checkout fields
- Validates customer data
- Saves to metafields
- Shows in admin"
```

### What You Get

The skill will help you:
1. Set up Shopify CLI
2. Create app structure
3. Implement GraphQL queries
4. Build UI extensions
5. Handle webhooks

## Common Use Cases

### Custom Checkout

```
"Use shopify to add checkout extension:
- Gift message field
- Delivery instructions
- Save to order metafields"
```

### Admin Extension

```
"Use shopify to create admin extension showing:
- Order analytics
- Custom reports
- Bulk actions"
```

### Product Sync

```
"Use shopify to sync products with external inventory system using webhooks"
```

### Discount App

```
"Use shopify to build discount app with custom logic based on customer tags"
```

## Setup

### Install Shopify CLI

```bash
npm install -g @shopify/cli@latest

# Verify
shopify version
```

### Create App

```bash
# Initialize new app
shopify app init

# Start dev server
shopify app dev

# Deploy
shopify app deploy
```

## GraphQL Admin API

### Authentication

```javascript
const headers = {
  'X-Shopify-Access-Token': 'your-access-token',
  'Content-Type': 'application/json'
};

const endpoint = `https://${shop}.myshopify.com/admin/api/2025-01/graphql.json`;
```

### Query Products

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

### Create Product

```graphql
mutation {
  productCreate(input: {
    title: "New Product"
    vendor: "My Store"
    productType: "Apparel"
    variants: [{
      price: "29.99"
      inventoryQuantity: 100
    }]
  }) {
    product {
      id
      title
    }
    userErrors {
      field
      message
    }
  }
}
```

### Update Inventory

```graphql
mutation {
  inventoryAdjustQuantity(input: {
    inventoryLevelId: "gid://shopify/InventoryLevel/123"
    availableDelta: 50
  }) {
    inventoryLevel {
      available
    }
  }
}
```

## Extensions

### Checkout UI Extension

```bash
shopify app generate extension --type checkout_ui_extension
```

```javascript
// Extension code
import {
  reactExtension,
  TextField,
  BlockStack
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension('purchase.checkout.block.render', () => (
  <Extension />
));

function Extension() {
  return (
    <BlockStack>
      <TextField label="Gift Message" />
    </BlockStack>
  );
}
```

### Admin UI Extension

```bash
shopify app generate extension --type admin_ui_extension
```

## Webhooks

### Subscribe to Webhooks

```graphql
mutation {
  webhookSubscriptionCreate(
    topic: ORDERS_CREATE
    webhookSubscription: {
      format: JSON
      callbackUrl: "https://your-app.com/webhooks/orders"
    }
  ) {
    webhookSubscription {
      id
    }
  }
}
```

### Handle Webhook

```javascript
app.post('/webhooks/orders', async (req, res) => {
  const hmac = req.headers['x-shopify-hmac-sha256'];

  // Verify webhook
  const verified = verifyWebhook(req.body, hmac);

  if (verified) {
    const order = req.body;
    // Process order
  }

  res.status(200).send();
});
```

## Metafields

### Create Metafield

```graphql
mutation {
  metafieldsSet(metafields: [{
    ownerId: "gid://shopify/Product/123"
    namespace: "custom"
    key: "gift_message"
    value: "Happy Birthday!"
    type: "single_line_text_field"
  }]) {
    metafields {
      id
      value
    }
  }
}
```

### Query Metafields

```graphql
query {
  product(id: "gid://shopify/Product/123") {
    metafield(namespace: "custom", key: "gift_message") {
      value
    }
  }
}
```

## Themes (Liquid)

### Basic Liquid

```liquid
<!-- Product title -->
{{ product.title }}

<!-- Loop through variants -->
{% for variant in product.variants %}
  <option value="{{ variant.id }}">
    {{ variant.title }} - {{ variant.price | money }}
  </option>
{% endfor %}

<!-- Conditional -->
{% if product.available %}
  <button>Add to Cart</button>
{% else %}
  <span>Sold Out</span>
{% endif %}
```

### Theme Development

```bash
# Pull theme
shopify theme pull

# Start dev server
shopify theme dev

# Push changes
shopify theme push
```

## Shopify Functions

### Discount Function

```javascript
export function run(input) {
  const discountPercentage = 10;

  return {
    discounts: [{
      message: "10% off for VIP customers",
      targets: input.cart.lines,
      value: {
        percentage: {
          value: discountPercentage
        }
      }
    }]
  };
}
```

## Polaris UI

### Install

```bash
npm install @shopify/polaris
```

### Use Components

```javascript
import {Page, Card, Button} from '@shopify/polaris';

function Dashboard() {
  return (
    <Page title="Dashboard">
      <Card sectioned>
        <Button primary>Create Product</Button>
      </Card>
    </Page>
  );
}
```

## Best Practices

### API Usage

1. **Use GraphQL over REST**
2. **Batch requests** when possible
3. **Handle rate limits** (2-4 req/sec)
4. **Use bulk operations** for large datasets
5. **Implement retry logic**

### Security

1. **Verify webhooks** with HMAC
2. **Validate OAuth** tokens
3. **Use HTTPS** always
4. **Sanitize inputs**
5. **Follow GDPR** requirements

### Performance

1. **Cache GraphQL responses**
2. **Use pagination** for large lists
3. **Minimize API calls**
4. **Optimize images**
5. **Lazy load** content

## Quick Examples

**Sync Products:**
```
"Use shopify to sync products from CSV file to store via GraphQL"
```

**Custom Checkout:**
```
"Use shopify to add date picker to checkout for delivery date selection"
```

**Admin Dashboard:**
```
"Use shopify to create admin extension showing top products this month"
```

**Inventory App:**
```
"Use shopify to build app that:
- Tracks inventory across locations
- Sends low stock alerts
- Auto-reorder functionality"
```

## Common Tasks

### Get Orders

```graphql
query {
  orders(first: 50, query: "created_at:>2025-01-01") {
    edges {
      node {
        id
        name
        totalPrice
        customer {
          email
        }
      }
    }
  }
}
```

### Update Product Price

```graphql
mutation {
  productVariantUpdate(input: {
    id: "gid://shopify/ProductVariant/123"
    price: "39.99"
  }) {
    productVariant {
      price
    }
  }
}
```

### Bulk Operations

```graphql
mutation {
  bulkOperationRunQuery(query: """
    {
      products {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  """) {
    bulkOperation {
      id
      status
    }
  }
}
```

## Resources

- [Shopify Dev Docs](https://shopify.dev)
- [GraphQL Admin API](https://shopify.dev/api/admin-graphql)
- [Polaris](https://polaris.shopify.com)
- [CLI Reference](https://shopify.dev/docs/api/shopify-cli)

## Next Steps

- [E-commerce Examples](/docs/use-cases/)
- [API Integration](/docs/use-cases/)
- [Database Skills](/docs/skills/postgresql-psql)

---

**Bottom Line:** shopify skill covers app development, GraphQL APIs, extensions, and themes. Build complete Shopify integrations.
