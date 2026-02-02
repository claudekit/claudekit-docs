---
title: "Đại lý Lập kế hoạch (Planner)"
description: "Nghiên cứu, phân tích và tạo các kế hoạch triển khai toàn diện cho các tính năng và giải pháp kỹ thuật."
section: marketing
category: agents
order: 1
lang: vi
---

# Planner Agent (Đại lý Lập kế hoạch)

> **Kiến trúc sư chiến lược của bạn** - Biến các yêu cầu phức tạp thành các kế hoạch rõ ràng và khả thi.

## Đại lý này làm gì

Bạn có bao giờ cảm thấy bế tắc khi ai đó nói "hãy xây dựng một hệ thống thanh toán" và bạn chỉ biết nhìn chằm chằm vào màn hình trống, không biết phải bắt đầu từ đâu? Planner Agent chính là câu trả lời cho sự bế tắc đó.

**Vấn đề**: Việc bắt đầu một tính năng phức tạp mà không có kế hoạch thường dẫn đến việc phải viết lại mã nguồn, bỏ sót các yêu cầu quan trọng và tạo ra nợ kỹ thuật. Bạn có thể lãng phí hàng giờ để triển khai một giải pháp sai lầm chỉ vì không nghiên cứu các phương án thay thế ngay từ đầu.

**Giải pháp**: Planner Agent thực hiện nghiên cứu, phân tích và tạo ra các kế hoạch triển khai toàn diện trước khi bạn viết bất kỳ dòng mã nào. Nó đánh giá các sự đánh đổi, xác định các phụ thuộc và cung cấp cho bạn một lộ trình rõ ràng từ lúc bắt đầu cho đến khi hoàn thành.

## Bắt đầu nhanh

Khởi chạy Planner khi bắt đầu bất kỳ tính năng quan trọng nào:

```bash
# Đại lý sẽ nghiên cứu và tạo một kế hoạch chi tiết
/planner "Implement OAuth2 authentication for Google and GitHub"
```

Bạn sẽ nhận được một kế hoạch có cấu trúc bao gồm các quyết định về kiến trúc, các giai đoạn triển khai và các tiêu chí thành công.

## Khả năng

### Lập kế hoạch chiến lược
Tạo ra các kế hoạch triển khai chi tiết bao gồm:
- Các quyết định về kiến trúc và lý do lựa chọn.
- Đề xuất về ngăn xếp công nghệ (tech stack).
- Các bước triển khai theo từng giai đoạn.
- Bản đồ các phụ thuộc và phân tích đường găng (critical path).
- Đánh giá rủi ro và các chiến lược giảm thiểu.

### Nghiên cứu kỹ thuật
Điều tra các giải pháp trước khi bắt tay vào triển khai:
- Đánh giá nhiều cách tiếp cận và các sự đánh đổi.
- Nghiên cứu các thực hành tốt nhất (best practices) và các mô hình thiết kế.
- Phân tích các tác động về bảo mật.
- Xem xét khả năng mở rộng và hiệu suất.
- Xem xét mã nguồn hiện có để tìm các điểm tích hợp.

### Phân tích yêu cầu
Biến các yêu cầu mơ hồ thành các đặc tả cụ thể:
- Chia nhỏ các tính năng phức tạp thành các nhiệm vụ nhỏ hơn.
- Xác định phạm vi sản phẩm khả thi tối thiểu (MVP) (quy tắc 80/20).
- Định nghĩa các tiêu chí chấp nhận (acceptance criteria).
- Lập bản đồ hành trình người dùng (user journeys).
- Tài liệu hóa các trường hợp biên (edge cases) và các kịch bản lỗi.

## Khi nào nên sử dụng

Sử dụng Planner Agent khi bạn cần:
- Bắt đầu một tính năng mới hoặc một đợt tái cấu trúc (refactoring) lớn.
- Đánh giá các phương án kỹ thuật trước khi cam kết thực hiện.
- Hiểu rõ toàn bộ phạm vi của một thay đổi phức tạp.
- Đưa ra các quyết định kiến trúc một cách tự tin.
- Lập kế hoạch di chuyển cơ sở dữ liệu hoặc thay đổi hạ tầng.
- Nghiên cứu các tích hợp với bên thứ ba.

## Ví dụ quy trình làm việc

### Lập kế hoạch cho một tính năng mới

```bash
# Yêu cầu từ người dùng: "Add webhook support for payment notifications"
/planner "Design webhook system for Stripe and SePay payment notifications"
```

**Planner sẽ thực hiện**:
1. Nghiên cứu các thực hành tốt nhất về webhook và các mô hình bảo mật.
2. Thiết kế kiến trúc cho điểm cuối (endpoint) của webhook.
3. Lập kế hoạch triển khai xác minh chữ ký (signature verification).
4. Định nghĩa logic thử lại (retry logic) và xử lý lỗi.
5. Tạo sơ đồ cơ sở dữ liệu cho nhật ký (logs) của webhook.
6. Lập bản đồ tích hợp với các luồng thanh toán hiện có.
7. Tài liệu hóa chiến lược kiểm tra (testing).
8. Ước tính thời gian triển khai.

### Đánh giá các phương án kỹ thuật

```bash
/planner "Should we use PostgreSQL or MongoDB for our analytics data?"
```

