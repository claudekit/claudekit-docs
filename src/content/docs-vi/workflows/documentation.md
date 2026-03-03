---
title: "Documentation Workflow"
lang: vi
description: "Giữ tài liệu đồng bộ với các thay đổi code bằng ClaudeKit"
section: workflows
category: engineer
order: 3
published: true
---
# Documentation Workflow

Giữ tài liệu đồng bộ với các thay đổi code bằng cách quản lý tài liệu tự động của ClaudeKit.

## Tổng quan

Documentation workflow đảm bảo tài liệu dự án của bạn luôn cập nhật, chính xác và hữu ích khi codebase phát triển.

## Khi nào dùng quy trình này

- Bắt đầu dự án mới
- Sau khi hoàn thành tính năng
- Trước khi phát hành
- Khi onboarding thành viên nhóm mới
- Bảo trì tài liệu định kỳ

## Hướng dẫn từng bước

### 1. Khởi tạo tài liệu
```bash
/ck:docs init
```

**Điều gì xảy ra**:
- **Docs Manager Agent** tạo cấu trúc tài liệu
- **Researcher Agent** phân tích codebase hiện có
- **Planner Agent** tạo kế hoạch tài liệu
- Thiết lập công cụ tài liệu

**Đầu ra được tạo**:
- Cấu trúc thư mục `docs/`
- README.md với tổng quan dự án
- Template tài liệu API
- Hướng dẫn đóng góp
- Quy tắc ứng xử
- Tài liệu kiến trúc

### 2. Tạo tài liệu ban đầu
```bash
/ck:docs init "comprehensive project documentation"
```

**Điều gì xảy ra**:
- **Docs Manager Agent** tạo docs ban đầu
- **Researcher Agent** trích xuất thông tin từ code
- **UI/UX Designer Agent** tạo sơ đồ và hình ảnh
- **Copywriter Agent** viết giải thích rõ ràng

**Tài liệu được tạo**:
- Tổng quan và mục tiêu dự án
- Sơ đồ kiến trúc
- Tài liệu API từ chú thích code
- Hướng dẫn thiết lập và cài đặt
- Tài liệu quy trình phát triển

### 3. Cập nhật tài liệu sau thay đổi
```bash
/ck:docs update "after implementing user authentication"
```

**Điều gì xảy ra**:
- **Docs Manager Agent** xác định những gì cần cập nhật
- **Researcher Agent** phân tích các thay đổi code
- **Code Reviewer Agent** đảm bảo độ chính xác kỹ thuật
- **Copywriter Agent** cải thiện độ rõ ràng và khả năng đọc

**Các cập nhật được áp dụng**:
- Tài liệu API cho các endpoints mới
- Tài liệu tính năng mới
- Sơ đồ kiến trúc được cập nhật
- Hướng dẫn thiết lập được sửa đổi
- Ví dụ và hướng dẫn mới

### 4. Review tài liệu toàn diện
```bash
/ck:docs summarize "complete documentation review"
```

**Điều gì xảy ra**:
- **Docs Manager Agent** thực hiện review toàn diện
- **Copywriter Agent** cải thiện chất lượng viết
- **UI/UX Designer Agent** tạo sơ đồ còn thiếu
- **Tester Agent** xác nhận các ví dụ code

**Phạm vi review**:
- Kiểm tra tính nhất quán trên tất cả docs
- Xác minh độ chính xác của các ví dụ code
- Đánh giá tính đầy đủ
- Cải thiện khả năng đọc và rõ ràng
- Nâng cao nội dung hình ảnh

## Ví dụ thực tế

Hãy lập tài liệu cho tính năng xác thực mới:

### Bước 1: Thiết lập ban đầu
```bash
/ck:docs init
```

**Cấu trúc được tạo**:
```
docs/
├── README.md
├── getting-started/
│   ├── installation.md
│   └── quick-start.md
├── api/
│   ├── authentication.md
│   ├── users.md
│   └── errors.md
├── architecture/
│   ├── overview.md
│   └── database-schema.md
└── development/
    ├── contributing.md
    └── testing.md
```

### Bước 2: Cập nhật sau tính năng
```bash
/ck:docs update "after implementing OAuth authentication"
```

**Các cập nhật được thực hiện**:
- Thêm hướng dẫn xác thực OAuth
- Cập nhật tài liệu API với endpoints mới
- Sửa đổi quick-start để bao gồm thiết lập auth
- Tạo sơ đồ kiến trúc xác thực
- Thêm phần xử lý sự cố

### Bước 3: Review và cải thiện
```bash
/ck:docs summarize "authentication documentation quality"
```

**Các cải tiến được áp dụng**:
- Đơn giản hóa các giải thích phức tạp
- Thêm nhiều ví dụ code hơn
- Tạo hướng dẫn từng bước
- Cải thiện cấu trúc điều hướng
- Thêm phần FAQ

## Các loại tài liệu

### Tài liệu API
```bash
/ck:docs init "generate API documentation from code"
```
- REST API endpoints
- GraphQL schemas
- WebSocket events
- Ví dụ request/response
- Mã lỗi và xử lý

