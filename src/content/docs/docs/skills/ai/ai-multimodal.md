---
title: AI Multimodal Skill
description: Process and generate multimedia content using Google Gemini API for audio, images, videos, PDFs, and AI-generated visuals
section: docs
category: skills/ai
order: 3
published: true
---

# AI Multimodal Skill

Process audio, images, videos, documents, and generate images/videos using Google Gemini's multimodal API. Supports analysis up to 9.5 hours of audio, 6 hours of video, and 1000-page PDFs with context windows up to 2M tokens.

## When to Use

- Analyzing audio files (transcription, summarization, music analysis)
- Understanding images (captioning, OCR, object detection, design extraction)
- Processing videos (scene detection, Q&A, temporal analysis, YouTube URLs)
- Extracting from documents (PDF tables, forms, charts, diagrams)
- Generating images (text-to-image with Imagen 4)
- Generating videos (text-to-video with Veo 3, 8-second clips with audio)

## Setup

```bash
export GEMINI_API_KEY="your-key"  # Get from https://aistudio.google.com/apikey
pip install google-genai python-dotenv pillow
```

Verify setup:
```bash
python scripts/check_setup.py
```

## Quick Start

### Analyze Media

```bash
# Using Gemini CLI (if available)
echo "Describe this image" | gemini -y -m gemini-2.5-flash

# Using scripts
python scripts/gemini_batch_process.py --files image.png --task analyze
python scripts/gemini_batch_process.py --files audio.mp3 --task transcribe
python scripts/gemini_batch_process.py --files document.pdf --task extract
```

### Generate Content

```bash
# Generate image with Imagen 4
python scripts/gemini_batch_process.py --task generate --prompt "A futuristic city at sunset"

# Generate video with Veo 3
python scripts/gemini_batch_process.py --task generate-video --prompt "Ocean waves at golden hour"
```

### Stdin Support

```bash
# Pipe files directly (auto-detects PNG/JPG/PDF/WAV/MP3)
cat image.png | python scripts/gemini_batch_process.py --task analyze --prompt "Describe this"
```

## Models

| Task | Model | Notes |
|------|-------|-------|
| Analysis | `gemini-2.5-flash` | Recommended for speed |
| Analysis | `gemini-2.5-pro` | Advanced reasoning |
| Image Gen | `imagen-4.0-generate-001` | Standard quality |
| Image Gen | `imagen-4.0-ultra-generate-001` | Best quality |
| Image Gen | `imagen-4.0-fast-generate-001` | Fastest |
| Video Gen | `veo-3.1-generate-preview` | 8s clips with audio |

## Scripts

| Script | Purpose |
|--------|---------|
| `gemini_batch_process.py` | CLI orchestrator for transcribe/analyze/extract/generate tasks |
| `media_optimizer.py` | Compress/resize media to stay within Gemini limits |
| `document_converter.py` | Convert PDFs/images to markdown |
| `check_setup.py` | Verify API key and dependencies |

## Limits

| Format | Limits |
|--------|--------|
| Audio | WAV/MP3/AAC, up to 9.5 hours |
| Images | PNG/JPEG/WEBP, up to 3600 images |
| Video | MP4/MOV, up to 6 hours |
| PDF | Up to 1000 pages |
| Size | 20MB inline, 2GB via File API |

## Use Cases

### Design Extraction

Extract design guidelines from screenshots:

```bash
python scripts/gemini_batch_process.py \
  --files screenshot.png \
  --task analyze \
  --prompt "Extract: colors (hex), typography, spacing, layout patterns"
```

### Video Transcription

```bash
python scripts/gemini_batch_process.py \
  --files meeting.mp4 \
  --task transcribe \
  --prompt "Include speaker labels and timestamps"
```

### Batch Processing

```bash
python scripts/gemini_batch_process.py \
  --files images/*.png \
  --task analyze \
  --prompt "Describe each image"
```

## Integration with ClaudeKit

The ai-multimodal skill integrates with:

- **frontend-design**: Extract design guidelines from screenshots before implementation
- **media-processing**: Optimize media files before Gemini analysis
- **document-skills**: Convert extracted content to structured formats

## Best Practices

1. **Use appropriate models**: `gemini-2.5-flash` for speed, `gemini-2.5-pro` for complex analysis
2. **Optimize media first**: Use `media_optimizer.py` for large files
3. **Batch when possible**: Process multiple files in one call
4. **Structure prompts**: Be specific about output format (JSON, markdown, etc.)

## Resources

- [Gemini API Docs](https://ai.google.dev/gemini-api/docs/)
- [Pricing](https://ai.google.dev/pricing)
- [Google AI Studio](https://aistudio.google.com/)

---

## Key Takeaway

 The AI Multimodal skill provides comprehensive multimedia processing through Google Gemini, handling everything from audio transcription to AI-generated images and videos with support for massive context windows.
