/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      ...colors,
      primary: "#ff0000"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
