---
title: "AI Multimodal"
description: "Process and generate multimedia content with Google Gemini API: audio transcription, image analysis, video processing, Imagen 4, and Veo 3."
section: marketing
category: skills
order: 17
---

> Generate images and videos, analyze multimedia files, and process documents using Google Gemini's multimodal AI capabilities.

## What This Skill Does

**Challenge**: Marketing requires processing diverse media (audio, images, videos, PDFs) and creating visual content. Using separate tools for each format is inefficient and expensive.

**Solution**: The AI Multimodal skill integrates Google Gemini API for audio transcription (9.5h), image analysis, video processing (6h), PDF extraction, Imagen 4 image generation, and Veo 3 video generation (8-second clips with audio). One API, 2M token context window.

## Activation

**Implicit**: Activates automatically when agents need image analysis, audio transcription, video processing, or visual content generation.

**Explicit**: Activate by name when needed: "Activate ai-multimodal skill"

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

**Output**: Markdown with timestamp format `[HH:MM:SS -> HH:MM:SS]`

**Important**: Files >15 minutes may be truncated due to output token limits. Split into 15-minute chunks for full transcription.

**Guide**: `references/audio-processing.md`

### 2. Image Understanding and Analysis
Analyze images for content, text extraction, object detection, and visual Q&A.

```bash
# Analyze screenshot
python scripts/gemini_batch_process.py --files screenshot.png --task analyze --prompt "Describe UI layout and identify all interactive elements"

# Extract text from image
python scripts/gemini_batch_process.py --files poster.jpg --task extract --prompt "Extract all text in structured format"
```

**Formats**: PNG, JPEG, WebP, SVG (up to 3.6k images)

**Capabilities**: Captioning, classification, OCR, object detection, visual Q&A

**Guide**: `references/vision-understanding.md`

### 3. Video Analysis
Process videos for scene detection, temporal Q&A, and context-aware transcription.

```bash
# Analyze marketing video
python scripts/gemini_batch_process.py --files promo.mp4 --task analyze --prompt "Identify scenes, key messages, and suggested timestamps for cuts"

# Analyze YouTube URL
python scripts/gemini_batch_process.py --files https://youtube.com/watch?v=xyz --task analyze
```

**Formats**: MP4, MOV, WebM (up to 6 hours)

**For Long Videos**: Extract audio with FFmpeg, split into 15-minute chunks, transcribe separately.

**Guide**: `references/video-analysis.md`

### 4. Image Generation with Imagen 4
Generate marketing images from text descriptions.

```bash
# Generate social media image
python scripts/gemini_batch_process.py --task generate --prompt "Modern SaaS dashboard screenshot, clean interface, blue and white color scheme, professional"

# Batch generate
python scripts/gemini_batch_process.py --task generate --prompt "Product hero image" --count 4
```

**Models**:
- `imagen-4.0-generate-001` (standard quality)
- `imagen-4.0-ultra-generate-001` (highest quality)
- `imagen-4.0-fast-generate-001` (fastest)

**Aspect Ratios**: 1:1, 16:9, 9:16, 4:3, 3:4

**Guide**: `references/image-generation.md`

### 5. Video Generation with Veo 3
Generate 8-second video clips with audio asynchronously.

```bash
# Generate video clip
python scripts/gemini_batch_process.py --task generate-video --prompt "Product unboxing, smooth camera motion, professional lighting, cheerful mood"
```

**Model**: `veo-3.1-generate-preview`

**Duration**: 8 seconds with audio

**Output**: MP4 file

**Guide**: `references/video-generation.md`

## Prerequisites

**API Access**:
- `GEMINI_API_KEY` from [Google AI Studio](https://aistudio.google.com/apikey)
- Python 3.8+ with `google-genai`, `python-dotenv`, `pillow`

**Installation**:
```bash
pip install google-genai python-dotenv pillow
```

**Verify Installation**:
```bash
python scripts/check_setup.py
```

## Configuration

**Environment Variables** (`.env`):
```bash
GEMINI_API_KEY=your_key_here
```

**Available Scripts**:
- `gemini_batch_process.py` - Main CLI for all tasks
- `media_optimizer.py` - Compress/resize media for API limits
- `document_converter.py` - Convert PDF to markdown
- `check_setup.py` - Verify API keys and dependencies

## Best Practices

**1. Choose Right Model For Task**
- `gemini-2.5-flash` for speed (transcription, analysis)
- `gemini-2.5-pro` for complex reasoning
- `imagen-4.0-generate-001` for standard images
- `imagen-4.0-ultra-generate-001` for hero images only (higher cost)

**2. Optimize Media Before Upload**
Use `media_optimizer.py` to compress files >20MB before processing.

**3. Split Long Audio/Video**
15-minute chunks prevent transcription truncation. Use FFmpeg to split.

## Common Use Cases

### Use Case 1: Transcribe Podcast With Topics
**Scenario**: Transcribe 45-minute podcast episode with timestamps and extract topics.

**Workflow**:
1. Split audio into 3 × 15-minute chunks (FFmpeg)
2. Transcribe each: `python scripts/gemini_batch_process.py --files chunk1.mp3 --task transcribe`
3. Combine transcriptions
4. Extract topics: `--task analyze --prompt "Identify top 5 topics with timestamps"`

**Outcome**: Full transcription with topic summary.

### Use Case 2: Generate Social Media Images
**Scenario**: Generate 4 variations of product announcement image.

**Workflow**:
1. Define prompt with brand context: "Modern tech product announcement, gradient blue background, clean typography, professional, 16:9"
2. Batch generate: `python scripts/gemini_batch_process.py --task generate --prompt "..." --count 4`
3. Review outputs
4. Select best variation for posting

**Outcome**: 4 unique images matching brand guidelines.

## Troubleshooting

**Issue**: API returns 401 Unauthorized
**Solution**: Verify `GEMINI_API_KEY` in `.env` file. Get new key from Google AI Studio if needed.

**Issue**: Transcription truncated for long audio
**Solution**: Split audio into 15-minute chunks using FFmpeg or `media_optimizer.py`.

**Issue**: Image generation doesn't match brand
**Solution**: Include specific brand colors, style keywords, and reference existing assets in prompt. Use `ai-artist` skill to optimize prompts.

## Related Skills

- [AI Artist](/docs/marketing/skills/ai-artist) - Prompt engineering for better outputs
- [Media Processing](/docs/marketing/skills/media-processing) - FFmpeg for audio/video manipulation
- [Brand Guidelines](/docs/marketing/skills/brand-guidelines) - Brand-aligned image generation
- [Creativity](/docs/marketing/skills/creativity) - Creative direction for generated content

## Related Commands

- `/design/good` - Generate high-quality images
- `/design/video` - Plan video content
- `/content/enhance` - Improve content with AI analysis
