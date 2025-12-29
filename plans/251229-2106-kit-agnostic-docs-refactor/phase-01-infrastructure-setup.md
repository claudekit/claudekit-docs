---
title: "Phase 01: Infrastructure Setup"
status: pending
effort: 4h
type: sequential
blocks: [phase-02, phase-03, phase-04, phase-05, phase-06, phase-07, phase-08]
---

# Phase 01: Infrastructure Setup

**Type**: SEQUENTIAL (must complete before all content phases)
**Effort**: 4h
**Owner**: Infrastructure Developer

---

## Overview

Update schema, navigation, and components to support multi-kit architecture. This phase BLOCKS all content phases - nothing can proceed until infrastructure is validated.

---

## Exclusive File Ownership

This phase exclusively owns:

```
src/content/config.ts
src/components/KitSwitcher.tsx (NEW)
src/components/KitContext.tsx (NEW)
src/components/nav/SidebarNav.astro
src/components/nav/EngineerNav.astro (NEW)
src/components/nav/MarketingNav.astro (NEW)
src/components/nav/CLINav.astro (NEW)
src/components/nav/SharedNav.astro (NEW)
src/components/Header.astro
src/layouts/DocsLayout.astro
```

---

## Tasks

### Task 1.1: Update Content Schema

**File**: `src/content/config.ts`

**Changes**:

```typescript
const docsSchema = z.object({
  title: z.string(),
  description: z.string().min(10).max(160),
  section: z.enum([
    'getting-started',
    'docs',
    'engineer',      // NEW
    'marketing',     // NEW
    'cli',           // NEW
    'shared',        // NEW
    'workflows',
    'tools',
    'changelog',
    'support'
  ]),
  kit: z.enum(['engineer', 'marketing', 'shared']).optional(), // NEW
  category: z.string().optional(),
  order: z.number().optional().default(999),
  published: z.boolean().default(true),
  lastUpdated: z.date().optional(),
});
```

**Validation**:
- [ ] Schema compiles without errors
- [ ] Existing docs still validate (backward compatible)
- [ ] New sections recognized

---

### Task 1.2: Create Kit Context

**File**: `src/components/KitContext.tsx` (NEW)

**Purpose**: React context for current kit state

**Implementation**:

```typescript
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Kit = 'engineer' | 'marketing' | 'shared';

interface KitContextType {
  currentKit: Kit;
  setKit: (kit: Kit) => void;
}

const KitContext = createContext<KitContextType | null>(null);

export function KitProvider({ children }: { children: ReactNode }) {
  const [currentKit, setCurrentKit] = useState<Kit | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    // Check for saved preference first
    const saved = localStorage.getItem('claudekit-kit');
    if (saved && ['engineer', 'marketing'].includes(saved)) {
      setCurrentKit(saved as Kit);
      return;
    }

    // Detect kit from URL path
    const path = window.location.pathname;
    if (path.includes('/marketing/')) {
      setCurrentKit('marketing');
    } else if (path.includes('/engineer/') || path.includes('/cli/')) {
      setCurrentKit('engineer');
    } else {
      // No kit in URL and no saved preference - show picker
      setShowPicker(true);
    }
  }, []);

  const setKit = (kit: Kit) => {
    setCurrentKit(kit);
    localStorage.setItem('claudekit-kit', kit);
  };

  return (
    <KitContext.Provider value={{ currentKit, setKit }}>
      {children}
    </KitContext.Provider>
  );
}

export function useKit() {
  const context = useContext(KitContext);
  if (!context) throw new Error('useKit must be used within KitProvider');
  return context;
}
```

---

### Task 1.3: Create Kit Switcher Component

**File**: `src/components/KitSwitcher.tsx` (NEW)

**Purpose**: UI for switching between kits

**Implementation**:

```typescript
import { useKit } from './KitContext';

const KITS = [
  { id: 'engineer', label: 'Engineer', icon: '{}', color: 'blue' },
  { id: 'marketing', label: 'Marketing', icon: 'M', color: 'coral' },
] as const;

export function KitSwitcher() {
  const { currentKit, setKit } = useKit();

  return (
    <div className="kit-switcher flex gap-2 p-2 rounded-lg bg-surface-secondary">
      {KITS.map((kit) => (
        <button
          key={kit.id}
          onClick={() => setKit(kit.id)}
          className={`
            px-3 py-1.5 rounded-md text-sm font-medium transition-colors
            ${currentKit === kit.id
              ? 'bg-accent-primary text-white'
              : 'hover:bg-surface-tertiary text-text-secondary'
            }
          `}
        >
          <span className="mr-1">{kit.icon}</span>
          {kit.label}
        </button>
      ))}
    </div>
  );
}
```

