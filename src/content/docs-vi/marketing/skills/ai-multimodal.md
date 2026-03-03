---
lang: vi
title: "ckm:ai-multimodal"
description: "Xử lý và tạo nội dung đa phương tiện với Gemini và MiniMax: phiên âm audio, phân tích ảnh/video, tạo ảnh Imagen 4, video Hailuo 1080p, TTS và nhạc AI."
section: marketing
category: skills
order: 17
---

# AI Multimodal

> Tạo ảnh, video, giọng nói và âm nhạc; phân tích file đa phương tiện và xử lý tài liệu bằng khả năng AI đa phương thức của Google Gemini và MiniMax.

## Skill Này Làm Gì

**Thách thức**: Marketing đòi hỏi xử lý nhiều loại phương tiện (audio, ảnh, video, PDF) và tạo nội dung hình ảnh. Sử dụng các công cụ riêng cho mỗi định dạng không hiệu quả và tốn kém.

**Giải pháp**: Skill AI Multimodal tích hợp hai nền tảng mạnh mẽ: **Google Gemini API** cho phiên âm audio (9.5 giờ), phân tích ảnh, xử lý video (6 giờ), trích xuất PDF, tạo ảnh Imagen 4 và tạo video Veo 3 (clip 8 giây); **MiniMax** cho tạo ảnh chất lượng cao, video Hailuo 1080p, text-to-speech với 300+ giọng và tạo nhạc AI lên đến 4 phút. Hai API, một skill.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi agent cần phân tích ảnh, phiên âm audio, xử lý video hoặc tạo nội dung hình ảnh.

**Tường minh**: Kích hoạt theo tên khi cần: "Activate ai-multimodal skill"

## Tính Năng

### 1. Phiên Âm và Phân Tích Audio
Phiên âm file audio với timestamp, phát hiện người nói và phân tích âm thanh ngoài lời nói.

```bash
# Phiên âm audio
python scripts/gemini_batch_process.py --files meeting.mp3 --task transcribe

# Phân tích podcast theo chủ đề
python scripts/gemini_batch_process.py --files podcast.mp3 --task analyze --prompt "Identify key topics and timestamps"
```

**Định dạng**: WAV, MP3, AAC (tối đa 9.5 giờ)

**Đầu ra**: Markdown với định dạng timestamp `[HH:MM:SS -> HH:MM:SS]`

**Lưu ý quan trọng**: File >15 phút có thể bị cắt ngắn do giới hạn token đầu ra. Chia thành đoạn 15 phút để phiên âm đầy đủ.

**Hướng dẫn**: `references/audio-processing.md`

### 2. Hiểu và Phân Tích Ảnh
Phân tích ảnh để nhận dạng nội dung, trích xuất văn bản, phát hiện đối tượng và hỏi đáp trực quan.

```bash
# Phân tích screenshot
python scripts/gemini_batch_process.py --files screenshot.png --task analyze --prompt "Describe UI layout and identify all interactive elements"

# Trích xuất văn bản từ ảnh
python scripts/gemini_batch_process.py --files poster.jpg --task extract --prompt "Extract all text in structured format"
```

**Định dạng**: PNG, JPEG, WebP, SVG (tối đa 3.600 ảnh)

**Khả năng**: Chú thích, phân loại, OCR, phát hiện đối tượng, hỏi đáp trực quan

**Hướng dẫn**: `references/vision-understanding.md`

### 3. Phân Tích Video
Xử lý video để phát hiện cảnh, hỏi đáp theo thời gian và phiên âm có ngữ cảnh.

```bash
# Phân tích video marketing
python scripts/gemini_batch_process.py --files promo.mp4 --task analyze --prompt "Identify scenes, key messages, and suggested timestamps for cuts"

# Phân tích URL YouTube
python scripts/gemini_batch_process.py --files https://youtube.com/watch?v=xyz --task analyze
```

**Định dạng**: MP4, MOV, WebM (tối đa 6 giờ)

**Video dài**: Trích xuất audio bằng FFmpeg, chia thành đoạn 15 phút, phiên âm riêng.

**Hướng dẫn**: `references/video-analysis.md`

### 4. Tạo Ảnh Với Imagen 4
Tạo ảnh marketing từ mô tả văn bản.

