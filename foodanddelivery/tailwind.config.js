const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
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
        lgx: "1143px",
        xl: "1280px",
        // Add max- breakpoints
        "max-xs": { max: "319px" },
        "max-sm": { max: "374px" },
        "max-sml": { max: "499px" },
        "max-md": { max: "666px" },
        "max-mdl": { max: "767px" },
        "max-mdx": { max: "929px" },
        "max-lg": { max: "959px" },
        "max-lgl": { max: "1023px" },
        "max-lgx": { max: "1142px" },
        "max-xl": { max: "1279px" },
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FFC740",
        secondary: "#FFE5AF",
        navcolor: "#EF4358",
        shadownav: "#FF8A00",
        btcolor1: "#FFB800 ",
        btcolor2: " #FF8A00",
      },
      boxShadow: {
        testShadow: "0px 0px 54px -13px rgba(0,0,0,0.7)",
      },
    },
  },

  plugins: [require("flowbite-react/tailwind"), require("daisyui")],
});
