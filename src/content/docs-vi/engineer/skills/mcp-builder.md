---
title: "ck:mcp-builder"
description: Xây dựng các MCP server chất lượng cao cho phép LLMs tương tác với các dịch vụ bên ngoài thông qua các công cụ được thiết kế tốt bằng Python hoặc TypeScript
section: engineer
kit: engineer
category: skills
order: 50
lang: vi
---

Bạn muốn cho AI agents truy cập vào các API và dịch vụ bên ngoài? Đó chính xác là những gì MCP servers làm, và skill này hướng dẫn bạn cách xây dựng chúng đúng cách.

## Skill Này Làm Gì

MCP Builder hướng dẫn bạn tạo các Model Context Protocol (MCP) servers cho phép AI agents tương tác với các dịch vụ bên ngoài. Hãy nghĩ về MCP servers như các bộ dịch thuật: chúng lấy các yêu cầu ngôn ngữ tự nhiên từ AI agents và biến chúng thành API calls, sau đó trả về kết quả ở định dạng agents có thể hiểu.

Skill này hướng dẫn bạn qua một quy trình bốn giai đoạn hoàn chỉnh: nghiên cứu sâu và lên kế hoạch, triển khai với best practices, review code và cải tiến, và tạo các đánh giá toàn diện để kiểm thử hiệu quả server. Bạn sẽ học cách thiết kế công cụ cho phép các quy trình hoàn chỉnh (không chỉ các API calls riêng lẻ), tối ưu hóa cho context window hạn chế, và tạo các thông báo lỗi có thể thực hiện được để hướng dẫn agents.

Dù bạn đang tích hợp weather API, xây dựng công cụ cho hệ thống quản lý dự án, hay phơi bày các thao tác cơ sở dữ liệu cho AI agents, skill này đảm bảo bạn tạo ra các servers thực sự hoạt động tốt với AI agents.

## Yêu Cầu Trước

Trước khi xây dựng MCP servers, bạn cần:

**Cho Python:**
- Python 3.9 hoặc cao hơn
- Quen thuộc với các pattern async/await
- Hiểu biết cơ bản về Pydantic để xác nhận dữ liệu

**Cho TypeScript:**
- Node.js 18 hoặc cao hơn
- Kiến thức TypeScript
- Hiểu biết về Zod schemas

**Yêu Cầu Chung:**
- Hiểu API/dịch vụ bạn đang tích hợp
- Quen thuộc với giao thức JSON-RPC (skill cung cấp tài liệu)
- Sẵn sàng đọc tài liệu API toàn diện

## Quy Trình Bốn Giai Đoạn

### Giai Đoạn 1: Nghiên Cứu Sâu và Lên Kế Hoạch

Trước khi viết bất kỳ code nào, bạn cần hiểu sâu những gì bạn đang xây dựng.

**Nghiên Cứu Tài Liệu Giao Thức MCP**

Tải tài liệu MCP chính thức:

```bash
# Lấy tài liệu giao thức MCP
# Dùng WebFetch để tải: https://modelcontextprotocol.io/llms-full.txt
```

Tài liệu toàn diện này chứa đầy đủ đặc tả MCP.

**Hiểu Các Nguyên Tắc Thiết Kế Lấy Agent Làm Trung Tâm**

Các công cụ MCP khác với các API wrappers truyền thống. Các nguyên tắc chính:

- **Xây Dựng Cho Quy Trình, Không Chỉ Endpoints**: Đừng chỉ đơn giản bọc API endpoints. Tạo công cụ cho phép hoàn thành nhiệm vụ. Ví dụ: `schedule_event` vừa kiểm tra khả dụng VÀ tạo sự kiện, không phải hai công cụ `check_availability` và `create_event` riêng biệt.

- **Tối Ưu Cho Context Hạn Chế**: Agents có context window bị hạn chế. Trả về thông tin có tín hiệu cao, không phải dumps dữ liệu. Cung cấp tùy chọn định dạng phản hồi "concise" vs "detailed".

- **Thiết Kế Thông Báo Lỗi Có Thể Thực Hiện**: Lỗi nên hướng dẫn agents về cách sử dụng đúng. Thay vì "Invalid filter", hãy nói "Try using filter='active_only' to reduce results".

- **Tuân Theo Phân Chia Nhiệm Vụ Tự Nhiên**: Tên công cụ nên phản ánh cách con người nghĩ về nhiệm vụ. Nhóm các công cụ liên quan với tiền tố nhất quán để dễ khám phá.

**Nghiên Cứu Tài Liệu API**

Đọc qua TẤT CẢ tài liệu API có sẵn:

