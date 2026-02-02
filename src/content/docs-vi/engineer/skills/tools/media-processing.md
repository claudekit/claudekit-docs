---
title: Media Processing
description: Xử lý video, audio và images với FFmpeg, ImageMagick và RMBG cho encoding, conversion, effects, optimization và background removal
section: engineer
kit: engineer
category: skills
order: 20
lang: vi
---

Bạn có bao giờ cần convert video format, resize 500 images hoặc remove backgrounds từ product photos? Đây chính xác là những vấn đề mà FFmpeg, ImageMagick và RMBG giải quyết.

## Skill Này Làm Gì

Media Processing cho bạn truy cập tới ba công cụ command-line mạnh mẽ để làm việc với multimedia files: FFmpeg cho video và audio processing, ImageMagick cho image manipulation và RMBG cho AI-powered background removal.

FFmpeg xử lý video encoding và conversion với hỗ trợ 100+ formats, audio extraction và conversion, tạo streaming manifests cho HLS/DASH, áp dụng filters và effects và hardware acceleration cho faster encoding. ImageMagick chuyên về image operations như format conversion, resizing và cropping, batch processing hàng trăm images, áp dụng effects và compositions và optimize file sizes. RMBG cung cấp AI-powered background removal với multiple quality models, local processing (không cần API), hỗ trợ high-resolution lên tới 4096px và fast batch operations.

Hãy nghĩ skill này như multimedia Swiss Army knife của bạn. Khi bạn cần chuẩn bị videos cho web streaming, generate thumbnails từ videos, tạo responsive image sets, remove backgrounds từ product photos hoặc optimize media cho specific size constraints, những tools này đã cover bạn.

## Yêu Cầu Trước

Bạn cần các tools này được installed trên hệ thống:

**macOS**:
```bash
brew install ffmpeg imagemagick
npm install -g rmbg-cli
```

**Ubuntu/Debian**:
```bash
sudo apt-get install ffmpeg imagemagick
npm install -g rmbg-cli
```

**Verify Installation**:
```bash
ffmpeg -version
magick -version
rmbg --version
```

## Tool Selection Guide

Chọn tool phù hợp cho task:

| Task | Tool | Lý Do |
|------|------|-------|
| Video encoding/conversion | FFmpeg | Native codec support, streaming |
| Audio extraction/conversion | FFmpeg | Direct stream manipulation |
| Image resize/effects | ImageMagick | Tối ưu cho still images |
| Background removal | RMBG | AI-powered, local processing |
| Batch images | ImageMagick | `mogrify` cho in-place edits |
| Video thumbnails | FFmpeg | Frame extraction built-in |
| GIF creation | FFmpeg/ImageMagick | FFmpeg cho video, ImageMagick cho images |

## Essential FFmpeg Commands

### Video Conversion và Encoding

```bash
# Copy streams không re-encoding (nhanh)
ffmpeg -i input.mkv -c copy output.mp4

# Re-encode với H.264 codec (universal compatibility)
ffmpeg -i input.avi -c:v libx264 -crf 22 -c:a aac output.mp4

# High quality H.265 (smaller file size)
ffmpeg -i input.mp4 -c:v libx265 -crf 24 -c:a aac output.mp4

# Web-optimized MP4 (fast start cho streaming)
ffmpeg -i input.mov -c:v libx264 -crf 22 -c:a aac -movflags +faststart output.mp4
```

**Key parameters**:

- `-c:v libx264` - H.264 video codec (most compatible)
- `-crf 22` - Constant Rate Factor cho quality (0-51, lower=better, 18-28 typical)
- `-preset slow` - Encoding speed/compression balance (ultrafast, fast, medium, slow, veryslow)
- `-c:a aac` - AAC audio codec (universal compatibility)
- `-movflags +faststart` - Move metadata to front cho web streaming

### Audio Extraction

```bash
# Extract audio không re-encoding (preserves quality)
ffmpeg -i video.mp4 -vn -c:a copy audio.m4a

# Convert sang MP3
ffmpeg -i video.mp4 -vn -c:a libmp3lame -q:a 2 audio.mp3

# Extract specific time range
ffmpeg -i video.mp4 -vn -ss 00:01:30 -t 00:02:00 -c:a copy audio.m4a
```

### Video Thumbnails

```bash
# Extract single frame tại 5 seconds
ffmpeg -i video.mp4 -ss 00:00:05 -vframes 1 thumbnail.jpg

# Generate thumbnails mỗi 10 seconds
ffmpeg -i video.mp4 -vf fps=1/10 thumbnail_%03d.jpg

# High quality thumbnail
ffmpeg -i video.mp4 -ss 00:00:05 -vframes 1 -q:v 2 thumbnail.jpg
```

## Essential ImageMagick Commands

### Image Conversion và Resizing

```bash
# Convert format
magick input.png output.jpg

# Resize để fit trong dimensions (maintains aspect ratio)
magick input.jpg -resize 800x600 output.jpg

# Resize sang exact dimensions (có thể distort)
magick input.jpg -resize 800x600! output.jpg

# Resize để fill dimensions (crops excess)
magick input.jpg -resize 800x600^ -gravity center -extent 800x600 output.jpg

# Resize by percentage
magick input.jpg -resize 50% output.jpg
```

**Key resize parameters**:

- `800x600` - Fit trong dimensions (maintains aspect)
- `800x600!` - Force exact dimensions (có thể distort)
- `800x600^` - Fill dimensions (maintains aspect, có thể crop)
- `800x` - Resize width, auto height
- `x600` - Resize height, auto width

### Batch Image Processing

