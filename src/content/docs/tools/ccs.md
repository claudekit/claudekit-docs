---
title: "CCS - Claude Code Switch"
description: "Switch instantly between multiple Claude accounts and AI models. Avoid rate limits and optimize costs with smart delegation."
section: tools
category: tools
order: 2
published: true
---

# CCS - Claude Code Switch

**One command, zero downtime, multiple accounts**

Switch instantly between Claude, GLM, Kimi, and more AI models. No more hitting limits. Work stays seamless.

## The Problem

You're deep in implementation. Context is loaded. Solutions are forming. Then suddenly:

🔴 **"You've reached your usage limit."**

Flow broken. Context lost. Productivity plummets.

Session limits shouldn't break your focus state.

## The Solution

CCS enables you to run **multiple parallel workflows**, instead of sequential switching:

```bash
# Terminal 1: Main work (Company Account)
ccs work "implement authentication system"

# Terminal 2: Side tasks (Personal Account)
ccs personal "review PR #123"

# Terminal 3: Cost-optimized tasks (GLM - 81% cheaper)
ccs glm "add tests for all service files"
```

All running simultaneously. No context switching. No downtime.

## Installation

```bash
# Install globally
npm install -g @kaitranntt/ccs

# Verify installation
ccs --version
```

## Quick Start

### Basic Usage

```bash
ccs                    # Claude subscription (default)
ccs glm                # GLM (cost-optimized)
ccs kimi               # Kimi (thinking support)
```

### Delegation with `-p` flag

```bash
# Delegate task to GLM
ccs glm -p "fix linting errors in src/"

# Delegate to Kimi for analysis
ccs kimi -p "analyze project structure and document"

# Continue previous session
ccs glm:continue -p "run tests and fix errors"
```

### Multi-Account Setup

```bash
# Create account profiles
ccs auth create work
ccs auth create personal

# Run simultaneously in separate terminals
# Terminal 1 - Work
ccs work "implement feature"

# Terminal 2 - Personal (parallel)
ccs personal "review code"
```

## Core Features

### 1. Model Switching

Switch instantly between AI models:

```bash
ccs           # Claude (default)
ccs glm       # GLM-4.6 (cost-optimized)
ccs kimi      # Kimi (long-context)
ccs gemini    # Gemini 2.5 Pro (OAuth)
ccs codex     # GPT-5.1 Codex Max (OAuth)
```

### 2. Smart AI Delegation

Delegate tasks to cost-optimized models with `-p`:

```bash
# Simple task (GLM)
ccs glm -p "add tests for UserService"

# Long-context task (Kimi)
ccs kimi -p "analyze all files in src/ and document"

# Continue previous session
ccs glm:continue -p "run tests and fix errors"
```

### 3. Slash Commands Support

Use slash commands inside delegation sessions:

```bash
# Execute /cook command in GLM session
ccs glm -p "/cook create responsive landing page"

# Use ClaudeKit commands
ccs glm -p "/fix run all tests and fix errors"
```

### 4. Parallel Workflows

Run multiple sessions simultaneously:

```bash
# Terminal 1: Planning (Claude)
ccs "Plan REST API with authentication"

# Terminal 2: Implementation (GLM, cost-optimized)
ccs glm "Implement user authentication endpoints"

# Terminal 3: Analysis (Kimi)
ccs kimi "Design caching strategy with trade-off analysis"
```

## Configuration

Location: `~/.ccs/config.json`

### Auto-Generated Structure

```json
{
  "profiles": {
    "glm": "~/.ccs/glm.settings.json",
    "glmt": "~/.ccs/glmt.settings.json",
    "kimi": "~/.ccs/kimi.settings.json",
    "default": "~/.claude/settings.json"
  }
}
```

### Setting Up API Keys

Before using alternative models, update API keys:

**GLM:**
```bash
# Edit ~/.ccs/glm.settings.json
# Add your Z.AI Coding Plan API Key
```

**Kimi:**
```bash
# Edit ~/.ccs/kimi.settings.json
# Add your Kimi API key
```

### Customize Claude CLI Path

Update path to your custom directory:

```bash
# Unix/macOS
export CCS_CLAUDE_PATH="/path/to/claude"

# Windows
$env:CCS_CLAUDE_PATH = "D:\Tools\Claude\claude.exe"
```

## Usage Examples

### Basic Switching

```bash
# Use Claude (default)
ccs "implement user authentication"

# Use GLM (cost-optimized)
ccs glm "add tests for all controllers"

# Use Kimi (long-context)
ccs kimi "analyze entire project structure"
```

### Cost-Optimized Workflow

```bash
# Complex planning (use Claude)
ccs "Plan authentication system with OAuth and JWT"

# Simple implementation (delegate to GLM - 81% cheaper)
ccs glm -p "Implement user login endpoint"

# Testing (delegate to GLM)
ccs glm -p "Add unit tests for auth service"

# Review (use Claude)
ccs "Review authentication implementation"
```

### Continuing Sessions

```bash
# Start task
ccs glm -p "refactor auth.js to use async/await"

# Continue in next session
ccs glm:continue -p "also update examples in README"

# Continue again
ccs glm:continue -p "add error handling"
```

## ClaudeKit Integration

### Recommended Workflow

```bash
# 1. Planning with Claude
ccs "/plan add payment integration"

# 2. Implementation with GLM (cost-optimized)
ccs glm -p "/cook implement Stripe payment flow"

# 3. Testing with GLM
ccs glm -p "/fix run payment tests"

# 4. Review with Claude
ccs "/review check payment implementation"
```

### Cost-Optimization Strategy

**Use Claude for:**
- Complex planning (`/plan`)
- Architecture decisions
- Code review (`/review`)
- Creative problem-solving

**Use GLM for:**
- Simple implementation
- Running tests, fixing errors (`/fix`)
- Updating documentation
- Repetitive work

**Use Kimi for:**
- Long-context analysis
- Full codebase review
- Architecture documentation
- Multi-file refactoring

## Uninstallation

```bash
# Remove CCS
npm uninstall -g @kaitranntt/ccs

# Remove configuration (optional)
rm -rf ~/.ccs
```

## Resources

- **GitHub:** [kaitranntt/ccs](https://github.com/kaitranntt/ccs)
- **Documentation:** [Full Docs](https://github.com/kaitranntt/ccs#readme)
- **Issues:** [Report Bugs](https://github.com/kaitranntt/ccs/issues)
- **Troubleshooting:** [Guide](https://github.com/kaitranntt/ccs/blob/main/docs/en/troubleshooting.md)

## Next Steps

- [Installation Guide](/docs/getting-started/installation) - Set up ClaudeKit
- [Workflows](/docs/workflows/) - Learn ClaudeKit workflows
- [FAQ](/docs/support/troubleshooting) - Frequently asked questions

---

**Bottom line**: CCS transforms rate limits from blockers into opportunities for cost optimization and parallel operations. Stay in flow and reduce AI costs by up to 81%.

