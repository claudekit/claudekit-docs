---
title: "ck:shopify"
description: Xây dựng ứng dụng, extensions và themes Shopify bằng GraphQL/REST APIs, Shopify CLI và Polaris UI
section: engineer
kit: engineer
category: skills/ecommerce
order: 50
published: true
lang: vi
---

# Shopify Skill

Xây dựng ứng dụng Shopify sẵn sàng sản xuất, checkout extensions, tích hợp admin và themes với GraphQL APIs và Shopify CLI.

## Khi Nào Sử Dụng

- Xây dựng ứng dụng Shopify public hoặc custom
- Tạo checkout/admin/POS UI extensions
- Phát triển themes với Liquid templating
- Tích hợp dịch vụ bên ngoài với webhooks
- Quản lý sản phẩm, đơn hàng, kho hàng qua API

## Khả Năng Chính

| Tính Năng | Công Nghệ | Trường Hợp Dùng |
|---------|-----------|----------|
| **Phát Triển Ứng Dụng** | Shopify CLI, OAuth | Chức năng đa store, công cụ cho merchant |
| **GraphQL Admin API** | GraphQL | Quản lý sản phẩm/đơn hàng/khách hàng |
| **Checkout Extensions** | React, UI Extensions | Trường checkout tùy chỉnh, xác thực |
| **Admin Extensions** | React, Polaris | Dashboard widgets, bulk actions |
| **Phát Triển Theme** | Liquid, Sections | Thiết kế storefront tùy chỉnh |
| **Webhooks** | HMAC Verification | Xử lý sự kiện thời gian thực |
| **Shopify Functions** | JavaScript | Giảm giá, thanh toán, vận chuyển tùy chỉnh |
| **Metafields** | GraphQL | Lưu dữ liệu tùy chỉnh trên resources |

**Frameworks**: React (extensions), Remix, Node.js (apps)

**APIs**: GraphQL Admin (khuyến nghị), REST Admin (legacy), Storefront API

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Checkout Tùy Chỉnh
**Ai dùng**: E-commerce store thêm tùy chọn quà tặng
```
"Use shopify skill to create checkout extension with gift message field,
delivery instructions, and save to order metafields. Show in admin order view."
```

### Ứng Dụng Quản Lý Kho Hàng
**Ai dùng**: Nhà bán lẻ đa địa điểm
```
"Build Shopify app that tracks inventory across locations, sends low stock
alerts via email, and auto-creates purchase orders. PostgreSQL backend."
```

### Dashboard Analytics Admin
**Ai dùng**: Chủ store cần báo cáo tùy chỉnh
```
"Use shopify skill to add admin extension showing top products this month,
revenue by category, and customer lifetime value charts with Polaris."
```

### Tích Hợp Đồng Bộ Sản Phẩm
**Ai dùng**: Doanh nghiệp có hệ thống ERP bên ngoài
```
"Create Shopify app that syncs products from our REST API every hour,
updates inventory via GraphQL, handles webhooks for order fulfillment."
```

### Logic Giảm Giá Tùy Chỉnh
**Ai dùng**: Nhà bán buôn B2B
```
"Use shopify skill to build Shopify Function applying tiered discounts
based on customer tags, order volume, and product collections."
```

## Bắt Đầu Nhanh

```bash
# Cài đặt Shopify CLI
npm install -g @shopify/cli@latest

# Xác minh
shopify version
```

**Tạo Ứng Dụng:**
```bash
shopify app init
shopify app dev          # Phát triển local
shopify app deploy       # Deploy production
```

**Tạo Theme:**
```bash
shopify theme init
shopify theme dev        # Xem trước tại localhost:9292
shopify theme push       # Deploy lên store
```

## Các Pattern Cốt Lõi

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

### Xử Lý Webhooks
```javascript
app.post('/webhooks/orders', async (req, res) => {
  const hmac = req.headers['x-shopify-hmac-sha256'];
  const verified = verifyWebhook(req.body, hmac);

  if (verified) {
    const order = req.body;
    // Xử lý đơn hàng
  }

  res.status(200).send();
});
```

## Mẹo Pro

- **Dùng GraphQL thay REST** cho phát triển mới (hiệu suất tốt hơn, giới hạn dựa trên chi phí)
- **Yêu cầu scopes tối thiểu** trong OAuth để vượt qua app review nhanh hơn
- **Triển khai retry logic** cho API calls với exponential backoff
- **Cache API responses** để giảm chi phí và cải thiện tốc độ
- **Kiểm tra trên development stores** (miễn phí qua Partner Dashboard)
- **Theo dõi rate limits** qua header `X-Shopify-Shop-Api-Call-Limit`
- **Dùng bulk operations** để xử lý 1000+ resources
- **Xác minh webhook signatures** bằng HMAC để ngăn chặn giả mạo
- **Không kích hoạt?** Nói: "Use shopify skill to..."

## Skill Liên Quan

- [Backend Development](/vi/docs/engineer/skills/backend-development) - Các pattern tích hợp API
- [Databases](/vi/docs/engineer/skills/databases) - PostgreSQL cho dữ liệu ứng dụng
- [Frontend Development](/vi/docs/engineer/skills/frontend-development) - React extensions

---

## Điểm Mấu Chốt

Dùng Shopify skill để xây dựng ứng dụng, extensions và themes với GraphQL APIs, Shopify CLI và React. Xử lý authentication, webhooks, metafields và tất cả tích hợp nền tảng Shopify.
