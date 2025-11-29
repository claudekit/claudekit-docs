---
title: /code
description: Thực thi kế hoạch triển khai với quy trình 6 bước kiểm soát chất lượng bao gồm kiểm thử tự động và đánh giá code
section: docs
category: commands/core
order: 8
published: true
---

# /code

Lệnh thực thi kế hoạch. Triển khai quy trình 6 bước có cấu trúc với các cổng kiểm soát chất lượng bắt buộc, kiểm thử tự động và đánh giá code.

## Cú pháp

```bash
/code [plan]
```

## Khi nào sử dụng

- **Thực thi kế hoạch**: Sau khi `/plan` tạo kế hoạch triển khai
- **Tiếp tục công việc**: Tiếp tục các giai đoạn kế hoạch chưa hoàn thành
- **Phát triển có kiểm soát chất lượng**: Khi cần kiểm thử và đánh giá bắt buộc
- **Triển khai có theo dõi**: Khi các tác vụ cần theo dõi TodoWrite
- **Quy trình auto-commit**: Khi bạn muốn tự động commit git khi thành công

## Ví dụ nhanh

```bash
/code @plans/251128-auth-integration/plan.md
```

**Kết quả**:
```
✓ Step 0: Auth Integration - Phase 02
✓ Step 1: Found 5 tasks across 1 phase - Ambiguities: none
✓ Step 2: Implemented 3 files - [5/5] tasks complete
✓ Step 3: Tests [12/12 passed] - All requirements met
✓ Step 4: Code reviewed - [0] critical issues
⏸ Step 5: WAITING for user approval

Phase implementation complete. All tests pass, code reviewed. Approve changes?
```

**Kết quả**: Kế hoạch được thực thi với các cổng kiểm soát chất lượng, sẵn sàng chờ phê duyệt.

## Tham số

- `[plan]`: Đường dẫn đến file kế hoạch (tùy chọn). Nếu để trống, tự động phát hiện kế hoạch mới nhất trong thư mục `./plans`

## Quy trình hoạt động

Lệnh `/code` thực thi quy trình 6 bước với các quy tắc nghiêm ngặt:

### Bước 0: Phát hiện kế hoạch

- Nếu có đường dẫn kế hoạch: Sử dụng kế hoạch đó
- Nếu để trống: Tìm `plan.md` mới nhất trong thư mục `./plans`
- Tự động chọn giai đoạn chưa hoàn thành tiếp theo (ưu tiên IN_PROGRESS, sau đó là Planned sớm nhất)

### Bước 1: Phân tích & Trích xuất tác vụ

- Đọc toàn bộ file kế hoạch
- Ánh xạ các phụ thuộc giữa các tác vụ
- Liệt kê các điểm mơ hồ hoặc trở ngại
- Xác định các kỹ năng/công cụ cần thiết
- Khởi tạo TodoWrite với các tác vụ đã trích xuất

**Kết quả**: `✓ Step 1: Found [N] tasks across [M] phases - Ambiguities: [danh sách hoặc "none"]`

### Bước 2: Triển khai

- Thực thi các tác vụ từng bước theo yêu cầu kế hoạch
- Đánh dấu hoàn thành các tác vụ trong TodoWrite
- Cho công việc UI: Gọi subagent `ui-ux-designer`
- Cho hình ảnh: Sử dụng skill `ai-multimodal`
- Chạy kiểm tra kiểu và biên dịch để xác minh không có lỗi cú pháp

**Kết quả**: `✓ Step 2: Implemented [N] files - [X/Y] tasks complete`

### Bước 3: Kiểm thử (CỔNG CHẶN)

- Gọi subagent `tester` để chạy bộ kiểm thử
- Nếu BẤT KỲ test nào thất bại:
  - Gọi subagent `debugger` để phân tích lỗi
  - Sửa tất cả các vấn đề
  - Chạy lại test
  - Lặp lại cho đến khi đạt 100%

**Tiêu chuẩn kiểm thử**:
- Unit tests: Có thể sử dụng mock cho các phụ thuộc bên ngoài
- Integration tests: Sử dụng môi trường test
- E2E tests: Sử dụng dữ liệu thực nhưng được cô lập
- Cấm: Comment out tests, thay đổi assertions, TODO/FIXME để trì hoãn sửa lỗi

**Kết quả**: `✓ Step 3: Tests [X/X passed] - All requirements met`

