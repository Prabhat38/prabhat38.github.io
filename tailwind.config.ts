import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#050A0F',
          surface: '#0D1521',
          border: 'rgba(255,255,255,0.08)',
        },
        cyan: {
          DEFAULT: '#00D9FF',
          dark: '#00A8CC',
          muted: 'rgba(0,217,255,0.15)',
        },
        purple: {
          DEFAULT: '#7B61FF',
          muted: 'rgba(123,97,255,0.15)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'pulse-glow': 'glow-pulse 2s ease-in-out infinite',
        'data-flow': 'data-pulse 1.5s ease-in-out infinite',
        gradient: 'gradient-shift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 8px rgba(0,217,255,0.2)' },
          '50%': { boxShadow: '0 0 24px rgba(0,217,255,0.5)' },
        },
        'data-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
};

export default config;
