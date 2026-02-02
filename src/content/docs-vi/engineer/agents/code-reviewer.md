---
title: Agent Code Reviewer
description: Đánh giá chất lượng mã nguồn toàn diện với kiểm tra bảo mật, phân tích hiệu suất và các đề xuất có thể thực hiện được
section: engineer
kit: engineer
category: agents
order: 7
published: true
lang: vi
---

# Agent Code Reviewer

Agent code reviewer thực hiện các đánh giá chất lượng mã nguồn toàn diện bao gồm kiểm tra bảo mật, phân tích hiệu suất, xác nhận an toàn kiểu (type safety) và cung cấp các đề xuất được phân loại theo mức độ ưu tiên.

## Mục đích

Đánh giá chất lượng mã nguồn, xác định các lỗ hổng bảo mật, xác nhận an toàn kiểu, phân tích hiệu suất và đảm bảo mã nguồn đáp ứng các tiêu chuẩn dự án trước khi hợp nhất (merge).

## Khi nào được kích hoạt

Agent code reviewer được kích hoạt khi:

- Sử dụng lệnh `/review [scope]`
- Sau khi triển khai các tính năng
- Trước khi tạo pull request
- Khi phát hiện các vấn đề về chất lượng mã nguồn
- Trong quá trình đánh giá bảo mật
- Khi nghi ngờ có nút thắt cổ chai về hiệu suất
- Sau khi tái cấu trúc (refactoring)
- Trước khi triển khai sản phẩm thực tế (production)

## Khả năng

### Đánh giá chất lượng mã nguồn

- **Xem xét kiến trúc**: Các mẫu thiết kế (design patterns), nguyên tắc SOLID
- **Tổ chức mã nguồn**: Cấu trúc tệp, ranh giới mô-đun
- **Quy ước đặt tên**: Biến, hàm, lớp
- **Trùng lặp mã nguồn**: Vi phạm DRY, cơ hội tái cấu trúc
- **Phân tích độ phức tạp**: Độ phức tạp vòng (cyclomatic complexity), tải nhận thức (cognitive load)
- **Tài liệu**: Nhận xét, JSDoc, tệp README

### Kiểm tra bảo mật

- **OWASP Top 10**: Các lỗ hổng bảo mật phổ biến
- **Xác thực (Authentication)**: Xử lý token, quản lý phiên
- **Ủy quyền (Authorization)**: Kiểm soát truy cập, kiểm tra quyền
- **Xác nhận đầu vào**: Ngăn chặn SQL injection, XSS, CSRF
- **Quản lý bí mật (Secrets)**: Khóa API, lộ thông tin đăng nhập
- **Phụ thuộc (Dependencies)**: Các lỗ hổng đã biết trong các gói phần mềm

### Phân tích hiệu suất

- **Hiệu quả thuật toán**: Độ phức tạp Big O, tối ưu hóa
- **Truy vấn cơ sở dữ liệu**: Vấn đề N+1, thiếu chỉ mục
- **Sử dụng bộ nhớ**: Rò rỉ, phân bổ không cần thiết
- **Kích thước gói (Bundle Size)**: Chia nhỏ mã nguồn (code splitting), tree shaking
- **Bộ nhớ đệm (Caching)**: Các cơ hội để cải thiện hiệu suất
- **Hoạt động không đồng bộ**: Xử lý Promise, tình trạng tranh đua (race conditions)

### Xác nhận an toàn kiểu

- **TypeScript**: Tuân thủ chế độ nghiêm ngặt (strict mode), sử dụng kiểu `any`
- **Dart**: An toàn null (null safety), chú thích kiểu
- **Độ bao phủ kiểu**: Tỷ lệ phần trăm mã nguồn được định kiểu
- **Khẳng định kiểu (Type Assertions)**: Ép kiểu không an toàn, bộ bảo vệ kiểu (type guards)
- **Kiểu Generic**: Sử dụng đúng cách, các ràng buộc

### Xây dựng & Triển khai

- **Biên dịch**: Không có lỗi trong bản build sản xuất
- **Linting**: Tính nhất quán của phong cách mã nguồn
- **Mã nguồn chết (Dead Code)**: Các lệnh import không sử dụng, mã nguồn không thể truy cập
- **Phụ thuộc**: Các gói phần mềm lỗi thời, các bản vá bảo mật
- **Cấu hình**: Biến môi trường, feature flags

## Các loại đánh giá

### Nghiêm trọng (Bắt buộc sửa)

Các vấn đề gây ra rủi ro tức thì:
- Lỗ hổng bảo mật
- Khả năng mất dữ liệu
- Vượt qua kiểm tra xác thực
- Các kịch bản gây sập hệ thống sản xuất
- Thay đổi API gây hỏng (breaking changes)

### Ưu tiên cao (Nên sửa)

Các vấn đề ảnh hưởng đến độ tin cậy:
- Suy giảm hiệu suất
- Vi phạm an toàn kiểu
- Rò rỉ bộ nhớ
- Thiếu sót trong xử lý lỗi
- Thiếu hụt độ bao phủ kiểm thử (<80%)

### Ưu tiên trung bình (Khuyến nghị)

Các vấn đề ảnh hưởng đến khả năng bảo trì:
- Mã nguồn có "mùi" (Code smells)
- Đặt tên không nhất quán
- Thiếu tài liệu
- Trùng lặp mã nguồn
- Các hàm phức tạp (>50 dòng)

