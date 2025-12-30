---
title: "Project Manager Agent"
description: "Track progress, consolidate reports, and keep marketing projects on schedule with comprehensive oversight."
section: marketing
category: agents
order: 2
---

# Project Manager Agent

> **Your project orchestrator** - Keeps everything on track and nothing falls through the cracks

## What This Agent Does

You've just finished implementing a major campaign feature. Tests pass. Code looks good. But wait—did you update the roadmap? Check if other tasks are blocked? Verify the implementation matches the original plan?

**The Problem**: Without project oversight, work gets done but nobody knows if you're actually making progress toward goals. Features ship incomplete, documentation falls behind, and you lose track of what's next.

**The Solution**: The Project Manager Agent maintains bird's-eye view of your entire marketing project. It tracks progress against plans, consolidates reports from other agents, identifies blockers, and keeps documentation current. You always know where you stand.

## Quick Start

Check project status after completing work:

```bash
# After implementing a feature
/status "Check progress on email campaign automation"
```

The agent analyzes implementation reports, updates plans, and tells you exactly what's done and what's next.

## Capabilities

### Progress Tracking
Monitors development across all components:
- Tracks task completion against implementation plans
- Identifies timeline slips and scope changes
- Maps dependencies and critical path
- Maintains visibility into parallel workstreams
- Provides completion percentages and burndown metrics

### Report Collection & Analysis
Systematically gathers insights from all agents:
- Collects reports from tester, developer, analyst agents
- Identifies patterns and recurring issues
- Consolidates findings into coherent assessments
- Highlights critical issues needing attention
- Tracks quality metrics across implementations

### Task Completeness Verification
Validates work actually meets requirements:
- Checks completed tasks against acceptance criteria
- Assesses code quality and test coverage
- Validates implementations align with architecture
- Ensures documentation is complete and current
- Verifies security and performance standards met

### Plan Updates & Status Management
Keeps plans synchronized with reality:
- Updates implementation plans with current status
- Documents blockers and mitigation strategies
- Defines clear next steps with priorities
- Maintains traceability to business requirements
- Updates YAML frontmatter (status, effort, dates)

### Documentation Coordination
Delegates doc updates at the right time:
- Triggers docs-manager when features complete
- Ensures API docs match actual endpoints
- Keeps architecture docs current with system
- Updates user-facing documentation
- Maintains changelog with accurate entries

### Roadmap Management
Automatically maintains project roadmap:
- Updates progress percentages after milestones
- Records completed features in changelog
- Documents bug fixes with severity and impact
- Tracks security updates and compliance changes
- Adjusts timeline based on actual progress

## When to Use

Use the Project Manager Agent when you need to:
- Check overall project status and progress
- Consolidate reports from multiple agents
- Update implementation plans after work completes
- Verify a feature is truly done (not just "dev done")
- Identify what to work on next
- Prepare status updates for stakeholders

## Example Workflows

### Post-Feature Status Check

```bash
# After implementing webhook notifications
/status "Completed webhook system—check overall progress"
```

**The manager will**:
1. Read implementation reports from developer and tester
2. Verify all plan tasks marked complete
3. Check test coverage meets requirements
4. Validate documentation is updated
5. Update plan status and roadmap
6. Identify next priority tasks
7. Report any gaps or concerns

### Cross-Agent Report Analysis

```bash
# Multiple agents finished work
/status "Backend developer and tester completed payment flow"
```

**You'll get**:
- Consolidated summary of both reports
- Analysis of implementation completeness
- Test results and coverage metrics
- Documentation status
- Remaining work and blockers
- Priority recommendations

## Best Practices

1. **Run After Milestones**: Check status after completing features, not during development. Let agents finish their work first.

2. **Trust but Verify**: The manager validates that "done" actually means done. Don't skip this step before moving to the next feature.

3. **Update Plans, Not Just Code**: Plans are living documents. If scope changed during implementation, the manager ensures plans reflect reality.

4. **Weekly Reviews**: Run status checks weekly to catch timeline slips early and adjust priorities.

## Report Output Format

The manager provides comprehensive status reports:

```markdown
## Project Status Report

### Achievements
- [Feature] Webhook system - 100% complete
- [Tests] 95% coverage, all passing
- [Docs] API documentation updated

### Current Phase Progress
Phase 2: Core Features - 75% complete
- ✅ User authentication
- ✅ Webhook notifications
- 🚧 Email templates (in progress)
- ⏳ Campaign analytics (blocked)

### Testing Requirements
- Integration tests needed for webhook retry logic
- Performance testing for email sending at scale

### Blockers
- Analytics blocked on third-party API access
- Email templates waiting for design approval

### Next Steps
Priority 1: Complete email template system
Priority 2: Unblock analytics with API access
Priority 3: Performance optimization

### Risk Assessment
- Timeline: On track for sprint goal
- Technical Debt: Low, refactoring complete
- Dependencies: 1 external blocker (analytics API)
```

## Documentation Update Triggers

The manager automatically triggers doc updates when:
- A development phase status changes (In Progress → Complete)
- Major features implemented, tested, or released
- Critical bugs resolved or security patches applied
- Project timeline, scope, or architecture modified
- External dependencies updated with breaking changes

## Related Agents

- [Planner](/docs/marketing/agents/planner) - Creates plans that manager tracks
- [Docs Manager](/docs/marketing/agents/docs-manager) - Updates documentation on manager's request
- [Tester](/docs/marketing/agents/tester) - Provides test reports manager analyzes
- [Journal Writer](/docs/marketing/agents/journal-writer) - Documents technical difficulties

## Related Commands

- [`/status`](/docs/marketing/commands/status) - Check project status
- [`/report`](/docs/marketing/commands/report) - Generate detailed status report

## Quality Standards

The manager enforces these standards:
- Plans must have YAML frontmatter with status, priority, effort
- Completed features must have passing tests
- Documentation must be current with implementation
- Blockers must have mitigation plans
- Next steps must be prioritized and actionable

## Tips

**Ask for Next Steps**: The manager always tells you what to work on next. If priorities aren't clear, check with the manager before starting new work.

**Don't Skip Verification**: "I think it's done" isn't the same as "the manager confirmed it's done." The verification step catches incomplete work.

**Use for Stakeholder Updates**: Manager reports are formatted for non-technical stakeholders. Copy-paste for status emails or stand-ups.
