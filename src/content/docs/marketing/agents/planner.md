---
title: "Planner Agent"
description: "Research, analyze, and create comprehensive implementation plans for features and technical solutions."
section: marketing
category: agents
order: 1
---
# Planner Agent

> **Your strategic architect** - Turns complex requirements into clear, actionable plans

## What This Agent Does

You know that sinking feeling when someone says "just build a payment system" and you're staring at a blank screen wondering where to start? The Planner Agent is your answer to that paralysis.

**The Problem**: Starting a complex feature without a plan leads to rewrites, missed requirements, and technical debt. You waste hours implementing the wrong solution because you didn't research alternatives first.

**The Solution**: The Planner Agent researches, analyzes, and creates comprehensive implementation plans before you write a single line of code. It evaluates trade-offs, identifies dependencies, and gives you a clear roadmap from start to finish.

## Quick Start

Launch the planner when starting any non-trivial feature:

```bash
# The agent will research and create a detailed plan
/planner "Implement OAuth2 authentication for Google and GitHub"
```

You'll get a structured plan with architecture decisions, implementation phases, and success criteria.

## Capabilities

### Strategic Planning
Creates detailed implementation plans with:
- Architecture decisions and rationale
- Technology stack recommendations
- Phase-by-phase implementation steps
- Dependency mapping and critical path analysis
- Risk assessment and mitigation strategies

### Technical Research
Investigates solutions before implementation:
- Evaluates multiple approaches and trade-offs
- Researches best practices and patterns
- Analyzes security implications
- Considers scalability and performance
- Reviews existing codebase for integration points

### Requirements Analysis
Transforms vague requests into concrete specs:
- Breaks down complex features into tasks
- Identifies MVP scope (80/20 rule)
- Defines acceptance criteria
- Maps user journeys
- Documents edge cases and error scenarios

## When to Use

Use the Planner Agent when you need to:
- Start a new feature or major refactoring
- Evaluate technical approaches before committing
- Understand the full scope of a complex change
- Make architecture decisions with confidence
- Plan database migrations or infrastructure changes
- Research third-party integrations

## Example Workflows

### Planning a New Feature

```bash
# User request: "Add webhook support for payment notifications"
/planner "Design webhook system for Stripe and SePay payment notifications"
```

**The planner will**:
1. Research webhook best practices and security patterns
2. Design webhook endpoint architecture
3. Plan signature verification implementation
4. Define retry logic and error handling
5. Create database schema for webhook logs
6. Map integration with existing payment flows
7. Document testing strategy
8. Estimate implementation time

### Evaluating Technical Approaches

```bash
/planner "Should we use PostgreSQL or MongoDB for our analytics data?"
```

**You'll get**:
- Detailed comparison of both databases
- Performance characteristics for your use case
- Cost analysis and operational complexity
- Migration path recommendations
- Final recommendation with rationale

## Best Practices

1. **Start with Plans, Not Code**: Launch the planner before opening your editor. A 30-minute planning session saves hours of refactoring.

2. **Be Specific**: Give context about your project, tech stack, and constraints. "Add authentication" is vague. "Implement JWT-based authentication for Next.js app with PostgreSQL backend" gets better results.

3. **Review and Adjust**: Plans are living documents. If you discover issues during implementation, update the plan and re-evaluate.

4. **Use Plans as Documentation**: The planner creates markdown files in your `plans/` directory. These become historical records of architectural decisions.

## Mental Models the Planner Uses

The Planner Agent applies proven thinking frameworks:

- **Decomposition**: Breaks epic goals into concrete, testable tasks
- **Working Backwards**: Starts from desired outcome and maps the path
- **Second-Order Thinking**: Considers consequences ("What happens after we ship this?")
- **Root Cause Analysis**: Digs past surface requests to find real problems
- **80/20 Rule**: Identifies the 20% of features delivering 80% of value
- **Risk Management**: Asks "What could go wrong?" proactively

## Output Structure

Every plan includes:

```markdown
## Overview
- Goal and business context
- Success criteria
- Timeline estimate

## Architecture Decisions
- Technology choices with rationale
- System design and data flow
- Integration points

## Implementation Phases
Phase 1: [Foundation]
- Task list with acceptance criteria
- Dependencies and blockers
- Testing requirements

Phase 2: [Core Features]
...

## Risk Assessment
- Technical risks and mitigation
- Security considerations
- Performance implications

## Testing Strategy
- Unit test requirements
- Integration test scenarios
- Manual testing checklist
```

## Related Agents

- [Project Manager](/docs/marketing/agents/project-manager) - Tracks progress against plans
- [Docs Manager](/docs/marketing/agents/docs-manager) - Updates documentation from plans
- [Scout](/docs/marketing/agents/scout) - Explores codebase for planning context

## Related Commands

- [`/plan`](/docs/marketing/commands/plan) - Create new implementation plan
- [`/research`](/docs/marketing/commands) - Deep technical research

## Tips

**Follow YAGNI, KISS, and DRY**: The planner operates by these principles. It won't over-engineer solutions or suggest building features you don't need yet.

**Trust the Process**: If the plan suggests starting with a simple approach, resist the urge to complicate it. You can always iterate later.

**Review Historical Plans**: Check `plans/` directory for previous architectural decisions. The planner references these for consistency.
