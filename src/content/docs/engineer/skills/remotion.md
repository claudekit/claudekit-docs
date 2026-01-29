---
title: "Remotion"
description: "Video creation in React with animations, compositions, and programmatic rendering"
section: engineer
kit: engineer
category: skills
order: 32
---

Best practices for Remotion—create videos programmatically using React components, animations, and compositions.

## What This Skill Does

The Remotion skill provides domain-specific knowledge for building videos in React. It covers everything from fundamental animations to advanced patterns like 3D content, chart visualization, caption display, and audio synchronization.

Think of it as your Remotion expert sitting next to you—knowing the right way to sequence scenes, measure text for dynamic layouts, trim videos, apply transitions, and optimize for rendering.

## When to Use

Activate whenever working with Remotion code to obtain best practices for video creation, animation timing, asset management, and composition patterns.

## Core Topics Covered

- **Animations**: Fundamental skills, timing, interpolation curves, spring animations
- **Compositions**: Defining compositions, stills, folders, dynamic metadata
- **Assets**: Importing images, videos, audio, fonts
- **Audio**: Importing, trimming, volume, speed, pitch control
- **Captions**: Displaying captions with TikTok-style pages, word highlighting, SRT imports
- **Charts**: Data visualization patterns
- **3D**: Three.js and React Three Fiber integration
- **Sequencing**: Delay, trim, limit duration of items
- **Transitions**: Scene transition patterns
- **Measuring**: Text dimensions, DOM nodes, fitting to containers

## Usage

Activate when mentioning Remotion, video creation, programmatic rendering, or React-based animations.

## Example Prompts

- "Create a Remotion composition with animated text overlays"
- "Add background music with volume fade-in to this video"
- "Generate captions from audio transcription and display them"
- "Build a data visualization animation using Remotion charts"
- "Sequence multiple scenes with transitions in Remotion"
- "Measure text and fit it dynamically in video frames"
- "Import Lottie animations into Remotion composition"

## Key Patterns

### Sequencing
```typescript
<Sequence from={30} durationInFrames={90}>
  <MyComponent />
</Sequence>
```

### Trimming
```typescript
<Audio src={audioFile} startFrom={150} endAt={450} />
```

### Animations
```typescript
const opacity = interpolate(frame, [0, 30], [0, 1], {
  extrapolateLeft: 'clamp',
  extrapolateRight: 'clamp',
});
```

### Dynamic Metadata
```typescript
export const calculateMetadata = ({ props }) => {
  return {
    durationInFrames: props.duration * fps,
    fps: 30,
  };
};
```

## How to Use

Read individual rule files for detailed explanations and code examples:
- `rules/animations.md` - Animation fundamentals
- `rules/audio.md` - Audio handling
- `rules/display-captions.md` - Caption display
- `rules/sequencing.md` - Scene sequencing
- `rules/transitions.md` - Scene transitions
- `rules/measuring-text.md` - Text measurement
- And 30+ more specialized patterns

## What Makes This Different

Remotion best practices from real-world video generation projects. These patterns solve common challenges like synchronizing animations with audio duration, fitting text dynamically, and optimizing render times.

## Related Skills

- [AI Multimodal](/docs/engineer/skills/ai-multimodal) - For transcribing audio to generate captions
- [React Best Practices](/docs/engineer/skills/react-best-practices) - For optimizing React performance
