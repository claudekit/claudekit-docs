---
title: "/persona"
description: "Tạo và quản lý customer personas với AI-powered audience research, market validation, và ICP profiling"
section: marketing
category: commands
order: 24
published: true
---

> Hiểu độc giả của bạn sâu sắc

## Bắt Đầu Nhanh

```bash
/persona create
```

**Điều gì sẽ xảy ra**:
1. AI hỏi về demographics, pain points, goals
2. Researcher xác thực với market data
3. Phân tích behavior patterns
4. Tạo comprehensive persona profile

**Kết Quả**: `assets/leads/icp-profiles/{persona}.md`

## Cú Pháp

```bash
/persona <action> [name]
```

### Hành Động

| Hành Động | Mô Tả | Đối Số | Kết Quả |
|--------|-------------|-----------|--------|
| `create` | Create new persona | None | Persona profile |
| `analyze` | Analyze audience data | None | Insights report |
| `update` | Update existing persona | `[name]` | Updated profile |
| `list` | List all personas | None | Persona list |

## Ví Dụ

### Ví Dụ 1: Create Persona

**Đầu vào**:
```bash
/persona create
```

**AI Questions**:
```
lead-qualifier: Target audience demographics?
You: Tech startup founders, 28-45 years old, Series A-B funded

lead-qualifier: Primary pain points?
You: High customer acquisition cost, low conversion rates, manual marketing

lead-qualifier: Key goals?
You: Automate marketing, reduce CAC, scale efficiently

lead-qualifier: Buying behavior?
You: Research-heavy, compare tools, need ROI proof, 2-4 week decision cycle

lead-qualifier: Preferred channels?
You: LinkedIn, product communities, tech blogs, word-of-mouth
```

**Quá trình**:
```markdown
✓ lead-qualifier: Persona defined
✓ researcher: Market validation complete

Researching:
- Tech startup funding trends (2025)
- Marketing automation adoption (Series A-B)
- CAC benchmarks (SaaS)
- Decision-maker behavior patterns
```

**Kết Quả Dự Kiến**:
```markdown
---
# Customer Persona: Tech Startup Founder

## Overview
Name: Alex the Scaling Founder
Age: 28-45
Role: Founder/CEO or VP Marketing
Company Stage: Series A-B ($2M-$15M raised)
Team Size: 10-50 employees

## Demographics
- Industry: SaaS, FinTech, HealthTech
- Location: SF Bay Area, NYC, Austin, Remote
- Education: University degree (often technical)
- Income: $150K-$300K
- Tech-savvy: High

## Pain Points (Prioritized)
1. Customer Acquisition Cost (CAC) too high ($8K-$15K)
2. Low conversion rates (2-3% vs 5% target)
3. Manual marketing processes (10-20 hrs/week)
4. Limited marketing team (1-2 people)
5. Need to show ROI to investors

## Goals & Motivations
- Primary: Scale efficiently without hiring large team
- Secondary: Automate repetitive marketing tasks
- Tertiary: Improve conversion funnel
- Long-term: Build predictable revenue growth

## Buying Behavior
**Research Phase** (1-2 weeks):
- Reads comparison articles
- Asks peers in Slack/Discord
- Watches product demos
- Checks reviews on G2/Capterra

**Evaluation Phase** (1-2 weeks):
- Tests 3-5 tools
- Calculates ROI
- Checks integrations
- Negotiates pricing

**Decision Factors**:
1. Clear ROI (must show 3-6 month payback)
2. Easy setup (<1 day)
3. Strong integrations
4. Responsive support
5. Transparent pricing

## Preferred Channels
- LinkedIn (thought leadership)
- Product Hunt (launches)
- Indie Hackers (community)
- Tech blogs (SEMrush, Moz)
- Word-of-mouth (highest trust)

## Content Preferences
- Case studies (real ROI data)
- How-to guides (tactical)
- Video demos (5-10 min)
- Email newsletters (weekly)
- Podcasts (during commute)

## Objections & Concerns
- "Is setup complex?" → Need <1 day onboarding
- "Will it actually save time?" → Need proof
- "What if it doesn't work?" → Need money-back guarantee
- "Can I integrate with [tool]?" → Need clear integration list
- "Is support responsive?" → Need fast response time

## Messaging That Works
**Do**:
- Show real numbers (76% faster workflows)
- Use customer stories (similar companies)
- Highlight time savings (10+ hours/week)
- Emphasize ROI (3 month payback)
- Offer trial/demo (risk-free)

**Don't**:
- Use jargon or buzzwords
- Make vague claims
- Hide pricing
- Ignore integration questions
- Oversell features

## Marketing Strategy

**Awareness Stage**:
- LinkedIn thought leadership posts
- SEO-optimized blog content
- Guest posts on tech blogs
- Product Hunt launch

**Consideration Stage**:
- Comparison pages vs competitors
- ROI calculator tool
- Customer case studies
- Demo videos

**Decision Stage**:
- Free trial (14-30 days)
- Live demo call
- Transparent pricing page
- Money-back guarantee

## Market Validation

**Market Size** (researcher findings):
- Series A-B startups: 8,200 (US)
- With marketing budget: 6,150 (75%)
- Target addressable market: ~6K companies

**Competition Analysis**:
- Direct competitors: HubSpot, Marketo, ActiveCampaign
- Positioning: Simpler, faster setup, better for startups
- Price point: $99-$499/month (competitors: $800-$3K)

**Trends** (2025):
- 67% of startups investing in marketing automation
- Average CAC increase: 15% YoY
- AI adoption in marketing: 43% (growing)

## ICP Score: 95/100
✓ Clear pain points
✓ Validated market size
✓ Strong buying signals
✓ Accessible via channels
✓ Willingness to pay

Saved: assets/leads/icp-profiles/tech-startup-founder.md
```

