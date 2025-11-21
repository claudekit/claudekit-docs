---
title: "Hiểu Codebase với GitLab Knowledge Graph"
description: "Quy trình phân tích codebase sâu sử dụng GitLab Knowledge Graph MCP - khám phá định nghĩa, tham chiếu và phụ thuộc cho phát triển do AI điều khiển."
category: "use-cases"
published: true
lastUpdated: 2025-11-21
---

# GitLab Knowledge Graph MCP

GitLab Knowledge Graph là công cụ phân tích code mạnh mẽ tạo bản đồ codebase có thể truy vấn được. Nó cho phép khám phá codebase sâu, phân tích tác động và hiểu code do AI điều khiển thông qua Model Context Protocol (MCP).

## GitLab Knowledge Graph là gì?

GitLab Knowledge Graph (gkg) biến code của bạn thành kiến thức có cấu trúc bằng cách:

1. **Quét Cấu trúc Code**: Xác định tệp, thư mục, lớp, hàm, phương thức và mô-đun
2. **Trích xuất Mối quan hệ**: Phát hiện lệnh gọi hàm, thứ bậc kế thừa và phụ thuộc
3. **Xây dựng Cơ sở dữ liệu Đồ thị**: Lưu trữ mọi thứ trong Kuzu (cơ sở dữ liệu đồ thị hiệu năng cao) để truy vấn nhanh
4. **Kích hoạt Tích hợp AI**: Cung cấp công cụ MCP để các tác nhân AI hiểu codebase sâu hơn

**Lợi ích chính:**

- RAG (Retrieval-Augmented Generation) cho ngữ cảnh code
- Trực quan hóa kiến trúc và phân tích phụ thuộc
- Phân tích tác động trước khi tái cấu trúc
- Điều hướng và khám phá code thông minh

## Cài đặt

### Cài đặt GitLab Knowledge Graph CLI

```bash
# Cài đặt một dòng (Linux/macOS)
curl -fsSL https://gitlab.com/gitlab-org/rust/knowledge-graph/-/raw/main/install.sh | bash

# Thêm vào PATH (nếu chưa thêm)
export PATH="$HOME/.local/bin:$PATH"

# Kiểm tra cài đặt
gkg --version
```

### Khởi động Server

```bash
# Khởi động server knowledge graph (chạy trên http://localhost:27495)
gkg server start

# Trong terminal khác, lập chỉ mục project của bạn
gkg index /path/to/project
```

## Cách sử dụng GKG MCP

### 1. Lập chỉ mục Project của bạn

Trước khi sử dụng GKG, tạo knowledge graph cho project của bạn:

```bash
# Lập chỉ mục thư mục hiện tại
gkg index

# Hoặc lập chỉ mục project cụ thể
gkg index /path/to/your/project
```

Lệnh này:

- Khám phá tất cả các repository Git
- Phân tích cấu trúc code
- Trích xuất mối quan hệ
- Lưu trữ trong cơ sở dữ liệu đồ thị cục bộ

**Ví dụ output:**

```
✅ Workspace indexing completed in 12.34 seconds
Workspace Statistics:
- Projects indexed: 3
- Files processed: 1,247
- Code entities extracted: 5,832
- Relationships found: 12,156
```

### 2. Sử dụng công cụ GKG MCP với ClaudeKit

Sau khi lập chỉ mục, sử dụng công cụ GKG MCP trong các phiên Claude Code của bạn:

#### Liệt kê tất cả Projects

```bash
# Xem tất cả các project đã lập chỉ mục trong knowledge graph
gkg_list_projects
```

Trả về đường dẫn tuyệt đối cho tất cả các project đã lập chỉ mục.

#### Tìm kiếm Định nghĩa Code

```bash
# Tìm định nghĩa hàm/lớp
gkg_search_codebase_definitions \
  --project_absolute_path /path/to/project \
  --search_terms "MyFunction" "MyClass" "handleSubmit"
```

**Hữu ích cho:**

- Tìm định nghĩa lớp trước khi tái cấu trúc
- Định vị API endpoints
- Khám phá các hàm tiện ích
- Hiểu cấu trúc code

**Trả về:**

- Tên và loại định nghĩa (Function, Class, Method, v.v.)
- Vị trí tệp và số dòng
- Tên đủ điều kiện
- Đoạn mã ngữ cảnh

#### Lấy tất cả Tham chiếu đến một Symbol

