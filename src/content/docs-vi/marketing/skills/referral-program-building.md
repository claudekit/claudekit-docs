---
lang: vi
title: "ckm:referral-program-building"
description: "Xây dựng chương trình giới thiệu viral cho SaaS với phần thưởng kép, tích hợp nền tảng, phòng chống gian lận và theo dõi phân bổ."
section: marketing
category: skills
order: 13
---

# `ckm:referral-program-building`

> Xây dựng chương trình giới thiệu tạo tỷ lệ chuyển đổi cao hơn 2-3 lần với tỷ lệ giữ chân tốt hơn 37% bằng cơ chế viral đã được kiểm chứng.

## Skill Này Làm Gì

**Thách thức**: Giới thiệu từ khách hàng là leads chất lượng cao nhất, nhưng hầu hết các chương trình thất bại do cấu trúc phần thưởng kém, cơ chế phức tạp hoặc thiếu tích hợp vào quy trình người dùng.

**Giải pháp**: Skill Referral Program Building cung cấp mẫu cấu trúc phần thưởng, so sánh nền tảng (Rewardful, ReferralCandy, Viral Loops), mô hình triển khai kỹ thuật, quy tắc phòng chống gian lận và case study (Dropbox tăng trưởng 3900%, PayPal 100M người dùng).

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi agent thảo luận về giới thiệu khách hàng, vòng lặp viral hoặc marketing truyền miệng.

**Tường minh**: Kích hoạt qua prompt:
```
Activate referral-program-building skill to [mô tả tác vụ]
```

## Tính Năng

### 1. Thiết Kế Cấu Trúc Phần Thưởng
Chọn mô hình khuyến khích dựa trên loại sản phẩm và kinh tế khách hàng.

**Cấu trúc phần thưởng**:
- **Hai chiều**: Cả người giới thiệu và người được giới thiệu đều nhận phần thưởng (tăng tham gia 68%)
- **Phù hợp sản phẩm**: Dùng sản phẩm làm phần thưởng (mô hình lưu trữ Dropbox)
- **Theo bậc**: Phần thưởng tăng dần cho nhiều lần giới thiệu
- **Nhiều bước**: Phần thưởng mở khóa khi đăng ký, kích hoạt, mua hàng

**Hướng dẫn cấu trúc**: `references/reward-structures.md`

### 2. Lựa Chọn Nền Tảng
So sánh các nền tảng giới thiệu theo tích hợp, giá và bộ tính năng.

**Tham khảo nhanh nền tảng**:
| Nền tảng | Phù hợp nhất | Giá | Thời gian thiết lập |
|----------|--------------|-----|---------------------|
| **Rewardful** | Đăng ký SaaS | $49/tháng | 1 giờ |
| **ReferralCandy** | Thương mại điện tử | $49/tháng | 1 nhấp |
| **Viral Loops** | Chiến dịch tùy chỉnh | Theo yêu cầu | Visual builder |
| **FirstPromoter** | Hoa hồng định kỳ | Theo yêu cầu | Dashboard |

**Hướng dẫn lựa chọn**: `references/platform-selection.md`

### 3. Mô Hình Triển Khai Kỹ Thuật
Schema cơ sở dữ liệu, mẫu API và logic phân bổ.

**Các thành phần cốt lõi**:
- Link giới thiệu độc đáo mỗi người dùng
- Phân bổ dựa trên cookie (cửa sổ 30-90 ngày)
- Thực hiện phần thưởng tự động
- Quy tắc phát hiện gian lận

**Hướng dẫn triển khai**: `references/technical-implementation.md`

## Điều Kiện Tiên Quyết

- Sản phẩm với quy trình chuyển đổi đã được kiểm chứng
- Dữ liệu LTV khách hàng (để tính toán phần thưởng bền vững)
- Nguồn lực kỹ thuật để tích hợp

## Cấu Hình

**Danh sách kiểm tra chương trình giới thiệu**:
- [ ] Giá trị phần thưởng đã xác định (cả người giới thiệu và người được giới thiệu)
- [ ] Đã đặt cửa sổ phân bổ (thông thường 30-90 ngày)
- [ ] Đã thiết lập quy tắc phòng chống gian lận
- [ ] Đã chọn vị trí onboarding (sau đăng ký, trong ứng dụng, email)
- [ ] Đã cấu hình theo dõi và phân tích

