/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Polar v1.1 color palette
        bg: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          tertiary: 'var(--color-bg-tertiary)',
          code: 'var(--color-bg-code)',
          'inline-code': 'var(--color-bg-inline-code)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
          inverse: 'var(--color-text-inverse)',
        },
        accent: {
          blue: 'var(--color-accent-blue)',
          green: 'var(--color-accent-green)',
          purple: 'var(--color-accent-purple)',
          cyan: 'var(--color-accent-cyan)',
          red: 'var(--color-accent-red)',
          yellow: 'var(--color-accent-yellow)',
          orange: 'var(--color-accent-orange)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          hover: 'var(--color-border-hover)',
          focus: 'var(--color-border-focus)',
        },
        ai: {
          primary: 'var(--color-ai-primary)',
          secondary: 'var(--color-ai-secondary)',
        },
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['Geist Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Courier New', 'monospace'],
      },
      fontSize: {
        xs: 'var(--text-xs)',      // 12px
        sm: 'var(--text-sm)',      // 14px
        base: 'var(--text-base)',  // 16px
        lg: 'var(--text-lg)',      // 18px
        xl: 'var(--text-xl)',      // 20px
        '2xl': 'var(--text-2xl)',  // 24px
        '3xl': 'var(--text-3xl)',  // 30px
        '4xl': 'var(--text-4xl)',  // 36px
      },
      spacing: {
        // Polar v1.1 spacing scale (8px base grid)
        '0.5': 'var(--space-0-5)',  // 2px
        '1': 'var(--space-1)',      // 4px
        '1.5': 'var(--space-1-5)',  // 6px
        '2': 'var(--space-2)',      // 8px
        '2.5': 'var(--space-2-5)',  // 10px
        '3': 'var(--space-3)',      // 12px
        '4': 'var(--space-4)',      // 16px
        '5': 'var(--space-5)',      // 20px
        '6': 'var(--space-6)',      // 24px
        '7': 'var(--space-7)',      // 28px
        '8': 'var(--space-8)',      // 32px
        '10': 'var(--space-10)',    // 40px
        '12': 'var(--space-12)',    // 48px
        '16': 'var(--space-16)',    // 64px
        '20': 'var(--space-20)',    // 80px
        '24': 'var(--space-24)',    // 96px
      },
      maxWidth: {
        'content': 'var(--layout-content-max-width)',  // 700px
      },
      width: {
        'sidebar': 'var(--layout-sidebar-width)',      // 280px
        'ai-panel': 'var(--layout-ai-panel-width)',    // 380px
      },
      height: {
        'header': 'var(--layout-header-height)',       // 64px
      },
      borderRadius: {
        sm: 'var(--radius-sm)',    // 4px
        md: 'var(--radius-md)',    // 6px
        lg: 'var(--radius-lg)',    // 8px
        xl: 'var(--radius-xl)',    // 16px
        full: 'var(--radius-full)', // 9999px
      },
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        blue: 'var(--shadow-blue)',
        green: 'var(--shadow-green)',
        red: 'var(--shadow-red)',
      },
      transitionDuration: {
        fast: 'var(--duration-fast)',      // 100ms
        normal: 'var(--duration-normal)',  // 150ms
        slow: 'var(--duration-slow)',      // 200ms
        slower: 'var(--duration-slower)',  // 300ms
      },
      transitionTimingFunction: {
        'ease-in': 'var(--ease-in)',
        'ease-out': 'var(--ease-out)',
        'ease-in-out': 'var(--ease-in-out)',
        'bounce': 'var(--ease-bounce)',
      },
    },
  },
  plugins: [],
};
