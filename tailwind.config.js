/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-bg": "url('/public/images/bg-mobile.png')",
        "desktop-bg": "url('/public/images/mobile-bg.png')",
        "live-location": "url('/src/images/mapImage/location-map.png')",
        "mobile-map": "url('/src/images/mapImage/mobile-map.png')",
      },
    },
  },
  plugins: [],
};
