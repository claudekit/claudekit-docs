---
title: "Media Processing"
description: "Process video, audio, and images with FFmpeg, ImageMagick, and RMBG for encoding, conversion, effects, optimization, and background removal"
section: engineer
category: skills
order: 20
---

Ever needed to convert a video format, resize 500 images, or remove backgrounds from product photos? These are exactly the problems FFmpeg, ImageMagick, and RMBG solve.

## What This Skill Does

Media Processing gives you access to three powerful command-line tools for working with multimedia files: FFmpeg for video and audio processing, ImageMagick for image manipulation, and RMBG for AI-powered background removal.

FFmpeg handles video encoding and conversion with support for 100+ formats, audio extraction and conversion, creating streaming manifests for HLS/DASH, applying filters and effects, and hardware acceleration for faster encoding. ImageMagick specializes in image operations like format conversion, resizing and cropping, batch processing hundreds of images, applying effects and compositions, and optimizing file sizes. RMBG provides AI-powered background removal with multiple quality models, local processing (no API required), high-resolution support up to 4096px, and fast batch operations.

Think of this skill as your multimedia Swiss Army knife. When you need to prepare videos for web streaming, generate thumbnails from videos, create responsive image sets, remove backgrounds from product photos, or optimize media for specific size constraints, these tools have you covered.

## Prerequisites

You need these tools installed on your system:

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

Choose the right tool for your task:

| Task | Tool | Reason |
|------|------|--------|
| Video encoding/conversion | FFmpeg | Native codec support, streaming |
| Audio extraction/conversion | FFmpeg | Direct stream manipulation |
| Image resize/effects | ImageMagick | Optimized for still images |
| Background removal | RMBG | AI-powered, local processing |
| Batch images | ImageMagick | `mogrify` for in-place edits |
| Video thumbnails | FFmpeg | Frame extraction built-in |
| GIF creation | FFmpeg/ImageMagick | FFmpeg for video, ImageMagick for images |

## Essential FFmpeg Commands

### Video Conversion and Encoding

```bash
# Copy streams without re-encoding (fast)
ffmpeg -i input.mkv -c copy output.mp4

# Re-encode with H.264 codec (universal compatibility)
ffmpeg -i input.avi -c:v libx264 -crf 22 -c:a aac output.mp4

# High quality H.265 (smaller file size)
ffmpeg -i input.mp4 -c:v libx265 -crf 24 -c:a aac output.mp4

# Web-optimized MP4 (fast start for streaming)
ffmpeg -i input.mov -c:v libx264 -crf 22 -c:a aac -movflags +faststart output.mp4
```

**Key parameters**:

- `-c:v libx264` - H.264 video codec (most compatible)
- `-crf 22` - Constant Rate Factor for quality (0-51, lower=better, 18-28 typical)
- `-preset slow` - Encoding speed/compression balance (ultrafast, fast, medium, slow, veryslow)
- `-c:a aac` - AAC audio codec (universal compatibility)
- `-movflags +faststart` - Move metadata to front for web streaming

### Audio Extraction

```bash
# Extract audio without re-encoding (preserves quality)
ffmpeg -i video.mp4 -vn -c:a copy audio.m4a

# Convert to MP3
ffmpeg -i video.mp4 -vn -c:a libmp3lame -q:a 2 audio.mp3

# Extract specific time range
ffmpeg -i video.mp4 -vn -ss 00:01:30 -t 00:02:00 -c:a copy audio.m4a
```

### Video Thumbnails

```bash
# Extract single frame at 5 seconds
ffmpeg -i video.mp4 -ss 00:00:05 -vframes 1 thumbnail.jpg

# Generate thumbnails every 10 seconds
ffmpeg -i video.mp4 -vf fps=1/10 thumbnail_%03d.jpg

# High quality thumbnail
ffmpeg -i video.mp4 -ss 00:00:05 -vframes 1 -q:v 2 thumbnail.jpg
```

## Essential ImageMagick Commands

### Image Conversion and Resizing

