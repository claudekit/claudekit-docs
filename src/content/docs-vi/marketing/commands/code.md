---
title: "/code"
description: "Thực hiện kế hoạch thực hiện với quy trình 6 bước: phân tích, thực hiện, kiểm tra, đánh giá mã, phê duyệt người dùng và hoàn tất"
section: marketing
category: commands
order: 15
published: true
---

> Thực hiện kế hoạch với các cổng chất lượng và kiểm tra tự động

## Khởi động nhanh

```bash
/code
```

**Tự động phát hiện kế hoạch mới nhất** hoặc chỉ định:
```bash
/code plans/251229-email-campaign
```

## Quy trình 6 bước

### Bước 1: Phân tích & Trích xuất tác vụ
- Đọc tệp kế hoạch hoàn chỉnh
- Trích xuất tất cả các tác vụ
- Kích hoạt kỹ năng cần thiết
- Xác định phụ thuộc

### Bước 2: Thực hiện
- Thực hiện từng bước
- Đánh dấu tác vụ hoàn thành khi xong
- Chạy kiểm tra kiểu
- Sử dụng tác nhân chuyên biệt (ui-ux-designer cho UI)

### Bước 3: Kiểm tra (Cổng chặn)
- Viết kiểm tra toàn diện
- Chạy bộ kiểm tra qua tác nhân tester
- **Yêu cầu 100% pass** - chặn nếu thất bại
- Tác nhân debugger khắc phục các sự cố

### Bước 4: Đánh giá mã (Cổng chặn)
- Tác nhân code-reviewer phân tích mã
- Kiểm tra bảo mật, hiệu suất, kiến trúc
- **Yêu cầu 0 vấn đề quan trọng** - chặn nếu không
- Sửa và xem xét lại cho đến khi sạch

### Bước 5: Phê duyệt người dùng (Cổng chặn)
- Trình bày bản tóm tắt
- **Chờ phê duyệt rõ ràng**
- Không thể tiếp tục mà không có xác nhận của người dùng

### Bước 6: Hoàn tất
- project-manager cập nhật trạng thái kế hoạch
- docs-manager cập nhật tài liệu
- Cam kết tự động tới git (sau khi được phê duyệt)
- Tạo báo cáo hoàn thành

## Ví dụ đầu ra

```markdown
✓ Bước 0: Email Campaign Plan - Pha 1
✓ Bước 1: Tìm thấy 8 tác vụ trên 1 pha - Không có sự mơ hồ
✓ Bước 2: Thực hiện 6 tệp - 8/8 tác vụ hoàn thành, biên dịch thành công
✓ Bước 3: Kiểm tra [12/12 passed] - Tất cả yêu cầu được đáp ứng
✓ Bước 4: Kiểm tra mã - [0] vấn đề quan trọng
⏸ Bước 5: CHỜ phê duyệt của người dùng

Thay đổi:
- Created lib/email/campaign.ts
- Created lib/email/scheduler.ts
- Modified app/api/campaigns/route.ts
- Added 12 test cases

Phê duyệt thay đổi? [Y/n]
```

**Sau khi được phê duyệt**:
```markdown
✓ Bước 5: Người dùng phê duyệt - Sẵn sàng hoàn thành
✓ Bước 6: Hoàn tất - Trạng thái cập nhật - Cam kết git

feat(email): implement email drip campaign system

- Add campaign creation and scheduling
- Implement email template management
- Add trigger-based automation
- Create analytics dashboard
- Add 12 test cases

Committed: abc1234
```

## Cổng chặn

**Không thể tiếp tục nếu**:
- Kiểm tra thất bại (Bước 3)
- Phát hiện vấn đề quan trọng (Bước 4)
- Người dùng chưa phê duyệt (Bước 5)

## Lệnh liên quan

- [/plan](/vi/docs/marketing/commands/plan) - Tạo kế hoạch trước
- [/cook](/vi/docs/marketing/commands/cook) - Kế hoạch + mã trong một
- [/test](/vi/docs/marketing/commands/test) - Chỉ chạy kiểm tra
- [/fix](/vi/docs/marketing/commands/fix) - Khắc phục các vấn đề

---

**Chất lượng theo mặc định.** Các cổng tự động đảm bảo mã sản xuất.
