---
title: "Phase 07: Engineer Gaps"
status: pending
effort: 3h
type: parallel
depends_on: [phase-01]
copywriter: copywriter-6
---

# Phase 07: Engineer Gaps

**Type**: PARALLEL (can run with Phases 2-6, 8)
**Effort**: 3h
**Owner**: Copywriter-6
**Depends On**: Phase 1 (Infrastructure)

---

## Overview

Fill documentation gaps for 14 missing Engineer Kit skills. These skills exist in the source but lack documentation on the docs site.

---

## Exclusive File Ownership

This phase exclusively owns:

```
src/content/docs/engineer/skills/ai-artist.md
src/content/docs/engineer/skills/google-adk-python.md
src/content/docs/engineer/skills/kit-builder.md
src/content/docs/engineer/skills/assets-organizing.md
src/content/docs/engineer/skills/plans-kanban.md
src/content/docs/engineer/skills/storage.md
src/content/docs/engineer/skills/test-orchestrator.md
src/content/docs/engineer/skills/video-production.md
src/content/docs/engineer/skills/youtube-handling.md
src/content/docs/engineer/skills/markdown-novel-viewer.md
src/content/docs/engineer/skills/creativity.md
src/content/docs/engineer/skills/template-skill.md
src/content/docs/engineer/skills/common-utilities.md
src/content/docs/engineer/skills/pdf-skills.md
```

**Total**: 14 files

---

## Missing Skills Inventory

From brainstorm report - skills in source but not documented:

| Skill | Purpose | Source Location | Priority |
|-------|---------|-----------------|----------|
| ai-artist | Image prompt engineering & generation | `.claude/skills/ai-artist/` | P1 |
| google-adk-python | Google Cloud integration | `.claude/skills/google-adk-python/` | P2 |
| kit-builder | Building custom kits | `.claude/skills/kit-builder/` | P2 |
| assets-organizing | Asset management | `.claude/skills/assets-organizing/` | P2 |
| plans-kanban | Kanban board management | `.claude/skills/plans-kanban/` | P2 |
| storage | File storage management | `.claude/skills/storage/` | P3 |
| test-orchestrator | Test suite orchestration | `.claude/skills/test-orchestrator/` | P2 |
| video-production | Video creation & editing | `.claude/skills/video-production/` | P2 |
| youtube-handling | YouTube integration | `.claude/skills/youtube-handling/` | P2 |
| markdown-novel-viewer | Novel visualization | `.claude/skills/markdown-novel-viewer/` | P3 |
| creativity | Creative content generation | `.claude/skills/creativity/` | P2 |
| template-skill | Skill template reference | `.claude/skills/template-skill/` | P3 |
| common-utilities | Shared utility modules | `.claude/skills/common/` | P3 |
| pdf-skills | PDF generation & manipulation | `.claude/skills/document-skills/pdf/` | P2 |

---

## Source References

**Primary Source**: `../claudekit-engineer/.claude/skills/{skill-name}/`

**Scout Report**: `plans/reports/scout-251229-2047-claudekit-engineer-analysis.md` (Section 4: Skills)

---

## Content Template

```markdown
---
title: "{Skill Name}"
description: "{One-line description for SEO, 80-150 chars}"
section: engineer
category: skills
order: {number}
---

# {Skill Name}

> **{Tagline}** - {What this skill enables}

## What This Skill Does

{2-3 paragraphs explaining the skill}

## Prerequisites

{List any requirements}

- **API Key**: {if needed}
- **Dependencies**: {if any}
- **System Tools**: {if any}

## Installation

{If manual installation needed}

```bash
# Install dependencies
{install command}
```

## Activation

```bash
# Automatic activation
/{related-command} {task}

