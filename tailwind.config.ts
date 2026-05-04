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
        cream: "#f5efe6",
        "cream-warm": "#ede4d8",
        "cream-deep": "#e4d8c8",
        ink: "#1a1614",
        "ink-soft": "#3d3430",
        terra: "#c4633a",
        "terra-deep": "#9c4a2a",
        "terra-light": "#d97a52",
        "terra-pale": "#e8b49a",
        sage: "#8a9978",
        "sage-light": "#aab898",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
