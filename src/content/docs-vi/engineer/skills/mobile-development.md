---
title: "ck:mobile-development"
description: Xây dựng ứng dụng di động với React Native, Flutter, Swift/SwiftUI và Kotlin/Jetpack Compose
section: engineer
kit: engineer
category: skills/mobile
order: 50
published: true
lang: vi
---

# Skill Phát Triển Di Động

Phát triển di động sẵn sàng cho production với các framework hiện đại, best practices và các pattern tư duy mobile-first.

## Khi Nào Nên Dùng

- Xây dựng ứng dụng di động (iOS, Android, hoặc cross-platform)
- Triển khai thiết kế mobile-first và các pattern UX
- Tối ưu hóa cho các ràng buộc di động (pin, bộ nhớ, mạng, màn hình nhỏ)
- Đưa ra quyết định công nghệ native vs cross-platform
- Triển khai kiến trúc offline-first và đồng bộ dữ liệu
- Tuân theo các hướng dẫn dành riêng cho nền tảng (iOS HIG, Material Design)
- Kiểm thử ứng dụng di động (unit, integration, E2E)
- Triển khai lên App Store và Google Play

## Chọn Công Nghệ

### Ma Trận Quyết Định Nhanh

| Nhu cầu | Chọn |
|---------|------|
| Nhóm JavaScript, chia sẻ code web | React Native |
| Hiệu suất cao, animations phức tạp | Flutter |
| Hiệu suất iOS tối đa, tính năng mới nhất | Swift/SwiftUI native |
| Hiệu suất Android tối đa, Material 3 | Kotlin/Compose native |
| Prototype nhanh | React Native + Expo |
| Desktop + mobile | Flutter |
| Enterprise với kỹ năng JavaScript | React Native |
| Startup với nguồn lực hạn chế | Flutter hoặc React Native |
| Gaming hoặc đồ họa nặng | Native (Swift/Kotlin) hoặc Unity |

### So Sánh Framework (2024-2025)

| Tiêu chí | React Native | Flutter | Swift/SwiftUI | Kotlin/Compose |
|----------|--------------|---------|---------------|----------------|
| **GitHub Stars** | 121K | 170K | N/A | N/A |
| **Mức độ áp dụng** | 35% | 46% | Chỉ iOS | Chỉ Android |
| **Hiệu suất** | 80-90% native | 85-95% native | 100% native | 100% native |
| **Tốc độ dev** | Nhanh (hot reload) | Rất nhanh (hot reload) | Nhanh (Xcode Previews) | Nhanh (Live Edit) |
| **Đường cong học** | Dễ (JavaScript) | Trung bình (Dart) | Trung bình (Swift) | Trung bình (Kotlin) |
| **Tốt nhất cho** | Nhóm JS, chia sẻ web | Hiệu suất, animations | Ứng dụng chỉ iOS | Ứng dụng chỉ Android |

## Tư Duy Phát Triển Di Động

**10 Điều Răn:**

1. **Hiệu Suất Là Nền Tảng, Không Phải Tính Năng** - 70% người dùng từ bỏ ứng dụng mất >3 giây tải
2. **Mỗi Kilobyte, Mỗi Millisecond Đều Quan Trọng** - Ràng buộc di động là thực tế
3. **Offline-First Mặc Định** - Mạng không đáng tin cậy, thiết kế cho nó
4. **Ngữ Cảnh Người Dùng > Môi Trường Developer** - Nghĩ về các kịch bản sử dụng thực tế
5. **Nhận Thức Nền Tảng Không Bị Khóa Vào Nền Tảng** - Tôn trọng quy ước nền tảng
6. **Lặp Lại, Đừng Hoàn Hảo** - Chu kỳ ship, đo lường, cải thiện là sự sống còn
7. **Bảo Mật và Accessibility Theo Thiết Kế** - Không phải là suy nghĩ sau
8. **Kiểm Thử Trên Thiết Bị Thực** - Simulators nói dối về hiệu suất
9. **Kiến Trúc Mở Rộng Theo Độ Phức Tạp** - Đừng over-engineer ứng dụng đơn giản
10. **Học Liên Tục Là Sự Sống Còn** - Bối cảnh di động phát triển nhanh

## Ngân Sách Hiệu Suất

| Chỉ số | Mục tiêu |
|--------|---------|
| Kích thước ứng dụng | <50MB ban đầu, <200MB tổng |
| Thời gian khởi động | <2 giây đến interactive |
| Tải màn hình | <1 giây cho dữ liệu cache |
| Yêu cầu mạng | <3 giây cho API calls |
| Bộ nhớ | <100MB thông thường, <200MB đỉnh |
| Pin | <5% tiêu hao mỗi giờ sử dụng |
| Frame rate | 60 FPS (16.67ms mỗi frame) |

