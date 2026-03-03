---
lang: vi
title: "ckm:marketing-dashboard"
description: "Trung tâm điều khiển marketing cho solopreneur"
section: marketing
kit: marketing
category: skills
order: 85
---

# `ckm:marketing-dashboard`

> Xây dựng marketing command center để quản lý toàn bộ hoạt động từ một nơi.

## Skill Này Làm Gì

**Thách thức**: Solopreneur và small marketing teams phải juggle hàng chục tools — analytics, email, social, ads, SEO — chuyển qua lại giữa các tabs mất thời gian và dễ bỏ sót insights quan trọng.

**Giải pháp**: Skill marketing-dashboard tạo ra unified command center tổng hợp data từ tất cả marketing channels, hiển thị KPIs quan trọng và cung cấp action items ưu tiên.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi cần overview marketing performance hoặc daily briefing.

**Tường minh**: Kích hoạt qua prompt:
```
Activate marketing-dashboard skill to [create/update/view] [dashboard type]
```

## Tính Năng

### 1. Daily Marketing Briefing
Snapshot hàng ngày về những gì quan trọng nhất.

**Briefing format**:
```markdown
## Marketing Briefing — [Ngày]

### 🎯 Priority Actions Today
1. [Action cần làm ngay — với deadline]
2. [Action quan trọng thứ 2]
3. [Action nếu còn thời gian]

### 📊 Yesterday's Numbers
| Metric | Yesterday | vs Last Week | Status |
|--------|-----------|-------------|--------|
| Website Visitors | 1,247 | +12% | ✅ |
| New Signups | 23 | +5% | ✅ |
| MRR | $4,850 | +2% | ✅ |
| Churn | 2 | 0 | ✅ |

### 🔴 Alerts
- Email bounce rate 5.2% (threshold: 3%) → Cần clean list

### 📅 This Week
- Tuesday: Email campaign #12 scheduled
- Thursday: Blog post "..."
- Friday: Ads budget review
```

### 2. KPI Dashboard Structure

**Marketing funnel metrics**:
```
AWARENESS
├── Organic traffic (GA4)
├── Paid traffic (Google/Meta Ads)
├── Social media reach
└── Brand search volume (GSC)

ENGAGEMENT
├── Email open rate
├── CTR (ads + email)
├── Time on site
└── Social media engagement rate

CONVERSION
├── New signups/leads
├── Trial-to-paid rate
├── Demo request CVR
└── Landing page CVR

RETENTION
├── MRR / ARR
├── Churn rate
├── NPS score
└── Email list growth
```

### 3. Dashboard Implementation

**Option A: Notion Dashboard (No-code)**
```markdown
## Cấu trúc Notion workspace

Marketing Hub/
├── 📊 Dashboard (linked databases view)
├── 📅 Content Calendar
├── 📧 Email Campaigns
├── 🎯 Campaigns
└── 📈 Weekly Reports

Database properties cho tracking:
- Date, Channel, Metric Name, Value, Target, Status
```

**Option B: Custom Next.js Dashboard**
```typescript
// Dashboard page với real-time data
interface DashboardData {
  visitors: MetricWithTrend;
  signups: MetricWithTrend;
  mrr: MetricWithTrend;
  emailStats: EmailMetrics;
  topChannels: ChannelPerformance[];
  alerts: Alert[];
}

async function fetchDashboardData(): Promise<DashboardData> {
  const [ga4Data, emailData, revenueData] = await Promise.all([
    getGA4Metrics(['sessions', 'newUsers']),
    getEmailMetrics(),
    getRevenueMetrics(),
  ]);

  return {
    visitors: formatMetricWithTrend(ga4Data.sessions),
    signups: formatMetricWithTrend(ga4Data.newUsers),
    mrr: formatMetricWithTrend(revenueData.mrr),
    emailStats: emailData,
    topChannels: ga4Data.channels,
    alerts: checkAlerts({ ga4Data, emailData, revenueData }),
  };
}

export default async function Dashboard() {
  const data = await fetchDashboardData();
  return <DashboardUI data={data} />;
}
```

