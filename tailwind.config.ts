import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'custom': '1200px',
      },
      backgroundImage: {
        "mail-custom": "linear-gradient(to right bottom, #52a58c, #087f5b)",
        "mailer-gradient":
          "linear-gradient(to right bottom, rgba(82, 165, 140, 0.35), rgba(8, 127, 91, 0.35)), url('/cta-img.jpg')",
      },
      boxShadow: {
        "custom-hero": "0 1px 15px 0px #077252",
        "insite-card": "0 2.4rem 4.8rem rgba(0, 0, 0, 0.075)",
        "input-shadow": "box-shadow: 0 0 0 8px rgba(181, 217, 206, 0.5);",
        "focus-shadow": "0 0 0 8px rgba(181, 217, 206, 0.5);",
        "btn-hover": "inset 0 0 0 3px #fff",
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
