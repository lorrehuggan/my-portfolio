/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        display: ['Dellyani', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        accent: {
          50: '#fdf8f8',
          100: '#fcf0f2',
          200: '#f8e2e4',
          300: '#f5d3d7',
          400: '#f1c5c9',
          500: '#eeb6bc',
          600: '#be9296',
          700: '#8f6d71',
          800: '#5f494b',
          900: '#302426',
        },
        base: {
          50: '#f5f5f5',
          100: '#ebebea',
          200: '#d7d6d5',
          300: '#c2c2c0',
          400: '#aeadab',
          500: '#9a9996',
          600: '#7b7a78',
          700: '#5c5c5a',
          800: '#3e3d3c',
          900: '#1f1f1e',
        },
        light: '#f5f1e0',
        night: '#181130',
        skyline: '#1750FC',
        jamaica: '#00E5BD',
        peach: '#fe4057',
        fusion: '#F71C9B',
        custard: '#FD8F25',
        sun: '#f9c91f',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
};