### Ưu tiên thấp (Tùy chọn)

Các cải tiến nhỏ:
- Không nhất quán về phong cách
- Tối ưu hóa nhỏ
- Cải thiện nhận xét
- Tinh chỉnh đặt tên biến

## Ví dụ sử dụng

### Review tính năng

**Đầu vào:**
```bash
/review [mô-đun xác thực người dùng]
```

**Quá trình:**
```
1. Phân tích phạm vi (10 giây)
   Đang tìm kiếm các tệp...

   Đã tìm thấy:
   - src/auth/login.ts
   - src/auth/register.ts
   - src/auth/jwt.ts
   - src/auth/middleware.ts
   - src/auth/validators.ts
   - tests/auth/*.test.ts

   Tổng cộng: 6 tệp nguồn, 3 tệp kiểm thử
   Số dòng: 1.247 (không bao gồm kiểm thử)

2. Phân tích chất lượng mã nguồn (45 giây)
   Đang chạy các scout song song...

   Scout 1: Các mẫu bảo mật
   Scout 2: An toàn kiểu
   Scout 3: Các vấn đề hiệu suất
   Scout 4: Độ bao phủ kiểm thử
   Scout 5: Tài liệu

3. Kiểm tra bảo mật (30 giây)
   Kiểm tra OWASP Top 10...
   Phân tích luồng xác thực...
   Xem xét xử lý token...
   Kiểm tra xác nhận đầu vào...

4. Tạo báo cáo (15 giây)
   Phân loại các phát hiện...
   Tạo các đề xuất...
   Tạo các mục hành động...

   Review hoàn tất: tìm thấy 12 vấn đề
   - Nghiêm trọng: 2
   - Ưu tiên cao: 3
   - Ưu tiên trung bình: 5
   - Ưu tiên thấp: 2
```

**Báo cáo được tạo:**

```markdown
# Báo cáo Code Review: Mô-đun xác thực người dùng

## Tóm tắt

| Loại | Số lượng | Trạng thái |
|----------|-------|--------|
| Nghiêm trọng | 2 | ✗ Bắt buộc sửa |
| Ưu tiên cao | 3 | ⚠ Nên sửa |
| Ưu tiên trung bình | 5 | ℹ Khuyến nghị |
| Ưu tiên thấp | 2 | ○ Tùy chọn |
| **Tổng cộng** | **12** | |

**Đánh giá tổng thể**: Chưa sẵn sàng cho sản xuất - các vấn đề bảo mật nghiêm trọng phải được giải quyết.

---

## Các vấn đề nghiêm trọng (Phải sửa trước khi Merge)

### 1. JWT Secret được lưu trữ trong mã nguồn

**Mức độ nghiêm trọng**: Nghiêm trọng - Lỗ hổng bảo mật
**Phân loại**: Quản lý bí mật / OWASP A07:2021 - Lỗi nhận dạng và xác thực

**Vị trí:** `src/auth/jwt.ts:5`

**Vấn đề:**
```typescript
// src/auth/jwt.ts
const JWT_SECRET = 'super-secret-key-123'; // ✗ NGHIÊM TRỌNG
\nexport const signToken = (payload: any) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
};
```

**Tại sao điều này nghiêm trọng:**
- Bí mật được đưa vào hệ thống quản lý phiên bản (có thể thấy trong lịch sử git)
- Bất kỳ ai có quyền truy cập kho lưu trữ đều có thể giả mạo các token hợp lệ
- Thay đổi bí mật sẽ làm mất hiệu lực tất cả các phiên người dùng hiện có
- Kẻ tấn công có thể xác thực dưới danh nghĩa bất kỳ người dùng nào

**Tác động:**
- Vượt qua hoàn toàn hệ thống xác thực
- Truy cập trái phép vào tất cả tài khoản người dùng
- Khả năng vi phạm dữ liệu

**Khắc phục:**
```typescript
// src/auth/jwt.ts
const JWT_SECRET = process.env.JWT_SECRET; // ✓ Tải từ môi trường

if (!JWT_SECRET) {
  throw new Error('Biến môi trường JWT_SECRET là bắt buộc');
}

