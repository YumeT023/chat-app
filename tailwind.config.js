/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#19171d",
          200: "#1d1c1d",
          250: "#1A1D21",
          300: "#27242e",
        },
        selection: {
          100: "rgba(39, 36, 46, 0.1)",
          200: "rgba(39, 36, 46, 0.2)",
          300: "rgba(39, 36, 46, 0.3)",
          400: "rgba(39, 36, 46, 0.4)",
          500: "rgba(39, 36, 46, 0.5)",
          600: "rgba(39, 36, 46, 0.6)",
          700: "rgba(39, 36, 46, 0.7)",
          800: "rgba(39, 36, 46, 0.8)",
          900: "rgba(39, 36, 46, 0.9)",
        },
        primary: {
          100: "#4a154b",
          200: "#f4ede4",
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
