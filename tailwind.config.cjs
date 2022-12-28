/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
