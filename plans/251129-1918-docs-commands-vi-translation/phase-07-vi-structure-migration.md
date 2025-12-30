# Phase 07: Vietnamese Structure Migration

**Phase ID**: 07
**Status**: Pending
**Priority**: High
**Estimated Complexity**: Medium
**Files**: 34 (19 commands + 15 skills)

## Context

VI docs use flat structure, EN uses nested categories. Must migrate before translation to:
- Fix URL inconsistency (`/vi/docs/commands/ask` → `/vi/docs/commands/core/ask`)
- Enable proper navigation
- Prevent SEO duplicate content issues
- Match EN structure for maintenance parity

## Research Links

- VI Gap Analysis: Lines 30-72 (commands flat→nested)
- VI Gap Analysis: Lines 54-73 (skills flat→categorized)
- VI Gap Analysis: Lines 145-167 (technical debt notes)

## Current State

### Commands (19 files to migrate)
```
VI (flat):                          EN (nested):
docs-vi/docs/commands/              docs/docs/commands/
├── ask.md                          ├── core/
├── bootstrap.md                    │   ├── ask.md
├── cook.md                         │   ├── bootstrap.md
├── debug.md                        │   ├── cook.md
├── journal.md                      │   ├── debug.md
├── scout.md                        │   ├── journal.md
├── watzup.md                       │   ├── scout.md
├── init.md                         │   └── watzup.md
├── summarize.md                    ├── docs-cmd/
├── update.md                       │   ├── init.md
├── commit-push.md                  │   ├── summarize.md
├── commit.md                       │   └── update.md
├── pull-request.md                 ├── git/
├── polar.md                        │   ├── commit-push.md
├── sepay.md                        │   ├── commit.md
├── ci.md                           │   └── pull-request.md
├── two.md                          ├── integrate/
├── create.md                       │   ├── polar.md
└── fix-logs.md                     │   └── sepay.md
                                    ├── plan/
                                    │   ├── ci.md
                                    │   └── two.md
                                    └── skill/
                                        ├── create.md
                                        └── fix-logs.md
```

### Skills (15 files to migrate)
```
VI (flat):                          EN (categorized):
docs-vi/docs/skills/                docs/docs/skills/
├── canvas-design.md                ├── ai/
├── gemini-vision.md                │   ├── canvas-design.md
├── better-auth.md                  │   └── gemini-vision.md
├── docker.md                       ├── auth/
├── postgresql-psql.md              │   └── better-auth.md
├── shopify.md                      ├── backend/
├── nextjs.md                       │   ├── docker.md
├── shadcn-ui.md                    │   └── postgresql-psql.md
├── tailwindcss.md                  ├── ecommerce/
├── document-skills.md              │   └── shopify.md
├── ffmpeg.md                       ├── frontend/
├── imagemagick.md                  │   ├── nextjs.md
├── mcp-builder.md                  │   ├── shadcn-ui.md
├── skill-creator.md                │   └── tailwindcss.md
└── systematic-debugging.md         └── tools/
                                        ├── document-skills.md
                                        ├── ffmpeg.md
                                        ├── imagemagick.md
                                        ├── mcp-builder.md
                                        ├── skill-creator.md
                                        └── systematic-debugging.md
```

## Requirements

### Migration Tasks

#### 1. Commands Migration (19 files)

**Target Directories**:
- `/mnt/d/www/claudekit/claudekit-docs/src/content/docs-vi/docs/commands/core/` (7 files)
- `/mnt/d/www/claudekit/claudekit-docs/src/content/docs-vi/docs/commands/docs-cmd/` (3 files)
- `/mnt/d/www/claudekit/claudekit-docs/src/content/docs-vi/docs/commands/git/` (3 files)
- `/mnt/d/www/claudekit/claudekit-docs/src/content/docs-vi/docs/commands/integrate/` (2 files)
- `/mnt/d/www/claudekit/claudekit-docs/src/content/docs-vi/docs/commands/plan/` (2 files)
- `/mnt/d/www/claudekit/claudekit-docs/src/content/docs-vi/docs/commands/skill/` (2 files)

**Category Mapping**:
```
ask, bootstrap, cook, debug, journal, scout, watzup → core/
init, summarize, update → docs-cmd/
commit-push, commit, pull-request → git/
polar, sepay → integrate/
ci, two → plan/
create, fix-logs → skill/
```

