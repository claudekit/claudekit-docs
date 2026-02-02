---
title: Repomix Skill
description: Package repositories into AI-friendly files with customizable patterns, token counting, and security checks
section: engineer
kit: engineer
category: skills/tools
order: 13
published: true
---# Repomix Skill

Package entire repositories into single AI-friendly files optimized for LLM context.

## When to Use

- Packaging codebases for AI analysis or code review
- Analyzing third-party libraries before integration
- Creating repository snapshots with token management
- Preparing security audit contexts with sensitive data filtering

## Key Capabilities

| Capability | Description |
|-----------|-------------|
| **Multiple Formats** | XML, Markdown, JSON, Plain text output |
| **Token Counting** | Automatic counting with per-file/directory breakdown |
| **Remote Support** | Package GitHub repos without cloning |
| **Comment Stripping** | Remove comments from 20+ languages |
| **Security Checks** | Secretlint integration for API keys, passwords, credentials |
| **Git Integration** | Respects .gitignore patterns |

## Common Use Cases

### Code Review Prep
**Who**: Senior developer preparing feature branch
```
"Package the src/auth module with type definitions for code review. Remove comments, output as markdown."
```

### Security Audit
**Who**: Security engineer evaluating third-party library
```
"Package the owner/suspicious-library repo from GitHub. Include security check for credentials and API keys."
```

### Bug Investigation
**Who**: Backend developer debugging auth flow
```
"Package src/auth and src/api directories with all TypeScript files. Include token count tree to see largest files."
```

### Documentation Context
**Who**: Tech writer generating API reference
```
"Package src directory and all markdown files. Output as single markdown file with file structure preserved."
```

### Token Optimization
**Who**: AI engineer managing LLM context limits
```
"Show token count tree for this repo. Focus on directories over 1000 tokens. Help me decide what to include."
```

## Quick Reference

### Basic Commands
```bash
# Package current directory (generates repomix-output.xml)
repomix

# Specify output format
repomix --style markdown
repomix --style json

# Package remote repository
npx repomix --remote owner/repo

# Custom output with filters
repomix --include "src/**/*.ts" --remove-comments -o output.md
```

### File Selection
```bash
# Include patterns
repomix --include "src/**/*.ts,*.md"

# Ignore patterns
repomix -i "tests/**,*.test.js"

# Disable .gitignore rules
repomix --no-gitignore
```

### Output Options
```bash
# Output format: markdown, xml, json, plain
repomix --style markdown -o output.md

# Remove comments
repomix --remove-comments

# Copy to clipboard
repomix --copy
```

### Token Management
```bash
# Show token count tree
repomix --token-count-tree

# Show only 1000+ token files
repomix --token-count-tree 1000
```

**LLM Context Limits:**
- Claude Sonnet 4.5: ~200K tokens
- GPT-4: ~128K tokens
- GPT-3.5: ~16K tokens

## Pro Tips

- **Review output before sharing** - Always check for hardcoded secrets
- **Use .repomixignore** - Add sensitive file patterns
- **Token count first** - Run `--token-count-tree` to optimize includes
- **Disable security checks** - Use `--no-security-check` for known-safe repos
- **Not activating?** Say: "Use repomix skill to package this repo for AI analysis"

## Related Skills

- [Code Review](/docs/engineer/skills/code-review) - AI-powered code analysis
- [Research](/docs/engineer/skills/research) - Investigate unfamiliar codebases
- [Debugging](/docs/engineer/skills/debug) - Systematic bug isolation

## Key Takeaway

Repomix packages repositories into LLM-ready files with token counting, security checks, and format flexibility. Essential for preparing large codebases for AI consumption.
