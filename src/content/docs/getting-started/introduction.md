---
title: "Introduction"
description: "What is ClaudeKit and how does it work? Learn the basics in 3 minutes"
section: getting-started
order: 1
published: true
---

# Introduction to ClaudeKit

**ClaudeKit** extends Claude Code with specialized agents, slash commands, and reusable skills.

## What is ClaudeKit?

ClaudeKit transforms Claude Code from a general AI assistant into a focused engineering toolkit. Instead of writing prompts from scratch, you invoke battle-tested workflows optimized for speed and quality.

**Core Components**:
- **Agents**: Specialized AI assistants (planner, researcher, tester, debugger)
- **Commands**: Slash commands for common tasks (`/cook`, `/fix`, `/plan`, `/bootstrap`)
- **Skills**: Reusable knowledge modules (Next.js, Better Auth, Docker)

## How It Works

1. **Invoke Command**: Type `/cook "add user authentication"`
2. **Agent Activates**: System spawns planner → researcher → developer → tester
3. **Workflow Executes**: Agents collaborate, write code, run tests, commit changes
4. **You Review**: Check output, provide feedback, iterate

## Why Use ClaudeKit?

- **Speed**: 10x faster than manual prompting
- **Quality**: Battle-tested workflows reduce bugs and rework
- **Consistency**: Same approach across team members
- **Learning**: See how experts structure engineering tasks

## Quick Example

```bash
# Without ClaudeKit
You: "I need to add authentication to my Next.js app"
Claude: "Sure! What auth library? What features?"
[20+ message back-and-forth]

# With ClaudeKit
You: /cook "add authentication with Better Auth"
ClaudeKit:
  ✓ Planner creates implementation plan
  ✓ Researcher analyzes codebase
  ✓ Developer writes code following best practices
  ✓ Tester runs tests and fixes issues
  ✓ Git commits changes
[Done in 1 command]
```

## Next Steps

1. **[Understand Concepts](./concepts)** - How agents, commands, and skills work
2. **[Install ClaudeKit](./installation)** - Set up the CLI
3. **[Quick Start](./quick-start)** - Build your first feature in 15 minutes

## Want to Learn More?

- [Why ClaudeKit](./why-claudekit) - Comparisons, ROI calculations, pricing
- [Use Cases](../workflows) - Real-world workflows
- [FAQ](../support/faq/) - Common questions answered
