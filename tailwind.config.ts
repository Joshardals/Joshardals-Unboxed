import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#141415",
        ebony: "#1B1B1A",
        darkCharcoal: "#303130", // For Ebony BG Borders, Rings or Outlines.

        white: "#F5F5F5",
        gray: "#666866",
        lightGray: "#a9aaa9",
      },

      fontFamily: {
        inter: ["var(--font-inter)"],
        playfair: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
};
export default config;
