/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
        'auto-fit': "repeat(auto-fit, minmax(0, 1fr))"
      },
      borderRadius: {
        'input' : 'var(--input-round)'
      }
    },
    colors: {
      ...colors,
      transparent: "transparent",
      creme: "var(--color-creme)",
      cremeLight: "var(--color-cremeLight)",
      candyPink: "var(--color-candyPink)",
      vibrantRed: "var(--color-vibrantRed)",
      coral: "var(--color-coral)",
      bruntOrange: "var(--color-bruntOrange)",
      "text-dark": "var(--color-text-dark)",
      primary: "var(--color-primary)",
    },
    fontFamily: {
      primary_font: ["var(--font-primary)"],
      header_font: ["var(--header-font)"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
