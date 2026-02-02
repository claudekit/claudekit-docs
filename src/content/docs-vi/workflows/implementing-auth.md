---
title: "Triển khai Xác thực"
description: "Tài liệu hướng dẫn triển khai hệ thống xác thực bảo mật"
lang: vi
section: workflows
category: workflows
order: 7
published: true
---

# Triển khai Xác thực

Tìm hiểu cách triển khai các hệ thống xác thực bảo mật với ClaudeKit - từ xác thực JWT cơ bản đến OAuth2, 2FA và đăng nhập không mật khẩu.

## Tổng quan

**Mục tiêu**: Triển khai hệ thống xác thực bảo mật, sẵn sàng cho môi trường production.
**Thời gian**: 20-40 phút (so với 4-8 giờ làm thủ công)
**Các Agent sử dụng**: planner, researcher, tester, code-reviewer
**Các lệnh**: /plan, /cook, /test, /docs:update

## Điều kiện tiên quyết

- API hoặc ứng dụng web hiện có
- Cơ sở dữ liệu đã được cấu hình (PostgreSQL, MongoDB, v.v.)
- Dịch vụ email để xác minh (tùy chọn)
- Tài khoản nhà cung cấp OAuth (tùy chọn: Google, GitHub, v.v.)

## Các phương thức xác thực

| Phương thức | Trường hợp sử dụng | Độ bảo mật | Độ phức tạp | Thời gian |
|--------|----------|----------|------------|------|
| JWT | Xác thực API | Cao | Thấp | 15-20 phút |
| Session-based | Ứng dụng web truyền thống | Cao | Trung bình | 20-25 phút |
| OAuth2 | Đăng nhập mạng xã hội | Rất cao | Trung bình | 25-35 phút |
| Passwordless | Magic links, OTP | Cao | Trung bình | 20-30 phút |
| 2FA | Bảo mật bổ sung | Rất cao | Trung bình | 15-20 phút |
| Biometric | Ứng dụng di động | Rất cao | Cao | 30-40 phút |

## Quy trình từng bước

### Bước 1: Lập kế hoạch chiến lược xác thực

Chọn phương thức xác thực và lập kế hoạch triển khai:

```bash
/plan [triển khai xác thực JWT với email/mật khẩu và đặt lại mật khẩu]
```

**Kế hoạch được tạo**:
```markdown
# Kế hoạch triển khai xác thực JWT

## Các thành phần

### 1. Model Người dùng
- id (UUID)
- email (duy nhất, đã đánh index)
- password (được băm bằng bcrypt)
- emailVerified (boolean)
- resetToken (có thể null)
- resetTokenExpiry (có thể null)
- createdAt, updatedAt

### 2. Các Endpoint
- POST /api/auth/register - Đăng ký người dùng
- POST /api/auth/login - Đăng nhập
- POST /api/auth/logout - Đăng xuất
- GET /api/auth/me - Lấy thông tin người dùng hiện tại
- POST /api/auth/verify-email - Xác minh email
- POST /api/auth/forgot-password - Yêu cầu đặt lại mật khẩu
- POST /api/auth/reset-password - Đặt lại mật khẩu
- POST /api/auth/refresh-token - Làm mới token JWT

### 3. Middleware
- authenticateJWT - Xác thực token JWT
- requireAuth - Bảo vệ các route
- checkEmailVerified - Yêu cầu email đã xác minh

### 4. Tính năng bảo mật
- Băm mật khẩu (bcrypt, 12 rounds)
- Token JWT (access + refresh)
- Thời gian hết hạn token (15 phút access, 7 ngày refresh)
- Giới hạn tốc độ (Rate limiting) cho các endpoint auth
- Xác minh email
- Kiểm tra độ mạnh mật khẩu
- Khóa tài khoản sau nhiều lần thất bại

### 5. Kiểm thử
- Kiểm thử đơn vị cho dịch vụ auth
- Kiểm thử tích hợp cho các endpoint
- Kiểm thử bảo mật (brute force, đánh cắp token)
- Luồng xác thực E2E
```

### Bước 2: Triển khai xác thực JWT cơ bản

```bash
/cook [triển khai xác thực JWT với đăng ký và đăng nhập]
```

