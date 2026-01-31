---
title: Lệnh Tổng Quan
description: Tài liệu hướng dẫn các lệnh trong ClaudeKit
section: engineer
kit: engineer
category: docs/commands
order: 0
published: true
lang: vi
---

# Tổng Quan Các Lệnh

ClaudeKit cung cấp một bộ lệnh slash toàn diện để tăng tốc quy trình phát triển của bạn. Mỗi lệnh được thiết kế cho các tác vụ cụ thể và tự động điều phối các agent phù hợp.

## Các Nhóm Lệnh

### Phát Triển Cốt Lõi (Core)

- **[/bootstrap](/docs/engineer/commands/core/bootstrap)** - Khởi tạo dự án mới với phát triển hướng đặc tả (spec-driven development)
- **[/cook](/docs/engineer/commands/core/cook)** - Phát triển tính năng mới
- **[/plan](/docs/engineer/commands/core/plan)** - Tạo kế hoạch triển khai
- **[/brainstorm](/docs/engineer/commands/core/brainstorm)** - Khám phá tính khả thi của tính năng
- **[/ask](/docs/engineer/commands/core/ask)** - Đặt câu hỏi về codebase
- **[/watzup](/docs/engineer/commands/core/watzup)** - Xem trạng thái dự án và các thay đổi gần đây
- **[/scout](/docs/engineer/commands/core/scout)** - Tìm kiếm tệp tin trong toàn bộ codebase lớn
- **[/test](/docs/engineer/commands/core/test)** - Chạy bộ thử nghiệm và nhận kết quả
- **[/debug](/docs/engineer/commands/core/debug)** - Điều tra và chẩn đoán lỗi

### Sửa Lỗi (Bug Fixing)

- **[/fix](/docs-vi/commands/fix/)** - Sửa lỗi thông minh (tự động chọn phương pháp fast/hard)
- **[/fix --quick](/docs-vi/commands/fix/fast)** - Sửa lỗi nhỏ nhanh chóng
- **[/fix](/docs-vi/commands/fix/hard)** - Sửa lỗi phức tạp với phân tích kỹ lưỡng
- **[/fix](/docs-vi/commands/fix/ci)** - Sửa lỗi GitHub Actions CI
- **[/fix](/docs-vi/commands/fix/logs)** - Phân tích và sửa lỗi từ logs
- **[/fix](/docs-vi/commands/fix/test)** - Sửa lỗi tests thất bại
- **[/fix](/docs-vi/commands/fix/ui)** - Sửa lỗi UI/UX
- **[/fix](/docs-vi/commands/fix/types)** - Sửa lỗi TypeScript type

### Tài Liệu (Documentation)

- **[/docs:init](/docs/engineer/commands/docs/init)** - Khởi tạo tài liệu dự án
- **[/docs:update](/docs/engineer/commands/docs/update)** - Cập nhật tài liệu dự án
- **[/docs:summarize](/docs/engineer/commands/docs/summarize)** - Tóm tắt tài liệu dự án

### Thao Tác Git

- **[/git cm](/docs/engineer/commands/git/commit)** - Stage và commit các thay đổi
- **[/git cp](/docs/engineer/commands/git/commit-push)** - Stage, commit và push
- **[/git pr](/docs/engineer/commands/git/pull-request)** - Tạo pull request

### Lập Kế Hoạch (Planning)

- **[/plan:ci](/docs/engineer/commands/plan/ci)** - Phân tích lỗi CI và tạo kế hoạch sửa chữa
- **[/plan:two](/docs/engineer/commands/plan/two)** - Tạo kế hoạch với 2 phương án tiếp cận
- **[/plan:cro](/docs/engineer/commands/plan/cro)** - Tạo kế hoạch tối ưu hóa chuyển đổi

### Thiết Kế & UI

- **ai-artist** hoặc **threejs** skill - Tạo thiết kế 3D với Three.js
- **ai-multimodal** skill - Trích xuất thiết kế từ ảnh chụp màn hình
- **ai-artist** skill (search mode) - Tạo thiết kế nhanh chóng
- **ai-artist** skill (creative mode) - Tạo thiết kế hoàn thiện và tinh chỉnh
- **ai-multimodal** hoặc **frontend-design** skill - Chuyển ảnh chụp màn hình thành mã nguồn
- **ai-multimodal** hoặc **remotion** skill - Chuyển video thành mã nguồn

