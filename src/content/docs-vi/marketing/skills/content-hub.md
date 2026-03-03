---
lang: vi
title: "ckm:content-hub"
description: "Thư viện tài sản dựa trên trình duyệt để quản lý tài sản marketing với ngữ cảnh thương hiệu, tìm kiếm/lọc và đồng bộ R2."
section: marketing
category: skills
order: 16
---

# Content Hub

> Duyệt và quản lý tài sản marketing qua thư viện hình ảnh với thanh bên ngữ cảnh thương hiệu và các nút hành động.

## Skill Này Làm Gì

**Thách thức**: Nhóm marketing tích lũy hàng trăm tài sản (banner, logo, video) trên các thư mục cục bộ. Tìm đúng tài sản hoặc kiểm tra tuân thủ thương hiệu đòi hỏi tìm kiếm thủ công qua các thư mục.

**Giải pháp**: Skill Content Hub cung cấp thư viện tài sản dựa trên trình duyệt với lưới thumbnail, bộ lọc/tìm kiếm, thanh bên ngữ cảnh thương hiệu và các nút hành động (xem trước, chỉnh sửa, tạo). Manifest sẵn sàng R2 hỗ trợ đồng bộ cloud tương lai với Cloudflare R2.

## Kích Hoạt

**Ngầm định**: Không tự động kích hoạt (công cụ theo yêu cầu).

**Tường minh**: `/ckm:write:hub` hoặc `node .claude/skills/content-hub/scripts/server.cjs --open`

## Tính Năng

### 1. Xem Thư Viện Tài Sản
Lưới thumbnail hiển thị tất cả tài sản trong thư mục `assets/` với lọc theo loại.

**Tính năng**:
- Xem trước thumbnail (ảnh, video, tài liệu)
- Lọc theo loại (banner, design, logo, video)
- Tìm kiếm theo tên file hoặc mô tả
- Nhấp để xem kích thước đầy đủ

**Loại tài sản tự động phát hiện**:
- Ảnh: PNG, JPEG, SVG, WebP
- Video: MP4, MOV, WebM
- Tài liệu: PDF

### 2. Thanh Bên Ngữ Cảnh Thương Hiệu
Hiển thị trực tiếp màu sắc và giọng nói thương hiệu từ `docs/brand-guidelines.md`.

**Hiển thị**:
- Bảng màu với mã hex
- Các chiều giọng nói thương hiệu
- Khung nhắn tin
- Ghi chú phong cách hình ảnh

**Trường hợp sử dụng**: Tạo tài sản mới với ngữ cảnh thương hiệu hiển thị để tham khảo.

### 3. Hành Động Tài Sản
Hành động nhanh trên mỗi tài sản mà không rời khỏi trình duyệt.

**Hành động có sẵn**:
- **Xem trước**: Xem kích thước đầy đủ trong modal
- **Chỉnh sửa trong Claude**: Mở đường dẫn file để chỉnh sửa
- **Sao chép đường dẫn**: Sao chép đường dẫn tuyệt đối vào clipboard
- **Tạo tương tự**: Dùng làm tham chiếu cho tạo AI

### 4. Manifest Sẵn Sàng R2
Metadata tài sản được lưu trong `.assets/manifest.json` với các trường Cloudflare R2.

**Schema manifest**:
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

**Tương lai**: Tính năng đồng bộ cloud sẽ tải lên R2 (hiện tại UI đã tắt).

## Điều Kiện Tiên Quyết

- Node.js 18+
- Tài sản trong thư mục `assets/`
- Hướng dẫn thương hiệu trong `docs/brand-guidelines.md` (tùy chọn nhưng khuyến nghị)

## Cấu Hình

**Khởi động server**:
```bash
# Mở thư viện trong trình duyệt
node .claude/skills/content-hub/scripts/server.cjs --open

# Quét lại thư mục tài sản
node .claude/skills/content-hub/scripts/server.cjs --scan

# Dừng server
node .claude/skills/content-hub/scripts/server.cjs --stop
```

**API Routes**:
| Route | Mục đích |
|-------|---------|
| `/ckm:hub` | HTML thư viện |
| `/api/assets` | JSON danh sách tài sản |
| `/api/brand` | JSON ngữ cảnh thương hiệu |
| `/api/scan` | Kích hoạt quét lại |
| `/file/*` | Phục vụ file cục bộ |

## Thực Hành Tốt Nhất

**1. Dùng Tên Tài Sản Nhất Quán**
Tuân theo quy ước đặt tên từ skill `brand` để tìm kiếm dễ hơn.

**2. Tổ Chức Theo Loại**
Đặt tài sản vào thư mục theo loại (banner/, logo/, video/) để lọc tốt hơn.

**3. Quét Lại Sau Khi Thêm Tài Sản**
Chạy flag `--scan` hoặc dùng endpoint `/api/scan` để làm mới thư viện sau khi thêm file mới.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Tìm Tài Sản Cho Bài Đăng Mạng Xã Hội
**Tình huống**: Cần banner sản phẩm cho bài đăng Instagram.

**Quy trình**:
1. Mở thư viện: `/ckm:write:hub`
2. Lọc theo loại: "banner"
3. Tìm kiếm: "product"
4. Xem trước các ứng viên
5. Sao chép đường dẫn tài sản đã chọn
6. Dùng trong công cụ mạng xã hội hoặc trình chỉnh sửa thiết kế

**Tiết kiệm thời gian**: 5-10 phút so với duyệt thư mục thủ công.

### Trường Hợp 2: Tạo Tài Sản Phù Hợp Thương Hiệu
**Tình huống**: Tạo banner mới với màu sắc thương hiệu hiển thị.

**Quy trình**:
1. Mở thư viện với thanh bên ngữ cảnh thương hiệu hiển thị
2. Ghi chú màu sắc và giọng nói thương hiệu từ thanh bên
3. Nhấp "Generate Similar" trên banner hiện có
4. Dùng ngữ cảnh thương hiệu trong prompt AI
5. Tài sản được tạo tự động khớp với hướng dẫn thương hiệu

**Kết quả**: Tài sản mới nhất quán với nhận diện thương hiệu.

## Xử Lý Sự Cố

**Vấn đề**: Thư viện không hiển thị tài sản mới
**Giải pháp**: Chạy `node scripts/server.cjs --scan` để quét lại thư mục `assets/`.

**Vấn đề**: Ngữ cảnh thương hiệu không hiển thị
**Giải pháp**: Xác minh `docs/brand-guidelines.md` tồn tại và chứa các phần màu sắc/giọng nói.

**Vấn đề**: Server không khởi động (cổng đang dùng)
**Giải pháp**: Kiểm tra xem server đã chạy chưa. Dùng flag `--stop` để dừng phiên hiện tại.

## Skill Liên Quan

- [Brand Guidelines](/vi/docs/marketing/skills/brand) - Xác nhận tài sản và ngữ cảnh thương hiệu
- [AI Multimodal](/vi/docs/marketing/skills/ai-multimodal) - Tạo tài sản mới
- [Design](/vi/docs/engineer/skills/frontend-design) - Tạo tài sản thiết kế

## Lệnh Liên Quan

- `/ckm:write:hub` - Mở thư viện content hub
- `/ckm:dashboard` - Mở dashboard marketing (bao gồm thư viện tài sản)
