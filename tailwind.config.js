/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3A0CA3",
        "black-text": "#2B2B2B",
        "blue-text": "#4361EE",
        "gray-text": "#808080"
      },
    },
  },
  plugins: [],
}