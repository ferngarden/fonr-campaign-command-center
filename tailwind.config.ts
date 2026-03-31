import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'fonr-cream': '#F3F0EA',
        'fonr-gold': '#8B6914',
        'fonr-gold-light': '#B8860B',
        'fonr-dark': '#3C3C3C',
        'fonr-gray': '#636363',
        'fonr-success': '#16a34a',
        'fonr-warning': '#f59e0b',
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
