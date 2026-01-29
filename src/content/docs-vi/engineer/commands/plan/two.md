---
title: /plan:two
description: Tài liệu hướng dẫn lệnh plan:two
section: engineer
kit: engineer
category: commands/plan
order: 11
published: true
lang: vi
---

# /plan:two

Nghiên cứu một tác vụ và tạo ra hai cách tiếp cận triển khai riêng biệt với phân tích ưu/nhược điểm chi tiết và một khuyến nghị rõ ràng. Hoàn hảo khi bạn muốn đánh giá nhiều chiến lược trước khi cam kết thực hiện một cách cụ thể.

## Cú pháp

```bash
/plan:two [mô tả tác vụ]
```

## Cách hoạt động

Lệnh `/plan:two` tuân theo một quy trình làm việc lập kế hoạch so sánh:

### 1. Phân tích yêu cầu

- Phân tích mô tả tác vụ
- Xác định các mục tiêu chính
- Xác định các tiêu chí thành công
- Nhận diện các ràng buộc

### 2. Giai đoạn nghiên cứu

Sử dụng agent **researcher** để:
- Nghiên cứu các thực hành tốt nhất (best practices)
- Xem xét các triển khai tương tự
- Phân tích các mẫu kiến trúc khác nhau
- Nghiên cứu các công nghệ liên quan

### 3. Động não các cách tiếp cận

Sử dụng agent **planner** để:
- Tạo ra nhiều cách tiếp cận khả thi
- Chọn ra hai chiến lược hứa hẹn nhất
- Đảm bảo các cách tiếp cận thực sự khác biệt
- Xem xét các đánh đổi cho mỗi cách

### 4. Lập kế hoạch chi tiết

Đối với mỗi cách tiếp cận, tạo ra:
- Tổng quan về kiến trúc/thiết kế
- Các bước triển khai
- Các lựa chọn ngăn xếp công nghệ (tech stack)
- Cấu trúc tệp
- Độ phức tạp dự kiến
- Ước tính tiến độ thời gian

### 5. Phân tích so sánh

Cung cấp sự so sánh toàn diện:
- Ưu và nhược điểm cho mỗi cách
- Ảnh hưởng đến hiệu suất
- Các cân nhắc về khả năng bảo trì
- Tiềm năng mở rộng
- Thời gian phát triển
- Đường cong học tập (learning curve)
- Ảnh hưởng về chi phí

### 6. Khuyến nghị

Dựa trên phân tích, cung cấp:
- Cách tiếp cận được khuyến nghị với lý do rõ ràng
- Khi nào nên chọn cách tiếp cận thay thế
- Các khả năng kết hợp (hybrid)

## Ví dụ

### Hệ thống xác thực (Authentication System)

```bash
/plan:two [triển khai hệ thống xác thực người dùng]
```

