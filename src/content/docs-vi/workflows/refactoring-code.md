---
title: Tái Cấu Trúc Mã Nguồn
description: "Tái cấu trúc mã nguồn an toàn với ClaudeKit - từ xác định nợ kỹ thuật đến triển khai cải tiến với kiểm thử và xác thực toàn diện."
lang: vi
section: workflows
category: workflows
order: 5
published: true
---

# Tái Cấu Trúc Mã Nguồn

Tìm hiểu cách tái cấu trúc mã nguồn (Refactoring) một cách an toàn với ClaudeKit - từ việc xác định nợ kỹ thuật (technical debt) đến triển khai các cải tiến với việc kiểm thử và xác thực toàn diện.

## Tổng Quan

**Mục tiêu**: Cải thiện chất lượng và khả năng bảo trì của mã nguồn mà không làm thay đổi chức năng
**Thời gian**: 15-45 phút (so với 3-8 giờ làm thủ công)
**Agents sử dụng**: code-reviewer, tester, docs-manager
**Lệnh**: `/plan`, `/code`, `/test`, `/docs:update`

## Điều Kiện Tiên Quyết

- Codebase hiện có các khu vực cần cải thiện
- Đã có bộ kiểm thử (hoặc sẵn sàng thêm mới)
- Hiểu rõ chức năng hiện tại
- Sử dụng hệ thống quản lý phiên bản (version control) để có thể hoàn tác an toàn

## Các Kịch Bản Tái Cấu Trúc

### Khi Nào Cần Tái Cấu Trúc

| Kịch bản | Độ ưu tiên | Mức độ rủi ro |
|----------|----------|------------|
| Code trùng lặp (Vi phạm DRY) | Cao | Thấp |
| Các hàm quá lớn (100+ dòng) | Trung bình | Trung bình |
| Các điều kiện phức tạp (if/else lồng nhau) | Trung bình | Trung bình |
| Quy ước đặt tên kém | Thấp | Thấp |
| Ghép nối chặt chẽ (Tight coupling) | Cao | Cao |
| Thiếu xử lý lỗi | Cao | Trung bình |
| Nút thắt cổ chai về hiệu suất | Trung bình | Trung bình |
| Lỗ hổng bảo mật | Nghiêm trọng | Thấp |

### Các Loại Tái Cấu Trúc

1. **Tổ chức mã nguồn** - Cấu trúc lại các tệp và module
2. **Chất lượng mã nguồn** - Cải thiện khả năng đọc và bảo trì
3. **Hiệu suất** - Tối ưu hóa code chậm
4. **Bảo mật** - Vá các lỗ hổng
5. **Kiến trúc** - Cải thiện các mẫu thiết kế (design patterns)
6. **Dependencies** - Cập nhật hoặc gỡ bỏ các thư viện

## Quy Trình Từng Bước

### Bước 1: Xác Định Nhu Cầu Tái Cấu Trúc

Sử dụng code review để xác định các vấn đề:

```bash
# Code review tự động
/review
```

**Kết quả review**:
```
Báo Cáo Code Review

⚠ Tìm thấy các vấn đề:

1. Code Trùng Lặp (15 trường hợp)
   - src/users/create.js và src/users/update.js
   - 67% code trùng lặp trong logic kiểm tra (validation)
   - Khuyến nghị: Trích xuất thành shared validator

2. Các Hàm Quá Lớn (8 trường hợp)
   - src/orders/process.js:processOrder() - 234 dòng
   - Khuyến nghị: Chia nhỏ thành các hàm tập trung hơn

3. Các Điều Kiện Phức Tạp (12 trường hợp)
   - src/auth/authorize.js - Lồng nhau 5 cấp độ
   - Khuyến nghị: Đơn giản hóa với early returns

4. Magic Numbers (23 trường hợp)
   - Các giá trị hardcoded không có hằng số
   - Khuyến nghị: Trích xuất thành cấu hình (configuration)

5. Thiếu Xử Lý Lỗi (18 trường hợp)
   - Các promise rejections chưa được xử lý
   - Khuyến nghị: Thêm các khối try/catch

Điểm Nợ Kỹ Thuật: 6.8/10 (Cao)
Chỉ Số Khả Năng Bảo Trì: 42/100 (Cần cải thiện)
```

