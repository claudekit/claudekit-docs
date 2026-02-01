---
title: Kỹ năng shadcn/ui
description: Tài liệu hướng dẫn sử dụng kỹ năng shadcn-ui
section: engineer
kit: engineer
category: skills/frontend
order: 4
published: true
lang: vi
---

# Kỹ năng shadcn/ui

Một bộ sưu tập các thành phần giao diện (UI components) có thể tái sử dụng, được thiết kế đẹp mắt, xây dựng bằng Radix UI và Tailwind CSS. Không giống như các thư viện thành phần truyền thống, các thành phần của shadcn/ui được thêm trực tiếp vào dự án của bạn, giúp bạn toàn quyền kiểm soát và sở hữu.

## Những gì shadcn/ui cung cấp

- **Hơn 40 thành phần**: Button, Dialog, Dropdown, Form, Table, và nhiều hơn nữa
- **Toàn quyền sở hữu**: Các thành phần được sao chép vào dự án của bạn, không phải cài đặt dưới dạng phụ thuộc (dependency)
- **TypeScript**: Được xây dựng với TypeScript để đảm bảo an toàn kiểu dữ liệu
- **Khả năng truy cập**: Xây dựng trên các nguyên mẫu Radix UI (tuân thủ WCAG)
- **Có thể tùy chỉnh**: Kiểm soát hoàn toàn kiểu dáng và hành vi của thành phần
- **Chế độ tối (Dark Mode)**: Hỗ trợ chế độ tối tích hợp sẵn
- **Xác thực biểu mẫu**: Tích hợp với React Hook Form và Zod
- **Công cụ CLI**: Dễ dàng cài đặt các thành phần qua CLI

## Thiết lập

### Điều kiện tiên quyết

- Đã cài đặt Node.js 18+
- Next.js, Vite, hoặc framework React khác
- Đã cấu hình Tailwind CSS
- TypeScript (khuyến nghị)

### Cài đặt

**1. Khởi tạo shadcn/ui:**
```bash
npx shadcn@latest init
```

**Các câu hỏi thiết lập tương tác:**
```
✔ Preflight checks.
✔ Verifying framework. Found Next.js.
✔ Validating Tailwind CSS.

? Which style would you like to use? › New York
? Which color would you like to use as base color? › Zinc
? Would you like to use CSS variables for colors? › yes
```

**2. Cấu trúc dự án được tạo ra:**
```
your-project/
├── components/
│   └── ui/              # Các thành phần shadcn/ui được thêm vào đây
├── lib/
│   └── utils.ts         # Các hàm tiện ích (cn)
└── components.json      # Cấu hình shadcn/ui
```

**3. Thêm thành phần đầu tiên của bạn:**
```bash
npx shadcn@latest add button
```

Thao tác này sẽ sao chép thành phần Button vào `components/ui/button.tsx`.

### Thiết lập thủ công (nếu lệnh init thất bại)

**1. Cài đặt các phụ thuộc:**
```bash
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react # cho các biểu tượng (icons)
```

**2. Tạo tệp utils (lib/utils.ts):**
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**3. Cấu hình Tailwind (tailwind.config.js):**
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // ... thêm các màu khác
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

**4. Thêm các biến CSS (globals.css):**
```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    /* ... thêm các biến khác */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    /* ... thêm các biến khác */
  }
}
```

## Cách sử dụng

### Ví dụ cơ bản: Thành phần Button

**Cài đặt thành phần:**
```bash
npx shadcn@latest add button
```

**Sử dụng trong ứng dụng của bạn:**
```tsx
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="p-8 space-y-4">
      <Button>Nút mặc định</Button>
      <Button variant="destructive">Xóa</Button>
      <Button variant="outline">Đường viền</Button>
      <Button variant="secondary">Thứ cấp</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Liên kết</Button>
      <Button size="sm">Nhỏ</Button>
      <Button size="lg">Lớn</Button>
      <Button disabled>Bị vô hiệu hóa</Button>
    </div>
  )
}
```

### Ví dụ nâng cao: Biểu mẫu với xác thực

**Cài đặt các thành phần bắt buộc:**
```bash
npx shadcn@latest add form input label button
npm install react-hook-form zod @hookform/resolvers
```

**Tạo một biểu mẫu:**
```tsx
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

// Định nghĩa schema
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Tên người dùng phải có ít nhất 2 ký tự.",
  }),
  email: z.string().email({
    message: "Vui lòng nhập địa chỉ email hợp lệ.",
  }),
  password: z.string().min(8, {
    message: "Mật khẩu phải có ít nhất 8 ký tự.",
  }),
})

export function SignupForm() {
  // Khởi tạo biểu mẫu
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  })

  // Trình xử lý gửi biểu mẫu
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Tài khoản đã được tạo!",
      description: `Chào mừng, ${values.username}!`,
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên người dùng</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormDescription>
                Đây là tên hiển thị công khai của bạn.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mật khẩu</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Tạo tài khoản
        </Button>
      </form>
    </Form>
  )
}
```

### Thành phần Dialog

**Cài đặt:**
```bash
npx shadcn@latest add dialog
```

