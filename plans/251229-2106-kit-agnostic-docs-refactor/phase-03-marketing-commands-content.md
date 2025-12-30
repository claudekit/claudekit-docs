---
title: "Phase 03: Marketing Commands Content"
status: pending
effort: 4h
type: parallel
depends_on: [phase-01]
copywriter: copywriter-2
---

# Phase 03: Marketing Commands Content

**Type**: PARALLEL (can run with Phases 2, 4-8)
**Effort**: 4h
**Owner**: Copywriter-2
**Depends On**: Phase 1 (Infrastructure)

---

## Overview

Create documentation for the 20 main Marketing Kit commands. Focus on practical examples with storytelling structure.

---

## Exclusive File Ownership

This phase exclusively owns:

```
src/content/docs/marketing/commands/index.md
src/content/docs/marketing/commands/analyze.md
src/content/docs/marketing/commands/ask.md
src/content/docs/marketing/commands/bootstrap.md
src/content/docs/marketing/commands/brainstorm.md
src/content/docs/marketing/commands/campaign.md
src/content/docs/marketing/commands/code.md
src/content/docs/marketing/commands/content.md
src/content/docs/marketing/commands/cook.md
src/content/docs/marketing/commands/design.md
src/content/docs/marketing/commands/email.md
src/content/docs/marketing/commands/fix.md
src/content/docs/marketing/commands/git.md
src/content/docs/marketing/commands/plan.md
src/content/docs/marketing/commands/review.md
src/content/docs/marketing/commands/scout.md
src/content/docs/marketing/commands/seo.md
src/content/docs/marketing/commands/social.md
src/content/docs/marketing/commands/test.md
src/content/docs/marketing/commands/dashboard.md
src/content/docs/marketing/commands/use-mcp.md
```

**Total**: 21 files (1 index + 20 commands)

---

## Command Priority Matrix

### Tier 1 - Core Marketing (Document First)

| Command | Purpose | Variants |
|---------|---------|----------|
| `/campaign` | Campaign management | create, status, analyze |
| `/content` | Content creation | good, fast, cro, enhance, blog, video |
| `/seo` | SEO optimization | keywords, optimize, audit, competitor |
| `/email` | Email campaigns | create, sequence, optimize |
| `/social` | Social media | create, calendar, analyze |
| `/analyze` | Analytics | traffic, campaigns, conversions |

### Tier 2 - Workflow Commands

| Command | Purpose | Variants |
|---------|---------|----------|
| `/plan` | Planning | fast, hard, two, parallel, cro, ci |
| `/cook` | Implementation | auto, fast, parallel |
| `/brainstorm` | Ideation | - |
| `/design` | Design | good, fast, screenshot, video, describe, 3d |

### Tier 3 - Utility Commands

| Command | Purpose | Variants |
|---------|---------|----------|
| `/fix` | Issue fixing | fast, hard, test, types, logs, ui, ci |
| `/code` | Code execution | auto, parallel, no-test |
| `/scout` | Exploration | ext |
| `/review` | Code review | codebase |
| `/test` | Testing | ui |
| `/ask` | Consultation | - |
| `/bootstrap` | Project init | auto, fast |
| `/git` | Git operations | cm, cp, merge, pr |
| `/dashboard` | Dashboard | kanban, hub |
| `/use-mcp` | MCP config | - |

---

## Content Template

Each command doc must follow this structure:

```markdown
---
title: "/{command}"
description: "{One-line description for SEO, 80-150 chars}"
section: marketing
category: commands
order: {number}
---

# /{command}

> **{Tagline}** - {What it does in one sentence}

## Quick Start

Run your first {command} in 30 seconds:

```bash
/{command} {simple-example}
```

## What It Does

{2-3 paragraphs explaining the command in storytelling format}

**Before**: {Pain point without this command}
**After**: {How life is better with this command}

## Syntax

```bash
/{command} [arguments] [options]
```

### Arguments

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `{arg1}` | string | Yes | {description} |
| `{arg2}` | string | No | {description} |

### Options

| Option | Default | Description |
|--------|---------|-------------|
| `--{opt1}` | `{default}` | {description} |

## Variants

### /{command}:fast

{Quick variant description}

```bash
/{command}:fast {example}
```

### /{command}:hard

{Deep analysis variant description}

```bash
/{command}:hard {example}
```

## Examples

### Example 1: {Use Case Name}

{Scenario description}

```bash
/{command} {full-example}
```

**Output**: {What to expect}

### Example 2: {Use Case Name}

{Scenario description}

```bash
/{command} {full-example}
```

## Workflow Integration

Use `/{command}` as part of larger workflows:

```bash
/brainstorm {topic}     # Ideate first
/{command} {task}       # Execute
/review                 # Review results
```

## Related Commands

- [`/{related1}`](/docs/marketing/commands/{slug})
- [`/{related2}`](/docs/marketing/commands/{slug})

## Related Agents

- [{Agent Name}](/docs/marketing/agents/{slug})
```

