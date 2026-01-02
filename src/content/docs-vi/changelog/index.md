---
title: "Changelog"
description: "Các thay đổi gần đây, cập nhật, và ghi chú phát hành cho ClaudeKit"
lang: vi
section: changelog
order: 0
published: true
---

# Changelog

Các thay đổi gần đây, cập nhật, và ghi chú phát hành cho ClaudeKit.

## Phiên bản mới nhất

### CLI v3.16.0 - 2024-12-28

#### 🔄 Tính năng Đồng bộ Cấu hình (Config Sync)

Flag `--sync` mới để đồng bộ hóa file cấu hình một cách tương tác:
- **UI Merge 3 bên** - Trình xem diff song song
- **Review tương tác** - Chấp nhận/từ chối/chỉnh sửa từng thay đổi
- **Versioning thông minh** - Phát hiện cập nhật cấu hình upstream
- **Bảo vệ sao lưu** - Lưu giữ bản gốc trước khi thay đổi
- **Thông báo thụ động** - Hiển thị tính khả dụng của bản cập nhật sau khi `ck init`

```bash
ck init --sync
```

#### 🔐 Xác thực GitHub Đa phương thức

Các tùy chọn xác thực mới để thiết lập dễ dàng hơn:
- **Ưu tiên biến môi trường** - `GITHUB_TOKEN`/`GH_TOKEN` hiện được kiểm tra trước gh CLI
- **Chế độ Git Clone** - Flag `--use-git` mới bỏ qua API, sử dụng thông tin xác thực git bản địa
- **Lời nhắc tương tác** - Hướng dẫn thiết lập khi xác thực thất bại
- **Tự động phát hiện SSH** - Tự động phát hiện các khóa SSH

```bash
# Không cần token - sử dụng thông tin xác thực SSH/HTTPS
ck init --use-git
```

---

### Version 1.0.0 - 2024-12-01

#### 🎉 Phát hành Chính thức

**Tính năng Chính**:
- **14 AI Agent Chuyên biệt** - Planner, Researcher, Tester, Debugger, Code Reviewer, và nhiều hơn nữa
- **30+ Lệnh Slash** - `/cook`, `/plan`, `/fix`, `/design`, `/git`, `/docs`, và nhiều hơn nữa
- **45 Skill Tích hợp** - Next.js, Better Auth, PostgreSQL, Docker, Shopify, Gemini Vision
- **Workflow Đa Agent** - Các agent phối hợp cho các tác vụ phức tạp
- **Điều hướng theo Ngữ cảnh** - Sidebar động dựa trên section hiện tại

**Khả năng Cốt lõi**:
- Workflow phát triển tính năng hoàn chỉnh (`/plan → /code → /test → /commit`)
- Sửa lỗi hệ thống với phân tích nguyên nhân gốc
- Tự động tạo và duy trì tài liệu
- Thiết kế UI/UX với các tài nguyên do AI tạo
- Tối ưu hóa hiệu suất và gỡ lỗi
- Review code với phân tích bảo mật và hiệu suất

**Công nghệ Hỗ trợ**:
- Frontend: Next.js, React, Vue, Angular, Svelte
- Backend: Node.js, Python, Go, Rust, PHP
- Database: PostgreSQL, MongoDB, MySQL, Redis
- Cloud: AWS, GCP, Azure, Cloudflare Workers
- Authentication: Better Auth, OAuth2, JWT
- Payment: Stripe, Shopify, Polar, SePay

## Thay đổi Gần đây

### Cải tổ Tài liệu - 2024-11-28

**Cải thiện Kiến trúc Thông tin**:
- ✅ Hệ thống điều hướng theo ngữ cảnh mới
- ✅ Tách biệt phần onboarding khỏi nội dung marketing
- ✅ Tạo trang bán hàng "Tại sao chọn ClaudeKit" riêng biệt
- ✅ Thêm các hướng dẫn workflow toàn diện
- ✅ Tái cấu trúc nội dung thành 5 section chính

