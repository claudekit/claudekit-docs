---
title: /fix
description: Intelligently route issues to specialized fix commands based on type, complexity, and scope analysis
section: engineer
kit: engineer
category: commands/fix
order: 1
published: true
---

# /fix

Intelligent issue router. Analyzes your issue description and automatically routes to the most appropriate fix command based on type, complexity, and scope.

## Syntax

```bash
/fix [issues]
```

## When to Use

- **Any Bug or Issue**: Let ClaudeKit decide the approach
- **Unknown Complexity**: Don't know if simple or complex
- **Quick Workflow**: Describe problem, let router decide
- **Multiple Issues**: Can detect and route to parallel fixing

## Quick Example

```bash
/fix [users sometimes getting logged out randomly]
```

**Output**:
```
Analyzing issue...

Keywords detected: "randomly", "sometimes" (intermittent)
Scope: Unknown (needs investigation)
Complexity: High

Decision: Complex issue requiring investigation
→ Routing to /fix:hard

Executing /fix:hard with enhanced prompt...
```

## Arguments

- `[issues]`: Description of issue(s) to fix (required). Can be single issue or numbered list.

## Pre-Routing Check

Before analyzing the issue, `/fix` checks for existing plans:

```
Checking for active plan...
Active plan found: plans/251128-auth-system/plan.md

→ Routing to /code plans/251128-auth-system/plan.md
```

If an active plan exists at `<WORKING-DIR>/.claude/active-plan`, routes to `/code` instead.

## Decision Tree

Routes are evaluated in priority order:

```
┌─────────────────────────────────────────────────────────┐
│                    /fix [issues]                        │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│ 1. Existing plan found?                                 │
│    → /code <path-to-plan>                               │
└─────────────────────────────────────────────────────────┘
                           │ No
                           ▼
┌─────────────────────────────────────────────────────────┐
│ 2. Type errors? (type, typescript, tsc)                 │
│    → /fix:types                                         │
└─────────────────────────────────────────────────────────┘
                           │ No
                           ▼
┌─────────────────────────────────────────────────────────┐
│ 3. UI/UX issue? (ui, ux, design, layout, style, css)    │
│    → /fix:ui                                            │
└─────────────────────────────────────────────────────────┘
                           │ No
                           ▼
┌─────────────────────────────────────────────────────────┐
│ 4. CI/CD issue? (github actions, pipeline, workflow)    │
│    → /fix:ci                                            │
└─────────────────────────────────────────────────────────┘
                           │ No
                           ▼
┌─────────────────────────────────────────────────────────┐
│ 5. Test failure? (test, spec, jest, vitest, failing)    │
│    → /fix:test                                          │
└─────────────────────────────────────────────────────────┘
                           │ No
                           ▼
┌─────────────────────────────────────────────────────────┐
│ 6. Log analysis? (logs, error logs, stack trace)        │
│    → /fix:logs                                          │
└─────────────────────────────────────────────────────────┘
                           │ No
                           ▼
┌─────────────────────────────────────────────────────────┐
│ 7. Multiple independent issues? (2+ unrelated)          │
│    → /fix:parallel                                      │
└─────────────────────────────────────────────────────────┘
                           │ No
                           ▼
┌─────────────────────────────────────────────────────────┐
│ 8. Complex issue? (complex, architecture, refactor)     │
│    → /fix:hard                                          │
└─────────────────────────────────────────────────────────┘
                           │ No
                           ▼
┌─────────────────────────────────────────────────────────┐
│ 9. Default: Simple, single-file issue                   │
│    → /fix:fast                                          │
└─────────────────────────────────────────────────────────┘
```

## Keyword Detection

| Keywords | Route | Description |
|----------|-------|-------------|
| `type`, `typescript`, `tsc`, `type error` | /fix:types | TypeScript type errors |
| `ui`, `ux`, `design`, `layout`, `style`, `css`, `responsive` | /fix:ui | UI/UX issues |
| `github actions`, `pipeline`, `ci/cd`, `workflow`, `build failed` | /fix:ci | CI/CD failures |
| `test`, `spec`, `jest`, `vitest`, `failing test`, `test error` | /fix:test | Test failures |
| `logs`, `error logs`, `log file`, `stack trace`, `exception` | /fix:logs | Log-based debugging |
| `complex`, `architecture`, `refactor`, `major`, `rewrite` | /fix:hard | Complex issues |
| `typo`, `simple`, `quick`, `single file`, `obvious` | /fix:fast | Simple fixes |

## Routing Examples

### Route 1: Type Errors → /fix:types

```bash
/fix [typescript errors in user service]
```
```
Keywords: "typescript"
→ Routing to /fix:types
```

### Route 2: UI Issues → /fix:ui

```bash
/fix [button alignment broken on mobile layout]
```
```
Keywords: "button", "mobile", "layout"
→ Routing to /fix:ui
```

### Route 3: CI/CD → /fix:ci

