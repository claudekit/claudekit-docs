---
title: "Scout External Agent"
description: "Advanced codebase exploration using external AI tools for complex multi-directory searches."
section: marketing
category: agents
order: 7
---

# Scout External Agent

> **Your AI-powered explorer** - Harnesses Gemini and other AI tools for deep codebase analysis

## What This Agent Does

You're working on a massive monorepo with hundreds of directories. You need to find every file that touches user authentication—but it's spread across frontend, backend, mobile, and shared libraries. The standard Scout would take minutes searching sequentially.

**The Problem**: Large, complex codebases need parallel, intelligent search across many directories. Simple pattern matching isn't enough—you need AI that understands code semantics and relationships.

**The Solution**: Scout External orchestrates multiple AI coding assistants (Gemini, OpenCode) to search different parts of your codebase simultaneously. It delegates complex searches to AI tools with massive context windows, then synthesizes results into actionable file lists.

## Quick Start

Delegate complex searches to AI:

```bash
# For large codebase searches
/scout-ext "Find all authentication files across frontend, backend, and mobile apps"
```

Multiple AI tools search in parallel, understanding code semantics to find relevant files you'd miss with pattern matching alone.

## Capabilities

### AI-Powered Search Orchestration
Coordinates multiple AI assistants:
- Delegates search regions to Gemini Flash 2.5 (2M context)
- Uses OpenCode for specialized code analysis
- Runs searches in parallel for speed
- Combines results from multiple tools
- Falls back to standard tools if AI unavailable

### Semantic Code Understanding
AI tools understand code meaning:
- Finds files by functionality, not just keywords
- Identifies related files even with different naming
- Understands import relationships and dependencies
- Recognizes patterns across different codebases
- Suggests files you didn't know were relevant

### Intelligent Directory Division
Optimizes search by logical sections:
- Frontend: `app/`, `components/`, `pages/`
- Backend: `lib/`, `api/`, `services/`
- Mobile: `mobile/ios/`, `mobile/android/`, `mobile/shared/`
- Database: `db/`, `prisma/`, `migrations/`
- Infrastructure: `k8s/`, `docker/`, `.github/`

### Parallel Execution at Scale
Handles massive codebases:
- Spawns 2-5 parallel AI search agents
- 3-minute timeout per agent
- Continues even if some agents timeout
- Completes searches in 3-5 minutes total
- Scales to codebases with thousands of files

### Result Synthesis
Combines findings intelligently:
- Deduplicates files found by multiple agents
- Organizes by category and importance
- Identifies gaps if agents timed out
- Ranks results by relevance
- Provides structured, actionable output

## When to Use

Use Scout External when:
- Working with monorepos or very large codebases
- Need to search across many unrelated directories
- Pattern matching isn't finding all relevant files
- Require semantic understanding of code relationships
- Starting work on features spanning multiple subsystems
- Onboarding to complex, unfamiliar codebases

## Example Workflows

### Monorepo Authentication Search

```bash
/scout-ext "Find all authentication and session management across web, mobile, and API"
```

**AI agents search**:
- Agent 1: Web app (`app/`, `components/`) for auth UI and logic
- Agent 2: API (`api/`, `lib/`) for auth endpoints and utilities
- Agent 3: Mobile (`mobile/`) for mobile auth flows
- Agent 4: Database (`db/`) for user and session schemas
- Agent 5: Shared (`shared/`, `packages/`) for common auth code

**You get**: Comprehensive list of all auth-related files across entire monorepo in under 5 minutes.

### Payment Integration Analysis

```bash
/scout-ext "Locate all payment processing files including Stripe, SePay, webhooks, and transaction logging"
```

**AI understands**:
- "Payment processing" includes checkout flows, not just API calls
- "Webhooks" means both handlers AND configuration
- "Transaction logging" implies database schemas AND audit logs

**Returns**: Not just obvious payment files, but also related error handling, retry logic, and monitoring code.

## Search Strategy

### Small Scale (2-3 agents)
For focused searches:
```bash
# Uses only Gemini
Agent 1: Search lib/ for payment utilities
Agent 2: Search app/api/ for payment routes
Agent 3: Search db/ for payment schemas
```

### Large Scale (4-5 agents)
For comprehensive searches:
```bash
# Uses Gemini + OpenCode for diversity
Agent 1 (Gemini): Frontend payment UI
Agent 2 (Gemini): Backend payment logic
Agent 3 (OpenCode): Database and migrations
Agent 4 (Gemini): Webhook handlers
Agent 5 (OpenCode): Configuration and tests
```

