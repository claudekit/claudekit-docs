---
title: "Scout External Agent"
description: "Advanced codebase exploration using external AI tools for complex multi-directory searches."
section: marketing
category: agents
order: 7
---

# Scout External Agent

> **Your AI-powered explorer** - Harnesses Gemini and other AI tools for deep codebase analysis

## What This Agent Does

Bạn đang làm việc với một monorepo khổng lồ với hàng trăm thư mục. Bạn cần tìm tất cả các tệp chạm vào xác thực người dùng - nhưng nó nằm rải rác trên frontend, backend, mobile, và các thư viện chia sẻ. Scout tiêu chuẩn sẽ mất nhiều phút tìm kiếm tuần tự.

**The Problem**: Các cơ sở mã lớn, phức tạp cần tìm kiếm song song, thông minh trên nhiều thư mục. Khớp mẫu đơn giản không đủ - bạn cần AI hiểu ngữ nghĩa mã và các mối quan hệ.

**The Solution**: Scout External điều phối nhiều trợ lý AI viết mã (Gemini, OpenCode) để tìm kiếm các phần khác nhau của cơ sở mã của bạn đồng thời. Nó ủy quyền các tìm kiếm phức tạp cho các công cụ AI có cửa sổ ngữ cảnh khổng lồ, sau đó tổng hợp kết quả thành các danh sách tệp có hành động.

## Quick Start

Ủy quyền các tìm kiếm phức tạp cho AI:

```bash
# For large codebase searches
/scout-ext "Find all authentication files across frontend, backend, and mobile apps"
```

Nhiều công cụ AI tìm kiếm song song, hiểu ngữ nghĩa mã để tìm các tệp có liên quan mà bạn sẽ bỏ lỡ với khớp mẫu.

## Capabilities

### AI-Powered Search Orchestration
Phối hợp nhiều trợ lý AI:
- Ủy quyền các khu vực tìm kiếm cho Gemini Flash 2.5 (ngữ cảnh 2M)
- Sử dụng OpenCode để phân tích mã chuyên biệt
- Chạy tìm kiếm song song để tăng tốc độ
- Kết hợp kết quả từ nhiều công cụ
- Quay lại các công cụ tiêu chuẩn nếu AI không có sẵn

### Semantic Code Understanding
Các công cụ AI hiểu ý nghĩa của mã:
- Tìm tệp theo chức năng, không chỉ từ khóa
- Xác định các tệp liên quan ngay cả với cách đặt tên khác nhau
- Hiểu các mối quan hệ nhập khẩu và phụ thuộc
- Nhận ra các mẫu trên các cơ sở mã khác nhau
- Gợi ý các tệp bạn không biết có liên quan

### Intelligent Directory Division
Tối ưu hóa tìm kiếm theo các phần logic:
- Frontend: `app/`, `components/`, `pages/`
- Backend: `lib/`, `api/`, `services/`
- Mobile: `mobile/ios/`, `mobile/android/`, `mobile/shared/`
- Database: `db/`, `prisma/`, `migrations/`
- Infrastructure: `k8s/`, `docker/`, `.github/`

### Parallel Execution at Scale
Xử lý các cơ sở mã khổng lồ:
- Tạo 2-5 các agent tìm kiếm AI song song
- Hết thời gian 3 phút trên mỗi agent
- Tiếp tục ngay cả khi một số agent hết thời gian
- Hoàn thành tìm kiếm trong 3-5 phút tổng cộng
- Tỷ lệ với các cơ sở mã có hàng ngàn tệp

### Result Synthesis
Kết hợp các phát hiện một cách thông minh:
- Loại bỏ các tệp được tìm thấy bởi nhiều agent
- Tổ chức theo danh mục và tầm quan trọng
- Xác định các khoảng trống nếu agent hết thời gian
- Xếp hạng kết quả theo mức độ liên quan
- Cung cấp đầu ra có cấu trúc, có hành động

## When to Use

Sử dụng Scout External khi:
- Làm việc với monorepos hoặc các cơ sở mã rất lớn
- Cần tìm kiếm trên nhiều thư mục không liên quan
- Khớp mẫu không tìm thấy tất cả các tệp có liên quan
- Yêu cầu hiểu ngữ nghĩa về mối quan hệ mã
- Bắt đầu công việc trên các tính năng trải dài trên nhiều hệ thống con
- Onboarding để phức tạp, cơ sở mã không quen

## Example Workflows

### Monorepo Authentication Search

```bash
/scout-ext "Find all authentication and session management across web, mobile, and API"
```

**AI agents search**:
- Agent 1: Web app (`app/`, `components/`) for auth UI and logic
- Agent 2: API (`api/`, `lib/`) for auth endpoints and utilities
- Agent 3: Mobile (`mobile/`) for mobile auth flows
- Agent 4: Database (`db/`) for user and session schemas
- Agent 5: Shared (`shared/`, `packages/`) for common auth code

**You get**: Danh sách toàn diện tất cả các tệp liên quan xác thực trên toàn bộ monorepo trong dưới 5 phút.

### Payment Integration Analysis

```bash
/scout-ext "Locate all payment processing files including Stripe, SePay, webhooks, and transaction logging"
```

**AI understands**:
- "Payment processing" includes checkout flows, not just API calls
- "Webhooks" means both handlers AND configuration
- "Transaction logging" implies database schemas AND audit logs

**Returns**: Không chỉ các tệp thanh toán rõ ràng, mà còn cả xử lý lỗi, logic thử lại, và mã giám sát liên quan.

## Search Strategy

