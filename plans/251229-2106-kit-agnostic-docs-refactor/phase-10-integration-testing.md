---
title: "Phase 10: Integration & Testing"
status: pending
effort: 3h
type: sequential
depends_on: [phase-01, phase-02, phase-03, phase-04, phase-05, phase-06, phase-07, phase-08, phase-09]
---

# Phase 10: Integration & Testing

**Type**: SEQUENTIAL (final phase)
**Effort**: 3h
**Owner**: Integration Engineer
**Depends On**: ALL previous phases

---

## Overview

Final integration phase: configure redirects, run full test suite, verify all functionality, and prepare for deployment.

---

## Exclusive File Ownership

This phase exclusively owns:

```
astro.config.mjs (redirects section)
src/pages/docs/[...slug].astro (routing updates if needed)
src/pages/vi/docs/[...slug].astro (routing updates if needed)
tests/ (all test files)
```

---

## Tasks

### Task 10.1: Configure URL Redirects

Add redirects to `astro.config.mjs` for old URLs:

```javascript
// astro.config.mjs
export default defineConfig({
  // ... existing config
  redirects: {
    // Agents - old paths to new /engineer/ paths
    '/docs/agents/planner': '/docs/engineer/agents/planner',
    '/docs/agents/researcher': '/docs/engineer/agents/researcher',
    '/docs/agents/tester': '/docs/engineer/agents/tester',
    '/docs/agents/debugger': '/docs/engineer/agents/debugger',
    '/docs/agents/code-reviewer': '/docs/engineer/agents/code-reviewer',
    '/docs/agents/docs-manager': '/docs/engineer/agents/docs-manager',
    '/docs/agents/git-manager': '/docs/engineer/agents/git-manager',
    '/docs/agents/project-manager': '/docs/engineer/agents/project-manager',
    '/docs/agents/database-admin': '/docs/engineer/agents/database-admin',
    '/docs/agents/ui-ux-designer': '/docs/engineer/agents/ui-ux-designer',
    '/docs/agents/copywriter': '/docs/engineer/agents/copywriter',
    '/docs/agents/scout': '/docs/engineer/agents/scout',
    '/docs/agents/scout-external': '/docs/engineer/agents/scout-external',
    '/docs/agents/journal-writer': '/docs/engineer/agents/journal-writer',
    '/docs/agents/brainstormer': '/docs/engineer/agents/brainstormer',
    '/docs/agents/fullstack-developer': '/docs/engineer/agents/fullstack-developer',
    '/docs/agents/mcp-manager': '/docs/engineer/agents/mcp-manager',

    // Commands - redirect to engineer namespace
    '/docs/commands/[...slug]': '/docs/engineer/commands/[...slug]',

    // Skills - redirect to engineer namespace
    '/docs/skills/[...slug]': '/docs/engineer/skills/[...slug]',

    // Configuration - redirect to shared
    '/docs/configuration/[...slug]': '/docs/shared/[...slug]',

    // Vietnamese mirrors
    '/vi/docs/agents/[...slug]': '/vi/docs/engineer/agents/[...slug]',
    '/vi/docs/commands/[...slug]': '/vi/docs/engineer/commands/[...slug]',
    '/vi/docs/skills/[...slug]': '/vi/docs/engineer/skills/[...slug]',
  }
});
```

**Count**: ~100 redirects

---

### Task 10.2: Verify All Redirects

Test each redirect category:

```bash
# Test redirect locally
curl -I http://localhost:4321/docs/agents/planner
# Should return 301/302 to /docs/engineer/agents/planner
```

**Checklist**:
- [ ] All agent redirects work
- [ ] All command redirects work
- [ ] All skill redirects work
- [ ] Vietnamese redirects work
- [ ] No redirect loops
- [ ] Final destination returns 200

---

### Task 10.3: Full Build Validation

```bash
# Clean build
rm -rf dist/
bun run build

# Verify build succeeds
echo $?
# Should be 0

# Check build time
# Should be <2 minutes

# Check output size
du -sh dist/
```

**Expected**: Build completes in <2 minutes with no errors

---

### Task 10.4: Navigation Testing

Manual verification of navigation:

**Kit Switcher**:
- [ ] Switcher visible in header
- [ ] Engineer kit selected by default
- [ ] Clicking Marketing switches view
- [ ] Kit preference persists (localStorage)
- [ ] URL updates when switching

**Sidebar Navigation**:
- [ ] Engineer section shows engineer content
- [ ] Marketing section shows marketing content
- [ ] CLI section shows CLI content
- [ ] Collapsible categories work
- [ ] Active state highlights current page

**Cross-Kit Links**:
- [ ] Links from marketing to shared content work
- [ ] Links from CLI to kit-specific content work
- [ ] No broken internal links

---

### Task 10.5: Link Validation

Automated link checking:

```bash
# Install link checker if needed
npm install -g broken-link-checker

# Run against local server
bun run preview &
sleep 5
blc http://localhost:4321 -ro --filter-level 2
```

