# Plan Update: Vietnamese Translation Phase Added

**Date**: 2025-12-30 20:12
**Plan**: plans/251230-1625-marketing-docs-update/plan.md
**Type**: Phase Addition
**Branch**: feat/marketing-docs

## Summary

Added Phase 6 (Vietnamese Translation) to the completed marketing docs update plan. Original Phases 1-5 (English documentation) completed successfully, but Vietnamese i18n coverage was missing.

## Changes Made

### 1. Added Phase 6: Vietnamese Translation
**Files to translate**: 31 files total
- 4 new files (asset-management, write, video, slide)
- 27 existing files (index, commands, skills, workflows)

**Content Volume**:
- New translations: ~1,785 lines (4 files)
- Updated translations: 27 files (21 skills + 6 other docs)

**Key Requirements**:
- Mirror English structure exactly
- Same frontmatter schema
- Absolute paths only (no relative links)
- Professional tone, technical accuracy
- Keep code/commands/paths in English
- Translate UI strings, descriptions, explanations

### 2. Updated Phases Completion Summary Table
Added Phase 6 row:
- Status: 🚧 PENDING
- Estimated time: 8-12 hours
- Total estimated (with Phase 6): 14-18 hours

### 3. Updated Implementation Status Section
Changed from "Implementation Complete ✅" to "Implementation Status":
- Phases 1-5: ✅ Complete (English)
- Phase 6: 🚧 Pending (Vietnamese)
- Next steps updated to include Phase 6 before PR

## Files Modified

1. `plans/251230-1625-marketing-docs-update/plan.md`
   - Added Phase 6 section (44 lines) before completion summary
   - Updated completion table
   - Modified implementation status section
   - Updated next steps

## Vietnamese Translation Scope

### New Files (4)
1. `src/content/docs-vi/marketing/features/asset-management.md` (569 lines)
2. `src/content/docs-vi/marketing/commands/write.md` (331 lines)
3. `src/content/docs-vi/marketing/commands/video.md` (469 lines)
4. `src/content/docs-vi/marketing/commands/slide.md` (416 lines)

### Updated Files (27)
**Marketing overview** (1):
- marketing/index.md (unfair advantage + features)

**Commands** (2):
- commands/index.md (remove Engineer, add new)
- commands/dashboard.md (Asset Management)

**Skills** (21):
- All 21 skill docs (activation patterns + env setup)

**Workflows** (2):
- workflows/dashboard-workflow.md
- workflows/content-workflow.md

**Other** (1):
- getting-started/introduction.md (if Vietnamese version exists)

## Translation Guidelines

**Keep in English**:
- Code examples
- Commands (/write, /video, /slide)
- File paths (/assets/*, ~/.env)
- API endpoints
- Environment variable names
- Git commands

**Translate to Vietnamese**:
- Page titles, descriptions
- Section headings
- Explanatory text
- UI strings
- Screenshot alt text
- Examples explanations

**Maintain**:
- Markdown formatting
- Frontmatter schema
- Absolute link paths
- Screenshot references
- Section structure

## Estimated Effort

**Phase 6 Breakdown**:
- New file translations: 4-5 hours (1,785 lines)
- Existing file updates: 3-5 hours (27 files)
- Quality review: 1-2 hours
- Build validation: 15-30 min

**Total**: 8-12 hours

## Quality Gates (Phase 6)

**Before Commit**:
- [ ] Run `bun run build` - must pass
- [ ] Verify all absolute paths
- [ ] Check Vietnamese translations accuracy
- [ ] Validate frontmatter schema
- [ ] Test language switching

**Content Checks**:
- [ ] All 4 new files translated
- [ ] All 27 existing files updated
- [ ] Code/commands kept in English
- [ ] UI strings translated to Vietnamese
- [ ] Professional tone maintained

## Next Steps

1. **Phase 6 Implementation**:
   - Translate 4 new files
   - Update 27 existing Vietnamese docs
   - Build validation

2. **Post-Phase 6**:
   - Create PR to dev branch
   - Request review
   - Merge after approval

## Notes

- Phases 1-5 remain complete and ready for PR
- Phase 6 is optional i18n enhancement
- Can PR English docs first, Vietnamese later if preferred
- Total project time: 14-18 hours (with Vietnamese)

---

**Plan File**: plans/251230-1625-marketing-docs-update/plan.md
**Status**: Updated ✅
**Vietnamese Translation**: 🚧 Ready to implement