**Điều gì xảy ra:**
```
Giai đoạn 1: Phân tích yêu cầu (20 giây)
---
Agent: planner

Tác vụ: Triển khai xác thực người dùng
Các yêu cầu chính:
✓ Đăng ký và đăng nhập người dùng
✓ Bảo mật mật khẩu
✓ Quản lý phiên (session)
✓ Có khả năng cần xác thực dựa trên token
✓ Xem xét xác thực qua mạng xã hội
✓ Các thực hành bảo mật tốt nhất

Các ràng buộc đã xác định:
- Phải bảo mật (ưu tiên hàng đầu)
- Cần có khả năng mở rộng
- Nên hỗ trợ nhiều client (web, mobile)

Giai đoạn 2: Nghiên cứu (45 giây)
---
Agent: researcher

Các mẫu xác thực đã được phân tích:
✓ Xác thực dựa trên session (Session-based)
✓ Xác thực dựa trên token (JWT)
✓ OAuth2 / OpenID Connect
✓ Xác thực không dùng mật khẩu (Passwordless)
✓ Xác thực đa yếu tố (Multi-factor)

Các tiêu chuẩn ngành đã được xem xét:
✓ Hướng dẫn xác thực của OWASP
✓ Đặc tả OAuth 2.0
✓ Các thực hành JWT tốt nhất
✓ Băm mật khẩu (bcrypt, argon2)

Giai đoạn 3: Tạo các cách tiếp cận (30 giây)
---
Agent: planner

Đã tạo ra 4 cách tiếp cận khả thi:
1. Session truyền thống với cookie
2. Token JWT với xoay vòng refresh token
3. OAuth2 chỉ với các nhà cung cấp bên thứ ba
4. Kết hợp: JWT + OAuth2

Đã chọn để lập kế hoạch chi tiết:
→ Cách tiếp cận 1: Dựa trên Token JWT
→ Cách tiếp cận 2: Dựa trên Session với Redis

(Áp dụng tốt nhất cho các trường hợp sử dụng điển hình)

Giai đoạn 4: Các kế hoạch chi tiết đã được tạo (60 giây)
---

CÁCH TIẾP CẬN 1: Xác thực dựa trên Token JWT
==========================================

## Tổng quan kiến trúc

Client → API → Xác minh JWT → Trình xử lý Route
         ↓
    Cơ sở dữ liệu (users, refresh_tokens)

Access token: Thời gian sống ngắn (15 phút)
Refresh token: Thời gian sống dài (7 ngày)
Lưu trữ: Refresh token trong cơ sở dữ liệu
Stateless: Không cần lưu trữ session trên server

## Ngăn xếp công nghệ

- Thư viện JWT: jsonwebtoken
- Băm mật khẩu: bcrypt hoặc argon2
- Lưu trữ token: PostgreSQL (chỉ refresh token)
- Middleware: Xác minh JWT tùy chỉnh
- Bảo mật: httpOnly cookie cho token

## Cấu trúc tệp

src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── jwt.service.ts
│   ├── password.service.ts
│   └── auth.middleware.ts
├── models/
│   ├── user.model.ts
│   └── refresh-token.model.ts
└── routes/
    └── auth.routes.ts

Các bảng cơ sở dữ liệu:
- users (id, email, password_hash, created_at)
- refresh_tokens (id, user_id, token, expires_at)

## Các bước triển khai

1. Thiết lập cấu hình JWT
   - Tạo các khóa bí mật (access + refresh)
   - Cấu hình thời gian hết hạn
   - Thiết lập ký/xác minh token

2. Tạo model User
   - Xác thực email
   - Băm mật khẩu khi lưu
   - Phương thức so sánh mật khẩu

3. Triển khai Đăng ký
   - POST /auth/register
   - Xác thực đầu vào
   - Băm mật khẩu
   - Tạo người dùng
   - Trả về token

4. Triển khai Đăng nhập
   - POST /auth/login
   - Xác thực thông tin đăng nhập
   - Tạo access token
   - Tạo refresh token
   - Lưu refresh token vào DB
   - Trả về token trong httpOnly cookie

5. Triển khai Làm mới Token (Refresh)
   - POST /auth/refresh
   - Xác minh refresh token
   - Kiểm tra tính hợp lệ trong DB
   - Tạo access token mới
   - Xoay vòng refresh token
   - Trả về token mới

6. Tạo Middleware xác thực
   - Trích xuất access token từ cookie
   - Xác minh chữ ký
   - Giải mã payload
   - Đính kèm người dùng vào request
   - Xử lý token hết hạn

7. Triển khai Đăng xuất
   - POST /auth/logout
   - Vô hiệu hóa refresh token trong DB
   - Xóa cookie

## Ưu điểm

✅ Không trạng thái (Stateless) - Không cần lưu trữ session trên server
✅ Có khả năng mở rộng - Hoạt động trên nhiều server
✅ Thân thiện với di động - Token dễ lưu trữ
✅ Thân thiện với CORS - Không gặp vấn đề session cookie
✅ Sẵn sàng cho Microservices - Token có thể được xác minh độc lập
✅ Nhanh - Không cần truy vấn DB cho mỗi request (chỉ cần xác minh token)
✅ Hiện đại - Tiêu chuẩn ngành cho các API

## Nhược điểm

❌ Kích thước token - Token JWT lớn hơn ID session
❌ Không thể thu hồi ngay - Access token có hiệu lực cho đến khi hết hạn
❌ Lo ngại bảo mật - Nếu bị đánh cắp, nó có hiệu lực cho đến khi hết hạn
❌ Quản lý refresh token - Cần DB cho refresh token
❌ Phức tạp hơn - Xoay vòng token, xử lý hết hạn
❌ Trách nhiệm của Client - Client phải xử lý việc làm mới token

## Độ phức tạp dự kiến
Trung bình - Mẫu chuẩn nhưng yêu cầu triển khai cẩn thận

## Tiến độ thời gian
- Triển khai: 2 ngày
- Kiểm tra: 1 ngày
- Kiểm toán bảo mật: 0.5 ngày
- Tổng cộng: 3.5 ngày

---

CÁCH TIẾP CẬN 2: Dựa trên Session với Redis
====================================

## Tổng quan kiến trúc

Client → API → Kiểm tra Session → Trình xử lý Route
         ↓           ↓
    Redis         Cơ sở dữ liệu
  (sessions)      (users)

Session cookie: httpOnly, secure
Lưu trữ session: Redis (truy vấn nhanh)
Dữ liệu session: User ID, role, metadata
Hết hạn: 7 ngày (sliding window)

## Ngăn xếp công nghệ

- Quản lý session: express-session
- Lưu trữ session: connect-redis
- Redis client: ioredis
- Băm mật khẩu: bcrypt
- Cookie parser: cookie-parser

## Cấu trúc tệp

src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── password.service.ts
│   └── session.middleware.ts
├── config/
│   ├── redis.config.ts
│   └── session.config.ts
├── models/
│   └── user.model.ts
└── routes/
    └── auth.routes.ts

Bên ngoài:
- Server Redis (lưu trữ session)

Các bảng cơ sở dữ liệu:
- users (id, email, password_hash, created_at)

## Các bước triển khai

1. Thiết lập Redis
   - Cài đặt server Redis
   - Cấu hình kết nối
   - Thiết lập lưu trữ session

2. Cấu hình Express Session
   - Bí mật session (secret)
   - Các tùy chọn cookie (httpOnly, secure, sameSite)
   - Tích hợp lưu trữ Redis
   - Thời gian tồn tại session

3. Tạo model User
   - Xác thực email
   - Băm mật khẩu
   - So sánh mật khẩu

4. Triển khai Đăng ký
   - POST /auth/register
   - Xác thực đầu vào
   - Băm mật khẩu
   - Tạo người dùng
   - Tạo session
   - Trả về thành công

5. Triển khai Đăng nhập
   - POST /auth/login
   - Xác thực thông tin đăng nhập
   - Tạo session trong Redis
   - Thiết lập session cookie
   - Trả về thành công

6. Tạo Middleware xác thực
   - Kiểm tra session tồn tại
   - Xác minh session chưa hết hạn
   - Tải dữ liệu người dùng từ session
   - Đính kèm người dùng vào request
   - Cập nhật thời gian hết hạn session (sliding window)

7. Triển khai Đăng xuất
   - POST /auth/logout
   - Hủy session trong Redis
   - Xóa session cookie
   - Trả về thành công

## Ưu điểm

✅ Đơn giản - Mẫu thiết kế quen thuộc
✅ Thu hồi ngay lập tức - Đăng xuất hủy session tức thì
✅ Kiểm soát từ phía Server - Toàn quyền kiểm soát các session
✅ Cookie nhỏ hơn - Chỉ chứa ID session
✅ Ít phức tạp hơn cho Client - Client chỉ cần gửi cookie
✅ Hệ sinh thái trưởng thành - Nhiều thư viện đã được kiểm chứng
✅ Hết hạn trượt (Sliding expiry) - Session gia hạn theo hoạt động

## Nhược điểm

❌ Có trạng thái (Stateful) - Yêu cầu lưu trữ session (Redis)
❌ Phụ thuộc vào Redis - Thêm một dịch vụ cần quản lý
❌ Phức tạp khi mở rộng - Cần Redis dùng chung cho nhiều server
❌ Chi phí bộ nhớ - Dữ liệu session được lưu trong Redis
❌ Phức tạp với CORS - Dựa trên cookie, yêu cầu thiết lập CORS đúng cách
❌ Ứng dụng di động - Cookie kém tự nhiên hơn trên di động
❌ Microservices - Mỗi dịch vụ cần truy cập vào Redis

## Độ phức tạp dự kiến
Thấp-Trung bình - Triển khai đơn giản hơn, nhưng yêu cầu Redis

## Tiến độ thời gian
- Triển khai: 1.5 ngày
- Thiết lập Redis: 0.5 ngày
- Kiểm tra: 1 ngày
- Tổng cộng: 3 ngày

---

Giai đoạn 5: Phân tích so sánh
---

MA TRẬN SO SÁNH
=================

| Khía cạnh            | JWT (Cách 1)         | Session (Cách 2)      |
|----------------------|----------------------|-----------------------|
| Khả năng mở rộng     | ⭐⭐⭐⭐⭐ Tuyệt vời   | ⭐⭐⭐⭐☆ Tốt          |
| Bảo mật              | ⭐⭐⭐⭐☆ Tốt          | ⭐⭐⭐⭐⭐ Tuyệt vời   |
| Sự đơn giản          | ⭐⭐⭐☆☆ Trung bình   | ⭐⭐⭐⭐☆ Đơn giản     |
| Hỗ trợ Di động       | ⭐⭐⭐⭐⭐ Tuyệt vời   | ⭐⭐⭐☆☆ Trung bình   |
| Kiểm soát Đăng xuất  | ⭐⭐⭐☆☆ Hạn chế      | ⭐⭐⭐⭐⭐ Tức thì      |
| Hiệu suất            | ⭐⭐⭐⭐⭐ Nhanh       | ⭐⭐⭐⭐☆ Tốt          |
| Hợp với Microservices| ⭐⭐⭐⭐⭐ Hoàn hảo    | ⭐⭐⭐☆☆ Thách thức   |
| Hạ tầng              | ⭐⭐⭐⭐⭐ Tối thiểu   | ⭐⭐⭐☆☆ Cần Redis    |
| Phức tạp CORS        | ⭐⭐⭐⭐☆ Đơn giản     | ⭐⭐⭐☆☆ Phức tạp     |
| Thu hồi Token        | ⭐⭐⭐☆☆ Phức tạp     | ⭐⭐⭐⭐⭐ Đơn giản     |

## Cân nhắc về Hiệu suất

JWT:
- Kiểm tra xác thực: ~0.5ms (chỉ xác minh token)
- Không cần truy vấn DB/Redis cho mỗi request
- Dễ dàng mở rộng theo chiều ngang

Session:
- Kiểm tra xác thực: ~2-5ms (truy vấn Redis)
- Gọi mạng tới Redis cho mỗi request
- Redis trở thành nút thắt cổ chai khi mở rộng quy mô lớn

## Cân nhắc về Bảo mật

JWT:
- Rủi ro: Nếu access token bị đánh cắp, nó có hiệu lực cho đến khi hết hạn
- Giảm thiểu: Hết hạn ngắn (15 phút), xoay vòng refresh token
- Tốt nhất cho: Các API công khai, ứng dụng di động

Session:
- Rủi ro: Các cuộc tấn công session fixation
- Giảm thiểu: Tạo lại ID session khi đăng nhập
- Tốt nhất cho: Các ứng dụng web, bảng điều khiển quản trị

## Khả năng mở rộng

JWT:
- Mở rộng theo chiều ngang: ✅ Hoàn hảo
- Cân bằng tải: ✅ Không cần sticky session
- Microservices: ✅ Mỗi dịch vụ có thể tự xác minh

Session:
- Mở rộng theo chiều ngang: ⚠️ Cần Redis dùng chung
- Cân bằng tải: ⚠️ Redis phải có thể truy cập được
- Microservices: ⚠️ Lưu trữ session tập trung

Giai đoạn 6: Khuyến nghị
---

KHUYẾN NGHỊ: Cách tiếp cận 1 (Dựa trên Token JWT)
=========================================

## Tại sao chọn JWT?

Đối với hầu hết các ứng dụng hiện đại, JWT được khuyến nghị vì:

1. **Khả năng mở rộng**: Không cần lưu trữ session dùng chung
2. **Ưu tiên di động**: Hoạt động tự nhiên với các ứng dụng di động
3. **Microservices**: Dễ dàng xác minh token độc lập
4. **Thân thiện với API**: Mẫu chuẩn cho các API REST
5. **Ngăn xếp hiện đại**: Phù hợp với xu hướng ngành

## Khi nào nên chọn Session thay thế

Sử dụng Cách tiếp cận 2 (Session) nếu:

1. **Ứng dụng chỉ dành cho web**: Không cần ứng dụng di động
2. **Yêu cầu bảo mật cao**: Cần đăng xuất ngay lập tức
3. **Quy mô nhỏ**: Server đơn lẻ hoặc cụm nhỏ
4. **Hạ tầng đơn giản**: Không muốn sự phức tạp của token
5. **Bảng điều khiển quản trị**: Các công cụ nội bộ với sự kiểm soát chặt chẽ

## Cách tiếp cận kết hợp (Hybrid)

Để linh hoạt tối đa:

1. Sử dụng JWT cho ứng dụng di động và API công khai
2. Sử dụng session cho bảng điều khiển quản trị web
3. Tách biệt các luồng xác thực cho các client khác nhau

## Ưu tiên triển khai

Giai đoạn 1: Xác thực JWT cơ bản (Tuần 1)
Giai đoạn 2: Xoay vòng refresh token (Tuần 1)
Giai đoạn 3: Thắt chặt bảo mật (Tuần 2)
Giai đoạn 4: Xác thực đa yếu tố (Tương lai)
Giai đoạn 5: OAuth mạng xã hội (Tương lai)

✓ Lập kế hoạch hoàn tất (2 phút 35 giây)

Các kế hoạch đã lưu:
- plans/auth-approach-1-jwt.md
- plans/auth-approach-2-sessions.md
- plans/auth-comparison.md
```