**Target**: Zero broken links

---

### Task 10.6: Vietnamese Parity Check

Verify Vietnamese mirrors English:

```bash
# Count English files
find src/content/docs -name "*.md" | wc -l

# Count Vietnamese files
find src/content/docs-vi -name "*.md" | wc -l

# Should be equal or close
```

**Additional checks**:
- [ ] Language switcher appears on all pages
- [ ] Switching language preserves page context
- [ ] Vietnamese URLs use `/vi/` prefix
- [ ] Fallback behavior for missing translations

---

### Task 10.7: Search Index Verification

Verify search indexes all content:

```bash
# If using Pagefind or similar
# Verify index generation
ls dist/pagefind/
```

**Checks**:
- [ ] Search index generated
- [ ] Engineer content indexed
- [ ] Marketing content indexed
- [ ] CLI content indexed
- [ ] Vietnamese content indexed
- [ ] Search UI functional

---

### Task 10.8: Visual Asset Verification

Verify all visual assets load:

```bash
# Check all referenced images exist
grep -r "!\[" src/content/docs | grep -oP '(?<=\().*?(?=\))' | sort -u > /tmp/image-refs.txt
while read img; do
  if [ ! -f "public$img" ]; then
    echo "MISSING: $img"
  fi
done < /tmp/image-refs.txt
```

**Checks**:
- [ ] All diagrams load
- [ ] All infographics load
- [ ] Images display correctly on dark background
- [ ] Alt text present for accessibility

---

### Task 10.9: Accessibility Audit

Basic accessibility validation:

```bash
# Using lighthouse or axe-core
npx lighthouse http://localhost:4321/docs/marketing/ --only-categories=accessibility
```

**Target**: Accessibility score > 90

**Manual checks**:
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Screen reader announces content correctly
- [ ] Color contrast sufficient
- [ ] Alt text on all images

---

### Task 10.10: Performance Check

Verify site performance:

```bash
npx lighthouse http://localhost:4321/docs/marketing/ --only-categories=performance
```

**Targets**:
- [ ] Performance score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] Total bundle size < 500KB (gzipped)

---

### Task 10.11: SEO Validation

Verify SEO elements:

**Per-page checks** (sample 10 pages):
- [ ] Title tag present and unique
- [ ] Meta description present (80-160 chars)
- [ ] H1 present and unique
- [ ] Canonical URL correct
- [ ] Open Graph tags present

**Site-wide checks**:
- [ ] Sitemap generated (`/sitemap.xml`)
- [ ] Robots.txt appropriate
- [ ] No noindex on content pages

---

### Task 10.12: Final Smoke Test

End-to-end user journey tests:

**Journey 1: New Marketing User**
1. Land on `/docs/marketing/`
2. Navigate to Agents
3. Click on Campaign Manager
4. Follow link to Campaign Command
5. Switch to Vietnamese
6. Verify content loads

**Journey 2: Existing Engineer User**
1. Follow old URL `/docs/agents/planner`
2. Verify redirect to `/docs/engineer/agents/planner`
3. Navigate sidebar
4. Switch to Marketing kit
5. Verify navigation updates

**Journey 3: CLI User**
1. Navigate to `/docs/cli/`
2. Read installation guide
3. Click through all commands
4. Verify no dead ends

---

## Pre-Deployment Checklist

Final checks before deployment:

### Code Quality
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] All imports resolve

### Content Quality
- [ ] No placeholder content remaining
- [ ] No "TODO" markers in content
- [ ] All frontmatter valid

### Infrastructure
- [ ] Build succeeds
- [ ] No console errors in browser
- [ ] All redirects work
- [ ] Asset loading correct

### User Experience
- [ ] Navigation intuitive
- [ ] Kit switcher functional
- [ ] Search works
- [ ] Language switcher works

---

## Deployment Preparation

### Staging Deployment

```bash
# Build for production
bun run build

# Deploy to staging
# (deployment command depends on infrastructure)
```

### Production Deployment

After staging validation:

```bash
# Tag release
git tag -a v2.0.0 -m "Kit-Agnostic Docs Refactor"

# Push to production
# (deployment command depends on infrastructure)
```

---

## Rollback Plan

If critical issues discovered post-deploy:

1. **Immediate**: Revert to previous deployment
2. **Short-term**: Fix critical issues, re-deploy
3. **Long-term**: Document lessons learned

**Rollback command**:
```bash
# Depends on deployment platform
# Example for Vercel:
vercel rollback
```

---

## Completion Criteria

Phase 10 is COMPLETE when:

1. All 12 tasks verified
2. Zero broken links
3. Zero build errors
4. All redirects work
5. All tests pass
6. Accessibility score > 90
7. Performance score > 90
8. SEO validation passes
9. Smoke tests pass
10. Ready for production deployment

---

## Post-Completion

After Phase 10:

1. **Create PR** to `dev` branch
2. **Request review** from maintainers
3. **Merge after approval**
4. **Deploy to production**
5. **Monitor for issues**
6. **Update changelog**
