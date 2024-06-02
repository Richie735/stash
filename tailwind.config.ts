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
            primary: "#B6FF1B",
            secondary: "#4262c0",
            primaryBg: "#161616",
            secondaryBg: "#1C1C1C",
            primaryText: "#F6F6F6",
            secondaryText: "#858585",
            border: "#242424",
         },
         fontFamily: {
            sans: ["Poppins", "sans-serif"],
            mono: ["Space Mono", "monospace"],
         },
      },
   },
   plugins: [],
};
export default config;
