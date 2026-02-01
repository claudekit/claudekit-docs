---
title: /plan:ci
description: Tài liệu hướng dẫn lệnh plan:ci
section: engineer
kit: engineer
category: commands/plan
order: 10
published: true
lang: vi
---

# /plan:ci

Phân tích nhật ký (logs) quy trình công việc của GitHub Actions và tạo kế hoạch triển khai chi tiết để sửa các sự cố CI/CD. Lệnh này xác định các vấn đề, nguyên nhân gốc rễ và cung cấp các bước có thể thực hiện được nhưng KHÔNG tự động thực hiện các bản sửa lỗi.

## Cú pháp

```bash
/plan:ci [github-actions-url]
```

## Cách hoạt động

Lệnh `/plan:ci` tuân theo một quy trình làm việc phân tích:

### 1. Lấy nhật ký (Logs)

- Lấy nhật ký quy trình công việc của GitHub Actions thông qua URL hoặc `gh` CLI
- Xác định các bước bị lỗi và thông báo lỗi
- Trích xuất ngữ cảnh liên quan (tên job, dấu thời gian, lệnh)
- Thu thập thông tin môi trường

### 2. Phân tích lỗi

Sử dụng agent **debugger** để:
- Phân tích các thông báo lỗi và stack trace
- Xác định nguyên nhân gốc rễ (không chỉ là triệu chứng)
- Phân loại các vấn đề (build, test, deploy, môi trường, v.v.)
- Lập bản đồ phụ thuộc giữa các lỗi

### 3. Ngữ cảnh mã nguồn

Sử dụng agent **scout** để:
- Định vị các tệp quy trình công việc liên quan (`.github/workflows/`)
- Tìm cấu hình liên quan (package.json, tsconfig.json, v.v.)
- Xác định các tệp nguồn bị ảnh hưởng
- Kiểm tra các thay đổi gần đây (git log)

### 4. Nghiên cứu giải pháp

Sử dụng agent **researcher** để:
- Tìm kiếm các vấn đề CI tương tự
- Xem lại tài liệu GitHub Actions
- Kiểm tra action marketplace để tìm các bản sửa lỗi
- Tìm kiếm các thực hành tốt nhất

### 5. Tạo kế hoạch

Tạo kế hoạch toàn diện bao gồm:
- Giải thích nguyên nhân gốc rễ
- Hướng dẫn sửa lỗi từng bước
- Các tệp cần sửa đổi
- Các lệnh cần chạy
- Chiến lược kiểm tra
- Các biện pháp ngăn ngừa

## Ví dụ

### Phân tích lỗi Build

```bash
/plan:ci https://github.com/user/repo/actions/runs/12345
```

