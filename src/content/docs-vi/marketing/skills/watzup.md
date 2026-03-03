---
lang: vi
title: "ckm:watzup"
description: "Xem lại thay đổi gần đây và tổng kết phiên làm việc"
section: marketing
kit: marketing
category: skills
order: 50
---

# ckm:watzup

> Nhanh chóng nắm bắt những gì đã xảy ra — tổng kết phiên làm việc và thay đổi gần đây.

## Kỹ Năng Này Làm Gì

Skill `ckm:watzup` tóm tắt ngữ cảnh hiện tại của dự án: file nào đã thay đổi, tác vụ nào đã hoàn thành, trạng thái các chiến dịch và những gì cần làm tiếp theo. Đặc biệt hữu ích khi tiếp tục công việc sau gián đoạn hoặc bắt đầu phiên mới.

Một lệnh để lấy lại đà làm việc mà không cần đọc lại nhiều files.

## Bắt Đầu Nhanh

```
/ckm:watzup
```

## Tính Năng Chính

- **Git diff summary**: Tóm tắt các thay đổi file gần nhất
- **Task status**: Tác vụ nào đang pending, in progress, completed
- **Campaign status**: Trạng thái các chiến dịch đang chạy
- **Next actions**: 3-5 việc ưu tiên cần làm tiếp theo
- **Context recap**: Nhắc lại quyết định quan trọng từ phiên trước

## Ví Dụ Sử Dụng

**Bắt đầu ngày mới:**
```
/ckm:watzup
```
Xem tổng quan: hôm qua làm gì, hôm nay cần làm gì.

**Sau khi gián đoạn:**
```
/ckm:watzup Tóm tắt nhanh trạng thái dự án sau 3 ngày không làm việc
```

**Cuối phiên:**
```
/ckm:watzup end-of-session Tổng kết những gì đã hoàn thành hôm nay và ghi lại cho phiên tiếp theo
```

## Liên Quan

- [ckm:journal](/vi/docs/marketing/skills/journal) - Ghi nhật ký chi tiết hơn
- [ckm:kanban](/vi/docs/marketing/skills/kanban) - Quản lý tác vụ chi tiết
- [ckm:hub](/vi/docs/marketing/skills/hub) - Tổng quan trung tâm marketing
