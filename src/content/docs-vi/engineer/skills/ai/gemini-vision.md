---
title: gemini-vision
description: Tài liệu hướng dẫn sử dụng kỹ năng gemini-vision
section: engineer
kit: engineer
category: skills/ai
order: 20
published: true
lang: vi
---

# Kỹ năng gemini-vision

Google Gemini API cho khả năng hiểu hình ảnh - chú thích, phân loại, hỏi đáp thị giác, phát hiện đối tượng, phân đoạn (segmentation).

## Khi nào nên sử dụng

Sử dụng gemini-vision khi bạn cần:
- Chú thích hình ảnh (captioning)
- Phát hiện đối tượng (object detection)
- Hỏi đáp dựa trên hình ảnh (visual question answering)
- Trích xuất văn bản tài liệu (OCR)
- So sánh nhiều hình ảnh
- Tạo mặt nạ phân đoạn (segmentation masks)

## Bắt đầu nhanh

### Cách gọi kỹ năng

```
"Sử dụng gemini-vision để phân tích hình ảnh sản phẩm và trích xuất:
- Tên sản phẩm
- Màu sắc
- Tình trạng
- Các lỗi (nếu có)"
```

### Kết quả nhận được

Kỹ năng này sẽ giúp bạn:
1. Thiết lập Gemini API
2. Xử lý hình ảnh
3. Trích xuất thông tin
4. Xử lý phản hồi
5. Quản lý chi phí API

## Các trường hợp sử dụng phổ biến

### Phân tích sản phẩm

```
"Sử dụng gemini-vision để phân tích ảnh sản phẩm:
- Xác định loại sản phẩm
- Trích xuất văn bản hiển thị
- Đánh giá chất lượng
- Phát hiện hư hỏng"
```

### Trích xuất văn bản (OCR)

```
"Sử dụng gemini-vision để trích xuất văn bản từ invoice.jpg và cấu trúc dưới dạng JSON"
```

### So sánh nhiều hình ảnh

```
"Sử dụng gemini-vision để so sánh ảnh trước/sau và liệt kê các điểm khác biệt"
```

### Phát hiện đối tượng

```
"Sử dụng gemini-vision với gemini-2.0-flash để phát hiện tất cả các đối tượng trong ảnh kèm theo khung bao (bounding boxes)"
```

## Các định dạng hỗ trợ

- **Hình ảnh**: PNG, JPEG, WEBP, HEIC, HEIF
- **Tài liệu**: PDF (lên đến 1.000 trang)
- **Kích thước**: Tối đa 20MB cho dữ liệu trực tiếp (inline), sử dụng File API cho kích thước lớn hơn

## Các mô hình khả dụng

- **gemini-2.5-pro**: Khả năng mạnh nhất, hỗ trợ phân đoạn + phát hiện
- **gemini-2.5-flash**: Nhanh, hiệu quả
- **gemini-2.0-flash**: Phát hiện đối tượng
- **gemini-1.5-pro/flash**: Thế hệ trước

## Thiết lập API

### Lấy API Key

