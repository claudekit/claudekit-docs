---
title: "Docs Manager Agent"
description: "Duy trì tài liệu chính xác, toàn diện được đồng bộ hóa với codebase của bạn."
section: marketing
category: agents
order: 3
---

# Docs Manager Agent

> **Người bảo vệ tài liệu của bạn** - Giữ tài liệu chính xác, được tổ chức và thực sự hữu ích

## Công Việc Của Agent Này

Hệ thống chiến dịch của bạn phát triển. Bạn thêm các tính năng mới, refactor API, thay đổi schema cơ sở dữ liệu. Nhưng tài liệu của bạn vẫn mô tả hệ thống cũ. Các thành viên đội ngũ mới đọc tài liệu lỗi thời và triển khai sai.

**Vấn đề**: Tài liệu thối rữa nhanh. Codebase thay đổi hàng ngày trong khi tài liệu lạc hậu, trở thành gây hiểu lầm chứ không phải giúp đỡ. Các nhà phát triển bỏ qua cập nhật tài liệu vì nó tẻ nhạt, và không ai nhận thấy cho đến khi ai đó lãng phí hàng giờ theo các hướng dẫn lỗi thời.

**Giải pháp**: Docs Manager Agent duy trì sự đồng bộ hóa giữa mã và tài liệu. Nó phân tích codebase của bạn, xác định tài liệu lỗi thời, cập nhật các thông số kỹ thuật và đảm bảo tài liệu của bạn thực sự phản ánh hiện thực. Bạn nhận được tài liệu giúp đỡ thay vì gây nhầm lẫn.

## Bắt Đầu Nhanh

Cập nhật tài liệu sau các thay đổi lớn:

```bash
# Sau khi refactor API của bạn
/docs "Update documentation for new webhook API"
```

Agent phân tích các thay đổi mã, cập nhật các tài liệu liên quan và đảm bảo tính nhất quán trên tất cả các tệp tài liệu.

## Khả Năng

### Documentation Analysis & Maintenance
Xem xét một cách có hệ thống tất cả tài liệu dự án:
- Quét thư mục `docs/` để tìm khoảng trống và mâu thuẫn
- Tham chiếu chéo tài liệu với triển khai codebase thực tế
- Xác định thông tin lỗi thời và liên kết bị hỏng
- Duy trì hệ thống phân cấp tài liệu và điều hướng
- Đảm bảo định dạng và thuật ngữ nhất quán

### Code-to-Documentation Synchronization
Giữ tài liệu cập nhật với các thay đổi mã:
- Phân tích bản chất và phạm vi của các thay đổi mã
- Xác định tất cả các tài liệu cần cập nhật
- Cập nhật tài liệu API, hướng dẫn cấu hình, hướng dẫn tích hợp
- Đảm bảo ví dụ mã và đoạn trích là chức năng
- Tài liệu những thay đổi đột phá và đường dẫn di chuyển

### Product Development Requirements (PDRs)
Tạo và duy trì các PDR toàn diện:
- Xác định các yêu cầu chức năng và phi chức năng rõ ràng
- Chỉ định tiêu chí chấp nhận và chỉ số thành công
- Bao gồm các ràng buộc kỹ thuật và phụ thuộc
- Cung cấp hướng dẫn triển khai và quyết định kiến trúc
- Theo dõi các thay đổi yêu cầu và lịch sử phiên bản

### Developer Productivity Optimization
Tổ chức tài liệu để có hiệu quả tối đa:
- Giảm thiểu thời gian để hiểu cho các nhà phát triển mới
- Cung cấp các hướng dẫn tham khảo nhanh cho các tác vụ phổ biến
- Bao gồm hướng dẫn khắc phục sự cố và FAQ
- Duy trì hướng dẫn thiết lập và triển khai hiện tại
- Tạo tài liệu onboarding rõ ràng

### Codebase Summary Generation
Tạo tổng quan codebase toàn diện:
- Chạy `repomix` để tạo sự nén codebase
- Tạo `docs/codebase-summary.md` từ phân tích
- Tài liệu cấu trúc dự án và các tệp chính
- Giải thích các mẫu kiến trúc và quy ước
- Cập nhật tự động khi codebase phát triển

## Khi Nào Sử Dụng

Sử dụng Docs Manager Agent khi bạn cần:
- Cập nhật tài liệu sau khi triển khai tính năng
- Tạo các thông số kỹ thuật cho các tính năng mới
- Đồng bộ hóa tài liệu với mã được refactor
- Tạo các tóm tắt codebase cho các thành viên đội mới
- Thiết lập các tiêu chuẩn tài liệu và cấu trúc
- Kiểm tra chất lượng tài liệu và độ bao phủ

## Ví Dụ Quy Trình Làm Việc

### Post-Feature Documentation Update

```bash
# Sau khi triển khai hệ thống chiến dịch email
/docs "Document the new email campaign API and workflow"
```

**Người quản lý sẽ**:
1. Phân tích triển khai chiến dịch email
2. Cập nhật tài liệu API bằng các điểm cuối mới
3. Tạo sơ đồ quy trình làm việc và ví dụ
4. Cập nhật hướng dẫn tích hợp
5. Thêm phần khắc phục sự cố
6. Xác minh tất cả các ví dụ mã hoạt động
7. Cập nhật mục lục và điều hướng

### Codebase Summary Generation

```bash
# Cho các thành viên đội mới tham gia dự án
/docs "Generate comprehensive codebase summary"
```

**Bạn sẽ nhận được**:
1. Tổng quan cấu trúc dự án hoàn chỉnh
2. Giải thích các tệp chính và mục đích của chúng
3. Các mẫu kiến trúc được tài liệu
4. Tiêu chuẩn mã và quy ước
5. Các điểm tích hợp được lập bản đồ
6. Stack công nghệ được tài liệu

