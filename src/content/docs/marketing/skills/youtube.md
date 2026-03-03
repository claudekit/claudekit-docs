---
title: "ckm:youtube"
description: "Convert YouTube videos to blog posts and social content"
section: marketing
kit: marketing
category: skills
order: 53
---

# YouTube

> Transform YouTube videos into SEO-optimized blog posts, social media content, and newsletter material.

## What This Skill Does

The YouTube skill repurposes video content into multiple written formats without manual transcription or summarization work. It takes a YouTube URL, extracts the transcript, analyzes the key insights, and outputs a suite of content: a full blog post, a summary thread, LinkedIn and Twitter posts, newsletter paragraphs, and a pull-quote bank.

This is a core content multiplication strategy: one video → five to ten pieces of content, all SEO-optimized and platform-appropriate. For teams with a podcast, webinar series, or YouTube channel, this skill dramatically multiplies the reach of each video without proportional effort increase.

The skill also handles YouTube video optimization: title suggestions, description copy, chapter timestamps, and tag recommendations for new video uploads.

## Quick Start

```
/ckm:youtube --url https://youtube.com/watch?v=xyz --output blog,social,newsletter
```

## Key Features

- Automatic transcript extraction from YouTube URLs
- SEO blog post generation from video content (800-1500 words)
- Twitter/X thread and LinkedIn post repurposing
- Newsletter paragraph extraction with key insights
- Pull-quote bank for graphics and social cards
- Chapter timestamp generation for long videos
- YouTube video title, description, and tag optimization
- Batch processing for video series

## Usage Examples

**Convert video to blog post**:
```
/ckm:youtube --url https://youtube.com/watch?v=xyz --output blog
# Generates: SEO-optimized blog post with intro, main sections, conclusion, meta description
```

**Full content suite from one video**:
```
/ckm:youtube --url https://youtube.com/watch?v=xyz --output blog,twitter,linkedin,newsletter
# Generates all formats in one pass
```

**Optimize video before publishing**:
```
/ckm:youtube optimize --title "How to Build a Marketing Funnel" --transcript [paste transcript]
# Returns: 5 title variants, full description with keywords, 20 tags, chapter suggestions
```

## Related

- [AI Multimodal](/docs/marketing/skills/ai-multimodal) - Video analysis for non-YouTube videos
- [ckm:social](/docs/marketing/skills/social) - Social posts from repurposed content
- [ckm:write](/docs/marketing/skills/write) - Further expand video insights into long-form
- [ckm:seo](/docs/marketing/skills/seo) - Keyword research for video SEO optimization
