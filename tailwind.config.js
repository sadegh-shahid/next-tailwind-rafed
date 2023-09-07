/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      rafedPurple: "#DA627D",
      rafedGray: {
        g1: "#505050",
        g2: "#757575",
        g3: "#AAAAAA",
        g4: "#C5C5C5",
        g5: "#EBEAEA",
      },
      rafedWhite: {
        w1: "#F5F5F5",
        w2: "#F0F0F0",
      },
    },
    fontFamily: {
      Almarai: ["Almarai", "NotoSans", ...defaultTheme.fontFamily.sans],
      NotoSanse: ["NotoSans", "Almarai", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
