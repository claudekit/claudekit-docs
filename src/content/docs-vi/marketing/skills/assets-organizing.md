---
lang: vi
title: "ckm:assets-organizing"
description: "Tổ chức đầu ra từ lệnh và agent vào thư mục assets/"
section: marketing
kit: marketing
category: skills
order: 61
---

> Giữ cho project gọn gàng bằng cách tổ chức tất cả đầu ra được tạo ra vào một cấu trúc thư mục nhất quán.

## Skill Này Làm Gì

**Thách thức**: Khi nhiều agent và lệnh tạo ra files, hình ảnh, báo cáo và nội dung, workspace nhanh chóng trở nên lộn xộn. Tìm kiếm files khó khăn và context bị mất.

**Giải pháp**: Skill assets-organizing thiết lập và duy trì cấu trúc thư mục `assets/` chuẩn hóa, tự động phân loại đầu ra theo loại, và cung cấp quy ước đặt tên nhất quán.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi agent tạo ra files đầu ra cần lưu trữ có tổ chức.

**Tường minh**: Kích hoạt qua prompt:
```
Activate assets-organizing skill to organize [loại đầu ra]
```

## Tính Năng

### 1. Cấu Trúc Thư Mục Chuẩn
Tổ chức tất cả đầu ra theo cấu trúc nhất quán.

```
assets/
├── images/
│   ├── banners/
│   ├── logos/
│   ├── social/
│   └── screenshots/
├── content/
│   ├── blog/
│   ├── emails/
│   ├── social-posts/
│   └── ads/
├── reports/
│   ├── analytics/
│   ├── seo/
│   └── campaigns/
├── designs/
│   ├── brand/
│   ├── ui/
│   └── print/
└── data/
    ├── exports/
    ├── research/
    └── templates/
```

### 2. Quy Ước Đặt Tên Files
Đặt tên files nhất quán để dễ tìm kiếm và sắp xếp.

**Format**: `{YYYY-MM-DD}-{loại}-{slug}.{ext}`

**Ví dụ**:
```
2025-01-15-banner-homepage-hero-v2.png
2025-01-15-email-welcome-series-draft.md
2025-01-15-report-weekly-analytics.pdf
2025-01-15-social-linkedin-product-launch.txt
```

### 3. Phân Loại Tự Động
Tự động đặt files vào thư mục phù hợp dựa trên loại và ngữ cảnh.

**Quy tắc phân loại**:
| Loại đầu ra | Thư mục đích |
|-------------|--------------|
| PNG, JPG, WebP | `assets/images/` |
| Markdown nội dung | `assets/content/` |
| CSV, JSON data | `assets/data/exports/` |
| PDF báo cáo | `assets/reports/` |
| Figma, SVG thiết kế | `assets/designs/` |

### 4. Metadata Tracking
Duy trì index file để theo dõi tất cả assets.

**Ví dụ `assets/index.md`**:
```markdown
# Assets Index

## Cập Nhật Gần Nhất
- 2025-01-15: Banner homepage hero v2 (images/banners/)
- 2025-01-14: Báo cáo tuần analytics (reports/analytics/)
- 2025-01-13: Email welcome series (content/emails/)

## Thống Kê
- Tổng files: 47
- Dung lượng: 128 MB
- Loại phổ biến: images (23), content (15), reports (9)
```

## Điều Kiện Tiên Quyết

- Quyền ghi vào thư mục project
- Cấu trúc project cơ bản đã thiết lập

## Cấu Hình

**Tùy chỉnh cấu trúc** trong `.claude/assets-config.json`:
```json
{
  "rootDir": "assets/",
  "namingPattern": "{date}-{type}-{slug}",
  "autoOrganize": true,
  "categories": {
    "images": ["png", "jpg", "webp", "gif", "svg"],
    "content": ["md", "txt", "html"],
    "data": ["csv", "json", "xlsx"],
    "reports": ["pdf", "md"]
  }
}
```

## Thực Hành Tốt Nhất

**1. Tổ Chức Ngay Khi Tạo**
Đặt file vào đúng thư mục ngay từ đầu thay vì dọn dẹp sau.

**2. Dùng Versioning Rõ Ràng**
Thêm `-v2`, `-v3` thay vì ghi đè file cũ. Giữ lại lịch sử iteration.

**3. Dọn Dẹp Định Kỳ**
Xóa files tạm, drafts cũ và exports không dùng mỗi tháng.

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Campaign Launch
**Tình huống**: Chuẩn bị launch chiến dịch với nhiều loại assets.

**Cấu trúc**:
```
assets/
└── campaigns/
    └── 2025-q1-product-launch/
        ├── images/
        ├── copy/
        ├── emails/
        └── social/
```

### Trường Hợp 2: Tổ Chức Đầu Ra Agent
**Tình huống**: Nhiều agent tạo ra báo cáo và nội dung song song.

**Quy trình**:
1. Mỗi agent lưu đầu ra vào `assets/{loại}/{agent-name}/`
2. Lead agent tổng hợp và di chuyển vào thư mục chính
3. Cập nhật `assets/index.md`

## Xử Lý Sự Cố

**Vấn đề**: Files bị đặt sai thư mục
**Giải pháp**: Chạy lệnh reorganize: `Activate assets-organizing skill to reorganize existing files`

**Vấn đề**: Tên files trùng lặp
**Giải pháp**: Luôn thêm timestamp và version suffix để tránh conflict.

## Skill Liên Quan

- [Brand](/vi/docs/marketing/skills/brand) - Assets brand identity
- [Banner Design](/vi/docs/marketing/skills/banner-design) - Tạo và lưu banner
- [Content Marketing](/vi/docs/marketing/skills/content-marketing) - Tổ chức nội dung

## Lệnh Liên Quan

- `/ckm:assets-organizing` - Tổ chức assets hiện có
- `/ckm:storage` - Quản lý lưu trữ project
