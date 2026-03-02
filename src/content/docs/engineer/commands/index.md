---
title: Commands Overview
description: Documentation for index
section: engineer
kit: engineer
category: commands
order: 0
published: true
---# Commands Overview

ClaudeKit provides a comprehensive set of slash commands to accelerate your development workflow. Each command is designed for specific tasks and automatically orchestrates the appropriate agents.

:::caution[Commands Fully Migrated to Skills]
**As of engineer@2.12.0**, ALL commands have been migrated to **skills**. The `/` slash syntax remains identical — only the internal organization changed.

**What changed:**
- All 19 commands (ask, bootstrap, ck-help, cook, debug, docs, fix, git, journal, kanban, plan, preview, test, use-mcp, watzup, worktree, code-review, coding-level, project-management) are now skills
- Skills use the same `/skill-name` invocation syntax
- Better discoverability with `argument-hint` autocomplete and `AskUserQuestion` menus
- Subcommand skills (e.g., `/ck:plan red-team`, `/ck:docs init`, `/ck:git pr`) route through parent skill

**See:** [Skills Reference](/docs/engineer/skills/) for the current catalog.
**See:** [Migration Guide](/docs/getting-started/migration-from-commands-to-skills) for details.
:::

## Command Categories

### Core Development

- **[/ck:ask](/docs/engineer/commands/core/ask)** - Ask questions about the codebase
- **[/ck:bootstrap](/docs/engineer/commands/core/bootstrap)** - Initialize new projects with spec-driven development
- **[/ck:ck-help](/docs/engineer/commands/core/ck-help)** - Get help about ClaudeKit commands
- **[/ck:coding-level](/docs/engineer/commands/core/coding-level)** - Set coding complexity level
- **[/ck:journal](/docs/engineer/commands/core/journal)** - Write development journal entries
- **[/ck:kanban](/docs/engineer/commands/core/kanban)** - Manage project tasks in Kanban board
- **[/ck:preview](/docs/engineer/commands/core/preview)** - Preview current work
- **[/ck:test](/docs/engineer/commands/core/test)** - Run test suite and get results
- **[/ck:use-mcp](/docs/engineer/commands/core/use-mcp)** - Use MCP server tools
- **[/ck:watzup](/docs/engineer/commands/core/watzup)** - Get project status and recent changes
- **[/ck:worktree](/docs/engineer/commands/core/worktree)** - Manage git worktrees
- **[/wt](/docs/engineer/commands/core/worktree)** - Shorthand for /ck:worktree

**Note:** `/ck:cook` and `/ck:debug` are now skills. See migration notice above.

### Planning

- **[/ck:plan](/docs/engineer/commands/plan)** - Create implementation plans
- **[/ck:plan --fast](/docs/engineer/skills/plan)** - Quick planning (skip research)
- **[/ck:plan --hard](/docs/engineer/skills/plan)** - Detailed planning with research
- **[/ck:plan --two](/docs/engineer/skills/plan)** - Compare two approaches
- **[/ck:plan --parallel](/docs/engineer/skills/plan)** - Parallel planning with multiple researchers
- **[/ck:plan:red-team](/docs/engineer/commands/plan/red-team)** - Adversarial plan review
- **[/ck:plan:archive](/docs/engineer/commands/plan/archive)** - Archive completed plans
- **[/ck:plan:validate](/docs/engineer/commands/plan/validate)** - Validate plan structure

### Documentation

- **[/ck:docs](/docs/engineer/commands/docs-cmd/init)** - Manage project documentation
- **[/ck:docs:init](/docs/engineer/commands/docs-cmd/init)** - Initialize project documentation
- **[/ck:docs:update](/docs/engineer/commands/docs-cmd/update)** - Update project documentation
- **[/ck:docs:summarize](/docs/engineer/commands/docs-cmd/summarize)** - Summarize project documentation

### Review

- **[/review:codebase](/docs/engineer/commands/review/codebase)** - Review entire codebase
- **[/review:codebase:parallel](/docs/engineer/commands/review/codebase-parallel)** - Parallel codebase review

