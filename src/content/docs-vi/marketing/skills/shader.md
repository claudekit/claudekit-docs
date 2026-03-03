---
lang: vi
title: "ckm:shader"
description: "Tạo shader GLSL cho đồ họa thủ tục — visual effects, generative art và WebGL animations."
section: marketing
kit: marketing
category: skills
order: 103
---

# ckm:shader

> Tạo visual effects ấn tượng với GLSL shaders cho WebGL, Three.js và Shadertoy.

## Kỹ Năng Này Làm Gì

Skill `ckm:shader` hỗ trợ viết và tối ưu GLSL shader code cho đồ họa thủ tục, generative art và visual effects trên web. Bao gồm vertex shaders, fragment shaders và compute shaders với patterns thông dụng.

## Bắt Đầu Nhanh

```
/ckm:shader
```

Hoặc mô tả effect cần tạo:

```
/ckm:shader Tạo animated gradient background với noise pattern cho hero section
```

## Các Loại Shader

### Fragment Shader — Visual Effects
```glsl
// Animated gradient với noise
uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;

    // Simplex noise animation
    float noise = sin(uv.x * 10.0 + u_time) * 0.5 + 0.5;

    vec3 color = mix(
        vec3(0.1, 0.3, 0.9),  // Màu xanh
        vec3(0.9, 0.2, 0.5),  // Màu hồng
        noise
    );

    gl_FragColor = vec4(color, 1.0);
}
```

### Vertex Shader — Geometry
```glsl
// Wave deformation
attribute vec3 position;
uniform float u_time;

void main() {
    vec3 pos = position;
    pos.y += sin(pos.x * 2.0 + u_time) * 0.1;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
```

## Tính Năng Chính

- **Pattern library**: Noise, gradient, SDF shapes, procedural textures
- **Animation**: Time-based uniforms cho dynamic effects
- **Optimization**: Tư vấn tối ưu performance GPU
- **Three.js integration**: ShaderMaterial và RawShaderMaterial
- **Shadertoy compatible**: Code chạy được trên shadertoy.com

## Ví Dụ Sử Dụng

**Marketing hero background:**
```
/ckm:shader Tạo shader cho animated particle field — phong cách tech/AI cho landing page
```

**Logo animation:**
```
/ckm:shader Shader reveal animation cho logo — hiệu ứng digital dissolve
```

**Data visualization:**
```
/ckm:shader Heatmap shader với smooth color interpolation cho analytics dashboard
```

## Liên Quan

- [ckm:threejs](/vi/docs/marketing/skills/threejs) - Tích hợp shaders vào Three.js scene
- [ckm:ai-artist](/vi/docs/marketing/skills/ai-artist) - Tạo assets cho visual projects
