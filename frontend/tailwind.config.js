/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-background": "url('/src/assets/loginBackground.svg')",
      },fontFamily: {
        'sans': ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
