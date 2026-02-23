---
title: /plan
description: Intelligently analyze task complexity and create structured implementation plans with optional flags for speed, depth, and parallel execution
section: engineer
kit: engineer
category: commands/plan
order: 1
published: true
---

> **v2.12.0:** Plan modes (`fast`, `hard`, `parallel`, `two`, `ci`, `cro`) are now flags on the [Planning skill](/docs/engineer/skills/plan) rather than separate commands. Use `/plan --fast`, `/plan --hard`, etc. See the [Planning skill](/docs/engineer/skills/plan) for the full consolidated workflow.

# /plan

Intelligent planning entry point. Analyzes task complexity, asks clarifying questions if needed, and creates a structured implementation plan. Use flags to control planning depth and execution mode.

## Syntax

```bash
/plan [task]                  # Auto-route by complexity
/plan --fast [task]           # Quick plan, no research
/plan --hard [task]           # Research-driven detailed plan
/plan --parallel [task]       # Plan with parallel-executable phases
/plan --two [task]            # Compare two implementation approaches
/plan --ci [task]             # Plan from CI/CD failures
```

## When to Use

- **Starting New Features**: Before implementing any significant functionality
- **Complex Tasks**: When unsure whether task is simple or complex
- **Project Kickoff**: When beginning work on a new project or module
- **Architectural Changes**: Before refactoring or restructuring code

## Quick Example

```bash
/plan [add user authentication with OAuth support]
```

**Output**:
```
Analyzing task complexity...

Task: Add user authentication with OAuth support

Complexity Assessment:
- Multiple components: auth service, OAuth providers, sessions
- External dependencies: OAuth configuration, callback handling
- Security considerations: Token storage, CSRF protection

Decision: This task requires research and detailed planning.
→ Routing to /plan:hard

Enhancing prompt with additional context...
Activating planning skill...

[/plan:hard executes with enhanced prompt]
```

**Result**: Complex task creates detailed implementation plan.

## Arguments

- `[task]`: Description of what you want to plan (required)
- `--fast`: Skip research, create quick plan for simple tasks
- `--hard`: Force research-driven planning for complex tasks
- `--parallel`: Structure phases for parallel multi-agent execution
- `--two`: Generate and compare two alternative approaches
- `--ci`: Analyze CI/CD failures and create a fix plan

## What It Does

### 1. Pre-Creation Check

Before creating a new plan, checks for existing active plans:

```
Checking for active plan...
Active plan found: plans/251128-user-api/plan.md

Continue with existing plan? [Y/n]
```

- **Y (default)**: Passes existing plan path to subcommand
- **n**: Creates new plan in `plans/YYMMDD-HHMM-{task-slug}/`

### 2. Complexity Analysis

Evaluates the task against multiple factors:

| Factor | Simple (→ fast) | Complex (→ hard) |
|--------|-----------------|------------------|
| Scope | Single file/module | Multiple systems |
| Dependencies | None or few | External APIs, DBs |
| Research | Not needed | Best practices required |
| Decisions | Clear approach | Multiple valid options |
| Risk | Low impact | Security, data integrity |

### 3. Clarification Questions

If requirements are ambiguous, asks for clarification:

```
Before planning, I need to clarify a few things:

1. What authentication methods do you need?
   [ ] Email/password
   [ ] OAuth (Google, GitHub)
   [ ] Magic links
   [ ] All of the above

2. Do you need role-based access control (RBAC)?

3. What's the expected user scale?
```

### 4. Routing Decision

Based on analysis (or explicit flag), selects planning depth:

**Fast** (`--fast` or auto-routed for simple tasks):
- Small, well-defined tasks
- Clear implementation path
- No research needed
- Single component changes

**Hard** (`--hard` or auto-routed for complex tasks):
- Complex, multi-component tasks
- Research required
- Multiple valid approaches
- Security or performance considerations

### 5. Prompt Enhancement

Before delegation, enhances your prompt with:

- Project context from `./docs/` (system-architecture, code-standards)
- Codebase patterns from recent files
- Relevant constraints and requirements
- Active plan context (if continuing)

### 6. Skill Activation

Activates the [Planning skill](/docs/engineer/skills/plan) for structured plan creation. See the skill for full consolidated options including all planning modes.

## Workflow Steps

```
Step 1: Check for active plan
        ↓
Step 2: Analyze task complexity (or use --fast/--hard flag)
        ↓
Step 3: Ask clarifying questions (if needed)
        ↓
Step 4: Select planning depth
        ↓
Step 5: Enhance prompt with context
        ↓
Step 6: Create plan via Planning skill
        ↓
Step 7: Output structured plan directory
```

