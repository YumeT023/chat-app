/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#4a154b",
          200: "#f4ede4",
          dark: "#1d1c1d",
          white: "#fff",
        },
        accent: {
          100: "#36c5f0",
          200: "#2eb67d",
          300: "#ecb22e",
          400: "#e01e5a",
        },
      },
    },
  },
  plugins: [],
};
