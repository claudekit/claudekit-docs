---
title: "Core Concepts"
description: "Understand how ClaudeKit's agents, commands, and skills architecture works"
section: getting-started
order: 2
published: true
---
# Core Concepts

ClaudeKit's power comes from three interconnected systems: **Agents**, **Commands**, and **Skills**.

## Agents

Specialized AI assistants with focused expertise.

**Available Agents**:
- **Planner**: Creates implementation plans with phases, tasks, success criteria
- **Researcher**: Analyzes codebases, best practices, technical decisions
- **Tester**: Writes and runs tests, analyzes failures, fixes issues
- **Debugger**: Investigates bugs, traces root causes, proposes fixes
- **Code Reviewer**: Reviews code quality, security, performance
- **Docs Manager**: Creates and maintains documentation
- **UI/UX Designer**: Designs interfaces following aesthetic principles
- **Copywriter**: Writes marketing copy, product descriptions, content

**How Agents Work**:
1. You invoke a command (e.g., `/ck:cook "add feature"`)
2. Command spawns relevant agents in sequence or parallel
3. Agents collaborate via shared context (plans, code, test results)
4. Output consolidated and presented to you

## Skills & Commands

Slash commands and skills that trigger agent workflows.

**Note:** Skills like `/ck:git`, `/ck:fix`, `/ck:cook` were migrated from commands. Slash syntax unchanged.

**Categories**:
- **Core**: `/ck:cook`, `/ck:plan`, `/ck:bootstrap`, `/ck:ask`, `/ck:scout`
- **Fix**: `/ck:fix`, `/ck:fix`, `/ck:fix`, `/ck:fix`
- **Design**: `ai-artist` skill, `ai-multimodal` skill, `frontend-design` skill
- **Git**: `/ck:git cm`, `/ck:git cp`, `/ck:git pr`
- **Docs**: `/ck:docs:init`, `/ck:docs:update`, `/ck:docs:summarize`
- **Content**: Use `copywriting` skill (quality, fast, CRO workflows)
- **Plan**: `/ck:plan:ci`, `/ck:plan:two`, `/ck:plan:hard`
- **Integrate**: `/integrate:polar`, `/integrate:sepay`
- **Skill**: Use `skill-creator` skill

**Example Workflow**:
```bash
/ck:plan "add payment processing with Stripe"
# → Planner agent creates detailed plan

/ck:cook
# → Reads plan, spawns developer + tester agents, implements feature

/ck:fix
# → Debugger analyzes any test failures, fixes issues

/ck:git cm
# → Git manager stages, commits, pushes changes
```

## Skills

Reusable knowledge modules injected into agent context.

**Available Skills**:
- **Frontend**: Next.js, Tailwind, shadcn/ui
- **Backend**: PostgreSQL, Docker
- **AI**: Gemini Vision, Canvas Design
- **Auth**: Better Auth
- **Ecommerce**: Shopify
- **Tools**: FFmpeg, ImageMagick, MCP Builder

**How Skills Work**:
1. Skill files stored in `.claude/skills/`
2. Auto-activated based on codebase detection (e.g., detects `next.config.js` → activates Next.js skill)
3. Skill provides agent with best practices, examples, gotchas
4. Agent makes better decisions (uses right patterns, avoids common mistakes)

**Creating Custom Skills**:
```bash
"Create a new skill for FastAPI best practices"
# Use skill-creator skill → Creates new skill with structure, references, examples
```

## How They Work Together

**Example: Adding Authentication**

```bash
You: /ck:cook "add authentication with Better Auth"

System:
1. Detects Better Auth skill → injects into context
2. Spawns Planner agent → creates implementation plan
3. Planner references Better Auth skill → uses correct setup pattern
4. Spawns Developer agent → writes code following skill guidelines
5. Spawns Tester agent → writes tests based on skill examples
6. Output: Fully implemented, tested authentication
```

## CLAUDE.md Configuration

All agent behaviors, skills, and workflows configured in `.claude/CLAUDE.md`:

```markdown
# CLAUDE.md
## Agents
- planner: Creates implementation plans
- researcher: Analyzes technical decisions

## Skills
- better-auth: Authentication framework patterns
- nextjs: Next.js App Router best practices

## Workflows
- /ck:plan → /clear → describe task: Plan → cook skill auto-implements
- fix skill: Debug → Fix → Test → Commit
```

## Next Steps

- **[Installation](/docs/getting-started/installation)** - Install ClaudeKit
- **[Quick Start](/docs/getting-started/quick-start)** - Try your first command
- **[Skills Reference](/docs/engineer/skills)** - Explore all skills
- **[Agents Reference](/docs/engineer/agents)** - Learn about each agent