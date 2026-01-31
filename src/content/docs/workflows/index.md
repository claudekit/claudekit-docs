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
/cook "Implement user authentication with OAuth as planned"
/fix
/git pr "feature/user-auth"
```

### Bug Fixing
[**Bug Fixing Workflow**](/docs/workflows/bug-fixing) - Systematic approach to debugging and fixing issues
```bash
/debug "Login button not working, please investigate and fix"
/test
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
/cook "Set up project structure as planned"
```

### Add New Feature
```bash
/plan "add [feature description]"
/clear  # Free context before implementation
/cook "Implement [feature description] as planned"
/frontend-design "Create UI mockups if needed"
/test
```

### Deploy to Production
```bash
/plan "prepare for production deployment"
/fix "Fix CI issues"
/test
```

### Code Review
```bash
/code-review "Review recent changes for quality and security"
/fix "Implement suggested improvements"
```

## By Use Case

### Frontend Development
- UI/UX Design - `/frontend-design` for mockups and design
- Component Development - `/plan → /clear → /cook → /test`
- Styling - `/frontend-design` for aesthetic components

### Backend Development
- API Development - `/plan → /clear → /cook → /test`
- Database Changes - `/plan "add user table" → /clear → /cook`
- Performance Optimization - `/debug` issue then `/fix`

### Full Stack
- Complete Features - See [Feature Development](/docs/workflows/feature-development)
- Authentication - `/plan "add authentication with Better Auth"` → `/cook`
- E-commerce - `/plan "add Stripe payment integration"` → `/cook`

### DevOps & Infrastructure
- Docker Setup - `/plan "add Docker configuration"` → `/cook`
- CI/CD - `/fix` for CI issues
- Deployment - `/plan "deploy to Cloudflare Workers"`

## Advanced Workflows

### Multi-agent Collaboration
```bash
/plan "complex feature with multiple components"
# Spawns: planner → researcher → frontend dev → backend dev → tester

/fix "production bug"
# Spawns: debugger → researcher → dev → tester → reviewer
```

### Content Creation
```bash
"Create marketing copy for new feature"  # Use copywriting skill (quality mode)
"Improve existing landing page"  # Use copywriting skill (enhance workflow)
# Use ai-artist skill (creative mode) for visual assets
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
