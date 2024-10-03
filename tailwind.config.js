/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Isto garante que os arquivos do React sejam lidos
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

