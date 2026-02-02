---
title: "Web Testing"
description: "Web testing toàn diện với Playwright, Vitest, k6 cho E2E, unit, integration, load, security, visual và accessibility testing"
section: engineer
kit: engineer
category: skills/tools
order: 36
lang: vi
---

Web testing toàn diện bao gồm unit, integration, E2E, load, security, visual regression và accessibility testing với các công cụ tiêu chuẩn ngành.

## Kỹ Năng Này Làm Gì

Kỹ năng Web Testing cung cấp testing patterns và infrastructure đầy đủ cho ứng dụng web hiện đại. Nó bao gồm toàn bộ testing pyramid từ unit tests đến load testing, với kiến thức chuyên môn về Playwright, Vitest, k6, axe-core và Lighthouse.

Hãy nghĩ về nó như chuyên gia testing của bạn—biết chiến lược testing nào phù hợp với kiến trúc của bạn, cách ngăn flakiness, tối ưu CI/CD pipelines và đảm bảo app của bạn đáp ứng performance và accessibility standards.

## Khả Năng Cốt Lõi

- **Unit/Integration Testing**: Vitest, browser mode, AAA pattern
- **E2E Testing**: Playwright fixtures, sharding, selectors
- **Component Testing**: React/Vue/Angular patterns (production-ready)
- **Load Testing**: k6 patterns và scenarios
- **Performance**: Core Web Vitals, Lighthouse CI
- **Visual Regression**: Screenshot comparison
- **Accessibility**: WCAG, axe-core integration
- **Security**: OWASP Top 10 checklists
- **Test Infrastructure**: Data management, CI/CD workflows

## Bắt Đầu Nhanh

```bash
npx vitest run                    # Unit tests
npx playwright test               # E2E tests
npx playwright test --ui          # E2E với UI
k6 run load-test.js               # Load tests
npx @axe-core/cli https://example.com  # Accessibility
npx lighthouse https://example.com     # Performance
```

## Chiến Lược Testing (Chọn Model Của Bạn)

| Model | Cấu Trúc | Tốt Nhất Cho |
|-------|----------|--------------|
| Pyramid | Unit 70% > Integration 20% > E2E 10% | Monoliths |
| Trophy | Integration-heavy | Modern SPAs |
| Honeycomb | Contract-centric | Microservices |

## Sử Dụng

Kích hoạt khi đề cập testing, E2E, Playwright, Vitest, flakiness, Core Web Vitals, mobile gestures, cross-browser hoặc accessibility testing.

## Prompt Ví Dụ

- "Thiết lập Playwright cho E2E testing"
- "Viết unit tests cho component này với Vitest"
- "Tạo load test scenario với k6"
- "Kiểm tra accessibility với axe-core"
- "Sửa flaky tests trong login flow"
- "Tối ưu Core Web Vitals trong CI"
- "Test mobile gestures với Playwright"
- "Chạy cross-browser tests trên Chrome, Firefox, Safari"

## Tài Liệu Tham Khảo

### Core Testing
- Unit/Integration testing với Vitest
- E2E testing với Playwright
- Component testing patterns
- Playwright component testing (production-ready)

### Test Infrastructure
- Test data management (factories, fixtures, seeding)
- Database testing (Testcontainers, transactions)
- CI/CD workflows (GitHub Actions, sharding)
- Contract testing (Pact, MSW)

### Cross-Browser & Mobile
- Cross-browser checklist
- Mobile gesture testing (touch, swipe, orientation)

### Performance & Quality
- Core Web Vitals (LCP/CLS/INP, Lighthouse CI)
- Visual regression (screenshot comparison)
- Test flakiness mitigation

### Accessibility & Security
- Accessibility testing (WCAG, axe-core)
- Security testing (OWASP Top 10)
- Security checklists (auth, API, headers)

### API & Load
- API testing (Supertest, GraphQL)
- Load testing với k6

## Scripts

**Initialize Playwright Project:**
```bash
node ./scripts/init-playwright.js [--ct] [--dir <path>]
```
Tạo Playwright setup best-practice: config, fixtures, example tests.

**Analyze Test Results:**
```bash
node ./scripts/analyze-test-results.js \
  --playwright test-results/results.json \
  --vitest coverage/vitest.json \
  --output markdown
```
Phân tích Playwright/Vitest/JUnit results thành summary thống nhất.

## Tích Hợp CI/CD

```yaml
jobs:
  test:
    steps:
      - run: npm run test:unit      # Gate 1: Fast fail
      - run: npm run test:e2e       # Gate 2: Sau unit pass
      - run: npm run test:a11y      # Accessibility
      - run: npx lhci autorun       # Performance
```

## Điểm Khác Biệt

Kỹ năng Web Testing cung cấp patterns đã test trong production apps—giải quyết các vấn đề thực như test flakiness, CI pipelines chậm và cross-browser compatibility. Không phải lý thuyết, mà là infrastructure đã được chứng minh.

## Các Kỹ Năng Liên Quan

- [Agent Browser](/docs/engineer/skills/agent-browser) - Cho AI-optimized browser automation
- [React Best Practices](/docs/engineer/skills) - Cho performance optimization
- [Web Design Guidelines](/docs/engineer/skills/web-design-guidelines) - Cho accessibility standards
