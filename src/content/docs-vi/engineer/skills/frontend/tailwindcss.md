---
title: Kỹ năng Tailwind CSS
description: Tài liệu hướng dẫn sử dụng kỹ năng tailwindcss
section: engineer
kit: engineer
category: skills/frontend
order: 3
published: true
lang: vi
---

# Kỹ năng Tailwind CSS

Một framework CSS ưu tiên tiện ích (utility-first) cho phép phát triển giao diện người dùng nhanh chóng thông qua các class có thể kết hợp, loại bỏ nhu cầu viết CSS tùy chỉnh.

## Những gì Tailwind CSS cung cấp

- **Utility Classes**: Các class được thiết kế sẵn cho mọi thuộc tính CSS
- **Thiết kế đáp ứng (Responsive Design)**: Các breakpoint ưu tiên thiết bị di động với các tiền tố đơn giản
- **Chế độ tối (Dark Mode)**: Hỗ trợ chế độ tối tích hợp sẵn với chiến lược class hoặc media query
- **Khả năng tùy chỉnh**: Hệ thống thiết kế hoàn toàn có thể tùy chỉnh thông qua tệp cấu hình
- **Trình biên dịch JIT**: Biên dịch Just-in-Time cho thời gian build tức thì
- **Không cần bước Build**: Tùy chọn CDN để tạo mẫu nhanh
- **Tree Shaking**: Các kiểu không sử dụng sẽ tự động được loại bỏ trong môi trường sản xuất
- **Kết hợp Component**: Xây dựng các component phức tạp từ các utility class

## Thiết lập

### Điều kiện tiên quyết

- Đã cài đặt Node.js 16+
- Một công cụ build (Vite, Next.js, webpack, v.v.)
- Kiến thức CSS cơ bản

### Cài đặt với Next.js

```bash
# Next.js 13+ bao gồm Tailwind theo mặc định
npx create-next-app@latest

# Chọn "Yes" khi được hỏi về Tailwind CSS
```

### Cài đặt với Vite

```bash
# Tạo dự án Vite
npm create vite@latest my-app

# Cài đặt Tailwind và các phụ thuộc
npm install -D tailwindcss postcss autoprefixer

# Khởi tạo cấu hình Tailwind
npx tailwindcss init -p
```

**Cấu hình tailwind.config.js:**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Thêm các chỉ thị Tailwind vào CSS (src/index.css):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Thiết lập CDN (chỉ để tạo mẫu)

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello Tailwind!
  </h1>
</body>
</html>
```

## Cách sử dụng

### Ví dụ cơ bản: Component Card đơn giản

```tsx
export default function ProductCard() {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Hình ảnh */}
      <img
        className="w-full h-48 object-cover"
        src="/product.jpg"
        alt="Sản phẩm"
      />

      {/* Nội dung */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Sản phẩm cao cấp
        </h2>
        <p className="text-gray-600 text-base mb-4">
          Sản phẩm chất lượng cao với các tính năng tuyệt vời và đánh giá tốt từ khách hàng.
        </p>

        {/* Giá và nút */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            $99.99
          </span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>

      {/* Thẻ (Tags) */}
      <div className="px-6 pb-4 flex gap-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #electronics
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #trending
        </span>
      </div>
    </div>
  );
}
```

### Ví dụ nâng cao: Bố cục Dashboard đáp ứng

```tsx
export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Bảng điều khiển</h1>
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              {/* Nút menu di động */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Khu vực nội dung chính */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Các thẻ thống kê */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Tổng doanh thu
            </h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              $45,231
            </p>
            <p className="mt-2 text-sm text-green-600">
              <span className="font-medium">+12%</span> so với tháng trước
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Người dùng mới
            </h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              1,234
            </p>
            <p className="mt-2 text-sm text-green-600">
              <span className="font-medium">+8%</span> so với tháng trước
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Phiên hoạt động
            </h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              567
            </p>
            <p className="mt-2 text-sm text-red-600">
              <span className="font-medium">-3%</span> so với tháng trước
            </p>
          </div>
        </div>

        {/* Nội dung */}
        <div className="mt-8">
          {children}
        </div>
      </div>
    </div>
  );
}
```

### Thiết kế đáp ứng (Responsive Design)

Tailwind sử dụng các breakpoint ưu tiên thiết bị di động:

```tsx
<div className="
  w-full           /* Di động: toàn chiều rộng */
  sm:w-1/2         /* Màn hình nhỏ (640px+): một nửa chiều rộng */
  md:w-1/3         /* Màn hình trung bình (768px+): một phần ba chiều rộng */
  lg:w-1/4         /* Màn hình lớn (1024px+): một phần tư chiều rộng */
  xl:w-1/5         /* Rất lớn (1280px+): một phần năm chiều rộng */
  2xl:w-1/6        /* Cực lớn (1536px+): một phần sáu chiều rộng */
  p-4              /* Padding ở tất cả các cạnh */
  md:p-8           /* Padding lớn hơn trên màn hình trung bình trở lên */
">
  Nội dung đáp ứng
