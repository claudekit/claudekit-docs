---
title: "/video - Video Production Commands"
description: "Create professional marketing videos with AI-powered script generation, visual storyboarding, and production-ready output using Gemini Veo 3.1 and Imagen 4"
section: marketing
category: commands
order: 4
published: true
---

# /video - Video Production Commands

End-to-end video production workflow powered by Google Gemini Veo 3.1 (video generation) and Imagen 4 (image generation). From script to storyboard to final video, create professional marketing content without traditional video production overhead.

## Commands

### /video:create - Complete Video Workflow

Generate complete marketing videos from concept to production-ready output.

**Syntax:**
```bash
/video:create "<video concept or brief>"
```

**What It Does:**
1. Generates compelling script optimized for video format
2. Creates detailed visual storyboard with scene descriptions
3. Generates video segments using Gemini Veo 3.1
4. Synthesizes voice-over and background music
5. Assembles final video with transitions and effects
6. Outputs production files to `/assets/videos/`

**Examples:**
```bash
# Product demo video
/video:create "30-second demo of our API rate limiting dashboard"

# Explainer video
/video:create "explain how our authentication flow works in 60 seconds"

# Social media ad
/video:create "Instagram Reel announcing our new pricing tiers"

# Tutorial series
/video:create "5-part video series on getting started with our platform"
```

**Output:**
```
/assets/videos/YYYY-MM-DD-slug/
├── script.md                  # Full script with timestamps
├── storyboard.md             # Visual scene breakdown
├── scenes/
│   ├── scene-01-intro.mp4
│   ├── scene-02-problem.mp4
│   ├── scene-03-solution.mp4
│   └── scene-04-cta.mp4
├── audio/
│   ├── voice-over.mp3
│   └── background-music.mp3
├── final/
│   ├── video-master.mp4      # Full resolution (1080p)
│   ├── video-social-16x9.mp4 # Social media (landscape)
│   ├── video-social-9x16.mp4 # Social media (portrait)
│   └── video-social-1x1.mp4  # Social media (square)
└── metadata.json             # Video specs, rendering settings
```

**Workflow Phases:**

**Phase 1: Script Generation** (2-3 min)
```
✓ Analyzing video concept...
✓ Researching product/feature details from codebase
✓ Generating hook, body, and call-to-action
✓ Optimizing for [30/60/90] second format
✓ Script saved: /assets/videos/2024-12-30-api-demo/script.md
```

**Phase 2: Storyboard Creation** (3-5 min)
```
✓ Breaking script into visual scenes (4 scenes)
✓ Generating scene descriptions and visual references
✓ Creating shot list with camera angles and transitions
✓ Storyboard saved: /assets/videos/2024-12-30-api-demo/storyboard.md
```

**Phase 3: Video Generation** (10-15 min)
```
✓ Generating Scene 1: Intro hook with product logo (Gemini Veo 3.1)
✓ Generating Scene 2: Problem visualization (Imagen 4 + Veo 3.1)
✓ Generating Scene 3: Dashboard demo walkthrough (Screen capture + Veo 3.1)
✓ Generating Scene 4: Call-to-action with signup URL
```

**Phase 4: Assembly & Export** (2-3 min)
```
✓ Synthesizing voice-over (ElevenLabs / Google TTS)
✓ Adding background music (royalty-free library)
✓ Applying transitions and effects
✓ Rendering 4 aspect ratios (16:9, 9:16, 1:1, master)
✓ Compressing for web delivery (H.265, target 5MB)
```

**Tips:**
- Keep videos 30-90 seconds for maximum engagement
- Reference existing product screenshots for visual consistency
- Review storyboard before video generation (saves rendering time)
- Use `--fast` flag for draft-quality previews

---

### /video:script - Script Generation

Generate video scripts optimized for marketing messages and platform requirements.

**Syntax:**
```bash
/video:script "<video concept>" [--duration=<seconds>] [--platform=<platform>]
```

**Platforms:**
- `youtube` - YouTube video (optimized for watch time)
- `instagram` - Instagram Reel/Story (15-60s, vertical)
- `tiktok` - TikTok video (15-60s, hook-first)
- `linkedin` - LinkedIn video (30-120s, professional tone)
- `twitter` - Twitter/X video (30-45s, captions required)
- `web` - Website embed (any duration, high-quality)

