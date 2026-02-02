---
title: AI Multimodal
description: Xử lý audio, images, videos và documents sử dụng Google Gemini API với khả năng vision vượt trội cho transcription, analysis và content generation
section: engineer
kit: engineer
category: skills
order: 15
lang: vi
---

Bạn có cảm giác đó khi cần phân tích một podcast 2 giờ, trích xuất text từ PDF phức tạp, hoặc tạo images thực sự khớp với vision của bạn? Đó là lúc AI Multimodal xuất hiện.

## Skill Này Làm Gì

AI Multimodal skill cung cấp truy cập vào khả năng multimodal mạnh mẽ của Google Gemini để xử lý và tạo nội dung multimedia. Trong khi Claude có khả năng vision, Gemini xuất sắc ở một số tasks nhất định như phân tích images với object detection tốt hơn, xử lý long-form audio với timestamps, và tạo images từ text prompts.

Skill này hoạt động như cầu nối đến Gemini's API, xử lý mọi thứ từ audio transcription với speaker detection đến tạo videos với Veo 3. Bạn có image analysis tốt hơn khả năng vision mặc định của Claude, hỗ trợ xử lý videos lên đến 6 giờ, và khả năng tạo images với Imagen 4 và videos với Veo 3.

Hãy nghĩ về nó như chiếc dao đa năng multimedia của bạn: khi bạn cần transcribe một cuộc phỏng vấn 90 phút với timestamps chính xác, phân tích nhiều screenshots cho design patterns, trích xuất structured data từ PDFs phức tạp, hoặc tạo marketing visuals, skill này đã cover bạn.

## Prerequisites

Trước khi sử dụng skill này, bạn cần:

