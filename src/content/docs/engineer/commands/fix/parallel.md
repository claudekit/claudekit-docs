---
title: /fix:parallel
description: Fix multiple independent issues simultaneously using parallel fullstack-developer agents for faster resolution
section: engineer
kit: engineer
category: commands/fix
order: 10
published: true
---

# /fix:parallel

Parallel issue fixing command. Resolves multiple independent issues simultaneously by spawning parallel fullstack-developer agents, each handling one issue.

## Syntax

```bash
/fix:parallel [issues]
```

## When to Use

- **Multiple Unrelated Bugs**: 2+ issues that don't affect same files
- **Independent Fixes**: Bugs with no shared context needed
- **Time-Sensitive**: Need multiple fixes done quickly
- **Batch Fixes**: Clearing backlog of small issues

## Quick Example

```bash
/fix:parallel [
1. Button not clickable on mobile
2. API timeout on /users endpoint
3. Typo in footer copyright
]
```

**Output**:
```
Parsing issues...
Found 3 issues to fix

Validating independence...
✓ Issue 1: src/components/Button.tsx
✓ Issue 2: src/api/users.ts
✓ Issue 3: src/components/Footer.tsx
No file conflicts detected.

Launching 3 parallel agents...

Agent 1: Fixing mobile button...
Agent 2: Fixing API timeout...
Agent 3: Fixing footer typo...

Progress:
[██████████] Agent 3: Complete (12s)
[██████████] Agent 1: Complete (28s)
[██████████] Agent 2: Complete (45s)

All agents complete.

Summary:
✓ Issue 1: Fixed - Added touch event handler
✓ Issue 2: Fixed - Increased timeout to 30s
✓ Issue 3: Fixed - Changed "Copywrite" to "Copyright"

Total time: 45s (vs ~90s sequential)
```

## Arguments

- `[issues]`: List of issues to fix (required). Use numbered or bulleted format.

## Issue Format

### Numbered List

```bash
/fix:parallel [
1. Button not responding on Safari
2. Date picker shows wrong timezone
3. Search results not paginating
]
```

### Bulleted List

```bash
/fix:parallel [
- Missing loading spinner on submit
- Incorrect currency symbol for EUR
- Broken link in navigation
]
```

### Inline Format

```bash
/fix:parallel [fix mobile menu toggle; fix email validation regex; fix footer alignment]
```

## What It Does

### Step 1: Parse Issues

Extracts individual issues from your input:

```
Input: "1. Button bug 2. API error 3. Typo"
Parsed:
- Issue 1: Button bug
- Issue 2: API error
- Issue 3: Typo
```

### Step 2: Validate Independence

Checks that issues don't affect the same files:

```
Analyzing file dependencies...

Issue 1: Likely affects src/components/Button.tsx
Issue 2: Likely affects src/api/endpoints.ts
Issue 3: Likely affects src/components/Footer.tsx

Overlap check: None detected ✓
Issues are independent.
```

### Step 3: Launch Parallel Agents

Spawns one fullstack-developer agent per issue:

```
Launching agents...

Agent 1: fullstack-developer → Issue 1
Agent 2: fullstack-developer → Issue 2
Agent 3: fullstack-developer → Issue 3

All agents running in parallel.
```

### Step 4: Monitor Progress

Tracks each agent with timeout (10 minutes per agent):

```
Progress:
[████████──] Agent 1: Investigating... (15s)
[██████████] Agent 2: Complete (22s)
[██████────] Agent 3: Implementing fix... (18s)
```

### Step 5: Aggregate Results

Collects results from all agents:

```
Results collected:
- Agent 1: Success - 1 file changed
- Agent 2: Success - 2 files changed
- Agent 3: Success - 1 file changed

Total: 4 files changed
```

### Step 6: Report Summary

Provides consolidated fix report:

```
═══════════════════════════════════════
        PARALLEL FIX SUMMARY
═══════════════════════════════════════

Issue 1: Button not responding on Safari
Status: ✓ Fixed
Files: src/components/Button.tsx
Changes: Added -webkit-tap-highlight-color

Issue 2: Date picker wrong timezone
Status: ✓ Fixed
Files: src/utils/date.ts, src/components/DatePicker.tsx
Changes: Added timezone normalization

Issue 3: Search pagination broken
Status: ✓ Fixed
Files: src/hooks/useSearch.ts
Changes: Fixed offset calculation

───────────────────────────────────────
Total time: 45 seconds
Sequential estimate: ~2 minutes
Speedup: 2.7x
═══════════════════════════════════════
```

## Complete Example

### Scenario: Sprint Cleanup

