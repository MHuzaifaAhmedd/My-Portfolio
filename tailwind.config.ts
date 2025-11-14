import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#667eea",
          600: "#764ba2",
          700: "#5b21b6",
          800: "#4c1d95",
          900: "#3b1a7a",
        },
        secondary: {
          50: "#fef3c7",
          100: "#fde68a",
          200: "#fcd34d",
          300: "#fbbf24",
          400: "#f59e0b",
          500: "#f093fb",
          600: "#fa709a",
          700: "#fda085",
          800: "#f6d365",
          900: "#fee140",
        },
        luxury: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
        },
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down": "slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        "gradient": "gradient 8s linear infinite",
        "gradient-slow": "gradient 15s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
        "shimmer": "shimmer 3s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { 
            opacity: "0.5",
            filter: "blur(20px)",
          },
          "100%": { 
            opacity: "1",
            filter: "blur(30px)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      boxShadow: {
        "premium": "0 10px 40px rgba(102, 126, 234, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
        "premium-lg": "0 20px 60px rgba(102, 126, 234, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2) inset",
        "glow-primary": "0 0 20px rgba(102, 126, 234, 0.3), 0 0 40px rgba(102, 126, 234, 0.2)",
        "glow-secondary": "0 0 20px rgba(118, 75, 162, 0.3), 0 0 40px rgba(118, 75, 162, 0.2)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;

