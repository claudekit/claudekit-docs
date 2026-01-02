---
title: docker
description: Tài liệu hướng dẫn sử dụng kỹ năng docker
section: engineer
kit: engineer
category: skills/backend
order: 11
published: true
lang: vi
---

# Kỹ năng docker

Nền tảng container hóa để xây dựng, chạy và triển khai các ứng dụng trong các container biệt lập. Hoạt động với mọi ngôn ngữ hoặc framework.

## Khi nào nên sử dụng

Sử dụng docker khi bạn cần:
- Container hóa ứng dụng
- Tạo các Dockerfile
- Thiết lập Docker Compose
- Triển khai lên môi trường sản xuất
- Tạo môi trường phát triển đồng nhất
- Xây dựng luồng CI/CD
- Kiến trúc Microservices

## Bắt đầu nhanh

### Cách gọi kỹ năng

```
"Sử dụng docker để container hóa ứng dụng Node.js của tôi với:
- Dockerfile cho môi trường sản xuất
- Docker Compose với PostgreSQL
- Kiểm tra sức khỏe (Health checks)"
```

### Kết quả nhận được

Kỹ năng này sẽ giúp bạn:
1. Tạo Dockerfile tối ưu
2. Thiết lập Docker Compose
3. Cấu hình mạng (networking)
4. Thêm các bước kiểm tra sức khỏe
5. Triển khai các phương pháp bảo mật tốt nhất
6. Tối ưu hóa cho môi trường sản xuất
7. Thiết lập tích hợp CI/CD

## Các trường hợp sử dụng phổ biến

### Tạo Dockerfile cho môi trường sản xuất

```
"Sử dụng docker để tạo Dockerfile sản xuất cho ứng dụng Next.js 14 với:
- Multi-stage build
- Node 20 Alpine
- Người dùng không phải root (Non-root user)
- Tăng cường bảo mật"
```

### Thiết lập Docker Compose

```
"Sử dụng docker để thiết lập Docker Compose với:
- Ứng dụng web
- Cơ sở dữ liệu PostgreSQL
- Bộ nhớ đệm Redis
- Proxy ngược Nginx"
```

### Môi trường phát triển

```
"Sử dụng docker để tạo môi trường phát triển với:
- Tự động tải lại (Hot reload)
- Gắn kết ổ đĩa (Volume mounts)
- Dữ liệu mẫu cho cơ sở dữ liệu
- Cấu hình gỡ lỗi (Debug)"
```

### Triển khai sản xuất

```
"Sử dụng docker để chuẩn bị cho môi trường sản xuất:
- Tối ưu hóa kích thước hình ảnh (image)
- Thêm kiểm tra sức khỏe
- Cấu hình giới hạn tài nguyên
- Thiết lập nhật ký (logging)
- Triển khai quản lý bí mật (secrets management)"
```

## Các khái niệm chính

### Containers

Các tiến trình nhẹ, biệt lập, đóng gói ứng dụng cùng với các phụ thuộc:
- Cách ly hệ thống tệp
- Cách ly tiến trình
- Cách ly mạng
- Mặc định là tạm thời (ephemeral)

### Images (Hình ảnh)

Bản thiết kế cho các container:
- Hệ thống tệp phân lớp (Layered filesystem)
- Các lớp bất biến (Immutable layers)
- Có thể tái sử dụng giữa các container
- Được lưu trữ trong các kho chứa (registries)

### Volumes (Ổ đĩa)

Lưu trữ dữ liệu bền vững:
- Tồn tại ngay cả khi container bị xóa
- Chia sẻ dữ liệu giữa các container
- Được quản lý bởi Docker

### Networks (Mạng)

Giao tiếp giữa các container:
- Các mạng biệt lập
- Tự động phát hiện dịch vụ (Service discovery)
- Ánh xạ cổng (Port mapping)

## Ví dụ triển khai

### Ứng dụng Node.js

```
"Sử dụng docker để container hóa API Node.js với:
- Multi-stage build
- Chỉ bao gồm các phụ thuộc sản xuất
- Trình quản lý tiến trình PM2
- Endpoint kiểm tra sức khỏe"
```

