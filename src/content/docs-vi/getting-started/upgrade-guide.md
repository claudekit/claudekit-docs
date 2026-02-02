---
title: "Hướng Dẫn Nâng Cấp Cho Người Dùng Claude Code"
description: "Di chuyển từ Claude Code sang ClaudeKit một cách liền mạch"
lang: vi
section: getting-started
order: 3
published: true
---

# Nâng Cấp từ Claude Code sang ClaudeKit

Đã sử dụng Claude Code? ClaudeKit nâng cao workflow của bạn mà không phá vỡ thói quen hiện có.

## Điều Gì Thay Đổi?

**Giữ Nguyên**:
- Claude Code CLI và interface
- Cấu trúc project hiện có
- Thư mục .claude/ (được mở rộng, không thay thế)
- Tương tác dựa trên chat

**Khả Năng Mới**:
- Slash commands cho các tác vụ phổ biến
- Agents chuyên biệt (planner, tester, debugger)
- Thư viện skills tái sử dụng
- Cộng tác multi-agent

## Cài Đặt (Bổ Sung)

```bash
# Cài đặt ClaudeKit CLI (không thay thế Claude Code)
npm install -g claudekit-cli

# Khởi tạo trong project hiện có
ck init
# → Thêm .claude/CLAUDE.md, skills/, workflows/
# → .claude/commands/ hiện có được bảo toàn
```

### Nâng Cấp ClaudeKit

```bash
# Khuyến nghị: Sử dụng lệnh update tích hợp
ck update

# Thay thế: npm global update
npm install -g claudekit-cli@latest
```

## Lộ Trình Di Chuyển Dần Dần

### Tuần 1: Thử Core Commands

Bắt đầu với `/cook` cho feature development:
```bash
# Cách cũ
You: "I need to add a new API endpoint for user profiles"
[Cuộc trò chuyện dài với hướng dẫn thủ công]

# Cách ClaudeKit
/cook "add user profiles API endpoint"
[Planning, development, testing tự động]
```

### Tuần 2: Sử Dụng Specialized Workflows

Áp dụng commands cụ thể cho từng task:
- `/fix` cho bug fixing (nhanh hơn debugging thủ công)
- `/plan` cho tính năng phức tạp (planning có cấu trúc)
- `/docs:update` cho documentation (đồng bộ tự động)

### Tuần 3: Tận Dụng Skills

Thêm custom skills cho stack của bạn sử dụng skill-creator skill:
```bash
"Create a new skill for our GraphQL conventions"
# → Agents học các patterns của team bạn
```

### Tuần 4: Full Workflow Integration

Kết hợp commands cho complete workflows:
```bash
/plan "redesign checkout flow"
/clear  # Giải phóng context trước khi triển khai
/cook "Redesign checkout flow as planned"
/frontend-design "checkout UI mockup"
/fix
/git pr "feature/new-checkout"
```

## Tương Thích

**Được Hỗ Trợ**:
- Claude Code v1.0+
- .claude/commands/ hiện có (hoàn toàn tương thích)
- Custom prompts (vẫn hoạt động như cũ)

**Không Được Hỗ Trợ**:
- Claude Desktop app (chỉ Claude Code CLI)
- Projects không có Git (ClaudeKit yêu cầu version control)

## FAQs

**Q: Tôi có cần viết lại commands hiện có không?**
A: Không. ClaudeKit commands cùng tồn tại với custom .claude/commands/ của bạn

**Q: Tôi vẫn có thể sử dụng chat thông thường không?**
A: Có. ClaudeKit thêm slash commands, không loại bỏ chat.

**Q: Nếu tôi không thích ClaudeKit thì sao?**
A: Gỡ cài đặt và xóa .claude/CLAUDE.md. Không có breaking changes.

## Bước Tiếp Theo

1. [Cài Đặt ClaudeKit](/vi/docs/getting-started/installation)
2. [Thử Bắt Đầu Nhanh](/vi/docs/getting-started/quick-start)
3. [Khám Phá Commands](/vi/docs/engineer/commands)