### Nội Dung & Marketing

- **[/content:cro](/docs/engineer/commands/content/cro)** - Nội dung tối ưu hóa chuyển đổi
- **[/content:enhance](/docs/engineer/commands/content/enhance)** - Cải thiện nội dung hiện có
- **[/content:fast](/docs/engineer/commands/content/fast)** - Tạo nội dung nhanh chóng
- **[/content:good](/docs/engineer/commands/content/good)** - Nội dung chất lượng cao kèm nghiên cứu

### Tích Hợp (Integrations)

- **[/integrate:polar](/docs/engineer/commands/integrate/polar)** - Tích hợp thanh toán Polar.sh
- **[/integrate:sepay](/docs/engineer/commands/integrate/sepay)** - Tích hợp thanh toán SePay.vn (Việt Nam)

### Nhật Ký (Journaling)

- **[/journal](/docs/engineer/commands/core/journal)** - Viết nhật ký phát triển

## Tham Khảo Nhanh

### Các Lệnh Thường Dùng

```bash
# Phát triển tính năng
/plan [mô tả tính năng]      # Lập kế hoạch tính năng
/cook [mô tả tính năng]      # Triển khai tính năng

# Sửa lỗi
/fix --quick [lỗi đơn giản]     # Sửa nhanh
/fix [lỗi phức tạp]     # Điều tra kỹ lưỡng + sửa lỗi
/fix [url-github-ci]      # Sửa lỗi CI thất bại

# Tài liệu
/docs:init                   # Thiết lập lần đầu
/docs:update                 # Sau khi thay đổi mã nguồn

# Quy trình Git
/git cm                      # Commit thay đổi
/git cp                      # Commit và push
/git pr [nhánh-đích]         # Tạo pull request

# Trạng thái dự án
/watzup                      # Trạng thái hiện tại như thế nào?
/ask [câu hỏi]               # Hỏi về codebase
```

## Cú Pháp Lệnh

### Cú Pháp Cơ Bản

```bash
/lệnh [tham-số-bắt-buộc] [tham-số-tùy-chọn]
```

### Ví Dụ

```bash
# Không tham số
/test
/watzup
/docs:init

# Tham số bắt buộc
/cook [thêm xác thực người dùng]
/debug [nút đăng nhập không hoạt động]
/ask [quy trình điều hướng hoạt động như thế nào?]

# Tham số tùy chọn
/git pr                          # PR vào nhánh mặc định
/git pr [develop]                # PR vào nhánh develop
/git pr [main] [feature-branch]  # PR từ nhánh feature vào main

# Nhiều tham số
/scout [các tệp xác thực] [3]    # Tìm tệp xác thực, dùng 3 agent
```

## Quy Trình Làm Việc

### Bắt Đầu Dự Án Mới

```bash
1. /bootstrap [mô tả dự án]
   # HOẶC
   ck new --kit engineer

2. # Tùy chỉnh yêu cầu thông qua Q&A

3. # Hệ thống tự động:
   - Nghiên cứu các thực hành tốt nhất (best practices)
   - Tạo kế hoạch triển khai
   - Triển khai các tính năng
   - Tạo các bài kiểm tra (tests)
   - Thiết lập tài liệu
```

### Phát Triển Tính Năng

```bash
1. /plan [mô tả tính năng]
   # Tạo kế hoạch triển khai chi tiết

2. # Xem lại kế hoạch trong thư mục plans/

3. /cook [triển khai tính năng]
   # Triển khai dựa trên kế hoạch
   # Tạo các bài kiểm tra
   # Cập nhật tài liệu

4. /test
   # Kiểm tra lại việc triển khai

5. /git cm
   # Commit với thông điệp chuẩn (conventional commit)
```

### Sửa Lỗi

