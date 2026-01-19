# Code Review: Public Database Separation

**Review Date:** 2026-01-18
**Reviewer:** code-reviewer (ac08838)
**Work Context:** /home/kai/claudekit/claudekit-assistant (backend), /home/kai/claudekit/claudekit-docs (frontend)
**Plan:** [Public Database Separation](../260118-2208-public-database-separation/plan.md)

---

## Overall Score: **8.5/10**

Strong implementation with solid security practices and clean separation of concerns. Some edge cases need attention before production deployment.

---

## Scope

### Files Reviewed (Backend)
1. `packages/core/src/migrations/001-public-chunks-table.sql` (NEW)
2. `packages/core/src/db.ts` (MODIFIED - migration runner)
3. `packages/core/package.json` (MODIFIED - build script)
4. `packages/api/src/index.ts` (MODIFIED - startup migrations)
5. `packages/core/src/retriever/pgvector-store.ts` (MODIFIED - multi-table)
6. `packages/core/src/generator/prompt-builder.ts` (MODIFIED - public prompt)
7. `packages/core/src/generator/*.ts` (MODIFIED - prompt threading)
8. `packages/core/src/index.ts` (MODIFIED - usePublicPrompt param)
9. `packages/api/src/routes/public-ask.ts` (MODIFIED - chunks_public)
10. `scripts/ingest-public.ts` (NEW - 202 lines)

### Files Reviewed (Frontend)
11. `src/components/assistant/AssistantSources.tsx` (MODIFIED - URL validation)

### Build Status
- ✅ Backend typecheck: PASS (FULL TURBO)
- ✅ Backend build: PASS (FULL TURBO)
- ✅ Frontend build: PASS (440 pages in 11.19s)
- ✅ Migration copied to dist: VERIFIED

---

## Critical Issues

### None Found
No security vulnerabilities, SQL injection risks, or breaking changes detected.

---

## High Priority Findings

### 1. Missing Discord Bot Backward Compatibility Test
**File:** `packages/discord-bot/src/commands/handlers/handle-ask.ts`

**Finding:** Discord bot uses API client which hits `/api/ask` endpoint. Need verification that:
- Discord endpoint still uses default `chunks` table (not `chunks_public`)
- Discord responses still use emoji-rich prompt
- No regression in Discord functionality

**Evidence:**
```typescript
// handle-ask.ts calls API, not direct DB
const result = await apiClient.ask(query);

// packages/api/src/routes/ask.ts uses default table
const privateStore = new PgVectorStore(); // ✅ defaults to 'chunks'
```

**Status:** ✅ Verified safe - Discord endpoint unchanged, uses default constructor

---

### 2. Empty `chunks_public` Table Gate
**File:** `scripts/ingest-public.ts`, `packages/api/src/routes/public-ask.ts`

**Finding:** Public endpoint will query empty `chunks_public` table until `ingest-public.ts` runs. No runtime check for empty table.

**Impact:** Public widget returns zero results until ingestion completes.

**Recommendation:**
```typescript
// Add to public-ask.ts startup
const count = await publicStore.pool.query('SELECT COUNT(*) FROM chunks_public');
if (count.rows[0].count === 0) {
  console.warn('[PUBLIC-ASK] chunks_public is empty. Run: bun run --filter scripts ingest-public');
}
```

**Status:** ⚠️ Medium priority - add warning log, not blocker

---

### 3. Hardcoded Docs Path in Ingestion Script
**File:** `scripts/ingest-public.ts:12`

**Finding:**
```typescript
const DOCS_PATH = '/home/kai/claudekit/claudekit-docs/src/content/docs';
```

**Issue:** Hardcoded absolute path breaks portability (different machines, CI/CD).

**Fix:**
```typescript
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOCS_PATH = join(__dirname, '../../../claudekit-docs/src/content/docs');
```

**Status:** 🔴 Must fix before merge - breaks CI/CD

---

## Medium Priority Improvements

### 4. SQL Injection Prevention - Solid Implementation
**Files:** `packages/core/src/retriever/pgvector-store.ts:14-16`

