---
title: "Phase 09: Vietnamese Translations"
status: pending
effort: 8h
type: sequential
depends_on: [phase-02, phase-03, phase-04, phase-05, phase-06, phase-07]
---

# Phase 09: Vietnamese Translations

**Type**: SEQUENTIAL (must wait for all content phases)
**Effort**: 8h
**Owner**: Vietnamese Translation Team
**Depends On**: Phases 2-7 (All content phases)

---

## Overview

Translate all new English content to Vietnamese. This phase MUST wait for all content phases (2-7) to complete to ensure translation of finalized content.

---

## Exclusive File Ownership

This phase exclusively owns the entire Vietnamese docs directory for new content:

```
src/content/docs-vi/marketing/agents/*.md (28 files)
src/content/docs-vi/marketing/commands/*.md (21 files)
src/content/docs-vi/marketing/skills/*.md (21 files)
src/content/docs-vi/marketing/workflows/*.md (11 files)
src/content/docs-vi/marketing/dashboard/*.md (3 files)
src/content/docs-vi/cli/*.md (9 files)
src/content/docs-vi/engineer/skills/*.md (14 files - new skills only)
```

**Total**: ~107 files

---

## Translation Scope

### From Phase 2 - Marketing Agents (28 files)

Mirror structure:
```
src/content/docs-vi/marketing/agents/
├── index.md
├── attraction-specialist.md
├── seo-specialist.md
├── ... (27 agents)
```

### From Phase 3 - Marketing Commands (21 files)

Mirror structure:
```
src/content/docs-vi/marketing/commands/
├── index.md
├── campaign.md
├── content.md
├── ... (20 commands)
```

### From Phase 4 - Marketing Skills (21 files)

Mirror structure:
```
src/content/docs-vi/marketing/skills/
├── index.md
├── content-marketing.md
├── seo-optimization.md
├── ... (20 skills)
```

### From Phase 5 - Marketing Workflows (11 files)

Mirror structure:
```
src/content/docs-vi/marketing/workflows/
├── index.md
├── campaign-workflow.md
├── ... (10 workflows)
```

### From Phase 6 - CLI Documentation (9 files)

Mirror structure:
```
src/content/docs-vi/cli/
├── index.md
├── new.md
├── init.md
├── ... (8 files)
```

### From Phase 7 - Engineer Skills Gaps (14 files)

Mirror structure:
```
src/content/docs-vi/engineer/skills/
├── ai-artist.md
├── google-adk-python.md
├── ... (14 skills)
```

---

## Translation Guidelines

### What to Translate

| Translate | Keep English |
|-----------|-------------|
| Prose/explanations | Command names (e.g., `/campaign`) |
| Section headings | Code syntax |
| UI element descriptions | File paths |
| Error messages | API parameters |
| Alt text | URLs |
| Lists and bullets | Technical terms (first mention) |

### Technical Terms

**Strategy**: Keep English term, add Vietnamese explanation in parentheses on first use.

Example:
```markdown
**Campaign Manager** (Quản lý chiến dịch) - Agent điều phối các chiến dịch marketing
```

### Tone & Style

- **Formal but friendly**: Respectful yet approachable
- **Direct address**: Use "bạn" (you) consistently
- **Active voice**: "Bạn có thể..." not "Có thể được..."
- **Concise**: Vietnamese often more compact than English

---

## Translation Template

**English Source**:
```markdown
---
title: "Campaign Manager"
description: "Orchestrate marketing campaigns with AI-powered automation"
section: marketing
category: agents
order: 5
---

# Campaign Manager

> **Your campaign orchestrator** - Manage complex campaigns effortlessly

## What This Agent Does

The Campaign Manager coordinates all aspects of your marketing campaigns...
```

**Vietnamese Translation**:
```markdown
---
title: "Campaign Manager"
description: "Điều phối chiến dịch marketing với tự động hóa AI"
section: marketing
category: agents
order: 5
---

# Campaign Manager

> **Người điều phối chiến dịch của bạn** - Quản lý chiến dịch phức tạp một cách dễ dàng

## Agent này làm gì

Campaign Manager điều phối tất cả các khía cạnh của chiến dịch marketing...
```

---

## Priority Order

Translate in this order (highest value pages first):

