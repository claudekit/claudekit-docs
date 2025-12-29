---
title: "Scout Agent"
description: "Rapidly locate relevant files across large codebases using intelligent search strategies."
section: marketing
category: agents
order: 6
---

# Scout Agent

> **Your codebase explorer** - Finds exactly what you need in seconds, not hours

## What This Agent Does

Bạn cần thêm một nhà cung cấp thanh toán mới. Nhưng mã thanh toán ở đâu? Nó ở `lib/payments`? `app/api/checkout`? `services/billing`? Bạn dành 20 phút nhấp qua các thư mục, sử dụng ctrl+F, không đi đến đâu.

**The Problem**: Các cơ sở mã lớn là mê cung. Tìm kiếm tất cả các tệp liên quan đến tính năng đòi hỏi phải hiểu cấu trúc dự án một cách kỹ lưỡng. Các nhà phát triển mới lãng phí hàng giờ tìm kiếm. Ngay cả các nhà phát triển có kinh nghiệm cũng quên nơi các chức năng cụ thể được cư trú.

**The Solution**: Scout Agent nhanh chóng tìm các tệp liên quan bằng cách sử dụng các mẫu tìm kiếm thông minh. Nó hiểu cấu trúc dự án, tìm kiếm nhiều thư mục song song, và trả về danh sách tệp được sắp xếp. Bạn bắt đầu làm việc ngay lập tức thay vì thợ săn tệp.

## Quick Start

Tìm kiếm tệp cho bất kỳ công việc nào:

```bash
# Starting a feature
/scout "Find all email sending and template files"
```

Bạn sẽ nhận được một danh sách được phân loại của các tệp có liên quan:
- Core utilities: `lib/email.ts`
- API routes: `app/api/send-email/route.ts`
- Templates: `templates/welcome-email.tsx`
- Tests: `__tests__/email.test.ts`

## Capabilities

### Intelligent File Discovery
Sử dụng nhiều chiến lược tìm kiếm:
- Pattern matching with glob (`**/*.{ts,tsx}`)
- Content search with grep (function names, imports)
- Directory structure analysis
- File naming conventions
- Recent modification timestamps

### Multi-Directory Parallel Search
Tìm kiếm các phần được chia logic:
- Backend code (`lib/`, `app/api/`, `services/`)
- Frontend components (`components/`, `app/`)
- Database schemas (`db/`, `prisma/`)
- Configuration (`config/`, `.env.*`)
- Tests (`__tests__/`, `*.test.ts`)

### Context-Aware Search
Hiểu những gì bạn đang tìm kiếm:
- Payment features → `checkout/`, `billing/`, `webhooks/`
- Authentication → `auth/`, `middleware/`, `session/`
- Database → `schema/`, `migrations/`, `queries/`
- Email → `email/`, `templates/`, `notifications/`

### Organized Results
Trình bày các phát hiện một cách rõ ràng:
- Groups by category (API, utilities, components, tests)
- Sorts by relevance and recency
- Removes duplicates
- Provides file paths (not just names)
- Includes brief file purpose when available

## When to Use

Sử dụng Scout Agent khi bạn cần:
- Bắt đầu công việc trên một tính năng trải dài trên nhiều thư mục
- Gỡ rối một vấn đề và tìm tất cả các tệp liên quan
- Hiểu cấu trúc dự án hoặc nơi chức năng sống
- Tái cấu trúc mã trên nhiều tệp
- Thêm bài kiểm tra cho các tính năng hiện có
- Tích hợp với các hệ thống hiện có

## Example Workflows

### Finding Payment Integration Files

```bash
/scout "Locate all payment processing files for Stripe and SePay"
```

**Scout will find**:
- Payment utilities: `lib/payment/stripe.ts`, `lib/payment/sepay.ts`
- API routes: `app/api/webhooks/stripe/route.ts`, `app/api/webhooks/sepay/route.ts`
- Database schemas: `db/schema/payments.ts`, `db/schema/transactions.ts`
- Config files: `.env.example` (payment API keys)
- Tests: `__tests__/payment/stripe.test.ts`

### Debugging Authentication Flow

```bash
/scout "Find all authentication and session management files"
```

