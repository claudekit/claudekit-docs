---
title: "Docs Manager Agent"
description: "Duy trì tài liệu kỹ thuật chính xác, toàn diện và đồng bộ với codebase của bạn."
section: marketing
category: agents
order: 3
lang: vi
---

# Docs Manager Agent

> **Người bảo vệ tài liệu của bạn** - Giữ cho tài liệu luôn chính xác, có tổ chức và thực sự hữu ích.

## Đại lý này làm gì

Hệ thống chiến dịch của bạn đã phát triển. Bạn đã thêm các tính năng mới, tái cấu trúc (refactor) API, thay đổi sơ đồ cơ sở dữ liệu. Nhưng tài liệu của bạn vẫn mô tả hệ thống cũ. Các thành viên mới trong nhóm đọc phải tài liệu lỗi thời và triển khai công việc sai cách.

**Vấn đề**: Tài liệu xuống cấp rất nhanh. Codebase thay đổi hàng ngày trong khi tài liệu bị tụt lại phía sau, trở thành thứ gây nhầm lẫn thay vì giúp ích. Các nhà phát triển thường bỏ qua việc cập nhật tài liệu vì nó tẻ nhạt, và không ai nhận ra cho đến khi có người lãng phí hàng giờ đồng hồ làm theo những hướng dẫn đã lỗi thời.

**Giải pháp**: Docs Manager Agent duy trì sự đồng bộ giữa mã nguồn và tài liệu. Nó phân tích codebase của bạn, xác định các tài liệu đã cũ, cập nhật các thông số kỹ thuật và đảm bảo tài liệu phản ánh đúng thực tế. Bạn sẽ có được những tài liệu thực sự hỗ trợ thay vì gây bối rối.

## Bắt đầu nhanh

Cập nhật tài liệu sau những thay đổi lớn:

```bash
# Sau khi tái cấu trúc API của bạn
/docs "Update documentation for new webhook API"
```

Đại lý sẽ phân tích các thay đổi trong mã, cập nhật các tài liệu liên quan và đảm bảo tính nhất quán trên tất cả các tệp tài liệu.

## Khả năng

### Phân tích & Bảo trì tài liệu
Xem xét một cách hệ thống toàn bộ tài liệu dự án:
- Quét thư mục `docs/` để tìm các lỗ hổng và sự thiếu nhất quán
- Đối chiếu tài liệu với triển khai thực tế trong codebase
- Xác định thông tin lỗi thời và các liên kết bị hỏng
- Duy trì cấu trúc phân cấp và điều hướng của tài liệu
- Đảm bảo định dạng và thuật ngữ nhất quán

### Đồng bộ hóa Mã nguồn và Tài liệu
Giữ cho tài liệu luôn cập nhật với các thay đổi trong mã:
- Phân tích bản chất và phạm vi của các thay đổi mã
- Xác định tất cả tài liệu cần được cập nhật
- Cập nhật tài liệu API, hướng dẫn cấu hình, hướng dẫn tích hợp
- Đảm bảo các ví dụ mã và đoạn trích (snippets) hoạt động tốt
- Tài liệu hóa các thay đổi gây đột phá (breaking changes) và lộ trình di chuyển

### Yêu cầu Phát triển Sản phẩm (PDRs)
Tạo và duy trì các PDR toàn diện:
- Xác định rõ ràng các yêu cầu chức năng và phi chức năng
- Chỉ định các tiêu chí chấp nhận và chỉ số thành công
- Bao gồm các ràng buộc kỹ thuật và các phụ thuộc
- Cung cấp hướng dẫn triển khai và các quyết định kiến trúc
- Theo dõi lịch sử thay đổi yêu cầu và phiên bản

### Tối ưu hóa năng suất nhà phát triển
Tổ chức tài liệu để đạt hiệu quả tối đa:
- Giảm thiểu thời gian tìm hiểu cho các nhà phát triển mới
- Cung cấp các hướng dẫn tham khảo nhanh cho các tác vụ phổ biến
- Bao gồm các hướng dẫn khắc phục sự cố và câu hỏi thường gặp (FAQ)
- Duy trì các hướng dẫn thiết lập và triển khai mới nhất
- Tạo tài liệu hướng dẫn gia nhập (onboarding) rõ ràng

