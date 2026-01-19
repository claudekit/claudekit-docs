# Scout Report: ClaudeKit Assistant API Architecture

**Date:** 2026-01-18 | **Scope:** claudekit-assistant codebase | **Duration:** Scout phase

---

## Executive Summary

ClaudeKit Assistant is a monorepo implementing a **RAG-powered Discord bot and docs widget** for documentation Q&A. The system is deployed as `claudekit-api` container on cliproxy (192.168.2.84:7319). Core architecture separates public (docs widget) and private (authenticated) endpoints with distinct security models.

**Key Finding:** Public/private data separation is **IMPLICIT** (rate limiting + origin check only), not **EXPLICIT** (no table-level public/private flags). Current implementation filters out GitHub issues/discussions but does not partition knowledge base by access level.

---

## 1. Database Schema & Connection

### Location
- **File:** `/home/kai/claudekit/claudekit-assistant/packages/core/src/db.ts`
- **Vector Store:** `/home/kai/claudekit/claudekit-assistant/packages/core/src/retriever/pgvector-store.ts`

### Schema

```sql
-- Single table for all document chunks (public + private)
CREATE TABLE chunks (
  id TEXT PRIMARY KEY,
  document_id TEXT NOT NULL,
  content TEXT NOT NULL,
  embedding vector(768),          -- Gemini embedding (768 dims)
  metadata JSONB,                 -- Contains: source, title, breadcrumbs, url
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX chunks_embedding_idx ON chunks USING ivfflat (embedding vector_cosine_ops);
CREATE INDEX chunks_document_id_idx ON chunks (document_id);
```

### Connection Details

| Field | Value |
|-------|-------|
| **Driver** | `pg` (node-postgres) |
| **Extension** | `pgvector` (required) |
| **Pool Size** | 10 connections |
| **Idle Timeout** | 30s |
| **Connection Timeout** | 5s |
| **Config Source** | `DATABASE_URL` env var |

### Data Filtering in Search

**Current filtering (pgvector-store.ts:57-65):**
```typescript
// Exclude GitHub issues/discussions to prevent hallucination
WHERE document_id NOT LIKE 'github-issue-%'
  AND document_id NOT LIKE 'github-discussion-%'
```

**ISSUE:** No public/private column → filtering is document-type based, not access-based.

---

## 2. Embeddings & RAG Implementation

### Core RAG Pipeline

**File:** `/home/kai/claudekit/claudekit-assistant/packages/core/src/index.ts`

```
Query
  ↓
[Cache Check] → Cache Hit? Return cached result
  ↓
[Hybrid Search]
  ├─ Vector Search (pgvector)
  ├─ BM25 Full-text Search
  └─ Reciprocal Rank Fusion → Ranked results
  ↓
[Generate Answer] → Claude (via CLIProxy)
  ↓
[Cache Result] → Store in DB
  ↓
Return: { answer, sources[], cached }
```

### Embedding Service

**File:** `/home/kai/claudekit/claudekit-assistant/packages/core/src/indexer/embedder.ts`

| Parameter | Value |
|-----------|-------|
| **Provider** | Google Gemini |
| **Model** | `gemini-embedding-001` (configurable) |
| **Dimensions** | 768 |
| **Batch Size** | Configurable (default 100) |
| **API Key Pool** | Supports multiple keys for rate limit rotation |

### Retrieval Strategy

**File:** `/home/kai/claudekit/claudekit-assistant/packages/core/src/retriever/hybrid.ts`

```typescript
// Reciprocal Rank Fusion combines two rankings:
1. Vector similarity (pgvector cosine distance)
2. BM25 keyword matching

// RRF formula: score = Σ(1 / (k + rank + 1))
// Final result: top-5 ranked chunks (configurable via finalK)
```

**Configuration** (`config.ts`):
```javascript
retrieval: {
  topK: 20,              // Top-20 from each search method
  finalK: 5,             // Return top-5 combined results
  cacheThreshold: 0.92,  // Cache if score >= 92% match
}
```

### Caching Layer

**File:** `/home/kai/claudekit/claudekit-assistant/packages/core/src/cache/semantic-cache.ts`

- **Strategy:** Query-based caching (exact + semantic similarity)
- **Storage:** PostgreSQL (separate table or Redis TBD)
- **Threshold:** 0.92 similarity score

---

## 3. `/api/public/ask` Endpoint

**File:** `/home/kai/claudekit/claudekit-assistant/packages/api/src/routes/public-ask.ts`

### Security & Rate Limiting

