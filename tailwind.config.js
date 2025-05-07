/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "bg-option-focus": "var(--bg-option-focus)",
        }
      },
    },
    plugins: [],
  }
  