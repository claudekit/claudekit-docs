# Phase 2: Core RAG Multi-table Support

## Context Links
- Parent: [plan.md](./plan.md)
- Depends on: [Phase 1](./phase-01-database-schema.md)
- Scout Report: [API Architecture](../reports/scout-260118-2208-claudekit-api-architecture.md)

## Parallelization Info
- **Group:** B (parallel with Phase 3)
- **Depends on:** Phase 1 (database schema)
- **Can run with:** Phase 3
- **Blocks:** Phase 4

---

## Overview

| Field | Value |
|-------|-------|
| Priority | P1 - Critical |
| Status | DONE |
| Review | PASSED (2026-01-18) |

Modify PgVectorStore to support multiple tables. Public endpoint queries `chunks_public`, private queries `chunks`.

---

## Key Insights

1. PgVectorStore currently hardcodes `chunks` table name
2. hybridSearch passes vectorStore but doesn't specify table
3. askQuestion is the entry point - needs table parameter
4. Minimal changes: add `tableName` parameter, default to `chunks` for backward compatibility

---

## Requirements

### Functional
- [ ] PgVectorStore accepts optional `tableName` in constructor
- [ ] Default table is `chunks` (backward compatible)
- [ ] Public endpoint uses `chunks_public` table
- [ ] Private endpoint uses `chunks` table (existing behavior)

### Non-functional
- [ ] No performance regression
- [ ] All existing tests pass unchanged

---

## Architecture

```typescript
// PgVectorStore constructor signature change
class PgVectorStore extends BaseVectorStore {
  constructor(tableName: string = 'chunks') // NEW parameter with default
}

// Usage in public-ask.ts
const publicStore = new PgVectorStore('chunks_public');

// Usage in ask.ts (unchanged - uses default 'chunks')
const privateStore = new PgVectorStore();
```

---

## File Ownership

| File | Action | Exclusive |
|------|--------|-----------|
| `packages/core/src/retriever/pgvector-store.ts` | MODIFY | Yes |
| `packages/core/src/retriever/vector-store.ts` | MODIFY | Yes |
| `packages/core/src/types.ts` | MODIFY | Yes |
| `packages/core/src/index.ts` | MODIFY | Yes |

---

## Implementation Steps

1. **pgvector-store.ts**
   - Add `tableName` parameter to constructor (default: 'chunks')
   - Store as instance property
   - Update all SQL queries to use `this.tableName`
   - Update `initialize()` to create correct table

2. **vector-store.ts** (interface)
   - No changes needed (interface doesn't define constructor)

3. **types.ts**
   - Add `VectorStoreOptions` interface if needed

4. **index.ts** (core entry)
   - Update `askQuestion` to accept optional `tableName`
   - Pass to vectorStore creation

5. Test both table configurations

---

## Code Changes

### pgvector-store.ts (key changes)

```typescript
export class PgVectorStore extends BaseVectorStore {
  private pool: Pool;
  private tableName: string;

  constructor(tableName: string = 'chunks') {
    super();
    this.tableName = tableName;
    this.pool = new Pool({ connectionString: config.database.connectionString });
  }

  async search(embedding: number[], topK: number): Promise<RetrievalResult[]> {
    const result = await this.pool.query(
      `SELECT id, document_id, content, metadata,
              1 - (embedding <=> $1) as score
       FROM ${this.tableName}
       WHERE document_id NOT LIKE 'github-issue-%'
         AND document_id NOT LIKE 'github-discussion-%'
       ORDER BY embedding <=> $1
       LIMIT $2`,
      [JSON.stringify(embedding), topK]
    );
    // ... rest unchanged
  }
}
```

---

## Todo List

- [ ] Modify PgVectorStore constructor to accept tableName
- [ ] Update initialize() to use dynamic table name
- [ ] Update search() to use dynamic table name
- [ ] Update upsert() to use dynamic table name
- [ ] Update delete() to use dynamic table name
- [ ] Run existing tests to verify backward compatibility
- [ ] Add test for chunks_public table usage

---

## Success Criteria

1. `new PgVectorStore()` uses `chunks` (backward compatible)
2. `new PgVectorStore('chunks_public')` uses `chunks_public`
3. All existing tests pass
4. Queries execute against correct table

---

## Conflict Prevention

- Phase 3 modifies DIFFERENT files (prompt-builder.ts, public-ask.ts)
- This phase owns all core/retriever files
- No overlap with Phase 3

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| SQL injection via tableName | Low | High | Only accept 'chunks' or 'chunks_public' |
| Backward compatibility break | Medium | High | Default parameter maintains existing behavior |

### SQL Injection Prevention

```typescript
constructor(tableName: 'chunks' | 'chunks_public' = 'chunks') {
  if (!['chunks', 'chunks_public'].includes(tableName)) {
    throw new Error('Invalid table name');
  }
  this.tableName = tableName;
}
```

---

## Security Considerations

- Table name must be validated (whitelist approach)
- No user input should reach tableName parameter

---

## Next Steps

After Phase 2 + Phase 3 complete, Phase 4 can start.
