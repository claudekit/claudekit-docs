---
lang: vi
title: /ck:watzup
description: Documentation for watzup
section: engineer
kit: engineer
category: commands/core
order: 7
published: true
---

# /ck:watzup

Lệnh xem xét nhanh phân tích nhánh hiện tại, commits gần đây và thay đổi code để cung cấp tổng hợp toàn diện về công việc đã hoàn thành. Hoàn hảo cho stand-ups, code reviews, hoặc hiểu hoạt động gần đây.

## Cú pháp

```bash
/ck:watzup
```

## Chức năng

Lệnh `/ck:watzup` cung cấp tổng quan toàn diện về:

1. **Trạng thái nhánh hiện tại**
   - Tên nhánh đang hoạt động
   - So sánh với nhánh main/master
   - Số lượng commits ahead/behind

2. **Commits gần đây**
   - Thông điệp commit
   - Thông tin tác giả
   - Thời gian
   - Files bị ảnh hưởng

3. **Phân tích thay đổi code**
   - Files đã sửa đổi, thêm hoặc xóa
   - Số dòng thêm/xóa
   - Patterns và themes thay đổi

4. **Đánh giá tác động tổng thể**
   - Tính năng đã thêm
   - Bugs đã sửa
   - Refactoring đã thực hiện
   - Breaking changes (nếu có)

5. **Đánh giá chất lượng**
   - Tổ chức code
   - Tác động test coverage
   - Cập nhật tài liệu
   - Mối quan tâm tiềm ẩn

**QUAN TRỌNG**: Lệnh này KHÔNG bắt đầu triển khai. Nó chỉ phân tích và báo cáo.

## Ví dụ nhanh

```bash
/ck:watzup
```

**Kết quả:**
```
Đang phân tích nhánh hiện tại và thay đổi gần đây...

## Trạng thái nhánh
Hiện tại: feature/payment-integration
Cơ sở: main
Trạng thái: 5 commits ahead, đã cập nhật

## Commits gần đây (5 cuối)

1. feat: Add Stripe payment processing
   Tác giả: Bạn
   Thời gian: 2 giờ trước
   Files: 8 đã thay đổi (+420, -15)

2. test: Add payment integration tests
   Tác giả: Bạn
   Thời gian: 1 giờ trước
   Files: 3 đã thay đổi (+180, -0)

3. docs: Update payment API documentation
   Tác giả: Bạn
   Thời gian: 30 phút trước
   Files: 2 đã thay đổi (+65, -10)

4. fix: Handle payment webhook errors
   Tác giả: Bạn
   Thời gian: 15 phút trước
   Files: 2 đã thay đổi (+25, -8)

5. chore: Update Stripe SDK to v12
   Tác giả: Bạn
   Thời gian: 10 phút trước
   Files: 1 đã thay đổi (+2, -2)

## Tóm tắt thay đổi code

### Files đã sửa đổi (14 tổng)
- src/payments/stripe.ts (mới, +234 dòng)
- src/routes/payment-routes.ts (+85 dòng)
- src/models/payment.model.ts (+45 dòng)
- tests/payments/*.test.ts (mới, +180 dòng)
- docs/api/payments.md (+55 dòng)
- package.json (+2, -2)

### Thay đổi theo danh mục
Tính năng:
- Xử lý thanh toán với Stripe
- Xử lý webhook cho payment events
- API xử lý hoàn tiền

Kiểm thử:
- Kiểm thử tạo payment (12 tests)
- Kiểm thử xử lý webhook (8 tests)
- Kiểm thử tích hợp (5 tests)
- Coverage: 94%

Tài liệu:
- Payment API endpoints
- Hướng dẫn thiết lập webhook
- Tài liệu xử lý lỗi

## Phân tích tác động

### Thay đổi tích cực
✅ Tích hợp thanh toán hoàn chỉnh
✅ Test coverage toàn diện (94%)
✅ API được tài liệu hóa tốt
✅ Đã triển khai xử lý lỗi
✅ Không có breaking changes

### Đánh giá chất lượng
✅ Code tuân theo quy ước dự án
✅ Xử lý lỗi đúng cách
✅ TypeScript types hoàn chỉnh
✅ Tests bao phủ edge cases

### Mối quan tâm tiềm ẩn
⚠ Xác minh chữ ký webhook cần kiểm thử production
⚠ Rate limiting chưa được triển khai
⚠ Monitoring/alerting cho payment thất bại đang chờ

## Tóm tắt

Đã triển khai tích hợp thanh toán Stripe hoàn chỉnh bao gồm:
- Tạo và xử lý payment intent
- Xử lý webhook event với xác minh chữ ký
- Khả năng xử lý hoàn tiền
- 25 tests mới với 94% coverage
- Tài liệu API toàn diện

Sẵn sàng cho: Code review và triển khai staging
Bước tiếp theo: Kiểm thử production, thiết lập monitoring, rate limiting

Thời gian đầu tư: ~4 giờ
Độ phức tạp: Trung bình-Cao
Chất lượng: Cao
```

