---
title: "Introduction"
description: "What is ClaudeKit and how does it work? Learn the basics in 3 minutes"
section: getting-started
order: 1
published: true
---
# Introduction to ClaudeKit

**ClaudeKit** extends Claude Code with specialized agents, slash commands, and reusable skills.

## Tutorial Video

New to ClaudeKit? Watch this step-by-step tutorial covering CLI installation, setup with `ck` command, and demo building UI from screenshots.

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

ClaudeKit extends Claude Code with specialized toolkits for engineering and marketing. Instead of writing prompts from scratch, you call workflows optimized for speed and quality.

ClaudeKit is powered by **AgentKit** — a multi-kit framework that ships skills, agents, and workflows as versioned releases. Skills install to `~/.claude/skills/` via the `ck` CLI and are invoked with `/ck:skill-name` inside Claude Code.

### Two Powerful Kits

**Engineer Kit** — Development & automation toolkit:
- **Agents**: Specialized AI assistants (planner, researcher, tester, debugger, code-reviewer)
- **Skills**: `/ck:cook`, `/ck:fix`, `/ck:plan`, `/ck:test`, `/ck:brainstorm` and 75+ more
- **Knowledge modules**: Next.js, PostgreSQL, Docker, DevOps, better-auth, and more

**Marketing Kit** — Marketing & content automation toolkit:
- **Agents**: Content creators (copywriter, designer, campaign-manager, seo-specialist)
- **Skills**: `/ckm:social`, `/ckm:email`, `/ckm:brand`, `/ckm:seo`, `/ckm:campaign` and 55+ more
- **Asset Management**: Centralized hub for copy, storyboards, slides, brand guidelines

## How It Works

**Engineer Kit Example:**
1. Type `/ck:cook "add user authentication"`
2. System launches planner → researcher → developer → tester agents
3. Agents collaborate, write code, run tests, commit changes
4. You review results, provide feedback, iterate

**Marketing Kit Example:**
1. Type `/ckm:social "launch announcement for our new API"`
2. System applies your brand voice and platform guidelines
3. Content variants generated for LinkedIn, X, and newsletter
4. Assets saved to content hub for reuse

## Why Use ClaudeKit?

**For Engineers:**
- **Speed**: Structured workflows replace repetitive prompting for feature development
- **Quality**: Battle-tested skill prompts reduce bugs and technical debt
- **Consistency**: Same development patterns across your entire team

**For Marketers:**
- **Brand Consistency**: Centralized asset management ensures unified messaging
- **Context Awareness**: Content based on actual product and codebase
- **Production Ready**: Video storyboards, `.pptx` slides, multi-channel copy

## Choose Your Kit

Use the kit switcher in the header to explore:

**Engineer Kit** → Start at [Engineer Skills](/docs/engineer/skills)
- Feature development workflows
- Testing and debugging agents
- Infrastructure automation

**Marketing Kit** → Start at [Marketing Docs](/docs/marketing/)
- Content creation workflows
- Video production pipelines
- Campaign orchestration

## Next Steps

1. **[Install ClaudeKit](/docs/getting-started/installation)** — Set up the `ck` CLI in 5 minutes
2. **[AgentKit Architecture](/docs/getting-started/agentkit-overview)** — Understand kits, skills, and agents
3. **[Quick Start](/docs/getting-started/quick-start)** — Build your first feature or campaign

## Explore Workflows

**Engineer Workflows**:
- [New Project Setup](/docs/workflows/new-project) - Bootstrap project with best practices
- [Feature Development](/docs/workflows/adding-feature) - Implement end-to-end features
- [Code Review](/docs/workflows) - Automated code quality checks

**Marketing Workflows**:
- [Content Creation](/docs/workflows/content-workflow) - Blog posts, copy, social media
- [Video Production](/docs/workflows/dashboard-workflow) - Script to storyboard to video
- [Campaign Management](/docs/workflows/campaign-workflow) - Multi-channel campaigns