export const signToken = (payload: any) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
};
```

**Hành động bắt buộc:**
1. Xóa bí mật khỏi mã nguồn
2. Tạo bí mật mới an toàn về mặt mật mã:
   ```bash
   openssl rand -base64 64\n   ```
3. Lưu trữ trong các biến môi trường:
   ```bash
   # .env (không được commit)
   JWT_SECRET=<bí-mật-được-tạo>
   ```
4. Thêm vào các bí mật (secrets) CI/CD
5. Cập nhật tất cả các môi trường (dev, staging, prod)
6. Thay đổi bí mật trong sản xuất (làm mất hiệu lực các phiên hiện có)
7. Thêm pre-commit hook để ngăn chặn lộ bí mật:
   ```bash
   npm install --save-dev @commitlint/cli detect-secrets
   ```

**Xác nhận:**
- [ ] Bí mật đã được xóa khỏi tất cả lịch sử git
- [ ] Các biến môi trường đã được cấu hình
- [ ] Ứng dụng khởi động không có lỗi
- [ ] Ký/xác nhận token hoạt động bình thường
- [ ] Pre-commit hook ngăn chặn các vấn đề trong tương lai

---

### 2. Lỗ hổng SQL Injection

**Mức độ nghiêm trọng**: Nghiêm trọng - Lỗ hổng bảo mật
**Phân loại**: OWASP A03:2021 - Injection

**Vị trí:** `src/auth/login.ts:23`

**Vấn đề:**
```typescript
// src/auth/login.ts
export const loginUser = async (email: string, password: string) => {
  // ✗ NGHIÊM TRỌNG: Lỗ hổng SQL Injection
  const query = `SELECT * FROM users WHERE email = '${email}'`;
  const result = await db.raw(query);

  if (!result.rows[0]) {
    throw new Error('Không tìm thấy người dùng');
  }

  // ... xác nhận mật khẩu
};
```

**Tại sao điều này nghiêm trọng:**
- Kẻ tấn công có thể vượt qua xác thực bằng: `' OR '1'='1`
- Có thể trích xuất toàn bộ cơ sở dữ liệu: `' UNION SELECT * FROM users --`
- Có thể xóa dữ liệu: `'; DROP TABLE users; --`
- Không có quá trình làm sạch (sanitization) đầu vào

**Ví dụ tấn công:**
```bash
# Vượt qua xác thực
POST /api/auth/login
{
  \"email\": \"admin@example.com' OR '1'='1' --\",
  \"password\": \"bất kỳ cái gì\"
}

# Trích xuất tất cả người dùng
POST /api/auth/login
{
  \"email\": \"' UNION SELECT id, email, password, null FROM users --\",
  \"password\": \"\"
}
```

**Tác động:**
- Toàn bộ cơ sở dữ liệu bị xâm phạm
- Vượt qua xác thực
- Rò rỉ dữ liệu
- Phá hủy dữ liệu

**Khắc phục:**
```typescript
// src/auth/login.ts
export const loginUser = async (email: string, password: string) => {
  // ✓ Sử dụng các truy vấn được tham số hóa
  const result = await db('users')
    .where({ email })
    .first();

  if (!result) {
    throw new Error('Không tìm thấy người dùng');
  }

  // Xác nhận mật khẩu
  const isValid = await bcrypt.compare(password, result.password);

  if (!isValid) {
    throw new Error('Mật khẩu không hợp lệ');
  }

  return result;
};
```

**Thay thế (với truy vấn thô):**
```typescript
// Nếu SQL thô là bắt buộc, hãy sử dụng các truy vấn được tham số hóa
const result = await db.raw(
  'SELECT * FROM users WHERE email = ?',
  [email] // ✓ Các tham số được thoát (escaped)
);
```

**Hành động bắt buộc:**
1. Thay thế tất cả các truy vấn nối chuỗi
2. Sử dụng trình tạo truy vấn ORM hoặc các truy vấn được tham số hóa
3. Thêm xác nhận đầu vào:
   ```typescript
   import { z } from 'zod';

   const loginSchema = z.object({
     email: z.string().email().max(255),
     password: z.string().min(8).max(100)
   });
   ```
4. Thêm quét bảo mật vào CI/CD:
   ```bash
   npm install --save-dev eslint-plugin-security
   ```
5. Kiểm tra tất cả các truy vấn cơ sở dữ liệu trong mã nguồn
6. Thực thi việc sử dụng prepared statement

**Xác nhận:**
- [ ] Không còn nối chuỗi trong các truy vấn
- [ ] Xác nhận đầu vào trên tất cả các điểm cuối
- [ ] Linting bảo mật vượt qua
- [ ] Kiểm tra xâm nhập không cho thấy dấu hiệu injection

---

## Các vấn đề ưu tiên cao (Nên sửa)

### 3. Thiếu yêu cầu về độ phức tạp của mật khẩu

**Mức độ nghiêm trọng**: Cao - Bảo mật
**Phân loại**: OWASP A07:2021 - Lỗi nhận dạng và xác thực

**Vị trí:** `src/auth/register.ts:15`

**Vấn đề:**
```typescript
// src/auth/register.ts
export const registerUser = async (data: RegisterDTO) => {
  // ✗ Không có xác nhận mật khẩu
  const hashedPassword = await bcrypt.hash(data.password, 10);

  return db('users').insert({
    email: data.email,
    password: hashedPassword
  });
};
```

**Tại sao điều này quan trọng:**
- Người dùng có thể đặt mật khẩu yếu: \"123456\", \"password\"
- Không thực thi độ dài tối thiểu
- Không có yêu cầu về độ phức tạp
- Dễ bị tấn công vét cạn (brute force)

**Tác động:**
- Chiếm đoạt tài khoản qua brute force
- Các cuộc tấn công nhồi nhét thông tin đăng nhập (credential stuffing)
- Đoán mật khẩu