**What It Does:**
1. Analyzes target platform requirements and best practices
2. Structures script with proven formula (Hook → Value → CTA)
3. Optimizes pacing for viewer attention span
4. Includes on-screen text suggestions and visual cues
5. Generates alternative versions for A/B testing

**Examples:**
```bash
# YouTube explainer
/video:script "how our API handles rate limiting" --duration=90 --platform=youtube

# Instagram Reel
/video:script "3 tips for better API security" --duration=30 --platform=instagram

# LinkedIn product announcement
/video:script "introducing our enterprise plan features" --platform=linkedin
```

**Script Output Format:**

```markdown
# Video Script: API Rate Limiting Demo

**Platform**: YouTube
**Duration**: 90 seconds
**Format**: Explainer / Product Demo
**Tone**: Technical but accessible
**Target Audience**: Developers, DevOps engineers

---

## Hook (0:00-0:07, 7 seconds)

**Visual**: Dashboard showing API traffic spike, then smooth regulation
**Voice-Over**: "Your API just got 10,000 requests in 10 seconds. What happens next?"
**On-Screen Text**: "API Overload → Your Solution"

---

## Problem (0:08-0:25, 17 seconds)

**Visual**: Split screen showing crashed server vs. rate-limited server
**Voice-Over**: "Without rate limiting, your infrastructure crumbles. With it, your service stays online even during traffic spikes."
**B-Roll**: Quick cuts of error pages, loading spinners, frustrated users

---

## Solution (0:26-0:70, 44 seconds)

**Scene 1 (0:26-0:40)**: Dashboard walkthrough
**Voice-Over**: "Our rate limiting dashboard gives you real-time control. Set limits per user, per endpoint, or globally."
**On-Screen**: Cursor clicking through settings, graphs updating

**Scene 2 (0:41-0:55)**: Code example
**Voice-Over**: "Integrate in 3 lines of code. Configure in seconds."
**On-Screen**: Code snippet with syntax highlighting

**Scene 3 (0:56-0:70)**: Results visualization
**Voice-Over**: "See the impact instantly. Monitor throttled requests, adjust on the fly, and keep your API healthy."
**On-Screen**: Graphs showing controlled traffic flow

---

## Call-to-Action (0:71-0:90, 19 seconds)

**Visual**: Product logo, signup URL prominently displayed
**Voice-Over**: "Try it free for 14 days. No credit card required. Link in description."
**On-Screen Text**: "Start Free Trial → example.com/signup"
**Background Music**: Fade out, upbeat ending

---

## Production Notes

- **Pacing**: Fast cuts (4-6 second scenes) to maintain attention
- **Captions**: Required for sound-off viewing (80% watch muted)
- **Thumbnail**: Dashboard screenshot with "Rate Limiting" text overlay
- **SEO Title**: "API Rate Limiting Explained in 90 Seconds | Product Demo"
- **Description**: Include timestamps, links, and keyword-rich summary
```

**Script Formulas by Platform:**

| Platform | Formula | Key Elements |
|----------|---------|--------------|
| **YouTube** | Hook (5s) → Problem (15s) → Solution (60s) → CTA (10s) | Longer form, educational, SEO-optimized |
| **Instagram** | Hook (3s) → Value (20s) → CTA (7s) | Vertical, captions, trending audio |
| **TikTok** | Hook (2s) → Deliver (25s) → CTA (3s) | Ultra-fast pacing, entertainment > education |
| **LinkedIn** | Context (10s) → Insight (40s) → CTA (10s) | Professional tone, B2B focus |
| **Twitter/X** | Hook (3s) → Point (35s) → CTA (7s) | Captions required, news-jacking |

**Tips:**
- Start with a visual hook (not just text intro)
- Keep sentences short for voice-over clarity
- Include on-screen text for accessibility and muted viewing
- End with strong CTA (not weak "learn more")

---

### /video:storyboard - Visual Storyboarding

Create detailed visual storyboards from scripts for pre-production planning.

**Syntax:**
```bash
/video:storyboard <script-file>
```

