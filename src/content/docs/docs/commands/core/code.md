---
title: /code
description: Execute implementation plans with 6-step quality-gated workflow including automated testing and code review
section: docs
category: commands/core
order: 8
published: true
---

# /code

Plan execution command. Implements a structured 6-step workflow with mandatory quality gates, automated testing, and code review.

## Syntax

```bash
/code [plan]
```

## When to Use

- **Executing Plans**: After `/plan` creates an implementation plan
- **Resuming Work**: Continue incomplete plan phases
- **Quality-Gated Development**: When mandatory testing and review are required
- **Tracked Implementation**: When tasks need TodoWrite tracking
- **Auto-Commit Workflow**: When you want automatic git commits on success

## Quick Example

```bash
/code @plans/251128-auth-integration/plan.md
```

**Output**:
```
✓ Step 0: Auth Integration - Phase 02
✓ Step 1: Found 5 tasks across 1 phase - Ambiguities: none
✓ Step 2: Implemented 3 files - [5/5] tasks complete
✓ Step 3: Tests [12/12 passed] - All requirements met
✓ Step 4: Code reviewed - [0] critical issues
⏸ Step 5: WAITING for user approval

Phase implementation complete. All tests pass, code reviewed. Approve changes?
```

**Result**: Plan executed with quality gates, ready for approval.

## Arguments

- `[plan]`: Path to plan file (optional). If empty, auto-detects latest plan in `./plans` directory

## What Happens

The `/code` command executes a 6-step workflow with strict enforcement:

### Step 0: Plan Detection

- If plan path provided: Uses that plan
- If empty: Finds latest `plan.md` in `./plans` directory
- Auto-selects next incomplete phase (prefers IN_PROGRESS, then earliest Planned)

### Step 1: Analysis & Task Extraction

- Reads plan file completely
- Maps dependencies between tasks
- Lists ambiguities or blockers
- Identifies required skills/tools
- Initializes TodoWrite with extracted tasks

**Output**: `✓ Step 1: Found [N] tasks across [M] phases - Ambiguities: [list or "none"]`

### Step 2: Implementation

- Executes tasks step-by-step per plan requirements
- Marks tasks complete in TodoWrite as done
- For UI work: Calls `ui-ux-designer` subagent
- For images: Uses `ai-multimodal` skill
- Runs type checking and compilation to verify no syntax errors

**Output**: `✓ Step 2: Implemented [N] files - [X/Y] tasks complete`

### Step 3: Testing (BLOCKING GATE)

- Calls `tester` subagent to run test suite
- If ANY tests fail:
  - Calls `debugger` subagent to analyze failures
  - Fixes all issues
  - Re-runs tests
  - Repeats until 100% pass

**Testing Standards**:
- Unit tests: May use mocks for external dependencies
- Integration tests: Use test environment
- E2E tests: Use real but isolated data
- Forbidden: Commenting out tests, changing assertions, TODO/FIXME to defer fixes

**Output**: `✓ Step 3: Tests [X/X passed] - All requirements met`

**Validation**: If X ≠ total, Step 3 INCOMPLETE - workflow stops.

### Step 4: Code Review (BLOCKING GATE)

- Calls `code-reviewer` subagent for comprehensive review
- Checks: Security, performance, architecture, YAGNI/KISS/DRY
- If critical issues found:
  - Fixes all issues
  - Re-runs `tester` to verify
  - Re-runs `code-reviewer`
  - Repeats until no critical issues

**Critical Issues** (must be 0):
- Security vulnerabilities (XSS, SQL injection, OWASP)
- Performance bottlenecks
- Architectural violations
- Principle violations (YAGNI, KISS, DRY)

**Output**: `✓ Step 4: Code reviewed - [0] critical issues`

### Step 5: User Approval (BLOCKING GATE)

- Presents summary (3-5 bullets):
  - What was implemented
  - Test results
  - Code review outcome
- Asks explicitly: "Phase implementation complete. Approve changes?"
- **WAITS** for user response - does not proceed without approval

**Output**: `⏸ Step 5: WAITING for user approval`

### Step 6: Finalize

After user approval:

1. **Status Update** (parallel):
   - `project-manager` subagent: Updates plan status, marks phase DONE
   - `docs-manager` subagent: Updates documentation for changed files

2. **Onboarding Check**: Detects requirements (API keys, env vars, config)

3. **Auto-Commit** (if all conditions met):
   - User approved
   - Tests passed
   - Review passed
   - Auto-stages, commits with message, pushes

**Output**: `✓ Step 6: Finalize - Status updated - Git committed`

## Output Format

Each step produces a status marker:

```
✓ Step 0: [Plan Name] - [Phase Name]
✓ Step 1: Found [N] tasks across [M] phases - Ambiguities: [list]
✓ Step 2: Implemented [N] files - [X/Y] tasks complete
✓ Step 3: Tests [X/X passed] - All requirements met
✓ Step 4: Code reviewed - [0] critical issues
✓ Step 5: User approved - Ready to complete
✓ Step 6: Finalize - Status updated - Git committed
```

