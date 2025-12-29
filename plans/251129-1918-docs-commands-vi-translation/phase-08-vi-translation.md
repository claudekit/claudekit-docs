# Phase 08: Vietnamese Translation

**Phase ID**: 08
**Status**: Pending
**Priority**: Medium
**Estimated Complexity**: High
**Files**: 26

## Context

After structure migration (Phase 07), translate missing VI content:
- 4 Getting Started pages
- 2 Support pages
- 3 Workflows pages
- 1 Changelog page
- 16 newly created EN command pages (from Phases 01-06)

## Research Links

- VI Gap Analysis: Lines 20-86 (missing translations)
- VI Gap Analysis: Lines 109-143 (translation priority)

## Translation Scope

### Group A: Existing EN → VI Translation (10 files)

#### Getting Started (4 files)
1. **index.md** - Overview page
   - EN: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/getting-started/index.md`
   - VI: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs-vi/docs/getting-started/index.md`
   - Priority: Critical (landing page)

2. **concepts.md** - Core concepts
   - EN: `src/content/docs/docs/getting-started/concepts.md`
   - VI: `src/content/docs-vi/docs/getting-started/concepts.md`
   - Priority: Critical (foundational knowledge)

3. **upgrade-guide.md** - Upgrade instructions
   - EN: `src/content/docs/docs/getting-started/upgrade-guide.md`
   - VI: `src/content/docs-vi/docs/getting-started/upgrade-guide.md`
   - Priority: High

4. **why-claudekit.md** - Value proposition
   - EN: `src/content/docs/docs/getting-started/why-claudekit.md`
   - VI: `src/content/docs-vi/docs/getting-started/why-claudekit.md`
   - Priority: High

#### Support (2 files)
5. **index.md** - Support hub
   - EN: `src/content/docs/docs/support/index.md`
   - VI: `src/content/docs-vi/docs/support/index.md`
   - Priority: High

6. **faq.md** - Frequently asked questions
   - EN: `src/content/docs/docs/support/faq.md`
   - VI: `src/content/docs-vi/docs/support/faq.md`
   - Priority: Critical (common user needs)

#### Workflows (3 files)
7. **bug-fixing.md** - Bug fix workflow
   - EN: `src/content/docs/docs/workflows/bug-fixing.md`
   - VI: `src/content/docs-vi/docs/workflows/bug-fixing.md`
   - Priority: Medium

8. **documentation.md** - Docs workflow
   - EN: `src/content/docs/docs/workflows/documentation.md`
   - VI: `src/content/docs-vi/docs/workflows/documentation.md`
   - Priority: Medium

9. **feature-development.md** - Feature dev workflow
   - EN: `src/content/docs/docs/workflows/feature-development.md`
   - VI: `src/content/docs-vi/docs/workflows/feature-development.md`
   - Priority: Medium

#### Changelog (1 file)
10. **index.md** - Version history
    - EN: `src/content/docs/docs/changelog/index.md`
    - VI: `src/content/docs-vi/docs/changelog/index.md`
    - Priority: Low

### Group B: New EN Docs → VI Translation (16 files)

Created in Phases 01-06, need Vietnamese versions:

#### From Phase 01: Core Commands (2 files)
11. **core/code.md**
    - EN: `src/content/docs/docs/commands/core/code.md`
    - VI: `src/content/docs-vi/docs/commands/core/code.md`

12. **core/brainstorm.md**
    - EN: `src/content/docs/docs/commands/core/brainstorm.md`
    - VI: `src/content/docs-vi/docs/commands/core/brainstorm.md`

#### From Phase 02: Plan Commands (2 files)
13. **plan/index.md** (if created/updated)
    - EN: `src/content/docs/docs/commands/plan/index.md`
    - VI: `src/content/docs-vi/docs/commands/plan/index.md`

14. **plan/parallel.md**
    - EN: `src/content/docs/docs/commands/plan/parallel.md`
    - VI: `src/content/docs-vi/docs/commands/plan/parallel.md`

#### From Phase 03: Fix Commands (2 files)
15. **fix/index.md** (if created/updated)
    - EN: `src/content/docs/docs/commands/fix/index.md`
    - VI: `src/content/docs-vi/docs/commands/fix/index.md`

16. **fix/parallel.md**
    - EN: `src/content/docs/docs/commands/fix/parallel.md`
    - VI: `src/content/docs-vi/docs/commands/fix/parallel.md`

#### From Phase 04: Scout/Review Commands (2 files)
17. **core/scout-ext.md**
    - EN: `src/content/docs/docs/commands/core/scout-ext.md`
    - VI: `src/content/docs-vi/docs/commands/core/scout-ext.md`

18. **core/review-codebase.md**
    - EN: `src/content/docs/docs/commands/core/review-codebase.md`
    - VI: `src/content/docs-vi/docs/commands/core/review-codebase.md`

#### From Phase 05: Skill Commands (3 files)
19. **skill/add.md**
    - EN: `src/content/docs/docs/commands/skill/add.md`
    - VI: `src/content/docs-vi/docs/commands/skill/add.md`

