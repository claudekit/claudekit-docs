---
title: "ckm:video"
description: "Create videos, scripts, and storyboards"
section: marketing
kit: marketing
category: skills
order: 49
---

# `ckm:video`

> Produce video scripts, storyboards, and AI-generated video clips for marketing campaigns.

## What This Skill Does

The Video skill covers the full pre-production and production workflow for marketing video. It writes video scripts (explainers, ads, testimonials, tutorials), creates shot-by-shot storyboards, and generates short video clips using AI video generation models.

For short-form content (15-60 second ads, social clips, product demos), the skill handles the entire production: script → storyboard → AI-generated video → review. For longer productions, it handles the scriptwriting and storyboarding phases, providing a production-ready brief for human video teams.

The skill integrates with MiniMax for AI video generation and Veo 3 (via the AI Multimodal skill) for 8-second cinematic clips with audio.

## Quick Start

```
/ckm:video --type explainer --product "Project Management SaaS" --duration 60s
```

## Key Features

- Script writing for: ads, explainers, testimonials, tutorials, social reels
- Shot-by-shot storyboard generation with visual descriptions
- AI video clip generation (MiniMax, Veo 3)
- Hook-first script structure for social media formats
- B-roll suggestions and visual direction notes
- Voiceover scripts with timing marks
- YouTube SEO optimization for video titles and descriptions

## Usage Examples

**30-second product ad script + storyboard**:
```
/ckm:video Write a 30-second ad script for our project management tool targeting startup founders.
Hook: address "always behind on projects" pain. CTA: "Start free trial". Include storyboard
```

**Explainer video script**:
```
/ckm:video Create a 90-second explainer video script.
Topic: How our AI analytics feature works. Audience: non-technical marketing managers.
Style: friendly, visual metaphors over jargon
```

**Generate AI video clip**:
```
/ckm:video generate --prompt "Product unboxing on a clean white desk, soft natural lighting,
smooth camera push-in, professional and modern feel" --duration 8s
```

## Related

- [AI Multimodal](/docs/marketing/skills/ai-multimodal) - Veo 3 video generation backend
- [ckm:youtube](/docs/marketing/skills/youtube) - Convert videos to blog and social content
- [ckm:social](/docs/marketing/skills/social) - Social-format video content
- [Media Processing](/docs/marketing/skills/media-processing) - Video editing and optimization
