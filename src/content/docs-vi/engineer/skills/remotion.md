---
title: "ck:remotion"
description: "Tạo video bằng React với hoạt ảnh, compositions và render theo chương trình"
section: engineer
kit: engineer
category: skills
order: 50
lang: vi
---

# Remotion

Các phương pháp tốt nhất cho Remotion—tạo video theo chương trình bằng React components, hoạt ảnh và compositions.

## Skill Này Làm Gì

Skill Remotion cung cấp kiến thức chuyên biệt để xây dựng video bằng React. Nó bao gồm mọi thứ từ hoạt ảnh cơ bản đến các pattern nâng cao như nội dung 3D, trực quan hóa biểu đồ, hiển thị phụ đề và đồng bộ hóa âm thanh.

Hãy nghĩ đây như một chuyên gia Remotion ngồi cạnh bạn—biết cách đúng để sắp xếp cảnh, đo văn bản cho bố cục động, cắt video, áp dụng chuyển cảnh và tối ưu hóa cho render.

## Khi Nào Sử Dụng

Kích hoạt bất cứ khi nào làm việc với code Remotion để có được các phương pháp tốt nhất cho việc tạo video, căn thời gian hoạt ảnh, quản lý asset và các pattern composition.

## Các Chủ Đề Cốt Lõi

- **Animations**: Kỹ năng cơ bản, căn thời gian, đường cong nội suy, hoạt ảnh spring
- **Compositions**: Định nghĩa compositions, stills, folders, dynamic metadata
- **Assets**: Import hình ảnh, video, âm thanh, fonts
- **Audio**: Import, cắt, âm lượng, tốc độ, kiểm soát pitch
- **Captions**: Hiển thị phụ đề theo phong cách TikTok, tô sáng từng từ, import SRT
- **Charts**: Các pattern trực quan hóa dữ liệu
- **3D**: Tích hợp Three.js và React Three Fiber
- **Sequencing**: Trì hoãn, cắt, giới hạn thời lượng các mục
- **Transitions**: Các pattern chuyển cảnh
- **Measuring**: Kích thước văn bản, DOM nodes, khớp với container

## Cách Dùng

Kích hoạt khi đề cập đến Remotion, tạo video, render theo chương trình hoặc hoạt ảnh dựa trên React.

## Ví Dụ Prompt

- "Tạo một Remotion composition với text overlay có hoạt ảnh"
- "Thêm nhạc nền với fade-in âm lượng vào video này"
- "Tạo phụ đề từ phiên âm audio và hiển thị chúng"
- "Xây dựng hoạt ảnh trực quan hóa dữ liệu bằng Remotion charts"
- "Sắp xếp nhiều cảnh với chuyển cảnh trong Remotion"
- "Đo văn bản và khớp động trong các khung video"
- "Import Lottie animations vào Remotion composition"

## Các Pattern Chính

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

Đọc các file quy tắc riêng lẻ để biết giải thích chi tiết và ví dụ code:
- `rules/animations.md` - Nguyên tắc cơ bản về hoạt ảnh
- `rules/audio.md` - Xử lý âm thanh
- `rules/display-captions.md` - Hiển thị phụ đề
- `rules/sequencing.md` - Sắp xếp cảnh
- `rules/transitions.md` - Chuyển cảnh
- `rules/measuring-text.md` - Đo văn bản
- Và 30+ pattern chuyên biệt khác

## Điều Gì Làm Skill Này Khác Biệt

Các phương pháp tốt nhất của Remotion từ các dự án tạo video thực tế. Những pattern này giải quyết các thách thức phổ biến như đồng bộ hoạt ảnh với thời lượng âm thanh, khớp văn bản động và tối ưu thời gian render.

## Skill Liên Quan

- [AI Multimodal](/vi/docs/engineer/skills/ai-multimodal) - Để phiên âm audio tạo phụ đề
- [React Best Practices](/vi/docs/engineer/skills/react-best-practices) - Để tối ưu hiệu suất React
