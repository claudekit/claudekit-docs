---
title: Agents Tổng Quan
description: Understanding ClaudeKit's 14 specialized agents and how they work together
section: docs
category: agents
order: 1
published: true
---

# Agents Overview

ClaudeKit includes 14 specialized agents that work together to handle every aspect of software development. Each agent is optimized for specific tasks and follows established workflows.

## The 14 Specialized Agents

### Development Agents

1. **[planner](/docs/agents/planner)** - Research, analyze, and create implementation plans
2. **[scout](/docs/agents/scout)** - Quickly locate relevant files across large codebases using parallel search
3. **[debugger](/docs/agents/debugger)** - Investigate issues, analyze logs, diagnose problems
4. **[tester](/docs/agents/tester)** - Validate code quality through comprehensive testing

### Quality Assurance

5. **[code-reviewer](/docs/agents/code-reviewer)** - Comprehensive code review and quality assessment

### Documentation & Project Management

6. **[docs-manager](/docs/agents/docs-manager)** - Manage technical documentation and standards
7. **[project-manager](/docs/agents/project-manager)** - Comprehensive project oversight and coordination

### Creative & Design

8. **[ui-ux-designer](/docs/agents/ui-ux-designer)** - Design interfaces, wireframes, and user experiences
9. **[copywriter](/docs/agents/copywriter)** - Create high-converting marketing copy
10. **[brainstormer](/docs/agents/brainstormer)** - Explore ideas, challenge assumptions, and debate technical decisions

### Research & Writing

11. **[researcher](/docs/agents/researcher)** - Multi-source research with documentation analysis and best practices
12. **[journal-writer](/docs/agents/journal-writer)** - Document technical difficulties and project journey

### DevOps & Infrastructure

13. **[git-manager](/docs/agents/git-manager)** - Stage, commit, and push code with professional standards
14. **[database-admin](/docs/agents/database-admin)** - Database optimization, query analysis, and administration

## Why Only 14 Agents?

These 14 agents are carefully optimized for daily development workflows based on practical experience:

- **Proven Effectiveness**: Each agent has been tested in real-world projects
- **Optimized Collaboration**: Agents work together seamlessly
- **Comprehensive Coverage**: Cover all aspects of development
- **Maintainable**: Small enough to maintain, large enough to be effective

