/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
        twinkle: {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.3, transform: "scale(0.8)" },
        },
        pulse: {
          "0%, 100%": { opacity: 0.3, transform: "scale(1)" },
          "50%": { opacity: 0.6, transform: "scale(1.2)" },
        },
      },
      animation: {
        marquee: "marquee var(--duration, 30s) linear infinite",
        twinkle: "twinkle 2s ease-in-out infinite",
        pulse: "pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