**Triển khai**:
```
[1/6] Thiết lập model người dùng...
  ✓ Tạo User schema/model
  ✓ Thêm các hook băm mật khẩu
  ✓ Tạo migration cơ sở dữ liệu

[2/6] Triển khai dịch vụ JWT...
  ✓ Tạo token (access + refresh)
  ✓ Xác thực token
  ✓ Logic làm mới token
  ✓ Lưu trữ token an toàn

[3/6] Tạo các endpoint auth...
  ✓ POST /api/auth/register
  ✓ POST /api/auth/login
  ✓ POST /api/auth/logout
  ✓ GET /api/auth/me
  ✓ POST /api/auth/refresh-token

[4/6] Thêm middleware...
  ✓ Middleware xác thực JWT
  ✓ Bảo vệ route
  ✓ Xử lý lỗi

[5/6] Triển khai xác thực dữ liệu...
  ✓ Xác thực định dạng email
  ✓ Độ mạnh mật khẩu (tối thiểu 8 ký tự, chữ hoa, số, ký hiệu)
  ✓ Làm sạch dữ liệu đầu vào (sanitization)

[6/6] Kiểm thử...
  ✓ 32 bài kiểm thử được tạo
  ✓ Tất cả bài kiểm thử vượt qua
  ✓ Độ bao phủ: 93%

✅ Đã triển khai xác thực JWT thành công

Các tệp đã tạo:
- src/models/User.js
- src/services/auth.service.js
- src/middleware/auth.middleware.js
- src/routes/auth.routes.js
- src/utils/jwt.js
- tests/auth/auth.test.js
```

### Bước 3: Thêm xác minh Email

```bash
/cook [thêm xác minh email vào quá trình đăng ký]
```

**Triển khai**:
```
[1/4] Thiết lập xác minh email...
  ✓ Thêm verificationToken vào model User
  ✓ Tạo các mã token xác minh
  ✓ Tạo endpoint xác minh

[2/4] Tích hợp dịch vụ email...
  ✓ Template email xác minh
  ✓ Gửi email khi đăng ký
  ✓ Endpoint gửi lại email xác minh

[3/4] Middleware...
  ✓ Middleware requireEmailVerified
  ✓ Áp dụng cho các route cần bảo vệ

[4/4] Kiểm thử...
  ✓ Kiểm thử luồng xác minh (8 bài)
  ✓ Mock việc gửi email

✅ Đã thêm xác minh email thành công

Cách sử dụng:
1. Người dùng đăng ký → nhận email xác minh
2. Người dùng nhấn link → tài khoản được xác minh
3. Chỉ người dùng đã xác minh mới vào được các route được bảo vệ
```

### Bước 4: Triển khai đặt lại mật khẩu

```bash
/cook [triển khai đặt lại mật khẩu với xác minh email]
```

**Triển khai**:
```
[1/5] Thay đổi cơ sở dữ liệu...
  ✓ Thêm trường resetToken
  ✓ Thêm trường resetTokenExpiry
  ✓ Tạo migration

[2/5] Các endpoint luồng đặt lại...
  ✓ POST /api/auth/forgot-password
  ✓ POST /api/auth/reset-password
  ✓ Logic xác thực token

[3/5] Template email...
  ✓ Email đặt lại mật khẩu
  ✓ Xác nhận thay đổi mật khẩu thành công

[4/5] Biện pháp bảo mật...
  ✓ Hết hạn token (15 phút)
  ✓ Token chỉ dùng một lần
  ✓ Giới hạn tốc độ (5 yêu cầu/giờ)

[5/5] Kiểm thử...
  ✓ Kiểm thử luồng đặt lại (12 bài)
  ✓ Kiểm thử bảo mật (hết hạn, dùng lại token)

✅ Đã triển khai đặt lại mật khẩu thành công
```

### Bước 5: Thêm OAuth2 (Đăng nhập mạng xã hội)

```bash
/cook [thêm đăng nhập OAuth2 với Google và GitHub]
```

**Triển khai**:
```
[1/6] Thiết lập OAuth...
  ✓ Cài đặt passport.js
  ✓ Cấu hình Google strategy
  ✓ Cấu hình GitHub strategy

[2/6] Các endpoint OAuth...
  ✓ GET /api/auth/google
  ✓ GET /api/auth/google/callback
  ✓ GET /api/auth/github
  ✓ GET /api/auth/github/callback

[3/6] Cập nhật model User...
  ✓ Thêm trường oauthProvider
  ✓ Thêm trường oauthId
  ✓ Liên kết tài khoản OAuth với người dùng hiện có

[4/6] Liên kết tài khoản...
  ✓ Liên kết OAuth với email nếu đã tồn tại
  ✓ Tạo người dùng mới nếu chưa tồn tại
  ✓ Logic gộp tài khoản

[5/6] Tích hợp Frontend...
  ✓ Các nút bấm OAuth
  ✓ Xử lý chuyển hướng
  ✓ Trích xuất token

[6/6] Kiểm thử...
  ✓ Kiểm thử luồng OAuth (16 bài)
  ✓ Kiểm thử liên kết tài khoản

✅ Đã triển khai OAuth2 thành công

Cần cấu hình (.env):
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-secret
GITHUB_CLIENT_ID=your-client-id
GITHUB_CLIENT_SECRET=your-secret
```

