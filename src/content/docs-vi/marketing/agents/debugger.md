---
title: "Trình Gỡ Lỗi (Debugger)"
description: "Điều tra các vấn đề kỹ thuật trong hệ thống tiếp thị, phân tích các vấn đề về hiệu suất và tối ưu hóa cơ sở hạ tầng"
section: marketing
category: agents
order: 8
lang: vi
---

# Debugger (Trình Gỡ Lỗi)

> Thám tử kỹ thuật của bạn cho các vấn đề về cơ sở hạ tầng tiếp thị, lỗi hệ thống và các vấn đề về tích hợp.

## Đại lý này làm gì

**Vấn đề**: Nền tảng email của bạn ngừng gửi. Analytics trên trang đích không theo dõi được. Tích hợp CRM bị hỏng sau một đêm. Bạn đang mất khách hàng tiềm năng và không biết tại sao.

Tiếp thị chạy trên cơ sở hạ tầng kỹ thuật phức tạp - API, cơ sở dữ liệu, công cụ của bên thứ ba, hệ thống theo dõi. Khi có gì đó hỏng, đội ngũ của bạn không có đủ chiều sâu kỹ thuật để chẩn đoán. Bạn mở các phiếu hỗ trợ và chờ đợi. Trong khi đó, các khách hàng tiềm năng bị mất đi.

**Giải pháp**: Debugger là kỹ sư cấp cao của bạn, người điều tra các vấn đề về hệ thống tiếp thị, phân tích nhật ký, kiểm tra cấu trúc cơ sở dữ liệu, chẩn đoán lỗi tích hợp và cung cấp các giải pháp kỹ thuật. Hãy coi đó như việc có hỗ trợ kỹ thuật túc trực cho toàn bộ hệ thống tiếp thị (marketing stack) của bạn.

Không còn chờ đợi sự trợ giúp từ kỹ thuật. Không còn mất khách hàng tiềm năng do các vấn đề kỹ thuật.

## Bắt đầu nhanh

Ví dụ 30 giây - chẩn đoán lỗi gửi email:

```
Bạn: "Chiến dịch email được lên lịch lúc 10 sáng đã không được gửi"

debugger: Đang điều tra lỗi hệ thống email...

ĐÁNH GIÁ BAN ĐẦU:
→ Vấn đề: Chiến dịch gửi cho 5,000 người nhận không thành công
→ Tác động: CAO (thông báo ra mắt quan trọng về thời gian)
→ Trạng thái: Chiến dịch được đánh dấu "Thất bại" (Failed) trong dashboard

THU THẬP DỮ LIỆU:
→ Kiểm tra nhật ký (logs) nền tảng email...
→ Xem xét các phản hồi API...
→ Kiểm tra các bản ghi cơ sở dữ liệu...
→ Kiểm tra kết nối dịch vụ email...

XÁC ĐỊNH NGUYÊN NHÂN GỐC RỄ:

Vấn đề: Xác thực API dịch vụ email thất bại
Mã lỗi: 401 Unauthorized
Thông báo lỗi: "API key expired" (API key đã hết hạn)

Dòng thời gian:
→ 09:45 AM: Lên lịch chiến dịch
→ 10:00 AM: Kích hoạt gửi
→ 10:00 AM: Xác thực API thất bại
→ 10:01 AM: Thử lại thất bại (3 lần cố gắng)
→ 10:02 AM: Chiến dịch được đánh dấu thất bại

Phân tích kỹ thuật:
→ API key: Hết hạn vào ngày 15 tháng 3 (hôm qua)
→ Thông báo: Cảnh báo hết hạn đã được gửi đến email nhóm cũ
→ Giám sát: Chưa cấu hình cảnh báo cho các lỗi xác thực

Bằng chứng (nhật ký API):
```
POST /v3/mail/send
Authorization: Bearer sk_live_abc...expired
Response: 401 Unauthorized
Body: {"error": "API key expired. Generate new key at dashboard.sendgrid.com"}
```

KHẮC PHỤC NGAY LẬP TỨC (< 5 phút):

1. Tạo API key mới:
   → Đăng nhập vào dashboard SendGrid
   → Settings → API Keys → Create API Key
   → Sao chép key mới: sk_live_xyz...

2. Cập nhật biến môi trường:
   → Production: EMAIL_API_KEY=sk_live_xyz...
   → Khởi động lại dịch vụ email (nếu cần)

3. Gửi lại chiến dịch:
   → Xác minh API key hoạt động (gửi thử)
   → Kích hoạt gửi lại chiến dịch
   → Theo dõi 100 lượt gửi đầu tiên để đảm bảo thành công

KHẮC PHỤC DÀI HẠN:

1. Cập nhật địa chỉ email nhóm cho các thông báo API
2. Thiết lập cảnh báo giám sát cho:
   → Lỗi xác thực API
   → Hết hạn API key (cảnh báo trước 30 ngày)
   → Tỷ lệ gửi email thất bại >5%

3. Tài liệu hóa quy trình thay đổi (rotation) API key
4. Thêm thời hạn API key vào lịch (đánh giá hàng quý)

BIỆN PHÁP PHÒNG NGỪA:

```javascript
// Thêm kiểm tra sức khỏe API vào hệ thống giám sát

