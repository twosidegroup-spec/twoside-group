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
        tsg: {
          bg: "#040507",
          surface: "#090a0f",
          elevated: "#101218",
          border: "rgba(255, 255, 255, 0.08)",
          borderBright: "rgba(255, 255, 255, 0.2)",
          cyan: "#00E5FF",
          cyanGlow: "rgba(0, 229, 255, 0.15)",
          copper: "#FF6B35",
          copperGlow: "rgba(255, 107, 53, 0.15)",
          muted: "#8A8F9D",
          dim: "#4E5362",
          light: "#EDEDF2",
          pureWhite: "#FFFFFF",
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        'dot-pattern': "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
        'gradient-radial': "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
