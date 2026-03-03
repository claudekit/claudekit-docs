---
title: "Workflows"
description: "Task-oriented guides for common development scenarios with ClaudeKit"
section: workflows
category: engineer
order: 0
published: true
---
# Workflows

Task-oriented guides for common development scenarios using ClaudeKit's slash commands and agents.

## Popular Workflows

### Feature Development
[**Adding a New Feature**](/docs/workflows/adding-feature) - Complete feature lifecycle from planning to deployment
```bash
/ck:plan "add user authentication with OAuth"
/clear  # Free context before implementation
/ck:cook "Implement user authentication with OAuth as planned"
/ck:fix
/ck:git pr "feature/user-auth"
```

### Bug Fixing
[**Fixing Bugs**](/docs/workflows/fixing-bugs) - Systematic approach to debugging and fixing issues
```bash
/ck:debug "Login button not working, please investigate and fix"
/ck:test
```

### Documentation
[**Documentation Workflow**](/docs/workflows/documentation) - Keep docs in sync with code changes
```bash
/ck:docs init
/ck:docs update "after feature changes"
```

## Quick Workflows

### Setup New Project
```bash
ck init my-project --kit engineer
cd my-project
/ck:plan "set up project structure"
/clear  # Free context before implementation
/ck:cook "Set up project structure as planned"
```

### Add New Feature
```bash
/ck:plan "add [feature description]"
/clear  # Free context before implementation
/ck:cook "Implement [feature description] as planned"
/ck:frontend-design "Create UI mockups if needed"
/ck:test
```

### Deploy to Production
```bash
/ck:plan "prepare for production deployment"
/ck:fix "Fix CI issues"
/ck:test
```

### Code Review
```bash
/ck:code-review "Review recent changes for quality and security"
/ck:fix "Implement suggested improvements"
```

## By Use Case

### Frontend Development
- UI/UX Design - `/ck:frontend-design` for mockups and design
- Component Development - `/ck:plan → /clear → /ck:cook → /ck:test`
- Styling - `/ck:frontend-design` for aesthetic components

### Backend Development
- API Development - `/ck:plan → /clear → /ck:cook → /ck:test`
- Database Changes - `/ck:plan "add user table" → /clear → /ck:cook`
- Performance Optimization - `/ck:debug` issue then `/ck:fix`

### Full Stack
- Complete Features - See [Adding a New Feature](/docs/workflows/adding-feature)
- Authentication - `/ck:plan "add authentication with Better Auth"` → `/ck:cook`
- E-commerce - `/ck:plan "add Stripe payment integration"` → `/ck:cook`

### DevOps & Infrastructure
- Docker Setup - `/ck:plan "add Docker configuration"` → `/ck:cook`
- CI/CD - `/ck:fix` for CI issues
- Deployment - `/ck:plan "deploy to Cloudflare Workers"`

## Advanced Workflows

### Multi-agent Collaboration
```bash
/ck:plan "complex feature with multiple components"
# Spawns: planner → researcher → frontend dev → backend dev → tester

/ck:fix "production bug"
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
3. [Adding a New Feature](/docs/workflows/adding-feature) - Complete workflow example

## Reference

- [Skills Reference](/docs/engineer/skills) - All available skills
- [Agents Overview](/docs/engineer/agents) - Meet your AI team
- [Skills Library](/docs/engineer/skills) - Built-in knowledge modules

## Need Help?

- [Troubleshooting](/docs/support/troubleshooting) - Common issues
- [FAQ](/docs/support/faq) - Frequently asked questions
- [Support](/docs/support) - Get help from the community