# Manual activation
/skill:add {skill-name}
```

## Capabilities

### {Capability 1}

{Description with example}

### {Capability 2}

{Description with example}

## Configuration

{If configurable}

```yaml
# Configuration options
setting1: value1
```

## Examples

### Example 1: {Use Case}

```bash
/{command} {example}
```

### Example 2: {Use Case}

```bash
/{command} {example}
```

## Best Practices

1. **{Practice 1}**: {Explanation}
2. **{Practice 2}**: {Explanation}

## Troubleshooting

### Issue: {Problem}

**Solution**: {Fix}

## Related Skills

- [{Related Skill}](/docs/engineer/skills/{slug})

## Related Commands

- [`/{command}`](/docs/engineer/commands/{slug})
```

---

## Skill-Specific Notes

### ai-artist.md

**Key Points**:
- Image prompt engineering
- Integration with ai-multimodal
- Prompt templates for various styles
- Quality tiers (fast vs detailed)

---

### google-adk-python.md

**Key Points**:
- Google Cloud integration
- Vertex AI support
- Python SDK usage
- Authentication setup

---

### kit-builder.md

**Key Points**:
- Creating custom kits
- Kit structure and requirements
- Publishing kits
- Kit configuration

---

### assets-organizing.md

**Key Points**:
- Asset directory structure
- File naming conventions
- Automatic organization
- Asset retrieval

---

### plans-kanban.md

**Key Points**:
- Kanban board for plans
- Task states (pending, in-progress, done)
- Background execution
- Progress tracking

---

### storage.md

**Key Points**:
- Local file storage management
- Cloud storage integration (if any)
- File lifecycle management

---

### test-orchestrator.md

**Key Points**:
- Test suite management
- Parallel test execution
- Coverage reporting
- CI/CD integration

---

### video-production.md

**Key Points**:
- Video creation workflows
- FFmpeg integration
- Editing capabilities
- Output formats

---

### youtube-handling.md

**Key Points**:
- YouTube API integration
- Video analysis
- Transcript extraction
- Upload capabilities (if any)

---

### markdown-novel-viewer.md

**Key Points**:
- Novel visualization tool
- Mermaid diagram support
- Cross-platform (Windows path handling)
- Interactive features

---

### creativity.md

**Key Points**:
- Creative content generation
- Brainstorming support
- Style variations
- Tone adjustment

---

### template-skill.md

**Key Points**:
- Base template for new skills
- Required structure
- Configuration options
- Best practices

---

### common-utilities.md

**Key Points**:
- Shared utility modules
- API key helpers
- Rate limit handling
- Common functions

---

### pdf-skills.md

**Key Points**:
- PDF creation
- PDF manipulation
- Form filling
- Image extraction

---

## Quality Checklist

For each skill doc:

- [ ] Title matches skill name
- [ ] Description is 80-150 chars
- [ ] Section is `engineer`
- [ ] Category is `skills`
- [ ] Order number assigned
- [ ] Prerequisites complete
- [ ] Activation section present
- [ ] At least 2 capabilities documented
- [ ] At least 2 examples
- [ ] Related skills/commands linked
- [ ] No hallucinated features

---

## Migration Note

These docs will initially be placed in `/docs/engineer/skills/`. If Engineer Kit docs are being migrated from current `/docs/` paths, coordinate with infrastructure phase to ensure no conflicts.

**Current Path**: `src/content/docs/skills/{category}/{skill}.md`
**New Path**: `src/content/docs/engineer/skills/{skill}.md`

This phase creates NEW files only - no migration of existing skill docs.

---

## Validation

Before marking Phase 7 complete:

- [ ] All 14 files created
- [ ] All frontmatter validates
- [ ] `bun run build` passes
- [ ] Navigation shows all skills
- [ ] No broken internal links
- [ ] Content matches source SKILL.md files

---

## Completion Criteria

Phase 7 is COMPLETE when:

1. All 14 files exist with valid content
2. Each file passes quality checklist
3. Build succeeds without errors
4. Skills accessible at `/docs/engineer/skills/{slug}`
