---
title: /skill:optimize:auto
description: Automatically optimize skills without approval for rapid iteration and token efficiency improvements
section: engineer
kit: engineer
category: commands/skill
order: 84
published: true
---

# /skill:optimize:auto

Automatic skill optimization without approval gates. Applies improvements directly with backup/rollback safety for rapid iteration during skill development.

## Syntax

```bash
/skill:optimize:auto [skill-name] [prompt]
```

## When to Use

- **Rapid Iteration**: During active skill development
- **Minor Fixes**: Typos, formatting, small adjustments
- **Token Optimization**: Quick token reduction
- **Known Improvements**: When you know exactly what to fix
- **Trusted Changes**: Low-risk optimizations

## Quick Example

```bash
/skill:optimize:auto better-auth "reduce token usage"
```

**Output**:
```
Creating backup...
Backup: $HOME/.claude/skills/better-auth/.backup-251129-2030/

Analyzing skill: better-auth
Goal: reduce token usage

Applying optimizations...
✓ Consolidated duplicate references (-800 tokens)
✓ Applied progressive disclosure (-1,200 tokens)
✓ Compressed verbose instructions (-400 tokens)

Validating changes...
✓ Skill syntax valid
✓ Activation successful

Results:
- Before: 6,400 tokens
- After: 4,000 tokens
- Reduction: 37.5%

Optimization complete!
```

## Arguments

- `[skill-name]`: Target skill to optimize
- `[prompt]`: Optimization goal

## Difference from /skill:optimize

| Feature | /skill:optimize | /skill:optimize:auto |
|---------|-----------------|---------------------|
| Creates plan | Yes | No |
| User approval | Required | Not needed |
| Execution speed | Slower (wait) | Immediate |
| Best for | Major changes | Minor fixes |
| Safety | Review before | Backup + rollback |

## What It Does

### Step 1: Create Backup

```
Creating backup...
Source: $HOME/.claude/skills/better-auth/
Backup: $HOME/.claude/skills/better-auth/.backup-251129-2030/

Backed up:
├── prompt.md
├── references/
└── scripts/
```

### Step 2: Analyze Goal

```
Goal: "reduce token usage"

Analysis:
- Current tokens: 6,400
- Progressive disclosure: 40%
- Optimization opportunities: 3 found
```

### Step 3: Apply Changes

```
Applying optimizations...

Change 1: Consolidate references
- Merged api-v1.md and api-v2.md
- Saved: 800 tokens

Change 2: Progressive disclosure
- Moved examples to on-demand
- Saved: 1,200 tokens

Change 3: Compress instructions
- Removed redundant phrases
- Saved: 400 tokens
```

### Step 4: Validate Syntax

```
Validating skill syntax...

Checking prompt.md... ✓
Checking references... ✓
Checking scripts... ✓

Syntax valid.
```

### Step 5: Test Activation

```
Testing skill activation...

Loading skill: better-auth
Core instructions: ✓ Loaded
References: ✓ Accessible
Scripts: ✓ Executable

Activation successful.
```

### Step 6: Report or Rollback

**Success**:
```
═══════════════════════════════════════
        OPTIMIZATION COMPLETE
═══════════════════════════════════════

Skill: better-auth

Changes Applied:
✓ Consolidated duplicate references
✓ Applied progressive disclosure
✓ Compressed verbose instructions

Token Impact:
- Before: 6,400 tokens
- After: 4,000 tokens
- Saved: 2,400 tokens (37.5%)

Backup available at:
.backup-251129-2030/
═══════════════════════════════════════
```

**Failure (auto-rollback)**:
```
Optimization failed!

Error: Skill activation failed
Cause: Missing required reference

Rolling back...
Restored from: .backup-251129-2030/

Skill restored to previous state.
```

## Safety Features

### Automatic Backup

Every optimization creates a timestamped backup:

```
$HOME/.claude/skills/{skill-name}/
├── prompt.md (current)
├── references/
├── scripts/
└── .backup-251129-2030/   ← Automatic backup
    ├── prompt.md
    ├── references/
    └── scripts/
```

### Syntax Validation

Validates skill structure after changes:

```
Validation checks:
✓ prompt.md exists and valid
✓ YAML frontmatter correct
✓ References accessible
✓ Scripts executable
```

### Automatic Rollback

If activation fails, automatically restores:

```
Activation failed!
Auto-rollback initiated...
Restored from backup.
Skill working again.
```

## Complete Example

### Scenario: Quick Token Optimization

```bash
/skill:optimize:auto prisma "optimize for token efficiency"
```

**Execution**:

```
Creating backup...
✓ Backup created: .backup-251129-2035/

Analyzing skill: prisma
Current state:
- Tokens: 5,200
- Files: 4
- Progressive disclosure: 30%

Goal: optimize for token efficiency

Identifying optimizations...
1. Large inline examples (1,400 tokens)
2. Redundant schema docs (600 tokens)
3. Verbose error descriptions (400 tokens)

Applying changes...

[1/3] Moving examples to on-demand...
✓ Created references/examples-on-demand.md
✓ Updated prompt.md references

[2/3] Consolidating schema docs...
✓ Merged 3 files into schema-reference.md

[3/3] Compressing error descriptions...
✓ Shortened while keeping key info

Validating...
✓ Syntax valid
✓ Activation successful
✓ All features working

═══════════════════════════════════════
        OPTIMIZATION COMPLETE
═══════════════════════════════════════

Before: 5,200 tokens
After: 2,800 tokens
Saved: 2,400 tokens (46%)

Changes:
- Examples: Now on-demand
- Schemas: Consolidated
- Errors: Compressed

Backup: .backup-251129-2035/
═══════════════════════════════════════
```

### Scenario: Adding Error Handling

```bash
/skill:optimize:auto my-api-skill "add input validation and error handling"
```

**Execution**:

```
Creating backup...
✓ Backup created

Analyzing skill: my-api-skill
Goal: add input validation and error handling

Adding error handling...

[1/2] Adding input validation...
✓ Added validation section to prompt.md
✓ Created scripts/validate-input.sh

[2/2] Adding error handling...
✓ Added error handling guide
✓ Included common error patterns

Validating...
✓ All checks passed

Results:
- Added: Input validation instructions
- Added: Error handling guide
- Added: validate-input.sh script
- Token impact: +350 tokens

Optimization complete!
```

## Limitations

### Use for Safe Changes Only

```
✅ Appropriate:
- Token optimization
- Typo fixes
- Formatting improvements
- Small additions

❌ Use /skill:optimize instead:
- Major restructuring
- Significant logic changes
- Large content additions
- Risky modifications
```

### No Plan Review

Changes apply immediately - no review step:

```
/skill:optimize     → Plan → Review → Execute
/skill:optimize:auto → Execute immediately
```

### Backup Retention

Backups kept for manual cleanup:

```
# List backups
ls $HOME/.claude/skills/my-skill/.backup-*/

# Clean old backups
rm -rf $HOME/.claude/skills/my-skill/.backup-251128-*/
```

## Related Commands

- [/skill:optimize](/docs/engineer/commands/skill/optimize) - Optimization with approval
- [/skill:add](/docs/engineer/commands/skill/add) - Add references to skills
- [/skill:create](/docs/engineer/commands/skill/create) - Create new skills
- [/skill:fix-logs](/docs/engineer/commands/skill/fix-logs) - Fix skills from error logs

---

**Key Takeaway**: `/skill:optimize:auto` provides rapid skill optimization without approval gates, backed by automatic backup and rollback for safe iteration.
