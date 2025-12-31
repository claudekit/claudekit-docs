---
title: "Phase 06: CLI Documentation"
status: pending
effort: 3h
type: parallel
depends_on: [phase-01]
copywriter: copywriter-5
---

# Phase 06: CLI Documentation

**Type**: PARALLEL (can run with Phases 2-5, 7-8)
**Effort**: 3h
**Owner**: Copywriter-5
**Depends On**: Phase 1 (Infrastructure)

---

## Overview

Extract and create comprehensive documentation for the ClaudeKit CLI. This is shared documentation used by both Engineer and Marketing kits.

---

## Exclusive File Ownership

This phase exclusively owns:

```
src/content/docs/cli/index.md
src/content/docs/cli/installation.md
src/content/docs/cli/new.md
src/content/docs/cli/init.md
src/content/docs/cli/doctor.md
src/content/docs/cli/versions.md
src/content/docs/cli/update.md
src/content/docs/cli/uninstall.md
src/content/docs/cli/configuration.md
```

**Total**: 9 files (1 index + 8 command/config pages)

---

## CLI Command Reference

| Command | Purpose | Priority |
|---------|---------|----------|
| `ck new` | Create new project | P1 |
| `ck init` | Initialize existing project | P1 |
| `ck doctor` | Health check | P1 |
| `ck versions` | Version info | P2 |
| `ck update` | Update CLI | P2 |
| `ck uninstall` | Remove CLI | P3 |

---

## Source References

**Primary Source**: `../claudekit-cli/`

| Source | Content |
|--------|---------|
| `README.md` | Overview, installation |
| `src/commands/` | Command implementations |
| `package.json` | Version, dependencies |

**Scout Report**: `plans/reports/scout-251229-claudekit-cli-analysis.md`

---

## Content Template for Commands

```markdown
---
title: "ck {command}"
description: "{One-line description for SEO, 80-150 chars}"
section: cli
order: {number}
---

# ck {command}

> **{Tagline}** - {What this command does in one sentence}

## Quick Start

```bash
ck {command} [options]
```

## What It Does

{2-3 paragraphs explaining the command}

## Syntax

```bash
ck {command} [arguments] [options]
```

### Arguments

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `{arg1}` | string | Yes | {description} |

### Options

| Option | Short | Default | Description |
|--------|-------|---------|-------------|
| `--{opt1}` | `-{o}` | `{default}` | {description} |

## Examples

### Example 1: {Use Case}

```bash
ck {command} {example}
```

**Output**:
```
{expected output}
```

### Example 2: {Use Case}

```bash
ck {command} {example}
```

## Common Patterns

### Pattern 1: {Name}

{Description and example}

### Pattern 2: {Name}

{Description and example}

## Troubleshooting

### Issue: {Problem}

**Solution**: {How to fix}

## Related Commands

- [`ck {related1}`](/docs/cli/{slug})
- [`ck {related2}`](/docs/cli/{slug})
```

---

## File-by-File Specifications

### index.md - CLI Overview

```markdown
---
title: "ClaudeKit CLI"
description: "Command-line interface for creating and managing ClaudeKit projects"
section: cli
order: 1
---

# ClaudeKit CLI

The ClaudeKit CLI helps you create and manage ClaudeKit-powered projects.

## Quick Install

```bash
# npm
npm install -g claudekit-cli

# bun
bun install -g claudekit-cli

# pnpm
pnpm add -g claudekit-cli

# yarn
yarn global add claudekit-cli
```

## Verify Installation

```bash
ck --version
```

## Available Commands

| Command | Description |
|---------|-------------|
| [`ck new`](/docs/cli/new) | Create a new project |
| [`ck init`](/docs/cli/init) | Initialize existing project |
| [`ck doctor`](/docs/cli/doctor) | Health check & diagnostics |
| [`ck versions`](/docs/cli/versions) | Show version info |
| [`ck update`](/docs/cli/update) | Update the CLI |
| [`ck uninstall`](/docs/cli/uninstall) | Remove the CLI |

## Configuration

See [Configuration](/docs/cli/configuration) for customization options.

## Next Steps

- [Create your first project](/docs/cli/new)
- [Choose your kit](/docs/getting-started/quick-start)
```