async function checkEmailServiceHealth() {
  try {
    const response = await emailAPI.verify();
    if (!response.isValid) {
      alert('Vấn đề xác thực API Email');
    }

    // Kiểm tra hết hạn key
    const daysUntilExpiry = response.keyExpiresIn;
    if (daysUntilExpiry < 30) {
      warn(`API key Email sẽ hết hạn sau ${daysUntilExpiry} ngày`);
    }
  } catch (error) {
    alert('Không thể kết nối dịch vụ Email', error);
  }
}

// Chạy kiểm tra sức khỏe mỗi giờ
setInterval(checkEmailServiceHealth, 60 * 60 * 1000);
```

ĐÁNH GIÁ TÁC ĐỘNG:

Hiện tại: 5,000 người đăng ký đã bỏ lỡ email ra mắt (trễ 1 giờ)
Phục hồi dự kiến: Chiến dịch được gửi trước 10:30 AM
Tác động doanh thu: Tối thiểu nếu được gửi trong vòng 2 giờ

HÀNH ĐỘNG CẦN THIẾT:
1. Tạo API key mới ngay lập tức
2. Kiểm tra với một lượt gửi đơn lẻ
3. Gửi lại chiến dịch cho toàn bộ danh sách

Bạn có muốn tôi hướng dẫn bạn cách tạo API key không?
```

## Khả năng

### 1. Chẩn đoán hệ thống

Điều tra các vấn đề về cơ sở hạ tầng và tích hợp.

**Ví dụ - Lỗi tích hợp CRM:**
```
Bạn: "Khách hàng tiềm năng từ trang đích đã ngừng đồng bộ hóa với HubSpot"

debugger: Đang điều tra lỗi đồng bộ CRM...

QUY TRÌNH CHẨN ĐOÁN:

1. Kiểm tra các lượt đăng ký gần đây:
   → Lần đồng bộ thành công cuối cùng: 2 ngày trước
   → Các lượt đồng bộ thất bại: 47 khách hàng tiềm năng trong 48 giờ qua
   → Mô hình lỗi: Tất cả đều thất bại với cùng một mã lỗi

2. Phân tích nhật ký lỗi:
   ```
   [ERROR] HubSpot API: 429 Too Many Requests
   Rate limit: 100 requests per 10 seconds
   Retry-After: 8 seconds
   ```

3. Xem xét việc sử dụng API:
   → Tốc độ hiện tại: 150 yêu cầu mỗi 10 giây
   → Giới hạn của HubSpot: 100 yêu cầu mỗi 10 giây
   → Nguyên nhân: Lưu lượng truy cập trang đích tăng 60% (dịp Black Friday)

NGUYÊN NHÂN GỐC RỄ:
→ Lưu lượng tăng đột biến vượt quá giới hạn tốc độ (rate limit) của API
→ Chưa triển khai logic thử lại (retry logic)
→ Các khách hàng tiềm năng thất bại không được đưa vào hàng đợi để thử lại

GIẢI PHÁP:

Khắc phục ngay lập tức (thử lại cho các khách hàng thất bại):
```javascript
// Hàng đợi thử lại cho các lượt đồng bộ thất bại
const failedLeads = await getFailedLeads(48); // giờ

for (const lead of failedLeads) {
  await retryWithBackoff(async () => {
    await hubspot.createContact(lead);
  }, { maxRetries: 3, baseDelay: 2000 });
}
```

Khắc phục dài hạn (triển khai giới hạn tốc độ):
```javascript
// Triển khai bộ giới hạn tốc độ (Rate Limiter)
const rateLimiter = new RateLimiter({
  tokensPerInterval: 90, // Dưới giới hạn để đảm bảo an toàn
  interval: 10000, // 10 giây
  fireImmediately: true
});

