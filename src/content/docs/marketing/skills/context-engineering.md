---
title: "ckm:context-engineering"
description: "Context usage monitoring, token optimization, agent architectures, and memory management for efficient AI workflows."
section: marketing
category: skills
order: 69
---

> Maximize AI agent performance by engineering context windows, optimizing token usage, and designing efficient multi-agent architectures.

## What This Skill Does

**The Challenge**: Long AI sessions hit context limits, causing agents to lose memory, repeat work, or produce degraded output. Token costs spiral without visibility. Multi-agent systems fail silently when context isn't managed properly.

**The Solution**: Context Engineering skill provides token usage monitoring, context window management strategies, memory persistence patterns, and agent architecture templates that stay efficient across long workflows.

## Activation

**Implicit**: Activates when session context grows large, agent produces repetitive output, or user requests multi-agent architecture.

**Explicit**: Activate via prompt:
```
Activate context-engineering skill to optimize [workflow/agent/session]
```

## Capabilities

### 1. Context Budget Management
Track and control token usage across sessions.

**Context budget framework**:
```
Total context: 200,000 tokens
├── System prompt: ~5,000 (2.5%)
├── Project context (CLAUDE.md, docs): ~20,000 (10%)
├── Working memory (current task): ~50,000 (25%)
├── File content (active files): ~80,000 (40%)
└── Reserve (output buffer): ~45,000 (22.5%)
```

**Warning signs of context saturation**:
- Agent repeats instructions it should already know
- Responses become generic or lose specificity
- Earlier conversation context disappears from outputs

### 2. Context Compression Strategies
Reduce token usage without losing critical information.

**Techniques**:
- **Summarize completed phases**: Replace 5,000-token discussion with 500-token summary
- **Reference, don't repeat**: "See `docs/schema.md` line 45" instead of pasting content
- **Progressive disclosure**: Load only relevant file sections, not entire files
- **Structured handoffs**: Write key decisions to files before starting new sub-tasks

### 3. Memory Persistence Patterns
Maintain state across sessions and agent handoffs.

**Memory layers**:
| Layer | Storage | Persistence |
|-------|---------|-------------|
| Working memory | Context window | Session only |
| Short-term | `plans/` directory | Project lifetime |
| Long-term | `docs/` directory | Permanent |
| Shared | `~/.claude/MEMORY.md` | Cross-project |

### 4. Agent Architecture Templates
Design multi-agent workflows with efficient context boundaries.

**Patterns**:
- **Sequential chain**: Each agent receives summary, not full history
- **Parallel workers**: Agents work on isolated files — no shared context
- **Hierarchical**: Lead agent manages context; workers receive focused tasks

## Prerequisites

- Claude Code session with monitoring enabled
- `plans/` and `docs/` directories initialized

## Best Practices

**1. Write to disk, don't hold in context**
If information needs to persist, save it to a file immediately.

**2. Start fresh for new concerns**
Spawn a sub-agent for isolated tasks rather than extending a long session.

**3. Summarize before handoff**
End every agent session with a structured summary written to `plans/reports/`.

## Common Use Cases

### Use Case 1: Long Implementation Session
**Scenario**: Building a complex feature across 10+ files over 3 hours.

**Workflow**:
1. Create `plans/session-plan.md` with task list
2. Work in phases — complete and summarize each before next
3. After each phase, write findings to `plans/phase-N-report.md`
4. Clear conversation and load only the next phase's context

### Use Case 2: Multi-Agent Marketing Campaign
**Scenario**: Research + copywriting + design agents working in parallel.

**Workflow**:
1. Research agent saves findings to `plans/research/`
2. Copy agent reads research files (not conversation history)
3. Design agent receives copy via file, not direct handoff
4. Lead agent reads all outputs and produces final deliverable

## Troubleshooting

**Issue**: Agent "forgets" earlier instructions mid-session
**Solution**: Context window is full. Start new session, load key context from saved files.

**Issue**: Multi-agent pipeline produces inconsistent outputs
**Solution**: Define strict file interface contracts. Each agent writes to its owned path; reads from others' paths.

## Related Skills

- [Claude Code](/docs/marketing/skills/claude-code) - Claude Code configuration
- [Kit Builder](/docs/marketing/skills/kit-builder) - Build efficient agent workflows
- [Debugging](/docs/marketing/skills/debugging) - Debug context and agent issues
- [Marketing Dashboard](/docs/marketing/skills/marketing-dashboard) - Orchestrate marketing agents

## Related Commands

- `/ckm:plan` - Structure work to optimize context
- `/ckm:brainstorm` - Design agent architectures
