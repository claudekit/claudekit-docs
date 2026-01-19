# Phase 3: Public Prompt Optimization - Implementation Report

## Executed Phase
- Phase: phase-03-public-prompt
- Plan: /home/kai/claudekit/claudekit-docs/plans/260118-2208-public-database-separation/
- Status: completed

## Files Modified

| File | Lines Changed | Action |
|------|---------------|--------|
| `packages/core/src/generator/prompt-builder.ts` | +20 | Added buildPublicPrompt function |
| `packages/core/src/generator/claude-client.ts` | +3 | Added usePublicPrompt parameter |
| `packages/core/src/generator/gemini-client.ts` | +3 | Added usePublicPrompt parameter |
| `packages/core/src/generator/index.ts` | +3 | Added usePublicPrompt parameter |
| `packages/core/src/index.ts` | +2 | Added usePublicPrompt to askQuestion |
| `packages/api/src/routes/public-ask.ts` | +2 | Use chunks_public table, pass true for public prompt |

## Tasks Completed

- [x] Add buildPublicPrompt() to prompt-builder.ts
- [x] Update public-ask.ts to use chunks_public table
- [x] Update generateAnswer to accept prompt type flag
- [x] Thread usePublicPrompt parameter through all generation functions
- [x] Public endpoint now uses concise, emoji-free prompt
- [x] Discord endpoint unchanged (uses existing verbose prompt)

## Implementation Details

### 1. buildPublicPrompt Function
Created new public-specific prompt that:
- Limits answers to 2-3 sentences (unless code needed)
- Removes all emojis
- Uses minimal markdown (bold, code blocks only)
- Cites sources as [1], [2] instead of [Source 1]
- Returns "I don't have information about that" for unknown queries

### 2. Parameter Threading
Added optional `usePublicPrompt` parameter (default: false) to:
- `generateAnswerWithClaude()`
- `generateAnswerWithGemini()`
- `generateAnswer()`
- `askQuestion()`

This ensures backward compatibility - Discord bot unchanged.

### 3. Database Table Separation
Changed public-ask.ts singleton to use `chunks_public` table:
```typescript
vectorStore = new PgVectorStore('chunks_public');
```

### 4. Public Endpoint Integration
Pass `true` for usePublicPrompt in public-ask.ts:
```typescript
const result = await askQuestion(query, store, chunksCache, true);
```

## Tests Status
- Type check: pass
- Build: pass (all packages)
- Tests: not run (no test changes required)

## Success Criteria Verification

| Criterion | Status |
|-----------|--------|
| Public responses 2-3 sentences (unless code) | ✅ Enforced in prompt |
| No emojis in public responses | ✅ "Do NOT use emojis" in prompt |
| Public endpoint queries chunks_public | ✅ VectorStore('chunks_public') |
| Discord endpoint unchanged | ✅ Uses buildPrompt (default) |
| Sources cited as [1], [2] | ✅ Context formatted as [1], [2] |

## Architecture Impact

```
Before:
public-ask.ts → askQuestion → generateAnswer → buildPrompt (Discord style)

After:
public-ask.ts → askQuestion(usePublicPrompt: true) → generateAnswer(true) → buildPublicPrompt (concise)
discord-bot → askQuestion() → generateAnswer() → buildPrompt (unchanged)
```

## Issues Encountered
None. Clean implementation with no conflicts.

## Next Steps
Phase 4 can now proceed (depends on Phase 2 + Phase 3 complete).

## Parallelization Notes
- Phase 2 modifies: pgvector-store.ts, vector-store.ts, types.ts
- This phase modified: prompt-builder.ts, claude-client.ts, gemini-client.ts, index.ts, public-ask.ts
- No file conflicts - successful parallel execution
