---
title: "Email Marketing"
description: "Tạo chiến dịch email, quy trình tự động hóa, chuỗi drip và tối ưu hóa khả năng gửi đến cho email marketing hiệu quả."
section: marketing
category: skills
order: 5
---

> Xây dựng chiến dịch email chuyển đổi cao với quy trình tự động hóa, copy tối ưu và thực hành tốt nhất về khả năng gửi đến.

## Kỹ năng này làm gì

**Thách thức**: Email vẫn là kênh marketing ROI cao nhất (trung bình 42:1), nhưng tạo chiến dịch hiệu quả yêu cầu làm chủ automation flows, copywriting, khả năng gửi đến và A/B testing.

**Giải pháp**: Kỹ năng Email Marketing cung cấp mẫu chiến dịch, thiết kế quy trình tự động hóa, công thức subject line và checklist khả năng gửi đến. Bao gồm framework đã chứng minh cho newsletters, email quảng cáo, chuỗi drip và chiến dịch tái tương tác.

## Kích hoạt

**Ngầm**: Tự động kích hoạt cho agents Email Wizard, Nurture Specialist và Content Creator.

**Rõ ràng**: Kích hoạt qua prompt:
```
Kích hoạt skill email-marketing để [mô tả task]
```

## Khả năng

### 1. Mẫu chiến dịch email
Mẫu sẵn có cho các loại chiến dịch phổ biến với cấu trúc đã chứng minh.

**Mẫu có sẵn**:
- **Newsletter**: Cập nhật hàng tuần/hàng tháng với tổng hợp nội dung
- **Quảng cáo**: Ra mắt sản phẩm, khuyến mại, ưu đãi giới hạn
- **Giao dịch**: Biên lai, xác nhận, đặt lại mật khẩu
- **Drip/Nurture**: Chuỗi email đa bước onboarding hoặc giáo dục
- **Tái tương tác**: Chiến dịch win-back cho người đăng ký không hoạt động

**Mẫu tải**: `references/email-templates.md`

### 2. Thiết kế quy trình tự động hóa
Lập bản đồ hành trình khách hàng với sự kiện trigger, thời gian và nhánh quyết định.

**Ví dụ quy trình**:
```
Trigger: Người dùng đăng ký
├─ Email 1: Chào mừng + giá trị đề xuất (ngay lập tức)
├─ Email 2: Tổng quan tính năng (Ngày 2)
├─ Quyết định: Kích hoạt tài khoản?
│  ├─ Có → Chuỗi thành công
│  └─ Không → Nhắc nhở kích hoạt (Ngày 5)
└─ Email 3: Case study + CTA (Ngày 7)
```

**Thư viện quy trình**: `references/automation-flows.md`

### 3. Công thức subject line
Patterns đã chứng minh cho tỷ lệ mở cao hơn qua các ngành.

**Top performers**:
- **Khoảng trống tò mò**: "Sai lầm 90% marketer mắc phải"
- **Hướng lợi ích**: "Tiết kiệm 5 giờ/tuần với mẹo tự động hóa này"
- **Định dạng câu hỏi**: "Bạn đang mắc những lỗi email này không?"
- **Khẩn cấp**: "Cơ hội cuối: Giảm 40% kết thúc tối nay"

**Benchmarks trung bình**: 15-25% tỷ lệ mở, 2-5% tỷ lệ click

**Hướng dẫn công thức**: `references/subject-line-formulas.md`

## Yêu cầu trước

- Tài khoản nhà cung cấp dịch vụ email (ESP) (SendGrid, Mailchimp, etc.)
- Chiến lược phân khúc danh sách
- Hướng dẫn thương hiệu cho giọng điệu và thông điệp

## Cấu hình

Không cần cấu hình. Kỹ năng cung cấp framework và mẫu thích ứng với bất kỳ ESP nào.

**Tùy chọn**: Cấu hình ESP API cho tự động hóa (SendGrid, Resend MCP servers có sẵn).

## Thực hành tốt nhất

**1. Thiết kế mobile-first**
Hơn 60% lượt mở xảy ra trên mobile. Test rendering trên thiết bị trước khi gửi.

**2. Một CTA chính mỗi email**
Nhiều CTAs làm loãng tập trung. Sử dụng một hành động rõ ràng mỗi thông điệp.

**3. Cá nhân hóa ngoài tên**
Sử dụng dữ liệu hành vi (mua hàng cuối, sử dụng tính năng) cho nội dung liên quan.

## Use cases phổ biến

### Use Case 1: Chuỗi email ra mắt sản phẩm
**Kịch bản**: Ra mắt tính năng mới với chuỗi 3 email cho người dùng hoạt động.

**Quy trình**:
1. Email 1 (Ngày 0): Thông báo teaser với waitlist
2. Email 2 (Ngày 3): Deep-dive tính năng với demo video
3. Email 3 (Ngày 7): Ngày ra mắt với quyền truy cập sớm độc quyền

**Chỉ số thành công**: 30% tỷ lệ mở, 8% click-through, 3% kích hoạt

### Use Case 2: Chiến dịch tái tương tác
**Kịch bản**: Win back người đăng ký không hoạt động từ 90+ ngày.

**Quy trình**:
1. Phân khúc người dùng theo ngày tương tác cuối
2. Email 1: "Chúng tôi nhớ bạn" với top nội dung/tính năng
3. Đợi 5 ngày, kiểm tra tương tác
4. Email 2: Khảo sát hỏi tại sao họ ngừng tương tác
5. Email 3: Ưu đãi đặc biệt hoặc tùy chọn hủy đăng ký

**Kết quả**: 15-20% tỷ lệ tái kích hoạt, danh sách sạch hơn với người đăng ký tương tác.

## Xử lý sự cố

**Vấn đề**: Tỷ lệ mở thấp (<10%)
**Giải pháp**:
- A/B test 5 biến thể subject line
- Kiểm tra điểm uy tín người gửi
- Xác minh khả năng gửi đến (records SPF, DKIM, DMARC)

**Vấn đề**: Tỷ lệ hủy đăng ký cao (>1%)
**Giải pháp**:
- Xem lại phân khúc (đối tượng sai?)
- Kiểm tra tần suất email (quá nhiều emails?)
- Kiểm toán liên quan nội dung

**Vấn đề**: Emails vào spam
**Giải pháp**:
- Tải checklist khả năng gửi đến: `references/deliverability-checklist.md`
- Xác minh authentication records (SPF, DKIM, DMARC)
- Tránh từ trigger spam ("miễn phí", "đảm bảo", chữ hoa quá mức)

## Kỹ năng liên quan

- [Copywriting](/vi/docs/marketing/skills/copywriting) - Công thức copy email và CTAs
- [Content Marketing](/vi/docs/marketing/skills/content-marketing) - Lập kế hoạch nội dung newsletter
- [Analytics](/vi/docs/marketing/skills/analytics) - Theo dõi hiệu suất email
- [Campaign Management](/vi/docs/marketing/skills/campaign-management) - Phối hợp đa kênh

## Lệnh liên quan

- `/email/create` - Tạo chiến dịch email
- `/email/sequence` - Xây dựng chuỗi drip
- `/email/optimize` - Cải thiện email hiện có
- `/content/enhance` - Nâng cao copy email