**Khắc phục:**
```typescript
// src/auth/validators.ts
import { z } from 'zod';

export const passwordSchema = z.string()
  .min(12, 'Mật khẩu phải có ít nhất 12 ký tự')
  .max(128, 'Mật khẩu phải ít hơn 128 ký tự')
  .regex(/[a-z]/, 'Mật khẩu phải chứa chữ cái viết thường')
  .regex(/[A-Z]/, 'Mật khẩu phải chứa chữ cái viết hoa')
  .regex(/[0-9]/, 'Mật khẩu phải chứa số')
  .regex(/[^a-zA-Z0-9]/, 'Mật khẩu phải chứa ký tự đặc biệt');

// src/auth/register.ts
export const registerUser = async (data: RegisterDTO) => {
  // ✓ Xác nhận mật khẩu
  const validatedPassword = passwordSchema.parse(data.password);

  // ✓ Kiểm tra các mật khẩu phổ biến
  const isCommon = await checkCommonPassword(validatedPassword);
  if (isCommon) {
    throw new Error('Mật khẩu quá phổ biến');
  }

  const hashedPassword = await bcrypt.hash(validatedPassword, 10);

  return db('users').insert({
    email: data.email,
    password: hashedPassword
  });
};
```

**Cải thiện bổ sung:**
```typescript
// Kiểm tra với API Have I Been Pwned
import { pwnedPassword } from 'hibp';

const isPwned = await pwnedPassword(password);
if (isPwned > 0) {
  throw new Error('Mật khẩu này đã từng bị lộ trong các vụ vi phạm dữ liệu');
}
```

**Hành động bắt buộc:**
1. Triển khai các quy tắc về độ phức tạp mật khẩu
2. Thêm danh sách đen các mật khẩu phổ biến
3. Xem xét tích hợp HIBP
4. Thêm chỉ báo độ mạnh mật khẩu trong UI
5. Thực thi chính sách mật khẩu khi đăng ký

**Xác nhận:**
- [ ] Các mật khẩu yếu bị từ chối
- [ ] Các mật khẩu phổ biến bị chặn
- [ ] Chính sách mật khẩu đã được ghi chép
- [ ] Các kiểm thử bao phủ các trường hợp biên

---

### 4. Không có giới hạn tỷ lệ (Rate Limiting) trên điểm cuối đăng nhập

**Mức độ nghiêm trọng**: Cao - Bảo mật
**Phân loại**: OWASP A07:2021 - Lỗi nhận dạng và xác thực

**Vị trí:** `src/routes/auth.routes.ts:10`

**Vấn đề:**
```typescript
// src/routes/auth.routes.ts
router.post('/login', loginController); // ✗ Không có rate limiting
```

**Tại sao điều này quan trọng:**
- Cho phép số lần thử đăng nhập không giới hạn
- Dễ bị tấn công brute force
- Không có sự bảo vệ chống lại việc nhồi nhét thông tin đăng nhập
- Không có sự điều tiết dựa trên IP

**Tác động:**
- Chiếm đoạt tài khoản qua brute force
- Suy giảm dịch vụ (DDoS)
- Cạn kiệt tài nguyên

**Khắc phục:**
```typescript
// src/middleware/rate-limit.ts
import rateLimit from 'express-rate-limit';
import RedisStore from 'rate-limit-redis';
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

export const loginRateLimit = rateLimit({
  store: new RedisStore({
    client: redis,
    prefix: 'rl:login:'
  }),
  windowMs: 15 * 60 * 1000, // 15 phút
  max: 5, // 5 lần thử trong mỗi cửa sổ
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Quá nhiều lần thử đăng nhập, vui lòng thử lại sau',
  skipSuccessfulRequests: true // Chỉ tính các lần thử thất bại
});

// src/routes/auth.routes.ts
import { loginRateLimit } from '@/middleware/rate-limit';

router.post('/login', loginRateLimit, loginController); // ✓ Có rate limited
```

**Bảo mật bổ sung:**
```typescript
// Khóa tài khoản sau các lần thử thất bại
// src/auth/login.ts
export const loginUser = async (email: string, password: string) => {
  const user = await db('users').where({ email }).first();

  if (!user) {
    // Tăng số lần thử thất bại cho cả người dùng không tồn tại (ngăn chặn việc dò tìm)
    await redis.incr(`login:failed:${email}`);
    throw new Error('Thông tin đăng nhập không hợp lệ');
  }

  // Kiểm tra xem tài khoản có bị khóa không
  const failedAttempts = await redis.get(`login:failed:${email}`);
  if (parseInt(failedAttempts || '0') >= 5) {
    const lockoutExpiry = await redis.ttl(`login:failed:${email}`);
    throw new Error(`Tài khoản bị khóa. Thử lại sau ${lockoutExpiry} giây`);
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    // Tăng số lần thử thất bại
    await redis.incr(`login:failed:${email}`);
    await redis.expire(`login:failed:${email}`, 900); // 15 phút hết hạn
    throw new Error('Thông tin đăng nhập không hợp lệ');
  }

  // Đặt lại số lần thử thất bại khi đăng nhập thành công
  await redis.del(`login:failed:${email}`);

  return user;
};
```

**Hành động bắt buộc:**
1. Triển khai giới hạn tỷ lệ trên điểm cuối đăng nhập
2. Thêm cơ chế khóa tài khoản
3. Thêm CAPTCHA sau 3 lần thử thất bại
4. Giám sát các mẫu brute force
5. Cảnh báo về các hoạt động đáng ngờ

**Xác nhận:**
- [ ] Giới hạn tỷ lệ được thực thi
- [ ] Khóa tài khoản hoạt động
- [ ] Các cảnh báo giám sát đã được cấu hình
- [ ] Kiểm thử tải cho thấy không thể vượt qua

