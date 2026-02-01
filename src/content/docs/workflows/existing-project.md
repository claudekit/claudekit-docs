---
title: "Brownfield Projects"
description: "Documentation for Brownfield Projects"
section: workflows
category: workflows
order: 7
published: true
lastUpdated: 2025-11-07
---

# Brownfield Projects

Integrate ClaudeKit into your existing projects to enhance development workflow with AI-powered agents. Perfect for legacy codebases, team projects, and gradual AI adoption.

## Installation

### 1. Install ClaudeKit CLI

```bash
npm i -g claudekit-cli@latest
```

### 2. Navigate to Your Project

```bash
cd /path/to/your/existing/project
```

### 3. Start Claude Code

```bash
claude
```

This will start Claude Code (CC) with ClaudeKit agents in your project directory.

## Initial Setup

### Analyze and Create Specs

Let Claude Code scan and analyze your codebase to create initial specifications:

```bash
/docs:init
```

This command will:
- Analyze your project structure
- Understand your tech stack
- Generate initial documentation specs
- Create baseline for AI-assisted development

**Wait for completion** before proceeding with other commands.

## Core Workflows

### Implement New Features

```bash
/cook <description-of-a-feature>
```

**Example:**
```bash
/cook Add user profile page with avatar upload and edit functionality
```

**Process:**
1. CC will ask clarifying questions - answer them!
2. **IMPORTANT:** Review the detailed implementation plan carefully
3. After your approval, CC starts implementing
4. Automatic testing and code review included
5. Summary report provided when finished

**Autonomous variants** (use at your own risk):
- `/cook --auto` - Full autonomous mode with plan review
- `/cook --auto --fast` - Faster mode with less token consumption

### Fix Bugs

#### Quick Bug Fix
```bash
/fix --quick <description-of-bug>
```

For simple, straightforward bugs.

#### Complex Bug Fix
```bash
/fix <description-of-bug>
```

For difficult bugs requiring deeper analysis and more thinking time.

**Example:**
```bash
/fix User authentication breaks after OAuth login when email is not verified
```

#### Auto-Fix from Logs
```bash
/fix
```

Automatically fetches logs and fixes issues.

#### Fix Test Suite
```bash
/fix
```

Runs test suite and keeps fixing until all tests pass.

#### Fix CI/CD Issues
```bash
/fix <github-action-url>
```

**Example:**
```bash
/fix https://github.com/username/repo/actions/runs/12345
```

Fetches GitHub Actions logs and fixes build/deployment errors.

### Planning & Research

#### Brainstorm Ideas
```bash
/brainstorm <your-description>
```

Use when unsure about technical feasibility or implementation approach.

**Example:**
```bash
/brainstorm Real-time collaborative editing feature like Google Docs
```

#### Create Implementation Plan
```bash
/plan <your-description>
```

Research and create detailed implementation plan without implementing.

**Example:**
```bash
/plan Migrate from REST API to GraphQL with backward compatibility
```

#### Execute Existing Plan
```bash
"Implement your plan"
```

Start implementing from a markdown plan file.

### Testing

#### Run Tests and Report
```bash
/test
```

Runs test suite and generates report. No automatic fixes.

## Advanced Commands

### Documentation

```bash
/docs:update    # Update existing documentation
/docs:summarize # Summarize documentation
```

### Git Operations

```bash
/git cm         # Create meaningful commit message
/git cp         # Commit and push changes
/git pr         # Create pull request
```

### Integration

```bash
/integrate:polar  # Integrate Polar API
/integrate:sepay  # Integrate SePay payment
```

### Skills Management

```bash
Use skill-creator skill # Create new skill
Use skill-creator skill # Fix skill errors
```

## Best Practices

### 1. Start with Documentation
Always run `/docs:init` first to let CC understand your codebase.

### 2. Review Plans Carefully
**IMPORTANT:** Always review implementation plans before approving. CC provides detailed plans for a reason.

### 3. Incremental Integration
- Start with small features
- Fix non-critical bugs first
- Gradually increase complexity
- Build team confidence

### 4. Use Appropriate Commands
- Simple bugs → `/fix --quick`
- Complex bugs → `/fix`
- Small features → `/cook`
- Large features → `/plan` then `/cook`

### 5. Test Regularly
Run `/test` frequently to catch issues early.

## Common Scenarios

### Adding Feature to Legacy Code

```bash
# 1. Analyze codebase
/docs:init

# 2. Plan the feature
/plan Add user roles and permissions system

# 3. Review and approve plan

# 4. Implement
/cook

# 5. Test
/test
```

### Fixing Production Bug

```bash
# 1. Quick fix for urgent issue
/fix --quick Payment processing fails on Safari browser

# 2. Test the fix
/test

# 3. Commit and push
/git cp
```

### Refactoring Legacy Module

```bash
# 1. Brainstorm approach
/brainstorm Refactor authentication module to use modern JWT patterns

# 2. Create detailed plan
/plan Refactor auth module with backward compatibility

# 3. Review plan carefully

# 4. Implement incrementally
/cook

# 5. Run full test suite
/fix
```

## Team Collaboration

### Sharing Configuration
Share `.claude/` directory and generated specs with your team via git.

### Onboarding Team Members

```bash
# 1. Clone repository
git clone <repo-url>

# 2. Install ClaudeKit
npm i -g claudekit-cli@latest

# 3. Navigate to project
cd project-name

# 4. Start Claude Code
claude

# 5. Specs already exist - start working!
/cook Add new feature
```

## Troubleshooting

### CC Not Understanding Codebase
```bash
# Regenerate specs
/docs:update
```

### Commands Not Working
```bash
# Verify ClaudeKit installation
ck --version

# Restart Claude Code
# Exit CC and run: claude
```

### Need More Context
Provide detailed descriptions in commands. More context = better results.

## Next Steps

After successful integration:

1. **Explore Commands**: Check [Skills Documentation](/docs/engineer/skills/)
2. **Learn Agents**: Understand [Specialized Agents](/docs/engineer/agents/)
3. **Advanced Workflows**: See [Workflows Guide](/docs/workflows/)
4. **Team Training**: Share best practices with your team

---

**Need help?** Check [Troubleshooting Guide](/docs/support/troubleshooting/) or [GitHub Discussions](https://github.com/mrgoonie/claudekit-cli/discussions)