</div>
```

**Tham chiếu Breakpoint:**
- `sm:` - 640px trở lên
- `md:` - 768px trở lên
- `lg:` - 1024px trở lên
- `xl:` - 1280px trở lên
- `2xl:` - 1536px trở lên

### Chế độ tối (Dark Mode)

**Cấu hình chế độ tối (tailwind.config.js):**
```javascript
export default {
  darkMode: 'class', // hoặc 'media' cho tùy chọn hệ thống
  // ... phần còn lại của cấu hình
}
```

**Sử dụng các class chế độ tối:**
```tsx
<div className="
  bg-white dark:bg-gray-900
  text-gray-900 dark:text-white
  border border-gray-200 dark:border-gray-700
">
  <h1 className="text-xl font-bold">
    Tiêu đề (thích ứng với chế độ tối)
  </h1>
  <p className="text-gray-600 dark:text-gray-400">
    Văn bản mô tả
  </p>
</div>
```

**Chuyển đổi chế độ tối:**
```tsx
'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Kiểm tra tùy chọn đã lưu
    const stored = localStorage.getItem('theme');
    const isDarkMode = stored === 'dark';
    setIsDark(isDarkMode);

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
}
```

### Cấu hình Theme tùy chỉnh

**Mở rộng theme mặc định (tailwind.config.js):**
```javascript
export default {
  theme: {
    extend: {
      // Màu tùy chỉnh
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
      },

      // Khoảng cách tùy chỉnh
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },

      // Phông chữ tùy chỉnh
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },

      // Hiệu ứng động tùy chỉnh
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
      },

      // Đổ bóng tùy chỉnh
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.1)',
      },
    },
  },
}
```

**Sử dụng theme tùy chỉnh:**
```tsx
<div className="
  bg-brand-500
  font-sans
  shadow-inner-lg
  animate-spin-slow
  w-128
">
  Nội dung với theme tùy chỉnh
</div>
```

## Tích hợp với ClaudeKit

Các agent của ClaudeKit sử dụng kỹ năng Tailwind CSS để:

### 1. Tạo mẫu UI nhanh chóng

```bash
# Sử dụng skill ai-artist (search mode) để tạo mẫu UI nhanh
# "tạo landing page với phần hero"
```

Agent UI/UX Designer sẽ:
- Sử dụng các utility class của Tailwind để phát triển nhanh chóng
- Triển khai các breakpoint đáp ứng
- Áp dụng khoảng cách và màu sắc nhất quán
- Tạo các mẫu component có thể tái sử dụng

### 2. Triển khai hệ thống thiết kế (Design System)

```bash
# Sử dụng skill ai-artist (creative mode) để triển khai hệ thống thiết kế
# "tạo thư viện component với các design token"
```

Agent sẽ:
- Cấu hình theme tùy chỉnh trong tailwind.config.js
- Định nghĩa màu sắc thương hiệu, phông chữ và khoảng cách
- Tạo các biến thể component với Tailwind
- Triển khai hỗ trợ chế độ tối

### 3. Tạo bố cục đáp ứng (Responsive Layout)

```bash
/cook [dashboard đáp ứng với thanh bên]
```

Agent Developer sẽ:
- Sử dụng các tiện ích grid và flexbox của Tailwind
- Triển khai thiết kế đáp ứng ưu tiên di động
- Thêm các kiểu dáng đặc thù cho từng breakpoint
- Tối ưu hóa cho tất cả các kích thước màn hình

## Phương pháp hay nhất

### 1. Kết hợp Component

**Trích xuất các mẫu lặp lại:**
```tsx
// Thay vì lặp lại các class
<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  Nút 1
</button>
<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  Nút 2
</button>

// Tạo một component
function Button({ children }) {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
      {children}
    </button>
  );
}
```

### 2. Sử dụng @apply cho các Component phức tạp

**Khi các class của component quá dài:**
```css
/* src/styles/components.css */
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded-lg;
    @apply hover:bg-blue-600 active:bg-blue-700;
    @apply focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2;
    @apply disabled:opacity-50 disabled:cursor-not-allowed;
    @apply transition-all duration-200;
  }

  .card {
    @apply bg-white rounded-lg shadow-md p-6;
    @apply dark:bg-gray-800 dark:shadow-lg;
  }
}
```

**Cách dùng:**
```tsx
<button className="btn-primary">
  Click Me
</button>

<div className="card">
  Nội dung Card
</div>
```

### 3. Khoảng cách nhất quán

**Sử dụng thang đo khoảng cách một cách nhất quán:**
```tsx
// Tốt: Sử dụng thang đo khoảng cách của Tailwind
<div className="space-y-4">  {/* khoảng cách 1rem */}
  <div className="p-4">Nội dung 1</div>
  <div className="p-4">Nội dung 2</div>
  <div className="p-4">Nội dung 3</div>
</div>

// Không tốt: Các giá trị tùy ý cho khoảng cách phổ biến
<div className="space-y-[17px]">
  <div className="p-[15px]">Nội dung 1</div>
</div>
```

### 4. Sắp xếp các tên Class dài

```tsx
// Sử dụng template literals để dễ đọc
const cardClasses = `
  max-w-sm rounded-lg overflow-hidden shadow-lg
  bg-white dark:bg-gray-800
  hover:shadow-xl transition-shadow duration-300
  border border-gray-200 dark:border-gray-700
`;

