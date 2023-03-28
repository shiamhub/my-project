/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: ["cupcake", "dark", "cmyk"],
  plugins: [require("daisyui")],
}
