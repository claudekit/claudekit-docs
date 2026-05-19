---
title: "ck:docs-seeker"
description: Khám phá tài liệu qua script từ các nguồn llms.txt với phát hiện query tự động và phân phối agent song song
section: engineer
kit: engineer
category: skills/tools
order: 50
published: true
lang: vi
---

# Docs Seeker

Thực thi scripts để lấy tài liệu kỹ thuật từ các nguồn llms.txt (context7.com) với phân loại query tự động và chiến lược phân phối agent.

## Khi Nào Dùng

- Cần docs theo chủ đề (features/components/API methods)
- Tra cứu tài liệu library/framework nhanh chóng
- Phân tích GitHub repositories về kiến trúc
- Bộ docs lớn cần chiến lược parallel agent

## Khả Năng Chính

| Khả Năng | Chức Năng |
|----------|-----------|
| **Query Detection** | Tự động phân loại query theo chủ đề vs tổng quát |
| **Smart Fetching** | Tạo context7 URLs, xử lý fallback chains |
| **Result Analysis** | Phân loại URLs, đề xuất chiến lược 1/3/7 agents |
| **Zero-Token Scripts** | Toàn bộ logic trong Node.js scripts, không overhead prompt |

## Các Use Case Phổ Biến

### Tra Cứu Theo Chủ Đề
**Đối tượng**: Developer cần tài liệu tính năng cụ thể
**Prompt**: "How do I use date picker in shadcn?"
```bash
node scripts/detect-topic.js "<query>"  # → {topic, library, isTopicSpecific}
node scripts/fetch-docs.js "<query>"    # → 2-3 focused URLs
# Đọc với WebFetch
```

### Docs Library Tổng Quát
**Đối tượng**: Developer khám phá framework mới
**Prompt**: "Get Next.js documentation"
```bash
node scripts/detect-topic.js "<query>"              # → {isTopicSpecific: false}
node scripts/fetch-docs.js "<query>"                # → 8+ URLs
cat llms.txt | node scripts/analyze-llms-txt.js -   # → Agent strategy
# Deploy parallel agents theo khuyến nghị
```

### Phân Tích Repository
**Đối tượng**: Tech lead tìm hiểu kiến trúc library
**Prompt**: "Analyze shadcn/ui repository structure"
```bash
node scripts/fetch-docs.js "github.com/shadcn/ui"   # → Repo docs
# Đọc với WebFetch để có insights về kiến trúc
```

### Multi-Agent Documentation Research
**Đối tượng**: Tech lead cần kiến thức framework toàn diện
**Prompt**: "Research React Server Components in Next.js 15"
```bash
node scripts/fetch-docs.js "<query>"                # → Multiple URLs
cat llms.txt | node scripts/analyze-llms-txt.js -   # → "7 agents recommended"
# Spawn parallel research agents
```

## Quick Reference

**Workflow Ba Script:**
```bash
# 1. Phát hiện loại query
node scripts/detect-topic.js "<query>"

# 2. Lấy tài liệu
node scripts/fetch-docs.js "<query>"

# 3. Phân tích cho chiến lược agent (nếu 8+ URLs)
cat llms.txt | node scripts/analyze-llms-txt.js -
```

**Phân Phối Agent:**
- 1 agent: Ít URLs (3-5)
- 3 agents: Coverage trung bình (6-12)
- 7 agents: Toàn diện (13+)
- Phased: Bộ docs khổng lồ (30+)

**Cấu Hình Môi Trường:**
```
process.env > .claude/skills/docs-seeker/.env > .claude/skills/.env > .claude/.env
```

## Pro Tips

- Scripts tự động xử lý tất cả URL construction và fallback logic
- Topic queries trả về 2-3 focused URLs (10-15s), general queries trả về 8+ (30-60s)
- Dùng `analyze-llms-txt.js` để có parallel agent recommendations cho bộ docs lớn
- Scripts là zero-token execution - không có context loading overhead
- **Không kích hoạt?** Nói: "Use docs-seeker skill to fetch documentation for [library/topic]"

## Các Skills Liên Quan

- [Research](/vi/docs/engineer/skills/research) - Documentation research workflows
- [Planning](/vi/docs/engineer/skills/plan) - Lập kế hoạch với documentation context
- [Use MCP](/vi/docs/engineer/skills/use-mcp) - Quản lý MCP servers để mở rộng khả năng

---

## Điểm Mấu Chốt

Khám phá tài liệu script-first với phân loại query tự động, intelligent URL fetching qua context7.com và phân phối parallel agent để có coverage docs toàn diện.
