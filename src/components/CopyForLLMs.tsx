import { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

// SVG paths sourced from @lobehub/icons (https://github.com/lobehub/lobe-icons)
// Using inline SVGs to avoid heavy dependency (antd + @lobehub/ui peer deps)
const OpenAIIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd">
    <path d="M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z" />
  </svg>
);

const ClaudeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd">
    <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z" />
  </svg>
);

const PerplexityIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd">
    <path d="M19.785 0v7.272H22.5V17.62h-2.935V24l-7.037-6.194v6.145h-1.091v-6.152L4.392 24v-6.465H1.5V7.188h2.884V0l7.053 6.494V.19h1.09v6.49L19.786 0zm-7.257 9.044v7.319l5.946 5.234V14.44l-5.946-5.397zm-1.099-.08l-5.946 5.398v7.235l5.946-5.234V8.965zm8.136 7.58h1.844V8.349H13.46l6.105 5.54v2.655zm-8.982-8.28H2.59v8.195h1.8v-2.576l6.192-5.62zM5.475 2.476v4.71h5.115l-5.115-4.71zm13.219 0l-5.115 4.71h5.115v-4.71z" />
  </svg>
);

const GrokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd">
    <path d="M9.27 15.29l7.978-5.897c.391-.29.95-.177 1.137.272.98 2.369.542 5.215-1.41 7.169-1.951 1.954-4.667 2.382-7.149 1.406l-2.711 1.257c3.889 2.661 8.611 2.003 11.562-.953 2.341-2.344 3.066-5.539 2.388-8.42l.006.007c-.983-4.232.242-5.924 2.75-9.383.06-.082.12-.164.179-.248l-3.301 3.305v-.01L9.267 15.292M7.623 16.723c-2.792-2.67-2.31-6.801.071-9.184 1.761-1.763 4.647-2.483 7.166-1.425l2.705-1.25a7.808 7.808 0 00-1.829-1A8.975 8.975 0 005.984 5.83c-2.533 2.536-3.33 6.436-1.962 9.764 1.022 2.487-.653 4.246-2.34 6.022-.599.63-1.199 1.259-1.682 1.925l7.62-6.815" />
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

