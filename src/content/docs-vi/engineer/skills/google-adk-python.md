---
title: "ck:google-adk-python"
description: Xây dựng, đánh giá và triển khai AI agents với Google's Agent Development Kit - bộ công cụ code-first cho tích hợp công cụ và điều phối multi-agent
section: engineer
kit: engineer
category: skills
order: 50
published: true
lang: vi
---

# Google ADK Python

> Xây dựng AI agents sẵn sàng cho production với tích hợp công cụ, điều phối multi-agent, và tự động hóa quy trình sử dụng Google's Agent Development Kit.

## Skill Này Làm Gì

Google ADK (Agent Development Kit) Python là một framework mã nguồn mở, code-first để xây dựng AI agents tích hợp công cụ, phối hợp nhiều agent chuyên biệt, và thực thi các quy trình có thể dự đoán. Không giống như các prototype chat, ADK xử lý việc phát triển agent như kỹ thuật phần mềm truyền thống với kiểm soát phiên bản, kiểm thử, và đánh giá có hệ thống.

Skill này cho phép bạn tạo LLM-powered agents với Google Search, Code Execution, hoặc các công cụ tùy chỉnh, xây dựng hệ thống multi-agent phân cấp với coordinator patterns, và triển khai agents lên Vertex AI, Cloud Run, hoặc infrastructure tùy chỉnh.

## Yêu Cầu Trước

**Cài đặt**:
```bash
# Bản ổn định (khuyến nghị)
pip install google-adk

# Phiên bản phát triển (tính năng mới nhất)
pip install git+https://github.com/google/adk-python.git@main
```

