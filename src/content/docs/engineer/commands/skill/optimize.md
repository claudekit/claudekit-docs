---
title: /skill:optimize
description: Create optimization plan for skill improvements with user approval workflow for token efficiency
section: engineer
kit: engineer
category: commands/skill
order: 83
published: true
---

# /skill:optimize

Plan-based skill optimization with user approval. Analyzes skills, identifies improvements, creates a plan, and waits for approval before implementing changes.

## Syntax

```bash
/skill:optimize [skill-name] [prompt]
```

## When to Use

- **Token Optimization**: Reduce skill token usage
- **Clarity Improvements**: Make instructions clearer
- **Error Handling**: Add better error handling
- **Major Changes**: When you want to review before applying
- **Documentation**: Improve skill documentation

## Quick Example

```bash
/skill:optimize better-auth "reduce token usage by 40%"
```

**Output**:
```
Analyzing skill: better-auth

Current Analysis:
- Total tokens: 8,400
- Progressive disclosure: Partial
- Redundant content: 2,100 tokens

Optimization Plan Created:
Location: plans/skill-optimize-better-auth-251129/plan.md

Proposed Changes:
1. Consolidate duplicate API references (-1,200 tokens)
2. Extract examples to on-demand loading (-600 tokens)
3. Compress instruction format (-300 tokens)

Estimated Impact: -2,100 tokens (25% reduction)

⏸ Waiting for approval...
Review plan and respond with 'approve' or 'reject'
```

## Arguments

- `[skill-name]`: Target skill to optimize
- `[prompt]`: Optimization goal (e.g., "reduce tokens", "improve clarity")

## Optimization Areas

| Area | Description |
|------|-------------|
| Token Efficiency | Reduce token count, improve progressive disclosure |
| Instruction Clarity | Make instructions clearer, remove ambiguity |
| Script Performance | Optimize script execution, reduce runtime |
| Error Handling | Add validation, improve error messages |
| Documentation | Update docs, add examples |

## What It Does

### Step 1: Read Skill Files

```
Reading skill: better-auth

Files found:
├── prompt.md (2,400 tokens)
├── references/
│   ├── api-docs.md (3,200 tokens)
│   └── examples.md (1,800 tokens)
└── scripts/
    └── validate.sh
```

### Step 2: Analyze Against Goal

```
Goal: "reduce token usage by 40%"

Analysis:
- Current: 8,400 tokens
- Target: 5,040 tokens
- Required reduction: 3,360 tokens

Opportunities identified:
- Duplicate content: 1,200 tokens
- Non-progressive loading: 1,400 tokens
- Verbose instructions: 800 tokens
- Redundant examples: 600 tokens
```

### Step 3: Create Plan

```
Creating optimization plan...

Plan location:
plans/skill-optimize-better-auth-251129/
├── plan.md
└── analysis.md
```

### Step 4: Present to User

```
═══════════════════════════════════════
        OPTIMIZATION PLAN
═══════════════════════════════════════

Skill: better-auth
Goal: Reduce token usage by 40%

Current State:
- Total tokens: 8,400
- Files: 3
- Progressive disclosure: 60%

Proposed Changes:

1. Consolidate API References
   - Merge overlapping docs
   - Impact: -1,200 tokens
   - Risk: Low

2. Implement Full Progressive Disclosure
   - Move examples to on-demand
   - Impact: -1,400 tokens
   - Risk: Low

3. Compress Instructions
   - Remove redundant text
   - Impact: -800 tokens
   - Risk: Medium

Estimated Result:
- New total: 5,000 tokens
- Reduction: 40.5%
- Target: ✓ Met

═══════════════════════════════════════
```

### Step 5: Wait for Approval (BLOCKING)

```
⏸ WAITING FOR APPROVAL

Review the plan at:
plans/skill-optimize-better-auth-251129/plan.md

Respond with:
- 'approve' - Implement changes
- 'reject' - Cancel optimization
- 'modify' - Request changes to plan
```

