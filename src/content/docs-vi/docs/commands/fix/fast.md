---
title: /fix:fast
description: "Documentation for /fix:fast
description:
section: docs
category: docs/commands/fix
order: 20
published: true"
section: docs
category: docs/commands/fix
order: 20
published: true
---

# /fix:fast

Fix minor bugs and issues quickly. This command skips extensive codebase analysis and planning, getting straight to implementation and testing. Perfect for simple fixes where you know what needs to be done.

## Syntax

```bash
/fix:fast [bug description]
```

## How It Works

The `/fix:fast` command follows a streamlined workflow:

### 1. Quick Analysis

- Reads the bug description
- Identifies likely location from description
- Minimal codebase scanning

### 2. Direct Implementation

- Implements the fix immediately
- No extensive planning phase
- Follows existing patterns

### 3. Testing

- Runs relevant tests
- Validates the fix works
- Checks for regressions

### 4. Summary Report

- Files changed
- Tests status
- Confidence level

## When to Use

### ✅ Perfect For

**Simple Typos**
```bash
/fix:fast [typo in error message: "sucessful" should be "successful"]
```

**Minor UI Issues**
```bash
/fix:fast [button text says "Submitt" instead of "Submit"]
```

**Simple Logic Fixes**
```bash
/fix:fast [validation allows empty email field when it should be required]
```

**Configuration Updates**
```bash
/fix:fast [update API rate limit from 100 to 200 requests per minute]
```

**Obvious Bugs**
```bash
/fix:fast [forgot to add await keyword before database query in login handler]
```

### ❌ Don't Use For

**Complex Issues**
```bash
❌ /fix:fast [users randomly getting logged out]
✅ /fix:hard [users randomly getting logged out]
```

**System-Wide Problems**
```bash
❌ /fix:fast [memory leak causing crashes]
✅ /fix:hard [memory leak causing crashes]
```

**Unknown Root Cause**
```bash
❌ /fix:fast [something is broken with payments]
✅ /fix:hard [payment processing failing with unclear error]
```

**Multiple Related Issues**
```bash
❌ /fix:fast [authentication system has multiple issues]
✅ /fix:hard [authentication system has multiple issues]
```

## Examples

### Typo Fix

```bash
/fix:fast [fix typo in welcome message: "Welcom" should be "Welcome"]
```

**What happens:**
```
1. Locates welcome message
   - Found in: src/components/Welcome.tsx

2. Fixes typo
   - Changed: "Welcom to our app"
   - To: "Welcome to our app"

3. Runs tests
   - UI tests: ✓ passed
   - Integration tests: ✓ passed

✓ Fix complete (12 seconds)
```

### Validation Fix

```bash
/fix:fast [email validation accepts invalid emails like "test@"]
```

**What happens:**
```
1. Locates validation function
   - Found in: src/utils/validation.js

2. Updates regex pattern
   - Old: /^[^\s@]+@[^\s@]+$/
   - New: /^[^\s@]+@[^\s@]+\.[^\s@]+$/

3. Runs validation tests
   - test("test@" rejected): ✓ passed
   - test("test@domain.com" accepted): ✓ passed
   - All 15 tests passed

✓ Fix complete (18 seconds)
```

### Missing Await

```bash
/fix:fast [forgot await in getUserData function causing Promise<User> instead of User]
```

**What happens:**
```
1. Locates function
   - Found in: src/services/user.service.ts:45

2. Adds await keyword
   - const user = db.getUser(id)
   - const user = await db.getUser(id)

3. Checks TypeScript types
   - Type now correctly resolves to User
   - No more Promise<User> errors

4. Runs tests
   - All tests passed

✓ Fix complete (9 seconds)
```

### Configuration Update

```bash
/fix:fast [increase session timeout from 15 minutes to 30 minutes]
```

**What happens:**
```
1. Locates config
   - Found in: config/session.ts

2. Updates value
   - sessionTimeout: 15 * 60 * 1000
   - sessionTimeout: 30 * 60 * 1000

3. Validates config
   - Config loads correctly
   - Tests pass

✓ Fix complete (7 seconds)
```

## Speed Comparison

### /fix:fast vs /fix:hard

**Simple Typo:**
```
/fix:fast:  10-20 seconds
/fix:hard:  2-3 minutes (unnecessary overhead)
```

**Complex Bug:**
```
/fix:fast:  May produce incomplete fix
/fix:hard:  5-10 minutes (proper investigation)
```

