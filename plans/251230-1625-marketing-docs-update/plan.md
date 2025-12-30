# ClaudeKit Marketing Documentation Update Plan

**Date**: 2025-12-30
**Branch**: feat/marketing-docs
**Type**: Documentation Enhancement
**Priority**: High

## Executive Summary

Comprehensive documentation update for ClaudeKit Marketing v1.0 to accurately reflect:
- Asset Management system (Content Hub)
- Missing core commands (/write:*, /video:*, /slide:create)
- Header navigation & routing fixes
- Corrected skills activation patterns
- Proper environment variable setup instructions

## Background

### Current State
- Docs feature Marketing kit but missing key v1 features
- Header nav only shows Engineer kit in Getting Started
- Skills activation shows incorrect `/skill:add` usage
- Commands index missing killer features (/write, /video, /slide)
- Installation instructions reference npm/node instead of ClaudeKit CLI auto-installation
- Engineers-only commands (/cook, /fix, /code, /test) listed in Marketing docs

### Target State
- Complete Marketing kit feature documentation
- Dual-kit header navigation (Engineer + Marketing)
- Accurate skill activation (implicit + explicit with prompts)
- Full command catalog including /write:*, /video:*, /slide:create, /dashboard
- Environment variable priority documentation
- Engineer-specific commands removed from Marketing docs

## Research Findings

### 1. Marketing Kit v1.0 Core Features

**Asset Management (Content Hub)**:
- Central hub for all marketing assets
- Categories: Copy, Storyboards, Slides, Infographics, Branding Guidelines, Social Posts
- Located: `/assets/` directory structure
- Screenshots: `docs/screenshots/assets-*.png` (7 files)

**Command Categories**:
1. **Content Creation** (/write:*)
   - `/write:blog` - Blog post with author style extraction
   - `/write:audit` - Content quality audit
   - `/write:publish` - Publishing workflow
   - Writing style extraction from `/assets/writing-styles/`

2. **Video Production** (/video:*)
   - `/video:create` - Full video workflow
   - `/video:script` - Script generation
   - `/video:storyboard` - Visual storyboarding
   - Uses Gemini Veo 3.1 + Imagen 4

3. **Presentation** (/slide:create)
   - Beautiful slide generation
   - Pitch decks, campaign proposals
   - `.pptx` output

4. **Dashboard** (/dashboard)
   - Asset Management UI
   - Browse markdown, reports, storyboards, images, videos
   - Screenshots: 7 PNG files showing interface

**Related Skills**:
- copywriting, content-marketing
- ai-artist, ai-multimodal
- creativity, campaign-management
- gamification-marketing, referral-program
- seo-optimization, analytics, chrome-devtools

### 2. Header Navigation Issues

**Problem**:
- `/docs/getting-started/introduction` only introduces Engineer kit
- "Docs" link → `/docs/agents` (404 - should be `/docs/engineer/agents`)
- Workflows at `/docs/workflows/` should be Engineer-specific sidebar

**Solution**:
- Update introduction.md to feature both kits
- Fix "Docs" link routing
- Move Workflows to Engineer sidebar config

### 3. Skills Activation Pattern Errors

**Current (WRONG)**:
```markdown
**Explicit**: `/skill:add analytics`
```

**Correct Pattern**:
- **Implicit**: Auto-activated by agents based on context
- **Explicit**: Prompt-based activation
  ```
  "Activate analytics, seo-optimization, and chrome-devtools skills to analyze site performance"
  ```

**Environment Variable Priority** (from skill-creator/SKILL.md):
1. Project `.env` file
2. Global `~/.env` file
3. System environment variables
4. ClaudeKit CLI sets up during `ck init`

**Installation Context**:
- Dependencies auto-installed via `ck init`
- No manual npm/node/python installation needed
- Focus docs on environment variable configuration

### 4. Commands Catalog Gaps

**Missing from Marketing docs**:
- `/write:*` family (blog, audit, publish)
- `/video:*` family (create, script, storyboard)
- `/slide:create`
- `/dashboard` (exists but needs Asset Management context)

**Should Remove** (Engineer-only):
- `/cook` (implement features - dev-focused)
- `/fix` (debugging - dev-focused)
- `/code` (implementation - dev-focused)
- `/test` (testing - dev-focused)

## Implementation Plan

### Phase 1: Header Navigation & Routing ✅ DONE (2025-12-30 19:12)
**Files**:
- `src/content/docs/getting-started/introduction.md` ✅
- `src/components/Header.astro` ✅ (added KitSwitcher import & component)
- `src/components/KitSwitcher.tsx` ✅ (new file - 129 lines)
- `src/components/nav/WorkflowsNav.astro` ✅ (added "Engineer Workflows" badge)

**Changes Implemented**:
1. ✅ introduction.md already showcases both kits (Engineer + Marketing) equally
2. ✅ Added dynamic "Docs" link routing based on kit selection (Header.astro lines 198-228)
3. ✅ Created KitSwitcher component with localStorage persistence & custom event dispatch
4. ✅ Added "Engineer Workflows" badge to WorkflowsNav for visual distinction

