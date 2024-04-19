/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  // daisyui: {
  //   themes: [
  //     {
  //       mayanRevival: {
  //         primary: "#ffff00",
  //         secondary: "#ff0000",
  //         accent: "#ff00ff",
  //         neutral: "#ff00ff",
  //         "base-100": "#ff00ff",
  //         info: "#00ffff",
  //         success: "#00ff00",
  //         warning: "#00ff00",
  //         error: "#ff0000",
  //       },
  //     },
  //   ],
  // },
  plugins: [],
}
