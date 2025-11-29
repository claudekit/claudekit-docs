---
title: /skill:fix-logs
description: "Documentation for /skill:fix-logs
description:
section: docs
category: commands/skill
order: 81
published: true"
section: docs
category: commands/skill
order: 81
published: true
---

# /skill:fix-logs

Fix agent skills based on errors and issues found in `logs.txt`. This command analyzes skill failures, identifies problems, updates the skill prompt, and validates fixes.

## Syntax

```bash
/skill:fix-logs [skill-path]
```

## Input Types

### 1. Skill File Path

```bash
/skill:fix-logs .claude/skills/mongodb.md
```

### 2. Natural Language (finds skill automatically)

```bash
/skill:fix-logs [fix MongoDB skill based on logs]
```

## How It Works

The `/skill:fix-logs` command follows a diagnostic workflow:

### 1. Log Analysis

- Reads `logs.txt` file
- Identifies skill-related errors
- Extracts error messages and context
- Categorizes issues (syntax, logic, missing info, etc.)
- Maps errors to skill sections

### 2. Skill Diagnosis

Invokes **debugger** agent to:
- Analyze current skill content
- Compare with error patterns
- Identify root causes
- Determine missing information
- Find incorrect examples
- Locate unclear instructions

### 3. Fix Planning

Creates fix strategy:
- List issues to address
- Plan content additions
- Identify sections to rewrite
- Determine examples to fix
- Map tool integration corrections

### 4. Skill Update

Invokes **skill-creator** agent to:
- Update problematic sections
- Add missing information
- Fix code examples
- Clarify instructions
- Improve tool integration docs
- Enhance error handling guidance

### 5. Validation

Invokes **tester** agent to:
- Verify fixes address logged issues
- Test updated examples
- Validate skill structure
- Check completeness
- Generate validation report

## Examples

### Fix Skill After Usage Errors

```bash
/skill:fix-logs .claude/skills/polar.md
```

**logs.txt content:**
```
[2025-10-30 10:23:45] ERROR: Polar skill - webhook signature verification failed
User asked: "How do I verify Polar webhooks?"
Skill response: Used generic webhook verification, not Polar-specific

[2025-10-30 10:28:12] ERROR: Polar skill - incorrect SDK import
User asked: "How to import Polar SDK?"
Skill suggested: import { Polar } from 'polar-sh'
Actual import: import { Polar } from '@polar-sh/sdk'

[2025-10-30 10:35:33] ERROR: Polar skill - missing subscription cancellation example
User asked: "How to cancel subscription?"
Skill response: Generic answer, no code example

[2025-10-30 10:42:18] ERROR: Polar skill - webhook events incomplete
User asked: "What webhook events does Polar send?"
Skill missing: subscription.canceled, payment.refunded events
```

**What happens:**
```
Phase 1: Log Analysis (20 seconds)
---
Agent: debugger

Reading logs.txt...

Errors found: 4
Skill: polar.md

Error categorization:

1. INCORRECT EXAMPLE - Webhook verification (Line 156)
   Issue: Generic example, not Polar-specific
   Impact: Users get non-working code
   Severity: High

2. INCORRECT IMPORT - SDK import (Line 45)
   Issue: Wrong package name
   Impact: Import fails, users confused
   Severity: Critical

3. MISSING CONTENT - Subscription cancellation (Section 4)
   Issue: No code example provided
   Impact: Users don't know how to cancel
   Severity: Medium

4. INCOMPLETE LIST - Webhook events (Section 7)
   Issue: Missing 2 events
   Impact: Users don't handle all events
   Severity: Medium

Phase 2: Skill Diagnosis (30 seconds)
---
Agent: debugger

Analyzing .claude/skills/polar.md...

Current state:
- 3,124 words
- 23 code examples
- 10 sections

Issues confirmed:

Issue 1: Line 156
Current:
```typescript
const isValid = verifyWebhookSignature(
  req.body,
  signature,
  WEBHOOK_SECRET
);
```

Should be:
```typescript
const isValid = polar.webhooks.verify(
  req.body,
  signature,
  POLAR_WEBHOOK_SECRET
);
```

Issue 2: Line 45
Current:
```typescript
import { Polar } from 'polar-sh';
```

Should be:
```typescript
import { Polar } from '@polar-sh/sdk';
```

Issue 3: Section 4
Missing: Subscription cancellation example
Need: Complete code with explanation

Issue 4: Section 7
Current: 8 webhook events
Missing: subscription.canceled, payment.refunded

Phase 3: Fix Planning (15 seconds)
---
Agent: planner

Fix plan created:

1. Update webhook verification (Line 156)
   - Replace generic code
   - Add Polar-specific example
   - Include error handling

2. Fix SDK import (Line 45)
   - Correct package name
   - Add installation command
   - Verify all imports

3. Add subscription cancellation (Section 4)
   - Create new subsection
   - Add complete example
   - Explain cancel_at_period_end
   - Show immediate vs end-of-period

4. Complete webhook events (Section 7)
   - Add subscription.canceled
   - Add payment.refunded
   - Update event handler examples

5. Add validation
   - Test all code examples
   - Verify imports work
   - Check webhook list complete

Phase 4: Skill Update (2 minutes)
---
Agent: skill-creator

Applying fixes...

Fix 1: Webhook Verification ✓
---
Before:
```typescript
const isValid = verifyWebhookSignature(
  req.body,
  signature,
  WEBHOOK_SECRET
);
```

After:
```typescript
import { Polar } from '@polar-sh/sdk';

