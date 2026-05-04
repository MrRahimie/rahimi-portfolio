import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Light palette
        cream: "#FFF7F1",
        coral: "#FFB5A7",
        peach: "#FCD5CE",
        sky: "#BDE0FE",
        ink: "#4A4A4A",
        mocha: "#7A5C4F",
        // Dark palette — warm, low-contrast neutrals to keep the pastel mood
        night: "#1A1614", // page bg
        dusk: "#26201D", // surface
        ember: "#3A2F2A", // raised
        sand: "#F5E8DA", // text on dark
        haze: "#C9B8A8" // muted text on dark
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "ui-serif", "serif"]
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(122, 92, 79, 0.18)",
        "soft-dark": "0 10px 30px -12px rgba(0, 0, 0, 0.6)",
        glow: "0 0 0 1px rgba(255,181,167,0.4), 0 20px 40px -20px rgba(255,181,167,0.55)"
      },
      backgroundImage: {
        "warm-gradient":
          "radial-gradient(circle at 20% 10%, #FCD5CE 0%, transparent 45%), radial-gradient(circle at 80% 0%, #BDE0FE 0%, transparent 40%), linear-gradient(180deg, #FFF7F1 0%, #FFF7F1 100%)",
        "night-gradient":
          "radial-gradient(circle at 20% 10%, rgba(255,181,167,0.10) 0%, transparent 45%), radial-gradient(circle at 80% 0%, rgba(189,224,254,0.08) 0%, transparent 40%), linear-gradient(180deg, #1A1614 0%, #1A1614 100%)",
        "hero-blob":
          "radial-gradient(circle at 30% 30%, #FFB5A7 0%, transparent 60%), radial-gradient(circle at 70% 70%, #BDE0FE 0%, transparent 60%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    }
  },
  plugins: []
};

export default config;
