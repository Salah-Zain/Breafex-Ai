/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"]
      },
      lineHeight: {
        '5.5': '1.375rem', // 22px
      },
    },
  },
  plugins: [],
};
