---
title: "/campaign"
description: "Create, manage, and analyze marketing campaigns with AI-powered campaign management, funnel architecture, and performance tracking"
section: marketing
category: commands
order: 2
published: true
---

> Orchestrate complete marketing campaigns from strategy to performance analysis

## Quick Start

Create your first campaign in 30 seconds:

```bash
/campaign create "Black Friday 2025"
```

**What happens**:
1. AI asks strategic questions (audience, goals, channels)
2. Generates campaign brief with funnel architecture
3. Creates asset structure for creatives and reports
4. Outputs campaign roadmap with milestones

**Output**: `assets/campaigns/251229-black-friday-2025/`

## What It Does

### Before /campaign
- Manual campaign planning (2-3 days)
- Scattered documents and spreadsheets
- No standardized funnel architecture
- Manual performance tracking
- Disconnected creative assets

### After /campaign
- AI-generated campaign brief (2 minutes)
- Structured campaign directory
- Professional funnel design
- Automated performance reports
- Organized asset management

## Syntax

```bash
/campaign <action> [name]
```

### Arguments

| Argument | Type | Description | Required |
|----------|------|-------------|----------|
| `action` | string | Action to perform | Yes |
| `name` | string | Campaign name (for status/analyze) | Conditional |

### Actions

| Action | Description | Arguments | Output |
|--------|-------------|-----------|--------|
| `create` | Create new campaign | `[name]` | Campaign brief + structure |
| `status` | Get campaign status | `[name]` | Progress report |
| `analyze` | Analyze performance | `[name]` | Performance audit |

## Examples

### Example 1: Create Product Launch Campaign

**Input**:
```bash
/campaign create "SaaS Platform Launch Q1 2025"
```

**AI Questions**:
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

**Expected Output**:
```
✓ campaign-manager: Campaign brief created
✓ funnel-architect: Funnel designed (4 stages)

Campaign: SaaS Platform Launch Q1 2025
Period: Jan 15 - Mar 31, 2025
Budget: $25,000

Funnel:
1. Awareness (LinkedIn + Content) → 10,000 reach
2. Interest (Email nurture) → 2,000 engaged
3. Consideration (Demo requests) → 500 trials
4. Conversion (Sales follow-up) → 50 paid

Assets Created:
├── briefs/
│   ├── campaign-brief.md (strategy, goals, channels)
│   └── funnel-map.md (4-stage conversion funnel)
├── creatives/ (ready for content)
└── reports/ (performance tracking)

Path: assets/campaigns/250115-saas-platform-launch-q1-2025/

Next Steps:
• /email nurture "SaaS trial users"
• /social linkedin "product launch series"
• /content blog "SaaS platform announcement"
```

### Example 2: Check Campaign Status

**Input**:
```bash
/campaign status "SaaS Platform Launch Q1 2025"
```

**Expected Output**:
```
✓ analytics-analyst: Metrics analyzed

Campaign: SaaS Platform Launch Q1 2025
Status: Active (Day 23 of 75)
Progress: 31% complete

Milestones:
✓ Campaign brief finalized
✓ Landing page launched
✓ Email sequences deployed
⏳ LinkedIn ads running (ongoing)
◯ Demo webinar (scheduled Feb 15)
◯ Sales follow-up phase (starts Mar 1)

Performance (vs Goals):
• Reach: 4,200 / 10,000 (42%)
• Engaged: 890 / 2,000 (44%)
• Trials: 187 / 500 (37%)
• Paid: 14 / 50 (28%)

Budget:
• Spent: $9,450 / $25,000 (38%)
• Projected: On track

Blockers:
• LinkedIn CTR below target (1.2% vs 2.0% expected)
• Trial-to-paid conversion needs optimization

Recommendations:
1. A/B test LinkedIn ad creative
2. Enhance trial onboarding sequence
3. Add case study to nurture emails

Next: /campaign analyze "SaaS Platform Launch Q1 2025"
```

### Example 3: Analyze Campaign Performance

**Input**:
```bash
/campaign analyze "SaaS Platform Launch Q1 2025"
```

**Expected Output**:
```
✓ analytics-analyst: Data collected
✓ campaign-debugger: Issues diagnosed

Campaign Performance Analysis
Generated: 2025-01-29 14:30 UTC

OVERVIEW
Campaign: SaaS Platform Launch Q1 2025
Period: Jan 15 - Jan 29 (14 days elapsed)
Total Spend: $9,450 | ROI: 48% (below target)

FUNNEL ANALYSIS
Stage 1: Awareness
• LinkedIn impressions: 4,200 (target: 10,000)
• Blog traffic: 2,100 visits
• Issue: Low LinkedIn reach (-58%)

Stage 2: Interest
• Email open rate: 34% (above average)
• Click rate: 6.2% (strong)
• Win: Email engagement exceeding expectations

Stage 3: Consideration
• Demo requests: 187 (target: 500)
• Conversion rate: 4.5% (target: 5%)
• Issue: Demo request rate below target

Stage 4: Conversion
• Trials: 187
• Trial-to-paid: 7.5% (target: 10%)
• Issue: Low trial conversion (-25%)

CHANNEL PERFORMANCE
LinkedIn Ads: $6,200 spend
• CPM: $42 (high)
• CTR: 1.2% (low)
• Recommendation: Test new ad creative

Email Marketing: $1,800 spend
• Sequences: 3 deployed
• Engagement: Strong (34% open, 6.2% click)
• Recommendation: Expand email list

Content Marketing: $1,450 spend
• Blog posts: 4 published
• Traffic: 2,100 visits, 4 min avg time
• Recommendation: Increase publish frequency

ISSUES IDENTIFIED
1. LinkedIn targeting too broad (low CTR)
2. Trial onboarding friction (7.5% conversion)
3. Missing social proof in funnel

ACTION ITEMS
Priority 1 (This Week):
• Narrow LinkedIn audience targeting
• Add customer testimonials to landing page
• Implement trial onboarding checklist

Priority 2 (Next Week):
• Create case study content
• Add live chat to demo page
• Test pricing page variations

Report saved: assets/diagnostics/campaign-audits/250129-saas-platform-launch-q1-2025.md

Next:
• /fix:fast Add testimonials to landing page
• /content case-study "Enterprise customer success"
• /campaign status "SaaS Platform Launch Q1 2025" (recheck in 7 days)
```

