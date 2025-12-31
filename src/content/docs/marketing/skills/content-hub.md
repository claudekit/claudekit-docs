---
title: "Content Hub"
description: "Bộ sưu tập hình ảnh tài sản dựa trên trình duyệt để quản lý tài sản tiếp thị với bối cảnh thương hiệu, tìm kiếm/bộ lọc và đồng bộ hóa R2."
lang: vi
section: marketing
category: skills
order: 16
---

> Duyệt và quản lý tài sản tiếp thị thông qua bộ sưu tập hình ảnh với thanh bối cảnh thương hiệu và nút hành động.

## Skill Này Làm Gì

**Thách Thức**: Các đội tiếp thị tích lũy hàng trăm tài sản (banner, logo, video) trên các thư mục cục bộ. Tìm tài sản phù hợp hoặc kiểm tra tuân thủ thương hiệu đòi hỏi tìm kiếm thủ công thông qua các thư mục.

**Giải Pháp**: Skill Content Hub cung cấp bộ sưu tập hình ảnh dựa trên trình duyệt có lưới hình nhỏ, bộ lọc/tìm kiếm, thanh bối cảnh thương hiệu và nút hành động (xem trước, chỉnh sửa, tạo). Manifest sẵn sàng R2 hỗ trợ đồng bộ hóa đám mây trong tương lai với Cloudflare R2.

## Kích Hoạt

**Ẩn Danh**: Không được kích hoạt tự động (công cụ theo yêu cầu).

**Rõ Ràng**: `/write:hub` hoặc `node .claude/skills/content-hub/scripts/server.cjs --open`

## Khả Năng

### 1. Bộ Sưu Tập Hình Ảnh Tài Sản
Lưới hình nhỏ hiển thị tất cả tài sản trong thư mục `assets/` có bộ lọc loại.

**Tính Năng**:
- Xem trước hình nhỏ (hình ảnh, video, tài liệu)
- Bộ lọc theo loại (banner, thiết kế, logo, video)
- Tìm kiếm theo tên tệp hoặc mô tả
- Nhấp để xem toàn kích thước

**Loại Tài Sản Phát Hiện Tự Động**:
- Hình ảnh: PNG, JPEG, SVG, WebP
- Video: MP4, MOV, WebM
- Tài liệu: PDF

### 2. Thanh Bối Cảnh Thương Hiệu
Hiển thị trực tiếp màu thương hiệu và giọng từ `docs/brand-guidelines.md`.

**Hiển Thị**:
- Bảng màu với mã hex
- Các chiều giọng thương hiệu
- Khung nhắn tin
- Ghi chú kiểu hình ảnh

**Trường Hợp Sử Dụng**: Tạo tài sản mới với bối cảnh thương hiệu có thể nhìn thấy để tham chiếu.

### 3. Tác Vụ Tài Sản
Hành động nhanh trên mỗi tài sản mà không cần rời khỏi trình duyệt.

**Tác Vụ Khả Dụng**:
- **Xem Trước**: Xem toàn kích thước trong modal
- **Chỉnh Sửa Trong Claude**: Mở đường dẫn tệp để chỉnh sửa
- **Sao Chép Đường Dẫn**: Sao chép đường dẫn tuyệt đối vào clipboard
- **Tạo Tương Tự**: Sử dụng làm tham chiếu cho tạo AI

### 4. Manifest Sẵn Sàng R2
Siêu dữ liệu tài sản được lưu trữ trong `.assets/manifest.json` có các trường R2 Cloudflare.

**Lược Đồ Manifest**:
```json
{
  "id": "unique-id",
  "path": "banners/hero.png",
  "category": "banner",
  "size": 1024000,
  "created": "2025-12-29",
  "r2": {
    "status": "local",  // local|pending|synced|error
    "bucket": null,
    "url": null
  }
}
```

**Tương Lai**: Tính năng đồng bộ hóa đám mây sẽ tải lên R2 (hiện tại UI bị vô hiệu hóa).

## Điều Kiện Tiên Quyết

- Node.js 18+
- Tài sản trong thư mục `assets/`
- Hướng dẫn thương hiệu trong `docs/brand-guidelines.md` (tùy chọn nhưng được khuyến nghị)