## Best Practices Chính (2024-2025)

### Kiến Trúc

- MVVM cho ứng dụng vừa nhỏ (tách biệt rõ ràng, có thể kiểm thử)
- MVVM + Clean Architecture cho ứng dụng enterprise lớn
- Offline-first với hybrid sync (push + pull)
- Quản lý state: Zustand (React Native), Riverpod 3 (Flutter), StateFlow (Android)

### Bảo Mật (OWASP Mobile Top 10)

- OAuth 2.0 + JWT + Biometrics để xác thực
- Keychain (iOS) / KeyStore (Android) cho dữ liệu nhạy cảm
- Certificate pinning để bảo mật mạng
- Không bao giờ hardcode credentials hoặc API keys
- Triển khai quản lý session phù hợp

### Chiến Lược Kiểm Thử

- Unit tests: Độ phủ 70%+ cho business logic
- Integration tests: Các luồng người dùng quan trọng
- E2E tests: Detox (React Native), Appium (cross-platform), XCUITest (iOS), Espresso (Android)
- Kiểm thử thiết bị thực bắt buộc trước khi phát hành

### Triển Khai

- Fastlane để tự động hóa trên các nền tảng
- Staged rollouts: Internal → Closed → Open → Production
- Bắt buộc: iOS 17 SDK (2024), Android 15 API 35 (Tháng 8 2025)
- CI/CD tiết kiệm 20% thời gian phát triển

## Hướng Dẫn Nền Tảng

### iOS (Human Interface Guidelines)

- Các pattern điều hướng native (tab bar, navigation bar)
- Các pattern thiết kế iOS (pull to refresh, swipe actions)
- Font San Francisco, hệ thống màu iOS
- Haptic feedback, 3D Touch/Haptic Touch
- Tôn trọng safe areas và notch

### Android (Material Design 3)

- Material navigation (bottom nav, navigation drawer)
- Floating action buttons, material components
- Font Roboto, Material You dynamic colors
- Touch feedback (ripple effects)
- Tôn trọng system bars và gestures

## Các Lỗi Thường Gặp

1. **Chỉ kiểm thử trên simulators** - Thiết bị thực cho thấy hiệu suất thực
2. **Bỏ qua quy ước nền tảng** - Người dùng mong đợi các pattern dành riêng cho nền tảng
3. **Không xử lý offline** - Lỗi mạng sẽ xảy ra
4. **Quản lý bộ nhớ kém** - Dẫn đến crash và UX kém
5. **Hardcode credentials** - Lỗ hổng bảo mật
6. **Không có accessibility** - Loại trừ 15%+ người dùng
7. **Tối ưu hóa sớm** - Tối ưu hóa dựa trên số liệu, không phải giả định
8. **Over-engineering** - Bắt đầu đơn giản, mở rộng khi cần
9. **Bỏ qua kiểm thử thiết bị thực** - Simulators không hiển thị vấn đề pin/mạng
10. **Không tôn trọng pin** - Xử lý nền phải được biện minh

## Điều Hướng Tham Chiếu

| Chủ đề | Tham chiếu |
|--------|-----------|
| Frameworks | `mobile-frameworks.md` |
| Phát triển iOS | `mobile-ios.md` |
| Phát triển Android | `mobile-android.md` |
| Best Practices | `mobile-best-practices.md` |
| Debugging | `mobile-debugging.md` |
| Tư duy | `mobile-mindset.md` |

## Tài Nguyên

- [React Native](https://reactnative.dev/)
- [Flutter](https://flutter.dev/)
- [iOS HIG](https://developer.apple.com/design/human-interface-guidelines/)
- [Material Design](https://m3.material.io/)
- [OWASP Mobile](https://owasp.org/www-project-mobile-top-10/)
- [Detox E2E](https://wix.github.io/Detox/)
- [Fastlane](https://fastlane.tools/)

---

## Điểm Mấu Chốt

Chọn React Native cho nhóm JavaScript với chia sẻ code web, Flutter cho ứng dụng đòi hỏi hiệu suất cao, hoặc native (Swift/Kotlin) để có hiệu suất nền tảng tối đa. Tuân theo các nguyên tắc mobile-first: kiến trúc offline-first, thời gian khởi động <2 giây, kiểm thử thiết bị thực, và các hướng dẫn dành riêng cho nền tảng.
