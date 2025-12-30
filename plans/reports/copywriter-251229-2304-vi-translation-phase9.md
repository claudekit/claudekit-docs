# Vietnamese Translation Plan - Phase 9
## CLI + Engineer Skills Documentation

**Date**: 2025-12-29
**Reporter**: Copywriter Agent
**Status**: Ready for execution
**Scope**: Translate 16 documentation files (9 CLI + 7 Engineer skills)

---

## Overview

Phase 9 requires translating ClaudeKit CLI documentation and new Engineer skills to Vietnamese, following established translation guidelines and maintaining technical accuracy.

### Files Inventory

**CLI Documentation** (9 files):
1. `src/content/docs-vi/cli/index.md`
2. `src/content/docs-vi/cli/installation.md`
3. `src/content/docs-vi/cli/new.md`
4. `src/content/docs-vi/cli/init.md`
5. `src/content/docs-vi/cli/doctor.md`
6. `src/content/docs-vi/cli/versions.md`
7. `src/content/docs-vi/cli/update.md`
8. `src/content/docs-vi/cli/uninstall.md`
9. `src/content/docs-vi/cli/configuration.md`

**Engineer Skills** (7 files):
1. `src/content/docs-vi/engineer/skills/ai-artist.md`
2. `src/content/docs-vi/engineer/skills/google-adk-python.md`
3. `src/content/docs-vi/engineer/skills/plans-kanban.md`
4. `src/content/docs-vi/engineer/skills/markdown-novel-viewer.md`
5. `src/content/docs-vi/engineer/skills/template-skill.md`
6. `src/content/docs-vi/engineer/skills/common-utilities.md`
7. `src/content/docs-vi/engineer/skills/pdf-skills.md`

---

## Translation Guidelines

### What to Translate
- Prose content (paragraphs, explanations, descriptions)
- Headings and section titles
- Image alt text
- Table headers (where appropriate)
- UI labels and button text
- Error messages and warnings

### What to Keep in English
- Command names (`ck`, `npm`, `gh`, `git`)
- Code syntax and examples
- File paths and directory names
- CLI flags (`--kit`, `--dir`, `--release`)
- Environment variables (`GITHUB_TOKEN`, `CI`, `NODE_ENV`)
- Technical identifiers
- URLs and links (structure)
- Package names (`claudekit-cli`, `pypdf`, `reportlab`)

### Link Translation Pattern
Change internal links from `/docs/` to `/vi/docs/`:
- `/docs/cli/installation` → `/vi/docs/cli/installation`
- `/docs/engineer/skills/ai-artist` → `/vi/docs/engineer/skills/ai-artist`

### Frontmatter Handling
```yaml
# Keep title in English for routing
title: "ClaudeKit CLI"

# Translate description
description: "Công cụ dòng lệnh để tạo và quản lý các dự án ClaudeKit"

# Keep section and order as-is
section: cli
order: 1
```

---

## Translation Glossary

| English | Vietnamese |
|---------|------------|
| Installation | Cài đặt |
| Configuration | Cấu hình |
| Update | Cập nhật |
| Uninstall | Gỡ cài đặt |
| Version | Phiên bản |
| Skill | Kỹ năng |
| Prerequisites | Yêu cầu trước |
| Quick Start | Bắt đầu nhanh |
| Command | Lệnh |
| Option | Tùy chọn |
| Flag | Cờ |
| Directory | Thư mục |
| File | Tệp |
| Project | Dự án |
| Authentication | Xác thực |
| Health Check | Kiểm tra sức khỏe |
| Troubleshooting | Khắc phục sự cố |
| Example | Ví dụ |
| Best Practices | Phương pháp hay nhất |
| Related Commands | Các lệnh liên quan |
| Next Steps | Các bước tiếp theo |
| Description | Mô tả |
| Default | Mặc định |
| Required | Bắt buộc |
| Optional | Tùy chọn |
| Platform | Nền tảng |
| Repository | Kho lưu trữ |

---

## Translation Style

### Voice and Tone
- Use "bạn" (informal second person) for direct address
- Active voice preferred
- Clear, step-by-step instructions
- Professional but approachable

### Technical Terms
Keep technical terms in English when commonly used:
- **ClaudeKit CLI** → Keep as "ClaudeKit CLI" (add Vietnamese explanation)
- **GitHub** → Keep as "GitHub"
- **API** → Keep as "API"
- **JSON** → Keep as "JSON"

Use Vietnamese for conceptual terms:
- "command-line interface" → "giao diện dòng lệnh"
- "global installation" → "cài đặt toàn cục"
- "local installation" → "cài đặt cục bộ"

### Code Block Handling
```bash
# English comments remain in English
ck new --kit engineer

# Output examples remain in English
✓ Project created successfully
```

---

## Quality Checks

Before committing translations:

1. **Build Verification**
   ```bash
   bun run build
   ```
   Must pass without errors

2. **Link Integrity**
   - All internal links updated to `/vi/` prefix
   - No broken cross-references

3. **Frontmatter Validation**
   - Title remains English
   - Description translated
   - Section/order unchanged

4. **Code Preservation**
   - All code blocks intact
   - Command syntax unchanged
   - File paths unchanged

5. **Consistency Check**
   - Glossary terms used consistently
   - Technical terms standardized
   - Tone uniform across files

---

## Execution Strategy

Given the volume (16 files, ~6,000 lines), recommend:

### Approach 1: Batch Translation
- Translate 3-4 files per session
- Run `bun run build` after each batch
- Fix any issues immediately

### Approach 2: Parallel Translation
- CLI files first (higher priority)
- Engineer skills second
- Test incrementally

### Recommended: Hybrid Approach
**Session 1**: Translate CLI core (index, installation, new, init) - 4 files
**Session 2**: Translate CLI maintenance (doctor, versions, update, uninstall, configuration) - 5 files
**Session 3**: Translate Engineer skills (ai-artist, google-adk-python, plans-kanban) - 3 files
**Session 4**: Translate Engineer skills (markdown-novel-viewer, template-skill, common-utilities, pdf-skills) - 4 files
**Session 5**: Final build verification and link testing

---

## Expected Deliverables

- [ ] 9 Vietnamese CLI documentation files in `src/content/docs-vi/cli/`
- [ ] 7 Vietnamese Engineer skills files in `src/content/docs-vi/engineer/skills/`
- [ ] All internal links updated to `/vi/docs/` prefix
- [ ] Frontmatter properly formatted (title English, description Vietnamese)
- [ ] `bun run build` passes without errors
- [ ] No broken links or references

---

## Risks & Mitigation

**Risk**: Translation inconsistency across files
**Mitigation**: Use glossary strictly, review each batch before proceeding

**Risk**: Build failures due to frontmatter errors
**Mitigation**: Test build after each batch, fix immediately

**Risk**: Broken links after path updates
**Mitigation**: Systematic search/replace for link patterns, verify with build

**Risk**: Code examples accidentally modified
**Mitigation**: Use Read tool to preserve exact code formatting, never manually type code

---

## Recommendation

Due to the substantial volume of content, I recommend proceeding with **Session 1** immediately (CLI core documentation) to establish rhythm and identify any unforeseen translation challenges before committing to the full scope.

Would you like me to:
1. **Start Session 1** - Translate CLI core files (index, installation, new, init)
2. **Translate everything now** - Complete all 16 files in one go (will require multiple responses)
3. **Create sample translation** - Translate one file completely as quality reference
4. **Review glossary first** - Refine translation terms before proceeding

Please confirm your preferred approach.
