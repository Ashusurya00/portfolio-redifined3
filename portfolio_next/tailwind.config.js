/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['DM Mono', 'monospace'],
      },
      colors: {
        accent: '#00d4aa',
        'accent-dark': '#00bfa0',
      },
      opacity: {
        '4':  '0.04',
        '6':  '0.06',
        '7':  '0.07',
        '8':  '0.08',
        '9':  '0.09',
        '14': '0.14',
      },
      borderOpacity: {
        '5':  '0.05',
        '6':  '0.06',
        '7':  '0.07',
        '8':  '0.08',
        '9':  '0.09',
        '14': '0.14',
      },
    },
  },
  plugins: [],
};
