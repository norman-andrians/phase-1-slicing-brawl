/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3A10E5',
        'primary-bg': '#F0F3FF',
        'primary-dark': '#3611c9',
        'secondary': '#090E23',
        'tertiary': '#707070',
        'yellow-d': '#FACB3B',
        'pink-d-bg': '#FFF0E5'
      },
      fontFamily: {
        'dm-sans': 'DM Sans'
      }
    },
  },
  plugins: [],
}

