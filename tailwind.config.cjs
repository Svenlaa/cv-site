/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prime: "#ff014f",
        text: "#3c3e41",
      },
      fontFamily: {
        main: "Poppins",
        nav: "Montserrat",
      },
    },
  },
  plugins: [],
};
