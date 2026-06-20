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
        // Apnar natun premium brand color stack
        brand: {
          DEFAULT: "#200D5F",
          dark: "#14073d",
          light: "#341a94",
        },
      },
      fontFamily: {
        hind: ["var(--font-hind)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      // Infinite Marquee animation register kora holo
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
