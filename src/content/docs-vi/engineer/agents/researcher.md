---
title: Agent Researcher
description: Nghiên cứu công nghệ đa nguồn với phân tích tài liệu toàn diện và khám phá các thực hành tốt nhất
section: engineer
kit: engineer
category: agents
order: 2
published: true
lang: vi
---

# Agent Researcher

Agent researcher thực hiện nghiên cứu công nghệ toàn diện trên nhiều nguồn khác nhau để thu thập tài liệu, phân tích các thực hành tốt nhất và tổng hợp các phát hiện thành thông tin có thể thực hiện được cho việc triển khai tính năng.

## Researcher làm gì?

- Khám phá đồng thời nhiều nguồn thông tin bằng kỹ thuật Query Fan-Out.
- Thu thập tài liệu từ Google Search, YouTube, các trang web và GitHub.
- Phân tích nội dung video cho các bài hướng dẫn kỹ thuật và minh họa.
- Tổng hợp các phát hiện thành các báo cáo markdown có cấu trúc và toàn diện.
- Xác thực tính chính xác của thông tin qua nhiều nguồn khác nhau.
- Xác định các cân nhắc về bảo mật và tác động hiệu suất.

## Khi nào nên sử dụng?

Sử dụng researcher khi:
- Điều tra các công nghệ hoặc framework mới trước khi áp dụng.
- Tìm kiếm tài liệu chính thức và hướng dẫn thiết lập.
- Khám phá các thực hành tốt nhất cho các triển khai cụ thể.
- Nghiên cứu các plugin, gói (package) hoặc thư viện.
- Hiểu các mẫu kiến trúc và quyết định thiết kế.
- Đánh giá tác động bảo mật của các lựa chọn kỹ thuật.

## Ví dụ nhanh

```bash
# Nghiên cứu một công nghệ trước khi triển khai
/plan [thêm tích hợp thanh toán Stripe]
```

**Điều gì xảy ra**:
1. Researcher kích hoạt các tìm kiếm song song trên Google, YouTube, GitHub.
2. Thu thập tài liệu chính thức, bài hướng dẫn và các cuộc thảo luận cộng đồng.
3. Phân tích các thực hành tốt nhất về bảo mật và các sai lầm phổ biến.
4. Kết quả: Báo cáo toàn diện được lưu vào `./plans/research/YYMMDD-stripe-integration.md`.

## Cách thức hoạt động

### Bước 1: Query Fan-Out
Researcher sử dụng chiến lược tìm kiếm song song để khám phá nhiều nguồn cùng lúc, đảm bảo bao phủ tối đa trong thời gian tối thiểu.

### Bước 2: Phân tích đa nguồn
Phân tích thông tin từ Google (bài viết kỹ thuật, Stack Overflow), YouTube (video hướng dẫn, live coding), các trang web chính thức (docs, guides) và GitHub (thư viện phổ biến, ví dụ triển khai).

### Bước 3: Tổng hợp & Tạo báo cáo
Tổng hợp tất cả các phát hiện thành báo cáo markdown có cấu trúc bao gồm:
- Tóm tắt điều hành với các điểm chính.
- Các phát hiện chi tiết theo danh mục.
- Các thực hành tốt nhất và cách tiếp cận khuyến nghị.
- Các cân nhắc về bảo mật và lỗ hổng phổ biến.
- Các chiến lược tối ưu hóa hiệu suất.
- Các khuyến nghị triển khai kèm ví dụ mã nguồn.
- Liên kết đến tất cả các nguồn để xác minh.

## Công cụ & Khả năng

Researcher có quyền truy cập vào các công cụ mạnh mẽ như SearchAPI, search_youtube, WebFetch, VidCap, repomix, và Gemini Vision để phân tích hình ảnh/sơ đồ từ tài liệu.

---

**Tiếp theo**: Tìm hiểu cách [agent planner](/vi/docs/engineer/agents/planner) sử dụng các kết quả nghiên cứu để tạo kế hoạch triển khai.