> **Note**: If you need a new specialized agent, you can request it at the [ClaudeKit Discord](https://discord.gg/x7SwTSf3wc)

## How Agents Work Together

Agents are automatically orchestrated by ClaudeKit based on predefined workflows. You don't need to manually coordinate them.

### Example: Building a New Feature

```
User: "/cook [add user authentication]"

1. planner Agent
   - Researches authentication best practices
   - Analyzes current codebase architecture
   - Creates detailed implementation plan

2. scout Agent (if needed)
   - Locates existing auth-related files
   - Identifies integration points

3. Implementation (Automatic)
   - Code is written following plan
   - Tests are generated

4. tester Agent
   - Runs test suite
   - Validates security
   - Checks coverage

5. code-reviewer Agent
   - Reviews code quality
   - Checks best practices
   - Validates security patterns

6. docs-manager Agent
   - Updates API documentation
   - Creates usage guides
   - Updates architecture docs

7. git-manager Agent
   - Creates conventional commit
   - Stages all changes
   - Pushes to remote
```

## Agent Orchestration Patterns

### Sequential (Default)

Agents run one after another, each building on the previous agent's work:

```
planner → code → tester → code-reviewer → git-manager
```

**Use when**: Tasks depend on each other

### Parallel

Multiple agents run simultaneously for faster results:

```
scout (dir1) ┐
scout (dir2) ├─→ Aggregate Results → planner
scout (dir3) ┘
```

**Use when**: Tasks are independent

### Hybrid

Combination of sequential and parallel:

```
Parallel Scouts → Sequential Planning → Parallel Implementation → Sequential Testing
```

**Use when**: Complex tasks with mixed dependencies

## Agent Categories

### Planning & Research

- **planner**: Creates implementation plans
- **researcher**: Finds best practices and documentation
- **brainstormer**: Explores ideas and feasibility
- **scout**: Locates files and code patterns

**When to use**: Before implementing features, when researching solutions

### Implementation

- **Main process**: Writes code based on plans
- **tester**: Validates implementation
- **debugger**: Fixes issues

**When to use**: During feature development

### Quality & Review

- **code-reviewer**: Ensures code quality
- **tester**: Validates functionality
- **debugger**: Diagnoses problems

**When to use**: After implementation, before merging

### Documentation

- **docs-manager**: Maintains project documentation
- **journal-writer**: Records technical challenges

**When to use**: After features, during challenges

### DevOps

- **git-manager**: Manages version control
- **database-admin**: Optimizes database

**When to use**: When committing, during DB work

### Creative

- **ui-ux-designer**: Designs interfaces
- **copywriter**: Writes marketing copy

**When to use**: For design and content work

## When Agents are Invoked

Agents can be invoked in three ways:

### 1. Automatically (Recommended)

ClaudeKit automatically orchestrates agents based on:

- Command used (`/cook`, `/fix:hard`, etc.)
- Task complexity
- Workflow requirements

**Example:**
```bash
/cook [add payment integration]
# Automatically invokes: planner → code → tester → code-reviewer → docs-manager → git-manager
```

### 2. Through Commands

Specific commands invoke specific agents:

```bash
/plan [feature]        # Invokes planner + researcher
/test                  # Invokes tester
/debug [issue]         # Invokes debugger
/git:cm                # Invokes git-manager
/docs:update           # Invokes docs-manager
```

### 3. Explicitly (Advanced)

You can explicitly request specific agents in your prompts:

```
"Use the scout agent to find all authentication files,
then use the planner agent to create a migration strategy"
```

## Agent Communication

Agents communicate through:

### Shared Context

- Project documentation (`docs/`)
- Implementation plans (`plans/`)
- Code standards
- System architecture

### Handoff Protocols

Each agent:
1. Receives output from previous agent
2. Performs its specialized task
3. Passes results to next agent
4. Updates shared documentation

### Example Handoff

```
planner Agent Output:
  - Implementation plan saved to plans/auth-feature.md
  ↓
Code Agent Input:
  - Reads plans/auth-feature.md
  - Implements according to plan
  ↓
Code Agent Output:
  - New files created
  - Tests generated
  ↓
tester Agent Input:
  - Runs tests on new files
```

## Agent Configuration

Agents are configured through:

### Workflow Files

Located in `.claude/agents/`, each agent has:

- Role definition
- Capabilities
- When to activate
- Success criteria
- Output format

### Example Agent Config

```markdown
# planner Agent

## Role
Research, analyze, and create comprehensive implementation plans

## When to Activate
- Before implementing new features
- When evaluating technical trade-offs
- For complex refactoring

## Success Criteria
- Detailed implementation plan created
- Saved to plans/ directory
- Includes architecture decisions
- Test strategy defined
```

## Best Practices

### Let Agents Work Together

✅ **Do**: Trust the orchestration
```bash
/cook [build REST API]
# Let ClaudeKit orchestrate all agents automatically
```

❌ **Don't**: Micromanage agents
```bash
# Avoid manually calling each agent
# The system handles this better
```

### Use Appropriate Commands

✅ **Do**: Use command that matches your goal
```bash
/fix:hard [complex bug]  # Invokes: scout + debugger + planner
/fix:fast [typo]         # Invokes: code only
```

❌ **Don't**: Use wrong command for task complexity
```bash
/fix:fast [system crash]  # Too simple for complex issue
```

### Review Agent Output

✅ **Do**: Review plans and changes
```bash
# After /plan, review the generated plan
cat plans/latest-plan.md
# Provide feedback before /cook
```

❌ **Don't**: Blindly accept all changes
```bash
# Always review before committing
```

## Monitoring Agent Activity

### Todo List

ClaudeKit uses TodoWrite tool to show agent progress:

```
✓ planner Agent: Created implementation plan
⟳ Code Agent: Implementing authentication module
⧗ tester Agent: Pending
⧗ code-reviewer Agent: Pending
```

### Agent Reports

After completion, agents provide reports:

```
planner Agent Report:
- Research completed: OAuth2 best practices
- Plan created: plans/oauth-implementation.md
- Estimated time: 2 hours
- Files to modify: 8
```

## Troubleshooting

### Agent Not Activating

**Problem**: Expected agent didn't run

**Solutions:**
1. Check command used is appropriate
2. Verify workflow files exist in `.claude/agents/`
3. Review agent activation criteria
4. Check TodoWrite output for errors

### Agent Conflicts

**Problem**: Agents producing conflicting results

**Solutions:**
1. Review orchestration order
2. Check workflow priorities
3. Ensure agents have clear handoff protocols
4. Update agent configurations if needed

### Slow Agent Response

**Problem**: Agents taking too long

**Solutions:**
1. Use parallel orchestration when possible
2. Scope tasks to be more specific
3. Use faster commands for simple tasks (`/fix:fast` vs `/fix:hard`)
4. Review agent logs for bottlenecks

## Next Steps

Learn more about specific agents:

- [planner Agent](/docs/agents/planner) - Planning and research
- [scout Agent](/docs/agents/scout) - File location and search
- [debugger Agent](/docs/agents/debugger) - Issue diagnosis
- [tester Agent](/docs/agents/tester) - Testing and validation

Or explore:

- [Commands](/docs/commands/) - How to invoke agents
- [Workflows](/docs/core-concepts/workflows) - How agents coordinate
- [Orchestration](/docs/agents/orchestration) - Advanced patterns

---

**Key Takeaway**: ClaudeKit's 14 specialized agents work together automatically through predefined workflows, handling every aspect of software development from planning to deployment.