### Quản lý trạng thái (State Management)

```bash
/plan:two [triển khai quản lý trạng thái toàn cục cho ứng dụng React]
```

**Điều gì xảy ra:**
```
Giai đoạn 1-2: Phân tích & Nghiên cứu (60 giây)
---
Tác vụ: Quản lý trạng thái toàn cục cho ứng dụng React

Kết quả nghiên cứu:
✓ Redux - Phổ biến nhất, trưởng thành
✓ Zustand - Hiện đại, đơn giản
✓ Context API - Có sẵn trong React
✓ Jotai - Trạng thái nguyên tử
✓ MobX - Dựa trên observable

Giai đoạn 3-4: Hai cách tiếp cận được chọn
---

CÁCH TIẾP CẬN 1: Zustand (Hiện đại & Đơn giản)
======================================

## Tổng quan
Quản lý trạng thái nhẹ nhàng với API dựa trên hook.
Không có mã rườm rà (boilerplate), khái niệm tối thiểu, dễ học.

## Tại sao chọn Zustand?
- Kích thước bundle: 1.2KB (so với Redux 12KB)
- Không cần provider/context
- Thân thiện với TypeScript
- Hỗ trợ DevTools
- Hỗ trợ Middleware

## Triển khai

```typescript
// stores/user.store.ts
import create from 'zustand';

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

