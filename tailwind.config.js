/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "730px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        Alata: ["Alata", "sans-serif"],
        Josefin: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: {
        heroimage: "url('/src/assets/image-hero.jpg')",
        largeheroimage: "url('/desktop/image-hero.jpg')",
        hamburgericon: "url('/src/assets/icon-hamburger.svg')",
        smCuriosity: "url('/image-curiosity.jpg')",
        lgCuriosity: "url('/desktop/image-curiosity.jpg')",
        smEarth: "url('/image-deep-earth.jpg')",
        lgEarth: "url('/desktop/image-deep-earth.jpg')",
        smArcade: "url('/image-night-arcade.jpg')",
        lgArcade: "url('/desktop/image-night-arcade.jpg')",
        smSoccer: "url('/image-soccer-team.jpg')",
        lgSoccer: "url('/desktop/image-soccer-team.jpg')",
        smGrid: "url('/image-grid.jpg')",
        lgGrid: "url('/desktop/image-grid.jpg')",
        smAbove: "url('/image-from-above.jpg')",
        lgAbove: "url('/desktop/image-from-above.jpg')",
        smPocket: "url('/image-pocket-borealis.jpg')",
        lgPocket: "url('/desktop/image-pocket-borealis.jpg')",
        smFisheye: "url('/image-fisheye.jpg')",
        lgFisheye: "url('/desktop/image-fisheye.jpg')",
      },
    },
  },
  plugins: [],
}
