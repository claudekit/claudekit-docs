---
title: Mobile Development Skill
description: Xây dựng mobile applications với React Native, Flutter, Swift/SwiftUI và Kotlin/Jetpack Compose
section: engineer
kit: engineer
category: skills/mobile
order: 1
published: true
lang: vi
---

# Mobile Development Skill

Production-ready mobile development với modern frameworks, best practices và mobile-first thinking patterns.

## Khi Nào Sử Dụng

- Xây dựng mobile applications (iOS, Android hoặc cross-platform)
- Implement mobile-first design và UX patterns
- Tối ưu cho mobile constraints (battery, memory, network, small screens)
- Ra quyết định công nghệ native vs cross-platform
- Implement offline-first architecture và data sync
- Follow platform-specific guidelines (iOS HIG, Material Design)
- Testing mobile applications (unit, integration, E2E)
- Deploy lên App Store và Google Play

## Technology Selection

### Quick Decision Matrix

| Nhu Cầu | Chọn |
|---------|------|
| JavaScript team, web code sharing | React Native |
| Performance-critical, complex animations | Flutter |
| Maximum iOS performance, latest features | Swift/SwiftUI native |
| Maximum Android performance, Material 3 | Kotlin/Compose native |
| Rapid prototyping | React Native + Expo |
| Desktop + mobile | Flutter |
| Enterprise với JavaScript skills | React Native |
| Startup với limited resources | Flutter hoặc React Native |
| Gaming hoặc heavy graphics | Native (Swift/Kotlin) hoặc Unity |

### Framework Comparison (2024-2025)

| Tiêu Chí | React Native | Flutter | Swift/SwiftUI | Kotlin/Compose |
|----------|--------------|---------|---------------|----------------|
| **GitHub Stars** | 121K | 170K | N/A | N/A |
| **Adoption** | 35% | 46% | Chỉ iOS | Chỉ Android |
| **Performance** | 80-90% native | 85-95% native | 100% native | 100% native |
| **Dev Speed** | Fast (hot reload) | Very fast (hot reload) | Fast (Xcode Previews) | Fast (Live Edit) |
| **Learning Curve** | Easy (JavaScript) | Medium (Dart) | Medium (Swift) | Medium (Kotlin) |
| **Tốt Nhất Cho** | JS teams, web sharing | Performance, animations | iOS-only apps | Android-only apps |

## Mobile Development Mindset

**10 Điều Răn:**

1. **Performance là Foundation, Không Phải Feature** - 70% bỏ apps >3s load time
2. **Mỗi Kilobyte, Mỗi Millisecond Đều Quan Trọng** - Mobile constraints là thực
3. **Offline-First by Default** - Network không đáng tin cậy, design cho nó
4. **User Context > Developer Environment** - Nghĩ về real-world usage scenarios
5. **Platform Awareness Không Platform Lock-In** - Tôn trọng platform conventions
6. **Iterate, Đừng Perfect** - Ship, measure, improve cycle là survival
7. **Security và Accessibility by Design** - Không phải afterthoughts
8. **Test trên Real Devices** - Simulators nói dối về performance
9. **Architecture Scales với Complexity** - Đừng over-engineer simple apps
10. **Continuous Learning là Survival** - Mobile landscape evolves nhanh

## Performance Budgets

| Metric | Target |
|--------|--------|
| App size | <50MB initial, <200MB total |
| Launch time | <2 seconds to interactive |
| Screen load | <1 second cho cached data |
| Network request | <3 seconds cho API calls |
| Memory | <100MB typical, <200MB peak |
| Battery | <5% drain per hour active use |
| Frame rate | 60 FPS (16.67ms per frame) |

## Key Best Practices (2024-2025)

### Architecture

- MVVM cho small-medium apps (clean separation, testable)
- MVVM + Clean Architecture cho large enterprise apps
- Offline-first với hybrid sync (push + pull)
- State management: Zustand (React Native), Riverpod 3 (Flutter), StateFlow (Android)

### Security (OWASP Mobile Top 10)

- OAuth 2.0 + JWT + Biometrics cho authentication
- Keychain (iOS) / KeyStore (Android) cho sensitive data
- Certificate pinning cho network security
- Không bao giờ hardcode credentials hoặc API keys
- Implement proper session management

### Testing Strategy

- Unit tests: 70%+ coverage cho business logic
- Integration tests: Critical user flows
- E2E tests: Detox (React Native), Appium (cross-platform), XCUITest (iOS), Espresso (Android)
- Real device testing mandatory trước release

### Deployment

- Fastlane cho automation across platforms
- Staged rollouts: Internal → Closed → Open → Production
- Mandatory: iOS 17 SDK (2024), Android 15 API 35 (Aug 2025)
- CI/CD saves 20% development time

## Platform Guidelines

### iOS (Human Interface Guidelines)

- Native navigation patterns (tab bar, navigation bar)
- iOS design patterns (pull to refresh, swipe actions)
- San Francisco font, iOS color system
- Haptic feedback, 3D Touch/Haptic Touch
- Respect safe areas và notch

### Android (Material Design 3)

- Material navigation (bottom nav, navigation drawer)
- Floating action buttons, material components
- Roboto font, Material You dynamic colors
- Touch feedback (ripple effects)
- Respect system bars và gestures

## Common Pitfalls

1. **Testing chỉ trên simulators** - Real devices hiển thị true performance
2. **Ignore platform conventions** - Users expect platform-specific patterns
3. **Không có offline handling** - Network failures sẽ xảy ra
4. **Poor memory management** - Dẫn tới crashes và poor UX
5. **Hardcoded credentials** - Security vulnerability
6. **Không có accessibility** - Loại trừ 15%+ users
7. **Premature optimization** - Optimize based on metrics, không assumptions
8. **Over-engineering** - Start simple, scale as needed
9. **Skip real device testing** - Simulators không hiển thị battery/network issues
10. **Không respect battery** - Background processing phải justified

## Reference Navigation

| Topic | Reference |
|-------|-----------|
| Frameworks | `mobile-frameworks.md` |
| iOS Development | `mobile-ios.md` |
| Android Development | `mobile-android.md` |
| Best Practices | `mobile-best-practices.md` |
| Debugging | `mobile-debugging.md` |
| Mindset | `mobile-mindset.md` |

## Tài Nguyên

- [React Native](https://reactnative.dev/)
- [Flutter](https://flutter.dev/)
- [iOS HIG](https://developer.apple.com/design/human-interface-guidelines/)
- [Material Design](https://m3.material.io/)
- [OWASP Mobile](https://owasp.org/www-project-mobile-top-10/)
- [Detox E2E](https://wix.github.io/Detox/)
- [Fastlane](https://fastlane.tools/)

---

## Key Takeaway

Chọn React Native cho JavaScript teams với web code sharing, Flutter cho performance-critical apps hoặc native (Swift/Kotlin) cho maximum platform performance. Follow mobile-first principles: offline-first architecture, <2s launch time, real device testing và platform-specific guidelines.