### Ví Dụ 2: Analyze Audience

**Đầu vào**:
```bash
/persona analyze
```

**Kết Quả**:
```markdown
✓ lead-qualifier: Analyzing existing persona data...
✓ analytics-analyst: Behavior patterns identified

---
# Audience Analysis Report

Current Personas: 2
- Tech Startup Founder (95/100 score)
- Small Business Owner (78/100 score)

## Overlap Analysis
Common characteristics:
- Budget-conscious
- Need ROI proof
- Prefer self-serve
- Research-heavy buyers

Differences:
- Founders: Tech-savvy, faster adoption
- Small biz: Less tech-savvy, need more support

## Recommended Segmentation
Segment 1: Tech Startup Founders (60% of revenue)
Segment 2: Small Business Owners (40% of revenue)

Messaging strategy: Create separate landing pages

## Pattern Insights
- Both personas convert best on demo requests
- Email sequences work better than cold outreach
- Case studies are #1 converting content type
- Free trial critical for closing deals

Recommendations:
1. Create persona-specific landing pages
2. Tailor email sequences per persona
3. Develop 2-3 case studies per persona
4. Offer flexible trial options

Saved: assets/leads/audience-analysis-250129.md
```

### Ví Dụ 3: Update Persona

**Đầu vào**:
```bash
/persona update "Tech Startup Founder"
```

**Quá trình**:
```markdown
✓ Loading persona: Tech Startup Founder

lead-qualifier: What needs updating?
You: Add recent budget trends and AI adoption data

✓ researcher: Gathering latest market data...
✓ Updated with 2025 Q1 trends

Changes:
- Updated average budget: $5K-$20K/month (up from $3K-$15K)
- Added AI adoption: 58% now using AI tools (up from 43%)
- Updated CAC: $8K-$15K (up from $6K-$12K)
- New concern: Data privacy and AI compliance

Saved: assets/leads/icp-profiles/tech-startup-founder.md
```

### Ví Dụ 4: List Personas

**Đầu vào**:
```bash
/persona list
```

**Kết Quả**:
```markdown
Customer Personas (3):

1. Tech Startup Founder
   Score: 95/100
   Market size: ~6K companies
   File: assets/leads/icp-profiles/tech-startup-founder.md

2. Small Business Owner
   Score: 78/100
   Market size: ~450K companies
   File: assets/leads/icp-profiles/small-business-owner.md

3. Marketing Agency Director
   Score: 82/100
   Market size: ~12K agencies
   File: assets/leads/icp-profiles/marketing-agency-director.md
```

## Tích Hợp Quy Trình Làm Việc

### Campaign Planning

```bash
# Step 1: Define audience
/persona create

# Step 2: Create campaign
/campaign create "Q1 Launch"

# Step 3: Generate persona-specific content
/email cold "Tech Startup Founders"
/content landing "For startup founders"
/social linkedin "Founder audience"
```

### Content Strategy

```bash
# Analyze audience
/persona analyze

# Create targeted content
/content blog "Best tools for startup founders"
/content case-study "How StartupX reduced CAC 43%"
```

## Agent Sử Dụng

- **lead-qualifier**: Persona definition and analysis
- **researcher**: Market validation and trends
- **analytics-analyst**: Behavior analysis

## Kỹ Năng Được Kích Hoạt

- **content-marketing**: Persona frameworks
- **assets-organizing**: File structure

## Lệnh Liên Quan

- [/campaign](/docs/marketing/commands/campaign) - Use personas in campaigns
- [/content](/docs/marketing/commands/content) - Create persona-specific content
- [/email](/docs/marketing/commands/email) - Persona-targeted emails

---

**Know your audience.** Data-driven personas that guide strategy.
