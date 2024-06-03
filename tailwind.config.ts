import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ecbd0d",
        secondary: "#010101",
        teritiary: "#f7e18e",
        grey: "#878680",
        light: "#fff8eb",
        brown: "#211902",
        "brown-secondary": "#0e0901",
        "light-bg": "#f8f7f3",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