---

### 5. Lạm dụng kiểu `any` trong TypeScript

**Mức độ nghiêm trọng**: Cao - An toàn kiểu
**Phân loại**: Chất lượng mã nguồn

**Vấn đề:**
Tìm thấy 23 trường hợp sử dụng kiểu `any` trong mô-đun xác thực:

```typescript
// src/auth/jwt.ts:7
export const signToken = (payload: any) => { // ✗
  return jwt.sign(payload, JWT_SECRET);
};

// src/auth/middleware.ts:12
export const authenticate = async (req: any, res: any, next: any) => { // ✗
  // ...
};

// src/auth/validators.ts:5
export const validateInput = (schema: any, data: any) => { // ✗
  // ...
};
```

**Tại sao điều này quan trọng:**
- Mất tất cả các lợi ích kiểm tra kiểu
- Các lỗi chỉ bị phát hiện khi chạy (runtime)
- Khó tái cấu trúc an toàn
- Gợi ý mã nguồn IDE kém
- Giảm độ tin cậy của mã nguồn

**Tác động:**
- Lỗi runtime trong sản xuất
- Tăng thời gian gỡ lỗi
- Khó bảo trì hơn

**Khắc phục:**
```typescript
// src/auth/types.ts
export interface JWTPayload {
  userId: string;
  email: string;
  role: 'user' | 'admin';
  iat: number;
  exp: number;
}

export interface AuthRequest extends Request {
  user?: JWTPayload;
}

// src/auth/jwt.ts
import { JWTPayload } from './types';

export const signToken = (payload: Omit<JWTPayload, 'iat' | 'exp'>): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
};

export const verifyToken = (token: string): JWTPayload => {
  return jwt.verify(token, JWT_SECRET) as JWTPayload;
};

// src/auth/middleware.ts
import { Response, NextFunction } from 'express';
import { AuthRequest } from './types';

export const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction\n): Promise<void> => {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    res.status(401).json({ error: 'Không có token được cung cấp' });
    return;
  }

  try {
    const payload = verifyToken(token);
    req.user = payload; // ✓ An toàn kiểu
    next();
  } catch (error) {\n    res.status(401).json({ error: 'Token không hợp lệ' });
  }
};
```

**Hành động bắt buộc:**
1. Định nghĩa các kiểu rõ ràng cho tất cả các hàm
2. Bật chế độ nghiêm ngặt của TypeScript:
   ```json
   {
     \"compilerOptions\": {
       \"strict\": true,
       \"noImplicitAny\": true,
       \"strictNullChecks\": true,
       \"strictFunctionTypes\": true
     }
   }
   ```
3. Thêm quy tắc ESLint:
   ```json
   {
     \"rules\": {
       \"@typescript-eslint/no-explicit-any\": \"error\"
     }
   }
   ```
4. Sửa tất cả các trường hợp sử dụng `any` (23 trường hợp)

**Xác nhận:**
- [ ] Không còn kiểu `any`
- [ ] Chế độ nghiêm ngặt TypeScript vượt qua
- [ ] ESLint vượt qua với quy tắc no-explicit-any
- [ ] Các kiểm thử vượt qua với các kiểu nghiêm ngặt

---

## Các vấn đề ưu tiên trung bình (Khuyến nghị)

### 6. Thiếu xử lý lỗi trong các hàm không đồng bộ (Async)

**Mức độ nghiêm trọng**: Trung bình - Độ tin cậy
**Tệp**: 8 hàm trong 4 tệp

**Ví dụ:**
```typescript
// src/auth/register.ts:23
export const registerUser = async (data: RegisterDTO) => {
  // ✗ Không có try-catch, các lỗi nổi lên mà không được xử lý
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return db('users').insert({ email: data.email, password: hashedPassword });
};

// src/auth/jwt.ts:15
export const verifyToken = async (token: string) => {
  // ✗ jwt.verify có thể ném ra lỗi, không được bắt lại
  return jwt.verify(token, JWT_SECRET);
};
```

**Khắc phục:**
```typescript
// Tạo bộ xử lý lỗi tập trung
// src/errors/auth-errors.ts
export class AuthError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number
  ) {
    super(message);
    this.name = 'AuthError';
  }
}

export class InvalidTokenError extends AuthError {
  constructor(message = 'Token không hợp lệ') {
    super(message, 'INVALID_TOKEN', 401);
  }
}

export class UserExistsError extends AuthError {
  constructor(message = 'Người dùng đã tồn tại') {
    super(message, 'USER_EXISTS', 409);
  }
}

// src/auth/register.ts
import { UserExistsError } from '@/errors/auth-errors';

export const registerUser = async (data: RegisterDTO) => {
  try {
    // Kiểm tra người dùng tồn tại
    const existingUser = await db('users').where({ email: data.email }).first();
    if (existingUser) {
      throw new UserExistsError();
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    return await db('users').insert({
      email: data.email,
      password: hashedPassword
    });
  } catch (error) {
    if (error instanceof UserExistsError) {
      throw error;\n    }

    // Ghi nhật ký các lỗi không mong muốn
    logger.error('Đăng ký thất bại', { error, email: data.email });
    throw new AuthError('Đăng ký thất bại', 'REGISTRATION_ERROR', 500);
  }
};

// src/auth/jwt.ts
import { InvalidTokenError } from '@/errors/auth-errors';

export const verifyToken = (token: string): JWTPayload => {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new InvalidTokenError('Token đã hết hạn');
    }
    if (error instanceof jwt.JsonWebTokenError) {
      throw new InvalidTokenError('Token sai định dạng');
    }
    throw new InvalidTokenError();
  }
};
```

