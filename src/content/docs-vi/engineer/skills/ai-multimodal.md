---
title: "ck:ai-multimodal"
description: Xử lý audio, images, videos và documents bằng Google Gemini API với khả năng vision vượt trội để phiên âm, phân tích và tạo nội dung
section: engineer
kit: engineer
category: skills
order: 50
lang: vi
---

# `ck:ai-multimodal`

Bạn biết cảm giác cần phân tích một podcast dài 2 tiếng, trích xuất text từ PDF phức tạp, hay tạo images thực sự khớp với tầm nhìn của mình? Đó chính là lúc AI Multimodal phát huy tác dụng.

## Skill Này Làm Gì

Skill AI Multimodal cho phép bạn truy cập các khả năng multimodal mạnh mẽ của Google Gemini để xử lý và tạo nội dung đa phương tiện. Trong khi Claude có khả năng vision, Gemini xuất sắc ở một số tác vụ nhất định như phân tích images với object detection tốt hơn, xử lý audio dài với timestamps, và tạo images từ text prompts.

Skill này hoạt động như cầu nối đến Gemini API, xử lý mọi thứ từ audio transcription với speaker detection đến tạo videos với Veo 3. Bạn có được phân tích image tốt hơn khả năng vision mặc định của Claude, hỗ trợ xử lý videos dài đến 6 tiếng, và khả năng tạo images với Imagen 4 cùng videos với Veo 3.

Hãy coi nó như con dao đa năng multimedia của bạn: khi cần phiên âm cuộc phỏng vấn 90 phút với timestamps chính xác, phân tích nhiều screenshots để tìm design patterns, trích xuất dữ liệu có cấu trúc từ PDF phức tạp, hay tạo marketing visuals, skill này đều đáp ứng được.

## Yêu Cầu Trước

Trước khi dùng skill này, bạn cần:

