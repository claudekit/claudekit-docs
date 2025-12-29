---
title: "Planner Agent"
description: "Nghiên cứu, phân tích và tạo kế hoạch thực thi toàn diện cho tính năng và giải pháp kỹ thuật."
section: marketing
category: agents
order: 1
---

# Planner Agent

> **Kiến trúc sư chiến lược của bạn** - Biến yêu cầu phức tạp thành kế hoạch rõ ràng, khả thi

## Agent Này Làm Gì

Bạn biết cảm giác chìm đắm đó khi ai đó nói "chỉ cần xây dựng hệ thống thanh toán" và bạn nhìn chằm chằm vào màn hình trống tự hỏi bắt đầu từ đâu? Planner Agent là câu trả lời cho sự tê liệt đó.

**Vấn Đề**: Bắt đầu một tính năng phức tạp mà không có kế hoạch dẫn đến viết lại, bỏ lỡ yêu cầu và nợ kỹ thuật. Bạn lãng phí nhiều giờ triển khai giải pháp sai vì bạn không nghiên cứu phương án thay thế trước.

**Giải Pháp**: Planner Agent nghiên cứu, phân tích và tạo kế hoạch thực thi toàn diện trước khi bạn viết một dòng code duy nhất. Nó đánh giá đánh đổi, xác định phụ thuộc và cho bạn lộ trình rõ ràng từ đầu đến cuối.

## Bắt Đầu Nhanh

Khởi động planner khi bắt đầu bất kỳ tính năng không nhỏ nào:

```bash
# Agent sẽ nghiên cứu và tạo kế hoạch chi tiết
/planner "Triển khai OAuth2 authentication cho Google và GitHub"
```

Bạn sẽ nhận được kế hoạch có cấu trúc với quyết định kiến trúc, giai đoạn triển khai và tiêu chí thành công.

## Khả Năng

### Lập Kế Hoạch Chiến Lược
Tạo kế hoạch thực thi chi tiết với:
- Quyết định kiến trúc và lý do
- Đề xuất technology stack
- Bước triển khai theo từng giai đoạn
- Ánh xạ phụ thuộc và phân tích đường quan trọng
- Đánh giá rủi ro và chiến lược giảm thiểu

### Nghiên Cứu Kỹ Thuật
Điều tra giải pháp trước khi triển khai:
- Đánh giá nhiều cách tiếp cận và đánh đổi
- Nghiên cứu thực hành tốt nhất và pattern
- Phân tích hệ quả bảo mật
- Xem xét khả năng mở rộng và hiệu suất
- Review codebase hiện tại cho điểm tích hợp

### Phân Tích Yêu Cầu
Biến đổi yêu cầu mơ hồ thành spec cụ thể:
- Chia nhỏ tính năng phức tạp thành nhiệm vụ
- Xác định phạm vi MVP (quy tắc 80/20)
- Định nghĩa tiêu chí chấp nhận
- Ánh xạ user journey
- Tài liệu hóa edge case và kịch bản lỗi

## Khi Nào Dùng

Sử dụng Planner Agent khi bạn cần:
- Bắt đầu tính năng mới hoặc refactoring lớn
- Đánh giá cách tiếp cận kỹ thuật trước cam kết
- Hiểu phạm vi đầy đủ của thay đổi phức tạp
- Đưa ra quyết định kiến trúc với tự tin
- Lên kế hoạch database migration hoặc thay đổi cơ sở hạ tầng
- Nghiên cứu tích hợp bên thứ ba

## Quy Trình Ví Dụ

### Lập Kế Hoạch Tính Năng Mới

```bash
# Yêu cầu người dùng: "Thêm hỗ trợ webhook cho thông báo thanh toán"
/planner "Thiết kế hệ thống webhook cho thông báo thanh toán Stripe và SePay"
```

**Planner sẽ**:
1. Nghiên cứu thực hành tốt nhất webhook và pattern bảo mật
2. Thiết kế kiến trúc webhook endpoint
3. Lên kế hoạch triển khai xác minh chữ ký
4. Định nghĩa logic retry và xử lý lỗi
5. Tạo schema database cho webhook log
6. Ánh xạ tích hợp với flow thanh toán hiện tại
7. Tài liệu hóa chiến lược testing
8. Ước tính thời gian triển khai

### Đánh Giá Cách Tiếp Cận Kỹ Thuật