**What It Does:**
1. Parses script into individual scenes
2. Generates visual descriptions for each scene
3. Creates reference images using Imagen 4
4. Specifies camera angles, transitions, and effects
5. Outputs interactive HTML storyboard preview

**Examples:**
```bash
# Storyboard from generated script
/video:storyboard /assets/videos/2024-12-30-api-demo/script.md

# Storyboard from custom script
/video:storyboard /projects/marketing/scripts/product-launch.md
```

**Storyboard Output:**

**Markdown Version** (`storyboard.md`):
```markdown
# Storyboard: API Rate Limiting Demo

## Scene 1: Opening Hook (0:00-0:07)

**Shot Type**: Extreme close-up → Wide shot
**Duration**: 7 seconds
**Camera Movement**: Zoom out dramatically

**Visual Description**:
Dashboard interface fills screen, showing API request counter rapidly increasing (10,000 in 10 seconds). Red warning indicators flash. Camera zooms out to reveal controlled graph with smooth regulation line.

**On-Screen Elements**:
- Request counter (animated numbers)
- Warning icon (pulsing red)
- Text overlay: "API Overload"
- Smooth transition to "Your Solution" text

**Color Palette**: Dark UI (#1a1a1a) with accent red (#FF4444) and green (#44FF44)

**Audio**:
- Voice-Over: "Your API just got 10,000 requests in 10 seconds. What happens next?"
- Sound FX: Rapid clicking, alert beep
- Background: Subtle tension-building music

**Technical Notes**:
- Screen resolution: 1920x1080
- Frame rate: 60fps for smooth counter animation
- Export reference image: scene-01-reference.png

---

## Scene 2: Problem Visualization (0:08-0:25)

**Shot Type**: Split screen
**Duration**: 17 seconds
**Camera Movement**: Static, cut between sides

**Visual Description**:
Left side: Server infrastructure diagram with red error indicators, crashed server icons, 503 error pages.
Right side: Same infrastructure but with green success indicators, rate limiter icon protecting servers.

**On-Screen Elements**:
- Split divider line (vertical)
- Left label: "Without Rate Limiting"
- Right label: "With Rate Limiting"
- Icons: Server racks, error symbols, checkmarks

**B-Roll Footage**:
- Quick cuts (2-second each): Loading spinner, error page, frustrated user, working dashboard

**Audio**:
- Voice-Over: "Without rate limiting, your infrastructure crumbles..."
- Sound FX: Crashing sound (left side), stable hum (right side)
- Background: Maintain tension, slight resolution on right side

**Technical Notes**:
- Generate images with Imagen 4: before/after comparison
- Use red/green color coding for clarity
- Export reference: scene-02-split-screen.png

[... Additional scenes 3-4 ...]
```

**HTML Interactive Preview** (`storyboard.html`):

Features:
- Timeline scrubber with scene thumbnails
- Click scene to see full visual reference image
- Audio preview buttons for voice-over
- Shot type and camera movement annotations
- Export to PDF for client review

**Reference Images Generated:**

Using Imagen 4 to create visual references for each scene:

```
/assets/videos/2024-12-30-api-demo/storyboard/
├── scene-01-opening-hook.png
├── scene-02-problem-viz.png
├── scene-03-solution-demo.png
├── scene-04-cta.png
└── storyboard-overview.png (all scenes in grid)
```

**Storyboard Templates:**

Pre-built templates for common video types:

- **Product Demo**: Hook → Features (3-4 scenes) → Pricing → CTA
- **Explainer**: Problem → Solution → How It Works → Benefits → CTA
- **Testimonial**: Customer intro → Before state → After state → Quote → CTA
- **Tutorial**: Intro → Step 1-3 → Recap → CTA
- **Social Proof**: Hook → Stats → Case studies → Social evidence → CTA

**Tips:**
- Review storyboard with stakeholders before expensive video generation
- Use reference images to align on visual style early
- Iterate on storyboard (fast) before video generation (slow)
- Export PDF storyboard for offline client review

---

## Technical Requirements

### Google Gemini API Setup

**Required APIs:**
- **Gemini Veo 3.1** - Video generation
- **Imagen 4** - Image generation for storyboards and B-roll
- **Google Text-to-Speech** - Voice-over synthesis (optional, can use ElevenLabs)

