---
title: "Scout"
description: "Khám phá codebase nhanh sử dụng agent song song để phát hiện file và thu thập ngữ cảnh"
section: engineer
kit: engineer
category: skills
order: 33
lang: vi
---

Khám phá codebase nhanh, tiết kiệm token sử dụng agent song song để tìm file cần thiết cho nhiệm vụ.

## Kỹ năng này làm gì

Kỹ năng Scout khám phá codebase của bạn một cách nhanh chóng bằng agent song song để xác định file liên quan, hiểu cấu trúc và thu thập ngữ cảnh. Nó giống như có một nhóm developer đồng thời tìm kiếm các phần khác nhau của codebase và báo cáo kết quả.

Hãy nghĩ về nó như nhiệm vụ trinh sát trước khi làm tính năng—nhanh chóng lập bản đồ địa hình để bạn biết chính xác file nào quan trọng cho nhiệm vụ của bạn.

## Khi nào sử dụng

- Bắt đầu làm tính năng trải dài nhiều thư mục
- Người dùng đề cập đến cần "tìm", "xác định vị trí" hoặc "tìm kiếm" file
- Bắt đầu phiên gỡ lỗi cần hiểu quan hệ file
- Người dùng hỏi về cấu trúc dự án hoặc chức năng nằm ở đâu
- Trước khi thay đổi có thể ảnh hưởng nhiều phần codebase

## Khả năng cốt lõi

- Khám phá file dựa trên agent song song
- Khám phá codebase tiết kiệm token
- Khám phá song song tích hợp hoặc công cụ ngoài (Gemini/OpenCode CLI)
- Mở rộng thích ứng dựa trên kích thước codebase
- Báo cáo ngắn gọn với câu hỏi chưa giải quyết

## Tham số

- **Default**: Scout sử dụng khám phá song song tích hợp
- **ext**: Scout sử dụng công cụ Gemini/OpenCode CLI ngoài song song

## Bắt đầu nhanh

1. Phân tích prompt người dùng để xác định mục tiêu tìm kiếm
2. Sử dụng nhiều mẫu Grep/Glob để tìm file và ước tính quy mô
3. Spawn agent song song với thư mục được phân chia
4. Thu thập kết quả thành báo cáo ngắn gọn

## Quy trình

### 1. Phân tích nhiệm vụ
- Parse prompt người dùng cho mục tiêu tìm kiếm
- Xác định thư mục chính, mẫu, loại file, dòng code
- Xác định quy mô tối ưu cho khám phá song song

### 2. Chia để trị
- Chia codebase thành phân đoạn logic cho mỗi agent
- Gán mỗi agent thư mục hoặc mẫu cụ thể
- Đảm bảo không chồng chéo, tối đa hóa độ bao phủ

### 3. Spawn agent song song
- Mỗi luồng khám phá nhận thư mục/file cụ thể để phân tích
- Mỗi agent có cửa sổ ngữ cảnh <200K token
- Số lượng agent phụ thuộc vào tài nguyên hệ thống và quy mô file
- Mỗi agent trả về tóm tắt chi tiết cho agent chính

### 4. Thu thập kết quả
- Timeout 3 phút cho mỗi agent (bỏ qua không phản hồi)
- Tổng hợp kết quả thành một báo cáo
- Liệt kê câu hỏi chưa giải quyết ở cuối

## Cách sử dụng

Kích hoạt bằng cách đề cập đến khám phá file, khám phá codebase hoặc nhu cầu hiểu cấu trúc.

## Ví dụ

- "Find all authentication-related files in the codebase"
- "Where does the user profile feature live?"
- "Scout the API layer to understand the payment flow"
- "Locate all files that interact with the database"
- "Which components use the theme system?"

## Định dạng báo cáo

```markdown
# Scout Report

## Relevant Files
- `path/to/file.ts` - Brief description
- ...

## Unresolved Questions
- Any gaps in findings
```

## Điểm khác biệt

Scout không chỉ grep—nó phân chia công việc khám phá một cách thông minh giữa các agent song song, mỗi agent có ngữ cảnh đầy đủ về khu vực được giao. Kết quả: hiểu biết codebase toàn diện trong vài phút, không phải hàng giờ.

## Kỹ năng liên quan

- [Cook](/vi/docs/engineer/skills/tools/cook) - Sử dụng Scout trước khi triển khai
- [Fix](/vi/docs/engineer/skills/tools/fix) - Sử dụng Scout để hiểu ngữ cảnh bug
- [GKG](/vi/docs/engineer/skills/tools/gkg) - Phân tích code ngữ nghĩa (cách tiếp cận thay thế)
