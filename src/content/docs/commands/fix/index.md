---
title: /fix
description: Intelligently analyze and fix issues by automatically selecting the optimal approach
category: commands
order: 10
published: true
---

# /fix

Smart bug fixing command that analyzes your issue description and automatically chooses between fast or thorough approaches. No need to decide between `/fix:fast` and `/fix:hard` - let ClaudeKit determine the best strategy.

## Syntax

```bash
/fix [issue description]
```

## How It Works

The `/fix` command intelligently routes your request:

### 1. Issue Analysis

- Analyzes complexity of the described issue
- Evaluates scope (single file vs multiple files)
- Assesses clarity of the problem description
- Determines if root cause is known

### 2. Strategy Selection

**Routes to `/fix:fast` when:**
- Issue is well-understood and straightforward
- Location is known or easily identified
- Fix requires minimal changes (1-2 files)
- No investigation needed

**Routes to `/fix:hard` when:**
- Issue is complex or unclear
- Multiple components affected
- Root cause unknown
- Requires investigation and planning

### 3. Enhanced Execution

- Enhances your prompt with additional context
- Executes chosen strategy automatically
- Provides detailed fix report

## Quick Example

```bash
/fix [button text shows "Loggin" instead of "Login"]
```

**What happens:**
```
Analyzing issue...
→ Simple typo in UI
→ Location likely in button component
→ Single file change expected

Strategy: /fix:fast

Executing: /fix:fast [button text shows "Loggin" instead of "Login" in LoginButton component]

Found: src/components/LoginButton.tsx:15
Fixed: "Loggin" → "Login"
Tests: ✓ All passed

✓ Fix complete (8 seconds)
```

## When to Use

### Perfect For

**Any Bug or Issue**
- Let ClaudeKit decide the approach
- Don't waste time categorizing complexity
- Trust intelligent routing

**When Unsure**
```bash
# Not sure if it's simple or complex?
/fix [users reporting slow page load times]

# ClaudeKit analyzes and chooses the right approach
```

**Quick Workflow**
```bash
# Just describe the problem
/fix [payment webhook not triggering]

# No need to think about strategy
```

## Complete Examples

### Example 1: Simple Issue (Routes to /fix:fast)

```bash
/fix [missing import statement for UserType in auth.ts]
```

**Analysis:**
```
Issue: Missing import
Scope: Single file
Clarity: High
Known location: Yes

→ Routing to /fix:fast
```

**Result:**
```
Fixed in 6 seconds:
- Added: import { UserType } from './types'
- File: src/auth/auth.ts:3
- Tests: ✓ Passed
```

### Example 2: Complex Issue (Routes to /fix:hard)

```bash
/fix [users sometimes getting logged out randomly]
```

**Analysis:**
```
Issue: Intermittent logout
Scope: Unknown (session, cookies, auth system?)
Clarity: Low (needs investigation)
Known location: No

→ Routing to /fix:hard
```

**Result:**
```
Investigation started...

Root cause found:
- Session cookie SameSite attribute missing
- Cross-site requests dropping cookies
- Affects 15% of users (Safari browsers)

Fix implemented:
- Updated session configuration
- Added SameSite=Lax attribute
- Added tests for cookie behavior
- Updated documentation

Files changed: 4
Tests added: 8
Time: 4 minutes
```

### Example 3: Medium Issue (Intelligent Decision)

```bash
/fix [form validation not working for email field]
```

**Analysis:**
```
Issue: Validation failure
Scope: Likely 1-2 files (form + validation)
Clarity: Medium
Known location: Partial

→ Routing to /fix:fast
```

**Result:**
```
Found issue:
- Email regex pattern incorrect
- Missing @ domain validation
- Located in: src/utils/validation.ts

Fixed:
- Updated regex pattern
- Added domain validation
- Updated tests

✓ Complete (15 seconds)
```

## Comparison with Manual Selection

### Using /fix (Recommended)

```bash
/fix [describe any issue]
```

✅ Benefits:
- No decision paralysis
- Optimal strategy chosen automatically
- Enhanced prompt generation
- Faster workflow

### Manual Selection

```bash
# You decide and execute
/fix:fast [simple issue]
/fix:hard [complex issue]
```

⚠️ Drawbacks:
- Requires complexity assessment
- Risk of wrong choice
- Slower workflow
- No prompt enhancement

