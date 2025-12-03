/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        blink: {
          '50%': { borderColor: 'transparent' }
        }
      },
      animation: {
        typing: "typing 3s steps(30, end) forwards",
        blink: "blink 0.7s step-end infinite"
      },
    },
  },
  plugins: [],
}