```bash
/fix:parallel [
1. Login button disabled state not showing
2. Profile image not loading for new users
3. Search autocomplete not closing on blur
4. Footer social links point to wrong URLs
]
```

**Execution**:

```
Parsing issues...
Found 4 issues

Validating independence...
Issue 1: src/components/auth/LoginButton.tsx
Issue 2: src/components/profile/Avatar.tsx
Issue 3: src/components/search/Autocomplete.tsx
Issue 4: src/components/layout/Footer.tsx

No overlapping files ✓

Launching 4 parallel agents...

[Agent 1] LoginButton: Investigating disabled state...
[Agent 2] Avatar: Checking image loading logic...
[Agent 3] Autocomplete: Analyzing blur behavior...
[Agent 4] Footer: Reviewing social links...

Progress:
[██████████] Agent 4: Complete (8s)
[██████████] Agent 1: Complete (15s)
[██████████] Agent 3: Complete (22s)
[██████████] Agent 2: Complete (35s)

═══════════════════════════════════════
        RESULTS
═══════════════════════════════════════

✓ Issue 1: Fixed disabled prop binding
✓ Issue 2: Added fallback for undefined avatar
✓ Issue 3: Added onBlur handler with delay
✓ Issue 4: Updated social media URLs

Files changed: 4
Tests passing: ✓
Total time: 35s
═══════════════════════════════════════
```

## Dependency Detection

If issues share files, `/fix:parallel` routes to `/fix:hard`:

```bash
/fix:parallel [
1. Auth token not refreshing
2. Login redirect broken
]
```

```
Validating independence...

Issue 1: Likely affects src/auth/token.ts, src/auth/session.ts
Issue 2: Likely affects src/auth/login.ts, src/auth/session.ts

⚠️ Overlap detected: src/auth/session.ts

Issues are not independent.
→ Routing to /fix:hard instead

Both issues may share context in auth/session.ts.
Sequential fixing recommended for consistency.
```

## Limitations

### Maximum Agents

```
Max parallel agents: 5
```

If more than 5 issues, batches into waves:

```
Found 8 issues

Wave 1 (parallel): Issues 1-5
Wave 2 (parallel): Issues 6-8

Executing Wave 1...
```

### Independence Required

Issues must not share files:

```
✓ Independent: Button fix + API fix + Footer fix
✗ Dependent: Auth fix + Session fix (share auth module)
```

### Timeout

Each agent has 10-minute timeout:

```
Agent timeout: 10 minutes

Agent 3 timed out.
Partial results collected.
```

## Best Practices

### Group Related Issues Elsewhere

```bash
# Bad: Related issues
/fix:parallel [
1. Auth token expiring
2. Session not persisting
]

# Good: Use /fix:hard for related issues
/fix:hard [auth token expiring and session not persisting]
```

### Keep Issues Specific

```bash
# Good: Specific, actionable
/fix:parallel [
1. Button color wrong on hover (should be #2563eb)
2. Missing aria-label on search input
3. Footer copyright says 2024
]

# Less effective: Vague
/fix:parallel [
1. UI looks wrong
2. Accessibility issues
3. Update footer
]
```

### Don't Exceed 5 Issues

```bash
# Optimal: 2-5 issues
/fix:parallel [
1. Issue one
2. Issue two
3. Issue three
]

# Too many: Consider multiple runs
/fix:parallel [1-5]
/fix:parallel [6-10]
```

## When NOT to Use

### Related Issues

Issues that affect shared code:

```bash
# Don't use parallel for:
- Auth token + Session handling (shared auth code)
- Database query + Connection pool (shared DB layer)
- API route + Middleware (shared request flow)

# Use instead:
/fix:hard [describe related issues together]
```

### Complex Investigation

Issues requiring deep analysis:

```bash
# Don't use parallel for:
- "App crashes randomly" (needs investigation)
- "Performance degraded" (needs profiling)

# Use instead:
/fix:hard [issue needing investigation]
```

## Related Commands

- [/fix](/docs/commands/fix) - Intelligent routing (may route here)
- [/fix:fast](/docs/commands/fix/fast) - Single simple issue
- [/fix:hard](/docs/commands/fix/hard) - Complex or related issues
- [/code:parallel](/docs/commands/code/parallel) - Parallel plan execution
- [/cook:auto:parallel](/docs/commands/cook/auto-parallel) - Parallel feature implementation

---

**Key Takeaway**: `/fix:parallel` accelerates bug fixing by resolving multiple independent issues simultaneously. Provide a list of unrelated issues, and parallel agents handle them concurrently for faster resolution.
