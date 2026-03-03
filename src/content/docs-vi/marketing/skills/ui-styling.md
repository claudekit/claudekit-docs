---
lang: vi
title: "ckm:ui-styling"
description: "Tạo kiểu UI với shadcn/ui, Radix UI và Tailwind CSS — component styling, theming và design system."
section: marketing
kit: marketing
category: skills
order: 108
---

# ckm:ui-styling

> Xây dựng UI đẹp và accessible với shadcn/ui components, Radix UI primitives và Tailwind CSS utilities.

## Kỹ Năng Này Làm Gì

Skill `ckm:ui-styling` hướng dẫn styling UI components sử dụng stack shadcn/ui + Radix UI + Tailwind CSS. Bao gồm theming với CSS variables, custom component variants, dark mode và responsive design.

## Bắt Đầu Nhanh

```
/ckm:ui-styling
```

Hoặc mô tả component cần tạo:

```
/ckm:ui-styling Tạo pricing card component với hover animation và highlighted tier
```

## Stack Công Nghệ

| Công Nghệ | Vai Trò |
|-----------|---------|
| **Tailwind CSS** | Utility-first CSS, responsive, dark mode |
| **shadcn/ui** | Ready-made components, copy-paste |
| **Radix UI** | Headless accessible primitives |
| **CSS Variables** | Theming và design tokens |

## Cài Đặt

```bash
# Khởi tạo shadcn/ui
npx shadcn@latest init

# Thêm component
npx shadcn@latest add button card dialog
```

## Ví Dụ Component

```tsx
// Pricing card với Tailwind
import { cn } from "@/lib/utils";

interface PricingCardProps {
  plan: string;
  price: number;
  featured?: boolean;
}

export function PricingCard({ plan, price, featured }: PricingCardProps) {
  return (
    <div className={cn(
      "rounded-xl border p-6 shadow-sm transition-all hover:shadow-md",
      featured && "border-primary bg-primary/5 ring-2 ring-primary"
    )}>
      <h3 className="text-lg font-semibold">{plan}</h3>
      <p className="mt-2 text-3xl font-bold">${price}<span className="text-sm font-normal text-muted-foreground">/tháng</span></p>
    </div>
  );
}
```

## Tính Năng Chính

- **Component variants**: Sử dụng `cva()` cho variant styling nhất quán
- **Theming**: CSS variables cho colors, spacing, typography
- **Dark mode**: `dark:` modifier với class strategy
- **Animations**: Tailwind `animate-*` và Framer Motion integration
- **Responsive**: Mobile-first với breakpoint modifiers

## Ví Dụ Sử Dụng

**Thiết kế landing page:**
```
/ckm:ui-styling Hero section với gradient background, animated text và CTA button
```

**Component library:**
```
/ckm:ui-styling Tạo reusable badge component với 5 variants: default, success, warning, error, info
```

**Dark mode:**
```
/ckm:ui-styling Thêm dark mode toggle và đảm bảo tất cả components hỗ trợ cả hai mode
```

## Liên Quan

- [ckm:ui-ux-pro-max](/vi/docs/marketing/skills/ui-ux-pro-max) - Thiết kế UI/UX nâng cao
- [ckm:web-frameworks](/vi/docs/marketing/skills/web-frameworks) - Framework tích hợp
- [ckm:web-design-guidelines](/vi/docs/marketing/skills/web-design-guidelines) - Đánh giá UI theo guidelines
