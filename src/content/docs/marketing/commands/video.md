---
title: "/video - Video Production Commands"
description: "Create professional marketing videos with AI-powered script generation, visual storyboards, and production-ready output using Gemini Veo 3.1 and Imagen 4"
section: marketing
category: commands
order: 4
published: true
---

# /video - Video Production Commands

End-to-end video production workflow powered by Google Gemini Veo 3.1 (video generation) and Imagen 4 (image generation). From script to storyboard to final video, create professional marketing content without traditional video production costs.

## Commands

### /video:create - Complete Video Workflow

Generate complete marketing videos from idea to production-ready output.

**Syntax:**
```bash
/video:create "<video idea or brief>"
```

**Features:**
1. Generate compelling scripts optimized for video format
2. Create detailed visual storyboards with scene descriptions
3. Generate video clips using Gemini Veo 3.1
4. Synthesize voiceover and background music
5. Assemble final video with transitions
6. Export production files to `/assets/videos/`

**Examples:**
```bash
# Product demo video
/video:create "30-second API rate limiting dashboard demo"

# Explainer video
/video:create "explain how authentication flow works in 60 seconds"

# Social media ad
/video:create "Instagram Reel announcing new pricing tiers"

# Tutorial series
/video:create "5-part video series on getting started with our platform"
```

**Output:**
```
/assets/videos/YYYY-MM-DD-slug/
├── script.md                  # Complete script with timestamps
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
│   ├── video-social-16x9.mp4 # Social (landscape)
│   ├── video-social-9x16.mp4 # Social (portrait)
│   └── video-social-1x1.mp4  # Social (square)
└── metadata.json             # Video specs, render settings
```

**Workflow Stages:**

**Stage 1: Script Generation** (2-3 minutes)
```
✓ Analyzing video concept...
✓ Researching product/feature details from codebase
✓ Creating hook, body, and call-to-action
✓ Optimizing for [30/60/90] second format
✓ Script saved: /assets/videos/2024-12-30-api-demo/script.md
```

**Stage 2: Storyboard Creation** (3-5 minutes)
```
✓ Breaking script into visual scenes (4 scenes)
✓ Generating scene descriptions and visual references
✓ Creating shot list with camera angles and transitions
✓ Storyboard saved: /assets/videos/2024-12-30-api-demo/storyboard.md
```

**Stage 3: Video Generation** (10-15 minutes)
```
✓ Generating Scene 1: Opening hook with product logo (Gemini Veo 3.1)
✓ Generating Scene 2: Problem visualization (Imagen 4 + Veo 3.1)
✓ Generating Scene 3: Dashboard demo walkthrough (Screen recording + Veo 3.1)
✓ Generating Scene 4: Call-to-action with signup URL
```

**Stage 4: Assembly & Export** (2-3 minutes)
```
✓ Synthesizing voiceover (ElevenLabs / Google TTS)
✓ Adding background music (royalty-free library)
✓ Applying transitions
✓ Rendering 4 aspect ratios (16:9, 9:16, 1:1, master)
✓ Compressing for web delivery (H.265, 5MB target)
```

**Tips:**
- Keep videos 30-90 seconds for maximum engagement
- Reference existing product screenshots for visual consistency
- Review storyboard before generating video (saves render time)
- Use `--fast` flag for draft-quality preview

---

### /video:script - Script Generation

Generate video scripts optimized for marketing messaging and platform requirements.

**Syntax:**
```bash
/video:script "<video idea>" [--duration=<seconds>] [--platform=<platform>]
```

**Platforms:**
- `youtube` - YouTube videos (optimized for watch time)
- `instagram` - Instagram Reel/Story (15-60s, vertical)
- `tiktok` - TikTok videos (15-60s, hook-first)
- `linkedin` - LinkedIn videos (30-120s, professional tone)
- `twitter` - Twitter/X videos (30-45s, captions required)
- `web` - Website embeds (any duration, high quality)

**Features:**
1. Analyze target platform requirements and best practices
2. Structure script with proven formulas (Hook → Value → CTA)
3. Optimize pacing for viewer attention span
4. Include on-screen text suggestions and visual cues
5. Generate alternative versions for A/B testing

