---
title: /fix:parallel
description: Sửa nhiều lỗi độc lập đồng thời sử dụng agent fullstack-developer song song để giải quyết nhanh hơn
section: docs
category: commands/fix
order: 10
published: true
---

# /fix:parallel

Lệnh sửa lỗi song song. Giải quyết nhiều lỗi độc lập đồng thời bằng cách khởi chạy các agent fullstack-developer song song, mỗi agent xử lý một lỗi.

## Cú pháp

```bash
/fix:parallel [issues]
```

## Khi nào sử dụng

- **Nhiều bug không liên quan**: 2+ lỗi không ảnh hưởng cùng file
- **Sửa lỗi độc lập**: Bug không cần ngữ cảnh chung
- **Cấp bách thời gian**: Cần nhiều fix nhanh chóng
- **Sửa hàng loạt**: Xử lý backlog các lỗi nhỏ

## Ví dụ nhanh

```bash
/fix:parallel [
1. Button not clickable on mobile
2. API timeout on /users endpoint
3. Typo in footer copyright
]
```

**Kết quả**:
```
Parsing issues...
Found 3 issues to fix

Validating independence...
✓ Issue 1: src/components/Button.tsx
✓ Issue 2: src/api/users.ts
✓ Issue 3: src/components/Footer.tsx
No file conflicts detected.

Launching 3 parallel agents...

Agent 1: Fixing mobile button...
Agent 2: Fixing API timeout...
Agent 3: Fixing footer typo...

Progress:
[██████████] Agent 3: Complete (12s)
[██████████] Agent 1: Complete (28s)
[██████████] Agent 2: Complete (45s)

All agents complete.

Summary:
✓ Issue 1: Fixed - Added touch event handler
✓ Issue 2: Fixed - Increased timeout to 30s
✓ Issue 3: Fixed - Changed "Copywrite" to "Copyright"

Total time: 45s (vs ~90s sequential)
```

## Tham số

- `[issues]`: Danh sách lỗi cần sửa (bắt buộc). Sử dụng định dạng đánh số hoặc gạch đầu dòng.

## Định dạng lỗi

### Danh sách đánh số

```bash
/fix:parallel [
1. Button not responding on Safari
2. Date picker shows wrong timezone
3. Search results not paginating
]
```

### Danh sách gạch đầu dòng

```bash
/fix:parallel [
- Missing loading spinner on submit
- Incorrect currency symbol for EUR
- Broken link in navigation
]
```

### Định dạng inline

```bash
/fix:parallel [fix mobile menu toggle; fix email validation regex; fix footer alignment]
```

## Quy trình hoạt động

### Bước 1: Phân tích lỗi

Trích xuất các lỗi riêng lẻ từ đầu vào:

```
Input: "1. Button bug 2. API error 3. Typo"
Parsed:
- Issue 1: Button bug
- Issue 2: API error
- Issue 3: Typo
```

### Bước 2: Xác nhận độc lập

Kiểm tra các lỗi không ảnh hưởng cùng file:

```
Analyzing file dependencies...

Issue 1: Likely affects src/components/Button.tsx
Issue 2: Likely affects src/api/endpoints.ts
Issue 3: Likely affects src/components/Footer.tsx

Overlap check: None detected ✓
Issues are independent.
```

### Bước 3: Khởi chạy agent song song

Tạo một agent fullstack-developer cho mỗi lỗi:

```
Launching agents...

Agent 1: fullstack-developer → Issue 1
Agent 2: fullstack-developer → Issue 2
Agent 3: fullstack-developer → Issue 3

All agents running in parallel.
```

### Bước 4: Theo dõi tiến trình

Theo dõi mỗi agent với timeout (10 phút mỗi agent):

```
Progress:
[████████──] Agent 1: Investigating... (15s)
[██████████] Agent 2: Complete (22s)
[██████────] Agent 3: Implementing fix... (18s)
```

### Bước 5: Tổng hợp kết quả

Thu thập kết quả từ tất cả agent:

```
Results collected:
- Agent 1: Success - 1 file changed
- Agent 2: Success - 2 files changed
- Agent 3: Success - 1 file changed

Total: 4 files changed
```

### Bước 6: Báo cáo tóm tắt

Cung cấp báo cáo sửa lỗi tổng hợp:

```
═══════════════════════════════════════
        PARALLEL FIX SUMMARY
═══════════════════════════════════════

Issue 1: Button not responding on Safari
Status: ✓ Fixed
Files: src/components/Button.tsx
Changes: Added -webkit-tap-highlight-color

Issue 2: Date picker wrong timezone
Status: ✓ Fixed
Files: src/utils/date.ts, src/components/DatePicker.tsx
Changes: Added timezone normalization

Issue 3: Search pagination broken
Status: ✓ Fixed
Files: src/hooks/useSearch.ts
Changes: Fixed offset calculation

───────────────────────────────────────
Total time: 45 seconds
Sequential estimate: ~2 minutes
Speedup: 2.7x
═══════════════════════════════════════
```

## Ví dụ đầy đủ

### Kịch bản: Dọn dẹp Sprint

