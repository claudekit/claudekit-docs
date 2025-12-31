---
title: /bootstrap:auto:fast
description: Quick auto-bootstrap with parallel research and streamlined workflow
section: engineer
kit: engineer
category: commands/core
order: 25
published: true
---

# /bootstrap:auto:fast

Faster automatic project bootstrapping with parallel research phases.

## Syntax

```bash
/bootstrap:auto:fast [user-requirements]
```

## Key Differences from /bootstrap:auto

| Aspect | /bootstrap:auto | /bootstrap:auto:fast |
|--------|-----------------|----------------------|
| Research | Sequential | 6 agents in parallel |
| Sources | Unlimited | Max 5 per researcher |
| Final commit | User choice (push) | Local only (no push) |
| User approval | Multiple points | Fewer checkpoints |

## Workflow Phases

### 1. Git Initialization
- Initialize Git with `main` branch

### 2. Research & Planning (Parallel)
- 2 researchers: User request, idea validation
- 2 researchers: Tech stack selection
- 2 researchers: Design planning
- All limited to max 5 sources each

### 3. Planning (Sequential)
- `ui-ux-designer`: Design guidelines & wireframes
- Logo generation if needed
- `planner`: Implementation plan

### 4. Implementation
- Follow plan step by step
- UI per design guidelines
- Asset generation and processing

### 5. Testing
- Real tests, no fake data
- Debug and fix until all pass

### 6. Code Review
- Fix critical issues
- Re-test after fixes

### 7. Documentation
- README.md, PDR, code-standards, architecture
- Project roadmap

### 8. Final Report
- Local commits only (no push)
- Summary of changes

### 9. Onboarding
- Step-by-step configuration help

## When to Use

- Faster project setup needed
- Requirements are clear
- Standard tech stack expected

## When to Use /bootstrap:auto Instead

- Complex requirements needing deep research
- Unfamiliar domain
- Need comprehensive documentation

---

**Key Takeaway**: Use `/bootstrap:auto:fast` for quicker project bootstrapping with parallel research and streamlined workflow.
