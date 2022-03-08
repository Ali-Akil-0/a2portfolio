module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          "0%,100%": { transform: "translateY(-1%)" },
          "40%": { transform: "translateX(1px)" },
        },
      },
    },
  },
  plugins: [],
};
