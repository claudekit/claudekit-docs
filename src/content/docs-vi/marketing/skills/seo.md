---
lang: vi
title: "ckm:seo"
description: "Kiểm toán SEO kỹ thuật, nghiên cứu từ khóa với ReviewWeb API, tích hợp Google Search Console và SEO lập trình để tăng khả năng hiển thị tìm kiếm."
section: marketing
category: skills
order: 3
---

# SEO

> Tăng khả năng hiển thị tìm kiếm thông qua nghiên cứu từ khóa dựa trên dữ liệu, kiểm toán kỹ thuật và chiến lược SEO lập trình.

## Skill Này Làm Gì

**Thách thức**: SEO đòi hỏi kết hợp nghiên cứu từ khóa, kiểm toán kỹ thuật, tối ưu nội dung và theo dõi hiệu suất trên nhiều công cụ và nền tảng. Quy trình thủ công tốn thời gian và dễ xảy ra lỗi.

**Giải pháp**: Skill SEO Optimization tích hợp ReviewWeb.site API để lấy dữ liệu từ khóa (lượng tìm kiếm, độ khó, CPC), Google Search Console API cho insights xếp hạng, đo Core Web Vitals và mẫu SEO lập trình. Cung cấp kiểm toán tự động, tạo schema và quản lý sitemap.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt cho agent SEO Specialist, Attraction Specialist và Content Creator.

**Tường minh**: Kích hoạt qua prompt:
```
Activate seo skill to [mô tả tác vụ]
```

## Tính Năng

### 1. Nghiên Cứu Từ Khóa Với ReviewWeb API
Lấy dữ liệu từ khóa thực tế bao gồm lượng tìm kiếm, độ khó, CPC và các trang xếp hạng cao nhất.

```bash
node scripts/analyze-keywords.cjs -k "react tutorial" -o report.md
```

**Đầu ra**: Báo cáo Markdown với:
- Chỉ số từ khóa chính (lượng tìm kiếm, độ khó, CPC)
- Các từ khóa liên quan với cơ hội
- Phân tích 10 trang xếp hạng cao nhất
- Khuyến nghị khoảng trống nội dung

**Tài liệu API**: `references/reviewweb-api.md`

### 2. Tích Hợp Google Search Console
Truy vấn dữ liệu hiệu suất tìm kiếm bao gồm lượt nhấp, hiển thị, CTR và xếp hạng.

**Thiết lập (một lần)**:
1. Bật Search Console API trong Google Cloud
2. Tải thông tin xác thực OAuth dưới dạng `google_client_secret.json`
3. Đặt vào `.claude/secrets/` (phạm vi dự án hoặc toàn cục)
4. Xác thực: `node scripts/gsc-auth.cjs --auth`

**Ví dụ truy vấn**:
```bash
# Liệt kê trang đã xác minh
node scripts/gsc-query.cjs --sites

# Các truy vấn tìm kiếm hàng đầu
node scripts/gsc-query.cjs --top-queries -s https://example.com

# Cơ hội CTR thấp
node scripts/gsc-query.cjs --low-ctr -s https://example.com -o low-ctr.csv -f csv
```

**Hướng dẫn đầy đủ**: `references/google-search-console-api-guide.md`

### 3. Đo Core Web Vitals
Kiểm toán hiệu suất trang bằng PageSpeed Insights API.

```bash
# Kiểm toán URL đơn lẻ
node scripts/audit-core-web-vitals.cjs -u https://example.com

# Kiểm toán hàng loạt từ sitemap
node scripts/audit-core-web-vitals.cjs -s sitemap.xml -f md -o cwv-report.md
```

**Chỉ số theo dõi**: LCP (Largest Contentful Paint), FID (First Input Delay), CLS (Cumulative Layout Shift)

**Hướng dẫn khắc phục**: `references/core-web-vitals-remediation.md`

## Điều Kiện Tiên Quyết

**Để nghiên cứu từ khóa**:
- `REVIEWWEB_API_KEY` trong file `.env`
- Node.js 18+

**Để Google Search Console**:
- Google Cloud project với Search Console API đã bật
- Thông tin xác thực OAuth 2.0 (loại Desktop app)
- Gói npm `googleapis`: `npm install googleapis`