## Khi nào sử dụng

### Stand-ups hàng ngày

```bash
# Trước cuộc họp stand-up
/ck:watzup

# Sử dụng kết quả cho:
# - Tôi đã làm gì hôm qua
# - Tiến độ hiện tại
# - Có blockers nào không
```

### Chuẩn bị code review

```bash
# Trước khi yêu cầu review
/ck:watzup

# Chia sẻ tóm tắt với reviewers
# Giúp họ hiểu phạm vi và ngữ cảnh
```

### Chuyển giao team

```bash
# Cuối ngày chuyển giao
/ck:watzup

# Cung cấp ngữ cảnh hoàn chỉnh cho developer tiếp theo
```

### Sprint reviews

```bash
# Cuối sprint
/ck:watzup

# Hiển thị tất cả thành tựu
# Chứng minh tiến độ
```

### Kiểm tra giữa chừng

```bash
# Kiểm tra tiến độ trên tính năng lớn
/ck:watzup

# Xem những gì đã hoàn thành
# Lập kế hoạch công việc còn lại
```

### Mô tả PR

```bash
# Trước khi tạo pull request
/ck:watzup

# Sử dụng tóm tắt cho mô tả PR
# Sau đó: /ck:git pr [branch] [base]
```

## Ví dụ đầy đủ

### Kịch bản: Làm việc tính năng nhiều ngày

Bạn đã làm việc trên tính năng chat real-time trong vài ngày. Đến lúc kiểm tra tiến độ.

```bash
/ck:watzup
```

**Kết quả chi tiết:**

