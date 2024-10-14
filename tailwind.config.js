/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#353535",
        secondary: "#6b7280",
        brand: "#643DFC",
      },
    },
  },
  plugins: [],
};