**Environment Variables:**
```bash
# Google Cloud Project
GOOGLE_CLOUD_PROJECT=your-project-id
GEMINI_API_KEY=your-gemini-api-key

# Video generation settings
GEMINI_VEO_MODEL=veo-3.1-preview
IMAGEN_MODEL=imagen-4

# Voice synthesis (optional)
ELEVENLABS_API_KEY=your-elevenlabs-key  # Alternative to Google TTS
```

**API Quotas:**

| Resource | Free Tier | Paid Tier | Notes |
|----------|-----------|-----------|-------|
| Gemini Veo 3.1 | 10 videos/month | Unlimited | Max 90s per video |
| Imagen 4 | 100 images/month | Unlimited | Storyboard references |
| Google TTS | 1M chars/month | Pay-as-you-go | Voice-over synthesis |

### Video Specifications

**Generated Video Formats:**

| Output | Resolution | Aspect Ratio | Bitrate | File Size (60s) |
|--------|-----------|--------------|---------|-----------------|
| Master | 1920x1080 | 16:9 | 8 Mbps | ~60 MB |
| Social (Landscape) | 1920x1080 | 16:9 | 4 Mbps | ~30 MB |
| Social (Portrait) | 1080x1920 | 9:16 | 4 Mbps | ~30 MB |
| Social (Square) | 1080x1080 | 1:1 | 3 Mbps | ~22 MB |
| Web Optimized | 1280x720 | 16:9 | 2 Mbps | ~15 MB |

**Video Codec Settings:**
- Codec: H.265 (HEVC) for better compression
- Frame Rate: 30fps (social) / 60fps (product demos)
- Audio: AAC 128kbps stereo
- Color Space: sRGB (web) / Rec.709 (broadcast)

---

## Related Skills

The `/video` commands activate these skills automatically:

- **[ai-multimodal](/docs/marketing/skills/ai-multimodal)** - Gemini Veo 3.1 and Imagen 4 integration
- **[media-processing](/docs/marketing/skills/media-processing)** - FFmpeg for video editing and transcoding
- **[copywriting](/docs/marketing/skills/copywriting)** - Script writing and storytelling
- **[content-marketing](/docs/marketing/skills/content-marketing)** - Video marketing strategy

## Related Agents

These agents collaborate during `/video` workflows:

- **[copywriter](/docs/marketing/agents/copywriter)** - Writes compelling video scripts
- **[ui-ux-designer](/docs/marketing/agents/ui-ux-designer)** - Creates visual storyboards

## Workflows

See complete workflow guide:

- [Video Production Workflow](/docs/marketing/workflows/dashboard-workflow) - End-to-end video creation process

## Troubleshooting

### Video Generation Failing

**Problem**: Gemini Veo 3.1 returns errors during video generation.

**Solutions**:
1. **Check API quota**: Verify you haven't exceeded free tier limits (10 videos/month)
2. **Validate API key**: `curl -H "Authorization: Bearer $GEMINI_API_KEY" https://generativelanguage.googleapis.com/v1/models`
3. **Reduce video duration**: Try 30s instead of 90s
4. **Simplify scene descriptions**: Remove complex visual effects or transitions
5. **Check content policy**: Ensure scenes don't violate Google's content policy

### Poor Video Quality

**Problem**: Generated videos look pixelated or have artifacts.

**Solutions**:
1. **Use master quality**: Don't use `--fast` flag for final renders
2. **Increase bitrate**: Add `--bitrate=10M` for higher quality
3. **Simplify visual complexity**: Reduce number of moving elements per scene
4. **Use reference images**: Provide visual examples in storyboard
5. **Iterate on prompts**: Refine scene descriptions for better AI interpretation

### Storyboard Images Not Generating

**Problem**: Imagen 4 fails to create reference images.

**Solutions**:
1. **Check quota**: Verify Imagen 4 API quota (100 images/month free tier)
2. **Validate project ID**: Ensure `GOOGLE_CLOUD_PROJECT` is correct
3. **Simplify descriptions**: Make scene descriptions more concise and specific
4. **Use examples**: Reference existing product screenshots instead of generating
5. **Manual upload**: Create reference images manually and add to `/storyboard/` directory