```bash
# Resize tất cả JPGs trong directory (overwrites originals)
mogrify -resize 800x -quality 85 *.jpg

# Convert tất cả PNGs sang JPGs
mogrify -format jpg *.png

# Add watermark cho tất cả images
mogrify -gravity southeast -draw "image over 10,10 0,0 'watermark.png'" *.jpg

# Tạo thumbnails (preserves originals)
mkdir thumbnails
mogrify -path thumbnails -resize 200x200 -quality 80 *.jpg
```

**Quan trọng**: `mogrify` modifies files in-place. Luôn backup originals trước hoặc dùng `-path` để specify output directory.

### Image Optimization

```bash
# Optimize JPEG (reduce file size)
magick input.jpg -quality 85 -strip output.jpg

# Optimize PNG (lossless compression)
magick input.png -strip -define png:compression-level=9 output.png

# Remove metadata (EXIF, color profiles)
magick input.jpg -strip output.jpg
```

**Quality guidelines**:

- `-quality 85` - Good balance cho web (60-85 typical)
- `-quality 95` - High quality, larger files
- `-strip` - Remove metadata (reduces file size)

## Essential RMBG Commands

### Background Removal

```bash
# Basic removal (modnet model)
rmbg input.jpg

# High quality (briaai model)
rmbg input.jpg -m briaai -o output.png

# Fast processing (u2netp model)
rmbg input.jpg -m u2netp -o output.png

# High resolution support
rmbg input.jpg -m briaai -r 4096 -o output.png

# Batch processing
for file in *.jpg; do
  rmbg "$file" -m briaai -o "${file%.jpg}_nobg.png"
done
```

**Model comparison**:

- `modnet` - Default, balanced quality/speed
- `briaai` - Highest quality, slower
- `u2netp` - Fastest, good cho simple backgrounds
- `u2net` - Good quality, moderate speed

**Parameters**:

- `-m <model>` - Chọn AI model
- `-o <output>` - Output file path
- `-r <pixels>` - Max resolution (default: 2048, max: 4096)

## Ví Dụ Thực Tế

### Chuẩn Bị Video cho Web Streaming

Bạn có large MOV file và cần web-optimized MP4:

```bash
# Convert sang H.264 với fast start cho streaming
ffmpeg -i raw-video.mov \
  -c:v libx264 \
  -crf 22 \
  -preset slow \
  -c:a aac \
  -movflags +faststart \
  web-video.mp4

# Generate thumbnail
ffmpeg -i web-video.mp4 -ss 00:00:03 -vframes 1 -q:v 2 thumbnail.jpg
```

### Tạo Responsive Image Set

Bạn cần multiple sizes của image cho responsive web design:

```bash
# Tạo output directory
mkdir -p responsive

# Generate sizes: 320w, 640w, 1024w, 1920w
magick original.jpg -resize 320x -quality 85 responsive/image-320w.jpg
magick original.jpg -resize 640x -quality 85 responsive/image-640w.jpg
magick original.jpg -resize 1024x -quality 85 responsive/image-1024w.jpg
magick original.jpg -resize 1920x -quality 85 responsive/image-1920w.jpg

# Hoặc batch process với mogrify
for width in 320 640 1024 1920; do
  magick original.jpg -resize ${width}x -quality 85 responsive/image-${width}w.jpg
done
```

### Remove Backgrounds từ Product Photos

Bạn có 50 product photos cần background removal:

```bash
# Tạo output directory
mkdir -p products-nobg

# Batch process với high quality model
for file in products/*.jpg; do
  filename=$(basename "$file" .jpg)
  rmbg "$file" -m briaai -o "products-nobg/${filename}.png"
done
```

### Extract Audio Clips từ Interview

Bạn cần split 2-hour interview thành segments:

```bash
# Extract audio từ video
ffmpeg -i interview.mp4 -vn -c:a copy interview-audio.m4a

# Split thành 15-minute segments
ffmpeg -i interview-audio.m4a -f segment -segment_time 900 -c copy segment_%03d.m4a

# Hoặc extract specific clips
ffmpeg -i interview-audio.m4a -ss 00:05:30 -t 00:10:00 -c copy clip1.m4a
ffmpeg -i interview-audio.m4a -ss 00:25:15 -t 00:08:30 -c copy clip2.m4a
```

## Best Practices

**Luôn Backup Originals**: Đặc biệt khi dùng `mogrify` modify files in-place.

**Dùng Appropriate Quality Settings**: CRF 18-28 cho video (22 là balanced), quality 75-85 cho JPEG (85 là balanced).

**Optimize cho Web**: Dùng `-movflags +faststart` cho MP4 videos, `-strip` để remove metadata từ images.

**Chọn Right Codec**: H.264 cho maximum compatibility, H.265 cho better compression, VP9 cho open source preference.

**Test on Small Files First**: Trước khi batch processing hàng trăm files, test command trên một file.

**Monitor File Sizes**: Kiểm tra output file sizes để ensure optimization worked như mong đợi.

## Skills Liên Quan

Kết hợp Media Processing với:

- [AI Multimodal](/docs/engineer/skills/ai-multimodal) - Process media trước khi send tới Gemini API (compress, resize, split)
- [Frontend Design](/docs/engineer/skills/frontend-design) - Optimize generated images, remove backgrounds từ assets
- [Chrome DevTools](/docs/engineer/skills/chrome-devtools) - Capture screenshots, sau đó optimize với ImageMagick

## Nguyên Tắc Chính

Media processing là về việc chọn right tool và parameters cho specific use case của bạn. FFmpeg cho video/audio, ImageMagick cho images, RMBG cho background removal. Luôn test trên small batches trước, backup originals và verify output quality trước khi processing hàng trăm files.
