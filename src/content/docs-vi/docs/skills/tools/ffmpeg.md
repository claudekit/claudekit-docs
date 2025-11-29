---
title: ffmpeg
description: "Documentation for ffmpeg
description:
section: docs
category: skills/tools
order: 21
published: true"
section: docs
category: skills/tools
order: 21
published: true
---

# ffmpeg Skill

Comprehensive multimedia framework for video/audio encoding, conversion, streaming, and filtering.

## When to Use

Use ffmpeg when you need:
- Convert video formats
- Compress videos
- Extract audio
- Create streams
- Apply filters
- Batch process media
- Generate thumbnails

## Quick Start

### Invoke the Skill

```
"Use ffmpeg to:
- Convert video.mkv to MP4
- Compress to 720p
- Reduce file size
- Maintain good quality"
```

### What You Get

The skill will help you:
1. Choose right codecs
2. Set optimal quality
3. Apply filters
4. Optimize file size
5. Handle batch processing

## Common Use Cases

### Format Conversion

```
"Use ffmpeg to convert all MKV files to MP4 with H.264 codec"
```

### Video Compression

```
"Use ffmpeg to compress 4K video to 1080p with good quality"
```

### Extract Audio

```
"Use ffmpeg to extract audio from video as MP3"
```

### Create GIF

```
"Use ffmpeg to create high-quality GIF from video clip"
```

## Popular Operations

### Convert Format

```bash
# Simple conversion
ffmpeg -i input.mkv -c copy output.mp4

# With re-encoding
ffmpeg -i input.avi -c:v libx264 -c:a aac output.mp4
```

### Compress Video

```bash
# Quality-based (CRF 23 = default, lower = better)
ffmpeg -i input.mp4 -c:v libx264 -crf 22 -preset slow output.mp4

# Target file size with two-pass
ffmpeg -i input.mp4 -c:v libx264 -b:v 2M -pass 1 -f null /dev/null
ffmpeg -i input.mp4 -c:v libx264 -b:v 2M -pass 2 output.mp4
```

### Extract Audio

```bash
# Keep original format
ffmpeg -i video.mp4 -vn -c:a copy audio.m4a

# Convert to MP3
ffmpeg -i video.mp4 -vn -q:a 0 audio.mp3
```

### Trim Video

```bash
# Without re-encoding (fast)
ffmpeg -i input.mp4 -ss 00:01:00 -to 00:02:00 -c copy output.mp4

# With re-encoding (precise)
ffmpeg -i input.mp4 -ss 00:01:00 -t 00:01:00 -c:v libx264 output.mp4
```

## Common Codecs

### Video Codecs

- **H.264 (libx264)**: Universal compatibility
- **H.265 (libx265)**: Better compression, 4K
- **VP9**: Open-source, YouTube
- **AV1**: Next-gen, best compression

### Audio Codecs

- **AAC**: Industry standard
- **MP3**: Universal compatibility
- **Opus**: Best for streaming/voice
- **FLAC**: Lossless quality

## Video Filters

### Scale/Resize

```bash
# Specific dimensions
ffmpeg -i input.mp4 -vf scale=1280:720 output.mp4

# Keep aspect ratio
ffmpeg -i input.mp4 -vf scale=1280:-1 output.mp4

# Half resolution
ffmpeg -i input.mp4 -vf scale=iw/2:ih/2 output.mp4
```

### Crop

```bash
# Manual crop
ffmpeg -i input.mp4 -vf "crop=1280:720:0:0" output.mp4

# Auto-detect black borders
ffmpeg -i input.mp4 -vf cropdetect output.mp4
```

### Other Filters

```bash
# Denoise
ffmpeg -i input.mp4 -vf hqdn3d output.mp4

# Rotate 90° clockwise
ffmpeg -i input.mp4 -vf "transpose=1" output.mp4

# Add watermark
ffmpeg -i video.mp4 -i logo.png -filter_complex "overlay=10:10" output.mp4
```

## Audio Filters

