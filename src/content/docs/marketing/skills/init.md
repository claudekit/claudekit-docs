---
title: "ckm:init"
description: "Initialize marketing project with full setup"
section: marketing
kit: marketing
category: skills
order: 38
---

# Init

> Bootstrap a new marketing project with directory structure, documentation, and configuration in one command.

## What This Skill Does

The Init skill sets up a complete marketing project from scratch. It creates the standard directory structure, initializes documentation templates, configures environment variables, and installs required dependencies — everything needed to start executing marketing campaigns without manual setup.

Init is designed to reduce the time from "new project" to "first campaign" from hours to minutes. It enforces consistent project structure across all marketing projects, making it easier for team members to navigate any project with zero onboarding friction.

The setup is opinionated but configurable: choose which modules to enable (email, ads, SEO, social, content), and Init generates only the relevant scaffolding. Skip what you don't need, add what you do.

## Quick Start

```
/ckm:init
```

Runs the interactive setup wizard to configure your marketing project.

Or with flags for non-interactive setup:
```
/ckm:init --name "Product Launch 2026" --modules email,seo,social,ads
```

## Key Features

- Interactive setup wizard with configuration questions
- Standard directory structure: `docs/`, `assets/`, `campaigns/`, `content/`, `scripts/`
- Documentation templates: brand guidelines, campaign brief, persona profiles
- Environment variable scaffolding (`.env.example`)
- Module-based setup — only install what you need
- Git-ready: `.gitignore` configured for sensitive files
- Dependency installation for selected modules

## Usage Examples

**Full setup with wizard**:
```
/ckm:init
# Walks through: project name, industry, modules, team size, primary goals
```

**Quick non-interactive setup**:
```
/ckm:init --name "SaaS Launch" --modules email,seo,content --skip-deps
```

**Add module to existing project**:
```
/ckm:init --add-module ads
# Adds ads management structure to an existing project
```

## Related

- [ckm:docs](/docs/marketing/skills/docs) - Manage docs after initialization
- [ckm:brand](/docs/marketing/skills/brand) - Configure brand guidelines post-init
- [ckm:campaign](/docs/marketing/skills/campaign) - Start your first campaign after init
