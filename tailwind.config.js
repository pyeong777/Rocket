/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        brand: " #FFB74D",
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpg')`,
      },
    },
  },
  plugins: [],
};
