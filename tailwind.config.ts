import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        cyan: {
          DEFAULT: "#00BCD4",
          light: "#4DD0E1",
          dark: "#0097A7",
        },
        // Legacy colors for compatibility
        crimson: "#FF195F",
        blueviolet: "#5816CF",
        water: "#EDF4FE",
        platinum: "#E2E2E2",
        // Polkadot colors
        polkadot: {
          pink: "#E6007A",
          purple: "#552BBF",
          cyan: "#00BCD4",
          dark: "#0D0D0D",
          darker: "#000000",
          gray: {
            100: "#F5F5F5",
            200: "#E5E5E5",
            300: "#D4D4D4",
            400: "#A3A3A3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#262626",
            900: "#171717",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "dotted-pattern": "url('/graphics/Dotted Background.png')",
      },
      fontFamily: {
        // VCR OSD Mono - for headers/titles only
        title: ["'VCR OSD Mono'", "monospace"],
        // Space Grotesk - for body/content text
        sans: ["'Space Grotesk'", "system-ui", "sans-serif"],
        body: ["'Space Grotesk'", "system-ui", "sans-serif"],
        // Minecraftia - for decorative/pixel text
        pixel: ["'Minecraftia'", "monospace"],
        mono: ["'VCR OSD Mono'", "monospace"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
