---
title: Google ADK Python Skill
description: Build AI agents with Google's Agent Development Kit - tool integration, multi-agent systems, and workflow orchestration
section: docs
category: skills/ai
order: 3
published: true
---

# Google ADK Python Skill

Code-first AI agent framework with tool integration, multi-agent coordination, and workflow orchestration.

## When to Use

- Building multi-agent systems with hierarchical coordination (researcher → writer → editor)
- Creating workflow pipelines (sequential/parallel execution, loop patterns)
- Integrating LLMs with tools (Google Search, Code Execution, custom functions)
- Deploying production agents to Vertex AI, Cloud Run, or custom infrastructure

## Quick Start

```bash
pip install google-adk
```

```python
from google.adk.agents import LlmAgent
from google.adk.tools import google_search

# Single agent with tools
agent = LlmAgent(
    name="search_assistant",
    model="gemini-2.5-flash",
    instruction="You are a helpful assistant that searches the web.",
    tools=[google_search]
)

# Multi-agent system
researcher = LlmAgent(name="Researcher", tools=[google_search])
writer = LlmAgent(name="Writer")
coordinator = LlmAgent(
    name="Coordinator",
    sub_agents=[researcher, writer]
)
```

## Common Use Cases

### Research Pipeline
**Who**: Content team lead
```
"Build a research assistant that searches tech news, summarizes findings,
and generates a weekly report. Need human approval before publishing."
```

### Code Analysis System
**Who**: Engineering manager
```
"Create an agent that reviews PR code, runs tests, checks documentation,
and suggests improvements. Parallel execution for speed."
```

### Customer Support Router
**Who**: Support operations lead
```
"Build a support agent that classifies tickets, searches knowledge base,
drafts responses, and escalates complex issues to specialists."
```

### Data Processing Workflow
**Who**: Analytics engineer
```
"Create a sequential pipeline: fetch data from APIs, clean it,
run analysis, generate visualizations. Loop through multiple datasets."
```

## Key Differences

| Feature | LlmAgent | Workflow Agents | BaseAgent |
|---------|----------|-----------------|-----------|
| **Behavior** | Dynamic routing | Predictable flow | Custom logic |
| **Use Case** | Adaptive tasks | Fixed pipelines | Specialized needs |
| **Sub-agents** | Yes (delegation) | Yes (orchestration) | Customizable |
| **Tools** | Built-in + custom | Inherited from agents | Manual setup |

**Workflow Types**:
- **SequentialAgent**: Execute agents in order (research → summarize → write)
- **ParallelAgent**: Run concurrently (web + papers + experts search)
- **LoopAgent**: Repeat with iteration logic (process each dataset)

## Quick Reference

### Agent Creation
```python
# Basic agent
agent = LlmAgent(
    name="agent_name",
    model="gemini-2.5-flash",
    instruction="Your instructions here",
    description="Agent description",
    tools=[tool1, tool2]
)

# Multi-agent coordinator
coordinator = LlmAgent(
    name="coordinator",
    model="gemini-2.5-flash",
    sub_agents=[agent1, agent2, agent3]
)
```

### Custom Tools
```python
from google.adk.tools import Tool

def calculate_sum(a: int, b: int) -> int:
    """Calculate sum of two numbers."""
    return a + b

sum_tool = Tool.from_function(calculate_sum)
```

### Workflows
```python
from google.adk.agents import SequentialAgent, ParallelAgent, LoopAgent

# Sequential
seq = SequentialAgent(name="pipeline", agents=[a1, a2, a3])

# Parallel
par = ParallelAgent(name="concurrent", agents=[a1, a2, a3])

# Loop
loop = LoopAgent(name="iterator", agent=processor)
```

### Human-in-the-Loop
```python
agent = LlmAgent(
    name="careful_agent",
    tools=[google_search],
    tool_confirmation=True  # Requires approval
)
```

### Supported Models
- `gemini-2.5-flash` (recommended for speed)
- `gemini-2.5-pro` (complex tasks)
- `gemini-1.5-flash`, `gemini-1.5-pro`
- Model-agnostic (supports other LLM providers)

## Pro Tips

- **Not activating?** Say: "Use google-adk-python skill to build a multi-agent research system"
- Use SequentialAgent for dependent tasks, ParallelAgent for independent ones
- Custom tools = any Python function with type hints + docstring
- Enable `tool_confirmation=True` for sensitive operations (data deletion, API calls)
- Hierarchical structure: coordinator → specialized agents → tools
- Deploy to Cloud Run for containerized hosting, Vertex AI for managed scaling
- Development version: `pip install git+https://github.com/google/adk-python.git@main`

## Related Skills

- [AI Multimodal](/docs/skills/ai/ai-multimodal) - Gemini API integration
- [Planning](/docs/skills/tools/planning) - Agent workflow design
- [Backend Development](/docs/skills/backend/backend-development) - API integration

## Key Takeaway

Google ADK enables code-first AI agent development with tool integration, multi-agent coordination, and workflow orchestration. Optimized for Gemini, deployable to Cloud Run/Vertex AI, model-agnostic for flexibility.
