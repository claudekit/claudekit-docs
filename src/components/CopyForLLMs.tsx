import { useState, useEffect } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';


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
  const [icons, setIcons] = useState<{ OpenAI?: any; Claude?: any }>({});

  // Load icons dynamically to avoid ES module import issues
  useEffect(() => {
    const loadIcons = async () => {
      try {
        const iconsModule = await import('@lobehub/icons');
        setIcons({ OpenAI: iconsModule.OpenAI, Claude: iconsModule.Claude });
      } catch (error) {
        console.warn('Could not load @lobehub/icons, falling back to placeholder');
      }
    };
    loadIcons();
  }, []);

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
              {icons.OpenAI && <icons.OpenAI size={18} />}
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
              {icons.Claude && <icons.Claude size={18} />}
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