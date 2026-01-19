---
title: "Separate Public Database for ClaudeKit Docs Assistant"
description: "Implement isolated knowledge base for public docs widget to prevent private data leakage"
status: in-progress
priority: P1
effort: 6h
branch: dev
tags: [security, backend, rag, database]
created: 2026-01-18
---

# Separate Public Database for Docs Assistant

## Problem Statement
Current architecture uses single `chunks` table for both Discord bot (private) and docs widget (public). This leaks internal documentation (ClaudeKit Marketing, system architecture) to public users.

## Solution
Create separate `chunks_public` table exclusively for public docs site with:
- Only `docs.claudekit.cc` content indexed
- Canonical URLs stored (not file paths)
- Concise response prompts (no emojis, brief answers)

---

## Dependency Graph

```
Phase 1 ──┬── Phase 2 ──┬── Phase 4 ──── Phase 5
          │             │
          └── Phase 3 ──┘

Phase 1: Database Schema (independent)
Phase 2: Core RAG Multi-table (depends on Phase 1)
Phase 3: Public Prompt + Response (independent, parallel with 2)
Phase 4: Frontend Source Validation (depends on 2, 3)
Phase 5: Public Ingestion Script (depends on 1-4, required for deployment)
```

## Execution Strategy

| Group | Phases | Type | Estimated |
|-------|--------|------|-----------|
| A | Phase 1 | Sequential (must run first) | 1h |
| B | Phase 2, Phase 3 | **PARALLEL** | 2h |
| C | Phase 4 | Sequential (after B) | 1.5h |
| D | Phase 5 | Sequential (ingestion script) | 1h |
| E | Testing & Verification | Sequential | 1h |

---

## File Ownership Matrix

| File | Owner | Action |
|------|-------|--------|
| `packages/core/src/retriever/pgvector-store.ts` | Phase 2 | Modify |
| `packages/core/src/retriever/hybrid.ts` | Phase 2 | Modify |
| `packages/core/src/retriever/vector-store.ts` | Phase 2 | Modify (interface) |
| `packages/core/src/index.ts` | Phase 2 | Modify |
| `packages/core/src/types.ts` | Phase 2 | Modify |
| `packages/core/src/generator/prompt-builder.ts` | Phase 3 | Modify |
| `packages/api/src/routes/public-ask.ts` | Phase 3 | Modify |
| `claudekit-docs/src/components/assistant/AssistantSources.tsx` | Phase 4 | Modify |

---

## Phases

### [Phase 1: Database Schema](./phase-01-database-schema.md)
**Status:** DONE | **Priority:** P1 | **Parallel Group:** A (runs first)

Create `chunks_public` table with migration script. Identical schema to `chunks` but isolated for public content only.

### [Phase 2: Core RAG Multi-table Support](./phase-02-rag-multi-table.md)
**Status:** DONE | **Priority:** P1 | **Parallel Group:** B | **Review:** PASSED

Modify PgVectorStore and hybrid search to accept table name parameter. Public endpoint uses `chunks_public`, private uses `chunks`.

### [Phase 3: Public Prompt Optimization](./phase-03-public-prompt.md)
**Status:** DONE | **Priority:** P2 | **Parallel Group:** B (parallel with Phase 2) | **Review:** PASSED

Update system prompt for concise responses. Remove emojis. Add brief mode for public endpoint.

### [Phase 4: Frontend Source Validation](./phase-04-frontend-sources.md)
**Status:** DONE | **Priority:** P2 | **Parallel Group:** C (after B) | **Review:** PASSED

Validate source URLs in AssistantSources.tsx. Only display sources with valid `/docs/*` paths.

### [Phase 5: Public Ingestion Script](./phase-05-public-ingestion.md)
**Status:** NEEDS_FIX | **Priority:** P1 | **Parallel Group:** D (after C) | **Review:** BLOCKED

Create `ingest-public.ts` script to populate `chunks_public` table from docs.claudekit.cc content. Store canonical URLs during ingestion. **Required before deployment.**

**BLOCKER:** Hardcoded `/home/kai/...` path breaks CI/CD compatibility.

---

## Success Criteria

1. Public endpoint queries `chunks_public` table only
2. Private endpoint continues using `chunks` table (no regression)
3. Source URLs in API response are canonical (https://docs.claudekit.cc/docs/...)
4. Public responses are concise (no emojis, 2-3 sentences unless code)
5. Frontend only displays valid source links
6. All existing tests pass

---

## Validation Summary

**Validated:** 2026-01-18
**Questions asked:** 5

### Confirmed Decisions
- **Ingestion strategy:** Manual script (new Phase 5)
- **URL canonicalization:** During ingestion (store full URLs)
- **Response conciseness:** 2-3 sentences unless code needed
- **Phase structure:** Add Phase 5 for public ingestion script
- **Deployment gate:** Require data in chunks_public before deployment

### Action Items
- [x] Add Phase 5: Public Ingestion Script
- [ ] Update dependency graph to include Phase 5
- [ ] Phase 5 must complete before final deployment

---

## Reports

- [Scout Report: API Architecture](../reports/scout-260118-2208-claudekit-api-architecture.md)
- [Code Review: Public Database Separation](../reports/code-reviewer-260118-2239-public-database-separation.md) (Score: 8.5/10)

---

## Review Summary

**Date:** 2026-01-18 | **Score:** 8.5/10 | **Status:** APPROVE with required fixes

**Strengths:**
- Zero SQL injection risks (whitelist validation)
- Clean separation of public/private tables
- Backward compatible (Discord unchanged)
- Excellent security (CORS, rate limiting, abuse detection)
- YAGNI/KISS/DRY compliant

**Critical Fix Required:**
- `scripts/ingest-public.ts:12` - Hardcoded path breaks CI/CD

**Next Actions:**
1. Fix hardcoded path to use relative `__dirname` resolution
2. Run ingestion script to populate `chunks_public`
3. Test public endpoint with real data
4. Update Phase 5 status to DONE
5. Merge to dev branch