### Bước 2: Ưu Tiên Các Nhiệm Vụ Tái Cấu Trúc

Tạo một kế hoạch tái cấu trúc:

```bash
/cook [refactor user validation logic to eliminate duplication]
```

**Kế hoạch được tạo**:
```markdown
# Kế Hoạch Tái Cấu Trúc: User Validation

## Trạng Thái Hiện Tại
- Logic kiểm tra bị trùng lặp trong create.js và update.js
- 156 dòng code trùng lặp
- Các thông báo lỗi không nhất quán
- Khó bảo trì

## Giải Pháp Đề Xuất

### 1. Trích Xuất Shared Validator
- Tạo src/validators/user.validator.js
- Trích xuất các quy tắc kiểm tra chung
- Triển khai các hàm kiểm tra có thể tái sử dụng

### 2. Hợp Nhất Xử Lý Lỗi
- Tiêu chuẩn hóa các thông báo lỗi
- Tạo các hằng số mã lỗi (error code constants)
- Cải thiện định dạng phản hồi lỗi

### 3. Cập Nhật Các Controllers
- Import shared validator
- Gỡ bỏ code trùng lặp
- Thêm các tests cho việc kiểm tra (validation)

## Chiến Lược Kiểm Thử
- Unit tests cho validator
- Integration tests cho các endpoints
- Đảm bảo không thay đổi hành vi của ứng dụng

## Đánh Giá Rủi Ro
- Mức độ rủi ro: Thấp
- Các thay đổi gây phá vỡ (Breaking Changes): Không có
- Kế hoạch hoàn tác: Git revert

## Tiêu Chí Thành Công
- 0% code trùng lặp
- Tất cả các tests đều vượt qua
- Duy trì cùng một chức năng như cũ
```

### Bước 3: Thêm Tests (Nếu Còn Thiếu)

Trước khi tái cấu trúc, hãy đảm bảo độ bao phủ kiểm thử tốt:

```bash
# Kiểm tra độ bao phủ hiện tại
npm run test:coverage

# Thêm tests nếu độ bao phủ thấp
/cook [add comprehensive tests for user validation before refactoring]
```

**Tại sao phải test trước?**
- Đảm bảo việc tái cấu trúc không làm hỏng chức năng hiện có
- Xác nhận rằng các hành vi của ứng dụng được bảo toàn
- Cung cấp một lưới an toàn cho các thay đổi
- Viết tài liệu cho các hành vi mong đợi

### Bước 4: Triển Khai Tái Cấu Trúc

Thực hiện việc tái cấu trúc:

```bash
/cook [refactor user validation logic to eliminate duplication]
```

**Quá trình tái cấu trúc**:
```
[1/6] Đang phân tích mã nguồn hiện tại...
  ✓ Đã xác định 156 dòng code trùng lặp
  ✓ Đã lập bản đồ các phụ thuộc (dependencies)
  ✓ Đã kiểm tra độ bao phủ tests: 78%

[2/6] Đang tạo shared validator...
  ✓ Đã tạo src/validators/user.validator.js
  ✓ Đã trích xuất các hàm kiểm tra:
    - validateEmail()
    - validatePassword()
    - validateName()
    - validateAge()

[3/6] Đang cập nhật controllers...
  ✓ Đã cập nhật src/users/create.js
  ✓ Đã cập nhật src/users/update.js
  ✓ Đã gỡ bỏ code trùng lặp (156 dòng)
  ✓ Đã thêm imports cho shared validator

[4/6] Đang chạy tests...
  ✓ Tất cả các tests hiện có đều vượt qua (142/142)
  ✓ Đã thêm các tests mới cho validator (24 tests)
  ✓ Độ bao phủ tăng: 78% → 85%

[5/6] Code review...
  ✓ Không phát hiện code trùng lặp
  ✓ Xử lý lỗi nhất quán
  ✓ Cải thiện khả năng bảo trì

[6/6] Đã cập nhật tài liệu...
  ✓ Cập nhật tài liệu kiến trúc
  ✓ Thêm tài liệu cho validator

✅ Tái cấu trúc hoàn tất

Các chỉ số Code:
- Số dòng code đã gỡ bỏ: 156
- Số dòng code đã thêm mới: 89
- Giảm thiểu ròng: 67 dòng
- Trùng lặp: 67% → 0%
- Khả năng bảo trì: +18 điểm

Các tệp đã thay đổi:
- src/validators/user.validator.js (mới)
- src/users/create.js (tái cấu trúc)
- src/users/update.js (tái cấu trúc)
- tests/validators/user.test.js (mới)
```

