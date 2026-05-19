---
title: "AgentKit Architecture"
description: "How AgentKit organizes ClaudeKit into engineer, marketing, and core kits — and how skills install to your machine"
section: getting-started
category: getting-started
order: 3
published: true
---

# AgentKit Architecture

ClaudeKit is powered by **AgentKit** — a multi-kit system that organizes skills, agents, and workflows into composable toolkits.

## What Is AgentKit?

AgentKit is the underlying framework that ships, versions, and installs ClaudeKit skills. It replaced the older `claudekit-engineer` monorepo structure in early 2026.

**Key change:** Skills no longer live in a single `claudekit-engineer/.claude/` directory. They are organized into three kits in the `agentkit` repository, each with its own release cycle.

## The Three Kits

```
agentkit/
└── kits/
    ├── engineer/    # Development & automation skills
    ├── marketing/   # Content, campaigns, brand skills
    └── core/        # Shared skills used by both kits
```

### Engineer Kit (`kits/engineer/`)

Skills for software development workflows:
- Feature implementation (`cook`, `fix`, `brainstorm`)
- Code quality (`test`, `code-review`, `security-scan`)
- Developer tooling (`worktree`, `ship`, `journal`, `retro`)
- AI & automation (`agent-browser`, `agentize`, `gkg`, `graphify`)

### Marketing Kit (`kits/marketing/`)

Skills for content and campaign management:
- Content creation (`social`, `email`, `video`, `slides`)
- Brand & design (`brand`, `logo-design`, `banner-design`)
- Analytics & strategy (`analytics`, `seo`, `competitor`, `pricing-strategy`)
- Campaign management (`campaign`, `launch-strategy`, `paid-ads`)

### Core Kit (`kits/core/`)

Shared skills available to both engineer and marketing kits:
- Implementation (`cook`, `fix`, `scout`)
- Language & frameworks (`frontend-design`, `backend-development`, `databases`)
- Utilities (`ai-multimodal`, `ai-artist`, `media-processing`, `document-skills`)
- Auth & payments (`better-auth`, `payment-integration`)

## How Skills Install to Your Machine

When you run `ck init -g --kit engineer`, the CLI:

1. Downloads the selected kit release from GitHub
2. Installs skills to `~/.claude/skills/` (global) or `./.claude/skills/` (local)
3. Installs agents to `~/.claude/agents/`
4. Copies configuration files (`.ck.json`, `.ckignore`, `settings.json`)

**After installation, your file layout:**

```
~/.claude/
├── skills/
│   ├── cook/            # From kits/core/skills/cook/
│   │   └── SKILL.md
│   ├── brainstorm/      # From kits/engineer/skills/brainstorm/
│   │   └── SKILL.md
│   ├── frontend-design/ # From kits/core/skills/frontend-design/
│   │   └── SKILL.md
│   └── ...              # All skills from your selected kit
├── agents/
│   ├── planner.md
│   ├── tester.md
│   └── ...
├── .ck.json             # ClaudeKit configuration
├── .ckignore            # Paths excluded from LLM context
└── settings.json        # Claude Code hook settings
```

The installed `~/.claude/skills/` directory is what Claude Code reads at runtime. The `agentkit/kits/` paths are the **source** — not what your machine uses directly.

## Skill Invocation

Skills are invoked with `/ck:skill-name` syntax in Claude Code:

```
/ck:cook implement user authentication
/ck:fix --auto
/ck:brainstorm should we use REST or GraphQL?
```

The prefix `ck:` routes to ClaudeKit skills. Skills in the marketing kit use `ckm:` prefix:

```
/ckm:social write a LinkedIn post about our launch
/ckm:brand update our color palette
```

## Selecting a Kit

When running `ck init`, you choose which kit to install:

```bash
# Engineer kit (development workflows)
ck init -g --kit engineer

# Marketing kit (content & campaigns)
ck init -g --kit marketing

# Both kits (full installation)
ck init -g --kit engineer
ck init -g --kit marketing
```

Kits can coexist — each installs skills to the same `~/.claude/skills/` directory without conflict.

## Updating Skills

To pull the latest skill updates from AgentKit:

```bash
# Update engineer kit to latest release
ck init -g --kit engineer

# Update to a specific version
ck init -g --kit engineer --version v3.1.0
```

The `ck init` command is idempotent — safe to run multiple times. It preserves any customizations you've made to skills using smart merge.

## Source Repository

The AgentKit source is at [github.com/bestagentkits/agentkit](https://github.com/bestagentkits/agentkit).

Individual skill source files (SKILL.md) live at:
```
agentkit/kits/<kit>/skills/<skill-name>/SKILL.md
```

## Related

- [Installation](/docs/getting-started/installation) — Install ClaudeKit with the CLI
- [Quick Start](/docs/getting-started/quick-start) — First feature in 5 minutes
- [Skills Overview](/docs/engineer/skills) — All available engineer skills
- [Migration Guide](/docs/getting-started/agentkit-migration) — Upgrading from pre-AgentKit