```bash
# Convert format
magick input.png output.jpg

# Resize to fit within dimensions (maintains aspect ratio)
magick input.jpg -resize 800x600 output.jpg

# Resize to exact dimensions (may distort)
magick input.jpg -resize 800x600! output.jpg

# Resize to fill dimensions (crops excess)
magick input.jpg -resize 800x600^ -gravity center -extent 800x600 output.jpg

# Resize by percentage
magick input.jpg -resize 50% output.jpg
```

**Key resize parameters**:

- `800x600` - Fit within dimensions (maintains aspect)
- `800x600!` - Force exact dimensions (may distort)
- `800x600^` - Fill dimensions (maintains aspect, may crop)
- `800x` - Resize width, auto height
- `x600` - Resize height, auto width

### Batch Image Processing

```bash
# Resize all JPGs in directory (overwrites originals)
mogrify -resize 800x -quality 85 *.jpg

# Convert all PNGs to JPGs
mogrify -format jpg *.png

# Add watermark to all images
mogrify -gravity southeast -draw "image over 10,10 0,0 'watermark.png'" *.jpg

# Create thumbnails (preserves originals)
mkdir thumbnails
mogrify -path thumbnails -resize 200x200 -quality 80 *.jpg
```

**Important**: `mogrify` modifies files in-place. Always backup originals first or use `-path` to specify output directory.

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

- `-quality 85` - Good balance for web (60-85 typical)
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
- `u2netp` - Fastest, good for simple backgrounds
- `u2net` - Good quality, moderate speed

**Parameters**:

- `-m <model>` - Choose AI model
- `-o <output>` - Output file path
- `-r <pixels>` - Max resolution (default: 2048, max: 4096)

## Real-World Examples

### Prepare Video for Web Streaming

You have a large MOV file and need a web-optimized MP4:

```bash
# Convert to H.264 with fast start for streaming
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

### Create Responsive Image Set

You need multiple sizes of an image for responsive web design:

```bash
# Create output directory
mkdir -p responsive

# Generate sizes: 320w, 640w, 1024w, 1920w
magick original.jpg -resize 320x -quality 85 responsive/image-320w.jpg
magick original.jpg -resize 640x -quality 85 responsive/image-640w.jpg
magick original.jpg -resize 1024x -quality 85 responsive/image-1024w.jpg
magick original.jpg -resize 1920x -quality 85 responsive/image-1920w.jpg

# Or batch process with mogrify
for width in 320 640 1024 1920; do
  magick original.jpg -resize ${width}x -quality 85 responsive/image-${width}w.jpg
done
```

### Remove Backgrounds from Product Photos

You have 50 product photos that need background removal:

```bash
# Create output directory
mkdir -p products-nobg

