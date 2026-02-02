---
title: Repomix Skill
description: Package repositories thành AI-friendly files với customizable patterns, token counting và security checks
section: engineer
kit: engineer
category: skills/tools
order: 13
published: true
lang: vi
---

# Repomix Skill

Package entire repositories thành single AI-friendly files được tối ưu cho LLM context.

## Khi Nào Sử Dụng

- Packaging codebases cho AI analysis hoặc code review
- Analyzing third-party libraries trước integration
- Tạo repository snapshots với token management
- Chuẩn bị security audit contexts với sensitive data filtering

## Khả Năng Chính

| Capability | Mô Tả |
|------------|-------|
| **Multiple Formats** | XML, Markdown, JSON, Plain text output |
| **Token Counting** | Automatic counting với per-file/directory breakdown |
| **Remote Support** | Package GitHub repos mà không clone |
| **Comment Stripping** | Remove comments từ 20+ languages |
| **Security Checks** | Secretlint integration cho API keys, passwords, credentials |
| **Git Integration** | Respects .gitignore patterns |

## Common Use Cases

### Code Review Prep
**Ai**: Senior developer chuẩn bị feature branch
```
"Package src/auth module với type definitions cho code review. Remove comments, output là markdown."
```

### Security Audit
**Ai**: Security engineer đánh giá third-party library
```
"Package owner/suspicious-library repo từ GitHub. Bao gồm security check cho credentials và API keys."
```

### Bug Investigation
**Ai**: Backend developer debugging auth flow
```
"Package src/auth và src/api directories với tất cả TypeScript files. Bao gồm token count tree để see largest files."
```

### Documentation Context
**Ai**: Tech writer generating API reference
```
"Package src directory và tất cả markdown files. Output là single markdown file với file structure preserved."
```

### Token Optimization
**Ai**: AI engineer managing LLM context limits
```
"Hiển thị token count tree cho repo này. Focus trên directories trên 1000 tokens. Help me decide cái gì include."
```

## Quick Reference

### Basic Commands
```bash
# Package current directory (generates repomix-output.xml)
repomix

# Specify output format
repomix --style markdown
repomix --style json

# Package remote repository
npx repomix --remote owner/repo

# Custom output với filters
repomix --include "src/**/*.ts" --remove-comments -o output.md
```

### File Selection
```bash
# Include patterns
repomix --include "src/**/*.ts,*.md"

# Ignore patterns
repomix -i "tests/**,*.test.js"

# Disable .gitignore rules
repomix --no-gitignore
```

### Output Options
```bash
# Output format: markdown, xml, json, plain
repomix --style markdown -o output.md

# Remove comments
repomix --remove-comments

# Copy to clipboard
repomix --copy
```

### Token Management
```bash
# Hiển thị token count tree
repomix --token-count-tree

# Hiển thị chỉ 1000+ token files
repomix --token-count-tree 1000
```

**LLM Context Limits:**
- Claude Sonnet 4.5: ~200K tokens
- GPT-4: ~128K tokens
- GPT-3.5: ~16K tokens

## Pro Tips

- **Review output trước sharing** - Luôn check cho hardcoded secrets
- **Dùng .repomixignore** - Thêm sensitive file patterns
- **Token count trước** - Chạy `--token-count-tree` để optimize includes
- **Disable security checks** - Dùng `--no-security-check` cho known-safe repos
- **Không kích hoạt?** Nói: "Use repomix skill to package this repo for AI analysis"

## Skills Liên Quan

- [Code Review](/docs/engineer/skills/code-review) - AI-powered code analysis
- [Research](/docs/engineer/skills/research) - Investigate unfamiliar codebases
- [Debugging](/docs/engineer/skills/debug) - Systematic bug isolation

## Key Takeaway

Repomix packages repositories thành LLM-ready files với token counting, security checks và format flexibility. Essential để chuẩn bị large codebases cho AI consumption.
