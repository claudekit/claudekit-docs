---
title: "ClaudeKit Cheatsheet"
description: "Quick reference for ClaudeKit commands - essential commands for AI-powered development workflow."
section: getting-started
category: "getting-started"
order: 5
published: true
lastUpdated: 2025-11-07
---
# ClaudeKit Cheatsheet

Quick reference guide for ClaudeKit CLI commands and workflows.

## Installation

```bash
# Install ClaudeKit globally
npm i -g claudekit-cli@latest

# Check version
ck --version
```

## Starting ClaudeKit

```bash
# Navigate to your project
cd /path/to/project

# Start Claude Code with ClaudeKit
claude
```

## Initial Setup

```bash
# For existing projects (brownfield)
/docs:init

# For new projects (greenfield)
ck init --kit engineer --dir /path/to/project

# Sync config files with upstream (interactive merge)
ck init --sync

# Use git clone instead of API (no token needed)
ck init --use-git
```

## Core Commands

### Development

```bash
# Initialize documentation and specs
/docs:init

# Implement new feature
/cook <description>

# Autonomous feature implementation
/cook --auto <description>

# Create implementation plan only
/plan <description>

# Execute existing plan (natural language recommended)
"Implement as planned"

# Bootstrap new project
/bootstrap <idea-description>

# Autonomous bootstrap
/bootstrap:auto <idea-description>
```

### Bug Fixing

```bash
# Quick bug fix
/fix --quick <description>

# Complex bug fix (auto-detects complexity)
/fix <description>

# Auto-fetch logs and fix (auto-detected)
/fix

# Run test suite and fix until passing (auto-detected)
/fix

# Fix CI/CD pipeline issues (auto-detected)
/fix <github-action-url>
```

### Testing

```bash
# Run test suite and report (no fixes)
/test
```

### Documentation

```bash
# Initialize documentation
/docs:init

# Update documentation
/docs:update

# Summarize documentation
/docs:summarize
```

### Git Operations

```bash
# Create commit with meaningful message
/git cm

# Commit and push changes
/git cp

# Create pull request
/git pr
```

### Planning & Research

```bash
# Brainstorm technical approaches
/brainstorm <description>

# Create detailed implementation plan
/plan <description>

# Plan CI/CD setup or fix CI/CD pipeline
/plan:ci

# Two-step implementation plan
/plan:two
```

### Integration

```bash
# Integrate Polar API
/integrate:polar

# Integrate SePay payment
/integrate:sepay
```

### Skills Management

```bash
# Create new skill (use skill-creator skill)
"Create a new skill for [topic]"

# Fix skill errors (use skill-creator skill)
"Fix errors in skill logs"
```

## Command Comparison

### Feature Implementation Flow

```bash
# Approach 1: With plan review (recommended)
/cook <feature-description>
# → CC asks questions
# → Review plan
# → Approve
# → Implementation starts

# Approach 2: Autonomous (use with caution)
/cook --auto <feature-description>
# → Full autonomous without plan review
```

### Bug Fixing Flow

```bash
# Simple bugs
/fix --quick <bug-description>

# Complex bugs (auto-detects)
/fix <bug-description>

# From logs (auto-detected)
/fix

# From failing tests (auto-detected)
/fix

# From CI/CD (auto-detected)
/fix <action-url>
```

## Common Workflows

### Brownfield Project Setup

```bash
# 1. Install ClaudeKit
npm i -g claudekit-cli@latest

# 2. Go to project
cd /path/to/existing/project

# 3. Start Claude Code
claude

# 4. Initialize
/docs:init

# 5. Start working
/cook <feature>
```

### Greenfield Project Setup

```bash
# 1. Install ClaudeKit
npm i -g claudekit-cli@latest

# 2. Initialize project
ck init --kit engineer --dir /path/to/project

# 3. Navigate to project
cd /path/to/project

# 4. Start Claude Code
claude

# 5. Bootstrap idea
/bootstrap <idea-description>

# 6. Continue development
/cook <next-feature>
```

### Feature Development

```bash
# 1. Plan feature
/plan Add user profile with avatar upload

# 2. Review plan (markdown file generated)

# 3. Implement
"Implement profile feature as planned"

# 4. Test
/test

# 5. Fix if needed
/fix

# 6. Commit
/git cm
```

### Bug Fix Workflow

