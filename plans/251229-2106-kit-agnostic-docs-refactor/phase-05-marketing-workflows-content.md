---
title: "Phase 05: Marketing Workflows Content"
status: pending
effort: 3h
type: parallel
depends_on: [phase-01]
copywriter: copywriter-4
---

# Phase 05: Marketing Workflows Content

**Type**: PARALLEL (can run with Phases 2-4, 6-8)
**Effort**: 3h
**Owner**: Copywriter-4
**Depends On**: Phase 1 (Infrastructure)

---

## Overview

Create documentation for the 10 Marketing Kit workflows. These are step-by-step guides showing how agents and commands work together for common marketing tasks.

---

## Exclusive File Ownership

This phase exclusively owns:

```
src/content/docs/marketing/workflows/index.md
src/content/docs/marketing/workflows/campaign-workflow.md
src/content/docs/marketing/workflows/content-workflow.md
src/content/docs/marketing/workflows/marketing-workflow.md
src/content/docs/marketing/workflows/sales-workflow.md
src/content/docs/marketing/workflows/seo-workflow.md
src/content/docs/marketing/workflows/analytics-workflow.md
src/content/docs/marketing/workflows/email-workflow.md
src/content/docs/marketing/workflows/social-workflow.md
src/content/docs/marketing/workflows/brand-workflow.md
src/content/docs/marketing/workflows/dashboard-workflow.md
```

**Total**: 11 files (1 index + 10 workflows)

---

## Workflow Priority Matrix

| Workflow | Purpose | Complexity | Priority |
|----------|---------|------------|----------|
| campaign-workflow | Campaign creation & management | High | P1 |
| content-workflow | Content production pipeline | High | P1 |
| marketing-workflow | General marketing operations | Medium | P1 |
| seo-workflow | SEO optimization process | Medium | P1 |
| email-workflow | Email campaign creation | Medium | P1 |
| social-workflow | Social media content | Medium | P2 |
| sales-workflow | Sales enablement | Medium | P2 |
| analytics-workflow | Data analysis & reporting | Medium | P2 |
| brand-workflow | Brand consistency | Low | P2 |
| dashboard-workflow | Dashboard setup & usage | Low | P2 |

---

## Content Template

Each workflow doc must follow this structure:

```markdown
---
title: "{Workflow Name}"
description: "{One-line description for SEO, 80-150 chars}"
section: marketing
category: workflows
order: {number}
---

# {Workflow Name}

> **{Goal Statement}** - What you'll achieve by following this workflow

## Overview

{2-3 paragraphs explaining what this workflow accomplishes}

**Time**: ~{X} minutes
**Difficulty**: {Beginner | Intermediate | Advanced}
**Prerequisites**: {List any requirements}

## The Workflow

```mermaid
flowchart LR
    A[Step 1] --> B[Step 2]
    B --> C[Step 3]
    C --> D[Result]
```

## Step-by-Step Guide

### Step 1: {Action Name}

{Explanation of what to do and why}

```bash
/{command} {example}
```

**What happens**: {Explanation of output/result}

**Checkpoint**: {How to verify this step worked}

---

### Step 2: {Action Name}

{Explanation of what to do and why}

```bash
/{command} {example}
```

**What happens**: {Explanation of output/result}

**Checkpoint**: {How to verify this step worked}

---

### Step 3: {Action Name}

{Explanation of what to do and why}

```bash
/{command} {example}
```

**What happens**: {Explanation of output/result}

**Checkpoint**: {How to verify this step worked}

---

## Real-World Example

### Scenario: {Concrete scenario name}

{Describe a realistic marketing scenario}

#### Starting Point

{What you have before starting}

#### Execution

```bash
# Step 1
/{command} {specific-example}

# Step 2
/{command} {specific-example}

# Step 3
/{command} {specific-example}
```

#### Result

{What you end up with}

## Common Variations

### Variation 1: {Name}

When {condition}, modify the workflow:

```bash
/{command}:variant {example}
```

### Variation 2: {Name}

For {scenario}, use:

```bash
/{alternative-command} {example}
```

## Troubleshooting

### Issue 1: {Problem}

**Cause**: {Why it happens}
**Solution**: {How to fix}

### Issue 2: {Problem}

**Cause**: {Why it happens}
**Solution**: {How to fix}

## Best Practices

1. **{Practice 1}**: {Explanation}
2. **{Practice 2}**: {Explanation}
3. **{Practice 3}**: {Explanation}

## Related Workflows

- [{Related Workflow 1}](/docs/marketing/workflows/{slug})
- [{Related Workflow 2}](/docs/marketing/workflows/{slug})

## Agents Used

- [{Agent 1}](/docs/marketing/agents/{slug})
- [{Agent 2}](/docs/marketing/agents/{slug})

## Commands Used

- [`/{command1}`](/docs/marketing/commands/{slug})
- [`/{command2}`](/docs/marketing/commands/{slug})
```