### Bước 6: Thêm Xác thực Hai yếu tố (2FA)

```bash
/cook [triển khai 2FA dựa trên TOTP với thiết lập mã QR]
```

**Triển khai**:
```
[1/5] Thiết lập 2FA...
  ✓ Cài đặt speakeasy (thư viện TOTP)
  ✓ Cài đặt qrcode (tạo mã QR)
  ✓ Thêm twoFactorSecret vào model User
  ✓ Thêm trường twoFactorEnabled

[2/5] Các endpoint 2FA...
  ✓ POST /api/auth/2fa/setup - Tạo mã QR
  ✓ POST /api/auth/2fa/verify - Xác minh và kích hoạt
  ✓ POST /api/auth/2fa/disable - Hủy kích hoạt 2FA
  ✓ POST /api/auth/login/2fa - Đăng nhập với mã 2FA

[3/5] Sửa đổi luồng đăng nhập...
  ✓ Kiểm tra nếu 2FA đã được bật
  ✓ Yêu cầu mã 2FA
  ✓ Xác thực token TOTP

[4/5] Mã dự phòng (Backup codes)...
  ✓ Tạo 10 mã dự phòng
  ✓ Lưu trữ mã dự phòng đã băm
  ✓ Endpoint sử dụng mã dự phòng

[5/5] Kiểm thử...
  ✓ Kiểm thử luồng 2FA (14 bài)
  ✓ Kiểm thử mã dự phòng

✅ Đã triển khai 2FA thành công

Luồng:
1. Người dùng bật 2FA → quét mã QR
2. Người dùng nhập mã 6 số → 2FA được kích hoạt
3. Các lần đăng nhập sau yêu cầu mã 2FA
4. Mã dự phòng dùng cho trường hợp khẩn cấp
```

### Bước 7: Thêm Đăng nhập không mật khẩu (Passwordless)

```bash
/cook [triển khai đăng nhập không mật khẩu với magic links]
```

**Triển khai**:
```
[1/4] Thiết lập Magic link...
  ✓ Tạo các token đăng nhập bảo mật
  ✓ Lưu trữ token kèm thời gian hết hạn (10 phút)
  ✓ Template email cho magic link

[2/4] Các endpoint...
  ✓ POST /api/auth/magic-link/request
  ✓ GET /api/auth/magic-link/verify
  ✓ Xác thực token và dọn dẹp

[3/4] Bảo mật...
  ✓ Token chỉ dùng một lần
  ✓ Thời gian hết hạn ngắn (10 phút)
  ✓ Giới hạn tốc độ

[4/4] Kiểm thử...
  ✓ Kiểm thử luồng magic link (10 bài)

✅ Đã thêm đăng nhập không mật khẩu thành công

Cách sử dụng:
1. Người dùng nhập email
2. Nhận email chứa magic link
3. Nhấn link → tự động đăng nhập
```

### Bước 8: Thêm các tính năng bảo mật nâng cao

#### Khóa tài khoản
```bash
/cook [thêm chức năng khóa tài khoản sau 5 lần đăng nhập sai]
```

#### Quản lý phiên (Session Management)
```bash
/cook [triển khai quản lý phiên với theo dõi các phiên hoạt động]
```

#### IP Whitelisting
```bash
/cook [thêm tùy chọn danh sách trắng IP cho các tài khoản bảo mật cao]
```

### Bước 9: Kiểm thử hệ thống xác thực

```bash
/test
```

**Kết quả kiểm thử**:
```
✓ Kiểm thử đơn vị (48 bài)
  ✓ Băm mật khẩu (8 bài)
  ✓ Tạo/Xác thực JWT (12 bài)
  ✓ Làm mới token (6 bài)
  ✓ 2FA TOTP (10 bài)
  ✓ Tạo magic link (6 bài)
  ✓ Liên kết tài khoản OAuth (6 bài)

✓ Kiểm thử tích hợp (56 bài)
  ✓ Đăng ký (10 bài)
  ✓ Đăng nhập (12 bài)
  ✓ Đặt lại mật khẩu (12 bài)
  ✓ Luồng OAuth (14 bài)
  ✓ Luồng 2FA (8 bài)

✓ Kiểm thử bảo mật (24 bài)
  ✓ Chống brute force (6 bài)
  ✓ Kịch bản đánh cắp token (8 bài)
  ✓ Thử nghiệm SQL injection (4 bài)
  ✓ Thử nghiệm XSS (6 bài)

Test Suites: 3 passed, 3 total
Tests:       128 passed, 128 total
Coverage:    94.7%

✅ Tất cả bài kiểm thử đã vượt qua
```

