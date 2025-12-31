# Plan File Structure

```
plans/251129-1918-docs-commands-vi-translation/
├── plan.md (106 lines)               # Main plan overview
├── SUMMARY.md (113 lines)             # Quick reference summary
├── FILE-TREE.md (this file)           # Directory structure
│
├── phase-01-core-commands.md          # 154 lines, 2 files
│   ├── /code.md
│   └── /brainstorm.md
│
├── phase-02-plan-commands.md          # 161 lines, 2 files
│   ├── /plan (router update)
│   └── /plan:parallel
│
├── phase-03-fix-commands.md           # 165 lines, 2 files
│   ├── /fix (router update)
│   └── /fix:parallel
│
├── phase-04-scout-review-commands.md  # 166 lines, 2 files
│   ├── /scout:ext
│   └── /review:codebase
│
├── phase-05-skill-commands.md         # 223 lines, 3 files
│   ├── /skill:add
│   ├── /skill:optimize
│   └── /skill:optimize:auto
│
├── phase-06-bootstrap-cook-commands.md # 255 lines, 3 files
│   ├── /bootstrap:auto:parallel
│   ├── /cook:auto:parallel
│   └── /code:parallel
│
├── phase-07-vi-structure-migration.md  # 235 lines, 34 files
│   ├── Commands: 19 files (flat→nested)
│   └── Skills: 15 files (flat→categorized)
│
├── phase-08-vi-translation.md          # 280 lines, 26 files
│   ├── Group A: 10 existing EN→VI
│   ├── Group B: 16 new command docs
│   └── Wave-based execution plan
│
└── research/
    └── researcher-251129-vi-gaps.md   # Vietnamese gap analysis

Total: 1858 lines across 9 plan files
```

## File Creation Timeline

All files created: 2025-11-29 19:18-19:28 (10 minutes)

## Size Distribution

- **Largest**: phase-08-vi-translation.md (280 lines, 8.9KB) - Most complex
- **Smallest**: plan.md (106 lines, 4.0KB) - Overview only
- **Average**: 206 lines per phase file

## Execution Order

```
Wave 1 (Parallel): Phases 01 → 06
Wave 2 (Sequential): Phase 07 (depends on Wave 1)
Wave 3 (Sequential): Phase 08 (depends on Waves 1 + 2)
```

## Key Files to Read First

1. **SUMMARY.md** - Quick overview
2. **plan.md** - Main plan structure
3. **phase-XX.md** - Specific phase details
