---
title: Bắt Đầu Nhanh
description: "Documentation for Bắt Đầu Nhanh
description:
section: getting-started
category: getting-started
order: 4
published: true"
section: getting-started
category: getting-started
order: 4
published: true
---

# Bắt Đầu Nhanh

Ship tính năng production trong 15 phút. Không cần boilerplate, không cần thiết lập phức tạp.

## Yêu Cầu

- ClaudeKit CLI đã cài đặt (`ck --version` hoạt động)
- Claude Code đang chạy
- Dự án đã khởi tạo với ClaudeKit

**Chưa có những điều này?** Xem [Hướng Dẫn Cài Đặt](/docs/getting-started/installation)

## Tính Năng Đầu Tiên

Thêm xác thực người dùng vào ứng dụng Next.js trong 15 phút.

### Bước 1: Bootstrap Dự Án

```bash
ck new my-app --kit engineer
cd my-app
```

**Đã tạo**:
- `.claude/` - 14 AI agents, 30+ lệnh, 45 skills
- `docs/` - Docs dự án tự động tạo
- `plans/` - Lưu trữ kế hoạch triển khai

### Bước 2: Lập Kế Hoạch Xác Thực

```bash
/plan add user authentication with email/password and OAuth
```

**Điều gì xảy ra** (30 giây):
1. `planner` agent spawn 3 `researcher` agents chạy song song
2. Nghiên cứu best practices Next.js 15 + Better Auth
3. Phân tích cấu trúc codebase của bạn
4. Tạo kế hoạch triển khai chi tiết

**Đầu ra**:
```
✓ planner: Nghiên cứu hoàn tất (3 nguồn được phân tích)
✓ planner: Kế hoạch đã tạo

📄 plans/251030-auth-implementation.md

Tóm tắt:
• Better Auth với credentials + OAuth (Google, GitHub)
• Quản lý session với JWT
• Trang login/signup/reset
• Middleware protected routes
• Files cần tạo: 8
• Files cần sửa: 4
• Tests: 12 test cases
• Ước tính: 2 giờ thủ công, 5 phút với ClaudeKit

Tiếp theo: /code plans/251030-auth-implementation.md
```

### Bước 3: Xem Lại Kế Hoạch

```bash
cat plans/251030-auth-implementation.md
```

Quét qua kế hoạch. Kiến trúc vững chắc? Tiếp tục.

### Bước 4: Triển Khai

```bash
/cook implement the auth plan
```

**Điều gì xảy ra** (5 phút):

**Làm rõ** (15 giây):
```
cook: OAuth providers nào?
Bạn: Google và GitHub
```

**Triển khai** (4 phút):
1. Cài đặt `better-auth` + dependencies
2. Tạo auth config với providers
3. Tạo trang login/signup/reset với shadcn/ui
4. Thêm API routes
5. Triển khai middleware cho protected routes
6. Viết 12 test cases
7. Cập nhật tài liệu

**Đầu ra thời gian thực**:
```
✓ Đang cài đặt dependencies... (15s)
✓ Tạo auth.ts config
✓ Tạo UI components
  • app/login/page.tsx (Google OAuth button)
  • app/signup/page.tsx (Email + OAuth)
  • app/reset-password/page.tsx
✓ Tạo API routes
  • app/api/auth/[...all]/route.ts
✓ Thêm middleware.ts (protect /dashboard/*)
✓ Viết tests (12 cases)
✓ Cập nhật docs/system-architecture.md

tester: Chạy test suite...
✓ Unit tests: 45 passed
✓ Auth tests: 12 passed
✓ Coverage: 89%

code-reviewer: Kiểm tra chất lượng...
✓ Không có vấn đề bảo mật
✓ Type-safe (0 lỗi)
✓ Hiệu suất: Nhanh (< 100ms auth check)

✓ Triển khai hoàn tất (4m 32s)
```

### Bước 5: Xem Hoạt Động

```bash
npm run dev
```

Truy cập:
- `http://localhost:3000/login` - Đăng nhập với email hoặc OAuth
- `http://localhost:3000/signup` - Tạo tài khoản
- `http://localhost:3000/dashboard` - Protected route (redirect nếu chưa đăng nhập)

**Thử nghiệm**:
1. Đăng ký với email
2. Đăng nhập chuyển hướng đến dashboard
3. Đăng xuất, thử OAuth với Google
4. Kiểm tra session persistence

### Bước 6: Commit

```bash
/git:cm
```

**Đầu ra**:
```
git-manager: Phân tích thay đổi...
✓ Staged: 12 files
✓ Quét bí mật: Sạch
✓ Commit message đã tạo

feat(auth): add Better Auth with email and OAuth

- Add Better Auth configuration
- Implement login/signup/reset pages
- Add Google and GitHub OAuth
- Protect routes with middleware
- Add 12 auth test cases
- Update documentation

✓ Committed: abc1234
✓ Pushed to origin/main

Hoàn tất!
```

## Chuyện Gì Vừa Xảy Ra?

