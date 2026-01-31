---
lang: vi
title: "/campaign"
description: "Tạo, quản lý và phân tích các chiến dịch tiếp thị với quản lý chiến dịch do AI cung cấp, kiến trúc phễu và theo dõi hiệu suất"
section: marketing
category: commands
order: 2
published: true
---

> Điều phối hoàn chỉnh chiến dịch tiếp thị từ chiến lược đến phân tích hiệu suất

## Khởi động nhanh

Tạo chiến dịch đầu tiên của bạn trong 30 giây:

```bash
/campaign create "Black Friday 2025"
```

**Điều gì xảy ra**:
1. AI đặt câu hỏi chiến lược (đối tượng, mục tiêu, kênh)
2. Tạo bản tóm tắt chiến dịch với kiến trúc phễu
3. Tạo cấu trúc tài sản cho sáng tạo và báo cáo
4. Xuất bản lộ trình chiến dịch với các mốc

**Kết quả**: `assets/campaigns/251229-black-friday-2025/`

## Nó làm gì

### Trước /campaign
- Lập kế hoạch chiến dịch thручnual (2-3 ngày)
- Tài liệu và bảng tính phân tán
- Không có kiến trúc phễu được tiêu chuẩn hóa
- Theo dõi hiệu suất thручnual
- Tài sản sáng tạo bị ngắt kết nối

### Sau /campaign
- Bản tóm tắt chiến dịch do AI tạo (2 phút)
- Thư mục chiến dịch có cấu trúc
- Thiết kế phễu chuyên nghiệp
- Báo cáo hiệu suất tự động
- Quản lý tài sản được sắp xếp

## Cú pháp

```bash
/campaign <action> [name]
```

### Đối số

| Đối số | Kiểu | Mô tả | Yêu cầu |
|-------|------|-------|---------|
| `action` | string | Hành động thực hiện | Có |
| `name` | string | Tên chiến dịch (để kiểm tra trạng thái/phân tích) | Có điều kiện |

### Hành động

| Hành động | Mô tả | Đối số | Kết quả |
|---------|-------|-------|--------|
| `create` | Tạo chiến dịch mới | `[name]` | Bản tóm tắt chiến dịch + cấu trúc |
| `status` | Nhận trạng thái chiến dịch | `[name]` | Báo cáo tiến độ |
| `analyze` | Phân tích hiệu suất | `[name]` | Kiểm toán hiệu suất |

## Ví dụ

### Ví dụ 1: Tạo chiến dịch khởi động sản phẩm

**Đầu vào**:
```bash
/campaign create "SaaS Platform Launch Q1 2025"
```

**Câu hỏi AI**:
```
campaign-manager: Target audience?
You: B2B SaaS founders, 10-50 employees

campaign-manager: Primary goal?
You: 500 trial signups, 50 paid conversions

campaign-manager: Marketing channels?
You: LinkedIn, email, content marketing

campaign-manager: Budget range?
You: $25k
```

**Kết quả mong đợi**:
```
✓ campaign-manager: Campaign brief created
✓ funnel-architect: Funnel designed (4 stages)

Chiến dịch: SaaS Platform Launch Q1 2025
Kỳ: 15 tháng 1 - 31 tháng 3, 2025
Ngân sách: $25.000

Phễu:
1. Awareness (LinkedIn + Content) → 10.000 reach
2. Interest (Email nurture) → 2.000 engaged
3. Consideration (Demo requests) → 500 trials
4. Conversion (Sales follow-up) → 50 paid

Tài sản được tạo:
├── briefs/
│   ├── campaign-brief.md (strategy, goals, channels)
│   └── funnel-map.md (4-stage conversion funnel)
├── creatives/ (ready for content)
└── reports/ (performance tracking)

Đường dẫn: assets/campaigns/250115-saas-platform-launch-q1-2025/

Các bước tiếp theo:
• /email nurture "SaaS trial users"
• /social linkedin "product launch series"
• /content blog "SaaS platform announcement"
```

### Ví dụ 2: Kiểm tra trạng thái chiến dịch

**Đầu vào**:
```bash
/campaign status "SaaS Platform Launch Q1 2025"
```

**Kết quả mong đợi**:
```
✓ analytics-analyst: Metrics analyzed

Chiến dịch: SaaS Platform Launch Q1 2025
Trạng thái: Active (Day 23 of 75)
Tiến độ: 31% complete

Mốc:
✓ Campaign brief finalized
✓ Landing page launched
✓ Email sequences deployed
⏳ LinkedIn ads running (ongoing)
◯ Demo webinar (scheduled Feb 15)
◯ Sales follow-up phase (starts Mar 1)

Hiệu suất (vs Goals):
• Reach: 4.200 / 10.000 (42%)
• Engaged: 890 / 2.000 (44%)
• Trials: 187 / 500 (37%)
• Paid: 14 / 50 (28%)

Ngân sách:
• Spent: $9.450 / $25.000 (38%)
• Projected: On track

Bộ chặn:
• LinkedIn CTR below target (1.2% vs 2.0% expected)
• Trial-to-paid conversion needs optimization

Khuyến nghị:
1. A/B test LinkedIn ad creative
2. Enhance trial onboarding sequence
3. Add case study to nurture emails

Tiếp: /campaign analyze "SaaS Platform Launch Q1 2025"
```

