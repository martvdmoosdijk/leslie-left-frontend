/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      Lato: ["Lato", "sans-serif"],
    },
    extend: {
      zIndex: {
        navbar: 1000,
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