# Batch process with high quality model
for file in products/*.jpg; do
  filename=$(basename "$file" .jpg)
  rmbg "$file" -m briaai -o "products-nobg/${filename}.png"
done
```

### Extract Audio Clips from Interview

You need to split a 2-hour interview into segments:

```bash
# Extract audio from video
ffmpeg -i interview.mp4 -vn -c:a copy interview-audio.m4a

# Split into 15-minute segments
ffmpeg -i interview-audio.m4a -f segment -segment_time 900 -c copy segment_%03d.m4a

# Or extract specific clips
ffmpeg -i interview-audio.m4a -ss 00:05:30 -t 00:10:00 -c copy clip1.m4a
ffmpeg -i interview-audio.m4a -ss 00:25:15 -t 00:08:30 -c copy clip2.m4a
```

### Create GIF from Video

You want a GIF preview of a video:

```bash
# High quality GIF with palette optimization
ffmpeg -i video.mp4 -vf "fps=10,scale=480:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 output.gif

# Simple GIF (lower quality)
ffmpeg -i video.mp4 -vf "fps=10,scale=320:-1" -loop 0 output.gif

# GIF from specific time range
ffmpeg -i video.mp4 -ss 00:00:05 -t 00:00:03 -vf "fps=10,scale=480:-1" output.gif
```

### Optimize Images for Email

You need to reduce file sizes for email attachments:

```bash
# Resize to max 800px width and reduce quality
mogrify -resize 800x -quality 75 -strip *.jpg

# Check file sizes
ls -lh *.jpg
```

## Advanced Techniques

### Video Concatenation

Combine multiple videos:

```bash
# Create file list
cat > list.txt << EOF
file 'video1.mp4'
file 'video2.mp4'
file 'video3.mp4'
EOF

# Concatenate (same codec, resolution)
ffmpeg -f concat -safe 0 -i list.txt -c copy output.mp4
```

### Image Composition

Create composite images:

```bash
# Overlay watermark
magick base.jpg watermark.png -gravity southeast -geometry +10+10 -composite output.jpg

# Create collage (2x2 grid)
magick montage img1.jpg img2.jpg img3.jpg img4.jpg -tile 2x2 -geometry +5+5 collage.jpg

# Side-by-side comparison
magick +append before.jpg after.jpg comparison.jpg
```

### Hardware Acceleration (FFmpeg)

Speed up encoding with GPU acceleration:

```bash
# NVIDIA NVENC (requires NVIDIA GPU)
ffmpeg -i input.mp4 -c:v h264_nvenc -preset fast -crf 22 output.mp4

# Intel Quick Sync (requires Intel GPU)
ffmpeg -i input.mp4 -c:v h264_qsv -preset fast -global_quality 22 output.mp4
```

## Best Practices

**Always Backup Originals**: Especially when using `mogrify` which modifies files in-place.

**Use Appropriate Quality Settings**: CRF 18-28 for video (22 is balanced), quality 75-85 for JPEG (85 is balanced).

**Optimize for Web**: Use `-movflags +faststart` for MP4 videos, `-strip` to remove metadata from images.

**Choose Right Codec**: H.264 for maximum compatibility, H.265 for better compression, VP9 for open source preference.

**Test on Small Files First**: Before batch processing hundreds of files, test your command on one file.

**Monitor File Sizes**: Check output file sizes to ensure optimization worked as expected.

## Reference Documentation

The skill includes comprehensive reference files in the Engineer Kit at `../claudekit-engineer/.claude/skills/media-processing/references/`:

- `ffmpeg-encoding.md` - Codecs, quality settings, hardware acceleration
- `ffmpeg-streaming.md` - HLS/DASH manifests, live streaming
- `ffmpeg-filters.md` - Video/audio filters, complex filtergraphs
- `imagemagick-editing.md` - Effects, transformations, compositions
- `imagemagick-batch.md` - Batch processing, parallel operations
- `rmbg-background-removal.md` - AI models, CLI usage, batch workflows
- `common-workflows.md` - Video optimization, responsive images, GIF creation
- `troubleshooting.md` - Error fixes, performance tips
- `format-compatibility.md` - Format support, codec recommendations

## Related Skills and Commands

Combine Media Processing with:

- [AI Multimodal](/docs/engineer/skills/ai-multimodal) - Process media before sending to Gemini API (compress, resize, split)
- [Frontend Design](/docs/engineer/skills/frontend-design) - Optimize generated images, remove backgrounds from assets
- [Chrome DevTools](/docs/engineer/skills/chrome-devtools) - Capture screenshots, then optimize with ImageMagick

## Common Parameters Reference

### FFmpeg Quality Settings

- `-crf 18` - Visually lossless
- `-crf 22` - High quality (recommended)
- `-crf 28` - Lower quality, smaller file
- `-preset ultrafast` - Fastest encoding, larger file
- `-preset slow` - Slower encoding, better compression

### ImageMagick Resize

- `800x600` - Fit within (maintains aspect)
- `800x600!` - Exact size (may distort)
- `800x600^` - Fill size (may crop)
- `800x` - Resize width only
- `x600` - Resize height only

### ImageMagick Quality

- `-quality 95` - High quality
- `-quality 85` - Balanced (recommended)
- `-quality 75` - Lower quality, smaller file

### RMBG Models

- `modnet` - Default, balanced
- `briaai` - Highest quality
- `u2netp` - Fastest
- `u2net` - Good quality

## Key Principle

Media processing is about choosing the right tool and parameters for your specific use case. FFmpeg for video/audio, ImageMagick for images, RMBG for background removal. Always test on small batches first, backup originals, and verify output quality before processing hundreds of files.