```bash
# Tìm mọi nơi một hàm/lớp được sử dụng
gkg_get_references \
  --absolute_file_path /path/to/project/src/utils.ts \
  --definition_name calculateTotal
```

**Hoàn hảo cho:**

- Phân tích tác động trước khi thay đổi
- Tìm tất cả những người gọi một hàm
- Lập bản đồ phụ thuộc
- Tái cấu trúc an toàn

**Trả về:**

- Tất cả định nghĩa tham chiếu đến symbol
- Loại tham chiếu (CALLS, PropertyReference, v.v.)
- Vị trí tệp và số dòng
- Mã ngữ cảnh xung quanh mỗi tham chiếu

#### Chuyển đến Định nghĩa

```bash
# Đi trực tiếp đến định nghĩa hàm/phương thức
gkg_get_definition \
  --absolute_file_path /path/to/file.ts \
  --line "const result = calculateTotal(items);" \
  --symbol_name calculateTotal
```

**Hoàn hảo cho:**

- Hiểu một hàm làm gì
- Xác minh các triển khai
- Khám phá code nhanh chóng

**Trả về:**

- Vị trí định nghĩa (đường dẫn tệp và dòng)
- Đoạn mã đầy đủ
- Loại định nghĩa

#### Đọc Nội dung Định nghĩa

```bash
# Lấy code đầy đủ của nhiều định nghĩa
gkg_read_definitions \
  --definitions "[
    {
      \"names\": [\"handleSubmit\", \"validateForm\"],
      \"file_path\": \"src/components/Form.tsx\"
    },
    {
      \"names\": [\"calculateTotal\"],
      \"file_path\": \"src/utils/math.ts\"
    }
  ]"
```

**Được tối ưu cho:**

- Đọc nhiều hàm liên quan
- Hiểu triển khai hàm
- Phân tích các mẫu code

**Trả về:**

- Thân định nghĩa đầy đủ
- Tên đủ điều kiện
- Phạm vi dòng

#### Tạo Bản đồ Repository

```bash
# Lấy tổng quan cấu trúc code nhỏ gọn
gkg_repo_map \
  --project_absolute_path /path/to/project \
  --relative_paths ["src/components", "src/utils/helpers.ts"] \
  --depth 2
```

**Hữu ích cho:**

- Hiểu cấu trúc thư mục
- Lập bản đồ kiểu API của các phân đoạn codebase
- Tổng quan codebase tiết kiệm token
- Tìm kiếm các tệp liên quan

**Trả về:**

- Cấu trúc cây thư mục
- Danh sách tệp có định nghĩa
- Phạm vi dòng và ngữ cảnh
- Định dạng được tối ưu hóa token

#### Xây dựng lại Chỉ mục Project

```bash
# Cập nhật knowledge graph sau khi thay đổi code
gkg_index_project \
  --project_absolute_path /path/to/project
```

Sử dụng sau:

- Các thay đổi tệp lớn
- Thêm/xóa tệp
- Tái cấu trúc kiến trúc
- Các phiên phát triển dài

## Các Workflow Phổ biến

### Tái cấu trúc với Phân tích Tác động

```bash
# 1. Tìm tất cả tham chiếu đến hàm trước khi thay đổi
gkg_get_references \
  --absolute_file_path /path/to/project/src/api.ts \
  --definition_name fetchUserData

# 2. Xem xét tất cả các site gọi và hiểu tác động

# 3. Thực hiện thay đổi một cách an toàn biết phạm vi đầy đủ
```

### Onboarding: Hiểu Codebase Mới

```bash
# 1. Lấy tổng quan cấu trúc
gkg_repo_map \
  --project_absolute_path /path/to/project \
  --relative_paths ["src"] \
  --depth 2

# 2. Tìm kiếm các thành phần chính
gkg_search_codebase_definitions \
  --project_absolute_path /path/to/project \
  --search_terms "App" "Router" "Controller" "Service"

# 3. Khám phá kết nối giữa các thành phần
gkg_get_references \
  --absolute_file_path src/components/App.tsx \
  --definition_name App
```

### Triển khai Tính năng

```bash
# 1. Tìm các tính năng/mẫu tương tự
gkg_search_codebase_definitions \
  --project_absolute_path /path/to/project \
  --search_terms "Form" "Validation" "Submit"

# 2. Đọc các mẫu triển khai
gkg_read_definitions \
  --definitions "[
    {
      \"names\": [\"UserForm\", \"validateEmail\"],
      \"file_path\": \"src/components/UserForm.tsx\"
    }
  ]"

# 3. Sử dụng mẫu cho tính năng mới
```

