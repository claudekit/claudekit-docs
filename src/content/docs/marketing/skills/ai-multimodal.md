---
title: "AI Multimodal"
description: "Xử lý và tạo nội dung đa phương tiện với Google Gemini API: phiên âm âm thanh, phân tích hình ảnh, xử lý video, Imagen 4 và Veo 3."
lang: vi
section: marketing
category: skills
order: 17
---

> Tạo hình ảnh và video, phân tích các tệp đa phương tiện và xử lý tài liệu bằng các khả năng AI đa phương tiện của Google Gemini.

## Skill Này Làm Gì

**Thách Thức**: Tiếp thị đòi hỏi xử lý các phương tiện đa dạng (âm thanh, hình ảnh, video, PDF) và tạo nội dung hình ảnh. Sử dụng các công cụ riêng biệt cho mỗi định dạng không hiệu quả và tốn kém.

**Giải Pháp**: Skill AI Multimodal tích hợp Google Gemini API để phiên âm âm thanh (9,5h), phân tích hình ảnh, xử lý video (6h), trích xuất PDF, tạo hình ảnh Imagen 4 và tạo video Veo 3 (clip 8 giây có âm thanh). Một API, cửa sổ bối cảnh 2M token.

## Kích Hoạt

**Ẩn Danh**: Kích hoạt tự động khi các agent cần phân tích hình ảnh, phiên âm âm thanh, xử lý video hoặc tạo nội dung hình ảnh.

**Rõ Ràng**: `/skill:add ai-multimodal`

## Khả Năng

### 1. Phiên Âm Âm Thanh và Phân Tích
Phiên âm các tệp âm thanh với dấu thời gian, phát hiện người nói và phân tích không phải lời nói.

```bash
# Phiên âm âm thanh
python scripts/gemini_batch_process.py --files meeting.mp3 --task transcribe

# Phân tích podcast cho các chủ đề
python scripts/gemini_batch_process.py --files podcast.mp3 --task analyze --prompt "Xác định các chủ đề chính và dấu thời gian"
```

**Định Dạng**: WAV, MP3, AAC (tối đa 9,5 giờ)

**Kết Quả**: Markdown với định dạng dấu thời gian `[HH:MM:SS -> HH:MM:SS]`

**Quan Trọng**: Các tệp >15 phút có thể cắt ngắn do giới hạn token đầu ra. Chia thành các chunk 15 phút để phiên âm đầy đủ.

**Hướng Dẫn**: `references/audio-processing.md`

### 2. Hiểu Biết Hình Ảnh và Phân Tích
Phân tích hình ảnh cho nội dung, trích xuất văn bản, phát hiện đối tượng và trả lời các câu hỏi hình ảnh.

```bash
# Phân tích ảnh chụp màn hình
python scripts/gemini_batch_process.py --files screenshot.png --task analyze --prompt "Mô tả bố cục UI và xác định tất cả các phần tử tương tác"

# Trích xuất văn bản từ hình ảnh
python scripts/gemini_batch_process.py --files poster.jpg --task extract --prompt "Trích xuất tất cả văn bản ở định dạng cấu trúc"
```

**Định Dạng**: PNG, JPEG, WebP, SVG (tối đa 3.6k hình ảnh)

**Khả Năng**: Ghi chú, phân loại, OCR, phát hiện đối tượng, hỏi đáp hình ảnh

**Hướng Dẫn**: `references/vision-understanding.md`

### 3. Phân Tích Video
Xử lý video để phát hiện cảnh, câu hỏi đáp thời gian tạm thời và phiên âm có bối cảnh hình ảnh.

```bash
# Phân tích video tiếp thị
python scripts/gemini_batch_process.py --files promo.mp4 --task analyze --prompt "Xác định các cảnh, thông báo chính và dấu thời gian được đề xuất cho các vết cắt"

# Phân tích URL YouTube
python scripts/gemini_batch_process.py --files https://youtube.com/watch?v=xyz --task analyze
```

**Định Dạng**: MP4, MOV, WebM (tối đa 6 giờ)

**Cho Video Dài**: Trích xuất âm thanh với FFmpeg, chia thành các chunk 15 phút, phiên âm riêng biệt.

**Hướng Dẫn**: `references/video-analysis.md`

### 4. Tạo Hình Ảnh với Imagen 4
Tạo hình ảnh tiếp thị từ các mô tả văn bản.

```bash
# Tạo hình ảnh phương tiện xã hội
python scripts/gemini_batch_process.py --task generate --prompt "Ảnh chụp màn hình dashboard SaaS hiện đại, giao diện sạch, lược đồ màu xanh và trắng, chuyên nghiệp"

# Tạo hàng loạt
python scripts/gemini_batch_process.py --task generate --prompt "Hình ảnh hero sản phẩm" --count 4
```

**Mô Hình**:
- `imagen-4.0-generate-001` (chất lượng tiêu chuẩn)
- `imagen-4.0-ultra-generate-001` (chất lượng cao nhất)
- `imagen-4.0-fast-generate-001` (nhanh nhất)

**Tỷ Lệ Khung Hình**: 1:1, 16:9, 9:16, 4:3, 3:4

**Hướng Dẫn**: `references/image-generation.md`