```bash
# Tạo ảnh mạng xã hội
python scripts/gemini_batch_process.py --task generate --prompt "Modern SaaS dashboard screenshot, clean interface, blue and white color scheme, professional"

# Tạo hàng loạt
python scripts/gemini_batch_process.py --task generate --prompt "Product hero image" --count 4
```

**Mô hình**:
- `imagen-4.0-generate-001` (chất lượng tiêu chuẩn)
- `imagen-4.0-ultra-generate-001` (chất lượng cao nhất)
- `imagen-4.0-fast-generate-001` (nhanh nhất)

**Tỷ lệ khung hình**: 1:1, 16:9, 9:16, 4:3, 3:4

**Hướng dẫn**: `references/image-generation.md`

### 5. Tạo Video Với Veo 3
Tạo video clip 8 giây có âm thanh theo cách bất đồng bộ.

```bash
# Tạo clip video
python scripts/gemini_batch_process.py --task generate-video --prompt "Product unboxing, smooth camera motion, professional lighting, cheerful mood"
```

**Mô hình**: `veo-3.1-generate-preview`

**Thời lượng**: 8 giây có âm thanh

**Đầu ra**: File MP4

**Hướng dẫn**: `references/video-generation.md`

### 6. Tạo Nội Dung Với MiniMax

MiniMax cung cấp bộ API bổ sung cho ảnh, video 1080p, giọng nói và âm nhạc.

**Tạo ảnh**:
```bash
python scripts/minimax_cli.py --task generate --prompt "Product lifestyle photo, warm colors, minimal" --count 4
```

**Mô hình**: `image-01` (tiêu chuẩn), `image-01-live` (nâng cao) — $0.03/ảnh

**Tạo video Hailuo**:
```bash
python scripts/minimax_cli.py --task generate-video --prompt "Brand ambassador walking in city, 1080p, cinematic"
```

**Mô hình video**:
- `MiniMax-Hailuo-2.3` (1080p chất lượng cao)
- `MiniMax-Hailuo-2.3-Fast` (nhanh hơn, rẻ hơn 50%)
- `MiniMax-Hailuo-02` (khung đầu + cuối tùy chỉnh)

**Text-to-Speech**:
```bash
python scripts/minimax_cli.py --task generate-speech --prompt "Chào mừng bạn đến với ClaudeKit Marketing" --voice "Vietnamese_Female_1"
```

**Mô hình TTS**: `speech-2.8-hd` (tốt nhất), `speech-2.8-turbo` (nhanh) — 300+ giọng, 40+ ngôn ngữ, điều chỉnh cảm xúc

**Tạo âm nhạc**:
```bash
python scripts/minimax_cli.py --task generate-music --prompt "Upbeat corporate background music, professional, 60 seconds"
```

**Mô hình**: `music-2.5` — bài nhạc 4 phút có giọng ca, lời đồng bộ hóa

**Hướng dẫn**: `references/minimax-generation.md`

## Điều Kiện Tiên Quyết

