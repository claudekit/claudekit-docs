---
lang: vi
title: "/git"
description: "Tạo pull requests với so sánh branch tự động, conventional commit messages, và GitHub CLI integration"
section: marketing
category: commands
order: 21
published: true
---

> Tạo PR với commit messages hoàn hảo

## Bắt Đầu Nhanh

```bash
/git pr
```

**Điều gì sẽ xảy ra**:
1. Đảm bảo remote được đồng bộ
2. So sánh REMOTE branches (không phải local)
3. Phân tích nội dung PR thực tế
4. Tạo tiêu đề conventional commit
5. Tạo PR via GitHub CLI

**Kết Quả**: GitHub PR URL

## Cú Pháp

```bash
/git pr [to-branch] [from-branch]
```

### Đối Số

| Đối Số | Mô Tả | Default |
|----------|-------------|---------|
| `to-branch` | Target branch | `main` |
| `from-branch` | Source branch | Current branch |

## Ví Dụ

**Đầu vào**:
```bash
/git pr main feature/email-campaigns
```

**Quá trình**:
```markdown
✓ Fetching remote branches...
✓ Pushing feature/email-campaigns to remote...

Analyzing remote diff: origin/main...origin/feature/email-campaigns

Commits (3):
- Add email campaign creation API
- Implement campaign scheduler
- Add campaign analytics dashboard

Files changed (12):
+1,247 lines, -89 lines

Key changes:
- lib/email/campaign.ts (new file)
- lib/email/scheduler.ts (new file)
- app/api/campaigns/route.ts (modified)
- components/CampaignDashboard.tsx (new file)
[... 8 more files]

Generating PR content...

Title: feat(email): add email campaign system with analytics

Body:
## Summary
- Email campaign creation and scheduling
- Trigger-based automation
- Real-time analytics dashboard

## Technical Changes
- Added campaign API endpoints
- Implemented scheduling engine
- Created analytics dashboard component
- Added 12 test cases

## Testing
✓ All tests passing (101/101)
✓ Type-safe
✓ Code reviewed

---

Creating PR...
✓ PR created: https://github.com/yourorg/yourrepo/pull/42

Next: Review PR and merge when ready
```

## Quan Trọng: Remote Comparison

**Luôn so sánh REMOTE branches**, không phải local:

**Đúng**:
```bash
git diff origin/main...origin/feature-branch
```

**Sai** (bao gồm local changes chưa push):
```bash
git diff main...HEAD
git diff --cached
git status
```

## Tích Hợp Quy Trình Làm Việc

### Sau Implementation

```bash
/code plans/feature.md
# Implementation complete
/git pr  # Create PR
```

### Sau /cook

```bash
/cook add feature
# User approves
/git pr  # Create PR
```

### Custom Branch Flow

```bash
/git pr dev  # PR to dev branch
/git pr main feature/auth  # Specific branches
```

## Yêu Cầu

### GitHub CLI

Phải cài đặt `gh` CLI và được phép hóa:

```bash
# Install (macOS)
brew install gh

# Install (Linux)
sudo apt install gh

# Authorize
gh auth login
```

Nếu `gh` không có sẵn, hướng dẫn người dùng cài đặt.

## Conventional Commits

Tự động tạo tiêu đề theo quy ước:

| Loại | Ví Dụ | Khi |
|------|---------|------|
| `feat` | feat(auth): add OAuth support | New feature |
| `fix` | fix(email): resolve send timeout | Bug fix |
| `docs` | docs: update API documentation | Documentation only |
| `refactor` | refactor(db): optimize queries | Code restructure |
| `test` | test(api): add integration tests | Test addition |
| `chore` | chore: update dependencies | Maintenance |

## Lệnh Liên Quan

- [/code](/docs/marketing/commands/code) - Auto-commits after implementation
- [/cook](/docs/marketing/commands/cook) - Includes git commit
- [/git:cm](/docs/marketing/commands/git) - Commit only (no PR)

---

**Perfect PRs. Every time.** Conventional commit messages tự động tuân theo quy ước.