**Điều gì xảy ra:**
```
Giai đoạn 1: Lấy nhật ký (10 giây)
---
Agent: debugger

Sử dụng GitHub CLI để lấy nhật ký...
gh run view 12345 --log

Quy trình: CI/CD Pipeline
Job: build
Trạng thái: Thất bại
Thời gian: 2m 15s

Bước thất bại: Build application
Mã thoát: 1

Nhật ký lỗi:
---
Run npm run build
> build
> tsc && vite build

src/components/Dashboard.tsx:45:12 - error TS2339:
Property 'userName' does not exist on type 'User'.

45     return user.userName
              ~~~~~~~~

Found 1 error in src/components/Dashboard.tsx:45

Error: Process completed with exit code 1.
---

Giai đoạn 2: Phân tích lỗi (15 giây)
---
Agent: debugger

Đang phân tích lỗi...

Loại lỗi: Lỗi biên dịch TypeScript
Nguyên nhân gốc rễ: Thuộc tính 'userName' không tồn tại trong kiểu 'User'
Vị trí: src/components/Dashboard.tsx:45:12

Các nguyên nhân có thể:
1. Thuộc tính bị đổi tên từ 'userName' thành 'username'
2. Định nghĩa kiểu bị cũ
3. Thuộc tính bị xóa khỏi kiểu User
4. Xung đột merge dẫn đến tên thuộc tính không chính xác

Kiểm tra các thay đổi gần đây...
git log --oneline -10 -- src/types/user.ts

Tìm thấy: commit abc123 "refactor: rename userName to username"

Nguyên nhân gốc rễ đã được xác nhận:
Kiểu User đã được refactor nhưng Dashboard.tsx chưa được cập nhật

Giai đoạn 3: Thăm dò mã nguồn (10 giây)
---
Agent: scout

Đang định vị các tệp bị ảnh hưởng...

Các tệp có tham chiếu 'userName':
✓ src/components/Dashboard.tsx (1 lần)
✓ src/components/Profile.tsx (2 lần)
✓ src/utils/user-helper.ts (1 lần)

Các tệp dùng 'username' (chính xác):
✓ src/types/user.ts (định nghĩa kiểu)
✓ src/api/auth.ts (gọi API)
✓ 15 tệp khác

Sự không nhất quán được tìm thấy:
- 3 tệp vẫn sử dụng 'userName' cũ
- Tất cả nên sử dụng 'username'

Giai đoạn 4: Nghiên cứu (5 giây)
---
Agent: researcher

Các thực hành tốt nhất được tìm thấy:
✓ Sử dụng các công cụ refactor đổi tên tự động
✓ Thêm quy tắc ESLint để thực thi đặt tên nhất quán
✓ Chạy kiểm tra kiểu trước khi commit

Chiến lược ngăn ngừa:
✓ Pre-commit hook với kiểm tra kiểu
✓ Cấu hình IDE để đặt tên nhất quán
✓ Mục danh sách kiểm tra code review

Giai đoạn 5: Kế hoạch đã được tạo (5 giây)
---
Agent: planner

Kế hoạch được lưu tại: plans/fix-ci-build-12345.md

KẾ HOẠCH TRIỂN KHAI
---

## Nguyên nhân gốc rễ
Thuộc tính 'userName' đã được đổi tên thành 'username' trong kiểu User
nhưng 3 tệp chưa được cập nhật trong commit abc123.

## Các tệp cần sửa

1. src/components/Dashboard.tsx
   Dòng 45: user.userName → user.username

2. src/components/Profile.tsx
   Dòng 23: user.userName → user.username
   Dòng 67: user.userName → user.username

3. src/utils/user-helper.ts
   Dòng 12: data.userName → data.username

## Sửa lỗi từng bước

### Bước 1: Sửa các tham chiếu thuộc tính
```bash
# Cập nhật Dashboard.tsx
# Thay đổi dòng 45: return user.userName
# Thành:             return user.username

# Cập nhật Profile.tsx
# Thay đổi dòng 23 và 67 tương tự

# Cập nhật user-helper.ts
# Thay đổi dòng 12 tương tự
```

### Bước 2: Xác minh kiểm tra kiểu cục bộ
```bash
npm run type-check
# Sẽ vượt qua và không có lỗi
```

### Bước 3: Chạy Build cục bộ
```bash
npm run build
# Sẽ hoàn tất thành công
```

### Bước 4: Chạy các bài kiểm tra
```bash
npm test
# Đảm bảo không có bài kiểm tra nào bị hỏng bởi các thay đổi
```

### Bước 5: Commit và Push
```bash
git add src/components/Dashboard.tsx src/components/Profile.tsx src/utils/user-helper.ts
git commit -m "fix: update userName to username in remaining files"
git push
```

### Bước 6: Xác minh CI vượt qua
Đợi GitHub Actions chạy và xác minh build thành công.

## Biện pháp ngăn ngừa

### 1. Thêm Pre-commit Hook
```bash
# .husky/pre-commit
npm run type-check
```

### 2. Thêm bước kiểm tra kiểu vào GitHub Actions
```yaml
# .github/workflows/ci.yml
- name: Type check
  run: npm run type-check
```

### 3. Cấu hình VS Code
```json
// .vscode/settings.json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

## Thời gian dự kiến
- Triển khai bản sửa lỗi: 5 phút
- Kiểm tra: 5 phút
- Tổng cộng: 10 phút

## Mức độ rủi ro: Thấp
- Đổi tên thuộc tính đơn giản
- Hệ thống kiểu phát hiện tất cả các trường hợp
- Không thay đổi logic runtime

