// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
  extend: {
  keyframes: {
    marquee: {
      "0%": { transform: "translateX(100vw)" },
      "100%": { transform: "translateX(-100%)" },
    },
  },
  animation: {
    marquee: "marquee 25s linear infinite",
  },
},  
  },
  plugins: [],
};