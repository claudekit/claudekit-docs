---
title: /code:parallel
description: Execute parallel or sequential phases from existing plan using dependency graph analysis
section: docs
category: commands/core
order: 81
published: true
---

# /code:parallel

Plan execution with parallel/sequential phase coordination. Reads dependency graphs from existing plans and executes phases using fullstack-developer agents in optimized waves.

## Syntax

```bash
/code:parallel [plan-path]
```

## When to Use

- **Existing Parallel Plans**: Execute plans created by `/plan:parallel`
- **Dependency-Aware Execution**: When phases have dependencies
- **Multi-Phase Projects**: Complex implementations with multiple stages
- **Optimized Execution**: Automatic parallelization where possible

## Quick Example

```bash
/code:parallel @plans/251129-auth-system/plan.md
```

**Output**:
```
Reading plan: plans/251129-auth-system/plan.md

Parsing dependency graph...
Phase 1: Auth module (no deps)
Phase 2: Session management (no deps)
Phase 3: OAuth providers (depends on: 1)
Phase 4: Integration (depends on: 1, 2, 3)

Building execution waves...
Wave 1: Phase 1 + Phase 2 (parallel)
Wave 2: Phase 3 (sequential)
Wave 3: Phase 4 (sequential)

Executing Wave 1...
[Agent 1] Auth module... ████████████ Complete
[Agent 2] Session management... ████████████ Complete

Executing Wave 2...
[Agent 3] OAuth providers... ████████████ Complete

Executing Wave 3...
[Agent 4] Integration... ████████████ Complete

All phases complete!
```

## Arguments

- `[plan-path]`: Path to plan.md (optional - auto-detects active plan)

## What It Does

### Step 1: Load Plan

```
Checking for plan...

Plan provided: plans/251129-auth-system/plan.md
OR
Auto-detected: plans/251129-auth-system/plan.md (from active-plan)
```

### Step 2: Extract Dependency Graph

Looks for "## Dependency Graph" section:

```markdown
## Dependency Graph

Phase 1: Auth module (no deps)
Phase 2: Session management (no deps)
Phase 3: OAuth providers (depends on: Phase 1)
Phase 4: Integration (depends on: Phase 1, Phase 2, Phase 3)
```

Parsed:
```
Phase 1: dependencies = []
Phase 2: dependencies = []
Phase 3: dependencies = [1]
Phase 4: dependencies = [1, 2, 3]
```

### Step 3: Build Execution Waves

```
Analyzing dependencies...

Wave 1: Phases with no dependencies
→ Phase 1, Phase 2 (can run parallel)

Wave 2: Phases depending only on Wave 1
→ Phase 3 (depends on Phase 1)

Wave 3: Phases depending on Wave 2
→ Phase 4 (depends on all previous)

Execution plan:
Wave 1: [Phase 1, Phase 2] - Parallel
Wave 2: [Phase 3] - After Wave 1
Wave 3: [Phase 4] - After Wave 2
```

### Step 4: Execute Wave 1 (Parallel)

```
Launching Wave 1 agents...

[Agent 1] Phase 1: Auth module
  File ownership: src/auth/**
  Status: Running...

[Agent 2] Phase 2: Session management
  File ownership: src/session/**
  Status: Running...

Progress:
[██████████] Agent 1: Complete (6 min)
[██████████] Agent 2: Complete (5 min)

Wave 1 complete.
```

### Step 5: Wait for Wave Completion

```
Wave 1 results:
✓ Phase 1: Auth module - 8 files changed
✓ Phase 2: Session management - 5 files changed

All Wave 1 phases complete.
Proceeding to Wave 2...
```

### Step 6-7: Execute Remaining Waves

```
Executing Wave 2...
[Agent 3] Phase 3: OAuth providers
  Dependencies satisfied: Phase 1 ✓
  Status: Running...

[██████████] Agent 3: Complete (7 min)

Executing Wave 3...
[Agent 4] Phase 4: Integration
  Dependencies satisfied: Phase 1 ✓, Phase 2 ✓, Phase 3 ✓
  Status: Running...

[██████████] Agent 4: Complete (4 min)
```

### Step 8: Integration & Testing

```
All waves complete.

Running integration tests...
Tests: 24/24 passed

Summary:
- Phases executed: 4
- Waves: 3
- Total time: 16 minutes
- Sequential estimate: 28 minutes
- Speedup: 1.75x
```

## Dependency Graph Format

Plan.md should include:

```markdown
## Dependency Graph

Phase 1: [Phase Name] (no deps)
Phase 2: [Phase Name] (no deps)
Phase 3: [Phase Name] (depends on: Phase 1)
Phase 4: [Phase Name] (depends on: Phase 1, Phase 2, Phase 3)
```

