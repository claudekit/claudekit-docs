---
title: "Fullstack Developer Agent"
description: "Thực hiện các triển khai backend, frontend và cơ sở hạ tầng với mã sạch, sẵn sàng sản xuất."
section: marketing
category: agents
order: 12
---

# Fullstack Developer Agent

> **Chuyên gia thực hiện của bạn** - Biến các kế hoạch thành mã sẵn sàng sản xuất

## Công Việc Của Agent Này

Bạn có một kế hoạch triển khai chi tiết cho hệ thống chiến dịch email của bạn. Schema cơ sở dữ liệu được thiết kế, các điểm cuối API được chỉ định, các thành phần giao diện người dùng được phác thảo. Nhưng bây giờ ai đó cần thực sự viết mã.

**Vấn đề**: Triển khai mất thời gian. Viết API phía sau, các thành phần giao diện người dùng, di chuyển cơ sở dữ liệu, bài kiểm tra và tài liệu là nhàm chán. Giữ mức độ chất lượng cao trong khi di chuyển nhanh là một thách thức. Bạn cần mã hoạt động trong sản xuất, không chỉ hoạt động trong phát triển.

**Giải pháp**: Fullstack Developer Agent thực hiện các kế hoạch triển khai với mã sẵn sàng sản xuất. Nó xây dựng các API phía sau, các thành phần giao diện người dùng, tích hợp cơ sở dữ liệu và cơ sở hạ tầng—tuân theo các tiêu chuẩn và phương pháp hay nhất của dự án. Bạn nhận được các tính năng hoạt động, không phải các bằng chứng khái niệm.

## Bắt Đầu Nhanh

Thực hiện một giai đoạn triển khai:

```bash
# Sau khi planner tạo các giai đoạn
/dev "Implement phase 1: database schema and migrations"
```

Agent đọc tệp giai đoạn, triển khai chính xác những gì được chỉ định, chạy các bài kiểm tra và báo cáo hoàn thành.

## Khả Năng

### Backend Development
Xây dựng các hệ thống phía sau mạnh mẽ:
- **APIs**: Điểm cuối RESTful, trình phân giải GraphQL
- **Services**: Logik kinh doanh, xử lý dữ liệu
- **Database**: Truy vấn, di chuyển, tích hợp ORM
- **Authentication**: JWT, OAuth, quản lý phiên
- **Webhooks**: Xác minh chữ ký, xử lý sự kiện
- **Background Jobs**: Xử lý hàng đợi, tác vụ được lên lịch

### Frontend Development
Tạo các thành phần giao diện người dùng hiện đại:
- **React/Next.js**: Thành phần, trang, bố cục
- **TypeScript**: Mã an toàn về loại, dễ bảo trì
- **Forms**: Xác thực, gửi, xử lý lỗi
- **State Management**: React Query, Zustand, Context
- **Styling**: Tailwind CSS, thiết kế đáp ứng
- **Accessibility**: Tuân thủ WCAG AA

### Database Integration
Xử lý lớp dữ liệu một cách chính xác:
- **Schema Design**: Bảng, mối quan hệ, ràng buộc
- **Migrations**: Script lên/xuống với rollback
- **Queries**: Được tối ưu hóa, được lập chỉ mục, được kiểm tra
- **Transactions**: Đảm bảo tính toàn vẹn dữ liệu
- **Seeding**: Dữ liệu phát triển và kiểm tra
- **Connection Pooling**: Quản lý tài nguyên

### Testing Implementation
Đảm bảo chất lượng mã:
- **Unit Tests**: Kiểm tra thành phần và hàm
- **Integration Tests**: Kiểm tra API và cơ sở dữ liệu
- **E2E Tests**: Xác thực luồng người dùng toàn bộ
- **Test Coverage**: Đáp ứng yêu cầu dự án
- **Error Scenarios**: Xác thực xử lý lỗi

### Infrastructure & DevOps
Thiết lập các hệ thống hỗ trợ:
- **Docker**: Container hóa và soạn
- **CI/CD**: GitHub Actions, quy trình triển khai
- **Environment Config**: Tệp `.env`, quản lý bí mật
- **Monitoring**: Ghi nhật ký, theo dõi lỗi
- **Performance**: Bộ nhớ cache, tối ưu hóa

## Khi Nào Sử Dụng