---

## Source References

**Primary Source**: `../claudekit-marketing/.claude/workflows/`

| Source File | Workflow Doc |
|-------------|--------------|
| `campaign-workflow.md` | campaign-workflow.md |
| `content-workflow.md` | content-workflow.md |
| `marketing-workflow.md` | marketing-workflow.md |
| `sales-workflow.md` | sales-workflow.md |
| `seo-workflow.md` | seo-workflow.md |
| `analytics-workflow.md` | analytics-workflow.md |

---

## Index Page Structure

`src/content/docs/marketing/workflows/index.md`:

```markdown
---
title: "Marketing Workflows"
description: "Step-by-step guides for common marketing tasks and campaigns"
section: marketing
category: workflows
order: 1
---

# Marketing Workflows

Learn how to accomplish common marketing tasks with step-by-step workflows.

## Available Workflows

### Campaign Management

| Workflow | Description | Time |
|----------|-------------|------|
| [Campaign Workflow](/docs/marketing/workflows/campaign-workflow) | Create & manage campaigns | ~30 min |
| [Dashboard Workflow](/docs/marketing/workflows/dashboard-workflow) | Set up & use dashboard | ~15 min |

### Content Creation

| Workflow | Description | Time |
|----------|-------------|------|
| [Content Workflow](/docs/marketing/workflows/content-workflow) | Content production pipeline | ~25 min |
| [Email Workflow](/docs/marketing/workflows/email-workflow) | Email campaign creation | ~20 min |
| [Social Workflow](/docs/marketing/workflows/social-workflow) | Social media content | ~15 min |

### Strategy & Optimization

| Workflow | Description | Time |
|----------|-------------|------|
| [Marketing Workflow](/docs/marketing/workflows/marketing-workflow) | General operations | ~20 min |
| [SEO Workflow](/docs/marketing/workflows/seo-workflow) | SEO optimization | ~25 min |
| [Analytics Workflow](/docs/marketing/workflows/analytics-workflow) | Data analysis | ~20 min |

### Sales & Brand

| Workflow | Description | Time |
|----------|-------------|------|
| [Sales Workflow](/docs/marketing/workflows/sales-workflow) | Sales enablement | ~20 min |
| [Brand Workflow](/docs/marketing/workflows/brand-workflow) | Brand consistency | ~15 min |

## Workflow Difficulty Levels

- **Beginner**: Simple workflows with 2-3 steps
- **Intermediate**: Multi-step workflows with branching
- **Advanced**: Complex workflows with automation

## How to Use Workflows

1. **Read the overview** - Understand what you'll achieve
2. **Check prerequisites** - Ensure you have what's needed
3. **Follow step-by-step** - Execute each command in order
4. **Verify checkpoints** - Confirm each step worked
5. **Adapt as needed** - Use variations for your scenario

## Creating Custom Workflows

Combine agents and commands to create your own workflows:

```bash
# Example: Custom launch workflow
/brainstorm "product launch ideas"
/plan "launch campaign"
/campaign create "Q1 Launch"
/content:good "launch blog post"
/email create "launch announcement"
/social create "launch social posts"
```

## Next Steps

- [Marketing Agents](/docs/marketing/agents) - Agents powering these workflows
- [Marketing Commands](/docs/marketing/commands) - All available commands
```

---

## Quality Checklist

For each workflow doc:

- [ ] Title matches workflow name
- [ ] Description is 80-150 chars, SEO-optimized
- [ ] Section is `marketing`
- [ ] Category is `workflows`
- [ ] Order number assigned (1-15)
- [ ] Time estimate included
- [ ] Difficulty level stated
- [ ] Mermaid flowchart included
- [ ] At least 3 steps with checkpoints
- [ ] Real-world example complete
- [ ] Related workflows/agents/commands linked
- [ ] No hallucinated steps (matches source)

---

## Writing Tips

### For Storytelling

- Open with the goal (what user achieves)
- Build tension (the challenge)
- Resolve with success (the outcome)
- Celebrate micro-wins at each step

### For Clarity

- One action per step
- Clear checkpoint after each step
- Explicit command syntax
- Show expected output

### For Beginners

- Explain WHY before WHAT
- Use concrete scenarios
- Avoid assumptions about prior knowledge
- Include troubleshooting for common issues

---

## Validation

Before marking Phase 5 complete:

- [ ] All 11 files created
- [ ] All frontmatter validates
- [ ] `bun run build` passes
- [ ] Navigation shows all workflows
- [ ] No broken internal links
- [ ] Mermaid diagrams render

---

## Completion Criteria

Phase 5 is COMPLETE when:

1. All 11 files exist with valid content
2. Each file passes quality checklist
3. Index page lists all workflows with links
4. Build succeeds without errors