| Feature | Details |
|---------|---------|
| **Authentication** | None (public endpoint) |
| **Rate Limit** | 5 requests/60s per IP |
| **Block Duration** | 5 minutes (abuse detection) |
| **CORS** | Restricted to `https://docs.claudekit.cc` + `http://localhost:4321` |
| **IP Tracking** | `X-Forwarded-For` header (first IP only) |

### Abuse Detection

Detects and blocks IPs with:
- 3+ identical queries in 60s window
- 4+ queries with <10 chars
- Blocks for 5 minutes

### Request/Response

```typescript
// Request
POST /api/public/ask
Content-Type: application/json
{ "query": "How do I install ClaudeKit?" }

// Response (200 OK)
{
  "answer": "...",
  "sources": [
    {
      "title": "Installation Guide",
      "url": "https://docs.claudekit.cc/docs/getting-started",
      "snippet": "..."
    }
  ],
  "cached": false
}

// Response (429 Rate Limited)
{ "error": "Rate limit exceeded...", "code": "RATE_LIMITED" }

// Response (403 Blocked)
{ "error": "Temporarily blocked. Try again in 120s.", "code": "BLOCKED" }
```

### Audit Logging

Every request logged with:
- Timestamp (ISO 8601)
- IP (truncated to first 20 chars)
- Query (first 100 chars)
- Status (success, error, blocked, rate_limited)
- Duration (ms)

Example log:
```
[PUBLIC-ASK] {"timestamp":"2026-01-18T...","ip":"203.0.113.1","query":"How...","status":"success","duration":145}
```

---

## 4. Private Endpoints & Authentication

**File:** `/home/kai/claudekit/claudekit-assistant/packages/api/src/middleware/auth.ts`

### Protected Routes

| Endpoint | Method | Auth | Rate Limit |
|----------|--------|------|-----------|
| `/api/ask` | POST | Required | Per-key quota |
| `/api/ask/stream` | POST | Required | Per-key quota |
| `/api/summary/*` | POST | Required | Per-key quota |
| `/api/ingest` | POST | Required | Webhook signature |
| `/api/health` | GET | None | None |

### Authentication Mechanisms

```typescript
// Accepts either header format:
const apiKey = c.req.header('X-API-Key')                    // Header
              || c.req.header('Authorization')?.replace('Bearer ', '');  // Bearer token

// Validation against allowed keys set:
const ALLOWED_KEYS = new Set([
  API_SECRET,                  // Main API secret
  process.env.DISCORD_BOT_API_KEY,   // Discord bot
  process.env.WIDGET_API_KEY,        // Docs widget
]);

if (!apiKey || !ALLOWED_KEYS.has(apiKey)) {
  return c.json({ error: 'Unauthorized', code: 'UNAUTHORIZED' }, 401);
}
```

**ISSUE:** Hard-coded in-memory set. Scalability issue for many API keys → needs database.

### Protected Ask Endpoint

**File:** `/home/kai/claudekit/claudekit-assistant/packages/api/src/routes/ask.ts`

```typescript
// Identical to public endpoint but:
// - No rate limiting (or higher limits)
// - No abuse detection
// - No origin checking
// - Requires API key
// - Allows 1000 char queries (vs 500 for public)
```

---

## 5. Public vs Private Data Separation

### Current State: IMPLICIT ONLY

**What Exists:**
- Public endpoint has stricter rate limiting (5/min)
- Public endpoint has abuse detection
- Public endpoint has origin validation
- Private endpoint requires API key
- GitHub issues/discussions excluded globally

**What DOES NOT Exist:**
- No `is_public` column in chunks table
- No per-chunk access control
- No document-level privacy flags
- **Both endpoints query identical knowledge base**

### Diagram

```
┌─────────────────────────────────────────────┐
│ Single PostgreSQL "chunks" table            │
│ - All document chunks (no privacy markers)  │
│ - GitHub issues/discussions filtered out    │
│ - No public/private distinction             │
└──────────────┬──────────────────────────────┘
               │
        ┌──────┴──────┐
        │             │
   [Public Ask]  [Private Ask]
   (Rate limited) (Requires API key)
   (CORS check)   (Higher limits)
   
   ↓              ↓
   Both return identical results from same knowledge base
```

### Implications

1. **User Privacy:** No secrets/proprietary data separation
2. **Rate Limiting:** Only method to control public access
3. **Scaling Risk:** Public endpoint can degrade private access via rate limit flooding

---

## 6. Project Structure

