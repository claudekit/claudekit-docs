import { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

// Simple SVG icons to avoid @lobehub/icons React 19 dependency
const OpenAIIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
  </svg>
);

const ClaudeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.709 15.955l4.72-2.647.08-.08 2.726-1.605-2.566-1.605-2.646 1.525-.08.08-4.8 2.807c-.48.24-.48.88.08 1.125l2.486 1.365v-1.045zm14.502-7.91l-4.72 2.647-.08.08-2.726 1.605 2.566 1.605 2.646-1.525.08-.08 4.8-2.807c.48-.24.48-.88-.08-1.125l-2.486-1.365v1.045zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
  </svg>
);

interface Props {
  pageContent: string;
  pageUrl: string;
  pageSlug: string;
  frontmatter: {
    title: string;
    description: string;
    section: string;
    category?: string;
  };
}

export default function CopyForLLMs({ pageContent, pageUrl, pageSlug, frontmatter }: Props) {
  const [copied, setCopied] = useState(false);

  const getPrompt = () => {
    return `---
title: ${frontmatter.title}
description: ${frontmatter.description}
section: ${frontmatter.section}
category: ${frontmatter.category || 'N/A'}
---

# ${frontmatter.title}

${pageContent}`;
  }

  const copyAsMarkdown = () => {
    const markdown = getPrompt();
    navigator.clipboard.writeText(markdown).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const openInClaude = () => {
    // Claude.ai doesn't currently support URL parameter pre-fill (stopped working ~Oct 2024)
    // Best approach: copy to clipboard + open Claude, with toast notification
    const prompt = `Help me understand this ClaudeKit documentation:\n\n${getPrompt()}`;
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
      window.open('https://claude.ai/new', '_blank');
    });
  };

  const openInChatGPT = () => {
    // ChatGPT supports ?q= URL parameter for pre-filling prompts
    // Note: Very long prompts may get truncated, so we limit to ~6000 chars
    const prompt = `Help me understand this ClaudeKit documentation:\n\n${getPrompt()}`;
    const truncatedPrompt = prompt.slice(0, 6000);
    const encoded = encodeURIComponent(truncatedPrompt);
    window.open(`https://chatgpt.com/?q=${encoded}`, '_blank');
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="group flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-text-primary bg-bg-primary border border-border rounded-lg shadow-sm hover:bg-bg-secondary hover:border-border-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue data-[state=open]:bg-bg-secondary transition-all duration-200">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary group-hover:text-text-primary transition-colors">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <span>{copied ? 'Copied!' : 'Copy page'}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" className="text-text-muted transition-transform duration-200 group-data-[state=open]:rotate-180 group-hover:text-text-secondary">
          <path d="M3 5l3 3 3-3" stroke="currentColor" fill="none" strokeWidth="1.5" />
        </svg>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="z-50 min-w-[340px] bg-bg-primary rounded-xl shadow-xl border border-border p-2 animate-in fade-in zoom-in-95 duration-200 slide-in-from-top-2" sideOffset={8} align="end">

          {/* Copy Page */}
          <DropdownMenu.Item className="flex items-start gap-3 p-2 outline-none cursor-pointer rounded-lg hover:bg-bg-secondary focus:bg-bg-secondary group transition-colors" onSelect={copyAsMarkdown}>
            <div className="flex items-center justify-center w-8 h-8 mt-0.5 rounded-lg border border-border text-text-secondary bg-bg-secondary group-hover:border-border-hover group-hover:text-text-primary transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-text-primary">Copy page</div>
              <div className="text-xs text-text-secondary mt-0.5">Copy page as Markdown for LLMs</div>
            </div>
          </DropdownMenu.Item>

          {/* View as Markdown */}
          <DropdownMenu.Item className="flex items-start gap-3 p-2 outline-none cursor-pointer rounded-lg hover:bg-bg-secondary focus:bg-bg-secondary group transition-colors" asChild>
            <a href={`${pageUrl.replace(/\/$/, '')}.md`} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center justify-center w-8 h-8 mt-0.5 rounded-lg border border-border text-text-secondary bg-bg-secondary group-hover:border-border-hover group-hover:text-text-primary transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold text-text-primary">View as Markdown</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted group-hover:text-text-secondary">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
                <div className="text-xs text-text-secondary mt-0.5">View this page as plain text</div>
              </div>
            </a>
          </DropdownMenu.Item>

          {/* Open in ChatGPT */}
          <DropdownMenu.Item className="flex items-start gap-3 p-2 outline-none cursor-pointer rounded-lg hover:bg-bg-secondary focus:bg-bg-secondary group transition-colors" onSelect={openInChatGPT}>
            <div className="flex items-center justify-center w-8 h-8 mt-0.5 rounded-lg border border-border text-text-secondary bg-bg-secondary group-hover:border-border-hover group-hover:text-text-primary transition-colors">
              <OpenAIIcon />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold text-text-primary">Open in ChatGPT</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted group-hover:text-text-secondary">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              <div className="text-xs text-text-secondary mt-0.5">Opens with prompt pre-filled</div>
            </div>
          </DropdownMenu.Item>

          {/* Open in Claude */}
          <DropdownMenu.Item className="flex items-start gap-3 p-2 outline-none cursor-pointer rounded-lg hover:bg-bg-secondary focus:bg-bg-secondary group transition-colors" onSelect={openInClaude}>
            <div className="flex items-center justify-center w-8 h-8 mt-0.5 rounded-lg border border-border text-text-secondary bg-bg-secondary group-hover:border-border-hover group-hover:text-text-primary transition-colors">
              <ClaudeIcon />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold text-text-primary">Open in Claude</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted group-hover:text-text-secondary">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              <div className="text-xs text-text-secondary mt-0.5">Copies to clipboard, then opens Claude</div>
            </div>
          </DropdownMenu.Item>

        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}