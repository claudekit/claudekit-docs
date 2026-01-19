# Phase 1: Database Schema Migration

## Context Links
- Parent: [plan.md](./plan.md)
- Scout Report: [API Architecture](../reports/scout-260118-2208-claudekit-api-architecture.md)

## Parallelization Info
- **Group:** A (runs first, no dependencies)
- **Can run with:** Nothing (must complete before Phases 2-4)
- **Blocks:** Phase 2, Phase 3, Phase 4

---

## Overview

| Field | Value |
|-------|-------|
| Priority | P1 - Critical |
| Status | DONE |
| Review | Completed |

Create `chunks_public` table in PostgreSQL for isolated public knowledge base.

---

## Key Insights

1. Current `chunks` table schema is well-defined (id, document_id, content, embedding, metadata, created_at)
2. pgvector extension already enabled
3. No existing migration system - will add SQL migration script
4. Table needs identical schema for drop-in compatibility with existing retrieval code

---

## Requirements

### Functional
- [ ] Create `chunks_public` table with identical schema to `chunks`
- [ ] Create indexes (embedding ivfflat, document_id)
- [ ] Migration script is idempotent (safe to run multiple times)

### Non-functional
- [ ] Migration completes in < 5 seconds
- [ ] No downtime for existing `chunks` table

---

## Architecture

```sql
-- New table for public docs only
CREATE TABLE IF NOT EXISTS chunks_public (
  id TEXT PRIMARY KEY,
  document_id TEXT NOT NULL,
  content TEXT NOT NULL,
  embedding vector(768),
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS chunks_public_embedding_idx
  ON chunks_public USING ivfflat (embedding vector_cosine_ops);
CREATE INDEX IF NOT EXISTS chunks_public_document_id_idx
  ON chunks_public (document_id);
```

---

## File Ownership

| File | Action | Exclusive |
|------|--------|-----------|
| `packages/core/src/migrations/001-public-chunks-table.sql` | CREATE | Yes |
| `packages/core/src/db.ts` | MODIFY (add runMigrations) | Yes |

---

## Implementation Steps

1. Create `packages/core/src/migrations/` directory
2. Create `001-public-chunks-table.sql` with:
   - CREATE TABLE IF NOT EXISTS chunks_public
   - CREATE INDEX IF NOT EXISTS (embedding + document_id)
3. Modify `db.ts` to add `runMigrations()` function
4. Export migration runner from core package
5. Test migration locally
6. Document rollback procedure (DROP TABLE chunks_public)

---

## Todo List

- [ ] Create migrations directory
- [ ] Write SQL migration script
- [ ] Add runMigrations to db.ts
- [ ] Test locally with `bun run migrate`
- [ ] Verify indexes created

---

## Success Criteria

1. `chunks_public` table exists with correct schema
2. Both indexes created
3. Migration is idempotent
4. Existing `chunks` table unaffected

---

## Conflict Prevention

- Only creates NEW files and adds NEW function to db.ts
- Does not modify existing table or queries
- Phase 2 will modify pgvector-store.ts to USE this table

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Migration fails | Low | Medium | Idempotent design, test locally first |
| Wrong embedding dimensions | Low | High | Use config.gemini.embeddingDimensions |

---

## Security Considerations

- No sensitive data involved (just schema creation)
- Uses same connection string as existing DB

---

## Next Steps

After completion, Phase 2 and Phase 3 can start in parallel.
