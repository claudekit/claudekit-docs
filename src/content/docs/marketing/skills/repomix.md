---
title: "ckm:repomix"
description: "Pack entire repositories into single AI-friendly files for codebase analysis, documentation generation, and LLM context feeding."
section: marketing
kit: marketing
category: skills
order: 100
---

# `ckm:repomix`

> Convert any repository into a single optimized file that LLMs can fully understand for code review, documentation, and analysis.

## What This Skill Does

**The Challenge**: LLMs have context window limits and can't load entire repositories. Feeding code piecemeal loses cross-file context, making analysis shallow and documentation incomplete.

**The Solution**: Repomix packs entire repositories into a single XML/Markdown file with smart filtering, token optimization, and metadata. LLMs receive full codebase context for accurate analysis, documentation, and code generation.

## Activation

**Implicit**: Activates when performing full codebase analysis, generating repository documentation, or feeding codebases to LLMs.

**Explicit**: Activate via prompt:
```
Activate repomix skill to pack our frontend repository for codebase analysis
```

## Capabilities

### 1. Repository Packing
Convert entire repo to single AI-optimized file.

```bash
# Pack current directory
npx repomix

# Pack specific directory
npx repomix --include "src/**,package.json,README.md"

# Remote repository
npx repomix --remote https://github.com/owner/repo
```

**Output formats**: XML (default, best for LLMs), Markdown, plain text

### 2. Smart Filtering
Include only relevant files for efficient token usage.

```bash
# Exclude patterns
npx repomix --ignore "*.test.ts,dist/**,node_modules/**"

# Include only specific paths
npx repomix --include "src/**/*.ts,src/**/*.tsx"
```

**Auto-excluded by default**: `node_modules`, `.git`, build artifacts, lock files

### 3. Token Optimization
Count tokens before feeding to LLM to avoid context overflow.

```bash
# Show token count without generating file
npx repomix --token-count
```

**Token targets by model**:
| Model | Context Window | Recommended Max |
|-------|---------------|-----------------|
| Claude 3.5 | 200K | 150K |
| GPT-4o | 128K | 100K |
| Gemini 1.5 Pro | 1M | 800K |

### 4. Security Scanning
Detect secrets and sensitive data before packing.

```bash
# Enable security check
npx repomix --security-check
```

**Detects**: API keys, passwords, tokens, private keys, connection strings

## Prerequisites

- Node.js 18+
- Git repository to pack

## Configuration

**`.repomixignore` file** (project root):
```
# Similar to .gitignore
*.env
*.env.local
secrets/
*.key
coverage/
```

**`repomix.config.json`**:
```json
{
  "output": {
    "format": "xml",
    "filePath": "repomix-output.xml"
  },
  "ignore": {
    "useGitignore": true,
    "customPatterns": ["*.test.ts", "*.spec.ts"]
  }
}
```

## Best Practices

**1. Always run security check first**
Never pack a repo without checking for leaked secrets. Add `.repomixignore` before first run.

**2. Target specific directories for large repos**
Full monorepo packs may exceed context windows. Pack `src/` or specific packages.

**3. Use XML format for LLM analysis**
XML format includes file metadata and is more parseable than markdown for LLMs.

## Common Use Cases

### Use Case 1: Codebase Documentation Generation
**Scenario**: Generate comprehensive documentation for undocumented repository.

**Workflow**:
1. `npx repomix --include "src/**" --token-count` — check size
2. `npx repomix --include "src/**"` — pack codebase
3. Feed XML output to Claude with prompt: "Generate comprehensive documentation"
4. Review and save to `docs/` directory

**Output**: Full codebase documentation in one pass.

### Use Case 2: Code Review for PR
**Scenario**: Review entire feature branch changes in context of full codebase.

**Workflow**:
1. Pack modified files: `npx repomix --include "src/features/payments/**"`
2. Include related files for context
3. Feed to LLM with specific review criteria
4. Get comprehensive review with cross-file analysis

**Output**: Detailed code review with architectural insights.

## Troubleshooting

**Issue**: Output file too large for LLM context
**Solution**: Use `--include` to scope to relevant directories. Check token count first.

**Issue**: Security check flags false positives
**Solution**: Add patterns to `.repomixignore`. Example tokens in tests should be `.env.example` style.

## Related Skills

- [Scout](/docs/marketing/skills/scout) - Fast codebase scouting
- [Research](/docs/marketing/skills/research) - Technical research workflows
- [MCP Builder](/docs/marketing/skills/mcp-builder) - Build integrations for discovered APIs

## Related Commands

- `/ckm:repomix` - Pack repository for analysis
- `/ckm:scout` - Quick codebase scouting