### Bước 5: Xác Minh Chức Năng

Kiểm thử kỹ lưỡng mã nguồn đã được tái cấu trúc:

```bash
# Chạy bộ kiểm thử toàn diện
/test

# Kiểm thử thủ công
npm run dev

# Kiểm thử tất cả các endpoints bị ảnh hưởng
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "password": "pass123"}'

curl -X PUT http://localhost:3000/api/users/123 \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe"}'
```

### Bước 6: Review và Viết Tài Liệu

```bash
# Cập nhật tài liệu
/docs:update [document the validator refactoring]

# Xem lại các thay đổi
git diff

# Kiểm tra sự cải thiện của các chỉ số
/review
```

### Bước 7: Commit Việc Tái Cấu Trúc

```bash
/git cm
```

**Commit được tạo**:
```
refactor: trích xuất shared user validation logic

- Tạo module user.validator.js có thể tái sử dụng
- Gỡ bỏ 156 dòng code kiểm tra trùng lặp
- Tiêu chuẩn hóa các thông báo lỗi giữa create/update
- Thêm các bài kiểm tra toàn diện cho validator (24 tests)
- Tăng độ bao phủ kiểm thử từ 78% lên 85%

Các chỉ số code:
- Trùng lặp: 67% → 0%
- Khả năng bảo trì: +18 điểm
- Số dòng code: -67 (giảm thiểu ròng)

Không có thay đổi về chức năng - tất cả các tests đều vượt qua
```

## Các Ví Dụ Hoàn Chỉnh

### Ví Dụ 1: Đơn Giản Hóa Hàm Phức Tạp

**Trước đó** (234 dòng):
```javascript
// src/orders/process.js
async function processOrder(orderId) {
  const order = await getOrder(orderId);
  if (!order) {
    throw new Error('Order not found');
  }
  if (order.status === 'cancelled') {
    throw new Error('Order cancelled');
  }
  if (order.items.length === 0) {
    throw new Error('No items');
  }

  // ... 220+ dòng trộn lẫn các mối quan tâm khác nhau
  // - Kiểm tra kho hàng
  // - Xử lý thanh toán
  // - Thông báo email
  // - Tính toán vận chuyển
  // - Tính toán thuế
  // - Cập nhật database
}
```

**Lệnh tái cấu trúc**:
```bash
/cook [refactor processOrder function to follow single responsibility principle]
```

**Sau đó** (kiến trúc sạch sẽ):
```javascript
// src/orders/process.js
async function processOrder(orderId) {
  const order = await validateOrder(orderId);

  await checkInventory(order);
  const payment = await processPayment(order);
  await updateInventory(order);
  await sendConfirmationEmail(order, payment);
  await createShipment(order);

  return order;
}

// Mỗi hàm được trích xuất ra một tệp riêng biệt
// src/orders/validate.js - Kiểm tra đơn hàng
// src/inventory/check.js - Kiểm tra kho hàng
// src/payments/process.js - Logic thanh toán
// src/emails/confirmation.js - Gửi email
// src/shipping/create.js - Tạo đơn vận chuyển
```

**Kết quả**:
- Hàm chính: 234 dòng → 9 dòng
- 5 modules tập trung mới được tạo ra
- Mỗi hàm < 50 dòng
- Độ bao phủ kiểm thử: 65% → 92%
- Khả năng bảo trì: +34 điểm

### Ví Dụ 2: Gỡ Bỏ Việc Ghép Nối Chặt Chẽ (Tight Coupling)

