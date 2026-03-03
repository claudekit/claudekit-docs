---
lang: vi
title: "ckm:debugging"
description: "Gỡ lỗi có hệ thống với phân tích nguyên nhân gốc"
section: marketing
kit: marketing
category: skills
order: 71
---

# Debugging

> Xác định và sửa bugs nhanh chóng thông qua quy trình debugging có cấu trúc và phân tích nguyên nhân gốc rễ.

## Skill Này Làm Gì

**Thách thức**: Bugs trong marketing tools có thể gây mất dữ liệu, sai số liệu analytics, email không gửi được hoặc campaign tracking bị lỗi — ảnh hưởng trực tiếp đến doanh thu. Debug ad-hoc tốn thời gian và không ngăn được recurrence.

**Giải pháp**: Skill debugging cung cấp quy trình 5 bước để isolate và fix bugs, kỹ thuật root cause analysis, patterns debugging phổ biến cho marketing tools và checklist để ngăn bugs tái phát.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi phát hiện error, bug report hoặc hành vi không mong đợi.

**Tường minh**: Kích hoạt qua prompt:
```
Activate debugging skill to debug [mô tả vấn đề]
```

## Tính Năng

### 1. Quy Trình Debug 5 Bước

**Bước 1: Reproduce**
Tái tạo bug một cách nhất quán trước khi cố gắng sửa.
```
- Môi trường: production / staging / local?
- Steps to reproduce: chính xác từng bước
- Expected vs Actual behavior
- Frequency: luôn xảy ra / đôi khi / chỉ khi...
- Error message đầy đủ (không rút gọn)
```

**Bước 2: Isolate**
Thu hẹp phạm vi bug đến component nhỏ nhất.
```javascript
// Binary search approach
// Chia code thành nửa, test từng nửa
// Tiếp tục chia cho đến khi tìm thấy bug

console.log('--- CHECKPOINT 1 ---', relevantState);
// ... code ...
console.log('--- CHECKPOINT 2 ---', relevantState);
```

**Bước 3: Understand**
Hiểu TẠI SAO bug xảy ra, không chỉ WHERE.
```
- Điều gì đã thay đổi gần đây? (git log --oneline -20)
- Race condition? Async/await issue?
- State mutation không mong muốn?
- External dependency thay đổi behavior?
```

**Bước 4: Fix**
Sửa root cause, không phải symptom.
```javascript
// Kém — fix symptom:
if (data === undefined) data = {};  // Tránh crash nhưng không fix root cause

// Tốt — fix root cause:
// Tìm tại sao data có thể undefined và xử lý đúng chỗ
```

**Bước 5: Verify và Prevent**
Xác nhận fix và ngăn bugs tương tự.
```
- Test fix trong môi trường tương tự
- Viết test case cho bug đã fix
- Review code tương tự có thể có cùng bug
- Add monitoring để detect nếu tái phát
```

### 2. Debugging Patterns Phổ Biến

**Async/Await Issues**:
```javascript
// Bug: Promise chưa resolve nhưng code tiếp tục
async function getLeadData(email) {
  const lead = await db.leads.findOne({ email }); // Quên await
  return lead.score; // TypeError: Cannot read property of undefined
}

// Fix: Đảm bảo tất cả async calls có await
```

**State Management**:
```javascript
// Bug: Mutating state trực tiếp trong React
const [leads, setLeads] = useState([]);
leads.push(newLead); // WRONG: mutation trực tiếp không trigger re-render

// Fix: Tạo new array
setLeads(prev => [...prev, newLead]);
```

**API/Webhook Issues**:
```bash
# Debug webhook không nhận được
# 1. Verify webhook URL đúng
# 2. Check ngrok hoặc tunnel setup cho local dev
# 3. Test với curl trực tiếp
curl -X POST https://your-api.com/webhooks/stripe \
  -H "Content-Type: application/json" \
  -d '{"type": "test", "data": {}}'

# 4. Check server logs real-time
pm2 logs app-name --lines 100
```

### 3. Debug Marketing-Specific Issues

