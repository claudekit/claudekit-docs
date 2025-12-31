---
title: "Chrome DevTools"
description: "Tự động hóa trình duyệt với Puppeteer: ảnh chụp màn hình, ảnh chụp ARIA, phân tích hiệu suất, tự động hóa biểu mẫu và gỡ lỗi."
lang: vi
section: marketing
category: skills
order: 20
---

> Tự động hóa các tác vụ trình duyệt, chụp ảnh màn hình, phân tích hiệu suất web và gỡ lỗi các ứng dụng web bằng tập lệnh Puppeteer.

## Skill Này Làm Gì

**Thách Thức**: Các đội tiếp thị cần chụp ảnh các trang web, kiểm tra luồng biểu mẫu, giám sát hiệu suất trang web và gỡ lỗi các ứng dụng web. Kiểm tra trình duyệt thủ công tốn thời gian và không nhất quán.

**Giải Pháp**: Chrome DevTools skill cung cấp các tập lệnh tự động hóa dựa trên Puppeteer để chụp ảnh (với nén tự động), ảnh chụp ARIA để khám phá phần tử, chỉ số hiệu suất (Core Web Vitals), tự động hóa biểu mẫu và ghi nhật ký bảng điều khiển/mạng.

## Kích Hoạt

**Ẩn Danh**: Kích hoạt khi các agent cần tự động hóa trình duyệt, chụp ảnh hoặc phân tích hiệu suất.

**Rõ Ràng**: `/skill:add chrome-devtools`

## Khả Năng

### 1. Chụp Ảnh Màn Hình
Chụp ảnh toàn trang hoặc dành riêng cho phần tử với nén tự động cho các tệp lớn.

```bash
# Điều hướng và chụp ảnh
node scripts/navigate.js --url https://example.com
node scripts/screenshot.js --output page.png

# Ảnh chụp màn hình toàn trang
node scripts/screenshot.js --url https://example.com --output full.png --full-page true

# Phần tử cụ thể
node scripts/screenshot.js --selector ".hero" --output hero.png
```

**Nén Tự Động**: Ảnh chụp >5MB nén với Sharp (nhanh 4-5 lần so với ImageMagick).

**Lưu Trữ**: Lưu vào `.claude/chrome-devtools/screenshots/` để phân tích.

### 2. Ảnh Chụp ARIA Để Khám Phá Phần Tử
Nhận cây truy cập ngữ nghĩa để tìm các phần tử mà không kiểm tra HTML.

```bash
# Nhận ảnh chụp ARIA
node scripts/aria-snapshot.js --url https://example.com

# Lưu vào tệp
node scripts/aria-snapshot.js --url https://example.com --output snapshot.yaml
```

**Ví Dụ Đầu Ra**:
```yaml
- banner:
  - link "Home" [ref=e1]
  - navigation:
    - link "Products" [ref=e2]
    - link "Pricing" [ref=e3]
- main:
  - heading "Welcome" [level=1]
  - button "Get Started" [ref=e5]
```

**Tương Tác Theo Ref**:
```bash
# Nhấp vào phần tử có ref e5
node scripts/select-ref.js --ref e5 --action click
```

**Hướng Dẫn**: Ký Hiệu ARIA Đầy Đủ Trong README Skill

### 3. Đo Lường Hiệu Suất
Theo dõi Core Web Vitals (LCP, FID, CLS) để tối ưu hóa tốc độ trang.

```bash
# Đo lường hiệu suất
node scripts/performance.js --url https://example.com

# Kết Quả Bao Gồm:
# - LCP (Độ Sơn Lớn Nhất)
# - FID (Độ Trễ Đầu Tiên)
# - CLS (Sự Thay Đổi Bố Cục Tích Lũy)
```

### 4. Tính Tồn Tại Phiên
Trình duyệt tiếp tục chạy trên các tập lệnh cho quy trình công việc đa bước.

```bash
# Bước 1: Đăng nhập (trình duyệt tiếp tục chạy)
node scripts/navigate.js --url https://example.com/login
node scripts/fill.js --selector "#email" --value "user@example.com"
node scripts/fill.js --selector "#password" --value "secret"
node scripts/click.js --selector "button[type=submit]"

# Bước 2: Điều hướng đến bảng điều khiển (sử dụng lại phiên)
node scripts/navigate.js --url https://example.com/dashboard
node scripts/screenshot.js --output dashboard.png

# Đóng khi hoàn thành
node scripts/navigate.js --url about:blank --close true
```

## Điều Kiện Tiên Quyết

**Cài Đặt**:
```bash
cd .claude/skills/chrome-devtools/scripts
npm install  # Cài đặt puppeteer, sharp, debug, yargs
```