// Sử dụng trong component
function Profile() {
  const { user, logout } = useUserStore();
  return <div>{user?.name}</div>;
}
```

## Cấu trúc tệp
```
src/
├── stores/
│   ├── user.store.ts
│   ├── cart.store.ts
│   └── ui.store.ts
└── hooks/
    └── useStore.ts  (các helper tùy chọn)
```

## Ưu điểm
✅ Mã rườm rà tối thiểu
✅ Kích thước bundle nhỏ
✅ Dễ học (<1 giờ)
✅ Hỗ trợ TypeScript tuyệt vời
✅ Không bị "provider hell"
✅ Có thể chia nhỏ store theo domain

## Nhược điểm
❌ Hệ sinh thái ít hơn Redux
❌ Không có debugging kiểu time-travel
❌ Cộng đồng nhỏ hơn
❌ Ít tính quy ước hơn (có thể là ưu hoặc nhược điểm)

Tiến độ: 0.5 ngày thiết lập + học tập

---

CÁCH TIẾP CẬN 2: Redux Toolkit (Tiêu chuẩn Ngành)
=============================================

## Tổng quan
Redux với API hiện đại, ít mã rườm rà hơn.
Đã được kiểm chứng qua thực tế, hệ sinh thái khổng lồ, tính quy ước cao.

## Tại sao chọn Redux Toolkit?
- Tiêu chuẩn ngành (hầu hết các công việc đều sử dụng)
- Hệ sinh thái khổng lồ
- Redux DevTools (debugging time-travel)
- Middleware (thunks, sagas, v.v.)
- Immer cho các cập nhật không biến đổi (immutable)

## Triển khai

```typescript
// store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: User | null;
}

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null } as UserState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;

// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Cách dùng
import { useSelector, useDispatch } from 'react-redux';

function Profile() {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  return <div>{user?.name}</div>;
}
```

## Cấu trúc tệp
```
src/
├── store/
│   ├── index.ts
│   ├── userSlice.ts
│   ├── cartSlice.ts
│   └── uiSlice.ts
└── App.tsx (bao bọc với Provider)
```

## Ưu điểm
✅ Tiêu chuẩn ngành
✅ Hệ sinh thái khổng lồ
✅ DevTools tuyệt vời
✅ Debugging kiểu time-travel
✅ Tính quy ước cao (mẫu thiết kế rõ ràng)
✅ Tuyệt vời cho các đội ngũ lớn

## Nhược điểm
❌ Bundle lớn hơn (~12KB)
❌ Nhiều mã rườm rà hơn
❌ Đường cong học tập dốc hơn
❌ Yêu cầu Provider
❌ Quá mức cần thiết cho ứng dụng nhỏ

Tiến độ: 1-2 ngày thiết lập + học tập

---

SO SÁNH
==========

| Khía cạnh          | Zustand           | Redux Toolkit     |
|-------------------|-------------------|-------------------|
| Học tập           | 1 giờ             | 1-2 ngày          |
| Kích thước bundle | 1.2KB             | 12KB              |
| Mã rườm rà        | Tối thiểu         | Trung bình        |
| DevTools          | Cơ bản            | Nâng cao          |
| Hệ sinh thái      | Nhỏ               | Khổng lồ          |
| Thị trường việc làm| Đang phát triển   | Tiêu chuẩn        |
| Quy mô đội ngũ    | Nhỏ/Trung bình    | Mọi quy mô        |
| Độ phức tạp app   | Đơn giản/Trung bình| Mọi độ phức tạp   |

KHUYẾN NGHỊ: Zustand
=======================

Đối với hầu hết các ứng dụng React mới, hãy chọn Zustand vì:

1. Triển khai nhanh hơn (tiết kiệm nhiều ngày phát triển)
2. Dễ bảo trì hơn (ít mã hơn)
3. Hiệu suất tốt hơn (bundle nhỏ hơn)
4. Đủ dùng cho 80% các ứng dụng

Chọn Redux Toolkit nếu:

1. Đội ngũ đã biết Redux
2. Cần hệ sinh thái Redux (sagas, v.v.)
3. Ứng dụng rất lớn (100+ component)
4. Cần debugging nâng cao
5. Muốn theo tiêu chuẩn ngành để làm đẹp CV

✓ Các kế hoạch đã hoàn tất
```

