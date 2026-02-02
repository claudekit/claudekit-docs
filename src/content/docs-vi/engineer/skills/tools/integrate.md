---
title: "Integrate"
description: "Tích hợp thanh toán với Polar.sh và SePay.vn"
section: engineer
kit: engineer
category: skills
order: 29
lang: vi
---

Triển khai tích hợp thanh toán hoàn chỉnh cho doanh nghiệp SaaS và thương mại điện tử của bạn với Polar.sh (thanh toán quốc tế) và SePay.vn (thanh toán Việt Nam).

## Kỹ năng này làm gì

Kỹ năng Integrate cung cấp tích hợp thanh toán sẵn sàng production với hai cổng thanh toán hàng đầu:

- **Polar.sh**: Thanh toán quốc tế với đăng ký, thanh toán một lần và cổng thông tin khách hàng
- **SePay.vn**: Thanh toán Việt Nam với mã QR, chuyển khoản ngân hàng và hỗ trợ VND

Cả hai tích hợp đều bao gồm xử lý webhook, quản lý đăng ký, xử lý lỗi và tất cả mã nguồn backend/frontend cần thiết.

## Tích hợp Polar.sh

Dành cho thanh toán quốc tế, gói đăng ký và tính phí theo lưu lượng.

### Tính năng chính

- Gói đăng ký với nhiều cấp độ
- Thanh toán một lần
- Tính phí theo lưu lượng
- Cổng thông tin khách hàng được host sẵn
- Xử lý webhook
- Xử lý thuế tự động
- Hỗ trợ nhiều tiền tệ

### Ví dụ sử dụng

```bash
# Gói đăng ký cơ bản
"Thêm thanh toán đăng ký Polar.sh với 3 cấp độ: Free, Pro ($29/tháng), Enterprise ($99/tháng)"

# Tính phí theo lưu lượng
"Triển khai Polar.sh với tính phí theo lưu lượng cho các cuộc gọi API, phí cơ bản $49 + $0.01 cho mỗi cuộc gọi API trên 10k"

# Thanh toán một lần
"Thêm thanh toán một lần Polar cho việc bán khóa học"
```

### Điều gì được triển khai

**Backend:**
- Routes: `/api/billing/checkout`, `/api/billing/portal`, `/api/billing/subscription`
- Webhook handlers: `subscription.created`, `subscription.updated`, `payment.succeeded`
- Database models: `customers`, `subscriptions`, `payment_history`
- Services: Polar SDK integration, subscription management

**Frontend:**
- Components: `PricingTable`, `CheckoutButton`, `SubscriptionStatus`, `CustomerPortal`
- Hooks: `useSubscription`

**Testing:**
- 89 tests với độ bao phủ 94%
- Kiểm tra luồng thanh toán, webhook, đăng ký

### Hướng dẫn chi tiết

Xem tài liệu đầy đủ cho Polar.sh integration tại thư mục `integrate/polar` trong Engineer repository.

## Tích hợp SePay.vn

Dành cho thị trường Việt Nam với thanh toán QR, chuyển khoản ngân hàng và hỗ trợ VND.

### Tính năng chính

- Thanh toán mã QR (động)
- Hướng dẫn chuyển khoản ngân hàng
- Hỗ trợ 18 ngân hàng lớn Việt Nam
- Định dạng và xác thực VND
- Địa phương hóa tiếng Việt
- Xử lý webhook
- Gói đăng ký với nhắc nhở email

### Ví dụ sử dụng

```bash
# Thanh toán QR cơ bản
"Thêm thanh toán QR SePay cho việc mua khóa học, hỗ trợ Vietcombank, Techcombank, BIDV"

# Gói đăng ký
"Triển khai thanh toán gói đăng ký hàng tháng 299.000 VND/tháng với lời nhắc chuyển khoản ngân hàng tự động"

# Nạp tiền
"Nạp tiền vào ví với số tiền bất kỳ 10.000-10.000.000 VND"
```

### Điều gì được triển khai

**Backend:**
- Routes: `/api/payment/create`, `/api/payment/:id/qr`, `/api/payment/:id/status`
- Webhook handlers: `payment.success`, `payment.expired`, `payment.failed`
- Database models: `payments`, `transactions`
- Utils: VND formatter, bank validator

**Frontend:**
- Components: `PaymentQR`, `BankTransferInstructions`, `PaymentStatus`
- Hooks: `usePayment`
- Localization: Thông báo tiếng Việt, hướng dẫn ngân hàng

**Testing:**
- 98 tests với độ bao phủ 96%
- Kiểm tra QR, webhook, định dạng VND, xác thực ngân hàng

### Hướng dẫn chi tiết

Xem tài liệu đầy đủ cho SePay.vn integration tại thư mục `integrate/sepay` trong Engineer repository.

## So sánh

| Tính năng | Polar.sh | SePay.vn |
|---------|----------|----------|
| **Thị trường** | Quốc tế | Việt Nam |
| **Tiền tệ** | Đa tiền tệ | VND |
| **Đăng ký** | ✓ Tự động | ✓ Nhắc thủ công |
| **Thanh toán một lần** | ✓ | ✓ |
| **Tính phí theo lưu lượng** | ✓ | ✗ |
| **Cổng thông tin khách hàng** | ✓ Host sẵn | ✗ |
| **Thanh toán QR** | ✗ | ✓ |
| **Chuyển khoản ngân hàng** | ✗ | ✓ |
| **Xử lý thuế** | ✓ Tự động | Manual VAT |

## Cách sử dụng

Kích hoạt bằng cách đề cập đến tích hợp thanh toán, Polar.sh, SePay hoặc cổng thanh toán.

## Ví dụ tổng hợp

```bash
# SaaS quốc tế
"Tích hợp Polar.sh với 3 cấp độ đăng ký và dùng thử 14 ngày"

# Thương mại điện tử Việt Nam
"Tích hợp SePay với thanh toán QR cho cửa hàng online"

# Cả hai cổng
"Thêm Polar cho khách hàng quốc tế và SePay cho khách hàng Việt Nam"
```

## Quy trình triển khai

Cả hai tích hợp đều tuân theo quy trình tương tự:

1. **Phân tích**: Xác định yêu cầu thanh toán
2. **Nghiên cứu**: Agent researcher thu thập tài liệu API
3. **Kế hoạch**: Tạo kế hoạch triển khai chi tiết
4. **Triển khai**: Agent code tạo backend/frontend
5. **Kiểm tra**: Bộ test toàn diện
6. **Tài liệu**: Hướng dẫn thiết lập và triển khai

## Bước tiếp theo

Sau khi tích hợp:

1. Đăng ký tài khoản (Polar.sh hoặc SePay.vn)
2. Lấy API keys
3. Thêm vào `.env`
4. Chạy migration
5. Kiểm tra với sandbox/test mode
6. Triển khai lên staging
7. Chuyển sang production keys
8. Triển khai lên production

## Kỹ năng liên quan

- [Cook](/docs/engineer/skills/cook) - Để triển khai logic thanh toán tùy chỉnh
- [Fix](/docs/engineer/skills/fix) - Để gỡ lỗi vấn đề thanh toán
- [Test](/docs/engineer/skills) - Để kiểm tra luồng thanh toán

---

**Điểm mấu chốt**: Kỹ năng Integrate cung cấp tích hợp thanh toán sẵn sàng production cho cả thị trường quốc tế (Polar.sh) và Việt Nam (SePay.vn) với mã nguồn hoàn chỉnh, kiểm tra và tài liệu—chỉ trong vài phút.
