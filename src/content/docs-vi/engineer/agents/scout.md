---
title: Agent Scout
description: Nhanh chóng định vị các tệp liên quan trong các kho mã nguồn lớn bằng cách sử dụng tìm kiếm agent song song với Gemini và OpenCode
section: engineer
kit: engineer
category: agents
order: 8
published: true
lang: vi
---

# Agent Scout

Agent scout nhanh chóng định vị các tệp liên quan trong các kho mã nguồn lớn bằng cách điều phối nhiều agent AI bên ngoài (Gemini, OpenCode) chạy song song, cung cấp danh sách tệp có thể thực hiện được trong vòng chưa đầy 5 phút.

## Scout làm gì?

- Nhanh chóng định vị các tệp liên quan trong các kho mã nguồn ở mọi quy mô.
- Điều phối song song nhiều agent AI bên ngoài (Gemini, OpenCode).
- Chia nhỏ mã nguồn thành các phần logic để tìm kiếm hiệu quả.
- Tổng hợp các phát hiện từ nhiều agent thành các danh sách tệp có tổ chức.
- Xử lý các trường hợp hết thời gian chờ (timeout) một cách khéo léo mà không cần khởi động lại.
- Cung cấp đường dẫn tệp được sắp xếp theo mức độ liên quan và mục đích.

## Khi nào nên sử dụng?

Sử dụng scout khi:
- Bắt đầu công việc tính năng trải dài trên nhiều thư mục.
- Tìm kiếm các tệp liên quan đến một chức năng cụ thể.
- Gỡ lỗi (debugging) ở các phần chưa biết của mã nguồn.
- Hiểu cấu trúc dự án trước khi thực hiện các thay đổi.
- Định vị các điểm tích hợp cho các tính năng mới.
- Trước khi thực hiện tái cấu trúc (refactoring) trên diện rộng.
- Làm quen với một kho mã nguồn lạ.

## Ví dụ nhanh

```bash
# Tìm các tệp liên quan đến xác thực (authentication)
/scout "locate all authentication-related files" 5
```

**Điều gì xảy ra**:
1. Scout chia mã nguồn thành 5 phần logic.
2. Scout kích hoạt 5 agent song song.
3. Mỗi agent tìm kiếm trong phần được giao.
4. Kết quả: Danh sách các đường dẫn tệp liên quan được sắp xếp gọn gàng trong chưa đầy 5 phút.

## Cách thức hoạt động

### Bước 1: Quyết định quy mô (Scale)
Scout xác định số lượng agent cần kích hoạt dựa trên tham số scale (ví dụ: scale <= 3 dùng Gemini, scale > 3 dùng kết hợp Gemini + OpenCode).

### Bước 2: Chia nhỏ mã nguồn
Scout chia mã nguồn thành các phần logic như `/src/auth/`, `/src/middleware/`, `/src/api/`, v.v., để các agent tìm kiếm song song.

### Bước 3: Tìm kiếm song song
Nhiều agent tìm kiếm đồng thời với giới hạn 3 phút mỗi agent. Nếu hết giờ, Scout sử dụng các kết quả từng phần để đảm bảo mục tiêu hoàn thành trong dưới 5 phút.

### Bước 4: Tổng hợp kết quả
Scout tổng hợp các phát hiện thành danh sách tệp được nhóm theo mục đích (Core, Middleware, API, Frontend, Tests, Config, Docs).

## Các chỉ số thành công

Hoạt động của Scout được coi là thành công khi:
- **Hoàn tất**: Mọi tìm kiếm kết thúc trong dưới 5 phút.
- **Khả thi**: Danh sách tệp được tổ chức tốt và sẵn sàng sử dụng.
- **Liên quan**: Hơn 80% số tệp thực sự liên quan đến yêu cầu.
- **Toàn diện**: Bao phủ đủ các khu vực chính (core, tests, config, docs).

---

**Thông điệp chính**: Scout song song hóa việc tìm kiếm tệp trên nhiều agent AI để cung cấp danh sách tệp toàn diện, có tổ chức trong chưa đầy 5 phút, ngay cả với các kho mã nguồn lớn.
