---
title: "Documentation Reference"
description: "Complete reference for ClaudeKit agents, commands, skills, and configuration"
section: docs
order: 0
published: true
---

# Documentation Reference

Complete reference documentation for ClaudeKit's agents, commands, skills, and configuration options.

## Quick Reference

### Agents
[**Agents Overview**](./agents/) - Meet your AI development team
- [Planner](./agents/planner.md) - Creates implementation plans
- [Researcher](./agents/researcher.md) - Analyzes codebases and best practices
- [Tester](./agents/tester.md) - Writes and runs tests
- [Debugger](./agents/debugger.md) - Investigates bugs and issues
- [Code Reviewer](./agents/code-reviewer.md) - Reviews code quality and security

### Commands
[**Commands Reference**](./commands/) - All available slash commands
- **Core**: `/cook`, `/plan`, `/bootstrap`, `/ask`, `/scout`
- **Fix**: `/fix`, `/fix:ci`, `/fix:hard`, `/fix:types`
- **Design**: `/design:good`, `/design:fast`, `/design:3d`
- **Git**: `/git:cm`, `/git:cp`, `/git:pr`
- **Docs**: `/docs:init`, `/docs:update`, `/docs:summarize`

### Skills
[**Skills Library**](./skills/) - Built-in knowledge modules
- **Frontend**: Next.js, Tailwind, shadcn/ui
- **Backend**: PostgreSQL, Docker
- **AI**: Gemini Vision, Canvas Design
- **Auth**: Better Auth
- **E-commerce**: Shopify
- **Tools**: FFmpeg, ImageMagick, MCP Builder

### Configuration
[**Configuration Guide**](./configuration/) - Set up and customize ClaudeKit
- [CLAUDE.md Reference](./configuration/claude-md-reference.md) - Main configuration file
- [Project Structure](./configuration/project-structure.md) - Directory organization
- [Environment Setup](./configuration/environment-setup.md) - Development environment

## Getting Started

If you're new to ClaudeKit, start here:
1. [Getting Started Guide](../getting-started/) - Learn the basics
2. [Installation](../getting-started/installation.md) - Set up ClaudeKit
3. [Quick Start](../getting-started/quick-start.md) - Build your first feature

## Common Tasks

### Feature Development
```bash
/plan "add user authentication with OAuth"
# Creates detailed implementation plan

/cook
# Implements the feature using the plan

/fix:test
# Fixes any test failures

/git:cm
# Commits changes with conventional format
```

### Bug Fixing
```bash
/debug "login button not working"
# Investigates the issue and proposes fixes

/fix
# Implements the fix and tests it

/git:cp
# Commits and pushes changes
```

### Documentation
```bash
/docs:init
# Creates initial documentation structure

/docs:update
# Updates documentation to match code changes
```

## Advanced Topics

- [Workflows](../workflows/) - Task-oriented guides
- [Use Cases](./use-cases/) - Real-world examples
- [Troubleshooting](../troubleshooting/) - Common issues and solutions
- [FAQ](../support/faq/) - Frequently asked questions

## Need Help?

- [Support Overview](../support/) - Get help when stuck
- [Discord Community](https://discord.gg/claudekit) - Chat with other users
- [GitHub Issues](https://github.com/claudekit/claudekit/issues) - Report bugs and request features