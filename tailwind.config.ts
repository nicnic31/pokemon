import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#F4CE14",
        "light-yellow": "#FFFD8C",
        "dark-yellow": "#E9B824",
        gray: "#7D7C7C",
        "light-gray": "#D0D4CA",
        "dark-gray": "#61677A",
        blue: "#00A9FF",
        "dark-blue": "#337CCF",
        red: "#FF6969",
        "light-red": "#FF9B9B",
        "dark-red": "#D80032",
        green: "#748E63",
        "light-green": "#A7D397",
        "dark-green": "#445D48",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
