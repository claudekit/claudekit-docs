---
lang: vi
title: "ckm:kanban"
description: "Bảng điều phối agent AI cho quản lý tác vụ"
section: marketing
kit: marketing
category: skills
order: 40
---

# Kanban

> Điều phối nhiều AI agents làm việc song song với bảng Kanban trực quan.

## Kỹ Năng Này Làm Gì

Skill `ckm:kanban` cung cấp bảng Kanban để quản lý và theo dõi tác vụ marketing — đặc biệt khi chạy nhiều AI agents song song. Hiển thị trạng thái (Todo, In Progress, Done), phân công agent và phát hiện bottleneck.

Phù hợp cho sprint marketing, ra mắt chiến dịch lớn hoặc bất kỳ dự án nào cần điều phối nhiều luồng công việc đồng thời.

## Bắt Đầu Nhanh

```
/ckm:kanban
```

Khởi tạo board mới:

```
/ckm:kanban init Tạo board Kanban cho chiến dịch ra mắt sản phẩm tháng 4
```

## Tính Năng Chính

- **Bảng trực quan**: Todo → In Progress → Review → Done
- **Phân công agent**: Giao tác vụ cho agent phù hợp
- **Theo dõi tiến độ**: Trạng thái cập nhật theo thời gian thực
- **Phát hiện bottleneck**: Cảnh báo khi tác vụ bị block
- **Sprint planning**: Lập kế hoạch sprint 1-2 tuần

## Ví Dụ Sử Dụng

**Tạo board chiến dịch:**
```
/ckm:kanban Tạo board cho chiến dịch Q2 — chia nhỏ thành tác vụ cho 3 agents: content, social, email
```

**Kiểm tra tiến độ:**
```
/ckm:kanban status Hiện trạng các tác vụ đang thực hiện và block issues
```

**Sprint planning:**
```
/ckm:kanban plan Lập kế hoạch sprint 2 tuần tới dựa trên backlog hiện có
```

## Liên Quan

- [ckm:hub](/vi/docs/marketing/skills/hub) - Tổng quan trung tâm
- [ckm:plan](/vi/docs/marketing/skills/plan) - Lập kế hoạch chi tiết
- [ckm:watzup](/vi/docs/marketing/skills/watzup) - Tổng kết phiên làm việc