// Shared classnames to reduce repetition
const itemCls = "flex items-start gap-3 p-2 outline-none cursor-pointer rounded-lg hover:bg-bg-secondary focus:bg-bg-secondary group transition-colors";
const iconWrapCls = "flex items-center justify-center w-8 h-8 mt-0.5 rounded-lg border border-border text-text-secondary bg-bg-secondary group-hover:border-border-hover group-hover:text-text-primary transition-colors";
const externalLinkIcon = (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted group-hover:text-text-secondary">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

export default function CopyForLLMs({ pageContent, pageUrl, pageSlug, frontmatter }: Props) {
  const [copied, setCopied] = useState(false);

  const getMarkdown = () => {
    return `---
title: ${frontmatter.title}
description: ${frontmatter.description}
section: ${frontmatter.section}
category: ${frontmatter.category || 'N/A'}
---

# ${frontmatter.title}

${pageContent}`;
  }

  const getAiPrompt = () => {
    return `Help me understand this documentation page:\n\n${getMarkdown()}`;
  }

  const showCopiedToast = (durationMs = 2000) => {
    setCopied(true);
    setTimeout(() => setCopied(false), durationMs);
  };

  const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

  const copyAsMarkdown = () => {
    copyToClipboard(getMarkdown()).then(() => showCopiedToast());
  };

  const openInChatGPT = () => {
    // ChatGPT supports ?q= for pre-filling (not auto-submit).
    // Also copy to clipboard as fallback for long pages that get truncated in URL.
    const prompt = getAiPrompt();
    copyToClipboard(prompt).then(() => {
      showCopiedToast(3000);
      const encoded = encodeURIComponent(prompt.slice(0, 12000));
      window.open(`https://chatgpt.com/?q=${encoded}`, '_blank');
    });
  };

  const openInClaude = () => {
    // Claude.ai doesn't support URL pre-fill — copy to clipboard + open
    copyToClipboard(getAiPrompt()).then(() => {
      showCopiedToast(3000);
      window.open('https://claude.ai/new', '_blank');
    });
  };

  const openInPerplexity = () => {
    // Perplexity supports ?q= and auto-submits the search
    const prompt = getAiPrompt();
    copyToClipboard(prompt).then(() => {
      showCopiedToast(3000);
      const encoded = encodeURIComponent(prompt.slice(0, 12000));
      window.open(`https://www.perplexity.ai/search?q=${encoded}`, '_blank');
    });
  };

  const openInGrok = () => {
    // Grok doesn't support URL pre-fill — copy to clipboard + open
    copyToClipboard(getAiPrompt()).then(() => {
      showCopiedToast(3000);
      window.open('https://grok.com/', '_blank');
    });
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="group flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-text-primary bg-bg-primary border border-border rounded-lg shadow-sm hover:bg-bg-secondary hover:border-border-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue data-[state=open]:bg-bg-secondary transition-all duration-200">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary group-hover:text-text-primary transition-colors">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <span>{copied ? 'Copied!' : 'Copy for AI'}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" className="text-text-muted transition-transform duration-200 group-data-[state=open]:rotate-180 group-hover:text-text-secondary">
          <path d="M3 5l3 3 3-3" stroke="currentColor" fill="none" strokeWidth="1.5" />
        </svg>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="z-50 min-w-[340px] bg-bg-primary rounded-xl shadow-xl border border-border p-2 animate-in fade-in zoom-in-95 duration-200 slide-in-from-top-2" sideOffset={8} align="end">

          {/* Copy Page */}
          <DropdownMenu.Item className={itemCls} onSelect={copyAsMarkdown}>
            <div className={iconWrapCls}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-text-primary">Copy page</div>
              <div className="text-xs text-text-secondary mt-0.5">Copy as Markdown — paste into any AI</div>
            </div>
          </DropdownMenu.Item>

          {/* View as Markdown */}
          <DropdownMenu.Item className={itemCls} asChild>
            <a href={`${pageUrl.replace(/\/$/, '')}.md`} target="_blank" rel="noopener noreferrer">
              <div className={iconWrapCls}>
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
                  {externalLinkIcon}
                </div>
                <div className="text-xs text-text-secondary mt-0.5">View raw text version of this page</div>
              </div>
            </a>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="h-px bg-border my-1.5" />

          {/* Open with AI — section label */}
          <DropdownMenu.Label className="px-2 py-1.5 text-xs font-medium text-text-muted uppercase tracking-wider">
            Open with AI
          </DropdownMenu.Label>

          {/* ChatGPT */}
          <DropdownMenu.Item className={itemCls} onSelect={openInChatGPT}>
            <div className={iconWrapCls}><OpenAIIcon /></div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold text-text-primary">ChatGPT</span>
                {externalLinkIcon}
              </div>
              <div className="text-xs text-text-secondary mt-0.5">Opens with prompt pre-filled</div>
            </div>
          </DropdownMenu.Item>

          {/* Claude */}
          <DropdownMenu.Item className={itemCls} onSelect={openInClaude}>
            <div className={iconWrapCls}><ClaudeIcon /></div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold text-text-primary">Claude</span>
                {externalLinkIcon}
              </div>
              <div className="text-xs text-text-secondary mt-0.5">Copies to clipboard, then opens Claude</div>
            </div>
          </DropdownMenu.Item>

          {/* Perplexity */}
          <DropdownMenu.Item className={itemCls} onSelect={openInPerplexity}>
            <div className={iconWrapCls}><PerplexityIcon /></div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold text-text-primary">Perplexity</span>
                {externalLinkIcon}
              </div>
              <div className="text-xs text-text-secondary mt-0.5">Opens with search pre-filled</div>
            </div>
          </DropdownMenu.Item>

          {/* Grok */}
          <DropdownMenu.Item className={itemCls} onSelect={openInGrok}>
            <div className={iconWrapCls}><GrokIcon /></div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold text-text-primary">Grok</span>
                {externalLinkIcon}
              </div>
              <div className="text-xs text-text-secondary mt-0.5">Copies to clipboard, then opens Grok</div>
            </div>
          </DropdownMenu.Item>

        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
