---
title: ck new
description: Create new ClaudeKit project with intelligent scaffolding and templates
category: cli
order: 2
published: true
keywords: [ck new, create project, templates, scaffolding]
lastUpdated: 2025-10-18
difficulty: beginner
estimatedTime: "3 minutes"
prerequisites:
  - /docs/cli/installation
relatedPages:
  - /docs/cli/templates
  - /docs/getting-started/quick-start
---

# ck new

Create new ClaudeKit project with intelligent scaffolding, agent configuration, and your choice of templates.

## Synopsis

```bash
ck new <project-name> [options]
```

## Description

The `ck new` command creates a new project with:
- ClaudeKit configuration (`.claude/` directory)
- 14 specialized agent templates
- Workflow examples and documentation structure
- Optional framework templates (React, Next.js, Astro, etc.)
- Git initialization and dependency installation

## Arguments

### project-name

**Required.** Name of the project directory to create.

```bash
ck new my-app
```

**Naming rules:**
- Lowercase letters, numbers, hyphens, underscores
- No spaces or special characters
- Must start with letter or number
- Max 214 characters (npm package name limit)

**Valid names:**
- `my-app` ✓
- `my_app` ✓
- `myapp123` ✓
- `my-awesome-project` ✓

**Invalid names:**
- `My App` ✗ (spaces)
- `-myapp` ✗ (starts with hyphen)
- `my@app` ✗ (special character)

## Options

### --template, -t

Choose project template. Defaults to interactive prompt if not specified.

```bash
ck new my-app --template react
ck new my-app -t nextjs
```

**Available templates:**
- `blank` - Empty project with ClaudeKit configuration only
- `react` - React 18 + TypeScript + Vite
- `nextjs` - Next.js 14 with App Router
- `astro` - Astro v4 + React + Tailwind CSS
- `fastify` - Fastify 4 API server + TypeScript
- `express` - Express.js 4 API + TypeScript
- `nuxt` - Nuxt 3 + Vue 3 + TypeScript
- `svelte` - SvelteKit + TypeScript

[See all templates](/docs/cli/templates)

### --no-install

Skip automatic dependency installation.

```bash
ck new my-app --no-install
```

**Use when:**
- You want to review dependencies first
- Installing manually later
- Using different package manager
- CI/CD environment with separate install step

**Remember to install later:**
```bash
cd my-app
npm install
```

### --git

Initialize Git repository automatically.

```bash
ck new my-app --git
```

**What it does:**
- Runs `git init`
- Creates `.gitignore` with sensible defaults
- Makes initial commit with project structure
- Configures git hooks (optional)

**Default `.gitignore` includes:**
```
node_modules/
.env
.env.local
dist/
build/
.claude/cache/
plans/temp/
```

### --package-manager, -pm

Specify package manager to use.

```bash
ck new my-app --package-manager pnpm
ck new my-app -pm yarn
```

**Options:**
- `npm` (default)
- `pnpm`
- `yarn`
- `bun`

Auto-detected if available, falls back to npm.

### --no-claude

Create project without ClaudeKit configuration.

```bash
ck new my-app --template react --no-claude
```

**Use when:**
- You only want the framework template
- Adding ClaudeKit later with `ck init`
- Testing template without agents

### --verbose

Show detailed output during creation.

```bash
ck new my-app --verbose
```

**Output includes:**
- File creation steps
- Dependency resolution
- Git operations
- Configuration details

### --dry-run

Preview what would be created without actually creating it.

```bash
ck new my-app --template react --dry-run
```

**Output shows:**
- Files that would be created
- Dependencies that would be installed
- Configuration that would be applied
- Disk space required

## Examples

### Create blank project

```bash
ck new my-app
```

**Interactive prompts:**

```
? Select a template:
❯ blank          - Empty project with ClaudeKit config
  react          - React + TypeScript + Vite
  nextjs         - Next.js 14 with App Router
  [... more options]

? Initialize git repository? (Y/n)

? Install dependencies? (Y/n)
```

**Created structure:**