**Trang Tài liệu Mới**:
- Section Getting Started với lộ trình học rõ ràng
- Core Concepts giải thích về agents/commands/skills
- Hướng dẫn Nâng cấp cho người dùng Claude Code hiện tại
- Hướng dẫn workflow phát triển tính năng
- Cách tiếp cận sửa lỗi hệ thống
- Workflow duy trì tài liệu

**Cải thiện Điều hướng**:
- NavBar 5 section: Getting Started, Docs, Workflows, Changelog, Support
- Sidebars theo ngữ cảnh thay đổi dựa trên section hiện tại
- Điều hướng lệnh phân cấp với 9 subcategory
- Điều hướng mobile responsive với menu hamburger

### Giai đoạn Beta Testing - 15/10/2024 đến 30/11/2024

**Bài học Chính**:
- Người dùng hoàn thành tính năng nhanh hơn 10 lần với ClaudeKit
- Cộng tác đa agent giảm lỗi đến 80%
- Kiểm thử tự động phát hiện các vấn đề trước khi lên production
- Đồng bộ hóa tài liệu loại bỏ các tài liệu lỗi thời
- Các team đạt được chất lượng code nhất quán giữa các thành viên

**Phản hồi từ Beta Tester**:
> "ClaudeKit đã thay đổi cách team chúng tôi xây dựng tính năng. Những việc trước đây mất nhiều ngày giờ chỉ mất vài giờ." - Senior Developer, Tech Startup

> "Chất lượng code do các agent ClaudeKit tạo ra rất ấn tượng. Nó tự động tuân theo các pattern và best practice của chúng tôi." - Engineering Manager, Enterprise

## Lịch sử Phiên bản

### v0.9.0 - Beta Release - 15/10/2024
- Bản phát hành beta đầu tiên với các agent và lệnh cốt lõi
- Hệ thống skill cơ bản với 20 skill tích hợp
- Giao diện dòng lệnh đơn giản
- Tích hợp GitHub cho các workflow tự động

### v0.8.0 - Alpha Testing - 01/09/2024
- Kiểm thử alpha nội bộ với những người dùng tiên phong
- Giao thức giao tiếp giữa các agent
- Hệ thống điều phối workflow
- Kích hoạt skill và tiêm ngữ cảnh (context injection)

### v0.5.0 - Prototype - 15/07/2024
- Proof of concept với các agent planner và developer cơ bản
- Triển khai lệnh `/cook` đơn giản
- Tải skill thủ công
- Chỉ thực thi local

## Breaking Changes

### v1.0.0
- Không có breaking change từ các phiên bản beta
- Lộ trình migration: Có sẵn lệnh `claudekit migrate`
- Tất cả cấu hình beta vẫn tương thích

### v0.9.0 → v1.0.0
- Đặt tên lệnh nâng cao (tương thích ngược)
- Cải thiện phát hiện skill (tự động nâng cấp)
- Xử lý lỗi và logging tốt hơn

## Deprecations

### Đã bị bãi bỏ trong v1.0.0
- Flag `--legacy` (sẽ bị loại bỏ trong v2.0.0)
- Tải skill thủ công (sử dụng phát hiện tự động thay thế)
- Chế độ Classic (chế độ Modern hiện là mặc định)

### Hướng dẫn Migration
```bash
# Cập nhật lên v1.0.0
npm update @claudekit/cli

# Di trú cấu hình
claudekit migrate

# Xác minh thiết lập
claudekit doctor
```

## Cập nhật Bảo mật

### Nâng cao Bảo mật v1.0.0
- Tải skill an toàn với sandboxing
- Các kênh giao tiếp agent được mã hóa
- Nhật ký kiểm tra (audit logging) cho tất cả các hành động của agent
- Kiểm soát truy cập dựa trên vai trò (RBAC) cho các workflow của team
- Tự động quét lỗ hổng cho code được tạo

### Các Vấn đề Bảo mật trong Quá khứ
- **Đã sửa trong v0.9.2**: Rò rỉ file tạm trong quá trình tải skill
- **Đã sửa trong v0.8.5**: Unsafe eval trong xử lý lệnh legacy
- **Đã sửa trong v0.7.1**: Tiết lộ thông tin trong các thông báo lỗi

## Cải thiện Hiệu suất