```bash
/planner "Chúng ta nên dùng PostgreSQL hay MongoDB cho dữ liệu analytics của chúng tôi?"
```

**Bạn sẽ nhận**:
- So sánh chi tiết cả hai database
- Đặc điểm hiệu suất cho use case của bạn
- Phân tích chi phí và độ phức tạp vận hành
- Đề xuất đường migration
- Đề xuất cuối cùng với lý do

## Thực Hành Tốt Nhất

1. **Bắt Đầu với Kế Hoạch, Không Phải Code**: Khởi động planner trước khi mở editor. Phiên lập kế hoạch 30 phút tiết kiệm nhiều giờ refactoring.

2. **Cụ Thể**: Cho bối cảnh về dự án, tech stack và ràng buộc của bạn. "Thêm authentication" mơ hồ. "Triển khai JWT-based authentication cho Next.js app với PostgreSQL backend" có kết quả tốt hơn.

3. **Review và Điều Chỉnh**: Kế hoạch là tài liệu sống. Nếu bạn phát hiện vấn đề trong triển khai, cập nhật kế hoạch và đánh giá lại.

4. **Dùng Kế Hoạch Như Tài Liệu**: Planner tạo file markdown trong thư mục `plans/` của bạn. Chúng trở thành hồ sơ lịch sử của quyết định kiến trúc.

## Mô Hình Tư Duy Planner Sử Dụng

Planner Agent áp dụng framework tư duy đã được chứng minh:

- **Decomposition**: Chia mục tiêu lớn thành nhiệm vụ cụ thể, có thể test
- **Working Backwards**: Bắt đầu từ kết quả mong muốn và ánh xạ đường đi
- **Second-Order Thinking**: Xem xét hệ quả ("Điều gì xảy ra sau khi chúng ta ship cái này?")
- **Root Cause Analysis**: Đào sâu qua yêu cầu bề mặt để tìm vấn đề thực sự
- **Quy Tắc 80/20**: Xác định 20% tính năng mang lại 80% giá trị
- **Risk Management**: Hỏi "Điều gì có thể sai?" một cách chủ động

## Cấu Trúc Đầu Ra

Mỗi kế hoạch bao gồm:

```markdown
## Tổng Quan
- Mục tiêu và bối cảnh kinh doanh
- Tiêu chí thành công
- Ước tính thời gian

## Quyết Định Kiến Trúc
- Lựa chọn công nghệ với lý do
- Thiết kế hệ thống và data flow
- Điểm tích hợp

## Giai Đoạn Triển Khai
Giai đoạn 1: [Nền tảng]
- Danh sách nhiệm vụ với tiêu chí chấp nhận
- Phụ thuộc và chướng ngại
- Yêu cầu testing

Giai đoạn 2: [Tính Năng Cốt Lõi]
...

## Đánh Giá Rủi Ro
- Rủi ro kỹ thuật và giảm thiểu
- Xem xét bảo mật
- Hệ quả hiệu suất

## Chiến Lược Testing
- Yêu cầu unit test
- Kịch bản integration test
- Checklist manual testing
```

## Agents Liên Quan

- [Project Manager](/vi/docs/marketing/agents/project-manager) - Theo dõi tiến độ so với kế hoạch
- [Docs Manager](/vi/docs/marketing/agents/docs-manager) - Cập nhật tài liệu từ kế hoạch
- [Scout](/vi/docs/marketing/agents/scout) - Khám phá codebase cho bối cảnh lập kế hoạch

## Lệnh Liên Quan

- [`/plan`](/vi/docs/marketing/commands/plan) - Tạo kế hoạch thực thi mới
- [`/research`](/vi/docs/marketing/commands/research) - Nghiên cứu kỹ thuật sâu

## Mẹo

**Tuân theo YAGNI, KISS và DRY**: Planner hoạt động theo những nguyên tắc này. Nó sẽ không over-engineer giải pháp hoặc đề xuất xây dựng tính năng bạn chưa cần.

**Tin Tưởng Quy Trình**: Nếu kế hoạch đề xuất bắt đầu với cách tiếp cận đơn giản, chống lại việc phức tạp hóa nó. Bạn luôn có thể lặp sau.

**Review Kế Hoạch Lịch Sử**: Kiểm tra thư mục `plans/` cho quyết định kiến trúc trước. Planner tham khảo những cái này cho tính nhất quán.