**Bạn sẽ nhận được**:
- So sánh chi tiết giữa cả hai loại cơ sở dữ liệu.
- Các đặc tính hiệu suất cho trường hợp sử dụng cụ thể của bạn.
- Phân tích chi phí và độ phức tạp vận hành.
- Đề xuất lộ trình di chuyển dữ liệu.
- Khuyến nghị cuối cùng kèm theo lý do xác đáng.

## Thực hành tốt nhất

1. **Bắt đầu với Kế hoạch, Đừng bắt đầu với Mã nguồn**: Hãy khởi chạy Planner trước khi mở trình soạn thảo mã. Một buổi lập kế hoạch 30 phút có thể giúp bạn tiết kiệm hàng giờ tái cấu trúc sau này.

2. **Càng cụ thể càng tốt**: Hãy cung cấp ngữ cảnh về dự án, ngăn xếp công nghệ và các ràng buộc của bạn. Thay vì nói "Thêm xác thực" (quá mơ hồ), hãy dùng "Triển khai xác thực dựa trên JWT cho ứng dụng Next.js với cơ sở dữ liệu PostgreSQL" để có kết quả tốt hơn.

3. **Xem xét và Điều chỉnh**: Kế hoạch là những tài liệu sống. Nếu bạn phát hiện ra vấn đề trong quá trình triển khai, hãy cập nhật kế hoạch và đánh giá lại.

4. **Sử dụng Kế hoạch làm Tài liệu**: Planner tạo ra các tệp markdown trong thư mục `plans/` của bạn. Đây chính là hồ sơ lịch sử về các quyết định kiến trúc đã đưa ra.

## Các mô hình tư duy mà Planner sử dụng

Planner Agent áp dụng các khung tư duy đã được chứng minh:

- **Phân rã (Decomposition)**: Chia nhỏ các mục tiêu lớn thành các nhiệm vụ cụ thể, có thể kiểm tra được.
- **Tư duy ngược (Working Backwards)**: Bắt đầu từ kết quả mong muốn và lập bản đồ con đường dẫn đến đó.
- **Tư duy bậc hai (Second-Order Thinking)**: Xem xét các hệ quả tiếp theo ("Điều gì sẽ xảy ra sau khi chúng ta triển khai cái này?").
- **Phân tích nguyên nhân gốc rễ (Root Cause Analysis)**: Đào sâu bên dưới các yêu cầu bề mặt để tìm ra vấn đề thực sự.
- **Quy tắc 80/20**: Xác định 20% tính năng mang lại 80% giá trị.
- **Quản trị rủi ro**: Chủ động đặt câu hỏi "Điều gì có thể đi sai?".

## Cấu trúc đầu ra

Mỗi kế hoạch bao gồm:

```markdown
## Tổng quan
- Mục tiêu và ngữ cảnh kinh doanh
- Tiêu chí thành công
- Ước tính thời gian

## Quyết định Kiến trúc
- Lựa chọn công nghệ kèm lý do
- Thiết kế hệ thống và luồng dữ liệu
- Các điểm tích hợp

## Các giai đoạn triển khai
Giai đoạn 1: [Nền tảng]
- Danh sách nhiệm vụ với tiêu chí chấp nhận
- Các phụ thuộc và yếu tố gây nghẽn
- Yêu cầu về kiểm tra (testing)

Giai đoạn 2: [Các tính năng cốt lõi]
...

## Đánh giá rủi ro
- Rủi ro kỹ thuật và biện pháp giảm thiểu
- Các cân nhắc về bảo mật
- Tác động đến hiệu suất

## Chiến lược Kiểm tra
- Yêu cầu về unit test
- Các kịch bản integration test
- Danh sách kiểm tra thủ công (manual testing)
```

## Các đại lý liên quan

- [Project Manager](/vi/docs/marketing/agents/project-manager) - Theo dõi tiến độ so với kế hoạch.
- [Docs Manager](/vi/docs/marketing/agents/docs-manager) - Cập nhật tài liệu dựa trên kế hoạch.
- [Scout](/vi/docs/marketing/agents/scout) - Khám phá mã nguồn để cung cấp ngữ cảnh cho việc lập kế hoạch.

## Các lệnh liên quan

- [`/plan`](/vi/docs/marketing/commands/plan) - Tạo một kế hoạch triển khai mới.
- [`/research`](/docs/marketing/commands) - Thực hiện nghiên cứu kỹ thuật chuyên sâu.

## Mẹo

**Tuân thủ các nguyên tắc YAGNI, KISS và DRY**: Planner hoạt động dựa trên các nguyên tắc này. Nó sẽ không đề xuất các giải pháp quá phức tạp hoặc các tính năng mà bạn chưa thực sự cần đến.

**Tin tưởng vào quy trình**: Nếu kế hoạch đề xuất bắt đầu bằng một cách tiếp cận đơn giản, hãy kiềm chế mong muốn làm phức tạp hóa nó. Bạn luôn có thể cải tiến thêm sau này.

**Xem lại các kế hoạch cũ**: Hãy kiểm tra thư mục `plans/` để xem các quyết định kiến trúc trước đây. Planner sẽ tham khảo chúng để đảm bảo tính nhất quán.
