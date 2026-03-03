---
title: "ckm:mermaidjs-v11"
description: "Create diagrams with Mermaid.js v11 syntax — flowcharts, sequence diagrams, Gantt charts, and more with v11-specific features."
section: marketing
kit: marketing
category: skills
order: 92
---

# `ckm:mermaidjs-v11`

> Generate accurate, rendereable Mermaid.js v11 diagrams with proper syntax, theme support, and advanced layout features.

## What This Skill Does

**The Challenge**: Mermaid.js v11 introduced breaking syntax changes and new diagram types. Diagrams written with older syntax or AI-hallucinated syntax fail to render, wasting time on debugging.

**The Solution**: Mermaid.js v11 skill enforces correct v11 syntax rules, covers all supported diagram types, and provides validated templates. Diagrams render correctly on first attempt.

## Activation

**Implicit**: Activates when creating Mermaid diagrams, architecture visualizations, or flowcharts.

**Explicit**: Activate via prompt:
```
Activate mermaidjs-v11 skill to create a sequence diagram for our auth flow
```

## Capabilities

### 1. Flowcharts (graph / flowchart)
Direction-controlled flowcharts with subgraphs and styling.

```mermaid
flowchart TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
    C --> E[End]
    D --> E
```

**v11 note**: Use `flowchart` (not `graph`) for new diagrams. Both work but `flowchart` supports more features.

### 2. Sequence Diagrams
Actor interactions with loops, alternatives, and activation boxes.

```mermaid
sequenceDiagram
    participant User
    participant API
    participant DB
    User->>API: POST /login
    API->>DB: query user
    DB-->>API: user record
    API-->>User: JWT token
```

### 3. Gantt Charts
Project timelines with milestones and section grouping.

```mermaid
gantt
    title Project Timeline
    dateFormat YYYY-MM-DD
    section Phase 1
    Research     :a1, 2024-01-01, 7d
    Planning     :a2, after a1, 5d
    section Phase 2
    Development  :b1, after a2, 14d
    Testing      :b2, after b1, 7d
```

### 4. Entity Relationship Diagrams
Database schema visualization with relationship cardinality.

```mermaid
erDiagram
    USER ||--o{ ORDER : places
    ORDER ||--|{ LINE_ITEM : contains
    PRODUCT ||--o{ LINE_ITEM : includes
```

## Prerequisites

- Mermaid.js v11 renderer (GitHub, Notion, Obsidian, custom integration)
- For preview: `/ckm:markdown-novel-viewer` or `/ckm:preview`

## Configuration

**Diagram theme options** (v11):
```mermaid
%%{init: {'theme': 'dark', 'themeVariables': {'primaryColor': '#6366f1'}}}%%
flowchart LR
    A --> B
```

**Available themes**: `default`, `dark`, `forest`, `base`, `neutral`

## Best Practices

**1. Declare diagram type on first line**
Always start with `flowchart`, `sequenceDiagram`, `gantt`, etc. Never omit.

**2. Avoid special characters in node labels**
Special chars (`<`, `>`, `&`) break parsing. Use HTML entities or avoid them.

**3. Test incrementally**
Build complex diagrams section by section to isolate syntax errors.

## Common Use Cases

### Use Case 1: User Flow Visualization
**Scenario**: Document onboarding funnel for product and marketing alignment.

**Diagram type**: Flowchart with decision nodes for each funnel step.

**Output**: Shareable diagram embedded in Notion or docs site.

### Use Case 2: System Architecture Diagram
**Scenario**: Visualize microservices and data flow for engineering onboarding.

**Diagram type**: Flowchart with subgraphs for service groupings.

**Output**: Architecture reference embedded in system documentation.

### Use Case 3: Sprint Planning Timeline
**Scenario**: Visualize sprint tasks and dependencies for project planning.

**Diagram type**: Gantt chart with sections per team.

**Output**: Sprint timeline shared in team standup.

## Troubleshooting

**Issue**: Diagram renders as text (not visual)
**Solution**: Check the platform supports Mermaid. GitHub renders fenced ` ```mermaid ` blocks automatically.

**Issue**: Parse error on arrow syntax
**Solution**: Use `-->` for solid, `-.->` for dotted, `==>` for thick. Avoid custom arrow chars.

**Issue**: Subgraph not rendering correctly
**Solution**: Close every subgraph with `end`. Nested subgraphs require careful indentation.

## Related Skills

- [Preview](/docs/marketing/skills/preview) - Render diagrams in browser
- [Slides](/docs/marketing/skills/slides) - Embed diagrams in presentations
- [Sequential Thinking](/docs/marketing/skills/sequential-thinking) - Structured analysis to diagram

## Related Commands

- `/ckm:mermaidjs-v11` - Create Mermaid v11 diagrams
- `/ckm:preview` - Preview diagrams in browser
