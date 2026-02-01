# Astro Redirects & IA Patterns Research

**Date:** 2026-01-31
**Researcher:** researcher-02
**Context:** Restructuring `/docs/engineer/commands/` → `/docs/engineer/skills/`

---

## 1. Current Astro/Starlight Setup

**Versions:**
- Astro: `5.14.6`
- No Starlight dependency (custom Astro + React islands architecture)
- Package manager: Bun

**Config pattern:** `astro.config.mjs`
- SSG output (`output: 'static'`)
- Content collections in `src/content/docs/` (EN) and `src/content/docs-vi/` (VI)
- Custom middleware for redirects (`src/middleware.ts`)

---

## 2. Redirect Implementation (Current Pattern)

**Method:** Astro middleware (301 redirects)
**File:** `src/middleware.ts`

**Pattern:**
```typescript
const exactRedirects: Record<string, string> = {
  '/docs/old-path': '/docs/new-path',
  // ...
};

export const onRequest = defineMiddleware((context, next) => {
  const { url, redirect } = context;
  const pathname = url.pathname;

  const exactMatch = exactRedirects[pathname];
  if (exactMatch) {
    return redirect(exactMatch, 301);
  }

  // Wildcard patterns
  if (pathname.startsWith('/docs/old-section/')) {
    const slug = pathname.replace('/docs/old-section/', '');
    return redirect(`/docs/new-section/${slug}`, 301);
  }

  return next();
});
```

**Existing wildcard redirects:**
- `/docs/troubleshooting/*` → `/docs/support/troubleshooting/*`
- `/docs/use-cases/*` → `/docs/workflows/*`

---

## 3. Current Sidebar Structure

**Directory tree:**
```
docs/
├── getting-started/
├── cli/
├── engineer/
│   ├── agents/
│   ├── commands/           # ← TO BE MOVED
│   │   ├── core/           # 36 total .md files
│   │   ├── docs-cmd/
│   │   ├── plan/
│   │   ├── review/
│   │   └── test/
│   ├── configuration/
│   └── skills/             # ← TARGET (currently empty)
├── marketing/
│   ├── commands/
│   └── skills/
├── tools/
├── workflows/
└── support/
    └── troubleshooting/
```

**Commands structure:**
- `/engineer/commands/` → 36 .md pages across 5 subdirectories (core, docs-cmd, plan, review, test)
- `/marketing/commands/` → exists but not counted in this research

---

## 4. Recommendation: Wildcard Redirect + Flatten

**Option A: Astro Middleware Wildcard (RECOMMENDED)**

**Rationale:**
- Consistent with existing pattern (use-cases → workflows, troubleshooting → support/troubleshooting)
- 301 redirects preserve SEO and external links
- Single source of truth in `middleware.ts`

**Implementation:**
```typescript
// Add to src/middleware.ts exactRedirects
if (pathname.startsWith('/docs/engineer/commands/')) {
  const slug = pathname.replace('/docs/engineer/commands/', '');
  return redirect(`/docs/engineer/skills/${slug}`, 301);
}

if (pathname.startsWith('/docs/marketing/commands/')) {
  const slug = pathname.replace('/docs/marketing/commands/', '');
  return redirect(`/docs/marketing/skills/${slug}`, 301);
}
```

**Pros:**
- Zero broken links (301 redirects)
- Works for external backlinks
- Simple middleware pattern
- No content changes needed (just file moves)

**Cons:**
- Middleware overhead (negligible for static site)
- Redirect chain if already nested (e.g., `/commands/core/x` → `/skills/core/x`)

---

**Option B: Delete + Let 404 Handle**

**Rationale:** Docs sites tolerate 404s; users search/navigate from home

**Pros:**
- Clean break, no legacy paths
- Forces users to new structure

**Cons:**
- Breaks external links (if any)
- Poor UX for bookmarked pages
- SEO penalty for 404s

**Verdict:** **NOT RECOMMENDED** for production docs

---

**Option C: Replace Content with Redirect Notice**

**Example:**
```markdown
---
title: "Page Moved"
---

This page has moved to [/docs/engineer/skills/core/commit](/docs/engineer/skills/core/commit).
```

**Pros:**
- User-friendly message
- No middleware needed

**Cons:**
- Requires editing 36+ pages
- Still generates 36 orphaned pages in build
- SEO doesn't recognize as redirect (soft 404)

**Verdict:** **NOT RECOMMENDED** (more work, worse SEO)

---

## 5. Estimated Redirect Count

**Engineer commands → skills:**
- 36 pages in `/engineer/commands/` (core, docs-cmd, plan, review, test)
- Wildcard pattern: 1 rule handles all

**Marketing commands → skills:**
- Not counted (out of scope for researcher-02)
- Same wildcard pattern applies

**Total middleware rules needed:** **2 wildcard blocks**

---

## 6. Sidebar Structure Post-Move

**Before:**
```
/docs/engineer/
  ├── agents/
  ├── commands/          # 36 pages
  ├── configuration/
  └── skills/            # empty
```

**After:**
```
/docs/engineer/
  ├── agents/
  ├── configuration/
  └── skills/            # 36 pages (moved from commands/)
      ├── core/
      ├── docs-cmd/
      ├── plan/
      ├── review/
      └── test/
```

**Sidebar Nav:** No code changes needed if sidebar auto-generates from file structure (check `SidebarNav.astro` or content collection config)

---

## 7. Implementation Checklist

1. **Move files:**
   ```bash
   mv src/content/docs/engineer/commands/* src/content/docs/engineer/skills/
   rm -rf src/content/docs/engineer/commands/
   ```

2. **Add wildcard redirects to `src/middleware.ts`:**
   ```typescript
   if (pathname.startsWith('/docs/engineer/commands/')) {
     const slug = pathname.replace('/docs/engineer/commands/', '');
     return redirect(`/docs/engineer/skills/${slug}`, 301);
   }
   ```

3. **Update internal links:**
   ```bash
   grep -r "/docs/engineer/commands/" src/content/docs/ --include="*.md"
   # Replace all instances with /docs/engineer/skills/
   ```

4. **Test:**
   ```bash
   bun run build  # Must pass (CRITICAL quality gate)
   bun run preview
   # Manually test old URLs redirect to new paths
   ```

5. **Repeat for marketing if needed:**
   ```bash
   mv src/content/docs/marketing/commands/* src/content/docs/marketing/skills/
   ```

---

## Unresolved Questions

1. **Marketing scope:** Should marketing/commands → marketing/skills be done in same PR or separate?
2. **Vietnamese docs:** Do `/docs-vi/` pages need same move? (Check if `/docs-vi/engineer/commands/` exists)
3. **Sidebar component:** Is sidebar auto-generated or hardcoded? (Need to check `SidebarNav.astro` implementation)
4. **External backlinks:** Do we have analytics to see if old paths are linked externally? (Low risk for new docs site)
