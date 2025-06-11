/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: "'Playfair Display', serif",
        lato: "'Lato', sans-serif",
      },
      screens: {
        '3xl': '3000px', // adjust as needed
      }
    },
  },
  plugins: [],
}

