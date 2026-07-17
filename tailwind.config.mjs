/** @type {import('tailwindcss').Config} */

function withOpacity(variable) {
  return ({ opacityValue }) =>
    opacityValue === undefined
      ? `rgb(var(${variable}))`
      : `rgb(var(${variable}) / ${opacityValue})`;
}

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: withOpacity('--color-bg'),
        surface: withOpacity('--color-surface'),
        'surface-hover': withOpacity('--color-surface-hover'),
        ink: withOpacity('--color-ink'),
        body: withOpacity('--color-body'),
        muted: withOpacity('--color-muted'),
        faint: withOpacity('--color-faint'),
        border: 'var(--color-border)',
        'border-strong': 'var(--color-border-strong)',
        accent: withOpacity('--color-accent'),
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.55' }],
        sm: ['0.875rem', { lineHeight: '1.65' }],
        base: ['1rem', { lineHeight: '1.7' }],
        lg: ['1.125rem', { lineHeight: '1.6' }],
        xl: ['1.375rem', { lineHeight: '1.4' }],
        '2xl': ['1.75rem', { lineHeight: '1.3' }],
        '3xl': ['2.25rem', { lineHeight: '1.2' }],
        '4xl': ['2.75rem', { lineHeight: '1.12' }],
        '5xl': ['3.25rem', { lineHeight: '1.08' }],
      },
      maxWidth: {
        prose: '36rem',
        content: '48rem',
      },
    },
  },
  plugins: [],
};