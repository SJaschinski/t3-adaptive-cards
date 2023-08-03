import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        einfra: {
          200: "#B2D4EE",
          300: "#71B8E3",
          400: "#65AADE",
          500: "#328ED2",
          600: "#0072C7",
          700: "#CCD4DB",
          800: "#505152",
          900: "#2D3033",
        },
      },
    },
    plugins: [],
  },
} satisfies Config;
