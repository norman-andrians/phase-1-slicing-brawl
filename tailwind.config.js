/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3A10E5',
        'primary-bg': '#F0F3FF',
        'primary-dark': '#340cd3',
        'tertiary': '#707070',
        'yellow-d': '#FACB3B'
      },
      fontFamily: {
        'dm-sans': 'DM Sans'
      }
    },
  },
  plugins: [],
}

