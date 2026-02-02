---
title: "Remotion"
description: "Video creation trong React với animations, compositions và programmatic rendering"
section: engineer
kit: engineer
category: skills
order: 32
lang: vi
---

Best practices cho Remotion—tạo videos programmatically sử dụng React components, animations và compositions.

## Skill Này Làm Gì

Remotion skill cung cấp domain-specific knowledge để build videos trong React. Nó covers everything từ fundamental animations tới advanced patterns như 3D content, chart visualization, caption display và audio synchronization.

Hãy nghĩ về nó như Remotion expert của bạn ngồi bên cạnh—biết right way để sequence scenes, measure text cho dynamic layouts, trim videos, apply transitions và optimize cho rendering.

## Khi Nào Sử Dụng

Kích hoạt bất cứ khi nào làm việc với Remotion code để obtain best practices cho video creation, animation timing, asset management và composition patterns.

## Core Topics Covered

- **Animations**: Fundamental skills, timing, interpolation curves, spring animations
- **Compositions**: Defining compositions, stills, folders, dynamic metadata
- **Assets**: Importing images, videos, audio, fonts
- **Audio**: Importing, trimming, volume, speed, pitch control
- **Captions**: Displaying captions với TikTok-style pages, word highlighting, SRT imports
- **Charts**: Data visualization patterns
- **3D**: Three.js và React Three Fiber integration
- **Sequencing**: Delay, trim, limit duration của items
- **Transitions**: Scene transition patterns
- **Measuring**: Text dimensions, DOM nodes, fitting tới containers

## Sử Dụng

Kích hoạt khi đề cập Remotion, video creation, programmatic rendering hoặc React-based animations.

## Ví Dụ Prompts

- "Tạo Remotion composition với animated text overlays"
- "Thêm background music với volume fade-in vào video này"
- "Generate captions từ audio transcription và display chúng"
- "Build data visualization animation dùng Remotion charts"
- "Sequence multiple scenes với transitions trong Remotion"
- "Measure text và fit nó dynamically trong video frames"
- "Import Lottie animations vào Remotion composition"

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

## Cách Sử Dụng

Đọc individual rule files cho detailed explanations và code examples:
- `rules/animations.md` - Animation fundamentals
- `rules/audio.md` - Audio handling
- `rules/display-captions.md` - Caption display
- `rules/sequencing.md` - Scene sequencing
- `rules/transitions.md` - Scene transitions
- `rules/measuring-text.md` - Text measurement
- Và 30+ specialized patterns khác

## Điểm Khác Biệt

Remotion best practices từ real-world video generation projects. Những patterns này giải quyết common challenges như synchronizing animations với audio duration, fitting text dynamically và optimizing render times.

## Skills Liên Quan

- [AI Multimodal](/docs/engineer/skills/ai-multimodal) - Để transcribing audio generate captions
- [React Best Practices](/docs/engineer/skills) - Để optimizing React performance