**Xác nhận**: Nếu X ≠ tổng số, Bước 3 CHƯA HOÀN THÀNH - quy trình dừng lại.

### Bước 4: Đánh giá Code (CỔNG CHẶN)

- Gọi subagent `code-reviewer` để đánh giá toàn diện
- Kiểm tra: Bảo mật, hiệu suất, kiến trúc, YAGNI/KISS/DRY
- Nếu tìm thấy vấn đề nghiêm trọng:
  - Sửa tất cả vấn đề
  - Chạy lại `tester` để xác minh
  - Chạy lại `code-reviewer`
  - Lặp lại cho đến khi không còn vấn đề nghiêm trọng

**Vấn đề nghiêm trọng** (phải bằng 0):
- Lỗ hổng bảo mật (XSS, SQL injection, OWASP)
- Điểm nghẽn hiệu suất
- Vi phạm kiến trúc
- Vi phạm nguyên tắc (YAGNI, KISS, DRY)

**Kết quả**: `✓ Step 4: Code reviewed - [0] critical issues`

### Bước 5: Phê duyệt người dùng (CỔNG CHẶN)

- Hiển thị tóm tắt (3-5 điểm):
  - Những gì đã triển khai
  - Kết quả test
  - Kết quả đánh giá code
- Hỏi rõ ràng: "Phase implementation complete. Approve changes?"
- **CHỜ** phản hồi từ người dùng - không tiến hành nếu chưa được phê duyệt

**Kết quả**: `⏸ Step 5: WAITING for user approval`

### Bước 6: Hoàn tất

Sau khi người dùng phê duyệt:

1. **Cập nhật trạng thái** (song song):
   - Subagent `project-manager`: Cập nhật trạng thái kế hoạch, đánh dấu giai đoạn DONE
   - Subagent `docs-manager`: Cập nhật tài liệu cho các file đã thay đổi

2. **Kiểm tra Onboarding**: Phát hiện yêu cầu (API keys, env vars, config)

3. **Auto-Commit** (nếu đạt tất cả điều kiện):
   - Người dùng đã phê duyệt
   - Tests đã pass
   - Review đã pass
   - Tự động stage, commit với message, push

**Kết quả**: `✓ Step 6: Finalize - Status updated - Git committed`

## Định dạng kết quả

Mỗi bước tạo ra một đánh dấu trạng thái:

```
✓ Step 0: [Tên kế hoạch] - [Tên giai đoạn]
✓ Step 1: Found [N] tasks across [M] phases - Ambiguities: [danh sách]
✓ Step 2: Implemented [N] files - [X/Y] tasks complete
✓ Step 3: Tests [X/X passed] - All requirements met
✓ Step 4: Code reviewed - [0] critical issues
✓ Step 5: User approved - Ready to complete
✓ Step 6: Finalize - Status updated - Git committed
```

Nếu thiếu bất kỳ "✓ Step N:" nào, bước đó CHƯA HOÀN THÀNH.

## Ví dụ đầy đủ

### Kịch bản: Triển khai API Endpoint

```bash
/code @plans/251128-user-api/phase-02-endpoints.md
```

**Thực thi từng bước**:

```
✓ Step 0: User API - Phase 02 Endpoints

Reading plan: /plans/251128-user-api/plan.md
Auto-selected: Phase 02 (status: Planned)

✓ Step 1: Found 4 tasks across 1 phase - Ambiguities: none

Tasks extracted:
- Step 2.1: Create GET /users endpoint
- Step 2.2: Create POST /users endpoint
- Step 2.3: Add input validation
- Step 2.4: Write integration tests

✓ Step 2: Implemented 3 files - [4/4] tasks complete

Files changed:
- src/routes/users.ts (created)
- src/validators/userSchema.ts (created)
- tests/routes/users.test.ts (created)

Running tester subagent...

✓ Step 3: Tests [8/8 passed] - All requirements met

Test Results:
- GET /users: 4 tests passed
- POST /users: 4 tests passed

Running code-reviewer subagent...

✓ Step 4: Code reviewed - [0] critical issues

Review Summary:
- Security: Input validation present
- Performance: Pagination implemented
- Architecture: Follows existing patterns

⏸ Step 5: WAITING for user approval

Summary:
- Created user API endpoints (GET, POST)
- Added Zod validation schemas
- Wrote 8 integration tests
- All tests passing
- No critical issues found

Phase implementation complete. All tests pass, code reviewed. Approve changes?
```

