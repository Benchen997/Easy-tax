/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-bg': '#201a62',
      },
      height: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

