---
title: /skill:fix-logs
description: Sửa các skill agent dựa trên các lỗi và vấn đề được tìm thấy trong logs.txt
section: engineer
kit: engineer
category: commands/skill
order: 81
published: true
lang: vi
---

# /skill:fix-logs

Sửa các skill agent dựa trên các lỗi và vấn đề được tìm thấy trong `logs.txt`. Lệnh này phân tích các thất bại của skill, xác định vấn đề, cập nhật prompt của skill và xác thực các bản sửa lỗi.

## Cú pháp

```bash
/skill:fix-logs [skill-path]
```

## Các loại đầu vào

### 1. Đường dẫn file Skill

```bash
/skill:fix-logs .claude/skills/mongodb.md
```

### 2. Ngôn ngữ tự nhiên (tự động tìm skill)

```bash
/skill:fix-logs [sửa skill MongoDB dựa trên logs]
```

## Cách hoạt động

Lệnh `/skill:fix-logs` tuân theo quy trình chẩn đoán:

### 1. Phân tích Log

- Đọc file `logs.txt`
- Xác định các lỗi liên quan đến skill
- Trích xuất thông báo lỗi và ngữ cảnh
- Phân loại vấn đề (cú pháp, logic, thiếu thông tin, v.v.)
- Ánh xạ lỗi vào các phần của skill

### 2. Chẩn đoán Skill

Kích hoạt agent **debugger** để:
- Phân tích nội dung skill hiện tại
- So sánh với các pattern lỗi
- Xác định nguyên nhân gốc rễ
- Xác định thông tin bị thiếu
- Tìm các ví dụ sai
- Xác định các hướng dẫn không rõ ràng

### 3. Lập kế hoạch sửa lỗi

Tạo chiến lược sửa lỗi:
- Liệt kê các vấn đề cần giải quyết
- Lập kế hoạch bổ sung nội dung
- Xác định các phần cần viết lại
- Xác định các ví dụ cần sửa
- Ánh xạ các điều chỉnh tích hợp công cụ

### 4. Cập nhật Skill

Kích hoạt agent **skill-creator** để:
- Cập nhật các phần có vấn đề
- Bổ sung thông tin thiếu
- Sửa các ví dụ mã nguồn
- Làm rõ các hướng dẫn
- Cải thiện tài liệu tích hợp công cụ
- Nâng cao hướng dẫn xử lý lỗi

### 5. Xác thực

Kích hoạt agent **tester** để:
- Xác minh các bản sửa lỗi đã giải quyết được vấn đề trong log
- Kiểm tra các ví dụ đã cập nhật
- Xác thực cấu trúc skill
- Kiểm tra tính đầy đủ
- Tạo báo cáo xác thực

## Ví dụ

### Sửa Skill sau các lỗi sử dụng

```bash
/skill:fix-logs .claude/skills/polar.md
```

**Nội dung logs.txt:**
```
[2025-10-30 10:23:45] ERROR: Polar skill - webhook signature verification failed
User asked: "How do I verify Polar webhooks?"
Skill response: Used generic webhook verification, not Polar-specific

[2025-10-30 10:28:12] ERROR: Polar skill - incorrect SDK import
User asked: "How to import Polar SDK?"
Skill suggested: import { Polar } from 'polar-sh'
Actual import: import { Polar } from '@polar-sh/sdk'

[2025-10-30 10:35:33] ERROR: Polar skill - missing subscription cancellation example
User asked: "How to cancel subscription?"
Skill response: Generic answer, no code example

[2025-10-30 10:42:18] ERROR: Polar skill - webhook events incomplete
User asked: "What webhook events does Polar send?"
Skill missing: subscription.canceled, payment.refunded events
```

