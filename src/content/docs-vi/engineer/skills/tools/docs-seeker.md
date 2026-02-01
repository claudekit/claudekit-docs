---
title: Docs Seeker
description: Script-driven documentation discovery qua llms.txt sources với automated query detection và parallel agent distribution
section: engineer
kit: engineer
category: skills/tools
order: 12
published: true
lang: vi
---

# Docs Seeker

Execute scripts để fetch technical documentation từ llms.txt sources (context7.com) với automatic query classification và agent distribution strategy.

## Khi Nào Sử Dụng

- Cần topic-specific docs (features/components/API methods)
- Tìm kiếm library/framework documentation nhanh
- Phân tích GitHub repositories cho architecture
- Large doc sets yêu cầu parallel agent strategy

## Khả Năng Chính

| Capability | What It Does |
|------------|--------------|
| **Query Detection** | Auto-classifies topic-specific vs general queries |
| **Smart Fetching** | Constructs context7 URLs, handles fallback chains |
| **Result Analysis** | Categorizes URLs, recommends 1/3/7 agent strategies |
| **Zero-Token Scripts** | Tất cả logic trong Node.js scripts, không có prompt overhead |

## Common Use Cases

### Topic-Specific Lookup
**Who**: Developer cần specific feature documentation
**Prompt**: "Làm thế nào tôi dùng date picker trong shadcn?"
```bash
node scripts/detect-topic.js "<query>"  # → {topic, library, isTopicSpecific}
node scripts/fetch-docs.js "<query>"    # → 2-3 focused URLs
# Read với WebFetch
```

### General Library Docs
**Who**: Developer khám phá framework mới
**Prompt**: "Lấy Next.js documentation"
```bash
node scripts/detect-topic.js "<query>"              # → {isTopicSpecific: false}
node scripts/fetch-docs.js "<query>"                # → 8+ URLs
cat llms.txt | node scripts/analyze-llms-txt.js -   # → Agent strategy
# Deploy parallel agents theo recommendation
```

### Repository Analysis
**Who**: Team lead điều tra library architecture
**Prompt**: "Phân tích shadcn/ui repository structure"
```bash
node scripts/fetch-docs.js "github.com/shadcn/ui"   # → Repo docs
# Read với WebFetch cho architecture insights
```

### Multi-Agent Documentation Research
**Who**: Tech lead cần comprehensive framework knowledge
**Prompt**: "Research React Server Components trong Next.js 15"
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

# 3. Analyze cho agent strategy (nếu 8+ URLs)
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

- Scripts xử lý tất cả URL construction và fallback logic tự động
- Topic queries trả về 2-3 focused URLs (10-15s), general queries trả về 8+ (30-60s)
- Dùng `analyze-llms-txt.js` để lấy parallel agent recommendations cho large doc sets
- Scripts là zero-token execution - không có context loading overhead
- **Không kích hoạt?** Nói: "Dùng docs-seeker skill để fetch documentation cho [library/topic]"

## Các Skills Liên Quan

- [Research](/vi/docs/engineer/skills/tools/research) - Documentation research workflows
- [Planning](/vi/docs/engineer/skills/tools/planning) - Plan với documentation context
- [MCP Management](/vi/docs/engineer/skills/tools/mcp-management) - Quản lý MCP servers cho extended capabilities

---

## Key Takeaway

Script-first documentation discovery với automatic query classification, intelligent URL fetching qua context7.com và parallel agent distribution cho comprehensive doc coverage.
