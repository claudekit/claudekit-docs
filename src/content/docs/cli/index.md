---
title: CLI overview
description: ClaudeKit CLI for project management, templates, and version control
category: cli
order: 0
published: true
keywords: [cli, commands, project management, templates]
lastUpdated: 2025-10-18
difficulty: beginner
estimatedTime: "5 minutes"
relatedPages:
  - /docs/cli/installation
  - /docs/cli/new
  - /docs/cli/update
---

# CLI overview

ClaudeKit CLI provides intelligent project scaffolding, version management, and template system for AI-powered development.

## What is ClaudeKit CLI?

The command-line interface handles:
- **Project initialization** - Create new projects with ClaudeKit configuration
- **Smart file merging** - Update projects without breaking custom changes
- **Version management** - Switch between ClaudeKit versions seamlessly
- **Template system** - Choose from React, Next.js, Astro, Fastify, and more
- **Multi-tier authentication** - Secure access via GitHub CLI

ClaudeKit CLI works alongside ClaudeKit Engineer (the 14-agent system) to provide complete development toolkit.

## Core commands

### ck new

Create new project with ClaudeKit configuration:

```bash
ck new my-app
```

**What it does:**
- Initializes project structure
- Sets up `.claude/` configuration directory
- Creates agent templates (14 specialized agents)
- Configures workflow examples
- Installs dependencies

**Options:**

```bash
ck new my-app --template react    # Use React template
ck new my-app --template nextjs   # Use Next.js template
ck new my-app --no-install        # Skip dependency installation
ck new my-app --git              # Initialize git repository
```

[Learn more about `ck new`](/docs/cli/new)

### ck update

Update existing project to latest ClaudeKit version:

```bash
ck update
```

**What it does:**
- Detects current ClaudeKit version
- Compares with latest version
- Smart merges configuration files
- Preserves your custom changes
- Updates agent templates

**Smart merging:**
- Keeps your customizations
- Adds new features
- Updates deprecated patterns
- Resolves conflicts intelligently

**Options:**

```bash
ck update --check           # Check for updates without applying
ck update --version 1.2.0   # Update to specific version
ck update --dry-run         # Preview changes without applying
ck update --force           # Force update (overwrites conflicts)
```

[Learn more about `ck update`](/docs/cli/update)

### ck versions

Manage ClaudeKit versions across projects:

```bash
ck versions
```

**What it does:**
- Lists all available ClaudeKit versions
- Shows currently installed version
- Displays version compatibility
- Enables version switching

**Options:**

```bash
ck versions                 # List all versions
ck versions --current       # Show current version
ck versions use 1.2.0       # Switch to specific version
ck versions latest          # Switch to latest version
```

[Learn more about `ck versions`](/docs/cli/versions)

## Additional commands

### ck init

Initialize ClaudeKit in existing project:

```bash
ck init
```

**Use case:** Add ClaudeKit to project that wasn't created with `ck new`

**What it does:**
- Creates `.claude/` directory
- Sets up configuration
- Adds agent templates
- Preserves existing code

### ck config

Manage ClaudeKit configuration:

```bash
ck config list                              # View all settings
ck config set model claude-3-5-sonnet       # Set model
ck config set temperature 0.7               # Set temperature
ck config get model                         # Get specific value
ck config reset                             # Reset to defaults
```

### ck template

Manage project templates:

```bash
ck template list              # List available templates
ck template show react        # Show template details
ck template create my-tmpl    # Create custom template
```

## Authentication

ClaudeKit CLI uses GitHub CLI for secure authentication:

```bash
# Login
gh auth login

# Check status
gh auth status

# Logout
gh auth logout
```

**Why GitHub authentication?**
- Secure OAuth 2.1 flow
- Scoped, revocable credentials
- No stored passwords
- Just-in-time access
- Full audit trail

[Learn more about authentication](/docs/cli/authentication)

## Configuration

ClaudeKit CLI stores configuration at two levels:

### Global configuration

Location: `~/.claudekit/config.json`

```json
{
  "defaultModel": "claude-3-5-sonnet-20241022",
  "temperature": 0.7,
  "maxTokens": 4096,
  "telemetry": true,
  "updateCheck": true
}
```

Manage global config:

```bash
ck config set --global model claude-3-5-sonnet
```

### Project configuration

Location: `./.claude/config.json` (in project root)

```json
{
  "version": "1.2.0",
  "agents": {
    "planner": {
      "enabled": true,
      "model": "claude-3-5-sonnet-20241022"
    },
    "coder": {
      "enabled": true,
      "model": "claude-3-5-sonnet-20241022"
    }
  },
  "workflows": {
    "autoReview": true,
    "autoTest": true,
    "autoCommit": false
  }
}
```

Project config overrides global config.

[Learn more about configuration](/docs/cli/configuration)

## Templates

ClaudeKit CLI provides templates for common project types:

**Available templates:**