### Tạo tóm tắt Codebase
Tạo cái nhìn tổng quan toàn diện về codebase:
- Chạy `repomix` để tạo bản tóm tắt codebase
- Tạo tệp `docs/codebase-summary.md` từ kết quả phân tích
- Tài liệu hóa cấu trúc dự án và các tệp quan trọng
- Giải thích các mô hình kiến trúc và các quy ước
- Tự động cập nhật khi codebase thay đổi

## Khi nào nên sử dụng

Sử dụng Docs Manager Agent khi bạn cần:
- Cập nhật tài liệu sau khi triển khai tính năng
- Tạo thông số kỹ thuật cho các tính năng mới
- Đồng bộ tài liệu với mã nguồn vừa được tái cấu trúc
- Tạo tóm tắt codebase cho thành viên mới trong nhóm
- Thiết lập các tiêu chuẩn và cấu trúc tài liệu
- Kiểm tra chất lượng và độ bao phủ của tài liệu

## Ví dụ quy trình làm việc

### Cập nhật tài liệu sau khi hoàn thành tính năng

```bash
# Sau khi triển khai hệ thống chiến dịch email
/docs "Document the new email campaign API and workflow"
```

**Đại lý quản lý sẽ**:
1. Phân tích triển khai chiến dịch email
2. Cập nhật tài liệu API với các điểm cuối (endpoints) mới
3. Tạo sơ đồ quy trình và các ví dụ
4. Cập nhật các hướng dẫn tích hợp
5. Thêm phần khắc phục sự cố
6. Xác minh tất cả ví dụ mã đều hoạt động
7. Cập nhật mục lục và điều hướng

### Tạo tóm tắt Codebase

```bash
# Dành cho thành viên mới gia nhập dự án
/docs "Generate comprehensive codebase summary"
```

**Bạn sẽ nhận được**:
1. Tổng quan cấu trúc dự án hoàn chỉnh
2. Giải thích các tệp quan trọng và mục đích của chúng
3. Tài liệu hóa các mô hình kiến trúc
4. Các tiêu chuẩn và quy ước mã nguồn
5. Bản đồ các điểm tích hợp
6. Tài liệu về ngăn xếp công nghệ (tech stack)

## Thực hành tốt nhất

1. **Cập nhật tài liệu trong khi phát triển**: Đừng đợi đến khi sản phẩm đã xuất xưởng. Hãy cập nhật tài liệu song song với quá trình xây dựng tính năng. Docs Manager giúp việc này trở nên nhanh chóng.

2. **Chạy sau khi tái cấu trúc (Refactoring)**: Những đợt tái cấu trúc lớn thường làm hỏng các ví dụ trong tài liệu. Hãy chạy đại lý để phát hiện và sửa những lỗi này.

3. **Kiểm tra định kỳ**: Các đợt kiểm tra tài liệu hàng tháng giúp ngăn chặn sự sai lệch trước khi nó trở nên gây nhầm lẫn. Hãy lên lịch xem xét định kỳ.

4. **Viết cho "chính bạn" trong tương lai**: Tài liệu dành cho nhà phát triển sẽ tham gia dự án của bạn sau 6 tháng nữa. Hãy làm cho quá trình gia nhập của họ trở nên dễ dàng.

## Tiêu chuẩn tài liệu

Đại lý duy trì các tệp sau trong thư mục `docs/`:

```
docs/
├── project-overview-pdr.md      # Yêu cầu sản phẩm và tổng quan
├── code-standards.md            # Các quy ước và tiêu chuẩn mã hóa
├── codebase-summary.md          # Tóm tắt cấu trúc dự án được tạo tự động
├── system-architecture.md       # Thiết kế và kiến trúc hệ thống
├── project-roadmap.md           # Lộ trình dự án và các cột mốc
├── api-documentation.md         # Các điểm cuối và thông số API
└── deployment-guide.md          # Hướng dẫn triển khai và vận hành
```

### Yêu cầu Frontmatter

Tất cả tài liệu đều bao gồm siêu dữ liệu (metadata):

```yaml
---
title: "Tiêu đề tài liệu"
description: "Mô tả ngắn gọn để tìm kiếm"
category: "guides"
lastUpdated: 2025-12-29
version: "1.0.0"
---
```

### Danh sách kiểm tra chất lượng