```bash
# Lỗi đơn giản (bạn đã biết cách sửa)
/fix --quick [lỗi đánh máy trong thông báo xác thực]

# Lỗi phức tạp (cần điều tra)
/fix [người dùng không thể đăng nhập sau khi đặt lại mật khẩu]
# - Dùng scout để tìm các tệp liên quan
# - Phân tích mã nguồn và nhật ký (logs)
# - Nghiên cứu giải pháp
# - Tạo kế hoạch sửa lỗi
# - Triển khai sửa lỗi
# - Kiểm tra kỹ lưỡng

# Lỗi CI
/fix [https://github.com/user/repo/actions/runs/123]
# - Đọc nhật ký CI
# - Xác định nguyên nhân thất bại
# - Triển khai sửa lỗi
# - Xác minh CI vượt qua
```

### Cập Nhật Tài Liệu

```bash
# Sau khi triển khai các tính năng
/docs:update

# Khi hướng dẫn thành viên mới
/docs:summarize

# Khi bắt đầu với một codebase hiện có
/docs:init
```

## Thực Hành Tốt Nhất

### Sử Dụng Đúng Lệnh Cho Từng Tác Vụ

✅ **Sử dụng đúng**
```bash
# Sửa lỗi nhỏ
/fix --quick [lỗi đánh máy trên văn bản nút]

# Vấn đề phức tạp
/fix [rò rỉ bộ nhớ trong kết nối websocket]

# Vấn đề UI kèm ảnh chụp màn hình
/fix [screenshot.png] - nút bị lệch trên thiết bị di động
```

❌ **Sử dụng sai**
```bash
# Đừng dùng fast cho vấn đề phức tạp
/fix --quick [toàn bộ hệ thống xác thực bị hỏng]

# Đừng dùng hard cho việc sửa lỗi đơn giản
/fix [lỗi đánh máy trong ghi chú]
```

### Cung Cấp Mô Tả Rõ Ràng

✅ **Rõ ràng**
```bash
/plan [thêm xác thực OAuth2 với nhà cung cấp Google và GitHub]
/cook [triển khai làm mới mã JWT với thời gian hết hạn 15 phút]
/debug [API trả về lỗi 500 khi tạo người dùng với email trống]
```

❌ **Mơ hồ**
```bash
/plan [thêm xác thực]
/cook [làm cho nó hoạt động]
/debug [cái gì đó bị hỏng]
```

### Kiểm Tra Trước Khi Commit

```bash
# 1. Triển khai
/cook [thêm giới hạn tốc độ - rate limiting]

# 2. Thử nghiệm
/test

# 3. Xem lại các thay đổi
git diff

# 4. Chỉ commit khi hài lòng
/git cm
```

### Sử Dụng Chuỗi Lệnh Cho Các Tác Vụ Phức Tạp

```bash
# 1. Hiểu codebase
/ask [xác thực hiện tại được triển khai như thế nào?]

# 2. Lập kế hoạch thay đổi
/plan [chuyển từ xác thực dựa trên session sang JWT]

# 3. Xem lại kế hoạch
cat plans/latest-plan.md

# 4. Triển khai
/cook [chuyển sang xác thực JWT]

# 5. Thử nghiệm
/test

# 6. Sửa nếu cần
/fix

# 7. Commit
/git cm
```

## Các Cờ Và Tùy Chọn

Một số lệnh hỗ trợ các cờ (flags):

### /bootstrap

```bash
/bootstrap [mô tả dự án]              # Q&A tương tác
/bootstrap:auto [mô tả chi tiết]       # Hoàn toàn tự động
```

### /git pr

```bash
/git pr                      # PR vào nhánh mặc định (main)
/git pr [develop]            # PR vào nhánh develop
/git pr [main] [feature]     # PR từ nhánh feature vào main
```

### /plan

```bash
/plan [tính năng]              # Một phương án tiếp cận
/plan:two [tính năng]          # Hai phương án tiếp cận khác nhau
```

## Hiểu Kết Quả Đầu Ra Của Lệnh

Các lệnh cung cấp đầu ra có cấu trúc:

### Các Lệnh Lập Kế Hoạch