```markdown
# Tóm tắt công việc: feature/realtime-chat

## Thông tin nhánh
Nhánh hiện tại: feature/realtime-chat
Nhánh cơ sở: main
Trạng thái: 12 commits ahead của main
Cập nhật cuối: 5 phút trước
Tuổi nhánh: 3 ngày

## Lịch sử commit (12 commits cuối)

### Ngày 1: Nền tảng (4 commits)
1. feat: Add WebSocket server setup
   - Thời gian: 3 ngày trước
   - Files: 5 (+320, -0)
   - Mới: src/websocket/server.ts, config/websocket.ts

2. feat: Implement room management
   - Thời gian: 3 ngày trước
   - Files: 4 (+180, -0)
   - Mới: src/models/room.ts, src/services/room-manager.ts

3. feat: Add user connection handling
   - Thời gian: 3 ngày trước
   - Files: 3 (+145, -0)
   - Mới: src/websocket/connection-handler.ts

4. test: Add WebSocket connection tests
   - Thời gian: 3 ngày trước
   - Files: 2 (+95, -0)
   - Mới: tests/websocket/*.test.ts

### Ngày 2: Tính năng cốt lõi (5 commits)
5. feat: Implement message broadcasting
   - Thời gian: 2 ngày trước
   - Files: 3 (+165, -12)
   - Đã sửa: src/websocket/message-handler.ts

6. feat: Add message persistence to database
   - Thời gian: 2 ngày trước
   - Files: 4 (+220, -0)
   - Mới: src/models/message.ts, migrations/add_messages_table.sql

7. feat: Implement typing indicators
   - Thời gian: 2 ngày trước
   - Files: 2 (+85, -5)
   - Đã sửa: src/websocket/events.ts

8. test: Add message handling tests
   - Thời gian: 2 ngày trước
   - Files: 3 (+140, -0)
   - Mới: tests/messages/*.test.ts

9. docs: Document WebSocket protocol
   - Thời gian: 2 ngày trước
   - Files: 2 (+120, -0)
   - Mới: docs/websocket-protocol.md

### Ngày 3: Hoàn thiện & Kiểm thử (3 commits)
10. fix: Handle disconnection edge cases
    - Thời gian: 1 ngày trước
    - Files: 3 (+45, -15)
    - Đã sửa: src/websocket/connection-handler.ts

11. feat: Add unread message counters
    - Thời gian: 1 ngày trước
    - Files: 4 (+95, -8)
    - Mới: src/services/unread-counter.ts

12. test: Add integration tests for chat flow
    - Thời gian: 1 ngày trước
    - Files: 2 (+180, -0)
    - Mới: tests/integration/chat-flow.test.ts

## Thay đổi code toàn diện

### Files mới tạo (15 files)
Triển khai cốt lõi:
- src/websocket/server.ts (234 dòng)
- src/websocket/connection-handler.ts (178 dòng)
- src/websocket/message-handler.ts (245 dòng)
- src/websocket/events.ts (156 dòng)
- src/models/room.ts (89 dòng)
- src/models/message.ts (112 dòng)
- src/services/room-manager.ts (198 dòng)
- src/services/unread-counter.ts (87 dòng)

Cấu hình:
- config/websocket.ts (45 dòng)

Database:
- migrations/20251030_add_messages_table.sql (23 dòng)
- migrations/20251030_add_rooms_table.sql (18 dòng)

Kiểm thử:
- tests/websocket/connection.test.ts (142 dòng)
- tests/messages/persistence.test.ts (165 dòng)
- tests/integration/chat-flow.test.ts (223 dòng)

Tài liệu:
- docs/websocket-protocol.md (187 dòng)

### Files đã sửa đổi (8 files)
- src/routes/index.ts (+12, -2)
- src/app.ts (+25, -5)
- package.json (+5, -1)
- .env.example (+3, -0)
- tsconfig.json (+1, -0)
- docs/api/index.md (+45, -8)
- README.md (+15, -3)
- tests/setup.ts (+8, -2)

### Thống kê
- Tổng Files thay đổi: 23
- Files mới: 15
- Files đã sửa: 8
- Dòng đã thêm: 2,547
- Dòng đã xóa: 44
- Thay đổi ròng: +2,503 dòng

## Phân tích tính năng

### Tính năng chính đã triển khai

#### 1. Cơ sở hạ tầng WebSocket Server
Trạng thái: ✅ Hoàn thành
Thành phần:
- Quản lý kết nối
- Định tuyến message dựa trên room
- Xử lý tự động kết nối lại
- Connection pooling

#### 2. Nhắn tin Real-Time
Trạng thái: ✅ Hoàn thành
Tính năng:
- Broadcasting message trong rooms
- Xác nhận gửi
- Message persistence vào database
- Truy xuất lịch sử message

#### 3. Quản lý Room
Trạng thái: ✅ Hoàn thành
Khả năng:
- Tạo/tham gia/rời rooms
- Theo dõi thành viên room
- Quản lý quyền
- Metadata room

#### 4. Chỉ báo gõ phím
Trạng thái: ✅ Hoàn thành
Chức năng:
- Trạng thái gõ phím real-time
- Timeout tự động
- Chỉ báo theo room

#### 5. Đếm tin chưa đọc
Trạng thái: ✅ Hoàn thành
Tính năng:
- Đếm chưa đọc theo room
- Cập nhật counter atomic
- Đồng bộ real-time

## Coverage kiểm thử

### Unit Tests
Files: 8 test files
Tests: 42 tests
Coverage: 94%
Trạng thái: ✅ Tất cả pass

Khu vực kiểm thử chính:
- Xử lý kết nối WebSocket (12 tests)
- Broadcasting message (10 tests)
- Quản lý room (8 tests)
- Chỉ báo gõ phím (5 tests)
- Đếm chưa đọc (7 tests)

### Integration Tests
Files: 2 test files
Tests: 12 tests
Coverage: 89%
Trạng thái: ✅ Tất cả pass

Kịch bản bao phủ:
- Luồng message hoàn chỉnh (4 tests)
- Rooms nhiều người dùng (3 tests)
- Xử lý kết nối lại (3 tests)
- Kịch bản lỗi (2 tests)

### Metrics kiểm thử tổng thể
Tổng Tests: 54
Passing: 54 (100%)
Coverage: 92%
Thời gian Test: 8.3 giây

## Cập nhật tài liệu

### Tài liệu mới
- docs/websocket-protocol.md - Protocol WebSocket event hoàn chỉnh
- Hướng dẫn thiết lập WebSocket trong README
- Tài liệu API cho message endpoints

### Tài liệu đã cập nhật
- README.md - Thêm phần tính năng WebSocket
- docs/api/index.md - Thêm message API endpoints
- .env.example - Thêm cấu hình WebSocket

## Đánh giá chất lượng

### Chất lượng code
✅ Xuất sắc
- Sử dụng TypeScript nhất quán
- Xử lý lỗi đúng cách xuyên suốt
- Tách biệt mối quan tâm rõ ràng
- Modules được cấu trúc tốt

### Kiến trúc
✅ Vững chắc
- Thiết kế hướng sự kiện
- Quản lý room có thể mở rộng
- Định tuyến message hiệu quả
- Tối ưu hóa database với indexes

### Chất lượng kiểm thử
✅ Toàn diện
- Coverage cao (92%)
- Edge cases được kiểm thử
- Kịch bản tích hợp bao phủ
- Không có flaky tests

### Tài liệu
✅ Được tài liệu hóa tốt
- Đặc tả protocol rõ ràng
- Hướng dẫn thiết lập hoàn chỉnh
- API endpoints được tài liệu hóa
- Comments code kỹ lưỡng

## Vấn đề và mối quan tâm tiềm ẩn

### Cân nhắc hiệu suất
⚠️ Có thể cần chú ý:
- Giới hạn kết nối WebSocket (hiện tại 1000)
- Message throughput chưa được benchmark
- Cần tối ưu hóa database query ở quy mô lớn
- Sử dụng memory với nhiều concurrent rooms

### Cân nhắc bảo mật
⚠️ Cần xem xét:
- Cơ chế xác thực WebSocket
- Sanitization nội dung message
- Rate limiting chưa triển khai
- Xác thực kiểm soát truy cập room

### Tính năng còn thiếu (Công việc tương lai)
📋 Đã lên kế hoạch nhưng chưa triển khai:
- File attachments trong messages
- Reactions message (emoji)
- Chức năng tìm kiếm message
- Mã hóa end-to-end

## Tác động lên codebase

### Dependencies đã thêm
- ws@8.14.2 - Thư viện WebSocket
- socket.io-adapter@2.5.2 - Room adapter

### Thay đổi cấu hình
- Thêm cổng WebSocket server (3001)
- Thêm cấu hình CORS cho WebSocket
- Database migrations cho messages và rooms

### Breaking Changes
⚠️ Không có - Tất cả là bổ sung, không sửa đổi APIs hiện có

## Đánh giá tổng thể

### Tóm tắt
Đã triển khai hệ thống chat real-time hoàn chỉnh với hỗ trợ WebSocket trong 3 ngày. Triển khai bao gồm xử lý message mạnh mẽ, quản lý room, chỉ báo gõ phím và theo dõi message chưa đọc. Test coverage xuất sắc ở 92%, và tài liệu toàn diện.

### Điểm mạnh
1. Bộ tính năng toàn diện
2. Test coverage xuất sắc
3. Protocol được tài liệu hóa tốt
4. Code sạch, dễ bảo trì
5. Không có breaking changes

### Khu vực cải thiện
1. Cần benchmark hiệu suất
2. Yêu cầu xem xét bảo mật
3. Triển khai rate limiting
4. Thiết lập monitoring và alerting

### Đánh giá sẵn sàng
✅ Sẵn sàng cho: Code review
✅ Sẵn sàng cho: Triển khai staging
⚠️ Chưa sẵn sàng cho: Production (cần xem xét bảo mật, kiểm thử hiệu suất)

### Bước tiếp theo khuyến nghị

#### Ngay lập tức (Hôm nay)
1. Yêu cầu code review
2. Triển khai lên staging
3. Chạy smoke tests

#### Ngắn hạn (Tuần này)
1. Benchmark hiệu suất
2. Xem xét bảo mật
3. Thêm rate limiting
4. Thiết lập monitoring

#### Trung hạn (Sprint tiếp theo)
1. File attachments
2. Tìm kiếm message
3. Reactions message
4. Bảo mật nâng cao (E2E encryption)

## Phân tích thời gian & công sức

Tổng Commits: 12
Ngày hoạt động: 3
Công sức ước tính: 24-28 giờ
Độ phức tạp: Cao
Giá trị cung cấp: Cao

Phân tích:
- Ngày 1: Nền tảng & Kiến trúc (8 giờ)
- Ngày 2: Tính năng cốt lõi & Kiểm thử (10 giờ)
- Ngày 3: Hoàn thiện & Tích hợp (6 giờ)

---

**Kết thúc tóm tắt**
Tạo: 2025-11-13 14:30:00
Nhánh: feature/realtime-chat
Commits phân tích: 12
```