**Quyền truy cập API**:
- `GEMINI_API_KEY` từ [Google AI Studio](https://aistudio.google.com/apikey)
- `MINIMAX_API_KEY` từ [MiniMax Platform](https://platform.minimax.io/user-center/basic-information/interface-key)
- Python 3.8+ với `google-genai`, `python-dotenv`, `pillow`, `requests`

**Cài đặt**:
```bash
pip install google-genai python-dotenv pillow requests
```

**Xác minh cài đặt**:
```bash
python scripts/check_setup.py
```

## Cấu Hình

**Biến môi trường** (`.env`):
```bash
GEMINI_API_KEY=your_gemini_key_here
MINIMAX_API_KEY=your_minimax_key_here
```

**Script có sẵn**:
- `gemini_batch_process.py` - CLI Gemini cho phân tích, phiên âm, tạo ảnh/video Gemini
- `minimax_cli.py` - CLI MiniMax cho tạo ảnh, video Hailuo, TTS, âm nhạc
- `media_optimizer.py` - Nén/thay đổi kích thước media theo giới hạn API
- `document_converter.py` - Chuyển đổi PDF sang markdown
- `check_setup.py` - Xác minh API key và phụ thuộc

## Thực Hành Tốt Nhất

**1. Chọn Nền Tảng Và Mô Hình Phù Hợp**
- `gemini-2.5-flash` cho phiên âm, phân tích nhanh
- `gemini-2.5-pro` cho suy luận phức tạp
- `imagen-4.0-generate-001` cho ảnh Gemini tiêu chuẩn
- `imagen-4.0-ultra-generate-001` chỉ cho ảnh hero (chi phí cao hơn)
- `image-01` (MiniMax) cho ảnh lifestyle/sản phẩm — $0.03/ảnh
- `MiniMax-Hailuo-2.3` cho video marketing 1080p chuyên nghiệp
- `speech-2.8-hd` cho voiceover quảng cáo chất lượng cao

**2. Tối Ưu Media Trước Khi Tải Lên**
Dùng `media_optimizer.py` để nén file >20MB trước khi xử lý.

**3. Chia Nhỏ Audio/Video Dài**
Đoạn 15 phút ngăn phiên âm bị cắt ngắn. Dùng FFmpeg để chia.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Phiên Âm Podcast Kèm Chủ Đề
**Tình huống**: Phiên âm tập podcast 45 phút với timestamp và trích xuất chủ đề.

**Quy trình**:
1. Chia audio thành 3 đoạn 15 phút (FFmpeg)
2. Phiên âm mỗi đoạn: `python scripts/gemini_batch_process.py --files chunk1.mp3 --task transcribe`
3. Ghép các bản phiên âm
4. Trích xuất chủ đề: `--task analyze --prompt "Identify top 5 topics with timestamps"`

**Kết quả**: Bản phiên âm đầy đủ kèm tóm tắt chủ đề.

### Trường Hợp 2: Tạo Ảnh Mạng Xã Hội
**Tình huống**: Tạo 4 biến thể ảnh thông báo sản phẩm.

**Quy trình**:
1. Xác định prompt với ngữ cảnh thương hiệu: "Modern tech product announcement, gradient blue background, clean typography, professional, 16:9"
2. Tạo hàng loạt: `python scripts/gemini_batch_process.py --task generate --prompt "..." --count 4`
3. Xem xét kết quả đầu ra
4. Chọn biến thể tốt nhất để đăng

**Kết quả**: 4 ảnh độc đáo phù hợp với hướng dẫn thương hiệu.

## Xử Lý Sự Cố

**Vấn đề**: API trả về 401 Unauthorized
**Giải pháp**: Xác minh `GEMINI_API_KEY` trong file `.env`. Lấy key mới từ Google AI Studio nếu cần.

**Vấn đề**: Phiên âm bị cắt ngắn cho audio dài
**Giải pháp**: Chia audio thành đoạn 15 phút bằng FFmpeg hoặc `media_optimizer.py`.

**Vấn đề**: Tạo ảnh không khớp với thương hiệu
**Giải pháp**: Bao gồm màu sắc thương hiệu cụ thể, từ khóa phong cách và tham chiếu tài sản hiện có trong prompt. Dùng skill `ai-artist` để tối ưu prompt.

**Vấn đề**: MiniMax API trả về 401 Unauthorized
**Giải pháp**: Xác minh `MINIMAX_API_KEY` trong file `.env`. Lấy key từ [MiniMax Platform](https://platform.minimax.io/user-center/basic-information/interface-key).

**Vấn đề**: Video Hailuo mất nhiều thời gian render
**Giải pháp**: Video Hailuo xử lý bất đồng bộ — script tự động polling. Dùng `MiniMax-Hailuo-2.3-Fast` nếu cần kết quả nhanh hơn (rẻ hơn 50%).

## Skill Liên Quan

- [AI Artist](/vi/docs/marketing/skills/ai-artist) - Kỹ thuật viết prompt cho kết quả tốt hơn
- [Media Processing](/vi/docs/marketing/skills/media-processing) - FFmpeg để thao tác audio/video
- [Brand](/vi/docs/marketing/skills/brand) - Tạo ảnh phù hợp thương hiệu
- [Creativity](/vi/docs/marketing/skills/creativity) - Định hướng sáng tạo cho nội dung được tạo
- [Video](/vi/docs/marketing/skills/video) - Lập kế hoạch và kịch bản video marketing

## Lệnh Liên Quan

- `/design/good` - Tạo ảnh chất lượng cao
- `/design/video` - Lên kế hoạch nội dung video
- `/content/enhance` - Cải thiện nội dung bằng phân tích AI