### Ví dụ 3: Phân tích hiệu suất chiến dịch

**Đầu vào**:
```bash
/campaign analyze "SaaS Platform Launch Q1 2025"
```

**Kết quả mong đợi**:
```
✓ analytics-analyst: Data collected
✓ campaign-debugger: Issues diagnosed

Phân tích hiệu suất chiến dịch
Tạo: 2025-01-29 14:30 UTC

TỔNG QUAN
Chiến dịch: SaaS Platform Launch Q1 2025
Kỳ: 15 tháng 1 - 29 tháng 1 (14 ngày đã trôi qua)
Tổng chi: $9.450 | ROI: 48% (dưới mục tiêu)

PHÂN TÍCH PHỄU
Giai đoạn 1: Awareness
• LinkedIn impressions: 4.200 (target: 10.000)
• Blog traffic: 2.100 visits
• Issue: Low LinkedIn reach (-58%)

Giai đoạn 2: Interest
• Email open rate: 34% (above average)
• Click rate: 6.2% (strong)
• Win: Email engagement exceeding expectations

Giai đoạn 3: Consideration
• Demo requests: 187 (target: 500)
• Conversion rate: 4.5% (target: 5%)
• Issue: Demo request rate below target

Giai đoạn 4: Conversion
• Trials: 187
• Trial-to-paid: 7.5% (target: 10%)
• Issue: Low trial conversion (-25%)

HIỆU SUẤT KÊNH
LinkedIn Ads: $6.200 spend
• CPM: $42 (high)
• CTR: 1.2% (low)
• Recommendation: Test new ad creative

Email Marketing: $1.800 spend
• Sequences: 3 deployed
• Engagement: Strong (34% open, 6.2% click)
• Recommendation: Expand email list

Content Marketing: $1.450 spend
• Blog posts: 4 published
• Traffic: 2.100 visits, 4 min avg time
• Recommendation: Increase publish frequency

VẤN ĐỀ ĐƯỢC XÁC ĐỊNH
1. LinkedIn targeting too broad (low CTR)
2. Trial onboarding friction (7.5% conversion)
3. Missing social proof in funnel

MỤC HÀNH ĐỘNG
Ưu tiên 1 (Tuần này):
• Narrow LinkedIn audience targeting
• Add customer testimonials to landing page
• Implement trial onboarding checklist

Ưu tiên 2 (Tuần tới):
• Create case study content
• Add live chat to demo page
• Test pricing page variations

Báo cáo đã lưu: assets/diagnostics/campaign-audits/250129-saas-platform-launch-q1-2025.md

Tiếp:
• /fix --quick Add testimonials to landing page
• /content case-study "Enterprise customer success"
• /campaign status "SaaS Platform Launch Q1 2025" (recheck in 7 days)
```

## Tích hợp quy trình làm việc

### Dòng tạo chiến dịch
```bash
# Bước 1: Xác định đối tượng
/persona create

# Bước 2: Tạo chiến dịch
/campaign create "Product Launch"

# Bước 3: Tạo tài sản
/email launch "New Product"
/social linkedin "Launch announcement"
/design hero banner for landing page

# Bước 4: Giám sát
/campaign status "Product Launch"

# Bước 5: Tối ưu hóa
/campaign analyze "Product Launch"
/fix --quick Issues identified in campaign
```

### Quản lý nhiều chiến dịch
```bash
# Tạo nhiều chiến dịch
/campaign create "Summer Sale 2025"
/campaign create "Referral Program Launch"
/campaign create "Content Marketing Initiative"

# Kiểm tra tất cả trạng thái
/campaign status "Summer Sale 2025"
/campaign status "Referral Program Launch"
/campaign status "Content Marketing Initiative"

# Bảng điều khiển trực quan
/dashboard
# Xem tất cả chiến dịch trong Kanban board
```

## Tác nhân được sử dụng

### campaign-manager
- Vai trò: Điều phối chiến dịch và chiến lược
- Trách nhiệm:
  - Tạo bản tóm tắt chiến dịch
  - Lập kế hoạch mốc
  - Phân bổ ngân sách
  - Hướng sáng tạo
- Kỹ năng: campaign-management, creativity

