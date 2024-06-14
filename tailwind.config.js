/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.6em",
        base: ["16px", "24px"],
      },
      colors: {
        primary: "#5E5DF0",
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
}
