/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("tw-elements/dist/plugin")
  ],
  darkMode: 'class'
}