<div className={cardClasses}>
  Nội dung Card
</div>

// Hoặc sử dụng một hàm tiện ích
import { cn } from '@/lib/utils'; // bộ trộn classnames

<div className={cn(
  "max-w-sm rounded-lg overflow-hidden shadow-lg",
  "bg-white dark:bg-gray-800",
  "hover:shadow-xl transition-shadow duration-300",
  isActive && "ring-2 ring-blue-500"
)}>
  Nội dung Card
</div>
```

### 5. Tối ưu hóa hiệu suất

**Loại bỏ các kiểu không sử dụng (Purge):**
```javascript
// tailwind.config.js
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  // Tailwind sẽ chỉ bao gồm các class được sử dụng trong các tệp này
}
```

**Sử dụng chế độ JIT (được bật mặc định từ v3+):**
- Tạo các kiểu theo yêu cầu
- Thời gian build tức thì
- Tất cả các biến thể có sẵn mà không cần cấu hình

## Các mẫu phổ biến

### Tạo kiểu cho Form

```tsx
export function LoginForm() {
  return (
    <form className="max-w-md mx-auto space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Mật khẩu
        </label>
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        Đăng nhập
      </button>
    </form>
  );
}
```

### Bố cục Grid

```tsx
// Grid đáp ứng
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {items.map(item => (
    <div key={item.id} className="bg-white rounded-lg p-4 shadow">
      {item.content}
    </div>
  ))}
</div>

// Grid tự động khớp (lấp đầy không gian trống)
<div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
  {/* Các thẻ sẽ tự động xuống dòng */}
</div>
```

### Bố cục Flexbox

```tsx
// Căn giữa nội dung
<div className="flex items-center justify-center min-h-screen">
  <div className="text-center">
    <h1>Nội dung căn giữa</h1>
  </div>
</div>

// Khoảng cách giữa các mục
<div className="flex items-center justify-between">
  <span>Trái</span>
  <span>Phải</span>
</div>

// Chồng dọc với các khoảng cách
<div className="flex flex-col space-y-4">
  <div>Mục 1</div>
  <div>Mục 2</div>
  <div>Mục 3</div>
</div>
```

### Hiệu ứng chuyển cảnh và Hoạt ảnh

```tsx
// Hiệu ứng hover
<button className="
  bg-blue-500 hover:bg-blue-600
  transform hover:scale-105
  transition-all duration-200 ease-in-out
">
  Hover Me
</button>

// Vòng quay loading
<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />

// Hiệu ứng mờ dần (Fade in)
<div className="opacity-0 animate-fade-in">
  Nội dung mờ dần hiện ra
</div>

// Hoạt ảnh tùy chỉnh (thêm vào cấu hình)
// tailwind.config.js
keyframes: {
  'fade-in': {
    '0%': { opacity: '0', transform: 'translateY(10px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  }
}
animation: {
  'fade-in': 'fade-in 0.5s ease-out',
}
```

## Plugin

**Cài đặt các plugin phổ biến:**
```bash
npm install -D @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
```

**Cấu hình (tailwind.config.js):**
```javascript
export default {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
```

**Cách dùng:**
```tsx
// @tailwindcss/typography
<article className="prose prose-lg dark:prose-invert max-w-none">
  <h1>Tiêu đề bài viết</h1>
  <p>Kiểu chữ đẹp mắt mà không cần CSS tùy chỉnh.</p>
</article>

// @tailwindcss/forms
<input type="email" className="form-input rounded-lg" />
<select className="form-select rounded-lg">
  <option>Tùy chọn 1</option>
</select>

// @tailwindcss/aspect-ratio
<div className="aspect-w-16 aspect-h-9">
  <iframe src="video-url" />
</div>
```

## Các kỹ năng liên quan

- [Next.js](/vi/docs/engineer/skills/frontend/nextjs) - Tích hợp framework React
- [shadcn/ui](/vi/docs/engineer/skills/frontend/shadcn-ui) - Các component được xây dựng sẵn
- [React](/docs/engineer/skills) - Phát triển component
- [TypeScript](/docs/engineer/skills) - Tạo kiểu an toàn cho giao diện

## Tài liệu tham khảo

- **Tài liệu chính thức**: https://tailwindcss.com/docs
- **Tailwind UI**: https://tailwindui.com (các component trả phí)
- **Playground**: https://play.tailwindcss.com
- **Cheat Sheet**: https://nerdcave.com/tailwind-cheat-sheet
- **Bảng màu**: https://tailwindcss.com/docs/customizing-colors

---

**Điểm chính**: Tailwind CSS tăng tốc quá trình phát triển UI bằng cách cung cấp một bộ đầy đủ các utility class, loại bỏ nhu cầu về CSS tùy chỉnh trong khi vẫn duy trì tính linh hoạt hoàn toàn trong thiết kế. Các agent của ClaudeKit tận dụng Tailwind để nhanh chóng tạo mẫu và xây dựng các giao diện sẵn sàng cho môi trường sản xuất.
