---
lang: vi
title: "ckm:context-engineering"
description: "Giám sát sử dụng context, tối ưu token, kiến trúc agent"
section: marketing
kit: marketing
category: skills
order: 69
---

> Tối đa hóa hiệu quả AI agent bằng cách quản lý context window thông minh và thiết kế kiến trúc agent tối ưu.

## Skill Này Làm Gì

**Thách thức**: Khi session kéo dài, context window đầy dần, dẫn đến AI "quên" thông tin quan trọng, phản hồi chậm hơn và chi phí token tăng cao. Thiếu kiến trúc agent đúng dẫn đến kết quả không nhất quán.

**Giải pháp**: Skill context-engineering cung cấp chiến lược quản lý token, kỹ thuật compression context, monitoring usage và patterns thiết kế kiến trúc multi-agent hiệu quả.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi context window đạt 70% capacity hoặc khi thiết kế agent systems.

**Tường minh**: Kích hoạt qua prompt:
```
Activate context-engineering skill to [optimize/monitor/design] [context/agents]
```

## Tính Năng

### 1. Giám Sát Context Usage
Theo dõi và hiểu context consumption của session.

**Context window limits (Claude)**:
| Model | Context Window | Recommended Active Use |
|-------|---------------|----------------------|
| Claude Opus 4 | 200K tokens | 150K (75%) |
| Claude Sonnet 4 | 200K tokens | 150K (75%) |
| Claude Haiku 3.5 | 200K tokens | 150K (75%) |

**Ước tính token**:
- 1 token ≈ 4 ký tự tiếng Anh
- 1 token ≈ 2-3 ký tự tiếng Việt
- 1 trang A4 văn bản ≈ 500-700 tokens
- 100 lines code ≈ 500-800 tokens

### 2. Context Compression Techniques
Giảm token usage mà không mất thông tin quan trọng.

**Technique 1: Summarize completed tasks**
```
Thay vì giữ toàn bộ conversation history, tóm tắt:

"Đã hoàn thành: Setup database schema với 5 tables (users, leads, campaigns,
analytics, emails). Auth với Better Auth đã work. Next: implement API endpoints."
```

**Technique 2: Extract và lưu key decisions**
```markdown
# Quyết Định Thiết Kế (context-efficient)
- DB: PostgreSQL với Drizzle ORM
- Auth: Better Auth với Google OAuth
- Frontend: Next.js 14 App Router
- Deploy: Vercel + Railway
```

**Technique 3: Reference files thay vì paste content**
```
# Kém hiệu quả:
[Paste toàn bộ 200 lines code]

# Tốt hơn:
"Xem schema trong src/db/schema.ts (đã đọc),
focus vào leads table structure"
```

### 3. Compact Mode
Kỹ thuật `/compact` để tái khởi động context sạch.

**Khi nên dùng `/compact`**:
- Sau khi hoàn thành một phase lớn
- Khi context > 70% đầy
- Khi bắt đầu task hoàn toàn khác

**Quy trình compact**:
1. Chạy `/compact` để summarize conversation
2. Claude tạo ra summary ngắn gọn
3. Session mới bắt đầu với summary đó làm context

### 4. Multi-Agent Architecture
Thiết kế hệ thống agent hiệu quả cho marketing workflows.

**Pattern: Orchestrator + Specialists**
```
Lead Agent (Orchestrator)
├── Research Agent (context: 50K)
├── Content Agent (context: 80K)
├── Analytics Agent (context: 40K)
└── Review Agent (context: 30K)
```

**Mỗi agent có context riêng biệt** → không có một agent nào bị quá tải context.

**Giao tiếp giữa agents**:
```markdown
# Agent Handoff Protocol
Agent A → Agent B message format:

## Summary (< 500 tokens)
[Tóm tắt những gì đã làm]

## Outputs
[Links/paths đến files đã tạo]

## Next Steps For You
[Chính xác những gì Agent B cần làm]

## Key Context
[Chỉ thông tin quan trọng B cần biết]
```

### 5. Token Budget Per Task
Phân bổ token budget hợp lý cho từng loại task.

| Task Type | Recommended Budget | Reason |
|-----------|-------------------|--------|
| Research | 100K | Cần đọc nhiều content |
| Writing | 50K | Context nhỏ là đủ |
| Code review | 80K | Cần đọc toàn bộ codebase |
| Analysis | 60K | Focused data processing |
| Quick QA | 20K | Single-turn tasks |

## Điều Kiện Tiên Quyết

- Hiểu cơ bản về cách LLMs hoạt động
- Claude Code CLI đã cài đặt
- Multi-agent workflows (optional, cho advanced usage)

## Cấu Hình

**Context monitoring trong CLAUDE.md**:
```markdown
## Context Management
- Sau mỗi major task: tóm tắt và lưu quyết định vào docs/
- Khi context > 70%: chạy /compact
- Files đã xử lý: chỉ reference, không paste lại
- Ưu tiên: decisions > code > raw content
```

## Thực Hành Tốt Nhất

**1. CLAUDE.md Là "Persistent Memory"**
Lưu tất cả thông tin project quan trọng vào CLAUDE.md. File này được load ở đầu mỗi session.

**2. Tái Sử Dụng Agents Có Specialized Context**
Tạo agents với system prompts chứa context đặc thù cho từng domain thay vì cố gắng nhét mọi thứ vào một agent.

**3. Batch Related Tasks**
Nhóm các tasks liên quan vào cùng một session thay vì bắt đầu session mới cho mỗi micro-task.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Campaign Launch Planning
**Tình huống**: Session dài lập kế hoạch campaign với nhiều stakeholders.

**Strategy**:
- Research Agent: Tìm hiểu market, competitors (100K context)
- Strategy Agent: Phát triển strategy dựa trên research (60K)
- Content Agent: Tạo assets từ strategy (80K)
- Review Agent: QA toàn bộ outputs (40K)

### Trường Hợp 2: Long-Running Code Session
**Tình huống**: Viết code marketing tool cả ngày.

**Strategy**:
1. Compact sau mỗi feature hoàn thành
2. Lưu tech decisions vào `docs/decisions.md`
3. Reference files bằng path, không paste code
4. Clear conversation khi chuyển sang task khác

## Xử Lý Sự Cố

**Vấn đề**: AI bắt đầu "quên" context từ đầu session
**Giải pháp**: Compact ngay lập tức. Lưu key information vào file và reference lại.

**Vấn đề**: Agent handoffs mất thông tin quan trọng
**Giải pháp**: Thiết kế structured handoff format. Test handoff với minimal viable context.

## Skill Liên Quan

- [Claude Code](/vi/docs/marketing/skills/claude-code) - Cấu hình Claude Code
- [Kit Builder](/vi/docs/marketing/skills/kit-builder) - Xây dựng agent workflows
- [Google ADK Python](/vi/docs/marketing/skills/google-adk-python) - Multi-agent với Google ADK

## Lệnh Liên Quan

- `/ckm:context-engineering` - Phân tích và tối ưu context
- `/compact` - Nén context window
- `/ckm:kit-builder` - Xây dựng multi-agent systems
