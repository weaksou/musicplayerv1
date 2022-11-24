/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      ...colors,
      "nodegreen": "#ecebff"
    },
    extend: {
      boxShadow: {
        'top': '0 6px px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