## Các phần đầu ra giải thích

### 1. Trạng thái nhánh
- Nhánh hiện tại vs nhánh cơ sở
- Commits ahead/behind
- Thời gian cập nhật cuối
- Tuổi nhánh

### 2. Lịch sử commit
- Commits gần đây (mặc định: 10 cuối)
- Tổ chức theo ngày hoặc theme
- Files bị ảnh hưởng mỗi commit
- Tác giả và timestamp

### 3. Thay đổi code
- Files mới tạo
- Files đã sửa đổi
- Files đã xóa
- Thống kê số dòng

### 4. Phân tích tính năng
- Tính năng chính đã triển khai
- Trạng thái và hoàn thành tính năng
- Thành phần bị ảnh hưởng

### 5. Coverage kiểm thử
- Test files và đếm
- Phần trăm coverage
- Trạng thái test (passing/failing)

### 6. Tài liệu
- Tài liệu mới tạo
- Tài liệu đã cập nhật
- Thay đổi README

### 7. Đánh giá chất lượng
- Đánh giá chất lượng code
- Đánh giá kiến trúc
- Xem xét chất lượng kiểm thử
- Hoàn thiện tài liệu

### 8. Mối quan tâm & vấn đề
- Cân nhắc hiệu suất
- Mối quan tâm bảo mật
- Tính năng còn thiếu
- Nợ kỹ thuật

