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
        base: ["20px", "32px"],
      },
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      "remix",
      {
        mayanRevival: {
          primary: "#00A388", // Jade Green (Primary)
          secondary: "#4CA9FF", // Turquoise Blue (Secondary)
          accent: "#E27D5E", // Terracotta
          info: "#CC772C", // Ochre Yellow
          warning: "#DC143C", // Crimson Red
          "base-100": "#000000", // Black (Background)
          "base-content": "#FFFFFF", // White (Text)
          gray: "#DDD",
          "light-gray": "#F4F4F4",
          charcoal: "#333333",
        },
      },
      {
        remix: {
          primary: "#3992FF",
          primaryAccent: "#1C6DF4",
          secondary: "#6AD868",
          accent: "#D83BD2",
          info: "#FECC1A",
          warning: "#FECC1A",
          "base-100": "#121212",
          "base-content": "#C8C8C8",
          gray: "#DDD",
          "light-gray": "#F4F4F4",
          charcoal: "#333",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
