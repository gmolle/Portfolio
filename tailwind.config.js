export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slide1: "slideDown 0.3s ease-out forwards",
        slide2: "slideDown 0.3s ease-out forwards 0.1s",
        slide3: "slideDown 0.3s ease-out forwards 0.2s",
      },
    },
  },
  plugins: [],
};