- **Gemini API Key**: Lấy tại [Google AI Studio](https://aistudio.google.com/apikey)
- **Python 3.8+**: Skill sử dụng Python scripts
- **Python Dependencies**: `google-genai`, `python-dotenv`, `pillow`

## Cài Đặt

Thiết lập môi trường với các lệnh sau:

```bash
# Thiết lập API key
export GEMINI_API_KEY="your-key-here"

# Cài đặt Python packages cần thiết
pip install google-genai python-dotenv pillow

# Xác minh cài đặt
python scripts/check_setup.py
```

Đối với usage khối lượng lớn, bạn có thể cấu hình nhiều API keys để rotation tự động:

```bash
# Thêm keys bổ sung để rotation
export GEMINI_API_KEY_2="your-second-key"
export GEMINI_API_KEY_3="your-third-key"
```

Skill tự động rotation keys khi chạm giới hạn rate, với cooldown 60 giây mỗi key.

## Khả Năng Cốt Lõi

### Xử Lý Audio

Phiên âm file audio dài đến 9.5 tiếng với timestamps, speaker detection và phân tích nội dung:

```bash
# Phiên âm cơ bản
python scripts/gemini_batch_process.py --files interview.mp3 --task transcribe

# Phân tích nhạc hoặc audio không phải lời nói
python scripts/gemini_batch_process.py --files song.wav --task analyze
```

**Lưu ý**: Với audio dài hơn 15 phút, transcript có thể bị cắt bớt do giới hạn output token. Hãy chia audio dài thành các đoạn 15 phút để có transcript đầy đủ.

Transcripts được định dạng Markdown với metadata như duration, file size, topics covered và timestamps:

```
[00:01:23 -> 00:01:45] Speaker thảo luận về tầm quan trọng của API design
[00:01:46 -> 00:02:12] Câu hỏi từ khán giả về rate limiting
```

### Hiểu Hình Ảnh

Phân tích images với khả năng tốt hơn vision mặc định của Claude:

```bash
# Phân tích screenshot
python scripts/gemini_batch_process.py --files screenshot.png --task analyze --prompt "Extract design system colors and typography"

# Xử lý nhiều images
python scripts/gemini_batch_process.py --files img1.jpg img2.jpg --task analyze
```

Nếu bạn đã cài `gemini` CLI, có shortcut nhanh hơn:

```bash
cat image.png | gemini -y -m gemini-2.5-flash
```

Gemini xuất sắc ở object detection, OCR từ screenshots, design extraction, visual Q&A và xử lý nhiều images để so sánh.

### Phân Tích Video

Xử lý videos dài đến 6 tiếng với scene detection và temporal understanding:

```bash
# Phân tích nội dung video
python scripts/gemini_batch_process.py --files demo.mp4 --task analyze --prompt "Identify key moments and transitions"

# Hỗ trợ YouTube URLs
python scripts/gemini_batch_process.py --files "https://youtube.com/watch?v=xyz" --task analyze
```

Với videos dài hơn 15 phút, trích xuất audio trước rồi phiên âm theo từng đoạn:

```bash
# Trích xuất audio với FFmpeg
ffmpeg -i long-video.mp4 -vn -c:a copy audio.m4a

# Phiên âm audio theo từng đoạn
python scripts/gemini_batch_process.py --files audio.m4a --task transcribe
```

### Trích Xuất Document

Trích xuất dữ liệu có cấu trúc từ PDFs, forms, charts và multi-page documents:

```bash
# Convert PDF sang markdown
python scripts/document_converter.py --files report.pdf

# Xử lý nhiều documents
python scripts/document_converter.py --files doc1.pdf doc2.pdf --output docs/assets
```

### Tạo Image

Tạo images từ text prompts sử dụng Imagen 4:

```bash
# Chất lượng tiêu chuẩn
python scripts/gemini_batch_process.py --task generate --prompt "Modern minimalist logo for a tech startup"

# Chất lượng cao (ultra model)
python scripts/gemini_batch_process.py --task generate --prompt "Photorealistic sunset over mountains" --model imagen-4.0-ultra-generate-001

# Tạo nhanh
python scripts/gemini_batch_process.py --task generate --prompt "Simple icon design" --model imagen-4.0-fast-generate-001
```

### Tạo Video

Tạo video clips 8 giây với audio gốc sử dụng Veo 3:

```bash
# Text-to-video
python scripts/gemini_batch_process.py --task generate-video --prompt "A cat playing piano in a jazz club, cinematic lighting"
```

## Ví Dụ Thực Tế

### Phiên Âm Một Tập Podcast

Bạn có một podcast 45 phút và cần transcript đầy đủ với timestamps:

```bash
# Chia thành các đoạn 15 phút trước
ffmpeg -i podcast.mp3 -f segment -segment_time 900 -c copy chunk_%03d.mp3

# Phiên âm từng đoạn
python scripts/gemini_batch_process.py --files chunk_000.mp3 --task transcribe > transcript_part1.md
python scripts/gemini_batch_process.py --files chunk_001.mp3 --task transcribe > transcript_part2.md
python scripts/gemini_batch_process.py --files chunk_002.mp3 --task transcribe > transcript_part3.md

# Ghép các transcripts
cat transcript_part*.md > full_transcript.md
```

### Trích Xuất Design Guidelines Từ Screenshots

Bạn cần tái tạo một design từ screenshots:

```bash
# Phân tích screenshot để lấy design system
python scripts/gemini_batch_process.py --files design.png --task analyze --prompt "Extract all colors as hex codes, typography (fonts, sizes, weights), spacing patterns, and layout structure"
```

### Xử Lý Nhiều Product Images

Bạn có 50 product photos cần xóa nền và phân tích:

```bash
# Đầu tiên, tối ưu images để đáp ứng giới hạn kích thước
python scripts/media_optimizer.py --directory ./products --output ./optimized

# Phân tích hàng loạt
python scripts/gemini_batch_process.py --files ./optimized/*.jpg --task analyze --prompt "Describe product, extract visible text, identify colors"
```

## Best Practices

**Chọn Model Phù Hợp**: Dùng `gemini-2.5-flash` cho hầu hết tasks (nhanh, tiết kiệm chi phí). Dùng `gemini-2.5-pro` cho phân tích phức tạp đòi hỏi reasoning sâu hơn.

**Tuân Thủ Giới Hạn File Size**: Files dưới 20MB có thể gửi trực tiếp. Files lớn hơn (đến 2GB) tự động dùng File API. Dùng `media_optimizer.py` để nén files trước khi xử lý.

**Xử Lý Nội Dung Dài**: Với audio/video trên 15 phút, chia thành các đoạn để tránh transcript bị cắt bớt. Skill có sẵn các helpers cho việc này.

**Tận Dụng Hỗ Trợ Stdin**: Bạn có thể pipe files trực tiếp vào batch processor thay vì dùng flag `--files`, giúp tích hợp dễ dàng hơn vào workflows.

## Các Scripts Có Sẵn

Skill cung cấp một số scripts chuyên biệt:

- `gemini_batch_process.py` - CLI chính cho tất cả tasks (analyze, transcribe, extract, generate)
- `media_optimizer.py` - Nén và resize media để đáp ứng giới hạn API
- `document_converter.py` - Convert PDFs và Office docs sang markdown
- `check_setup.py` - Xác minh API key và dependencies

Chạy bất kỳ script nào với `--help` để xem tất cả options có sẵn.

## Định Dạng Được Hỗ Trợ

**Audio**: WAV, MP3, AAC (đến 9.5 tiếng)
**Images**: PNG, JPEG, WEBP (đến 3,600px)
**Video**: MP4, MOV (đến 6 tiếng)
**Documents**: PDF (đến 1,000 trang)

Giới hạn file size: 20MB inline, 2GB qua File API

## Các Skills Và Commands Liên Quan

Khi làm việc với nội dung multimedia, kết hợp skill này với:

- [Media Processing](/vi/docs/engineer/skills/media-processing) - Dùng FFmpeg và ImageMagick để chuẩn bị media files trước khi xử lý
- [Frontend Design](/vi/docs/engineer/skills/frontend-design) - Trích xuất design guidelines từ screenshots, sau đó implement chúng
- [MCP Builder](/vi/docs/engineer/skills/mcp-builder) - Xây dựng MCP servers expose Gemini capabilities dưới dạng tools

## Tài Nguyên Bổ Sung

Để có hướng dẫn chi tiết về các khả năng cụ thể, skill bao gồm tài liệu tham khảo toàn diện:

- `references/audio-processing.md` - Audio transcription, speaker detection, formats
- `references/vision-understanding.md` - Image analysis, OCR, object detection
- `references/video-analysis.md` - Video processing, scene detection, temporal Q&A
- `references/image-generation.md` - Imagen 4 prompting, styles, aspect ratios
- `references/video-generation.md` - Veo 3 text-to-video, camera control, timing
- `references/music-generation.md` - Lyria API để tạo background music

Các references này nằm trong Engineer Kit tại `../claudekit-engineer/.claude/skills/ai-multimodal/references/`.