const polar = new Polar(process.env.POLAR_SECRET_KEY);

// Verify webhook signature
const isValid = polar.webhooks.verify(
  req.body,
  req.headers['polar-signature'] as string,
  process.env.POLAR_WEBHOOK_SECRET
);

if (!isValid) {
  return res.status(401).json({ error: 'Invalid signature' });
}
```

Fix 2: SDK Import ✓
---
Before:
```typescript
import { Polar } from 'polar-sh';
```

After:
```typescript
// Install SDK
// npm install @polar-sh/sdk

import { Polar } from '@polar-sh/sdk';

const polar = new Polar(process.env.POLAR_SECRET_KEY);
```

Fix 3: Subscription Cancellation Added ✓
---
New section added to "Subscription Management":

### Cancel Subscription

```typescript
// Cancel at end of current period (recommended)
await polar.subscriptions.cancel(subscriptionId, {
  cancelAtPeriodEnd: true
});

// User retains access until period ends
// No refund issued

// Cancel immediately (rare, usually for refunds)
await polar.subscriptions.cancel(subscriptionId, {
  cancelAtPeriodEnd: false
});

// Access revoked immediately
// May issue prorated refund based on your settings
```

**When to use each:**

Cancel at period end:
- User requests cancellation
- Want to provide full service for paid period
- No refund needed

Cancel immediately:
- Fraud detected
- Terms of service violation
- User requests refund

Fix 4: Webhook Events Completed ✓
---
Added to webhook events list:

```typescript
switch (event.type) {
  case 'subscription.created':
    // User subscribed
    await activateSubscription(event.data);
    break;

  case 'subscription.updated':
    // Subscription changed (tier, status)
    await updateSubscription(event.data);
    break;

  case 'subscription.canceled':  // ← ADDED
    // User canceled subscription
    await handleCancellation(event.data);
    break;

  case 'payment.succeeded':
    // Payment successful
    await recordPayment(event.data);
    break;

  case 'payment.failed':
    // Payment failed
    await handleFailedPayment(event.data);
    break;

  case 'payment.refunded':  // ← ADDED
    // Payment refunded
    await processRefund(event.data);
    break;

  // ... other events
}
```

Additional improvements:
---
✓ Updated installation instructions
✓ Added error handling examples
✓ Improved code comments
✓ Fixed 3 other minor typos
✓ Enhanced troubleshooting section

Phase 5: Validation (45 seconds)
---
Agent: tester

Validating fixes...

Issue 1: Webhook verification ✅
- Code syntax valid
- Polar SDK method correct
- Error handling included
- Example complete

Issue 2: SDK import ✅
- Package name correct
- Installation command added
- Import statement valid

Issue 3: Subscription cancellation ✅
- Both methods documented
- Clear when to use each
- Code examples work
- Error handling included

Issue 4: Webhook events ✅
- All events now listed
- Handlers for new events
- Event data types documented

Additional validation:
✓ All 25 code examples verified
✓ No syntax errors
✓ Imports consistent
✓ TypeScript types correct

✓ All issues resolved (3 minutes 50 seconds)

Summary:
---
Issues fixed: 4/4 (100%)
Sections updated: 3
Examples added: 2
Examples fixed: 3
Lines changed: 87
Quality improvement: 9.2 → 9.8

Files updated:
✓ .claude/skills/polar.md

Next steps:
1. Test skill with original questions
2. Verify all logged errors resolved
3. Archive logs.txt
```

