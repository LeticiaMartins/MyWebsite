/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: 'rgba(22, 23, 27, 1)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'], // Títulos
        body: ['"Inter"', 'sans-serif'], // Outros textos
      },
    },
  },
  plugins: [],
}