---
title: shadcn/ui Skill
description: "Documentation for shadcn/ui Skill
description:
section: docs
category: skills/frontend
order: 4
published: true"
section: docs
category: skills/frontend
order: 4
published: true
---

# shadcn/ui Skill

A collection of re-usable, beautifully-designed UI components built with Radix UI and Tailwind CSS. Unlike traditional component libraries, shadcn/ui components are added directly to your project, giving you full control and ownership.

## What shadcn/ui Provides

- **40+ Components**: Button, Dialog, Dropdown, Form, Table, and more
- **Full Ownership**: Components are copied to your project, not installed as a dependency
- **TypeScript**: Built with TypeScript for type safety
- **Accessible**: Built on Radix UI primitives (WCAG compliant)
- **Customizable**: Full control over component styling and behavior
- **Dark Mode**: Built-in dark mode support
- **Form Validation**: Integrated with React Hook Form and Zod
- **CLI Tool**: Easy component installation via CLI

## Setup

### Prerequisites

- Node.js 18+ installed
- Next.js, Vite, or other React framework
- Tailwind CSS configured
- TypeScript (recommended)

### Installation

**1. Initialize shadcn/ui:**
```bash
npx shadcn@latest init
```

**Interactive setup prompts:**
```
✔ Preflight checks.
✔ Verifying framework. Found Next.js.
✔ Validating Tailwind CSS.

? Which style would you like to use? › New York
? Which color would you like to use as base color? › Zinc
? Would you like to use CSS variables for colors? › yes
```

**2. Project structure created:**
```
your-project/
├── components/
│   └── ui/              # shadcn/ui components added here
├── lib/
│   └── utils.ts         # Utility functions (cn)
└── components.json      # shadcn/ui configuration
```

**3. Add your first component:**
```bash
npx shadcn@latest add button
```

This copies the Button component to `components/ui/button.tsx`.

### Manual Setup (if init fails)

**1. Install dependencies:**
```bash
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react # for icons
```

**2. Create utils file (lib/utils.ts):**
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**3. Configure Tailwind (tailwind.config.js):**
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
        // ... more colors
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

**4. Add CSS variables (globals.css):**
```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    /* ... more variables */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    /* ... more variables */
  }
}
```

## Usage

### Basic Example: Button Component

**Install component:**
```bash
npx shadcn@latest add button
```

**Use in your app:**
```tsx
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="p-8 space-y-4">
      <Button>Default Button</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button disabled>Disabled</Button>
    </div>
  )
}
```

### Advanced Example: Form with Validation

**Install required components:**
```bash
npx shadcn@latest add form input label button
npm install react-hook-form zod @hookform/resolvers
```

**Create a form:**
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

// Define schema
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

export function SignupForm() {
  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  })

  // Submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Account created!",
      description: `Welcome, ${values.username}!`,
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
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </form>
    </Form>
  )
}
```

### Dialog Component

**Install:**
```bash
npx shadcn@latest add dialog
```

**Usage:**
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
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-4 mt-4">
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
```

### Data Table

**Install:**
```bash
npx shadcn@latest add table
npm install @tanstack/react-table
```

**Create data table:**
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
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
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
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
```

### Toast Notifications

**Install:**
```bash
npx shadcn@latest add toast
```

**Add Toaster to layout:**
```tsx
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
```

**Use toast:**
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
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
```

## Integration with ClaudeKit

ClaudeKit agents use the shadcn/ui skill to:

### 1. Rapid UI Development

```bash
/design:good [admin dashboard with data tables]
```

The UI/UX Designer agent will:
- Install required shadcn/ui components (Table, Dialog, Button)
- Build data-driven interfaces with proper accessibility
- Implement form validation with React Hook Form
- Add toast notifications for user feedback

### 2. Form Building

```bash
/cook [user registration form with validation]
```

The Developer agent will:
- Use Form, Input, Label components
- Implement Zod schema validation
- Add error messages and field descriptions
- Create accessible, type-safe forms

### 3. Complex Interactions

```bash
/design:fast [product management interface]
```

The agent will:
- Use Dialog for modals
- Add DropdownMenu for actions
- Implement Sheet for side panels
- Use Command for search/command palette

