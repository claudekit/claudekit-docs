---
title: "Shader"
description: "Write GLSL fragment shaders for procedural graphics, textures, and visual effects"
section: engineer
kit: engineer
category: skills
order: 34
---

Write GPU-accelerated fragment shaders for procedural graphics, textures, and visual effects using GLSL.

## What This Skill Does

The Shader skill enables you to create procedural graphics that run on the GPU using GLSL fragment shaders. From simple shapes to complex noise-based textures, this skill provides the patterns and functions you need to generate visuals mathematically.

Think of it as your procedural graphics engine—every pixel calculated in parallel, creating wood grain, marble textures, clouds, terrain, or abstract art entirely from code.

## When to Use

- Creating procedural textures (wood, marble, clouds, terrain)
- Drawing shapes with distance fields (SDF)
- Generating patterns, noise, gradients
- Building visual effects and animations
- Writing custom shaders for Three.js, WebGL, Processing

## Core Concepts

Fragment shaders execute **simultaneously on every pixel**. Each thread:
- Receives pixel position via `gl_FragCoord`
- Returns color via `gl_FragColor` (vec4: RGBA 0.0-1.0)
- Cannot communicate with other threads (stateless)

## Standard Uniforms

```glsl
uniform float u_time;       // Elapsed seconds
uniform vec2 u_resolution;  // Canvas size (width, height)
uniform vec2 u_mouse;       // Mouse position in pixels
```

Normalize coordinates: `vec2 st = gl_FragCoord.xy / u_resolution;`

## Essential Functions

| Function | Purpose | Example |
|----------|---------|---------|
| `mix(a,b,t)` | Linear interpolate | `mix(red, blue, 0.5)` |
| `step(edge,x)` | Hard threshold | `step(0.5, st.x)` |
| `smoothstep(e0,e1,x)` | Smooth threshold | `smoothstep(0.2, 0.8, st.x)` |
| `fract(x)` | Fractional part | `fract(st * 3.0)` for tiling |
| `length(v)` | Vector magnitude | `length(st - 0.5)` |
| `distance(a,b)` | Euclidean distance | `distance(st, center)` |

## Quick Patterns

**Circle:**
```glsl
float d = distance(st, vec2(0.5));
float circle = 1.0 - smoothstep(0.2, 0.21, d);
```

**Tiling:**
```glsl
st = fract(st * 4.0);  // 4x4 grid
```

**Animation:**
```glsl
float wave = sin(st.x * 10.0 + u_time) * 0.5 + 0.5;
```

## Usage

Activate when working with GLSL shaders, procedural textures, visual effects, or WebGL graphics.

## Example Prompts

- "Create a GLSL shader that draws a circle with a gradient"
- "Generate Perlin noise for cloud textures"
- "Write a shader that tiles a pattern across the screen"
- "Build a procedural wood grain texture"
- "Create an animated wave effect using sine functions"
- "Make a shader that draws a star using polar coordinates"

## Topic Coverage

### Fundamentals
- Data types, vectors, precision, coordinates
- Shaping functions, step, smoothstep, curves, interpolation

### Drawing
- Colors: RGB, HSB, gradients, mixing, color spaces
- Shapes: SDF, circles, rectangles, polar coordinates
- Polygons, stars, combinations

### Procedural
- Patterns: Tiling, fract, matrices, transformations
- Symmetry, Truchet tiles, domain warping
- Noise: Random, Perlin, simplex, cellular, Voronoi
- fBm: Fractional Brownian Motion, turbulence, octaves
- Procedural textures: Clouds, marble, wood, terrain

## Tools

- **Online Editor**: editor.thebookofshaders.com
- **glslViewer**: CLI tool for running .frag files
- **glslCanvas**: HTML embed for live shaders
- **ShaderToy**: iTime, iResolution, iMouse uniforms

## What Makes This Different

Shader code generates infinite detail with tiny file sizes. No image assets, no downloads—pure math creating visuals that scale perfectly at any resolution. The GPU handles millions of pixels in parallel for real-time rendering.

## External Resources

- The Book of Shaders: thebookofshaders.com
- LYGIA Library: lygia.xyz (reusable shader functions)
- ShaderToy: shadertoy.com
- Inigo Quilez: iquilezles.org/articles/
