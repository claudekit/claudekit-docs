---
lang: vi
title: "ckm:frontend-design"
description: "Tạo giao diện frontend tinh xảo từ thiết kế và ảnh chụp"
section: marketing
kit: marketing
category: skills
order: 79
---

> Chuyển đổi designs và screenshots thành frontend code chất lượng cao với pixel-perfect accuracy.

## Skill Này Làm Gì

**Thách thức**: Khoảng cách giữa thiết kế trong Figma và implementation thực tế trên code thường rất lớn — spacing sai, fonts không khớp, responsive bị lỗi, và animations thiếu. Design-to-code thủ công chậm và dễ sai.

**Giải pháp**: Skill frontend-design phân tích designs/screenshots và tạo ra React/HTML/Tailwind code chính xác, bao gồm responsive layouts, micro-interactions và accessibility.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi nhận ảnh thiết kế hoặc yêu cầu implement UI component.

**Tường minh**: Kích hoạt qua prompt:
```
Activate frontend-design skill to implement [component/page] from [design/screenshot]
```

## Tính Năng

### 1. Design Analysis
Phân tích thiết kế trước khi code.

**Checklist phân tích**:
```
Layout:
- Grid system (12-col, flexbox, grid?)
- Breakpoints (mobile: 375px, tablet: 768px, desktop: 1280px)
- Component hierarchy và nesting

Typography:
- Font families (heading vs body)
- Font sizes và weights tại mỗi breakpoint
- Line heights và letter spacing

Spacing:
- Padding values (theo 4px/8px grid?)
- Margin patterns
- Gap giữa components

Colors:
- Exact hex codes (dùng eyedropper nếu cần)
- Opacity values
- Gradient definitions

Interactive states:
- Hover effects
- Focus styles
- Active/pressed states
- Transition timing
```

### 2. Component Patterns

**Hero Section**:
```tsx
// Pixel-perfect hero từ design
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-950 px-6 py-24 md:px-12 lg:px-24">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 ring-1 ring-blue-500/30 mb-6">
            <SparklesIcon className="h-4 w-4" />
            Mới: Marketing AI Agents
          </span>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Marketing thông minh hơn{' '}
            <span className="text-blue-400">với AI</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl">
            ClaudeKit Marketing tự động hóa toàn bộ workflow marketing của bạn.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-400">
              Dùng thử miễn phí
            </Button>
            <Button size="lg" variant="ghost" className="text-white">
              Xem demo →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### 3. Responsive Implementation
Responsive đúng cách từ mobile lên desktop.

**Mobile-first pattern**:
```tsx
// Grid responsive
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {features.map(feature => (
    <FeatureCard key={feature.id} {...feature} />
  ))}
</div>

// Text responsive
<h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
  Tiêu đề responsive
</h2>

// Spacing responsive
<section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
```

### 4. Micro-interactions
Animations tinh tế cải thiện UX đáng kể.

```tsx
// Hover card với smooth transitions
function FeatureCard({ icon, title, description }: Props) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6
                    hover:border-blue-500/50 hover:bg-white/10
                    transition-all duration-300 ease-out
                    hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
      {/* Icon với glow effect on hover */}
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center
                      rounded-lg bg-blue-500/20 text-blue-400
                      group-hover:bg-blue-500 group-hover:text-white
                      transition-colors duration-300">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-400">{description}</p>

      {/* Arrow indicator */}
      <div className="mt-4 flex items-center text-sm text-blue-400
                      opacity-0 group-hover:opacity-100
                      translate-x-0 group-hover:translate-x-1
                      transition-all duration-300">
        Tìm hiểu thêm →
      </div>
    </div>
  );
}
```

### 5. Dark Mode Support
Marketing sites ngày càng cần dark mode.

```tsx
// Tailwind dark mode classes
<div className="bg-white dark:bg-slate-900">
  <h1 className="text-slate-900 dark:text-white">Tiêu đề</h1>
  <p className="text-slate-600 dark:text-slate-400">Nội dung</p>
  <div className="border border-slate-200 dark:border-slate-700">...</div>
</div>
```

## Điều Kiện Tiên Quyết

- Figma design file hoặc screenshot rõ ràng
- React/Next.js project đã setup
- Tailwind CSS đã cấu hình
- Design system tokens (colors, fonts, spacing)

## Cấu Hình

**Tailwind custom config từ design tokens**:
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      }
    }
  }
}
```

## Thực Hành Tốt Nhất

**1. Semantic HTML First**
Cấu trúc HTML đúng ngữ nghĩa rồi mới style. `<section>`, `<article>`, `<nav>`, `<main>`.

**2. Progressive Enhancement**
Core content hiển thị không cần JS. Animations là enhancement, không phải requirement.

**3. Performance Budget**
Largest Contentful Paint < 2.5s. Lazy load images below fold. Minimize layout shifts.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Landing Page Từ Figma
**Tình huống**: Designer cung cấp Figma file, cần implement trong 1 ngày.

**Quy trình**:
1. Export design tokens từ Figma
2. Update Tailwind config
3. Break down vào sections (Hero, Features, Pricing, CTA)
4. Implement từng section
5. QA responsive trên 3 breakpoints

### Trường Hợp 2: Clone Competitor Page
**Tình huống**: Screenshot competitor landing page, implement tương tự với brand riêng.

**Quy trình**:
1. Analyze screenshot: layout, spacing, typography
2. Identify unique elements và patterns
3. Implement với brand colors và copy riêng
4. Add improvements (performance, accessibility)

## Xử Lý Sự Cố

**Vấn đề**: Layout bị lệch trên một số browser
**Giải pháp**: Kiểm tra Safari (flexbox gaps, grid subgrid). Test trên real devices.

**Vấn đề**: Fonts không hiển thị đúng
**Giải pháp**: Đảm bảo font-display: swap, preload critical fonts, fallback fonts phù hợp.

## Skill Liên Quan

- [Design System](/vi/docs/marketing/skills/design-system) - Tokens và components
- [Frontend Development](/vi/docs/marketing/skills/frontend-development) - Logic và state management
- [Banner Design](/vi/docs/marketing/skills/banner-design) - Design assets cần implement

## Lệnh Liên Quan

- `/ckm:frontend-design` - Implement UI từ design
- `/ckm:frontend-development` - Frontend với business logic
- `/ckm:design-system` - Build component library
