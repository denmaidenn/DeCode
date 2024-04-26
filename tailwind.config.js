/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dgreen': '#85A460',
        'lgreen': '#DEF6CC',
      }
    },
  },
  plugins: [],
}