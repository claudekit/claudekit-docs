// Centralized navigation section configuration
// Extracted from EngineerNav, MarketingNav, CLINav, WorkflowsNav, ToolsNav, SupportNav, ChangelogNav

export interface NavSectionConfig {
  badge?: string;
  badgeIcon?: string; // SVG path content for badge icon (CLI has one)
  accentColor: string;
  badgeStyle: 'filled' | 'outlined'; // filled = colored bg, outlined = border only (CLI)
  layout: 'categorized' | 'flat' | 'grouped'; // categorized = collapsible categories, flat = simple list, grouped = non-collapsible groups
  categoryOrder?: string[];
  categoryIcons?: Record<string, string>;
  categoryMeta?: Record<string, { title: string; collapsible?: boolean }>;
  filterIndex?: boolean; // ToolsNav filters out index pages
  showDocIcon?: boolean; // CLINav shows document icon per nav item
}

export const NAV_SECTION_CONFIGS: Record<string, NavSectionConfig> = {
  engineer: {
    badge: 'Engineer Kit',
    accentColor: 'var(--color-accent-blue)',
    badgeStyle: 'filled',
    layout: 'categorized',
    categoryOrder: ['overview', 'agents', 'commands', 'skills', 'configuration'],
    categoryIcons: {
      overview: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
      agents: '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
      commands: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',
      skills: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
      configuration: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>'
    }
  },

  marketing: {
    badge: 'Marketing Kit',
    accentColor: 'var(--color-accent-coral, #D97757)',
    badgeStyle: 'filled',
    layout: 'categorized',
    categoryOrder: ['overview', 'agents', 'commands', 'skills', 'workflows', 'dashboard'],
    categoryIcons: {
      overview: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
      agents: '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
      commands: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',
      skills: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
      workflows: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
      dashboard: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>'
    }
  },

  cli: {
    badge: 'ClaudeKit CLI',
    badgeIcon: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
    accentColor: 'var(--color-accent-blue)',
    badgeStyle: 'outlined',
    layout: 'flat',
    showDocIcon: true
  },

  workflows: {
    badge: 'Engineer Workflows',
    accentColor: 'var(--color-accent-blue, #60A5FA)',
    badgeStyle: 'filled',
    layout: 'flat'
  },

  tools: {
    accentColor: 'var(--color-accent-blue)',
    badgeStyle: 'filled',
    layout: 'flat',
    filterIndex: true
  },

  support: {
    accentColor: 'var(--color-accent-blue)',
    badgeStyle: 'filled',
    layout: 'grouped',
    categoryMeta: {
      troubleshooting: { title: 'Troubleshooting', collapsible: false },
      uncategorized: { title: 'Support', collapsible: false }
    }
  },

  changelog: {
    accentColor: 'var(--color-accent-blue)',
    badgeStyle: 'filled',
    layout: 'flat'
  }
};
