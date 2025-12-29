---
title: "AI Multimodal"
description: "Process and generate multimedia content with Google Gemini API: audio transcription, image analysis, video processing, Imagen 4, and Veo 3."
section: marketing
category: skills
order: 17
---

> Generate images and videos, analyze media files, and process documents using Google Gemini's multimodal AI capabilities.

## What This Skill Does

**The Challenge**: Marketing requires processing diverse media (audio, images, videos, PDFs) and generating visual content. Using separate tools for each format is inefficient and expensive.

**The Solution**: AI Multimodal skill integrates Google Gemini API for audio transcription (9.5h), image analysis, video processing (6h), PDF extraction, Imagen 4 image generation, and Veo 3 video generation (8s clips with audio). Single API, 2M token context window.

## Activation

**Implicit**: Activates automatically when agents need to analyze images, transcribe audio, process videos, or generate visual content.

**Explicit**: `/skill:add ai-multimodal`

## Capabilities

### 1. Audio Transcription and Analysis
Transcribe audio files with timestamps, speaker detection, and non-speech analysis.

```bash
# Transcribe audio
python scripts/gemini_batch_process.py --files meeting.mp3 --task transcribe

# Analyze podcast for topics
python scripts/gemini_batch_process.py --files podcast.mp3 --task analyze --prompt "Identify key topics and timestamps"
```

**Formats**: WAV, MP3, AAC (up to 9.5 hours)

**Output**: Markdown with `[HH:MM:SS -> HH:MM:SS]` timestamp format

**Important**: Files >15 minutes may truncate due to output token limits. Split into 15-min chunks for full transcripts.

**Guide**: `references/audio-processing.md`

### 2. Image Understanding and Analysis
Analyze images for content, extract text, detect objects, and answer visual questions.

```bash
# Analyze screenshot
python scripts/gemini_batch_process.py --files screenshot.png --task analyze --prompt "Describe the UI layout and identify all interactive elements"

# Extract text from image
python scripts/gemini_batch_process.py --files poster.jpg --task extract --prompt "Extract all text in structured format"
```

**Formats**: PNG, JPEG, WebP, SVG (up to 3.6k images)

**Capabilities**: Captioning, classification, OCR, object detection, visual Q&A

**Guide**: `references/vision-understanding.md`

### 3. Video Analysis
Process videos for scene detection, temporal Q&A, and transcription with visual context.

```bash
# Analyze marketing video
python scripts/gemini_batch_process.py --files promo.mp4 --task analyze --prompt "Identify scenes, key messages, and suggested timestamps for cuts"

# YouTube URL analysis
python scripts/gemini_batch_process.py --files https://youtube.com/watch?v=xyz --task analyze
```

**Formats**: MP4, MOV, WebM (up to 6 hours)

**For long videos**: Extract audio with FFmpeg, split to 15-min chunks, transcribe separately.

**Guide**: `references/video-analysis.md`

### 4. Image Generation with Imagen 4
Generate marketing visuals from text descriptions.

```bash
# Generate social media image
python scripts/gemini_batch_process.py --task generate --prompt "Modern SaaS dashboard screenshot, clean UI, blue and white color scheme, professional"

# Batch generation
python scripts/gemini_batch_process.py --task generate --prompt "Product hero image" --count 4
```

**Models**:
- `imagen-4.0-generate-001` (standard quality)
- `imagen-4.0-ultra-generate-001` (highest quality)
- `imagen-4.0-fast-generate-001` (fastest)

**Aspect ratios**: 1:1, 16:9, 9:16, 4:3, 3:4

**Guide**: `references/image-generation.md`

### 5. Video Generation with Veo 3
Create 8-second video clips with native audio.

```bash
# Generate video clip
python scripts/gemini_batch_process.py --task generate-video --prompt "Product unboxing, smooth camera movement, professional lighting, upbeat mood"
```

**Model**: `veo-3.1-generate-preview`

**Length**: 8 seconds with audio

**Output**: MP4 file

**Guide**: `references/video-generation.md`

## Prerequisites

**API access**:
- `GEMINI_API_KEY` from [Google AI Studio](https://aistudio.google.com/apikey)
- Python 3.8+ with `google-genai`, `python-dotenv`, `pillow`

**Installation**:
```bash
pip install google-genai python-dotenv pillow
```

**Verify setup**:
```bash
python scripts/check_setup.py
```

## Configuration

**Environment variable** (`.env`):
```bash
GEMINI_API_KEY=your_key_here
```

**Available scripts**:
- `gemini_batch_process.py` - Main CLI for all tasks
- `media_optimizer.py` - Compress/resize media for API limits
- `document_converter.py` - Convert PDFs to markdown
- `check_setup.py` - Verify API key and dependencies

## Best Practices

**1. Choose right model for task**
- `gemini-2.5-flash` for speed (transcription, analysis)
- `gemini-2.5-pro` for complex reasoning
- `imagen-4.0-generate-001` for standard images
- `imagen-4.0-ultra-generate-001` for hero images only (higher cost)

**2. Optimize media before upload**
Use `media_optimizer.py` to compress files >20MB before processing.

**3. Split long audio/video**
15-minute chunks prevent transcript truncation. Use FFmpeg for splitting.

## Common Use Cases

### Use Case 1: Podcast Transcription with Topics
**Scenario**: Transcribe 45-minute podcast episode with timestamps and topic extraction.

**Workflow**:
1. Split audio into 3x 15-minute chunks (FFmpeg)
2. Transcribe each: `python scripts/gemini_batch_process.py --files chunk1.mp3 --task transcribe`
3. Combine transcripts
4. Extract topics: `--task analyze --prompt "Identify 5 key topics with timestamps"`

**Output**: Full transcript with topic summary.

### Use Case 2: Social Media Image Generation
**Scenario**: Generate 4 variations of product announcement image.

**Workflow**:
1. Define prompt with brand context: "Modern tech product announcement, blue gradient background, clean typography, professional, 16:9"
2. Generate batch: `python scripts/gemini_batch_process.py --task generate --prompt "..." --count 4`
3. Review outputs
4. Select best variation for posting

**Output**: 4 unique images matching brand guidelines.

## Troubleshooting

**Issue**: API returns 401 Unauthorized
**Solution**: Verify `GEMINI_API_KEY` in `.env` file. Get new key from Google AI Studio if needed.

**Issue**: Transcript truncated for long audio
**Solution**: Split audio into 15-minute chunks using FFmpeg or `media_optimizer.py`.

**Issue**: Image generation doesn't match brand
**Solution**: Include specific brand colors, style keywords, and reference existing assets in prompt. Use `ai-artist` skill for prompt optimization.

## Related Skills

- [AI Artist](/docs/marketing/skills/ai-artist) - Prompt engineering for better outputs
- [Media Processing](/docs/marketing/skills/media-processing) - FFmpeg for audio/video manipulation
- [Brand Guidelines](/docs/marketing/skills/brand-guidelines) - Brand-aligned image generation
- [Creativity](/docs/marketing/skills/creativity) - Creative direction for generated content

## Related Commands

- `/design/good` - Generate high-quality visuals
- `/design/video` - Video content planning
- `/content/enhance` - Improve content with AI analysis