## Khi nào nên sử dụng

### ✅ Sử dụng /plan:two cho:

**Các quyết định kiến trúc**
```bash
/plan:two [chọn cơ sở dữ liệu: SQL vs NoSQL]
```

**Lựa chọn công nghệ**
```bash
/plan:two [triển khai caching: Redis vs Memcached]
```

**Mẫu thiết kế (Design Patterns)**
```bash
/plan:two [thiết kế API: REST vs GraphQL]
```

**Chiến lược triển khai**
```bash
/plan:two [tải tệp: trực tiếp S3 vs presigned URL]
```

### ❌ Không sử dụng khi:

**Chỉ có một cách rõ ràng**
- Nếu một cách tiếp cận rõ ràng là vượt trội, chỉ cần lập kế hoạch cho nó.

**Đã quyết định xong**
- Sử dụng `/plan` nếu bạn đã biết mình muốn sử dụng cách tiếp cận nào.

**Cần nhiều hơn hai lựa chọn**
- /plan:two cụ thể so sánh hai cách tiếp cận.

## Các khía cạnh so sánh

Mỗi sự so sánh bao gồm:

### 1. So sánh Kỹ thuật

- Ảnh hưởng đến hiệu suất
- Cân nhắc khả năng mở rộng
- Các khía cạnh bảo mật
- Khả năng bảo trì

