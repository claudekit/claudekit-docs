---
title: /scout:ext
description: Scout codebase using external agentic tools like Gemini CLI for enhanced search capabilities and large context
section: engineer
kit: engineer
category: commands/core
order: 71
published: true
---

# /scout:ext

External tool-powered codebase scouting. Uses Gemini CLI, Opencode, and Explore agents for enhanced search capabilities, especially for large codebases that exceed standard context limits.

## Syntax

```bash
/scout:ext [user-prompt] [scale]
```

## When to Use

- **Large Codebases**: Projects exceeding standard context windows
- **Semantic Search**: When you need AI-powered understanding
- **Complex Queries**: Multi-faceted questions about codebase
- **Parallel Exploration**: When thoroughness matters more than speed

## Quick Example

```bash
/scout:ext [find all authentication implementations] 5
```

**Output**:
```
Analyzing scale: 5 (Gemini CLI + Explore)

Dispatching tools...
→ Gemini CLI: Loading codebase context (1.2M tokens)
→ Explore Agent 1: src/auth/**
→ Explore Agent 2: src/middleware/**
→ Explore Agent 3: src/api/auth/**

Progress:
[██████████] Gemini CLI: Complete (45s)
[██████████] Explore 1: Complete (12s)
[██████████] Explore 2: Complete (8s)
[██████████] Explore 3: Complete (15s)

Aggregating results...

Report: plans/reports/scout-ext-251129.md
```

## Arguments

- `[user-prompt]`: What to search for (required)
- `[scale]`: Search thoroughness 1-10 (optional, default: 3)

## Tool Selection by Scale

| Scale | Tools Used | Context Size | Best For |
|-------|------------|--------------|----------|
| 1-2 | Explore agents only | Standard | Quick searches |
| 3-5 | Gemini CLI + Explore | 2M tokens | Most projects |
| 6-10 | Gemini + Opencode + Explore | 2M+ tokens | Enterprise codebases |

## What It Does

### Step 1: Analyze Scale

Determines tool selection based on scale parameter:

```
Scale: 5
→ Enable Gemini CLI (large context)
→ Enable Explore agents (parallel)
→ Skip Opencode (scale < 6)
```

### Step 2: Select Tools

**Gemini CLI**:
- 2M token context window
- Semantic code understanding
- Cross-file relationship analysis

**Opencode**:
- Alternative LLM-powered search
- Different perspective on codebase
- Complementary to Gemini

**Explore Agents**:
- Multiple parallel searches
- Directory-specific exploration
- Fast pattern matching

### Step 3: Dispatch in Parallel

All selected tools run simultaneously:

```
Launching parallel tools...

[Gemini CLI] Processing entire codebase...
[Explore 1] Scanning src/auth/**
[Explore 2] Scanning src/api/**
[Explore 3] Scanning lib/**
```

### Step 4: Aggregate Results

Combines findings from all tools:

```
Results aggregation:

Gemini CLI found:
- JWT implementation in src/auth/jwt.ts
- Session handling in src/auth/session.ts
- OAuth2 providers in src/auth/providers/

Explore agents found:
- Middleware auth in src/middleware/auth.ts
- API route guards in src/api/auth/guards.ts
- Token refresh in lib/token.ts

Combined: 6 unique auth implementations
```

### Step 5: Generate Report

Creates comprehensive report:

```
Report saved: plans/reports/scout-ext-251129.md

Contents:
1. Search Query
2. Tools Used
3. Findings by Tool
4. Combined Results
5. Recommendations
```

## Output Location

**With active plan**:
```
{active-plan}/reports/scout-ext-YYMMDD.md
```

**Without active plan**:
```
plans/reports/scout-ext-YYMMDD.md
```

## Advantages Over /scout

| Feature | /scout | /scout:ext |
|---------|--------|------------|
| Context size | Standard | 2M tokens |
| External tools | No | Gemini, Opencode |
| Semantic search | Basic | Advanced |
| Large codebases | Limited | Excellent |
| Parallel tools | Internal only | Multiple external |

## Complete Example

### Scenario: Understanding Authentication in Large Monorepo

```bash
/scout:ext [how does authentication work across all services?] 7
```

**Execution**:

```
Scale: 7 (Full external toolset)

Launching tools:
→ Gemini CLI: Loading monorepo (1.8M tokens)
→ Opencode: Analyzing architecture
→ Explore 1: services/auth/**
→ Explore 2: services/api/**
→ Explore 3: packages/shared/auth/**
→ Explore 4: libs/security/**

Progress:
[██████████] Explore 1: Complete (10s)
[██████████] Explore 2: Complete (12s)
[██████████] Explore 3: Complete (8s)
[██████████] Explore 4: Complete (15s)
[██████████] Opencode: Complete (35s)
[██████████] Gemini CLI: Complete (52s)

═══════════════════════════════════════
        AGGREGATED FINDINGS
═══════════════════════════════════════

Authentication Architecture:
- Central auth service at services/auth/
- Shared JWT library in packages/shared/auth/
- Per-service middleware integration

Implementation Details:
1. JWT tokens (access + refresh)
2. OAuth2 providers (Google, GitHub)
3. API key authentication for services
4. Session fallback for legacy clients

Cross-Service Flow:
User → API Gateway → Auth Service → JWT → Target Service

Files Identified: 23
Services Involved: 5
Shared Libraries: 2

Report: plans/reports/scout-ext-251129.md
═══════════════════════════════════════
```

## Scale Guidelines

### Scale 1-2: Quick Search

```bash
/scout:ext [find database config] 1
```
- Uses Explore agents only
- Fast results (~10-20s)
- Good for specific file searches

### Scale 3-5: Standard Search

```bash
/scout:ext [understand the API architecture] 4
```
- Gemini CLI + Explore
- Balanced depth and speed
- Good for most queries

### Scale 6-10: Deep Analysis

```bash
/scout:ext [comprehensive security audit of auth flow] 8
```
- All tools engaged
- Maximum thoroughness
- Best for complex analysis

## Limitations

### Timeout

Each tool has 5-minute timeout:

```
Tool timeout: 5 minutes

⚠️ Gemini CLI timed out
Partial results collected from other tools.
```

### External Tool Availability

Requires configured external tools:

```bash
# Tools must be installed and configured
gemini --version  # Gemini CLI
opencode --version  # Opencode
```

### API Costs

External tools may incur API costs:

```
Gemini CLI: Uses Gemini API credits
Opencode: Uses configured LLM API
```

## Best Practices

### Match Scale to Codebase

```bash
# Small project (< 50 files)
/scout:ext [query] 2

# Medium project (50-500 files)
/scout:ext [query] 4

# Large project (500+ files)
/scout:ext [query] 7
```

### Be Specific

```bash
# Good: Specific query
/scout:ext [find all places where user permissions are checked] 5

# Less effective: Vague
/scout:ext [security stuff] 5
```

## Related Commands

- [/scout](/docs/engineer/commands/core/scout) - Standard codebase exploration
- [/review:codebase](/docs/engineer/commands/core/review-codebase) - Comprehensive code analysis
- [/ask](/docs/engineer/commands/core/ask) - Architectural questions

---

**Key Takeaway**: `/scout:ext` extends codebase exploration with external AI tools, enabling semantic search across large codebases that exceed standard context limits.
