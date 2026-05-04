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
        cream: "#f0eae0",
        "cream-deep": "#e8e0d0",
        "cream-light": "#f7f2eb",
        ink: "#1a1814",
        "ink-soft": "#3d3830",
        gold: "#b8924a",
        "gold-light": "#c9a96a",
        "gold-pale": "#d4b888",
        taupe: "#c4b49a",
        "taupe-light": "#ddd0be",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
