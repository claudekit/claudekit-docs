---
description: Write tutorials
argument-hint: [topic] [audience]
---

## Arguments
- TOPIC: $1 (default: pick random topic)
- AUDIENCE: $2 (default: beginners, non-tech users & no-brainers)

## Mission
Write tutorials for ClaudeKit with the following topics:
<topics>$TOPIC</topics>

## Target audience
<audience>$AUDIENCE</audience>

## Requirements

- Write in 2 languages: English and Vietnamese (surfix with "-en" and "-vi")
- Write in markdown format
- Write in a way that is easy to understand
- Write in a way that is easy to follow
- Write in a way that is easy to translate
- Be friendly and helpful
- Hands-On, Actionable Content
- Content must reflect the knowledge, experience & effort of the ClaudeKit's team
- Store the results in `./docs/tutorials/YYYY-MM-DD-[topic]-en.md` and `./docs/tutorials/YYYY-MM-DD-[topic]-vi.md`

## Workflow

- Learn more about [ClaudeKit](https://claudekit.cc) to understand what this documentation website is about.
- Use multiple `scout` subagents in parallel to scout for all content in `.src/content/docs` directory.
- Use multiple `researcher` subagents in parallel to research for:
  - Claude Code & context engineering techniques to make sure you understand what ClaudeKit can help with Claude Code users.
  - Claude Code: best practices, real world case studies, tips & cheat sheets for writing tutorials
- Start writing the article, include the citations if any.
- When you finish, respond to the user with the summary report.