1. Truy cập [Google AI Studio](https://aistudio.google.com/apikey)
2. Tạo API key
3. Thiết lập biến môi trường:

```bash
export GEMINI_API_KEY="your-key-here"
```

Hoặc trong tệp `.env`:
```
GEMINI_API_KEY=your-key-here
```

### Cài đặt SDK

```bash
pip install google-genai
```

## Ví dụ sử dụng

### Phân tích cơ bản

```python
from google import genai

client = genai.Client(api_key="YOUR_API_KEY")

response = client.models.generate_content(
    model='gemini-2.5-flash',
    contents=['What objects are in this image?', 'image.jpg']
)

print(response.text)
```

### Kết quả có cấu trúc

```
"Sử dụng gemini-vision để phân tích receipt.jpg và trả về JSON gồm:
{
  'store': 'tên cửa hàng',
  'date': 'ngày mua hàng',
  'items': ['danh sách mặt hàng'],
  'total': 'tổng tiền'
}"
```

### Xử lý hàng loạt (Batch Processing)

```
"Sử dụng gemini-vision để xử lý thư mục ảnh sản phẩm và tạo tệp CSV với thông tin chi tiết sản phẩm"
```

## Chi phí Token

Hình ảnh tiêu tốn token dựa trên kích thước:
- **Nhỏ** (≤384px): 258 tokens
- **Lớn**: Chia thành các khối 768x768, mỗi khối 258 tokens

**Ví dụ**: Ảnh 960x540 = ~1,548 tokens

## Phương pháp hay nhất

### Chất lượng hình ảnh

- Sử dụng hình ảnh rõ nét, đủ ánh sáng
- Đảm bảo xoay đúng hướng
- Độ phân giải cao hơn để trích xuất văn bản
- Nén các tệp lớn

### Cách viết Prompt

```
"Sử dụng gemini-vision để phân tích hình ảnh:
- Đặt câu hỏi cụ thể
- Yêu cầu đầu ra có cấu trúc (JSON/CSV)
- Cung cấp ví dụ để tăng độ chính xác
- Chỉ định các trường thông tin bắt buộc"
```

### Tối ưu hóa chi phí

- Thay đổi kích thước ảnh trước khi tải lên
- Sử dụng File API cho các phân tích lặp lại
- Chọn mô hình phù hợp (Flash cho tốc độ)
- Nhóm các hình ảnh liên quan

## Tính năng nâng cao

### Phát hiện đối tượng (2.0+)

```
"Sử dụng gemini-vision với gemini-2.0-flash để:
- Phát hiện tất cả đối tượng
- Trả về khung bao (bounding boxes)
- Gán nhãn cho mỗi đối tượng
- Tính toán điểm tin cậy (confidence scores)"
```

### Phân đoạn (Segmentation) (2.5+)

```
"Sử dụng gemini-vision với gemini-2.5-pro để:
- Tạo mặt nạ phân đoạn
- Xác định các đối tượng riêng biệt
- Tách biệt tiền cảnh/hậu cảnh"
```

### Phân tích đa hình ảnh

```
"Sử dụng gemini-vision để so sánh 5 ảnh sản phẩm này và xác định ảnh nào bị hỏng"
```

## Ví dụ tích hợp

### Danh sách sản phẩm Thương mại điện tử

```
"Sử dụng gemini-vision để:
1. Phân tích ảnh sản phẩm
2. Trích xuất thuộc tính sản phẩm
3. Tạo mô tả
4. Phân loại sản phẩm
5. Xuất ra JSON cho cơ sở dữ liệu"
```

### Kiểm soát chất lượng (QC)

```
"Sử dụng gemini-vision cho QC sản xuất:
- Phát hiện lỗi
- So sánh với ảnh tham chiếu
- Phân loại các loại lỗi
- Tạo báo cáo kiểm tra"
```

### Xử lý tài liệu

```
"Sử dụng gemini-vision để:
1. Trích xuất văn bản từ hóa đơn đã quét
2. Phân tích các mặt hàng
3. Tính toán tổng số
4. Xác thực theo định dạng mong đợi"
```

## Xử lý lỗi

Các lỗi phổ biến:
- **401**: API key không hợp lệ
- **429**: Vượt quá giới hạn tốc độ (Rate limit)
- **400**: Định dạng/kích thước ảnh không hợp lệ
- **403**: Nội dung bị hạn chế

## Các ví dụ nhanh

**Chú thích đơn giản:**
```
"Sử dụng gemini-vision để chú thích hình ảnh này"
```

**Danh mục sản phẩm:**
```
"Sử dụng gemini-vision để phân tích ảnh sản phẩm và tạo danh mục với:
- Tên sản phẩm
- Mô tả
- Các tính năng chính
- Khoảng giá đề xuất"
```

**Trích xuất tài liệu:**
```
"Sử dụng gemini-vision để trích xuất toàn bộ văn bản và bảng từ hóa đơn PDF nhiều trang"
```

## Giới hạn tốc độ (Rate Limits)

Gói miễn phí:
- 15 RPM (yêu cầu mỗi phút)
- 1 triệu TPM (token mỗi phút)
- 1,500 RPD (yêu cầu mỗi ngày)

Các gói trả phí có quy mô lớn hơn đáng kể.

## Bước tiếp theo

- [Xử lý tài liệu](/vi/docs/engineer/skills/document-skills)
- [Ví dụ tích hợp AI](/vi/docs/use-cases/)
- [Tài liệu tham khảo API](https://ai.google.dev/gemini-api/docs/image-understanding)

---

**Tóm lại:** gemini-vision phân tích hình ảnh bằng AI. Trích xuất văn bản, phát hiện đối tượng, trả lời các câu hỏi thị giác - tất cả chỉ với các câu lệnh đơn giản.

---

> **🎄 Code Hunt 2025**: Bạn đã tìm thấy trứng ẩn!
> Dùng mã `M35RYXMAS` để được giảm 35% ClaudeKit (còn 100 mã).
> [Dùng ngay →](https://claudekit.cc)