**Điều gì xảy ra:**
```
Giai đoạn 1: Phân tích Log (20 giây)
---
Agent: debugger

Đang đọc logs.txt...

Tìm thấy lỗi: 4
Skill: polar.md

Phân loại lỗi:

1. VÍ DỤ SAI - Xác thực Webhook (Dòng 156)
   Vấn đề: Ví dụ chung chung, không phải của riêng Polar
   Tác động: Người dùng nhận được mã nguồn không hoạt động
   Mức độ: Cao

2. IMPORT SAI - Import SDK (Dòng 45)
   Vấn đề: Sai tên package
   Tác động: Import thất bại, gây bối rối cho người dùng
   Mức độ: Nghiêm trọng

3. THIẾU NỘI DUNG - Hủy đăng ký (Phần 4)
   Vấn đề: Không cung cấp ví dụ mã nguồn
   Tác động: Người dùng không biết cách hủy đăng ký
   Mức độ: Trung bình

4. DANH SÁCH THIẾU - Các sự kiện Webhook (Phần 7)
   Vấn đề: Thiếu 2 sự kiện
   Tác động: Người dùng không xử lý được tất cả các sự kiện
   Mức độ: Trung bình

Giai đoạn 2: Chẩn đoán Skill (30 giây)
---
Agent: debugger

Đang phân tích .claude/skills/polar.md...

Trạng thái hiện tại:
- 3,124 từ
- 23 ví dụ mã nguồn
- 10 phần

Xác nhận vấn đề:

Vấn đề 1: Dòng 156
Hiện tại:
```typescript
const isValid = verifyWebhookSignature(
  req.body,
  signature,
  WEBHOOK_SECRET
);
```

Nên là:
```typescript
const isValid = polar.webhooks.verify(
  req.body,
  signature,
  POLAR_WEBHOOK_SECRET
);
```

Vấn đề 2: Dòng 45
Hiện tại:
```typescript
import { Polar } from 'polar-sh';
```

Nên là:
```typescript
import { Polar } from '@polar-sh/sdk';
```

Vấn đề 3: Phần 4
Thiếu: Ví dụ hủy đăng ký
Cần: Mã nguồn hoàn chỉnh kèm giải thích

Vấn đề 4: Phần 7
Hiện tại: 8 sự kiện webhook
Thiếu: subscription.canceled, payment.refunded

Giai đoạn 3: Lập kế hoạch sửa lỗi (15 giây)
---
Agent: planner

Đã tạo kế hoạch sửa lỗi:

1. Cập nhật xác thực webhook (Dòng 156)
   - Thay thế mã nguồn chung chung
   - Thêm ví dụ cụ thể của Polar
   - Bao gồm xử lý lỗi

2. Sửa import SDK (Dòng 45)
   - Sửa tên package
   - Thêm lệnh cài đặt
   - Xác minh tất cả các import

3. Thêm phần hủy đăng ký (Phần 4)
   - Tạo phần phụ mới
   - Thêm ví dụ hoàn chỉnh
   - Giải thích về cancel_at_period_end
   - Hiển thị sự khác biệt giữa hủy ngay lập tức vs cuối kỳ

4. Hoàn thiện các sự kiện webhook (Phần 7)
   - Thêm subscription.canceled
   - Thêm payment.refunded
   - Cập nhật các ví dụ xử lý sự kiện

5. Thêm xác thực
   - Kiểm tra tất cả các ví dụ mã nguồn
   - Xác minh các import hoạt động
   - Kiểm tra danh sách webhook đã đầy đủ

Giai đoạn 4: Cập nhật Skill (2 phút)
---
Agent: skill-creator

Đang áp dụng các bản sửa lỗi...

Sửa lỗi 1: Xác thực Webhook ✓
---
Trước:
```typescript
const isValid = verifyWebhookSignature(
  req.body,
  signature,
  WEBHOOK_SECRET
);
```

Sau:
```typescript
import { Polar } from '@polar-sh/sdk';

const polar = new Polar(process.env.POLAR_SECRET_KEY);

// Xác thực chữ ký webhook
const isValid = polar.webhooks.verify(
  req.body,
  req.headers['polar-signature'] as string,
  process.env.POLAR_WEBHOOK_SECRET
);

