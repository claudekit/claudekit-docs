---
lang: vi
title: "ckm:threejs"
description: "Xây dựng ứng dụng 3D web với Three.js WebGL/WebGPU — từ scene setup đến animation và performance optimization."
section: marketing
kit: marketing
category: skills
order: 107
---

# ckm:threejs

> Tạo trải nghiệm 3D web ấn tượng với Three.js — từ product visualization đến interactive marketing experiences.

## Kỹ Năng Này Làm Gì

Skill `ckm:threejs` hỗ trợ xây dựng ứng dụng 3D web với Three.js và WebGPU renderer. Bao gồm scene setup, loading 3D models, animation, lighting, camera control và tối ưu performance cho web.

## Bắt Đầu Nhanh

```
/ckm:threejs
```

Hoặc mô tả scene cần tạo:

```
/ckm:threejs Tạo interactive 3D product showcase cho landing page — rotating model với environment lighting
```

## Cài Đặt

```bash
npm install three @types/three
# Với React
npm install @react-three/fiber @react-three/drei
```

## Scene Cơ Bản

```javascript
import * as THREE from 'three';

// Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Geometry + Material
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x0088ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
```

## Tính Năng Chính

- **Scene management**: Objects, lights, cameras, fog
- **Materials**: PBR materials, shaders, environment maps
- **3D models**: GLTF/GLB loading và optimization
- **Animation**: Keyframe animation, morph targets, skeleton
- **Post-processing**: Bloom, depth of field, motion blur
- **Performance**: LOD, frustum culling, instanced mesh

## Ví Dụ Sử Dụng

**Product showcase:**
```
/ckm:threejs Interactive 3D viewer cho e-commerce — rotate, zoom, exploded view
```

**Marketing hero:**
```
/ckm:threejs Animated particle sphere cho SaaS landing page hero section
```

**Data visualization:**
```
/ckm:threejs 3D bar chart animation cho annual report presentation
```

## Liên Quan

- [ckm:shader](/vi/docs/marketing/skills/shader) - Custom GLSL shaders cho Three.js
- [ckm:remotion](/vi/docs/marketing/skills/remotion) - Video rendering với Three.js
- [ckm:web-frameworks](/vi/docs/marketing/skills/web-frameworks) - Framework tích hợp Three.js