**Examples:**
```bash
# YouTube explainer
/video:script "how our API handles rate limiting" --duration=90 --platform=youtube

# Instagram Reel
/video:script "3 tips for better API security" --duration=30 --platform=instagram

# LinkedIn product announcement
/video:script "introducing enterprise tier features" --platform=linkedin
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

**Visuals**: Dashboard showing API traffic spike, then smooth throttling
**Voiceover**: "Your API just received 10,000 requests in 10 seconds. What happens next?"
**On-Screen Text**: "API Overload → Your Solution"

---

## Problem (0:08-0:25, 17 seconds)

**Visuals**: Split-screen showing crashed server vs. rate-limited server
**Voiceover**: "Without rate limiting, your infrastructure crashes. With it, your service stays online even during traffic spikes."
**B-Roll**: Quick cuts of error pages, loading spinners, frustrated users

---

## Solution (0:26-0:70, 44 seconds)

**Scene 1 (0:26-0:40)**: Dashboard walkthrough
**Voiceover**: "Our rate limiting dashboard gives you real-time control. Set limits per user, per endpoint, or globally."
**On-Screen**: Cursor clicking through settings, graphs updating

**Scene 2 (0:41-0:55)**: Code example
**Voiceover**: "Integrate in 3 lines of code. Configure in seconds."
**On-Screen**: Code snippet with syntax highlighting

**Scene 3 (0:56-0:70)**: Results visualization
**Voiceover**: "See the impact instantly. Monitor throttled requests, adjust on the fly, and keep your API healthy."
**On-Screen**: Graph showing controlled traffic flow

---

## Call-to-Action (0:71-0:90, 19 seconds)

**Visuals**: Product logo, signup URL displayed prominently
**Voiceover**: "Try it free for 14 days. No credit card required. Link in description."
**On-Screen Text**: "Start Free Trial → example.com/signup"
**Background Music**: Fade out, upbeat ending

---

## Production Notes

- **Pacing**: Fast cuts (4-6 second scenes) to maintain attention
- **Captions**: Required for sound-off viewing (80% watch muted)
- **Thumbnail**: Dashboard screenshot with "Rate Limiting" text overlay
- **SEO Title**: "API Rate Limiting Explained In 90 Seconds | Product Demo"
- **Description**: Include timestamps, links, and keyword-rich summary
```

**Script Formulas by Platform:**

| Platform | Formula | Key Elements |
|----------|---------|--------------|
| **YouTube** | Hook (5s) → Problem (15s) → Solution (60s) → CTA (10s) | Longer, educational, SEO-optimized |
| **Instagram** | Hook (3s) → Value (20s) → CTA (7s) | Vertical, captions, trending audio |
| **TikTok** | Hook (2s) → Deliver (25s) → CTA (3s) | Extremely fast pace, entertainment > education |
| **LinkedIn** | Context (10s) → Insight (40s) → CTA (10s) | Professional tone, B2B focus |
| **Twitter/X** | Hook (3s) → Point (35s) → CTA (7s) | Captions required, news-jacking |

**Tips:**
- Start with visual hook (not just text intro)
- Keep sentences short for clear voiceover
- Include on-screen text for accessibility and sound-off viewing
- End with strong CTA (not weak "learn more")

---

### /video:storyboard - Visual Storyboard

Create detailed visual storyboards from scripts for pre-production planning.

**Syntax:**
```bash
/video:storyboard <script-file>
```

**Features:**
1. Analyze script into individual scenes
2. Generate visual descriptions for each scene
3. Create reference images using Imagen 4
4. Specify camera angles, transitions, and effects
5. Export interactive HTML storyboard preview

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

**Shot Type**: Extreme close-up → Wide angle
**Duration**: 7 seconds
**Camera Movement**: Dramatic zoom out

**Visual Description**:
Dashboard UI fills screen, showing API request counter rapidly incrementing (10,000 in 10 seconds). Red warning indicators flash. Camera zooms out to reveal full graph with smooth throttling curve.

**On-Screen Elements**:
- Request counter (dynamic numbers)
- Warning icons (red flashing)
- Text overlay: "API Overload"
- Smooth transition to text "Your Solution"

