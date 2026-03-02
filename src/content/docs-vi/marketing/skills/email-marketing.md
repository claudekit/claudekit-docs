---
lang: vi
title: "ckm:email-marketing"
description: "Xây dựng chiến dịch email, luồng tự động, chuỗi drip và tối ưu khả năng giao email để marketing email hiệu quả."
section: marketing
category: skills
order: 5
---

> Xây dựng chiến dịch email có tỷ lệ chuyển đổi cao với quy trình tự động, nội dung tối ưu và thực hành tốt nhất về khả năng giao.

## Skill Này Làm Gì

**Thách thức**: Email vẫn là kênh marketing có ROI cao nhất (trung bình 42:1), nhưng tạo chiến dịch hiệu quả đòi hỏi nắm vững luồng tự động, copywriting, khả năng giao email và A/B test.

**Giải pháp**: Skill Email Marketing cung cấp mẫu chiến dịch, thiết kế luồng tự động, công thức dòng chủ đề và danh sách kiểm tra khả năng giao. Bao gồm các khung đã được kiểm chứng cho newsletter, email quảng cáo, chuỗi drip và chiến dịch tái tương tác.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt cho agent Email Wizard, Nurture Specialist và Content Creator.

**Tường minh**: Kích hoạt qua prompt:
```
Activate email-marketing skill to [mô tả tác vụ]
```

## Tính Năng

### 1. Mẫu Chiến Dịch Email
Các mẫu dựng sẵn cho các loại chiến dịch phổ biến với cấu trúc đã được kiểm chứng.

**Mẫu có sẵn**:
- **Newsletter**: Cập nhật hàng tuần/tháng với tổng hợp nội dung
- **Quảng cáo**: Ra mắt sản phẩm, giảm giá, ưu đãi có thời hạn
- **Giao dịch**: Hóa đơn, xác nhận, đặt lại mật khẩu
- **Drip/Nuôi dưỡng**: Chuỗi onboarding hoặc giáo dục nhiều bước
- **Tái tương tác**: Chiến dịch win-back cho người đăng ký không hoạt động

**Tải mẫu**: `references/email-templates.md`

### 2. Thiết Kế Luồng Tự Động
Lập bản đồ hành trình khách hàng với sự kiện kích hoạt, thời gian và các nhánh quyết định.

**Ví dụ luồng**:
```
Kích hoạt: Người dùng đăng ký
├─ Email 1: Chào mừng + đề xuất giá trị (ngay lập tức)
├─ Email 2: Tổng quan tính năng (Ngày 2)
├─ Quyết định: Tài khoản đã kích hoạt?
│  ├─ Có → Chuỗi thành công
│  └─ Không → Nhắc nhở kích hoạt (Ngày 5)
└─ Email 3: Case study + CTA (Ngày 7)
```

**Thư viện luồng**: `references/automation-flows.md`

### 3. Công Thức Dòng Chủ Đề
Các mẫu đã được kiểm chứng cho tỷ lệ mở cao hơn trong các ngành.

**Hiệu suất cao nhất**:
- **Khoảng cách tò mò**: "Sai lầm mà 90% marketer mắc phải"
- **Hướng lợi ích**: "Tiết kiệm 5 giờ/tuần với mẹo tự động hóa này"
- **Dạng câu hỏi**: "Bạn có mắc những lỗi email này không?"
- **Khẩn cấp**: "Cơ hội cuối: Giảm 40% kết thúc tối nay"

**Chuẩn mực trung bình**: Tỷ lệ mở 15-25%, tỷ lệ nhấp 2-5%

**Hướng dẫn công thức**: `references/subject-line-formulas.md`

## Điều Kiện Tiên Quyết

- Tài khoản nhà cung cấp dịch vụ email (ESP) (SendGrid, Mailchimp, v.v.)
- Chiến lược phân khúc danh sách
- Hướng dẫn thương hiệu cho giọng nói và nhắn tin

## Cấu Hình

Không cần cấu hình. Skill cung cấp khung và mẫu thích ứng với bất kỳ ESP nào.

**Tùy chọn**: Cấu hình ESP API để tự động hóa (server MCP SendGrid, Resend có sẵn).

## Thực Hành Tốt Nhất

**1. Thiết Kế Mobile-First**
Hơn 60% lượt mở xảy ra trên mobile. Kiểm thử hiển thị trên thiết bị trước khi gửi.

**2. Một CTA Chính Mỗi Email**
Nhiều CTA làm loãng sự tập trung. Dùng một hành động rõ ràng mỗi tin nhắn.

**3. Cá Nhân Hóa Hơn Tên**
Dùng dữ liệu hành vi (lần mua cuối, sử dụng tính năng) cho nội dung liên quan.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Chuỗi Email Ra Mắt Sản Phẩm
**Tình huống**: Ra mắt tính năng mới với chuỗi 3 email cho người dùng đang hoạt động.

**Quy trình**:
1. Email 1 (Ngày 0): Thông báo teaser với danh sách chờ
2. Email 2 (Ngày 3): Đi sâu vào tính năng với video demo
3. Email 3 (Ngày 7): Ngày ra mắt với quyền truy cập sớm độc quyền

**Chỉ số thành công**: Tỷ lệ mở 30%, nhấp chuột 8%, kích hoạt 3%

### Trường Hợp 2: Chiến Dịch Tái Tương Tác
**Tình huống**: Thu hồi người đăng ký không hoạt động từ 90+ ngày.

**Quy trình**:
1. Phân khúc người dùng theo ngày tương tác cuối
2. Email 1: "Chúng tôi nhớ bạn" với nội dung/tính năng hàng đầu
3. Chờ 5 ngày, kiểm tra tương tác
4. Email 2: Khảo sát hỏi tại sao họ ngừng tương tác
5. Email 3: Ưu đãi đặc biệt hoặc tùy chọn hủy đăng ký

**Kết quả**: Tỷ lệ tái kích hoạt 15-20%, danh sách sạch hơn với người đăng ký tương tác.

## Xử Lý Sự Cố

**Vấn đề**: Tỷ lệ mở thấp (<10%)
**Giải pháp**:
- A/B test 5 biến thể dòng chủ đề
- Kiểm tra điểm danh tiếng người gửi
- Xác minh khả năng giao (bản ghi SPF, DKIM, DMARC)

**Vấn đề**: Tỷ lệ hủy đăng ký cao (>1%)
**Giải pháp**:
- Xem xét phân khúc (sai đối tượng?)
- Kiểm tra tần suất email (quá nhiều email?)
- Kiểm tra độ liên quan nội dung

**Vấn đề**: Email vào spam
**Giải pháp**:
- Tải danh sách kiểm tra khả năng giao: `references/deliverability-checklist.md`
- Xác minh bản ghi xác thực (SPF, DKIM, DMARC)
- Tránh từ kích hoạt spam ("miễn phí", "đảm bảo", chữ hoa quá nhiều)

## Skill Liên Quan

- [Copywriting](/vi/docs/marketing/skills/copywriting) - Công thức nội dung email và CTA
- [Content Marketing](/vi/docs/marketing/skills/content-marketing) - Lập kế hoạch nội dung newsletter
- [Analytics](/vi/docs/marketing/skills/analytics) - Theo dõi hiệu suất email
- [Campaign Management](/vi/docs/marketing/skills/campaign-management) - Phối hợp đa kênh

## Lệnh Liên Quan

- `/email/create` - Tạo chiến dịch email
- `/email/sequence` - Xây dựng chuỗi drip
- `/email/optimize` - Cải thiện email hiện có
- `/content/enhance` - Nâng cao nội dung email