## Thực Hành Tốt Nhất

**1. Phần Thưởng Hai Chiều Hoạt Động Tốt Nhất**
Mô hình Dropbox: người giới thiệu nhận 500MB lưu trữ, người được giới thiệu nhận 500MB. Cả hai được hưởng lợi bình đẳng.

**2. Tích Hợp Vào Quy Trình Người Dùng**
Đừng ẩn giới thiệu trong cài đặt. Đặt nơi người dùng trải nghiệm giá trị (sau khi sử dụng tính năng, khoảnh khắc thành công).

**3. Đơn Giản Là Chìa Khóa**
Giải thích chương trình trong 2-3 dòng. Quy tắc phức tạp giết chết tỷ lệ tham gia.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Ra Mắt Chương Trình Giới Thiệu SaaS
**Tình huống**: Ra mắt chương trình giới thiệu bạn bè cho SaaS quản lý dự án.

**Quy trình**:
1. Xác định phần thưởng: Người giới thiệu nhận $50 credit, người được giới thiệu nhận 1 tháng miễn phí
2. Chọn nền tảng: Rewardful (tích hợp Stripe)
3. Đặt phân bổ: Cửa sổ cookie 60 ngày
4. Đặt CTA giới thiệu: Trang hoàn thành dự án (khoảnh khắc thành công)
5. Chiến dịch email: Thông báo cho khách hàng hiện tại
6. Theo dõi KPI: Tỷ lệ tham gia (mục tiêu 5-9%), tỷ lệ giới thiệu (mục tiêu 5-10%)

**Chỉ số thành công**: CAC thấp hơn 30-50% so với kênh trả phí, LTV cao hơn 16-25% cho khách hàng được giới thiệu.

### Trường Hợp 2: Tối Ưu Vòng Lặp Viral
**Tình huống**: Chương trình hiện có có tỷ lệ tham gia 2%, muốn tăng lên 8%.

**Quy trình**:
1. Kiểm toán chương trình hiện có:
   - Giá trị phần thưởng (đủ hấp dẫn chưa?)
   - Vị trí (ẩn trong cài đặt chưa?)
   - Ma sát (quá nhiều bước không?)
2. Cải tiến:
   - Tăng giá trị phần thưởng (thử gấp đôi hiện tại)
   - Chuyển sang trang có lưu lượng cao (dashboard)
   - Điền sẵn thông điệp chia sẻ (giảm ma sát)
   - Thêm bằng chứng xã hội ("5.000 người dùng đã giới thiệu bạn bè")
3. A/B test các thay đổi, đo mức tăng

**Kết quả**: Tăng tỷ lệ tham gia 3-4 lần thông thường với tối ưu hóa.

## Xử Lý Sự Cố

**Vấn đề**: Tỷ lệ tham gia thấp (<3%)
**Giải pháp**: Tăng giá trị phần thưởng, đơn giản hóa cơ chế, cải thiện vị trí (chuyển đến khu vực lưu lượng cao).

**Vấn đề**: Gian lận cao (đăng ký giả để lấy phần thưởng)
**Giải pháp**: Triển khai giữ phần thưởng (không trả cho đến khi người được giới thiệu kích hoạt/mua), yêu cầu xác minh email, xem xét thủ công đăng ký hàng loạt.

**Vấn đề**: Người dùng giới thiệu nhưng người được giới thiệu không chuyển đổi
**Giải pháp**: Tối ưu onboarding người được giới thiệu (trải nghiệm người dùng lần đầu). Người dùng được giới thiệu nên thấy giá trị nhanh chóng.

## Skill Liên Quan

- [Affiliate Marketing](/vi/docs/marketing/skills/affiliate-marketing) - Giới thiệu do đối tác thúc đẩy
- [Gamification Marketing](/vi/docs/marketing/skills/gamification-marketing) - Bảng xếp hạng và thử thách giới thiệu
- [Email Marketing](/vi/docs/marketing/skills/email-marketing) - Email chiến dịch giới thiệu

## Lệnh Liên Quan

- `/campaign/create` - Ra mắt chiến dịch giới thiệu
- `/ckm:plan` - Lập kế hoạch triển khai
- `/ckm:analyze:report` - Phân tích hiệu suất giới thiệu
