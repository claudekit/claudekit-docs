---
title: Docs Seeker
description: Script-driven documentation discovery via llms.txt sources with automated query detection and parallel agent distribution
section: engineer
kit: engineer
category: skills/tools
order: 12
published: true
---

# Docs Seeker

Execute scripts to fetch technical documentation from llms.txt sources (context7.com) with automatic query classification and agent distribution strategy.

## When to Use

- Need topic-specific docs (features/components/API methods)
- Looking up library/framework documentation fast
- Analyzing GitHub repositories for architecture
- Large doc sets requiring parallel agent strategy

## Key Capabilities

| Capability | What It Does |
|------------|--------------|
| **Query Detection** | Auto-classifies topic-specific vs general queries |
| **Smart Fetching** | Constructs context7 URLs, handles fallback chains |
| **Result Analysis** | Categorizes URLs, recommends 1/3/7 agent strategies |
| **Zero-Token Scripts** | All logic in Node.js scripts, no prompt overhead |

## Common Use Cases

### Topic-Specific Lookup
**Who**: Developer needing specific feature documentation
**Prompt**: "How do I use date picker in shadcn?"
```bash
node scripts/detect-topic.js "<query>"  # → {topic, library, isTopicSpecific}
node scripts/fetch-docs.js "<query>"    # → 2-3 focused URLs
# Read with WebFetch
```

### General Library Docs
**Who**: Developer exploring new framework
**Prompt**: "Get Next.js documentation"
```bash
node scripts/detect-topic.js "<query>"              # → {isTopicSpecific: false}
node scripts/fetch-docs.js "<query>"                # → 8+ URLs
cat llms.txt | node scripts/analyze-llms-txt.js -   # → Agent strategy
# Deploy parallel agents per recommendation
```

### Repository Analysis
**Who**: Team lead investigating library architecture
**Prompt**: "Analyze shadcn/ui repository structure"
```bash
node scripts/fetch-docs.js "github.com/shadcn/ui"   # → Repo docs
# Read with WebFetch for architecture insights
```

### Multi-Agent Documentation Research
**Who**: Tech lead needing comprehensive framework knowledge
**Prompt**: "Research React Server Components in Next.js 15"
```bash
node scripts/fetch-docs.js "<query>"                # → Multiple URLs
cat llms.txt | node scripts/analyze-llms-txt.js -   # → "7 agents recommended"
# Spawn parallel research agents
```

## Quick Reference

**Three-Script Workflow:**
```bash
# 1. Detect query type
node scripts/detect-topic.js "<query>"

# 2. Fetch documentation
node scripts/fetch-docs.js "<query>"

# 3. Analyze for agent strategy (if 8+ URLs)
cat llms.txt | node scripts/analyze-llms-txt.js -
```

**Agent Distribution:**
- 1 agent: Few URLs (3-5)
- 3 agents: Medium coverage (6-12)
- 7 agents: Comprehensive (13+)
- Phased: Massive doc sets (30+)

**Environment Config:**
```
process.env > .claude/skills/docs-seeker/.env > .claude/skills/.env > .claude/.env
```

## Pro Tips

- Scripts handle all URL construction and fallback logic automatically
- Topic queries return 2-3 focused URLs (10-15s), general queries return 8+ (30-60s)
- Use `analyze-llms-txt.js` to get parallel agent recommendations for large doc sets
- Scripts are zero-token execution - no context loading overhead
- **Not activating?** Say: "Use docs-seeker skill to fetch documentation for [library/topic]"

## Related Skills

- [Research](/docs/skills/tools/research) - Documentation research workflows
- [Planning](/docs/skills/tools/planning) - Plan with documentation context
- [MCP Management](/docs/skills/tools/mcp-management) - Manage MCP servers for extended capabilities

---

## Key Takeaway

 Script-first documentation discovery with automatic query classification, intelligent URL fetching via context7.com, and parallel agent distribution for comprehensive doc coverage.
