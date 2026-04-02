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
        background: '#F9FAFC',
        foreground: '#262626',
        primary: {
          DEFAULT: '#262626',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#2C2421',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#78716D',
          foreground: '#2C2421',
        },
        accent: {
          DEFAULT: '#E1E8F0',
          foreground: '#262626',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#2C2421',
        },
        border: 'rgba(233, 230, 226, 0.6)',
        input: '#FBFAF9',
        ring: '#262626',
      },
      fontFamily: {
        sans: ['Inter', 'Figtree', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: '12px',
        xl: '24px',
      },
    },
  },
  plugins: [],
};

export default config;