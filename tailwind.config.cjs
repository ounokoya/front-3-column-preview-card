/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        "my-orange":"hsl(31, 77%, 52%)",
      "my-cyan": "hsl(184, 100%, 22%)",
      "my-dark-cyan": "hsl(179, 100%, 13%)"
      }
    },
  },
  plugins: [],
}