**Cách sử dụng:**
```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function DeleteDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Xóa tài khoản</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bạn có chắc chắn không?</DialogTitle>
          <DialogDescription>
            Hành động này không thể hoàn tác. Thao tác này sẽ xóa vĩnh viễn
            tài khoản của bạn và gỡ bỏ dữ liệu của bạn khỏi máy chủ của chúng tôi.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-4 mt-4">
          <Button variant="outline">Hủy bỏ</Button>
          <Button variant="destructive">Xóa</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
```

### Bảng dữ liệu (Data Table)

**Cài đặt:**
```bash
npx shadcn@latest add table
npm install @tanstack/react-table
```

**Tạo bảng dữ liệu:**
```tsx
"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Trạng thái",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Số tiền",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
      return <div className="font-medium">{formatted}</div>
    },
  },
]

export function DataTable({ data }: { data: Payment[] }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Không có kết quả.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
```

### Thông báo Toast

**Cài đặt:**
```bash
npx shadcn@latest add toast
```

**Thêm Toaster vào layout:**
```tsx
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
```

**Sử dụng toast:**
```tsx
"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Đã lên lịch: Họp mặt",
          description: "Thứ Sáu, ngày 10 tháng 2 năm 2023 lúc 5:57 PM",
        })
      }}
    >
      Hiển thị Toast
    </Button>
  )
}
```

## Tích hợp với ClaudeKit

Các agent của ClaudeKit sử dụng kỹ năng shadcn/ui để:

### 1. Phát triển giao diện nhanh chóng

```bash
# Sử dụng skill ai-artist (creative mode) để phát triển giao diện
# "tạo bảng điều khiển quản trị với các bảng dữ liệu"
```

Agent UI/UX Designer sẽ:
- Cài đặt các thành phần shadcn/ui cần thiết (Table, Dialog, Button)
- Xây dựng các giao diện dựa trên dữ liệu với khả năng truy cập phù hợp
- Triển khai xác thực biểu mẫu với React Hook Form
- Thêm thông báo toast để phản hồi người dùng

### 2. Xây dựng biểu mẫu

```bash
/cook [biểu mẫu đăng ký người dùng với xác thực]
```

Agent Developer sẽ:
- Sử dụng các thành phần Form, Input, Label
- Triển khai xác thực schema bằng Zod
- Thêm thông báo lỗi và mô tả trường dữ liệu
- Tạo các biểu mẫu an toàn kiểu dữ liệu và dễ truy cập

### 3. Các tương tác phức tạp

```bash
# Sử dụng skill ai-artist (search mode) cho tương tác nhanh
# "tạo giao diện quản lý sản phẩm"
```

Agent sẽ:
- Sử dụng Dialog cho các cửa sổ modal
- Thêm DropdownMenu cho các thao tác
- Triển khai Sheet cho các bảng điều khiển bên (side panels)
- Sử dụng Command cho bảng tìm kiếm/lệnh

## Phương pháp hay nhất

### 1. Tùy chỉnh các thành phần

Bạn có quyền sửa đổi các thành phần:

```tsx
// components/ui/button.tsx - Tùy chỉnh khi cần thiết
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // Thêm các biến thể riêng của bạn
        success: "bg-green-500 text-white hover:bg-green-600",
        info: "bg-blue-500 text-white hover:bg-blue-600",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        // Thêm các kích thước tùy chỉnh
        xl: "h-14 rounded-md px-10 text-lg",
      },
    },
  }
)
```

### 2. Kết hợp các thành phần

Xây dựng các giao diện phức tạp bằng cách kết hợp các thành phần đơn giản:

```tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ProductCard({ product }) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle>{product.name}</CardTitle>
          <Badge variant={product.inStock ? "success" : "destructive"}>
            {product.inStock ? "Còn hàng" : "Hết hàng"}
          </Badge>
        </div>
        <CardDescription>{product.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={product.image} alt={product.name} className="w-full rounded-md" />
        <p className="mt-4 text-2xl font-bold">${product.price}</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1">Thêm vào giỏ</Button>
        <Button variant="outline">Chi tiết</Button>
      </CardFooter>
    </Card>
  )
}
```

### 3. Sử dụng tiện ích cn()

Kết hợp các class theo điều kiện:

```tsx
import { cn } from "@/lib/utils"

export function Alert({ variant, className, children }) {
  return (
    <div
      className={cn(
        "rounded-lg border p-4",
        variant === "error" && "border-red-500 bg-red-50",
        variant === "success" && "border-green-500 bg-green-50",
        className
      )}
    >
      {children}
    </div>
  )
}
```

### 4. Hỗ trợ Chế độ tối

Tất cả các thành phần đều hỗ trợ chế độ tối ngay lập tức:

```tsx
// Chỉ cần thêm các class dark mode
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <Button>Hoạt động trong cả hai chế độ</Button>
</div>
```

### 5. Khả năng truy cập

Các thành phần được xây dựng trên Radix UI để đảm bảo khả năng truy cập:

