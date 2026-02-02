---
title: Frontend Design
description: Tạo distinctive, production-grade frontend interfaces từ scratch hoặc screenshots với exceptional design quality và creative direction
section: engineer
kit: engineer
category: skills
order: 16
lang: vi
---

Mệt mỏi với các interfaces generic-looking mà scream "AI made this"? Skill này giúp bạn tạo frontend designs cảm thấy genuinely crafted, memorable và intentional.

## Skill Này Làm Gì

Frontend Design hướng dẫn bạn tạo distinctive, production-grade interfaces tránh cookie-cutter aesthetics. Dù bạn đang build from scratch hoặc replicate design từ screenshots, skill này đảm bảo bạn tạo something stands out.

Skill xử lý hai primary workflows: extracting design guidelines từ screenshots và implement chúng với precision, hoặc tạo original designs với bold aesthetic direction. Nó nhấn mạnh creative typography choices, cohesive color systems, intentional motion design và spatial composition breaks expectations.

Hãy nghĩ về nó như creative director và implementation guide của bạn kết hợp. Nó sẽ không để bạn default to Inter font trên white background với purple gradients. Thay vào đó, bạn sẽ học make bold choices fit specific context của bạn, dù đó là brutalist minimalism, maximalist chaos, hoặc refined elegance.

## Prerequisites

Trước khi dùng skill này hiệu quả, bạn nên có:

- Hiểu biết cơ bản về HTML, CSS và JavaScript
- Familiarity với React (cho component-based workflows)
- Truy cập đến `ai-multimodal` skill (cho design extraction và asset generation)
- Code editor và browser để testing

Skill tích hợp với AI Multimodal skill để analyze screenshots và generate visual assets match design direction của bạn.

## Hai Primary Workflows

### Workflow 1: Implementing từ Screenshots

Khi ai đó đưa bạn screenshot, image hoặc design reference để replicate:

**Bước 1: Extract Design Guidelines**

Không bao giờ nhảy thẳng vào code. Analyze screenshot trước dùng `ai-multimodal` skill:

```bash
# Phân tích design với Gemini
python scripts/gemini_batch_process.py --files design-screenshot.png --task analyze --prompt "Extract design system: all colors as hex codes, typography (font families, sizes, weights, line heights), spacing scale, layout patterns, visual hierarchy, component styles"
```

Document findings của bạn trong `docs/design-guidelines/extracted-design.md` với sections cho:

- Color palette (exact hex codes)
- Typography system (fonts, sizes, weights, line heights)
- Spacing scale (margins, padding patterns)
- Layout structure (grid, flexbox, positioning)
- Component patterns (buttons, cards, forms)
- Visual hierarchy và mood

**Bước 2: Implement với Precision**

Bây giờ viết code faithfully reproduce extracted design:

```css
/* Dùng exact colors từ extraction */
:root {
  --color-primary: #2D3748;
  --color-accent: #ED8936;
  --color-background: #F7FAFC;
}

/* Match typography specifications */
.heading {
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
}

.body-text {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  line-height: 1.6;
}
```

**Bước 3: Verify Quality**

So sánh implementation của bạn với original screenshot:

```bash
# Chụp screenshot của implementation
# Dùng chrome-devtools skill hoặc browser dev tools

# Compare với ai-multimodal
python scripts/gemini_batch_process.py --files original.png implementation.png --task analyze --prompt "Compare these two designs. Check color accuracy, spacing consistency, typography matching, and overall fidelity"
```

### Workflow 2: Building từ Scratch

Khi tạo original designs mà không có reference:

**Bước 1: Design Thinking**

Trước khi viết bất kỳ code nào, trả lời các câu hỏi này:

- **Purpose**: Interface này solve problem gì? Ai dùng nó?
- **Tone**: Aesthetic direction nào fit purpose này? (Xem "Choosing Your Aesthetic" dưới)
- **Constraints**: Framework requirements? Performance targets? Accessibility needs?
- **Differentiation**: Điều gì sẽ làm cho cái này unforgettable?