### Bước 10: Review bảo mật

```bash
/review
```

**Danh sách kiểm tra bảo mật**:
```
✓ Mật khẩu được băm bằng bcrypt (12 rounds)
✓ Token JWT được ký đúng cách
✓ Token làm mới được lưu trữ an toàn
✓ Giới hạn tốc độ cho các endpoint auth
✓ Chống SQL injection
✓ Chống XSS
✓ Chống CSRF
✓ Yêu cầu mật khẩu an toàn
✓ Xác minh email đã triển khai
✓ Khóa tài khoản sau nhiều lần thử sai
✓ Đã có tùy chọn 2FA
✓ Đã cấu hình timeout cho phiên
✓ Lưu trữ token bảo mật
✓ Bắt buộc HTTPS
✓ Đã bật ghi log kiểm toán (audit logging)

Điểm bảo mật: 9.4/10 (Tuyệt vời)
```

### Bước 11: Cập nhật tài liệu

```bash
/docs:update
```

**Tài liệu được tạo**:
```
✓ Hướng dẫn xác thực
✓ Tài liệu các endpoint API
✓ Các thực hành tốt nhất về bảo mật
✓ Hướng dẫn thiết lập OAuth
✓ Hướng dẫn thiết lập 2FA
✓ Hướng dẫn kiểm thử
✓ Hướng dẫn khắc phục sự cố
```

## Ví dụ hoàn chỉnh: Xác thực cho trang Thương mại điện tử

### Yêu cầu
```
Triển khai hệ thống xác thực cho trang TMĐT với:
- Đăng ký/đăng nhập người dùng
- Xác minh email
- Đặt lại mật khẩu
- Đăng nhập mạng xã hội (Google, Facebook)
- Thanh toán cho khách (Guest checkout)
- Tùy chọn "Ghi nhớ tôi"
- Xóa tài khoản
- Tuân thủ GDPR
```

### Triển khai
```bash
# Lập kế hoạch xác thực
/plan [thiết kế hệ thống xác thực cho TMĐT với tất cả các yêu cầu trên]

# Triển khai auth cơ bản
/cook [triển khai xác thực JWT với xác minh email]

# Thêm OAuth
/cook [thêm đăng nhập OAuth Google và Facebook]

# Guest checkout
/cook [triển khai thanh toán cho khách với tùy chọn tạo tài khoản sau đó]

# Remember me
/cook [thêm chức năng ghi nhớ đăng nhập với token dài hạn]

# Quản lý tài khoản
/cook [triển khai xóa tài khoản kèm xuất dữ liệu (GDPR)]

# Kiểm thử tất cả
/test

# Cập nhật tài liệu
/docs:update
```

### So sánh thời gian

**Triển khai thủ công**: 6-10 giờ
- Thiết lập JWT: 1-2 giờ
- Xác minh email: 1 giờ
- Đặt lại mật khẩu: 1 giờ
- Thiết lập OAuth: 2-3 giờ
- Kiểm thử: 1-2 giờ
- Review bảo mật: 1-2 giờ

**Với ClaudeKit**: 38 phút
- Lập kế hoạch: 5 phút
- JWT + email: 10 phút
- Đặt lại mật khẩu: 5 phút
- OAuth: 12 phút
- Kiểm thử: 6 phút

**Thời gian tiết kiệm được**: 5.5-9.5 giờ (nhanh hơn 88%)

## Các mẫu xác thực (Patterns)

### Mẫu 1: Xác thực ưu tiên API (API-First)
```bash
/cook [triển khai xác thực JWT tối ưu cho ứng dụng di động]
```

### Mẫu 2: SSO (Single Sign-On)
```bash
/cook [triển khai SSO với SAML để tích hợp doanh nghiệp]
```

### Mẫu 3: Xác thực đa khách thuê (Multi-Tenant)
```bash
/cook [triển khai xác thực đa khách thuê với sự cô lập giữa các tổ chức]
```

### Mẫu 4: Phân quyền dựa trên vai trò (RBAC)
```bash
/cook [thêm quyền dựa trên vai trò với các role admin, user và guest]
```

## Thực hành tốt nhất

