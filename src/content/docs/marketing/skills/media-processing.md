---
title: "Media Processing"
description: "Process multimedia files with FFmpeg, ImageMagick, and RMBG: video encoding, image manipulation, and AI background removal."
section: marketing
category: skills
order: 19
---

> Convert, resize, optimize, and manipulate media files using industry-standard tools for video, audio, and images.

## What This Skill Does

**The Challenge**: Marketing requires processing diverse media formats—encoding videos for social platforms, resizing images for web, removing backgrounds, extracting audio. Using separate tools for each task is inefficient.

**The Solution**: Media Processing skill integrates FFmpeg (video/audio), ImageMagick (images), and RMBG (AI background removal). Supports 100+ formats, hardware acceleration, batch processing, and streaming manifest generation.

## Activation

**Implicit**: Activates when agents need to manipulate media files (convert, resize, compress, extract).

**Explicit**: Activate via prompt:
```
Activate media-processing skill to convert video formats and optimize images
```

## Capabilities

### 1. Video Processing with FFmpeg
Encode, convert, extract audio, create thumbnails, and optimize for web/social.

**Common operations**:
```bash
# Convert format (copy streams, no re-encode)
ffmpeg -i input.mkv -c copy output.mp4

# Re-encode for web (H.264, quality 22)
ffmpeg -i input.avi -c:v libx264 -crf 22 -c:a aac output.mp4

# Extract audio
ffmpeg -i video.mp4 -vn -c:a copy audio.m4a

# Generate thumbnail
ffmpeg -i video.mp4 -ss 00:00:05 -vframes 1 thumbnail.jpg

# Resize video
ffmpeg -i input.mp4 -vf scale=1280:720 output.mp4
```

**Key parameters**:
- `-c:v libx264` - H.264 video codec (universal compatibility)
- `-crf 22` - Quality (0-51, lower=better, 18-28 typical)
- `-preset slow` - Encoding speed vs compression balance
- `-c:a aac` - AAC audio codec

**Guide**: `references/ffmpeg-encoding.md`

### 2. Image Processing with ImageMagick
Resize, convert formats, apply effects, and batch process images.

**Common operations**:
```bash
# Convert format
magick input.png output.jpg

# Resize (maintain aspect ratio)
magick input.jpg -resize 800x600 output.jpg

# Batch resize all JPEGs in directory
mogrify -resize 800x -quality 85 *.jpg

# Add watermark
magick input.jpg -pointsize 48 -fill white -gravity southeast -annotate +10+10 '© Brand' output.jpg
```

**Resize syntax**:
- `800x600` - Fit within (maintains aspect)
- `800x600^` - Fill (may crop)
- `800x600!` - Force exact size (distorts)

**Guide**: `references/imagemagick-editing.md`

### 3. Background Removal with RMBG
AI-powered background removal for product photos and portraits.

```bash
# Basic removal (modnet model)
rmbg input.jpg

# High quality (briaai model)
rmbg input.jpg -m briaai -o output.png

# Fast processing (u2netp model)
rmbg input.jpg -m u2netp -o output.png

# High resolution (up to 4096px)
rmbg input.jpg -r 4096 -o output.png
```

**Models**:
- `modnet` - Default, balanced quality/speed
- `briaai` - Highest quality, slower
- `u2netp` - Fastest, good for batch processing

**Guide**: `references/rmbg-background-removal.md`

## Prerequisites

**Installation**:
```bash
# macOS
brew install ffmpeg imagemagick
npm install -g rmbg-cli

# Ubuntu/Debian
sudo apt-get install ffmpeg imagemagick
npm install -g rmbg-cli

# Verify
ffmpeg -version && magick -version && rmbg --version
```

## Configuration

No configuration needed. Tools work via command-line.

**Tip**: Save common operations as shell scripts in `scripts/media/`.

## Best Practices

**1. Preserve originals**
Always work on copies. Use output files, never overwrite source files.

**2. Choose right tool for task**
- **Video/audio**: FFmpeg
- **Still images**: ImageMagick
- **Background removal**: RMBG
- **Batch images**: ImageMagick's `mogrify`

**3. Optimize for platform**
- YouTube: 1080p, H.264, 8Mbps bitrate
- Instagram: 1080x1080, H.264, 5Mbps
- TikTok: 1080x1920 (9:16), H.264, 8Mbps

## Common Use Cases

### Use Case 1: Social Media Video Optimization
**Scenario**: Convert marketing video for Instagram Reels (9:16, 1080x1920, <100MB).

**Workflow**:
```bash
# 1. Resize and crop to 9:16
ffmpeg -i promo.mp4 -vf "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920" temp.mp4

# 2. Re-encode with size target
ffmpeg -i temp.mp4 -c:v libx264 -crf 23 -maxrate 5M -bufsize 10M -c:a aac -b:a 128k reel.mp4

# 3. Verify size
ls -lh reel.mp4
```

**Output**: Instagram-ready video file.

### Use Case 2: Product Image Batch Processing
**Scenario**: Prepare 50 product photos for ecommerce site (800x800, white background, optimized).

**Workflow**:
```bash
# 1. Remove backgrounds (batch)
for img in *.jpg; do
  rmbg "$img" -m briaai -o "nobg-$img"
done

# 2. Resize to 800x800 (batch with mogrify)
mogrify -resize 800x800^ -gravity center -extent 800x800 -quality 85 nobg-*.jpg

# 3. Verify output
ls -lh nobg-*.jpg
```

**Output**: 50 optimized product images ready for upload.

## Troubleshooting

**Issue**: FFmpeg "codec not found"
**Solution**: Verify FFmpeg built with codec support: `ffmpeg -codecs | grep h264`

**Issue**: ImageMagick "not authorized" error
**Solution**: Edit `/etc/ImageMagick-7/policy.xml`, change PDF policy from "none" to "read|write"

**Issue**: RMBG produces poor results
**Solution**: Try different model (`-m briaai` for quality, `-m u2netp` for speed). Ensure input is high-resolution.

## Related Skills

- [AI Multimodal](/docs/marketing/skills/ai-multimodal) - Gemini-based media processing (alternative)
- [Creativity](/docs/marketing/skills/creativity) - Creative direction for processed media
- [Social Media](/docs/marketing/skills/social-media) - Platform-specific format requirements

## Related Commands

- `/design/video` - Video content planning and editing
- `/content/enhance` - Optimize existing media assets