### 5. Tạo Video với Veo 3
Tạo các clip video 8 giây với âm thanh asynchronous.

```bash
# Tạo clip video
python scripts/gemini_batch_process.py --task generate-video --prompt "Unboxing sản phẩm, chuyển động camera mượt mà, chiếu sáng chuyên nghiệp, tâm trạng vui vẻ"
```

**Mô Hình**: `veo-3.1-generate-preview`

**Độ Dài**: 8 giây với âm thanh

**Kết Quả**: Tệp MP4

**Hướng Dẫn**: `references/video-generation.md`

## Điều Kiện Tiên Quyết

**Truy Cập API**:
- `GEMINI_API_KEY` từ [Google AI Studio](https://aistudio.google.com/apikey)
- Python 3.8+ với `google-genai`, `python-dotenv`, `pillow`

**Cài Đặt**:
```bash
pip install google-genai python-dotenv pillow
```

**Xác Minh Cài Đặt**:
```bash
python scripts/check_setup.py
```

## Cấu Hình

**Biến Môi Trường** (`.env`):
```bash
GEMINI_API_KEY=your_key_here
```

**Script Khả Dụng**:
- `gemini_batch_process.py` - CLI chính cho tất cả các tác vụ
- `media_optimizer.py` - Nén/thay đổi kích thước phương tiện cho giới hạn API
- `document_converter.py` - Chuyển đổi PDF thành markdown
- `check_setup.py` - Xác minh khóa API và các phụ thuộc

## Phương Pháp Tốt Nhất

**1. Chọn Mô Hình Phù Hợp Cho Tác Vụ**
- `gemini-2.5-flash` cho tốc độ (phiên âm, phân tích)
- `gemini-2.5-pro` cho lý luận phức tạp
- `imagen-4.0-generate-001` cho hình ảnh tiêu chuẩn
- `imagen-4.0-ultra-generate-001` chỉ cho hình ảnh hero (chi phí cao hơn)

**2. Tối Ưu Hóa Phương Tiện Trước Tải Lên**
Sử dụng `media_optimizer.py` để nén các tệp >20MB trước khi xử lý.

**3. Chia Audio/Video Dài**
Các chunk 15 phút ngăn cắt ngắn phiên âm. Sử dụng FFmpeg để chia.

## Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp Sử Dụng 1: Phiên Âm Podcast Với Chủ Đề
**Tình Huống**: Phiên âm tập podcast 45 phút với dấu thời gian và trích xuất chủ đề.

**Quy Trình Công Việc**:
1. Chia âm thanh thành 3 chunk 15 phút (FFmpeg)
2. Phiên âm mỗi cái: `python scripts/gemini_batch_process.py --files chunk1.mp3 --task transcribe`
3. Kết hợp phiên âm
4. Trích xuất chủ đề: `--task analyze --prompt "Xác định 5 chủ đề chính với dấu thời gian"`

**Kết Quả**: Phiên âm đầy đủ với tóm tắt chủ đề.

### Trường Hợp Sử Dụng 2: Tạo Hình Ảnh Phương Tiện Xã Hội
**Tình Huống**: Tạo 4 biến thể ảnh thông báo sản phẩm.

**Quy Trình Công Việc**:
1. Xác định prompt với bối cảnh thương hiệu: "Thông báo sản phẩm công nghệ hiện đại, nền tảng gradient xanh, kiểu chữ sạch, chuyên nghiệp, 16:9"
2. Tạo hàng loạt: `python scripts/gemini_batch_process.py --task generate --prompt "..." --count 4`
3. Xem xét đầu ra
4. Chọn biến thể tốt nhất để đăng bài

**Kết Quả**: 4 hình ảnh duy nhất khớp với hướng dẫn thương hiệu.

## Khắc Phục Sự Cố

**Vấn Đề**: API trả về 401 Không được Phép
**Giải Pháp**: Xác minh `GEMINI_API_KEY` trong tệp `.env`. Nhận khóa mới từ Google AI Studio nếu cần.

**Vấn Đề**: Phiên âm bị cắt ngắn cho âm thanh dài
**Giải Pháp**: Chia âm thanh thành các chunk 15 phút bằng FFmpeg hoặc `media_optimizer.py`.

**Vấn Đề**: Tạo hình ảnh không khớp với thương hiệu
**Giải Pháp**: Bao gồm các màu thương hiệu cụ thể, từ khóa kiểu và tham chiếu tài sản hiện có trong prompt. Sử dụng skill `ai-artist` để tối ưu hóa prompt.

## Kỹ Năng Liên Quan

- [AI Artist](/vi/docs/marketing/skills/ai-artist) - Kỹ thuật viết prompt để có đầu ra tốt hơn
- [Media Processing](/vi/docs/marketing/skills/media-processing) - FFmpeg để thao tác âm thanh/video
- [Brand Guidelines](/vi/docs/marketing/skills/brand-guidelines) - Tạo hình ảnh căn chỉnh thương hiệu
- [Creativity](/vi/docs/marketing/skills/creativity) - Hướng dẫn sáng tạo cho nội dung được tạo

## Lệnh Liên Quan

- `/design/good` - Tạo hình ảnh chất lượng cao
- `/design/video` - Lập kế hoạch nội dung video
- `/content/enhance` - Cải thiện nội dung bằng phân tích AI