### Ứng dụng Python

```
"Sử dụng docker để container hóa ứng dụng FastAPI với:
- Python 3.11 slim
- Môi trường ảo (Virtual environment)
- Server Gunicorn
- Người dùng không phải root"
```

### Ứng dụng Full Stack

```
"Sử dụng docker để thiết lập full stack với:
- Frontend React (Nginx)
- API Node.js
- PostgreSQL
- Redis
- Mạng dùng chung"
```

### Microservices

```
"Sử dụng docker để tạo thiết lập microservices:
- Nhiều dịch vụ
- Service mesh
- Cân bằng tải (Load balancing)
- Nhật ký tập trung"
```

## Phương pháp hay nhất

### Multi-Stage Builds

Tách biệt quá trình xây dựng và chạy:
- Kích thước ảnh cuối cùng nhỏ hơn
- Không có công cụ xây dựng trong môi trường sản xuất
- Bảo mật tốt hơn
- Triển khai nhanh hơn

### Layer Caching (Bộ nhớ đệm các lớp)

Tối ưu hóa bộ nhớ đệm:
- Sao chép các tệp package trước
- Cài đặt các phụ thuộc
- Sao chép mã nguồn cuối cùng
- Xây dựng lại nhanh hơn

### Bảo mật

Kỹ năng này đảm bảo:
- Sử dụng người dùng không phải root
- Các phiên bản hình ảnh cụ thể
- Không có bí mật trong hình ảnh
- Quét lỗ hổng bảo mật
- Hình ảnh cơ sở tối giản
- Hệ thống tệp chỉ đọc

### Tối ưu hóa hình ảnh

Giảm kích thước hình ảnh:
- Hình ảnh cơ sở Alpine
- Multi-stage builds
- Xóa các tệp không cần thiết
- Kết hợp các lệnh RUN

## Các luồng công việc thông thường

### Xây dựng và Chạy

```
"Sử dụng docker để:
1. Xây dựng hình ảnh với thẻ (tag)
2. Chạy container
3. Xem nhật ký
4. Kiểm tra container"
```

### Docker Compose

```
"Sử dụng docker để quản lý các dịch vụ:
- Khởi động tất cả dịch vụ
- Xem nhật ký
- Mở rộng (scale) dịch vụ
- Dừng và dọn dẹp"
```

### Triển khai sản xuất

```
"Sử dụng docker cho sản xuất:
- Xây dựng hình ảnh tối ưu
- Đẩy lên kho chứa (registry)
- Triển khai với kiểm tra sức khỏe
- Cấu hình tự động khởi động lại
- Thiết lập giới hạn tài nguyên"
```

## Tính năng nâng cao

### Kiểm tra sức khỏe (Health Checks)

```
"Sử dụng docker để thêm kiểm tra sức khỏe nhằm:
- Theo dõi trạng thái ứng dụng
- Kích hoạt tự động khởi động lại
- Tích hợp với các bộ điều phối (orchestrators)"
```

### Giới hạn tài nguyên

```
"Sử dụng docker để cấu hình:
- Giới hạn CPU
- Giới hạn bộ nhớ
- Giới hạn tiến trình
- Giới hạn I/O đĩa"
```

### Mạng (Networking)

```
"Sử dụng docker để thiết lập:
- Mạng cầu (bridge) tùy chỉnh
- Tự động phát hiện dịch vụ
- Công khai cổng (port publishing)
- Cách ly mạng"
```

### Volumes & Lưu trữ

```
"Sử dụng docker để quản lý lưu trữ:
- Các volume có tên
- Bind mounts
- Sao lưu volume
- Lưu trữ dữ liệu bền vững"
```

## Ví dụ theo ngôn ngữ cụ thể

### Node.js

```
"Sử dụng docker cho Node.js với:
- Multi-stage build
- npm ci cho các phụ thuộc
- Chế độ sản xuất
- Endpoint kiểm tra sức khỏe"
```

### Python

