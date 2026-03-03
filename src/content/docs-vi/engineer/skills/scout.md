---
title: "ck:scout"
description: "Khám phá codebase nhanh bằng các agent song song để tìm file và thu thập context"
section: engineer
kit: engineer
category: skills
order: 7
lang: vi
---

Khám phá codebase nhanh, tiết kiệm token bằng các agent song song để tìm các file cần thiết cho task.

## Skill Này Làm Gì

Skill Scout khám phá nhanh codebase của bạn bằng cách sử dụng các agent song song để định vị các file liên quan, hiểu cấu trúc và thu thập context. Giống như có một nhóm developer đồng thời tìm kiếm các phần khác nhau của codebase và báo cáo lại kết quả.

Hãy nghĩ đây như nhiệm vụ trinh sát trước khi thực hiện tính năng—nhanh chóng lập bản đồ địa hình để bạn biết chính xác file nào quan trọng cho task của mình.

## Khi Nào Sử Dụng

- Bắt đầu làm việc trên tính năng trải rộng nhiều thư mục
- Người dùng đề cập cần "tìm", "định vị" hoặc "tìm kiếm" file
- Bắt đầu phiên debug cần hiểu mối quan hệ giữa các file
- Người dùng hỏi về cấu trúc dự án hoặc chức năng nằm ở đâu
- Trước khi thay đổi có thể ảnh hưởng nhiều phần của codebase

## Khả Năng Cốt Lõi

- Khám phá file dựa trên agent song song
- Khám phá codebase tiết kiệm token
- Tích hợp sẵn khám phá song song hoặc công cụ bên ngoài (Gemini/OpenCode CLI)
- Mở rộng linh hoạt dựa trên quy mô codebase
- Báo cáo ngắn gọn với các câu hỏi chưa giải quyết

## Đối Số

- **Mặc định**: Scout dùng khám phá song song tích hợp sẵn
- **ext**: Scout dùng công cụ Gemini/OpenCode CLI bên ngoài song song

## Bắt Đầu Nhanh

1. Phân tích prompt người dùng để xác định mục tiêu tìm kiếm
2. Dùng nhiều pattern Grep/Glob để tìm file và ước tính quy mô
3. Tạo các agent song song với các thư mục được phân chia
4. Tổng hợp kết quả thành báo cáo ngắn gọn

## Quy Trình Làm Việc

### 1. Phân Tích Task
- Phân tích prompt người dùng để xác định mục tiêu tìm kiếm
- Xác định các thư mục chính, pattern, loại file, số dòng code
- Xác định quy mô tối ưu cho khám phá song song

### 2. Chia Và Chinh Phục
- Phân chia codebase thành các phân đoạn logic cho mỗi agent
- Giao cho mỗi agent các thư mục hoặc pattern cụ thể
- Đảm bảo không chồng lấp, tối đa hóa phạm vi bao phủ

### 3. Tạo Agent Song Song
- Mỗi luồng khám phá nhận các thư mục/file cụ thể để phân tích
- Mỗi luồng có cửa sổ context <200K token
- Số lượng agent phụ thuộc vào tài nguyên hệ thống và quy mô file
- Mỗi luồng trả về tóm tắt chi tiết cho agent chính

### 4. Thu Thập Kết Quả
- Timeout 3 phút mỗi agent (bỏ qua agent không phản hồi)
- Tổng hợp kết quả thành báo cáo đơn
- Liệt kê các câu hỏi chưa giải quyết ở cuối

## Cách Dùng

Kích hoạt bằng cách đề cập đến khám phá file, khám phá codebase, hoặc nhu cầu hiểu cấu trúc.

## Ví Dụ Prompt

- "Tìm tất cả file liên quan đến authentication trong codebase"
- "Tính năng user profile nằm ở đâu?"
- "Scout lớp API để hiểu luồng thanh toán"
- "Định vị tất cả file tương tác với database"
- "Các component nào dùng hệ thống theme?"

## Định Dạng Báo Cáo

```markdown
# Scout Report

## Relevant Files
- `path/to/file.ts` - Mô tả ngắn gọn
- ...

## Unresolved Questions
- Các khoảng trống trong phát hiện
```

## Điều Gì Làm Skill Này Khác Biệt

Scout không chỉ grep—nó phân chia công việc khám phá thông minh qua các agent song song, mỗi agent có đầy đủ context về lãnh thổ được giao. Kết quả: hiểu codebase toàn diện trong vài phút, không phải vài giờ.

## Skill Liên Quan

- [Cook](/vi/docs/engineer/skills/cook) - Dùng Scout trước khi triển khai
- [Fix](/vi/docs/engineer/skills/fix) - Dùng Scout để hiểu context lỗi
- [GKG](/vi/docs/engineer/skills/gkg) - Phân tích code ngữ nghĩa (hướng tiếp cận thay thế)
