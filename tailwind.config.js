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
      },
      colors: {
        primary: "#2a4466",
        secondary: "#17273b",
        tertiary: "#1c2e44",
        quaternary: "#385985",
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