### 9. Phân tích tác động
- Dependencies đã thay đổi
- Cập nhật cấu hình
- Breaking changes
- Yêu cầu migration

### 10. Khuyến nghị
- Bước tiếp theo
- Hành động ưu tiên
- Đề xuất timeline

## Best practices

### Chạy trước sự kiện quan trọng

```bash
# Trước stand-up
/ck:watzup

# Trước yêu cầu code review
/ck:watzup

# Trước tạo PR
/ck:watzup

# Cuối ngày/sprint
/ck:watzup
```

### So sánh với trạng thái trước

```bash
# Xem những gì thay đổi hôm nay
git log --since="1 day ago"
/ck:watzup

# So sánh với main
git diff main
/ck:watzup
```

### Chia sẻ với team

```bash
# Tạo tóm tắt
/ck:watzup > work-summary.md

# Chia sẻ trong Slack/Teams
cat work-summary.md
```

## Các trường hợp sử dụng phổ biến

### Stand-up hàng ngày

```bash
/ck:watzup

# Trả lời:
# - Tôi đã làm gì?
# - Tôi đang làm gì hôm nay?
# - Có blockers nào không?
```

### Yêu cầu code review

```bash
# Xem phạm vi đầy đủ
/ck:watzup

# Sử dụng tóm tắt trong yêu cầu review
# Giúp reviewers hiểu thay đổi
```

