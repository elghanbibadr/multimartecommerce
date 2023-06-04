/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cardbg01: '#fdefe6',
        cardbg02: '#d6e5fb',
        cardbg03: '#ceebe9',
        cardbg04: '#e2f2b2',
        primarycolor: '#0a1d37',
        herobg: '#d6e5fb',
        smalltextcolor: '#999',
        headingtextcolor: '#0a1d37';

      }
    },
  },
  plugins: [],
}

