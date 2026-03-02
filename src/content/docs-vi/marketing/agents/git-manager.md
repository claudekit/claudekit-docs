---
title: "Git Manager Agent"
lang: vi
description: "Stage, commit và push thay đổi code với conventional commits gọn gàng và tính năng tách commit thông minh."
section: marketing
category: agents
order: 4
---

# Git Manager Agent

> **Chuyên gia quản lý phiên bản của bạn** - Commit gọn gàng, lịch sử rõ ràng, không phiền phức

## Agent Này Làm Gì

Bạn đã thay đổi 15 file—một số là docs, một số là dependencies, một số là tính năng, một số là bugfix. Bạn gõ `git add .` và `git commit -m "updates"`. Sáu tháng sau, ai đó hỏi "Tại sao chúng ta lại thay đổi cái này?" Commit message của bạn: "updates." Không hữu ích chút nào.

**Vấn đề**: Commit message tệ tạo ra lịch sử git không dùng được. Trộn lẫn các thay đổi không liên quan trong một commit khiến việc hiểu điều gì đã thay đổi hay tại sao trở nên bất khả thi. Tự tạo commit tốt cho mọi thay đổi thì tẻ nhạt và dễ sai.

**Giải pháp**: Git Manager Agent thông minh stage, tách và commit các thay đổi của bạn với các commit message conventional mô tả rõ ràng. Nó phát hiện secret trước khi commit, tách các thay đổi hỗn hợp thành các commit logic, và duy trì lịch sử git sạch thực sự giúp ích cho các developer trong tương lai.

## Bắt Đầu Nhanh

Commit công việc của bạn với một lệnh:

```bash
# Phân tích thay đổi, tạo commit, tùy chọn push
/commit "and push"
```

Agent stage file, kiểm tra secret, tách các thay đổi không liên quan, tạo commit message mô tả và xử lý mọi thứ tự động.

## Khả Năng

### Phân Tích Thay Đổi Thông Minh
Quét và phân loại các thay đổi của bạn:
- Phát hiện loại file (code, tests, docs, config, deps)
- Xác định nhiều scope (auth, payments, v.v.)
- Đếm số dòng thay đổi và file được sửa đổi
- Phân loại theo loại thay đổi (feat, fix, chore, docs)
- Xác định xem có nên tách các thay đổi hay không

### Phát Hiện Secret
Ngăn chặn việc vô tình commit thông tin xác thực:
- Quét API key, token, mật khẩu
- Phát hiện các pattern như `secret`, `private_key`, `credential`
- Chặn commit chứa dữ liệu nhạy cảm
- Hiển thị các pattern khớp với context
- Gợi ý thêm file vào `.gitignore`

### Tách Commit Tự Động
Tạo các commit logic, tập trung:
- Tách các loại hỗn hợp (feat + docs + deps)
- Phân tách các scope khác nhau (frontend + backend)
- Nhóm các thay đổi liên quan lại với nhau
- Duy trì commit đơn cho các thay đổi nhỏ, tập trung
- Không bao giờ trộn config với tính năng hoặc deps với code

### Commit Message Conventional
Tạo message chuẩn hóa, mô tả rõ ràng:
- Theo format conventional commit: `type(scope): description`
- Sử dụng Gemini AI cho các thay đổi phức tạp
- Dự phòng sang tạo dựa trên pattern
- Giữ message dưới 72 ký tự
- Tập trung vào CÁI GÌ thay đổi, không phải THẾ NÀO
- Không bao giờ bao gồm thông tin về AI

### Tạo Pull Request
Tạo PR với context đầy đủ:
- Sử dụng diff remote branch (không phải thay đổi uncommitted local)
- Tạo tiêu đề PR từ commit message
- Tạo nội dung PR có cấu trúc với tóm tắt và kế hoạch test
- Push branch và tạo PR trong một luồng
- Xử lý đồng bộ hóa branch và phát hiện xung đột

## Khi Nào Nên Dùng

Sử dụng Git Manager Agent khi bạn cần:
- Commit thay đổi với message mô tả rõ ràng
- Push lên remote repository
- Tạo pull request
- Tách các thay đổi hỗn hợp thành các commit logic
- Xác minh không có secret nào được commit
- Duy trì lịch sử git gọn gàng

## Workflow Mẫu

### Commit và Push Đơn Giản

```bash
# Sau khi hoàn thành một tính năng
/commit "and push"
```

**Agent sẽ**:
1. Stage tất cả thay đổi
2. Kiểm tra secret (chặn nếu tìm thấy)
3. Phân tích độ phức tạp thay đổi
4. Tạo commit message phù hợp
5. Tạo commit
6. Push lên remote

### Tách Commit Thông Minh

```bash
# Bạn đã thay đổi: package.json, tài liệu API, tính năng auth
/commit
```

**Agent sẽ**:
1. Phát hiện thay đổi hỗn hợp (deps + docs + code)
2. Tách thành 3 commit logic:
   - `chore(deps): update axios to 1.6.0`
   - `docs: update API authentication guide`
   - `feat(auth): add JWT token refresh`