```
planner Agent: Đang phân tích codebase...

Kết quả nghiên cứu:
- Đã xem lại các thực hành tốt nhất về OAuth2
- Đã xác định các mẫu xác thực hiện có
- Đã ghi nhận các cân nhắc về bảo mật

Kế hoạch triển khai đã được tạo:
📄 plans/oauth-implementation.md

Tóm tắt kế hoạch:
1. Cài đặt các phụ thuộc (passport, passport-google-oauth20)
2. Cấu hình các nhà cung cấp OAuth2
3. Triển khai các tuyến đường (routes) callback
4. Thêm quản lý session
5. Tạo các bài kiểm tra
6. Cập nhật tài liệu

Thời gian dự kiến: 2-3 giờ
Số tệp cần tạo mới: 5
Số tệp cần chỉnh sửa: 3

Tiếp theo: Xem lại kế hoạch, sau đó chạy /cook
```

### Các Lệnh Triển Khai

```
Code Agent: Đang triển khai từ kế hoạch...

Các phụ thuộc đã cài đặt:
✓ passport (0.6.0)
✓ passport-google-oauth20 (2.0.0)

Các tệp đã tạo:
✓ src/auth/oauth-config.js
✓ src/auth/google-strategy.js
✓ src/routes/auth-callback.js

Các bài kiểm tra đã tạo:
✓ tests/auth/oauth.test.js (15 tests)

Tài liệu đã được cập nhật:
✓ docs/api/authentication.md

Triển khai hoàn tất!

Tiếp theo: Chạy /test để xác minh
```

### Các Lệnh Thử Nghiệm

```
tester Agent: Đang chạy bộ thử nghiệm...

Kết quả thử nghiệm:
✓ Unit tests: 45 passed
✓ Integration tests: 12 passed
✓ E2E tests: 8 passed

Độ bao phủ (Coverage): 87.3%

Tất cả các bài kiểm tra đã vượt qua!

Tiếp theo: Xem lại các thay đổi, sau đó chạy /git cm
```

## Xử Lý Sự Cố

### Không Tìm Thấy Lệnh

**Vấn đề**: `/lệnh` không được nhận diện

**Giải pháp:**
1. Xác minh bạn đang ở trong một dự án ClaudeKit (`ls .claude/`)
2. Kiểm tra xem lệnh có tồn tại không (`ls .claude/commands/`)
3. Chạy `ck init` để cập nhật các lệnh mới nhất
4. Khởi động lại Claude Code

### Lệnh Thất Bại

**Vấn đề**: Lệnh gặp lỗi trong quá trình thực thi

**Giải pháp:**
1. Kiểm tra thông báo lỗi để biết vấn đề cụ thể
2. Xác minh các điều kiện tiên quyết (API keys, phụ thuộc)
3. Xem lại nhật ký của agent
4. Thử lại lệnh với đầu vào đơn giản hơn
5. Sử dụng `/debug` để điều tra

### Kết Quả Không Như Mong Đợi

**Vấn đề**: Lệnh không thực hiện đúng những gì mong đợi

**Giải pháp:**
1. Xem lại tài liệu của lệnh
2. Kiểm tra xem đã sử dụng đúng lệnh cho tác vụ chưa
3. Cung cấp mô tả cụ thể hơn
4. Xem lại các kế hoạch đã tạo trước khi triển khai
5. Sử dụng phản hồi để tinh chỉnh

## Bước Tiếp Theo

Khám phá các nhóm lệnh cụ thể:

- [Lệnh Cốt Lõi](/docs/engineer/commands/core/) - Các lệnh thiết yếu cho phát triển
- [Lệnh Sửa Lỗi](/docs/engineer/commands/fix/) - Gỡ lỗi và sửa chữa
- [Lệnh Thiết Kế](/docs/engineer/commands/design/) - Tạo UI/UX
- [Lệnh Git](/docs/engineer/commands/git/) - Quản lý phiên bản

Hoặc tìm hiểu thêm về:

- [Agent](/docs/engineer/agents/) - Cách các lệnh gọi agent
- [Quy trình làm việc](/docs/core-concepts/workflows) - Các luồng thực thi lệnh
- [Bắt đầu nhanh](/docs/getting-started/quick-start) - Hướng dẫn thực hành trực tiếp

---

**Điểm mấu chốt**: Các lệnh ClaudeKit cung cấp một giao diện tự nhiên, trực quan cho việc điều phối agent mạnh mẽ, giúp các tác vụ phát triển phức tạp trở nên đơn giản và có thể lặp lại.