## Complete Example

### Scenario: Planning a New API Endpoint

```bash
/plan [add product inventory management API]
```

**Execution Flow**:

```
Checking for active plan...
No active plan found.

Analyzing task complexity...

Task: Add product inventory management API

Factors analyzed:
✓ Scope: Multiple endpoints (CRUD + inventory tracking)
✓ Dependencies: Database schema changes needed
✓ Research: Inventory patterns (SKU, variants, stock levels)
✓ Decisions: Real-time vs batch inventory updates
✓ Risk: Data integrity for stock counts

Complexity Score: 7/10 (High)

Clarifying questions:

1. Do you need variant support (size, color, etc.)?
   > Yes, products have multiple variants

2. Real-time inventory updates or batch processing?
   > Real-time for point of sale

3. Multi-warehouse support?
   > Single warehouse for now, but design for future multi-warehouse

Decision: Complex task requiring research
→ Routing to /plan:hard

Enhancing prompt...
Added context:
- Existing product model structure
- Database schema patterns
- API conventions from code-standards.md

Executing plan with enhanced prompt...
Activating planning skill...

Plan created: plans/251129-inventory-api/plan.md
```

## Routing Examples

### Fast planning (simple tasks)

```bash
# Use --fast or let the router decide
/plan --fast [add pagination to products list]
/plan [fix date formatting in dashboard]
/plan [add loading spinner to submit button]
```

### Hard planning (complex tasks)

```bash
# Use --hard or let the router decide
/plan --hard [implement real-time notifications system]
/plan [add multi-tenant support to the platform]
/plan [migrate from REST to GraphQL]
```

### Other modes

```bash
# Parallel-executable phases for multi-agent teams
/plan --parallel [add payment integration]

# Compare two approaches before committing
/plan --two [add caching layer]

# Fix a broken CI pipeline
/plan --ci [fix failing integration tests]
```

## Active Plan Management

### Continuing Existing Plan

```bash
/plan [add tests for auth module]
```

```
Active plan found: plans/251128-auth-system/plan.md
Phase 2 (testing) not yet started.

Continue with existing plan? [Y/n] Y

Adding test phase to existing plan...
→ Routing to /plan:fast (clear scope within existing plan)
```

### Creating New Plan

```bash
/plan [completely new feature unrelated to current work]
```

```
Active plan found: plans/251128-auth-system/plan.md

Continue with existing plan? [Y/n] n

Creating new plan directory...
→ plans/251129-new-feature/

Analyzing complexity...
```

## Related Commands

| Command | Description | When to Use |
|---------|-------------|-------------|
| [/plan:validate](/docs/engineer/commands/plan/validate) | Interview-based plan validation | Before implementation |
| [/plan:red-team](/docs/engineer/commands/plan/red-team) | Adversarial plan review | Finding flaws and assumptions |
| [/plan:archive](/docs/engineer/commands/plan/archive) | Archive completed plans | Post-implementation cleanup |
| [Planning skill](/docs/engineer/skills/plan) | Full consolidated planning workflow | All planning modes via flags |

## Best Practices

### Provide Context

```bash
# Good: Specific with constraints
/plan [add search functionality using Elasticsearch, must support fuzzy matching and filters]

# Less helpful: Vague
/plan [add search]
```

### Trust the Router

Let `/plan` decide the complexity, or use explicit flags when you know:

```bash
# Let it route
/plan [add caching layer]

# Explicit when you know the complexity
/plan --fast [add loading spinner]
/plan --hard [redesign auth system]
```

### Use Active Plans

When working on related tasks, continue existing plans:

```
Continue with existing plan? [Y/n] Y
```

This keeps related work organized in one plan directory.

## Common Issues

### Frequent Hard Routing

**Problem**: Most tasks routing to `/plan:hard`

**Solution**: Break large tasks into smaller pieces
```bash
# Instead of
/plan [build entire e-commerce platform]

# Break down
/plan [add product catalog]
/plan [add shopping cart]
/plan [add checkout flow]
```

### Missed Context

**Problem**: Plan doesn't reflect existing patterns

**Solution**: Ensure `./docs/` is up to date
- `system-architecture.md` - Current architecture
- `code-standards.md` - Coding conventions

---

**Key Takeaway**: `/plan` is your intelligent planning entry point. It analyzes complexity, asks the right questions, and creates the right plan — use flags (`--fast`, `--hard`, `--parallel`, `--two`, `--ci`) when you want explicit control. For the full consolidated workflow, see the [Planning skill](/docs/engineer/skills/plan).