```bash
# 1. Describe bug
/fix Payment fails on Safari after form validation

# 2. CC analyzes and fixes (auto-detects complexity)

# 3. Test the fix
/test

# 4. Commit
/git cm
```

### CI/CD Fix Workflow

```bash
# 1. Get failing action URL
# https://github.com/user/repo/actions/runs/12345

# 2. Fix CI
/fix https://github.com/user/repo/actions/runs/12345

# 3. CC fetches logs, analyzes, fixes (auto-detects CI context)

# 4. Push fix
/git cp
```

## Quick Examples

### Add Authentication

```bash
/cook Add JWT authentication with login, register, and password reset
```

### Fix Performance Issue

```bash
/fix Dashboard loads slowly with 1000+ items
```

### Plan Database Migration

```bash
/plan Migrate from MongoDB to PostgreSQL with zero downtime
```

### Integrate Payment

```bash
/integrate stripe
# or
/cook Add Stripe payment integration with subscription billing
```

### Bootstrap New API

```bash
/bootstrap REST API for task management with teams, projects, tasks, and time tracking
```

## Command Categories

### 🚀 Core Development
- `/cook` - Feature implementation
- `/plan` - Create plans
- `/bootstrap` - New projects

### 🐛 Debugging & Fixing
- `/fix --quick` - Quick fixes
- `/fix` - Auto-detects complexity
- `/fix` - Auto-detects logs
- `/fix` - Auto-detects tests
- `/fix` - Auto-detects CI

### 🧪 Testing
- `/test` - Run tests

### 📚 Documentation
- `/docs:init` - Initialize
- `/docs:update` - Update
- `/docs:summarize` - Summarize

### 🔧 Git Operations
- `/git cm` - Commit changes
- `/git cp` - Commit and push
- `/git pr` - Create PR

### 💡 Planning
- `/plan` - Detailed planning
- `/brainstorm` - Explore ideas

### 🔌 Integrations
- `/integrate <service>` - Add integrations

### ⚙️ Skills
- Use `skill-creator` skill - Create/fix/optimize skills

## Tips & Best Practices

### 1. Always Review Plans
**IMPORTANT:** Review implementation plans carefully before approving. Plans exist for a reason.

### 2. Provide Context
More detailed descriptions = better results
```bash
# ❌ Bad
/cook Add search

# ✅ Good
/cook Add full-text search for blog posts with filters by category, tag, and date range
```

### 3. Use Right Command

```bash
# Quick bugs
/fix --quick <simple-issue>

# Complex bugs (auto-detects)
/fix <complex-issue>

# Small features
/cook <feature>

# Large features
/plan <feature> → review → "Implement as planned"
```

### 4. Test Frequently

```bash
# After each feature
/test

# Or auto-fix tests
/fix
```

### 5. Document Changes

```bash
# Keep docs updated
/docs:update
```

## Troubleshooting

### Command Not Working

```bash
# Check ClaudeKit version
ck --version

# Restart Claude Code
# Exit and run: claude
```

### Need Fresh Start

```bash
# Reinitialize docs
/docs:init
```

### Need More Help

```bash
# Brainstorm approach
/brainstorm How to implement <complex-feature>

# Get detailed plan
/plan <what-you-want-to-do>
```

## Quick Command Reference

```bash
# Initialize existing project
/docs:init

# New feature (needs plan review)
/cook <feature-description>

# New feature (autonomous, no review)
/cook --auto <description>

# Only plan, no implementation
/plan <description>

# Code from existing plan
"Implement plan"

# Quick bug fix
/fix --quick <bug-description>

# Bug fix (auto-detects complexity)
/fix <bug-description>

# Auto-fetch logs and fix (auto-detected)
/fix

# Run tests and fix till passing (auto-detected)
/fix

# Fetch GitHub Actions logs and fix (auto-detected)
/fix <github-action-url>

# Create new project (needs plan review)
/bootstrap <idea-description>

# Create new project (autonomous till death)
/bootstrap:auto <idea>

# Run test suite and report (no fixes)
/test
```

## Resources

- [Full Documentation](https://docs.claudekit.cc)
- [All Skills](/docs/engineer/skills/)
- [AI Agents](/docs/engineer/agents/)
- [Workflows](/docs/engineer/configuration/workflows)
- [Troubleshooting](/docs/support/troubleshooting/)
- [GitHub Discussions](https://github.com/mrgoonie/claudekit-cli/discussions)

---

**Print this page** or keep it open while working with ClaudeKit for quick command reference!
