/** @type {import('tailwindcss').Config} */

// @ts-ignore
const scrollbarHide = require('tailwind-scrollbar-hide');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require(scrollbarHide)],
}