**Commit**: 5b59522 "feat(components): add kit switcher and navigation components"
**Build Status**: ✅ Passed (756 pages generated)
**Review**: ✅ Approved (see `plans/reports/code-reviewer-251230-1908-phase1-header-nav.md`)
**Time**: ~45 min (as estimated)

**Completion Notes** (2025-12-30 19:12):
- All 4 components successfully implemented and tested
- Cross-component coordination working via custom KitSwitcher events
- Header.astro properly routes "Docs" link based on active kit selection
- localStorage persistence ensures kit preference persists across page loads
- Engineer workflows properly badged for visual distinction in navigation
- Zero build errors, all 756 pages generated successfully
- Code review approved with no critical issues
- Ready for Phase 2 implementation

---

### Phase 2: Commands Documentation
**Files**:
- `src/content/docs/marketing/commands/index.md`
- New files: `write.md`, `video.md`, `slide.md`
- Update: `dashboard.md`

**Changes**:
1. **Create `/write` command docs**:
   - `/write:blog` - Blog post generation with style extraction
   - `/write:audit` - Content quality analysis
   - `/write:publish` - Publishing workflow
   - Feature: Writing style extraction from `/assets/writing-styles/`
   - Related skills: copywriting, content-marketing

2. **Create `/video` command docs**:
   - `/video:create` - Complete video workflow
   - `/video:script` - Script generation
   - `/video:storyboard` - Visual storyboarding
   - Tech: Gemini Veo 3.1, Imagen 4, production-ready workflows
   - Related skills: ai-artist, ai-multimodal, copywriting

3. **Create `/slide` command docs**:
   - `/slide:create <prompt>` - Beautiful presentation generation
   - Use cases: Pitch decks, campaign proposals, creative presentations
   - Output: .pptx format

4. **Update `/dashboard` docs**:
   - Add Asset Management context
   - Reference screenshots in `docs/screenshots/`
   - UI features: Browse markdown, reports, storyboards, images, videos, branding

5. **Remove from Marketing commands index**:
   - `/cook` → Engineer-only
   - `/fix` → Engineer-only
   - `/code` → Engineer-only
   - `/test` → Engineer-only

**Time**: 2-3 hours

---

### Phase 3: Asset Management Documentation
**Files**:
- New: `src/content/docs/marketing/features/asset-management.md`
- Update: `src/content/docs/marketing/index.md`
- Update: `src/content/docs/marketing/commands/dashboard.md`

**Changes**:
1. **Create Asset Management feature page**:
   - Overview of Content Hub concept
   - Asset categories with screenshots
   - Directory structure (`/assets/*`)
   - Integration with /dashboard command
   - Workflow examples

2. **Embed screenshots in documentation**:
   - Embed all 7 screenshots from `docs/screenshots/` into Asset Management docs
   - assets-management.png (main hub overview)
   - assets-branding-guideline.png (branding guidelines interface)
   - assets-storyboard-preview.png (storyboard preview)
   - assets-storyboard-options.png (storyboard creation options)
   - assets-slides-preview.png (presentation slides)
   - assets-infographic-preview.png (infographic templates)
   - assets-social-post-preview.png (social media post preview)
   - Use markdown image syntax with descriptive alt text
   - Note: More screenshots may be added in future updates

3. **Update Marketing index**:
   - Feature Asset Management prominently
   - Link to screenshots
   - Highlight unfair advantage (codebase context)

**Time**: 1-2 hours

---

### Phase 4: Skills Activation Corrections
**Files**:
- All skill docs with "Activation" section
- Focus: `analytics.md`, `seo-optimization.md`, `ai-multimodal.md`, etc.

**Changes**:
1. **Fix Activation sections** across all Marketing skill docs:

   **Replace**:
   ```markdown
   **Explicit**: `/skill:add <skill-name>`
   ```

   **With**:
   ```markdown
   **Implicit**: Auto-activated by [agent-names] based on task context

   **Explicit**: Activate via prompt:
   ```
   Activate [skill-name], [related-skills] to [specific task]
   ```
   ```

2. **Update Prerequisites/Installation sections**:

   **Remove**: Manual installation instructions (npm, node, python)

   **Add**:
   ```markdown
   ## Environment Setup

   Dependencies auto-installed during `ck init`.

   **Required Environment Variables**:
   - `VARIABLE_NAME` - Description
   - `ANOTHER_VAR` - Description

   **Configuration Priority** (highest to lowest):
   1. Project `.env` file
   2. Global `~/.env` file
   3. System environment variables

   Setup:
   ```bash
   # Project-specific (recommended)
   echo "VARIABLE_NAME=value" >> .env

   # Global (all projects)
   echo "VARIABLE_NAME=value" >> ~/.env
   ```
   ```

