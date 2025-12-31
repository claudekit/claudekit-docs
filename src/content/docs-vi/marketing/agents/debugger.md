---
title: "Debugger"
description: "Điều tra các vấn đề kỹ thuật trong hệ thống tiếp thị, phân tích các vấn đề về hiệu suất và tối ưu hóa cơ sở hạ tầng"
section: marketing
category: agents
order: 8
---

# Debugger

> Thần thám phán kỹ thuật của bạn cho các vấn đề về cơ sở hạ tầng tiếp thị, lỗi hệ thống và các vấn đề về tích hợp.

## Công Việc Của Agent Này

**Vấn đề**: Nền tảng email của bạn dừng gửi. Phân tích trang đích của bạn không theo dõi. Tích hợp CRM bị hỏng qua đêm. Bạn đang mất khách hàng tiềm năng và không biết tại sao.

Tiếp thị chạy trên cơ sở hạ tầng kỹ thuật phức tạp - API, cơ sở dữ liệu, công cụ của bên thứ ba, hệ thống theo dõi. Khi có gì đó hỏng, đội ngũ của bạn không có kiến thức kỹ thuật để chẩn đoán nó. Bạn mở các vé hỗ trợ và đợi. Trong khi đó, khách hàng tiềm năng bị mất.

**Giải pháp**: Debugger là kỹ sư cấp cao của bạn người điều tra các vấn đề về hệ thống tiếp thị, phân tích nhật ký, kiểm tra các cấu trúc cơ sở dữ liệu, chẩn đoán các lỗi tích hợp và cung cấp các giải pháp kỹ thuật. Hãy nghĩ về nó như có hỗ trợ kỹ thuật trực tiếp cho toàn bộ ngăn xếp tiếp thị của bạn.

Không còn chờ đợi trợ giúp từ kỹ thuật. Không còn mất khách hàng tiềm năng do các vấn đề kỹ thuật.

## Bắt Đầu Nhanh

Ví dụ 30 giây - chẩn đoán lỗi gửi email:

```
Bạn: "Chiến dịch email được lên lịch lúc 10 sáng không gửi"

debugger: Điều tra lỗi hệ thống email...

ĐÁNH GIÁ INITIAL:
→ Vấn đề: Chiến dịch 5.000 người nhận không gửi được
→ Tác động: CAO (công bố khởi động nhạy cảm về thời gian)
→ Trạng thái: Chiến dịch được đánh dấu "Failed" trong dashboard

COLLECTION DỮ LIỆU:
→ Kiểm tra nhật ký nền tảng email...
→ Đánh giá phản hồi API...
→ Kiểm tra các bản ghi cơ sở dữ liệu...
→ Kiểm tra kết nối dịch vụ email...

ROOT CAUSE IDENTIFIED:

Vấn đề: Xác thực API dịch vụ email không thành công
Mã lỗi: 401 Không được phép
Thông báo lỗi: "API key hết hạn"

Dòng thời gian:
→ 09:45 sáng: Chiến dịch được lên lịch
→ 10:00 sáng: Gửi được kích hoạt
→ 10:00 sáng: Xác thực API không thành công
→ 10:01 sáng: Thử lại không thành công (3 lần cố gắng)
→ 10:02 sáng: Chiến dịch được đánh dấu failed

Phân tích kỹ thuật:
→ API key: Hết hạn vào 15 tháng 3 (hôm qua)
→ Thông báo: Cảnh báo hết hạn được gửi đến email nhóm cũ
→ Giám sát: Không có cảnh báo được cấu hình cho các lỗi auth

Bằng chứng (Nhật ký API):
\`\`\`
POST /v3/mail/send
Authorization: Bearer sk_live_abc...expired
Response: 401 Unauthorized
Body: {"error": "API key expired. Generate new key at dashboard.sendgrid.com"}
\`\`\`

FIX NGAY LẬP TỨC (< 5 phút):

1. Tạo API key mới:
   → Đăng nhập vào bảng điều khiển SendGrid
   → Settings → API Keys → Tạo API Key
   → Sao chép key mới: sk_live_xyz...

2. Cập nhật biến môi trường:
   → Sản xuất: EMAIL_API_KEY=sk_live_xyz...
   → Khởi động lại dịch vụ email (nếu cần)

3. Gửi lại chiến dịch:
   → Xác minh API key hoạt động (gửi thử)
   → Kích hoạt gửi lại chiến dịch
   → Theo dõi 100 lần gửi đầu tiên để đảm bảo thành công

FIX DÀI HẠN:

1. Cập nhật địa chỉ email nhóm cho các thông báo API
2. Thiết lập cảnh báo giám sát cho:
   → Lỗi xác thực API
   → Hết hạn API key (cảnh báo 30 ngày)
   → Tỷ lệ lỗi gửi email >5%

3. Tài liệu hóa quy trình xoay vòng API key
4. Thêm hết hạn API key vào lịch (xem xét hàng quý)

BIỆN PHÁP PHÒNG CHỐNG:

\`\`\`javascript
// Thêm kiểm tra tình trạng sức khỏe API vào giám sát

async function checkEmailServiceHealth() {
  try {
    const response = await emailAPI.verify();
    if (!response.isValid) {
      alert('Email API authentication issue');
    }

    // Kiểm tra hết hạn key
    const daysUntilExpiry = response.keyExpiresIn;
    if (daysUntilExpiry < 30) {
      warn(\`Email API key expires in \${daysUntilExpiry} days\`);
    }
  } catch (error) {
    alert('Email service unreachable', error);
  }
}

// Chạy kiểm tra tình trạng sức khỏe mỗi giờ
setInterval(checkEmailServiceHealth, 60 * 60 * 1000);
\`\`\`

ĐÁNH GIÁ TÁC ĐỘNG:

Hiện tại: 5.000 người đăng ký miss email khởi động (trễ 1 giờ)
Khôi phục dự kiến: Chiến dịch được gửi vào lúc 10:30 sáng
Tác động về doanh thu: Tối thiểu nếu gửi trong 2 giờ

HÀNH ĐỘNG YÊỚI:
1. Tạo API key mới ngay lập tức
2. Kiểm tra với lần gửi duy nhất
3. Gửi lại chiến dịch cho toàn bộ danh sách

Bạn muốn tôi hướng dẫn bạn qua quá trình tạo API key không?
```

