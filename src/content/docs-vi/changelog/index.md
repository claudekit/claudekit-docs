---
title: "Changelog"
description: "Các thay đổi gần đây, cập nhật, và ghi chú phát hành cho ClaudeKit"
section: changelog
order: 0
published: true
---

# Changelog

Các thay đổi gần đây, cập nhật, và ghi chú phát hành cho ClaudeKit.

## Phiên bản mới nhất

### Version 1.0.0 - 2024-12-01

#### Initial Release

**Tính năng chính**:
- **14 AI Agent chuyên biệt** - Planner, Researcher, Tester, Debugger, Code Reviewer, và nhiều hơn nữa
- **30+ Slash Command** - `/cook`, `/plan`, `/fix`, `/design`, `/git`, `/docs`, và nhiều hơn nữa
- **45 Skill tích hợp** - Next.js, Better Auth, PostgreSQL, Docker, Shopify, Gemini Vision
- **Multi-agent Workflow** - Agent phối hợp cho task phức tạp
- **Điều hướng theo ngữ cảnh** - Sidebar động theo section hiện tại

**Khả năng cốt lõi**:
- Workflow phát triển tính năng hoàn chỉnh (`/plan → /code → /test → /commit`)
- Sửa lỗi có hệ thống với phân tích nguyên nhân gốc
- Tạo và duy trì tài liệu tự động
- Thiết kế UI/UX với asset do AI tạo
- Tối ưu hiệu suất và debugging
- Review code với phân tích bảo mật và hiệu suất

**Công nghệ hỗ trợ**:
- Frontend: Next.js, React, Vue, Angular, Svelte
- Backend: Node.js, Python, Go, Rust, PHP
- Database: PostgreSQL, MongoDB, MySQL, Redis
- Cloud: AWS, GCP, Azure, Cloudflare Workers
- Authentication: Better Auth, OAuth2, JWT
- Payment: Stripe, Shopify, Polar, SePay

## Thay đổi gần đây

### Cải tiến tài liệu - 2024-11-28

**Cải thiện kiến trúc thông tin**:
- Hệ thống điều hướng theo ngữ cảnh mới
- Tách onboarding khỏi nội dung marketing
- Tạo trang "Why ClaudeKit" riêng
- Thêm hướng dẫn workflow toàn diện
- Tái cấu trúc nội dung thành 5 section chính

**Trang tài liệu mới**:
- Section Getting Started với lộ trình học rõ ràng
- Core Concepts giải thích agents/commands/skills
- Hướng dẫn nâng cấp cho người dùng Claude Code hiện tại
- Hướng dẫn workflow phát triển tính năng
- Phương pháp sửa lỗi có hệ thống
- Workflow duy trì tài liệu

**Cải tiến điều hướng**:
- NavBar 5 section: Getting Started, Docs, Workflows, Changelog, Support
- Sidebar theo ngữ cảnh thay đổi theo section hiện tại
- Điều hướng command phân cấp với 9 subcategory
- Điều hướng mobile responsive với hamburger menu

### Giai đoạn Beta Testing - 2024-10-15 đến 2024-11-30

**Bài học chính**:
- Người dùng hoàn thành tính năng nhanh hơn 10x với ClaudeKit
- Multi-agent collaboration giảm bug 80%
- Testing tự động phát hiện issue trước production
- Đồng bộ tài liệu loại bỏ docs lỗi thời
- Team đạt chất lượng code nhất quán giữa các thành viên

**Phản hồi Beta Tester**:
> "ClaudeKit đã thay đổi cách team chúng tôi build tính năng. Những gì trước đây mất nhiều ngày giờ chỉ mất vài giờ." - Senior Developer, Tech Startup

> "Chất lượng code do ClaudeKit agent tạo ra rất ấn tượng. Nó tự động tuân theo pattern và best practice của chúng tôi." - Engineering Manager, Enterprise

## Lịch sử phiên bản

### v0.9.0 - Beta Release - 2024-10-15
- Beta release ban đầu với core agent và command
- Hệ thống skill cơ bản với 20 skill tích hợp
- Giao diện command-line đơn giản
- GitHub integration cho automated workflow

### v0.8.0 - Alpha Testing - 2024-09-01
- Alpha testing nội bộ với pilot user
- Protocol giao tiếp agent
- Hệ thống điều phối workflow
- Kích hoạt skill và context injection

### v0.5.0 - Prototype - 2024-07-15
- Proof of concept với planner và developer agent cơ bản
- Triển khai lệnh `/cook` đơn giản
- Tải skill thủ công
- Chỉ thực thi local

## Breaking Changes

### v1.0.0
- Không có breaking change từ phiên bản beta
- Lộ trình migration: Lệnh `claudekit migrate` có sẵn
- Tất cả cấu hình beta vẫn tương thích