```bash
/fix:parallel [
1. Login button disabled state not showing
2. Profile image not loading for new users
3. Search autocomplete not closing on blur
4. Footer social links point to wrong URLs
]
```

**Thực thi**:

```
Parsing issues...
Found 4 issues

Validating independence...
Issue 1: src/components/auth/LoginButton.tsx
Issue 2: src/components/profile/Avatar.tsx
Issue 3: src/components/search/Autocomplete.tsx
Issue 4: src/components/layout/Footer.tsx

No overlapping files ✓

Launching 4 parallel agents...

[Agent 1] LoginButton: Investigating disabled state...
[Agent 2] Avatar: Checking image loading logic...
[Agent 3] Autocomplete: Analyzing blur behavior...
[Agent 4] Footer: Reviewing social links...

Progress:
[██████████] Agent 4: Complete (8s)
[██████████] Agent 1: Complete (15s)
[██████████] Agent 3: Complete (22s)
[██████████] Agent 2: Complete (35s)

═══════════════════════════════════════
        RESULTS
═══════════════════════════════════════

✓ Issue 1: Fixed disabled prop binding
✓ Issue 2: Added fallback for undefined avatar
✓ Issue 3: Added onBlur handler with delay
✓ Issue 4: Updated social media URLs

Files changed: 4
Tests passing: ✓
Total time: 35s
═══════════════════════════════════════
```

## Phát hiện phụ thuộc

Nếu các lỗi chia sẻ file, `/fix:parallel` định tuyến đến `/fix:hard`:

```bash
/fix:parallel [
1. Auth token not refreshing
2. Login redirect broken
]
```

```
Validating independence...

Issue 1: Likely affects src/auth/token.ts, src/auth/session.ts
Issue 2: Likely affects src/auth/login.ts, src/auth/session.ts

⚠️ Overlap detected: src/auth/session.ts

Issues are not independent.
→ Routing to /fix:hard instead

Both issues may share context in auth/session.ts.
Sequential fixing recommended for consistency.
```

## Giới hạn

### Số agent tối đa

```
Max parallel agents: 5
```

Nếu nhiều hơn 5 lỗi, chia thành các wave:

```
Found 8 issues

Wave 1 (parallel): Issues 1-5
Wave 2 (parallel): Issues 6-8

Executing Wave 1...
```

### Yêu cầu độc lập

Các lỗi không được chia sẻ file:

```
✓ Độc lập: Button fix + API fix + Footer fix
✗ Phụ thuộc: Auth fix + Session fix (chia sẻ auth module)
```

### Timeout

Mỗi agent có timeout 10 phút:

```
Agent timeout: 10 minutes

Agent 3 timed out.
Partial results collected.
```

## Thực hành tốt nhất

### Nhóm lỗi liên quan ở nơi khác

```bash
# Không tốt: Lỗi liên quan
/fix:parallel [
1. Auth token expiring
2. Session not persisting
]

# Tốt: Dùng /fix:hard cho lỗi liên quan
/fix:hard [auth token expiring and session not persisting]
```

### Giữ lỗi cụ thể

```bash
# Tốt: Cụ thể, có thể hành động
/fix:parallel [
1. Button color wrong on hover (should be #2563eb)
2. Missing aria-label on search input
3. Footer copyright says 2024
]

# Kém hiệu quả: Mơ hồ
/fix:parallel [
1. UI looks wrong
2. Accessibility issues
3. Update footer
]
```

### Không vượt quá 5 lỗi

```bash
# Tối ưu: 2-5 lỗi
/fix:parallel [
1. Issue one
2. Issue two
3. Issue three
]

# Quá nhiều: Cân nhắc nhiều lần chạy
/fix:parallel [1-5]
/fix:parallel [6-10]
```

## Khi KHÔNG nên sử dụng

### Lỗi liên quan

Các lỗi ảnh hưởng code chung:

```bash
# Không dùng parallel cho:
- Auth token + Session handling (chia sẻ auth code)
- Database query + Connection pool (chia sẻ DB layer)
- API route + Middleware (chia sẻ request flow)

# Dùng thay thế:
/fix:hard [describe related issues together]
```

### Điều tra phức tạp

Lỗi cần phân tích sâu:

```bash
# Không dùng parallel cho:
- "App crashes randomly" (cần điều tra)
- "Performance degraded" (cần profiling)

# Dùng thay thế:
/fix:hard [issue needing investigation]
```

## Các lệnh liên quan

- [/fix](/vi/docs/commands/fix) - Định tuyến thông minh (có thể định tuyến đến đây)
- [/fix:fast](/vi/docs/commands/fix/fast) - Một lỗi đơn giản
- [/fix:hard](/vi/docs/commands/fix/hard) - Lỗi phức tạp hoặc liên quan
- [/code:parallel](/vi/docs/commands/core/code-parallel) - Thực thi kế hoạch song song
- [/cook:auto:parallel](/vi/docs/commands/core/cook-auto-parallel) - Triển khai tính năng song song

---

**Điểm chính**: `/fix:parallel` tăng tốc sửa lỗi bằng cách giải quyết nhiều lỗi độc lập đồng thời. Cung cấp danh sách lỗi không liên quan, và các agent song song xử lý chúng đồng thời để giải quyết nhanh hơn.
