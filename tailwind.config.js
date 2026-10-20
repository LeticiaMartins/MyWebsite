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
        // Cores do tema ativo (definidas em index.css para cada fundo)
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'], // Títulos
        body: ['"Inter"', 'sans-serif'], // Outros textos
      },
    },
  },
  plugins: [],
}
