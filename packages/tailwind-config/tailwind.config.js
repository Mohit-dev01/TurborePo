/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./apps/**/*.{js,ts,jsx,tsx}",
    ".pages/**/*.{js,ts,jsx,tsx}",
    ".component/**/*.{js,ts,jsx,tsx}",
    "../../packages/**/{js,ts,jsx,tsx}"
],
    theme: {
      extend: {},
    },
    plugins: [],
  }