### Sprint demo

```bash
/ck:watzup

# Hiển thị thành tựu
# Chứng minh tiến độ
# Thảo luận bước tiếp theo
```

### Chuyển giao kiến thức

```bash
# Trước kỳ nghỉ/chuyển giao
/ck:watzup

# Cung cấp ngữ cảnh hoàn chỉnh
# Ghi chép quyết định
# Liệt kê công việc đang chờ
```

### Kiểm tra tiến độ

```bash
# Phát triển tính năng giữa chừng
/ck:watzup

# Đánh giá tiến độ
# Lập kế hoạch công việc còn lại
# Xác định blockers
```

## Tích hợp với các lệnh khác

### Với /ck:journal

```bash
# Tóm tắt nhanh
/ck:watzup

# Tài liệu chi tiết
/ck:journal

# /ck:watzup: Tổng quan
# /ck:journal: Đi sâu với ngữ cảnh
```

### Với /ck:git pr

```bash
# Phân tích thay đổi
/ck:watzup

# Tạo PR với tóm tắt
/ck:git pr feature-branch main
```

### Với /ck:git cm

```bash
# Xem thay đổi chưa commit
git status

# Xem xét tất cả công việc
/ck:watzup

# Commit
/ck:git cm
```

## Tùy chỉnh

### Tập trung vào khoảng thời gian cụ thể

```bash
# 24 giờ cuối
git log --since="1 day ago"
/ck:watzup

# Tuần trước
git log --since="1 week ago"
/ck:watzup
```

### Bao gồm files cụ thể

```bash
# Xem thay đổi khu vực cụ thể
git log -- src/payments/
/ck:watzup
```

## Giới hạn

### /ck:watzup KHÔNG làm gì

❌ Không bắt đầu triển khai
❌ Không sửa đổi code
❌ Không tạo commits
❌ Không triển khai code
❌ Không chạy tests

✅ Chỉ phân tích và báo cáo

### Khi KHÔNG sử dụng

**Trước khi bắt đầu công việc:**
```bash
❌ /ck:watzup
✅ /ck:plan [feature]
```

**Khi triển khai:**
```bash
❌ /ck:watzup
✅ /ck:cook [feature]
```

**Khi sửa bugs:**
```bash
❌ /ck:watzup
✅ /ck:fix [issue]
```

## Lệnh liên quan

- [/ck:journal](/docs-vi/commands/core/journal) - Tài liệu công việc chi tiết
- [/ck:git cm](/docs-vi/commands/git/commit) - Commit thay đổi
- [/ck:git pr](/docs-vi/commands/git/pull-request) - Tạo pull request
- [/ck:cook](/docs-vi/commands/core/cook) - Triển khai tính năng
- [/ck:plan](/docs-vi/commands/core/plan) - Lập kế hoạch triển khai

---

**Điểm chính**: `/ck:watzup` cung cấp khả năng nhìn thấy ngay lập tức vào công việc gần đây - hoàn hảo cho stand-ups, code reviews và hiểu những gì đã hoàn thành. Chỉ phân tích và không bao giờ sửa đổi code của bạn.
