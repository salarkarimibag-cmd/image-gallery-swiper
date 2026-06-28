/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounceSmall: {
          "0%, 100%": {
            transform: "translateY(-0.19rem)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0.19rem)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        bounceSmall: "bounceSmall .7s infinite",
      },
    },
  },
  plugins: [],
};