```
/home/kai/claudekit/claudekit-assistant/
├── packages/
│   ├── api/
│   │   └── src/
│   │       ├── index.ts                 (Hono app setup + route registration)
│   │       ├── types.ts                 (Request/response types)
│   │       ├── middleware/
│   │       │   ├── auth.ts              (API key validation)
│   │       │   └── rate-limit.ts        (Token bucket per-key)
│   │       └── routes/
│   │           ├── public-ask.ts        (PUBLIC: /api/public/ask)
│   │           ├── ask.ts               (PRIVATE: /api/ask + /api/ask/stream)
│   │           ├── summary.ts           (PRIVATE: channel/changelog summarization)
│   │           ├── ingest.ts            (PRIVATE: re-indexing webhook)
│   │           └── health.ts            (PUBLIC: /api/health)
│   │
│   ├── core/
│   │   └── src/
│   │       ├── config.ts                (Central config + validation)
│   │       ├── db.ts                    (PostgreSQL connection pool)
│   │       ├── types.ts                 (Data models)
│   │       ├── indexer/
│   │       │   ├── pipeline.ts          (Chunk → Embed → Store)
│   │       │   ├── chunker.ts           (Document → Chunks)
│   │       │   ├── embedder.ts          (Gemini embeddings)
│   │       │   ├── markdown-parser.ts   (MD → Sections)
│   │       │   └── sources/
│   │       │       ├── markdown-source.ts    (MD file loader)
│   │       │       └── changelog-source.ts   (Changelog parser)
│   │       ├── retriever/
│   │       │   ├── pgvector-store.ts    (Vector DB ops)
│   │       │   ├── bm25.ts              (Keyword search)
│   │       │   ├── hybrid.ts            (RRF fusion)
│   │       │   └── vector-store.ts      (Interface)
│   │       ├── generator/
│   │       │   ├── claude-client.ts     (Claude/Anthropic API)
│   │       │   ├── gemini-client.ts     (Gemini API)
│   │       │   └── prompt-builder.ts    (RAG prompts)
│   │       ├── cache/
│   │       │   └── semantic-cache.ts    (Query result caching)
│   │       ├── gemini-key-pool.ts       (Rate limit rotation)
│   │       └── index.ts                 (askQuestion entry point)
│   │
│   ├── discord-bot/                     (Slash commands: /ck ask, /summary)
│   └── docs-widget/                     (Preact chat widget)
│
├── docs/
│   ├── project-overview-pdr.md
│   ├── codebase-summary.md
│   ├── code-standards.md
│   ├── system-architecture.md
│   ├── project-roadmap.md
│   └── deployment-guide.md
│
├── .env.example                         (Environment variables template)
├── docker-compose.yml                   (Local dev setup)
├── Dockerfile                           (Production image)
└── package.json                         (Workspace config)
```

---

## 7. Key Configuration Files

### Environment Variables (Required)

**Gemini (Embeddings)**
```
GEMINI_API_KEY=sk-...           # Single key OR
GEMINI_API_KEYS=key1,key2,key3  # Multiple keys for rotation
GEMINI_EMBEDDING_MODEL=gemini-embedding-001
```

**Generation (Defaults to Gemini)**
```
GENERATION_PROVIDER=gemini      # Or 'anthropic'
GENERATION_MODEL=gemini-3-pro-preview
ANTHROPIC_BASE_URL=http://localhost:8317     # CLIProxy
ANTHROPIC_API_KEY=<api-key>
```

**Database**
```
DATABASE_URL=postgresql://user:pass@host:5432/db
```

**API & Security**
```
API_PORT=7319
API_SECRET=<random-secret>
DISCORD_BOT_API_KEY=<for-discord-requests>
WIDGET_API_KEY=<for-widget-requests>
```

### Turbo Monorepo Commands

```bash
bun run build                    # Build all packages
bun run dev                      # Watch mode
bun run test                     # Run test suites
bun run lint                     # ESLint
bun run typecheck                # TypeScript check
bun run --filter scripts index   # Run indexing CLI
```

---

## 8. Current Limitations & TODOs

### Ingest Route (Incomplete)

**File:** `packages/api/src/routes/ingest.ts`

```typescript
// TODO items:
- Implement GitHub webhook signature verification
- Fetch updated files from GitHub
- Re-chunk and embed
- Update vector store
```

Currently only logs and returns `{ status: 'queued' }` without actual processing.

### API Key Storage

**Issue:** In-memory Set of hard-coded keys
```typescript
const ALLOWED_KEYS = new Set([API_SECRET, DISCORD_BOT_API_KEY, WIDGET_API_KEY]);
```

