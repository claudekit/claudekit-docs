---
title: "ck:fix"
description: "Quy trình sửa lỗi toàn diện với định tuyến thông minh theo độ phức tạp và các chế độ tự động hoặc có sự giám sát của con người"
section: engineer
kit: engineer
category: skills
order: 5
lang: vi
---

Quy trình sửa lỗi đầy đủ với định tuyến thông minh dựa trên độ phức tạp của vấn đề. Tự động kích hoạt trước khi sửa BẤT KỲ lỗi, lỗi kiểm thử, hoặc vấn đề về code nào.

## Skill Này Làm Gì

Fix điều phối toàn bộ quá trình debug và sửa chữa từ điều tra đến giải pháp đã được xác minh. Nó đánh giá độ phức tạp, định tuyến đến quy trình phù hợp, và đảm bảo các bản sửa lỗi không làm hỏng các phần khác của codebase.

Hãy nghĩ về nó như hệ thống phân loại lỗi của bạn — phân tích vấn đề, chọn chiến lược phù hợp (nhanh, tiêu chuẩn, hoặc sâu), và phối hợp xác minh song song để ngăn chặn hồi quy.

## Khả Năng Cốt Lõi

- Đánh giá độ phức tạp và định tuyến quy trình thông minh
- Khám phá giả thuyết nguyên nhân gốc rễ song song
- Xử lý vấn đề Đơn giản/Trung bình/Phức tạp/Song song
- Chế độ tự động hoặc có sự giám sát của con người
- Xác minh toàn diện để ngăn chặn vấn đề mới
- Cập nhật tài liệu tự động và quản lý commit

## Chế Độ Quy Trình

| Chế độ | Khuyến nghị khi | Hành vi |
|--------|-----------------|---------|
| **Tự động** (mặc định) | Vấn đề đơn giản/trung bình | Tự động phê duyệt nếu điểm ≥9.5 & 0 lỗi nghiêm trọng |
| **Giám sát con người** | Code quan trọng/production | Dừng để phê duyệt tại mỗi bước |
| **Nhanh** | Lỗi type, lint, lỗi nhỏ | Chu kỳ debug → sửa → xem xét nhanh |

## Quy Trình

### Bước 1: Chọn Chế Độ

Hành động đầu tiên (trừ khi có "auto" trong yêu cầu): Hỏi người dùng chọn chế độ quy trình

### Bước 2: Debug

- Kích hoạt skill `debug`
- Đoán tất cả nguyên nhân gốc rễ có thể
- Khám phá codebase song song để xác minh từng giả thuyết
- Tạo báo cáo với kết quả

### Bước 3: Đánh Giá Độ Phức Tạp & Sửa

Phân loại trước khi định tuyến:

| Mức độ | Chỉ số | Quy trình |
|--------|--------|-----------|
| **Đơn giản** | Một file, lỗi rõ ràng, type/lint | Quy trình nhanh |
| **Trung bình** | Nhiều file, nguyên nhân gốc rễ không rõ | Quy trình tiêu chuẩn |
| **Phức tạp** | Toàn hệ thống, ảnh hưởng kiến trúc | Quy trình sâu |
| **Song song** | 2+ vấn đề độc lập | Lập trình viên song song |

### Bước 4: Xác Minh Bản Sửa

- Đọc và phân tích tất cả thay đổi
- Quét code liên quan để đảm bảo bản sửa không gây hồi quy
- Đảm bảo bản sửa không làm hỏng các phần khác
- Ngăn chặn vấn đề trong tương lai với xác nhận toàn diện

### Bước 5: Hoàn Tất

- Báo cáo tóm tắt với mức độ tin cậy, thay đổi, các file liên quan
- Yêu cầu commit qua `git-manager` và cập nhật tài liệu qua `docs-manager`

## Cách Dùng

```
/ck:fix [--auto|--review|--quick|--parallel]
```

| Flag | Hành vi |
|------|---------|
| `--auto` | Chế độ tự động (mặc định) - tự động phê duyệt nếu điểm >= 9.5 |
| `--review` | Giám sát con người - dừng để phê duyệt tại mỗi bước |
| `--quick` | Chu kỳ nhanh cho lỗi nhỏ (lỗi type, lint) |
| `--parallel` | Định tuyến đến các agent `fullstack-developer` song song cho mỗi vấn đề |

### Chế Độ --parallel (v2.10.0+)

Khi bạn có nhiều vấn đề độc lập, `--parallel` tạo ra các agent riêng biệt để sửa từng vấn đề đồng thời. Hữu ích cho:
- Sửa hàng loạt lỗi lint trên các file
- Xử lý các lỗi kiểm thử không liên quan
- Sửa nhiều lỗi độc lập trong một phiên

```bash
# Sửa nhiều vấn đề song song
/ck:fix --parallel

# Ví dụ: 3 lỗi type không liên quan → 3 agent song song
```

Tự động kích hoạt khi đề cập đến lỗi, lỗi kiểm thử, vấn đề CI/CD, lỗi type, lint, lỗi log, vấn đề UI, hoặc vấn đề code.

## Prompt Mẫu

- "Các bài kiểm thử đang thất bại trong module auth"
- "Sửa lỗi type trong component UserProfile"
- "Debug tại sao API trả về 500 khi đăng nhập"
- "Build đang bị lỗi trong CI"
- "Người dùng báo cáo app bị crash khi đăng xuất"

## Định Dạng Đầu Ra

```
✓ Bước 0: [Chế độ] được chọn - [Độ phức tạp] được phát hiện
✓ Bước 1: Nguyên nhân gốc rễ đã xác định - [tóm tắt]
✓ Bước 2: Bản sửa đã triển khai - [N] file đã thay đổi
✓ Bước 3: Kiểm thử [X/X đạt]
✓ Bước 4: Xem xét [điểm]/10 - [trạng thái]
✓ Bước 5: Hoàn thành - [hành động đã thực hiện]
```

## Điểm Khác Biệt

Fix không chỉ vá triệu chứng — nó tìm nguyên nhân gốc rễ, xác minh bản sửa trên toàn codebase, và ngăn chặn các vấn đề tương tự trong tương lai thông qua xác nhận phòng thủ nhiều lớp. Kết quả: bản sửa đáng tin cậy, không phải giải pháp tạm thời.

## Skills Liên Quan

- [Debug](/vi/docs/engineer/skills/debug) - Framework debug có hệ thống
- [Cook](/vi/docs/engineer/skills/cook) - Để triển khai tính năng mới