async function syncToHubSpot(lead) {
  await rateLimiter.removeTokens(1); // Chờ đến lượt theo giới hạn tốc độ
  try {
    await hubspot.createContact(lead);
  } catch (error) {
    if (error.statusCode === 429) {
      // Đưa vào hàng đợi thử lại thay vì báo lỗi ngay
      await queueForRetry(lead);
    }
    throw error;
  }
}
```

KẾT QUẢ DỰ KIẾN:
→ 47 khách hàng tiềm năng thất bại được đồng bộ trong vòng 30 phút
→ Các khách hàng tương lai được đồng bộ tuân thủ giới hạn tốc độ
→ Không còn lỗi 429
```

### 2. Phân tích cơ sở dữ liệu

Truy vấn cơ sở dữ liệu để tìm hiểu thông tin và khắc phục sự cố.

**Ví dụ:**
```
Bạn: "Tại sao tỷ lệ mở email trong dashboard lại khác với SendGrid?"

debugger: Đang điều tra sự sai lệch dữ liệu...

TRUY VẤN CƠ SỞ DỮ LIỆU:

```sql
-- Kiểm tra dữ liệu theo dõi email
SELECT
  campaign_id,
  total_sent,
  opened,
  opened * 100.0 / total_sent AS open_rate_db
FROM email_campaigns
WHERE sent_at > NOW() - INTERVAL '7 days';
```

Kết quả (Cơ sở dữ liệu của chúng ta):
→ Chiến dịch: Ra mắt sản phẩm
→ Tổng lượt gửi: 10,000
→ Đã mở: 2,800
→ Tỷ lệ mở: 28%

Dashboard SendGrid:
→ Tổng lượt gửi: 10,000
→ Đã mở: 1,200
→ Tỷ lệ mở: 12%

PHÁT HIỆN SAI LỆCH: chênh lệch 16%

PHÂN TÍCH NGUYÊN NHÂN GỐC RỄ:

Truy vấn nhật ký pixel theo dõi:
```sql
-- Kiểm tra các lần kích hoạt pixel theo dõi
SELECT
  campaign_id,
  COUNT(DISTINCT email_address) AS unique_opens,
  COUNT(*) AS total_opens
FROM email_tracking_pixels
WHERE campaign_id = 'product-launch'
GROUP BY campaign_id;
```

Kết quả:
→ Lượt mở duy nhất: 2,800 ✓ (khớp với cơ sở dữ liệu)
→ Tổng lượt mở: 8,400 (nhiều lượt mở trên mỗi người dùng)

Truy vấn API SendGrid:
```javascript
const stats = await sendgrid.campaigns.get('product-launch').stats();
console.log(stats.unique_opens); // 1,200
```

VẤN ĐỀ ĐƯỢC XÁC ĐỊNH:

Hai hệ thống theo dõi đang chạy song song:
1. Theo dõi gốc của SendGrid (1,200 lượt mở)
2. Pixel theo dõi tùy chỉnh (2,800 lượt mở)

Pixel tùy chỉnh đang đếm thừa:
→ Việc nạp trước (pre-fetch) của ứng dụng email (như Apple Mail Privacy Protection)
→ Lượt mở từ bot/máy quét (máy quét bảo mật)
→ Các dịch vụ proxy hình ảnh (Gmail, Outlook)

SendGrid lọc bỏ những lượt này, nhưng pixel tùy chỉnh thì không.

GIẢI PHÁP:

Tin dùng dữ liệu từ SendGrid (chính xác hơn):
→ Tỷ lệ mở: 12% (chính xác)
→ Dashboard của bạn: 28% (bị thổi phồng)

Sửa dashboard để sử dụng SendGrid làm nguồn dữ liệu chuẩn:
```javascript
// Đồng bộ từ SendGrid thay vì dùng pixel theo dõi tùy chỉnh
async function updateCampaignStats(campaignId) {
  const stats = await sendgrid.campaigns.get(campaignId).stats();

  await db.execute(`
    UPDATE email_campaigns
    SET
      opened = ?,
      clicked = ?,
      bounced = ?,
      updated_at = NOW()
    WHERE campaign_id = ?
  `, [stats.unique_opens, stats.unique_clicks, stats.bounces, campaignId]);
}
```

KHUYẾN NGHỊ: Loại bỏ pixel theo dõi tùy chỉnh, thay vào đó hãy sử dụng sự kiện webhook của SendGrid.
```