**Scalability Problem:** Can't revoke keys without redeployment.

### Public/Private Separation

**Current:** Rate limiting + origin check only
**Missing:** 
- Table-level access control
- User/tenant isolation
- Document-level permissions

---

## 9. Deployment Architecture

### Container Setup

```
Container: claudekit-api
Image: claudekit-assistant-api (built from Dockerfile)
Port: 7319 (internal)
Port: 7319 (exposed on 192.168.2.84)
Health: Checks pgvector extension on /api/health
Environment: Loaded from .env (on container startup)
```

### Related Infrastructure

| Service | Port | Purpose |
|---------|------|---------|
| PostgreSQL | 5432 | Vector DB (external, not in container) |
| Gemini API | 443 | Embeddings + generation |
| CLIProxy | 8317 | Claude API routing |
| Docs Site | 443 | https://docs.claudekit.cc |

---

## 10. Testing & Quality

**Test Files Located:**
- `packages/api/src/__tests__/health.test.ts`
- `packages/api/src/__tests__/routes.test.ts`
- `packages/core/src/__tests__/*.test.ts` (chunker, embedder, cache, pgvector)

**Quality Gates:**
```bash
bun run typecheck   # TypeScript strict mode
bun run lint        # ESLint
bun run test        # Vitest
bun run build       # Compile check
```

---

## 11. Key File Summary for Implementation

### Essential Files (READ FIRST)

1. **API Entry Point**
   - Path: `/home/kai/claudekit/claudekit-assistant/packages/api/src/index.ts`
   - Purpose: Route registration, middleware setup, CORS config

2. **Public Ask Route** (Reference implementation)
   - Path: `/home/kai/claudekit/claudekit-assistant/packages/api/src/routes/public-ask.ts`
   - Size: 163 lines | Complexity: Medium (rate limiting + abuse detection)

3. **Private Ask Route**
   - Path: `/home/kai/claudekit/claudekit-assistant/packages/api/src/routes/ask.ts`
   - Size: 73 lines | Complexity: Low

4. **Vector Store**
   - Path: `/home/kai/claudekit/claudekit-assistant/packages/core/src/retriever/pgvector-store.ts`
   - Size: 88 lines | Critical for schema understanding

5. **Hybrid Retrieval**
   - Path: `/home/kai/claudekit/claudekit-assistant/packages/core/src/retriever/hybrid.ts`
   - Size: 46 lines | Essential for understanding RAG ranking

6. **Core RAG Pipeline**
   - Path: `/home/kai/claudekit/claudekit-assistant/packages/core/src/index.ts`
   - Size: 36 lines | High-level flow

### Configuration Files

7. **Config Validation**
   - Path: `/home/kai/claudekit/claudekit-assistant/packages/core/src/config.ts`
   - Size: 102 lines | All env var handling

8. **Environment Example**
   - Path: `/home/kai/claudekit/claudekit-assistant/.env.example`
   - Size: 43 lines | Reference for all required vars

### Type Definitions

9. **Core Types**
   - Path: `/home/kai/claudekit/claudekit-assistant/packages/core/src/types.ts`
   - Size: 48 lines | Document, Chunk, VectorStore interfaces

10. **API Types**
    - Path: `/home/kai/claudekit/claudekit-assistant/packages/api/src/types.ts`
    - Size: 66 lines | Request/response contracts

---

## Unresolved Questions

1. **Data Partitioning:** Should public/private separation be explicit (column in DB) or implicit (middleware)?
2. **Ingest Webhook:** What's the triggering mechanism for re-indexing? GitHub push? Manual API call?
3. **Cache Storage:** Is semantic-cache using PostgreSQL or separate Redis instance?
4. **Scaling:** With shared chunks table, how to prevent public rate limit DoS affecting private endpoints?
5. **API Key Management:** Should keys be rotated? Database-backed? Per-tenant?
6. **Monitoring:** What metrics/alerts are configured for the deployed container?

---

## Next Steps

1. **Clarify Data Model:** Decide on public/private separation approach
2. **Review Ingest Implementation:** Define webhook signature verification & re-indexing flow
3. **Plan Scaling:** Rate limit isolation between public/private
4. **API Key Migration:** Move from env vars to database
5. **Test Coverage:** Review existing tests and identify gaps

---

**Scout Report Generated:** 2026-01-18 22:08 UTC
**Codebase Location:** `/home/kai/claudekit/claudekit-assistant`
**Report Location:** `/home/kai/claudekit/claudekit-docs/plans/reports/scout-260118-2208-claudekit-api-architecture.md`
