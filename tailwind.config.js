/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Alata: ["Alata", "sans-serif"],
        Josefin: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: {
        heroimage: "url('/src/assets/image-hero.jpg')",
        hamburgericon: "url('/src/assets/icon-hamburger.svg')",
      },
    },
  },
  plugins: [],
}
