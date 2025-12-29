---
title: /plan
description: Intelligently analyze task complexity and route to fast or hard planning workflow with prompt enhancement
section: engineer
kit: engineer
category: commands/plan
order: 1
published: true
---

# /plan

Intelligent planning router. Analyzes task complexity, asks clarifying questions if needed, and routes to the appropriate planning workflow (`/plan:fast` or `/plan:hard`).

## Syntax

```bash
/plan [task]
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

**Result**: Complex task routed to `/plan:hard` with enhanced prompt.

## Arguments

- `[task]`: Description of what you want to plan (required)

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

Based on analysis, routes to appropriate planner:

**Route to `/plan:fast`**:
- Small, well-defined tasks
- Clear implementation path
- No research needed
- Single component changes

**Route to `/plan:hard`**:
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

Activates the `planning` skill for structured plan creation.

## Workflow Steps

```
Step 1: Check for active plan
        ↓
Step 2: Analyze task complexity
        ↓
Step 3: Ask clarifying questions (if needed)
        ↓
Step 4: Decide: fast vs hard
        ↓
Step 5: Enhance prompt with context
        ↓
Step 6: Execute /plan:fast or /plan:hard
        ↓
Step 7: Activate planning skill
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

Executing /plan:hard with enhanced prompt...
Activating planning skill...

[/plan:hard creates detailed implementation plan]

Plan created: plans/251129-inventory-api/plan.md
```

## Routing Examples

### Routes to /plan:fast

```bash
# Simple, clear tasks
/plan [add pagination to products list]
/plan [fix date formatting in dashboard]
/plan [add loading spinner to submit button]
/plan [update error messages in validation]
```

### Routes to /plan:hard

```bash
# Complex, research-heavy tasks
/plan [implement real-time notifications system]
/plan [add multi-tenant support to the platform]
/plan [migrate from REST to GraphQL]
/plan [implement end-to-end encryption for messages]
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
| [/plan:fast](/docs/commands/plan/fast) | Quick planning without research | Simple, clear tasks |
| [/plan:hard](/docs/commands/plan/hard) | Research-driven detailed planning | Complex tasks |
| [/plan:parallel](/docs/commands/plan/parallel) | Plan with parallel-executable phases | Multi-agent execution |
| [/plan:two](/docs/commands/plan/two) | Compare two implementation approaches | Architecture decisions |
| [/plan:ci](/docs/commands/plan/ci) | Plan based on CI/CD failures | Fixing pipeline issues |

## Best Practices

### Provide Context

```bash
# Good: Specific with constraints
/plan [add search functionality using Elasticsearch, must support fuzzy matching and filters]

# Less helpful: Vague
/plan [add search]
```

### Trust the Router

Let `/plan` decide the complexity:

```bash
# Let it route
/plan [add caching layer]

# Don't pre-decide
/plan:hard [add caching layer]  # Might be overkill
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

**Key Takeaway**: `/plan` is your intelligent planning entry point. It analyzes complexity, asks the right questions, and routes to the appropriate planning workflow - so you get just enough planning for each task.
