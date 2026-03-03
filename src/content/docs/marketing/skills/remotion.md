---
title: "ckm:remotion"
description: "Create programmatic videos in React with Remotion — animations, data-driven content, and automated video rendering pipelines."
section: marketing
kit: marketing
category: skills
order: 99
---

# `ckm:remotion`

> Build videos programmatically with React components, CSS animations, and Remotion's rendering pipeline for scalable video content.

## What This Skill Does

**The Challenge**: Creating consistent, scalable video content for marketing (ads, social clips, product demos) is expensive and slow with manual video editing. Data-driven videos (personalized, localized, or batch-generated) are impossible with traditional tools.

**The Solution**: Remotion skill enables video creation through React components — animations, transitions, data binding, and voice-over sync all in code. Renders to MP4/WebM via Remotion's CLI and Lambda rendering.

## Activation

**Implicit**: Activates when creating programmatic video content, animated graphics, or data-driven video pipelines.

**Explicit**: Activate via prompt:
```
Activate remotion skill to create an animated product demo video
```

## Capabilities

### 1. React Component Composition
Build video scenes as React components with frame-based animation.

```tsx
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';

export const HeroScene = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);

  return (
    <AbsoluteFill style={{ backgroundColor: '#0f0f0f' }}>
      <div style={{ opacity, fontSize: 72, color: 'white' }}>
        Your headline here
      </div>
    </AbsoluteFill>
  );
};
```

### 2. Animation Primitives
Frame-based interpolation for smooth animations.

**Core hooks**:
- `useCurrentFrame()` — Current frame number
- `interpolate(frame, input, output)` — Value interpolation
- `spring({ frame, fps })` — Physics-based spring animation
- `useVideoConfig()` — Video width, height, fps, duration

### 3. Composition and Timeline
Sequence multiple scenes with transitions.

```tsx
import { Composition, Sequence } from 'remotion';

export const VideoRoot = () => (
  <Composition
    id="MarketingVideo"
    component={VideoTemplate}
    durationInFrames={300}
    fps={30}
    width={1920}
    height={1080}
  />
);
```

### 4. Rendering Pipeline
Render videos via CLI or Lambda for batch production.

```bash
# Local render
npx remotion render VideoRoot MarketingVideo output.mp4

# Lambda render (scalable)
npx remotion lambda render VideoRoot MarketingVideo
```

## Prerequisites

- Node.js 18+ and React 18+
- `remotion` package installed
- For Lambda: AWS account with Remotion Lambda deployed

## Configuration

```bash
npm install remotion @remotion/cli
```

**Video specs** (set in Composition):
- `fps`: 30 (standard) or 60 (smooth motion)
- `width x height`: 1920x1080 (16:9), 1080x1080 (square), 1080x1920 (vertical)

## Best Practices

**1. Keep scenes under 10 seconds**
Shorter scenes are easier to compose and maintain. Use `<Sequence>` to chain them.

**2. Use spring for UI-like animations**
`spring()` produces physically realistic motion without hand-tuning keyframes.

**3. Externalize data from components**
Pass text, colors, and images as props to enable data-driven batch rendering.

## Common Use Cases

### Use Case 1: Animated Social Media Ad
**Scenario**: Create a 15-second product highlight video for Instagram Reels.

**Workflow**:
1. Design 3 scenes: Hook (3s) → Benefit (8s) → CTA (4s)
2. Build React component per scene with fade + slide animations
3. Sequence scenes with `<Sequence>` component
4. Export at 1080x1920 (vertical) at 30fps

**Output**: MP4 ready for social upload.

### Use Case 2: Data-Driven Personalized Video
**Scenario**: Personalized video reports for each customer showing their usage stats.

**Workflow**:
1. Build template with props: `{ customerName, metric1, metric2 }`
2. Fetch customer data from API
3. Batch render via Lambda with customer data as input
4. Deliver via email or customer portal

**Output**: Automated personalized video pipeline.

## Troubleshooting

**Issue**: Render crashes with memory error
**Solution**: Reduce concurrent renders. Use Lambda for large batches.

**Issue**: Font not rendering in video
**Solution**: Load fonts via `@remotion/google-fonts` or embed as data URI.

## Related Skills

- [Video](/docs/marketing/skills/video) - Video content strategy and editing
- [UI Styling](/docs/marketing/skills/ui-styling) - CSS animations and styling
- [Shader](/docs/marketing/skills/shader) - GLSL effects for video backgrounds

## Related Commands

- `/ckm:remotion` - Video creation workflows
- `/ckm:video` - Video content planning