```bash
# Increase volume
ffmpeg -i input.mp4 -af "volume=10dB" output.mp4

# Normalize audio
ffmpeg -i input.mp4 -af loudnorm output.mp4

# Mix audio tracks
ffmpeg -i audio1.mp3 -i audio2.mp3 -filter_complex amix output.mp3
```

## Streaming

### RTMP (Twitch/YouTube)

```bash
ffmpeg -re -i input.mp4 \
  -c:v libx264 -preset veryfast -maxrate 3000k \
  -c:a aac -b:a 128k \
  -f flv rtmp://live.twitch.tv/app/YOUR_KEY
```

### HLS Streaming

```bash
ffmpeg -i input.mp4 \
  -c:v libx264 -c:a aac \
  -f hls -hls_time 6 -hls_playlist_type vod \
  playlist.m3u8
```

## Advanced Use Cases

### Create GIF

```bash
ffmpeg -i input.mp4 \
  -vf "fps=15,scale=640:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
  output.gif
```

### Extract Frames

```bash
# All frames
ffmpeg -i input.mp4 frame_%04d.png

# 1 frame per second
ffmpeg -i input.mp4 -vf fps=1 frame_%04d.png

# Single frame at 5s
ffmpeg -ss 00:00:05 -i input.mp4 -frames:v 1 frame.png
```

### Video from Images

```bash
ffmpeg -framerate 30 -i frame_%04d.png \
  -c:v libx264 -pix_fmt yuv420p output.mp4
```

### Concatenate Videos

Create `concat.txt`:
```
file 'input1.mp4'
file 'input2.mp4'
```

Run:
```bash
ffmpeg -f concat -safe 0 -i concat.txt -c copy output.mp4
```

## Batch Processing

### Convert All Files

```bash
for file in *.mkv; do
  ffmpeg -i "$file" -c:v libx264 -crf 22 "${file%.mkv}.mp4"
done
```

### Resize All Videos

```bash
for file in *.mp4; do
  ffmpeg -i "$file" -vf scale=-1:720 "720p_${file}"
done
```

## Hardware Acceleration

### NVIDIA GPU

```bash
ffmpeg -hwaccel cuda -i input.mp4 \
  -c:v h264_nvenc -preset fast output.mp4
```

### Intel QuickSync

```bash
ffmpeg -hwaccel qsv -i input.mp4 \
  -c:v h264_qsv -preset fast output.mp4
```

## Quality Settings

### CRF Values

- 0 = Lossless (huge file)
- 17-18 = Visually lossless
- 20-23 = High quality (recommended)
- 24-28 = Medium quality
- 30+ = Low quality

### Presets (speed vs compression)

- ultrafast, superfast, veryfast, faster, fast
- medium (default)
- slow, slower, veryslow

## Quick Examples

**Simple Conversion:**
```
"Use ffmpeg to convert video.mkv to MP4"
```

**Compress for Web:**
```
"Use ffmpeg to compress video for web:
- 1080p resolution
- Good quality
- Small file size
- H.264 codec"
```

**Extract Audio:**
```
"Use ffmpeg to extract audio from all videos in folder as MP3"
```

**Create Thumbnail:**
```
"Use ffmpeg to create thumbnail from video at 5 second mark"
```

## Best Practices

1. **Test on short clip first**
2. **Use CRF for quality**
3. **Copy streams when possible** (`-c copy`)
4. **Choose appropriate presets**
5. **Don't upscale unnecessarily**
6. **Match audio quality to video**
7. **Use hardware acceleration**
8. **Verify output quality**

## Troubleshooting

### Unknown encoder

```bash
# Check available encoders
ffmpeg -encoders | grep h264
```

### Compatibility issues

Use safe defaults:
```bash
ffmpeg -i input.mkv -c:v libx264 -profile:v high \
  -pix_fmt yuv420p -c:a aac output.mp4
```

### Performance issues

- Use hardware acceleration
- Choose faster presets
- Reduce resolution
- Enable multi-threading

## Next Steps

- [Media Examples](/docs/use-cases/)
- [Image Processing](/docs/skills/imagemagick)
- [Streaming Guide](/docs/use-cases/)

---

**Bottom Line:** ffmpeg handles all video/audio needs. Convert, compress, stream - one tool for everything.
