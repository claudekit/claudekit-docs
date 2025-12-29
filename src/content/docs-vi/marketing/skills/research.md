---
title: "Nghiên cứu"
description: "Nghiên cứu kỹ thuật có hệ thống và phân tích với xác thực đa nguồn, tham chiếu chéo và báo cáo toàn diện."
section: marketing
category: skills
order: 21
---

> Tiến hành nghiên cứu kỹ lưỡng với thu thập thông tin có hệ thống, xác thực chéo và thông tin chi tiết có thể hành động.

## Kỹ năng này làm gì

**Thách thức**: Quyết định tiếp thị yêu cầu hiểu rõ về xu hướng thị trường, chiến lược đối thủ cạnh tranh, tùy chọn công nghệ và thực tiễn tốt nhất. Nghiên cứu ad-hoc lãng phí thời gian và bỏ lỡ những hiểu biết chính.

**Giải pháp**: Kỹ năng Nghiên cứu cung cấp phương pháp nghiên cứu có hệ thống với chiến lược đa nguồn, giao thức xác thực chéo và báo cáo có cấu trúc. Tôn trọng các nguyên tắc YAGNI/KISS/DRY. Hỗ trợ nghiên cứu do Gemini hỗ trợ hoặc dự phòng WebSearch.

## Kích hoạt

**Ngầm**: Kích hoạt khi agents cần nghiên cứu các chủ đề, phân tích đối thủ cạnh tranh hoặc xác thực các cách tiếp cận kỹ thuật.

**Rõ ràng**: `/skill:add research` hoặc lệnh `/scout`

## Khả năng

### 1. Chiến lược nghiên cứu đa nguồn
Kết hợp tìm kiếm web, phân tích tài liệu và khám phá kho lưu trữ GitHub.

**Các lớp nghiên cứu**:
1. **Tìm kiếm web**: Xu hướng hiện tại, tài liệu gần đây (ưu tiên: 2024-2025)
2. **Tài liệu chính thức**: Tài liệu API, thông số kỹ thuật
3. **Kho lưu trữ GitHub**: Tệp README, changelog, ghi chú phát hành
4. **Nội dung video**: Hướng dẫn từ các kênh chính thức và chuyên gia
5. **Xác thực chéo**: Xác minh trên 3+ nguồn độc lập

**Ưu tiên tìm kiếm**:
- Kiểm tra nếu lệnh `gemini` bash có sẵn → sử dụng để nghiên cứu (hết thời gian 10 phút)
- Quay lại công cụ `WebSearch` nếu cần
- Chạy tối đa 5 truy vấn nghiên cứu song song

### 2. Tạo báo cáo có cấu trúc
Báo cáo markdown toàn diện với tóm tắt điều hành, phát hiện và khuyến nghị có thể hành động.

**Các phần báo cáo**:
- Tóm tắt điều hành (2-3 đoạn)
- Phương pháp nghiên cứu
- Phát hiện chính (công nghệ, xu hướng, thực tiễn tốt nhất, bảo mật, hiệu suất)
- Phân tích so sánh (nếu có)
- Khuyến nghị triển khai
- Tài nguyên & Tài liệu tham khảo
- Phụ lục (từ vựng, ma trận tương thích)

**Báo cáo được lưu vào**: Đường dẫn từ phần `## Naming` hoặc nhắc người dùng cho đường dẫn đầu ra

### 3. Giao thức xác thực chéo
Xác minh thông tin trên nhiều nguồn độc lập trước khi đưa vào.

**Tiêu chí xác thực**:
- **Độ chính xác**: Xác minh trên 3+ nguồn
- **Tiền tệ**: Ưu tiên 12 tháng cuối cùng trừ khi cần ngữ cảnh lịch sử
- **Tính đầy đủ**: Bao gồm tất cả các khía cạnh được yêu cầu
- **Khả năng hành động**: Cung cấp khuyến nghị có thể triển khai

## Yêu cầu trước

- Câu hỏi nghiên cứu hoặc chủ đề rõ ràng
- Bối cảnh cho phạm vi nghiên cứu (độ sâu, tính gần đây, mức độ kỹ thuật)

## Cấu hình