---

### new.md - Create New Project

Key content to include:

1. **Syntax**: `ck new [options]`
2. **Options**:
   - `--dir, -d` - Target directory
   - `--kit, -k` - Kit type (engineer, marketing)
   - `--template, -t` - Project template
   - `--prefix, -p` - Command prefix
3. **Interactive mode**: Default behavior without flags
4. **Kit selection**: Explain engineer vs marketing
5. **Templates**: Available project templates
6. **Examples**: At least 3 use cases

---

### init.md - Initialize Existing Project

Key content to include:

1. **Syntax**: `ck init [options]`
2. **Purpose**: Add ClaudeKit to existing project
3. **Options**:
   - `--kit, -k` - Kit type
   - `--force, -f` - Overwrite existing
4. **What gets added**: List of files/folders
5. **Migration guide**: From vanilla Claude Code

---

### doctor.md - Health Check

Key content to include:

1. **Syntax**: `ck doctor`
2. **Checks performed**:
   - Node.js version
   - Git installation
   - Claude CLI presence
   - API key configuration
   - Skills dependencies
3. **Output interpretation**: What each status means
4. **Fixing issues**: Resolution steps

---

### versions.md - Version Information

Key content to include:

1. **Syntax**: `ck versions`
2. **Output**:
   - CLI version
   - Kit version
   - Node.js version
   - npm/bun version
3. **Use cases**: Troubleshooting, reporting issues

---

### update.md - Update CLI

Key content to include:

1. **Syntax**: `ck update`
2. **What gets updated**: CLI only vs full kit
3. **Version checking**: How to check for updates
4. **Rollback**: How to revert if needed

---

### uninstall.md - Remove CLI

Key content to include:

1. **Syntax**: `ck uninstall`
2. **What gets removed**: Files, configs, global install
3. **Cleanup steps**: Manual cleanup if needed
4. **Re-installation**: How to reinstall

---

### configuration.md - Configuration Reference

Key content to include:

1. **Config file location**: `.claudekit/config.json`
2. **Environment variables**: All supported vars
3. **Configuration options**:
   - Default kit
   - Prefix customization
   - Output directories
4. **Per-project vs global**: Scope of configs
5. **Examples**: Common configurations

---

## Quality Checklist

For each CLI doc:

- [ ] Title matches command syntax
- [ ] Description is 80-150 chars, SEO-optimized
- [ ] Section is `cli`
- [ ] Order number assigned (1-10)
- [ ] Syntax section complete
- [ ] All options documented
- [ ] At least 2 examples
- [ ] Output shown where relevant
- [ ] Related commands linked
- [ ] No hallucinated features (matches source)

---

## Writing Guidelines

### For Beginners

- Assume no prior CLI experience
- Explain what each option does
- Show expected output
- Use realistic directory names

### For Power Users

- Document all options
- Show shorthand flags
- Include advanced patterns
- Note edge cases

### For Troubleshooting

- Common errors and solutions
- Prerequisites for each command
- Environment-specific notes (Windows/macOS/Linux)

---

## Validation

Before marking Phase 6 complete:

- [ ] All 9 files created
- [ ] All frontmatter validates
- [ ] `bun run build` passes
- [ ] Navigation shows CLI section
- [ ] No broken internal links
- [ ] Command syntax accurate

---

## Completion Criteria

Phase 6 is COMPLETE when:

1. All 9 files exist with valid content
2. Each file passes quality checklist
3. Index page lists all commands
4. Build succeeds without errors
5. CLI docs accessible at `/docs/cli/`