**Trước đó** (ghép nối chặt chẽ):
```javascript
// src/users/service.js
class UserService {
  async createUser(data) {
    // Truy cập database trực tiếp
    const db = require('../database');
    const user = await db.users.create(data);

    // Dịch vụ email trực tiếp
    const emailer = require('../email');
    await emailer.send(user.email, 'Welcome!');

    // Logger trực tiếp
    const logger = require('../logger');
    logger.info('User created', user.id);

    return user;
  }
}
```

**Lệnh tái cấu trúc**:
```bash
/cook [refactor UserService to use dependency injection]
```

**Sau đó** (ghép nối lỏng lẻo):
```javascript
// src/users/service.js
class UserService {
  constructor(database, emailService, logger) {
    this.db = database;
    this.email = emailService;
    this.logger = logger;
  }

  async createUser(data) {
    const user = await this.db.users.create(data);
    await this.email.sendWelcome(user.email);
    this.logger.info('User created', user.id);
    return user;
  }
}

// Dễ dàng mock để kiểm thử
// Có thể thay đổi linh hoạt các triển khai (implementations)
// Các phụ thuộc rõ ràng
```

### Ví Dụ 3: Cải Thiện Xử Lý Lỗi

**Trước đó** (xử lý lỗi kém):
```javascript
async function fetchUserData(userId) {
  const response = await fetch(`/api/users/${userId}`);
  const data = await response.json();
  return data.user;
}
```

**Lệnh tái cấu trúc**:
```bash
/cook [add comprehensive error handling to fetchUserData]
```

**Sau đó** (xử lý lỗi mạnh mẽ):
```javascript
async function fetchUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);

    if (!response.ok) {
      throw new ApiError(
        `Failed to fetch user: ${response.status}`,
        response.status
      );
    }

    const data = await response.json();

    if (!data || !data.user) {
      throw new DataError('Invalid user data received');
    }

    return data.user;

  } catch (error) {
    if (error instanceof ApiError) {
      logger.error('API error fetching user', { userId, error });
    } else if (error instanceof DataError) {
      logger.error('Data validation error', { userId, error });
    } else {
      logger.error('Unexpected error', { userId, error });
    }
    throw error;
  }
}
```

## Các Mẫu Tái Cấu Trúc Phổ Biến

### 1. Trích Xuất Phương Thức (Extract Method)

```bash
/cook [extract password validation into separate function]
```

### 2. Trích Xuất Lớp (Extract Class)

```bash
/cook [extract payment processing into PaymentService class]
```

### 3. Đổi Tên (Rename)

```bash
/cook [rename all instances of 'data' variable to descriptive names]
```

### 4. Giới Thiệu Parameter Object

```bash
/cook [replace multiple parameters with configuration object]
```

### 5. Thay Thế Điều Kiện Bằng Tính Đa Hình (Polymorphism)

```bash
/cook [replace user type conditionals with strategy pattern]
```

### 6. Di Chuyển Phương Thức (Move Method)

```bash
/cook [move authentication logic from controller to service layer]
```

## Các Thực Hành Tốt Nhất Khi Tái Cấu Trúc

### 1. Kiểm Thử Trước và Sau

```bash
# Trước khi tái cấu trúc
/test
# Ghi lại kết quả kiểm thử

# Sau khi tái cấu trúc
/test
# Xác minh kết quả tương tự
```

### 2. Các Thay Đổi Nhỏ, Tịnh Tiến

```bash
✅ Cách tiếp cận tốt:
/cook [extract validation to separate function]
/test
/git cm

/cook [add error handling to validation]
/test
/git cm

❌ Cách tiếp cận tồi:
/cook [refactor entire authentication system]
# Quá nhiều thay đổi cùng một lúc
# Khó gỡ lỗi nếu có vấn đề phát sinh
```

### 3. Duy Trì Chức Năng

```bash
# Tái cấu trúc KHÔNG được làm thay đổi hành vi
# Chỉ thay đổi cấu trúc và cách triển khai
# Tất cả các tests vẫn phải vượt qua
```

### 4. Cập Nhật Tests Cùng Với Code

```bash
/cook [refactor user service and update tests accordingly]
```

