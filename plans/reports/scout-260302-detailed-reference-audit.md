# Detailed Reference Audit: Command Prefix Updates

This document provides detailed line-by-line analysis of key files requiring prefix updates.

---

## Priority 1 Files (CRITICAL)

### 1. commands/index.md

**Location:** `/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/commands/index.md`

**Sample Changes Required:**

```
Line 33: | [/brainstorm](/docs/marketing/commands/brainstorm)
CHANGE TO: | [/ckm:brainstorm](/docs/marketing/commands/brainstorm)

Line 40: | [/scout](/docs/marketing/commands/scout)
CHANGE TO: | [/ckm:scout](/docs/marketing/commands/scout)

Line 42: | [/ask](/docs/marketing/commands/ask)
CHANGE TO: | [/ckm:ask](/docs/marketing/commands/ask)

Line 57: /brainstorm how to improve conversion rates
CHANGE TO: /ckm:brainstorm how to improve conversion rates

Line 60: /ask what's the best way to structure our marketing automation?
CHANGE TO: /ckm:ask what's the best way to structure our marketing automation?
```

### 2. commands/brainstorm.md

**Location:** `/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/commands/brainstorm.md`

**Sample Changes Required:**

```
Line 2: title: "/brainstorm"
CHANGE TO: title: "/ckm:brainstorm"

Line 15: /brainstorm how to improve email open rates
CHANGE TO: /ckm:brainstorm how to improve email open rates

Line 45: /brainstorm [question or topic]
CHANGE TO: /ckm:brainstorm [question or topic]

Line 52: /brainstorm how can we improve email open rates
CHANGE TO: /ckm:brainstorm how can we improve email open rates

Line 137: - `/plan` - Generate implementation plan
CHANGE TO: - `/ckm:plan` - Generate implementation plan

Line 157: - /plan implement email segmentation system
CHANGE TO: - /ckm:plan implement email segmentation system

Line 158: - /cook A/B test value-first subject lines
CHANGE TO: - /ckm:cook A/B test value-first subject lines

Line 217: /plan [chosen solution]
CHANGE TO: /ckm:plan [chosen solution]

Line 220: /cook [chosen solution]
CHANGE TO: /ckm:cook [chosen solution]

Line 233: /brainstorm campaign strategy for Q1 launch
CHANGE TO: /ckm:brainstorm campaign strategy for Q1 launch

Line 236: /brainstorm should we build feature X or Y
CHANGE TO: /ckm:brainstorm should we build feature X or Y

Line 239: /brainstorm microservices vs monolith for our scale
CHANGE TO: /ckm:brainstorm microservices vs monolith for our scale
```

### 3. skills/index.md

**Location:** `/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/marketing/skills/index.md`

**Sample Changes Required:**

```
Line 30: | [Brainstorming](/docs/marketing/skills/brainstorming)
(Link text unchanged, but ensure it references `/ckm:brainstorm` in text)

Line 48: | [Research](/docs/marketing/skills/research)
(Link text unchanged)

(Multiple inline references to slash commands need updating)
```

---

## Priority 2 Files (HIGH)

### 4. commands/cook.md
**Sample Pattern:** `/cook` → `/ckm:cook` (multiple occurrences)

### 5. commands/plan.md
**Sample Pattern:** `/plan` → `/ckm:plan` (multiple occurrences)

### 6. commands/scout.md
**Sample Pattern:** `/scout` → `/ckm:scout` (multiple occurrences)

### 7. commands/ask.md
**Sample Pattern:** `/ask` → `/ckm:ask` (multiple occurrences)

### 8-11. commands/{test, fix, debug, research}.md
**Sample Pattern:** `/command` → `/ckm:command` (check if these files exist)

---

## Agent Files (Priority 3)

Each agent file contains references to related commands that need updating.

**Example Patterns from Agent Files:**

```
File: agents/brainstormer.md
- `/plan` → `/ckm:plan`
- `/research` → `/ckm:research`

File: agents/researcher.md
- `/scout` → `/ckm:scout`
- `/ask` → `/ckm:ask`
- `/plan` → `/ckm:plan`

File: agents/planner.md
- `/cook` → `/ckm:cook`
- `/test` → `/ckm:test`

File: agents/project-manager.md
- Various command references → `/ckm:` versions
```

---

## Skills Files (Priority 4)

Each skill file shows "Related Commands" section with slash commands needing updates.

**Sample from campaign-management.md (Line 137):**
```
Before:
- `/plan` - Generate implementation plan

After:
- `/ckm:plan` - Generate implementation plan
```

---

## Vietnamese Docs (docs-vi)

Apply identical changes to:
```
/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs-vi/marketing/
- commands/ (14 files)
- skills/ (11 files)
- agents/ (15 files)
- workflows/ (1 file)
```

---

## Batch Update Strategy

### Regex Pattern for All Files

Use this regex pattern in your editor/IDE:

**Search Pattern (regex):**
```
/(?:cook|plan|brainstorm|research|debug|test|ask|scout|fix|analyze|email|campaign|seo|git|review|bootstrap)\b
```

**Replace Pattern:**
```
/ckm:${1}
```

**Note:** May need to adjust depending on your editor's regex flavor.

### By Editor

#### VS Code / Cursor
- Open Search (Cmd+Shift+F or Ctrl+Shift+F)
- Enable Regex (.*) button
- Search: `/(cook|plan|brainstorm|research|debug|test|ask|scout|fix)\b`
- Replace: `/ckm:$1`
- Scope: Files in `src/content/docs/marketing/`

#### Sublime Text
- Search: `/(cook|plan|brainstorm|research|debug|test|ask|scout|fix)\b`
- Replace: `/ckm:$1`

#### nano/sed command
```bash
find . -name "*.md" -path "*/marketing/*" -exec sed -i 's|/\(cook\|plan\|brainstorm\|research\|debug\|test\|ask\|scout\|fix\)\b|/ckm:\1|g' {} \;
```

---

## Quality Assurance Checklist

- [ ] All `/cook` → `/ckm:cook`
- [ ] All `/plan` → `/ckm:plan`
- [ ] All `/brainstorm` → `/ckm:brainstorm`
- [ ] All `/research` → `/ckm:research`
- [ ] All `/scout` → `/ckm:scout`
- [ ] All `/ask` → `/ckm:ask`
- [ ] All `/test` → `/ckm:test`
- [ ] All `/debug` → `/ckm:debug`
- [ ] All `/fix` → `/ckm:fix`
- [ ] Check markdown links still work: `[/ckm:command](...)`
- [ ] Verify no duplicate prefixes: `/ckm:/ckm:` (if any)
- [ ] Spot-check critical files (index pages)
- [ ] Build docs and verify no broken links
- [ ] Apply same changes to docs-vi/marketing/

