import type { Config } from "tailwindcss";
import  { orange } from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#f2efe8",
        red: "#ff3200",
        start: "#ff7230",
        end: "#fe5924",
        prime: orange,
      },
    },
  },
  plugins: [],
};
export default config;