if (!isValid) {
  return res.status(401).json({ error: 'Chữ ký không hợp lệ' });
}
```

Sửa lỗi 2: Import SDK ✓
---
Trước:
```typescript
import { Polar } from 'polar-sh';
```

Sau:
```typescript
// Cài đặt SDK
// npm install @polar-sh/sdk

import { Polar } from '@polar-sh/sdk';

const polar = new Polar(process.env.POLAR_SECRET_KEY);
```

Sửa lỗi 3: Đã thêm Hủy đăng ký ✓
---
Đã thêm phần mới vào "Quản lý đăng ký":

### Hủy đăng ký

```typescript
// Hủy vào cuối kỳ hiện tại (khuyên dùng)
await polar.subscriptions.cancel(subscriptionId, {
  cancelAtPeriodEnd: true
});

// Người dùng vẫn có quyền truy cập cho đến khi hết hạn kỳ
// Không hoàn tiền

// Hủy ngay lập tức (hiếm, thường dùng để hoàn tiền)
await polar.subscriptions.cancel(subscriptionId, {
  cancelAtPeriodEnd: false
});

// Quyền truy cập bị thu hồi ngay lập tức
// Có thể hoàn tiền theo tỷ lệ dựa trên cài đặt của bạn
```

**Khi nào sử dụng mỗi loại:**

Hủy vào cuối kỳ:
- Người dùng yêu cầu hủy
- Muốn cung cấp đầy đủ dịch vụ cho kỳ đã thanh toán
- Không cần hoàn tiền

Hủy ngay lập tức:
- Phát hiện gian lận
- Vi phạm điều khoản dịch vụ
- Người dùng yêu cầu hoàn tiền

Sửa lỗi 4: Hoàn thiện sự kiện Webhook ✓
---
Đã thêm vào danh sách sự kiện webhook:

```typescript
switch (event.type) {
  case 'subscription.created':
    // Người dùng đã đăng ký
    await activateSubscription(event.data);
    break;

  case 'subscription.updated':
    // Đăng ký thay đổi (gói, trạng thái)
    await updateSubscription(event.data);
    break;

  case 'subscription.canceled':  // ← ĐÃ THÊM
    // Người dùng đã hủy đăng ký
    await handleCancellation(event.data);
    break;

  case 'payment.succeeded':
    // Thanh toán thành công
    await recordPayment(event.data);
    break;

  case 'payment.failed':
    // Thanh toán thất bại
    await handleFailedPayment(event.data);
    break;

  case 'payment.refunded':  // ← ĐÃ THÊM
    // Đã hoàn tiền
    await processRefund(event.data);
    break;

  // ... các sự kiện khác
}
```

Các cải tiến bổ sung:
---
✓ Cập nhật hướng dẫn cài đặt
✓ Thêm các ví dụ xử lý lỗi
✓ Cải thiện chú thích mã nguồn
✓ Sửa 3 lỗi đánh máy nhỏ khác
✓ Nâng cao phần xử lý sự cố

Giai đoạn 5: Xác thực (45 giây)
---
Agent: tester

Đang xác thực các bản sửa lỗi...

Vấn đề 1: Xác thực webhook ✅
- Cú pháp mã nguồn hợp lệ
- Method SDK Polar chính xác
- Đã bao gồm xử lý lỗi
- Ví dụ hoàn chỉnh

Vấn đề 2: Import SDK ✅
- Tên package chính xác
- Đã thêm lệnh cài đặt
- Câu lệnh import hợp lệ

Vấn đề 3: Hủy đăng ký ✅
- Cả hai phương pháp đều được tài liệu hóa
- Rõ ràng khi nào nên sử dụng mỗi loại
- Các ví dụ mã nguồn hoạt động tốt
- Đã bao gồm xử lý lỗi

Vấn đề 4: Các sự kiện webhook ✅
- Tất cả các sự kiện hiện đã được liệt kê
- Đã có trình xử lý cho các sự kiện mới
- Các kiểu dữ liệu sự kiện đã được tài liệu hóa

Xác thực bổ sung:
✓ Tất cả 25 ví dụ mã nguồn đã được xác minh
✓ Không có lỗi cú pháp
✓ Các import nhất quán
✓ Các kiểu dữ liệu TypeScript chính xác

✓ Đã giải quyết tất cả các vấn đề (3 phút 50 giây)

Tóm tắt:
---
Vấn đề đã sửa: 4/4 (100%)
Các phần đã cập nhật: 3
Các ví dụ đã thêm: 2
Các ví dụ đã sửa: 3
Số dòng thay đổi: 87
Cải thiện chất lượng: 9.2 → 9.8

Các file đã cập nhật:
✓ .claude/skills/polar.md

Các bước tiếp theo:
1. Kiểm tra skill với các câu hỏi ban đầu
2. Xác minh tất cả các lỗi trong log đã được giải quyết
3. Lưu trữ (archive) logs.txt
```

