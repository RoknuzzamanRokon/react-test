/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2952e3",
        secondary: "#3d4f7c",
      },
    },
  },
  plugins: [],
};
