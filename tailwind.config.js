module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          "0%,20%,50%,80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translate(5px)" },

          "60%": { transform: "translate(3px)" },
        },
      },
    },
  },
  plugins: [],
};
