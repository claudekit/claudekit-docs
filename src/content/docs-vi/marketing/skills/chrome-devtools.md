---
lang: vi
title: "ckm:chrome-devtools"
description: "Tự động hóa trình duyệt với Puppeteer: chụp màn hình, ARIA snapshot, phân tích hiệu suất, tự động hóa biểu mẫu và debug."
section: marketing
category: skills
order: 20
---

# `ckm:chrome-devtools`

> Tự động hóa tác vụ trình duyệt, chụp màn hình, phân tích hiệu suất web và debug ứng dụng web bằng script Puppeteer.

## Skill Này Làm Gì

**Thách thức**: Nhóm marketing cần chụp màn hình website, kiểm tra quy trình biểu mẫu, theo dõi hiệu suất web và debug ứng dụng web. Kiểm thử trình duyệt thủ công tốn thời gian và không nhất quán.

**Giải pháp**: Skill Chrome DevTools cung cấp script tự động hóa dựa trên Puppeteer cho chụp màn hình (tự động nén), ARIA snapshot để khám phá phần tử, chỉ số hiệu suất (Core Web Vitals), tự động hóa biểu mẫu và ghi nhật ký console/mạng.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi agent cần tự động hóa trình duyệt, chụp màn hình hoặc phân tích hiệu suất.

**Tường minh**: Kích hoạt theo tên khi cần: "Activate chrome-devtools skill"

## Tính Năng

### 1. Chụp Màn Hình
Chụp màn hình toàn trang hoặc phần tử cụ thể với tự động nén cho file lớn.

```bash
# Điều hướng và chụp màn hình
node scripts/navigate.js --url https://example.com
node scripts/screenshot.js --output page.png

# Chụp màn hình toàn trang
node scripts/screenshot.js --url https://example.com --output full.png --full-page true

# Phần tử cụ thể
node scripts/screenshot.js --selector ".hero" --output hero.png
```

**Tự động nén**: Màn hình >5MB được nén với Sharp (nhanh hơn ImageMagick 4-5 lần).

**Lưu trữ**: Lưu vào `.claude/chrome-devtools/screenshots/` để phân tích.

### 2. ARIA Snapshot Để Khám Phá Phần Tử
Lấy cây trợ năng ngữ nghĩa để tìm phần tử mà không cần kiểm tra HTML.

```bash
# Lấy ARIA snapshot
node scripts/aria-snapshot.js --url https://example.com

# Lưu vào file
node scripts/aria-snapshot.js --url https://example.com --output snapshot.yaml
```

**Ví dụ đầu ra**:
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

**Tương tác theo Ref**:
```bash
# Click phần tử với ref e5
node scripts/select-ref.js --ref e5 --action click
```

**Hướng dẫn**: Ký hiệu ARIA đầy đủ trong README của skill

### 3. Đo Hiệu Suất
Theo dõi Core Web Vitals (LCP, FID, CLS) để tối ưu tốc độ trang.

```bash
# Đo hiệu suất
node scripts/performance.js --url https://example.com

# Kết quả bao gồm:
# - LCP (Largest Contentful Paint)
# - FID (First Input Delay)
# - CLS (Cumulative Layout Shift)
```

### 4. Duy Trì Phiên
Trình duyệt tiếp tục chạy qua các script cho quy trình nhiều bước.

```bash
# Bước 1: Đăng nhập (trình duyệt tiếp tục chạy)
node scripts/navigate.js --url https://example.com/login
node scripts/fill.js --selector "#email" --value "user@example.com"
node scripts/fill.js --selector "#password" --value "secret"
node scripts/click.js --selector "button[type=submit]"

# Bước 2: Điều hướng đến dashboard (tái sử dụng phiên)
node scripts/navigate.js --url https://example.com/dashboard
node scripts/screenshot.js --output dashboard.png

# Đóng khi xong
node scripts/navigate.js --url about:blank --close true
```