**Frontmatter Updates**:
```yaml
# Old:
category: commands
# New:
category: commands/core  # or commands/git, commands/plan, etc.
```

#### 2. Skills Migration (15 files)

**Target Directories**:
- `/mnt/d/www/claudekit/claudekit-docs/src/content/docs-vi/docs/skills/ai/` (2 files)
- `/mnt/d/www/claudekit/claudekit-docs/src/content/docs-vi/docs/skills/auth/` (1 file)
- `/mnt/d/www/claudekit/claudekit-docs/src/content/docs-vi/docs/skills/backend/` (2 files)
- `/mnt/d/www/claudekit/claudekit-docs/src/content/docs-vi/docs/skills/ecommerce/` (1 file)
- `/mnt/d/www/claudekit/claudekit-docs/src/content/docs-vi/docs/skills/frontend/` (3 files)
- `/mnt/d/www/claudekit/claudekit-docs/src/content/docs-vi/docs/skills/tools/` (6 files)

**Category Mapping**:
```
canvas-design, gemini-vision → ai/
better-auth → auth/
docker, postgresql-psql → backend/
shopify → ecommerce/
nextjs, shadcn-ui, tailwindcss → frontend/
document-skills, ffmpeg, imagemagick, mcp-builder, skill-creator, systematic-debugging → tools/
```

**Frontmatter Updates**:
```yaml
# Old:
category: skills
# New:
category: skills/ai  # or skills/frontend, skills/tools, etc.
```

#### 3. Internal Link Updates

**Pattern to Find**:
```markdown
[text](/vi/docs/commands/ask)
[text](/vi/docs/skills/nextjs)
```

**Pattern to Replace**:
```markdown
[text](/vi/docs/commands/core/ask)
[text](/vi/docs/skills/frontend/nextjs)
```

**Files to Check**:
- All VI markdown files in `docs-vi/docs/`
- Special attention: index files, getting-started pages

#### 4. Cleanup Old Files

After migration, delete flat structure files:
- `docs-vi/docs/commands/*.md` (except index.md, design/, fix/ subdirs)
- `docs-vi/docs/skills/*.md` (except index.md)

## Implementation Steps

1. **Create Directory Structure**:
   ```bash
   mkdir -p docs-vi/docs/commands/{core,docs-cmd,git,integrate,plan,skill}
   mkdir -p docs-vi/docs/skills/{ai,auth,backend,ecommerce,frontend,tools}
   ```

2. **Migrate Commands (19 files)**:
   - Move 7 files to `core/`
   - Move 3 files to `docs-cmd/`
   - Move 3 files to `git/`
   - Move 2 files to `integrate/`
   - Move 2 files to `plan/`
   - Move 2 files to `skill/`
   - Update frontmatter category in each

3. **Migrate Skills (15 files)**:
   - Move 2 files to `ai/`
   - Move 1 file to `auth/`
   - Move 2 files to `backend/`
   - Move 1 file to `ecommerce/`
   - Move 3 files to `frontend/`
   - Move 6 files to `tools/`
   - Update frontmatter category in each

4. **Update Internal Links**:
   - Search all VI docs for `/vi/docs/commands/[^/]` pattern
   - Replace with nested paths
   - Search all VI docs for `/vi/docs/skills/[^/]` pattern
   - Replace with categorized paths

5. **Cleanup**:
   - Delete old flat structure files
   - Verify no orphaned files

6. **Validation**:
   - Run `bun run build`
   - Check for broken links
   - Verify navigation structure

## Success Criteria

- [ ] All 19 command files moved to nested directories
- [ ] All 15 skill files moved to categorized directories
- [ ] Frontmatter categories updated (commands/*, skills/*)
- [ ] Internal links updated to new paths
- [ ] Old flat files deleted
- [ ] No orphaned files
- [ ] `bun run build` passes
- [ ] Navigation matches EN structure

## Dependencies

- Must complete BEFORE Phase 08 (VI translation)

## Notes

- This is structural only, NO translation changes
- Preserve existing Vietnamese content
- URL structure will break temporarily (acceptable, will fix in deployment)
- Consider adding redirects (nginx/cloudflare) for old URLs
- Test navigation after migration

## Unresolved Questions

1. Add URL redirects for SEO? (flat→nested)
2. Gradual migration or atomic switch?
3. Announce breaking change to users?
