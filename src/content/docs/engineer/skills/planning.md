---
title: Planning Skill
description: Transform complex requirements into executable technical plans through research, codebase analysis, and solution design
section: engineer
kit: engineer
category: skills/tools
order: 11
published: true
---
# Planning

Transform vague requirements into detailed, executable technical plans through systematic research, codebase analysis, and solution design.

## Core Principle

**YAGNI, KISS, DRY first. Plans over code. Brutal honesty over politeness.**

Before any implementation, a well-researched plan eliminates wasted effort, premature optimization, and architectural regret. This skill doesn't write code—it creates battle-tested blueprints that junior developers can execute confidently.

## When to Use

Always use for:
- New feature implementations
- System architecture decisions
- Technical approach evaluation
- Complex refactoring projects

Especially when:
- Requirements span multiple components
- Trade-offs need formal comparison
- Codebase patterns must be preserved
- Security/performance are critical

## The Process

### 1. Initial Analysis
Read codebase docs, `development-rules.md`, existing patterns. Understand constraints before proposing solutions.

### 2. Research Phase
Spawn researcher agents for unknowns. Investigate libraries, patterns, architectural approaches. Skip if reports already provided.

### 3. Codebase Understanding
Use scout agents to analyze structure, dependencies, conventions. Skip if scout reports provided.

### 4. Solution Design
Synthesize research + codebase analysis. Design architecture with clear trade-offs. Provide 2-3 options when no clear winner exists.

### 5. Plan Documentation
Write self-contained plans with:
- Context: Why this problem exists
- Options: Evaluated alternatives with pros/cons
- Recommendation: Chosen approach with rationale
- Phases: Step-by-step implementation breakdown
- Security/Performance: Addressed concerns
- Validation: How to verify success

### 6. Review & Output
Ensure plan is actionable by junior developers. Include code snippets/pseudocode for clarity. Store in timestamped directory.

## Common Use Cases

### Implementing OAuth Authentication
**Who**: Full-stack developer adding social login
```
"Add Google OAuth to our Next.js app. We use NextAuth but haven't configured providers yet. Users should sign in with Google, store profile in PostgreSQL, and maintain sessions securely."
```

### Migrating to Microservices
**Who**: Backend architect refactoring monolith
```
"Plan migration of our user management module from Rails monolith to standalone microservice. Current system handles auth, profiles, and permissions. 50k active users. Zero downtime required."
```

### Real-Time Chat Feature
**Who**: Product engineer adding messaging
```
"Design real-time chat for our SaaS dashboard. Users need 1-on-1 and group conversations with message history, typing indicators, and read receipts. Tech stack: React + Node.js. Consider WebSockets vs SSE."
```

### Database Schema Refactoring
**Who**: Data engineer optimizing queries
```
"Refactor our e-commerce product catalog schema. Current design has 12 joins for category filtering, causing 3s page loads. 100k products, 5k categories. Must maintain backward compatibility during migration."
```

### CI/CD Pipeline Setup
**Who**: DevOps engineer automating deployments
```
"Create CI/CD pipeline for our TypeScript monorepo with 6 apps (3 Next.js, 2 Express APIs, 1 React Native). We use GitHub Actions. Need automated testing, preview deployments, and production releases."
```

## Pro Tips

**Not activating?** Say: *"Use planning skill to create a detailed implementation plan with research and trade-off analysis."*

**Active Plan State**: Planning skill creates `.claude/active-plan` to prevent version proliferation. It prompts "Continue with existing plan? [Y/n]" when resuming work.

**Directory Structure**:
```
plans/20251208-1430-oauth-implementation/
├── research/          # Researcher agent reports
├── scout/             # Codebase analysis reports
├── reports/           # General findings
├── plan.md            # Main plan document
└── phase-01-setup.md  # Implementation phases
```

**Report Location**: All agents write to `{active-plan}/reports/` using format `{agent}-{YYMMDD}-{slug}.md`. Fallback: `plans/reports/`

**Quality Gates**:
- Thorough: Consider edge cases, security, performance
- Specific: Concrete steps, not vague guidance
- Maintainable: Align with codebase patterns
- Actionable: Junior devs can execute without guessing

## Related Skills

- [Sequential Thinking](/docs/engineer/skills/sequential-thinking) - Multi-step analysis
- [Problem Solving](/docs/engineer/skills/problem-solving) - Complexity resolution
- [Research](/docs/engineer/skills/research) - External investigation

## Key Takeaway

Planning creates comprehensive, executable blueprints through research, codebase analysis, and trade-off evaluation. Plans are self-contained documents stored in timestamped directories with active plan tracking to prevent version chaos.