3. Commit từng cái riêng biệt
4. Giữ lịch sử git gọn gàng và logic

### Tạo Pull Request

```bash
# Sau khi push feature branch
/pr "to main"
```

**Agent sẽ**:
1. Fetch trạng thái remote mới nhất
2. Push branch nếu cần
3. Phân tích commit trong branch (so với main)
4. Tạo tiêu đề và nội dung PR
5. Tạo PR với `gh pr create`
6. Trả về URL PR

## Tiêu Chuẩn Commit Message

### Format
```
type(scope): description

Types:
- feat: Tính năng hoặc khả năng mới
- fix: Sửa bug
- docs: Chỉ thay đổi tài liệu
- style: Style/format code
- refactor: Tái cấu trúc code không thay đổi hành vi
- test: Thêm hoặc cập nhật test
- chore: Bảo trì, deps, config
- perf: Cải thiện hiệu suất
- build: Thay đổi hệ thống build
- ci: Thay đổi CI/CD pipeline
```

### Quy Tắc
- Dưới 72 ký tự
- Thì hiện tại, thể mệnh lệnh ("add feature" không phải "added")
- Không có dấu chấm ở cuối
- Tập trung vào CÁI GÌ, không phải THẾ NÀO
- Ngắn gọn nhưng mô tả rõ

### Ví Dụ Tốt
- `feat(webhooks): add signature verification`
- `fix(api): resolve timeout in campaign queries`
- `docs(readme): update deployment instructions`
- `refactor(email): simplify template rendering`

### Ví Dụ Tệ
- `Updated some files` (không mô tả)
- `feat: added user login using bcrypt with 10 salt rounds` (quá dài, mô tả THẾ NÀO)
- `Fix bug` (không cụ thể)

## Các Pattern Phát Hiện Secret

Agent chặn commit chứa:
- `api_key`, `api-key`, `apiKey`
- `token`, `access_token`
- `password`, `passwd`
- `secret`, `client_secret`
- `private_key`, `privateKey`
- `credential`, `credentials`

Nếu phát hiện, bạn sẽ thấy:
```
❌ Secrets found in: src/config/keys.ts
Line 12:   const API_KEY = "sk_live_abc123def..."
Action: Add keys.ts to .gitignore
```

## Thực Hành Tốt Nhất Cho Pull Request

**Remote Diff, Không Phải Local**: PR so sánh remote branch, vì vậy agent sử dụng:
```bash
# Đúng (so sánh remote)
git diff origin/main...origin/feature

# Sai (bao gồm thay đổi uncommitted)
git diff main...HEAD
```

**Checklist Trước Khi Tạo PR**:
1. Fetch mới nhất: `git fetch origin`
2. Push branch: `git push -u origin HEAD`
3. Đồng bộ với base: `git merge origin/main`
4. Xác minh diff khớp với thay đổi mong đợi

## Hiệu Suất

Workflow tối ưu token:
- 2-3 tool call cho commit đơn giản
- 3-4 tool call cho commit được tách
- Giảm chi phí 81% so với cách tiếp cận thông thường
- 10-15 giây cho commit đơn
- 15-25 giây cho multi-commit

## Agent Liên Quan

- [Docs Manager](/vi/docs/marketing/agents/docs-manager) - Commit thay đổi tài liệu
- [Project Manager](/vi/docs/marketing/agents/project-manager) - Theo dõi thay đổi đã commit
- [Tester](/vi/docs/marketing/agents/tester) - Chạy test trước khi commit

## Lệnh Liên Quan

- [`/commit`](/vi/docs/marketing/skills) - Tạo và push commit
- [`/pr`](/vi/docs/marketing/skills) - Tạo pull request

## Mẹo

**Commit Sớm, Commit Thường Xuyên**: Các commit nhỏ, tập trung dễ review hơn và dễ revert hơn khi cần. Đừng gộp nhiều ngày làm việc vào một commit.

**Tin Tưởng Vào Tính Năng Tách**: Nếu agent gợi ý tách thay đổi của bạn, đó là vì chúng độc lập về mặt logic. Điều này làm lịch sử git hữu ích hơn.

**Review Trước Khi Push**: Agent hiển thị những gì nó đã stage và sẽ commit. Liếc nhìn diff để phát hiện bất cứ điều gì bất ngờ.

**Dùng Conventional Commits**: Format này không chỉ là hình thức—nó cho phép tự động tạo changelog, semantic versioning và lọc git log tốt hơn.

## Tại Sao Điều Này Quan Trọng

Lịch sử git không chỉ là hồ sơ—đó là tài liệu:
- Các developer tương lai dùng `git log` để hiểu sự tiến hóa
- Commit gọn gàng giúp debug dễ hơn (`git bisect`)
- Message tốt giúp ích cho việc code review
- Dự án chuyên nghiệp có lịch sử chuyên nghiệp

Git Manager giúp việc duy trì lịch sử git chất lượng cao trở nên dễ dàng.