**Affected Files** (sample):
- `analytics.md` - GA4 credentials, API keys
- `seo-optimization.md` - ReviewWeb API key
- `ai-multimodal.md` - Gemini API key
- `ads-management.md` - Platform API keys
- `chrome-devtools.md` - Browser paths
- `media-processing.md` - FFmpeg paths

**Time**: 2-3 hours

---

### Phase 5: Context & Feature Highlighting
**Files**:
- `src/content/docs/marketing/index.md`
- `src/content/docs/getting-started/introduction.md`
- `src/content/docs/marketing/workflows/*.md`

**Changes**:
1. **Highlight unfair advantage**:
   - Codebase context for campaigns
   - Product-aware content generation
   - Technical accuracy in marketing materials

2. **Feature showcase**:
   - Asset Management (Content Hub)
   - /write:* for content creation
   - /video:* for video production
   - /campaign:* for campaign orchestration
   - /seo:* for technical SEO
   - /dashboard for visual management

3. **Update workflows**:
   - Add Asset Management workflow
   - Video production workflow
   - Content creation with style extraction

**Time**: 1-2 hours

---

## File Changes Summary

### New Files (7)
1. `src/content/docs/marketing/commands/write.md`
2. `src/content/docs/marketing/commands/video.md`
3. `src/content/docs/marketing/commands/slide.md`
4. `src/content/docs/marketing/features/asset-management.md`
5. `src/content/docs/marketing/workflows/asset-workflow.md`
6. `src/content/docs/marketing/workflows/video-workflow.md`
7. `src/content/docs/marketing/workflows/writing-workflow.md`

### Updated Files (15+)
1. `src/content/docs/getting-started/introduction.md` - Both kits showcase
2. `src/content/docs/marketing/index.md` - Asset Management feature
3. `src/content/docs/marketing/commands/index.md` - Command catalog updates
4. `src/content/docs/marketing/commands/dashboard.md` - Asset Management context
5. `src/content/docs/marketing/skills/analytics.md` - Activation + env vars
6. `src/content/docs/marketing/skills/seo-optimization.md` - Activation + env vars
7. `src/content/docs/marketing/skills/ai-multimodal.md` - Activation + env vars
8. `src/content/docs/marketing/skills/ads-management.md` - Activation + env vars
9. `src/content/docs/marketing/skills/chrome-devtools.md` - Activation + env vars
10. `src/content/docs/marketing/skills/media-processing.md` - Activation + env vars
11. `src/content/docs/marketing/skills/content-marketing.md` - Activation pattern
12. `src/content/docs/marketing/skills/copywriting.md` - Activation pattern
13. `src/content/docs/marketing/skills/campaign-management.md` - Activation pattern
14. Sidebar configuration (Engineer workflows separation)
15. Header routing configuration

### Screenshots Integration
- Copy 7 PNG files from `docs/screenshots/` to appropriate doc pages
- Reference in Asset Management docs
- Add to dashboard documentation

## Quality Gates

**Before Commit**:
1. ✅ Run `bun run build` - must pass
2. ✅ Verify all internal links use absolute paths
3. ✅ Check screenshots display correctly
4. ✅ Test navigation flows
5. ✅ Validate frontmatter schema

**Content Checks**:
- [ ] All new commands documented with examples
- [ ] Skills activation patterns corrected
- [ ] Environment variable setup clear
- [ ] Screenshots properly referenced
- [ ] Engineer-only commands removed from Marketing docs
- [ ] Both kits featured in Getting Started

## Success Criteria

1. **Completeness**: All v1.0 Marketing features documented
2. **Accuracy**: Skill activation matches actual behavior
3. **Navigation**: Both kits accessible from header/Getting Started
4. **Clarity**: Environment setup clear, no manual installation confusion
5. **Build**: Zero build errors
6. **Links**: All internal links working (absolute paths)

## Risk & Mitigation

**Risk 1**: Breaking existing links
- **Mitigation**: Search all references before moving/renaming files
- **Command**: `grep -r "/docs/workflows/" src/content/docs/`

**Risk 2**: Screenshot file size
- **Mitigation**: Optimize PNGs before commit (already done, ~1MB each)

**Risk 3**: Inconsistent activation patterns
- **Mitigation**: Create reusable template for Activation sections

## Next Steps

1. **Get User Approval** on this plan
2. **Phase-by-phase implementation**
3. **Build validation** after each phase
4. **PR creation** to dev branch

## User Decisions ✅

1. ✅ **Workflows location**: Dual-kit with separate subsections
   - Engineer: `/docs/workflows/`
   - Marketing: `/docs/marketing/workflows/`

2. ✅ **Asset Management docs**: `/marketing/features/asset-management.md`

3. ✅ **Screenshots**: Embed existing 7 screenshots for now, more may be added later

---

**Estimated Total Time**: 7-11 hours
**Phases**: 5
**Files**: 22+ (7 new, 15+ updated)
**Screenshots**: 7 embedded
**Build Requirement**: Must pass before commit
**Status**: ✅ User approved, ready for implementation
