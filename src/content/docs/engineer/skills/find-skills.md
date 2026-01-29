---
title: "Find Skills"
description: "Discover and install agent skills from the open skills ecosystem"
section: engineer
kit: engineer
category: skills
order: 26
---

Your gateway to the open agent skills ecosystem. Search, discover, and install specialized capabilities for any domain.

## What This Skill Does

The Find Skills skill connects you to the Skills CLI package manager, which indexes hundreds of community-contributed skills for design, testing, deployment, and more. Instead of building everything from scratch, discover existing skills that extend ClaudeKit's capabilities.

Think of it as npm for AI agent skills—search by keyword, preview what each skill does, and install with a single command.

## When to Activate

This skill activates when you:
- Ask "how do I do X" where X might have an existing skill
- Say "find a skill for X" or "is there a skill for X"
- Ask "can you do X" for specialized capabilities
- Express interest in extending agent capabilities
- Want to search for tools, templates, or workflows
- Mention wishing for help with specific domains

## Core Capabilities

- Search skills interactively or by keyword
- Install skills from GitHub or other sources
- Check for skill updates
- Update all installed skills
- Browse the skills catalog at https://skills.sh/

## Usage

Activate by asking about available skills or capabilities.

## Example Prompts

- "How do I make my React app faster?"
- "Find a skill for PR reviews"
- "Is there a skill for creating changelogs?"
- "Can you help with accessibility testing?"
- "What skills are available for Next.js development?"

## Quick Commands

```bash
# Search for skills
npx skills find [query]

# Install a skill
npx skills add <package>

# Check for updates
npx skills check

# Update all skills
npx skills update
```

## Common Skill Categories

| Category | Example Queries |
|----------|----------------|
| Web Development | react, nextjs, typescript, css, tailwind |
| Testing | testing, jest, playwright, e2e |
| DevOps | deploy, docker, kubernetes, ci-cd |
| Documentation | docs, readme, changelog, api-docs |
| Code Quality | review, lint, refactor, best-practices |
| Design | ui, ux, design-system, accessibility |
| Productivity | workflow, automation, git |

## How It Works

1. You ask about a capability
2. ClaudeKit searches the skills ecosystem
3. Presents relevant skills with install commands
4. Offers to install for you with `-g -y` flags
5. Skill becomes available immediately

## When No Skills Are Found

If no relevant skills exist, ClaudeKit will:
1. Acknowledge no existing skill was found
2. Offer to help directly using general capabilities
3. Suggest creating your own skill with `npx skills init`

## Related Resources

- Browse skills: https://skills.sh/
- Popular sources: `vercel-labs/agent-skills`, `ComposioHQ/awesome-claude-skills`
