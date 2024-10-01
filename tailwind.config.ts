import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-hero": "0 1px 15px 0px #077252",
      },
      colors: {
        "light-grey": "#333",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundColor: {
        "light-lime": "#e6f2ef",
      },
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