**Để Core Web Vitals**:
- PageSpeed Insights API key (tùy chọn, tầng miễn phí có sẵn)

## Cấu Hình

**Biến môi trường** (`.env`):
```bash
REVIEWWEB_API_KEY=your_api_key_here
PAGESPEED_API_KEY=your_key_here  # Tùy chọn
```

**Thư mục Secrets**: `.claude/secrets/`
- `google_client_secret.json` - Thông tin xác thực OAuth
- `google_tokens.json` - Được tạo sau khi xác thực

## Thực Hành Tốt Nhất

**1. Nhắm Từ Khóa Đuôi Dài Trước**
Độ khó thấp hơn, ý định chuyển đổi cao hơn. Xây dựng thẩm quyền trước khi cạnh tranh cho các từ khóa chính.

**2. Tối Ưu Cho Ý Định Tìm Kiếm, Không Chỉ Từ Khóa**
Khớp định dạng nội dung với ý định tìm kiếm: thông tin, điều hướng, thương mại, giao dịch.

**3. Sửa SEO Kỹ Thuật Trước Nội Dung**
Vấn đề Core Web Vitals, thân thiện mobile và khả năng crawl chặn cải thiện xếp hạng.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Khám Phá Cơ Hội Nội Dung
**Tình huống**: Tìm cơ hội từ khóa cho nội dung blog quý tới.

**Quy trình**:
1. Nghiên cứu từ khóa hạt giống: `node scripts/analyze-keywords.cjs -k "saas marketing"`
2. Trích xuất từ khóa liên quan từ báo cáo
3. Lọc theo độ khó <40 và lượng tìm kiếm >500
4. Lập bản đồ từ khóa vào các trụ cột nội dung
5. Tạo lịch biên tập

**Kết quả**: 20+ cơ hội từ khóa với điểm lượng tìm kiếm và độ khó.

### Trường Hợp 2: Phân Tích Hiệu Suất Tìm Kiếm
**Tình huống**: Xác định các trang có CTR thấp dù có lượng hiển thị cao.

**Quy trình**:
1. Truy vấn Search Console: `node scripts/gsc-query.cjs --low-ctr -s https://yoursite.com`
2. Phân tích thẻ tiêu đề và mô tả meta
3. Viết lại để cải thiện CTR
4. Theo dõi thay đổi trong 2-4 tuần

**Kết quả**: Danh sách trang được ưu tiên với khuyến nghị tối ưu.

## Xử Lý Sự Cố

**Vấn đề**: ReviewWeb API trả về 401 Unauthorized
**Giải pháp**: Xác minh `REVIEWWEB_API_KEY` trong file `.env`. Kiểm tra hạn mức API tại dashboard ReviewWeb.

**Vấn đề**: Xác thực Google Search Console thất bại
**Giải pháp**:
1. Xác minh thông tin xác thực OAuth khớp loại ứng dụng (Desktop app)
2. Xóa `google_tokens.json` hiện có và xác thực lại
3. Kiểm tra API đã bật trong Google Cloud Console

**Vấn đề**: Script Core Web Vitals timeout
**Giải pháp**: Dùng flag `--timeout 60000` hoặc kiểm toán các lô URL nhỏ hơn. PageSpeed API có giới hạn tốc độ.

## Skill Liên Quan

- [Content Marketing](/vi/docs/marketing/skills/content-marketing) - Lập kế hoạch và chiến lược nội dung
- [Analytics](/vi/docs/marketing/skills/analytics) - Theo dõi lưu lượng và chuyển đổi
- [Chrome DevTools](/vi/docs/marketing/skills/chrome-devtools) - Đo CWV dựa trên trình duyệt
- [Research](/vi/docs/marketing/skills/research) - Phân tích đối thủ

## Lệnh Liên Quan

- `/seo/keywords` - Quy trình nghiên cứu từ khóa
- `/seo/audit` - Kiểm toán SEO đầy đủ
- `/seo/competitor` - Phân tích đối thủ
- `/content/blog` - Tạo blog tối ưu SEO
