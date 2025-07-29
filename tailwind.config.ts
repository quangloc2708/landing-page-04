import type { Config } from 'tailwindcss/types';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0D0D0D',
        grayDark: '#1F2023',
        yellowAccent: '#FFC700',
      },
      fontFamily: {
        title: ['var(--font-barlow-semi-condensed)'],
        body: ['Neue Haas Grotesk Text Pro'],
      },
    },
  },
};

export default config;