Đại lý đảm bảo:
- Tất cả tên biến/hàm sử dụng đúng kiểu chữ (camelCase, PascalCase, snake_case)
- Các ví dụ mã đã được kiểm tra và hoạt động
- Các liên kết đều hợp lệ (không có lỗi 404)
- Ảnh chụp màn hình là mới nhất
- Tài liệu API khớp với thông số Swagger/OpenAPI
- Số phiên bản chính xác
- Các tham chiếu chéo hoạt động đúng

## Định dạng báo cáo đầu ra

Đại lý cung cấp các báo cáo tài liệu chi tiết:

```markdown
## Báo cáo cập nhật tài liệu

### Đánh giá trạng thái hiện tại
- Tổng số tệp tài liệu: 12
- Độ bao phủ: 85% (tốt)
- Cập nhật cuối: 2 tệp đã cũ (>30 ngày)
- Liên kết hỏng: 0
- Các phần còn thiếu: "Xử lý lỗi" trong tài liệu API

### Các thay đổi đã thực hiện
✅ Đã cập nhật tài liệu API
  - Thêm 3 điểm cuối webhook mới
  - Cập nhật phần xác thực
  - Sửa 2 ví dụ mã bị lỗi

✅ Đã làm mới tóm tắt codebase
  - Thêm các mô-đun mới: email, notifications
  - Cập nhật phiên bản tech stack
  - Tài liệu hóa đợt tái cấu trúc gần đây

### Các lỗ hổng được xác định
⚠️ Hướng dẫn triển khai thiếu phần thiết lập Kubernetes
⚠️ Thiếu hướng dẫn khắc phục các lỗi phổ biến
⚠️ Giới hạn tốc độ (rate limiting) API chưa được tài liệu hóa

### Khuyến nghị
Ưu tiên 1: Thêm hướng dẫn triển khai Kubernetes
Ưu tiên 2: Tạo phần khắc phục sự cố với các câu hỏi thường gặp (FAQ)
Ưu tiên 3: Tài liệu hóa giới hạn tốc độ và logic thử lại (retry logic)

### Các chỉ số
- Độ bao phủ tài liệu: 85% → 92%
- Tuổi trung bình của tài liệu: 45 ngày → 12 ngày
- Liên kết hỏng: 3 → 0
```

## Tích hợp với quy trình phát triển

Docs Manager tích hợp một cách liền mạch:
- **Trong khi phát triển tính năng**: Cập nhật tài liệu song song với mã nguồn
- **Quy trình xem xét mã (Code Review)**: Bao gồm cả việc xem xét tài liệu
- **Trước khi phát hành**: Xác minh tài liệu là mới nhất trước khi giao hàng
- **Sau khi triển khai**: Cập nhật các tài liệu vận hành với những hiểu biết mới

## Các đại lý liên quan

- [Project Manager](/vi/docs/marketing/agents/project-manager) - Kích hoạt cập nhật tài liệu sau các cột mốc
- [Planner](/vi/docs/marketing/agents/planner) - Tạo ra các kế hoạch và chúng trở thành tài liệu
- [Git Manager](/vi/docs/marketing/agents/git-manager) - Thực hiện commit các thay đổi tài liệu

## Các lệnh liên quan

- [`/docs`](/vi/docs/marketing/commands/docs) - Cập nhật hoặc tạo tài liệu mới
- [`/audit`](/vi/docs/marketing/commands/audit) - Chạy kiểm tra chất lượng tài liệu

## Mẹo

**Bắt đầu với cấu trúc**: Nếu thư mục `docs/` chưa tồn tại, đại lý sẽ tạo nó với một nền tảng vững chắc. Hãy để nó thiết lập cấu trúc, sau đó bạn có thể tùy chỉnh.

**Sử dụng Repomix**: Đại lý sử dụng `repomix` để tạo tóm tắt codebase. Điều này giúp thành viên mới có cái nhìn toàn diện chỉ trong vài phút.

**Tài liệu như là Mã nguồn (Documentation as Code)**: Hãy đối xử với tài liệu như mã nguồn. Lưu giữ trong hệ thống quản lý phiên bản, xem xét các thay đổi và chạy các bước kiểm tra tự động.

**Ví dụ quan trọng hơn lời văn**: Đại lý ưu tiên các ví dụ thực tế hơn là những giải thích dài dòng. Hãy minh họa thay vì chỉ nói suông.
