---
lang: vi
title: "ckm:research"
description: "Nghiên cứu kỹ thuật có hệ thống và phân tích với xác nhận đa nguồn, đối chiếu và báo cáo toàn diện."
section: marketing
category: skills
order: 21
---

# Research

> Thực hiện nghiên cứu kỹ lưỡng với thu thập thông tin có hệ thống, xác nhận chéo và insights hành động.

## Skill Này Làm Gì

**Thách thức**: Các quyết định marketing đòi hỏi hiểu biết sâu về xu hướng thị trường, chiến lược đối thủ, lựa chọn công nghệ và thực hành tốt nhất. Nghiên cứu tự phát lãng phí thời gian và bỏ sót insights quan trọng.

**Giải pháp**: Skill Research cung cấp phương pháp nghiên cứu có hệ thống với chiến lược đa nguồn, giao thức xác nhận chéo và báo cáo có cấu trúc. Tôn trọng nguyên tắc YAGNI/KISS/DRY. Hỗ trợ nghiên cứu bằng Gemini hoặc WebSearch dự phòng.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi agent cần nghiên cứu chủ đề, phân tích đối thủ hoặc xác nhận cách tiếp cận kỹ thuật.

**Tường minh**: Kích hoạt qua prompt:
```
Activate research skill to [mô tả tác vụ]
``` hoặc lệnh `/ckm:scout ext`

## Tính Năng

### 1. Chiến Lược Nghiên Cứu Đa Nguồn
Kết hợp tìm kiếm web, phân tích tài liệu và khám phá kho GitHub.

**Các lớp nghiên cứu**:
1. **Tìm kiếm web**: Xu hướng hiện tại, tài liệu gần đây (ưu tiên: 2024-2025)
2. **Tài liệu chính thức**: Tài liệu API, thông số kỹ thuật
3. **Kho GitHub**: File README, changelog, ghi chú phát hành
4. **Nội dung video**: Hướng dẫn từ kênh chính thức và chuyên gia
5. **Xác nhận chéo**: Xác minh qua 3+ nguồn độc lập

**Ưu tiên tìm kiếm**:
- Kiểm tra xem lệnh `gemini` bash có sẵn không → dùng cho nghiên cứu (timeout 10 phút)
- Dự phòng sang công cụ `WebSearch` nếu cần
- Chạy tối đa 5 truy vấn nghiên cứu song song

### 2. Tạo Báo Cáo Có Cấu Trúc
Báo cáo markdown toàn diện với tóm tắt điều hành, phát hiện và khuyến nghị hành động.

**Các phần báo cáo**:
- Tóm tắt điều hành (2-3 đoạn)
- Phương pháp nghiên cứu
- Phát hiện chính (công nghệ, xu hướng, thực hành tốt nhất, bảo mật, hiệu suất)
- Phân tích so sánh (nếu có)
- Khuyến nghị triển khai
- Tài nguyên và tham chiếu
- Phụ lục (bảng thuật ngữ, ma trận tương thích)

**Báo cáo lưu vào**: Đường dẫn từ phần `## Naming` hoặc yêu cầu người dùng nhập đường dẫn đầu ra

### 3. Giao Thức Xác Nhận Chéo
Xác minh thông tin qua nhiều nguồn độc lập trước khi đưa vào.

**Tiêu chí xác nhận**:
- **Độ chính xác**: Xác minh qua 3+ nguồn
- **Tính hiện tại**: Ưu tiên 12 tháng gần nhất trừ khi cần ngữ cảnh lịch sử
- **Tính đầy đủ**: Bao phủ tất cả khía cạnh được yêu cầu
- **Tính hành động**: Cung cấp khuyến nghị có thể triển khai

## Điều Kiện Tiên Quyết

- Câu hỏi nghiên cứu hoặc chủ đề rõ ràng
- Ngữ cảnh cho phạm vi nghiên cứu (độ sâu, tính hiện tại, cấp độ kỹ thuật)

## Cấu Hình

