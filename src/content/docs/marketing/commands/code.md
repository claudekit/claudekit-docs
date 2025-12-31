---
title: "/code"
description: "Execute implementation plans with 6-step workflow: analysis, implementation, testing, code review, user approval, and finalization"
section: marketing
category: commands
order: 15
published: true
---

> Execute plans with quality gates and automated testing

## Quick Start

```bash
/code
```

**Auto-detects latest plan** or specify:
```bash
/code plans/251229-email-campaign
```

## 6-Step Workflow

### Step 1: Analysis & Task Extraction
- Reads plan file completely
- Extracts all tasks
- Activates required skills
- Identifies dependencies

### Step 2: Implementation
- Implements step-by-step
- Marks tasks complete as done
- Runs type checking
- Uses specialized agents (ui-ux-designer for UI)

### Step 3: Testing (Blocking Gate)
- Writes comprehensive tests
- Runs test suite via tester agent
- **Requires 100% pass** - blocks if failures
- Debugger agent fixes failures

### Step 4: Code Review (Blocking Gate)
- code-reviewer agent analyzes code
- Checks security, performance, architecture
- **Requires 0 critical issues** - blocks otherwise
- Fixes and re-reviews until clean

### Step 5: User Approval (Blocking Gate)
- Presents summary
- **Waits for explicit approval**
- Cannot proceed without user confirmation

### Step 6: Finalize
- project-manager updates plan status
- docs-manager updates documentation
- Auto-commits to git (after approval)
- Generates completion report

## Example Output

```markdown
✓ Step 0: Email Campaign Plan - Phase 1
✓ Step 1: Found 8 tasks across 1 phase - Ambiguities: none
✓ Step 2: Implemented 6 files - 8/8 tasks complete, compilation passed
✓ Step 3: Tests [12/12 passed] - All requirements met
✓ Step 4: Code reviewed - [0] critical issues
⏸ Step 5: WAITING for user approval

Changes:
- Created lib/email/campaign.ts
- Created lib/email/scheduler.ts
- Modified app/api/campaigns/route.ts
- Added 12 test cases

Approve changes? [Y/n]
```

**After approval**:
```markdown
✓ Step 5: User approved - Ready to complete
✓ Step 6: Finalize - Status updated - Git committed

feat(email): implement email drip campaign system

- Add campaign creation and scheduling
- Implement email template management
- Add trigger-based automation
- Create analytics dashboard
- Add 12 test cases

Committed: abc1234
```

## Blocking Gates

**Cannot proceed if**:
- Tests failing (Step 3)
- Critical issues found (Step 4)
- User hasn't approved (Step 5)

## Related Commands

- [/plan](/docs/marketing/commands/plan) - Create plan first
- [/cook](/docs/marketing/commands/cook) - Plan + code in one
- [/test](/docs/marketing/commands/test) - Run tests only
- [/fix](/docs/marketing/commands/fix) - Fix issues

---

**Quality by default.** Automated gates ensure production-ready code.