### Other

- **[/check-and-commit](/docs/engineer/commands)** - Check code quality and commit

## Quick Command Reference

### Most Used Commands

```bash
# Project Setup
/ck:bootstrap [description]         # Initialize new project
/ck:coding-level [level]            # Set coding complexity level

# Feature Development
/ck:plan [feature description]      # Plan the feature
/ck:plan:hard [complex feature]     # Detailed planning with research
/ck:plan:parallel [feature]         # Parallel planning
/ck:cook [implement feature]        # Implement from plan

# Documentation
/ck:docs:init                       # First-time setup
/ck:docs:update                     # After making changes
/ck:docs:summarize                  # Generate documentation summary

# Testing
/ck:test                            # Run test suite
/ck:test:ui                         # Run UI tests
/ck:debug [issue description]       # Debug issues

# Git Workflow
/check-and-commit                # Check quality and commit
/ck:worktree [feature-name]         # Create git worktree

# Project Status
/ck:watzup                          # What's the current state?
/ck:ask [question]                  # Ask about codebase
/ck:kanban                          # View project dashboard
```

## Command Syntax

### Basic Syntax

```bash
/command [required-argument] [optional-argument]
```

### Examples

```bash
# No arguments
/ck:test
/ck:watzup
/ck:docs:init

# Required argument
/ck:plan [add user authentication]
/ck:ask [how does routing work?]
/ck:bootstrap [create REST API]

# Optional arguments
/ck:git pr                          # PR to default branch
/ck:git pr [develop]                # PR to develop
/ck:git pr [main] [feature-branch]  # PR from feature to main

# Multiple arguments
/ck:plan:parallel [feature] [3]     # Parallel planning with 3 researchers
```

## Command Workflows

### Starting a New Project

```bash
1. /ck:bootstrap [project description]
   # OR
   ck init --kit engineer

2. # Customize requirements through Q&A

3. # System automatically:
   - Researches best practices
   - Creates implementation plan
   - Implements features
   - Generates tests
   - Sets up documentation
```

### Developing a Feature

```bash
1. /ck:plan [feature description]
   # Creates detailed implementation plan

2. # Review plan in plans/ directory

3. /ck:cook "Implement the feature as planned"
   # Implements based on plan

4. /ck:test
   # Validates implementation

5. /check-and-commit
   # Checks quality and commits
```

### Investigating Issues

```bash
# Debug issues
/ck:debug "Debug the login issue - users can't authenticate"
# - Analyzes logs and code
# - Identifies root cause
# - Suggests solutions

# Run tests
/ck:test
# - Runs full test suite
# - Shows coverage report

# UI testing
/ck:test:ui
# - Runs UI/E2E tests
# - Visual regression testing
```

### Updating Documentation

```bash
# After implementing features
/ck:docs:update

# When onboarding new team members
/ck:docs:summarize

# When starting with existing codebase
/ck:docs:init
```

## Command Best Practices

### Use the Right Command for the Task

✅ **Correct Usage**
```bash
# Simple questions
/ck:ask [how does routing work?]

# Planning with research
/ck:plan:hard [add OAuth2 authentication]

# Quick planning
/ck:plan:fast [update button styling]

# Parallel planning for complex features
/ck:plan:parallel [rebuild authentication system]
```

❌ **Incorrect Usage**
```bash
# Don't use fast for complex features
/ck:plan:fast [rebuild entire authentication system]

# Don't skip planning for major features
# (implement without /ck:plan first)
```

### Provide Clear Descriptions

✅ **Clear**
```bash
/ck:plan [add OAuth2 authentication with Google and GitHub providers]
"Debug API issue - returns 500 error when creating user with empty email"
/ck:ask [how is user authentication currently implemented?]
```

❌ **Vague**
```bash
/ck:plan [add auth]
"Something's broken, please fix"
/ck:ask [how does this work?]
```

### Review Before Committing

```bash
# 1. Implement feature

# 2. Test
/ck:test

# 3. Review changes
git diff

# 4. Quality check and commit
/check-and-commit
```