**Color Palette**: Dark UI (#1a1a1a) with red accents (#FF4444) and green (#44FF44)

**Audio**:
- Voiceover: "Your API just received 10,000 requests in 10 seconds. What happens next?"
- Sound effects: Rapid clicking, warning beeps
- Background: Subtle tension-building music

**Technical Notes**:
- Screen resolution: 1920x1080
- Frame rate: 60fps for smooth counter animation
- Export reference image: scene-01-reference.png

---

## Scene 2: Problem Visualization (0:08-0:25)

**Shot Type**: Split-screen
**Duration**: 17 seconds
**Camera Movement**: Static, cuts between sides

**Visual Description**:
Left side: Server infrastructure diagram with red error indicators, crashed server icons, 503 error pages.
Right side: Same infrastructure but with green success indicators, rate limiter icon protecting servers.

**On-Screen Elements**:
- Dividing line (vertical)
- Left label: "Without Rate Limiting"
- Right label: "With Rate Limiting"
- Icons: Server racks, error symbols, checkmarks

**B-Roll Footage**:
- Quick cuts (2 seconds each): Loading spinner, error page, frustrated users, working dashboard

**Audio**:
- Voiceover: "Without rate limiting, your infrastructure crashes..."
- Sound effects: Crash sound (left), stabilizing hum (right)
- Background: Maintain tension, slight resolve on right

**Technical Notes**:
- Generate images with Imagen 4: before/after comparison
- Use red/green color coding for clarity
- Export reference: scene-02-split-screen.png

[... Scenes 3-4 additional ...]
```

**Interactive HTML Preview** (`storyboard.html`):

Features:
- Timeline scrubber with scene thumbnails
- Click scenes to view full reference images
- Audio preview buttons for voiceover
- Shot type and camera movement annotations
- Export to PDF for client review

**Generated Reference Images:**

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
- **Testimonial**: Customer intro → Before → After → Quote → CTA
- **Tutorial**: Introduction → Steps 1-3 → Summary → CTA
- **Social Proof**: Hook → Stats → Case study → Social proof → CTA

**Tips:**
- Review storyboard with stakeholders before expensive video generation
- Use reference images to align on visual style early
- Iterate on storyboard (fast) before generating video (slow)
- Export storyboard PDF for offline client review

---

## Technical Requirements

### Google Gemini API Setup

**Required APIs:**
- **Gemini Veo 3.1** - Video generation
- **Imagen 4** - Image generation for storyboards and B-roll
- **Google Text-to-Speech** - Voiceover synthesis (optional, can use ElevenLabs)

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
| Google TTS | 1M characters/month | Pay-as-you-go | Voiceover synthesis |

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

The `/video` commands automatically activate these skills:

- **[ai-multimodal](/docs/marketing/skills/ai-multimodal)** - Gemini Veo 3.1 and Imagen 4 integration
- **[media-processing](/docs/marketing/skills/media-processing)** - FFmpeg for video editing and transcoding
- **[copywriting](/docs/marketing/skills/copywriting)** - Script writing and storytelling
- **[content-marketing](/docs/marketing/skills/content-marketing)** - Video marketing strategy

## Related Agents

These agents collaborate in the `/video` workflow:

- **[copywriter](/docs/marketing/agents/copywriter)** - Write compelling video scripts
- **[ui-ux-designer](/docs/marketing/agents/ui-ux-designer)** - Create visual storyboards

## Workflows

See full workflow guides:

- [Video Production Workflow](/docs/marketing/workflows/dashboard-workflow) - End-to-end video creation

## Troubleshooting

### Video Generation Fails

**Issue**: Gemini Veo 3.1 returns error during video generation.

**Solution**:
1. **Check API quota**: Verify you haven't exceeded free tier limit (10 videos/month)
2. **Validate API key**: `curl -H "Authorization: Bearer $GEMINI_API_KEY" https://generativelanguage.googleapis.com/v1/models`
3. **Reduce video duration**: Try 30s instead of 90s
4. **Simplify scene descriptions**: Remove complex effects or transitions
5. **Check content policy**: Ensure scenes don't violate Google's content policies

### Poor Video Quality

**Issue**: Generated video looks pixelated or has artifacts.

**Solution**:
1. **Use master quality**: Don't use `--fast` flag for final renders
2. **Increase bitrate**: Add `--bitrate=10M` for higher quality
3. **Simplify visual complexity**: Reduce number of moving elements per scene
4. **Use reference images**: Provide visual examples in storyboard
5. **Iterate on prompts**: Refine scene descriptions for better AI understanding

### Storyboard Images Not Generated

**Issue**: Imagen 4 fails to generate reference images.

**Solution**:
1. **Check quota**: Verify Imagen 4 API quota (100 images/month free tier)
2. **Validate project ID**: Ensure `GOOGLE_CLOUD_PROJECT` is correct
3. **Simplify descriptions**: Make scene descriptions shorter and more specific
4. **Use examples**: Reference existing product screenshots instead of generating
5. **Manual upload**: Create reference images manually and add to `/storyboard/` folder
