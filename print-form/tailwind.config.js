/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        "custom-blue": {
          50: "#F5F9FF",
          100: "#E3EDFF",
          200: "#CBD8F0",
          300: "#B3C3E0",
          400: "#9BAED1",
          500: "#8398C1",
          600: "#6B83B2",
          700: "#536EA2",
          800: "#3B5993",
          900: "#304B80",
        },
      },
    },
  },
  plugins: [],
};
