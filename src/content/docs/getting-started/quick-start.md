---
title: Quick start
description: Get ClaudeKit running and create your first AI-assisted project in 10 minutes
category: getting-started
order: 1
published: true
keywords: [quick start, getting started, installation, first project]
lastUpdated: 2025-10-18
difficulty: beginner
estimatedTime: "10 minutes"
prerequisites: []
relatedPages:
  - /docs/getting-started/installation
  - /docs/cli/new
  - /docs/commands/core/plan
---

# Quick start

Get ClaudeKit running and create your first AI-assisted project in 10 minutes.

## Prerequisites

Before you begin, make sure you have:

- Node.js 18 or higher ([check your version](https://nodejs.org))
- npm, pnpm, or yarn package manager
- GitHub account (for authentication)
- Code editor (VS Code recommended)

Check your Node.js version:

```bash
node --version
# Expected: v18.0.0 or higher
```

## Step 1: Install ClaudeKit CLI

Install the ClaudeKit CLI globally:

```bash
npm install -g claudekit-cli
```

**For other package managers:**

```bash
# pnpm
pnpm add -g claudekit-cli

# yarn
yarn global add claudekit-cli
```

Verify the installation:

```bash
ck --version
# Expected: claudekit-cli v1.x.x
```

**Success indicator:** You should see the ClaudeKit version number. If you get "command not found," restart your terminal and try again.

## Step 2: Authenticate

ClaudeKit uses GitHub CLI for authentication. If you don't have it installed:

```bash
# Install GitHub CLI (macOS)
brew install gh

# Install GitHub CLI (Windows)
winget install GitHub.cli

# Install GitHub CLI (Linux)
sudo apt install gh
```

Authenticate with GitHub:

```bash
gh auth login
```

Follow the prompts:
1. Choose "GitHub.com"
2. Select "HTTPS" protocol
3. Authenticate via browser
4. Paste the one-time code shown in terminal

**Success indicator:** You should see "✓ Logged in as [your-username]"

Verify authentication:

```bash
gh auth status
# Expected: ✓ Logged in to github.com as [username]
```

## Step 3: Create your first project

Create a new ClaudeKit project:

```bash
ck new my-first-app
```

You'll be prompted to choose a template:

```
? Select a template:
❯ blank          - Empty project with ClaudeKit config
  react          - React + TypeScript + Vite
  nextjs         - Next.js 14 with App Router
  astro          - Astro static site
  fastify        - Fastify API server
  express        - Express.js API
```

Select **blank** for this guide and press Enter.

**What happens:**
- ClaudeKit creates project structure
- Initializes `.claude/` configuration directory
- Sets up agent templates and workflows
- Creates documentation structure
- Installs dependencies

**Expected output:**

```bash
✓ Created project directory: my-first-app
✓ Initialized ClaudeKit configuration
✓ Set up agent templates (14 agents)
✓ Created workflow examples
✓ Initialized documentation structure

📁 Project structure:
my-first-app/
├── .claude/              # ClaudeKit configuration
│   ├── commands/         # Custom slash commands
│   ├── skills/           # Custom skills
│   └── workflows/        # Agent workflows
├── plans/                # Generated implementation plans
├── docs/                 # Project documentation
└── README.md

Next steps:
  cd my-first-app
  /plan [your feature idea]
```

Navigate into your project:

```bash
cd my-first-app
```

## Step 4: Plan a feature

Use the planner agent to create an implementation plan. In your terminal (inside the project directory):

```bash
/plan [add a REST API endpoint for user registration]
```

**What happens:**
1. Planner agent reads your codebase structure
2. Analyzes patterns and architecture
3. Creates detailed implementation plan
4. Saves plan to `./plans/` directory
5. Breaks down tasks with clear steps

**Expected output:**

```
🤖 Planner Agent: Analyzing codebase...

📊 Codebase Analysis:
  - Project type: Node.js application
  - No existing API found
  - Dependencies: None detected

📝 Creating implementation plan...

✓ Plan created: ./plans/20251018-user-registration-api.md

Plan Summary:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Set up Express.js server
2. Create user registration endpoint
3. Add input validation
4. Implement password hashing
5. Generate tests
6. Update documentation

Estimated time: 30 minutes
Files to create: 5
Files to modify: 2

Next: Review the plan, then run /cook to implement
```

Open and review the plan at `./plans/20251018-user-registration-api.md`. The plan includes:
- Architecture decisions
- File changes needed
- Security considerations
- Test strategy
- Step-by-step implementation

## Step 5: Implement the feature

Review the plan. If it looks good, implement it:

```bash
/cook [implement user registration endpoint]
```

**What happens:**
1. Code agent reads the implementation plan
2. Creates necessary files and folders
3. Implements code following your patterns
4. Generates tests automatically
5. Creates documentation
6. Saves checkpoints for rollback

**Expected output:**

```
🤖 Code Agent: Implementing from plan...

📦 Installing dependencies:
  ✓ express (4.18.2)
  ✓ bcrypt (5.1.1)
  ✓ joi (17.11.0)

📝 Creating files:
  ✓ src/server.js
  ✓ src/routes/auth.js
  ✓ src/middleware/validate.js
  ✓ src/utils/hash.js

🧪 Generating tests:
  ✓ tests/auth.test.js
  ✓ tests/integration/registration.test.js

📚 Updating documentation:
  ✓ docs/api/auth.md

✓ Implementation complete

Checkpoint saved: cp_20251018_143022

Summary:
  Files created: 5
  Tests generated: 12
  Coverage: 87%

Next: Review changes, run tests, then commit
```

## Step 6: Review changes

Check what was created:

```bash
git diff
```

You'll see:
- New Express server setup
- User registration endpoint (`POST /auth/register`)
- Input validation middleware
- Password hashing utilities
- Comprehensive tests

Review the generated code. The Code agent follows best practices:
- Input validation with Joi
- Secure password hashing with bcrypt
- Error handling middleware
- RESTful API design
- Clear comments explaining logic

## Step 7: Run tests

ClaudeKit generates tests automatically. Run them:

```bash
npm test
```

**Expected output:**

```bash
Test Suites: 2 passed, 2 total
Tests:       12 passed, 12 total
Snapshots:   0 total
Time:        2.145s
Coverage:    87.3%

✓ All tests passed
```

**Success indicator:** All tests pass with good coverage (>80%).

If tests fail, use the debugger agent:

```bash
/debug [test failures in auth module]
```

## Step 8: Commit your work

Use the git commit agent to create a clean commit:

```bash
/git:cm
```

**What happens:**
1. Git agent analyzes all changes
2. Reviews code quality
3. Generates semantic commit message
4. Stages files
5. Creates commit

**Expected commit message:**

```
feat: add user registration API endpoint

- Implement POST /auth/register endpoint
- Add Joi validation for email and password
- Secure password hashing with bcrypt
- Generate comprehensive test suite (87% coverage)
- Document API in docs/api/auth.md
```

## Success! You did it

**What you accomplished in 10 minutes:**

✓ Installed ClaudeKit CLI
✓ Created a new project
✓ Planned a feature with AI assistance
✓ Implemented a REST API endpoint
✓ Generated tests automatically
✓ Reviewed and committed code

**Time breakdown:**
- Installation & setup: 3 minutes
- Planning: 1 minute
- Implementation: 4 minutes
- Review & testing: 2 minutes

## What's next?

Now that you've created your first ClaudeKit project, explore:

### Learn more about agents
- [Agent system overview](/docs/agents/) - Understand the 14 specialized agents
- [Orchestration patterns](/docs/agents/orchestration) - How agents work together
- [Planner agent](/docs/agents/planner) - Deep dive into planning workflow

### Explore commands
- [Core commands](/docs/commands/core/) - `/plan`, `/cook`, `/test`, `/debug`
- [Fix commands](/docs/commands/fix/) - `/fix:fast`, `/fix:hard`, `/fix:ui`
- [Design commands](/docs/commands/design/) - `/design:fast`, `/design:3d`

### Follow tutorials
- [Building your first API](/docs/guides/first-api) - Complete REST API tutorial
- [Multi-agent workflows](/docs/guides/multi-agent) - Complex orchestration
- [Custom agent creation](/docs/guides/custom-agents) - Build your own agents

### Join the community
- [GitHub Discussions](https://github.com/claudekit/claudekit-cli/discussions) - Ask questions
- [Discord Server](https://discord.gg/claudekit) - Chat with developers
- [Example projects](https://github.com/claudekit/examples) - Learn from real code

## Troubleshooting

### Command not found: ck

**Cause:** CLI not in PATH or installation incomplete

**Solution:**
```bash
# Reinstall globally
npm install -g claudekit-cli

# Check installation location
npm list -g claudekit-cli

# Restart terminal and try again
```

### Authentication failed

**Cause:** GitHub CLI not authenticated or token expired

**Solution:**
```bash
# Re-authenticate
gh auth login

# Verify status
gh auth status

# Check token permissions
gh auth token
```

### /plan command not found

**Cause:** Not in a ClaudeKit project directory

**Solution:**
```bash
# Make sure you're in project root
cd my-first-app

# Verify .claude/ directory exists
ls -la .claude/

# If missing, reinitialize
ck init
```

### Tests failing after implementation

**Cause:** Generated code may need adjustments for your environment

**Solution:**
```bash
# Use debugger agent to analyze
/debug [test failures in X module]

# Or review test output
npm test -- --verbose

# Agent will suggest fixes
```

## Need help?

If you're stuck:

1. **Check the docs:** Search for your issue in the documentation
2. **Ask the AI assistant:** Use the AI panel (right sidebar) for quick help
3. **GitHub Discussions:** [Post your question](https://github.com/claudekit/claudekit-cli/discussions)
4. **Discord Community:** [Real-time help](https://discord.gg/claudekit)
5. **Issue Tracker:** [Report bugs](https://github.com/claudekit/claudekit-cli/issues)

---

**Congratulations!** You've completed the ClaudeKit quick start. You now have the foundation to build AI-assisted applications with confidence.