## Best Practices

1. **Update Docs During Development**: Đừng chờ cho đến sau khi gửi. Cập nhật tài liệu khi bạn xây dựng các tính năng. Docs Manager làm điều này nhanh.

2. **Run After Refactoring**: Các refactor lớn thường phá vỡ các ví dụ tài liệu. Chạy trình quản lý để bắt và sửa các vấn đề này.

3. **Periodic Audits**: Các cuộc kiểm toán tài liệu hàng tháng bắt sự trôi nổi trước khi nó trở thành gây hiểu lầm. Lên lịch các bài đánh giá thường xuyên.

4. **Write for Future You**: Tài liệu dành cho nhà phát triển tham gia dự án của bạn trong 6 tháng. Làm cho onboarding của họ không gây đau đớn.

## Documentation Standards

Người quản lý duy trì các tệp này trong `docs/`:

```
docs/
├── project-overview-pdr.md      # Yêu cầu sản phẩm và tổng quan
├── code-standards.md            # Quy ước mã hóa và tiêu chuẩn
├── codebase-summary.md          # Tóm tắt cấu trúc dự án được tạo
├── system-architecture.md       # Thiết kế hệ thống và kiến trúc
├── project-roadmap.md           # Dòng thời gian và mốc dự án
├── api-documentation.md         # Các điểm cuối API và thông số kỹ thuật
└── deployment-guide.md          # Hướng dẫn triển khai và hoạt động
```

### Frontmatter Requirements

Tất cả tài liệu bao gồm siêu dữ liệu:

```yaml
---
title: "Document Title"
description: "Brief description for search"
category: "guides"
lastUpdated: 2025-12-29
version: "1.0.0"
---
```

### Quality Checklist

Người quản lý đảm bảo:
- Tất cả tên biến/hàm sử dụng đúng trường hợp (camelCase, PascalCase, snake_case)
- Các ví dụ mã được kiểm tra và chức năng
- Liên kết hợp lệ (không có 404)
- Ảnh chụp màn hình cập nhật
- Tài liệu API khớp với thông số Swagger/OpenAPI
- Số phiên bản chính xác
- Các tham chiếu chéo hoạt động chính xác

## Report Output Format

Người quản lý cung cấp báo cáo tài liệu chi tiết:

```markdown
## Documentation Update Report

### Current State Assessment
- Tổng số tệp tài liệu: 12
- Bảo hiểm: 85% (tốt)
- Cập nhật cuối cùng: 2 tệp lỗi thời (>30 ngày)
- Liên kết bị hỏng: 0
- Phần bị thiếu: "Error Handling" trong tài liệu API

### Changes Made
✅ Tài liệu API được cập nhật
  - Thêm 3 điểm cuối webhook mới
  - Cập nhật phần xác thực
  - Sửa 2 ví dụ mã bị hỏng

✅ Codebase summary làm mới
  - Các mô-đun được thêm: email, notifications
  - Phiên bản tech stack được cập nhật
  - Refactoring gần đây được tài liệu

### Gaps Identified
⚠️ Hướng dẫn triển khai thiếu Kubernetes setup
⚠️ Không có hướng dẫn khắc phục sự cố cho các lỗi phổ biến
⚠️ Giới hạn tỷ lệ API không được tài liệu

### Recommendations
Ưu tiên 1: Thêm hướng dẫn triển khai Kubernetes
Ưu tiên 2: Tạo phần khắc phục sự cố với FAQ
Ưu tiên 3: Tài liệu giới hạn tỷ lệ và logic thử lại

### Metrics
- Bảo hiểm tài liệu: 85% → 92%
- Tuổi trung bình tài liệu: 45 ngày → 12 ngày
- Liên kết bị hỏng: 3 → 0
```

## Integration with Development Workflow

Docs Manager tích hợp liền mạch:
- **During Feature Development**: Cập nhật tài liệu cùng với mã
- **Code Review Process**: Bao gồm các đánh giá tài liệu
- **Pre-Release**: Xác thực tài liệu hiện tại trước khi gửi
- **Post-Deployment**: Cập nhật tài liệu hoạt động với những hiểu biết mới

## Related Agents

- [Project Manager](/docs/marketing/agents/project-manager) - Kích hoạt cập nhật tài liệu sau các mốc đích tiêu
- [Planner](/docs/marketing/agents/planner) - Tạo các kế hoạch trở thành tài liệu
- [Git Manager](/docs/marketing/agents/git-manager) - Cam kết các thay đổi tài liệu

## Related Commands

- [`/docs`](/docs/marketing/commands/docs) - Cập nhật hoặc tạo tài liệu
- [`/audit`](/docs/marketing/commands/audit) - Chạy kiểm toán chất lượng tài liệu

## Tips

**Start with Structure**: Nếu `docs/` không tồn tại, người quản lý tạo nó với nền tảng vững chắc. Để nó thiết lập cấu trúc, sau đó tùy chỉnh.

**Use Repomix**: Người quản lý sử dụng `repomix` để tạo tóm tắt codebase. Điều này cung cấp cho các thành viên đội mới một cái nhìn tổng quan toàn diện trong vài phút.

**Documentation as Code**: Coi tài liệu giống như mã. Giữ nó trong kiểm soát phiên bản, xem xét các thay đổi và chạy các kiểm tra tự động.

**Examples Over Prose**: Người quản lý ưu tiên các ví dụ thực tế hơn các giải thích dài dòng. Hiển thị, đừng chỉ nói.