### 2. So sánh Phát triển

- Độ phức tạp khi triển khai
- Thời gian phát triển
- Độ khó khi kiểm tra
- Đường cong học tập

### 3. So sánh Vận hành

- Yêu cầu hạ tầng
- Chi phí vận hành
- Nhu cầu giám sát
- Độ phức tạp khi triển khai (deployment)

### 4. So sánh Đội ngũ

- Yêu cầu về kỹ năng
- Thời gian làm quen (onboarding)
- Nhu cầu tài liệu
- Sự sẵn có của hỗ trợ

## Các tệp đầu ra

Sau khi `/plan:two` hoàn tất:

### Kế hoạch Cách tiếp cận 1

```
plans/[task]-approach-1-[name].md
```

Kế hoạch triển khai đầy đủ cho cách tiếp cận đầu tiên

### Kế hoạch Cách tiếp cận 2

```
plans/[task]-approach-2-[name].md
```

Kế hoạch triển khai đầy đủ cho cách tiếp cận thứ hai

### Tài liệu So sánh

```
plans/[task]-comparison.md
```

So sánh song song với khuyến nghị

## Thực hành tốt nhất

### Cung cấp ngữ cảnh rõ ràng

✅ **Tốt:**
```bash
/plan:two [triển khai các tính năng thời gian thực cho ứng dụng chat với 10k người dùng đồng thời]
```

❌ **Mơ hồ:**
```bash
/plan:two [thêm thời gian thực]
```

### Chỉ định các ràng buộc

```bash
/plan:two [triển khai tìm kiếm: tìm kiếm toàn văn vs tìm kiếm vector, ngân sách tối đa $100/tháng, cần phản hồi dưới 100ms]
```

## Sau khi nhận được các kế hoạch

Quy trình làm việc tiêu chuẩn:

```bash
# 1. Lấy hai cách tiếp cận
/plan:two [tác vụ]

# 2. Xem lại cả hai kế hoạch
cat plans/[tác vụ]-approach-1-*.md
cat plans/[tác vụ]-approach-2-*.md

# 3. Xem lại so sánh
cat plans/[tác vụ]-comparison.md

# 4. Đưa ra quyết định
# Cân nhắc: kỹ năng đội ngũ, tiến độ, ngân sách, yêu cầu

# 5. Triển khai cách tiếp cận đã chọn (skill cook kích hoạt từ ngữ cảnh plan)
/clear
Mô tả task tự nhiên → skill cook triển khai từ cách tiếp cận 1
# HOẶC
Mô tả task tự nhiên → skill cook triển khai từ cách tiếp cận 2

# 6. Tùy chọn: Kết hợp (Hybrid)
Triển khai từ cách 1 trước → sau đó tích hợp thủ công từ cách 2
```

## Các lệnh liên quan

- [/plan](/vi/docs/engineer/commands/core/plan) - Lập kế hoạch cho một cách tiếp cận duy nhất
- [/code](/vi/docs/engineer/commands/core/code) - Triển khai kế hoạch đã chọn
- [/plan:cro](/vi/docs/engineer/commands/plan/cro) - Lập kế hoạch cụ thể cho CRO

---

**Điểm mấu chốt**: `/plan:two` tạo ra hai cách tiếp cận triển khai riêng biệt với phân tích ưu/nhược điểm chi tiết và khuyến nghị rõ ràng, giúp bạn đưa ra các quyết định kỹ thuật và kiến trúc sáng suốt trước khi bắt tay vào triển khai.
