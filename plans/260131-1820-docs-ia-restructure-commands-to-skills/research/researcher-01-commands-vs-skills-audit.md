# Command vs Skill Documentation Audit

**Date:** 2026-01-31
**Scope:** Full audit of EN/VI command and skill pages for engineer + marketing kits
**Purpose:** Identify pages to remove/redirect after command→skill migration

---

## MIGRATED Commands → DELETE/REDIRECT

### /git (EN: ❌ NO PAGES | VI: 3 pages TO REMOVE)

**Command pages (TO REMOVE):**
- VI ONLY:
  - `src/content/docs-vi/engineer/commands/git/commit.md`
  - `src/content/docs-vi/engineer/commands/git/commit-push.md`
  - `src/content/docs-vi/engineer/commands/git/pull-request.md`

**Skill pages (AUTHORITATIVE):**
- EN: `src/content/docs/engineer/skills/git.md` ✅
- VI: ❌ MISSING

**Action:** Remove 3 VI command pages, create VI skill page

---

### /fix (EN: ❌ NO PAGES | VI: 8 pages TO REMOVE)

**Command pages (TO REMOVE):**
- VI ONLY:
  - `src/content/docs-vi/engineer/commands/fix/ci.md`
  - `src/content/docs-vi/engineer/commands/fix/fast.md`
  - `src/content/docs-vi/engineer/commands/fix/hard.md`
  - `src/content/docs-vi/engineer/commands/fix/index.md`
  - `src/content/docs-vi/engineer/commands/fix/logs.md`
  - `src/content/docs-vi/engineer/commands/fix/parallel.md`
  - `src/content/docs-vi/engineer/commands/fix/types.md`
  - `src/content/docs-vi/engineer/commands/fix/ui.md`

**Skill pages (AUTHORITATIVE):**
- EN: `src/content/docs/engineer/skills/fix.md` ✅
- VI: ❌ MISSING

**Action:** Remove 8 VI command pages, create VI skill page

---

### /cook + /code (EN: 6 pages TO REMOVE | VI: 5 pages TO REMOVE)

**Command pages (TO REMOVE):**
- EN:
  - `src/content/docs/engineer/commands/core/cook.md`
  - `src/content/docs/engineer/commands/core/cook-auto.md`
  - `src/content/docs/engineer/commands/core/cook-auto-fast.md`
  - `src/content/docs/engineer/commands/core/cook-auto-parallel.md`
  - NOTE: No standalone `/code` command pages found
- VI:
  - `src/content/docs-vi/engineer/commands/core/cook.md`
  - `src/content/docs-vi/engineer/commands/core/cook-auto-parallel.md`
  - `src/content/docs-vi/engineer/commands/core/code.md`
  - `src/content/docs-vi/engineer/commands/core/code-parallel.md`

**Skill pages (AUTHORITATIVE):**
- EN: `src/content/docs/engineer/skills/cook.md` ✅
- VI: ❌ MISSING

**Action:** Remove 6 EN + 4 VI command pages, create VI skill page

---

### /scout (EN: ❌ NO PAGES | VI: 2 pages TO REMOVE)

**Command pages (TO REMOVE):**
- VI ONLY:
  - `src/content/docs-vi/engineer/commands/core/scout.md`
  - `src/content/docs-vi/engineer/commands/core/scout-ext.md`

**Skill pages (AUTHORITATIVE):**
- EN: `src/content/docs/engineer/skills/scout.md` ✅
- VI: ❌ MISSING

**Action:** Remove 2 VI command pages, create VI skill page

---

### /design (EN: ❌ NO PAGES | VI: 6 pages TO REMOVE)

**Command pages (TO REMOVE):**
- VI ONLY:
  - `src/content/docs-vi/engineer/commands/design/3d.md`
  - `src/content/docs-vi/engineer/commands/design/describe.md`
  - `src/content/docs-vi/engineer/commands/design/fast.md`
  - `src/content/docs-vi/engineer/commands/design/good.md`
  - `src/content/docs-vi/engineer/commands/design/screenshot.md`
  - `src/content/docs-vi/engineer/commands/design/video.md`

**Skill pages (AUTHORITATIVE):**
- EN: `src/content/docs/engineer/skills/ai-artist.md` ✅
- VI: `src/content/docs-vi/engineer/skills/ai/canvas-design.md` ✅
- VI: `src/content/docs-vi/engineer/skills/ai/gemini-vision.md` ✅

**Action:** Remove 6 VI command pages (skill pages already exist)

---

### /content (EN: ❌ NO PAGES | VI: 4 pages TO REMOVE)

**Command pages (TO REMOVE):**
- VI ONLY:
  - `src/content/docs-vi/engineer/commands/content/cro.md`
  - `src/content/docs-vi/engineer/commands/content/enhance.md`
  - `src/content/docs-vi/engineer/commands/content/fast.md`
  - `src/content/docs-vi/engineer/commands/content/good.md`

**Skill pages (AUTHORITATIVE):**
- EN: `src/content/docs/engineer/skills/copywriting.md` ✅
- VI: ❌ MISSING

**Action:** Remove 4 VI command pages, create VI skill page

---

### /skill (EN: ❌ NO PAGES | VI: 5 pages TO REMOVE)