---

✓ Kế hoạch hoàn tất (tổng cộng 45 giây)

Bước tiếp theo: Xem lại kế hoạch và triển khai các bản sửa lỗi
Sử dụng: /clear, sau đó mô tả task tự nhiên → skill cook sẽ kích hoạt từ ngữ cảnh plan
```

### Phân tích lỗi kiểm tra (Test)

```bash
/plan:ci https://github.com/user/repo/actions/runs/67890
```

**Điều gì xảy ra:**
```
Giai đoạn 1: Lấy nhật ký
---
Quy trình: Test Suite
Job: test
Trạng thái: Thất bại
Thời gian: 4m 32s

Các bài kiểm tra thất bại:
---
FAIL src/auth/login.test.ts
  ✓ should validate email format (25ms)
  ✓ should require password (18ms)
  ✗ should authenticate valid credentials (2503ms)

Error: Timeout - Async callback was not invoked within
the 2000ms timeout specified by jest.setTimeout.

FAIL src/api/users.test.ts
  ✗ should fetch user list (5002ms)

Error: connect ECONNREFUSED 127.0.0.1:5432

---

Giai đoạn 2: Phân tích lỗi
---
Hai loại lỗi được xác định:

LỖI 1: Hết thời gian bài kiểm tra (Test Timeout)
- Các bài kiểm tra mất > 2 giây
- Async callback không được gọi
- Nguyên nhân có thể: API không được mock đúng cách

LỖI 2: Kết nối cơ sở dữ liệu bị từ chối
- PostgreSQL không chạy trong CI
- Kết nối cổng 5432 bị từ chối
- Thiếu cấu hình dịch vụ

Nguyên nhân gốc rễ:
1. Quy trình GitHub Actions thiếu dịch vụ PostgreSQL
2. Các bài kiểm tra không được mock đúng cách (đang gọi API thật)
3. Thời gian chờ bài kiểm tra quá ngắn cho các bài kiểm tra tích hợp

Giai đoạn 3: Kế hoạch đã được tạo
---

## Phân tích nguyên nhân gốc rễ

### Vấn đề 1: Thiếu dịch vụ PostgreSQL
Quy trình CI không định nghĩa container dịch vụ PostgreSQL.
Các bài kiểm tra tích hợp thất bại với lỗi kết nối bị từ chối.

### Vấn đề 2: Gọi API không được mock
Bài kiểm tra đăng nhập thực hiện yêu cầu HTTP thật thay vì sử dụng mock.
Vượt quá thời gian chờ 2 giây.

## Kế hoạch giải quyết

### Sửa lỗi 1: Thêm dịch vụ PostgreSQL vào CI

Cập nhật `.github/workflows/ci.yml`:

```yaml
jobs:
  test:
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_USER: testuser
          POSTGRES_PASSWORD: testpass
          POSTGRES_DB: testdb
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432

    env:
      DATABASE_URL: postgresql://testuser:testpass@localhost:5432/testdb

    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run migrate:test
      - run: npm test
```

### Sửa lỗi 2: Mock các cuộc gọi API trong bài kiểm tra đăng nhập

Cập nhật `src/auth/login.test.ts`:

```typescript
// Trước:
it('should authenticate valid credentials', async () => {
  const result = await login(email, password);
  expect(result).toBeDefined();
});

// Sau:
import { mockApiClient } from '../test-utils/mocks';

it('should authenticate valid credentials', async () => {
  mockApiClient.post.mockResolvedValueOnce({
    data: { token: 'mock-token', user: { id: 1 } }
  });

  const result = await login(email, password);
  expect(result.token).toBe('mock-token');
});
```

### Sửa lỗi 3: Tăng thời gian chờ cho các bài kiểm tra tích hợp

Cập nhật `jest.config.js`:

```javascript
module.exports = {
  testTimeout: 10000, // 10 giây cho các bài kiểm tra tích hợp
  testMatch: [
    '**/__tests__/**/*.test.ts',
    '**/*.integration.test.ts'
  ],
};
```

## Các bước triển khai