### Priority 1 (Core Pages)

1. Marketing Overview (`marketing/index.md`)
2. CLI Overview (`cli/index.md`)
3. Campaign Manager Agent
4. Campaign Command
5. Content Command
6. SEO Command

### Priority 2 (High-Traffic)

7. All agent index pages
8. All command index pages
9. All workflow index pages
10. Core agents (copywriter, seo-specialist, email-wizard)

### Priority 3 (Complete Coverage)

11. Remaining agents
12. Remaining commands
13. Remaining skills
14. Remaining workflows

---

## Quality Assurance

### Per-File Checklist

- [ ] Frontmatter translated (title, description only)
- [ ] All prose translated
- [ ] Technical terms handled correctly
- [ ] Code blocks unchanged
- [ ] Links use correct `/vi/` prefix
- [ ] No machine translation artifacts
- [ ] Reads naturally in Vietnamese

### Link Handling

**English link**:
```markdown
[Campaign Manager](/docs/marketing/agents/campaign-manager)
```

**Vietnamese link**:
```markdown
[Campaign Manager](/vi/docs/marketing/agents/campaign-manager)
```

### Common Translation Errors to Avoid

| Error | Example | Fix |
|-------|---------|-----|
| Over-translation | Translating `/campaign` | Keep command names |
| Under-translation | Leaving English paragraphs | Translate all prose |
| Wrong links | `/docs/...` instead of `/vi/docs/...` | Use `/vi/` prefix |
| Inconsistent terms | Multiple translations for same term | Use glossary |

---

## Glossary

Standardized translations for consistency:

| English | Vietnamese |
|---------|------------|
| Agent | Agent |
| Command | Lệnh |
| Skill | Kỹ năng |
| Workflow | Quy trình |
| Campaign | Chiến dịch |
| Content | Nội dung |
| Marketing | Marketing |
| Funnel | Phễu |
| Lead | Khách hàng tiềm năng |
| Conversion | Chuyển đổi |
| Analytics | Phân tích |
| Dashboard | Bảng điều khiển |
| Configuration | Cấu hình |
| Prerequisites | Yêu cầu trước |
| Troubleshooting | Khắc phục sự cố |
| Best Practices | Thực hành tốt nhất |

---

## Batch Processing

### Recommended Batches

To maximize efficiency, process in batches:

**Batch 1**: All index pages (8 files)
**Batch 2**: Marketing agents (28 files)
**Batch 3**: Marketing commands (21 files)
**Batch 4**: Marketing skills (21 files)
**Batch 5**: Marketing workflows (11 files)
**Batch 6**: CLI docs (9 files)
**Batch 7**: Engineer skills (14 files)

### Parallel Translation

If multiple translators available:

- **Translator A**: Batches 1, 2
- **Translator B**: Batches 3, 4
- **Translator C**: Batches 5, 6, 7

---

## Validation

### Technical Validation

```bash
# Check all Vietnamese files exist
find src/content/docs-vi/marketing -name "*.md" | wc -l
# Should equal English count

# Build test
bun run build
```

### Content Validation

- [ ] All English pages have Vietnamese counterpart
- [ ] File structure mirrors English exactly
- [ ] All internal links work
- [ ] `bun run build` passes
- [ ] Language switcher works

### Human Review

- [ ] Native speaker review of 10% sample
- [ ] Terminology consistency check
- [ ] Natural readability assessment

---

## Dependency Check

Before starting Phase 9, verify completion of:

- [ ] Phase 2 (Marketing Agents) - COMPLETE
- [ ] Phase 3 (Marketing Commands) - COMPLETE
- [ ] Phase 4 (Marketing Skills) - COMPLETE
- [ ] Phase 5 (Marketing Workflows) - COMPLETE
- [ ] Phase 6 (CLI Documentation) - COMPLETE
- [ ] Phase 7 (Engineer Gaps) - COMPLETE

**DO NOT START** if any content phase is incomplete. Translating incomplete content wastes effort.

---

## Completion Criteria

Phase 9 is COMPLETE when:

1. All ~107 Vietnamese files created
2. Each file passes quality checklist
3. File structure mirrors English exactly
4. `bun run build` passes
5. Language switcher navigates correctly
6. Sample review by native speaker passes