### Hướng dẫn người dùng
```bash
/ck:docs update "create user guide for new feature"
```
- Hướng dẫn từng bước
- Các trường hợp sử dụng phổ biến
- Thực hành tốt nhất
- Hướng dẫn xử lý sự cố
- Phần FAQ

### Tài liệu nhà phát triển
```bash
/ck:docs update "development setup and workflows"
```
- Thiết lập phát triển local
- Hướng dẫn đóng góp code
- Quy trình kiểm thử
- Quy trình phát hành
- Quyết định kiến trúc

### Tài liệu kiến trúc
```bash
/ck:docs summarize "system architecture and design"
```
- Kiến trúc cấp cao
- Sơ đồ luồng dữ liệu
- Tương tác dịch vụ
- Database schemas
- Cân nhắc bảo mật

## Quy trình tài liệu nâng cao

### Tài liệu đa ngôn ngữ
```bash
/ck:docs update "create Japanese translation of user guide"
```
- Dịch tự động với review của con người
- Thích nghi văn hóa
- Ví dụ theo vùng
- Ảnh chụp màn hình được bản địa hóa

### Tài liệu tương tác
```bash
/ck:docs init "create interactive API documentation"
```
- API consoles thử ngay
- Hướng dẫn tương tác
- Ví dụ code trực tiếp
- Demo được nhúng

### Tài liệu video
```bash
/ck:docs update "create video tutorials for complex features"
```
- Quy trình ghi màn hình
- Giải thích có hoạt hình
- Hướng dẫn video từng bước
- Giải thích khái niệm hình ảnh

## Thực hành tốt nhất

### Viết tài liệu chất lượng
1. **Mục đích rõ ràng**: Mỗi tài liệu có mục tiêu và đối tượng rõ ràng
2. **Phong cách nhất quán**: Tuân theo style guides đã thiết lập
3. **Ví dụ thực tế**: Bao gồm ví dụ code từ thực tế
4. **Cập nhật thường xuyên**: Giữ docs hiện tại với thay đổi code
5. **Phản hồi người dùng**: Kết hợp góp ý và sửa chữa từ người dùng

### Cấu trúc tài liệu
1. **Tổ chức hợp lý**: Nhóm nội dung liên quan lại
2. **Điều hướng rõ ràng**: Dễ tìm thông tin liên quan
3. **Tiết lộ lũy tiến**: Bắt đầu đơn giản, tăng dần độ phức tạp
4. **Tham chiếu chéo**: Liên kết giữa các tài liệu liên quan
5. **Tối ưu tìm kiếm**: Dùng tiêu đề và từ khóa rõ ràng

### Ví dụ code trong tài liệu
1. **Ví dụ hoạt động được**: Tất cả ví dụ code phải được kiểm tra
2. **Ngữ cảnh đầy đủ**: Hiển thị các imports và thiết lập cần thiết
3. **Xử lý lỗi**: Bao gồm các mẫu xử lý lỗi phù hợp
4. **Nhiều ngôn ngữ**: Cung cấp ví dụ bằng các ngôn ngữ khác nhau khi có thể
5. **Phiên bản cụ thể**: Chỉ rõ tính tương thích phiên bản

## Tích hợp với quy trình phát triển

### Kiểm tra tài liệu trước commit
```bash
# Add to pre-commit hook
/ck:docs summarize "check documentation for changes"
```

### Cập nhật tài liệu tự động
```bash
# Run after feature completion
/ck:cook
/ck:docs update "document new feature"
/ck:git cm
```

### Tài liệu phát hành
```bash
/ck:docs update "prepare release notes and documentation"
/ck:docs summarize "final review before release"
```

## Đo lường chất lượng tài liệu

### Các chỉ số cần theo dõi
- Tỷ lệ phạm vi tài liệu
- Điểm phản hồi người dùng
- Thời gian tìm thông tin
- Số lượng ticket hỗ trợ giảm
- Thời gian onboarding nhà phát triển

### Đánh giá chất lượng
```bash
/ck:docs summarize "comprehensive documentation quality assessment"
```
- Phân tích tính đầy đủ
- Xác minh độ chính xác
- Chấm điểm khả năng đọc
- Đánh giá trải nghiệm người dùng
- Yêu cầu bảo trì

## Công cụ và tích hợp

### Nền tảng tài liệu
- GitBook cho docs hướng đến người dùng
- Notion cho knowledge base nội bộ
- GitHub Pages cho site tĩnh
- Confluence cho tài liệu nhóm
- Docusaurus cho docs dựa trên React

### Tự động hóa
- GitHub Actions để build docs
- Tạo docs API tự động
- Quy trình kiểm tra liên kết
- Kiểm tra chính tả và ngữ pháp
- Tự động hóa ảnh chụp màn hình

## Nhận trợ giúp

- [Writing Style Guide](/vi/docs/engineer)
- [Templates and Examples](/vi/docs/engineer)
- [Community Forum](https://forum.claudekit.com)
- [Documentation Best Practices](/vi/docs/engineer)

## Quy trình liên quan

- [Adding a New Feature](/vi/docs/workflows/adding-feature) - Xây dựng tính năng cần tài liệu
- [Code Review](/vi/docs/workflows) - Review tài liệu cùng với code
- [Release Management](/vi/docs/workflows) - Chuẩn bị release notes
