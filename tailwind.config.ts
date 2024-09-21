import type { Config } from "tailwindcss";
const { createThemes } = require("tw-colors");

const config: Config = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    createThemes({
      colorful: {
        primary: "#7C00FE",
        secondary: "#F9E400",
        selected: "#FFAF00",
        hover: "#F5004F",
      },
      halloween: {
        primary: "#343131",
        secondary: "#A04747",
        selected: "#D8A25E",
        hover: "#EEDF7A",
      },
      coffee: {
        primary: "#FFF0D1",
        secondary: "#795757",
        selected: "#3B3030",
        hover: "#664343",
      },
    }),
  ],
};
export default config;
