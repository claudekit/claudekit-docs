---
title: shopify
description: Tài liệu hướng dẫn sử dụng kỹ năng shopify
section: engineer
kit: engineer
category: skills/ecommerce
order: 23
published: true
lang: vi
---

# Kỹ năng shopify

Xây dựng các ứng dụng Shopify, các tiện ích mở rộng (extensions), giao diện (themes) và tích hợp hệ thống bằng GraphQL/REST APIs và Shopify CLI.

## Khi nào nên sử dụng

Sử dụng shopify khi xây dựng:
- Các ứng dụng Shopify (công khai hoặc tùy chỉnh)
- Tiện ích mở rộng Checkout/Admin
- Giao diện (themes) bằng Liquid
- Tích hợp API
- Shopify Functions
- Headless storefronts

## Bắt đầu nhanh

### Cách gọi kỹ năng

```
"Sử dụng shopify để tạo ứng dụng thực hiện:
- Thêm các trường tùy chỉnh vào checkout
- Xác thực dữ liệu khách hàng
- Lưu vào metafields
- Hiển thị trong trang quản trị (admin)"
```

### Kết quả nhận được

Kỹ năng này sẽ giúp bạn:
1. Thiết lập Shopify CLI
2. Tạo cấu trúc ứng dụng
3. Triển khai các truy vấn GraphQL
4. Xây dựng các tiện ích mở rộng giao diện (UI extensions)
5. Xử lý webhooks

## Các trường hợp sử dụng phổ biến

### Tùy chỉnh Checkout

```
"Sử dụng shopify để thêm tiện ích mở rộng checkout:
- Trường tin nhắn quà tặng
- Hướng dẫn giao hàng
- Lưu vào metafields của đơn hàng"
```

### Tiện ích mở rộng Admin

```
"Sử dụng shopify để tạo tiện ích mở rộng admin hiển thị:
- Phân tích đơn hàng
- Các báo cáo tùy chỉnh
- Các thao tác hàng loạt (bulk actions)"
```

### Đồng bộ sản phẩm

```
"Sử dụng shopify để đồng bộ sản phẩm với hệ thống kiểm kho bên ngoài bằng webhooks"
```

### Ứng dụng Giảm giá

```
"Sử dụng shopify để xây dựng ứng dụng giảm giá với logic tùy chỉnh dựa trên thẻ (tags) của khách hàng"
```

## Thiết lập

### Cài đặt Shopify CLI

```bash
npm install -g @shopify/cli@latest

# Xác minh
shopify version
```

### Tạo Ứng dụng

```bash
# Khởi tạo ứng dụng mới
shopify app init

# Chạy server phát triển
shopify app dev

# Triển khai
shopify app deploy
```

## GraphQL Admin API

### Xác thực

