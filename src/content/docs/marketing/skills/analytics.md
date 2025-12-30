---
title: "Analytics"
description: "Phân tích marketing với tích hợp GA4 API, theo dõi KPI, mô hình attribution và báo cáo dựa trên dữ liệu để tối ưu hóa hiệu suất."
lang: vi
section: marketing
category: skills
order: 4
---

> Biến dữ liệu marketing thành insights hành động thông qua báo cáo tự động, phân tích attribution và theo dõi ROI.

## Kỹ năng này làm gì

**Thách thức**: Nhóm marketing chìm trong dữ liệu từ GA4, nền tảng quảng cáo, công cụ email và CRMs. Báo cáo thủ công tốn thời gian và attribution qua kênh phức tạp.

**Giải pháp**: Kỹ năng Analytics cung cấp tích hợp GA4 API, framework KPI sẵn có, mô hình attribution và tạo báo cáo tự động. Bao gồm trực quan hóa Mermaid.js và ưu tiên đề xuất có thể hành động.

## Kích hoạt

**Ngầm**: Tự động kích hoạt cho agents Analytics Analyst, Campaign Manager và Growth Specialist.

**Rõ ràng**: Kích hoạt qua prompt:
```
Kích hoạt skill analytics để [mô tả task]
```

## Khả năng

### 1. Tích hợp Google Analytics 4 API
Truy vấn dữ liệu GA4 theo chương trình cho báo cáo và dashboard tùy chỉnh.

**Thiết lập**:
```bash
npm install @google-analytics/admin @google-analytics/data
```

**Liệt kê accounts và properties**:
```bash
node scripts/ga-list-accounts.cjs --summaries
```

**Chạy báo cáo tùy chỉnh**:
```bash
node scripts/ga-run-report.cjs \
  --property=PROPERTY_ID \
  --dimensions=country,city \
  --metrics=activeUsers,sessions \
  --start-date=30daysAgo \
  --end-date=today
```

**Tài liệu API**:
- Admin API: `references/ga-admin-api.md`
- Data API: `references/ga-data-api.md`

### 2. Framework và theo dõi KPI
Chỉ số định sẵn cho thu hút, tương tác, chuyển đổi và giữ chân.

**KPIs marketing cốt lõi**:
| Danh mục | Chỉ số |
|----------|---------|
| Thu hút | CAC (Chi phí Thu hút Khách hàng), CPL (Chi phí mỗi Lead), Lưu lượng |
| Tương tác | CTR (Tỷ lệ Click-Through), Thời gian trên Site, Bounce Rate |
| Chuyển đổi | CVR (Tỷ lệ Chuyển đổi), ROAS (Return on Ad Spend), Doanh thu |
| Giữ chân | LTV (Lifetime Value), Churn Rate, NPS (Net Promoter Score) |

**Framework tải**: `references/marketing-kpis.md`

### 3. Mô hình attribution
So sánh mô hình attribution để hiểu đóng góp của kênh.

**Mô hình có sẵn**:
- **Last-click**: Credit đầy đủ cho touchpoint cuối
- **First-click**: Credit đầy đủ cho touchpoint đầu
- **Linear**: Credit đồng đều qua tất cả touchpoints
- **Time-decay**: Credit nhiều hơn cho touchpoints gần đây
- **Position-based**: 40% đầu, 40% cuối, 20% giữa

**Hướng dẫn mô hình**: `references/attribution-models.md`

## Yêu cầu trước

**Cho truy cập GA4 API**:
- Dự án Google Cloud với GA4 APIs được bật
- Thông tin xác thực Service account HOẶC OAuth 2.0
- File thông tin xác thực trong `.claude/secrets/`:
  - `ga_service_account.json` (service account)
  - HOẶC `google_client_secret.json` (OAuth)

**Cho tạo báo cáo**:
- Nguồn dữ liệu được cấu hình (GA4, nền tảng quảng cáo, email, CRM)

## Cấu hình