### Sửa Skill thiếu tài liệu

```bash
/skill:fix-logs .claude/skills/cloudflare-workers.md
```

**Nội dung logs.txt:**
```
[2025-10-30 11:15:22] ERROR: Cloudflare Workers skill - no D1 migration example
User asked: "How to create D1 database migrations?"
Skill response: Generic database migration, not D1-specific

[2025-10-30 11:22:45] ERROR: Cloudflare Workers skill - KV namespace binding unclear
User asked: "How to bind KV namespace in wrangler.toml?"
Skill response: Incomplete, missing environment-specific bindings

[2025-10-30 11:31:18] ERROR: Cloudflare Workers skill - Durable Objects not explained
User asked: "When to use Durable Objects vs KV?"
Skill response: Mentioned both but didn't explain trade-offs
```

**Điều gì xảy ra:**
```
Giai đoạn 1: Phân tích Log
---
3 lỗi đã được xác định
Tất cả liên quan đến tài liệu không đầy đủ

Vấn đề:
1. Migration D1 - Thiếu các lệnh wrangler
2. Binding KV - Thiếu cấu hình cụ thể theo môi trường
3. Durable Objects - Chưa giải thích các đánh đổi (trade-offs)

Giai đoạn 2-4: Chẩn đoán & Sửa lỗi
---

Sửa lỗi 1: Thêm hướng dẫn Migration D1
✓ Đã thêm phần với các lệnh wrangler
✓ Bao gồm các ví dụ file migration
✓ Giải thích quy trình làm việc của migration

Sửa lỗi 2: Làm rõ Binding KV
✓ Thêm ví dụ wrangler.toml hoàn chỉnh
✓ Hiển thị binding cho dev vs production
✓ Giải thích cách đặt tên namespace

Sửa lỗi 3: Thêm so sánh Durable Objects
✓ Tạo bảng so sánh
✓ Giải thích khi nào nên sử dụng mỗi loại
✓ Thêm sơ đồ quyết định
✓ Bao gồm các trường hợp sử dụng ví dụ

Giai đoạn 5: Xác thực
---
✓ Tất cả các ví dụ đã được kiểm tra
✓ Các lệnh wrangler đã được xác minh
✓ Các ví dụ cấu hình hợp lệ

Chất lượng: 9.1 → 9.7
```

### Sửa nhiều Skill cùng lúc

```bash
/skill:fix-logs [sửa tất cả các skill dựa trên logs]
```

**Điều gì xảy ra:**
```
Giai đoạn 1: Phân tích Log
---
Đang phân tích logs.txt...

Tìm thấy lỗi: 12
Các skill bị ảnh hưởng: 4
- polar.md (4 lỗi)
- mongodb.md (3 lỗi)
- cloudflare-workers.md (3 lỗi)
- nextjs.md (2 lỗi)

Đang xử lý từng skill...

Giai đoạn 2-5: Sửa từng Skill
---
Đang sửa polar.md... ✓ (3 phút 50 giây)
Đang sửa mongodb.md... ✓ (2 phút 15 giây)
Đang sửa cloudflare-workers.md... ✓ (3 phút 05 giây)
Đang sửa nextjs.md... ✓ (1 phút 30 giây)

Tổng thời gian: 10 phút 40 giây
Tất cả vấn đề đã được giải quyết: 12/12

Lưu trữ logs? (y/n) y
✓ Đã chuyển sang logs.txt.2025-10-30.bak
```