## Điều Kiện Tiên Quyết

**Cài đặt**:
```bash
cd .claude/skills/chrome-devtools/scripts
npm install  # Cài đặt puppeteer, sharp, debug, yargs
```

**Chỉ Linux/WSL**: Chạy `./install-deps.sh` cho thư viện hệ thống Chrome.

## Cấu Hình

**Chế độ trình duyệt**:
- Linux/WSL: Headless (không cửa sổ)
- macOS/Windows: Headed (cửa sổ hiển thị để debug)

**Lưu trữ phiên**: `.browser-session.json` (điểm cuối WebSocket)

**Ưu tiên vị trí skill**:
1. Phạm vi dự án: `.claude/skills/chrome-devtools/`
2. Phạm vi người dùng: `~/.claude/skills/chrome-devtools/`

## Thực Hành Tốt Nhất

**1. Dùng ARIA Snapshot Cho Trang Chưa Biết**
Đừng đoán selector. Lấy ARIA snapshot trước, xác định phần tử theo vai trò ngữ nghĩa và ref.

**2. Không Bao Giờ Dùng Giao Thức file://**
Phục vụ HTML cục bộ qua `npx serve` hoặc `python -m http.server`. Giao thức `file://` chặn nhiều tính năng trình duyệt.

**3. Lưu Trữ Artifact Phiên**
Tạo thư mục có timestamp cho mỗi phiên kiểm thử:
```bash
SESSION="$(date +%Y%m%d-%H%M%S)"
mkdir -p .claude/chrome-devtools/logs/$SESSION
```

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Chụp Màn Hình Trang Đích Để Xem Xét
**Tình huống**: Chụp màn hình toàn trang của trang đích mới để stakeholder xem xét.

**Quy trình**:
```bash
# Phục vụ bản build cục bộ
npx serve ./dist -p 3000 &

# Chụp màn hình
node scripts/screenshot.js --url http://localhost:3000 --output landing-full.png --full-page true

# Kiểm tra kích thước file (tự động nén nếu >5MB)
ls -lh landing-full.png
```

**Kết quả**: Màn hình toàn trang sẵn sàng để xem xét.

### Trường Hợp 2: Kiểm Thử Quy Trình Biểu Mẫu Nhiều Bước
**Tình huống**: Kiểm thử quy trình đăng ký và chụp màn hình tại mỗi bước.

**Quy trình**:
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

**Kết quả**: Màn hình từng bước để xác nhận.

## Xử Lý Sự Cố

**Vấn đề**: Script bị treo hoặc timeout
**Giải pháp**: Dùng flag `--timeout 60000` hoặc chiến lược `--wait-until load`. Một số trang có script chạy lâu.

**Vấn đề**: Không tìm thấy phần tử
**Giải pháp**: Dùng `aria-snapshot.js` để khám phá selector hoặc ref chính xác. Đừng đoán CSS selector.

**Vấn đề**: Màn hình thiếu ảnh
**Giải pháp**: Ảnh có thể được lazy-load qua animation kích hoạt cuộn. Cuộn trang trước:
```bash
node scripts/evaluate.js --script "window.scrollTo(0, document.body.scrollHeight)"
# Chờ, rồi chụp màn hình
```

**Vấn đề**: Lỗi phiên cũ
**Giải pháp**: Xóa `.browser-session.json` và thử lại. Kết nối trình duyệt đã hết hạn.

## Skill Liên Quan

- [SEO Optimization](/vi/docs/marketing/skills/seo) - Đo Core Web Vitals
- [Analytics](/vi/docs/marketing/skills/analytics) - Theo dõi hiệu suất
- [Media Processing](/vi/docs/marketing/skills/media-processing) - Xử lý sau màn hình

## Lệnh Liên Quan

- `/design/screenshot` - Phân tích màn hình thiết kế
- `/ckm:test` - Kiểm thử ứng dụng web
