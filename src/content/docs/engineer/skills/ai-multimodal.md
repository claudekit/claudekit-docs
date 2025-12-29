---
title: AI Multimodal
description: Process audio, images, videos, and documents using Google Gemini API with superior vision capabilities for transcription, analysis, and content generation
section: engineer
kit: engineer
category: skills
order: 15
---

You know that feeling when you need to analyze a 2-hour podcast, extract text from a complex PDF, or generate images that actually match your vision? That's where AI Multimodal comes in.

## What This Skill Does

The AI Multimodal skill gives you access to Google Gemini's powerful multimodal capabilities for processing and generating multimedia content. While Claude has vision capabilities, Gemini excels at certain tasks like analyzing images with better object detection, processing long-form audio with timestamps, and generating images from text prompts.

This skill acts as your bridge to Gemini's API, handling everything from audio transcription with speaker detection to generating videos with Veo 3. You get better image analysis than Claude's default vision capabilities, support for processing videos up to 6 hours long, and the ability to generate images with Imagen 4 and videos with Veo 3.

Think of it as your multimedia Swiss Army knife: when you need to transcribe a 90-minute interview with precise timestamps, analyze multiple screenshots for design patterns, extract structured data from complex PDFs, or generate marketing visuals, this skill has you covered.

## Prerequisites

Before using this skill, you'll need:

