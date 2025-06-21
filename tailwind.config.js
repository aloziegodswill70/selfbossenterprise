/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#c59d5f',     // ✅ Use this shade to match your design
        black: '#000000',    // ✅ Keep only once
      },
    },
  },
  plugins: [],
}
