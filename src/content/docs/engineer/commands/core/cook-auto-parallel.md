---
title: /cook:auto:parallel
description: Implement features with parallel execution using plan:parallel and fullstack-developer agents
section: engineer
kit: engineer
category: commands/core
order: 51
published: true
---

# /cook:auto:parallel

Feature implementation with parallel execution. Creates a parallel plan and launches multiple fullstack-developer agents to implement independent phases simultaneously.

## Syntax

```bash
/cook:auto:parallel [tasks]
```

## When to Use

- **Multi-Module Features**: Features spanning multiple independent areas
- **Speed Priority**: When faster implementation matters
- **Independent Components**: Features with clear module boundaries
- **Full Automation**: No approval gates needed

## Quick Example

```bash
/cook:auto:parallel [implement user authentication and payment processing]
```

**Output**:
```
Analyzing feature requirements...

Creating parallel plan...
Phases identified:
- Phase 1: Auth module (no deps)
- Phase 2: Payment module (no deps)
- Phase 3: Integration (depends on 1,2)

Launching parallel agents...

Wave 1 (Parallel):
[Agent 1] Auth module... ████████████ Complete (6 min)
[Agent 2] Payment module... ████████████ Complete (8 min)

Wave 2 (Sequential):
[Agent 3] Integration... ████████████ Complete (4 min)

Tests: 18/18 passed
Feature complete!
```

## Arguments

- `[tasks]`: Feature description or task list (required)

## What It Does

### Step 1: Analyze Requirements

```
Parsing feature: auth + payment processing

Components identified:
- Authentication (signup, login, sessions)
- Payment (Stripe integration, webhooks)
- Integration (protected checkout)
```

### Step 2: Create Parallel Plan

Invokes `/plan:parallel`:

```
Creating parallel plan...

## Dependency Graph
Phase 1: Auth (no deps)
Phase 2: Payment (no deps)
Phase 3: Integration (depends on: 1, 2)

## File Ownership Matrix
Phase 1: src/auth/**, src/middleware/auth.ts
Phase 2: src/payment/**, src/api/webhooks/**
Phase 3: src/checkout/**, src/pages/checkout.tsx
```

### Step 3: Parse Dependency Graph

```
Parsing dependencies...

Wave 1: Phase 1, Phase 2 (parallel)
Wave 2: Phase 3 (after Wave 1)
```

### Step 4: Execute Parallel Phases

```
Launching fullstack-developer agents...

[Agent 1] Starting Phase 1: Auth module
[Agent 2] Starting Phase 2: Payment module

File ownership enforced:
- Agent 1: src/auth/**
- Agent 2: src/payment/**
```

### Step 5: Monitor Progress

```
Progress:
[████████████] Agent 1: Complete (6 min)
[██████████──] Agent 2: 85% (7 min)

Wave 1: 1/2 complete
```

### Step 6: Integrate Results

```
Wave 1 complete.

Executing Wave 2...
[Agent 3] Starting Phase 3: Integration
```

### Step 7: Run Tests

```
Running tests...

Auth tests: 8/8 passed
Payment tests: 6/6 passed
Integration tests: 4/4 passed

Total: 18/18 passed
```

### Step 8: Generate Summary

```
═══════════════════════════════════════
        FEATURE COMPLETE
═══════════════════════════════════════

Feature: Auth + Payment Processing

Phases Completed:
✓ Phase 1: Auth module
✓ Phase 2: Payment module
✓ Phase 3: Integration

Files Changed: 24
Tests: 18/18 passed
Time: 14 minutes (vs ~25 min sequential)

Ready for PR.
═══════════════════════════════════════
```

## Dependency Management

### Reading Dependency Graph

From plan.md:

```markdown
## Dependency Graph

Phase 1: Auth Module (no deps)
Phase 2: Payment Module (no deps)
Phase 3: Integration (depends on: Phase 1, Phase 2)
Phase 4: E2E Tests (depends on: Phase 3)
```

### Building Execution Waves