### Step 6: Execute if Approved

```
User: approve

Executing optimization plan...

Step 1/3: Consolidating API references...
✓ Merged 3 files into 1

Step 2/3: Implementing progressive disclosure...
✓ Moved examples to on-demand loading

Step 3/3: Compressing instructions...
✓ Reduced verbose text

Optimization complete.
```

### Step 7: Test Optimized Skill

```
Testing optimized skill...

Activation: ✓ Success
Core load: 1,200 tokens (was 2,400)
Full load: 5,000 tokens (was 8,400)
All features: ✓ Working

Optimization successful!
```

## Plan Structure

Generated plan includes:

```markdown
# Skill Optimization Plan

## Target
- Skill: better-auth
- Goal: reduce token usage by 40%

## Current Issues
1. [Issue description]
2. [Issue description]

## Proposed Changes
### Change 1: [Title]
- Description
- Files affected
- Token impact
- Risk level

### Change 2: [Title]
...

## Token Impact Summary
| Before | After | Change |
|--------|-------|--------|
| 8,400  | 5,000 | -40.5% |

## Risk Assessment
- Overall risk: Low
- Rollback: Available

## Implementation Steps
1. [Step description]
2. [Step description]
```

## Complete Example

### Scenario: Improving Instruction Clarity

```bash
/skill:optimize docker "improve instruction clarity for container management"
```

**Execution**:

```
Analyzing skill: docker

Current Analysis:
- Instructions: Technically accurate but verbose
- Examples: Scattered across files
- Common tasks: Not prioritized

Creating optimization plan...

═══════════════════════════════════════
        OPTIMIZATION PLAN
═══════════════════════════════════════

Skill: docker
Goal: Improve instruction clarity

Current Issues:
1. Instructions assume advanced knowledge
2. Common tasks buried in reference docs
3. Examples not grouped by use case
4. Error handling missing

Proposed Changes:

1. Restructure Instructions
   - Add beginner-friendly intro
   - Prioritize common tasks
   - Impact: +200 tokens (worth it for clarity)
   - Risk: Low

2. Group Examples by Use Case
   - Development: dev containers
   - Production: deployment
   - Debugging: logs and shell access
   - Impact: Neutral
   - Risk: Low

3. Add Error Handling Guide
   - Common errors and fixes
   - Troubleshooting flowchart
   - Impact: +400 tokens
   - Risk: Low

Net Impact: +600 tokens (acceptable for clarity gains)

═══════════════════════════════════════

⏸ Waiting for approval...
```

**User**: approve

```
Executing plan...

✓ Restructured instructions
✓ Grouped examples by use case
✓ Added error handling guide

Testing skill...
✓ Clarity improved
✓ All features working

Optimization complete!
New clarity score: 8.5/10 (was 6/10)
```

## Approval Workflow

```
/skill:optimize
      │
      ▼
┌─────────────┐
│ Analyze     │
└─────────────┘
      │
      ▼
┌─────────────┐
│ Create Plan │
└─────────────┘
      │
      ▼
┌─────────────┐
│ Present     │
└─────────────┘
      │
      ▼
┌─────────────────────────────────────┐
│ ⏸ WAIT FOR USER APPROVAL           │
│                                      │
│ 'approve' → Execute plan            │
│ 'reject'  → Cancel                  │
│ 'modify'  → Edit plan               │
└─────────────────────────────────────┘
      │
      ▼
┌─────────────┐
│ Execute     │
└─────────────┘
      │
      ▼
┌─────────────┐
│ Test        │
└─────────────┘
```

## Related Commands

- [/skill:optimize:auto](/docs/commands/skill/optimize-auto) - Optimize without approval
- [/skill:add](/docs/commands/skill/add) - Add references to skills
- [/skill:create](/docs/commands/skill/create) - Create new skills

---

**Key Takeaway**: `/skill:optimize` provides controlled skill improvement with a plan-and-approve workflow, ensuring you review changes before they're applied.
