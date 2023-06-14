/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        body: "#fff",

        light: "#dfe6e9",
        deepLight: "#fff",
        
        dark: '#353b48',
        deepDark: '#1e272e',

        sec: '#079992'
      }
    },
  },
  plugins: [require("daisyui")],
}

