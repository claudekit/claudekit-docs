---
title: Three.js Skill
description: Build 3D web experiences with Three.js - WebGL/WebGPU library for scenes, cameras, materials, animations, and advanced rendering
section: engineer
kit: engineer
category: skills/frontend
order: 7
published: true
---
# Three.js Skill

Build immersive 3D web experiences with WebGL/WebGPU. Production-ready scenes, animations, and interactive graphics.

## Just Ask Claude To...

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

## What You'll Get

- **Working 3D scenes** with optimized rendering, cameras, and lighting setups
- **Interactive experiences** using raycasting, controls, and animations
- **Performance-tuned code** with instancing, LOD, and frustum culling
- **Advanced effects** like post-processing, custom shaders, and physics integration

## Supported Stacks

| Renderer | Features | Integration | Performance |
|----------|----------|-------------|-------------|
| WebGL, WebGPU | Scenes, cameras, lights, materials, geometries, animations | React Three Fiber, vanilla JS, TypeScript | Instancing, LOD, batching, compute shaders |

## Common Use Cases

### Product Configurator
**Who**: E-commerce developer

```
"Build a 3D car configurator with color picker, wheel options, and interior materials. Load GLTF model, add orbit controls, and update materials on button click. Include environment map for realistic reflections."
```

### Data Visualization
**Who**: Analytics team

```
"Create a 3D bar chart from JSON data with animated growth on load. Add axis labels, hover tooltips using raycasting, and orbit camera controls. Use instanced geometry for performance."
```

### Game Prototype
**Who**: Indie game developer

```
"Build a third-person character controller with physics-based movement. Load animated GLTF character, implement keyboard controls, add collision detection with Rapier physics, and camera follow."
```

### Marketing Landing
**Who**: Creative agency

```
"Design a hero section with floating geometric shapes, animated camera path, and scroll-triggered interactions. Add bloom post-processing, gradient materials, and smooth transitions between scenes."
```

### AR Experience
**Who**: Museum curator

```
"Create a WebXR artifact viewer that places 3D models in real space using AR. Load GLTF scan, add touch rotation, scale controls, and lighting that matches device camera environment."
```

## Pro Tips

- **Start simple**: Scene + camera + renderer + lights + object. Test early, add complexity incrementally.
- **Optimize from start**: Use instancing for repeated objects, enable frustum culling, monitor draw calls.
- **Light strategically**: Ambient + directional/spot. Shadows are expensive—use sparingly.
- **GLTF over others**: Compressed, optimized, supports PBR. Use Draco compression for meshes.
- **Post-processing last**: Performance cost. Use EffectComposer only when needed.
- **WebGPU when ready**: Faster compute, better performance. Fallback to WebGL for compatibility.

**Not activating?** Say: "Use threejs skill to build this 3D scene"

## Related Skills

- [Frontend Design](/docs/engineer/skills/frontend-design) - UI overlays for 3D configurators
- [Frontend Development](/docs/engineer/skills/frontend-development) - React Three Fiber integration
- [AI Multimodal](/docs/engineer/skills/ai-multimodal) - Extract 3D requirements from mockups

## Key Takeaway

Three.js transforms complex 3D graphics into browser-native experiences. Load models, add interactions, optimize performance, then layer advanced effects. Start with core rendering loop, scale to physics, shaders, and VR.