### Điều tra Bug

```bash
# 1. Tìm kiếm vị trí lỗi
gkg_search_codebase_definitions \
  --project_absolute_path /path/to/project \
  --search_terms "handleError" "ErrorBoundary"

# 2. Tìm tất cả tham chiếu
gkg_get_references \
  --absolute_file_path src/components/ErrorHandler.tsx \
  --definition_name handleError

# 3. Hiểu luồng lỗi và phụ thuộc
```

## Tham chiếu Công cụ MCP

### Công cụ Có sẵn qua MCP

| Công cụ                       | Mục đích                       | Trường hợp sử dụng               |
| ----------------------------- | ------------------------------ | -------------------------------- |
| `list_projects`               | Lấy project đã lập chỉ mục     | Biết đường dẫn project hiện tại  |
| `search_codebase_definitions` | Tìm định nghĩa theo tên        | Tìm hàm, lớp, hằng số            |
| `get_references`              | Tìm tất cả cách sử dụng symbol | Phân tích tác động, tái cấu trúc |
| `read_definitions`            | Đọc code định nghĩa đầy đủ     | Hiểu triển khai                  |
| `get_definition`              | Chuyển đến định nghĩa          | Khám phá nhanh chóng             |
| `repo_map`                    | Lấy tổng quan cấu trúc         | Hiểu kiến trúc                   |
| `index_project`               | Xây dựng lại chỉ mục           | Cập nhật sau khi thay đổi        |

### Tham số Đầu vào

**project_absolute_path**

- Đường dẫn hệ thống tệp tuyệt đối đến gốc project
- Bắt buộc cho hầu hết các công cụ
- Sử dụng `list_projects` để khám phá

**relative_paths** (cho repo_map)

- Đường dẫn tệp/thư mục tương đối với project
- Có thể có nhiều đường dẫn
- Ví dụ: `["src/components", "src/utils.ts"]`

**search_terms**

- Tên hàm/lớp/hằng số cần tìm
- Phân biệt chữ hoa chữ thường
- Hỗ trợ tìm kiếm từng phần
- Nhiều thuật ngữ trong một lệnh gọi

**definition_name**

- Tên định danh chính xác như nó xuất hiện trong code
- Không có tiền tố namespace
- Được sử dụng với file_path để định vị chính xác

**page** (phân trang)

- Bắt đầu từ 1
- Kiểm tra `next_page` trong phản hồi để xem kết quả thêm
- Mặc định: 1

## Các Thực hành Tốt nhất

### 1. Luôn Lập chỉ mục Trước khi Khám phá

```bash
# Chỉ mục cũ = kết quả không chính xác
gkg index /path/to/project

# Sau đó khám phá với tự tin
gkg_search_codebase_definitions ...
```

### 2. Sử dụng Công cụ Phù hợp cho Nhiệm vụ

| Nhiệm vụ                   | Công cụ                       |
| -------------------------- | ----------------------------- |
| Tìm nơi hàm được gọi       | `get_references`              |
| Hiểu triển khai            | `read_definitions`            |
| Khám phá cấu trúc codebase | `repo_map`                    |
| Tra cứu định nghĩa nhanh   | `get_definition`              |
| Tìm theo mẫu tên           | `search_codebase_definitions` |

### 3. Phân trang cho Kết quả Lớn

```bash
# Nếu next_page > 1, có thêm kết quả
response = gkg_search_codebase_definitions(
  search_terms=["handler"],
  page=1
)

if response.next_page:
  # Lấy trang 2
  response2 = gkg_search_codebase_definitions(
    search_terms=["handler"],
    page=response.next_page
  )
```

### 4. Kết hợp Công cụ để Tăng chiều sâu

```bash
# Tìm kiếm → Đọc → Phân tích Mẫu

# 1. Tìm
search_results = search_codebase_definitions(terms=["FormHandler"])

# 2. Đọc code đầy đủ
definitions = read_definitions(
  file_path=search_results[0].location.file
  names=["FormHandler"]
)

# 3. Tìm cách sử dụng
references = get_references(
  file_path=search_results[0].location.file
  definition_name="FormHandler"
)
```

## Khắc phục Sự cố