### Hiệu suất v1.0.0
- Thời gian khởi động agent nhanh hơn 50%
- Giảm 75% sử dụng bộ nhớ khi tải skill
- Thực thi agent song song cho các workflow phức tạp
- Quản lý ngữ cảnh tối ưu cho các codebase lớn
- Hệ thống caching cho các thao tác lặp lại

### Kết quả Benchmark
```
Triển khai Tính năng (Complex CRUD):
- Thủ công: 8 giờ, 15 bug
- ClaudeKit v0.9: 45 phút, 2 bug
- ClaudeKit v1.0: 20 phút, 0 bug

Giải quyết Bug:
- Debug thủ công: trung bình 2 giờ
- ClaudeKit v0.9: trung bình 20 phút
- ClaudeKit v1.0: trung bình 5 phút
```

## Đóng góp Cộng đồng

### Tính năng Cộng đồng v1.0.0
- Tích hợp Discord cho các workflow cộng tác
- Thư viện skill cộng đồng với hơn 200 skill do người dùng đóng góp
- Các kho lưu trữ template mã nguồn mở
- Các bản dịch ngôn ngữ do cộng đồng duy trì

### Những Người Đóng góp Nổi bật
- @alex-dev - Skill tối ưu hóa PostgreSQL
- @sarah-designer - Các design pattern cho UI/UX
- @mike-ops - Các workflow DevOps và triển khai
- @laura-docs - Cải thiện kỹ năng viết tài liệu kỹ thuật

## Tính năng Sắp tới

### v1.1.0 (Dự kiến - Q1 2025)
- Trình thiết kế workflow trực quan
- Gỡ lỗi nâng cao với time-travel
- Các tính năng cộng tác nhóm
- Tích hợp Enterprise SSO
- Dashboard giám sát hiệu suất

### v1.2.0 (Dự kiến - Q2 2025)
- Ứng dụng mobile đi kèm
- Hỗ trợ lệnh bằng giọng nói
- Chỉnh sửa cộng tác thời gian thực
- Tích hợp CI/CD nâng cao
- Công cụ tạo agent tùy chỉnh

## Các Vấn đề đã biết

### Hạn chế đã biết trong v1.0.0
- Các codebase lớn (>1M LOC) có thể quét ban đầu chậm hơn
- Một số ngôn ngữ hiếm có hỗ trợ skill hạn chế
- Hỗ trợ hệ thống con Windows vẫn đang ở bản beta
- Cấu hình proxy doanh nghiệp cần thiết lập thủ công

### Cách khắc phục (Workarounds)
- Sử dụng file `.claudeignore` để loại trừ các thư mục lớn
- Tạo các skill tùy chỉnh cho các ngôn ngữ chưa được hỗ trợ
- Sử dụng WSL2 trên Windows để có khả năng tương thích tốt hơn
- Cấu hình cài đặt proxy thủ công trong configuration

## Hỗ trợ và Tài nguyên

### Nhận Trợ giúp
- [Cộng đồng Discord](https://claudekit.cc/discord) - Chat thời gian thực với cộng đồng
- [GitHub Issues](https://github.com/claudekit/claudekit/issues) - Báo cáo lỗi và yêu cầu tính năng
- [Tài liệu](/vi/docs) - Tài liệu tham khảo đầy đủ
- [Hỗ trợ qua Email](mailto:support@claudekit.cc) - Yêu cầu hỗ trợ doanh nghiệp

### Đóng góp
- [Hướng dẫn Đóng góp](/vi/docs/development/contributing) - Cách đóng góp cho ClaudeKit
- [Phát triển Skill](/vi/docs/development/creating-skills) - Tạo các skill tùy chỉnh
- [Phát triển Plugin](/vi/docs/development/plugins) - Mở rộng chức năng của ClaudeKit
- [Dự án Dịch thuật](https://translate.claudekit.cc) - Giúp dịch ClaudeKit

---

**Luôn cập nhật**: Tham gia [Discord](https://claudekit.cc/discord) của chúng tôi để nhận các thông báo và cập nhật.

**Chu kỳ phát hành**: Phát hành định kỳ vào ngày 1 hàng tháng. Các bản vá bảo mật được phát hành khi cần thiết.