---

### Task 1.4: Update SidebarNav Router

**File**: `src/components/nav/SidebarNav.astro`

**Changes**:

```astro
---
import GettingStartedNav from './GettingStartedNav.astro';
import DocsNav from './DocsNav.astro';
import EngineerNav from './EngineerNav.astro';  // NEW
import MarketingNav from './MarketingNav.astro'; // NEW
import CLINav from './CLINav.astro';             // NEW
import WorkflowsNav from './WorkflowsNav.astro';
import ToolsNav from './ToolsNav.astro';
import ChangelogNav from './ChangelogNav.astro';
import SupportNav from './SupportNav.astro';

const url = Astro.url.pathname;

// Detect section from URL
function getSection(path: string): string {
  if (path.includes('/engineer/')) return 'engineer';
  if (path.includes('/marketing/')) return 'marketing';
  if (path.includes('/cli/')) return 'cli';
  if (path.includes('/getting-started/')) return 'getting-started';
  if (path.includes('/workflows/')) return 'workflows';
  if (path.includes('/tools/')) return 'tools';
  if (path.includes('/changelog/')) return 'changelog';
  if (path.includes('/support/')) return 'support';
  return 'docs';
}

const section = getSection(url);
---

<nav class="sidebar-nav">
  {section === 'getting-started' && <GettingStartedNav />}
  {section === 'docs' && <DocsNav />}
  {section === 'engineer' && <EngineerNav />}
  {section === 'marketing' && <MarketingNav />}
  {section === 'cli' && <CLINav />}
  {section === 'workflows' && <WorkflowsNav />}
  {section === 'tools' && <ToolsNav />}
  {section === 'changelog' && <ChangelogNav />}
  {section === 'support' && <SupportNav />}
</nav>
```

---

### Task 1.5: Create Kit-Specific Nav Components

#### EngineerNav.astro (NEW)

```astro
---
import { getCollection } from 'astro:content';

const docs = await getCollection('docs', ({ data }) =>
  data.section === 'engineer' && data.published !== false
);

// Group by category
const categories = {
  agents: docs.filter(d => d.data.category?.startsWith('agents')),
  commands: docs.filter(d => d.data.category?.startsWith('commands')),
  skills: docs.filter(d => d.data.category?.startsWith('skills')),
  configuration: docs.filter(d => d.data.category?.startsWith('config')),
};
---

<div class="nav-section">
  <h2 class="nav-title">Engineer Kit</h2>

  <details open>
    <summary>Agents ({categories.agents.length})</summary>
    <ul>
      {categories.agents.sort((a, b) => (a.data.order || 999) - (b.data.order || 999)).map((doc) => (
        <li><a href={`/docs/engineer/${doc.slug}`}>{doc.data.title}</a></li>
      ))}
    </ul>
  </details>

  <details open>
    <summary>Commands ({categories.commands.length})</summary>
    <ul>
      {categories.commands.sort((a, b) => (a.data.order || 999) - (b.data.order || 999)).map((doc) => (
        <li><a href={`/docs/engineer/${doc.slug}`}>{doc.data.title}</a></li>
      ))}
    </ul>
  </details>

  <details>
    <summary>Skills ({categories.skills.length})</summary>
    <ul>
      {categories.skills.sort((a, b) => (a.data.order || 999) - (b.data.order || 999)).map((doc) => (
        <li><a href={`/docs/engineer/${doc.slug}`}>{doc.data.title}</a></li>
      ))}
    </ul>
  </details>
</div>
```

#### MarketingNav.astro (NEW)