## Khả Năng

### 1. System Diagnostics

Điều tra các vấn đề về cơ sở hạ tầng và tích hợp.

**Ví dụ - CRM Integration Failure:**
```
Bạn: "Khách hàng tiềm năng từ trang đích dừng đồng bộ với HubSpot"

debugger: Điều tra lỗi đồng bộ CRM...

QUY TRÌNH CHẨN ĐOÁN:

1. Kiểm tra lượt gửi khách hàng tiềm năng gần đây:
   → Lần đồng bộ thành công cuối cùng: 2 ngày trước
   → Đồng bộ không thành công: 47 khách hàng tiềm năng trong 48 giờ qua
   → Mẫu lỗi: Tất cả đều không thành công với cùng mã lỗi

2. Phân tích nhật ký lỗi:
   \`\`\`
   [ERROR] HubSpot API: 429 Quá nhiều yêu cầu
   Giới hạn tỷ lệ: 100 yêu cầu mỗi 10 giây
   Retry-After: 8 giây
   \`\`\`

3. Đánh giá sử dụng API:
   → Tỷ lệ hiện tại: 150 yêu cầu mỗi 10 giây
   → Giới hạn HubSpot: 100 yêu cầu mỗi 10 giây
   → Nguyên nhân: Lưu lượng trang đích tăng 60% (Black Friday)

ROOT CAUSE:
→ Tăng đột biến lưu lượng vượt quá giới hạn tỷ lệ API
→ Không triển khai logic thử lại
→ Khách hàng tiềm năng không thành công không được xếp hàng chờ thử lại

SOLUTION:

Sửa chữa ngay lập tức (thử lại khách hàng tiềm năng không thành công):
\`\`\`javascript
// Hàng chờ thử lại cho các đồng bộ không thành công
const failedLeads = await getFailedLeads(48); // hours

for (const lead of failedLeads) {
  await retryWithBackoff(async () => {
    await hubspot.createContact(lead);
  }, { maxRetries: 3, baseDelay: 2000 });
}
\`\`\`

Sửa chữa dài hạn (triển khai giới hạn tỷ lệ):
\`\`\`javascript
// Triển khai giới hạn tỷ lệ
const rateLimiter = new RateLimiter({
  tokensPerInterval: 90, // Dưới giới hạn để đảm bảo
  interval: 10000, // 10 giây
  fireImmediately: true
});

async function syncToHubSpot(lead) {
  await rateLimiter.removeTokens(1); // Chờ slot giới hạn tỷ lệ
  try {
    await hubspot.createContact(lead);
  } catch (error) {
    if (error.statusCode === 429) {
      // Xếp hàng chờ thử lại thay vì thất bại
      await queueForRetry(lead);
    }
    throw error;
  }
}
\`\`\`

KẾT QUẢ DỰ KIẾN:
→ 47 khách hàng tiềm năng không thành công được đồng bộ trong 30 phút
→ Khách hàng tiềm năng trong tương lai đồng bộ với tuân thủ giới hạn tỷ lệ
→ Không còn lỗi 429
```