## Workflow Integration

### Campaign Creation Flow
```bash
# Step 1: Define audience
/persona create

# Step 2: Create campaign
/campaign create "Product Launch"

# Step 3: Generate assets
/email launch "New Product"
/social linkedin "Launch announcement"
/design hero banner for landing page

# Step 4: Monitor
/campaign status "Product Launch"

# Step 5: Optimize
/campaign analyze "Product Launch"
/fix:fast Issues identified in campaign
```

### Multi-Campaign Management
```bash
# Create multiple campaigns
/campaign create "Summer Sale 2025"
/campaign create "Referral Program Launch"
/campaign create "Content Marketing Initiative"

# Check all statuses
/campaign status "Summer Sale 2025"
/campaign status "Referral Program Launch"
/campaign status "Content Marketing Initiative"

# Visual dashboard
/dashboard
# View all campaigns in Kanban board
```

## Agents Used

### campaign-manager
- Role: Campaign orchestration and strategy
- Responsibilities:
  - Campaign brief generation
  - Milestone planning
  - Budget allocation
  - Creative direction
- Skills: campaign-management, creativity

### funnel-architect
- Role: Conversion funnel design
- Responsibilities:
  - Funnel stage mapping
  - Conversion rate optimization
  - User journey design
  - Drop-off analysis
- Skills: analytics, conversion-optimization

### analytics-analyst
- Role: Performance tracking and reporting
- Responsibilities:
  - Metrics collection
  - Progress monitoring
  - Performance reporting
  - Trend analysis
- Skills: analytics, data-visualization

### campaign-debugger
- Role: Issue diagnosis and optimization
- Responsibilities:
  - Performance issue identification
  - Root cause analysis
  - Optimization recommendations
  - A/B test suggestions
- Skills: debugging, analytics

## Output Structure

### Campaign Directory
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

### Campaign Brief Template
```markdown
# Campaign: {Name}
Date: {Start} - {End}
Budget: ${Amount}

## Objectives
1. Primary: {Main Goal}
2. Secondary: {Supporting Goals}

## Target Audience
- Demographics: {Age, Role, Industry}
- Pain Points: {Problems to Solve}
- Channels: {Where They Are}

## Funnel Strategy
Stage 1: Awareness → {Target Reach}
Stage 2: Interest → {Target Engagement}
Stage 3: Consideration → {Target Leads}
Stage 4: Conversion → {Target Customers}

## Budget Allocation
- Channel 1: ${Amount} ({Percentage})
- Channel 2: ${Amount} ({Percentage})
- Channel 3: ${Amount} ({Percentage})

## Success Metrics
- Reach: {Number}
- Engagement: {Percentage}
- Conversions: {Number}
- ROI: {Percentage}

## Timeline
Week 1-2: {Phase 1}
Week 3-4: {Phase 2}
Week 5-6: {Phase 3}
```

## Related Commands

### Before /campaign
- [/persona](/docs/marketing/commands/persona) - Define target audience
- [/brainstorm](/docs/marketing/commands/brainstorm) - Ideate campaign strategy

### After /campaign
- [/email](/docs/marketing/commands/email) - Create email sequences
- [/social](/docs/marketing/commands/social) - Generate social content
- [/content](/docs/marketing/commands/content) - Write blog posts
- [/design](/docs/marketing/commands/design) - Create visual assets
- [/analyze](/docs/marketing/commands/analyze) - Deep analytics

### Management
- [/dashboard](/docs/marketing/commands/dashboard) - Visual campaign board
- [/use-mcp](/docs/marketing/commands/use-mcp) - Connect analytics tools

## Related Agents

- [campaign-manager](/docs/marketing/agents/campaign-manager) - Campaign orchestration
- [funnel-architect](/docs/marketing/agents/funnel-architect) - Funnel design
- [analytics-analyst](/docs/marketing/agents/analytics-analyst) - Performance tracking
- [content-creator](/docs/marketing/agents/content-creator) - Content generation

## Skills Activated

- **campaign-management**: Campaign templates and frameworks
- **creativity**: Creative direction and style selection
- **analytics**: Performance measurement
- **assets-organizing**: Standardized file structure

---

**Ship campaigns faster.** Your AI campaign team handles strategy, execution, and optimization.