- Tài liệu tham chiếu API chính thức
- Yêu cầu xác thực và ủy quyền
- Các pattern giới hạn tốc độ và phân trang
- Phản hồi lỗi và mã trạng thái
- Các endpoints và tham số có sẵn
- Các model và schema dữ liệu

Dùng web search và WebFetch tool khi cần để thu thập thông tin toàn diện.

**Tạo Kế Hoạch Triển Khai**

Ghi lại kế hoạch bao gồm:

- **Chọn Công Cụ**: Endpoints nào cần triển khai, ưu tiên theo giá trị
- **Tiện Ích Chung**: Các pattern request thông thường, pagination helpers, xử lý lỗi
- **Thiết Kế Input/Output**: Validation models, định dạng phản hồi (JSON hoặc Markdown), mức độ chi tiết (concise hoặc detailed)
- **Chiến Lược Xử Lý Lỗi**: Lỗi graceful, thông báo lỗi có thể thực hiện, kịch bản giới hạn tốc độ

### Giai Đoạn 2: Triển Khai

Với kế hoạch vững chắc, bắt đầu triển khai theo best practices cụ thể cho từng ngôn ngữ.

**Chọn Framework**

**Python**: Dùng MCP Python SDK với FastMCP
**TypeScript**: Dùng MCP TypeScript SDK

Tải hướng dẫn triển khai phù hợp:

- Cho Python: `reference/python_mcp_server.md`
- Cho TypeScript: `reference/node_mcp_server.md`

**Thiết Lập Cấu Trúc Dự Án**

Cho Python:

```python
# server.py
from mcp import FastMCP
from pydantic import BaseModel, Field

mcp = FastMCP("my-service")

# Định nghĩa models, tools, triển khai logic
```

Cho TypeScript:

```typescript
// src/index.ts
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { z } from "zod";

const server = new Server({
  name: "my-service",
  version: "1.0.0",
});
```

**Triển Khai Infrastructure Cốt Lõi Trước**

Xây dựng các tiện ích chung trước khi triển khai công cụ:

- Các hàm helper cho API request
- Tiện ích xử lý lỗi
- Các hàm định dạng phản hồi (JSON và Markdown)
- Pagination helpers
- Quản lý xác thực/token

**Triển Khai Công Cụ Có Hệ Thống**

Cho mỗi công cụ:

**Định Nghĩa Input Schema**

```python
# Python với Pydantic
class SearchInput(BaseModel):
    query: str = Field(description="Search query text")
    limit: int = Field(default=10, ge=1, le=100, description="Max results")
    format: str = Field(default="concise", pattern="^(concise|detailed)$")
```

```typescript
// TypeScript với Zod
const SearchInputSchema = z.object({
  query: z.string().describe("Search query text"),
  limit: z.number().int().min(1).max(100).default(10).describe("Max results"),
  format: z.enum(["concise", "detailed"]).default("concise"),
}).strict();
```

**Viết Docstrings Toàn Diện**

```python
@mcp.tool()
async def search_items(query: str, limit: int = 10, format: str = "concise") -> str:
    """
    Search for items matching the query.

    This tool searches across all indexed items and returns matching results.
    Use 'concise' format for quick overviews, 'detailed' for complete information.

    Args:
        query: Search terms (supports AND/OR operators)
        limit: Maximum results to return (1-100)
        format: Response format - 'concise' or 'detailed'

    Returns:
        JSON array of matching items with id, title, description

    Examples:
        - Find active projects: query="status:active type:project"
        - Recent updates: query="updated:>2024-01-01"

    Errors:
        - If no results: Returns empty array
        - If limit exceeded: Suggest reducing limit or narrowing query
    """
```

**Thêm Tool Annotations**

```python
@mcp.tool(
    readOnlyHint=True,  # Thao tác chỉ đọc
    destructiveHint=False,  # Không phá hủy
    idempotentHint=True,  # Các lần gọi lặp lại có cùng hiệu ứng
    openWorldHint=True,  # Tương tác với hệ thống bên ngoài
)
```

### Giai Đoạn 3: Review và Cải Tiến

Sau triển khai ban đầu, đảm bảo chất lượng.

**Review Chất Lượng Code**

Kiểm tra:

- **Nguyên Tắc DRY**: Không có code trùng lặp giữa các công cụ
- **Khả Năng Kết Hợp**: Logic chung được trích xuất thành hàm
- **Tính Nhất Quán**: Các thao tác tương tự trả về định dạng tương tự
- **Xử Lý Lỗi**: Tất cả lời gọi bên ngoài có xử lý lỗi
- **Type Safety**: Bao phủ type đầy đủ
- **Tài Liệu**: Mỗi công cụ có docstrings toàn diện