**Người dùng**: "Approved"

```
✓ Step 5: User approved - Ready to complete

Running project-manager subagent...
Running docs-manager subagent...
Auto-committing changes...

✓ Step 6: Finalize - Status updated - Git committed

Commit: feat(api): add user endpoints with validation
Branch: kai/user-api
Files: 3 changed, 245 insertions
```

## Quy tắc bắt buộc

1. **Không bỏ qua bước**: Mỗi bước phải hoàn thành trước khi sang bước tiếp theo
2. **Bắt buộc TodoWrite**: Tất cả tác vụ được theo dõi qua TodoWrite
3. **Cổng chặn**:
   - Bước 3: Tests phải 100% pass
   - Bước 4: Vấn đề nghiêm trọng phải bằng 0
   - Bước 5: Người dùng phải phê duyệt rõ ràng
4. **Subagent bắt buộc**:
   - Bước 3: `tester`
   - Bước 4: `code-reviewer`
   - Bước 6: `project-manager` VÀ `docs-manager`
5. **Một giai đoạn mỗi lần chạy**: Lệnh chỉ tập trung vào một giai đoạn kế hoạch

## Các Subagent được gọi

| Bước | Subagent | Mục đích |
|------|----------|----------|
| 2 | ui-ux-designer | Triển khai UI (khi cần) |
| 3 | tester | Chạy bộ kiểm thử |
| 3 | debugger | Phân tích lỗi test |
| 4 | code-reviewer | Đánh giá chất lượng và bảo mật |
| 6 | project-manager | Cập nhật trạng thái kế hoạch |
| 6 | docs-manager | Cập nhật tài liệu |

## Các vấn đề thường gặp

### Không tìm thấy kế hoạch

**Vấn đề**: Không tìm thấy kế hoạch trong thư mục `./plans`

**Giải pháp**: Tạo kế hoạch trước
```bash
/plan [implement user authentication]
/code
```

### Test thất bại

**Vấn đề**: Bước 3 bị kẹt với test thất bại

**Xử lý**: Debugger được gọi tự động, thử sửa, chạy lại
```
Step 3: Tests [6/8 passed] - 2 failures
Invoking debugger subagent...
Fixing: src/routes/users.ts:45 - missing null check
Re-running tests...
```

### Phát hiện vấn đề nghiêm trọng

**Vấn đề**: Bước 4 tìm thấy lỗ hổng bảo mật

**Giải pháp**: Tự động sửa và xác minh lại
```
Step 4: Code reviewed - [2] critical issues
- XSS vulnerability in user input
- Missing rate limiting
Fixing issues...
Re-running tester...
Re-running code-reviewer...
✓ Step 4: Code reviewed - [0] critical issues
```

### Hết thời gian chờ phê duyệt

**Vấn đề**: Quy trình dừng tại Bước 5

**Giải pháp**: Phản hồi phê duyệt để tiếp tục
```bash
# Phản hồi người dùng
Approved
```

## Tích hợp với quy trình làm việc

### Quy trình phát triển chuẩn

```bash
# 1. Tạo kế hoạch triển khai
/plan [add payment processing]

# 2. Thực thi kế hoạch
/code

# 3. Tiếp tục với giai đoạn tiếp theo
/code
```

### Tiếp tục công việc chưa hoàn thành

```bash
# Kiểm tra trạng thái kế hoạch hiện tại
cat plans/current-plan/plan.md

# Tiếp tục từ chỗ dừng
/code @plans/current-plan/plan.md
```

### Chỉ định giai đoạn cụ thể

```bash
# Thực thi giai đoạn cụ thể
/code @plans/251128-api/phase-03-testing.md
```

## Các lệnh liên quan

- [/plan](/vi/docs/commands/plan) - Tạo kế hoạch triển khai trước `/code`
- [/cook](/vi/docs/commands/core/cook) - Triển khai từng bước không cần cấu trúc kế hoạch
- [/fix](/vi/docs/commands/fix) - Sửa lỗi không cần quy trình đầy đủ
- [/brainstorm](/vi/docs/commands/core/brainstorm) - Đánh giá các cách tiếp cận trước khi lập kế hoạch

---

**Điểm chính**: `/code` thực thi kế hoạch triển khai với các cổng kiểm soát chất lượng bắt buộc (tests, code review, phê duyệt người dùng), đảm bảo code sẵn sàng production với tự động cập nhật tài liệu và git commits.