**Bước 2: Chọn Bold Direction**

Pick một extreme aesthetic và commit to nó. Một số examples:

- **Brutally Minimal**: Monospace font, stark black/white, generous whitespace, zero decoration
- **Editorial Magazine**: Large display fonts, multi-column layouts, dramatic imagery
- **Retro-Futuristic**: Neon gradients, geometric shapes, synthwave colors
- **Organic Natural**: Earth tones, flowing shapes, soft shadows
- **Industrial Utilitarian**: Exposed grids, monospace, technical aesthetic

**Bước 3: Execute với Precision**

Implement chosen direction của bạn với meticulous attention to detail.

## Choosing Your Aesthetic

Skill cung cấp detailed guidance về creating distinctive designs qua năm key areas:

### Typography: Break the Default

Stop dùng Inter, Roboto, Arial và system fonts. Chọn fonts với character:

- Pair distinctive display font với refined body font
- Examples: Playfair Display + Source Sans Pro, Syne + IBM Plex Sans, Fraunces + Work Sans
- Dùng unexpected font choices match context của bạn
- Consider variable fonts cho dynamic weight và width control

### Color & Theme: Commit Fully

Dùng CSS variables cho consistency, nhưng chọn boldly:

```css
:root {
  /* Dominant colors với sharp accents */
  --color-primary: #1A202C;
  --color-accent: #F56565;
  --color-neutral: #E2E8F0;

  /* Không phải timid, evenly-distributed palettes */
}
```

Dominant colors với sharp accents outperform timid, evenly-distributed palettes.

### Motion: High-Impact Moments

Focus trên một well-orchestrated page load với staggered reveals thay vì scattered micro-interactions:

```css
/* Staggered entrance animation */
.hero-title {
  animation: fadeInUp 0.6s ease-out;
}

.hero-subtitle {
  animation: fadeInUp 0.6s ease-out 0.2s;
  animation-fill-mode: backwards;
}

.hero-cta {
  animation: fadeInUp 0.6s ease-out 0.4s;
  animation-fill-mode: backwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

Cho React components, dùng Motion library. Cho advanced JavaScript animations, skill bao gồm `anime.js` reference documentation.

## Best Practices

**Không Bao Giờ Default to Generic Choices**: Mỗi project nhận unique aesthetic direction. Đừng converge trên Space Grotesk, Inter, hoặc system fonts qua tất cả projects.

**Match Complexity to Vision**: Maximalist designs cần elaborate code với extensive animations. Minimalist designs cần precision, restraint và attention to spacing và typography details.

**Design Trước Coding**: Dù extracting từ screenshots hoặc building from scratch, hiểu design system trước khi viết implementation code.

**Dùng CSS Variables**: Định nghĩa design tokens của bạn (colors, spacing, typography) như CSS custom properties cho consistency.

**Test Responsively**: Đảm bảo design của bạn works qua viewport sizes. Dùng `clamp()` cho fluid typography, CSS Grid cho flexible layouts.

## Các Skills và Commands Liên Quan

Kết hợp Frontend Design với các skills khác cho complete workflows:

- [AI Multimodal](/docs/engineer/skills/ai-multimodal) - Extract design từ screenshots, generate visual assets
- [Frontend Development](/docs/engineer/skills/frontend-development) - Implement với React/TypeScript best practices
- [Media Processing](/docs/engineer/skills/media-processing) - Optimize generated images, remove backgrounds
- [Chrome DevTools](/docs/engineer/skills/chrome-devtools) - Chụp screenshots của implementations để comparison

## Nguyên Tắc Chính

Skill tồn tại để giúp bạn tránh "AI slop" aesthetics. Mỗi design nên cảm thấy intentional, contextual và memorable. Dù bạn đang replicate screenshot với pixel-perfect precision hoặc tạo original design với bold choices, mục tiêu giống nhau: tạo something distinctive mà people thực sự remember.