```tsx
// Dialog tự động xử lý:
// - Chặn tiêu điểm (Focus trap)
// - Nhấn phím Escape để đóng
// - Click ra ngoài để đóng
// - Các thuộc tính ARIA
// - Điều hướng bằng bàn phím

<Dialog>
  <DialogTrigger>Mở</DialogTrigger>
  <DialogContent>
    {/* Mặc định hoàn toàn dễ truy cập */}
  </DialogContent>
</Dialog>
```

## Các thành phần có sẵn

### Biểu mẫu & Nhập liệu
- `button` - Thành phần nút với nhiều biến thể
- `input` - Nhập văn bản hỗ trợ xác thực
- `textarea` - Nhập văn bản nhiều dòng
- `select` - Menu chọn thả xuống
- `checkbox` - Ô đánh dấu
- `radio-group` - Nhóm nút chọn radio
- `switch` - Công tắc bật/tắt
- `slider` - Thanh trượt phạm vi
- `form` - Bao bọc biểu mẫu với xác thực

### Bố cục
- `card` - Thẻ chứa nội dung
- `separator` - Thanh phân cách ngang/dọc
- `aspect-ratio` - Khung chứa tỉ lệ khung hình
- `scroll-area` - Khu vực thanh cuộn tùy chỉnh

### Lớp phủ (Overlay)
- `dialog` - Cửa sổ modal
- `sheet` - Bảng trượt ra (side panel)
- `popover` - Lớp phủ popover
- `tooltip` - Chú giải khi di chuột qua
- `alert-dialog` - Cửa sổ xác nhận

### Điều hướng
- `navigation-menu` - Menu điều hướng
- `dropdown-menu` - Menu thả xuống
- `menubar` - Thanh menu
- `tabs` - Giao diện tab
- `command` - Bảng điều khiển lệnh

### Hiển thị dữ liệu
- `table` - Bảng dữ liệu
- `badge` - Huy hiệu trạng thái
- `avatar` - Ảnh đại diện người dùng
- `progress` - Thanh tiến trình
- `skeleton` - Khung xương khi đang tải

### Phản hồi
- `toast` - Thông báo toast
- `alert` - Thông báo cảnh báo
- `label` - Nhãn cho biểu mẫu

## Các mô hình phổ biến

### Biểu mẫu với nhiều trường dữ liệu

```bash
npx shadcn@latest add form input select checkbox
```

```tsx
const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  role: z.string(),
  terms: z.boolean().refine((val) => val === true, {
    message: "Bạn phải chấp nhận các điều khoản và điều kiện",
  }),
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="name" render={({ field }) => (
          <FormItem>
            <FormLabel>Tên</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField name="role" render={({ field }) => (
          <FormItem>
            <FormLabel>Vai trò</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn một vai trò" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="admin">Quản trị viên</SelectItem>
                <SelectItem value="user">Người dùng</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )} />

        <Button type="submit">Gửi</Button>
      </form>
    </Form>
  )
}
```

### Cửa sổ xác nhận

```tsx
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"

export function DeleteButton({ onDelete }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Xóa</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Bạn có chắc chắn không?</AlertDialogTitle>
          <AlertDialogDescription>
            Hành động này không thể hoàn tác.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Hủy bỏ</AlertDialogCancel>
          <AlertDialogAction onClick={onDelete}>
            Xóa
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
```

## Các lệnh CLI

```bash
# Liệt kê tất cả các thành phần có sẵn
npx shadcn@latest add

# Thêm một thành phần cụ thể
npx shadcn@latest add button

# Thêm nhiều thành phần
npx shadcn@latest add button input form

# Cập nhật tất cả các thành phần
npx shadcn@latest update

# Kiểm tra các thành phần đã lỗi thời
npx shadcn@latest diff
```

## Các kỹ năng liên quan

- [Tailwind CSS](/vi/docs/engineer/skills/tailwindcss) - Nền tảng tạo kiểu
- [Next.js](/vi/docs/engineer/skills/nextjs) - Tích hợp framework React
- [React Hook Form](/vi/docs/engineer/skills/react-hook-form) - Quản lý biểu mẫu
- [Zod](/vi/docs/engineer/skills/zod) - Xác thực schema

## Tài liệu tham khảo

- **Trang web chính thức**: https://ui.shadcn.com
- **llms.txt**: https://ui.shadcn.com/llms.txt
- **Thành phần**: https://ui.shadcn.com/docs/components
- **Chủ đề**: https://ui.shadcn.com/themes
- **Ví dụ**: https://ui.shadcn.com/examples
- **GitHub**: https://github.com/shadcn-ui/ui

---

**Điểm chính**: shadcn/ui cung cấp các thành phần giao diện sẵn sàng cho sản xuất, dễ truy cập mà bạn hoàn toàn sở hữu và kiểm soát. Không giống như các thư viện thành phần truyền thống, các thành phần này nằm trong mã nguồn của bạn, mang lại cho bạn sự linh hoạt hoàn toàn để tùy chỉnh và mở rộng. Các agent của ClaudeKit tận dụng shadcn/ui để nhanh chóng xây dựng các giao diện đẹp, dễ truy cập với nỗ lực tối thiểu.
