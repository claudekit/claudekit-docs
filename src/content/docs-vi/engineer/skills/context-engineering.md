---
title: "ck:context-engineering"
description: "Theo dõi giới hạn context usage, tối ưu hóa token consumption và thiết kế kiến trúc agent hiệu quả"
section: engineer
kit: engineer
category: skills
order: 50
lang: vi
---

# `ck:context-engineering`

Nghệ thuật và khoa học của việc tuyển chọn tập token nhỏ nhất có tín hiệu cao để đạt chất lượng reasoning LLM tối đa trong khi giảm thiểu token usage.

## Skill Này Làm Gì

Context Engineering giúp bạn thiết kế, debug và tối ưu hóa các agent systems khi giới hạn context cản trở hiệu năng. Nó cung cấp các frameworks để hiểu context degradation, implement các chiến lược compression và xây dựng các kiến trúc multi-agent cô lập công việc hiệu quả.

Hãy nghĩ về nó như người quản lý ngân sách context của bạn — theo dõi usage, phát hiện các degradation patterns và hướng dẫn bạn đến các kiến trúc tối đa hóa chất lượng reasoning trên mỗi token được sử dụng.

## Khi Nào Kích Hoạt

- Thiết kế hoặc debug agent systems
- Giới hạn context cản trở hiệu năng
- Tối ưu hóa chi phí hoặc latency
- Xây dựng multi-agent coordination
- Implement memory systems
- Đánh giá hiệu năng agent
- Phát triển LLM-powered pipelines

## Nguyên Tắc Cốt Lõi

1. **Chất lượng context > số lượng** - Tokens tín hiệu cao tốt hơn nội dung đầy đủ
2. **Attention là hữu hạn** - U-shaped curve ưu tiên các vị trí đầu/cuối
3. **Progressive disclosure** - Load thông tin just-in-time
4. **Isolation prevents degradation** - Phân chia công việc qua sub-agents
5. **Đo lường trước khi tối ưu** - Biết baseline của bạn

## Chiến Lược Bốn Bucket

1. **Write**: Lưu context ra ngoài (scratchpads, files)
2. **Select**: Chỉ pull context liên quan (retrieval, filtering)
3. **Compress**: Giảm tokens trong khi bảo tồn thông tin (summarization)
4. **Isolate**: Chia nhỏ qua sub-agents (partitioning)

## Các Metrics Chính

- **Token utilization**: Cảnh báo ở 70%, kích hoạt optimization ở 80%
- **Token variance**: Giải thích 80% variance hiệu năng agent
- **Multi-agent cost**: ~15x baseline single agent
- **Compaction target**: Giảm 50-70%, mất <5% chất lượng
- **Cache hit target**: 70%+ cho workloads ổn định

## Sử Dụng

Kích hoạt khi hỏi về phần trăm context, rate limits, usage warnings, context optimization, agent architectures hoặc memory systems.

## Câu Lệnh Mẫu

- "Context usage của tôi hiện tại bao nhiêu? Tôi có nên lo lắng không?"
- "Làm thế nào tôi có thể tối ưu hóa agent workflow này để dùng ít tokens hơn?"
- "Thiết kế kiến trúc multi-agent để xử lý codebases lớn"
- "Tại sao agent của tôi thất bại trên các files lớn?"
- "Implement memory system cho kiến thức cross-session"

## Quick Reference Topics

- **Fundamentals**: Cấu trúc context, attention mechanics
- **Degradation**: Lost-in-middle, poisoning, debugging failures
- **Optimization**: Compaction, masking, caching, partitioning
- **Compression**: Long sessions, chiến lược summarization
- **Memory**: Cross-session persistence, knowledge graphs
- **Multi-Agent**: Coordination patterns, context isolation
- **Evaluation**: Testing agents, LLM-as-Judge, metrics
- **Tool Design**: Tool consolidation, description engineering
