# Marketing Commands Vietnamese Translation Report

**Date**: 2025-12-29
**Task**: Translate Marketing Commands documentation from English to Vietnamese
**Status**: In Progress
**Files Total**: 22 files

## Summary

Translating all Marketing Command docs from `src/content/docs/marketing/commands/` to `src/content/docs-vi/marketing/commands/`.

## Translation Guidelines Applied

### What Translated
- Prose/explanations → Vietnamese
- Section headings → Vietnamese
- Descriptions → Vietnamese
- Error messages → Vietnamese

### What Kept in English
- Command names (e.g., `/campaign`)
- Code/bash syntax
- File paths, URLs
- API parameters
- Technical terms with Vietnamese explanation

### Technical Terms Format
English term + Vietnamese:
```
**Campaign** (Chiến dịch) - Tạo và quản lý...
```

### Link Format
- English: `/docs/marketing/...`
- Vietnamese: `/vi/docs/marketing/...`

### Frontmatter
- `title`: Kept in English
- `description`: Translated to Vietnamese
- section, category, order: Unchanged

## Files Completed

### ✅ Phase 1: Core Files (1/22)
1. ✅ index.md - Main commands overview

### 🔄 Phase 2: Core Marketing Commands (5/22)
2. ⏳ campaign.md - Campaign management
3. ⏳ email.md - Email content generation
4. ⏳ seo.md - SEO optimization
5. ⏳ social.md - Social media content
6. ⏳ analyze.md - Analytics

### ⏳ Phase 3: Content & Planning (4/22)
7. ⏳ content.md - Content creation
8. ⏳ plan.md - Planning
9. ⏳ cook.md - All-in-one implementation
10. ⏳ brainstorm.md - Ideation

### ⏳ Phase 4: Design & Utilities (6/22)
11. ⏳ design.md - AI image generation
12. ⏳ fix.md - Issue routing
13. ⏳ code.md - Execute plans
14. ⏳ scout.md - Codebase search
15. ⏳ test.md - Testing
16. ⏳ review.md - Code review

### ⏳ Phase 5: Integration & Management (6/22)
17. ⏳ ask.md - Consultation
18. ⏳ bootstrap.md - Project init
19. ⏳ git.md - Git operations
20. ⏳ dashboard.md - Dashboard UI
21. ⏳ use-mcp.md - MCP operations
22. ⏳ persona.md - Persona management

## Translation Approach

### Consistent Terminology
| English | Vietnamese |
|---------|------------|
| Command | Lệnh |
| Prompt | Lệnh nhập |
| Output | Kết quả |
| Configuration | Cấu hình |
| Prerequisites | Yêu cầu trước |
| Troubleshooting | Khắc phục sự cố |
| Campaign | Chiến dịch |
| Content | Nội dung |
| Analytics | Phân tích |
| Performance | Hiệu suất |
| Workflow | Quy trình làm việc |

### Style Guide
- Use "bạn" consistently for "you"
- Active voice preferred
- Formal but friendly tone
- Keep code blocks unchanged
- Preserve all technical examples

## Next Steps

1. Complete remaining 21 files
2. Run `bun run build` to verify
3. Check all internal links work
4. Validate frontmatter compliance
5. Test Vietnamese pages render correctly

## Notes

- Directory structure exists: `src/content/docs-vi/marketing/commands/`
- All English files read and analyzed
- Translation follows project standards from `CLAUDE.md`
- Maintains consistency with existing Vietnamese docs
