---
lang: vi
title: "ckm:backend-development"
description: "Xây dựng hệ thống backend với Node.js, Python, Go, NestJS, FastAPI"
section: marketing
kit: marketing
category: skills
order: 62
---

# `ckm:backend-development`

> Xây dựng API và hệ thống backend production-ready với kiến trúc hiện đại và best practices bảo mật.

## Skill Này Làm Gì

**Thách thức**: Các công cụ marketing thường cần backend để xử lý webhooks, tích hợp API bên thứ ba, lưu trữ dữ liệu và tự động hóa quy trình. Thiết lập từ đầu tốn thời gian và dễ mắc lỗi bảo mật.

**Giải pháp**: Skill backend-development cung cấp templates, patterns và hướng dẫn cho Node.js, Python (FastAPI), Go và NestJS — với tích hợp auth, database và deployment sẵn có.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi cần xây dựng API endpoint, webhook handler hoặc background job.

**Tường minh**: Kích hoạt qua prompt:
```
Activate backend-development skill to build [mô tả hệ thống]
```

## Tính Năng

### 1. Node.js / NestJS API
Framework có cấu trúc cho API phức tạp với dependency injection và TypeScript.

**Tạo CRUD endpoint nhanh**:
```typescript
// NestJS controller
@Controller('leads')
@UseGuards(JwtAuthGuard)
export class LeadsController {
  constructor(private leadsService: LeadsService) {}

  @Post()
  async create(@Body() createLeadDto: CreateLeadDto) {
    return this.leadsService.create(createLeadDto);
  }

  @Get()
  async findAll(@Query() query: PaginationDto) {
    return this.leadsService.findAll(query);
  }
}
```

### 2. Python / FastAPI
API nhanh với tự động tạo docs OpenAPI, ideal cho data processing và ML integration.

**Ví dụ endpoint phân tích**:
```python
from fastapi import FastAPI, Depends
from pydantic import BaseModel

app = FastAPI()

class AnalyticsRequest(BaseModel):
    campaign_id: str
    date_range: str
    metrics: list[str]

@app.post("/analytics/report")
async def generate_report(
    request: AnalyticsRequest,
    api_key: str = Depends(verify_api_key)
):
    return await analytics_service.generate(request)
```

### 3. Webhook Handlers
Xử lý webhooks từ Stripe, Zapier, HubSpot và các dịch vụ marketing phổ biến.

**Webhook với signature verification**:
```javascript
// Express webhook handler
app.post('/webhooks/stripe', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  // Xử lý event
  handleStripeEvent(event);
  res.json({ received: true });
});
```

### 4. Background Jobs & Queues
Xử lý tác vụ bất đồng bộ như gửi email, tạo báo cáo, đồng bộ dữ liệu.

**Bull queue với Redis**:
```typescript
// Job producer
await emailQueue.add('welcome-email', {
  userId: user.id,
  email: user.email,
  template: 'welcome'
}, {
  delay: 5000,
  attempts: 3,
  backoff: { type: 'exponential', delay: 2000 }
});

// Job consumer
emailQueue.process('welcome-email', async (job) => {
  await emailService.send(job.data);
});
```

## Điều Kiện Tiên Quyết

**Node.js stack**:
- Node.js 18+
- npm hoặc bun
- PostgreSQL hoặc MongoDB

**Python stack**:
- Python 3.11+
- pip hoặc uv
- Redis (cho queue)

## Cấu Hình

**Biến môi trường chuẩn** (`.env`):
```bash
DATABASE_URL=postgresql://user:pass@localhost:5432/db
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-secret-key
API_KEY_SALT=random-salt
WEBHOOK_SECRET=stripe-webhook-secret
```

**Cấu trúc project NestJS**:
```
src/
├── auth/
├── common/
│   ├── decorators/
│   ├── guards/
│   └── interceptors/
├── modules/
│   ├── leads/
│   ├── campaigns/
│   └── analytics/
└── main.ts
```

## Thực Hành Tốt Nhất

**1. API Versioning Ngay Từ Đầu**
Dùng `/api/v1/` prefix để tránh breaking changes khi update.

**2. Rate Limiting Mọi Endpoint**
Bảo vệ khỏi abuse và đảm bảo fair usage.

**3. Logging Có Cấu Trúc**
Log với JSON format để dễ parsing và alerting.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Marketing Automation API
**Tình huống**: Cần API để trigger email sequences từ website actions.

**Quy trình**:
1. Tạo endpoint nhận lead data
2. Validate và deduplicate
3. Đẩy vào email queue
4. Webhook thông báo CRM

### Trường Hợp 2: Analytics Aggregator
**Tình huống**: Tổng hợp dữ liệu từ nhiều nền tảng marketing vào một dashboard.

**Quy trình**:
1. Cron jobs lấy dữ liệu từ APIs (GA4, Meta, LinkedIn)
2. Normalize và lưu vào PostgreSQL
3. API endpoint phục vụ dashboard

## Xử Lý Sự Cố

**Vấn đề**: Memory leak trong long-running process
**Giải pháp**: Dùng PM2 với `--max-memory-restart 512M`. Audit circular references và event listeners.

**Vấn đề**: Database connection pool exhausted
**Giải pháp**: Giới hạn pool size, implement connection retry với exponential backoff.

## Skill Liên Quan

- [Databases](/vi/docs/marketing/skills/databases) - Thiết kế và tối ưu database
- [DevOps](/vi/docs/marketing/skills/devops) - Deploy backend lên production
- [Debugging](/vi/docs/marketing/skills/debugging) - Gỡ lỗi backend issues

## Lệnh Liên Quan

- `/ckm:backend-development` - Bắt đầu xây dựng backend
- `/ckm:databases` - Thiết kế schema database
- `/ckm:devops` - Deploy lên cloud
