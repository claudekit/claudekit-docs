---
title: "Context Engineering"
description: "Monitor context usage limits, tối ưu hóa token consumption và thiết kế efficient agent architectures"
section: engineer
kit: engineer
category: skills
order: 22
lang: vi
---

Nghệ thuật và khoa học của việc curate smallest high-signal token set để đạt maximum LLM reasoning quality trong khi minimize token usage.

## Skill Này Làm Gì

Context Engineering giúp bạn thiết kế, debug và tối ưu hóa agent systems khi context limits constraint performance. Nó cung cấp frameworks để hiểu context degradation, implement compression strategies và build multi-agent architectures isolate công việc hiệu quả.

Hãy nghĩ về nó như context budget manager của bạn—monitoring usage, detecting degradation patterns và hướng dẫn bạn đến các architectures maximize reasoning quality mỗi token spent.

## Khi Nào Kích Hoạt

- Thiết kế hoặc debug agent systems
- Context limits đang constraint performance
- Tối ưu hóa cost hoặc latency
- Build multi-agent coordination
- Implement memory systems
- Đánh giá agent performance
- Develop LLM-powered pipelines

## Nguyên Tắc Cốt Lõi

1. **Context quality > quantity** - High-signal tokens beat exhaustive content
2. **Attention is finite** - U-shaped curve favors beginning/end positions
3. **Progressive disclosure** - Load information just-in-time
4. **Isolation prevents degradation** - Partition work across sub-agents
5. **Measure before optimizing** - Know your baseline

## Four-Bucket Strategy

1. **Write**: Lưu context externally (scratchpads, files)
2. **Select**: Pull chỉ relevant context (retrieval, filtering)
3. **Compress**: Giảm tokens trong khi preserve info (summarization)
4. **Isolate**: Split across sub-agents (partitioning)

## Key Metrics

- **Token utilization**: Warning ở 70%, trigger optimization ở 80%
- **Token variance**: Explains 80% của agent performance variance
- **Multi-agent cost**: ~15x single agent baseline
- **Compaction target**: 50-70% reduction, <5% quality loss
- **Cache hit target**: 70%+ cho stable workloads

## Sử Dụng

Kích hoạt khi hỏi về context percentage, rate limits, usage warnings, context optimization, agent architectures, hoặc memory systems.

## Câu Lệnh Mẫu

- "Current context usage của tôi là gì? Tôi có nên lo lắng không?"
- "Làm thế nào tôi có thể optimize agent workflow này để dùng ít tokens hơn?"
- "Thiết kế multi-agent architecture để process large codebases"
- "Tại sao agent của tôi failing trên large files?"
- "Implement memory system cho cross-session knowledge"

## Quick Reference Topics

- **Fundamentals**: Context anatomy, attention mechanics
- **Degradation**: Lost-in-middle, poisoning, debugging failures
- **Optimization**: Compaction, masking, caching, partitioning
- **Compression**: Long sessions, summarization strategies
- **Memory**: Cross-session persistence, knowledge graphs
- **Multi-Agent**: Coordination patterns, context isolation
- **Evaluation**: Testing agents, LLM-as-Judge, metrics
- **Tool Design**: Tool consolidation, description engineering