### funnel-architect
- Vai trò: Thiết kế phễu chuyển đổi
- Trách nhiệm:
  - Ánh xạ giai đoạn phễu
  - Tối ưu hóa tỷ lệ chuyển đổi
  - Thiết kế hành trình người dùng
  - Phân tích rớt
- Kỹ năng: analytics, conversion-optimization

### analytics-analyst
- Vai trò: Theo dõi hiệu suất và báo cáo
- Trách nhiệm:
  - Thu thập số liệu
  - Giám sát tiến độ
  - Báo cáo hiệu suất
  - Phân tích xu hướng
- Kỹ năng: analytics, data-visualization

### campaign-debugger
- Vai trò: Chẩn đoán vấn đề và tối ưu hóa
- Trách nhiệm:
  - Xác định vấn đề hiệu suất
  - Phân tích nguyên nhân gốc
  - Khuyến nghị tối ưu hóa
  - Đề xuất kiểm tra A/B
- Kỹ năng: debugging, analytics

## Cấu trúc đầu ra

### Thư mục chiến dịch
```
assets/campaigns/251229-{campaign-slug}/
├── briefs/
│   ├── campaign-brief.md          # Strategy, goals, audience
│   ├── funnel-map.md              # Conversion funnel design
│   └── channel-strategy.md        # Channel breakdown
├── creatives/
│   ├── email/                     # Email assets
│   ├── social/                    # Social media assets
│   ├── landing-pages/             # Landing page content
│   └── ads/                       # Ad creatives
└── reports/
    ├── weekly-report-{date}.md    # Weekly performance
    ├── monthly-report-{date}.md   # Monthly summaries
    └── final-report.md            # Campaign wrap-up
```

### Mẫu bản tóm tắt chiến dịch
```markdown
# Chiến dịch: {Name}
Ngày: {Start} - {End}
Ngân sách: ${Amount}

## Mục tiêu
1. Chính: {Main Goal}
2. Hỗ trợ: {Supporting Goals}

## Đối tượng mục tiêu
- Nhân khẩu: {Age, Role, Industry}
- Điểm đau: {Problems to Solve}
- Kênh: {Where They Are}

## Chiến lược Phễu
Giai đoạn 1: Awareness → {Target Reach}
Giai đoạn 2: Interest → {Target Engagement}
Giai đoạn 3: Consideration → {Target Leads}
Giai đoạn 4: Conversion → {Target Customers}

## Phân bổ ngân sách
- Kênh 1: ${Amount} ({Percentage})
- Kênh 2: ${Amount} ({Percentage})
- Kênh 3: ${Amount} ({Percentage})

## Số liệu thành công
- Reach: {Number}
- Engagement: {Percentage}
- Conversions: {Number}
- ROI: {Percentage}

## Dòng thời gian
Tuần 1-2: {Phase 1}
Tuần 3-4: {Phase 2}
Tuần 5-6: {Phase 3}
```

## Lệnh liên quan

### Trước /campaign
- [/persona](/vi/docs/marketing/commands/persona) - Xác định đối tượng mục tiêu
- [/brainstorm](/vi/docs/marketing/commands/brainstorm) - Chiến lược chiến dịch tư tưởng

### Sau /campaign
- [/email](/vi/docs/marketing/commands/email) - Tạo chuỗi email
- [/social](/vi/docs/marketing/commands/social) - Tạo nội dung mạng xã hội
- [/content](/vi/docs/marketing/commands/content) - Viết bài đăng blog
- [/design](/vi/docs/marketing/commands/design) - Tạo tài sản trực quan
- [/analyze](/vi/docs/marketing/commands/analyze) - Phân tích sâu

### Quản lý
- [/dashboard](/vi/docs/marketing/commands/dashboard) - Bảng chiến dịch trực quan
- [/use-mcp](/vi/docs/marketing/commands/use-mcp) - Kết nối công cụ phân tích

## Tác nhân liên quan

- [campaign-manager](/vi/docs/marketing/agents/campaign-manager) - Điều phối chiến dịch
- [funnel-architect](/vi/docs/marketing/agents/funnel-architect) - Thiết kế phễu
- [analytics-analyst](/vi/docs/marketing/agents/analytics-analyst) - Theo dõi hiệu suất
- [content-creator](/vi/docs/marketing/agents/content-creator) - Tạo nội dung

## Kỹ năng được kích hoạt

- **campaign-management**: Mẫu và khung chiến dịch
- **creativity**: Hướng sáng tạo và lựa chọn kiểu
- **analytics**: Đo lường hiệu suất
- **assets-organizing**: Cấu trúc tệp được tiêu chuẩn hóa

---

**Gửi chiến dịch nhanh hơn.** Nhóm chiến dịch AI của bạn xử lý chiến lược, thực hiện và tối ưu hóa.