```
Wave Analysis:

Phase 1: No dependencies → Wave 1
Phase 2: No dependencies → Wave 1
Phase 3: Depends on 1,2 → Wave 2
Phase 4: Depends on 3 → Wave 3

Execution Order:
Wave 1: Phase 1 + Phase 2 (parallel)
Wave 2: Phase 3 (after Wave 1)
Wave 3: Phase 4 (after Wave 2)
```

## Agent Coordination

### File Ownership

Each agent gets exclusive file access:

```
Agent 1 (Auth):
├── src/auth/**
├── src/middleware/auth.ts
└── tests/auth/**

Agent 2 (Payment):
├── src/payment/**
├── src/api/webhooks/**
└── tests/payment/**

No overlap = No conflicts
```

### Timeout and Failure

```
Agent configuration:
- Timeout: 15 minutes per agent
- Failure handling: Failed agents don't block others

If Agent 2 fails:
- Agent 1 continues to completion
- Wave 2 starts with Phase 3
- Failure reported in summary
```

## Complete Example

### Scenario: Multi-Module Feature

```bash
/cook:auto:parallel [implement user dashboard with profile, settings, notifications, and activity feed]
```

**Execution**:

```
Analyzing feature...

Components:
- User profile (view, edit)
- Settings (preferences, security)
- Notifications (list, read/unread)
- Activity feed (timeline)

Creating parallel plan...

## Dependency Graph
Phase 1: Profile module (no deps)
Phase 2: Settings module (no deps)
Phase 3: Notifications (no deps)
Phase 4: Activity feed (no deps)
Phase 5: Dashboard integration (depends on: 1,2,3,4)

## File Ownership Matrix
Phase 1: src/profile/**
Phase 2: src/settings/**
Phase 3: src/notifications/**
Phase 4: src/activity/**
Phase 5: src/dashboard/**, src/pages/dashboard.tsx

Launching agents...

Wave 1 (4 parallel agents):
[Agent 1] Profile... ████████████ Complete (5 min)
[Agent 2] Settings... ████████████ Complete (6 min)
[Agent 3] Notifications... ████████████ Complete (4 min)
[Agent 4] Activity feed... ████████████ Complete (7 min)

Wave 2 (sequential):
[Agent 5] Dashboard integration... ████████████ Complete (5 min)

Running tests...
All phases: 32/32 tests passed

═══════════════════════════════════════
        COMPLETE
═══════════════════════════════════════

Time: 12 minutes
Sequential estimate: ~27 minutes
Speedup: 2.25x

Files changed: 38
Tests passed: 32
Ready for review!
═══════════════════════════════════════
```

## Progress Tracking

TodoWrite integration:

```
Todo List:
[████████████] Phase 1: Profile - Complete
[████████████] Phase 2: Settings - Complete
[████████████] Phase 3: Notifications - Complete
[████████████] Phase 4: Activity - Complete
[██████████──] Phase 5: Dashboard - 90%
```

## Best Practices

### Define Clear Boundaries

```bash
# Good: Clear module boundaries
/cook:auto:parallel [
  implement:
  1. User authentication (email, OAuth)
  2. Payment processing (Stripe)
  3. Email notifications (SendGrid)
]

# Challenging: Overlapping concerns
/cook:auto:parallel [fix auth bugs and update payment UI]
```

### Check Plan First

If unsure about parallelization:

```bash
# Create plan first to review
/plan:parallel [your feature]

# Review plan.md for dependencies
cat plans/*/plan.md

# Then execute
/code:parallel
```

## Related Commands

- [/cook](/docs/engineer/commands/core/cook) - Step-by-step implementation
- [/cook:auto](/docs/engineer/commands/core/cook-auto) - Auto cook (sequential)
- [/plan:parallel](/docs/engineer/commands/plan/parallel) - Create parallel plans
- [/code:parallel](/docs/engineer/commands/core/code-parallel) - Execute existing parallel plans

---

**Key Takeaway**: `/cook:auto:parallel` accelerates feature implementation by running independent phases in parallel, using file ownership to prevent conflicts between concurrent agents.
