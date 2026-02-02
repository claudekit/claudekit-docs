---
lang: vi
title: "Tester Agent"
description: "Validate code quality through comprehensive testing, coverage analysis, and quality assurance."
section: marketing
category: agents
order: 10
---

# Tester Agent

> **Your quality guardian** - Ensures your code works before it breaks in production

## What This Agent Does

Bạn vừa hoàn thành triển khai tự động hóa chiến dịch email. Code trông tốt, bạn đã kiểm tra nó theo cách thủ công, mọi thứ hoạt động. Bạn đẩy sang sản xuất và ... email không được gửi. Lỗi nằm trong trường hợp cạnh bạn không kiểm tra theo cách thủ công.

**The Problem**: Thử nghiệm thủ công bỏ lỡ các trường hợp cạnh. Vận chuyển mà không cần kiểm tra toàn diện có nghĩa là lỗi tiếp cận sản xuất. Viết bài kiểm tra bạn tự làm là tẻ nhạt và tốn thời gian. Bạn bỏ qua kiểm tra vì cảm thấy như công việc thêm.

**The Solution**: Tester Agent chạy các bộ thử nghiệm toàn diện, phân tích phạm vi, xác thực xử lý lỗi, kiểm tra hiệu suất, và đảm bảo các bản dựng thành công - tất cả tự động. Bạn sẽ tự tin code của bạn thực sự hoạt động, không chỉ "hoạt động trên máy của tôi".

## Quick Start

Kiểm tra triển khai của bạn:

```bash
# After implementing a feature
/test "Run full test suite and check coverage"
```

Bạn sẽ nhận được kết quả kiểm tra, số liệu độ phủ, phân tích hiệu suất, và khuyến nghị có thể hành động cho các bài kiểm tra bị thiếu.

## Capabilities

### Comprehensive Test Execution
Chạy tất cả các bộ thử nghiệm có liên quan:
- Unit tests for isolated components
- Integration tests for system interactions
- End-to-end tests for user workflows
- Performance and load tests
- Security and validation tests

### Coverage Analysis
Xác định mã không được kiểm tra:
- Generates line, branch, and function coverage
- Highlights uncovered code paths
- Ensures coverage meets requirements (typically 80%+)
- Identifies critical paths lacking tests
- Suggests specific test cases to add

### Error Scenario Testing
Xác thực xử lý lỗi:
- Verifies error handling mechanisms
- Tests edge cases and boundary conditions
- Validates exception handling and messages
- Checks proper cleanup in error scenarios
- Tests invalid inputs and malformed data

### Performance Validation
Đảm bảo mã hoạt động tốt:
- Runs performance benchmarks
- Measures test execution time
- Identifies slow-running tests
- Validates performance requirements met
- Checks for memory leaks or resource issues

### Build Process Verification
Xác nhận sẵn sàng sản xuất:
- Ensures build completes successfully
- Validates all dependencies resolve
- Checks for build warnings or deprecations
- Verifies production build configurations
- Tests CI/CD pipeline compatibility

## When to Use

Sử dụng Tester Agent khi bạn cần:
- Xác thực các triển khai tính năng mới
- Kiểm tra phạm vi kiểm tra sau những thay đổi mã
- Đảm bảo bản dựng thành công trước khi triển khai
- Xác minh các bản vá lỗi không giới thiệu những thoái lui
- Chuẩn bị để xem xét mã hoặc gửi PR
- Xác nhận các yêu cầu hiệu suất được đáp ứng

## Example Workflows

### Post-Implementation Testing

```bash
# After building email campaign feature
/test "Run tests for email campaign system"
```

**The tester will**:
1. Run `npm test` or appropriate test command
2. Execute all email-related test suites
3. Generate coverage report
4. Validate build succeeds
5. Check for slow tests
6. Identify gaps in test coverage
7. Report results with recommendations

**You'll get**:
```markdown
## Test Results Summary

### Overall Status: ✅ PASS
- Total tests: 142
- Passed: 140
- Failed: 0
- Skipped: 2
- Duration: 12.4s

### Coverage Metrics
- Line coverage: 87.3% ✅ (target: 80%)
- Branch coverage: 82.1% ✅ (target: 75%)
- Function coverage: 91.2% ✅ (target: 85%)

### Test Distribution
- Unit tests: 98 passed (6.2s)
- Integration tests: 42 passed (5.1s)
- E2E tests: 2 skipped (infrastructure not ready)

### Critical Issues
None - all tests passing

### Coverage Gaps
⚠️ Uncovered code paths:
- `lib/email/retry.ts` lines 45-52 (retry backoff logic)
- `lib/email/template.ts` lines 78-85 (error handling)

### Performance Analysis
- Slowest test: `email-campaign-integration.test.ts` (2.3s)
- Average test time: 87ms
- Performance: ✅ Within acceptable range

### Build Verification
✅ TypeScript compilation successful
✅ No type errors
✅ Production build complete (42s)
✅ Bundle size: 245KB (within limit)

### Recommendations
1. Add tests for retry backoff logic in `retry.ts`
2. Test error scenarios in `template.ts`
3. Unskip E2E tests once infrastructure ready
4. Consider splitting slow integration test

### Next Steps
Priority 1: Add missing coverage for retry logic
Priority 2: Complete E2E test infrastructure setup
```

