---
title: "SEO Optimization"
description: "Kiểm toán SEO kỹ thuật, nghiên cứu từ khóa với ReviewWeb API, tích hợp Google Search Console và SEO lập trình cho khả năng hiển thị tìm kiếm."
lang: vi
section: marketing
category: skills
order: 3
---

> Tăng khả năng hiển thị tìm kiếm thông qua nghiên cứu từ khóa dựa trên dữ liệu, kiểm toán kỹ thuật và chiến lược SEO lập trình.

## Kỹ năng này làm gì

**Thách thức**: SEO yêu cầu kết hợp nghiên cứu từ khóa, kiểm toán kỹ thuật, tối ưu hóa nội dung và giám sát hiệu suất trên nhiều công cụ và nền tảng. Quy trình thủ công tốn thời gian và dễ sai.

**Giải pháp**: Kỹ năng SEO Optimization tích hợp ReviewWeb.site API cho dữ liệu từ khóa (khối lượng, độ khó, CPC), Google Search Console API cho insights xếp hạng, đo lường Core Web Vitals và mẫu SEO lập trình. Cung cấp kiểm toán tự động, tạo schema và quản lý sitemap.

## Kích hoạt

**Ngầm**: Tự động kích hoạt cho agents SEO Specialist, Attraction Specialist và Content Creator.

**Rõ ràng**: Kích hoạt qua prompt:
```
Kích hoạt skill seo-optimization để [mô tả task]
```

## Khả năng

### 1. Nghiên cứu từ khóa với ReviewWeb API
Lấy dữ liệu từ khóa thực bao gồm khối lượng tìm kiếm, độ khó, CPC và trang xếp hạng hàng đầu.

```bash
node scripts/analyze-keywords.cjs -k "react tutorial" -o report.md
```

**Kết quả**: Báo cáo Markdown với:
- Chỉ số từ khóa chính (khối lượng, độ khó, CPC)
- Từ khóa liên quan với cơ hội
- Phân tích top 10 trang xếp hạng
- Đề xuất khoảng trống nội dung

**Tài liệu API**: `references/reviewweb-api.md`

### 2. Tích hợp Google Search Console
Truy vấn dữ liệu hiệu suất tìm kiếm bao gồm clicks, impressions, CTR và xếp hạng.

**Thiết lập (một lần)**:
1. Bật Search Console API trong Google Cloud
2. Tải thông tin xác thực OAuth dưới dạng `google_client_secret.json`
3. Đặt trong `.claude/secrets/` (dự án hoặc toàn cục)
4. Xác thực: `node scripts/gsc-auth.cjs --auth`

**Ví dụ truy vấn**:
```bash
# Liệt kê sites đã xác minh
node scripts/gsc-query.cjs --sites

# Top truy vấn tìm kiếm
node scripts/gsc-query.cjs --top-queries -s https://example.com

# Cơ hội CTR thấp
node scripts/gsc-query.cjs --low-ctr -s https://example.com -o low-ctr.csv -f csv
```

**Hướng dẫn đầy đủ**: `references/google-search-console-api-guide.md`

### 3. Đo lường Core Web Vitals
Kiểm toán hiệu suất trang sử dụng PageSpeed Insights API.

```bash
# Kiểm toán URL đơn
node scripts/audit-core-web-vitals.cjs -u https://example.com

# Kiểm toán hàng loạt dựa trên Sitemap
node scripts/audit-core-web-vitals.cjs -s sitemap.xml -f md -o cwv-report.md
```

**Chỉ số theo dõi**: LCP (Largest Contentful Paint), FID (First Input Delay), CLS (Cumulative Layout Shift)

**Hướng dẫn khắc phục**: `references/core-web-vitals-remediation.md`

## Yêu cầu trước

**Cho nghiên cứu từ khóa**:
- `REVIEWWEB_API_KEY` trong file `.env`
- Node.js 18+

**Cho Google Search Console**:
- Dự án Google Cloud với Search Console API được bật
- Thông tin xác thực OAuth 2.0 (loại Desktop app)
- Package npm `googleapis`: `npm install googleapis`