```astro
---
import { getCollection } from 'astro:content';

const docs = await getCollection('docs', ({ data }) =>
  data.section === 'marketing' && data.published !== false
);

const categories = {
  agents: docs.filter(d => d.data.category?.startsWith('agents')),
  commands: docs.filter(d => d.data.category?.startsWith('commands')),
  skills: docs.filter(d => d.data.category?.startsWith('skills')),
  workflows: docs.filter(d => d.data.category?.startsWith('workflows')),
  dashboard: docs.filter(d => d.data.category?.startsWith('dashboard')),
};
---

<div class="nav-section">
  <h2 class="nav-title">Marketing Kit</h2>

  <details open>
    <summary>Agents ({categories.agents.length})</summary>
    <ul>
      {categories.agents.sort((a, b) => (a.data.order || 999) - (b.data.order || 999)).map((doc) => (
        <li><a href={`/docs/marketing/${doc.slug}`}>{doc.data.title}</a></li>
      ))}
    </ul>
  </details>

  <details open>
    <summary>Commands ({categories.commands.length})</summary>
    <ul>
      {categories.commands.sort((a, b) => (a.data.order || 999) - (b.data.order || 999)).map((doc) => (
        <li><a href={`/docs/marketing/${doc.slug}`}>{doc.data.title}</a></li>
      ))}
    </ul>
  </details>

  <details>
    <summary>Skills ({categories.skills.length})</summary>
    <ul>
      {categories.skills.sort((a, b) => (a.data.order || 999) - (b.data.order || 999)).map((doc) => (
        <li><a href={`/docs/marketing/${doc.slug}`}>{doc.data.title}</a></li>
      ))}
    </ul>
  </details>

  <details>
    <summary>Workflows ({categories.workflows.length})</summary>
    <ul>
      {categories.workflows.sort((a, b) => (a.data.order || 999) - (b.data.order || 999)).map((doc) => (
        <li><a href={`/docs/marketing/${doc.slug}`}>{doc.data.title}</a></li>
      ))}
    </ul>
  </details>

  <details>
    <summary>Dashboard ({categories.dashboard.length})</summary>
    <ul>
      {categories.dashboard.sort((a, b) => (a.data.order || 999) - (b.data.order || 999)).map((doc) => (
        <li><a href={`/docs/marketing/${doc.slug}`}>{doc.data.title}</a></li>
      ))}
    </ul>
  </details>
</div>
```

#### CLINav.astro (NEW)

```astro
---
import { getCollection } from 'astro:content';

const docs = await getCollection('docs', ({ data }) =>
  data.section === 'cli' && data.published !== false
);
---

<div class="nav-section">
  <h2 class="nav-title">ClaudeKit CLI</h2>

  <ul>
    {docs.sort((a, b) => (a.data.order || 999) - (b.data.order || 999)).map((doc) => (
      <li><a href={`/docs/cli/${doc.slug}`}>{doc.data.title}</a></li>
    ))}
  </ul>
</div>
```

---

### Task 1.6: Update Header with Kit Switcher

**File**: `src/components/Header.astro`

**Changes**: Add KitSwitcher to header

```astro
---
import { KitSwitcher } from './KitSwitcher';
---

<header class="site-header">
  <div class="logo">
    <a href="/">ClaudeKit</a>
  </div>

  <div class="header-center">
    <KitSwitcher client:load />
  </div>

  <nav class="header-nav">
    <!-- existing nav items -->
  </nav>
</header>
```

---

### Task 1.7: Create Directory Structure

Create placeholder directories:

```bash
mkdir -p src/content/docs/engineer/agents
mkdir -p src/content/docs/engineer/commands
mkdir -p src/content/docs/engineer/skills
mkdir -p src/content/docs/marketing/agents
mkdir -p src/content/docs/marketing/commands
mkdir -p src/content/docs/marketing/skills
mkdir -p src/content/docs/marketing/workflows
mkdir -p src/content/docs/marketing/dashboard
mkdir -p src/content/docs/cli
mkdir -p public/assets/diagrams
```

---

### Task 1.8: Create Placeholder Index Files

Create index.md for each new section to ensure nav works:

**File**: `src/content/docs/marketing/index.md`

```markdown
---
title: "Marketing Kit"
description: "AI-powered marketing automation toolkit for content, campaigns, and growth"
section: marketing
order: 1
---

# Marketing Kit

Welcome to the ClaudeKit Marketing Kit documentation.

> This page is under construction. Content coming soon.
```

**File**: `src/content/docs/cli/index.md`

```markdown
---
title: "ClaudeKit CLI"
description: "Command-line interface for installing and managing ClaudeKit projects"
section: cli
order: 1
---

# ClaudeKit CLI

The ClaudeKit CLI helps you create and manage ClaudeKit projects.

> This page is under construction. Content coming soon.
```

---

## Validation Checklist

Before marking Phase 1 complete:

- [ ] `bun run build` passes
- [ ] Schema validates existing docs
- [ ] New sections appear in nav
- [ ] Kit switcher renders
- [ ] URL detection works for all paths
- [ ] No TypeScript errors
- [ ] No console errors in browser

---

## Completion Gate

This phase is COMPLETE when:

1. All files in ownership list are created/updated
2. Validation checklist 100% passed
3. `bun run build` succeeds
4. Manual smoke test of navigation

**BLOCKING**: Phases 2-8 cannot start until Phase 1 validation passes.

---

## Rollback Plan

If Phase 1 causes critical issues:

1. Revert schema changes in `config.ts`
2. Restore original `SidebarNav.astro`
3. Delete new nav components
4. Delete placeholder directories

All changes are file-based, easy to revert via git.