**Rule of Thumb:**
- Know exact fix? → `/fix:fast`
- Need investigation? → `/fix:hard`

## What Gets Skipped

To save time, `/fix:fast` skips:

1. **Extensive Codebase Scanning**
   - No scout agents deployed
   - Only looks at obvious locations

2. **Planning Phase**
   - No detailed plan created
   - Direct to implementation

3. **Research**
   - No internet research
   - No documentation lookup
   - Uses existing knowledge only

4. **Root Cause Analysis**
   - Fixes symptom, not necessarily root cause
   - Assumes description is accurate

## Best Practices

### Provide Exact Location

✅ **With Location:**
```bash
/fix:fast [in src/auth/login.ts line 45, change timeout from 5000 to 10000]
```

❌ **Without Location:**
```bash
/fix:fast [change a timeout somewhere]
```

### Be Specific About Fix

✅ **Specific:**
```bash
/fix:fast [button text "Loggin" in LoginButton.tsx should be "Login"]
```

❌ **Vague:**
```bash
/fix:fast [fix button text]
```

### Verify Scope is Simple

Before using `/fix:fast`, ask:
- Do I know exactly what needs to change?
- Is it in one or two files?
- Will fix take < 5 lines of code?
- Am I confident this won't break anything?

If yes to all → Use `/fix:fast`
If no to any → Use `/fix:hard`

## Common Use Cases

### Code Typos

```bash
/fix:fast [variable name "usreName" should be "userName" in profile.service.ts]
```

### Import Statements

```bash
/fix:fast [missing import for User type in auth.controller.ts]
```

### Simple Calculations

```bash
/fix:fast [discount calculation showing 15% instead of 20%, update in checkout.ts]
```

### Text Updates

```bash
/fix:fast [update copyright year from 2023 to 2024 in footer]
```

### Simple Conditionals

```bash
/fix:fast [flip condition: if (isDisabled) should be if (!isDisabled) in SubmitButton]
```

### Default Values

```bash
/fix:fast [change default page size from 10 to 20 in pagination config]
```

## Error Handling

If `/fix:fast` can't complete the fix:

```
⚠ Warning: Fix may be more complex than expected

Considerations:
- Multiple files affected
- Unclear location
- May require deeper analysis

Recommendation: Use /fix:hard instead

Continue with /fix:fast anyway? (y/n)
```

You can:
1. **Continue** - Try fixing anyway
2. **Cancel** - Switch to `/fix:hard`

## After Fixing

Standard workflow after `/fix:fast`:

```bash
# 1. Fix applied
/fix:fast [typo in button text]

# 2. Review changes
git diff

# 3. Run full test suite (optional)
/test

# 4. Commit if satisfied
/git:cm
```

## Troubleshooting

### Fix Didn't Work

**Problem:** Issue still occurs after fix

**Solution:**
```bash
# Issue might be more complex
/fix:hard [describe the issue again with more detail]
```

### Wrong Location

**Problem:** Fixed wrong file/location

**Solution:**
```bash
# Provide exact file path
/fix:fast [in src/correct/file.ts line 42, fix the actual issue]
```

### Tests Failing

**Problem:** Fix broke existing tests

**Solution:**
```bash
# Investigate why tests failed
/debug [test failures after fixing X]

# Or revert and use thorough approach
git restore .
/fix:hard [original issue description]
```

### Incomplete Fix

**Problem:** Fix works but feels incomplete

**Solution:**
```bash
# Add follow-up improvements
/cook [improve X with Y feature]
```

## Metrics

Typical `/fix:fast` performance:

- **Time**: 5-30 seconds
- **Files changed**: 1-2
- **Test coverage**: Existing tests only
- **Success rate**: ~95% for simple issues

Compare to `/fix:hard`:

- **Time**: 2-10 minutes
- **Files changed**: 1-10+
- **Test coverage**: New tests generated
- **Success rate**: ~99% for all issues

## Next Steps

After using `/fix:fast`:

- [/test](/docs/commands/core/test) - Run full test suite
- [/fix:hard](/docs/commands/fix/hard) - For complex issues
- [/git:cm](/docs/commands/git/commit) - Commit the fix
- [/debug](/docs/commands/core/debug) - If issues persist

---

**Key Takeaway**: `/fix:fast` is perfect for simple, well-understood fixes where speed matters. For anything complex or unclear, use `/fix:hard` instead.