**You'll get**:
- Auth utilities: `lib/auth.ts`, `lib/session.ts`
- Middleware: `middleware/auth.ts`, `middleware/session.ts`
- API routes: `app/api/auth/[...nextauth]/route.ts`
- Components: `components/LoginForm.tsx`, `components/ProtectedRoute.tsx`
- Database: `db/schema/users.ts`, `db/schema/sessions.ts`

### Understanding Database Structure

```bash
/scout "Show me all database schema and migration files"
```

**Scout returns**:
- Schema definitions: `db/schema/*.ts`
- Migrations: `db/migrations/*.sql`
- Database config: `db/config.ts`, `.env.database`
- ORM queries: `db/queries/*.ts`

## Search Strategies

Scout sử dụng các kỹ thuật này:

**1. Glob Pattern Matching**
```bash
# Find all TypeScript API files
**​/api/**​/*.{ts,tsx}

# Find all test files
**​/*.{test,spec}.{ts,tsx}
```

**2. Content Search (Grep)**
```bash
# Find files importing payment library
grep "import.*stripe" --files-with-matches

# Find function definitions
grep "function sendEmail" --files-with-matches
```

**3. Directory Intelligence**
Biết nơi tìm kiếm dựa trên nhiệm vụ:
- Payment features → `lib/payment/`, `app/api/checkout/`
- Email → `lib/email/`, `templates/`
- Auth → `middleware/`, `lib/auth/`

## Search Scope

Vị trí tìm kiếm mặc định:
```
Project Root
├── app/          # Next.js app directory (routes, layouts)
├── lib/          # Utility functions and core logic
├── components/   # React components
├── db/           # Database schemas and migrations
├── public/       # Static assets
├── __tests__/    # Test files
└── config/       # Configuration files
```

## Performance

Được tối ưu hóa cho tốc độ:
- Parallel directory searches
- Efficient glob patterns
- Minimal file reading (paths only unless needed)
- Completes in 3-5 seconds for large codebases
- Uses caching when available

## Related Agents

- [Scout External](/docs/marketing/agents/scout-external) - Uses AI tools for complex searches
- [Planner](/docs/marketing/agents/planner) - Uses scout results for planning
- [Docs Manager](/docs/marketing/agents/docs-manager) - Uses scout to map codebase

## Related Commands

- [`/scout`](/docs/marketing/commands/scout) - Search for files
- [`/explore`](/docs/marketing/commands/explore) - Interactive code exploration

## Tips

**Be Specific**: "Find payment files" is vague. "Find Stripe webhook handling and signature verification files" gets targeted results.

**Use for Onboarding**: New to a codebase? Scout the main features to understand structure. "Find all API routes" gives you a project map.

**Combine with Grep**: Scout finds files, grep finds specific code within them. Use together for deep searches.

**Trust the Categories**: Scout groups results logically. If you need tests, look at the "Tests" section—don't hunt through all results.

## Example Scout Output

```
Found 12 files related to email functionality:

Core Utilities:
- lib/email/mailer.ts - Email sending service
- lib/email/templates.ts - Template rendering

API Routes:
- app/api/send-email/route.ts - Email sending endpoint
- app/api/webhooks/sendgrid/route.ts - SendGrid webhook handler

Email Templates:
- templates/welcome-email.tsx - Welcome email template
- templates/campaign-email.tsx - Campaign email template
- templates/notification-email.tsx - Notification template

Configuration:
- config/email.ts - Email service configuration
- .env.example - Email API keys

Tests:
- __tests__/email/mailer.test.ts - Email service tests
- __tests__/api/send-email.test.ts - API endpoint tests

Database:
- db/schema/email-logs.ts - Email delivery tracking
```

## Advanced Usage

**Exclude Patterns**:
```bash
# Find TypeScript files excluding tests
/scout "TypeScript files but skip test files"
```

**Recent Changes**:
```bash
# Files modified recently
/scout "Files changed in last commit related to authentication"
```

**Cross-Feature Search**:
```bash
# Multiple features
/scout "All webhook handlers for payment providers"
```

Scout Agent loại bỏ vấn đề "Tệp này ở đâu?". Bạn mô tả những gì bạn cần, nó tìm thấy. Đơn giản.
