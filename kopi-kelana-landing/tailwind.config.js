/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        lightBlue: "#4A90E2",
        lightWhite: "#FFFFFF",
        lightText: "#FFFFFF",

        // Dark mode colors
        darkBlue: "#1A1F71",
        darkBlack: "#0A0A0A",
        darkGold: "#FFD700",
      },
    },
  },
  plugins: [],
  darkMode: "class", // enable dark mode toggle via class
};