## Best Practices

### 1. Customize Components

Components are yours to modify:

```tsx
// components/ui/button.tsx - Customize as needed
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // Add your own variants
        success: "bg-green-500 text-white hover:bg-green-600",
        info: "bg-blue-500 text-white hover:bg-blue-600",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        // Add custom sizes
        xl: "h-14 rounded-md px-10 text-lg",
      },
    },
  }
)
```

### 2. Compose Components

Build complex UIs by composing simple components:

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
            {product.inStock ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>
        <CardDescription>{product.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={product.image} alt={product.name} className="w-full rounded-md" />
        <p className="mt-4 text-2xl font-bold">${product.price}</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1">Add to Cart</Button>
        <Button variant="outline">Details</Button>
      </CardFooter>
    </Card>
  )
}
```

### 3. Use the cn() Utility

Merge classes conditionally:

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

### 4. Dark Mode Support

All components support dark mode out of the box:

```tsx
// Just add dark mode classes
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <Button>Works in both modes</Button>
</div>
```

### 5. Accessibility

Components are built on Radix UI for accessibility:

```tsx
// Dialog automatically handles:
// - Focus trap
// - Escape key to close
// - Click outside to close
// - ARIA attributes
// - Keyboard navigation

<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    {/* Fully accessible by default */}
  </DialogContent>
</Dialog>
```

## Available Components

### Form & Input
- `button` - Button component with multiple variants
- `input` - Text input with validation support
- `textarea` - Multi-line text input
- `select` - Dropdown select
- `checkbox` - Checkbox input
- `radio-group` - Radio button group
- `switch` - Toggle switch
- `slider` - Range slider
- `form` - Form wrapper with validation

### Layout
- `card` - Card container
- `separator` - Horizontal/vertical separator
- `aspect-ratio` - Aspect ratio container
- `scroll-area` - Custom scrollbar area

### Overlay
- `dialog` - Modal dialog
- `sheet` - Slide-out panel
- `popover` - Popover overlay
- `tooltip` - Tooltip on hover
- `alert-dialog` - Confirmation dialog

### Navigation
- `navigation-menu` - Navigation menu
- `dropdown-menu` - Dropdown menu
- `menubar` - Menu bar
- `tabs` - Tabbed interface
- `command` - Command palette

### Data Display
- `table` - Data table
- `badge` - Status badge
- `avatar` - User avatar
- `progress` - Progress bar
- `skeleton` - Loading skeleton

### Feedback
- `toast` - Toast notification
- `alert` - Alert message
- `label` - Form label

## Common Patterns

### Form with Multiple Fields

```bash
npx shadcn@latest add form input select checkbox
```

```tsx
const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  role: z.string(),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
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
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField name="role" render={({ field }) => (
          <FormItem>
            <FormLabel>Role</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="user">User</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )} />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

### Confirmation Dialog

```tsx
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"

export function DeleteButton({ onDelete }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onDelete}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
```

## CLI Commands

```bash
# List all available components
npx shadcn@latest add

# Add specific component
npx shadcn@latest add button

# Add multiple components
npx shadcn@latest add button input form

# Update all components
npx shadcn@latest update

# Check for outdated components
npx shadcn@latest diff
```

## Related Skills

- [Tailwind CSS](/docs/skills/frontend/tailwindcss) - Styling foundation
- [Next.js](/docs/skills/frontend/nextjs) - React framework integration

## Reference

- **Official Site**: https://ui.shadcn.com
- **llms.txt**: https://ui.shadcn.com/llms.txt
- **Components**: https://ui.shadcn.com/docs/components
- **Themes**: https://ui.shadcn.com/themes
- **Examples**: https://ui.shadcn.com/examples
- **GitHub**: https://github.com/shadcn-ui/ui

---

**Key Takeaway**: shadcn/ui provides production-ready, accessible UI components that you own and control. Unlike traditional component libraries, these components live in your codebase, giving you complete flexibility to customize and extend them. ClaudeKit agents leverage shadcn/ui to rapidly build beautiful, accessible interfaces with minimal effort.
