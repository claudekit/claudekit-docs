---
title: "Find Skills"
description: "Khám phá và cài đặt agent skills từ open skills ecosystem"
section: engineer
kit: engineer
category: skills
order: 26
lang: vi
---

Gateway của bạn đến open agent skills ecosystem. Search, discover và install specialized capabilities cho bất kỳ domain nào.

## Skill Này Làm Gì

Find Skills skill kết nối bạn đến Skills CLI package manager, index hàng trăm community-contributed skills cho design, testing, deployment và nhiều hơn nữa. Thay vì build mọi thứ from scratch, discover existing skills extend ClaudeKit's capabilities.

Hãy nghĩ về nó như npm cho AI agent skills—search by keyword, preview những gì mỗi skill làm và install với single command.

## Khi Nào Kích Hoạt

Skill này kích hoạt khi bạn:
- Hỏi "làm thế nào tôi làm X" khi X có thể có existing skill
- Nói "tìm skill cho X" hoặc "có skill cho X không"
- Hỏi "bạn có thể làm X" cho specialized capabilities
- Express interest trong extending agent capabilities
- Muốn search cho tools, templates hoặc workflows
- Đề cập wish cho help với specific domains

## Khả Năng Cốt Lõi

- Search skills interactively hoặc by keyword
- Install skills từ GitHub hoặc sources khác
- Check cho skill updates
- Update tất cả installed skills
- Browse skills catalog tại https://skills.sh/

## Sử Dụng

Kích hoạt bằng cách hỏi về available skills hoặc capabilities.

## Câu Lệnh Mẫu

- "Làm thế nào tôi làm cho React app của tôi nhanh hơn?"
- "Tìm skill cho PR reviews"
- "Có skill cho creating changelogs không?"
- "Bạn có thể giúp với accessibility testing?"
- "Những skills nào available cho Next.js development?"

## Quick Commands

```bash
# Search cho skills
npx skills find [query]

# Install skill
npx skills add <package>

# Check cho updates
npx skills check

# Update tất cả skills
npx skills update
```

## Common Skill Categories

| Category | Example Queries |
|----------|-----------------|
| Web Development | react, nextjs, typescript, css, tailwind |
| Testing | testing, jest, playwright, e2e |
| DevOps | deploy, docker, kubernetes, ci-cd |
| Documentation | docs, readme, changelog, api-docs |
| Code Quality | review, lint, refactor, best-practices |
| Design | ui, ux, design-system, accessibility |
| Productivity | workflow, automation, git |

## Cách Nó Hoạt Động

1. Bạn hỏi về capability
2. ClaudeKit searches skills ecosystem
3. Presents relevant skills với install commands
4. Offers to install cho bạn với `-g -y` flags
5. Skill trở nên available ngay lập tức

## Khi Không Tìm Thấy Skills

Nếu không có relevant skills tồn tại, ClaudeKit sẽ:
1. Acknowledge không tìm thấy existing skill
2. Offer để help trực tiếp dùng general capabilities
3. Suggest tạo skill riêng của bạn với `npx skills init`

## Related Resources

- Browse skills: https://skills.sh/
- Popular sources: `vercel-labs/agent-skills`, `ComposioHQ/awesome-claude-skills`