### Small Scale (2-3 agents)
Cho các tìm kiếm tập trung:
```bash
# Uses only Gemini
Agent 1: Search lib/ for payment utilities
Agent 2: Search app/api/ for payment routes
Agent 3: Search db/ for payment schemas
```

### Large Scale (4-5 agents)
Cho các tìm kiếm toàn diện:
```bash
# Uses Gemini + OpenCode for diversity
Agent 1 (Gemini): Frontend payment UI
Agent 2 (Gemini): Backend payment logic
Agent 3 (OpenCode): Database and migrations
Agent 4 (Gemini): Webhook handlers
Agent 5 (OpenCode): Configuration and tests
```

## AI Tool Commands

**Gemini Flash 2.5** (primary):
```bash
gemini -y -p "Search app/ for email-related files. Return file paths only." --model gemini-2.5-flash
```

**OpenCode** (secondary):
```bash
opencode run "Search db/ for schema files. Return file paths only." --model opencode/grok-code
```

**Fallback**: Nếu công cụ AI không có sẵn, sử dụng các công cụ tiêu chuẩn Glob/Grep/Read.

## Performance Characteristics

Được tối ưu hóa cho các tìm kiếm quy mô lớn:
- **Speed**: 3-5 minutes for entire monorepo
- **Accuracy**: Semantic understanding beats pattern matching
- **Coverage**: Parallel agents ensure no directory missed
- **Resilience**: Continues if individual agents timeout
- **Cost**: Gemini Flash 2.5 at $0.075/$0.30 per 1M tokens (cheap)

## Comparison with Standard Scout

| Feature | Scout | Scout External |
|---------|-------|----------------|
| Best for | Single codebase, clear patterns | Monorepos, complex searches |
| Search method | Pattern matching | AI semantic understanding |
| Parallelization | Limited | High (2-5 agents) |
| Context understanding | None | Deep semantic analysis |
| Speed (small codebase) | 3-10 seconds | 30-60 seconds |
| Speed (large monorepo) | 2-5 minutes | 3-5 minutes |
| Accuracy | Good for exact patterns | Better for related code |

## Related Agents

- [Scout](/docs/marketing/agents/scout) - Standard file search for smaller tasks
- [Planner](/docs/marketing/agents/planner) - Uses scout results for planning
- [MCP Manager](/docs/marketing/agents/mcp-manager) - Manages external tool integrations

## Related Commands

- [`/scout-ext`](/docs/marketing/commands/scout-ext) - AI-powered codebase search
- [`/scout`](/docs/marketing/commands/scout) - Standard file search

## Tips

**Use for Big Searches**: Nếu Scout tiêu chuẩn mất >30 giây, hãy thử Scout External. Tính song song AI tăng tốc độ các tìm kiếm lớn.

**Describe Functionality**: Thay vì "tìm tệp với 'stripe' trong chúng", hãy nói "tìm xử lý thanh toán và tệp webhook". AI hiểu ý định.

**Trust Semantic Search**: AI có thể gợi ý các tệp bạn không mong đợi. Nếu Gemini nghĩ một tệp có liên quan, nó có thể - ngay cả khi cách đặt tên không khớp.

**Check Timeouts**: Nếu một agent hết thời gian, kết quả sẽ ghi chú khoảng trống. Bạn có thể chạy lại hoặc tìm kiếm phần đó theo cách thủ công.

## Example Output

```
AI-Powered Search Results (5 agents, 4.2 minutes):

Frontend Payment UI (Agent 1 - Gemini):
- app/checkout/page.tsx - Checkout page with Stripe Elements
- components/PaymentForm.tsx - Payment form component
- components/PaymentMethod.tsx - Payment method selector

Backend Payment Logic (Agent 2 - Gemini):
- lib/stripe/client.ts - Stripe API client
- lib/sepay/client.ts - SePay API client
- api/checkout/route.ts - Checkout API endpoint
- api/payment-intent/route.ts - Payment intent creation

Database & Schemas (Agent 3 - OpenCode):
- db/schema/payments.ts - Payment records schema
- db/schema/transactions.ts - Transaction logs
- db/migrations/001_add_payments.sql - Payment tables migration

Webhooks (Agent 4 - Gemini):
- api/webhooks/stripe/route.ts - Stripe webhook handler
- api/webhooks/sepay/route.ts - SePay webhook handler
- lib/webhooks/verify.ts - Webhook signature verification

Configuration & Tests (Agent 5 - OpenCode):
- config/payment.ts - Payment provider configuration
- __tests__/payment/stripe.test.ts - Stripe integration tests
- __tests__/webhooks/verify.test.ts - Webhook verification tests

Coverage: Complete (all agents succeeded, 0 timeouts)
```

## Advanced Usage

**Timeout Handling**:
Nếu agent hết thời gian, Scout External tiếp tục với các tìm kiếm đã hoàn thành và ghi chú các khoảng trống:
```
⚠️ Agent 3 (database search) timed out - partial results
Consider: Manually search db/ directory for schema files
```

**Cost Optimization**:
Gemini Flash 2.5 cực rẻ ($0.075/1M token input). Một tìm kiếm điển hình chi phí ít hơn $0.01. Sử dụng tự do.

**Custom Prompts**:
Để các tìm kiếm rất cụ thể, tạo các nhắc chi tiết:
```bash
/scout-ext "Find all files that implement retry logic for external API calls, including exponential backoff and error handling"
```

Scout External Agent là công cụ điện của bạn để khám phá cơ sở mã phức tạp. Khi tìm kiếm tiêu chuẩn không đủ, hãy mang AI.
