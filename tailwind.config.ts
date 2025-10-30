import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        desert: {
          50: '#FFF9EF',
          100: '#F7F0DA',
          200: '#F0E4C2',
          300: '#E6D6A6',
          400: '#D9C387',
          500: '#C9AC6A',
          600: '#B28E57',
          700: '#946F45',
          800: '#6E5233',
          900: '#4B3924',
        },
        dune: '#F5E6C8',
        camel: '#C69C6D',
        terracotta: '#C8653D',
        oasis: '#2B6F6D',
        night: '#1E1B16',
      },
      boxShadow: {
        desert: '0 6px 20px rgba(78,57,36,0.12)',
      },
      backgroundImage: {
        'desert-gradient': 'linear-gradient(180deg,#FFF9EF 0%,#F7F0DA 60%,#F0E4C2 100%)',
        'night-gradient': 'linear-gradient(180deg,#1E1B16 0%,#2A251E 100%)',
      },
      borderRadius: {
        card: '14px',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

export default config;