**Vị trí thông tin xác thực**: `.claude/secrets/`
- `ga_service_account.json` - Service account (khuyến nghị cho tự động hóa)
- `google_client_secret.json` - OAuth (thiết lập tương tác)
- `google_tokens.json` - Tokens OAuth (tự động tạo)

**Mẫu báo cáo**: `references/report-templates.md`

## Thực hành tốt nhất

**1. Theo dõi chỉ số dẫn đầu, không chỉ chỉ số theo sau**
Giám sát chỉ số tương tác (dẫn đầu) để dự đoán chuyển đổi (theo sau).

**2. So sánh táo với táo**
Sử dụng khung thời gian và segments nhất quán. So sánh năm qua năm tính đến tính mùa vụ.

**3. Ý nghĩa thống kê trước kết luận**
Đảm bảo kích thước mẫu hỗ trợ insights. Sử dụng khoảng tin cậy cho A/B tests.

## Use cases phổ biến

### Use Case 1: Báo cáo hiệu suất chiến dịch hàng tuần
**Kịch bản**: Tạo báo cáo hàng tuần so sánh hiệu suất kênh.

**Quy trình**:
1. Lấy dữ liệu GA4 cho 7 ngày qua
2. Tính tỷ lệ chính (CAC, ROAS, CVR)
3. So sánh với tuần trước và benchmarks
4. Tạo biểu đồ Mermaid.js
5. Ưu tiên đề xuất

**Kết quả**: Báo cáo Markdown với:
- Bảng hiệu suất kênh
- Trực quan hóa xu hướng
- Top 3 hành động với người phụ trách

**Mẫu**: `references/report-templates.md` → Weekly Performance

### Use Case 2: Phân tích attribution cho chiến dịch đa chạm
**Kịch bản**: Hiểu cách các kênh hoạt động cùng nhau trong hành trình khách hàng 30 ngày.

**Quy trình**:
1. Xuất dữ liệu path GA4
2. Áp dụng mô hình attribution (last-click, linear, position-based)
3. So sánh đóng góp kênh qua mô hình
4. Xác định kênh bị đánh giá thấp
5. Đề xuất phân bổ lại ngân sách

**Kết quả**: Bảng so sánh attribution với đề xuất tối ưu ngân sách.

## Xử lý sự cố

**Vấn đề**: GA4 API trả về 403 Forbidden
**Giải pháp**:
1. Xác minh API được bật trong Google Cloud Console
2. Kiểm tra service account có quyền truy cập GA4 property (tối thiểu vai trò Viewer)
3. Xác nhận định dạng property ID: `properties/123456789`

**Vấn đề**: Báo cáo hiển thị đột biến dữ liệu bất ngờ
**Giải pháp**:
1. Kiểm tra bot traffic (lọc IPs nội bộ)
2. Xác minh triển khai tracking (tag GTM firing)
3. So sánh sự kiện thô vs chỉ số đã xử lý

**Vấn đề**: Kết quả mô hình attribution không khớp giao diện GA4
**Giải pháp**: GA4 sử dụng attribution dựa trên dữ liệu mặc định. Script sử dụng mô hình dựa trên quy tắc. Ghi lại sự khác biệt phương pháp.

## Kỹ năng liên quan

- [Campaign Management](/vi/docs/marketing/skills/campaign-management) - Theo dõi và tối ưu chiến dịch
- [SEO Optimization](/vi/docs/marketing/skills/seo-optimization) - Phân tích lưu lượng tìm kiếm
- [Email Marketing](/vi/docs/marketing/skills/email-marketing) - Chỉ số hiệu suất email
- [Ads Management](/vi/docs/marketing/skills/ads-management) - Theo dõi ROAS chiến dịch trả tiền

## Lệnh liên quan

- `/analytics/dashboard` - Tạo snapshot dashboard
- `/analytics/keywords` - Phân tích hiệu suất tìm kiếm
- `/analyze` - Phân tích dữ liệu chung
- `/analyze:report` - Tạo báo cáo tùy chỉnh