1. Cập nhật quy trình GitHub Actions (1 tệp)
2. Thêm mock API vào bài kiểm tra đăng nhập (1 tệp)
3. Cập nhật cấu hình Jest (1 tệp)
4. Chạy các bài kiểm tra cục bộ để xác minh
5. Commit và push
6. Xác minh CI vượt qua

## Thời gian dự kiến: 15 phút

## Mức độ rủi ro: Trung bình
- Cấu hình dịch vụ cơ sở dữ liệu yêu cầu thiết lập cẩn thận
- Phải đảm bảo các biến môi trường kiểm tra chính xác
- Migration phải chạy trước khi kiểm tra

---

✓ Kế hoạch hoàn tất

Tiếp theo: /cook [triển khai các bản sửa lỗi CI từ kế hoạch]
```

### Lỗi triển khai (Deployment)

```bash
/plan:ci https://github.com/user/repo/actions/runs/11111
```

**Điều gì xảy ra:**
```
Giai đoạn 1: Lấy nhật ký
---
Quy trình: Deploy to Production
Job: deploy
Trạng thái: Thất bại
Thời gian: 1m 8s

Lỗi:
---
Run docker build -t myapp:latest .
ERROR [build 5/8] RUN npm ci --only=production
npm ERR! code ENOTFOUND
npm ERR! errno ENOTFOUND
npm ERR! network request to https://registry.npmjs.org/...
npm ERR! network This is a problem related to network connectivity.

Error: Process completed with exit code 1.
---

Giai đoạn 2: Phân tích
---
Loại lỗi: Lỗi mạng trong quá trình cài đặt npm
Nguyên nhân gốc rễ: Không thể kết nối tới registry npm HOẶC bị giới hạn tốc độ (rate limited)

Các yếu tố góp phần:
- Không có bộ nhớ đệm (cache) npm trong CI
- Xây dựng lại các phụ thuộc mọi lúc
- Có khả năng bị giới hạn tốc độ bởi registry npm

Giai đoạn 3: Kế hoạch đã được tạo
---

## Nguyên nhân gốc rễ
Kết nối tới registry npm thất bại trong quá trình build Docker.
Không có chiến lược lưu trữ đệm = build chậm + rủi ro bị giới hạn tốc độ.

## Kế hoạch giải quyết

### Sửa lỗi 1: Thêm lưu trữ đệm phụ thuộc (Dependency Caching)

Cập nhật `.github/workflows/deploy.yml`:

```yaml
- name: Cache node modules
  uses: actions/cache@v4
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-

- name: Install dependencies
  run: npm ci --prefer-offline
```

### Sửa lỗi 2: Thêm logic thử lại (Retry Logic)

```yaml
- name: Install dependencies with retry
  uses: nick-invision/retry@v2
  with:
    timeout_minutes: 10
    max_attempts: 3
    command: npm ci
```

### Sửa lỗi 3: Sử dụng BuildKit Cache

Cập nhật Dockerfile:

```dockerfile
# syntax=docker/dockerfile:1

FROM node:20-alpine AS builder

# Kích hoạt mount cache BuildKit
RUN --mount=type=cache,target=/root/.npm \
    npm ci --only=production

COPY . .
RUN npm run build

FROM node:20-alpine
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
CMD ["node", "dist/index.js"]
```

### Sửa lỗi 4: Xem xét sử dụng Registry Mirror riêng

Đối với doanh nghiệp: Thiết lập Verdaccio hoặc Artifactory làm cache.

```yaml
env:
  NPM_CONFIG_REGISTRY: https://npm-cache.company.com
```

## Các bước triển khai

1. Thêm lưu trữ đệm vào quy trình làm việc
2. Thêm action thử lại
3. Cập nhật Dockerfile với BuildKit
4. Kiểm tra build cục bộ
5. Triển khai lên staging trước
6. Xác minh triển khai sản xuất

## Thời gian dự kiến: 25 phút

## Ngăn ngừa
- Giám sát trạng thái registry npm
- Xem xét npm Enterprise
- Thiết lập mirror registry nội bộ
- Sử dụng các tệp khóa (đã sử dụng package-lock.json ✓)

---

