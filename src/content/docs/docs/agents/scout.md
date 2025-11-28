---
title: Scout Agent
description: Rapidly locate relevant files across large codebases using parallel agentic search with Gemini and OpenCode
section: docs
category: agents
order: 8
published: true
---

# Scout Agent

The scout agent rapidly locates relevant files across large codebases by orchestrating multiple external AI agents (Gemini, OpenCode) in parallel, providing actionable file lists in under 5 minutes.

## What Scout Does

- Rapidly locates relevant files across codebases of any size
- Orchestrates multiple external AI agents (Gemini, OpenCode) in parallel
- Divides codebase into logical sections for efficient searching
- Synthesizes findings from multiple agents into organized file lists
- Handles timeouts gracefully without restarts
- Provides file paths organized by relevance and purpose

## When to Use

Use scout when:
- Beginning feature work spanning multiple directories
- Finding files related to specific functionality
- Debugging issues across unknown parts of codebase
- Understanding project structure before making changes
- Locating integration points for new features
- Before making widespread refactoring changes
- Onboarding to unfamiliar codebase

## Quick Example

```bash
# Find files related to authentication
/scout "locate all authentication-related files" 5
```

**What happens**:
1. Scout divides codebase into 5 logical sections
2. Scout spawns 5 agents (Gemini or OpenCode) in parallel
3. Each agent searches its assigned section for authentication files
4. Result: Organized list of relevant file paths in <5 minutes

## How It Works

### Step 1: Scale Decision

Scout determines how many agents to spawn based on scale parameter:

```
Scale ≤ 3: Use Gemini only (faster, more accurate for small searches)
Scale > 3: Use Gemini + OpenCode (better coverage for large codebases)
```

**Scale Guidelines**:
- **1-2 agents**: Small projects (<100 files) or targeted searches
- **3-5 agents**: Medium projects (100-500 files) or specific features
- **6-10 agents**: Large projects (500+ files) or complex searches
- **10+ agents**: Monorepos or organization-wide searches

### Step 2: Codebase Division

Scout divides codebase into logical sections for parallel searching:

```
Example: Finding authentication files (scale=5)

Section 1: /src/auth/          → Agent 1 (Gemini)
Section 2: /src/middleware/    → Agent 2 (Gemini)
Section 3: /src/api/           → Agent 3 (Gemini)
Section 4: /src/components/    → Agent 4 (OpenCode)
Section 5: /tests/             → Agent 5 (OpenCode)
```

### Step 3: Parallel Search

Multiple agents search simultaneously with 3-minute timeout per agent:

```
T+0:00 → All 5 agents start searching
T+1:30 → Agents 1, 2 complete (Gemini fast)
T+2:45 → Agents 3, 4, 5 complete (OpenCode thorough)
T+3:00 → Any remaining agents timeout (no restart)
T+3:15 → Scout synthesizes results
```

**Timeout Handling**: Scouts don't restart on timeout. Partial results are used to maintain <5 minute completion target.

### Step 4: Results Synthesis

Scout synthesizes findings into organized file list:

```markdown
# Authentication Files

## Core Authentication
- src/auth/auth.service.ts - Main authentication service
- src/auth/jwt.strategy.ts - JWT token strategy
- src/auth/auth.controller.ts - Auth endpoints
- src/auth/auth.guard.ts - Route protection guard

## Middleware
- src/middleware/auth.middleware.ts - Express auth middleware
- src/middleware/role.middleware.ts - Role-based access control

## API Integration
- src/api/auth.routes.ts - Authentication routes
- src/api/user.routes.ts - User profile routes (auth required)

## Frontend Components
- src/components/LoginForm.tsx - Login UI
- src/components/ProtectedRoute.tsx - Route wrapper

## Tests
- tests/auth/auth.service.test.ts - Service unit tests
- tests/integration/auth.test.ts - Integration tests
- tests/e2e/login.test.ts - End-to-end tests

## Configuration
- src/config/auth.config.ts - Auth configuration
- .env.example - Environment variables (JWT secret, etc.)
```

## Tools & Capabilities

Scout has access to:

- **Gemini API**: Fast, accurate file search for focused queries
- **OpenCode CLI**: Thorough search across large codebases
- **Parallel Orchestration**: Runs multiple agents simultaneously
- **Timeout Management**: 3-minute timeout per agent, no restarts
- **Result Aggregation**: Combines findings from all agents
- **Deduplication**: Removes duplicate file paths from results

## Output Format

Scout provides concise, organized list of relevant file paths grouped by purpose.

**Example Output**:

