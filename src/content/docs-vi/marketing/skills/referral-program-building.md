---
title: "Xây dựng Chương trình Giới thiệu"
description: "Xây dựng các chương trình giới thiệu viral cho SaaS với phần thưởng hai chiều, tích hợp nền tảng, ngăn chặn gian lận và theo dõi quy thuộc."
section: marketing
category: skills
order: 13
---

> Xây dựng các chương trình giới thiệu thúc đẩy tỷ lệ chuyển đổi cao hơn 2-3 lần với khả năng giữ chân tốt hơn 37% bằng cách sử dụng các cơ chế viral đã chứng minh.

## Kỹ năng này làm gì

**Thách thức**: Các giới thiệu khách hàng là những khách hàng tiềm năng có chất lượng cao nhất, nhưng hầu hết các chương trình đều thất bại do cấu trúc phần thưởng kém, cơ chế phức tạp hoặc thiếu tích hợp vào quy trình làm việc của người dùng.

**Giải pháp**: Kỹ năng Xây dựng Chương trình Giới thiệu cung cấp mẫu cấu trúc phần thưởng, so sánh nền tảng (Rewardful, ReferralCandy, Viral Loops), mô hình triển khai kỹ thuật, quy tắc ngăn chặn gian lận và các nghiên cứu trường hợp (Dropbox 3900% tăng trưởng, PayPal 100M người dùng).

## Kích hoạt

**Ngầm**: Kích hoạt khi agents thảo luận về giới thiệu khách hàng, vòng lặp viral hoặc tiếp thị miệng.

**Rõ ràng**: `/skill:add referral-program-building`

## Khả năng

### 1. Thiết kế cấu trúc phần thưởng
Chọn mô hình khuyến khích dựa trên loại sản phẩm và kinh tế khách hàng.

**Cấu trúc phần thưởng**:
- **Two-sided**: Cả giới thiệu và ngôn từ nhận được phần thưởng (68% tham gia cao hơn)
- **Product-aligned**: Sử dụng sản phẩm làm phần thưởng (mô hình lưu trữ Dropbox)
- **Tiered**: Phần thưởng tăng dần cho nhiều giới thiệu
- **Multi-step**: Phần thưởng mở khóa tại đăng ký, kích hoạt, mua hàng

**Hướng dẫn cấu trúc**: `references/reward-structures.md`

### 2. Lựa chọn nền tảng
So sánh các nền tảng giới thiệu theo tích hợp, giá cả và bộ tính năng.

**Tham chiếu nhanh nền tảng**:
| Nền tảng | Tốt nhất cho | Giá | Thời gian thiết lập |
|----------|----------|-------|------------|
| **Rewardful** | Đăng ký SaaS | $49/mo | 1 giờ |
| **ReferralCandy** | Thương mại điện tử | $49/mo | 1-click |
| **Viral Loops** | Chiến dịch tùy chỉnh | Custom | Visual builder |
| **FirstPromoter** | Hoa hồng định kỳ | Custom | Dashboard |

**Hướng dẫn lựa chọn**: `references/platform-selection.md`

### 3. Mô hình triển khai kỹ thuật
Các lược đồ cơ sở dữ liệu, mô hình API và logic quy thuộc.

**Các thành phần cốt lõi**:
- Liên kết giới thiệu duy nhất cho mỗi người dùng
- Quy thuộc dựa trên cookie (cửa sổ 30-90 ngày)
- Tự động hóa thực hiện phần thưởng
- Quy tắc phát hiện gian lận

**Hướng dẫn triển khai**: `references/technical-implementation.md`

## Yêu cầu trước

- Sản phẩm với quy trình chuyển đổi đã chứng minh
- Dữ liệu LTV của khách hàng (để tính toán phần thưởng bền vững)
- Tài nguyên kỹ thuật cho tích hợp

## Cấu hình

**Danh sách kiểm tra chương trình giới thiệu**:
- [ ] Giá trị phần thưởng được xác định (cả giới thiệu và ngôn từ)
- [ ] Cửa sổ quy thuộc được đặt (30-90 ngày điển hình)
- [ ] Các quy tắc ngăn chặn gian lận được thiết lập
- [ ] Vị trí onboarding được chọn (sau đăng ký, trong ứng dụng, email)
- [ ] Theo dõi và phân tích được cấu hình