✓ Kế hoạch hoàn tất
```

## Khi nào nên sử dụng

### ✅ Sử dụng /plan:ci cho:

**Lỗi Build**
```bash
/plan:ci https://github.com/user/repo/actions/runs/12345
```

**Lỗi kiểm tra (Test)**
```bash
/plan:ci https://github.com/user/repo/actions/runs/67890
```

**Sự cố triển khai (Deployment)**
```bash
/plan:ci https://github.com/user/repo/actions/runs/11111
```

**Lỗi Linting/Kiểu (Type)**
```bash
/plan:ci https://github.com/user/repo/actions/runs/22222
```

**Vấn đề môi trường**
```bash
/plan:ci https://github.com/user/repo/actions/runs/33333
```

### ❌ Không sử dụng cho:

**Các vấn đề cục bộ**
- Hãy debug cục bộ trước
- Chỉ sử dụng cho các thất bại CI thực tế

**Các lỗi nhỏ đã được sửa**
- Nếu bạn đã biết cách sửa, hãy triển khai nó luôn

## Cách tiếp cận chỉ lập kế hoạch (Plan-Only)

`/plan:ci` tạo kế hoạch nhưng KHÔNG triển khai:

**Tại sao chỉ lập kế hoạch?**
- Các vấn đề CI cần được xem xét cẩn thận
- Có nhiều giải pháp khả thi
- Các cân nhắc cụ thể cho từng môi trường
- Bạn là người quyết định chọn cách tiếp cận nào

**Sau khi nhận được kế hoạch:**
```bash
# Lựa chọn 1: Triển khai thủ công
cat plans/fix-ci-*.md
# Tự mình làm theo các bước

# Lựa chọn 2: Dùng skill cook tự nhiên
/clear
Mô tả task → skill cook tự động triển khai từ ngữ cảnh plan

# Lựa chọn 3: Sử dụng /fix để tự động triển khai
/fix https://github.com/user/repo/actions/runs/12345
```

## Cấu trúc kế hoạch

Mọi kế hoạch bao gồm:

### 1. Phân tích nguyên nhân gốc rễ

```markdown
## Phân tích nguyên nhân gốc rễ
Giải thích rõ ràng tại sao CI thất bại.
Không chỉ là triệu chứng, mà là vấn đề cốt lõi.
```

### 2. Các tùy chọn giải pháp

```markdown
## Các tùy chọn giải pháp

### Tùy chọn A: Sửa nhanh
- Ưu điểm: Nhanh, thay đổi tối thiểu
- Nhược điểm: Có thể không ngăn chặn được việc tái diễn

### Tùy chọn B: Sửa đúng cách
- Ưu điểm: Giải quyết nguyên nhân gốc rễ
- Nhược điểm: Mất nhiều thời gian hơn, thay đổi nhiều hơn

Khuyến nghị: Tùy chọn B
```

### 3. Các tệp cần sửa đổi

```markdown
## Các tệp cần thay đổi

1. .github/workflows/ci.yml
   - Thêm dịch vụ PostgreSQL
   - Cấu hình các biến môi trường

2. jest.config.js
   - Tăng thời gian chờ lên 10 giây

3. src/auth/login.test.ts
   - Thêm các mock API
```

### 4. Hướng dẫn từng bước

```markdown
## Các bước triển khai

### Bước 1: Cập nhật quy trình làm việc
```yaml
# YAML chính xác cần thêm
```

### Bước 2: Cập nhật các bài kiểm tra
```typescript
// Các thay đổi mã nguồn chính xác
```

### Bước 3: Xác minh cục bộ
```bash
npm test
```
```

### 5. Các biện pháp ngăn ngừa

```markdown
## Ngăn ngừa

Để ngăn chặn vấn đề này trong tương lai:
- Thêm kiểm tra kiểu pre-commit
- Cập nhật CI để chạy trên tất cả các nhánh
- Thêm yêu cầu về độ bao phủ kiểm tra (test coverage)
```

### 6. Đánh giá rủi ro

```markdown
## Mức độ rủi ro: Thấp/Trung bình/Cao

Rủi ro:
- Rủi ro 1: Mô tả
- Rủi ro 2: Mô tả

