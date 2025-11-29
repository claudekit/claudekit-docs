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
[**Feature Development Guide**](./feature-development.md) - Complete feature lifecycle from planning to deployment
```bash
/plan "add user authentication with OAuth"
/cook
/fix:test
/git:pr "feature/user-auth"
```

### Bug Fixing
[**Bug Fixing Workflow**](./bug-fixing.md) - Systematic approach to debugging and fixing issues
```bash
/debug "login button not working"
/fix:hard
/fix:test
/git:cm
```

### Documentation
[**Documentation Workflow**](./documentation.md) - Keep docs in sync with code changes
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
/cook
```

### Add New Feature
```bash
/plan "add [feature description]"
/cook
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
- [UI/UX Design](../docs/commands/#design-commands) - `/design:good`, `/design:fast`
- Component Development - `/plan → /code → /fix:test`
- Styling - `/design:good` for aesthetic components

### Backend Development
- API Development - `/plan → /code → /fix:hard`
- Database Changes - `/plan "add user table" → /code`
- Performance Optimization - `/debug "slow queries" → /fix`

### Full Stack
- Complete Features - See [Feature Development](./feature-development.md)
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
1. [Getting Started Guide](../getting-started/) - Learn the basics
2. [Quick Start](../getting-started/quick-start.md) - Build your first feature
3. [Feature Development](./feature-development.md) - Complete workflow example

## Reference

- [Commands Reference](../docs/commands/) - All available commands
- [Agents Overview](../docs/agents/) - Meet your AI team
- [Skills Library](../docs/docs/skills/) - Built-in knowledge modules

## Need Help?

- [Troubleshooting](../troubleshooting/) - Common issues
- [FAQ](../support/faq/) - Frequently asked questions
- [Support](../support/) - Get help from the community
