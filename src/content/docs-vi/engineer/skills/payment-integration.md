---
title: "ck:payment-integration"
description: Triển khai xử lý thanh toán với SePay (thanh toán Việt Nam) và Polar (kiếm tiền từ SaaS toàn cầu)
section: engineer
kit: engineer
category: skills
order: 50
published: true
lang: vi
---

# Tích Hợp Thanh Toán

Triển khai xử lý thanh toán với SePay (thị trường Việt Nam) và Polar (kiếm tiền từ SaaS toàn cầu).

## Khi Nào Nên Dùng

- Tích hợp cổng thanh toán và luồng checkout
- Quản lý subscription với trials, nâng cấp và thanh toán
- Thanh toán mã QR (VietQR, NAPAS) và chuyển khoản ngân hàng
- Thanh toán theo sử dụng với metering và credits
- Tự động cấp quyền lợi (licenses, truy cập GitHub, vai trò Discord)
- Xử lý webhook cho thông báo thanh toán
- Cổng khách hàng để tự quản lý
- Tuân thủ thuế và thanh toán toàn cầu

## Chọn Nền Tảng

### Chọn SePay Cho:

- Thị trường Việt Nam (tiền tệ VND)
- Tự động hóa chuyển khoản ngân hàng (44+ ngân hàng Việt Nam)
- Thanh toán VietQR/NAPAS
- Các phương thức thanh toán địa phương
- Theo dõi tài khoản ngân hàng trực tiếp

### Chọn Polar Cho:

- Sản phẩm SaaS toàn cầu
- Quản lý vòng đời subscription
- Thanh toán theo sử dụng
- Tự động cấp quyền lợi (GitHub, Discord, licenses)
- Merchant of Record (xử lý tuân thủ thuế toàn cầu)
- Bán sản phẩm kỹ thuật số

## Khả Năng Chính

| Tính năng | SePay | Polar |
|---------|-------|-------|
| Phương thức thanh toán | QR, chuyển khoản, thẻ | Thẻ, subscriptions, theo sử dụng |
| Theo dõi ngân hàng | Webhooks cho 44+ ngân hàng VN | N/A |
| Xử lý thuế | Thủ công | MoR (tuân thủ toàn cầu) |
| Subscriptions | Thủ công | Quản lý vòng đời đầy đủ |
| Tự động cấp quyền lợi | Thủ công | GitHub, Discord, licenses, files |
| Giới hạn tốc độ | 2 calls/giây | 300 yêu cầu/phút |
| Cổng khách hàng | Không | Tự phục vụ tích hợp |

## Các Use Case Thông Dụng

### Checkout E-commerce Việt Nam

Triển khai luồng thanh toán VietQR với theo dõi chuyển khoản ngân hàng.

```
"Set up SePay checkout with VietQR generation for bank transfers. Monitor transactions via webhook and mark orders paid when bank account receives matching amount."
```

### Nền Tảng Subscription SaaS

Xây dựng hệ thống subscription với tự động cấp license.

```
"Use Polar to create subscription product with 3 tiers. Implement checkout flow and webhook handler that auto-generates license keys on successful subscription."
```

### Thanh Toán Theo Sử Dụng

Triển khai thanh toán có đồng hồ đo cho API usage hoặc credits.

```
"Set up Polar usage-based pricing that tracks API calls per month. Configure webhooks to monitor usage and automatically upgrade/downgrade subscriptions."
```

### Tự Động Cấp Quyền Truy Cập GitHub

Cấp quyền truy cập repository riêng tư khi thanh toán.

```
"Use Polar's GitHub benefit to automatically grant repository access when customer subscribes. Remove access on subscription cancellation."
```

## Quy Trình Triển Khai

### Bắt Đầu Nhanh Với SePay

1. Tải `references/sepay/overview.md` để thiết lập xác thực
2. Tải `references/sepay/sdk.md` để lấy code tích hợp
3. Tải `references/sepay/webhooks.md` để nhận thông báo thanh toán
4. Dùng `scripts/sepay-webhook-verify.js` để xác minh webhook
5. Tải `references/sepay/best-practices.md` cho môi trường production

### Bắt Đầu Nhanh Với Polar

1. Tải `references/polar/overview.md` để xác thực và khái niệm
2. Tải `references/polar/products.md` để thiết lập sản phẩm
3. Tải `references/polar/checkouts.md` để xây dựng luồng thanh toán
4. Tải `references/polar/webhooks.md` để xử lý sự kiện
5. Tải `references/polar/benefits.md` để tự động cấp quyền lợi
6. Dùng `scripts/polar-webhook-verify.js` để xác minh webhook
7. Tải `references/polar/best-practices.md` cho môi trường production

## Mẹo Chuyên Gia

- Bắt đầu với chế độ sandbox/test trước khi triển khai production
- Luôn xác minh chữ ký webhook để ngăn chặn yêu cầu gian lận
- Tải references theo từng bước — chỉ những gì bạn cần cho bước hiện tại
- Dùng các scripts cung cấp sẵn để xác minh webhook boilerplate
- Với SePay: Theo dõi giới hạn tốc độ (2 calls/giây)
- Với Polar: Tận dụng lợi ích MoR để tránh phức tạp về tuân thủ thuế
- **Không kích hoạt?** Nói: "Use payment-integration skill to integrate Polar checkout"

## Skills Liên Quan

- [Backend Development](/vi/docs/engineer/skills/backend-development) - Triển khai API
- [Web Frameworks](/vi/docs/engineer/skills/web-frameworks) - Tích hợp UI checkout

---

## Điểm Mấu Chốt

Dùng SePay cho thị trường Việt Nam (VietQR, chuyển khoản ngân hàng, 44+ ngân hàng) và Polar cho SaaS toàn cầu (subscriptions, thanh toán theo sử dụng, tự động cấp quyền lợi với tuân thủ thuế).