**Giới hạn nghiên cứu**:
- Tối đa 5 lệnh gọi công cụ nghiên cứu (mặc định)
- Người dùng có thể yêu cầu ít hơn: "nghiên cứu điều này trong 3 lần tìm kiếm"
- Tuân thủ nghiêm ngặt các giới hạn do người dùng chỉ định

**Định dạng đầu ra**: Báo cáo markdown với trích dẫn

## Thực hành tốt nhất

**1. Bắt đầu với phạm vi rõ ràng**
Định nghĩa các thuật ngữ chính, yêu cầu về tính gần đây và tiêu chí đánh giá trước khi tìm kiếm.

**2. Ưu tiên các nguồn có thẩm quyền**
Tài liệu chính thức, các công ty công nghệ lớn, chuyên gia được công nhân > các blog ngẫu nhiên.

**3. Ghi chép thông tin xung đột**
Ghi chú khi các nguồn không đồng ý. Trình bày nhiều quan điểm với bối cảnh.

## Use cases phổ biến

### Use Case 1: Phân tích đối thủ cạnh tranh
**Kịch bản**: Nghiên cứu chiến lược tiếp thị của đối thủ cạnh tranh và định vị.

**Quy trình**:
1. **Phạm vi**: Xác định 3-5 đối thủ cạnh tranh chính
2. **Tìm kiếm**: Tin nhắn trang web, giá cả, tiếp thị nội dung, hiện diện xã hội
3. **Phân tích**: So sánh định vị, value props, khán giả mục tiêu
4. **Phát hiện**: Khoảng trống trong thị trường, cơ hội phân biệt
5. **Báo cáo**: Cảnh quan cạnh tranh với khuyến nghị chiến lược

**Kết quả**: Báo cáo markdown với ma trận đối thủ cạnh tranh và thông tin chi tiết định vị.

### Use Case 2: Đánh giá công nghệ
**Kịch bản**: Đánh giá các nhà cung cấp dịch vụ email cho tự động hóa chiến dịch.

**Quy trình**:
1. **Phạm vi**: SendGrid, Mailchimp, Resend, ConvertKit
2. **Tiêu chí**: Giá cả, chất lượng API, khả năng gửi, tính năng tự động hóa
3. **Tìm kiếm**: Tài liệu chính thức, đánh giá người dùng, các trường hợp nghiên cứu
4. **So sánh**: Ma trận tính năng với ưu điểm/nhược điểm
5. **Khuyến nghị**: Độ phù hợp tốt nhất cho trường hợp sử dụng cụ thể

**Kết quả**: Ma trận quyết định với khuyến nghị có cơ sở.

## Xử lý sự cố

**Vấn đề**: Nghiên cứu quá rộng, quá nhiều thông tin
**Giải pháp**: Thu hẹp phạm vi. Định nghĩa các câu hỏi cụ thể để trả lời (tối đa 3-5).

**Vấn đề**: Thông tin xung đột trên các nguồn
**Giải pháp**: Trình bày cả hai quan điểm với bối cảnh. Ghi chú quyền hạn nguồn và tính gần đây.

**Vấn đề**: Nghiên cứu cảm thấy nông cạn
**Giải pháp**: Tăng độ sâu nghiên cứu. Sử dụng kỹ năng `docs-seeker` để phân tích kho lưu trữ GitHub. Kiểm tra tài liệu chính thức.

## Kỹ năng liên quan

- [SEO Optimization](/vi/docs/marketing/skills/seo-optimization) - Nghiên cứu từ khóa và phân tích đối thủ cạnh tranh
- [Analytics](/vi/docs/marketing/skills/analytics) - Phân tích dữ liệu và thông tin chi tiết
- [Brainstorming](/vi/docs/marketing/skills/brainstorming) - Chuyển đổi nghiên cứu thành quyết định

## Lệnh liên quan

- `/scout` - Nghiên cứu bối cảnh dự án hiện tại
- `/scout:ext` - Nghiên cứu các chủ đề bên ngoài
- `/ask` - Câu hỏi nghiên cứu nhanh
- `/plan` - Chuyển đổi nghiên cứu thành kế hoạch hành động
