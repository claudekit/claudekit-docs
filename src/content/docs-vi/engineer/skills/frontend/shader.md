---
title: "Shader"
description: "Viết GLSL fragment shaders cho đồ họa thủ tục, textures và hiệu ứng hình ảnh"
section: engineer
kit: engineer
category: skills/frontend
order: 34
lang: vi
---

Viết fragment shaders tăng tốc GPU cho đồ họa thủ tục, textures và hiệu ứng hình ảnh sử dụng GLSL.

## Kỹ Năng Này Làm Gì

Kỹ năng Shader cho phép bạn tạo đồ họa thủ tục chạy trên GPU sử dụng GLSL fragment shaders. Từ các hình dạng đơn giản đến textures phức tạp dựa trên noise, kỹ năng này cung cấp các mẫu và hàm bạn cần để tạo hình ảnh bằng toán học.

Hãy nghĩ về nó như công cụ đồ họa thủ tục của bạn—mỗi pixel được tính toán song song, tạo ra vân gỗ, textures đá cẩm thạch, mây, địa hình hoặc nghệ thuật trừu tượng hoàn toàn từ code.

## Khi Nào Sử Dụng

- Tạo textures thủ tục (gỗ, đá cẩm thạch, mây, địa hình)
- Vẽ hình dạng với distance fields (SDF)
- Tạo mẫu, noise, gradients
- Xây dựng hiệu ứng hình ảnh và animations
- Viết custom shaders cho Three.js, WebGL, Processing

## Các Khái Niệm Cốt Lõi

Fragment shaders thực thi **đồng thời trên mọi pixel**. Mỗi thread:
- Nhận vị trí pixel qua `gl_FragCoord`
- Trả về màu qua `gl_FragColor` (vec4: RGBA 0.0-1.0)
- Không thể giao tiếp với các thread khác (stateless)

## Uniforms Tiêu Chuẩn

```glsl
uniform float u_time;       // Giây đã trôi qua
uniform vec2 u_resolution;  // Kích thước canvas (width, height)
uniform vec2 u_mouse;       // Vị trí chuột tính bằng pixels
```

Chuẩn hóa tọa độ: `vec2 st = gl_FragCoord.xy / u_resolution;`

## Các Hàm Thiết Yếu

| Hàm | Mục Đích | Ví Dụ |
|-----|----------|-------|
| `mix(a,b,t)` | Nội suy tuyến tính | `mix(red, blue, 0.5)` |
| `step(edge,x)` | Ngưỡng cứng | `step(0.5, st.x)` |
| `smoothstep(e0,e1,x)` | Ngưỡng mượt | `smoothstep(0.2, 0.8, st.x)` |
| `fract(x)` | Phần thập phân | `fract(st * 3.0)` cho tiling |
| `length(v)` | Độ lớn vector | `length(st - 0.5)` |
| `distance(a,b)` | Khoảng cách Euclid | `distance(st, center)` |

## Mẫu Nhanh

**Hình tròn:**
```glsl
float d = distance(st, vec2(0.5));
float circle = 1.0 - smoothstep(0.2, 0.21, d);
```

**Tiling:**
```glsl
st = fract(st * 4.0);  // lưới 4x4
```

**Animation:**
```glsl
float wave = sin(st.x * 10.0 + u_time) * 0.5 + 0.5;
```

## Sử Dụng

Kích hoạt khi làm việc với GLSL shaders, textures thủ tục, hiệu ứng hình ảnh hoặc đồ họa WebGL.

## Prompt Ví Dụ

- "Tạo GLSL shader vẽ hình tròn với gradient"
- "Tạo Perlin noise cho textures mây"
- "Viết shader tiling mẫu trên màn hình"
- "Xây dựng texture vân gỗ thủ tục"
- "Tạo hiệu ứng sóng animated sử dụng hàm sine"
- "Làm shader vẽ ngôi sao sử dụng tọa độ cực"

## Phạm Vi Chủ Đề

### Cơ Bản
- Kiểu dữ liệu, vectors, precision, tọa độ
- Hàm shaping, step, smoothstep, curves, interpolation

### Vẽ
- Màu sắc: RGB, HSB, gradients, mixing, color spaces
- Hình dạng: SDF, circles, rectangles, tọa độ cực
- Đa giác, ngôi sao, kết hợp

### Thủ Tục
- Mẫu: Tiling, fract, matrices, transformations
- Đối xứng, Truchet tiles, domain warping
- Noise: Random, Perlin, simplex, cellular, Voronoi
- fBm: Fractional Brownian Motion, turbulence, octaves
- Textures thủ tục: Mây, đá cẩm thạch, gỗ, địa hình

## Công Cụ

- **Online Editor**: editor.thebookofshaders.com
- **glslViewer**: Công cụ CLI để chạy file .frag
- **glslCanvas**: HTML embed cho shaders live
- **ShaderToy**: uniforms iTime, iResolution, iMouse

## Điểm Khác Biệt

Shader code tạo chi tiết vô hạn với kích thước file nhỏ. Không có image assets, không download—toán học thuần túy tạo hình ảnh scale hoàn hảo ở mọi độ phân giải. GPU xử lý hàng triệu pixel song song cho rendering thời gian thực.

## Tài Nguyên Bên Ngoài

- The Book of Shaders: thebookofshaders.com
- LYGIA Library: lygia.xyz (hàm shader có thể tái sử dụng)
- ShaderToy: shadertoy.com
- Inigo Quilez: iquilezles.org/articles/
