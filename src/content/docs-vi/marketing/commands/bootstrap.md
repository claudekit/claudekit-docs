---
title: "/bootstrap"
description: "Khởi tạo dự án hoàn chỉnh với nghiên cứu, lựa chọn công nghệ, lập kế hoạch, thiết kế, thực hiện, kiểm tra và tài liệu trong một lệnh"
section: marketing
category: commands
order: 20
published: true
---

> Từ không có gì đến sản xuất trong một lệnh

## Khởi động nhanh

```bash
/bootstrap Create AI-powered marketing automation platform
```

**Điều gì xảy ra** (1-2 giờ):
1. Đặt câu hỏi cho bạn về yêu cầu
2. Nghiên cứu các giải pháp (3+ nhà nghiên cứu)
3. Đề xuất stack công nghệ (hoặc sử dụng của bạn)
4. Tạo kế hoạch thực hiện
5. Tạo thiết kế (tùy chọn)
6. Thực hiện các tính năng
7. Viết bài kiểm tra
8. Xem xét mã
9. Tạo tài liệu
10. Onboard người dùng
11. Cam kết với git

**Kết quả**: Dự án hoàn chỉnh sẵn sàng phát triển

## Quy trình 11 pha

### Pha 1: Làm rõ yêu cầu
AI đặt câu hỏi để hiểu:
- Mục tiêu dự án
- Đối tượng mục tiêu
- Các tính năng chính
- Ràng buộc
- Dòng thời gian

### Pha 2: Nghiên cứu
3+ tác nhân nhà nghiên cứu song song:
- Xác nhận giải pháp
- Phương pháp hay nhất
- Thách thức kỹ thuật
- Các sản phẩm tương tự

### Pha 3: Công nghệ Stack
Đề xuất hoặc xác nhận:
- Khung giao diện người dùng
- Khung phần mềm
- Cơ sở dữ liệu
- Lưu trữ
- Dịch vụ bên thứ ba

### Pha 4: Lập kế hoạch
Tạo kế hoạch chi tiết:
- Cấu trúc tiết lộ từng bước
- Phân tích từng pha
- Cơ hội song song hóa
- Phụ thuộc được ánh xạ

### Pha 5: Thiết kế (Tùy chọn)
Nếu được yêu cầu:
- Dây khung (HTML)
- Hướng dẫn thiết kế
- Tài sản thương hiệu
- Tạo logo

### Pha 6: Thực hiện
Thực hiện kế hoạch:
- Tạo mã
- Tạo thành phần
- Điểm cuối API
- Lược đồ cơ sở dữ liệu

### Pha 7: Kiểm tra
Kiểm tra toàn diện:
- Kiểm tra đơn vị
- Kiểm tra tích hợp
- Kiểm tra E2E
- 100% vượt qua bắt buộc

### Pha 8: Đánh giá mã
Cổng chất lượng:
- Kiểm tra bảo mật
- Phân tích hiệu suất
- Xác nhận kiến trúc
- 0 vấn đề quan trọng bắt buộc

### Pha 9: Tài liệu
Tự động tạo:
- README.md
- docs/codebase-summary.md
- docs/system-architecture.md
- docs/code-standards.md
- docs/project-roadmap.md

### Pha 10: Onboarding
Thiết lập người dùng:
- Biến môi trường
- Khóa API
- Thiết lập cơ sở dữ liệu
- Máy chủ phát triển

### Pha 11: Hoàn tất
Kết thúc:
- Báo cáo tóm tắt
- Các bước tiếp theo
- Cam kết git (nếu được chấp phát)

## Ví dụ: Nền tảng tiếp thị

**Đầu vào**:
```bash
/bootstrap Create marketing automation platform with email campaigns and analytics
```

**Quy trình** (tóm tắt):
```markdown
[Pha 1: Yêu cầu]
bootstrap: Target audience?
You: Small businesses, 1-50 employees

bootstrap: Key features?
You: Email campaigns, landing pages, analytics

bootstrap: Budget for third-party services?
You: $50-100/month

[Pha 2: Nghiên cứu]
✓ Researcher 1: Email service providers (3 options analyzed)
✓ Researcher 2: Analytics platforms (compared 4 solutions)
✓ Researcher 3: Landing page builders (best practices)

[Pha 3: Stack công nghệ]
Khuyến cáo:
- Frontend: Next.js 15 + Tailwind
- Backend: Next.js API routes + tRPC
- Database: PostgreSQL + Prisma
- Email: Resend (within budget)
- Analytics: Plausible (privacy-focused)
- Hosting: Vercel

bootstrap: Approve tech stack?
You: Yes

[Pha 4: Lập kế hoạch]
✓ Created 6-phase plan:
  - Phase 1: Database + auth
  - Phase 2: Email system
  - Phase 3: Landing page builder
  - Phase 4: Analytics
  - Phase 5: Dashboard
  - Phase 6: Deployment

[Pha 5: Thiết kế]
bootstrap: Create design?
You: Yes

✓ Generated wireframes (5 pages)
✓ Created design guidelines
✓ Generated logo
✓ Captured wireframe screenshots

[Pha 6-8: Thực hiện + Kiểm tra + Xem xét]
[45 minutes of automated work]
✓ 47 files created
✓ 89 tests written (all passing)
✓ Code reviewed (0 critical issues)

[Pha 9: Tài liệu]
✓ README.md
✓ Complete documentation in docs/

[Pha 10: Onboarding]
bootstrap: Set up environment variables...
[Interactive setup process]

[Pha 11: Hoàn tất]
Project complete!

Structure:
/
├── app/              # Next.js pages
├── components/       # React components
├── lib/             # Business logic
├── prisma/          # Database schema
├── docs/            # Documentation
└── tests/           # Test suites

Next steps:
1. npm run dev (start development)
2. Visit http://localhost:3000
3. Create your first campaign

Commit to git? [Y/n]
```

## Khi nào sử dụng

### Dự án mới
```bash
/bootstrap Create SaaS analytics platform
/bootstrap Build e-commerce store with headless CMS
/bootstrap Marketing site with blog
```

### Thí nghiệm
```bash
/bootstrap MVP for customer feedback tool
/bootstrap Prototype for AI chat interface
```

### Mẫu
```bash
/bootstrap Next.js SaaS starter with auth and billing
```

## Ước tính thời gian

- Simple (landing page): 30-45 min
- Medium (SaaS MVP): 1-2 hours
- Complex (full platform): 2-4 hours

vs Manual: 1-2 weeks

## Lệnh liên quan

- [/plan](/vi/docs/marketing/commands/plan) - Lập kế hoạch chỉ
- [/cook](/vi/docs/marketing/commands/cook) - Chỉ thực hiện
- [/design](/vi/docs/marketing/commands/design) - Chỉ thiết kế

---

**Một lệnh. Dự án hoàn chỉnh.** Từ ý tưởng đến mã sản xuất.
