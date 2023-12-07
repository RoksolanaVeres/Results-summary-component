/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./main.js"],
  theme: {
    screens: {
      sm: "380px",
      md: "650px",
      lg: "900px",
      xl: "1440px",
    },
    extend: {
      colors: {
        // primary
        lightRed: "hsl(0, 100%, 67%)",
        lightRedOpaque: "hsla(0, 100%, 67%, 0.1)",
        orangeYellow: "hsl(39, 100%, 56%)",
        orangeYellowOpaque: "hsla(39, 100%, 56%, 0.1)",
        greenTeal: "hsl(166, 100%, 37%)",
        greenTealOpaque: "hsla(166, 100%, 37%, 0.1)",
        cobaltBlue: "hsl(234, 85%, 45%)",
        cobaltBlueOpaque: "hsla(234, 85%, 45%, 0.1)",
        //  neutral
        white: "hsl(0, 0%, 100%)",
        paleBlue: "hsl(221, 100%, 96%)",
        lightLavender: "hsl(241, 100%, 89%)",
        darkGrayBlue: "hsl(224, 30%, 27%)",
        gray: "#A09AA4",
        // gradients
        lightSlateBlue: "hsl(252, 100%, 67%)", //background
        lightRoyalBlue: "hsl(241, 81%, 54%)", // background
        violetBlue: "hsla(256, 72%, 46%, 1)", // circle
        persianBlue: "hsla(241, 72%, 46%, 0)", // circle
      },
      fontFamily: {
        hankenGrotesk: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