**Cho Core Web Vitals**:
- Khóa PageSpeed Insights API (tùy chọn, có tier miễn phí)

## Cấu hình

**Biến môi trường** (`.env`):
```bash
REVIEWWEB_API_KEY=your_api_key_here
PAGESPEED_API_KEY=your_key_here  # Tùy chọn
```

**Thư mục secrets**: `.claude/secrets/`
- `google_client_secret.json` - Thông tin xác thực OAuth
- `google_tokens.json` - Được tạo sau xác thực

## Thực hành tốt nhất

**1. Nhắm mục tiêu từ khóa long-tail trước**
Độ khó thấp hơn, ý định chuyển đổi cao hơn. Xây dựng uy tín trước khi cạnh tranh cho head terms.

**2. Tối ưu cho ý định tìm kiếm, không chỉ từ khóa**
Phù hợp định dạng nội dung với ý định tìm kiếm: thông tin, điều hướng, thương mại, giao dịch.

**3. Sửa SEO kỹ thuật trước nội dung**
Core Web Vitals, mobile-friendliness và vấn đề crawlability chặn cải thiện xếp hạng.

## Use cases phổ biến

### Use Case 1: Khám phá cơ hội nội dung
**Kịch bản**: Tìm cơ hội từ khóa cho nội dung blog quý tiếp theo.

**Quy trình**:
1. Nghiên cứu seed keyword: `node scripts/analyze-keywords.cjs -k "saas marketing"`
2. Trích xuất từ khóa liên quan từ báo cáo
3. Lọc theo độ khó <40 và khối lượng >500
4. Lập bản đồ từ khóa với trụ cột nội dung
5. Tạo lịch biên tập

**Kết quả**: Hơn 20 cơ hội từ khóa với khối lượng tìm kiếm và điểm độ khó.

### Use Case 2: Phân tích hiệu suất tìm kiếm
**Kịch bản**: Xác định trang có CTR thấp mặc dù impressions cao.

**Quy trình**:
1. Truy vấn Search Console: `node scripts/gsc-query.cjs --low-ctr -s https://yoursite.com`
2. Phân tích title tags và meta descriptions
3. Viết lại để cải thiện CTR
4. Giám sát thay đổi trong 2-4 tuần

**Kết quả**: Danh sách trang được ưu tiên với đề xuất tối ưu hóa.

## Xử lý sự cố

**Vấn đề**: ReviewWeb API trả về 401 Unauthorized
**Giải pháp**: Xác minh `REVIEWWEB_API_KEY` trong file `.env`. Kiểm tra quota API tại dashboard ReviewWeb.

**Vấn đề**: Xác thực Google Search Console thất bại
**Giải pháp**:
1. Xác minh thông tin xác thực OAuth khớp loại ứng dụng (Desktop app)
2. Xóa `google_tokens.json` hiện có và xác thực lại
3. Kiểm tra API được bật trong Google Cloud Console

**Vấn đề**: Script Core Web Vitals timeout
**Giải pháp**: Sử dụng flag `--timeout 60000` hoặc kiểm toán batch URL nhỏ hơn. PageSpeed API có giới hạn tốc độ.

## Kỹ năng liên quan

- [Content Marketing](/vi/docs/marketing/skills/content-marketing) - Lập kế hoạch và chiến lược nội dung
- [Analytics](/vi/docs/marketing/skills/analytics) - Theo dõi lưu lượng và chuyển đổi
- [Chrome DevTools](/vi/docs/marketing/skills/chrome-devtools) - Đo CWV dựa trên trình duyệt
- [Research](/vi/docs/marketing/skills/research) - Phân tích đối thủ

## Lệnh liên quan

- `/seo/keywords` - Quy trình nghiên cứu từ khóa
- `/seo/audit` - Kiểm toán SEO đầy đủ
- `/seo/competitor` - Phân tích đối thủ
- `/content/blog` - Tạo blog tối ưu SEO
