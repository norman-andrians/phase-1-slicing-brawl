/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3A10E5',
        'primary-bg': '#F0F3FF',
        'tertiary': '#707070'
      },
      fontFamily: {
        'dm-sans': 'DM Sans'
      }
    },
  },
  plugins: [],
}

