/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-design": "#1B1D1F",
        "gray-design": "#282B30",
        "gray-design-two": "#6C727F",
        "blue-disign": "#4E80EE",
      },
    },
  },
  plugins: [],
};
