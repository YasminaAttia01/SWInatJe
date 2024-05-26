/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/hero_background.png')",
        values: "url('/images/values_section_bg.png')",
        agro: "url('/images/ch3ir.png')"
      },
      colors: {
        primary: "#F1C420",
        secondary: "#000000",
        tertiary: "#",
        quaternary: "#FFFFF",
      },
      dropShadow: {
        "3xl": "10 4px 4px rgba(0, 0, 0, 0.30)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [],
};
