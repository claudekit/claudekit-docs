---
lang: vi
title: "ckm:shopify"
description: "Xây dựng ứng dụng Shopify, extension, theme — từ App Bridge đến Polaris UI và Admin API integration."
section: marketing
kit: marketing
category: skills
order: 104
---

# `ckm:shopify`

> Xây dựng ứng dụng và customization Shopify chuyên nghiệp với Shopify CLI, App Bridge và Polaris Design System.

## Kỹ Năng Này Làm Gì

Skill `ckm:shopify` hỗ trợ toàn bộ quy trình phát triển Shopify — từ scaffold ứng dụng, tích hợp Admin API, xây dựng UI với Polaris, đến cấu hình extension và theme customization.

## Bắt Đầu Nhanh

```
/ckm:shopify
```

Hoặc mô tả ứng dụng:

```
/ckm:shopify Tạo Shopify app để tự động gửi review request email sau khi giao hàng
```

## Tạo App Mới

```bash
# Tạo app với Shopify CLI
npm init @shopify/app@latest

# Chọn template
# → Node.js (Remix framework)
# → PHP

# Development server
shopify app dev
```

## Tính Năng Chính

- **App scaffold**: Cấu trúc chuẩn Shopify App với Remix/Next.js
- **Admin API**: GraphQL queries và mutations cho products, orders, customers
- **Polaris UI**: Components theo Shopify design system
- **App Bridge**: Embed app vào Shopify Admin
- **Webhooks**: Xử lý events từ Shopify realtime
- **Theme extensions**: App blocks và section integration

## Ví Dụ Admin API

```javascript
// Lấy danh sách orders gần đây
const query = `
  query getOrders($first: Int!) {
    orders(first: $first) {
      edges {
        node {
          id
          name
          totalPrice
          fulfillmentStatus
        }
      }
    }
  }
`;

const response = await admin.graphql(query, {
  variables: { first: 10 }
});
```

## Ví Dụ Sử Dụng

**Xây dựng app:**
```
/ckm:shopify App quản lý loyalty points — tích điểm khi mua hàng, đổi điểm lấy discount
```

**Tối ưu checkout:**
```
/ckm:shopify Shopify checkout extension thêm trường nhập ghi chú và chọn ngày giao hàng
```

**Theme customization:**
```
/ckm:shopify Tạo custom section hiển thị countdown timer cho flash sale
```

## Liên Quan

- [ckm:payment-integration](/vi/docs/marketing/skills/payment-integration) - Tích hợp thanh toán bổ sung
- [ckm:analytics](/vi/docs/marketing/skills/analytics) - Phân tích hiệu suất store
- [ckm:web-frameworks](/vi/docs/marketing/skills/web-frameworks) - Framework cho Shopify app
