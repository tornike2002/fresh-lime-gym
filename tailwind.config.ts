import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "mail-custom": "linear-gradient(to right bottom, #52a58c, #087f5b)",
      },
      boxShadow: {
        "custom-hero": "0 1px 15px 0px #077252",
        "insite-card": "0 2.4rem 4.8rem rgba(0, 0, 0, 0.075)",
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
