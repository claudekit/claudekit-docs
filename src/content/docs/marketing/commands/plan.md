---
title: "/plan"
description: "Create detailed implementation plans with AI-powered research, complexity assessment, and progressive disclosure structure"
section: marketing
category: commands
order: 10
published: true
---

> Research, analyze, and plan features intelligently before coding

## Quick Start

```bash
/plan implement email drip campaign
```

**What happens** (30 seconds):
1. Spawns 3 researcher agents in parallel
2. Analyzes codebase structure with /scout
3. Assesses complexity (simple → /plan:fast, complex → /plan:hard)
4. Creates progressive disclosure plan with phases

**Output**: `plans/251229-email-drip-campaign/plan.md` + phase files

## What It Does

### Before /plan
- Ad-hoc implementation (no strategy)
- Missing requirements discovered mid-coding
- No parallel execution opportunities
- Unclear dependencies between tasks
- Manual research (2-4 hours)

### After /plan
- Detailed implementation roadmap (30 seconds)
- All requirements surfaced upfront
- Phases designed for parallelization
- Clear dependencies mapped
- AI research from 3+ sources

## Syntax

```bash
/plan [task]
```

### Variants

| Variant | When to Use | Phases | Research Depth |
|---------|-------------|--------|----------------|
| `/plan` | Auto-detects complexity | 1-8 | Standard |
| `/plan:fast` | Simple features | 1-2 | Minimal |
| `/plan:hard` | Complex architecture | 3-8 | Deep |
| `/plan:parallel` | Independent features | Multi-track | Standard |

## Example: Plan Email Campaign

**Input**:
```bash
/plan implement email drip campaign with analytics
```

**Expected Output**:
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

Next: "Implement email drip campaign"
```

## Workflow Integration

### Plan → Cook → Test → Review
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

## Agents Used

- **planner**: Plan creation and structure
- **researcher** (3+): Parallel research for best practices
- **scout**: Codebase analysis

## Skills Activated

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

## Related Commands

- [/cook](/docs/engineer/skills/cook) - Execute plan + implement
- [/scout](/docs/marketing/commands/scout) - Codebase search

---

**Plan smart. Code fast.** AI-powered planning that actually works.
