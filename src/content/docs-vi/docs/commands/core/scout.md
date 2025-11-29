---
title: /scout
description: "Documentation for /scout
description:
section: docs
category: commands/core
order: 4
published: true"
section: docs
category: commands/core
order: 4
published: true
---

# /scout

High-speed parallel codebase exploration. Spawns multiple search agents to quickly find relevant files, implementations, and integration points before development work.

## Syntax

```bash
/scout [user-prompt] [scale]
```

## When to Use

- **Pre-Implementation**: Find relevant files before starting feature work
- **Codebase Understanding**: Quickly understand how existing features work
- **Integration Discovery**: Locate where to connect new functionality
- **Pattern Recognition**: Find existing implementations to follow
- **Refactoring Prep**: Identify all files affected by planned changes

## Quick Example

```bash
/scout [find all authentication and authorization implementations] 3
```

**Output**:
```
Spawning 3 scout agents in parallel...

Agent 1: Searching src/auth/, src/middleware/
✓ Found: src/auth/login.js, src/auth/register.js, src/middleware/auth.js

Agent 2: Searching src/routes/, src/controllers/
✓ Found: src/routes/auth.js, src/controllers/user.js

Agent 3: Searching tests/, docs/
✓ Found: tests/auth/*.test.js, docs/api/authentication.md

Results saved to: plans/scouts/authentication-search-20251030.md
```

**Result**: Located 8 relevant files in 15 seconds across 3 parallel searches. Ready to implement auth feature.

## Arguments

- `[user-prompt]`: What you're searching for (be specific about feature, pattern, or file type)
- `[scale]`: Number of parallel scout agents to spawn (default: 3, recommended: 2-5)

## What Happens

When you run this command:

1. **Intelligent Division**: Analyzes your search prompt and divides the codebase into logical regions
2. **Parallel Spawning**: Launches multiple `Explore` subagents simultaneously, each searching different folders
3. **External Tools**: Each agent uses external agentic coding tools (Gemini, OpenCode, Claude) for fast search
4. **Result Aggregation**: Combines findings from all agents into single report
5. **Output Saved**: Results written to `plans/scouts/[search-name]-[date].md`

**Agents Invoked**: Multiple `Explore` subagents (quantity = scale parameter)

