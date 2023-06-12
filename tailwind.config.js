/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#1d232a",
        dark: "#272727",
        dark2: "#121212",
        light: '#fff',
        gray: '#A6ADBA',
        sec: '#90caf9'
      }
    },
  },
  plugins: [require("daisyui")],
}