```
"Sử dụng docker cho Python với:
- Môi trường ảo
- Lưu bộ nhớ đệm cho requirements
- Server Gunicorn
- Người dùng không phải root"
```

### Go

```
"Sử dụng docker cho Go với:
- Hình ảnh cơ sở scratch
- Binary tĩnh
- Bề mặt tấn công tối thiểu
- Hình ảnh cuối cùng chỉ 5MB"
```

### Java

```
"Sử dụng docker cho Spring Boot với:
- JRE Alpine
- Thực thi file JAR
- Tối ưu hóa JVM
- Xử lý tắt máy đúng cách"
```

## Tích hợp CI/CD

### GitHub Actions

```
"Sử dụng docker trong GitHub Actions để:
- Xây dựng trên mỗi lần commit
- Chạy tests trong container
- Đẩy lên kho chứa
- Triển khai lên môi trường sản xuất"
```

### GitLab CI

```
"Sử dụng docker trong GitLab CI cho:
- Xây dựng Docker-in-Docker
- Các đường ống (pipelines) đa giai đoạn
- Tích hợp kho chứa
- Triển khai tự động"
```

## Xử lý sự cố

### Vấn đề khi xây dựng

Các vấn đề phổ biến:
- Bộ nhớ đệm không hoạt động → Kiểm tra thứ tự các lớp (layer)
- Xây dựng chậm → Tối ưu hóa Dockerfile
- Hình ảnh quá lớn → Sử dụng multi-stage builds

### Vấn đề khi chạy

Các vấn đề phổ biến:
- Container tự thoát → Kiểm tra nhật ký
- Không thể kết nối → Xác minh ánh xạ cổng
- Lỗi quyền truy cập → Kiểm tra người dùng/volumes

### Vấn đề hiệu suất

Các vấn đề phổ biến:
- Khởi động chậm → Giảm kích thước hình ảnh
- Tốn nhiều bộ nhớ → Thiết lập giới hạn
- Đầy đĩa → Dọn dẹp hình ảnh/container

## Tham khảo nhanh

### Các lệnh thông dụng

| **Tác vụ** | **Lệnh** |
|----------|-------------|
| Xây dựng hình ảnh | `docker build -t app:1.0 .` |
| Chạy container | `docker run -d -p 8080:3000 app:1.0` |
| Xem nhật ký | `docker logs -f container` |
| Truy cập shell | `docker exec -it container sh` |
| Dừng container | `docker stop container` |
| Chạy Compose | `docker compose up -d` |
| Dừng Compose | `docker compose down` |
| Dọn dẹp hệ thống | `docker system prune -a` |

### Hình ảnh cơ sở tốt nhất

| **Ngôn ngữ** | **Hình ảnh cơ sở** |
|--------------|----------------|
| Node.js | `node:20-alpine` |
| Python | `python:3.11-slim` |
| Java | `eclipse-temurin:21-jre-alpine` |
| Go | `scratch` |
| .NET | `mcr.microsoft.com/dotnet/aspnet:8.0-alpine` |

## Các ví dụ nhanh

**Container hóa đơn giản:**
```
"Sử dụng docker để container hóa ứng dụng của tôi"
```

**Sẵn sàng cho sản xuất:**
```
"Sử dụng docker cho sản xuất với:
- Dockerfile tối ưu
- Tăng cường bảo mật
- Kiểm tra sức khỏe
- Giới hạn tài nguyên
- Cấu hình nhật ký"
```

**Môi trường phát triển đầy đủ:**
```
"Sử dụng docker để tạo môi trường phát triển với:
- Tự động tải lại
- Tất cả các dịch vụ
- Dữ liệu mẫu
- Các công cụ gỡ lỗi"
```

## Bước tiếp theo

- [Hướng dẫn triển khai](/docs/use-cases/)
- [Tích hợp PostgreSQL](/docs/engineer/skills/postgresql-psql)
- [Ví dụ CI/CD](/docs/use-cases/)

---

**Tóm lại:** kỹ năng docker tạo ra các ứng dụng container hóa sẵn sàng cho sản xuất. Chỉ cần gọi và mô tả nhu cầu container hóa của bạn.