**Quyền Truy Cập API**:
- Google AI Studio API key cho Gemini models (https://aistudio.google.com/apikey)
- HOẶC Google Cloud Project với Vertex AI đã bật

**Tùy Chọn**:
- Docker để triển khai Cloud Run
- Google Cloud SDK để triển khai Vertex AI

## Kích Hoạt

Skill này tự động kích hoạt khi:
- Người dùng đề cập đến Google ADK, phát triển agent, hoặc hệ thống multi-agent
- Người dùng cần tích hợp công cụ với LLMs
- Người dùng muốn xây dựng tự động hóa quy trình với AI
- Người dùng thảo luận về điều phối hoặc phối hợp agent

Kích hoạt thủ công:
```bash
/ck:google-adk-python
```

## Khái Niệm Cốt Lõi

### Loại Agent

**LlmAgent**: Agents được cung cấp bởi LLM với quyết định động
- Định nghĩa với name, model, instruction, description, và tools
- Hỗ trợ sub-agents để ủy quyền và phối hợp
- Định tuyến thông minh dựa trên ngữ cảnh và đầu vào người dùng
- Tốt nhất cho: Đầu vào không thể đoán trước yêu cầu hành vi thích ứng

**Workflow Agents**: Các pattern điều phối có cấu trúc
- **SequentialAgent**: Thực thi agents theo thứ tự đã định (pipeline)
- **ParallelAgent**: Chạy nhiều agents đồng thời (fan-out)
- **LoopAgent**: Lặp lại thực thi với logic lặp
- Tốt nhất cho: Các quy trình nhiều bước có thể đoán trước

**BaseAgent**: Nền tảng cho các triển khai agent tùy chỉnh
- Mở rộng để tạo các loại agent chuyên biệt
- Triển khai logic thực thi tùy chỉnh

### Hệ Sinh Thái Công Cụ

Công cụ được tích hợp sẵn:
- `google_search`: Tích hợp tìm kiếm web
- `code_execution`: Thực thi code Python an toàn

Công cụ tùy chỉnh:
- Chuyển đổi hàm Python thành công cụ với `Tool.from_function()`
- Tích hợp các thông số OpenAPI
- Thêm luồng xác nhận human-in-the-loop

## Khả Năng

### Agent Đơn Với Công Cụ

Tạo agents sử dụng công cụ để hoàn thành nhiệm vụ:

```python
from google.adk.agents import LlmAgent
from google.adk.tools import google_search

agent = LlmAgent(
    name="search_assistant",
    model="gemini-2.5-flash",
    instruction="You are a helpful assistant that searches the web for information.",
    description="Search assistant for web queries",
    tools=[google_search]
)

# Chạy agent
response = agent.run("What are the latest AI trends in 2025?")
print(response)
```

**Khi nào dùng**: Nhiệm vụ đơn giản khi một agent với công cụ là đủ (nghiên cứu, lấy dữ liệu, tính toán).

### Phối Hợp Multi-Agent

Xây dựng hệ thống phân cấp với các agent chuyên biệt:

```python
from google.adk.agents import LlmAgent
from google.adk.tools import google_search

# Các agent chuyên biệt
researcher = LlmAgent(
    name="Researcher",
    model="gemini-2.5-flash",
    instruction="Research topics thoroughly using web search. Provide detailed summaries with sources.",
    tools=[google_search]
)

writer = LlmAgent(
    name="Writer",
    model="gemini-2.5-flash",
    instruction="Write clear, engaging content based on research. Use professional tone.",
)

# Agent coordinator ủy quyền cho chuyên gia
coordinator = LlmAgent(
    name="Coordinator",
    model="gemini-2.5-flash",
    instruction="Delegate research tasks to Researcher, then send findings to Writer for content creation.",
    sub_agents=[researcher, writer]
)

# Coordinator định tuyến công việc thông minh
result = coordinator.run("Create a blog post about renewable energy trends")
```

**Khi nào dùng**: Nhiệm vụ phức tạp yêu cầu các lĩnh vực chuyên môn khác nhau, phân tách mối quan tâm, hoặc các agent chuyên biệt có thể tái sử dụng.

### Tạo Công Cụ Tùy Chỉnh

Mở rộng agents với các công cụ theo lĩnh vực:

```python
from google.adk.tools import Tool

def calculate_roi(revenue: float, cost: float) -> float:
    """Calculate return on investment percentage."""
    if cost == 0:
        return 0.0
    return ((revenue - cost) / cost) * 100

# Chuyển đổi hàm thành công cụ
roi_tool = Tool.from_function(calculate_roi)

agent = LlmAgent(
    name="business_analyst",
    model="gemini-2.5-flash",
    instruction="Analyze business metrics and provide ROI calculations.",
    tools=[roi_tool]
)

response = agent.run("What's the ROI if we spent $50,000 and earned $85,000?")
```

**Khi nào dùng**: Tính toán theo lĩnh vực, tích hợp API, truy vấn cơ sở dữ liệu, hoặc bất kỳ logic nào có thể thực thi bằng Python.

### Quy Trình Tuần Tự

Thực thi agents theo thứ tự đã định cho các pipeline nhiều bước:

```python
from google.adk.agents import SequentialAgent

# Định nghĩa các giai đoạn pipeline
workflow = SequentialAgent(
    name="research_workflow",
    agents=[researcher, summarizer, writer]
)

# Mỗi agent xử lý đầu ra từ agent trước
result = workflow.run("Research AI ethics and write a summary")
```

**Khi nào dùng**: Các quy trình nhiều bước có thể đoán trước như ETL pipelines, quy trình tạo nội dung, hoặc chuỗi xử lý dữ liệu.

### Thực Thi Song Song

Chạy nhiều agents đồng thời để tăng tốc:

```python
from google.adk.agents import ParallelAgent

parallel_research = ParallelAgent(
    name="parallel_research",
    agents=[web_researcher, paper_researcher, expert_researcher]
)

# Tất cả agents chạy đồng thời, kết quả được kết hợp
results = parallel_research.run("Gather comprehensive data on quantum computing")
```

**Khi nào dùng**: Các nhiệm vụ độc lập có thể chạy đồng thời, tổng hợp dữ liệu từ nhiều nguồn, hoặc giảm độ trễ.

### Human-in-the-Loop

Yêu cầu phê duyệt trước khi thực thi công cụ để đảm bảo an toàn:

```python
from google.adk.tools import google_search

agent = LlmAgent(
    name="careful_searcher",
    model="gemini-2.5-flash",
    tools=[google_search],
    tool_confirmation=True  # Người dùng phải phê duyệt mỗi lần tìm kiếm
)

# Agent dừng lại để xác nhận trước khi thực thi công cụ
response = agent.run("Search for company financial data")
# Người dùng thấy: "Approve search for 'company financial data'? (y/n)"
```

**Khi nào dùng**: Các thao tác nhạy cảm, giao dịch tài chính, xóa dữ liệu, hoặc bất kỳ hành động nào yêu cầu giám sát của con người.

## Tùy Chọn Triển Khai

### Cloud Run

Đóng gói và triển khai lên Google Cloud Run:

```bash
# Tạo Dockerfile
cat > Dockerfile << 'EOF'
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "agent_server.py"]
EOF

# Build và deploy
docker build -t my-agent .
gcloud run deploy my-agent --image my-agent --region us-central1
```

### Vertex AI Agent Engine

Triển khai lên infrastructure được quản lý:

```python
# ADK tích hợp với Vertex AI cho:
# - Hosting agent có thể mở rộng
# - Monitoring và logging
# - Quản lý phiên bản
# - Infrastructure sẵn sàng cho production
```

### Infrastructure Tùy Chỉnh

Chạy cục bộ hoặc trên máy chủ tùy chỉnh:

```python
# Toàn quyền kiểm soát triển khai
# Chạy như Python script, FastAPI server, hoặc scheduled job
if __name__ == "__main__":
    agent = LlmAgent(...)
    result = agent.run("Task description")
```

## Hỗ Trợ Model

**Được tối ưu cho Gemini**:
- gemini-2.5-flash (nhanh, tiết kiệm chi phí)
- gemini-2.5-pro (lý luận chất lượng cao)
- gemini-1.5-flash
- gemini-1.5-pro

**Không phụ thuộc vào model**: Hỗ trợ các nhà cung cấp LLM khác thông qua các API tiêu chuẩn.

## Ví Dụ

### Ví Dụ 1: Research Assistant

Xây dựng agent nghiên cứu chủ đề và tạo báo cáo:

```python
from google.adk.agents import LlmAgent, SequentialAgent
from google.adk.tools import google_search

# Giai đoạn 1: Nghiên cứu
researcher = LlmAgent(
    name="Researcher",
    model="gemini-2.5-flash",
    instruction="Search for comprehensive information on the topic. Find recent articles, statistics, and expert opinions.",
    tools=[google_search]
)

# Giai đoạn 2: Tóm tắt
summarizer = LlmAgent(
    name="Summarizer",
    model="gemini-2.5-flash",
    instruction="Create a concise 300-word summary highlighting key findings and trends."
)

# Giai đoạn 3: Viết báo cáo
writer = LlmAgent(
    name="Writer",
    model="gemini-2.5-flash",
    instruction="Transform summary into professional report with sections: Executive Summary, Key Findings, Recommendations."
)

# Kết hợp thành quy trình
research_pipeline = SequentialAgent(
    name="research_pipeline",
    agents=[researcher, summarizer, writer]
)

report = research_pipeline.run("AI agent frameworks in enterprise software")
```

### Ví Dụ 2: Customer Support Router

Định tuyến truy vấn khách hàng đến các agent chuyên biệt:

```python
# Các agent chuyên biệt
billing_agent = LlmAgent(
    name="BillingAgent",
    instruction="Handle billing questions, refunds, and payment issues.",
    tools=[check_invoice_tool, process_refund_tool]
)

technical_agent = LlmAgent(
    name="TechnicalAgent",
    instruction="Troubleshoot technical issues and provide step-by-step solutions.",
    tools=[check_system_status_tool, create_ticket_tool]
)

# Router phối hợp
support_router = LlmAgent(
    name="SupportRouter",
    instruction="Route customer queries to appropriate specialist. Escalate if needed.",
    sub_agents=[billing_agent, technical_agent]
)

response = support_router.run("I was charged twice for my subscription")
# Router tự động gửi đến billing_agent
```

## Thực Hành Tốt Nhất

**Triết lý code-first**: Định nghĩa agents trong Python để kiểm soát phiên bản, kiểm thử, và tích hợp CI/CD.

**Thiết kế module**: Tạo các agent chuyên biệt cho các lĩnh vực cụ thể, kết hợp thành hệ thống lớn hơn.

**Bắt đầu đơn giản**: Xây dựng agent đơn trước, sau đó mở rộng sang multi-agent khi độ phức tạp đòi hỏi.

**Viết kiểm thử**: Xử lý agents như code - tạo test cases, xác nhận đầu ra, đo hiệu suất.

**Triển khai an toàn**: Dùng tool confirmation cho các thao tác nhạy cảm, thêm xác nhận đầu vào.

**Theo dõi trong production**: Theo dõi hiệu suất agent, sử dụng công cụ, tỷ lệ lỗi và độ trễ.

**Tối ưu hóa lựa chọn model**: Dùng flash models để tăng tốc/tiết kiệm chi phí, pro models cho lý luận phức tạp.

## Xử Lý Sự Cố

**Vấn đề**: Agent không dùng công cụ khi được mong đợi.

**Giải pháp**: Cải thiện sự rõ ràng của instruction. Ví dụ: "Use google_search to find current information" thay vì "Research the topic."

---

**Vấn đề**: Phối hợp multi-agent thất bại.

**Giải pháp**: Đảm bảo instruction coordinator đề cập rõ ràng tên sub-agent và chiến lược ủy quyền.

---

**Vấn đề**: Triển khai lên Cloud Run thất bại.

**Giải pháp**: Kiểm tra environment variables (GEMINI_API_KEY), đảm bảo tất cả dependencies trong requirements.txt, xác minh health check endpoint.

---

**Vấn đề**: Độ trễ cao trong production.

**Giải pháp**: Dùng ParallelAgent cho các nhiệm vụ độc lập, cache kết quả khi có thể, chuyển sang gemini-2.5-flash từ pro.

## Skills Liên Quan

- [AI Multimodal](/vi/docs/engineer/skills/ai-multimodal) - Xử lý hình ảnh, âm thanh, video với Gemini
- [Backend Development](/vi/docs/engineer/skills/backend-development) - Triển khai agents như APIs
- [DevOps](/vi/docs/engineer/skills/devops) - Điều phối container và triển khai

## Tài Nguyên

- GitHub: https://github.com/google/adk-python
- Documentation: https://google.github.io/adk-docs/
- llms.txt: https://raw.githubusercontent.com/google/adk-python/refs/heads/main/llms.txt