```
# Files Related to: "Stripe payment integration"

## Payment Processing
- src/services/payment.service.ts
- src/services/stripe.service.ts
- src/controllers/payment.controller.ts

## Order Management
- src/services/order.service.ts
- src/models/order.model.ts
- src/models/payment.model.ts

## API Routes
- src/api/payment.routes.ts
- src/api/webhook.routes.ts

## Frontend
- src/components/CheckoutForm.tsx
- src/components/PaymentStatus.tsx
- src/pages/checkout.tsx

## Configuration
- src/config/stripe.config.ts
- .env.example (STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET)

## Tests
- tests/services/payment.service.test.ts
- tests/webhooks/stripe.webhook.test.ts
- tests/integration/payment-flow.test.ts

## Documentation
- docs/payment-integration.md
- docs/stripe-setup.md

---

**Total**: 18 files found
**Search Duration**: 2 minutes 34 seconds
**Agents Used**: 5 (3 Gemini, 2 OpenCode)
```

## Best Practices

✅ **Do**:
- Use appropriate scale for codebase size (3-5 for most projects)
- Be specific in search description ("authentication middleware" vs "auth stuff")
- Review all grouped sections for complete context
- Use scout before starting complex features
- Run scout when debugging unfamiliar code

❌ **Don't**:
- Use excessive scale (>10 agents) for small projects
- Search with vague descriptions ("find stuff related to API")
- Skip reviewing the organized output
- Ignore files in "Configuration" or "Tests" sections
- Start implementation before understanding file relationships

## Common Issues

### Issue: Too Many Files Returned

**Problem**: Scout returns 100+ files, hard to navigate

**Solution**:
- Be more specific in search query
- Reduce scale (fewer agents = more focused search)
- Add constraints: "find authentication files in src/auth directory only"
- Focus on specific file types: "TypeScript service files for payment"

### Issue: Missing Expected Files

**Problem**: Known files not in results

**Solution**:
- Increase scale to search more thoroughly
- Check if files are in excluded directories (.gitignore)
- Make search query more explicit about what you're looking for
- Run targeted scout on specific directory

### Issue: Timeout Without Results

**Problem**: Agent timed out before completing search

**Solution**:
- Results from timed-out agents are partial but still useful
- Other agents likely found relevant files
- Consider reducing search scope or increasing specificity
- Timeout is 3 minutes per agent (by design), no restarts

### Issue: Duplicate Files Listed

**Problem**: Same file appears multiple times

**Solution**:
Scout automatically deduplicates. If you see duplicates, it's intentional because the file is relevant to multiple categories in the organized output.

## Success Criteria

Scout operation is successful when:

✅ **Complete**: All searches finish in <5 minutes
✅ **Actionable**: File list is organized and ready to use
✅ **Relevant**: 80%+ of files are actually related to query
✅ **Comprehensive**: Covers all major areas (core, tests, config, docs)

## When to Increase/Decrease Scale

### Increase Scale (Use More Agents)

When:
- Large codebase (500+ files)
- Complex search spanning many directories
- Need comprehensive coverage
- Initial search missed important files

### Decrease Scale (Use Fewer Agents)

When:
- Small codebase (<100 files)
- Targeted search in specific directory
- Quick exploration, not comprehensive search
- Too many irrelevant files returned

## Performance Benchmarks

**Small Project** (100 files, scale=3):
- Duration: 1-2 minutes
- Agents: 3 Gemini
- Coverage: 95%+

**Medium Project** (500 files, scale=5):
- Duration: 2-4 minutes
- Agents: 3 Gemini + 2 OpenCode
- Coverage: 90%+

**Large Project** (2000+ files, scale=8):
- Duration: 3-5 minutes
- Agents: 4 Gemini + 4 OpenCode
- Coverage: 85%+

**Monorepo** (10000+ files, scale=10):
- Duration: 4-5 minutes (timeout limit)
- Agents: 5 Gemini + 5 OpenCode
- Coverage: 75-80% (trade-off for speed)

## Related

- [Planner Agent](/docs/agents/planner) - Uses scout to locate files before planning
- [Debugger Agent](/docs/agents/debugger) - Uses scout to find relevant files when debugging
- [/scout Command](/docs/commands/core/scout) - Directly invoke scout agent
- [Code Standards](/docs/core-concepts/code-standards) - File organization patterns scout understands

---

**Next**: Use scout results with [planner agent](/docs/agents/planner) to create implementation plans

**Key Takeaway**: Scout parallelizes file search across multiple AI agents to provide comprehensive, organized file lists in <5 minutes, even for large codebases.
