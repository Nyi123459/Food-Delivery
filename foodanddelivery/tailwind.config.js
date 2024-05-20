/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];

export const theme = {
  extend: {
    maxWidth: {
      container: "1440px",
    },
    screens: {
      xs: "320px",
      sm: "375px",
      sml: "500px",
      md: "667px",
      mdl: "768px",
      mdx: "930px",
      lg: "960px",
      lgl: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      bodyFont: ["Poppins", "sans-serif"],
    },
    colors: {
      primary: "#FFC740",
      secondary: "#FFE5AF",
      navcolor: "#EF4358",
      shadownav: "#FF8A00",
    },
    dropShadow: {
      "custom-white": "0 10px 15px rgba(255, 255, 255, 0.5)", // Adjust the color and opacity as needed
    },
    boxShadow: {
      testShadow: "0px 0px 54px -13px rgba(0,0,0,0.7)",
    },
  },
  plugins: [require("flowbite-react/tailwind")],
};

export const plugins = [require("daisyui")];