### v0.9.0 → v1.0.0
- Đặt tên command nâng cao (tương thích ngược)
- Phát hiện skill cải thiện (tự động nâng cấp)
- Xử lý lỗi và logging tốt hơn

## Deprecated

### Deprecated trong v1.0.0
- Flag `--legacy` (sẽ bị loại bỏ trong v2.0.0)
- Tải skill thủ công (sử dụng phát hiện tự động thay thế)
- Classic mode (modern mode giờ là mặc định)

### Hướng dẫn Migration
```bash
# Cập nhật lên v1.0.0
npm update @claudekit/cli

# Migrate cấu hình
claudekit migrate

# Xác minh setup
claudekit doctor
```

## Cập nhật bảo mật

### Nâng cao bảo mật v1.0.0
- Tải skill an toàn với sandboxing
- Kênh giao tiếp agent được mã hóa
- Audit logging cho tất cả action của agent
- Role-based access control cho team workflow
- Quét lỗ hổng tự động cho code được tạo

### Issue bảo mật trong quá khứ
- **Đã sửa trong v0.9.2**: Rò rỉ file tạm trong tải skill
- **Đã sửa trong v0.8.5**: Unsafe eval trong xử lý lệnh legacy
- **Đã sửa trong v0.7.1**: Tiết lộ thông tin trong thông báo lỗi

## Cải thiện hiệu suất

### Hiệu suất v1.0.0
- Thời gian khởi động agent nhanh hơn 50%
- Giảm 75% sử dụng bộ nhớ cho tải skill
- Thực thi agent song song cho workflow phức tạp
- Quản lý context tối ưu cho codebase lớn
- Hệ thống caching cho operation lặp lại

### Kết quả Benchmark
```
Triển khai tính năng (Complex CRUD):
- Thủ công: 8 giờ, 15 bug
- ClaudeKit v0.9: 45 phút, 2 bug
- ClaudeKit v1.0: 20 phút, 0 bug

Giải quyết bug:
- Debug thủ công: trung bình 2 giờ
- ClaudeKit v0.9: trung bình 20 phút
- ClaudeKit v1.0: trung bình 5 phút
```

## Đóng góp cộng đồng

### Tính năng cộng đồng v1.0.0
- Discord integration cho collaborative workflow
- Thư viện skill cộng đồng với 200+ skill do người dùng đóng góp
- Template repository open-source
- Bản dịch ngôn ngữ do cộng đồng duy trì

### Contributor nổi bật
- @alex-dev - Skill tối ưu PostgreSQL
- @sarah-designer - Design pattern UI/UX
- @mike-ops - DevOps và deployment workflow
- @laura-docs - Cải thiện technical writing

## Tính năng sắp tới

### v1.1.0 (Dự kiến - Q1 2025)
- Visual workflow designer
- Advanced debugging với time-travel
- Tính năng collaboration team
- Enterprise SSO integration
- Dashboard giám sát hiệu suất

### v1.2.0 (Dự kiến - Q2 2025)
- Mobile app companion
- Hỗ trợ voice command
- Collaborative editing real-time
- Tích hợp CI/CD nâng cao
- Công cụ tạo agent tùy chỉnh

## Issue đã biết

### Hạn chế đã biết v1.0.0
- Codebase lớn (>1M LOC) có thể quét ban đầu chậm hơn
- Một số ngôn ngữ hiếm có hỗ trợ skill hạn chế
- Hỗ trợ Windows subsystem vẫn đang beta
- Cấu hình enterprise proxy cần setup thủ công

### Workaround
- Sử dụng file `.claudeignore` để loại trừ thư mục lớn
- Tạo skill tùy chỉnh cho ngôn ngữ không được hỗ trợ
- Sử dụng WSL2 trên Windows để tương thích tốt hơn
- Cấu hình proxy settings thủ công trong configuration

## Hỗ trợ và tài nguyên

### Nhận trợ giúp
- [Discord Community](https://claudekit.cc/discord) - Chat real-time với cộng đồng
- [GitHub Issues](https://github.com/claudekit/claudekit/issues) - Báo cáo bug và yêu cầu tính năng
- [Documentation](../) - Tài liệu tham khảo đầy đủ
- [Email Support](mailto:support@claudekit.cc) - Hỗ trợ doanh nghiệp

### Đóng góp
- [Contributing Guide](../development/contributing.md) - Cách đóng góp cho ClaudeKit
- [Skill Development](../development/creating-skills.md) - Tạo skill tùy chỉnh
- [Plugin Development](../development/plugins.md) - Mở rộng chức năng ClaudeKit
- [Translation Project](https://translate.claudekit.cc) - Giúp dịch ClaudeKit

---

**Cập nhật**: Tham gia [Discord](https://claudekit.cc/discord) để nhận thông báo và cập nhật.

**Chu kỳ phát hành**: Phát hành định kỳ vào ngày 1 mỗi tháng. Bản vá bảo mật phát hành khi cần.