Sử dụng Fullstack Developer Agent khi bạn cần:
- Thực hiện các giai đoạn từ các kế hoạch
- Xây dựng các tính năng mới từ đầu đến cuối
- Refactor mã hiện có để cải thiện chất lượng
- Thêm bài kiểm tra vào mã chưa được kiểm tra
- Triển khai di chuyển cơ sở dữ liệu
- Thiết lập cơ sở hạ tầng hoặc CI/CD
- Sửa lỗi với các giải pháp toàn diện

## Ví Dụ Quy Trình Làm Việc

### Executing a Phase from Plan

```bash
# Planner tạo các tệp giai đoạn trong plans/251229-email-campaign/
/dev "Execute phase-01-database-schema.md"
```

**Nhà phát triển sẽ**:
1. Đọc tệp giai đoạn từ thư mục kế hoạch
2. Xác minh quyền sở hữu tệp (chỉ chạm vào các tệp được gán)
3. Kiểm tra các phụ thuộc từ các giai đoạn trước
4. Triển khai từng tác vụ tuần tự:
   - Tạo các tệp schema cơ sở dữ liệu
   - Viết script di chuyển (lên và xuống)
   - Thêm các mô-đun và kiểu cơ sở dữ liệu
   - Tạo dữ liệu hạt giống để phát triển
5. Chạy kiểm tra loại và bài kiểm tra
6. Sửa bất kỳ lỗi nào gặp phải
7. Xác minh các tiêu chí thành công được đáp ứng
8. Tạo báo cáo triển khai

**Bạn sẽ nhận được**:
```markdown
## Phase Implementation Report

### Executed Phase
- Phase: phase-01-database-schema
- Plan: plans/251229-email-campaign
- Status: completed ✅

### Files Modified
- db/schema/campaigns.ts (128 dòng được thêm)
- db/migrations/001_create_campaigns.sql (45 dòng được thêm)
- db/models/Campaign.ts (87 dòng được thêm)
- db/seed/campaigns.ts (34 dòng được thêm)

### Tasks Completed
✅ Design campaigns table schema
✅ Tạo script di chuyển (lên/xuống)
✅ Thêm các kiểu và mô-đun TypeScript
✅ Tạo dữ liệu hạt giống để phát triển
✅ Thêm chỉ số để cải thiện hiệu suất

### Tests Status
- Kiểm tra loại: ✅ Pass
- Kiểm tra đơn vị: ✅ 12/12 pass (100% bảo hiểm)
- Kiểm tra tích hợp: ✅ 5/5 pass
- Kiểm tra di chuyển: ✅ Lên/xuống được xác minh

### Issues Encountered
Không có - triển khai hoàn thành thành công

### Next Steps
- Giai đoạn 2 có thể tiếp tục (phụ thuộc được thỏa mãn)
- Schema sẵn sàng cho triển khai API
- Dữ liệu hạt giống có sẵn để phát triển
```

### Building a Complete Feature

```bash
/dev "Implement webhook signature verification for Stripe and SePay"
```

**Triển khai bao gồm**:
- Backend: Điểm cuối xử lý webhook
- Tiện ích: Logic xác minh chữ ký
- Cơ sở dữ liệu: Schema nhật ký webhook
- Bài kiểm tra: Bài kiểm tra đơn vị và tích hợp
- Tài liệu: Tài liệu API được cập nhật
- Xử lý lỗi: Các tình huống lỗi toàn diện

## File Ownership Rules

**CRITICAL**: Nhà phát triển tôn trọng các ranh giới giai đoạn:
- **Chỉ sửa đổi các tệp được liệt kê trong phần "File Ownership"** của tệp giai đoạn
- **Không bao giờ chạm vào các tệp được sở hữu bởi các giai đoạn song song**
- **Báo cáo xung đột nếu phát hiện vi phạm quyền sở hữu tệp**
- **Dừng ngay lập tức nếu quyền sở hữu tệp không rõ ràng**

Điều này ngăn chặn xung đột hợp nhất khi nhiều giai đoạn được thực hiện song song.

## Execution Process

**1. Phase Analysis**:
- Đọc tệp giai đoạn được gán
- Xác minh danh sách quyền sở hữu tệp
- Kiểm tra thông tin song song
- Hiểu các chiến lược phòng chống xung đột

**2. Pre-Implementation Validation**:
- Xác nhận không có chồng chéo tệp với các giai đoạn khác
- Đọc tài liệu dự án (`codebase-summary.md`, `code-standards.md`)
- Xác minh phụ thuộc từ các giai đoạn trước hoàn tất
- Kiểm tra nếu các tệp tồn tại hoặc cần tạo