**Chỉ Linux/WSL**: Chạy `./install-deps.sh` cho các thư viện hệ thống Chrome.

## Cấu Hình

**Chế Độ Trình Duyệt**:
- Linux/WSL: Headless (không có cửa sổ)
- macOS/Windows: Có Đầu (cửa sổ hiển thị để gỡ lỗi)

**Lưu Trữ Phiên**: `.browser-session.json` (Điểm cuối WebSocket)

**Ưu Tiên Vị Trí Skill**:
1. Phạm Vi Dự Án: `.claude/skills/chrome-devtools/`
2. Phạm Vi Người Dùng: `~/.claude/skills/chrome-devtools/`

## Phương Pháp Tốt Nhất

**1. Sử Dụng Ảnh Chụp ARIA Cho Các Trang Không Xác Định**
Đừng đoán các bộ chọn. Nhận ảnh chụp ARIA trước, xác định các phần tử theo vai trò ngữ nghĩa và ref.

**2. Không Bao Giờ Sử Dụng Giao Thức file://**
Phục vụ HTML cục bộ qua `npx serve` hoặc `python -m http.server`. Giao thức `file://` chặn nhiều tính năng trình duyệt.

**3. Lưu Trữ Tài liệu Phiên**
Tạo thư mục dấu thời gian cho mỗi phiên kiểm tra:
```bash
SESSION="$(date +%Y%m%d-%H%M%S)"
mkdir -p .claude/chrome-devtools/logs/$SESSION
```

## Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp Sử Dụng 1: Ảnh Chụp Trang Hạ Cánh Để Xem Xét
**Tình Huống**: Chụp ảnh toàn trang của trang hạ cánh mới để xem xét người nhận cổ phiếu.

**Quy Trình Công Việc**:
```bash
# Phục vụ xây dựng cục bộ
npx serve ./dist -p 3000 &

# Chụp ảnh
node scripts/screenshot.js --url http://localhost:3000 --output landing-full.png --full-page true

# Kiểm tra kích thước tệp (nén tự động nếu >5MB)
ls -lh landing-full.png
```

**Kết Quả**: Ảnh chụp màn hình toàn trang sẵn sàng để xem xét.

### Trường Hợp Sử Dụng 2: Kiểm Tra Luồng Biểu Mẫu
**Tình Huống**: Kiểm tra luồng đăng ký đa bước và chụp ảnh từng bước.

**Quy Trình Công Việc**:
```bash
# Bước 1: Điều hướng đến đăng ký
node scripts/navigate.js --url https://app.example.com/signup

# Bước 2: Điền các trường biểu mẫu
node scripts/fill.js --selector "#name" --value "Test User"
node scripts/fill.js --selector "#email" --value "test@example.com"
node scripts/screenshot.js --output step1.png

# Bước 3: Gửi và xác minh
node scripts/click.js --selector "button[type=submit]"
node scripts/screenshot.js --output step2-confirmation.png

# Đóng phiên
node scripts/navigate.js --url about:blank --close true
```

**Kết Quả**: Ảnh chụp từng bước để xác nhận.

## Khắc Phục Sự Cố

**Vấn Đề**: Tập lệnh bị treo hoặc timeout
**Giải Pháp**: Sử dụng cờ `--timeout 60000` hoặc chiến lược `--wait-until load`. Một số trang có các tập lệnh chạy dài.

**Vấn Đề**: Phần tử không tìm thấy
**Giải Pháp**: Sử dụng `aria-snapshot.js` để khám phá bộ chọn chính xác hoặc ref. Đừng đoán các bộ chọn CSS.

**Vấn Đề**: Ảnh chụp màn hình thiếu hình ảnh
**Giải Pháp**: Hình ảnh có thể đang chờ hoạt ảnh được kích hoạt cuộn. Cuộn trang trước tiên:
```bash
node scripts/evaluate.js --script "window.scrollTo(0, document.body.scrollHeight)"
# Chờ, rồi chụp ảnh
```

**Vấn Đề**: Lỗi phiên cũ
**Giải Pháp**: Xóa `.browser-session.json` và thử lại. Kết nối trình duyệt đã hết hạn.

## Kỹ Năng Liên Quan

- [SEO Optimization](/vi/docs/marketing/skills/seo-optimization) - Đo Core Web Vitals
- [Analytics](/vi/docs/marketing/skills/analytics) - Theo dõi hiệu suất
- [Media Processing](/vi/docs/marketing/skills/media-processing) - Xử lý lại ảnh chụp màn hình

## Lệnh Liên Quan

- `/design/screenshot` - Phân tích ảnh chụp thiết kế
- `/test` - Kiểm tra ứng dụng web