Giảm thiểu:
- Triển khai lên staging trước
- Chạy toàn bộ bộ kiểm tra
```

## Các tệp đầu ra

Sau khi `/plan:ci` hoàn tất:

### Kế hoạch triển khai

```
plans/fix-ci-[run-id]-[date].md
```

Kế hoạch đầy đủ với tất cả chi tiết

### Phân tích lỗi

```
plans/ci-error-analysis-[run-id].md
```

Bản phân tích chi tiết lỗi

## Các lỗi CI phổ biến thường gặp

### Lỗi Build

- Lỗi biên dịch TypeScript
- Thiếu các phụ thuộc (dependencies)
- Thất bại tập lệnh build
- Vấn đề biến môi trường

### Lỗi kiểm tra (Test)

- Các bài kiểm tra không ổn định (flaky tests)
- Thiếu các phụ thuộc kiểm tra
- Vấn đề kết nối cơ sở dữ liệu
- Lỗi hết thời gian chờ (timeout)
- Vấn đề về mock/stub

### Sự cố triển khai (Deployment)

- Thất bại build Docker
- Vấn đề kết nối registry
- Thiếu bí mật (secrets)/thông tin xác thực
- Lỗi phân quyền

### Vấn đề môi trường

- Sai lệch phiên bản Node
- Thiếu các phụ thuộc hệ thống
- Thiếu cấu hình dịch vụ
- Xung đột cổng (port)

## Thực hành tốt nhất

### Cung cấp URL đầy đủ

✅ **Tốt:**
```bash
/plan:ci https://github.com/user/repo/actions/runs/12345
```

❌ **Xấu:**
```bash
/plan:ci 12345  # Thiếu ngữ cảnh repo
```

### Xem lại kế hoạch trước khi triển khai

```bash
# 1. Lấy kế hoạch
/plan:ci [url]

# 2. ĐỌC kế hoạch
cat plans/fix-ci-*.md

# 3. Hiểu nguyên nhân gốc rễ

# 4. Sau đó triển khai
/cook [triển khai từ kế hoạch]
```

### Kiểm tra cục bộ trước

```bash
# Trước khi triển khai lên CI:
npm run build   # Kiểm tra build
npm test        # Kiểm tra tests
npm run lint    # Kiểm tra linting

# Nếu cục bộ chạy tốt nhưng CI thất bại:
# Vấn đề nằm ở sự khác biệt môi trường
```

## Sau khi nhận được kế hoạch

Quy trình làm việc tiêu chuẩn:

```bash
# 1. Nhận phân tích và kế hoạch
/plan:ci https://github.com/user/repo/actions/runs/12345

# 2. Xem lại kế hoạch
cat plans/fix-ci-12345.md

# 3. Chọn cách tiếp cận triển khai

# Lựa chọn A: Triển khai thủ công
# Làm theo các bước trong kế hoạch

# Lựa chọn B: Dùng skill cook (khuyến nghị - kích hoạt từ ngữ cảnh plan)
/clear
Triển khai sửa lỗi CI → skill cook tự động triển khai

# Lựa chọn C: Sử dụng /fix (tự động triển khai)
/fix https://github.com/user/repo/actions/runs/12345

# 4. Kiểm tra cục bộ trước
npm test
npm run build

# 5. Commit và push
/git cm

# 6. Xác minh CI vượt qua
# Kiểm tra GitHub Actions
```

## Các lệnh liên quan

- [/fix](/vi/docs/engineer/skills/tools/fix) - Tự động triển khai sửa lỗi CI
- [/cook](/vi/docs/engineer/skills/tools/cook) - Triển khai kế hoạch hiện có
- [/debug](/vi/docs/engineer/commands/core/debug) - Debug các vấn đề phức tạp

---

**Điểm mấu chốt**: `/plan:ci` phân tích các thất bại của GitHub Actions, xác định nguyên nhân gốc rễ và tạo các kế hoạch triển khai chi tiết với hướng dẫn từng bước—giúp bạn toàn quyền kiểm soát cách khắc phục các sự cố CI/CD mà không cần triển khai tự động.
