/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'regularQuicksand': [
          fontFamily=['Quicksand', 'sans-serif'],
          fontWeight= 400,
          fontStyle='normal',
        ],
        'mediumQuicksand': [
          fontFamily=['Quicksand', 'sans-serif'],
          fontWeight= 500,
          fontStyle='normal',
        ],
        'semiBoldQuicksand': [
          fontFamily= ['Quicksand', 'sans-serif'],
          fontWeight=  600,
          fontStyle= 'normal',
        ],
      },
    },
  },
  plugins: [],
}