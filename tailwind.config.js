/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B6B",
        secondary: "#FFD93D",
        accent: "#6BCB77",
        darkContrast: "#22223B",
        neutralBg: "#F8F9FA",
      },
      fontFamily: {
        "fredoka-one": ['"Fredoka One"', "cursive"],
        baloo: ['"Baloo 2"', "cursive"],
        poppins: ["Poppins", "sans-serif"],
        nunito: ['"Nunito Sans"', "sans-serif"],
      },
      borderRadius: {
        cartoon: "24px",
      },
      boxShadow: {
        cartoon: "4px 4px 12px rgba(34, 34, 59, 0.15)",
        "cartoon-hover": "6px 6px 16px rgba(34, 34, 59, 0.25)",
        "cartoon-flat": "3px 3px 0px 0px #22223B",
        "cartoon-flat-lg": "6px 6px 0px 0px #22223B",
      },
    },
  },
  plugins: [],
};
