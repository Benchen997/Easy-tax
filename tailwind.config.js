/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-bg': '#154B5D',
      },
      height: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

