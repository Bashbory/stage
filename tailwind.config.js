/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/input.css'
],

  theme: {
    extend: {
      fontFamily: {
        'maven': ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