---

## Source References

**Primary Source**: `../claudekit-marketing/.claude/commands/`

**Scout Report**: `plans/reports/scout-251229-2047-marketing-commands.md`

---

## Index Page Structure

`src/content/docs/marketing/commands/index.md`:

```markdown
---
title: "Marketing Commands"
description: "73+ slash commands for marketing automation, campaigns, and content"
section: marketing
category: commands
order: 1
---

# Marketing Commands

The Marketing Kit includes **73+ slash commands** organized into categories for every marketing task.

## Command Categories

### Campaign & Analytics

| Command | Description |
|---------|-------------|
| [`/campaign`](/docs/marketing/commands/campaign) | Create and manage campaigns |
| [`/analyze`](/docs/marketing/commands/analyze) | Generate analytics reports |
| [`/seo`](/docs/marketing/commands/seo) | SEO optimization tools |

### Content Creation

| Command | Description |
|---------|-------------|
| [`/content`](/docs/marketing/commands/content) | Create marketing content |
| [`/email`](/docs/marketing/commands/email) | Email campaign creation |
| [`/social`](/docs/marketing/commands/social) | Social media content |
| [`/design`](/docs/marketing/commands/design) | Design generation |

### Planning & Strategy

| Command | Description |
|---------|-------------|
| [`/plan`](/docs/marketing/commands/plan) | Strategic planning |
| [`/brainstorm`](/docs/marketing/commands/brainstorm) | Collaborative ideation |
| [`/cook`](/docs/marketing/commands/cook) | Feature implementation |

### Development

| Command | Description |
|---------|-------------|
| [`/code`](/docs/marketing/commands/code) | Execute implementation |
| [`/fix`](/docs/marketing/commands/fix) | Issue resolution |
| [`/test`](/docs/marketing/commands/test) | Run tests |
| [`/review`](/docs/marketing/commands/review) | Code review |

### Utilities

| Command | Description |
|---------|-------------|
| [`/scout`](/docs/marketing/commands/scout) | Codebase exploration |
| [`/ask`](/docs/marketing/commands/ask) | Technical consultation |
| [`/git`](/docs/marketing/commands/git) | Git operations |
| [`/dashboard`](/docs/marketing/commands/dashboard) | Dashboard management |
| [`/use-mcp`](/docs/marketing/commands/use-mcp) | MCP configuration |

## Command Variants

Most commands support variants for different use cases:

| Variant | Purpose |
|---------|---------|
| `:fast` | Quick, token-efficient execution |
| `:hard` | Deep, thorough analysis |
| `:auto` | Fully automated (no prompts) |
| `:parallel` | Concurrent execution |

## Next Steps

- [Marketing Agents](/docs/marketing/agents) - Agents powering these commands
- [Marketing Workflows](/docs/marketing/workflows) - Common workflow patterns
```

---

## Quality Checklist

For each command doc:

- [ ] Title starts with `/`
- [ ] Description is 80-150 chars, SEO-optimized
- [ ] Section is `marketing`
- [ ] Category is `commands`
- [ ] Order number assigned (1-25)
- [ ] Syntax section complete
- [ ] At least 2 examples
- [ ] Variants documented
- [ ] Related commands/agents linked
- [ ] No hallucinated features (matches source)

---

## Writing Tips

### For Beginners

- Start with simplest example
- Explain what happens step by step
- Use concrete, relatable scenarios
- Avoid jargon without explanation

### For Variants

- Explain WHEN to use each variant
- Show comparison between variants
- Default variant highlighted

### For Integration

- Show how commands chain together
- Reference workflow docs
- Link to related agents

---

## Validation

Before marking Phase 3 complete:

- [ ] All 21 files created
- [ ] All frontmatter validates
- [ ] `bun run build` passes
- [ ] Navigation shows all commands
- [ ] No broken internal links
- [ ] Examples are runnable

---

## Completion Criteria

Phase 3 is COMPLETE when:

1. All 21 files exist with valid content
2. Each file passes quality checklist
3. Index page lists all commands with links
4. Build succeeds without errors