**Tracking & Analytics**:
```javascript
// Debug GA4 event không ghi nhận
// Bật debug mode trong GTM
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'debug_test',
  'debug_mode': true
});

// Kiểm tra trong Chrome DevTools → Network
// Tìm requests đến google-analytics.com
```

**Email Delivery**:
```bash
# Debug email không được gửi
# 1. Kiểm tra email queue
node scripts/check-email-queue.js

# 2. Test SMTP connection
node -e "
const nodemailer = require('nodemailer');
const t = nodemailer.createTransporter({...});
t.verify((err) => console.log(err || 'Connected!'));
"

# 3. Check SPF, DKIM, DMARC
nslookup -type=TXT yourdomain.com
```

### 4. Error Logging Best Practices
Logging tốt giúp debug nhanh hơn trong production.

```typescript
// Structured logging với context
import pino from 'pino';
const logger = pino({ level: 'info' });

async function processLead(leadData: LeadData) {
  const traceId = crypto.randomUUID();
  logger.info({ traceId, leadId: leadData.id }, 'Processing lead');

  try {
    const result = await validateLead(leadData);
    logger.info({ traceId, leadId: leadData.id, score: result.score }, 'Lead processed');
    return result;
  } catch (error) {
    logger.error({ traceId, leadId: leadData.id, err: error }, 'Lead processing failed');
    throw error;
  }
}
```

## Điều Kiện Tiên Quyết

- Access vào logs (application logs, server logs)
- Ability to reproduce bug trong môi trường non-production
- Git history để identify recent changes

## Cấu Hình

**Debug tools setup**:
```bash
# Node.js debugging với inspector
node --inspect app.js
# Mở chrome://inspect trong Chrome

# Real-time log monitoring
pm2 logs --lines 200

# Database query logging (Drizzle)
const db = drizzle(pool, { logger: true });
```

## Thực Hành Tốt Nhất

**1. Đừng Đoán — Measure**
Hầu hết thời gian debug được lãng phí vào sai chỗ. REPRODUCE và LOG trước khi sửa.

**2. Thay Đổi Một Thứ Mỗi Lần**
Thay đổi nhiều thứ cùng lúc khi debug khiến không biết cái gì đã fix bug.

**3. Rubber Duck Debugging**
Giải thích bug cho người khác (hoặc Claude) thường giúp tự tìm ra vấn đề.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Conversion Tracking Sai
**Tình huống**: Conversion count trên dashboard cao hơn thực tế 3x.

**Quy trình**:
1. Kiểm tra event firing: GTM Preview Mode
2. Phát hiện: event fired 3 lần per conversion (duplicate listeners)
3. Root cause: useEffect không có cleanup, listener added mỗi re-render
4. Fix: `return () => removeEventListener(...)` trong useEffect

### Trường Hợp 2: Email Campaign Bounce Rate 40%
**Tình huống**: Email campaign bất thường có bounce rate rất cao.

**Quy trình**:
1. Kiểm tra bounce logs: `hard bounce` vs `soft bounce`
2. Phát hiện: 35% là invalid emails từ một batch import cụ thể
3. Root cause: Import script không validate email format
4. Fix: Thêm regex validation + MX record check trước import

## Xử Lý Sự Cố

**Vấn đề**: Bug không reproducible — "chỉ xảy ra đôi khi"
**Giải pháp**: Là race condition hoặc timing issue. Thêm logging chi tiết, chạy load test để reproduce.

**Vấn đề**: Bug chỉ xảy ra trên production, không ở local
**Giải pháp**: So sánh environment variables, database data, và network conditions giữa local và production.

## Skill Liên Quan

- [Code Review](/vi/docs/marketing/skills/code-review) - Phát hiện bugs trước khi deploy
- [Backend Development](/vi/docs/marketing/skills/backend-development) - Patterns tránh bugs phổ biến
- [Analytics](/vi/docs/marketing/skills/analytics) - Debug tracking issues

## Lệnh Liên Quan

- `/ckm:debugging` - Bắt đầu debug session
- `/ckm:code-review` - Review để tìm potential bugs
- `/ckm:test` - Viết tests để catch regression