### 3. Gỡ lỗi hiệu suất

Xác định các nút thắt cổ chai và cơ hội tối ưu hóa.

**Ví dụ - Trang đích tải chậm:**
```
Bạn: "Trang đích mất 12 giây để tải"

debugger: Đang phân tích nút thắt cổ chai hiệu suất...

PHÂN TÍCH HIỆU SUẤT (PROFILING):

Sử dụng Chrome DevTools + Lighthouse:

1. Phân tích luồng mạng (network waterfall):
   → HTML: 200ms ✓
   → CSS: 1.2s (chặn hiển thị) ✗
   → JavaScript: 8.4s (chặn hiển thị) ✗
   → Hình ảnh: 3.8s ✗
   → Script bên thứ ba: 4.2s ✗

2. Xác định các tài nguyên gây nghẽn:
   ```
   <script src="analytics.js"> (1.2s)
   <script src="chatbot.js"> (3.8s)
   <script src="heatmap.js"> (1.6s)
   <link rel="stylesheet" href="styles.css"> (1.2s)
   ```

3. Hiệu suất truy vấn cơ sở dữ liệu:
   → Việc tải trang kích hoạt 8 truy vấn DB
   → Truy vấn 1: 200ms (lấy lời chứng thực) ✗
   → Truy vấn 2: 150ms (lấy tính năng) ✗
   → Truy vấn 3-8: mỗi truy vấn <10ms ✓

NGUYÊN NHÂN GỐC RỄ:

Nhiều vấn đề gây nghẽn:
1. Các script đồng bộ đặt trong thẻ <head> (tổng cộng 6.6s)
2. Hình ảnh chưa được tối ưu hóa (3.8s)
3. Các truy vấn DB kiểu N+1 (tải lời chứng thực)
4. Chưa bật bộ nhớ đệm (caching)

TỐI ƯU HÓA:

1. Trì hoãn các script không quan trọng:
```html
<!-- Trước -->
<script src="chatbot.js"></script>

<!-- Sau -->
<script defer src="chatbot.js"></script>
```

2. Triển khai bộ nhớ đệm:
```javascript
// Lưu lời chứng thực vào cache (vì chúng hiếm khi thay đổi)
const testimonials = await cache.get('testimonials', async () => {
  return await db.query('SELECT * FROM testimonials LIMIT 5');
}, { ttl: 3600 }); // Cache trong 1 giờ
```

3. Tối ưu hóa hình ảnh:
```html
<!-- Sử dụng WebP, lazy loading, kích thước tương thích -->
<picture>
  <source srcset="hero-800w.webp 800w, hero-1200w.webp 1200w" type="image/webp">
  <img src="hero-800w.jpg" loading="lazy" alt="Hero">
</picture>
```

4. Kết nối trước (preconnect) tới các tên miền bên thứ ba:
```html
<link rel="preconnect" href="https://analytics.example.com">
<link rel="preconnect" href="https://chatbot.example.com">
```

CẢI THIỆN DỰ KIẾN:

Trước: 12 giây tải trang
Sau khi tối ưu: 2.1 giây (-82%)

Điểm Lighthouse:
→ Trước: 28/100
→ Sau: 92/100

Tác động chuyển đổi:
→ Mỗi 1 giây trễ = ~7% tổn thất chuyển đổi
→ Hiện tại: 12s → ~60% tổn thất
→ Sau khi tối ưu: 2s → ~7% tổn thất
→ Mức tăng trưởng chuyển đổi kỳ vọng: +53%
```

### 4. Kiểm tra tích hợp

Xác minh các kết nối công cụ bên thứ ba hoạt động chính xác.