```bash
/fix [GitHub Actions workflow failing on test step]
```
```
Keywords: "GitHub Actions", "workflow", "failing"
→ Routing to /fix:ci
```

### Route 4: Test Failures → /fix:test

```bash
/fix [jest tests failing after refactor]
```
```
Keywords: "jest", "tests", "failing"
→ Routing to /fix:test
```

### Route 5: Log Analysis → /fix:logs

```bash
/fix [stack trace shows null pointer in auth module]
```
```
Keywords: "stack trace"
→ Routing to /fix:logs
```

### Route 6: Multiple Issues → /fix:parallel

```bash
/fix [
1. Button not clickable on mobile
2. API timeout on /users endpoint
3. Typo in footer copyright
]
```
```
Issues detected: 3 independent issues
→ Routing to /fix:parallel
```

### Route 7: Complex → /fix:hard

```bash
/fix [users randomly getting logged out, need to investigate session handling]
```
```
Keywords: "randomly", "investigate"
Complexity: High
→ Routing to /fix:hard
```

### Route 8: Simple → /fix:fast

```bash
/fix [change button color from blue to green]
```
```
Keywords: "change", single-file implied
Complexity: Low
→ Routing to /fix:fast
```

## Clarification Questions

If the issue is ambiguous, `/fix` asks before routing:

```bash
/fix [something's wrong with the API]
```

```
Issue unclear. Please clarify:

1. What specific behavior are you seeing?
   [ ] Errors returned
   [ ] Slow responses
   [ ] Wrong data
   [ ] Connection issues

2. Is this affecting:
   [ ] Single endpoint
   [ ] Multiple endpoints
   [ ] All endpoints

3. Do you have:
   [ ] Error logs
   [ ] Stack traces
   [ ] Reproduction steps
```

## Prompt Enhancement

Before delegating, `/fix` enhances your description:

**Your Input**:
```bash
/fix [login broken]
```

**Enhanced Prompt**:
```
Analyze and fix login functionality issue.

Context:
- Issue: Login broken (needs investigation)
- Scope: Authentication system
- Priority: High (core functionality)

Investigation steps:
1. Check authentication flow
2. Verify API endpoints
3. Review session handling
4. Check error logs
5. Test login scenarios

Fix and validate:
- Implement solution
- Add tests
- Verify fix
- Document changes
```

## Complete Example

### Scenario: Mixed Complexity Issue

```bash
/fix [payment processing fails for international cards]
```

**Routing Analysis**:
```
Analyzing issue...

Keywords: "payment", "fails", "international cards"
Scope: Payment system (likely multiple files)
Complexity: Medium-High
Investigation needed: Yes (specific card types)

Decision: Complex issue requiring investigation
→ Routing to /fix:hard

Enhancing prompt...
Added context:
- Payment provider integration points
- Currency handling considerations
- International card validation rules

Executing /fix:hard with enhanced prompt...

[Fix execution begins]
```

## Manual Override

If you know the right command, call it directly:

```bash
# Override router, use specific command
/fix:types [your issue]
/fix:ui [your issue]
/fix:fast [your issue]
/fix:hard [your issue]
/fix:parallel [issue list]
```

## Related Commands

| Command | Description | When Auto-Selected |
|---------|-------------|--------------------|
| [/fix:fast](/docs/commands/fix/fast) | Quick single-file fixes | Simple, clear issues |
| [/fix:hard](/docs/commands/fix/hard) | Complex multi-file fixes | Investigation needed |
| [/fix:types](/docs/commands/fix/types) | TypeScript type errors | Type-related keywords |
| [/fix:ui](/docs/commands/fix/ui) | UI/UX issues | UI/design keywords |
| [/fix:ci](/docs/commands/fix/ci) | CI/CD failures | Pipeline keywords |
| [/fix:test](/docs/commands/fix/test) | Test failures | Test-related keywords |
| [/fix:logs](/docs/commands/fix/logs) | Log-based debugging | Log/trace keywords |
| [/fix:parallel](/docs/commands/fix/parallel) | Multiple independent issues | 2+ unrelated issues |
| [/code](/docs/commands/core/code) | Execute existing plan | Active plan found |
| [/debug](/docs/commands/core/debug) | Investigate issues | Deep investigation |

## Best Practices

### Be Descriptive

```bash
# Good: Specific with context
/fix [email validation accepts invalid emails like "test@" without domain]

# Less helpful: Vague
/fix [validation broken]
```

### Include Location if Known

```bash
# Good: Location provided
/fix [missing await in getUserData function in user.service.ts]

# Less context
/fix [missing await somewhere]
```

### Trust the Router

Let `/fix` decide the strategy:

```bash
# Just describe the problem
/fix [users reporting slow page loads]

# Don't overthink which command to use
```

---

**Key Takeaway**: `/fix` is your intelligent bug-fixing entry point. Describe the problem, and it routes to the optimal fix command based on type, complexity, and scope analysis.
