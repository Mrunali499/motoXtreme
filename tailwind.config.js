/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#000000',
        'button-primary-bg': '#E92B0D',
        'button-primary-text': '#FAF3E8',
        'button-dark-bg': '#191C1C',
        'button-dark-text': '#FAF3E8',
        'button-outline-border': '#E92B0D',
        'button-outline-text': '#E92B0D',
        'text-white': '#FFFFFF',
        'input-bg': '#101010',
        'input-border': '#333333',
        'input-placeholder': '#868788',
        'text-subtitle': '#444444',
        'text-timer': '#FF2300',
      },
    },
  },
  plugins: [],
}

