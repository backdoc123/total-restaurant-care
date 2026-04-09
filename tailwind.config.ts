import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        copper: {
          50: "#fef9f3",
          100: "#fef3e6",
          200: "#fde7cd",
          300: "#fbd5a6",
          400: "#f9be7e",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        h1: ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "900" }],
        h2: ["56px", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "800" }],
        h3: ["40px", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "700" }],
        h4: ["28px", { lineHeight: "1.4", fontWeight: "700" }],
        h5: ["24px", { lineHeight: "1.5", fontWeight: "600" }],
        lg: ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        base: ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        sm: ["14px", { lineHeight: "1.6", fontWeight: "400" }],
        xs: ["12px", { lineHeight: "1.5", fontWeight: "500" }],
      },
      spacing: {
        0: "0px",
        1: "8px",
        2: "16px",
        3: "24px",
        4: "32px",
        6: "48px",
        8: "64px",
        10: "80px",
        12: "96px",
        16: "128px",
        20: "160px",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "fade-in-up": "fadeInUp 1s ease-out",
        "slide-in-left": "slideInLeft 0.8s ease-out",
        "scale-in": "scaleIn 0.8s ease-out",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