Or visual format:

```markdown
## Dependency Graph

```
Phase 1 ──────┐
              ├──→ Phase 3 ──→ Phase 4
Phase 2 ──────┘
```
```

## File Ownership Matrix

Plan.md can include file ownership:

```markdown
## File Ownership Matrix

| Phase | Owned Files |
|-------|-------------|
| Phase 1 | src/auth/**, tests/auth/** |
| Phase 2 | src/session/**, tests/session/** |
| Phase 3 | src/oauth/**, tests/oauth/** |
| Phase 4 | src/integration/**, tests/e2e/** |
```

Prevents conflicts between parallel agents.

## Execution Waves

### Parallel Wave

Multiple phases with satisfied dependencies:

```
Wave 1:
├── Phase 1 (no deps) ─────────┐
│                              │── Parallel
└── Phase 2 (no deps) ─────────┘

[Both agents run simultaneously]
```

### Sequential Wave

Single phase or phases with new dependencies:

```
Wave 2:
└── Phase 3 (depends on Phase 1)

[Waits for Wave 1, then runs Phase 3]
```

## Fallback Behavior

If no dependency graph found:

```
No "## Dependency Graph" section found.
Falling back to sequential execution...

Executing phases in order:
1. Phase 1
2. Phase 2
3. Phase 3
4. Phase 4
```

## Complete Example

### Scenario: Executing E-commerce Plan

```bash
/code:parallel @plans/251129-ecommerce/plan.md
```

**Plan Content**:
```markdown
# E-commerce Implementation Plan

## Dependency Graph

Phase 1: Product Catalog (no deps)
Phase 2: Shopping Cart (no deps)
Phase 3: User Auth (no deps)
Phase 4: Checkout (depends on: Phase 1, Phase 2, Phase 3)
Phase 5: Order Processing (depends on: Phase 4)

## File Ownership Matrix

| Phase | Owned Files |
|-------|-------------|
| Phase 1 | src/products/**, src/api/products/** |
| Phase 2 | src/cart/**, src/api/cart/** |
| Phase 3 | src/auth/**, src/api/auth/** |
| Phase 4 | src/checkout/**, src/pages/checkout/** |
| Phase 5 | src/orders/**, src/api/orders/** |
```

**Execution**:

```
═══════════════════════════════════════
        PARALLEL EXECUTION
═══════════════════════════════════════

Plan: E-commerce Implementation

Dependency Analysis:
Phase 1: no deps → Wave 1
Phase 2: no deps → Wave 1
Phase 3: no deps → Wave 1
Phase 4: deps [1,2,3] → Wave 2
Phase 5: deps [4] → Wave 3

Wave 1 (Parallel - 3 agents):
─────────────────────────────────────
[Agent 1] Product Catalog...
[Agent 2] Shopping Cart...
[Agent 3] User Auth...

Progress:
[██████████] Agent 1: Complete (8 min)
[██████████] Agent 2: Complete (6 min)
[██████████] Agent 3: Complete (7 min)

Wave 2 (Sequential):
─────────────────────────────────────
[Agent 4] Checkout...
Dependencies: ✓ Phase 1, ✓ Phase 2, ✓ Phase 3

[██████████] Agent 4: Complete (9 min)

Wave 3 (Sequential):
─────────────────────────────────────
[Agent 5] Order Processing...
Dependencies: ✓ Phase 4

[██████████] Agent 5: Complete (5 min)

═══════════════════════════════════════
        EXECUTION COMPLETE
═══════════════════════════════════════

Phases: 5/5 complete
Waves: 3
Time: 17 minutes
Sequential: ~35 minutes
Speedup: 2.06x

Tests: 45/45 passed
Files: 52 changed
═══════════════════════════════════════
```

## Best Practices

### Verify Plan Structure

Before execution:
```bash
# Check plan has dependency graph
cat plans/*/plan.md | grep -A 20 "Dependency Graph"
```

### Use with /plan:parallel

```bash
# Create optimized plan
/plan:parallel [your feature]

# Execute with parallel coordination
/code:parallel
```

### Auto-Detection

If no path provided, uses active plan:
```bash
/code:parallel
# Uses plan from .claude/active-plan
```

## Related Commands

- [/code](/docs/commands/core/code) - Sequential plan execution
- [/plan:parallel](/docs/commands/plan/parallel) - Create parallel plans
- [/cook:auto:parallel](/docs/commands/core/cook-auto-parallel) - Plan + execute parallel
- [/fix:parallel](/docs/commands/fix/parallel) - Parallel bug fixing

---

**Key Takeaway**: `/code:parallel` executes implementation plans with optimized parallel/sequential coordination, using dependency graphs to maximize parallelization while respecting phase dependencies.