**Giới hạn nghiên cứu**:
- Tối đa 5 lần gọi công cụ nghiên cứu (mặc định)
- Người dùng có thể yêu cầu ít hơn: "research this in 3 searches"
- Nghiêm ngặt tôn trọng giới hạn do người dùng chỉ định

**Định dạng đầu ra**: Báo cáo Markdown với trích dẫn

## Thực Hành Tốt Nhất

**1. Bắt Đầu Với Phạm Vi Rõ Ràng**
Xác định các thuật ngữ chính, yêu cầu tính hiện tại và tiêu chí đánh giá trước khi tìm kiếm.

**2. Ưu Tiên Nguồn Có Thẩm Quyền**
Tài liệu chính thức, các công ty công nghệ lớn, chuyên gia được công nhận > blog ngẫu nhiên.

**3. Ghi Lại Thông Tin Mâu Thuẫn**
Lưu ý khi các nguồn không đồng ý. Trình bày nhiều quan điểm với ngữ cảnh.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Phân Tích Đối Thủ
**Tình huống**: Nghiên cứu chiến lược marketing và định vị của đối thủ.

**Quy trình**:
1. **Phạm vi**: Xác định 3-5 đối thủ chính
2. **Tìm kiếm**: Thông điệp website, giá cả, content marketing, hiện diện mạng xã hội
3. **Phân tích**: So sánh định vị, điểm bán hàng độc đáo, đối tượng mục tiêu
4. **Phát hiện**: Khoảng trống thị trường, cơ hội khác biệt hóa
5. **Báo cáo**: Bức tranh toàn cảnh cạnh tranh với khuyến nghị chiến lược

**Kết quả**: Báo cáo Markdown với ma trận đối thủ và insights định vị.

### Trường Hợp 2: Đánh Giá Công Nghệ
**Tình huống**: Đánh giá các nhà cung cấp dịch vụ email cho tự động hóa chiến dịch.

**Quy trình**:
1. **Phạm vi**: SendGrid, Mailchimp, Resend, ConvertKit
2. **Tiêu chí**: Giá cả, chất lượng API, khả năng giao, tính năng tự động hóa
3. **Tìm kiếm**: Tài liệu chính thức, đánh giá người dùng, case study
4. **So sánh**: Ma trận tính năng với ưu/nhược điểm
5. **Khuyến nghị**: Phù hợp nhất cho trường hợp sử dụng cụ thể

**Kết quả**: Ma trận quyết định với khuyến nghị có cơ sở.

## Xử Lý Sự Cố

**Vấn đề**: Nghiên cứu quá rộng, quá nhiều thông tin
**Giải pháp**: Thu hẹp phạm vi. Xác định các câu hỏi cụ thể cần trả lời (tối đa 3-5).

**Vấn đề**: Thông tin mâu thuẫn giữa các nguồn
**Giải pháp**: Trình bày cả hai quan điểm với ngữ cảnh. Lưu ý thẩm quyền và tính hiện tại của nguồn.

**Vấn đề**: Nghiên cứu cảm thấy nông cạn
**Giải pháp**: Tăng độ sâu nghiên cứu. Dùng skill `docs-seeker` để phân tích kho GitHub. Kiểm tra tài liệu chính thức.

## Skill Liên Quan

- [SEO Optimization](/vi/docs/marketing/skills/seo) - Nghiên cứu từ khóa và phân tích đối thủ
- [Analytics](/vi/docs/marketing/skills/analytics) - Phân tích dữ liệu và insights
- [Brainstorming](/vi/docs/marketing/skills/brainstorming) - Chuyển đổi nghiên cứu thành quyết định

## Lệnh Liên Quan

- `/ckm:scout` - Nghiên cứu ngữ cảnh dự án hiện tại
- `/ckm:scout ext` - Nghiên cứu chủ đề bên ngoài
- `/ckm:ask` - Câu hỏi nghiên cứu nhanh
- `/ckm:plan` - Chuyển đổi nghiên cứu thành kế hoạch hành động