### 4. Alert System
Thông báo tự động khi metrics vượt ngưỡng.

**Alert rules**:
```typescript
const alertRules: AlertRule[] = [
  {
    metric: 'email_bounce_rate',
    condition: '> 3%',
    severity: 'critical',
    message: 'Email bounce rate cao — cần clean list ngay',
    action: '/ckm:email-marketing audit'
  },
  {
    metric: 'daily_signups',
    condition: '< 5',
    severity: 'warning',
    message: 'Signups thấp hơn bình thường',
    action: 'Kiểm tra traffic sources và landing page'
  },
  {
    metric: 'mrr_growth',
    condition: '< 0%',
    severity: 'critical',
    message: 'MRR giảm — cần action ngay',
    action: '/ckm:analytics investigate churn'
  }
];
```

### 5. Automation Workflows
Tự động hóa reporting thường xuyên.

**Weekly report automation**:
```javascript
// Cron job: Mỗi thứ Hai 8:00 AM
const generateWeeklyReport = async () => {
  const data = await fetchWeeklyMetrics();
  const report = await generateReport(data); // Claude API
  await sendEmail({
    to: 'team@company.com',
    subject: `Weekly Marketing Report — ${getWeekLabel()}`,
    html: report
  });
  await postToSlack('#marketing', report.summary);
};
```

## Điều Kiện Tiên Quyết

- Analytics tracking setup (GA4 minimum)
- API access cho tools đang dùng
- Cron jobs hoặc scheduler (cho automation)

## Cấu Hình

**Data sources cần kết nối**:
```yaml
data_sources:
  analytics:
    - Google Analytics 4 (REQUIRED)
    - Plausible (alternative)

  email:
    - Resend / SendGrid / Mailchimp

  revenue:
    - Stripe (SaaS)
    - Shopify (ecommerce)

  ads:
    - Google Ads (optional)
    - Meta Ads (optional)

  social:
    - LinkedIn Analytics (optional)
```

## Thực Hành Tốt Nhất

**1. Ít Metrics Hơn, Rõ Ràng Hơn**
Dashboard với 50 metrics = không ai đọc. Focus vào 5-7 north star metrics.

**2. Alerts Quan Trọng Hơn Charts**
Dashboard tốt nhất là dashboard bạn không cần mở mỗi ngày vì alerts sẽ thông báo khi cần.

**3. Trend Quan Trọng Hơn Absolute Numbers**
"+12% vs tuần trước" có ý nghĩa hơn "1,247 visitors".

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Solopreneur Daily Workflow
**Tình huống**: Founder cần biết mọi thứ đang diễn ra trong 5 phút mỗi sáng.

**Dashboard**: Notion dashboard đơn giản + Claude briefing mỗi sáng
```
/ckm:marketing-dashboard daily-brief
```

### Trường Hợp 2: Marketing Team Weekly Review
**Tình huống**: Weekly meeting cần data context.

**Dashboard**: Tự động generate weekly report vào thứ Hai, share với team trước meeting.

## Xử Lý Sự Cố

**Vấn đề**: Data từ các sources không đồng nhất
**Giải pháp**: Normalize tất cả timestamps về UTC. Establish single source of truth cho mỗi metric.

**Vấn đề**: Dashboard load chậm do nhiều API calls
**Giải pháp**: Cache data trong Redis, refresh mỗi 15 phút thay vì real-time.

## Skill Liên Quan

- [Analytics](/vi/docs/marketing/skills/analytics) - Deep dive analytics
- [Frontend Development](/vi/docs/marketing/skills/frontend-development) - Build custom dashboard
- [Databases](/vi/docs/marketing/skills/databases) - Store aggregated metrics

## Lệnh Liên Quan

- `/ckm:marketing-dashboard` - Tạo/xem dashboard
- `/ckm:analytics` - Phân tích chi tiết
- `/ckm:dashboard` - Dashboard general