```
my-app/
├── .claude/
│   ├── config.json
│   ├── commands/
│   ├── skills/
│   └── workflows/
├── plans/
├── docs/
├── .gitignore
├── package.json
└── README.md
```

### Create React project

```bash
ck new my-react-app --template react --git
```

**Created structure:**

```
my-react-app/
├── .claude/              # ClaudeKit configuration
├── src/                  # React source code
│   ├── App.tsx
│   ├── main.tsx
│   └── components/
├── public/
├── plans/
├── docs/
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

### Create Next.js API project

```bash
ck new my-api --template nextjs -pm pnpm
```

**What happens:**

1. Creates Next.js 14 project with App Router
2. Sets up ClaudeKit configuration
3. Installs dependencies with pnpm
4. Configures TypeScript
5. Creates example API routes

### Create without installing dependencies

```bash
ck new my-app --no-install
cd my-app
pnpm install  # Install later with preferred package manager
```

### Preview before creating

```bash
ck new my-app --template astro --dry-run
```

**Output:**

```
Dry run mode - no files will be created

Project: my-app
Template: astro
Package manager: npm

Files to create (23):
  ├── .claude/config.json
  ├── .claude/commands/plan.md
  ├── src/pages/index.astro
  ├── src/layouts/Base.astro
  [... more files]

Dependencies to install (12):
  ├── astro@4.14.6
  ├── @astrojs/react@3.6.2
  [... more packages]

Estimated disk space: 142 MB

Run without --dry-run to create project
```

## What gets created

### .claude/ directory

ClaudeKit configuration and agent templates:

```
.claude/
├── config.json           # Project configuration
├── commands/             # Custom slash commands
│   ├── plan.md
│   ├── cook.md
│   └── [... 36 more]
├── skills/              # Custom skills
│   └── examples/
└── workflows/           # Agent workflows
    ├── sequential.md
    ├── parallel.md
    └── supervisor.md
```

### plans/ directory

Storage for AI-generated implementation plans:

```
plans/
├── README.md
├── templates/           # Plan templates
└── reports/            # Analysis reports
```

### docs/ directory

Project documentation structure:

```
docs/
├── README.md
├── architecture.md
└── api/
```

### Configuration files

**package.json** - Node.js project metadata:

```json
{
  "name": "my-app",
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "...",
    "build": "...",
    "test": "..."
  },
  "dependencies": {},
  "devDependencies": {
    "claudekit": "^1.2.0"
  }
}
```

**.gitignore** - Files to exclude from git:

```
node_modules/
.env
.env.local
dist/
build/
.claude/cache/
plans/temp/
*.log
```

**README.md** - Project documentation:

```markdown
# My App

Created with ClaudeKit CLI

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

## ClaudeKit Commands

- `/plan [feature]` - Create implementation plan
- `/cook [task]` - Implement feature
- `/test [module]` - Generate tests
[... more commands]
```

## Template-specific files

### React template

```
src/
├── App.tsx              # Main app component
├── main.tsx             # Entry point
├── App.css
├── index.css
└── components/
    └── HelloWorld.tsx
```

### Next.js template

```
app/
├── layout.tsx           # Root layout
├── page.tsx             # Home page
├── api/
│   └── hello/
│       └── route.ts     # API route example
└── globals.css
```

### Fastify template

```
src/
├── server.ts            # Fastify server
├── routes/
│   └── health.ts        # Health check endpoint
├── plugins/
│   └── sensible.ts
└── config/
    └── env.ts           # Environment config
```

## Post-creation steps

After creating project, ClaudeKit suggests next steps:

```bash
✓ Created project: my-app

Next steps:

  cd my-app              Navigate to project

  /plan [feature]        Plan your first feature
  /cook [task]           Implement code
  /test [module]         Generate tests

  npm run dev            Start development server

Documentation: https://docs.claudekit.cc
```

## Common workflows

### Standard web app

```bash
# Create React project
ck new my-app --template react --git

# Navigate to project
cd my-app

# Start development
npm run dev

# Plan a feature
/plan [add user authentication]

