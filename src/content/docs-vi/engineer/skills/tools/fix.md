---
title: "Fix"
description: "Sửa lỗi thống nhất với định tuyến độ phức tạp thông minh và chế độ tự động hoặc có sự tham gia của người dùng"
section: engineer
kit: engineer
category: skills
order: 27
lang: vi
---

Quy trình sửa lỗi hoàn chỉnh với định tuyến thông minh dựa trên độ phức tạp của vấn đề. Tự động kích hoạt trước khi sửa BẤT KỲ lỗi, lỗi, test thất bại hoặc vấn đề code nào.

## Kỹ năng này làm gì

Fix điều phối toàn bộ quá trình gỡ lỗi và sửa chữa từ điều tra đến giải pháp đã được xác minh. Nó đánh giá độ phức tạp, định tuyến đến quy trình phù hợp và đảm bảo các bản sửa lỗi không làm hỏng các phần khác của codebase.

Hãy nghĩ về nó như hệ thống phân loại lỗi của bạn—phân tích vấn đề, chọn chiến lược phù hợp (nhanh, tiêu chuẩn hoặc sâu) và điều phối xác minh song song để ngăn chặn hồi quy.

## Khả năng cốt lõi

- Đánh giá độ phức tạp và định tuyến quy trình thông minh
- Khám phá giả thuyết nguyên nhân gốc rễ song song
- Xử lý vấn đề Đơn giản/Vừa phải/Phức tạp/Song song
- Chế độ xem xét tự động hoặc có sự tham gia của người dùng
- Xác minh toàn diện để ngăn chặn vấn đề mới
- Cập nhật tài liệu và quản lý commit tự động

## Chế độ quy trình

| Chế độ | Khuyến nghị khi | Hành vi |
|------|----------------|------------|
| **Autonomous** (mặc định) | Vấn đề đơn giản/vừa phải | Tự động chấp thuận nếu điểm ≥9.5 & 0 critical |
| **Human-in-the-loop Review** | Code quan trọng/production | Tạm dừng để chấp thuận ở mỗi bước |
| **Quick** | Lỗi type, lint, bug nhỏ | Chu trình debug → fix → review nhanh |

## Quy trình

### Bước 1: Chọn chế độ

Hành động đầu tiên (trừ khi "auto" trong yêu cầu): Yêu cầu người dùng chọn chế độ quy trình

### Bước 2: Debug

- Kích hoạt kỹ năng `debug`
- Đoán tất cả các nguyên nhân gốc rễ có thể
- Khám phá codebase song song để xác minh mỗi giả thuyết
- Tạo báo cáo với kết quả

### Bước 3: Đánh giá độ phức tạp & Sửa lỗi

Phân loại trước khi định tuyến:

| Mức độ | Dấu hiệu | Quy trình |
|-------|------------|------------|
| **Simple** | File đơn, lỗi rõ ràng, type/lint | Quy trình nhanh |
| **Moderate** | Nhiều file, nguyên nhân không rõ | Quy trình tiêu chuẩn |
| **Complex** | Toàn hệ thống, ảnh hưởng kiến trúc | Quy trình sâu |
| **Parallel** | 2+ vấn đề độc lập | Developer song song |

### Bước 4: Xác minh bản sửa lỗi

- Đọc và phân tích tất cả thay đổi
- Quét code liên quan để đảm bảo bản sửa không gây hồi quy
- Đảm bảo bản sửa không làm hỏng phần khác
- Ngăn chặn vấn đề tương lai với xác thực toàn diện

### Bước 5: Hoàn tất

- Báo cáo tóm tắt với mức độ tin cậy, thay đổi, file liên quan
- Yêu cầu commit qua `git-manager` và cập nhật docs qua `docs-manager`

## Cách sử dụng

```
/fix [--auto|--review|--quick]
```

Kích hoạt tự động khi đề cập đến bugs, errors, test failures, CI/CD issues, type errors, lint, log errors, UI issues hoặc code problems.

## Ví dụ

- "Tests are failing in the auth module"
- "Fix the type error in UserProfile component"
- "Debug why the API returns 500 on login"
- "The build is broken in CI"
- "Users report the app crashes on logout"

## Định dạng đầu ra

```
✓ Step 0: [Mode] selected - [Complexity] detected
✓ Step 1: Root cause identified - [summary]
✓ Step 2: Fix implemented - [N] files changed
✓ Step 3: Tests [X/X passed]
✓ Step 4: Review [score]/10 - [status]
✓ Step 5: Complete - [action taken]
```

## Điểm khác biệt

Fix không chỉ vá triệu chứng—nó tìm nguyên nhân gốc rễ, xác minh bản sửa trên toàn bộ codebase và ngăn chặn các vấn đề tương tự trong tương lai thông qua xác thực defense-in-depth. Kết quả: bản sửa đáng tin cậy, không phải giải pháp tạm thời.

## Kỹ năng liên quan

- [Debug](/vi/docs/engineer/skills/tools/debug) - Framework gỡ lỗi có hệ thống
- [Cook](/vi/docs/engineer/skills/tools/cook) - Để triển khai tính năng mới