### Coverage-Focused Analysis

```bash
/test "Generate coverage report and identify gaps"
```

**Provides**:
- Detailed coverage breakdown by file
- Specific line numbers of uncovered code
- Suggested test cases to improve coverage
- Critical paths requiring immediate testing
- Coverage trend over time

### Pre-Deployment Validation

```bash
/test "Full validation before production deployment"
```

**Checks**:
- All test suites pass
- Coverage meets minimum thresholds
- Build completes without errors
- No type errors or linting issues
- Performance benchmarks met
- Integration tests pass against staging

## Test Commands by Stack

Tester biết cách chạy các bài kiểm tra cho các ngăn xếp khác nhau:

**JavaScript/TypeScript**:
```bash
npm test
npm run test:coverage
npm run build
```

**Python**:
```bash
pytest
python -m unittest discover
```

**Go**:
```bash
go test ./...
go test -cover
```

**Flutter/Dart**:
```bash
flutter analyze
flutter test --coverage
```

## Quality Standards Enforced

Tester đảm bảo:
- All critical code paths have test coverage
- Both happy path and error scenarios tested
- Tests are isolated (no interdependencies)
- Tests are deterministic and reproducible
- Test data cleanup after execution
- Proper test naming and organization

## Test Report Format

Mỗi lần chạy kiểm tra tạo ra:

```markdown
## Test Execution Report

### Test Results Overview
[Pass/fail counts, duration, success rate]

### Coverage Metrics
[Line, branch, function coverage with targets]

### Failed Tests
[Detailed error messages and stack traces if any]

### Performance Metrics
[Test execution time, slow tests identified]

### Build Status
[Compilation success, warnings, bundle size]

### Critical Issues
[Blocking issues needing immediate attention]

### Recommendations
[Prioritized testing improvements]

### Next Steps
[Specific actions to take]
```

## Integration with Development Workflow

Tester phù hợp liền mạch:
- **Pre-Commit**: Run tests before committing changes
- **Pre-PR**: Validate tests pass before creating pull request
- **CI/CD**: Results inform pipeline decisions
- **Code Review**: Test reports guide review feedback

## Related Agents

- [Fullstack Developer](/docs/marketing/agents/fullstack-developer) - Implements code that tester validates
- [Git Manager](/docs/marketing/agents/git-manager) - Commits after tests pass
- [Project Manager](/docs/marketing/agents/project-manager) - Uses test results for completion verification

## Related Commands

- [`/test`](/docs/marketing/commands/test) - Run tests and generate report
- [`/coverage`](/docs/marketing/commands) - Check test coverage
- [`/build`](/docs/marketing/commands) - Verify build succeeds

## Tips

**Test Before Committing**: Làm cho thử nghiệm trở thành một phần của quy trình làm việc của bạn. Chạy các bài kiểm tra trước mỗi cam kết để bắt các vấn đề sớm.

**Don't Skip Failing Tests**: Nếu một bài kiểm tra không thành công, hãy sửa nó hoặc sửa mã - không bao giờ bỏ qua hoặc bình luận về các bài kiểm tra không thành công.

**Aim for 80%+ Coverage**: Trong khi 100% không cần thiết, phạm vi 80%+ bắt hầu hết các lỗi. Tester xác định các khoảng trống để đạt được ngưỡng này.

**Test Error Cases**: Các bài kiểm tra đường dẫn hạnh phúc không đủ. Kiểm tra những gì xảy ra khi API không thành công, dữ liệu không hợp lệ, hoặc tài nguyên không có sẵn.

**Watch Performance**: Các bài kiểm tra chậm làm chậm quá trình phát triển. Tester xác định các bài kiểm tra chậm để bạn có thể tối ưu hóa chúng.

Tester Agent làm cho đảm bảo chất lượng trở nên tự động. Bạn vận chuyển tự tin mã của bạn hoạt động, vì bạn đã chứng minh nó bằng các bài kiểm tra.
