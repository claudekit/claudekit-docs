---
title: CLAUDE.md
description: "Documentation for CLAUDE.md
description:
section: docs
category: configuration
order: 2
published: true"
section: docs
category: configuration
order: 2
published: true
---

# CLAUDE.md

The `CLAUDE.md` file is the primary configuration file that provides guidance to Claude Code when working with your codebase. Understanding this file is crucial for effective use of ClaudeKit.

## What is CLAUDE.md?

`CLAUDE.md` serves as the entry point for Claude Code's understanding of your project. It contains:

- Role and responsibilities definitions
- Links to detailed workflow documentation
- References to development rules
- Documentation management guidelines

## File Structure

A typical `CLAUDE.md` file looks like this:

```markdown
# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Role & Responsibilities

Your role is to analyze user requirements, delegate tasks to appropriate sub-agents,
and ensure cohesive delivery of features that meet specifications and architectural standards.

## Workflows

- Primary workflow: `./.claude/workflows/primary-workflow.md`
- Development rules: `./.claude/workflows/development-rules.md`
- Orchestration protocols: `./.claude/workflows/orchestration-protocol.md`
- Documentation management: `./.claude/workflows/documentation-management.md`

## Documentation Management

We keep all important docs in `./docs` folder and keep updating them.
```

## Why File System As Context?

ClaudeKit follows Manus's approach to Context Engineering: **Use File System As Context**.

### Benefits

1. **Token Efficiency**: CLAUDE.md contains just a few lines with links to detailed files
2. **On-Demand Loading**: Detailed instructions are loaded only when needed
3. **Better Organization**: Related documentation is grouped in logical directories
4. **Easier Maintenance**: Update specific files without touching CLAUDE.md

### Example

Instead of putting all development rules in CLAUDE.md:

```markdown
❌ Bad Approach (All in CLAUDE.md)
# CLAUDE.md
## Development Rules
1. Always write tests
2. Follow TypeScript strict mode
3. Use conventional commits
... (hundreds of lines)
```

ClaudeKit uses references:

```markdown
✅ Good Approach (File System As Context)
# CLAUDE.md
## Workflows
- Development rules: `./.claude/workflows/development-rules.md`
```

This keeps CLAUDE.md lightweight while maintaining access to detailed guidelines.

## Important: Do Not Modify

**[Important]** You should not modify `CLAUDE.md` directly, as it will be overwritten each time you update ClaudeKit using `ck init`.

### Why?

- ClaudeKit updates may include improvements to workflows and rules
- Manual changes will be lost during updates
- Consistency across ClaudeKit projects

### What if I need to customize?

If you want to modify `CLAUDE.md` without it being overwritten:

```bash
# Use the exclude flag during updates
ck init --exclude CLAUDE.md
```

**Better approach**: Instead of modifying CLAUDE.md, customize the referenced files in `.claude/workflows/` which are less likely to change during updates.

## Structure Overview

CLAUDE.md links to several key directories:

### `.claude/workflows/`

Contains detailed workflow instructions:

- `development-rules.md` - Code quality standards, subagent orchestration, pre-commit procedures
- `documentation-management.md` - Documentation standards and practices
- `orchestration-protocol.md` - Agent orchestration methods
- `primary-workflow.md` - Development workflow from code to deployment

### `docs/`

Project-specific documentation:

```
docs/
├── project-overview-pdr.md
├── code-standards.md
├── codebase-summary.md
├── design-guidelines.md
├── deployment-guide.md
├── system-architecture.md
└── project-roadmap.md
```

These files help Claude Code:
- Avoid hallucinations
- Prevent creating redundant code
- Understand project-specific patterns
- Follow established conventions

## How Claude Code Uses CLAUDE.md

### Initial Load

1. Claude Code reads `CLAUDE.md` when started
2. Understands the project's role and structure
3. Knows where to find detailed instructions

### During Tasks

When performing specific tasks, Claude Code:

1. References linked workflow files
2. Reads relevant documentation from `docs/`
3. Follows established patterns and rules
4. Updates documentation as needed

### Example Flow

```
User: "Add user authentication"
  ↓
Claude reads CLAUDE.md
  ↓
Loads development-rules.md
  ↓
Checks code-standards.md
  ↓
Reviews system-architecture.md
  ↓
Implements following patterns
  ↓
Updates documentation
```

## Best Practices

### Do's

✅ Keep CLAUDE.md concise with links to detailed docs
✅ Update workflow files in `.claude/workflows/` as needed
✅ Maintain project docs in `docs/` directory
✅ Use `ck init --exclude CLAUDE.md` if you must customize

### Don'ts

❌ Don't put all documentation in CLAUDE.md
❌ Don't modify CLAUDE.md without understanding update implications
❌ Don't ignore the linked workflow files
❌ Don't skip documentation management

## Token Consumption

Using File System As Context significantly reduces token usage:

**Without File System As Context:**
- Initial load: ~5000 tokens (everything in CLAUDE.md)
- Every task: Same 5000 tokens loaded

**With File System As Context (ClaudeKit approach):**
- Initial load: ~500 tokens (just CLAUDE.md)
- Specific task: +1000 tokens (only relevant file)
- Total: 1500 tokens vs 5000 tokens (70% savings)

## Validation

Ensure your CLAUDE.md is properly configured:

```bash
# Check if CLAUDE.md exists
cat CLAUDE.md

# Verify linked files exist
ls .claude/workflows/

# Check documentation structure
ls docs/
```

## Next Steps

Now that you understand CLAUDE.md:

- [Workflows](/docs/docs/configuration/workflows) - Learn about workflow files
- [Agents](/docs/agents/) - Understand the agent system
- [Commands](/docs/commands/) - Explore available commands

---

**Key Takeaway**: CLAUDE.md is a lightweight entry point that uses the file system as context, making ClaudeKit efficient and maintainable.