**Hành động bắt buộc:**
1. Thêm các lớp lỗi cho tất cả các kịch bản
2. Bao bọc các hoạt động không đồng bộ trong try-catch
3. Ghi nhật ký lỗi với bối cảnh
4. Trả về các mã trạng thái HTTP phù hợp
5. Thêm giám sát lỗi (Sentry)

---

### 7. Độ bao phủ kiểm thử dưới mục tiêu (67%)

**Mức độ nghiêm trọng**: Trung bình - Chất lượng
**Mục tiêu**: 80%+

**Báo cáo độ bao phủ:**
```
File                     | Stmts | Branch | Funcs | Lines | Uncovered Lines
-------------------------|-------|--------|-------|-------|------------------
src/auth/login.ts        |  84.2 |   75.0 |  100  |  84.2 | 45-48, 67-71
src/auth/register.ts     |  56.3 |   50.0 |   80  |  56.3 | 23-34, 56-67, 89
src/auth/jwt.ts          |  91.7 |   83.3 |  100  |  91.7 | 34-36
src/auth/middleware.ts   |  45.8 |   33.3 |   50  |  45.8 | 12-23, 45-78
src/auth/validators.ts   |  62.5 |   50.0 |   75  |  62.5 | 15-19, 34-45
-------------------------|-------|--------|-------|-------|------------------
Total                    |  67.1 |   58.3 |   81  |  67.1 |
```

**Các kiểm thử còn thiếu:**
1. Các kịch bản lỗi (đầu vào không hợp lệ, lỗi mạng)
2. Các trường hợp biên (token hết hạn, đăng nhập đồng thời)
3. Các kịch bản bảo mật (thử nghiệm SQL injection, XSS)
4. Kiểm thử tích hợp (toàn bộ luồng xác thực)