**Ví dụ:**
```
Bạn: "Hãy kiểm tra xem tất cả các tích hợp tiếp thị của chúng ta có đang hoạt động không"

debugger: Đang chạy kiểm tra sức khỏe các tích hợp...

KẾT QUẢ KIỂM TRA TÍCH HỢP:

1. SendGrid (Email):
   ✓ Xác thực API thành công
   ✓ Email thử đã được gửi
   ✓ Webhook endpoint đang phản hồi
   ⚠ Tên miền người gửi chưa được xác minh (ảnh hưởng đến khả năng vào inbox)

2. HubSpot (CRM):
   ✓ Kết nối API thành công
   ✓ Đồng bộ liên hệ đang hoạt động
   ✗ Thiếu các thuộc tính tùy chỉnh (last_campaign_clicked)

3. Google Analytics 4:
   ✓ Mã theo dõi đã được cài đặt
   ✗ Các sự kiện không kích hoạt (theo dõi chuyển đổi bị hỏng)
   Lỗi: ID đo lường GA4 không khớp

4. Facebook Pixel:
   ✓ Pixel đã cài đặt
   ✓ Sự kiện PageView đang kích hoạt
   ⚠ Sự kiện Mua hàng (Purchase) thiếu các tham số

5. Stripe (Thanh toán):
   ✓ API keys hợp lệ
   ✓ Webhook đang nhận sự kiện
   ✓ Tất cả các bài kiểm tra đều đạt

6. Intercom (Chat):
   ✗ Widget không tải (do chính sách CSP chặn)

KHUYẾN NGHỊ:

Ưu tiên cao:
1. Sửa ID đo lường GA4 (analytics đang không theo dõi được)
2. Mở chặn widget Intercom (không thể hỗ trợ khách hàng)
3. Thêm các thuộc tính tùy chỉnh vào HubSpot (báo cáo bị thiếu thông tin)

Ưu tiên trung bình:
4. Xác minh tên miền người gửi trên SendGrid
5. Thêm các tham số cho sự kiện Mua hàng trên Facebook Pixel

Bạn có muốn tôi giúp khắc phục từng vấn đề này không?
```

### 5. Phân tích nhật ký (Log Analysis)

Thu thập và phân tích nhật ký từ nhiều hệ thống khác nhau.

**Ví dụ:**
```
Bạn: "Tìm hiểu xem tại sao tỷ lệ chuyển đổi thanh toán lại giảm vào ngày hôm qua"

debugger: Đang phân tích nhật ký hệ thống...

THU THẬP NHẬT KÝ:

1. Nhật ký ứng dụng (48 giờ qua):
```
grep "checkout" /var/log/app.log | grep "error"
```

Tìm thấy 847 lỗi trong 24 giờ qua (bình thường: 12 lỗi/ngày)

2. Các lỗi tiêu biểu:
```
[ERROR] Stripe API: card_declined (code: generic_decline) - 412 lần xuất hiện
[ERROR] Timeout connecting to payment-gateway.com - 287 lần xuất hiện
[ERROR] Database connection pool exhausted - 148 lần xuất hiện
```

3. Đối chiếu dòng thời gian:
→ 15:00: Tỷ lệ lỗi bình thường (1-2 lỗi mỗi giờ)
→ 16:00: Lỗi bắt đầu tăng vọt (+800%)
→ 16:05: Nhóm kết nối DB (connection pool) cạn kiệt
→ 16:30: Các lỗi timeout của Stripe tăng lên
→ 17:00: Tỷ lệ chuyển đổi giảm 60%

NGUYÊN NHÂN GỐC RỄ:

Rò rỉ kết nối cơ sở dữ liệu (Database connection leak):
→ Quy trình thanh toán mở kết nối DB
→ Nếu thanh toán thất bại, kết nối không được giải phóng
→ Nhóm kết nối cạn kiệt sau 150 giao dịch thất bại
→ Các lượt thanh toán mới không thể lấy được kết nối DB
→ Các cuộc gọi API Stripe bị timeout khi chờ kết nối DB

VẤN ĐỀ TRONG CODE:
```javascript
// Lỗi: Kết nối không được giải phóng khi xảy ra lỗi
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
```

SỬA LỖI:
```javascript
async function processCheckout(order) {
  const conn = await db.getConnection();
  try {
    await conn.query('INSERT INTO orders ...');
    await stripe.charge(order);
  } catch (error) {
    throw error;
  } finally {
    conn.release(); // Luôn giải phóng kết nối, ngay cả khi có lỗi
  }
}
```

KẾ HOẠCH PHỤC HỒI:
1. Triển khai bản sửa lỗi ngay lập tức
2. Khởi động lại máy chủ ứng dụng (để xóa các kết nối bị kẹt)
3. Giám sát việc sử dụng nhóm kết nối
4. Thêm cảnh báo khi nhóm kết nối sắp cạn kiệt

TÁC ĐỘNG:
→ Chuyển đổi bị mất: ~200 lượt (ước tính)
→ Doanh thu bị mất: $24,000 (đơn hàng trung bình $120)
→ Thời gian xử lý: 30 phút
```