# Implement
/cook [implement auth with JWT]

# Test
/test [auth module]

# Commit
/git:cm
```

### API server

```bash
# Create Fastify API
ck new my-api --template fastify -pm pnpm

cd my-api

# Plan endpoint
/plan [add REST API for users]

# Implement
/cook [implement CRUD endpoints]

# Generate tests
/test [user API]

# Start server
pnpm dev
```

### Static site

```bash
# Create Astro site
ck new my-site --template astro

cd my-site

# Plan content
/plan [create blog post system]

# Implement
/cook [implement blog with markdown]

# Build
npm run build
```

## Troubleshooting

### Directory already exists

**Error:**

```
Error: Directory 'my-app' already exists
```

**Solutions:**

1. **Use different name:**
   ```bash
   ck new my-app-v2
   ```

2. **Remove existing directory:**
   ```bash
   rm -rf my-app
   ck new my-app
   ```

3. **Initialize in existing directory:**
   ```bash
   cd my-app
   ck init
   ```

### npm install fails

**Error:**

```
Error: npm install failed with code 1
```

**Solutions:**

1. **Create without installing, install manually:**
   ```bash
   ck new my-app --no-install
   cd my-app
   npm install --verbose
   ```

2. **Clear npm cache:**
   ```bash
   npm cache clean --force
   ck new my-app
   ```

3. **Use different package manager:**
   ```bash
   ck new my-app -pm pnpm
   ```

### Template not found

**Error:**

```
Error: Template 'reacts' not found
```

**Solution:**

```bash
# List available templates
ck template list

# Use correct template name
ck new my-app --template react
```

### Permission denied

**Error:**

```
Error: EACCES: permission denied, mkdir '/my-app'
```

**Solutions:**

1. **Create in home directory:**
   ```bash
   cd ~
   ck new my-app
   ```

2. **Check directory permissions:**
   ```bash
   ls -la
   # Create in directory you own
   ```

### Git initialization fails

**Error:**

```
Error: git init failed
```

**Solutions:**

1. **Skip git, initialize later:**
   ```bash
   ck new my-app  # Don't use --git
   cd my-app
   git init
   ```

2. **Check git installation:**
   ```bash
   git --version
   # Install git if missing
   ```

## Best practices

**Naming:**
- Use lowercase with hyphens: `my-project-name`
- Be descriptive: `user-auth-api` not `project1`
- Match repository name for clarity

**Templates:**
- Choose template matching your stack
- Start with official templates
- Customize after creation
- Create team templates for consistency

**Git:**
- Always use `--git` for new projects
- Review `.gitignore` before first commit
- Commit generated code immediately
- Document customizations in README

**Dependencies:**
- Review `package.json` after creation
- Update to latest versions if needed
- Remove unused dependencies
- Lock versions in production projects

**Configuration:**
- Review `.claude/config.json`
- Customize agent settings for workflow
- Add team-specific commands
- Document configuration changes

## Advanced usage

### Custom template from GitHub

```bash
ck new my-app --template https://github.com/user/template.git
```

### Create multiple projects

```bash
for name in app-1 app-2 app-3; do
  ck new $name --template react --no-install
done
```

### Scripted project creation

```bash
#!/bin/bash
PROJECT_NAME=$1
TEMPLATE=${2:-react}

ck new $PROJECT_NAME --template $TEMPLATE --git -pm pnpm
cd $PROJECT_NAME
pnpm install
git add .
git commit -m "feat: initial project setup"
```

## Next steps

**Get started:**
- [Quick start guide](/docs/getting-started/quick-start)
- [CLI overview](/docs/cli/)
- [Templates](/docs/cli/templates)

**Configure:**
- [Configuration guide](/docs/cli/configuration)
- [Agent setup](/docs/agents/)
- [Workflows](/docs/guides/workflows)

**Build:**
- [Plan your first feature](/docs/commands/core/plan)
- [Implement with agents](/docs/commands/core/cook)
- [Generate tests](/docs/commands/core/test)

---

**Ready to create?** Run `ck new my-app` to get started
