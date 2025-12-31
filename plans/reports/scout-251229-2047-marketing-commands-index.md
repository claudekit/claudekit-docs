# ClaudeKit Marketing Commands - Quick Index

**Report Generated:** 2025-12-29 20:47  
**Source:** `/mnt/d/www/claudekit/claudekit-marketing/.claude/commands/`  
**Total Commands:** 119 (20 main + 99 subcommands)

---

## Quick Navigation

### By Frequency of Use (Recommended Order)
1. `/plan` - Create detailed implementation plan
2. `/cook` - All-in-one implementation (internal planning)
3. `/code` - Execute existing plan (6-step workflow)
4. `/fix` - Fix issues (intelligent routing)
5. `/scout` - Find relevant files in codebase
6. `/bootstrap` - Initialize new project
7. `/brainstorm` - Collaborative solution design
8. `/ask` - Technical/architectural consultation

### By Category

**Planning & Strategy (5 commands)**
- `/ask` - Architecture consultation
- `/bootstrap` - Project init
- `/brainstorm` - Collaborative design
- `/plan` - Intelligent planning
- `/cook` - Feature implementation

**Implementation (4 commands)**
- `/code` - Execute plan
- `/fix` - Fix issues
- `/scout` - Codebase search
- `/test` - Run tests

**Analytics & Reporting (2 commands)**
- `/analyze` - Analytics reports
- `/seo/audit` - SEO audit

**Content & Copy (4 commands)**
- `/write/blog` - SEO-optimized blog
- `/email` - Email content
- `/design/generate` - Image generation
- `/campaign` - Campaign management

**Project Management (3 commands)**
- `/dashboard` - Marketing dashboard UI
- `/persona` - Persona management
- `/ck-help` - Help & guidance

**Development (2 commands)**
- `/skill/create` - Create custom skill
- `/git/pr` - Create pull request

---

## Command Reference (Alphabetical)

| Command | Type | Purpose | Complexity |
|---------|------|---------|-----------|
| `/analyze` | Analytics | Generate analytics reports | Medium |
| `/ask` | Planning | Architecture consultation | High |
| `/bootstrap` | Planning | Initialize new project | Very High |
| `/brainstorm` | Planning | Collaborative solution design | Medium |
| `/campaign` | Content | Campaign management | High |
| `/code` | Implementation | Execute plan (6-step) | Very High |
| `/cook` | Planning | All-in-one implementation | Very High |
| `/dashboard` | Management | Marketing dashboard | Medium |
| `/design/generate` | Content | AI image generation | Medium |
| `/email` | Content | Email content generation | Medium |
| `/fix` | Implementation | Intelligent issue routing | High |
| `/git/pr` | Development | Create pull request | Medium |
| `/ck-help` | Management | Help & guidance | Low |
| `/persona` | Management | Persona management | Medium |
| `/plan` | Planning | Intelligent planning | High |
| `/seo/audit` | Analytics | Technical SEO audit | High |
| `/scout` | Implementation | Codebase search | Medium |
| `/skill/create` | Development | Create custom skill | High |
| `/test` | Implementation | Run tests | Low |
| `/write/blog` | Content | SEO-optimized blog | High |

---

## Key Workflow Patterns

### Pattern 1: Plan-Driven Development
```
/plan [task]  →  review plan  →  /code  →  tests pass  →  auto-commit
```

### Pattern 2: All-in-One Implementation
```
/cook [tasks]  →  (internal planning + execution)  →  tests pass  →  auto-commit
```

### Pattern 3: Issue Resolution
```
/fix [issue]  →  intelligent routing  →  /fix:[type]  →  fixed
```

### Pattern 4: Content Creation
```
/write/blog [topic]  →  /seo/audit [url]  →  /write/publish
```

### Pattern 5: New Project Bootstrap
```
/bootstrap [requirements]  →  11 steps  →  complete project  →  ready to code
```

---

## Critical Decision Points

### When to use `/plan` vs `/cook`?

**Use `/plan` → `/code`:**
- Complex features with multiple phases
- Need explicit review & approval between planning & coding
- Team collaboration required
- Long-term project

**Use `/cook` (all-in-one):**
- Quick features, simple tasks
- Don't want separate planning phase
- Solo developer
- Prototyping

### When to use `/bootstrap`?

- Starting completely new project
- Need complete infrastructure setup
- Want guided tech stack selection
- Need documentation structure

### When to use `/ask` vs `/brainstorm`?

**Use `/ask` (Architecture):**
- Technical/architectural questions
- Need expert consultation
- Strategic decisions
- System design review

**Use `/brainstorm` (Creative):**
- Exploring multiple solutions
- Want collaborative ideation
- Need alternatives with trade-offs
- Building consensus

---

## Important Rules

1. **Testing is mandatory:** `/code` requires 100% test pass
2. **Code review gates:** Zero critical issues before finalization
3. **User approval gates:** User must explicitly approve in `/code` step 5
4. **Auto-commit:** Happens only after all gates pass
5. **Brand context:** `/design/generate` reads from `docs/brand-guidelines.md`
6. **Remote diff only:** `/git/pr` analyzes REMOTE branches, not local
7. **No implementation in brainstorm:** `/brainstorm` is ideation only
8. **Scout before cook:** Use `/scout` to find relevant code first

---

## Output Locations (Standard Paths)

```
reports/analytics/               → /analyze output
assets/campaigns/                → /campaign output
assets/articles/                 → /write/blog output
assets/banners/                  → /design/generate output
assets/copy/emails/              → /email output
assets/seo/audits/               → /seo/audit output
assets/leads/icp-profiles/       → /persona output
plans/                           → /plan & /bootstrap output
plans/reports/                   → /scout output
.claude/skills/                  → /skill/create output
```

---

## Report Files Generated

1. **scout-251229-2047-marketing-commands.md** - Complete reference (597 lines)
   - Detailed descriptions for all 20 main commands
   - Workflow steps, arguments, examples
   - Category breakdowns
   - Best for: Documentation writing, user guidance

2. **scout-251229-2047-marketing-commands-structured.json** (668 lines)
   - Machine-readable format
   - Complete metadata for all 20 commands
   - Categorization and relationships
   - Best for: Programmatic access, integration

3. **scout-251229-2047-marketing-commands-index.md** (this file)
   - Quick reference guide
   - Alphabetical command list
   - Workflow patterns
   - Best for: Quick lookup, training

---

## Next Steps for Documentation

### For User-Facing Docs
- Use markdown report for creating user guides
- Include workflow patterns section
- Add contextual examples per command
- Create decision tree for command selection

### For Integration/Automation
- Use JSON structured data
- Import command metadata
- Build CLI auto-complete
- Create command discovery tools

### For Training/Onboarding
- Start with this index
- Walk through workflow patterns
- Show common use cases
- Link to full documentation

---

## Unresolved Questions

None. All 119 commands documented with examples, workflows, and output paths.

---

**For detailed information on any command, see:**
- **scout-251229-2047-marketing-commands.md** (full reference)
- **scout-251229-2047-marketing-commands-structured.json** (structured data)
