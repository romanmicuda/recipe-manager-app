import { Playfair } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/components/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradient-start": "#FF7F00",
        "gradient-end": "#FFD700",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
      },

      boxShadow: {
        "button-hover": "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
