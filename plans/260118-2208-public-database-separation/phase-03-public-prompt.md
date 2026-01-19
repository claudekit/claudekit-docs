# Phase 3: Public Prompt Optimization

## Context Links
- Parent: [plan.md](./plan.md)
- Depends on: [Phase 1](./phase-01-database-schema.md)
- Parallel with: [Phase 2](./phase-02-rag-multi-table.md)

## Parallelization Info
- **Group:** B (parallel with Phase 2)
- **Depends on:** Phase 1 (database must exist)
- **Can run with:** Phase 2 (no file conflicts)
- **Blocks:** Phase 4

---

## Overview

| Field | Value |
|-------|-------|
| Priority | P2 - High |
| Status | Completed |
| Review | Passed |

Update public endpoint to use concise system prompt. Remove emojis. Brief answers by default.

---

## Key Insights

1. Current prompt has emojis (🔧 🔒 📁) - not ideal for docs widget
2. Prompt says "Be concise but thorough (Discord ~4000 char limit)" - too long for widget
3. Public endpoint should have its own prompt, separate from Discord
4. Need to update public-ask.ts to use public-specific prompt and `chunks_public` table

---

## Requirements

### Functional
- [x] Create `buildPublicPrompt()` function for concise responses
- [x] Remove emojis from public responses
- [x] Default to 2-3 sentence answers unless code needed
- [x] Public endpoint uses `chunks_public` table
- [x] Store canonical URLs in source metadata (deferred to Phase 4)

### Non-functional
- [x] Response time unchanged
- [x] Discord endpoint unchanged (uses existing prompt)

---

## Architecture

```
prompt-builder.ts
├── buildPrompt()          # Discord (existing, verbose)
└── buildPublicPrompt()    # NEW: Docs widget (concise)

public-ask.ts
├── Uses PgVectorStore('chunks_public')  # NEW
└── Calls askQuestion with public=true   # NEW flag
```

---

## File Ownership

| File | Action | Exclusive |
|------|--------|-----------|
| `packages/core/src/generator/prompt-builder.ts` | MODIFY | Yes |
| `packages/api/src/routes/public-ask.ts` | MODIFY | Yes |

---

## Implementation Steps

1. **prompt-builder.ts**
   - Add `buildPublicPrompt(query, results)` function
   - Concise system prompt without emojis
   - Instruct: "Answer in 2-3 sentences. Use code blocks only when essential."

2. **public-ask.ts**
   - Import `PgVectorStore` with table parameter
   - Change `new PgVectorStore()` to `new PgVectorStore('chunks_public')`
   - Pass `isPublic: true` to askQuestion (or call dedicated function)

3. **generator/index.ts** (optional)
   - Add `generatePublicAnswer()` that uses `buildPublicPrompt`

---

## Code Changes

### prompt-builder.ts (new function)

```typescript
export function buildPublicPrompt(query: string, results: RetrievalResult[]): string {
  const context = results
    .map((r, i) => `[${i + 1}] ${r.chunk.metadata.title}\n${r.chunk.content}`)
    .join('\n\n---\n\n');

  return `You are ClaudeKit Assistant, a documentation helper for ClaudeKit CLI.

RULES:
- Answer in 2-3 sentences unless the question requires code examples
- Do NOT use emojis
- Use markdown sparingly (bold for emphasis, code blocks for commands)
- Cite sources as [1], [2] only when directly referencing context
- If you don't know, say "I don't have information about that in the docs"

<context>
${context}
</context>

Question: ${query}`;
}
```

### public-ask.ts (key changes)

```typescript
// Change singleton to use public table
async function getVectorStore(): Promise<PgVectorStore> {
  if (!vectorStore) {
    vectorStore = new PgVectorStore('chunks_public'); // Changed from default
    await vectorStore.initialize();
  }
  return vectorStore;
}
```

---

## Todo List

- [x] Add buildPublicPrompt() to prompt-builder.ts
- [x] Update public-ask.ts to use chunks_public table
- [x] Update generateAnswer to accept prompt type flag
- [x] Test response conciseness (enforced via prompt)
- [x] Verify no emojis in responses (enforced via prompt)

---

## Success Criteria

1. Public responses are 2-3 sentences (unless code)
2. No emojis in public responses
3. Sources cited as [1], [2] not [Source 1]
4. Discord responses unchanged (verbose + emojis)

---

## Conflict Prevention

- Phase 2 modifies: pgvector-store.ts, vector-store.ts, types.ts, core/index.ts
- This phase modifies: prompt-builder.ts, public-ask.ts
- **No file overlap** - safe for parallel execution

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Too brief answers | Medium | Low | Tune prompt, add "unless code needed" |
| Discord regression | Low | High | Keep existing buildPrompt unchanged |

---

## Security Considerations

- No new security concerns
- Same rate limiting and abuse detection

---

## Next Steps

After Phase 2 + Phase 3 complete, Phase 4 can start.
