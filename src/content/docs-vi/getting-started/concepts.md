---
title: "Khái Niệm Cốt Lõi"
description: "Hiểu cách kiến trúc agents, commands và skills của ClaudeKit hoạt động"
lang: vi
section: getting-started
order: 2
published: true
---

# Khái Niệm Cốt Lõi

Sức mạnh của ClaudeKit đến từ ba hệ thống kết nối với nhau: **Agents**, **Commands**, và **Skills**.

## Agents

AI assistants chuyên biệt với chuyên môn tập trung.

**Agents Có Sẵn**:
- **Planner**: Tạo kế hoạch triển khai với phases, tasks, success criteria
- **Researcher**: Phân tích codebases, best practices, quyết định kỹ thuật
- **Tester**: Viết và chạy tests, phân tích failures, sửa issues
- **Debugger**: Điều tra bugs, truy tìm root causes, đề xuất fixes
- **Code Reviewer**: Review code quality, security, performance
- **Docs Manager**: Tạo và duy trì documentation
- **UI/UX Designer**: Thiết kế interfaces theo nguyên tắc thẩm mỹ
- **Copywriter**: Viết marketing copy, product descriptions, content

**Cách Agents Hoạt Động**:
1. Bạn gọi một command (ví dụ: `/cook "add feature"`)
2. Command sinh ra các agents liên quan theo sequence hoặc parallel
3. Agents cộng tác qua shared context (plans, code, test results)
4. Output được tổng hợp và trình bày cho bạn

## Commands

Slash commands kích hoạt agent workflows.

**Danh Mục**:
- **Core**: `/cook`, `/plan`, `/bootstrap`, `/ask`, `/scout`
- **Fix**: `/fix`, `/fix`, `/fix`, `/fix`
- **Design**: `ai-artist` skill, `ai-multimodal` skill, `frontend-design` skill
- **Git**: `/git cm`, `/git cp`, `/git pr`
- **Docs**: `/docs:init`, `/docs:update`, `/docs:summarize`
- **Content**: Sử dụng `copywriting` skill (quality, fast, CRO workflows)
- **Plan**: `/plan:ci`, `/plan:two`, `/plan:hard`
- **Integrate**: `/integrate:polar`, `/integrate:sepay`
- **Skill**: Sử dụng `skill-creator` skill

**Ví Dụ Workflow**:
```bash
/plan "add payment processing with Stripe"
# → Planner agent tạo kế hoạch chi tiết

/clear
Mô tả task tự nhiên → skill cook kích hoạt từ ngữ cảnh plan
# → Đọc plan, sinh developer + tester agents, triển khai tính năng

/fix
# → Debugger phân tích bất kỳ test failures nào, sửa issues

/git cm
# → Git manager stages, commits, pushes changes
```

## Skills

Modules kiến thức tái sử dụng được inject vào agent context.

**Skills Có Sẵn**:
- **Frontend**: Next.js, Tailwind, shadcn/ui
- **Backend**: PostgreSQL, Docker
- **AI**: Gemini Vision, Canvas Design
- **Auth**: Better Auth
- **Ecommerce**: Shopify
- **Tools**: FFmpeg, ImageMagick, MCP Builder

**Cách Skills Hoạt Động**:
1. Skill files được lưu trong `.claude/skills/`
2. Tự động kích hoạt dựa trên phát hiện codebase (ví dụ: phát hiện `next.config.js` → kích hoạt Next.js skill)
3. Skill cung cấp cho agent best practices, examples, gotchas
4. Agent đưa ra quyết định tốt hơn (sử dụng đúng patterns, tránh lỗi phổ biến)

**Tạo Custom Skills**:
```bash
"Create a new skill for FastAPI best practices"
# Sử dụng skill-creator skill → Tạo skill mới với structure, references, examples
```

## Cách Chúng Hoạt Động Cùng Nhau

**Ví Dụ: Thêm Authentication**

```bash
You: /cook "add authentication with Better Auth"

System:
1. Phát hiện Better Auth skill → inject vào context
2. Sinh Planner agent → tạo implementation plan
3. Planner tham chiếu Better Auth skill → sử dụng đúng setup pattern
4. Sinh Developer agent → viết code theo skill guidelines
5. Sinh Tester agent → viết tests dựa trên skill examples
6. Output: Fully implemented, tested authentication
```

## Cấu Hình CLAUDE.md

Tất cả agent behaviors, skills và workflows được cấu hình trong `.claude/CLAUDE.md`:

```markdown
# CLAUDE.md
## Agents
- planner: Tạo implementation plans
- researcher: Phân tích technical decisions

## Skills
- better-auth: Authentication framework patterns
- nextjs: Next.js App Router best practices

## Workflows
- /plan → /clear → describe task: Plan → cook skill auto-implements
- fix skill: Debug → Fix → Test → Commit
```

## Bước Tiếp Theo

- **[Cài Đặt](/vi/docs/getting-started/installation)** - Cài đặt ClaudeKit
- **[Bắt Đầu Nhanh](/vi/docs/getting-started/quick-start)** - Thử command đầu tiên
- **[Tham Chiếu Commands](/vi/docs/commands)** - Khám phá tất cả commands
- **[Tham Chiếu Agents](/vi/docs/agents)** - Tìm hiểu về từng agent
