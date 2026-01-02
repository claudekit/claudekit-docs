---
title: Agent Journal Writer
description: Ghi chép lại các thất bại kỹ thuật và khó khăn với sự trung thực tuyệt đối và cảm xúc chân thực
section: engineer
kit: engineer
category: agents
order: 15
published: true
lang: vi
---

# Agent Journal Writer

Agent journal-writer ghi lại các thất bại kỹ thuật, những bước lùi và những khoảnh khắc khó khăn trong quá trình phát triển phần mềm với sự trung thực tuyệt đối, nắm bắt cả chi tiết kỹ thuật lẫn thực tế cảm xúc của những tình huống đầy thử thách.

## Mục đích

Tạo ra các tài liệu xác thực về những gì đã sai, tại sao nó lại quan trọng, cảm giác lúc đó như thế nào, những gì đã được thử nghiệm và những gì đã học được - biến thất bại thành những trải nghiệm học tập quý giá cho cả đội ngũ.

## Khi nào được kích hoạt

Agent journal-writer kích hoạt khi:
- Sử dụng lệnh `/journal`
- Khi xảy ra lỗi kiểm thử lặp đi lặp lại
- Khi các lỗi nghiêm trọng chặn việc phát hành (release)
- Khi việc triển khai thất bại cần được tài liệu hóa
- Khi các lỗ hổng bảo mật được phát hiện
- Khi các quyết định kiến trúc mang lại kết quả ngược mong đợi
- Khi đội ngũ cần học hỏi từ những sai lầm

## Khả năng

### Tài liệu hóa trung thực
- **Ghi lại thất bại**: Mô tả những gì thực sự đã xảy ra mà không nói giảm nói tránh.
- **Bối cảnh cảm xúc**: Ghi lại sự thất vọng, căng thẳng và áp lực.
- **Chi tiết kỹ thuật**: Bao gồm thông báo lỗi, stack traces, nhật ký (logs).
- **Dòng thời gian**: Khi nào mọi thứ bắt đầu hỏng, nó kéo dài bao lâu.
- **Tác động**: Ai bị ảnh hưởng, mức độ nghiêm trọng ra sao.

### Phân tích nguyên nhân gốc rễ
- **Điều tra**: Các bước gỡ lỗi (debugging) đã thực hiện.
- **Kiểm thử giả thuyết**: Những lý thuyết nào đã được khám phá.
- **Những nỗ lực thất bại**: Những bản sửa lỗi nào đã được thử và tại sao chúng không hoạt động.
- **Nguyên nhân thực sự**: Vấn đề thực sự hóa ra là gì.

### Trích xuất bài học
- **Bài học kinh nghiệm**: Đội ngũ nên rút ra điều gì.
- **Ngăn ngừa**: Cách tránh điều này trong tương lai.
- **Dấu hiệu cảnh báo**: Cần chú ý điều gì cho lần tới.
- **Cải thiện quy trình**: Những gì cần thay đổi.

### Kể chuyện chân thực
- **Ngôn ngữ thực tế**: Sử dụng những từ ngữ thực tế mà lập trình viên hay nói (ví dụ: "cái này tệ quá", "chuyện gì đang xảy ra vậy?").
- **Không nói kiểu công sở**: Tránh ngôn ngữ kinh doanh đã được tẩy sạch.
- **Thể hiện cảm xúc**: Ghi lại sự thất vọng, kiệt sức, hoặc sự nhẹ nhõm.
- **Xây dựng lòng tin**: Sự trung thực xây dựng sự an toàn về tâm lý trong đội ngũ.

## Ví dụ sử dụng

### Lỗi nghiêm trọng trước giờ phát hành
**Đầu vào**: "Phát hiện lỗi race condition trong hệ thống thanh toán 2 giờ trước khi phát hành."
**Đầu ra (Journal)**: Một bài viết chi tiết với tiêu đề gây ấn tượng như "Hệ thống thanh toán suýt chút nữa đã tính phí người dùng hai lần", mô tả sự cố, các nỗ lực sửa lỗi thất bại (ví dụ: thêm ràng buộc DB, khóa lạc quan), và cuối cùng là giải pháp thực sự (sử dụng Idempotency Key).

### Thất bại khi triển khai Kubernetes
**Đầu vào**: "Triển khai K8s thất bại liên tục trong 6 giờ qua với lỗi CrashLoopBackOff."
**Đầu ra (Journal)**: "Sáu giờ trong địa ngục CrashLoopBackOff", phân tích quá trình tìm kiếm nguyên nhân (hóa ra là do đổi tên script trong `package.json` nhưng quên cập nhật file config CI/CD), tính toán chi phí thiệt hại (doanh thu mất đi, thời gian của kỹ sư), và các biện pháp ngăn chặn như thêm bước xác nhận build artifacts.

## Nguyên tắc viết
1. **Trung thực tuyệt đối**: "Chúng tôi đã làm hỏng mọi chuyện" thay vì "Gặp sự cố không mong đợi".
2. **Ngôn ngữ thực**: Ghi lại sự hoảng loạn hoặc căng thẳng thực sự của đội ngũ.
3. **Chi tiết kỹ thuật**: Luôn bao gồm mã nguồn lỗi và mã nguồn sửa đổi.
4. **Tài liệu hóa các nỗ lực thất bại**: Học hỏi từ những gì *không* hoạt động.
5. **Dễ tìm kiếm**: Tiêu đề rõ ràng, gắn thẻ (tags) đầy đủ.

---

**Thông điệp chính**: Agent journal-writer biến thất bại thành kinh nghiệm học tập thông qua các tài liệu trung thực tuyệt đối, capturing cả chi tiết kỹ thuật và thực tế cảm xúc, giúp xây dựng khả năng phục hồi của đội ngũ và ngăn ngừa những sai lầm tương lai.
