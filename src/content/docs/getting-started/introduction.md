---
title: "Introduction"
description: "What is ClaudeKit and how does it work? Learn the basics in 3 minutes"
section: getting-started
order: 1
published: true
---

# Introduction to ClaudeKit

**ClaudeKit** extends Claude Code with specialized agents, slash commands, and reusable skills.

## Video Walkthrough

New to ClaudeKit? Watch this step-by-step walkthrough covering CLI installation, setup with `ck` commands, and a demo building UI from a screenshot.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 0.75rem; border: 1px solid var(--color-border); margin-bottom: 1rem;">
  <iframe
    src="https://www.youtube.com/embed/F_E0GIi_kVY"
    title="ClaudeKit Complete Walkthrough"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

*More tutorials: [@goonnguyen](https://www.youtube.com/@goonnguyen) | X: [@goon_nguyen](https://x.com/goon_nguyen)*

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
