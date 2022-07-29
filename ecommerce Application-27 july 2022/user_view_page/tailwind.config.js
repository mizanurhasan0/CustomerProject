/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: { sm: "576px", md: "768px", lg: "992px", xl: "1200px" },
    container: {
      center: true,
      padding: "1rem",
    },

    extend: {
      fontFamily: {
        Poppins: "'Poppins', 'sans-serif'",
        Roboto: "'Roboto', 'sans-serif'",
      },
      colors: {
        secondary: "#FD3D57",
        primary: "#11A0DB",
      },
      animation: ["group-hover"],
    },
  },
  plugins: ["@tailwindcss/forms"],
};
