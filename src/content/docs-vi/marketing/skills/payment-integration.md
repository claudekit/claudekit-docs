---
lang: vi
title: "ckm:payment-integration"
description: "Tích hợp thanh toán với SePay, Polar, Stripe — từ thiết lập đến xử lý webhook và quản lý subscription."
section: marketing
kit: marketing
category: skills
order: 95
---

# Payment Integration

> Tích hợp thanh toán an toàn và đáng tin cậy cho sản phẩm SaaS với các cổng thanh toán phổ biến.

## Kỹ Năng Này Làm Gì

Skill `ckm:payment-integration` hướng dẫn tích hợp các cổng thanh toán vào ứng dụng web. Bao gồm one-time payment, subscription, webhook handling và phân tích doanh thu. Hỗ trợ các cổng thanh toán phổ biến tại Việt Nam và toàn cầu.

## Bắt Đầu Nhanh

```
/ckm:payment-integration
```

Hoặc chỉ định cổng thanh toán:

```
/ckm:payment-integration Tích hợp Stripe cho subscription SaaS với 3 tier pricing
```

## Cổng Thanh Toán Hỗ Trợ

### SePay (Việt Nam)
Cổng thanh toán nội địa — hỗ trợ chuyển khoản ngân hàng, QR code, ví điện tử.

```bash
# Cài đặt
npm install sepay-nodejs
```

**Tính năng**:
- Thanh toán QR VietQR
- Webhook xác nhận thanh toán realtime
- Hỗ trợ tất cả ngân hàng Việt Nam

### Polar
Nền tảng monetization cho open-source và developer tools.

**Tính năng**:
- Subscription management
- License key generation
- GitHub sponsor integration

### Stripe
Cổng thanh toán quốc tế toàn diện.

```bash
npm install stripe
```

**Tính năng**:
- One-time và recurring payments
- Customer portal tự phục vụ
- Stripe Tax tự động

## Ví Dụ Sử Dụng

**Thiết lập Stripe subscription:**
```
/ckm:payment-integration Tích hợp Stripe Billing với 3 gói: Free, Pro $29/tháng, Team $99/tháng
```

**Xử lý webhook:**
```
/ckm:payment-integration Viết webhook handler cho Stripe — xử lý payment_succeeded và subscription_cancelled
```

**SePay cho thị trường VN:**
```
/ckm:payment-integration Tích hợp SePay QR payment cho ứng dụng Next.js
```

## Bảo Mật Thanh Toán

- **NEVER** log thông tin thẻ thanh toán
- Xác thực chữ ký webhook trước khi xử lý
- Dùng HTTPS cho tất cả endpoints thanh toán
- Lưu trữ API keys trong biến môi trường, không trong code

## Liên Quan

- [ckm:pricing-strategy](/vi/docs/marketing/skills/pricing-strategy) - Thiết kế cấu trúc giá
- [ckm:analytics](/vi/docs/marketing/skills/analytics) - Theo dõi doanh thu và MRR
