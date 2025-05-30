/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#333333",
        softwhite: "#F9F9F9",
        walnut: "#8B5E3C",
        brass: "#C28840",
        cream: "#F5F2E9",
        slate: "#4A5568",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Open Sans'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        'wood-texture': "url('/src/assets/images/wood-texture.jpg')",
        'hero-image': "url('/src/assets/images/hero-workshop.jpg')",
      },
      height: {
        'screen-80': '80vh',
      },
    },
  },
  plugins: [],
}