```javascript
const headers = {
  'X-Shopify-Access-Token': 'your-access-token',
  'Content-Type': 'application/json'
};

const endpoint = `https://${shop}.myshopify.com/admin/api/2025-01/graphql.json`;
```

### Truy vấn sản phẩm

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

### Tạo sản phẩm

```graphql
mutation {
  productCreate(input: {
    title: "Sản phẩm mới"
    vendor: "Cửa hàng của tôi"
    productType: "Quần áo"
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

### Cập nhật kho hàng

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

## Tiện ích mở rộng (Extensions)

### Checkout UI Extension

```bash
shopify app generate extension --type checkout_ui_extension
```

```javascript
// Mã nguồn tiện ích mở rộng
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
      <TextField label="Lời nhắn quà tặng" />
    </BlockStack>
  );
}
```

### Admin UI Extension

```bash
shopify app generate extension --type admin_ui_extension
```

## Webhooks

### Đăng ký Webhooks

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

### Xử lý Webhook

```javascript
app.post('/webhooks/orders', async (req, res) => {
  const hmac = req.headers['x-shopify-hmac-sha256'];

  // Xác minh webhook
  const verified = verifyWebhook(req.body, hmac);

  if (verified) {
    const order = req.body;
    // Xử lý đơn hàng
  }

  res.status(200).send();
});
```

## Metafields

### Tạo Metafield

```graphql
mutation {
  metafieldsSet(metafields: [{
    ownerId: "gid://shopify/Product/123"
    namespace: "custom"
    key: "gift_message"
    value: "Chúc mừng sinh nhật!"
    type: "single_line_text_field"
  }]) {
    metafields {
      id
      value
    }
  }
}
```

### Truy vấn Metafields

```graphql
query {
  product(id: "gid://shopify/Product/123") {
    metafield(namespace: "custom", key: "gift_message") {
      value
    }
  }
}
```

## Giao diện (Themes - Liquid)

### Liquid cơ bản

```liquid
<!-- Tiêu đề sản phẩm -->
{{ product.title }}

<!-- Lặp qua các biến thể -->
{% for variant in product.variants %}
  <option value="{{ variant.id }}">
    {{ variant.title }} - {{ variant.price | money }}
  </option>
{% endfor %}

<!-- Điều kiện -->
{% if product.available %}
  <button>Thêm vào giỏ hàng</button>
{% else %}
  <span>Hết hàng</span>
{% endif %}
```

### Phát triển Giao diện

```bash
# Tải giao diện về máy
shopify theme pull

# Chạy server phát triển
shopify theme dev

# Đẩy các thay đổi lên
shopify theme push
```

## Shopify Functions

### Hàm Giảm giá

```javascript
export function run(input) {
  const discountPercentage = 10;

  return {
    discounts: [{
      message: "Giảm 10% cho khách hàng VIP",
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

### Cài đặt

```bash
npm install @shopify/polaris
```

### Sử dụng các thành phần

```javascript
import {Page, Card, Button} from '@shopify/polaris';

function Dashboard() {
  return (
    <Page title="Bảng điều khiển">
      <Card sectioned>
        <Button primary>Tạo sản phẩm</Button>
      </Card>
    </Page>
  );
}
```

## Phương pháp hay nhất

### Sử dụng API

1. **Ưu tiên GraphQL hơn REST**
2. **Nhóm các yêu cầu (Batch requests)** khi có thể
3. **Xử lý giới hạn tốc độ (rate limits)** (2-4 yêu cầu/giây)
4. **Sử dụng các thao tác hàng loạt (bulk operations)** cho tập dữ liệu lớn
5. **Triển khai logic thử lại (retry logic)**

### Bảo mật

1. **Xác minh webhooks** bằng HMAC
2. **Xác thực mã thông báo (tokens)** OAuth
3. **Luôn sử dụng HTTPS**
4. **Kiểm soát dữ liệu đầu vào (Sanitize)**
5. **Tuân thủ các yêu cầu GDPR**

### Hiệu suất

1. **Lưu bộ nhớ đệm (Cache)** các phản hồi GraphQL
2. **Sử dụng phân trang** cho danh sách lớn
3. **Tối thiểu hóa các cuộc gọi API**
4. **Tối ưu hóa hình ảnh**
5. **Tải chậm (Lazy load)** nội dung

## Các ví dụ nhanh

**Đồng bộ sản phẩm:**
```
"Sử dụng shopify để đồng bộ sản phẩm từ tệp CSV vào cửa hàng qua GraphQL"
```

**Tùy chỉnh Checkout:**
```
"Sử dụng shopify để thêm bộ chọn ngày vào checkout để chọn ngày giao hàng"
```

**Bảng điều khiển Admin:**
```
"Sử dụng shopify để tạo tiện ích mở rộng admin hiển thị các sản phẩm bán chạy nhất tháng này"
```

**Ứng dụng kho hàng:**
```
"Sử dụng shopify để xây dựng ứng dụng thực hiện:
- Theo dõi kho hàng qua nhiều địa điểm
- Gửi cảnh báo khi sắp hết hàng
- Tính năng tự động đặt hàng lại"
```

## Các tác vụ thông thường

### Lấy danh sách đơn hàng

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

### Cập nhật giá sản phẩm

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

### Thao tác hàng loạt (Bulk Operations)

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

## Tài nguyên

- [Tài liệu cho nhà phát triển Shopify](https://shopify.dev)
- [GraphQL Admin API](https://shopify.dev/api/admin-graphql)
- [Polaris](https://polaris.shopify.com)
- [Tham khảo CLI](https://shopify.dev/docs/api/shopify-cli)

## Bước tiếp theo

- [Ví dụ thương mại điện tử](/vi/docs/workflows)
- [Tích hợp API](/vi/docs/workflows)
- [Kỹ năng cơ sở dữ liệu](/vi/docs/engineer/skills/backend/postgresql-psql)

---

**Tóm lại:** kỹ năng shopify hỗ trợ phát triển ứng dụng, GraphQL APIs, tiện ích mở rộng và giao diện. Xây dựng các giải pháp tích hợp Shopify hoàn chỉnh.
