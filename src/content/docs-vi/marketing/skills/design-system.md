---
lang: vi
title: "ckm:design-system"
description: "Kiến trúc token, thông số component và thiết kế có hệ thống"
section: marketing
kit: marketing
category: skills
order: 73
---

# `ckm:design-system`

> Xây dựng hệ thống thiết kế nhất quán với design tokens, component specs và documentation để scale visual identity.

## Skill Này Làm Gì

**Thách thức**: Khi marketing team phát triển, thiết kế trở nên không nhất quán — mỗi landing page trông khác nhau, mỗi email có màu sắc khác nhau. Không có "single source of truth" dẫn đến brand dilution.

**Giải pháp**: Skill design-system xây dựng design system đầy đủ với design tokens (colors, typography, spacing), component library, usage guidelines và Figma/code integration.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi cần thiết lập hoặc mở rộng design system.

**Tường minh**: Kích hoạt qua prompt:
```
Activate design-system skill to [create/extend/document] [component/tokens/system]
```

## Tính Năng

### 1. Design Token Architecture
Định nghĩa nền tảng visual bằng design tokens có cấu trúc.

**Token hierarchy**:
```
Global Tokens (raw values)
  └── Alias Tokens (semantic names)
        └── Component Tokens (component-specific)
```

**Global tokens** (`tokens/global.json`):
```json
{
  "color": {
    "blue-100": "#EBF5FF",
    "blue-500": "#3B82F6",
    "blue-900": "#1E3A5F",
    "gray-50": "#F9FAFB",
    "gray-900": "#111827"
  },
  "fontSize": {
    "xs": "12px",
    "sm": "14px",
    "base": "16px",
    "lg": "18px",
    "xl": "20px",
    "2xl": "24px",
    "4xl": "36px"
  },
  "spacing": {
    "1": "4px",
    "2": "8px",
    "4": "16px",
    "6": "24px",
    "8": "32px",
    "12": "48px",
    "16": "64px"
  }
}
```

**Alias tokens** (`tokens/alias.json`):
```json
{
  "color": {
    "brand-primary": "{color.blue-500}",
    "text-default": "{color.gray-900}",
    "text-muted": "{color.gray-500}",
    "bg-page": "{color.gray-50}",
    "bg-card": "#FFFFFF",
    "border-default": "{color.gray-200}"
  }
}
```

### 2. Tailwind CSS Integration
Chuyển đổi tokens thành Tailwind config.

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EBF5FF',
          500: '#3B82F6',
          900: '#1E3A5F',
        },
        text: {
          DEFAULT: '#111827',
          muted: '#6B7280',
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      spacing: {
        18: '72px',
        22: '88px',
      }
    }
  }
}
```

### 3. Component Specifications
Mô tả chi tiết từng component trong design system.

**Button component spec**:
```markdown
## Button

### Variants
- Primary: bg-brand-500, text-white, hover:bg-brand-600
- Secondary: border-brand-500, text-brand-500, hover:bg-brand-50
- Ghost: text-brand-500, hover:bg-brand-50
- Destructive: bg-red-500, text-white

### Sizes
- sm: px-3 py-1.5 text-sm
- md: px-4 py-2 text-base (default)
- lg: px-6 py-3 text-lg

### States
- Default, Hover, Focus (ring), Active, Disabled (opacity-50)
- Loading: spinner icon, pointer-events-none

### Usage
✅ Use for primary actions (max 1 primary per screen)
✅ Use for form submissions
❌ Don't use for navigation (use Link instead)
❌ Don't use more than 2 CTAs per section
```

### 4. Figma Token Sync
Đồng bộ design tokens giữa Figma và code.

**Setup với Token Studio plugin**:
1. Install Token Studio trong Figma
2. Connect GitHub repo chứa `tokens/` folder
3. Pull changes từ code → Figma
4. Push changes từ Figma → code (PR workflow)

```bash
# Sync tokens với style-dictionary
npx style-dictionary build --config style-dictionary.config.js
```

## Điều Kiện Tiên Quyết

- Brand guidelines (colors, typography, logo)
- Figma (cho visual design)
- React/TypeScript project (cho component library)
- Storybook (optional, cho component documentation)

## Cấu Hình

**Project structure**:
```
design-system/
├── tokens/
│   ├── global.json
│   ├── alias.json
│   └── component.json
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.stories.tsx
│   │   └── Button.test.tsx
│   └── ...
├── styles/
│   └── global.css
└── docs/
    └── usage-guidelines.md
```

## Thực Hành Tốt Nhất

**1. Tokens Là Ground Truth**
Mọi thứ — Figma và code — phải lấy giá trị từ tokens. Không hardcode colors.

**2. Document Usage, Không Chỉ Visuals**
"Khi nào dùng Primary button" quan trọng hơn "Primary button trông như thế nào".

**3. Versioning Và Changelog**
Design system là sản phẩm. Tag versions, viết changelog khi có breaking changes.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Thiết Lập Design System Mới
**Tình huống**: SaaS marketing tool cần design system nhất quán.

**Quy trình**:
1. Extract colors, fonts từ brand guidelines
2. Define global và alias tokens
3. Configure Tailwind với tokens
4. Build 10 core components (Button, Input, Card, Modal...)
5. Setup Storybook cho documentation

### Trường Hợp 2: Design System Audit
**Tình huống**: Phát hiện inconsistency trong existing UI.

**Quy trình**:
1. Screenshot audit — chụp tất cả screens
2. Catalog unique colors, fonts, spacings đang dùng
3. Consolidate thành token set
4. Migrate existing components dần dần

## Xử Lý Sự Cố

**Vấn đề**: Figma và code bị lệch nhau
**Giải pháp**: Setup Token Studio sync tự động. PR review cho token changes.

**Vấn đề**: Team không theo design system
**Giải pháp**: Làm cho đúng dễ hơn sai. ESLint rules block hardcoded colors. PR template nhắc nhở.

## Skill Liên Quan

- [Brand](/vi/docs/marketing/skills/brand) - Brand identity là nền tảng của design system
- [Frontend Design](/vi/docs/marketing/skills/frontend-design) - Implement design system trong UI
- [Frontend Development](/vi/docs/marketing/skills/frontend-development) - Technical implementation

## Lệnh Liên Quan

- `/ckm:design-system` - Xây dựng hoặc mở rộng design system
- `/ckm:brand` - Phát triển brand guidelines
- `/ckm:frontend-design` - Áp dụng design system vào UI
