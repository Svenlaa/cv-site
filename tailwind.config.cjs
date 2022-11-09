/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prime: "#ff014f",
        text: "#3c3e41",
        pbright: "#e5e7eb",
      },
      fontFamily: {
        main: "Poppins, sans-serif",
        nav: "Montserrat, sans-serif",
      },
      boxShadow: {
        white3: ["5px 5px 15px #d1d9e6", "-5px -5px 15px #ffffff"],
      },
      gradientColorStops: {
        red: "#fc636b",
        purple: "#5a57ce",
        white: "#ffffff",
        white0: "#e2e8ec",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
