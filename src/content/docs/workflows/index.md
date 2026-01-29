---
title: "Workflows"
description: "Task-oriented guides for common development scenarios with ClaudeKit"
section: workflows
order: 0
published: true
---

# Workflows

Task-oriented guides for common development scenarios using ClaudeKit's slash commands and agents.

## Popular Workflows

### Feature Development
[**Feature Development Guide**](/docs/workflows/feature-development) - Complete feature lifecycle from planning to deployment
```bash
/plan "add user authentication with OAuth"
/clear  # Free context before implementation
# Now describe the task - cook skill auto-activates from plan context
"Implement user authentication with OAuth as planned"
/fix:test
/git:pr "feature/user-auth"
```

### Bug Fixing
[**Bug Fixing Workflow**](/docs/workflows/bug-fixing) - Systematic approach to debugging and fixing issues
```bash
/debug "login button not working"
/fix:hard
/fix:test
/git:cm
```

### Documentation
[**Documentation Workflow**](/docs/workflows/documentation) - Keep docs in sync with code changes
```bash
/docs:init
/docs:update "after feature changes"
```

## Quick Workflows

### Setup New Project
```bash
ck init my-project --kit engineer
cd my-project
/plan "set up project structure"
/clear  # Free context before implementation
# Describe the task - cook skill auto-activates
"Set up project structure as planned"
```

### Add New Feature
```bash
/plan "add [feature description]"
/clear  # Free context before implementation
# Describe implementation - cook skill auto-activates
"Implement [feature description] as planned"
/design:good "UI mockups if needed"
/fix:test
/git:cm
```

### Deploy to Production
```bash
/plan "prepare for production deployment"
/fix:ci "fix any failing tests"
/git:pr "deploy-to-production"
```

### Code Review
```bash
/code-review "review recent changes"
/fix "implement suggested improvements"
/git:cm
```

## By Use Case

### Frontend Development
- [UI/UX Design](/docs/commands#design-commands) - `/design:good`, `/design:fast`
- Component Development - `/plan → /clear → describe task (cook skill auto-activates) → /fix:test`
- Styling - `/design:good` for aesthetic components

### Backend Development
- API Development - `/plan → /clear → describe task (cook skill auto-activates) → /fix:hard`
- Database Changes - `/plan "add user table" → /clear → describe implementation`
- Performance Optimization - `/debug "slow queries" → /fix`

### Full Stack
- Complete Features - See [Feature Development](/docs/workflows/feature-development)
- Authentication - `/cook "add authentication with Better Auth"`
- E-commerce - `/cook "add Stripe payment integration`

### DevOps & Infrastructure
- Docker Setup - `/cook "add Docker configuration"`
- CI/CD - `/fix:ci "fix failing GitHub Actions"`
- Deployment - `/plan "deploy to Cloudflare Workers"`

## Advanced Workflows

### Multi-agent Collaboration
```bash
/plan "complex feature with multiple components"
# Spawns: planner → researcher → frontend dev → backend dev → tester

/fix:hard "production bug"
# Spawns: debugger → researcher → dev → tester → reviewer
```

### Content Creation
```bash
/content:good "write marketing copy for new feature"
/content:enhance "improve existing landing page"
/design:good "create visual assets for social media"
```

### Integration Workflows
```bash
/integrate:polar "add Polar billing integration"
/integrate:sepay "add SePay payment gateway"
```

## Getting Started

New to ClaudeKit? Start with:
1. [Getting Started Guide](/docs/getting-started) - Learn the basics
2. [Quick Start](/docs/getting-started/quick-start) - Build your first feature
3. [Feature Development](/docs/workflows/feature-development) - Complete workflow example

## Reference

- [Commands Reference](/docs/commands) - All available commands
- [Agents Overview](/docs/agents) - Meet your AI team
- [Skills Library](/docs/skills) - Built-in knowledge modules

## Need Help?

- [Troubleshooting](/docs/support/troubleshooting) - Common issues
- [FAQ](/docs/support/faq) - Frequently asked questions
- [Support](/docs/support) - Get help from the community
