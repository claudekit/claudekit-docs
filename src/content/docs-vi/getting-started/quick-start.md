---
title: Bắt Đầu Nhanh
description: "Tài liệu hướng dẫn Bắt Đầu Nhanh cho ClaudeKit - triển khai tính năng chỉ trong 15 phút."
lang: vi
section: getting-started
category: getting-started
order: 4
published: true
---

# Bắt Đầu Nhanh

Triển khai tính năng production trong 15 phút. Không cần boilerplate, không cần thiết lập phức tạp.

## Video Demo

Xem ClaudeKit hoạt động - từ lúc cài đặt đến khi xây dựng giao diện người dùng từ một ảnh chụp màn hình:

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 0.75rem; border: 1px solid var(--color-border); margin-bottom: 1rem;">
  <iframe
    src="https://www.youtube.com/embed/F_E0GIi_kVY"
    title="ClaudeKit Quick Start Demo"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen>
  </iframe>
</div>

*Xem thêm hướng dẫn: [@goonnguyen](https://www.youtube.com/@goonnguyen) | X: [@goon_nguyen](https://x.com/goon_nguyen)*

## Yêu Cầu

- ClaudeKit CLI đã cài đặt (`ck --version` hoạt động)
- Claude Code đang chạy
- Dự án đã khởi tạo với ClaudeKit

**Chưa có những điều này?** Xem [Hướng Dẫn Cài Đặt](/vi/docs/getting-started/installation)

## Tính Năng Đầu Tiên

Thêm xác thực người dùng vào ứng dụng Next.js trong 15 phút.

### Bước 1: Bootstrap Dự Án

```bash
ck init my-app --kit engineer
cd my-app
```

**Tip:** Sử dụng `--prefix` để namespace các lệnh thành `/ck:plan`, `/ck:code`, v.v.:
```bash
ck init my-app --kit engineer --prefix
```

**Đã tạo**:
- `.claude/` - 14 AI agents, 30+ lệnh, 45 skills
- `docs/` - Tài liệu dự án tự động tạo
- `plans/` - Lưu trữ kế hoạch triển khai

### Bước 2: Lập Kế Hoạch Xác Thực

```bash
/ck:plan add user authentication with email/password and OAuth
```

**Điều gì xảy ra** (30 giây):
1. Agent `planner` kích hoạt 3 agent `researcher` chạy song song
2. Nghiên cứu best practices cho Next.js 15 + Better Auth
3. Phân tích cấu trúc codebase của bạn
4. Tạo kế hoạch triển khai chi tiết

**Đầu ra**:
```
✓ planner: Research complete (3 sources analyzed)
✓ planner: Plan created

📄 plans/251030-auth-implementation.md

Summary:
• Better Auth with credentials + OAuth (Google, GitHub)
• Session management with JWT
• Login/signup/reset pages
• Protected routes middleware
• Files to create: 8
• Files to modify: 4
• Tests: 12 test cases
• Estimated: 2 hours manually, 5 minutes with ClaudeKit

Next: /ck:cook plans/251030-auth-implementation.md
```

### Bước 3: Xem Lại Kế Hoạch

```bash
cat plans/251030-auth-implementation.md
```

Kiểm tra kế hoạch. Kiến trúc vững chắc? Tiếp tục.

### Bước 4: Triển Khai

```bash
/ck:cook plans/251030-auth-implementation.md
```

**Điều gì xảy ra** (5 phút):

**Làm rõ** (15 giây):
```
code: Which OAuth providers?
You: Google and GitHub
```

**Triển khai** (4 phút):
1. Cài đặt `better-auth` + dependencies
2. Tạo cấu hình auth với các providers
3. Tạo trang login/signup/reset với shadcn/ui
4. Thêm API routes
5. Triển khai middleware cho protected routes
6. Viết 12 test cases
7. Cập nhật tài liệu

**Đầu ra thời gian thực**:
```
✓ Installing dependencies... (15s)
✓ Creating auth.ts config
✓ Generating UI components
  • app/login/page.tsx (Google OAuth button)
  • app/signup/page.tsx (Email + OAuth)
  • app/reset-password/page.tsx
✓ Creating API routes
  • app/api/auth/[...all]/route.ts
✓ Adding middleware.ts (protect /dashboard/*)
✓ Writing tests (12 cases)
✓ Updating docs/system-architecture.md

tester: Running test suite...
✓ Unit tests: 45 passed
✓ Auth tests: 12 passed
✓ Coverage: 89%

code-reviewer: Quality check...
✓ No security issues
✓ Type-safe (0 errors)
✓ Performance: Fast (< 100ms auth check)

✓ Implementation complete (4m 32s)
```

### Bước 5: Xem Hoạt Động

```bash
npm run dev
```

Truy cập:
- `http://localhost:3000/login` - Đăng nhập bằng email hoặc OAuth
- `http://localhost:3000/signup` - Tạo tài khoản
- `http://localhost:3000/dashboard` - Protected route (tự động chuyển hướng nếu chưa đăng nhập)

**Thử nghiệm**:
1. Đăng ký bằng email
2. Đăng nhập và được chuyển hướng đến dashboard
3. Đăng xuất, thử OAuth với Google
4. Kiểm tra tính duy trì của session

### Bước 6: Commit

```bash
/ck:git cm
```

**Đầu ra**:
```
git-manager: Analyzing changes...
✓ Staged: 12 files
✓ Secret scan: Clean
✓ Commit message generated

feat(auth): add Better Auth with email and OAuth

- Add Better Auth configuration
- Implement login/signup/reset pages
- Add Google and GitHub OAuth
- Protect routes with middleware
- Add 12 auth test cases
- Update documentation

✓ Committed: abc1234
✓ Pushed to origin/main

Done!
```

## Chuyện Gì Vừa Xảy Ra?

**Cách tiếp cận truyền thống** (8-12 giờ):
1. Nghiên cứu thư viện auth (1h)
2. Đọc tài liệu (1h)
3. Thiết lập cấu hình (1h)
4. Xây dựng các UI components (3h)
5. Triển khai luồng OAuth (2h)
6. Viết tests (1h)
7. Debug lỗi (1h)
8. Viết tài liệu (30 phút)

**Cách tiếp cận ClaudeKit** (6 phút):
1. Lập kế hoạch: AI nghiên cứu, phân tích, thiết kế (30s)
2. Triển khai: AI viết code, test, làm tài liệu (4m)
3. Xem lại: AI xác thực bảo mật, hiệu suất (30s)
4. Commit: AI tạo commit chuyên nghiệp (30s)

**Tiết kiệm thời gian**: 8-12 giờ → **Nhanh hơn ~800%**

## Tại Sao Hoạt Động

### 14 Agents Chuyên Biệt
- **planner**: Tạo kế hoạch triển khai
- **researcher**: Tìm kiếm best practices (3 agent chạy song song)
- **tester**: Xác thực mọi thứ hoạt động
- **code-reviewer**: Kiểm tra bảo mật + hiệu suất
- **git-manager**: Tạo commit chuyên nghiệp
- **docs-manager**: Giữ tài liệu luôn cập nhật
- ...và 8 agent khác

### 45 Skills Tích Hợp
- **better-auth**: Chuyên môn triển khai auth
- **shadcn-ui**: UI components đã được cấu hình sẵn
- **nextjs**: Best practices cho Next.js 15
- **gemini-image-gen**: Tạo logo, tài nguyên hình ảnh
- ...và 41 skills khác

### Hệ Thống Sống
- Cập nhật liên tục cùng với những cải tiến của Claude
- Không bị ràng buộc vào một tech stack cố định
- Học hỏi theo các pattern code của bạn
- Ngày càng thông minh hơn theo thời gian

## Tiếp Theo: Công Việc Thực Tế

Thử các tính năng phức tạp hơn:

```bash
# Thêm xử lý thanh toán (Stripe + webhooks)
/ck:cook add Stripe payment with subscriptions and webhooks

# Xây dựng REST API với validation
/ck:cook create REST API for blog posts with Zod validation

# Triển khai chat thời gian thực
/ck:cook add real-time chat using WebSockets

# Di chuyển database (Database migrations)
/ck:cook migrate from SQLite to PostgreSQL with zero downtime
```

Mỗi tác vụ chỉ mất 5-20 phút thay vì nhiều ngày.

## Học Workflows

### Chu Trình Tính Năng Đầy Đủ
```bash
/ck:plan [feature]           # Nghiên cứu + Lập kế hoạch
/ck:cook [plan]              # Triển khai
/ck:test                     # Xác thực
/ck:fix --quick [issue]         # Sửa lỗi nhanh
/ck:git cm                   # Commit
```

### Debug + Sửa Lỗi
```bash
/ck:debug [issue]            # Phân tích nguyên nhân gốc rễ
/ck:fix [complex-issue] # Sửa lỗi đa agent
/ck:fix [actions-url]     # Sửa lỗi CI/CD thất bại
```

### Thiết Kế + Nội Dung
```bash
# Sử dụng copywriting skill cho nội dung marketing chất lượng cao
"Write marketing copy for [page]"
/ck:brainstorm [idea]        # Khám phá các giải pháp
```

## Câu Hỏi Thường Gặp

**Q: Nó có hoạt động với tech stack của tôi không?**
A: Có. Next.js, Django, Laravel, Go, Rust, Flutter - bất kỳ stack nào. ClaudeKit thích ứng với các pattern của bạn.

**Q: Nếu AI mắc lỗi thì sao?**
A: Agent `code-reviewer` sẽ phát hiện vấn đề trước khi commit. Ngoài ra, bạn vẫn xem lại PR như bình thường. AI bổ trợ chứ không thay thế phán đoán của con người.

**Q: Tôi có cần API keys không?**
A: Với các tính năng cơ bản thì không. Với các skill nâng cao (Gemini, Tìm kiếm) thì có. Xem [Thiết Lập API Key](/docs/support/troubleshooting/api-key-setup).

**Q: Tôi có thể tùy chỉnh agents không?**
A: Có. Chỉnh sửa `.claude/agents/*.md` để điều chỉnh hành vi. Xem [Custom Agents](/docs/engineer/configuration/hooks).

## Khám Phá Thêm

**Khái Niệm Cốt Lõi**:
- [Kiến Trúc](/docs/engineer/configuration/claude-md) - Cách ClaudeKit hoạt động
- [Tổng Quan Agents](/vi/docs/engineer/agents/) - Gặp gỡ đội ngũ AI của bạn
- [Hướng Dẫn Commands](/vi/docs/engineer/commands/) - Toàn bộ hơn 30 lệnh

**Sử Dụng Thực Tế**:
- [Bắt Đầu Dự Án Mới](/docs/workflows/new-project)
- [Thêm Tính Năng](/vi/docs/workflows/adding-feature)
- [Sửa Lỗi](/vi/docs/workflows/fixing-bugs)

**Khắc Phục Sự Cố**:
- [Vấn Đề Cài Đặt](/docs/support/troubleshooting/installation-issues)
- [Lỗi Lệnh](/docs/support/troubleshooting/command-errors)
- [Vấn Đề Hiệu Suất](/docs/support/troubleshooting/performance-issues)

---

**Bạn vừa triển khai thành công auth cho production chỉ trong 6 phút.** Boilerplates không thể làm được. Các AI chat assistant cũng không thể. Chỉ ClaudeKit làm được.

**Sẵn sàng triển khai?** Đội ngũ AI dev của bạn đang chờ đợi.
