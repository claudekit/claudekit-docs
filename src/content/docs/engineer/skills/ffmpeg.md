---
title: ffmpeg
description: Professional video/audio encoding, conversion, streaming, and filtering for ClaudeKit $99 toolkit
section: engineer
kit: engineer
category: skills/tools
order: 21
published: true
---

# ffmpeg

Process video and audio with professional-grade encoding, conversion, streaming, and filtering.

## When to Use

- **Format Conversion** - Convert MKV/AVI/MOV to MP4/WebM with optimal codecs
- **Video Compression** - Reduce file size while maintaining quality (4K to 1080p, web optimization)
- **Audio Extraction** - Pull audio tracks from videos as MP3/AAC/FLAC
- **Media Processing** - Apply filters, create GIFs, generate thumbnails, batch process files

## Key Capabilities

| Capability | What It Does | Example |
|------------|--------------|---------|
| **Video Encoding** | Convert with H.264/H.265/VP9/AV1 codecs | `ffmpeg -i input.mkv -c:v libx264 -crf 23 output.mp4` |
| **Audio Processing** | Extract, convert, normalize audio | `ffmpeg -i video.mp4 -vn -c:a copy audio.m4a` |
| **Stream Manipulation** | Fast copy without re-encoding | `ffmpeg -i input.mkv -c copy output.mp4` |
| **Filtering** | Scale, crop, denoise, rotate, watermark | `ffmpeg -i input.mp4 -vf scale=1280:720 output.mp4` |
| **Streaming** | RTMP/HLS live streaming | `ffmpeg -i input.mp4 -f hls playlist.m3u8` |
| **Hardware Accel** | GPU encoding (NVENC, QSV) | `ffmpeg -hwaccel cuda -c:v h264_nvenc output.mp4` |

## Common Use Cases

**Video Producer** converting raw footage to web-ready format
```
"Use ffmpeg skill to convert 4K.mov to 1080p MP4 with H.264, CRF 22, and AAC audio"
```

**Content Creator** extracting audio for podcast
```
"Use ffmpeg skill to extract audio from all videos in /recordings as high-quality MP3"
```

**Web Developer** optimizing video for site performance
```
"Use ffmpeg skill to compress video.mp4 for web: 720p, small file size, maintain quality"
```

**Live Streamer** setting up RTMP stream
```
"Use ffmpeg skill to stream video.mp4 to Twitch RTMP with 1080p, 3000k bitrate"
```

**Designer** creating animated GIFs
```
"Use ffmpeg skill to create high-quality GIF from video clip (5s-10s) at 15fps"
```

## Quick Reference

**Fast Format Conversion (No Re-encoding)**
```bash
ffmpeg -i input.mkv -c copy output.mp4
```

**Quality Compression (Recommended Settings)**
```bash
# H.264 with CRF 23 (lower = better quality)
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k output.mp4
```

**Extract Audio as MP3**
```bash
ffmpeg -i video.mp4 -vn -q:a 0 audio.mp3
```

**Resize to 720p (Keep Aspect Ratio)**
```bash
ffmpeg -i input.mp4 -vf scale=-1:720 output.mp4
```

**Create Thumbnail at 5s**
```bash
ffmpeg -ss 00:00:05 -i input.mp4 -frames:v 1 thumbnail.png
```

**Batch Convert MKV to MP4**
```bash
for file in *.mkv; do ffmpeg -i "$file" -c:v libx264 -crf 22 "${file%.mkv}.mp4"; done
```

**Codec Quick Ref**
- **H.264** (`libx264`) - Universal compatibility, web/streaming
- **H.265** (`libx265`) - 50% smaller files, 4K, slower encoding
- **AAC** - Industry standard audio
- **CRF 18-23** - High quality range (lower = better)
- **Preset slow** - Better compression (ultrafast/fast/medium/slow)

## Pro Tips

**Quality Control**
- Start with CRF 23, adjust lower (better) or higher (smaller)
- Use `slow` preset for final output, `fast` for testing
- Test on 10-second clip before processing full video

**Performance**
- Use `-c copy` when format allows (no quality loss, instant)
- Enable hardware acceleration: `-hwaccel cuda` (NVIDIA) or `-hwaccel qsv` (Intel)
- Batch process with shell loops for multiple files

**Common Patterns**
- Extract frame: `-ss HH:MM:SS -frames:v 1`
- Trim video: `-ss 00:01:00 -to 00:02:00 -c copy`
- Normalize audio: `-af loudnorm`
- Remove black borders: `-vf cropdetect`

**Not activating?** Say: *"Use ffmpeg skill to [your task]"*

## Related Skills

- [Media Processing](/docs/skills/tools/media-processing) - Combined FFmpeg + ImageMagick + RMBG
- [ImageMagick](/docs/skills/tools/imagemagick) - Image manipulation and batch processing
- [Backend Development](/docs/skills/backend/backend-development) - Server-side media pipelines

## Key Takeaway

ffmpeg is the industry-standard multimedia Swiss Army knife. Master CRF values (18-28), use `-c copy` for fast conversions, and leverage hardware acceleration for production workloads. One tool handles all video/audio encoding, conversion, streaming, and filtering needs.