| Template | Description | Tech Stack |
|----------|-------------|------------|
| `blank` | Empty project with ClaudeKit config | None |
| `react` | React application | React 18 + TypeScript + Vite |
| `nextjs` | Next.js application | Next.js 14 + App Router + TypeScript |
| `astro` | Astro static site | Astro v4 + React + Tailwind |
| `fastify` | Fastify API server | Fastify 4 + TypeScript |
| `express` | Express.js API | Express 4 + TypeScript |
| `nuxt` | Nuxt application | Nuxt 3 + Vue 3 + TypeScript |
| `svelte` | SvelteKit application | SvelteKit + TypeScript |

Use template:

```bash
ck new my-app --template react
```

[Learn more about templates](/docs/cli/templates)

## Version management

ClaudeKit uses semantic versioning (`MAJOR.MINOR.PATCH`):

```
1.2.3
│ │ └─ Patch: Bug fixes, no breaking changes
│ └─── Minor: New features, backward compatible
└───── Major: Breaking changes
```

**Compatibility:**
- `1.x.x` → `1.y.z`: Safe to update
- `1.x.x` → `2.0.0`: Review breaking changes

Check version compatibility:

```bash
ck versions --compatible
```

**Output:**

```
Current version: 1.2.0
Latest compatible: 1.3.5
Latest version: 2.0.0 (breaking changes)

Changelog: https://github.com/claudekit/claudekit-cli/releases
```

[Learn more about versions](/docs/cli/versions)

## Command reference

### Quick reference

| Command | Description |
|---------|-------------|
| `ck new [name]` | Create new project |
| `ck init` | Initialize ClaudeKit in existing project |
| `ck update` | Update ClaudeKit configuration |
| `ck versions` | Manage versions |
| `ck config` | Manage configuration |
| `ck template` | Manage templates |
| `ck --version` | Show CLI version |
| `ck --help` | Show help |

### Global flags

All commands support these flags:

| Flag | Description |
|------|-------------|
| `--verbose` | Enable verbose logging |
| `--debug` | Enable debug mode |
| `--no-color` | Disable colored output |
| `--quiet` | Suppress non-error output |
| `--help` | Show command help |

Example:

```bash
ck new my-app --verbose --debug
```

## Workflow examples

### Create React project

```bash
# Create project
ck new my-react-app --template react

# Navigate to project
cd my-react-app

# Plan a feature
/plan [add user authentication]

# Implement
/cook [implement auth]

# Commit
/git:cm
```

### Update existing project

```bash
# Check for updates
ck update --check

# Preview changes
ck update --dry-run

# Apply update
ck update

# Verify
ck versions --current
```

### Switch versions

```bash
# List available versions
ck versions

# Switch to specific version
ck versions use 1.2.0

# Verify switch
ck versions --current
```

## Best practices

**Project initialization:**
- Choose appropriate template for your stack
- Initialize git repository with `--git` flag
- Review generated `.claude/config.json`
- Customize agent settings for your workflow

**Version updates:**
- Always run `ck update --check` first
- Use `--dry-run` to preview changes
- Review changelog before major updates
- Test after updating

**Configuration management:**
- Keep project config in version control
- Document custom settings in README
- Use global config for personal preferences
- Don't commit API keys or tokens

**Template usage:**
- Start with official templates
- Create custom templates for team workflows
- Document template customizations
- Share templates via GitHub

## Common workflows

### Onboarding new team member

```bash
# Clone repository
git clone https://github.com/your-org/project.git
cd project

# Install ClaudeKit CLI
npm install -g claudekit-cli

# Authenticate
gh auth login

# Install project dependencies
npm install

# Verify setup
ck config list
```

### Migrating existing project

```bash
# Navigate to project
cd existing-project

# Initialize ClaudeKit
ck init

# Choose template (or skip)
? Select template: blank

# Review configuration
cat .claude/config.json

# Customize as needed
ck config set model claude-3-5-sonnet
```

### Creating custom template

```bash
# Create from existing project
ck template create my-template --from ./my-project

# Or create from scratch
ck template create my-template

# Edit template files
cd ~/.claudekit/templates/my-template

# Use template
ck new new-project --template my-template
```

## Troubleshooting

### Command not found

**Cause:** CLI not installed or not in PATH

**Solution:**
```bash
npm install -g claudekit-cli
```

### Permission errors

**Cause:** Insufficient permissions for global install

**Solution:**
```bash
# Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

### Authentication fails

**Cause:** GitHub CLI not authenticated

**Solution:**
```bash
gh auth login
gh auth status
```

### Update conflicts

**Cause:** Local changes conflict with update

**Solution:**
```bash
# Preview conflicts
ck update --dry-run

# Apply update (choose conflict resolution)
ck update

# Or force update (overwrites local changes)
ck update --force
```

## Next steps

**Get started:**
- [Create your first project](/docs/getting-started/quick-start)
- [Learn about agent system](/docs/agents/)
- [Explore commands](/docs/commands/)

**Deep dive:**
- [Configuration guide](/docs/cli/configuration)
- [Template system](/docs/cli/templates)
- [Authentication](/docs/cli/authentication)

**Advanced:**
- [Custom templates](/docs/guides/custom-templates)
- [Workflow automation](/docs/guides/workflows)
- [Team setup](/docs/guides/team-collaboration)

---

**Ready to start?** Create your first project with `ck new my-app`