### 1. Lưu trữ mật khẩu an toàn
```javascript
✅ Tốt:
- bcrypt với ít nhất 12 rounds
- Băm mật khẩu bất đồng bộ
- Không bao giờ lưu mật khẩu dạng text thuần

❌ Xấu:
- Băm bằng MD5/SHA1
- Không dùng salt
- Lưu mật khẩu text thuần
```

### 2. Bảo mật Token JWT
```javascript
✅ Tốt:
- Token access thời hạn ngắn (15 phút)
- Xoay vòng token làm mới (Refresh token rotation)
- Lưu trữ token bảo mật (httpOnly cookies)
- Danh sách đen token khi đăng xuất

❌ Xấu:
- Token thời hạn dài
- Lưu token trong localStorage
- Không có cơ chế làm mới token
- Không có cơ chế đăng xuất
```

### 3. Xác thực đầu vào
```bash
/cook [thêm xác thực đầu vào toàn diện cho tất cả các endpoint auth]
```

### 4. Giới hạn tốc độ (Rate Limiting)
```javascript
Giới hạn cho các endpoint auth:
- Đăng nhập: 5 lần mỗi 15 phút
- Đăng ký: 3 lần mỗi giờ
- Đặt lại mật khẩu: 3 lần mỗi giờ
- Xác minh email: 5 lần mỗi giờ
```

### 5. Ghi log kiểm toán (Audit Logging)
```bash
/cook [thêm ghi log kiểm toán cho tất cả các sự kiện xác thực]
```

## Khắc phục sự cố

### Vấn đề: Token hết hạn quá nhanh
**Giải pháp**:
```bash
/cook [tăng thời gian hết hạn token JWT access lên 30 phút]
```

### Vấn đề: OAuth Callback thất bại
**Giải pháp**:
```bash
/fix --quick [OAuth callback trả về lỗi 400]
```

### Vấn đề: Không gửi được email đặt lại mật khẩu
**Giải pháp**:
```bash
/fix --quick [email đặt lại mật khẩu không gửi được]
```

### Vấn đề: Mã QR 2FA không hiển thị
**Giải pháp**:
```bash
/fix [mã QR 2FA không hiển thị trên giao diện di động]
```

## Danh sách kiểm tra bảo mật (Security Checklist)

Trước khi triển khai lên production:
```bash
✓ Tất cả mật khẩu được băm bằng bcrypt
✓ Token JWT sử dụng secret mạnh
✓ Đã bật xoay vòng token làm mới
✓ Đã cấu hình giới hạn tốc độ
✓ Đã bắt buộc HTTPS
✓ CORS được cấu hình đúng
✓ Xác thực đầu vào cho tất cả endpoint
✓ Chống SQL injection
✓ Chống XSS
✓ Chống CSRF
✓ Xác minh email hoạt động tốt
✓ Đã kiểm thử việc đặt lại mật khẩu
✓ Các URL chuyển hướng OAuth đã nằm trong whitelist
✓ 2FA đã được thử nghiệm với nhiều ứng dụng
✓ Chức năng khóa tài khoản hoạt động tốt
✓ Đã bật ghi log kiểm toán
✓ Thông báo lỗi không làm rò rỉ thông tin
✓ Đã cấu hình session timeout
✓ Cookie bảo mật (httpOnly, secure)
✓ Danh sách đen token khi đăng xuất hoạt động
```

## Bước tiếp theo

### Các trường hợp sử dụng liên quan
- [Xây dựng REST API](/vi/docs/workflows) - Tạo các API
- [Tích hợp Thanh toán](/vi/docs/workflows/integrating-payment) - Thêm thanh toán
- [Thêm Tính Năng Mới](/vi/docs/workflows/adding-feature) - Xây dựng tính năng

### Các lệnh liên quan
- [/cook](/docs/engineer/skills/cook) - Triển khai tính năng
- [/test](/docs/engineer/commands/core/test) - Bộ kiểm thử
- [/fix --quick](/docs/engineer/skills/fix) - Sửa lỗi nhanh

### Hướng dẫn tích hợp
- [/integrate:polar](/vi/docs/engineer/skills/tools/integrate) - Thanh toán Polar
- [Better Auth Skill](/vi/docs/engineer/skills) - Framework Better Auth

### Đọc thêm
- [Các thực hành tốt nhất về JWT](https://jwt.io/introduction)
- [Đặc tả OAuth 2.0](https://oauth.net/2/)
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

---

**Thông điệp chính**: ClaudeKit cho phép triển khai nhanh chóng các hệ thống xác thực bảo mật, sẵn sàng cho sản xuất với các thực hành tốt nhất được tích hợp sẵn - từ JWT cơ bản đến OAuth2 và 2FA trong vòng chưa đầy một giờ.
