---
title: Agent Planner
description: Nghiên cứu, phân tích và tạo các kế hoạch triển khai toàn diện trước khi viết mã
section: engineer
kit: engineer
category: agents
order: 3
published: true
lang: vi
---

# Agent Planner

Agent planner thực hiện nghiên cứu, phân tích và tạo các kế hoạch triển khai chi tiết trước khi bất kỳ dòng mã nào được viết. Nó đảm bảo các tính năng được suy nghĩ kỹ lưỡng và tuân theo các thực hành tốt nhất.

## Mục đích

Nghiên cứu, phân tích và tạo các kế hoạch triển khai toàn diện cho các tính năng, quá trình tái cấu trúc (refactoring) và các quyết định kỹ thuật.

## Khi nào được kích hoạt

Agent planner kích hoạt khi:
- Sử dụng lệnh `/plan [description]`
- Sử dụng lệnh `/bootstrap` (giai đoạn nghiên cứu)
- Sử dụng lệnh `/fix:hard` (các vấn đề phức tạp cần chiến lược)
- Trước khi thực hiện tái cấu trúc lớn
- Khi đánh giá các đánh đổi kỹ thuật (technical trade-offs)

## Khả năng

### Nghiên cứu
- **Thực hành tốt nhất**: Tìm kiếm các tiêu chuẩn và mẫu thiết kế của ngành.
- **Tài liệu**: Xem xét các tài liệu hướng dẫn chính thức.
- **Giải pháp**: Tìm các cách tiếp cận đã được chứng minh cho các vấn đề phổ biến.
- **Đánh đổi**: Phân tích ưu và nhược điểm của các cách tiếp cận khác nhau.

### Phân tích
- **Hiểu mã nguồn**: Đọc và hiểu các mẫu mã nguồn hiện có.
- **Phân tích phụ thuộc**: Đánh giá các lựa chọn thư viện.
- **Xem xét kiến trúc**: Đánh giá thiết kế hệ thống hiện tại.
- **Đánh giá tác động**: Xác định các thành phần bị ảnh hưởng.

### Lập kế hoạch
- **Các bước triển khai**: Chia nhỏ công việc thành các nhiệm vụ rõ ràng.
- **Thay đổi tệp**: Liệt kê các tệp cần tạo hoặc sửa đổi.
- **Chiến lược kiểm thử**: Xác định cách tiếp cận kiểm thử.
- **Ước tính thời gian**: Đưa ra các ước tính thời gian thực tế.
- **Kế hoạch Rollback**: Bao gồm các quy trình phục hồi nếu có sự cố.

## Ví dụ sử dụng

### Lập kế hoạch cho tính năng mới
**Đầu vào**: `/plan [thêm thông báo thời gian thực với WebSocket]`
**Quy trình**:
1. **Giai đoạn nghiên cứu**: Tìm hiểu về WebSocket, Socket.io vs native, Redis adapter để mở rộng.
2. **Giai đoạn phân tích**: Kiểm tra `server.ts`, middleware xác thực, kiến trúc hệ thống hiện tại.
3. **Giai đoạn lập kế hoạch**: Tạo file kế hoạch trong thư mục `plans/`.

**Nội dung kế hoạch thông thường bao gồm**:
- Tổng quan và cách tiếp cận.
- Các bước cài đặt phụ thuộc.
- Chi tiết triển khai server, middleware, model dữ liệu.
- Hướng dẫn tích hợp cho frontend.
- Chiến lược kiểm thử và kế hoạch Rollback.

## Quy trình làm việc

1. **Tạo kế hoạch**: Chạy `/plan [mô tả]`.
2. **Xem xét**: Đọc kế hoạch đã tạo trong `plans/`.
3. **Phản hồi**: Đưa ra ý kiến chỉnh sửa (ví dụ: "Sử dụng PostgreSQL thay vì Redis").
4. **Triển khai**: Chạy `/cook` hoặc `/code @plans/ten-ke-hoach.md`.

## Các chỉ số thành công

Một kế hoạch tốt dẫn đến:
- Việc triển khai khớp với kế hoạch trên 90%.
- Không có bất ngờ lớn trong quá trình viết mã.
- Ước tính thời gian chính xác (sai số trong khoảng 20%).
- Các vấn đề bảo mật được ngăn chặn từ sớm.

---

**Thông điệp chính**: Agent planner đảm bảo việc triển khai được nghiên cứu kỹ lưỡng và lập kế hoạch thấu đáo, giúp tiết kiệm thời gian và ngăn ngừa sai sót trong quá trình phát triển.