## Thực hành tốt nhất

**1. Phần thưởng hai chiều hoạt động tốt nhất**
Mô hình Dropbox: giới thiệu nhận 500MB lưu trữ, ngôn từ nhận 500MB. Cả hai đều được hưởng lợi như nhau.

**2. Tích hợp vào quy trình làm việc của người dùng**
Đừng ẩn giới thiệu trong cài đặt. Đặt ở nơi người dùng trải nghiệm giá trị (sau sử dụng tính năng, khoảnh khắc thành công).

**3. Sự đơn giản là chìa khóa**
Giải thích chương trình trong 2-3 dòng. Các quy tắc phức tạp giết chết sự tham gia.

## Use cases phổ biến

### Use Case 1: Ra mắt chương trình giới thiệu SaaS
**Kịch bản**: Ra mắt chương trình refer-a-friend cho SaaS quản lý dự án.

**Quy trình**:
1. Định nghĩa phần thưởng: Giới thiệu nhận $50 tín dụng, ngôn từ nhận 1 tháng miễn phí
2. Chọn nền tảng: Rewardful (tích hợp Stripe)
3. Đặt quy thuộc: Cửa sổ cookie 60 ngày
4. Đặt CTA giới thiệu: Trang hoàn thành dự án (khoảnh khắc thành công)
5. Chiến dịch email: Thông báo cho khách hàng hiện có
6. Theo dõi KPIs: Tỷ lệ tham gia (mục tiêu 5-9%), tỷ lệ giới thiệu (mục tiêu 5-10%)

**Số liệu thành công**: 30-50% CAC thấp hơn so với các kênh trả tiền, 16-25% LTV cao hơn cho các khách hàng được giới thiệu.

### Use Case 2: Tối ưu hóa vòng lặp Viral
**Kịch bản**: Chương trình hiện có có tỷ lệ tham gia 2%, muốn tăng lên 8%.

**Quy trình**:
1. Kiểm toán chương trình hiện có:
   - Giá trị phần thưởng (có hấp dẫn không?)
   - Vị trí (ẩn trong cài đặt?)
   - Friction (quá nhiều bước?)
2. Cải tiến:
   - Tăng giá trị phần thưởng (thử 2x hiện tại)
   - Chuyển đến trang lưu lượng cao (bảng điều khiển)
   - Điền sẵn tin nhắn chia sẻ (giảm friction)
   - Thêm chứng minh xã hội ("5.000 người dùng giới thiệu bạn bè")
3. A/B kiểm tra các thay đổi, đo đạc lift

**Kết quả**: Tăng 3-4x tham gia điển hình với tối ưu hóa.

## Xử lý sự cố

**Vấn đề**: Tỷ lệ tham gia thấp (<3%)
**Giải pháp**: Tăng giá trị phần thưởng, đơn giản hóa cơ chế, cải thiện vị trí (chuyển đến khu vực lưu lượng cao).

**Vấn đề**: Gian lận cao (đăng ký giả để nhận phần thưởng)
**Giải pháp**: Triển khai giữ phần thưởng (không thanh toán cho đến khi ngôn từ kích hoạt/mua), yêu cầu xác minh email, xem xét thủ công các đăng ký hàng loạt.

**Vấn đề**: Người dùng giới thiệu nhưng ngôn từ không chuyển đổi
**Giải pháp**: Tối ưu hóa onboarding ngôn từ (lần đầu tiên trải nghiệm người dùng). Người dùng được giới thiệu nên thấy giá trị nhanh chóng.

## Kỹ năng liên quan

- [Affiliate Marketing](/vi/docs/marketing/skills/affiliate-marketing) - Giới thiệu do đối tác điều khiển
- [Gamification Marketing](/vi/docs/marketing/skills/gamification-marketing) - Bảng xếp hạng giới thiệu và thách thức
- [Email Marketing](/vi/docs/marketing/skills/email-marketing) - Email chiến dịch giới thiệu

## Lệnh liên quan

- `/campaign/create` - Chiến dịch ra mắt giới thiệu
- `/plan` - Lập kế hoạch triển khai
- `/analyze:report` - Phân tích hiệu suất giới thiệu