### 2. Database Analysis

Truy vấn cơ sở dữ liệu để có thông tin chi tiết và khắc phục sự cố.

**Ví dụ:**
```
Bạn: "Tại sao tỷ lệ mở email trong dashboard khác với SendGrid?"

debugger: Điều tra sự khác biệt dữ liệu...

QUERY DATABASE:

\`\`\`sql
-- Kiểm tra dữ liệu theo dõi email
SELECT
  campaign_id,
  total_sent,
  opened,
  opened * 100.0 / total_sent AS open_rate_db
FROM email_campaigns
WHERE sent_at > NOW() - INTERVAL '7 days';
\`\`\`

Kết quả (Cơ sở dữ liệu của chúng tôi):
→ Chiến dịch: Khởi động Sản phẩm
→ Tổng được gửi: 10.000
→ Mở: 2.800
→ Tỷ lệ mở: 28%

Bảng điều khiển SendGrid:
→ Tổng được gửi: 10.000
→ Mở: 1.200
→ Tỷ lệ mở: 12%

SỰ KHÁC BIỆT ĐƯỢC TÌM THẤY: 16% chênh lệch

PHÂN TÍCH ROOT CAUSE:

Truy vấn nhật ký pixel theo dõi:
\`\`\`sql
-- Kiểm tra các lần kích hoạt pixel theo dõi
SELECT
  campaign_id,
  COUNT(DISTINCT email_address) AS unique_opens,
  COUNT(*) AS total_opens
FROM email_tracking_pixels
WHERE campaign_id = 'product-launch'
GROUP BY campaign_id;
\`\`\`

Kết quả:
→ Mở duy nhất: 2.800 ✓ (khớp với cơ sở dữ liệu)
→ Tổng mở: 8.400 (mỗi người dùng mở nhiều lần)

Truy vấn API SendGrid:
\`\`\`javascript
const stats = await sendgrid.campaigns.get('product-launch').stats();
console.log(stats.unique_opens); // 1,200
\`\`\`

VẤN ĐỀ ĐƯỢC XÁC ĐỊNH:

Hai hệ thống theo dõi đang chạy:
1. Theo dõi gốc SendGrid (1.200 mở)
2. Pixel theo dõi tùy chỉnh (2.800 mở)

Pixel tùy chỉnh đang đếm kép:
→ Tìm nạp trước máy khách email (Apple Mail Privacy Protection)
→ Mở Bot/máy quét (bộ quét bảo mật)
→ Dịch vụ proxy hình ảnh (Gmail, Outlook)

SendGrid lọc những cái này, pixel tùy chỉnh thì không.

SOLUTION:

Tin tưởng dữ liệu SendGrid (chính xác):
→ Tỷ lệ mở: 12% (chính xác)
→ Bảng điều khiển của bạn: 28% (bị thổi phồng)

Sửa bảng điều khiển để sử dụng SendGrid làm nguồn chân lý:
\`\`\`javascript
// Đồng bộ từ SendGrid thay vì theo dõi tùy chỉnh
async function updateCampaignStats(campaignId) {
  const stats = await sendgrid.campaigns.get(campaignId).stats();

  await db.execute(\`
    UPDATE email_campaigns
    SET
      opened = ?,
      clicked = ?,
      bounced = ?,
      updated_at = NOW()
    WHERE campaign_id = ?
  \`, [stats.unique_opens, stats.unique_clicks, stats.bounces, campaignId]);
}
\`\`\`

KHUYẾN NGHỊ: Loại bỏ pixel theo dõi tùy chỉnh, sử dụng sự kiện webhook SendGrid thay thế.
```

