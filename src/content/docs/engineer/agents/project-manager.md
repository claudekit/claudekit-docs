---
title: Project Manager Agent
description: Senior project manager and system orchestrator for implementation planning, progress tracking, and cross-agent coordination
section: engineer
kit: engineer
category: agents
order: 10
published: true
---

# Project Manager Agent

Senior orchestrator for tracking progress, collecting agent reports, maintaining roadmaps, and coordinating multi-agent workflows.

## When to Use

- Track project status with `/watzup` command
- Consolidate multi-agent work after features
- Weekly progress reviews and milestone reports
- Verify task completeness before deployment

## Key Capabilities

| Feature | What It Does |
|---------|--------------|
| **Progress Tracking** | Monitors agent outputs, task completion, blockers, quality metrics |
| **Report Collection** | Gathers reports from all agents in `plans/reports/` |
| **Roadmap Updates** | Maintains `docs/project-roadmap.md` after features/milestones |
| **Plan Analysis** | Validates plans, identifies gaps, adjusts timelines |
| **Coordination** | Orchestrates sequential phases across multiple agents |

## Common Use Cases

### 1. Weekly Status Report
**Who**: Team lead checking progress
**Prompt**: `/watzup`
**Output**: Consolidated report with velocity, quality metrics, completed features, next priorities

### 2. Feature Completion Review
**Who**: Developer finishing major feature
**Prompt**: "Review authentication implementation and update roadmap"
**Output**: Verifies tests, docs, commits → Updates roadmap → Generates completion report

### 3. Multi-Agent Coordination
**Who**: PM planning complex feature
**Prompt**: "Coordinate Stripe payment integration across all agents"
**Output**: Orchestrates planner → code → tester → reviewer → docs-manager → git-manager

### 4. Sprint Planning
**Who**: Team starting new sprint
**Prompt**: "Analyze last sprint velocity and recommend story points for this week"
**Output**: Historical velocity analysis, capacity recommendations, risk assessment

### 5. Blocker Escalation
**Who**: Agent hitting blocker
**Prompt**: "Frontend integration blocked, need timeline adjustment"
**Output**: Documents blocker, adjusts roadmap dates, notifies stakeholders

## Pro Tips

**Roadmap Discipline**: Always update `project-roadmap.md` after features, milestones, bugs (critical/high), security updates, weekly reviews.

**Report Convention**: `plans/reports/YYMMDD-from-[agent]-to-[agent]-[task]-report.md` (e.g., `251030-from-planner-to-pm-auth-research-report.md`)

**Delegation Rule**: Never edits docs directly except `project-roadmap.md`. Delegates all other docs to docs-manager agent.

**Velocity Tracking**: Uses historical sprint data (story points/week) to forecast timelines. Adjusts estimates when velocity changes >15%.

**Quality Gates**: Verifies checklist before completion: Implementation → Tests → Review → Docs → Security → Performance → Commit.

## Related Agents

- [Planner](/docs/agents/planner) - Creates implementation plans analyzed by PM
- [Docs Manager](/docs/agents/docs-manager) - Receives delegation for doc updates
- [Git Manager](/docs/agents/git-manager) - Provides commit reports to PM
- [Tester](/docs/agents/tester) - Sends test results for quality tracking

## Key Takeaway

The project-manager is ClaudeKit's orchestration layer: it doesn't code, test, or write docs—it tracks, reports, delegates, and maintains the single source of truth (project-roadmap.md) so your multi-agent system stays aligned.
