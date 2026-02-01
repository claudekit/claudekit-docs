---
lang: vi
title: "/plan"
description: "Tạo detailed implementation plans với AI-powered research, complexity assessment, và progressive disclosure structure"
section: marketing
category: commands
order: 10
published: true
---

> Nghiên cứu, phân tích, và lập kế hoạch các tính năng thông minh trước khi viết code

## Bắt Đầu Nhanh

```bash
/plan implement email drip campaign
```

**Điều gì sẽ xảy ra** (30 giây):
1. Spawn 3 researcher agents song song
2. Phân tích cấu trúc codebase với /scout
3. Đánh giá độ phức tạp (simple → /plan:fast, complex → /plan:hard)
4. Tạo progressive disclosure plan với phases

**Kết Quả**: `plans/251229-email-drip-campaign/plan.md` + phase files

## Nó Làm Gì

### Trước /plan
- Implementation ad-hoc (no strategy)
- Missing requirements discovered mid-coding
- No parallel execution opportunities
- Unclear dependencies between tasks
- Manual research (2-4 giờ)

### Sau /plan
- Detailed implementation roadmap (30 giây)
- All requirements surfaced upfront
- Phases designed for parallelization
- Clear dependencies mapped
- AI research from 3+ sources

## Cú Pháp

```bash
/plan [task]
```

### Biến Thể

| Biến Thể | Khi Nào Sử Dụng | Phases | Research Depth |
|---------|-------------|--------|----------------|
| `/plan` | Auto-detects complexity | 1-8 | Standard |
| `/plan:fast` | Simple features | 1-2 | Minimal |
| `/plan:hard` | Complex architecture | 3-8 | Deep |
| `/plan:parallel` | Independent features | Multi-track | Standard |

## Ví Dụ: Plan Email Campaign

**Đầu vào**:
```bash
/plan implement email drip campaign with analytics
```

**Kết Quả Dự Kiến**:
```markdown
✓ researcher (3 agents): Research complete (45 sources)
✓ scout: Codebase analyzed (found email/, analytics/ dirs)
✓ planner: Plan created (4 phases, 2 parallelizable)

---
Plan: Email Drip Campaign Implementation
Created: 2025-01-29 14:30 UTC
Complexity: Medium (4 phases)
Est. Time: 4-6 hours
Parallelization: Phases 2-3 can run concurrently

## Overview

Implement email drip campaign system with:
- Campaign creation and scheduling
- Email template management
- Trigger-based automation
- Analytics and reporting

## Phases

Phase 1: Database Schema & API Setup [CRITICAL PATH]
Status: Planned
Priority: High
Dependencies: None
Est: 1-1.5 hours
File: phase-01-database-api.md

Phase 2: Email Template System [PARALLEL OK]
Status: Planned
Priority: High
Dependencies: Phase 1
Est: 1.5-2 hours
File: phase-02-email-templates.md

Phase 3: Campaign Automation Engine [PARALLEL OK]
Status: Planned
Priority: High
Dependencies: Phase 1
Est: 1.5-2 hours
File: phase-03-automation-engine.md

Phase 4: Analytics Dashboard [DEPENDS: 2+3]
Status: Planned
Priority: Medium
Dependencies: Phases 2, 3
Est: 1-1.5 hours
File: phase-04-analytics-dashboard.md

## Parallelization Strategy

Sequential: Phase 1 (foundation)
Parallel: Phases 2 & 3 (independent)
Sequential: Phase 4 (integrates 2 & 3)

Total time (sequential): 5.5-7.5 hours
Total time (parallel): 4-5.5 hours
**Time saved: 25-27%**

## Success Criteria
✓ Create campaigns with 3+ email sequences
✓ Triggers: time-based, event-based, behavior-based
✓ Template variables work ({{first_name}}, etc.)
✓ Analytics show open/click/conversion rates
✓ All tests pass (12 test cases)

## Files to Create
- lib/email/campaign.ts
- lib/email/scheduler.ts
- lib/email/triggers.ts
- lib/analytics/email-metrics.ts
- components/CampaignBuilder.tsx
- components/EmailEditor.tsx

## Files to Modify
- prisma/schema.prisma (add tables)
- app/api/campaigns/route.ts (new endpoint)
- app/dashboard/campaigns/page.tsx (UI)

Saved: plans/250129-email-drip-campaign/plan.md

Phase details:
- plans/250129-email-drip-campaign/phase-01-database-api.md
- plans/250129-email-drip-campaign/phase-02-email-templates.md
- plans/250129-email-drip-campaign/phase-03-automation-engine.md
- plans/250129-email-drip-campaign/phase-04-analytics-dashboard.md

Next: /cook plans/250129-email-drip-campaign
```

## Tích Hợp Quy Trình Làm Việc

### Plan → Code → Test → Review

```bash
# Step 1: Plan
/plan add user authentication

# Step 2: Review plan
cat plans/latest/plan.md

# Step 3: Implement
/cook

# Tests run automatically in /cook
# Code review happens automatically in /cook
```

### Plan Variants

```bash
# Auto-detect complexity
/plan add dark mode toggle

# Force fast planning
/plan:fast fix button styling

# Force deep planning
/plan:hard refactor entire auth system

# Parallel execution
/plan:parallel implement 3 dashboard widgets
```

## Agent Sử Dụng

- **planner**: Plan creation and structure
- **researcher** (3+): Parallel research for best practices
- **scout**: Codebase analysis

## Kỹ Năng Được Kích Hoạt

- **planning**: Planning frameworks
- **architecture**: System design patterns

## Output Structure

```
plans/251229-{slug}/
├── plan.md              # Overview, phases, status
├── phase-01-{name}.md   # Detailed phase specs
├── phase-02-{name}.md
└── reports/             # Implementation reports
```

## Lệnh Liên Quan

- [/cook](/docs/marketing/commands/cook) - Execute plan
- [/cook](/docs/marketing/commands/cook) - Plan + implement
- [/scout](/docs/marketing/commands/scout) - Codebase search

---

**Plan smart. Code fast.** AI-powered planning that actually works.
