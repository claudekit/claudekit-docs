---
title: "ck:threejs"
description: Xây dựng trải nghiệm 3D web với Three.js - thư viện WebGL/WebGPU cho scenes, cameras, materials, animations và advanced rendering
section: engineer
kit: engineer
category: skills/frontend
order: 50
published: true
lang: vi
---

# Three.js Skill

Xây dựng trải nghiệm 3D web immersive với WebGL/WebGPU. Scenes, animations và đồ họa tương tác sẵn sàng cho production.

## Chỉ Cần Hỏi Claude...

```
"Create an interactive 3D product configurator with orbit controls and material swapping"
```

```
"Build a particle system with 10,000 stars and camera movement through space"
```

```
"Design a GLTF model viewer with post-processing bloom and realistic lighting"
```

```
"Create an animated 3D globe showing data points with raycasting interaction"
```

```
"Build a physics-based scene with falling objects and collision detection"
```

```
"Design a shader-based water surface with reflections and animated waves"
```

```
"Create a VR-ready scene with hand tracking and teleportation controls"
```

## Bạn Sẽ Nhận Được

- **3D scenes hoạt động** với rendering tối ưu, cameras và thiết lập ánh sáng
- **Trải nghiệm tương tác** dùng raycasting, controls và animations
- **Code tối ưu hiệu suất** với instancing, LOD và frustum culling
- **Hiệu ứng nâng cao** như post-processing, custom shaders và tích hợp physics

## Stacks Được Hỗ Trợ

| Renderer | Tính Năng | Tích Hợp | Hiệu Suất |
|----------|----------|-------------|-------------|
| WebGL, WebGPU | Scenes, cameras, lights, materials, geometries, animations | React Three Fiber, vanilla JS, TypeScript | Instancing, LOD, batching, compute shaders |

## Các Trường Hợp Sử Dụng Phổ Biến

### Product Configurator
**Ai dùng**: E-commerce developer

```
"Build a 3D car configurator with color picker, wheel options, and interior materials. Load GLTF model, add orbit controls, and update materials on button click. Include environment map for realistic reflections."
```

### Trực Quan Hóa Dữ Liệu
**Ai dùng**: Analytics team

```
"Create a 3D bar chart from JSON data with animated growth on load. Add axis labels, hover tooltips using raycasting, and orbit camera controls. Use instanced geometry for performance."
```

### Game Prototype
**Ai dùng**: Indie game developer

```
"Build a third-person character controller with physics-based movement. Load animated GLTF character, implement keyboard controls, add collision detection with Rapier physics, and camera follow."
```

### Marketing Landing
**Ai dùng**: Creative agency

```
"Design a hero section with floating geometric shapes, animated camera path, and scroll-triggered interactions. Add bloom post-processing, gradient materials, and smooth transitions between scenes."
```

### AR Experience
**Ai dùng**: Museum curator

```
"Create a WebXR artifact viewer that places 3D models in real space using AR. Load GLTF scan, add touch rotation, scale controls, and lighting that matches device camera environment."
```

## Mẹo Pro

- **Bắt đầu đơn giản**: Scene + camera + renderer + lights + object. Test sớm, thêm độ phức tạp dần dần.
- **Tối ưu từ đầu**: Dùng instancing cho objects lặp lại, bật frustum culling, theo dõi draw calls.
- **Ánh sáng chiến lược**: Ambient + directional/spot. Shadows tốn kém—dùng thưa thớt.
- **GLTF hơn định dạng khác**: Nén, tối ưu, hỗ trợ PBR. Dùng Draco compression cho meshes.
- **Post-processing sau cùng**: Tốn hiệu suất. Chỉ dùng EffectComposer khi cần thiết.
- **WebGPU khi sẵn sàng**: Compute nhanh hơn, hiệu suất tốt hơn. Fallback về WebGL cho tương thích.

**Không kích hoạt?** Nói: "Use threejs skill to build this 3D scene"

## Skill Liên Quan

- [Frontend Design](/vi/docs/engineer/skills/frontend-design) - UI overlays cho 3D configurators
- [Frontend Development](/vi/docs/engineer/skills/frontend-development) - Tích hợp React Three Fiber
- [AI Multimodal](/vi/docs/engineer/skills/ai-multimodal) - Trích xuất yêu cầu 3D từ mockups

## Điểm Mấu Chốt

Three.js biến đồ họa 3D phức tạp thành trải nghiệm native trình duyệt. Load models, thêm tương tác, tối ưu hiệu suất, sau đó thêm hiệu ứng nâng cao. Bắt đầu với rendering loop cốt lõi, mở rộng đến physics, shaders và VR.
