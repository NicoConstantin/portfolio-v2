import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'light-black': '#121212',
        black: '#030303',
        secondary: '#8f60d1',
        primary: '#6137a2',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'], // Use the variable name for the font
        onest: ['var(--font-onest)', 'sans-serif'], // Use the variable name for the font
      },
      animation: {
        'spin-slow': 'spin 50s linear infinite',
      },
      screens: {
        xs: '375px',
      },
      backgroundSize: {
        'size-150': '150% 150%',
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
    },
    animation: {
      gradient: 'gradient 15s ease infinite',
    },
  },
  plugins: [],
};
export default config;