### Use Sequential Commands for Complex Tasks

```bash
# 1. Understand codebase
/ck:ask [how is authentication currently implemented?]

# 2. Plan changes with research
/ck:plan:hard [migrate from session-based to JWT authentication]

# 3. Review plan
/ck:preview plans/latest-plan.md

# 4. Implement based on plan
/ck:cook "Implement JWT authentication migration as planned"

# 5. Test
/ck:test

# 6. Debug if needed
/ck:debug "Debug the JWT token validation issue"

# 7. Quality check and commit
/check-and-commit
```

## Command Flags and Options

Some commands support flags:

### /ck:plan

```bash
/ck:plan [feature]              # Intelligent planning
/ck:plan:fast [feature]         # Quick planning without research
/ck:plan:hard [feature]         # Detailed planning with research
/ck:plan:two [feature]          # Two different approaches
/ck:plan:parallel [feature]     # Parallel planning with researchers
/ck:plan:ci [CI-URL]            # Analyze CI failures
/ck:plan:cro [content]          # Conversion optimization
```

## Understanding Command Output

Commands provide structured output:

### Planning Commands

```
planner Agent: Analyzing codebase...

Research Results:
- OAuth2 best practices reviewed
- Existing auth patterns identified
- Security considerations documented

Implementation Plan Created:
📄 plans/oauth-implementation.md

Plan Summary:
1. Install dependencies (passport, passport-google-oauth20)
2. Configure OAuth2 providers
3. Implement callback routes
4. Add session management
5. Generate tests
6. Update documentation

Estimated time: 2-3 hours
Files to create: 5
Files to modify: 3

Next: Review plan, then implement
```

### Implementation Output

```
fullstack-developer Agent: Implementing from plan...

Dependencies Installed:
✓ passport (0.6.0)
✓ passport-google-oauth20 (2.0.0)

Files Created:
✓ src/auth/oauth-config.js
✓ src/auth/google-strategy.js
✓ src/routes/auth-callback.js

Tests Generated:
✓ tests/auth/oauth.test.js (15 tests)

Documentation Updated:
✓ docs/api/authentication.md

Implementation complete!

Next: Run /ck:test to validate
```

### Test Commands

```
tester Agent: Running test suite...

Test Results:
✓ Unit tests: 45 passed
✓ Integration tests: 12 passed
✓ E2E tests: 8 passed

Coverage: 87.3%

All tests passed!

Next: Review changes, then /ck:git cm
```

## Troubleshooting Commands

### Command Not Found

**Problem**: `/command` not recognized

**Solutions:**
1. Verify you're in a ClaudeKit project (`ls .claude/`)
2. Check command exists (`ls .claude/commands/`)
3. Run `ck init` to get latest commands
4. Restart Claude Code

### Command Fails

**Problem**: Command errors during execution

**Solutions:**
1. Check error message for specific issue
2. Verify prerequisites (API keys, dependencies)
3. Review agent logs
4. Try command with simpler input
5. Use `/ck:debug` to investigate

### Unexpected Results

**Problem**: Command doesn't do what expected

**Solutions:**
1. Review command documentation
2. Check if using correct command for task
3. Provide more specific description
4. Review generated plans before implementing
5. Use feedback to refine

## Next Steps

Explore specific command categories:

- [Core Commands](/docs/engineer/commands) - Development essentials
- [Planning Commands](/docs/engineer/commands/plan/) - Implementation planning
- [Documentation Commands](/docs/engineer/commands/docs-cmd/init) - Documentation management
- [Review Commands](/docs/engineer/commands/review/codebase) - Code review and analysis

Or learn about:

- [Agents](/docs/engineer/agents/) - How commands invoke agents
- [Skills](/docs/engineer/skills/) - Specialized capabilities
- [Quick Start](/docs/getting-started/quick-start) - Hands-on tutorial

---

**Key Takeaway**: ClaudeKit commands provide a natural, intuitive interface to powerful agent orchestration, making complex development tasks simple and repeatable.