## Định dạng file Log

Để có kết quả tốt nhất, `logs.txt` nên chứa:

```
[DẤU THỜI GIAN] ERROR: Tên-skill - Mô tả ngắn gọn
User asked: "Câu hỏi thực tế của người dùng"
Skill response: Điều gì đã xảy ra sai
Expected: Điều gì lẽ ra nên xảy ra (tùy chọn)

[DẤU THỜI GIAN] ERROR: Tên-skill - Một vấn đề khác
...
```

Ví dụ:
```
[2025-10-30 14:23:45] ERROR: MongoDB skill - aggregation pipeline syntax
User asked: "How to do $lookup with multiple conditions?"
Skill response: Showed basic $lookup, didn't explain multiple conditions
Expected: Should show $lookup with $match in pipeline

[2025-10-30 14:28:12] ERROR: MongoDB skill - missing index types
User asked: "What's the difference between single and compound indexes?"
Skill response: Only mentioned compound indexes
Expected: Should explain both types with examples
```

## Các vấn đề thường gặp được sửa

### 1. Các ví dụ mã nguồn sai

**Trước:**
```typescript
// Import sai
import { Client } from 'service';
```

**Sau:**
```typescript
// Import đúng kèm hướng dẫn cài đặt
// npm install @service/sdk

import { Client } from '@service/sdk';
```

### 2. Thiếu thông tin

**Trước:**
```markdown
## Xác thực

Sử dụng API keys để xác thực.
```

**Sau:**
```markdown
## Xác thực

### Lấy API Keys

1. Đăng ký tại service.com
2. Đi tới Settings → API Keys
3. Nhấp "Create New Key"
4. Sao chép key (chỉ hiển thị một lần)

### Sử dụng API Keys

```typescript
const client = new Client({
  apiKey: process.env.SERVICE_API_KEY
});
```

Lưu API key trong `.env`:
```
SERVICE_API_KEY=sk_live_...
```
```

### 3. Hướng dẫn không rõ ràng

**Trước:**
```markdown
Cấu hình webhooks trong dashboard.
```

**Sau:**
```markdown
### Cấu hình Webhooks

1. Điều hướng tới Dashboard → Settings → Webhooks
2. Nhấp "Add Endpoint"
3. Nhập URL webhook của bạn: `https://your-api.com/webhooks/service`
4. Chọn các sự kiện muốn nhận:
   - ✅ `payment.succeeded`
   - ✅ `payment.failed`
   - ✅ `subscription.created`
5. Nhấp "Create Endpoint"
6. Sao chép webhook secret để xác thực chữ ký
```

## Các loại sửa lỗi

### Lỗi cú pháp

- Import sai
- Lời gọi API sai
- Cấu hình không hợp lệ
- Lỗi kiểu dữ liệu (type errors)

### Lỗi logic

- Thuật toán sai
- Pattern sai
- Ví dụ bị lỗi
- Các luồng không đầy đủ

### Thiếu nội dung

- Không có ví dụ
- Thiếu các phần
- Danh sách không đầy đủ
- Không có xử lý lỗi

### Vấn đề về độ rõ ràng

- Hướng dẫn không rõ ràng
- Giải thích mơ hồ
- Thiếu ngữ cảnh
- Cấu trúc kém

## Thực hành tốt nhất

### Kiểm tra Log thường xuyên

```bash
# Sau khi sử dụng các skill, hãy kiểm tra logs
cat logs.txt

# Nếu tìm thấy lỗi, hãy sửa ngay
/skill:fix-logs [đường-dẫn-skill]

