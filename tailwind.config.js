/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      }
    },
    colors:{
      ...colors,
      transparent: "transparent",
      creme: 'var(--color-creme)',
      cremeLight: 'var(--color-cremeLight)',
      candyPink: 'var(--color-candyPink)',
      vibrantRed: 'var(--color-vibrantRed)',
      coral: 'var(--color-coral)',
      bruntOrange: 'var(--color-bruntOrange)',
      navy: 'var(--color-navy)'
    },
    fontFamily: {
      sofia: ["Sofia Pro"],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