### 3. Performance Debugging

Xác định các nút thắt cổ chai và cơ hội tối ưu hóa.

**Ví dụ - Slow Landing Page Load:**
```
Bạn: "Trang đích mất 12 giây để tải"

debugger: Phân tích nút thắt cổ chai hiệu suất...

PROFILING HIỆU SUẤT:

Sử dụng Chrome DevTools + Lighthouse:

1. Phân tích thác nước mạng:
   → HTML: 200ms ✓
   → CSS: 1.2s (blocking) ✗
   → JavaScript: 8.4s (blocking) ✗
   → Hình ảnh: 3.8s ✗
   → Script của bên thứ ba: 4.2s ✗

2. Tài nguyên blocking được xác định:
   \`\`\`
   <script src="analytics.js"> (1.2s)
   <script src="chatbot.js"> (3.8s)
   <script src="heatmap.js"> (1.6s)
   <link rel="stylesheet" href="styles.css"> (1.2s)
   \`\`\`

3. Hiệu suất truy vấn cơ sở dữ liệu:
   → Tải trang kích hoạt 8 truy vấn cơ sở dữ liệu
   → Truy vấn 1: 200ms (testimonials) ✗
   → Truy vấn 2: 150ms (features) ✗
   → Truy vấn 3-8: <10ms mỗi cái ✓

ROOT CAUSE:

Vấn đề blocking nhiều:
1. Script đồng bộ trong <head> (6.6s tổng cộng)
2. Hình ảnh không được tối ưu hóa (3.8s)
3. Truy vấn cơ sở dữ liệu N+1 (testimonials đang tải)
4. Không có bộ nhớ cache được bật

TỐI ƯU HÓA:

1. Hoãn script không quan trọng:
\`\`\`html
<!-- Trước -->
<script src="chatbot.js"></script>

<!-- Sau -->
<script defer src="chatbot.js"></script>
\`\`\`

2. Triển khai bộ nhớ cache:
\`\`\`javascript
// Bộ nhớ cache testimonials (thay đổi hiếm khi)
const testimonials = await cache.get('testimonials', async () => {
  return await db.query('SELECT * FROM testimonials LIMIT 5');
}, { ttl: 3600 }); // Bộ nhớ cache 1 giờ
\`\`\`

3. Tối ưu hóa hình ảnh:
\`\`\`html
<!-- Sử dụng WebP, lazy loading, responsive sizes -->
<picture>
  <source srcset="hero-800w.webp 800w, hero-1200w.webp 1200w" type="image/webp">
  <img src="hero-800w.jpg" loading="lazy" alt="Hero">
</picture>
\`\`\`

4. Preconnect to third-party domains:
\`\`\`html
<link rel="preconnect" href="https://analytics.example.com">
<link rel="preconnect" href="https://chatbot.example.com">
\`\`\`

CẢI THIỆN DỰ KIẾN:

Trước: 12 giây thời gian tải
Sau khi tối ưu hóa: 2,1 giây (-82%)

Điểm Lighthouse:
→ Trước: 28/100
→ Sau: 92/100

Tác động chuyển đổi:
→ Mỗi khoảng 1 giây delay = ~7% mất chuyển đổi
→ Hiện tại: 12 giây → ~60% mất chuyển đổi
→ Sau: 2 giây → ~7% mất chuyển đổi
→ Nâng cao chuyển đổi dự kiến: +53%
```

### 4. Integration Testing

Xác minh các kết nối công cụ của bên thứ ba hoạt động chính xác.