### Fix Skill with Missing Documentation

```bash
/skill:fix-logs .claude/skills/cloudflare-workers.md
```

**logs.txt content:**
```
[2025-10-30 11:15:22] ERROR: Cloudflare Workers skill - no D1 migration example
User asked: "How to create D1 database migrations?"
Skill response: Generic database migration, not D1-specific

[2025-10-30 11:22:45] ERROR: Cloudflare Workers skill - KV namespace binding unclear
User asked: "How to bind KV namespace in wrangler.toml?"
Skill response: Incomplete, missing environment-specific bindings

[2025-10-30 11:31:18] ERROR: Cloudflare Workers skill - Durable Objects not explained
User asked: "When to use Durable Objects vs KV?"
Skill response: Mentioned both but didn't explain trade-offs
```

**What happens:**
```
Phase 1: Log Analysis
---
3 errors identified
All related to incomplete documentation

Issues:
1. D1 migrations - No wrangler commands
2. KV bindings - Missing env-specific config
3. Durable Objects - Trade-offs not explained

Phase 2-4: Diagnosis & Fixes
---

Fix 1: Add D1 Migration Guide
✓ Added section with wrangler commands
✓ Included migration file examples
✓ Explained migration workflow

Fix 2: Clarify KV Bindings
✓ Added complete wrangler.toml example
✓ Showed dev vs production bindings
✓ Explained namespace naming

Fix 3: Add Durable Objects Comparison
✓ Created comparison table
✓ Explained when to use each
✓ Added decision tree
✓ Included example use cases

Phase 5: Validation
---
✓ All examples tested
✓ wrangler commands verified
✓ Configuration examples valid

Quality: 9.1 → 9.7
```

### Fix Multiple Skills

```bash
/skill:fix-logs [fix all skills based on logs]
```

**What happens:**
```
Phase 1: Log Analysis
---
Analyzing logs.txt...

Errors found: 12
Skills affected: 4
- polar.md (4 errors)
- mongodb.md (3 errors)
- cloudflare-workers.md (3 errors)
- nextjs.md (2 errors)

Processing each skill...

Phase 2-5: Fix Each Skill
---
Fixing polar.md... ✓ (3 min 50 sec)
Fixing mongodb.md... ✓ (2 min 15 sec)
Fixing cloudflare-workers.md... ✓ (3 min 05 sec)
Fixing nextjs.md... ✓ (1 min 30 sec)

Total time: 10 minutes 40 seconds
All issues resolved: 12/12

Archive logs? (y/n) y
✓ Moved to logs.txt.2025-10-30.bak
```

## Log File Format

For best results, `logs.txt` should contain:

```
[TIMESTAMP] ERROR: Skill-name - Brief description
User asked: "Actual user question"
Skill response: What went wrong
Expected: What should have happened (optional)

[TIMESTAMP] ERROR: Skill-name - Another issue
...
```

Example:
```
[2025-10-30 14:23:45] ERROR: MongoDB skill - aggregation pipeline syntax
User asked: "How to do $lookup with multiple conditions?"
Skill response: Showed basic $lookup, didn't explain multiple conditions
Expected: Should show $lookup with $match in pipeline

[2025-10-30 14:28:12] ERROR: MongoDB skill - missing index types
User asked: "What's the difference between single and compound indexes?"
Skill response: Only mentioned compound indexes
Expected: Should explain both types with examples
```

## Common Issues Fixed

### 1. Incorrect Code Examples

**Before:**
```typescript
// Wrong import
import { Client } from 'service';
```

**After:**
```typescript
// Correct import with installation
// npm install @service/sdk

import { Client } from '@service/sdk';
```

### 2. Missing Information

**Before:**
```markdown
## Authentication

Use API keys for authentication.
```

**After:**
```markdown
## Authentication

### Getting API Keys

1. Sign up at service.com
2. Go to Settings → API Keys
3. Click "Create New Key"
4. Copy key (shown only once)

### Using API Keys

```typescript
const client = new Client({
  apiKey: process.env.SERVICE_API_KEY
});
```

Store API key in `.env`:
```
SERVICE_API_KEY=sk_live_...
```
```