## AI Tool Commands

**Gemini Flash 2.5** (primary):
```bash
gemini -y -p "Search app/ for email-related files. Return file paths only." --model gemini-2.5-flash
```

**OpenCode** (secondary):
```bash
opencode run "Search db/ for schema files. Return file paths only." --model opencode/grok-code
```

**Fallback**: If AI tools unavailable, uses standard Glob/Grep/Read tools.

## Performance Characteristics

Optimized for large-scale searches:
- **Speed**: 3-5 minutes for entire monorepo
- **Accuracy**: Semantic understanding beats pattern matching
- **Coverage**: Parallel agents ensure no directory missed
- **Resilience**: Continues if individual agents timeout
- **Cost**: Gemini Flash 2.5 at $0.075/$0.30 per 1M tokens (cheap)

## Comparison with Standard Scout

| Feature | Scout | Scout External |
|---------|-------|----------------|
| Best for | Single codebase, clear patterns | Monorepos, complex searches |
| Search method | Pattern matching | AI semantic understanding |
| Parallelization | Limited | High (2-5 agents) |
| Context understanding | None | Deep semantic analysis |
| Speed (small codebase) | 3-10 seconds | 30-60 seconds |
| Speed (large monorepo) | 2-5 minutes | 3-5 minutes |
| Accuracy | Good for exact patterns | Better for related code |

## Related Agents

- [Scout](/docs/marketing/agents/scout) - Standard file search for smaller tasks
- [Planner](/docs/marketing/agents/planner) - Uses scout results for planning
- [MCP Manager](/docs/marketing/agents/mcp-manager) - Manages external tool integrations

## Related Commands

- [`/scout-ext`](/docs/marketing/commands/scout-ext) - AI-powered codebase search
- [`/scout`](/docs/marketing/commands/scout) - Standard file search

## Tips

**Use for Big Searches**: If standard Scout takes >30 seconds, try Scout External. The AI parallelization speeds up large searches.

**Describe Functionality**: Instead of "find files with 'stripe' in them," say "find payment processing and webhook files." AI understands intent.

**Trust Semantic Search**: AI might suggest files you didn't expect. If Gemini thinks a file is relevant, it probably is—even if naming doesn't match.

**Check Timeouts**: If an agent times out, results will note the gap. You can rerun or search that section manually.

## Example Output

```
AI-Powered Search Results (5 agents, 4.2 minutes):

Frontend Payment UI (Agent 1 - Gemini):
- app/checkout/page.tsx - Checkout page with Stripe Elements
- components/PaymentForm.tsx - Payment form component
- components/PaymentMethod.tsx - Payment method selector

Backend Payment Logic (Agent 2 - Gemini):
- lib/stripe/client.ts - Stripe API client
- lib/sepay/client.ts - SePay API client
- api/checkout/route.ts - Checkout API endpoint
- api/payment-intent/route.ts - Payment intent creation

Database & Schemas (Agent 3 - OpenCode):
- db/schema/payments.ts - Payment records schema
- db/schema/transactions.ts - Transaction logs
- db/migrations/001_add_payments.sql - Payment tables migration

Webhooks (Agent 4 - Gemini):
- api/webhooks/stripe/route.ts - Stripe webhook handler
- api/webhooks/sepay/route.ts - SePay webhook handler
- lib/webhooks/verify.ts - Webhook signature verification

Configuration & Tests (Agent 5 - OpenCode):
- config/payment.ts - Payment provider configuration
- __tests__/payment/stripe.test.ts - Stripe integration tests
- __tests__/webhooks/verify.test.ts - Webhook verification tests

Coverage: Complete (all agents succeeded, 0 timeouts)
```

## Advanced Usage

**Timeout Handling**:
If agents timeout, Scout External continues with completed searches and notes gaps:
```
⚠️ Agent 3 (database search) timed out - partial results
Consider: Manually search db/ directory for schema files
```

**Cost Optimization**:
Gemini Flash 2.5 is extremely cheap ($0.075/1M tokens input). A typical search costs less than $0.01. Use liberally.

**Custom Prompts**:
For very specific searches, craft detailed prompts:
```bash
/scout-ext "Find all files that implement retry logic for external API calls, including exponential backoff and error handling"
```

The Scout External Agent is your power tool for complex codebase exploration. When standard search isn't enough, bring in the AI.