**Ví dụ:**
```
Bạn: "Kiểm tra xem tất cả các tích hợp tiếp thị của chúng tôi có hoạt động không"

debugger: Chạy kiểm tra tình trạng sức khỏe tích hợp...

KẾT QUẢ KIỂM TRA TÍCH HỢP:

1. SendGrid (Email):
   ✓ Xác thực API thành công
   ✓ Email thử được gửi
   ✓ Endpoint webhook phản hồi
   ⚠ Miền người gửi không được xác minh (ảnh hưởng khả năng gửi)

2. HubSpot (CRM):
   ✓ Kết nối API thành công
   ✓ Đồng bộ liên hệ hoạt động
   ✗ Thuộc tính tùy chỉnh bị thiếu (last_campaign_clicked)

3. Google Analytics 4:
   ✓ Mã theo dõi được cài đặt
   ✗ Sự kiện không kích hoạt (theo dõi chuyển đổi bị hỏng)
   Lỗi: ID đo lường GA4 không khớp

4. Facebook Pixel:
   ✓ Pixel được cài đặt
   ✓ Sự kiện PageView kích hoạt
   ⚠ Sự kiện Mua bị thiếu thông số

5. Stripe (Payments):
   ✓ API keys hợp lệ
   ✓ Webhook nhận sự kiện
   ✓ Tất cả các kiểm tra đều vượt qua

6. Intercom (Chat):
   ✗ Widget không tải (Chính sách CSP chặn)

KHUYẾN NGHỊ:

Ưu tiên cao:
1. Sửa ID đo lường GA4 (phân tích không theo dõi)
2. Mở khóa widget Intercom (hỗ trợ khách hàng không khả dụng)
3. Thêm thuộc tính tùy chỉnh HubSpot (báo cáo không đầy đủ)

Ưu tiên trung bình:
4. Xác minh miền người gửi SendGrid
5. Thêm tham số Mua Facebook Pixel

Bạn có muốn tôi giúp bạn sửa các vấn đề này từng cái một không?
```

### 5. Log Analysis

Thu thập và phân tích nhật ký từ các hệ thống khác nhau.

**Ví dụ:**
```
Bạn: "Tìm lý do tại sao chuyển đổi thanh toán giảm hôm qua"

debugger: Phân tích nhật ký hệ thống...

COLLECT NHẬT KÝ:

1. Nhật ký ứng dụng (48 giờ qua):
\`\`\`
grep "checkout" /var/log/app.log | grep "error"
\`\`\`

Tìm thấy 847 lỗi trong 24 giờ qua (bình thường: 12/ngày)

2. Lỗi mẫu:
\`\`\`
[ERROR] Stripe API: card_declined (code: generic_decline) - 412 lần xuất hiện
[ERROR] Timeout connecting to payment-gateway.com - 287 lần xuất hiện
[ERROR] Database connection pool exhausted - 148 lần xuất hiện
\`\`\`

3. Tương quan dòng thời gian:
→ 15:00: Tỷ lệ lỗi bình thường (1-2 mỗi giờ)
→ 16:00: Tăng lỗi bắt đầu (+800%)
→ 16:05: Nhóm kết nối cơ sở dữ liệu cạn kiệt
→ 16:30: Timeout Stripe tăng
→ 17:00: Tỷ lệ chuyển đổi giảm 60%

ROOT CAUSE:

Rò rỉ kết nối cơ sở dữ liệu:
→ Quy trình thanh toán mở kết nối DB
→ Nếu thanh toán không thành công, kết nối không được phát hành
→ Nhóm cạn kiệt sau 150 giao dịch không thành công
→ Thanh toán mới không thể lấy kết nối DB
→ Cuộc gọi API Stripe hết thời gian chờ kết nối DB

VẤN ĐỀ MÃ:
\`\`\`javascript
// Lỗi: Kết nối không được phát hành khi lỗi
async function processCheckout(order) {
  const conn = await db.getConnection();
  try {
    await conn.query('INSERT INTO orders ...');
    await stripe.charge(order);
  } catch (error) {
    // LỖI: conn.release() không bao giờ được gọi nếu stripe.charge thất bại!
    throw error;
  }
  conn.release();
}
\`\`\`

SỬA CHỮA:
\`\`\`javascript
async function processCheckout(order) {
  const conn = await db.getConnection();
  try {
    await conn.query('INSERT INTO orders ...');
    await stripe.charge(order);
  } catch (error) {
    throw error;
  } finally {
    conn.release(); // Luôn phát hành, thậm chí khi lỗi
  }
}
\`\`\`

KẾ HOẠCH PHỤC HỒI:
1. Triển khai sửa chữa ngay lập tức
2. Khởi động lại máy chủ ứng dụng (xóa các kết nối bị kẹt)
3. Theo dõi sử dụng nhóm kết nối
4. Thêm cảnh báo cho cạn kiệt nhóm

TÁC ĐỘNG:
→ Mất chuyển đổi: ~200 (ước tính)
→ Mất doanh thu: $24.000 (đơn hàng bình quân $120)
→ Thời gian sửa: 30 phút
```