- **Gemini API Key**: Get yours from [Google AI Studio](https://aistudio.google.com/apikey)
- **Python 3.8+**: The skill uses Python scripts
- **Python Dependencies**: `google-genai`, `python-dotenv`, `pillow`

## Installation

Set up your environment with these commands:

```bash
# Set your API key
export GEMINI_API_KEY="your-key-here"

# Install required Python packages
pip install google-genai python-dotenv pillow

# Verify setup
python scripts/check_setup.py
```

For high-volume usage, you can configure multiple API keys for automatic rotation:

```bash
# Add additional keys for rotation
export GEMINI_API_KEY_2="your-second-key"
export GEMINI_API_KEY_3="your-third-key"
```

The skill automatically rotates keys when hitting rate limits, with a 60-second cooldown per key.

## Core Capabilities

### Audio Processing

Transcribe audio files up to 9.5 hours with timestamps, speaker detection, and content analysis:

```bash
# Basic transcription
python scripts/gemini_batch_process.py --files interview.mp3 --task transcribe

# Analyze music or non-speech audio
python scripts/gemini_batch_process.py --files song.wav --task analyze
```

**Important**: For audio longer than 15 minutes, the transcript may get truncated due to output token limits. Split long audio into 15-minute chunks for complete transcripts.

Transcripts are formatted in Markdown with metadata like duration, file size, topics covered, and timestamps:

```
[00:01:23 -> 00:01:45] Speaker discusses the importance of API design
[00:01:46 -> 00:02:12] Question from audience about rate limiting
```

### Image Understanding

Analyze images with better capabilities than Claude's default vision:

```bash
# Analyze a screenshot
python scripts/gemini_batch_process.py --files screenshot.png --task analyze --prompt "Extract design system colors and typography"

# Process multiple images
python scripts/gemini_batch_process.py --files img1.jpg img2.jpg --task analyze
```

If you have the `gemini` CLI installed, there's a faster shortcut:

```bash
cat image.png | gemini -y -m gemini-2.5-flash
```

Gemini excels at object detection, OCR from screenshots, design extraction, visual Q&A, and handling multiple images for comparison.

### Video Analysis

Process videos up to 6 hours long with scene detection and temporal understanding:

```bash
# Analyze video content
python scripts/gemini_batch_process.py --files demo.mp4 --task analyze --prompt "Identify key moments and transitions"

# YouTube URLs supported
python scripts/gemini_batch_process.py --files "https://youtube.com/watch?v=xyz" --task analyze
```

For videos longer than 15 minutes, extract audio first and transcribe in chunks:

```bash
# Extract audio with FFmpeg
ffmpeg -i long-video.mp4 -vn -c:a copy audio.m4a

# Transcribe audio in segments
python scripts/gemini_batch_process.py --files audio.m4a --task transcribe
```

### Document Extraction

Extract structured data from PDFs, forms, charts, and multi-page documents:

```bash
# Convert PDF to markdown
python scripts/document_converter.py --files report.pdf

# Process multiple documents
python scripts/document_converter.py --files doc1.pdf doc2.pdf --output docs/assets
```

### Image Generation

Generate images from text prompts using Imagen 4:

```bash
# Standard quality
python scripts/gemini_batch_process.py --task generate --prompt "Modern minimalist logo for a tech startup"

# High quality (ultra model)
python scripts/gemini_batch_process.py --task generate --prompt "Photorealistic sunset over mountains" --model imagen-4.0-ultra-generate-001

# Fast generation
python scripts/gemini_batch_process.py --task generate --prompt "Simple icon design" --model imagen-4.0-fast-generate-001
```

### Video Generation

Create 8-second video clips with native audio using Veo 3:

```bash
# Text-to-video
python scripts/gemini_batch_process.py --task generate-video --prompt "A cat playing piano in a jazz club, cinematic lighting"
```

## Real-World Examples

### Transcribe a Podcast Episode

You have a 45-minute podcast and need a complete transcript with timestamps:

```bash
# Split into 15-minute chunks first
ffmpeg -i podcast.mp3 -f segment -segment_time 900 -c copy chunk_%03d.mp3

# Transcribe each chunk
python scripts/gemini_batch_process.py --files chunk_000.mp3 --task transcribe > transcript_part1.md
python scripts/gemini_batch_process.py --files chunk_001.mp3 --task transcribe > transcript_part2.md
python scripts/gemini_batch_process.py --files chunk_002.mp3 --task transcribe > transcript_part3.md

# Combine transcripts
cat transcript_part*.md > full_transcript.md
```

### Extract Design Guidelines from Screenshots

You need to replicate a design from screenshots:

```bash
# Analyze the screenshot for design system
python scripts/gemini_batch_process.py --files design.png --task analyze --prompt "Extract all colors as hex codes, typography (fonts, sizes, weights), spacing patterns, and layout structure"
```

### Process Multiple Product Images

You have 50 product photos that need background removal and analysis:

```bash
# First, optimize images to meet size limits
python scripts/media_optimizer.py --directory ./products --output ./optimized

# Batch analyze
python scripts/gemini_batch_process.py --files ./optimized/*.jpg --task analyze --prompt "Describe product, extract visible text, identify colors"
```

## Best Practices

**Choose the Right Model**: Use `gemini-2.5-flash` for most tasks (fast, cost-effective). Use `gemini-2.5-pro` for complex analysis requiring deeper reasoning.

**Respect File Size Limits**: Files under 20MB can be sent inline. Larger files (up to 2GB) use the File API automatically. Use `media_optimizer.py` to compress files before processing.

**Handle Long Content**: For audio/video over 15 minutes, split into chunks to avoid transcript truncation. The skill includes helpers for this.

**Leverage Stdin Support**: You can pipe files directly to the batch processor instead of using the `--files` flag, making it easier to integrate into workflows.

## Available Scripts

The skill provides several specialized scripts:

- `gemini_batch_process.py` - Main CLI for all tasks (analyze, transcribe, extract, generate)
- `media_optimizer.py` - Compress and resize media to meet API limits
- `document_converter.py` - Convert PDFs and Office docs to markdown
- `check_setup.py` - Verify API key and dependencies

Run any script with `--help` to see all available options.

## Supported Formats

**Audio**: WAV, MP3, AAC (up to 9.5 hours)
**Images**: PNG, JPEG, WEBP (up to 3,600px)
**Video**: MP4, MOV (up to 6 hours)
**Documents**: PDF (up to 1,000 pages)

File size limits: 20MB inline, 2GB via File API

## Related Skills and Commands

When working with multimedia content, combine this skill with:

- [Media Processing](/docs/engineer/skills/media-processing) - Use FFmpeg and ImageMagick to prepare media files before processing
- [Frontend Design](/docs/engineer/skills/frontend-design) - Extract design guidelines from screenshots, then implement them
- [MCP Builder](/docs/engineer/skills/mcp-builder) - Build MCP servers that expose Gemini capabilities as tools

## Additional Resources

For detailed guidance on specific capabilities, the skill includes comprehensive reference documentation:

- `references/audio-processing.md` - Audio transcription, speaker detection, formats
- `references/vision-understanding.md` - Image analysis, OCR, object detection
- `references/video-analysis.md` - Video processing, scene detection, temporal Q&A
- `references/image-generation.md` - Imagen 4 prompting, styles, aspect ratios
- `references/video-generation.md` - Veo 3 text-to-video, camera control, timing
- `references/music-generation.md` - Lyria API for background music generation

These references live in the Engineer Kit at `../claudekit-engineer/.claude/skills/ai-multimodal/references/`.
