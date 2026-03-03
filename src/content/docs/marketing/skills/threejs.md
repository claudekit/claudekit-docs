---
title: "ckm:threejs"
description: "Build 3D web applications and interactive visualizations with Three.js using WebGL and WebGPU renderers."
section: marketing
kit: marketing
category: skills
order: 107
---

# Three.js

> Create immersive 3D web experiences, product visualizations, and interactive graphics with Three.js and modern WebGL/WebGPU rendering.

## What This Skill Does

**The Challenge**: 3D web development with Three.js requires knowledge of 3D math, scene graphs, material systems, lighting, and performance optimization. Incorrect geometry, camera setup, or render loops lead to blank screens and poor performance.

**The Solution**: Three.js skill provides scene setup templates, geometry and material patterns, camera and lighting configurations, animation loop patterns, and performance optimization techniques for building production 3D web applications.

## Activation

**Implicit**: Activates when creating 3D visualizations, product configurators, or WebGL experiences.

**Explicit**: Activate via prompt:
```
Activate threejs skill to create a 3D product showcase with orbit controls
```

## Capabilities

### 1. Scene Setup
Bootstrap a complete Three.js scene with renderer, camera, and lights.

```typescript
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
```

### 2. Geometry and Materials
Common meshes and physically-based materials.

```typescript
// Standard PBR material
const material = new THREE.MeshStandardMaterial({
  color: 0x6366f1,
  roughness: 0.3,
  metalness: 0.7,
});

// Geometry types
const geometries = {
  box: new THREE.BoxGeometry(1, 1, 1),
  sphere: new THREE.SphereGeometry(0.5, 32, 32),
  torus: new THREE.TorusGeometry(1, 0.3, 16, 64),
};
```

### 3. Lighting Setup
Three-point lighting for product visualization.

```typescript
// Ambient light
scene.add(new THREE.AmbientLight(0xffffff, 0.5));

// Key light
const keyLight = new THREE.DirectionalLight(0xffffff, 1);
keyLight.position.set(5, 5, 5);
scene.add(keyLight);

// Fill light
const fillLight = new THREE.DirectionalLight(0x8888ff, 0.3);
fillLight.position.set(-5, 0, 5);
scene.add(fillLight);
```

### 4. GLTF Model Loading
Load 3D models from Blender, Spline, or asset libraries.

```typescript
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
loader.load('/models/product.glb', (gltf) => {
  scene.add(gltf.scene);
  gltf.scene.scale.set(2, 2, 2);
});
```

## Prerequisites

- `three` npm package
- WebGL-capable browser (all modern browsers)
- For WebGPU: Chrome 113+ or Firefox Nightly

## Configuration

```bash
npm install three
npm install @types/three  # TypeScript types
```

**React integration**:
```bash
npm install @react-three/fiber @react-three/drei
```

## Best Practices

**1. Use `requestAnimationFrame` for animation loop**
Never use `setInterval` for Three.js animations. RAF syncs with display refresh rate.

**2. Dispose resources when removing objects**
Three.js doesn't auto-dispose geometries and materials. Call `.dispose()` to prevent memory leaks.

**3. Use environment maps for realistic materials**
`RoomEnvironment` or HDRI environment maps dramatically improve material realism with minimal code.

## Common Use Cases

### Use Case 1: 3D Product Configurator
**Scenario**: E-commerce product with color and material customization in 3D.

**Workflow**:
1. Load GLTF product model
2. Add OrbitControls for user rotation
3. Expose material properties (color, roughness) as UI controls
4. Update material on user selection
5. Add HDRI environment for realistic reflections

**Output**: Interactive 3D product viewer.

### Use Case 2: Data Visualization Globe
**Scenario**: Visualize geographic data on a 3D globe.

**Workflow**:
1. Create SphereGeometry with earth texture
2. Plot data points as instanced meshes
3. Add atmosphere glow with shader material
4. Animate rotation with GSAP

**Output**: Interactive data globe for marketing dashboards.

## Troubleshooting

**Issue**: Scene renders but mesh invisible
**Solution**: Check camera position and `near`/`far` frustum. Mesh may be behind camera or outside frustum.

**Issue**: GLTF model appears too dark
**Solution**: Add environment map: `scene.environment = pmremGenerator.fromScene(new RoomEnvironment()).texture`

## Related Skills

- [Shader](/docs/marketing/skills/shader) - GLSL effects for Three.js materials
- [Remotion](/docs/marketing/skills/remotion) - Video rendering with Three.js scenes
- [UI Styling](/docs/marketing/skills/ui-styling) - UI layer on top of 3D canvas

## Related Commands

- `/ckm:threejs` - Three.js scene creation
- `/ckm:shader` - Custom shader materials