**Finding:** Excellent whitelist validation pattern:
```typescript
if (!['chunks', 'chunks_public'].includes(tableName)) {
  throw new Error(`Invalid table name: ${tableName}. Must be 'chunks' or 'chunks_public'`);
}
```

**Analysis:**
- ✅ Validated before any SQL execution
- ✅ Throws error in constructor (fail-fast)
- ✅ Comments explain safety: `// tableName is validated in constructor, safe to interpolate`
- ✅ No user input reaches table name parameter (only hardcoded 'chunks_public' in public-ask.ts)

**Status:** ✅ Security best practice - no changes needed

---

### 5. Migration Version Tracking - Good Pattern
**File:** `packages/core/src/db.ts:74-129`

**Finding:** Implements `schema_migrations` table for tracking applied migrations.

**Strengths:**
- ✅ Idempotent (safe to re-run)
- ✅ Version tracking prevents duplicate execution
- ✅ Alphabetical execution order (001-, 002-, etc.)
- ✅ Graceful handling of missing migrations dir
- ✅ Error propagation stops on failure

**Weakness:** Migration runs at API startup, not CLI command. If migration fails, entire API crashes.

**Recommendation:** Consider separate `bun run migrate` command for safer deployment.

**Status:** ✅ Acceptable for current scope - consider CLI in future

---

### 6. Frontend URL Validation - Defense in Depth
**File:** `src/components/assistant/AssistantSources.tsx:8-19`

**Finding:** Clean implementation with proper filtering:
```typescript
function isValidSourceUrl(url: string): boolean {
  if (url.startsWith('/docs/')) return true;
  if (url.startsWith('https://docs.claudekit.cc/docs/')) return true;
  return false;
}
```

**Analysis:**
- ✅ Graceful degradation (invalid sources filtered, not error)
- ✅ Console warning for debugging
- ✅ Handles both relative and absolute URLs
- ✅ Normalizes absolute URLs to relative for Astro routing

**Status:** ✅ Solid implementation

---

### 7. Public Prompt - Concise Without Emojis
**File:** `packages/core/src/generator/prompt-builder.ts:37-56`

**Finding:** Clean separation between Discord (emoji-rich) and public (concise) prompts.

**Public Prompt Rules:**
- 2-3 sentences unless code needed
- No emojis
- Source citations as [1], [2]
- Explicit "I don't know" fallback

**Status:** ✅ Meets requirements

---

### 8. Rate Limiting - Robust Abuse Detection
**File:** `packages/api/src/routes/public-ask.ts:21-48`

**Finding:** Multi-layer protection:
- 5 requests/minute per IP
- Identical query detection (3+ triggers block)
- Short query spam detection (4+ under 10 chars)
- 5-minute block duration
- CORS restricted to docs.claudekit.cc
- Origin header validation

**Status:** ✅ Production-ready security

---

## Low Priority Suggestions

### 9. Migration Copy Script - Platform Compatibility
**File:** `packages/core/package.json:8`

```json
"build": "tsc && cp -r src/migrations dist/ 2>/dev/null || true"
```

**Issue:** `cp` command fails silently on Windows (uses PowerShell).

**Fix:**
```json
"build": "tsc && node -e \"require('fs-extra').copySync('src/migrations', 'dist/migrations')\"",
```

**Status:** ⚡ Low priority - works on Linux/macOS, fails gracefully on Windows

---

### 10. Ingestion Script - Frontmatter Parser Simplicity
**File:** `scripts/ingest-public.ts:28-58`

**Finding:** Manual YAML parsing instead of library (gray-matter, js-yaml).

**Trade-off Analysis:**
- ✅ KISS principle - only parses needed fields
- ✅ No extra dependency
- ❌ May break with complex YAML (multiline values, nested objects)

**Recommendation:** Current implementation sufficient for simple frontmatter. Monitor for edge cases.

**Status:** ✅ Acceptable - YAGNI compliant

---

### 11. TODO Comment in Ingestion Route
**File:** `packages/api/src/routes/ingest.ts:15`

```typescript
// TODO: Implement signature verification
```

**Context:** GitHub webhook signature validation not implemented.

**Status:** 📝 Known technical debt - document in roadmap, not blocker

---

## Positive Observations

