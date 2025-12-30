---
title: Mobile Development Skill
description: Build mobile applications with React Native, Flutter, Swift/SwiftUI, and Kotlin/Jetpack Compose
section: engineer
kit: engineer
category: skills/mobile
order: 1
published: true
---

# Mobile Development Skill

Production-ready mobile development with modern frameworks, best practices, and mobile-first thinking patterns.

## When to Use

- Building mobile applications (iOS, Android, or cross-platform)
- Implementing mobile-first design and UX patterns
- Optimizing for mobile constraints (battery, memory, network, small screens)
- Making native vs cross-platform technology decisions
- Implementing offline-first architecture and data sync
- Following platform-specific guidelines (iOS HIG, Material Design)
- Testing mobile applications (unit, integration, E2E)
- Deploying to App Store and Google Play

## Technology Selection

### Quick Decision Matrix

| Need | Choose |
|------|--------|
| JavaScript team, web code sharing | React Native |
| Performance-critical, complex animations | Flutter |
| Maximum iOS performance, latest features | Swift/SwiftUI native |
| Maximum Android performance, Material 3 | Kotlin/Compose native |
| Rapid prototyping | React Native + Expo |
| Desktop + mobile | Flutter |
| Enterprise with JavaScript skills | React Native |
| Startup with limited resources | Flutter or React Native |
| Gaming or heavy graphics | Native (Swift/Kotlin) or Unity |

### Framework Comparison (2024-2025)

| Criterion | React Native | Flutter | Swift/SwiftUI | Kotlin/Compose |
|-----------|--------------|---------|---------------|----------------|
| **GitHub Stars** | 121K | 170K | N/A | N/A |
| **Adoption** | 35% | 46% | iOS only | Android only |
| **Performance** | 80-90% native | 85-95% native | 100% native | 100% native |
| **Dev Speed** | Fast (hot reload) | Very fast (hot reload) | Fast (Xcode Previews) | Fast (Live Edit) |
| **Learning Curve** | Easy (JavaScript) | Medium (Dart) | Medium (Swift) | Medium (Kotlin) |
| **Best For** | JS teams, web sharing | Performance, animations | iOS-only apps | Android-only apps |

## Mobile Development Mindset

**The 10 Commandments:**

1. **Performance is Foundation, Not Feature** - 70% abandon apps >3s load time
2. **Every Kilobyte, Every Millisecond Matters** - Mobile constraints are real
3. **Offline-First by Default** - Network is unreliable, design for it
4. **User Context > Developer Environment** - Think real-world usage scenarios
5. **Platform Awareness Without Platform Lock-In** - Respect platform conventions
6. **Iterate, Don't Perfect** - Ship, measure, improve cycle is survival
7. **Security and Accessibility by Design** - Not afterthoughts
8. **Test on Real Devices** - Simulators lie about performance
9. **Architecture Scales with Complexity** - Don't over-engineer simple apps
10. **Continuous Learning is Survival** - Mobile landscape evolves rapidly

## Performance Budgets

| Metric | Target |
|--------|--------|
| App size | <50MB initial, <200MB total |
| Launch time | <2 seconds to interactive |
| Screen load | <1 second for cached data |
| Network request | <3 seconds for API calls |
| Memory | <100MB typical, <200MB peak |
| Battery | <5% drain per hour active use |
| Frame rate | 60 FPS (16.67ms per frame) |

## Key Best Practices (2024-2025)

### Architecture

- MVVM for small-medium apps (clean separation, testable)
- MVVM + Clean Architecture for large enterprise apps
- Offline-first with hybrid sync (push + pull)
- State management: Zustand (React Native), Riverpod 3 (Flutter), StateFlow (Android)

### Security (OWASP Mobile Top 10)

- OAuth 2.0 + JWT + Biometrics for authentication
- Keychain (iOS) / KeyStore (Android) for sensitive data
- Certificate pinning for network security
- Never hardcode credentials or API keys
- Implement proper session management

### Testing Strategy

- Unit tests: 70%+ coverage for business logic
- Integration tests: Critical user flows
- E2E tests: Detox (React Native), Appium (cross-platform), XCUITest (iOS), Espresso (Android)
- Real device testing mandatory before release

### Deployment

- Fastlane for automation across platforms
- Staged rollouts: Internal → Closed → Open → Production
- Mandatory: iOS 17 SDK (2024), Android 15 API 35 (Aug 2025)
- CI/CD saves 20% development time

## Platform Guidelines

### iOS (Human Interface Guidelines)

- Native navigation patterns (tab bar, navigation bar)
- iOS design patterns (pull to refresh, swipe actions)
- San Francisco font, iOS color system
- Haptic feedback, 3D Touch/Haptic Touch
- Respect safe areas and notch

### Android (Material Design 3)

- Material navigation (bottom nav, navigation drawer)
- Floating action buttons, material components
- Roboto font, Material You dynamic colors
- Touch feedback (ripple effects)
- Respect system bars and gestures

## Common Pitfalls

1. **Testing only on simulators** - Real devices show true performance
2. **Ignoring platform conventions** - Users expect platform-specific patterns
3. **No offline handling** - Network failures will happen
4. **Poor memory management** - Leads to crashes and poor UX
5. **Hardcoded credentials** - Security vulnerability
6. **No accessibility** - Excludes 15%+ of users
7. **Premature optimization** - Optimize based on metrics, not assumptions
8. **Over-engineering** - Start simple, scale as needed
9. **Skipping real device testing** - Simulators don't show battery/network issues
10. **Not respecting battery** - Background processing must be justified

## Reference Navigation

| Topic | Reference |
|-------|-----------|
| Frameworks | `mobile-frameworks.md` |
| iOS Development | `mobile-ios.md` |
| Android Development | `mobile-android.md` |
| Best Practices | `mobile-best-practices.md` |
| Debugging | `mobile-debugging.md` |
| Mindset | `mobile-mindset.md` |

## Resources

- [React Native](https://reactnative.dev/)
- [Flutter](https://flutter.dev/)
- [iOS HIG](https://developer.apple.com/design/human-interface-guidelines/)
- [Material Design](https://m3.material.io/)
- [OWASP Mobile](https://owasp.org/www-project-mobile-top-10/)
- [Detox E2E](https://wix.github.io/Detox/)
- [Fastlane](https://fastlane.tools/)

---

## Key Takeaway

 Choose React Native for JavaScript teams with web code sharing, Flutter for performance-critical apps, or native (Swift/Kotlin) for maximum platform performance. Follow mobile-first principles: offline-first architecture, <2s launch time, real device testing, and platform-specific guidelines.
