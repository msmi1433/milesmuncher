import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      bgWhite: "#f5f5f5",
      borderCharcoal: "#364e59",
      accentBlue: "#3185fc",
      red: "#CE4760",
      white: "#FFFFFF",
      placeholder: "#9ca3af",
    },
  },
  plugins: [],
};
export default config;