### 5. Viết Tài Liệu Cho Các Thay Đổi Kiến Trúc

```bash
/docs:update [document the new validation architecture]
```

## Các Biến Thể Phổ Biến

### Biến Thể 1: Tái Cấu Trúc Hiệu Suất

```bash
/cook [optimize database queries in user service]
```

### Biến Thể 2: Tái Cấu Trúc Bảo Mật

```bash
/cook [refactor to use parameterized queries instead of string concatenation]
```

### Biến Thể 3: Hiện Đại Hóa Code

```bash
/cook [convert callbacks to async/await throughout the codebase]
```

### Biến Thể 4: Đơn Giản Hóa Kiến Trúc

```bash
/cook [simplify three-layer architecture to two layers]
```

## Xử Lý Sự Cố

### Vấn Đề: Tests Thất Bại Sau Khi Tái Cấu Trúc

**Vấn đề**: Việc tái cấu trúc đã làm hỏng chức năng hiện có

**Giải pháp**:
```bash
# Hoàn tác các thay đổi
git reset --hard HEAD

# Tái cấu trúc theo các bước nhỏ hơn
/cook [extract just the email validation function]
/test
# Đảm bảo các tests vượt qua trước khi tiếp tục
```

### Vấn Đề: Không Rõ Cần Tái Cấu Trúc Những Gì

**Vấn đề**: Không biết bắt đầu từ đâu

**Giải pháp**:
```bash
# Nhận các gợi ý code review
/review

# Hoặc yêu cầu phân tích
/ask [analyze the codebase and suggest refactoring priorities]
```

### Vấn Đề: Làm Phá Vỡ Tính Tương Thích Của API

**Vấn đề**: Việc tái cấu trúc làm thay đổi Public API

**Giải pháp**:
```bash
# Duy trì khả năng tương thích ngược
/cook [refactor internal implementation without changing public API]

# Hoặc đánh phiên bản (version) cho API
/cook [create v2 API with refactored structure]
```

## Đo Lường Sự Thành Công

### Trước Khi Tái Cấu Trúc

```bash
# Thu thập các chỉ số
Trùng lặp code: 45%
Độ dài hàm trung bình: 87 dòng
Độ phức tạp Cyclomatic: 23
Độ bao phủ kiểm thử: 65%
Chỉ số khả năng bảo trì: 42/100
```

### Sau Khi Tái Cấu Trúc

```bash
# Đo lường sự cải thiện
Trùng lặp code: 5%
Độ dài hàm trung bình: 28 dòng
Độ phức tạp Cyclomatic: 8
Độ bao phủ kiểm thử: 89%
Chỉ số khả năng bảo trì: 78/100

Cải thiện: +36 điểm khả năng bảo trì
```

## Bước Tiếp Theo

### Các Trường Hợp Sử Dụng Liên Quan
- [Thêm Tính Năng Mới](/docs/workflows/adding-feature) - Xây dựng tính năng
- [Sửa Lỗi](/docs/workflows/fixing-bugs) - Gỡ lỗi vấn đề
- [Tối Ưu Hóa Hiệu Suất](/docs/workflows/optimizing-performance) - Cải thiện tốc độ

### Các Lệnh Liên Quan
- [/cook](/docs/engineer/skills/cook) - Triển khai tái cấu trúc
- [/test](/docs/engineer/commands/core/test) - Xác minh các thay đổi
- [/docs:update](/docs/engineer/commands/docs-cmd/update) - Cập nhật tài liệu

### Các Agents Liên Quan
- [Code Reviewer](/docs/engineer/agents/code-reviewer) - Phân tích chất lượng code
- [Tester](/docs/engineer/agents/tester) - Độ bao phủ kiểm thử
- [Docs Manager](/docs/engineer/agents/docs-manager) - Tài liệu

---

**Bài học chính**: ClaudeKit cho phép tái cấu trúc mã nguồn một cách an toàn, tịnh tiến với việc kiểm thử và xác thực tự động - cải thiện chất lượng mã nguồn mà không làm hỏng chức năng, biến những ngày tái cấu trúc đầy rủi ro thành những giờ cải tiến đầy tự tin.