## Khi nào nên sử dụng Debugger

**Hoàn hảo cho:**
- Lỗi tích hợp Email/CRM
- Các vấn đề kỹ thuật trên trang đích
- Các vấn đề theo dõi (tracking) của Analytics
- Tối ưu hóa truy vấn cơ sở dữ liệu
- Tình trạng suy giảm hiệu suất hệ thống
- Gỡ lỗi API bên thứ ba

**Không cần thiết cho:**
- Các vấn đề hiệu suất chiến dịch (hãy dùng Campaign Debugger)
- Vấn đề chất lượng nội dung (hãy dùng Content Reviewer)
- Các câu hỏi mang tính chiến lược (hãy dùng Brainstormer)

## Ví dụ quy trình làm việc

### Quy trình 1: Hệ thống Email gặp sự cố

```
1. Bạn: "Email không được gửi đi"

2. debugger: Thực hiện chẩn đoán khẩn cấp
   - Kiểm tra trạng thái dịch vụ email
   - Kiểm tra xác thực API
   - Xem xét nhật ký lỗi
   - Xác định API key đã hết hạn

3. Kết quả:
   NGUYÊN NHÂN: API key hết hạn
   KHẮC PHỤC: Tạo key mới (5 phút)
   TÁC ĐỘNG: 5,000 email chưa được gửi

4. Bạn tạo API key mới

5. debugger: Xác minh bản sửa lỗi, gửi lại chiến dịch
```

### Quy trình 2: Trang đích tải chậm

```
1. Bạn: "Trang đích mất 12 giây để tải"

2. debugger: Phân tích hiệu suất
   - Phân tích quá trình tải trang
   - Xác định các script gây nghẽn
   - Tìm các hình ảnh chưa tối ưu
   - Phát hiện các truy vấn DB kiểu N+1

3. Kết quả:
   NÚT THẮT CỔ CHAI:
   → Scripts: 6.6s (cần trì hoãn chúng)
   → Hình ảnh: 3.8s (tối ưu/lazy load)
   → DB: 350ms (cần cache lời chứng thực)

   Kỳ vọng: 12s → 2s (-82%)

4. Bạn triển khai các tối ưu hóa

5. Tỷ lệ chuyển đổi cải thiện +53%
```

## Thực hành tốt nhất

### 1. Kiểm tra Nhật ký (Logs) trước tiên

**Sai:** Đoán xem điều gì đang trục trặc
**Đúng:** Đọc logs, tìm bằng chứng

Logs cho bạn biết chính xác điều gì đã thất bại và vào lúc nào.

### 2. Tái lập vấn đề

**Sai:** "Nó bị hỏng với một số người dùng"
**Đúng:** "Các bước tái lập: 1. Truy cập /checkout 2. Nhập thẻ không hợp lệ..."

Các vấn đề có thể tái lập được là các vấn đề có thể gỡ lỗi được.

### 3. Giám sát sau khi sửa

**Sai:** Triển khai bản sửa lỗi rồi bỏ qua
**Đúng:** Triển khai bản sửa lỗi, theo dõi các chỉ số trong vòng 1 giờ

Hãy xác minh rằng bản sửa lỗi của bạn thực sự mang lại kết quả.

## Các đại lý liên quan

- [Campaign Debugger](/vi/docs/marketing/agents/campaign-debugger) - Các vấn đề hiệu suất cụ thể về tiếp thị
- [Code Reviewer](/vi/docs/marketing/agents/code-reviewer) - Kiểm tra chất lượng code trước khi triển khai
- [Campaign Manager](/vi/docs/marketing/agents/campaign-manager) - Thực thi chiến dịch sau khi hệ thống đã được xác minh

## Các lệnh liên quan

- `/debug` - Điều tra các vấn đề hệ thống
- `/logs` - Phân tích nhật ký ứng dụng
- `/test` - Chạy kiểm tra sức khỏe tích hợp

---

**Cơ sở hạ tầng tiếp thị đôi khi sẽ gặp trục trặc. Khi điều đó xảy ra, bạn cần một ai đó có thể sửa nó thật nhanh.**

Sẵn sàng chẩn đoán và giải quyết các vấn đề kỹ thuật? Hãy bắt đầu gỡ lỗi.
