---
title: Media Processing Skill
description: Process video, audio, and images with FFmpeg, ImageMagick, and RMBG for encoding, conversion, effects, and background removal
section: docs
category: skills/multimedia
order: 1
published: true
---

# Media Processing Skill

Process video, audio, and images using FFmpeg, ImageMagick, and RMBG CLI tools.

## Tool Selection

| Task | Tool | Reason |
|------|------|--------|
| Video encoding/conversion | FFmpeg | Native codec support, streaming |
| Audio extraction/conversion | FFmpeg | Direct stream manipulation |
| Image resize/effects | ImageMagick | Optimized for still images |
| Background removal | RMBG | AI-powered, local processing |
| Batch images | ImageMagick | mogrify for in-place edits |
| Video thumbnails | FFmpeg | Frame extraction built-in |
| GIF creation | FFmpeg/ImageMagick | FFmpeg for video, ImageMagick for images |

## Installation

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

## Essential Commands

### FFmpeg

```bash
# Convert/re-encode
ffmpeg -i input.mkv -c copy output.mp4
ffmpeg -i input.avi -c:v libx264 -crf 22 -c:a aac output.mp4

# Extract audio
ffmpeg -i video.mp4 -vn -c:a copy audio.m4a
```

### ImageMagick

```bash
# Convert/resize
magick input.png output.jpg
magick input.jpg -resize 800x600 output.jpg

# Batch resize
mogrify -resize 800x -quality 85 *.jpg
```

### RMBG

```bash
# Basic (modnet)
rmbg input.jpg

# High quality
rmbg input.jpg -m briaai -o output.png

# Fast
rmbg input.jpg -m u2netp -o output.png
```

## Key Parameters

### FFmpeg

| Parameter | Purpose |
|-----------|---------|
| `-c:v libx264` | H.264 codec |
| `-crf 22` | Quality (0-51, lower=better) |
| `-preset slow` | Speed/compression balance |
| `-c:a aac` | Audio codec |

### ImageMagick

| Parameter | Purpose |
|-----------|---------|
| `800x600` | Fit within (maintains aspect) |
| `800x600^` | Fill (may crop) |
| `-quality 85` | JPEG quality |
| `-strip` | Remove metadata |

### RMBG

| Parameter | Purpose |
|-----------|---------|
| `-m briaai` | High quality model |
| `-m u2netp` | Fast model |
| `-r 4096` | Max resolution |

## Reference Navigation

| Topic | Reference |
|-------|-----------|
| Encoding | `references/ffmpeg-encoding.md` |
| Streaming | `references/ffmpeg-streaming.md` |
| Filters | `references/ffmpeg-filters.md` |
| Image Editing | `references/imagemagick-editing.md` |
| Batch Processing | `references/imagemagick-batch.md` |
| Background Removal | `references/rmbg-background-removal.md` |
| Common Workflows | `references/common-workflows.md` |
| Troubleshooting | `references/troubleshooting.md` |
| Format Compatibility | `references/format-compatibility.md` |

## Integration with ClaudeKit

Works with:

- **ai-multimodal**: Process media for AI analysis
- **frontend-design**: Asset preparation

## Resources

- [FFmpeg Documentation](https://ffmpeg.org/documentation.html)
- [ImageMagick Documentation](https://imagemagick.org/script/command-line-processing.php)

---

## Key Takeaway

 Use FFmpeg for video/audio (encoding, conversion, streaming), ImageMagick for images (resize, effects, batch), and RMBG for AI-powered background removal. Supports 100+ formats with hardware acceleration.