**Cách tiếp cận truyền thống** (8-12 giờ):
1. Nghiên cứu thư viện auth (1h)
2. Đọc tài liệu (1h)
3. Thiết lập cấu hình (1h)
4. Xây dựng UI components (3h)
5. Triển khai OAuth flows (2h)
6. Viết tests (1h)
7. Debug issues (1h)
8. Tài liệu (30 phút)

**Cách tiếp cận ClaudeKit** (6 phút):
1. Lập kế hoạch: AI nghiên cứu, phân tích, thiết kế (30s)
2. Triển khai: AI code, test, tài liệu (4m)
3. Review: AI xác thực bảo mật, hiệu suất (30s)
4. Commit: AI tạo commit chuyên nghiệp (30s)

**Thời gian tiết kiệm**: 8-12 giờ → **~800% nhanh hơn**

## Tại Sao Hoạt Động

### 14 Agents Chuyên Biệt
- **planner**: Tạo kế hoạch triển khai
- **researcher**: Tìm best practices (3 chạy song song)
- **tester**: Xác thực mọi thứ hoạt động
- **code-reviewer**: Kiểm tra bảo mật + hiệu suất
- **git-manager**: Commits chuyên nghiệp
- **docs-manager**: Giữ docs cập nhật
- ...và 8 agents khác

### 45 Skills Tích Hợp
- **better-auth**: Chuyên môn triển khai auth
- **shadcn-ui**: UI components đã cấu hình sẵn
- **nextjs**: Best practices Next.js 15
- **gemini-image-gen**: Tạo logos, assets
- ...và 41 skills khác

### Hệ Thống Sống

- Cập nhật với cải tiến của Claude
- Không bị khóa tech stack
- Học các pattern của bạn
- Ngày càng thông minh theo thời gian

## Tiếp Theo: Công Việc Thực Tế

Thử các tính năng phức tạp hơn:

```bash
# Thêm xử lý thanh toán (Stripe + webhooks)
/cook add Stripe payment with subscriptions and webhooks

# Xây dựng REST API với validation
/cook create REST API for blog posts with Zod validation

# Triển khai chat real-time
/cook add real-time chat using WebSockets

# Database migrations
/cook migrate from SQLite to PostgreSQL with zero downtime
```

Mỗi cái mất 5-20 phút thay vì nhiều ngày.

## Học Workflows

### Chu Trình Tính Năng Đầy Đủ
```bash
/plan [feature]           # Nghiên cứu + lập kế hoạch
/code [plan]              # Triển khai
/test                     # Xác thực
/fix:fast [issue]         # Sửa nhanh
/git:cm                   # Commit
```

### Debug + Sửa
```bash
/debug [issue]            # Phân tích nguyên nhân gốc rễ
/fix:hard [complex-issue] # Sửa đa agent
/fix:ci [actions-url]     # Sửa CI/CD lỗi
```

### Thiết Kế + Nội Dung
```bash
/design:good [feature]    # Thiết kế UI/UX
/content:good [page]      # Nội dung marketing
/brainstorm [idea]        # Khám phá giải pháp
```

## Câu Hỏi Thường Gặp

**Q: Có hoạt động với tech stack của tôi không?**
A: Có. Next.js, Django, Laravel, Go, Rust, Flutter - bất kỳ stack nào. ClaudeKit thích ứng với các pattern của bạn.

**Q: Nếu AI mắc lỗi thì sao?**
A: `code-reviewer` phát hiện vấn đề trước khi commit. Thêm vào đó, bạn review PRs như bình thường. AI tăng cường, không thay thế phán đoán.

**Q: Tôi có cần API keys không?**
A: Với các tính năng cơ bản, không. Với skills nâng cao (Gemini, Search), có. Xem [Thiết Lập API Key](/docs/troubleshooting/api-key-setup).

**Q: Tôi có thể tùy chỉnh agents không?**
A: Có. Sửa `.claude/agents/*.md` để điều chỉnh hành vi. Xem [Custom Agents](/docs/hooks/custom-agents).

## Khám Phá Thêm

**Khái Niệm Cốt Lõi**:
- [Kiến Trúc](/docs/core-concepts/architecture) - Cách ClaudeKit hoạt động
- [Tổng Quan Agents](/docs/agents/) - Gặp gỡ đội ngũ AI
- [Hướng Dẫn Commands](/docs/commands/) - Tất cả 30+ lệnh

**Sử Dụng Thực Tế**:
- [Bắt Đầu Dự Án Mới](/docs/use-cases/starting-new-project)
- [Thêm Tính Năng](/docs/use-cases/adding-feature)
- [Sửa Bugs](/docs/use-cases/fixing-bugs)

**Khắc Phục Sự Cố**:
- [Vấn Đề Cài Đặt](/docs/troubleshooting/installation-issues)
- [Lỗi Lệnh](/docs/troubleshooting/command-errors)
- [Vấn Đề Hiệu Suất](/docs/troubleshooting/performance-issues)

---

**Bạn vừa ship production auth trong 6 phút.** Boilerplates không thể làm được. AI chat assistants không thể làm được. Chỉ ClaudeKit.

**Sẵn sàng ship?** Đội ngũ AI dev của bạn đang chờ.
