/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      smd: "540px",
      md: "730px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        Alata: ["Alata", "sans-serif"],
        Josefin: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: {
        heroimage: "url('/mobile/image-hero.jpg')",
        largeheroimage: "url('/desktop/image-hero.jpg')",
        hamburgericon: "url('/icons/icon-hamburger.svg')",
        smCuriosity: "url('/mobile/image-curiosity.jpg')",
        lgCuriosity: "url('/desktop/image-curiosity.jpg')",
        smEarth: "url('/mobile/image-deep-earth.jpg')",
        lgEarth: "url('/desktop/image-deep-earth.jpg')",
        smArcade: "url('/mobile/image-night-arcade.jpg')",
        lgArcade: "url('/desktop/image-night-arcade.jpg')",
        smSoccer: "url('/mobile/image-soccer-team.jpg')",
        lgSoccer: "url('/desktop/image-soccer-team.jpg')",
        smGrid: "url('/mobile/image-grid.jpg')",
        lgGrid: "url('/desktop/image-grid.jpg')",
        smAbove: "url('/mobile/image-from-above.jpg')",
        lgAbove: "url('/desktop/image-from-above.jpg')",
        smPocket: "url('/mobile/image-pocket-borealis.jpg')",
        lgPocket: "url('/desktop/image-pocket-borealis.jpg')",
        smFisheye: "url('/mobile/image-fisheye.jpg')",
        lgFisheye: "url('/desktop/image-fisheye.jpg')",
      },
    },
  },
  plugins: [],
}
