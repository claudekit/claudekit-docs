---
title: "ck:find-skills"
description: "Khám phá và cài đặt agent skills từ hệ sinh thái skills mở"
section: engineer
kit: engineer
category: skills
order: 50
lang: vi
---

Cổng vào hệ sinh thái open agent skills. Tìm kiếm, khám phá và cài đặt các khả năng chuyên biệt cho bất kỳ lĩnh vực nào.

## Skill Này Làm Gì

Skill Find Skills kết nối bạn với Skills CLI package manager, lập chỉ mục hàng trăm community-contributed skills cho design, testing, deployment và nhiều hơn nữa. Thay vì xây dựng mọi thứ từ đầu, hãy khám phá các skills hiện có mở rộng khả năng của ClaudeKit.

Hãy nghĩ về nó như npm cho AI agent skills — tìm kiếm theo keyword, xem trước mỗi skill làm gì và cài đặt bằng một lệnh duy nhất.

## Khi Nào Kích Hoạt

Skill này kích hoạt khi bạn:
- Hỏi "làm thế nào tôi làm X" khi X có thể có skill hiện có
- Nói "tìm skill cho X" hoặc "có skill cho X không"
- Hỏi "bạn có thể làm X không" cho các khả năng chuyên biệt
- Bày tỏ quan tâm đến việc mở rộng khả năng agent
- Muốn tìm kiếm tools, templates hoặc workflows
- Đề cập mong muốn được trợ giúp với các lĩnh vực cụ thể

## Khả Năng Cốt Lõi

- Tìm kiếm skills tương tác hoặc theo keyword
- Cài đặt skills từ GitHub hoặc các nguồn khác
- Kiểm tra skill updates
- Cập nhật tất cả skills đã cài đặt
- Duyệt skills catalog tại https://skills.sh/

## Sử Dụng

Kích hoạt bằng cách hỏi về các skills hoặc khả năng có sẵn.

## Câu Lệnh Mẫu

- "Làm thế nào tôi làm React app của mình nhanh hơn?"
- "Tìm skill cho PR reviews"
- "Có skill để tạo changelogs không?"
- "Bạn có thể giúp với accessibility testing không?"
- "Có skills nào cho Next.js development không?"

## Quick Commands

```bash
# Tìm kiếm skills
npx skills find [query]

# Cài đặt skill
npx skills add <package>

# Kiểm tra updates
npx skills check

# Cập nhật tất cả skills
npx skills update
```

## Danh Mục Skill Phổ Biến

| Danh Mục | Ví Dụ Queries |
|----------|--------------|
| Web Development | react, nextjs, typescript, css, tailwind |
| Testing | testing, jest, playwright, e2e |
| DevOps | deploy, docker, kubernetes, ci-cd |
| Documentation | docs, readme, changelog, api-docs |
| Code Quality | review, lint, refactor, best-practices |
| Design | ui, ux, design-system, accessibility |
| Productivity | workflow, automation, git |

## Cách Hoạt Động

1. Bạn hỏi về một khả năng
2. ClaudeKit tìm kiếm hệ sinh thái skills
3. Trình bày các skills liên quan với install commands
4. Đề xuất cài đặt cho bạn với flags `-g -y`
5. Skill trở nên khả dụng ngay lập tức

## Khi Không Tìm Thấy Skills

Nếu không có skills liên quan, ClaudeKit sẽ:
1. Thừa nhận không tìm thấy skill hiện có
2. Đề xuất trợ giúp trực tiếp sử dụng general capabilities
3. Gợi ý tạo skill của riêng bạn với `npx skills init`

## Tài Nguyên Liên Quan

- Duyệt skills: https://skills.sh/
- Nguồn phổ biến: `vercel-labs/agent-skills`, `ComposioHQ/awesome-claude-skills`