# Lưu trữ các log cũ
mv logs.txt logs.txt.$(date +%Y%m%d).bak
```

### Ghi Log lỗi chi tiết

Khi có lỗi xảy ra, hãy ghi log thật tốt:

```
✅ Log tốt:
[2025-10-30 10:23:45] ERROR: Polar skill - webhook verification
User asked: "How do I verify Polar webhooks?"
Skill response: Used verifyWebhookSignature() function
Issue: Function doesn't exist in Polar SDK
Expected: Should use polar.webhooks.verify()

❌ Log kém:
Xác thực Webhook bị sai
```

### Kiểm tra sau khi sửa

```bash
# 1. Sửa skill
/skill:fix-logs .claude/skills/polar.md

# 2. Kiểm tra với câu hỏi gốc
/ask [làm thế nào để xác thực Polar webhooks]

# 3. Xác minh câu trả lời đã đúng

# 4. Nếu vẫn sai, kiểm tra lại logs
```

## Các file đầu ra

Sau khi `/skill:fix-logs` hoàn tất:

### Skill đã cập nhật

```
.claude/skills/[tên-skill].md
```

Đã được sửa và cải thiện.

### Báo cáo sửa lỗi

```
plans/skill-fix-[tên]-[ngày].md
```

Chi tiết về những gì đã được sửa.

### Báo cáo xác thực

```
plans/skill-validation-[tên]-[ngày].md
```

Xác minh các bản sửa lỗi.

## Xử lý sự cố

### Không có file Logs

**Vấn đề:** logs.txt không tồn tại.

**Giải pháp:**
```bash
# Tạo logs.txt thủ công
touch logs.txt

# Thêm các lỗi theo định dạng hiển thị ở trên

# Sau đó chạy lệnh sửa
/skill:fix-logs [đường-dẫn-skill]
```

### Các bản sửa lỗi không hoạt động

**Vấn đề:** Đã áp dụng các bản sửa lỗi nhưng vấn đề vẫn còn.

**Kiểm tra:**
```bash
# 1. Xác minh file skill đã được cập nhật
cat .claude/skills/[tên].md

# 2. Kiểm tra kích hoạt skill
/ask [câu hỏi kiểm tra]

# 3. Kiểm tra xem câu hỏi có kích hoạt skill không
# Skill nên kích hoạt dựa trên phần "Khi nào sử dụng"

# 4. Nếu không kích hoạt, hãy cập nhật các điều kiện kích hoạt (triggers)
```

### Không tìm thấy vấn đề trong Skill

**Vấn đề:** Log đề cập đến vấn đề nhưng skill có vẻ vẫn đúng.

**Giải pháp:**
```bash
# Cung cấp thêm ngữ cảnh
/skill:fix-logs [đường-dẫn-skill với mô tả chi tiết vấn đề từ logs]

# Hoặc tìm kiếm thủ công
grep -n "từ-khóa" .claude/skills/[tên].md
```

## Sau khi sửa lỗi

Quy trình làm việc tiêu chuẩn:

```bash
# 1. Sửa skill
/skill:fix-logs .claude/skills/[tên].md

# 2. Xem lại các thay đổi
git diff .claude/skills/[tên].md

# 3. Kiểm tra skill
/ask [câu hỏi đã từng bị lỗi]

# 4. Nếu hài lòng, commit
/git cm

# 5. Lưu trữ log
mv logs.txt logs.txt.$(date +%Y%m%d).bak
```

## Các bước tiếp theo

- [/skill:create](/vi/docs/engineer/commands/skill/create) - Tạo skill mới
- [/ask](/vi/docs/engineer/commands/core/ask) - Sử dụng các skill đã sửa
- [Hướng dẫn phát triển Skill](/vi/docs/guides/skill-development) - Các chủ đề nâng cao

---

**Điểm chính**: `/skill:fix-logs` phân tích `logs.txt` để xác định các thất bại của skill, chẩn đoán nguyên nhân gốc rễ, áp dụng các bản sửa lỗi mục tiêu vào tài liệu skill và xác thực các điều chỉnh—giữ cho các skill agent của bạn luôn chính xác và hiệu quả dựa trên các lỗi sử dụng thực tế.