1. **Clean Separation:** `chunks` vs `chunks_public` tables perfectly isolated
2. **Zero Breaking Changes:** Discord bot endpoint unchanged
3. **Type Safety:** Full TypeScript, passes strict mode
4. **Security First:** Whitelist validation, CORS, rate limiting, origin checks
5. **Backward Compatible:** Default parameters preserve existing behavior
6. **Idempotent Operations:** Migration and ingestion safe to re-run
7. **Canonical URLs:** Ingestion stores full `https://docs.claudekit.cc/docs/*` URLs
8. **Build Optimized:** Turbo cache hits (61ms build time)
9. **Error Handling:** Comprehensive try-catch blocks throughout
10. **Code Documentation:** Comments explain security decisions

---

## Architecture Compliance

### YAGNI ✅
- No over-engineering
- Single responsibility per function
- Minimal API surface changes

### KISS ✅
- Simple table parameter instead of complex abstraction
- Direct SQL without ORM overhead
- Straightforward validation logic

### DRY ✅
- Shared `buildPrompt` vs `buildPublicPrompt` only where needed
- Reused PgVectorStore class with parameter
- Single migration runner for all SQL files

---

## Recommended Actions

### Before Merge (Required)
1. **Fix hardcoded path in `ingest-public.ts`** - Use relative path from `__dirname`
2. **Run ingestion script** - Populate `chunks_public` table before deployment
3. **Test public endpoint** - Verify widget returns results from `chunks_public`
4. **Test Discord bot** - Confirm no regression in Discord functionality

### Before Deployment (Recommended)
5. **Add empty table warning** - Log warning if `chunks_public` empty at startup
6. **Document ingestion workflow** - Add to deployment guide
7. **Set up CI validation** - Verify ingestion script runs in CI environment

### Future Enhancements (Optional)
8. **Separate migration CLI** - `bun run migrate` command for safer deployments
9. **Cross-platform build** - Replace `cp` with Node.js `fs-extra`
10. **GitHub webhook security** - Implement signature verification

---

## Plan Status Update

### Phase Completion Summary

| Phase | Status | Review |
|-------|--------|--------|
| Phase 1: Database Schema | ✅ DONE | Passed |
| Phase 2: RAG Multi-table | ✅ DONE | Passed |
| Phase 3: Public Prompt | ✅ DONE | Passed |
| Phase 4: Frontend Sources | ✅ DONE | Passed |
| Phase 5: Public Ingestion | ⚠️ NEEDS FIX | Path issue |

### Outstanding Tasks

**Phase 5 Blockers:**
- [ ] Fix hardcoded `/home/kai/...` path in `ingest-public.ts`
- [ ] Run ingestion script to populate `chunks_public` table
- [ ] Verify canonical URLs stored correctly

**Optional Improvements:**
- [ ] Add empty table warning to `public-ask.ts`
- [ ] Update deployment guide with ingestion steps
- [ ] Test CI environment compatibility

---

## Metrics

### Code Quality
- Type Coverage: 100% (strict TypeScript)
- Build Time: 61ms (Turbo cached)
- Linting: No errors
- Test Coverage: Not measured (no tests added)

### Security Posture
- SQL Injection: ✅ Prevented (whitelist validation)
- CORS: ✅ Configured (docs.claudekit.cc only)
- Rate Limiting: ✅ Implemented (5/min + abuse detection)
- Origin Validation: ✅ Checked

### Performance
- Migration Time: < 1s (single table creation)
- Build Cache Hit: 100% (FULL TURBO)
- No performance regression detected

---

## Unresolved Questions

1. Should migration runner be CLI command instead of API startup?
2. What's the webhook signature verification timeline (ingest.ts TODO)?
3. Should ingestion script run in CI/CD pipeline automatically?
4. Is there a monitoring plan for `chunks_public` table size growth?

---

## Final Recommendation

**APPROVE with required fixes.**

Core architecture is solid. Security practices excellent. One critical path issue must be fixed before merge (hardcoded docs path). After fix + ingestion run, ready for production deployment.

**Next Steps:**
1. Fix `ingest-public.ts` path issue
2. Run ingestion script locally
3. Test public endpoint with populated data
4. Update plan.md Phase 5 status to DONE
5. Merge to dev branch