## How Strategy Selection Works

### /fix:fast Selected When

**Indicators:**
- ✓ Specific location mentioned
- ✓ Simple action verbs (fix typo, add, update, change)
- ✓ Single file implied
- ✓ Clear description
- ✓ Known cause

**Examples:**
```bash
/fix [typo in welcome message]
/fix [add missing semicolon in line 42]
/fix [change button color to blue]
/fix [update API timeout from 5s to 10s]
```

### /fix:hard Selected When

**Indicators:**
- ✓ Vague or unclear description
- ✓ Investigation verbs (randomly, sometimes, occasionally)
- ✓ System-wide terms (all, everywhere, entire)
- ✓ Multiple components mentioned
- ✓ Unknown cause

**Examples:**
```bash
/fix [users reporting errors]
/fix [something wrong with payments]
/fix [app crashes intermittently]
/fix [performance degradation over time]
```

## Prompt Enhancement

`/fix` automatically enhances your description before execution:

![Fix Prompt Enhancement](/assets/fix-prompt-enhancement.png)

### Your Input
```bash
/fix [login broken]
```

### Enhanced Prompt
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

## Best Practices

### Be Descriptive

✅ **Good:**
```bash
/fix [email validation accepts invalid emails like "test@"]
```

❌ **Too Vague:**
```bash
/fix [validation broken]
```

### Include Context

✅ **Good:**
```bash
/fix [payment webhook returns 500 error when Stripe sends events]
```

❌ **Lacks Context:**
```bash
/fix [500 error]
```

### Mention Location if Known

✅ **Good:**
```bash
/fix [missing await in getUserData function in user.service.ts]
```

❌ **Missing Location:**
```bash
/fix [missing await somewhere]
```

## Common Use Cases

### Typos and Text Changes

```bash
/fix [button says "Submitt" should be "Submit"]
/fix [error message has typo: "sucessful"]
/fix [update copyright year to 2025]
```

### Logic Bugs

```bash
/fix [discount calculation showing 15% instead of 20%]
/fix [validation allows empty required fields]
/fix [forgot to add await in async function]
```

### Configuration Issues

```bash
/fix [API timeout too short, causing failures]
/fix [CORS not allowing localhost:3000]
/fix [environment variable not loaded]
```

### Unclear Problems

```bash
/fix [users reporting slow performance]
/fix [payment sometimes fails]
/fix [authentication issues on mobile]
```

## Integration with Existing Plan

If a markdown implementation plan already exists:

```bash
# Instead of /fix, use:
/code [path/to/plan.md]

# /fix is for issues without existing plans
```

## Output

You'll see:

```
Analyzing: [your issue description]

Complexity Assessment:
- Scope: Single file / Multiple files
- Clarity: High / Medium / Low
- Investigation needed: Yes / No

Strategy Selected: /fix:fast | /fix:hard

Executing with enhanced prompt...

[Fix results]

✓ Complete
```

## Related Commands

- [/fix:fast](/docs/commands/fix/fast) - Fast fixes (auto-selected)
- [/fix:hard](/docs/commands/fix/hard) - Complex fixes (auto-selected)
- [/fix:ci](/docs/commands/fix/ci) - Fix CI failures
- [/fix:logs](/docs/commands/fix/logs) - Fix issues from logs
- [/fix:ui](/docs/commands/fix/ui) - Fix UI issues
- [/fix:types](/docs/commands/fix/types) - Fix type errors
- [/debug](/docs/commands/core/debug) - Investigate issues
- [/code](/docs/commands/core/code) - Implement existing plans

## Troubleshooting

### Wrong Strategy Selected

**Problem:** `/fix` chose `/fix:fast` but issue was complex

**Solution:**
```bash
# Override by calling directly
/fix:hard [your issue description]
```

### Need More Control

**Problem:** Want to control the approach yourself

**Solution:**
```bash
# Call strategies directly
/fix:fast [for simple issues]
/fix:hard [for complex issues]
```

### Plan Exists

**Problem:** Already have an implementation plan

**Solution:**
```bash
# Use /code instead
/code [path/to/plan.md]
```

---

**Key Takeaway**: `/fix` is your intelligent bug-fixing assistant. Just describe the problem - ClaudeKit analyzes complexity and automatically selects the optimal fixing strategy, saving you time and mental overhead.
