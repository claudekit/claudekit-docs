---
title: Scout External Agent
description: Rapidly locate files using external agentic tools (Gemini CLI, OpenCode) in parallel
section: engineer
kit: engineer
category: agents
order: 9
published: true
---

# Scout External Agent

Parallelizes file searches across large codebases using external AI tools (Gemini CLI, OpenCode) for 3-5x faster discovery than sequential scanning.

## When to Use

- Large codebase (500+ files) requiring comprehensive search
- Feature work spanning multiple directories
- Need speed via parallel execution
- Want AI-powered semantic search beyond pattern matching

## Key Capabilities

| Capability | Description |
|------------|-------------|
| **Parallel Execution** | Launches 2-5 agents simultaneously (sub-5 min total) |
| **External Tools** | Gemini CLI (≤3 dirs), OpenCode CLI (>3 dirs) |
| **Smart Scaling** | Auto-selects tool based on search scope |
| **Timeout Resilient** | 3-min per agent, uses partial results if timeout |
| **Report Generation** | Saves `scout-ext-{date}-{topic}.md` to active plan |

## Common Use Cases

**1. Feature Discovery**
- **Who**: Developer starting new feature
- **Prompt**: "Find all auth-related files: middleware, API routes, components"

**2. Codebase Mapping**
- **Who**: New team member onboarding
- **Prompt**: "Locate all database models, schemas, and migration files"

**3. Dependency Audit**
- **Who**: Tech lead refactoring
- **Prompt**: "Find all files importing `@/lib/old-api`"

**4. Cross-Module Search**
- **Who**: Full-stack dev debugging
- **Prompt**: "Search frontend + backend for payment processing logic"

**5. Large File Analysis**
- **Who**: Developer investigating slow endpoints
- **Prompt**: "Analyze API routes >500 lines for performance bottlenecks"

## Pro Tips

**Parallel Execution**: Launch all searches in single message for speed:
```bash
gemini -y -p "Search lib/ for email logic" --model gemini-2.5-flash
gemini -y -p "Search app/api/ for email routes" --model gemini-2.5-flash
gemini -y -p "Search components/ for email UI" --model gemini-2.5-flash
```

**Tool Selection**:
- ≤3 directories: Gemini only (`gemini-2.5-flash`)
- >3 directories: Add OpenCode (`opencode/grok-code`)
- External tools unavailable: Auto-fallback to Glob/Grep/Read

**Large File Handling**: When Read fails (>25K tokens):
```bash
echo "What does authentication middleware do in app/middleware/auth.ts?" | gemini -y -m gemini-2.5-flash
```

**Quality Gates**:
- Target <5 min total execution
- Return only relevant file paths (no code snippets in initial scan)
- Use 2-5 agents (diminishing returns beyond 5)

**Timeout Strategy**: Agents timeout after 3 min, NOT restarted. Synthesize partial results and note coverage gaps.

## Related Agents

- [Scout Agent](/docs/agents/scout) - Internal searches (Glob/Grep/Read)
- [Fullstack Developer](/docs/agents/fullstack-developer) - Implements features after discovery

## Key Takeaway

Scout External parallelizes AI-powered searches using external tools for 3-5x faster file discovery in large codebases. Use for comprehensive coverage when internal Scout is too slow.