**3. Implementation**:
- Thực hiện các bước tuần tự từ tệp giai đoạn
- Sửa đổi CHỈ các tệp trong "File Ownership"
- Tuân theo kiến trúc và yêu cầu chính xác
- Viết mã sạch, dễ bảo trì, được tài liệu
- Thêm bài kiểm tra cho tất cả chức năng mới

**4. Quality Assurance**:
- Chạy kiểm tra loại (`npm run typecheck`)
- Chạy bài kiểm tra (`npm test`)
- Sửa lỗi loại hoặc lỗi kiểm tra
- Xác minh tiêu chí thành công từ tệp giai đoạn

**5. Completion Report**:
- Danh sách các tệp được sửa đổi
- Tài liệu các tác vụ hoàn thành
- Báo cáo trạng thái kiểm tra
- Lưu ý bất kỳ vấn đề còn lại
- Cập nhật tệp giai đoạn với trạng thái

## Code Quality Standards

Nhà phát triển tuân theo:
- **Nguyên tắc YAGNI, KISS, DRY**
- **Tiêu chuẩn mã dự án** (từ `docs/code-standards.md`)
- **Sécurité loại** (Chế độ nghiêm ngặt TypeScript)
- **Xử lý lỗi** (thử-bắt, ghi nhật ký thích hợp)
- **Kiểm tra** (bài kiểm tra đơn vị + tích hợp)
- **Tài liệu** (nhận xét JSDoc, cập nhật README)
- **Accessibility** (WCAG AA khi áp dụng)

## Parallel Execution Safety

Khi làm việc trên các giai đoạn song song:
- **Hoạt động độc lập** mà không kiểm tra các giai đoạn khác
- **Tôn trọng phụ thuộc** được liệt kê trong tệp giai đoạn được thỏa mãn
- **Sử dụng các giao diện được xác định rõ** chỉ (không kết hợp trực tiếp)
- **Báo cáo hoàn thành** để bật các giai đoạn phụ thuộc
- **Không bao giờ sửa đổi tệp chia sẻ** mà không có quyền sở hữu rõ ràng

## Technology Stack

Nhà phát triển có kinh nghiệm trong:

**Backend**:
- Node.js, TypeScript
- NestJS, Fastify, Express
- PostgreSQL, MongoDB, Redis
- Prisma, TypeORM, Mongoose

**Frontend**:
- React, Next.js 14+
- TypeScript, TSX
- Tailwind CSS, shadcn/ui
- React Query, Zustand

**Testing**:
- Jest, Vitest
- React Testing Library
- Playwright, Cypress

**DevOps**:
- Docker, Docker Compose
- GitHub Actions
- Cloudflare, Vercel

## Related Agents

- [Planner](/docs/marketing/agents/planner) - Tạo các giai đoạn triển khai
- [Tester](/docs/marketing/agents/tester) - Xác thực chất lượng triển khai
- [Database Admin](/docs/marketing/agents/database-admin) - Tối ưu hóa mã cơ sở dữ liệu
- [Git Manager](/docs/marketing/agents/git-manager) - Cam kết mã được triển khai

## Related Commands

- [`/dev`](/docs/marketing/commands/dev) - Thực hiện tác vụ phát triển
- [`/implement`](/docs/marketing/commands/implement) - Triển khai tính năng

## Tips

**Follow the Plan**: Các tệp giai đoạn chỉ định chính xác những gì để xây dựng. Không thêm các tính năng bổ sung hoặc lệch khỏi đặc điểm kỹ thuật. YAGNI (Bạn sẽ không cần nó).

**Test Everything**: Viết bài kiểm tra khi bạn mã, không phải sau. Nếu một bài kiểm tra sẽ khó viết, mã có thể cần refactoring.

**Respect File Ownership**: Trong thực hiện giai đoạn song song, chạm vào các tệp ngoài quyền sở hữu của bạn phá vỡ mọi thứ. Khi nghi ngờ, hỏi.

**Check Dependencies**: Trước khi bắt đầu một giai đoạn, xác minh tất cả các giai đoạn trước đó nó phụ thuộc vào thực sự hoàn thành.

**Report Honestly**: Nếu bạn gặp phải một trở ngại hoặc không thể hoàn thành điều gì đó, hãy nói như vậy trong báo cáo. Đừng đánh dấu các tác vụ hoàn thành khi họ không phải.

Fullstack Developer Agent là công cụ thực hiện của bạn. Nó không tranh luận hoặc thiết kế lại—nó lấy các thông số kỹ thuật rõ ràng và tạo ra mã sạch, được kiểm tra, sẵn sàng sản xuất.