## Khi Nào Sử Dụng Debugger

**Perfect for:**
- Lỗi tích hợp email/CRM
- Vấn đề kỹ thuật trang đích
- Vấn đề theo dõi phân tích
- Tối ưu hóa truy vấn cơ sở dữ liệu
- Suy giảm hiệu suất hệ thống
- Gỡ lỗi API của bên thứ ba

**Not needed for:**
- Vấn đề hiệu suất chiến dịch (sử dụng Campaign Debugger)
- Vấn đề chất lượng nội dung (sử dụng Content Reviewer)
- Câu hỏi chiến lược (sử dụng Brainstormer)

## Ví Dụ Quy Trình Làm Việc

### Workflow 1: Email System Down

```
1. Bạn: "Emails aren't sending"

2. debugger: Emergency diagnostics
   - Kiểm tra trạng thái dịch vụ email
   - Kiểm tra xác thực API
   - Xem xét nhật ký lỗi
   - Xác định API key hết hạn

3. Output:
   ROOT CAUSE: API key hết hạn
   FIX: Tạo key mới (5 phút)
   IMPACT: 5.000 email không gửi

4. Bạn tạo API key mới

5. debugger: Xác thực sửa, gửi lại chiến dịch
```

### Workflow 2: Landing Page Slow

```
1. Bạn: "Landing page mất 12 giây để tải"

2. debugger: Phân tích hiệu suất
   - Hồ sơ tải trang
   - Xác định script blocking
   - Tìm hình ảnh không được tối ưu hóa
   - Phát hiện truy vấn N+1 cơ sở dữ liệu

3. Output:
   BOTTLENECKS:
   → Scripts: 6.6s (hoãn chúng)
   → Hình ảnh: 3.8s (tối ưu hóa/lazy load)
   → DB: 350ms (bộ nhớ cache testimonials)

   Dự kiến: 12 giây → 2 giây (-82%)

4. Bạn triển khai tối ưu hóa

5. Chuyển đổi cải thiện +53%
```

## Best Practices

### 1. Check Logs First

**Bad:** Đoán xem có gì sai
**Good:** Đọc nhật ký, tìm bằng chứng

Nhật ký cho bạn biết chính xác những gì đã thất bại và khi nào.

### 2. Reproduce the Issue

**Bad:** "Nó bị hỏng cho một số người dùng"
**Good:** "Các bước để tái tạo: 1. Truy cập /checkout 2. Nhập thẻ không hợp lệ..."

Các vấn đề có thể tái tạo là có thể gỡ lỗi.

### 3. Monitor After Fixes

**Bad:** Triển khai sửa, chuyển tiếp
**Good:** Triển khai sửa, xem các chỉ số trong 1 giờ

Xác minh sửa của bạn thực sự hoạt động.

## Related Agents

- [Campaign Debugger](/docs/marketing/agents/campaign-debugger) - Vấn đề hiệu suất cụ thể cho tiếp thị
- [Code Reviewer](/docs/marketing/agents/code-reviewer) - Kiểm tra chất lượng mã trước triển khai
- [Campaign Manager](/docs/marketing/agents/campaign-manager) - Thực thi chiến dịch sau khi hệ thống được xác minh

## Related Commands

- `/debug` - Điều tra vấn đề hệ thống
- `/logs` - Phân tích nhật ký ứng dụng
- `/test` - Chạy kiểm tra tình trạng sức khỏe tích hợp

---

**Cơ sở hạ tầng tiếp thị hỏng. Khi nó hỏng, bạn cần người có thể sửa nó nhanh.**

Sẵn sàng chẩn đoán và giải quyết các vấn đề kỹ thuật? Bắt đầu gỡ lỗi.