20. **skill/optimize.md**
    - EN: `src/content/docs/docs/commands/skill/optimize.md`
    - VI: `src/content/docs-vi/docs/commands/skill/optimize.md`

21. **skill/optimize-auto.md**
    - EN: `src/content/docs/docs/commands/skill/optimize-auto.md`
    - VI: `src/content/docs-vi/docs/commands/skill/optimize-auto.md`

#### From Phase 06: Advanced Commands (3 files)
22. **core/bootstrap-auto-parallel.md**
    - EN: `src/content/docs/docs/commands/core/bootstrap-auto-parallel.md`
    - VI: `src/content/docs-vi/docs/commands/core/bootstrap-auto-parallel.md`

23. **core/cook-auto-parallel.md**
    - EN: `src/content/docs/docs/commands/core/cook-auto-parallel.md`
    - VI: `src/content/docs-vi/docs/commands/core/cook-auto-parallel.md`

24. **core/code-parallel.md**
    - EN: `src/content/docs/docs/commands/core/code-parallel.md`
    - VI: `src/content/docs-vi/docs/commands/core/code-parallel.md`

### Group C: Conditional Updates (2 files)

Only if created/updated in Phases 02-03:

25. **plan/index.md** (routing logic update)
26. **fix/index.md** (routing logic update)

## Translation Requirements

### Frontmatter Translation

**Do NOT translate**:
- `category` value
- `order` value
- File structure/paths

**DO translate**:
- `title` (keep command name in English: "/code")
- `description` (Vietnamese, 150-160 chars)

**Example**:
```yaml
# EN
---
title: /code
description: Execute implementation plans with 6-step quality-gated workflow including automated testing and code review
category: commands/core
order: 8
published: true
---

# VI
---
title: /code
description: Thực thi kế hoạch triển khai với quy trình 6 bước kiểm soát chất lượng bao gồm kiểm thử tự động và đánh giá code
category: commands/core
order: 8
published: true
---
```

### Content Translation Guidelines

1. **Command Names**: Keep in English (e.g., `/code`, `/plan:parallel`)
2. **Code Examples**: Keep in English (commands, syntax, output)
3. **Technical Terms**: Use Vietnamese equivalents where common, keep English in parentheses if needed
   - Example: "dependency graph (đồ thị phụ thuộc)"
4. **Workflow Steps**: Translate descriptions, keep step markers
5. **Related Commands**: Keep command names, translate descriptions

### Translation Approach (TBD)

**Option A**: AI Translation + Human Review
- Use Claude/Gemini for initial translation
- Human review for accuracy
- Faster, may need corrections

**Option B**: Full Human Translation
- Professional translator
- Higher quality
- Slower, more expensive

**Recommendation**: Option A for Group B (new docs), Option B for Group A (critical pages)

## Implementation Steps

1. **Prioritize Critical Pages** (Group A):
   - Translate getting-started/index.md (landing)
   - Translate getting-started/concepts.md (foundational)
   - Translate support/faq.md (high traffic)
   - Translate support/index.md

2. **Translate New Command Docs** (Group B):
   - Wait for Phases 01-06 completion
   - Translate all 16 new command pages
   - Follow frontmatter guidelines
   - Keep code examples in English

3. **Translate Workflows & Changelog**:
   - Translate workflows/bug-fixing.md
   - Translate workflows/documentation.md
   - Translate workflows/feature-development.md
   - Translate getting-started/upgrade-guide.md
   - Translate getting-started/why-claudekit.md
   - Translate changelog/index.md

4. **Quality Check**:
   - SEO descriptions 150-160 chars (Vietnamese)
   - Frontmatter matches EN structure
   - Internal links use VI paths (/vi/docs/...)
   - Code examples preserved

5. **Build Test**: `bun run build`

## Success Criteria

- [ ] All 26 files translated to Vietnamese
- [ ] Frontmatter structure matches EN
- [ ] SEO descriptions within char limit
- [ ] Command names kept in English
- [ ] Code examples preserved
- [ ] Internal links use /vi/ prefix
- [ ] Navigation functional
- [ ] `bun run build` passes

## Dependencies

- **MUST complete Phase 07** (structure migration) first
- **SHOULD complete Phases 01-06** before Group B translation

## Translation Priorities

### Wave 1: Critical (Do First)
1. getting-started/index.md
2. getting-started/concepts.md
3. support/faq.md

### Wave 2: High Priority
4. support/index.md
5. getting-started/why-claudekit.md
6. getting-started/upgrade-guide.md

### Wave 3: New Commands (After EN Creation)
7-24. All new command docs from Phases 01-06

### Wave 4: Workflows & Changelog
25-26. Workflows + Changelog

## Unresolved Questions

1. **Translation Approach**: AI + review or full human? (impacts timeline/cost)
2. **Freeze EN Changes**: Freeze during translation to avoid drift?
3. **Review Process**: Who reviews AI translations for accuracy?
4. **Timeline**: Sequential waves or parallel translation teams?
