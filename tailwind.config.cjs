/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1.5rem",
        // lg: '3rem',
      },
    },
    extend: {
      colors: {
        primary: "#27272B",
        tosca: "#286F6C",
      },
      backgroundImage: {
        hero: "url('./src/assets/img/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
