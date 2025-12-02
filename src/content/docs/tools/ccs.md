---
title: "CCS - Claude Code Switch"
description: "Switch between multiple Claude accounts and AI models instantly. Avoid rate limits and optimize costs with intelligent delegation."
section: tools
category: tools
order: 2
published: true
---

# CCS - Claude Code Switch

**One command, zero downtime, multiple accounts**

Switch between Claude accounts, GLM, Kimi and more instantly. Stop hitting rate limits. Keep working continuously.

## The Problem

You're deep in implementation. Context loaded. Solution crystallizing. Then:

🔴 **"You've reached your usage limit."**

Momentum gone. Context lost. Productivity crater.

Session limits shouldn't kill your flow state.

## The Solution

CCS enables **parallel workflows** instead of sequential switching:

```bash
# Terminal 1: Main work (Work Account)
ccs work "implement authentication system"

# Terminal 2: Side task (Personal Account)
ccs personal "review PR #123"

# Terminal 3: Cost-optimized task (GLM - 81% cheaper)
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
ccs kimi               # Kimi (with thinking support)
```

### Delegation with -p Flag

```bash
# Delegate task to GLM
ccs glm -p "fix linting errors in src/"

# Delegate to Kimi for analysis
ccs kimi -p "analyze project structure and document"

# Continue previous session
ccs glm:continue -p "run the tests and fix failures"
```

### Multi-Account Setup

```bash
# Create account profiles
ccs auth create work
ccs auth create personal

# Run concurrently in separate terminals
# Terminal 1 - Work
ccs work "implement feature"

# Terminal 2 - Personal (concurrent)
ccs personal "review code"
```

## Core Features

### 1. Model Switching

Switch between AI models instantly:

```bash
ccs           # Claude (default)
ccs glm       # GLM-4.6 (cost-optimized)
ccs kimi      # Kimi (long-context)
ccs gemini    # Gemini 2.5 Pro (OAuth)
ccs codex     # GPT-5.1 Codex Max (OAuth)
```

### 2. AI-Powered Delegation

Delegate tasks to cost-optimized models with `-p` flag:

```bash
# Simple task (GLM)
ccs glm -p "add tests for UserService"

# Long-context task (Kimi)
ccs kimi -p "analyze all files in src/ and document architecture"

# Continue previous session
ccs glm:continue -p "run the tests and fix any failures"
```

### 3. Slash Command Support

Use slash commands inside delegated sessions:

```bash
# Execute /cook command in GLM session
ccs glm -p "/cook create responsive landing page"

# Use ClaudeKit commands
ccs glm -p "/fix:test run all tests and fix failures"
```

### 4. Parallel Workflows

Run multiple sessions simultaneously:

```bash
# Terminal 1: Planning (Claude)
ccs "Plan a REST API with authentication"

# Terminal 2: Execution (GLM, cost-optimized)
ccs glm "Implement the user authentication endpoints"

# Terminal 3: Analysis (Kimi)
ccs kimi "Design a caching strategy with trade-off analysis"
```

## Configuration

Location: `~/.ccs/config.json`

### Auto-Created Structure

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

### API Keys Setup

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

### Custom Claude CLI Path

If Claude is in a non-standard location:

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

# Simple execution (delegate to GLM - 81% cheaper)
ccs glm -p "Implement the user login endpoint"

# Testing (delegate to GLM)
ccs glm -p "Add unit tests for auth service"

# Review (use Claude)
ccs "Review the authentication implementation"
```

### Multi-Account Workflow

```bash
# Create profiles
ccs auth create client-a
ccs auth create client-b
ccs auth create personal

# Switch during work
ccs client-a "Morning: Client A work"
ccs client-b "Afternoon: Client B work"
ccs personal "Evening: Side project"
```

### Session Continuation

```bash
# Start a task
ccs glm -p "refactor auth.js to use async/await"

# Continue in next session
ccs glm:continue -p "also update the README examples"

# Continue again
ccs glm:continue -p "add error handling"
```

## Integration with ClaudeKit

### Recommended Workflow

```bash
# 1. Plan with Claude
ccs "/plan add payment integration"

# 2. Implement with GLM (cost-optimized)
ccs glm -p "/cook implement Stripe payment flow"

# 3. Test with GLM
ccs glm -p "/fix:test run payment tests"

# 4. Review with Claude
ccs "/review check payment implementation"
```

### Cost Optimization Strategy

**Use Claude for:**
- Complex planning (`/plan`)
- Architecture decisions
- Code review (`/review`)
- Creative problem solving

**Use GLM for:**
- Simple implementations
- Testing and bug fixes (`/fix:test`)
- Documentation updates
- Repetitive tasks

**Use Kimi for:**
- Long-context analysis
- Entire codebase reviews
- Architecture documentation
- Multi-file refactoring

## Advanced Features

### OAuth Authentication

Zero-config auth for supported models:

```bash
# Interactive OAuth (browser opens)
ccs gemini

# Authenticate only (save tokens)
ccs gemini --auth

# Headless mode (for SSH/servers)
ccs gemini --headless

# Logout (clear tokens)
ccs gemini --logout
```

### Help & Version

```bash
# Show version
ccs --version

# Show all commands
ccs --help
```

### Health Check

```bash
# Check CCS installation
ccs doctor

# Shows:
# - Binary status
# - Port availability
# - Configuration validity
```

## Troubleshooting

### OAuth Timeout

```bash
# If browser doesn't load in time
ccs gemini --auth --headless
# Get URL manually
```

### Port Conflict

```bash
# Check port availability
ccs doctor

# Kill process using port 8317
lsof -ti:8317 | xargs kill  # Unix
```

### Session Not Continuing

```bash
# Ensure you use :continue suffix
ccs glm:continue -p "next task"

# Check session ID in previous output
```

## Uninstall

```bash
# Remove CCS
npm uninstall -g @kaitranntt/ccs

# Remove config (optional)
rm -rf ~/.ccs
```

## Resources

- **GitHub:** [kaitranntt/ccs](https://github.com/kaitranntt/ccs)
- **Documentation:** [Full docs](https://github.com/kaitranntt/ccs#readme)
- **Issues:** [Report bugs](https://github.com/kaitranntt/ccs/issues)
- **Troubleshooting:** [Guide](https://github.com/kaitranntt/ccs/blob/main/docs/en/troubleshooting.md)

## Next Steps

- [Installation Guide](/docs/getting-started/installation) - Setup ClaudeKit
- [Workflows](/docs/workflows/) - Learn ClaudeKit workflows
- [FAQ](/docs/support/faq) - Common questions

---

**Key Takeaway:** CCS transforms rate limits from blockers into opportunities for cost optimization and parallel workflows. Use it to maintain flow state and reduce AI costs by 81%.