If any "✓ Step N:" output is missing, that step is INCOMPLETE.

## Complete Example

### Scenario: API Endpoint Implementation

```bash
/code @plans/251128-user-api/phase-02-endpoints.md
```

**Step-by-Step Execution**:

```
✓ Step 0: User API - Phase 02 Endpoints

Reading plan: /plans/251128-user-api/plan.md
Auto-selected: Phase 02 (status: Planned)

✓ Step 1: Found 4 tasks across 1 phase - Ambiguities: none

Tasks extracted:
- Step 2.1: Create GET /users endpoint
- Step 2.2: Create POST /users endpoint
- Step 2.3: Add input validation
- Step 2.4: Write integration tests

✓ Step 2: Implemented 3 files - [4/4] tasks complete

Files changed:
- src/routes/users.ts (created)
- src/validators/userSchema.ts (created)
- tests/routes/users.test.ts (created)

Running tester subagent...

✓ Step 3: Tests [8/8 passed] - All requirements met

Test Results:
- GET /users: 4 tests passed
- POST /users: 4 tests passed

Running code-reviewer subagent...

✓ Step 4: Code reviewed - [0] critical issues

Review Summary:
- Security: Input validation present
- Performance: Pagination implemented
- Architecture: Follows existing patterns

⏸ Step 5: WAITING for user approval

Summary:
- Created user API endpoints (GET, POST)
- Added Zod validation schemas
- Wrote 8 integration tests
- All tests passing
- No critical issues found

Phase implementation complete. All tests pass, code reviewed. Approve changes?
```

**User**: "Approved"

```
✓ Step 5: User approved - Ready to complete

Running project-manager subagent...
Running docs-manager subagent...
Auto-committing changes...

✓ Step 6: Finalize - Status updated - Git committed

Commit: feat(api): add user endpoints with validation
Branch: kai/user-api
Files: 3 changed, 245 insertions
```

## Enforcement Rules

1. **No Step Skipping**: Each step must complete before the next
2. **TodoWrite Required**: All tasks tracked through TodoWrite
3. **Blocking Gates**:
   - Step 3: Tests must be 100% passing
   - Step 4: Critical issues must be 0
   - Step 5: User must explicitly approve
4. **Mandatory Subagents**:
   - Step 3: `tester`
   - Step 4: `code-reviewer`
   - Step 6: `project-manager` AND `docs-manager`
5. **One Phase Per Run**: Command focuses on single plan phase only

## Subagents Invoked

| Step | Subagent | Purpose |
|------|----------|---------|
| 2 | ui-ux-designer | UI implementation (when needed) |
| 3 | tester | Run test suite |
| 3 | debugger | Analyze test failures |
| 4 | code-reviewer | Quality and security review |
| 6 | project-manager | Update plan status |
| 6 | docs-manager | Update documentation |

## Common Issues

### Missing Plan

**Problem**: No plan found in `./plans` directory

**Solution**: Create a plan first
```bash
/plan [implement user authentication]
/code
```

### Test Failures

**Problem**: Step 3 stuck with failing tests

**What Happens**: Debugger called automatically, fixes attempted, re-run
```
Step 3: Tests [6/8 passed] - 2 failures
Invoking debugger subagent...
Fixing: src/routes/users.ts:45 - missing null check
Re-running tests...
```

### Critical Issues Found

**Problem**: Step 4 finds security vulnerabilities

**Solution**: Auto-fixed and re-verified
```
Step 4: Code reviewed - [2] critical issues
- XSS vulnerability in user input
- Missing rate limiting
Fixing issues...
Re-running tester...
Re-running code-reviewer...
✓ Step 4: Code reviewed - [0] critical issues
```

### Approval Timeout

**Problem**: Workflow paused at Step 5

**Solution**: Respond with approval to continue
```bash
# User response
Approved
```

## Integration with Workflow

### Standard Development Flow

```bash
# 1. Create implementation plan
/plan [add payment processing]

# 2. Execute plan
/code

# 3. Continue with next phase
/code
```

### Resuming Incomplete Work

```bash
# Check current plan status
cat plans/current-plan/plan.md

# Resume from where stopped
/code @plans/current-plan/plan.md
```

### Specifying Phase

```bash
# Execute specific phase
/code @plans/251128-api/phase-03-testing.md
```

## Related Commands

- [/plan](/docs/commands/core/plan) - Create implementation plan before `/code`
- [/cook](/docs/commands/core/cook) - Step-by-step implementation without plan structure
- [/fix](/docs/commands/fix) - Fix issues without full workflow
- [/brainstorm](/docs/commands/core/brainstorm) - Evaluate approaches before planning

---

**Key Takeaway**: `/code` executes implementation plans with mandatory quality gates (tests, code review, user approval), ensuring production-ready code with automatic documentation and git commits.