### 3. Unclear Instructions

**Before:**
```markdown
Configure webhooks in dashboard.
```

**After:**
```markdown
### Configure Webhooks

1. Navigate to Dashboard → Settings → Webhooks
2. Click "Add Endpoint"
3. Enter your webhook URL: `https://your-api.com/webhooks/service`
4. Select events to receive:
   - ✅ `payment.succeeded`
   - ✅ `payment.failed`
   - ✅ `subscription.created`
5. Click "Create Endpoint"
6. Copy webhook secret for signature verification

### Verify Webhook Signatures

```typescript
import { verifySignature } from '@service/sdk';

app.post('/webhooks/service', (req, res) => {
  const signature = req.headers['service-signature'];

  if (!verifySignature(req.body, signature, WEBHOOK_SECRET)) {
    return res.status(401).json({ error: 'Invalid signature' });
  }

  // Process webhook...
});
```
```

## Fix Categories

### Syntax Errors

- Incorrect imports
- Wrong API calls
- Invalid configurations
- Type errors

### Logic Errors

- Incorrect algorithms
- Wrong patterns
- Flawed examples
- Incomplete flows

### Missing Content

- No examples
- Missing sections
- Incomplete lists
- No error handling

### Clarity Issues

- Unclear instructions
- Vague explanations
- Missing context
- Poor structure

## Best Practices

### Regular Log Review

```bash
# After using skills, check logs
cat logs.txt

# If errors found, fix immediately
/skill:fix-logs [skill-path]

# Archive old logs
mv logs.txt logs.txt.$(date +%Y%m%d).bak
```

### Detailed Error Logging

When errors occur, log them well:

```
✅ Good log entry:
[2025-10-30 10:23:45] ERROR: Polar skill - webhook verification
User asked: "How do I verify Polar webhooks?"
Skill response: Used verifyWebhookSignature() function
Issue: Function doesn't exist in Polar SDK
Expected: Should use polar.webhooks.verify()

❌ Poor log entry:
Webhook verification wrong
```

### Test After Fixes

```bash
# 1. Fix skill
/skill:fix-logs .claude/skills/polar.md

# 2. Test with original question
/ask [how do I verify Polar webhooks]

# 3. Verify response correct

# 4. If still wrong, check logs again
```

## Output Files

After `/skill:fix-logs` completes:

### Updated Skill

```
.claude/skills/[skill-name].md
```

Fixed and improved

### Fix Report

```
plans/skill-fix-[name]-[date].md
```

Details of what was fixed

### Validation Report

```
plans/skill-validation-[name]-[date].md
```

Verification of fixes

## Troubleshooting

### No Logs File

**Problem:** logs.txt doesn't exist

**Solution:**
```bash
# Create logs.txt manually
touch logs.txt

# Add errors in format shown above

# Then run fix
/skill:fix-logs [skill-path]
```

### Fixes Don't Work

**Problem:** Applied fixes but issues persist

**Check:**
```bash
# 1. Verify skill file updated
cat .claude/skills/[name].md

# 2. Test skill activation
/ask [test question]

# 3. Check if question triggers skill
# Skill should activate based on "When to Use" section

# 4. If not activating, update triggers
```

### Can't Find Issue in Skill

**Problem:** Log mentions issue but skill seems correct

**Solution:**
```bash
# Provide more context
/skill:fix-logs [skill-path with detailed description of issue from logs]

# Or manually search
grep -n "keyword" .claude/skills/[name].md
```

## After Fixing

Standard workflow:

```bash
# 1. Fix skill
/skill:fix-logs .claude/skills/[name].md

# 2. Review changes
git diff .claude/skills/[name].md

# 3. Test skill
/ask [original failing question]

# 4. If satisfied, commit
/git:cm

# 5. Archive logs
mv logs.txt logs.txt.$(date +%Y%m%d).bak
```

## Next Steps

- [/skill:create](/docs/commands/skill/create) - Create new skills
- [/ask](/docs/commands/core/ask) - Use fixed skills
- [Skill Development Guide](/docs/guides/skill-development) - Advanced topics

---

**Key Takeaway**: `/skill:fix-logs` analyzes `logs.txt` to identify skill failures, diagnoses root causes, applies targeted fixes to skill documentation, and validates corrections—keeping your agent skills accurate and effective based on real usage errors.
