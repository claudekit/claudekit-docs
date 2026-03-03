---
title: "ckm:shader"
description: "Write GLSL fragment shaders for procedural graphics, visual effects, and real-time rendering in WebGL and WebGPU applications."
section: marketing
kit: marketing
category: skills
order: 103
---

# Shader

> Create stunning procedural visuals and real-time effects with GLSL fragment shaders for web applications and creative coding.

## What This Skill Does

**The Challenge**: GLSL shader programming requires specialized knowledge of GPU execution models, coordinate systems, and mathematical operations that differ significantly from CPU programming. Even experienced developers struggle without shader-specific knowledge.

**The Solution**: Shader skill provides GLSL syntax guidance, common visual effect patterns, noise functions, UV manipulation, and Three.js/WebGL integration code for creating procedural graphics in web applications.

## Activation

**Implicit**: Activates when creating visual effects, procedural backgrounds, or GPU-accelerated graphics.

**Explicit**: Activate via prompt:
```
Activate shader skill to create an animated gradient background with noise
```

## Capabilities

### 1. Fragment Shader Fundamentals
Core GLSL patterns for fragment shaders.

```glsl
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

void main() {
    // Normalized pixel coordinates (0.0 to 1.0)
    vec2 uv = gl_FragCoord.xy / u_resolution;

    // Color based on UV position
    vec3 color = vec3(uv.x, uv.y, sin(u_time) * 0.5 + 0.5);

    gl_FragColor = vec4(color, 1.0);
}
```

### 2. Noise Functions
Procedural noise for organic, animated patterns.

**Common noise types**:
- `random(uv)` — White noise
- `smoothstep` + grid — Value noise
- `fbm` (Fractal Brownian Motion) — Natural textures
- Voronoi — Cell patterns

```glsl
// Simple value noise
float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
        mix(random(i), random(i + vec2(1,0)), f.x),
        mix(random(i + vec2(0,1)), random(i + vec2(1,1)), f.x),
        f.y
    );
}
```

### 3. Visual Effect Patterns
Ready-to-use effects for UI backgrounds and creative projects.

**Common effects**:
- Animated gradient with color mixing
- Lava lamp / fluid simulation
- Star field / particle systems
- Scanlines and CRT effects
- Glitch effects

### 4. WebGL / Three.js Integration
Wire shaders into web applications.

```javascript
// Three.js ShaderMaterial
const material = new THREE.ShaderMaterial({
  uniforms: {
    u_time: { value: 0 },
    u_resolution: { value: new THREE.Vector2(width, height) }
  },
  vertexShader: /* glsl */ `...`,
  fragmentShader: /* glsl */ `...`
});
```

## Prerequisites

- WebGL-capable browser
- Three.js or raw WebGL setup
- Basic understanding of coordinate systems

## Configuration

**GLSL version**: WebGL 1.0 uses GLSL ES 1.0, WebGL 2.0 uses GLSL ES 3.0

```glsl
// WebGL 2.0 (GLSL ES 3.0)
#version 300 es
precision highp float;
out vec4 fragColor;
```

## Best Practices

**1. Normalize coordinates early**
Always normalize `gl_FragCoord` to 0-1 range at the start. Pixel coordinates are platform-dependent.

**2. Use vec3/vec4 for colors**
GLSL vector math operates element-wise. `color * 0.5` darkens all channels simultaneously.

**3. Animate via u_time uniform**
Update `u_time` in JavaScript `requestAnimationFrame` loop. Use `sin(u_time)` for oscillating animations.

## Common Use Cases

### Use Case 1: Animated Hero Background
**Scenario**: Website hero section needs a dynamic, branded gradient background.

**Shader approach**:
1. Create noise-distorted UV coordinates
2. Mix 2-3 brand colors based on noise values
3. Animate noise offset with u_time
4. Output smooth, organic color flow

**Output**: Looping animated gradient with ~1KB shader code.

### Use Case 2: Product Screenshot Effect
**Scenario**: Marketing site needs dynamic screenshot presentation with glow effect.

**Shader approach**:
1. Sample texture with UV offset
2. Add bloom/glow via blurred edges
3. Animate subtle chromatic aberration
4. Overlay scanlines for retro feel

**Output**: Polished product screenshot shader component.

## Troubleshooting

**Issue**: Shader compiles but shows black screen
**Solution**: Check uniform bindings. Log `u_resolution` value — common issue is zero vector.

**Issue**: Noise looks grid-like, not organic
**Solution**: Use multiple octaves of noise (FBM) instead of single noise call.

## Related Skills

- [Three.js](/docs/marketing/skills/threejs) - 3D rendering and WebGL applications
- [Remotion](/docs/marketing/skills/remotion) - Video backgrounds with shaders
- [UI Styling](/docs/marketing/skills/ui-styling) - CSS animations as alternative

## Related Commands

- `/ckm:shader` - GLSL shader creation
- `/ckm:threejs` - Three.js scene setup with shaders
