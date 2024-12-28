/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        96: "96px",
      },
      fontFamily: {
        primary: ["stretch", "sans-serif"],
        secondary: ["inter", "sans-serif"],
        tertiary: ["anonymous", "sans-serif"],
        quaternary: ["inter-ita", "sans-serif"],
        quinary: ["mono", "sans-serif"],
      },
      heigh: {
        0.1: "0.1",
      },
    },
  },
  plugins: [],
}
