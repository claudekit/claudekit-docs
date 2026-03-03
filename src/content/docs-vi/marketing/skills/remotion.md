---
lang: vi
title: "ckm:remotion"
description: "Tạo video lập trình trong React với Remotion — animation, motion graphics và video tự động hóa."
section: marketing
kit: marketing
category: skills
order: 99
---

# Remotion

> Tạo video chuyên nghiệp bằng React code — từ explainer video đến social media content tự động hóa.

## Kỹ Năng Này Làm Gì

Skill `ckm:remotion` hướng dẫn xây dựng video bằng Remotion — framework cho phép viết video như viết React components. Phù hợp cho marketing video, product demo, data visualization animation và nội dung social media tạo tự động.

## Bắt Đầu Nhanh

```
/ckm:remotion
```

Hoặc mô tả video cần tạo:

```
/ckm:remotion Tạo animated explainer video cho tính năng mới — 30 giây, phong cách minimal
```

## Cài Đặt

```bash
npx create-video@latest
cd my-video
npm start  # Mở Remotion Studio tại localhost:3000
```

## Tính Năng Chính

- **React components**: Mỗi scene là một React component
- **Timeline control**: `useCurrentFrame()` và `interpolate()` cho animation mượt
- **Asset management**: Hỗ trợ images, fonts, audio, video clips
- **Rendering**: Xuất MP4, WebM, GIF với quality tùy chỉnh
- **Automation**: Render video theo batch với dữ liệu động

## Ví Dụ Component

```tsx
import { useCurrentFrame, interpolate, spring } from 'remotion';

export const TitleCard = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);
  const scale = spring({ frame, fps: 30, config: { damping: 10 } });

  return (
    <div style={{ opacity, transform: `scale(${scale})` }}>
      <h1>Tiêu đề Marketing</h1>
    </div>
  );
};
```

## Ví Dụ Sử Dụng

**Tạo product demo:**
```
/ckm:remotion Tạo 60-second product demo video với screen recording và text overlays
```

**Social media content:**
```
/ckm:remotion Tạo template Instagram Reels 9:16 cho series "Mẹo marketing hàng tuần"
```

**Data visualization:**
```
/ckm:remotion Animate bar chart hiển thị tăng trưởng MRR theo tháng
```

## Xuất Video

```bash
# Render một composition
npx remotion render MyComposition out/video.mp4

# Render với props tùy chỉnh
npx remotion render MyComposition out/video.mp4 --props='{"title":"Q1 Review"}'
```

## Liên Quan

- [ckm:video](/vi/docs/marketing/skills/video) - Xử lý và tối ưu video marketing
- [ckm:ai-artist](/vi/docs/marketing/skills/ai-artist) - Tạo assets cho video
- [ckm:content-marketing](/vi/docs/marketing/skills/content-marketing) - Chiến lược nội dung video
