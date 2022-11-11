/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prime: "#ff014f",
        text: { DEFAULT: "#3c3e41", dark: "#c4cfde" },
        dark: { 500: "#1a1d23", 600: "#1e1f21", bg: "#212428", 700: "#191b1e" },
      },
      fontFamily: {
        main: "Poppins, sans-serif",
        nav: "Montserrat, sans-serif",
      },
      boxShadow: {
        white3: ["5px 5px 15px #d1d9e6", "-5px -5px 15px #ffffff"],
        dark1: ["10px 10px 19px #1c1e22", "-10px -10px 19px #262a2e"],
        indark: [
          "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset",
          " -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
        ],
      },
      gradientColorStops: {
        red: "#fc636b",
        purple: "#5a57ce",
        white: "#ffffff",
        white0: "#e2e8ec",
        dark0: "#1e2024",
        dark1: "#23272b",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
