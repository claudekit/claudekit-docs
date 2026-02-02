# ClaudeKit Docs

Astro v5 static docs site for ClaudeKit. Live: https://docs.claudekit.cc

## CRITICAL: Quality Gate

**MUST pass before ANY commit/PR. No exceptions.**

```bash
bun run build
```

**Build must pass before commit/PR. No exceptions.**

## Quick Commands

```bash
# Development
bun install           # Install deps
bun run dev           # Dev server → http://localhost:4321
bun run build         # Production build → dist/
bun run preview       # Preview build
```

## Key Locations

- **Content**: `src/content/docs/` (EN), `src/content/docs-vi/` (VI)
- **Components**: `src/components/` (Astro + React islands)
- **Nav config**: `src/lib/sidebar-nav-section-config.ts` (section registry)
- **Link validator**: `src/integrations/build-time-internal-link-validator.ts`
- **Layouts**: `src/layouts/` (BaseLayout, DocsLayout)
- **i18n**: `src/i18n/` (locales, translations, utils)
- **Config**: `src/content/config.ts` (Zod schema)
- **Docs**: `docs/` (codebase-summary, code-standards, system-architecture, project-roadmap)

## Related Projects & Directories

- **[ClaudeKit CLI](https://github.com/mrgoonie/claudekit-cli)** - CLI setup tool
  Location: `../claudekit-cli`
- **[ClaudeKit Engineer](https://github.com/claudekit/claudekit-engineer)** - Engineering toolkit
  Location: `../claudekit-engineer`
- **[ClaudeKit Marketing](https://github.com/claudekit/claudekit-marketing)** - Marketing toolkit
  Location: `../claudekit-marketing`
- **[ClaudeKit](https://github.com/mrgoonie/claudekit)** - Main website
  Location: `../claudekit`

## Adding Documentation

1. Create markdown file: `src/content/docs/<category>/<slug>.md`
2. Add frontmatter:
```yaml
---
title: "Page Title"
description: "SEO description (150-160 chars)"
category: "getting-started"  # See valid categories below
order: 1                      # Lower = higher in nav
published: true
---
```
3. Dev server auto-reloads
4. Optionally add Vietnamese: `src/content/docs-vi/<category>/<slug>.md`

## Valid Sections & Categories

**Sections** (top-level sidebar groups, from `SidebarNav.astro`):
- `getting-started`, `docs`, `engineer`, `marketing`, `cli`, `workflows`, `tools`, `changelog`, `support`

**Categories** (frontmatter `category` field, groups items within a section):
- Use top-level names in nav config's `categoryOrder` (e.g., `commands`, `skills`, `agents`)
- Subcategories like `commands/core`, `skills/backend` auto-group under the parent (`commands`, `skills`)
- Do NOT add subcategories to `categoryOrder` — they are handled automatically

**Nav architecture:**
- `SectionNav.astro` — single data-driven component for 7 sections (engineer, marketing, cli, workflows, tools, support, changelog)
- `src/lib/sidebar-nav-section-config.ts` — centralized config registry (categoryOrder, icons, badge, accentColor)
- Do NOT create per-section nav components. Add new sections by adding config to the registry.

## File Routes

- `src/content/docs/getting-started/intro.md` → `/docs/getting-started/intro`
- `src/content/docs-vi/getting-started/intro.md` → `/vi/docs/getting-started/intro`

## CRITICAL: Link Guidelines

**Build-time link validator** (`src/integrations/build-time-internal-link-validator.ts`) runs on every `bun run build` and **fails the build** if any broken internal links are detected. This catches issues before they reach production.

**ALWAYS use absolute paths for internal links. NEVER use relative paths.**

```markdown
# ✅ CORRECT - Absolute paths
[Quick Start](/docs/getting-started/quick-start)
[Commands](/docs/engineer/commands)

# ❌ WRONG - Relative paths (WILL BREAK)
[Quick Start](./quick-start)
[Commands](../docs/engineer/commands/)
```

**Why:** Relative links resolve differently based on trailing slash in URL:
- `/docs/getting-started` + `./quick-start` → `/docs/quick-start` (404!)
- `/docs/getting-started/` + `./quick-start` → `/docs/getting-started/quick-start` (works)

Since Astro serves URLs without trailing slashes by default, relative links break.

**Link validator details:**
- Validates markdown `[text](/docs/...)` and MDX `href="/docs/..."` syntax
- Skips links inside fenced code blocks (triple backticks)
- Strips anchors (`#section`) and query params (`?key=val`) before validation
- Supports `/index` suffix links
- Skips static assets (`.png`, `.jpg`, `.pdf`, etc.)
- Covers both EN (`/docs/...`) and VI (`/vi/docs/...`) links

**When moving docs:** Search for the old path and update all references:
```bash
grep -r "/docs/old/path" src/content/docs/
```
Then run `bun run build` — the validator will catch any links you missed.

## CRITICAL: Static Assets (Images, PDFs, etc.)

**All static assets MUST be placed in `public/` folder. Astro serves from `public/` only.**

```markdown
# ✅ CORRECT - File at public/docs/screenshots/example.png
![Example](/docs/screenshots/example.png)

# ✅ CORRECT - File at public/assets/diagram.jpg
![Diagram](/assets/diagram.jpg)

# ❌ WRONG - File in docs/ folder (NOT public/docs/)
# This path won't resolve! Astro doesn't serve from repo root.
```

**Asset locations:**
- Screenshots: `public/docs/screenshots/`
- General assets: `public/assets/`

**Before commit, verify all image refs resolve:**
```bash
# List all image paths and check each exists in public/
for p in $(grep -rhoP '!\[.*?\]\(\K/[^)]+' src/content/ | sort -u); do
  [ ! -f "public$p" ] && echo "MISSING: $p"
done
```

## Tech Stack

- **Astro v5.14.6**: SSG with islands architecture
- **React 18.3.1**: Interactive components (AIChat, LanguageSwitcher)
- **TypeScript 5.7.3**: Strict mode
- **Tailwind CSS 3.4**: Utility-first + CSS variables
- **Radix UI**: Accessible components
- **Bun**: Package manager & runtime

## Design System

- **Theme**: One Dark Pro (dark mode only)
- **CSS Variables**: `src/styles/global.css` (--color-*, --space-*, --text-*)
- **Fonts**: Inter (body), Geist Mono (code)
- **Inspiration**: Polar docs aesthetics

## CRITICAL: i18n Rules

**Locations:**
- English: `src/content/docs/` → routes `/docs/*`
- Vietnamese: `src/content/docs-vi/` → routes `/vi/docs/*`
- UI strings: `src/i18n/ui.ts`

**Rules by locale:**

| | English (`docs/`) | Vietnamese (`docs-vi/`) |
|---|---|---|
| Frontmatter | NO `lang:` tag | MUST have `lang: vi` |
| Content | English only | Vietnamese only |
| Internal links | `/docs/...` | `/vi/docs/...` |

**Workflow:** Create EN first → mirror structure in `docs-vi/` → translate

**Before commit, verify i18n compliance:**
```bash
# Check: VI files missing lang: vi
grep -rL "lang: vi" src/content/docs-vi/ --include="*.md" | head -20

# Check: EN files with wrong lang tag
grep -rl "lang: vi" src/content/docs/ --include="*.md"

# Check: EN files linking to /vi/docs/
grep -r "/vi/docs/" src/content/docs/ --include="*.md"

# Check: VI files linking to /docs/ (without /vi/ prefix)
grep -rP '\]\(/docs/' src/content/docs-vi/ --include="*.md"
```

## CRITICAL: Skills vs Commands Terminology

**Skills ARE invoked with `/slash` syntax.** The migration from "commands" to "skills" was organizational, NOT syntactical.

| Term | Syntax | Example | Notes |
|------|--------|---------|-------|
| **Skill** | `/skill-name` | `/git`, `/cook`, `/fix` | Migrated from commands, same slash syntax |
| **Command** | `/command-name` | `/plan`, `/ask`, `/test` | Legacy term, still valid |

**Migrated to Skills:** git, fix, cook, scout, design, content, skill-creator, copywriting
**Still called Commands:** plan, ask, test, bootstrap, debug, journal, watzup, kanban, preview

**DO NOT:**
- Replace `/git` with natural language like "use the git skill"
- Remove slash syntax from skill invocations
- Treat skills as non-slash-invocable

**DO:**
- Keep `/git`, `/cook`, `/fix` syntax in docs
- Update links from `/docs/commands/git/` → `/docs/skills/git`
- Replace `/code` with `/cook` (deprecated)

## Git Workflow

```bash
# Feature branch from dev
git checkout dev && git pull origin dev
git checkout -b kai/<feature>

# After work complete
bun run build
git push origin kai/<feature>
# Create PR to dev branch
```

## Commit Convention

- `feat:` → minor version bump
- `fix:` → patch version bump
- `docs:`, `refactor:`, `test:`, `chore:` → no version bump

## Known Issues / TODOs

- [ ] AI chat backend not connected (UI only)
- [ ] Search not implemented (Pagefind planned)
- [x] ~~Sidebar flat nav~~ — Fixed: SectionNav groups subcategories under parent automatically
- [x] ~~`troubleshooting` category missing~~ — Restructured under `support` section
- [x] ~~KaTeX Vietnamese locale warnings~~ — Fixed: disabled `singleDollarTextMath` in remark-math (#87)
- [x] ~~`baseline-browser-mapping` deprecation warning~~ — Fixed: overridden to latest (#87)

## Deployment

- **Docker**: Multi-stage build, node:20-alpine
- **K8s**: `k8s/` manifests (deployment, service, ingress, configmap)
- **Static**: Can deploy to Vercel, Netlify, Cloudflare Pages

## Documentation

See `docs/` directory:
- `codebase-summary.md`: Complete overview, 194 pages, 9 categories
- `code-standards.md`: Naming conventions, file org, component patterns
- `system-architecture.md`: SSG + islands architecture, build/runtime layers
- `project-roadmap.md`: Status, phases, known issues, goals
- `design-guidelines.md`: Design system specs (49KB)
- `deployment-guide.md`: Production deployment
