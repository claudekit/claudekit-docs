---
title: "ck:shader"
description: "Viết GLSL fragment shaders cho đồ họa thủ tục, texture và hiệu ứng hình ảnh"
section: engineer
kit: engineer
category: skills
order: 50
lang: vi
---

Viết fragment shaders tăng tốc GPU cho đồ họa thủ tục, texture và hiệu ứng hình ảnh bằng GLSL.

## Skill Này Làm Gì

Skill Shader cho phép bạn tạo đồ họa thủ tục chạy trên GPU bằng GLSL fragment shaders. Từ hình dạng đơn giản đến texture phức tạp dựa trên noise, skill này cung cấp các pattern và hàm bạn cần để tạo hình ảnh bằng toán học.

Hãy nghĩ đây như engine đồ họa thủ tục của bạn—mỗi pixel được tính toán song song, tạo ra vân gỗ, texture đá cẩm thạch, mây, địa hình hoặc nghệ thuật trừu tượng hoàn toàn từ code.

## Khi Nào Sử Dụng

- Tạo texture thủ tục (gỗ, đá cẩm thạch, mây, địa hình)
- Vẽ hình dạng với distance fields (SDF)
- Tạo pattern, noise, gradients
- Xây dựng hiệu ứng hình ảnh và hoạt ảnh
- Viết custom shaders cho Three.js, WebGL, Processing

## Khái Niệm Cốt Lõi

Fragment shaders thực thi **đồng thời trên mỗi pixel**. Mỗi thread:
- Nhận vị trí pixel qua `gl_FragCoord`
- Trả về màu sắc qua `gl_FragColor` (vec4: RGBA 0.0-1.0)
- Không thể giao tiếp với các thread khác (stateless)

## Uniforms Chuẩn

```glsl
uniform float u_time;       // Giây đã trôi qua
uniform vec2 u_resolution;  // Kích thước canvas (rộng, cao)
uniform vec2 u_mouse;       // Vị trí chuột tính bằng pixel
```

Chuẩn hóa tọa độ: `vec2 st = gl_FragCoord.xy / u_resolution;`

## Các Hàm Thiết Yếu

| Hàm | Mục Đích | Ví Dụ |
|----------|---------|---------|
| `mix(a,b,t)` | Nội suy tuyến tính | `mix(red, blue, 0.5)` |
| `step(edge,x)` | Ngưỡng cứng | `step(0.5, st.x)` |
| `smoothstep(e0,e1,x)` | Ngưỡng mượt | `smoothstep(0.2, 0.8, st.x)` |
| `fract(x)` | Phần thập phân | `fract(st * 3.0)` để tiling |
| `length(v)` | Độ lớn vector | `length(st - 0.5)` |
| `distance(a,b)` | Khoảng cách Euclidean | `distance(st, center)` |

## Pattern Nhanh

**Hình tròn:**
```glsl
float d = distance(st, vec2(0.5));
float circle = 1.0 - smoothstep(0.2, 0.21, d);
```

**Tiling:**
```glsl
st = fract(st * 4.0);  // Lưới 4x4
```

**Hoạt ảnh:**
```glsl
float wave = sin(st.x * 10.0 + u_time) * 0.5 + 0.5;
```

## Cách Dùng

Kích hoạt khi làm việc với GLSL shaders, texture thủ tục, hiệu ứng hình ảnh hoặc đồ họa WebGL.

## Ví Dụ Prompt

- "Tạo GLSL shader vẽ hình tròn với gradient"
- "Tạo Perlin noise cho texture mây"
- "Viết shader tile một pattern trên màn hình"
- "Xây dựng texture vân gỗ thủ tục"
- "Tạo hiệu ứng sóng có hoạt ảnh bằng hàm sine"
- "Tạo shader vẽ ngôi sao bằng tọa độ cực"

## Phạm Vi Chủ Đề

### Cơ Bản
- Kiểu dữ liệu, vectors, precision, tọa độ
- Hàm tạo hình, step, smoothstep, đường cong, nội suy

### Vẽ
- Màu sắc: RGB, HSB, gradients, mixing, không gian màu
- Hình dạng: SDF, hình tròn, hình chữ nhật, tọa độ cực
- Đa giác, ngôi sao, kết hợp

### Thủ Tục
- Pattern: Tiling, fract, ma trận, phép biến đổi
- Đối xứng, Truchet tiles, domain warping
- Noise: Ngẫu nhiên, Perlin, simplex, cellular, Voronoi
- fBm: Fractional Brownian Motion, turbulence, octaves
- Texture thủ tục: Mây, đá cẩm thạch, gỗ, địa hình

## Công Cụ

- **Online Editor**: editor.thebookofshaders.com
- **glslViewer**: Công cụ CLI để chạy file .frag
- **glslCanvas**: HTML embed cho live shaders
- **ShaderToy**: Uniforms iTime, iResolution, iMouse

## Điều Gì Làm Skill Này Khác Biệt

Code shader tạo chi tiết vô hạn với kích thước file nhỏ. Không có image assets, không cần tải xuống—toán học thuần túy tạo ra hình ảnh mở rộng hoàn hảo ở mọi độ phân giải. GPU xử lý hàng triệu pixel song song để render thời gian thực.

## Tài Nguyên Bên Ngoài

- The Book of Shaders: thebookofshaders.com
- LYGIA Library: lygia.xyz (hàm shader có thể tái sử dụng)
- ShaderToy: shadertoy.com
- Inigo Quilez: iquilezles.org/articles/