**Timeout**: 3 minutes per agent (skips agents that don't return in time)

## Complete Example

### Scenario: Adding Real-Time Features

You want to add WebSocket support but need to understand existing patterns first.

```bash
/scout [find WebSocket, event handlers, and real-time implementations] 4
```

**Process**:

**1. Agent Division**
```
Analyzing codebase structure...

Agent 1: src/websocket/, src/events/
Agent 2: src/server.js, src/config/
Agent 3: src/middleware/, src/utils/
Agent 4: tests/integration/, docs/
```

**2. Parallel Execution**
```
⟳ Agent 1: Searching WebSocket implementations...
⟳ Agent 2: Searching server setup and configuration...
⟳ Agent 3: Searching middleware and utilities...
⟳ Agent 4: Searching tests and documentation...

[15 seconds later]

✓ Agent 1: Complete (3 files)
✓ Agent 2: Complete (2 files)
✓ Agent 3: Complete (4 files)
✓ Agent 4: Complete (5 files)
```

**3. Report Generated**
```markdown
# Scout Report: WebSocket & Real-Time Implementations
Date: 2025-10-30
Scale: 4 agents
Duration: 15.3s

## Findings

### WebSocket Setup
- src/websocket/server.js - Main WebSocket server configuration
- src/websocket/handlers.js - Event handlers for client connections
- src/websocket/rooms.js - Room management for broadcasting

### Server Integration
- src/server.js:45 - WebSocket server attached to Express
- src/config/websocket.js - WebSocket configuration (port, CORS)

### Middleware & Utilities
- src/middleware/ws-auth.js - WebSocket authentication middleware
- src/utils/ws-emit.js - Helper for emitting events
- src/utils/broadcast.js - Room broadcasting utility
- src/middleware/rate-limit-ws.js - Rate limiting for WebSocket events

### Tests & Documentation
- tests/integration/websocket.test.js - WebSocket connection tests
- tests/integration/broadcast.test.js - Broadcasting tests
- tests/integration/ws-auth.test.js - Auth middleware tests
- docs/api/websocket.md - WebSocket API documentation
- docs/guides/real-time.md - Real-time features guide

## Patterns Observed

1. **Authentication Pattern**
   - JWT token sent via WebSocket handshake query params
   - Middleware validates on connection, stores user in socket.data

2. **Event Handling Pattern**
   - Handlers defined in separate files by domain
   - Events namespaced: user:*, message:*, notification:*

3. **Room Management**
   - Users join rooms based on resource access
   - Broadcast helper checks permissions before emitting

## Integration Points

To add new real-time features:
1. Create handler in src/websocket/handlers/[feature].js
2. Register handler in src/websocket/server.js
3. Use src/utils/broadcast.js for room events
4. Add tests in tests/integration/websocket/

## Files for Review (14 total)
[Complete file list with line references]
```

## Scale Parameter Guidelines

### Small Projects (<100 files)
```bash
/scout [search criteria] 2
```
Two agents sufficient for small codebases.

### Medium Projects (100-500 files)
```bash
/scout [search criteria] 3
```
Default scale, balances speed and thoroughness.

### Large Projects (500+ files)
```bash
/scout [search criteria] 5
```
More agents for faster parallel coverage.

### Monorepos
```bash
/scout [search criteria in specific-package] 4
```
Scope search to specific package or directory.

## Search Prompt Best Practices

### Be Specific

✅ **Good:**
```bash
/scout [find API routes, controllers, and middleware for user management] 3
/scout [locate all database models, migrations, and ORM configurations] 3
/scout [find authentication, JWT handling, and session management] 3
```

❌ **Vague:**
```bash
/scout [find stuff about users] 3
/scout [search the code] 3
/scout [look for things] 3
```

### Include Context

Mention feature domain or pattern:
```bash
/scout [payment processing with Stripe: webhooks, charge creation, subscription handling] 4
```

### Specify File Types if Relevant

```bash
/scout [all TypeScript test files for API endpoints] 3
/scout [React components for dashboard and settings pages] 3
/scout [Docker, Kubernetes, and deployment configs] 2
```

## Common Use Cases

### Before New Feature

```bash
# 1. Scout existing patterns
/scout [find similar features to understand patterns] 3

# 2. Review findings
cat plans/scouts/latest-report.md

# 3. Plan implementation
/plan [add new feature following discovered patterns]
```

### Understanding Legacy Code

```bash
# Find how feature works
/scout [trace email sending from trigger to delivery] 3

# Review flow
# [Report shows: queue → worker → mailer → templates]
```

### Pre-Refactoring

```bash
# Find all affected files
/scout [find all files importing deprecated utility] 4

# See impact
# [Report shows 23 files across 5 modules]

# Plan refactor
/plan [migrate to new utility pattern]
```

### Integration Point Discovery

```bash
# Find where to hook in
/scout [find all event emitters and listeners for audit logging] 3

# Review integration points
# [Report shows 12 emit points, 3 listeners]

# Add new listener
/cook [add audit log listener for user events]
```

## Output Structure

Reports saved to `plans/scouts/` with structure:

```markdown
# Scout Report: [Search Description]
Date: YYYY-MM-DD
Scale: N agents
Duration: Xs

## Findings
[Organized by agent/directory]

## Patterns Observed
[Common patterns across findings]

## Integration Points
[Where to connect new code]

## Files for Review
[Complete list with paths and line refs]

## Next Steps
[Recommended actions]
```

## Performance Notes

### Speed Comparison

**Traditional search** (single-threaded grep):
```bash
# 45 seconds for complex search in large codebase
grep -r "authentication" src/
```

**Scout with scale=3**:
```bash
# 15 seconds for same search
/scout [find authentication implementations] 3
```

**Speedup**: ~3x faster through parallelization

### Token Efficiency

Scout agents are designed to be token-efficient:
- Don't read full file contents
- Extract relevant snippets only
- Summarize findings concisely
- Skip binary and generated files

### Timeout Behavior

Each agent has 3-minute timeout:
```
⟳ Agent 1: Searching... [Complete at 0:15]
⟳ Agent 2: Searching... [Complete at 0:18]
⟳ Agent 3: Searching... [Timeout at 3:00, skipped]

Note: Agent 3 timed out, results partial
```

System continues with available results, doesn't retry.

## Integration with Other Commands

### Scout → Ask

```bash
# 1. Find existing implementations
/scout [find caching implementations] 3

# 2. Ask architectural question with context
/ask [should we consolidate these caching patterns or keep separate?]
```

### Scout → Plan → Cook

```bash
# 1. Scout codebase
/scout [find API error handling patterns] 3

# 2. Plan feature
/plan [add centralized error handling middleware]

# 3. Implement
/cook [implement error handling following discovered patterns]
```

### Scout → Debug

```bash
# 1. Find relevant files
/scout [find all database connection handling] 3

# 2. Debug issue
/debug [connection pool exhaustion in production]
```

## Advanced Usage

### Focused Search

Narrow scope for faster results:
```bash
/scout [search only in src/api/ for route handlers] 2
```

### Multi-Domain Search

Search across different concerns:
```bash
/scout [find all references to user model: database, API, tests, docs] 5
```

### Pattern Hunting

Find implementation examples:
```bash
/scout [find examples of async/await error handling in controllers] 3
```

## Common Issues

### Too Many Results

**Problem**: Scout returns 100+ files

**Solution**: Narrow search scope
```bash
# Instead of:
/scout [find user code] 3

# Use:
/scout [find user authentication in API routes only] 2
```

### Agent Timeout

**Problem**: Agents timing out (large codebase)

**Solution**: Increase scale or narrow scope
```bash
# More agents to divide work
/scout [search criteria] 5

# Or narrow scope
/scout [search only in src/auth/] 2
```

### Irrelevant Results

**Problem**: Found files not relevant

**Solution**: Be more specific in prompt
```bash
# Instead of:
/scout [find tests] 3

# Use:
/scout [find integration tests for payment API] 3
```

### Missing Results

**Problem**: Expected files not found

**Solution**: Check if agents timed out, or search manually
```bash
# Check scout report for timeout notes
cat plans/scouts/latest-report.md

# Search manually for specific file
find src/ -name "*payment*"
```

## Related Commands

- [/ask](/docs/commands/core/ask) - Ask architectural questions about scouted code
- [/plan](/docs/commands/core/plan) - Create implementation plan using scout findings
- [/cook](/docs/commands/core/cook) - Implement feature after scouting integration points

---

**Key Takeaway**: `/scout` uses parallel agent search to quickly map your codebase, finding relevant files 3x faster than traditional search, providing context for informed development decisions.
