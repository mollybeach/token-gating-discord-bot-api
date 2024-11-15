/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode based on a class
  theme: {
    extend: {
      colors: {
        night: "#0B0C10",
        magicPurple: "#5D3FD3",
        magicBlue: "#1F2B6C",
        accentGold: "#D4AF37",
        glowGreen: "#39FF14",
      },
      fontFamily: {
        mystic: ['"Cinzel Decorative"', 'serif'],
      },
      boxShadow: {
        glow: "0 0 15px 5px rgba(93, 63, 211, 0.5)",
      },
    },
  },
  plugins: [],
};
