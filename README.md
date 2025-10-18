# ClaudeKit Documentation

Official documentation website for ClaudeKit - A comprehensive toolkit for building AI-powered applications with Claude.

🌐 **Live Site**: https://docs.claudekit.cc

## 🚀 Features

- **Modern Stack**: Astro v5 + React 18 + Tailwind CSS
- **AI-Powered**: Interactive AI assistant with OpenRouter
- **Content Collections**: Type-safe markdown management
- **Dark Theme**: One Dark Pro-inspired design
- **Responsive**: 3-column adaptive layout
- **Fast**: Static site generation, optimized performance
- **Accessible**: WCAG 2.1 AA compliant

## 🛠️ Tech Stack

- **Framework**: Astro v5.14.6
- **UI**: React 18.3.1, Tailwind CSS v3.4.17
- **Typography**: Inter (body), Geist Mono (code)
- **AI**: OpenRouter API via OpenAI SDK
- **Markdown**: remark-gfm, rehype plugins
- **Deployment**: Docker + Kubernetes

## 📁 Project Structure

```
src/
├── components/       # UI components (Header, Sidebar, AIChat)
├── content/          # Markdown docs (getting-started, core-concepts, etc.)
├── layouts/          # Page layouts (Base, Docs)
├── lib/              # Utilities (openrouter.ts)
├── pages/            # Routes (index, [...slug])
└── styles/           # Global CSS

k8s/                  # Kubernetes configs
docs/                 # Project documentation
```

## 🚀 Quick Start

```bash
# Install
npm install

# Dev server
npm run dev

# Build
npm run build

# Preview
npm run preview
```

Visit `http://localhost:4321`

## 📝 Adding Documentation

Create markdown in `src/content/docs/`:

```markdown
---
title: Your Title
description: Your description
category: getting-started
order: 1
published: true
---

# Content
```

Routes auto-generate from file structure.

## 🐳 Docker

```bash
docker build -t claudekit-docs .
docker run -p 3000:3000 claudekit-docs
```

## ☸️ Kubernetes

See `k8s/README.md` for deployment guide.

```bash
kubectl apply -f k8s/
```

## 📚 Documentation

- [Tech Stack](./docs/tech-stack.md)
- [Design Guidelines](./docs/design-guidelines.md)
- [K8s Deployment](./k8s/README.md)

## Related Projects

- [ClaudeKit Website](https://github.com/mrgoonie/claudekit) - Main site
- [ClaudeKit Engineer](https://github.com/claudekit/claudekit-engineer) - Engineering kit
- [ClaudeKit Marketing](https://github.com/claudekit/claudekit-marketing) - Marketing kit
- [ClaudeKit CLI](https://github.com/mrgoonie/claudekit-cli) - CLI tool

## 📄 License

MIT