**Khắc phục:** Xem [Hướng dẫn kiểm thử](#các-khuyến nghị-kiểm-thử) bên dưới

---

### 8. Trùng lặp mã nguồn (3 trường hợp)

**Mức độ nghiêm trọng**: Trung bình - Khả năng bảo trì

**Ví dụ:**
```typescript
// Logic xác nhận bị trùng lặp
// src/auth/register.ts:15
if (!data.email || !isValidEmail(data.email)) {
  throw new Error('Email không hợp lệ');
}

// src/auth/login.ts:12
if (!credentials.email || !isValidEmail(credentials.email)) {
  throw new Error('Email không hợp lệ');
}

// src/auth/reset-password.ts:8
if (!email || !isValidEmail(email)) {
  throw new Error('Email không hợp lệ');
}
```

**Khắc phục:** Tập trung hóa việc xác nhận với các lược đồ Zod (xem cách sửa vấn đề #5)

---

### 9-10. Các vấn đề ưu tiên trung bình bổ sung...

---

## Các vấn đề ưu tiên thấp (Tùy chọn)

### 11. Đặt tên hàm không nhất quán

**Mức độ nghiêm trọng**: Thấp - Phong cách

**Vấn đề:**
```typescript
// Trộn lẫn các quy ước
export const registerUser = async () => {}  // camelCase
export const LoginUser = async () => {}     // PascalCase (sai)
export const verify_token = async () => {}  // snake_case (sai)
```

**Khắc phục:** Sử dụng camelCase nhất quán cho các hàm

---

### 12. Thiếu các nhận xét JSDoc

**Mức độ nghiêm trọng**: Thấp - Tài liệu

**Khắc phục:**
```typescript
/**
 * Xác thực người dùng bằng email và mật khẩu
 * @param email - Địa chỉ email người dùng
 * @param password - Mật khẩu văn bản thuần túy
 * @returns Đối tượng người dùng kèm theo token JWT
 * @throws {AuthError} Nếu thông tin đăng nhập không hợp lệ
 */
export const loginUser = async (
  email: string,
  password: string
): Promise<UserWithToken> => {
  // ...
};
```

---

## Cập nhật trạng thái tác vụ

**Tệp kế hoạch:** `plans/auth-module-implementation-20241020.md`

### Cập nhật trạng thái công việc:
```markdown
## Các tác vụ triển khai

- [x] 1. Điểm cuối đăng ký người dùng
- [x] 2. Điểm cuối đăng nhập người dùng
- [x] 3. Tạo token JWT
- [x] 4. Middleware xác thực
- [x] 5. Xác nhận đầu vào
- [ ] 6. Thắt chặt bảo mật (ĐANG THỰC HIỆN - tìm thấy 5 vấn đề)
  - [ ] Sửa việc lưu trữ bí mật JWT (Nghiêm trọng)
  - [ ] Sửa SQL injection (Nghiêm trọng)
  - [ ] Thêm độ phức tạp mật khẩu (Ưu tiên cao)
  - [ ] Thêm giới hạn tỷ lệ (Ưu tiên cao)
  - [ ] Loại bỏ kiểu any (Ưu tiên cao)
- [ ] 7. Xử lý lỗi (CHƯA BẮT ĐẦU - thiếu 8 trình xử lý)
- [ ] 8. Kiểm thử tích hợp (CHƯA BẮT ĐẦU - độ bao phủ 67%, mục tiêu 80%)
- [ ] 9. Tài liệu (CHƯA BẮT ĐẦU)
```

### Các bước tiếp theo:
1. **KHÔNG ĐƯỢC MERGE** - Các vấn đề nghiêm trọng phải được sửa trước
2. Chạy: `/fix --quick [sửa các vấn đề bảo mật nghiêm trọng được tìm thấy trong review]`
3. Chạy: `/test [xác nhận các bản sửa lỗi bảo mật]`
4. Chạy: `/review [review lại sau khi sửa lỗi]`
5. Cập nhật tài liệu
6. Yêu cầu review lần cuối

---

## Các khuyến nghị kiểm thử

### Thêm các kiểm thử còn thiếu

```typescript
// tests/auth/login.test.ts
describe('loginUser', () => {
  // Luồng thành công (đã có nhưng tối thiểu)
  it('đăng nhập với thông tin hợp lệ', async () => {
    const result = await loginUser('user@example.com', 'Password123!');
    expect(result).toHaveProperty('token');
  });

  // Các kịch bản lỗi (CÒN THIẾU)
  it('từ chối định dạng email không hợp lệ', async () => {
    await expect(loginUser('invalid', 'password'))
      .rejects.toThrow('Email không hợp lệ');
  });

  it('từ chối người dùng không tồn tại', async () => {
    await expect(loginUser('notfound@example.com', 'password'))
      .rejects.toThrow('Không tìm thấy người dùng');
  });

  it('từ chối mật khẩu sai', async () => {
    await expect(loginUser('user@example.com', 'wrongpassword'))
      .rejects.toThrow('Mật khẩu không hợp lệ');
  });

  it('xử lý lỗi kết nối cơ sở dữ liệu', async () => {
    jest.spyOn(db, 'query').mockRejectedValue(new Error('Lỗi DB'));
    await expect(loginUser('user@example.com', 'password'))
      .rejects.toThrow();
  });

  // Các kịch bản bảo mật (CÒN THIẾU)
  it('ngăn chặn SQL injection trong trường email', async () => {
    const maliciousEmail = \"' OR '1'='1' --\";
    await expect(loginUser(maliciousEmail, 'password'))
      .rejects.toThrow();
  });

  it('giới hạn tỷ lệ sau 5 lần thử thất bại', async () => {
    for (let i = 0; i < 5; i++) {
      await loginUser('user@example.com', 'wrong').catch(() => {});
    }

    await expect(loginUser('user@example.com', 'Password123!'))
      .rejects.toThrow('Quá nhiều lần thử');
  });

  // Các trường hợp biên (CÒN THIẾU)
  it('xử lý token hết hạn một cách khéo léo', async () => {
    const expiredToken = generateExpiredToken();
    await expect(verifyToken(expiredToken))
      .rejects.toThrow('Token đã hết hạn');
  });
});
```

---

## Các khuyến nghị về hiệu suất

### Tối ưu hóa truy vấn cơ sở dữ liệu

```typescript
// Hiện tại (vấn đề N+1)
const users = await db('users').select('*');
for (const user of users) {
  user.posts = await db('posts').where({ userId: user.id }); // ✗ N truy vấn
}

// Tối ưu hóa
const users = await db('users')
  .select('users.*')
  .leftJoin('posts', 'users.id', 'posts.userId')
  .groupBy('users.id'); // ✓ 1 truy vấn
```

### Thêm các chỉ mục cơ sở dữ liệu

```sql
-- Các chỉ mục còn thiếu được xác định
CREATE INDEX idx_users_email ON users(email); -- Các truy vấn đăng nhập
CREATE INDEX idx_tokens_user_id ON tokens(user_id); -- Tra cứu token
CREATE INDEX idx_sessions_expires_at ON sessions(expires_at); -- Tác vụ dọn dẹp
```

---

## Danh sách kiểm tra bảo mật (Security Checklist)

- [ ] Không có bí mật trong mã nguồn
- [ ] Tất cả đầu vào được xác nhận
- [ ] Đã ngăn chặn SQL injection
- [ ] Đã triển khai ngăn chặn XSS
- [ ] Đã triển khai CSRF tokens
- [ ] Đã cấu hình giới hạn tỷ lệ
- [ ] Đã bật khóa tài khoản
- [ ] Đã thực thi độ phức tạp mật khẩu
- [ ] Các token được tạo một cách an toàn
- [ ] Đã thực thi HTTPS
- [ ] Đã cấu hình các tiêu đề bảo mật
- [ ] Các phụ thuộc đã được quét lỗ hổng

---

## Các rào cản triển khai

**Không thể triển khai sản phẩm thực tế cho đến khi:**

1. ✗ Các vấn đề bảo mật nghiêm trọng được sửa (2)
2. ✗ Các vấn đề ưu tiên cao được giải quyết (3)
3. ⚠ Độ bao phủ kiểm thử trên 80% (hiện tại 67%)
4. ✓ Biên dịch TypeScript vượt qua
5. ✓ Linting vượt qua (với các cảnh báo)

**Thời gian dự kiến để sẵn sàng cho sản xuất:** 6-8 giờ

---

## Công cụ đã sử dụng

- **Parallel Scouts**: 5 agent phân tích các khía cạnh khác nhau
- **Repomix**: Tạo tóm tắt mã nguồn để phân tích
- **Security Scanners**: Plugin bảo mật ESLint, npm audit
- **Type Checker**: Chế độ nghiêm ngặt của trình biên dịch TypeScript
- **Test Coverage**: Báo cáo độ bao phủ Jest/Vitest

---

## So sánh với các tiêu chuẩn mã nguồn

**Tham khảo:** `docs/code-standards.md`

| Tiêu chuẩn | Bắt buộc | Hiện tại | Trạng thái |
|----------|----------|---------|--------|
| Độ bao phủ kiểm thử | 80%+ | 67% | ✗ |
| TypeScript Nghiêm ngặt | Có | Một phần | ✗ |
| Không dùng kiểu `any` | Có | tìm thấy 23 | ✗ |
| Xử lý lỗi | Tất cả async | Thiếu 8 | ✗ |
| Quét bảo mật | Vượt qua | 5 vấn đề | ✗ |
| Tài liệu | JSDoc | Thiếu | ⚠ |
| Linting | Vượt qua | 3 cảnh báo | ⚠ |

**Đánh giá:** Không đáp ứng các tiêu chuẩn mã nguồn

---

## Lần Review tiếp theo

Sau khi áp dụng các bản sửa lỗi:
```bash
# Chạy lại review để xác nhận các bản sửa lỗi
/review [mô-đun xác thực người dùng]

# Kết quả mong đợi:
# - 0 vấn đề nghiêm trọng
# - 0-1 vấn đề ưu tiên cao
# - <5 vấn đề ưu tiên trung bình
# - Độ bao phủ kiểm thử 80%+
# - Sẵn sàng cho sản xuất ✓
```

---

**Review hoàn tất**: 2024-10-20 15:45:00 UTC
**Reviewer**: ClaudeKit Code Reviewer Agent v1.0
**Tổng thời gian Review**: 90 giây
**Số tệp được phân tích**: 9 tệp (1.247 dòng)
**Số vấn đề được tìm thấy**: 12 (2 nghiêm trọng, 3 cao, 5 trung bình, 2 thấp)
**Đề xuất**: **Không được merge** - Sửa các vấn đề nghiêm trọng trước

## Thực hành tốt nhất

### Quy trình Review

```bash
# 1. Triển khai tính năng
/cook [triển khai xác thực người dùng]

# 2. Chạy kiểm thử
/test

# 3. Code review
/review [mô-đun xác thực người dùng]

# 4. Sửa các vấn đề
/fix --quick [sửa các vấn đề bảo mật nghiêm trọng được tìm thấy trong review]

# 5. Kiểm thử lại
/test

# 6. Review lại
/review [mô-đun xác thực người dùng]

# 7. Nếu được phê duyệt, tạo PR
/pr [thêm xác thực người dùng]
```

### Phạm vi Review

**Review tập trung:**
```bash
/review [src/auth/] # Thư mục cụ thể
/review [xác thực người dùng] # Mô tả tính năng
/review [PR-123] # Pull request
```

**Review toàn bộ mã nguồn:**
```bash
/review [kiểm tra bảo mật toàn bộ mã nguồn]
/review [phân tích hiệu suất]
/review [cải thiện an toàn kiểu]
```

## Các chỉ số thành công

Một code review thành công:

- ✅ Xác định tất cả các vấn đề bảo mật nghiêm trọng
- ✅ Xác nhận việc tuân thủ an toàn kiểu
- ✅ Đảm bảo độ bao phủ kiểm thử đạt mục tiêu
- ✅ Cung cấp các đề xuất có thể thực hiện được
- ✅ Phân loại các vấn đề theo mức độ ưu tiên
- ✅ Ngăn chặn các sự cố trong sản xuất
- ✅ Cải thiện chất lượng mã nguồn theo thời gian

## Tích hợp với quá trình phát triển

### Danh sách kiểm tra trước khi Merge

```markdown
## Danh sách kiểm tra Code Review

- [ ] Chạy `/review` và giải quyết tất cả các vấn đề nghiêm trọng
- [ ] Chạy `/test` và đảm bảo độ bao phủ >80%
- [ ] Sửa tất cả các lỗi chế độ nghiêm ngặt của TypeScript
- [ ] Giải quyết các lỗ hổng bảo mật
- [ ] Cập nhật tài liệu
- [ ] Xác nhận hiệu suất ở mức chấp nhận được
- [ ] Đảm bảo khả năng tương thích ngược
```

## Các bước tiếp theo

- [Planner](/vi/docs/engineer/agents/planner) - Lập kế hoạch sửa chữa các vấn đề
- [Fix Skill](/docs/engineer/skills/fix) - Áp dụng các bản sửa lỗi
- [Kiểm thử](/vi/docs/engineer/agents/tester) - Xác nhận các bản sửa lỗi

---

**Thông điệp chính**: Agent code reviewer cung cấp đánh giá chất lượng toàn diện với trọng tâm là bảo mật, các phát hiện được phân loại và các mục hành động rõ ràng để đảm bảo mã nguồn sẵn sàng cho sản xuất.
