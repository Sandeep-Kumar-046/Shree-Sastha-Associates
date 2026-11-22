import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkTeal: "#123B43",
          secondaryTeal: "#1E5158",
          tealLight: "#2A6F78",
          gold: "#C88945",
          goldHover: "#B37736",
          goldLight: "#E5AB6D",
          ivory: "#F6F3ED",
          ivoryDark: "#EBE5D8",
          surface: "#FDFCFB",
          darkText: "#202626",
          mutedText: "#556464",
          border: "#E2DCD2",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Cinzel", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        architectural: "0 20px 40px -15px rgba(18, 59, 67, 0.08)",
        "architectural-lg": "0 30px 60px -20px rgba(18, 59, 67, 0.14)",
        "gold-glow": "0 0 25px -5px rgba(200, 137, 69, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
