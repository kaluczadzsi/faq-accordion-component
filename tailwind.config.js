/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grayishPurple: 'hsl(292, 16%, 49%)',
        darkPurple: 'hsl(292, 42%, 14%)',
      },
      fontFamily: {
        WorkSansRegular: ['WorkSansRegular', 'sans-serif'],
        WorkSansSemiBold: ['WorkSansSemiBold', 'sans-serif'],
        WorkSansBold: ['WorkSansBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
