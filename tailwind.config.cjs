/* eslint-env node */
/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DC7049',
        secondary: '#586234',
        background: '#F8FAFD',
      },
    },
  },
  plugins: [],
};
