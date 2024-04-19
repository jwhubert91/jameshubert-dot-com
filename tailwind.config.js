/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "mayanRevival",
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
    ],
  },
  plugins: [require("daisyui")],
}