### Knowledge Graph Không Tìm thấy Định nghĩa

**Vấn đề**: `search_codebase_definitions` không trả về kết quả

**Giải pháp:**

1. Đảm bảo project được lập chỉ mục: `gkg index /path/to/project`
2. Kiểm tra tên chính xác (phân biệt chữ hoa chữ thường)
3. Xác minh đường dẫn project là tuyệt đối
4. Thử các thuật ngữ tìm kiếm từng phần
5. Kiểm tra ngôn ngữ được hỗ trợ (Rust, TypeScript, Python, Ruby, Java, Kotlin)

### Server Không Chạy

**Vấn đề**: Không thể kết nối đến localhost:27495

**Giải pháp:**

```bash
# Đảm bảo server đang chạy
gkg server start

# Kiểm tra nếu chạy trên cổng khác
gkg server start --port 27495

# Xem nhật ký để tìm lỗi
gkg server logs
```

### Kết quả Lỗi thời

**Vấn đề**: Các thay đổi gần đây không xuất hiện

**Giải pháp:**

```bash
# Xây dựng lại chỉ mục
gkg index_project /path/to/project

# Hoặc khởi động lại server
gkg server stop
gkg server start
```

## Tích hợp với ClaudeKit

### Sử dụng GKG trong Lệnh `/code`

```bash
# Khi triển khai từ kế hoạch, sử dụng GKG cho ngữ cảnh
/cook Add user authentication system

# Claude Code sử dụng GKG để:
# 1. Tìm kiếm các mẫu xác thực hiện có
# 2. Hiểu kiến trúc hiện tại
# 3. Tìm các điểm tích hợp
# 4. Phân tích tác động của các thay đổi
```

### Sử dụng GKG trong Tái cấu trúc

```bash
# Trước khi tái cấu trúc lớn
/plan Refactor authentication module

# Claude Code sử dụng GKG để:
# 1. Lập bản đồ tất cả code liên quan xác thực
# 2. Tìm tất cả cách sử dụng
# 3. Xác định phụ thuộc
# 4. Đề xuất phương pháp tái cấu trúc an toàn
```

## Ví dụ: Workflow Hoàn chỉnh

```bash
# 1. Lập chỉ mục project
gkg index /Users/dev/my-app

# 2. Bắt đầu khám phá
gkg_search_codebase_definitions \
  --project_absolute_path /Users/dev/my-app \
  --search_terms "handleSubmit"

# 3. Xem nơi nó được sử dụng
gkg_get_references \
  --absolute_file_path /Users/dev/my-app/src/forms.ts \
  --definition_name handleSubmit

# 4. Đọc triển khai đầy đủ
gkg_read_definitions \
  --definitions "[{
    \"names\": [\"handleSubmit\"],
    \"file_path\": \"src/forms.ts\"
  }]"

# 5. Hiểu kết nối
gkg_get_references \
  --absolute_file_path /Users/dev/my-app/src/api.ts \
  --definition_name apiCall

# 6. Lấy tổng quan kiến trúc
gkg_repo_map \
  --project_absolute_path /Users/dev/my-app \
  --relative_paths ["src"] \
  --depth 2
```

## Tài nguyên

- [Tài liệu GitLab Knowledge Graph](https://gitlab-org.gitlab.io/rust/knowledge-graph/)
- [Tham chiếu Công cụ MCP](https://gitlab-org.gitlab.io/rust/knowledge-graph/mcp/tools/)
- [Ngôn ngữ Được hỗ trợ](https://gitlab-org.gitlab.io/rust/knowledge-graph/languages/overview/)
- [Repository trên GitLab](https://gitlab.com/gitlab-org/rust/knowledge-graph)

## Bước tiếp theo

1. **Cài đặt GKG**: Làm theo hướng dẫn cài đặt ở trên
2. **Lập chỉ mục Project của bạn**: `gkg index /path/to/project`
3. **Khám phá**: Sử dụng công cụ MCP để hiểu codebase
4. **Tích hợp với ClaudeKit**: Sử dụng ngữ cảnh GKG trong các lệnh `/code` và tái cấu trúc
5. **Tự động hóa**: Xây dựng workflow với dữ liệu GKG

---

**GitLab Knowledge Graph** cho phép các tác nhân AI thực sự hiểu codebase của bạn, làm cho phân tích code, tái cấu trúc và triển khai trở nên thông minh hơn và nhận thức về ngữ cảnh.