**Command pages (TO REMOVE):**
- VI ONLY:
  - `src/content/docs-vi/engineer/commands/skill/add.md`
  - `src/content/docs-vi/engineer/commands/skill/create.md`
  - `src/content/docs-vi/engineer/commands/skill/fix-logs.md`
  - `src/content/docs-vi/engineer/commands/skill/optimize.md`
  - `src/content/docs-vi/engineer/commands/skill/optimize-auto.md`

**Skill pages (AUTHORITATIVE):**
- EN: `src/content/docs/engineer/skills/skill-creator.md` ✅
- VI: `src/content/docs-vi/engineer/skills/tools/skill-creator.md` ✅

**Action:** Remove 5 VI command pages (skill page already exists)

---

## ACTIVE Commands — KEEP PAGES

### Engineer Kit (EN)

**Core commands (ACTIVE):**
- `/ask` — `core/ask.md` ✅
- `/bootstrap` — `core/bootstrap.md` + variants (auto, auto-fast, auto-parallel) ✅
- `/debug` — `core/debug.md` ✅
- `/journal` — `core/journal.md` ✅
- `/kanban` — `core/kanban.md` ✅
- `/preview` — `core/preview.md` ✅
- `/test` — `core/test.md` ✅
- `/use-mcp` — `core/use-mcp.md` ✅
- `/watzup` — `core/watzup.md` ✅
- `/worktree` — `core/worktree.md` ✅
- `/ck-help` — `core/ck-help.md` ✅
- `/coding-level` — `core/coding-level.md` ✅

**Docs commands (ACTIVE):**
- `/docs:init` — `docs-cmd/init.md` ✅
- `/docs:summarize` — `docs-cmd/summarize.md` ✅
- `/docs:update` — `docs-cmd/update.md` ✅

**Plan commands (ACTIVE):**
- `/plan` — `plan/index.md` + variants (fast, hard, ci, cro, validate, two, parallel, archive) ✅

**Review commands (ACTIVE):**
- `/review:codebase` — `review/codebase.md` + parallel variant ✅

**Test commands (ACTIVE):**
- `/test:ui` — `test/ui.md` ✅

---

### Engineer Kit (VI)

**Core commands (ACTIVE):**
- `/ask` ✅
- `/bootstrap` + auto-parallel ✅
- `/brainstorm` ✅
- `/debug` ✅
- `/journal` ✅
- `/watzup` ✅
- `/review:codebase` ✅

**Docs commands (ACTIVE):**
- `/docs:init`, `/docs:summarize`, `/docs:update` ✅

**Plan commands (ACTIVE):**
- `/plan` + variants (ci, two, parallel) ✅

**Integration commands (ACTIVE - UNCLEAR IF MIGRATED):**
- `/integrate:polar` — `integrate/polar.md`
- `/integrate:sepay` — `integrate/sepay.md`

---

### Marketing Kit (EN)

**All command pages are ACTIVE** (no migration to skills yet):
- `/analyze`, `/ask`, `/bootstrap`, `/brainstorm`, `/campaign`, `/code`, `/content`, `/cook`
- `/dashboard`, `/design`, `/email`, `/fix`, `/git`, `/persona`, `/plan`, `/review`
- `/scout`, `/seo`, `/slide`, `/social`, `/test`, `/use-mcp`, `/video`, `/write`

**Marketing has NO command→skill migration** (commands and skills coexist independently)

---

## VI Skill Structure (Organized by Category)

**Tools:**
- `tools/document-skills.md` ✅
- `tools/ffmpeg.md` ✅
- `tools/imagemagick.md` ✅
- `tools/mcp-builder.md` ✅
- `tools/skill-creator.md` ✅
- `tools/systematic-debugging.md` ✅

**AI:**
- `ai/canvas-design.md` ✅
- `ai/gemini-vision.md` ✅

**Auth:**
- `auth/better-auth.md` ✅

**Backend:**
- `backend/docker.md` ✅
- `backend/postgresql-psql.md` ✅

**Frontend:**
- `frontend/nextjs.md` ✅
- `frontend/shadcn-ui.md` ✅
- `frontend/tailwindcss.md` ✅

**E-commerce:**
- `ecommerce/shopify.md` ✅

---

## Summary Statistics

### EN (Engineer)
- Commands to remove: 6 (cook family)
- Commands to keep: 36 (active)
- Skill pages: 50+

### VI (Engineer)
- Commands to remove: 39 total
  - /git: 3
  - /fix: 8
  - /cook+code: 4
  - /scout: 2
  - /design: 6
  - /content: 4
  - /skill: 5
  - /integrate: 2 (unclear)
- Commands to keep: ~15 (active)
- Skill pages: 15 (organized by category)

### Marketing (EN)
- Commands: 25 (ALL ACTIVE, no migration)
- Skills: 22
- Agents: 34
- Workflows: 9

---

## Unresolved Questions

1. **VI integrate commands** (`/integrate:polar`, `/integrate:sepay`) — migrated to skills?
2. **VI skill gap** — Missing VI translations for: git, fix, cook, scout, copywriting skills
3. **Marketing migration** — Are marketing commands planned for skill migration?
4. **Redirect strategy** — 301 redirects vs removal for deleted VI command pages?
5. **Search indexing** — Will Algolia/Astro search update after page deletions?
