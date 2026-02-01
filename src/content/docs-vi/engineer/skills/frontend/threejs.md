---
title: Three.js Skill
description: Xây dựng trải nghiệm web 3D với Three.js - thư viện WebGL/WebGPU cho scenes, cameras, materials, animations và rendering nâng cao
section: engineer
kit: engineer
category: skills/frontend
order: 7
published: true
lang: vi
---

# Three.js Skill

Xây dựng trải nghiệm web 3D immersive với WebGL/WebGPU. Scenes, animations và đồ họa tương tác production-ready.

## Chỉ Cần Yêu Cầu Claude...

```
"Tạo product configurator 3D tương tác với orbit controls và material swapping"
```

```
"Xây dựng hệ thống particle với 10,000 ngôi sao và camera movement qua không gian"
```

```
"Thiết kế GLTF model viewer với post-processing bloom và lighting thực tế"
```

```
"Tạo quả địa cầu 3D animated hiển thị điểm dữ liệu với raycasting interaction"
```

```
"Xây dựng scene dựa trên vật lý với vật thể rơi và phát hiện va chạm"
```

```
"Thiết kế bề mặt nước dựa trên shader với phản chiếu và sóng animated"
```

```
"Tạo scene VR-ready với hand tracking và teleportation controls"
```

## Bạn Sẽ Nhận Được

- **Working 3D scenes** với rendering, cameras và lighting setups tối ưu
- **Interactive experiences** sử dụng raycasting, controls và animations
- **Performance-tuned code** với instancing, LOD và frustum culling
- **Advanced effects** như post-processing, custom shaders và tích hợp vật lý

## Stacks Được Hỗ Trợ

| Renderer | Features | Integration | Performance |
|----------|----------|-------------|-------------|
| WebGL, WebGPU | Scenes, cameras, lights, materials, geometries, animations | React Three Fiber, vanilla JS, TypeScript | Instancing, LOD, batching, compute shaders |

## Các Trường Hợp Sử Dụng Phổ Biến

### Product Configurator
**Ai**: E-commerce developer

```
"Xây dựng car configurator 3D với color picker, tùy chọn bánh xe và interior materials. Load GLTF model, thêm orbit controls và cập nhật materials khi nhấn nút. Bao gồm environment map cho phản chiếu thực tế."
```

### Data Visualization
**Ai**: Analytics team

```
"Tạo biểu đồ cột 3D từ JSON data với animated growth khi load. Thêm axis labels, hover tooltips sử dụng raycasting và orbit camera controls. Sử dụng instanced geometry cho hiệu suất."
```

### Game Prototype
**Ai**: Indie game developer

```
"Xây dựng third-person character controller với physics-based movement. Load animated GLTF character, implement keyboard controls, thêm collision detection với Rapier physics và camera follow."
```

### Marketing Landing
**Ai**: Creative agency

```
"Thiết kế hero section với floating geometric shapes, animated camera path và scroll-triggered interactions. Thêm bloom post-processing, gradient materials và smooth transitions giữa các scenes."
```

### AR Experience
**Ai**: Museum curator

```
"Tạo WebXR artifact viewer đặt 3D models trong không gian thực sử dụng AR. Load GLTF scan, thêm touch rotation, scale controls và lighting phù hợp với môi trường camera thiết bị."
```

## Pro Tips

- **Bắt đầu đơn giản**: Scene + camera + renderer + lights + object. Test sớm, thêm độ phức tạp dần dần.
- **Tối ưu từ đầu**: Sử dụng instancing cho objects lặp lại, bật frustum culling, monitor draw calls.
- **Light chiến lược**: Ambient + directional/spot. Shadows tốn kém—sử dụng tiết kiệm.
- **GLTF hơn các loại khác**: Nén, tối ưu, hỗ trợ PBR. Sử dụng Draco compression cho meshes.
- **Post-processing cuối cùng**: Chi phí hiệu suất. Chỉ sử dụng EffectComposer khi cần.
- **WebGPU khi sẵn sàng**: Compute nhanh hơn, hiệu suất tốt hơn. Fallback sang WebGL cho khả năng tương thích.

**Không kích hoạt?** Nói: "Use threejs skill to build this 3D scene"

## Các Kỹ Năng Liên Quan

- [Frontend Design](/vi/docs/engineer/skills/frontend/frontend-design) - UI overlays cho 3D configurators
- [Frontend Development](/vi/docs/engineer/skills/frontend/frontend-development) - React Three Fiber integration
- [AI Multimodal](/vi/docs/engineer/skills/ai/ai-multimodal) - Trích xuất yêu cầu 3D từ mockups

## Điểm Chính

Three.js biến đổi đồ họa 3D phức tạp thành trải nghiệm native trên trình duyệt. Load models, thêm interactions, tối ưu hiệu suất, sau đó layer các hiệu ứng nâng cao. Bắt đầu với rendering loop cốt lõi, scale lên physics, shaders và VR.