**Kiểm Thử và Build**

**Quan Trọng**: MCP servers là các tiến trình chạy dài. Đừng chạy chúng trực tiếp trong tiến trình chính hoặc chúng sẽ treo vô thời hạn.

**Cách Kiểm Thử An Toàn**:

- Dùng evaluation harness (xem Giai Đoạn 4) - khuyến nghị
- Chạy server trong tmux để giữ bên ngoài tiến trình chính
- Dùng timeout khi kiểm thử: `timeout 5s python server.py`

**Cho Python**:

```bash
# Xác minh cú pháp
python -m py_compile server.py

# Kiểm thử với evaluation harness
# (harness quản lý vòng đời server)
```

**Cho TypeScript**:

```bash
# Build phải thành công
npm run build

# Xác minh dist/index.js được tạo
ls dist/index.js

# Kiểm thử với evaluation harness
```

### Giai Đoạn 4: Tạo Đánh Giá

Tạo các đánh giá toàn diện để kiểm thử hiệu quả MCP server với các AI agents thực sự.

Tải hướng dẫn đánh giá: `reference/evaluation.md`

**Hiểu Mục Đích Đánh Giá**

Đánh giá kiểm thử xem LLMs có thể sử dụng MCP server của bạn hiệu quả để trả lời các câu hỏi thực tế, phức tạp hay không.

**Tạo 10 Câu Hỏi Đánh Giá**

Theo quy trình này:

1. **Kiểm Tra Công Cụ**: Liệt kê các công cụ có sẵn và khả năng của chúng
2. **Khám Phá Nội Dung**: Dùng các thao tác CHỈ ĐỌC để khám phá dữ liệu có sẵn
3. **Tạo Câu Hỏi**: Tạo 10 câu hỏi phức tạp, thực tế
4. **Xác Minh Câu Trả Lời**: Tự giải quyết từng câu hỏi để xác minh câu trả lời

**Yêu Cầu Đánh Giá**

Mỗi câu hỏi phải:

- **Độc lập**: Không phụ thuộc vào câu hỏi khác
- **Chỉ đọc**: Chỉ yêu cầu các thao tác không phá hủy
- **Phức tạp**: Yêu cầu nhiều lần gọi công cụ và khám phá
- **Thực tế**: Dựa trên các use cases thực tế
- **Có thể xác minh**: Câu trả lời đơn, rõ ràng để so sánh chuỗi
- **Ổn định**: Câu trả lời sẽ không thay đổi theo thời gian

**Ví Dụ Câu Hỏi Đánh Giá**

```xml
<qa_pair>
  <question>Find discussions about AI model launches with animal codenames. One model needed a specific safety designation that uses the format ASL-X. What number X was being determined for the model named after a spotted wild cat?</question>
  <answer>3</answer>
</qa_pair>
```

**Định Dạng Đầu Ra**

Tạo file XML với cấu trúc này:

```xml
<evaluation>
  <qa_pair>
    <question>Câu hỏi phức tạp của bạn ở đây</question>
    <answer>Câu trả lời có thể xác minh đơn</answer>
  </qa_pair>
  <!-- 9 qa_pairs khác -->
</evaluation>
```

## Hướng Dẫn Triển Khai Theo Ngôn Ngữ

Skill cung cấp hướng dẫn chi tiết cho cả Python và TypeScript:

**Triển Khai Python** (`reference/python_mcp_server.md`):

- Khởi tạo FastMCP server
- Pydantic models để xác nhận
- Đăng ký công cụ với `@mcp.tool`
- Các pattern Async/await
- Ví dụ làm việc hoàn chỉnh
- Danh sách kiểm tra chất lượng

**Triển Khai TypeScript** (`reference/node_mcp_server.md`):

- Thiết lập server với TypeScript SDK
- Zod schemas để xác nhận
- Đăng ký công cụ với `server.registerTool`
- Cấu trúc dự án và quy trình build
- Ví dụ làm việc hoàn chỉnh
- Danh sách kiểm tra chất lượng

**MCP Best Practices** (`reference/mcp_best_practices.md`):

- Quy ước đặt tên server và công cụ
- Hướng dẫn định dạng phản hồi (JSON vs Markdown)
- Best practices phân trang
- Giới hạn ký tự và truncation
- Bảo mật và xử lý lỗi

**Hướng Dẫn Đánh Giá** (`reference/evaluation.md`):

- Quy trình tạo câu hỏi
- Chiến lược xác minh câu trả lời
- Chạy đánh giá
- Ví dụ câu hỏi

## Ví Dụ Thực Tế

Hãy đi qua việc xây dựng một MCP server weather đơn giản:

**Giai Đoạn 1: Nghiên Cứu**

- Nghiên cứu tài liệu weather API (OpenWeatherMap, WeatherAPI, v.v.)
- Xác định các endpoints chính: thời tiết hiện tại, dự báo, cảnh báo
- Lên kế hoạch công cụ: `get_current_weather`, `get_forecast`, `search_location`
- Thiết kế định dạng phản hồi: concise (nhiệt độ, điều kiện) vs detailed (dữ liệu đầy đủ)

**Giai Đoạn 2: Triển Khai (Python)**

```python
from mcp import FastMCP
from pydantic import BaseModel, Field
import httpx

mcp = FastMCP("weather-service")

class WeatherInput(BaseModel):
    location: str = Field(description="City name or coordinates")
    format: str = Field(default="concise", pattern="^(concise|detailed)$")

@mcp.tool(readOnlyHint=True)
async def get_current_weather(location: str, format: str = "concise") -> str:
    """
    Get current weather for a location.

    Args:
        location: City name (e.g., "London, UK") or coordinates
        format: 'concise' for temp/conditions, 'detailed' for full data

    Returns:
        JSON with temperature, conditions, humidity, wind

    Examples:
        - get_current_weather("Paris, France", "concise")
        - get_current_weather("40.7128,-74.0060", "detailed")
    """
    async with httpx.AsyncClient() as client:
        response = await client.get(f"https://api.weather.com/v1/current", params={
            "location": location,
            "apikey": os.getenv("WEATHER_API_KEY")
        })
        data = response.json()

        if format == "concise":
            return json.dumps({
                "temperature": data["temp"],
                "conditions": data["weather"],
                "location": location
            })
        else:
            return json.dumps(data)
```

**Giai Đoạn 3: Review**

- Kiểm tra xử lý lỗi cho các địa điểm không hợp lệ
- Đảm bảo API key được yêu cầu
- Kiểm thử với các kịch bản timeout
- Xác minh tính nhất quán định dạng phản hồi

**Giai Đoạn 4: Đánh Giá**

```xml
<qa_pair>
  <question>What is the current temperature in Tokyo, Japan in Celsius?</question>
  <answer>15</answer>  <!-- Xác minh thủ công trước khi tạo eval -->
</qa_pair>
```

## Tóm Tắt Best Practices

**Xây Dựng Cho Quy Trình**: Tạo công cụ cho phép hoàn thành nhiệm vụ, không chỉ các API calls riêng lẻ.

**Tối Ưu Cho Context**: Trả về thông tin có tín hiệu cao. Cung cấp định dạng phản hồi concise vs detailed.

**Lỗi Có Thể Thực Hiện**: Thông báo lỗi nên hướng dẫn agents về cách sử dụng đúng với các gợi ý cụ thể.

**Tài Liệu Toàn Diện**: Mỗi công cụ cần docstrings chi tiết với ví dụ, mô tả tham số và kịch bản lỗi.

**Type Safety**: Dùng Pydantic (Python) hoặc Zod (TypeScript) để xác nhận đầu vào với các ràng buộc phù hợp.

**Kiểm Thử Với Đánh Giá**: Tạo 10 câu hỏi phức tạp kiểm thử các pattern sử dụng thực tế.

## Tài Liệu Tham Chiếu

Tất cả file tham chiếu trong Engineer Kit tại `../claudekit-engineer/.claude/skills/mcp-builder/reference/`:

- `mcp_best_practices.md` - Hướng dẫn MCP chung
- `python_mcp_server.md` - Hướng dẫn triển khai Python đầy đủ
- `node_mcp_server.md` - Hướng dẫn triển khai TypeScript đầy đủ
- `evaluation.md` - Tạo và chạy đánh giá

Tải chúng trong giai đoạn phát triển phù hợp.

## Skills và Lệnh Liên Quan

Khi xây dựng MCP servers, bạn cũng có thể dùng:

- [MCP Management](/vi/docs/engineer/skills/mcp-management) - Kiểm thử và tương tác với MCP server của bạn sau khi xây dựng
- [Backend Development](/vi/docs/engineer/skills/backend-development) - Nếu xây dựng công cụ API wrapper

## Nguyên Tắc Cốt Lõi

Chất lượng của một MCP server được đo lường bằng mức độ nó cho phép AI agents hoàn thành các nhiệm vụ thực tế. Thiết kế cho quy trình, không chỉ API endpoints. Tối ưu cho ngân sách context của agent. Tạo thông báo lỗi hướng dẫn cách sử dụng đúng. Kiểm thử với các đánh giá thực tế.

Xây dựng MCP servers mà AI agents thực sự muốn sử dụng.