## Cấu Hình

**Máy Chủ Bắt Đầu**:
```bash
# Mở bộ sưu tập trong trình duyệt
node .claude/skills/content-hub/scripts/server.cjs --open

# Quét lại thư mục tài sản
node .claude/skills/content-hub/scripts/server.cjs --scan

# Dừng máy chủ
node .claude/skills/content-hub/scripts/server.cjs --stop
```

**Tuyến API**:
| Tuyến | Mục Đích |
|-------|---------|
| `/hub` | HTML Bộ Sưu Tập |
| `/api/assets` | Danh sách Tài Sản JSON |
| `/api/brand` | JSON Bối Cảnh Thương Hiệu |
| `/api/scan` | Kích Hoạt Quét Lại |
| `/file/*` | Phục Vụ Các Tệp Cục Bộ |

## Phương Pháp Tốt Nhất

**1. Sử Dụng Tên Tài Sản Nhất Quán**
Làm theo quy ước đặt tên skill `brand-guidelines` để tìm kiếm dễ dàng hơn.

**2. Tổ Chức Theo Loại**
Đặt tài sản trong các thư mục cụ thể loại (banner/, logo/, video/) để bộ lọc tốt hơn.

**3. Quét Lại Sau Khi Thêm Tài Sản**
Chạy cờ `--scan` hoặc sử dụng điểm cuối `/api/scan` để làm mới bộ sưu tập sau khi thêm tệp mới.

## Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp Sử Dụng 1: Tìm Tài Sản Cho Bài Viết Phương Tiện Xã Hội
**Tình Huống**: Cần banner sản phẩm cho bài viết Instagram.

**Quy Trình Công Việc**:
1. Mở bộ sưu tập: `/write:hub`
2. Bộ lọc theo loại: "banner"
3. Tìm kiếm: "sản phẩm"
4. Xem trước các ứng cử viên
5. Sao chép đường dẫn của tài sản đã chọn
6. Sử dụng trong công cụ phương tiện xã hội hoặc trình soạn thảo thiết kế

**Tiết Kiệm Thời Gian**: 5-10 phút so với duyệt thư mục thủ công.

### Trường Hợp Sử Dụng 2: Tạo Tài Sản Căn Chỉnh Thương Hiệu
**Tình Huống**: Tạo banner mới với màu thương hiệu hiển thị.

**Quy Trình Công Việc**:
1. Mở bộ sưu tập có thanh bối cảnh thương hiệu hiển thị
2. Ghi chú màu thương hiệu và giọng từ thanh bên
3. Nhấp vào "Tạo Tương Tự" trên banner hiện tại
4. Sử dụng bối cảnh thương hiệu trong prompt AI
5. Tài sản được tạo tự động khớp với hướng dẫn thương hiệu

**Kết Quả**: Tài sản mới nhất quán với nhận dạng thương hiệu.

## Khắc Phục Sự Cố

**Vấn Đề**: Bộ sưu tập không hiển thị tài sản mới
**Giải Pháp**: Chạy `node scripts/server.cjs --scan` để quét lại thư mục `assets/`.

**Vấn Đề**: Bối cảnh thương hiệu không hiển thị
**Giải Pháp**: Xác minh `docs/brand-guidelines.md` tồn tại và chứa các phần màu/giọng.

**Vấn Đề**: Máy chủ sẽ không bắt đầu (cổng đang được sử dụng)
**Giải Pháp**: Kiểm tra nếu máy chủ đã chạy. Sử dụng cờ `--stop` để dừng phiên hiện tại.

## Kỹ Năng Liên Quan

- [Brand Guidelines](/vi/docs/marketing/skills/brand-guidelines) - Xác nhận tài sản và bối cảnh thương hiệu
- [AI Multimodal](/vi/docs/marketing/skills/ai-multimodal) - Tạo tài sản mới
- [Design](/vi/docs/core/skills/design) - Tạo tài sản thiết kế

## Lệnh Liên Quan

- `/write:hub` - Mở thư viện content hub
- `/dashboard` - Mở bảng điều khiển tiếp thị (bao gồm thư viện tài sản)