- **Gemini API Key**: Lấy từ [Google AI Studio](https://aistudio.google.com/apikey)
- **Python 3.8+**: Skill sử dụng Python scripts
- **Python Dependencies**: `google-genai`, `python-dotenv`, `pillow`

## Installation

Thiết lập môi trường của bạn với các commands này:

```bash
# Set API key
export GEMINI_API_KEY="your-key-here"

# Install required Python packages
pip install google-genai python-dotenv pillow

# Verify setup
python scripts/check_setup.py
```

Để sử dụng khối lượng cao, bạn có thể cấu hình nhiều API keys để tự động rotation:

```bash
# Thêm additional keys để rotation
export GEMINI_API_KEY_2="your-second-key"
export GEMINI_API_KEY_3="your-third-key"
```

Skill tự động rotate keys khi đạt rate limits, với cooldown 60 giây mỗi key.

## Khả Năng Cốt Lõi

### Audio Processing

Transcribe audio files lên đến 9.5 giờ với timestamps, speaker detection và content analysis:

```bash
# Basic transcription
python scripts/gemini_batch_process.py --files interview.mp3 --task transcribe

# Phân tích music hoặc non-speech audio
python scripts/gemini_batch_process.py --files song.wav --task analyze
```

**Quan trọng**: Đối với audio dài hơn 15 phút, transcript có thể bị truncated do giới hạn output tokens. Chia long audio thành chunks 15 phút cho complete transcripts.

Transcripts được format trong Markdown với metadata như duration, file size, topics covered và timestamps:

```
[00:01:23 -> 00:01:45] Speaker discusses the importance of API design
[00:01:46 -> 00:02:12] Question from audience about rate limiting
```

### Image Understanding

Phân tích images với khả năng tốt hơn default vision của Claude:

```bash
# Phân tích screenshot
python scripts/gemini_batch_process.py --files screenshot.png --task analyze --prompt "Extract design system colors and typography"

# Xử lý nhiều images
python scripts/gemini_batch_process.py --files img1.jpg img2.jpg --task analyze
```

Nếu bạn có `gemini` CLI installed, có shortcut nhanh hơn:

```bash
cat image.png | gemini -y -m gemini-2.5-flash
```

Gemini xuất sắc ở object detection, OCR từ screenshots, design extraction, visual Q&A và xử lý nhiều images để so sánh.

### Video Analysis

Xử lý videos lên đến 6 giờ với scene detection và temporal understanding:

```bash
# Phân tích video content
python scripts/gemini_batch_process.py --files demo.mp4 --task analyze --prompt "Identify key moments and transitions"

# Hỗ trợ YouTube URLs
python scripts/gemini_batch_process.py --files "https://youtube.com/watch?v=xyz" --task analyze
```

Đối với videos dài hơn 15 phút, extract audio trước và transcribe theo chunks:

```bash
# Extract audio với FFmpeg
ffmpeg -i long-video.mp4 -vn -c:a copy audio.m4a

# Transcribe audio theo segments
python scripts/gemini_batch_process.py --files audio.m4a --task transcribe
```

### Document Extraction

Trích xuất structured data từ PDFs, forms, charts và multi-page documents:

```bash
# Convert PDF sang markdown
python scripts/document_converter.py --files report.pdf

# Xử lý nhiều documents
python scripts/document_converter.py --files doc1.pdf doc2.pdf --output docs/assets
```

### Image Generation

Tạo images từ text prompts sử dụng Imagen 4:

```bash
# Standard quality
python scripts/gemini_batch_process.py --task generate --prompt "Modern minimalist logo for a tech startup"

# High quality (ultra model)
python scripts/gemini_batch_process.py --task generate --prompt "Photorealistic sunset over mountains" --model imagen-4.0-ultra-generate-001

# Fast generation
python scripts/gemini_batch_process.py --task generate --prompt "Simple icon design" --model imagen-4.0-fast-generate-001
```

### Video Generation

Tạo 8-second video clips với native audio sử dụng Veo 3:

```bash
# Text-to-video
python scripts/gemini_batch_process.py --task generate-video --prompt "A cat playing piano in a jazz club, cinematic lighting"
```

## Real-World Examples

### Transcribe Podcast Episode

Bạn có một podcast 45 phút và cần complete transcript với timestamps:

```bash
# Chia thành 15-phút chunks trước
ffmpeg -i podcast.mp3 -f segment -segment_time 900 -c copy chunk_%03d.mp3

# Transcribe từng chunk
python scripts/gemini_batch_process.py --files chunk_000.mp3 --task transcribe > transcript_part1.md
python scripts/gemini_batch_process.py --files chunk_001.mp3 --task transcribe > transcript_part2.md
python scripts/gemini_batch_process.py --files chunk_002.mp3 --task transcribe > transcript_part3.md

# Kết hợp transcripts
cat transcript_part*.md > full_transcript.md
```

### Extract Design Guidelines từ Screenshots

Bạn cần replicate design từ screenshots:

```bash
# Phân tích screenshot cho design system
python scripts/gemini_batch_process.py --files design.png --task analyze --prompt "Extract all colors as hex codes, typography (fonts, sizes, weights), spacing patterns, and layout structure"
```

### Xử Lý Nhiều Product Images

Bạn có 50 ảnh sản phẩm cần loại bỏ background và phân tích:

```bash
# Đầu tiên, optimize images để đáp ứng size limits
python scripts/media_optimizer.py --directory ./products --output ./optimized

# Batch analyze
python scripts/gemini_batch_process.py --files ./optimized/*.jpg --task analyze --prompt "Describe product, extract visible text, identify colors"
```

## Best Practices

**Chọn Model Đúng**: Dùng `gemini-2.5-flash` cho hầu hết các tasks (nhanh, cost-effective). Dùng `gemini-2.5-pro` cho phân tích phức tạp yêu cầu reasoning sâu hơn.

**Tôn Trọng File Size Limits**: Files dưới 20MB có thể gửi inline. Files lớn hơn (lên đến 2GB) tự động sử dụng File API. Dùng `media_optimizer.py` để nén files trước khi xử lý.

**Xử Lý Long Content**: Đối với audio/video trên 15 phút, chia thành chunks để tránh transcript truncation. Skill bao gồm helpers cho việc này.

**Tận Dụng Stdin Support**: Bạn có thể pipe files trực tiếp vào batch processor thay vì dùng flag `--files`, giúp tích hợp dễ dàng hơn vào workflows.

## Available Scripts

Skill cung cấp một số specialized scripts:

- `gemini_batch_process.py` - Main CLI cho tất cả tasks (analyze, transcribe, extract, generate)
- `media_optimizer.py` - Nén và resize media để đáp ứng API limits
- `document_converter.py` - Convert PDFs và Office docs sang markdown
- `check_setup.py` - Verify API key và dependencies

Chạy bất kỳ script nào với `--help` để xem tất cả available options.

## Supported Formats

**Audio**: WAV, MP3, AAC (lên đến 9.5 giờ)
**Images**: PNG, JPEG, WEBP (lên đến 3,600px)
**Video**: MP4, MOV (lên đến 6 giờ)
**Documents**: PDF (lên đến 1,000 trang)

File size limits: 20MB inline, 2GB qua File API

## Các Skills và Commands Liên Quan

Khi làm việc với multimedia content, kết hợp skill này với:

- [Media Processing](/docs/engineer/skills/media-processing) - Dùng FFmpeg và ImageMagick để chuẩn bị media files trước khi xử lý
- [Frontend Design](/docs/engineer/skills/frontend-design) - Trích xuất design guidelines từ screenshots, sau đó implement chúng
- [MCP Builder](/docs/engineer/skills/mcp-builder) - Xây dựng MCP servers expose Gemini capabilities như tools

## Additional Resources

Để hướng dẫn chi tiết về specific capabilities, skill bao gồm comprehensive reference documentation:

- `references/audio-processing.md` - Audio transcription, speaker detection, formats
- `references/vision-understanding.md` - Image analysis, OCR, object detection
- `references/video-analysis.md` - Video processing, scene detection, temporal Q&A
- `references/image-generation.md` - Imagen 4 prompting, styles, aspect ratios
- `references/video-generation.md` - Veo 3 text-to-video, camera control, timing
- `references/music-generation.md` - Lyria API cho background music generation

Các references này nằm trong Engineer Kit tại `../claudekit-engineer/.claude/skills/ai-multimodal/references/`.
