/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'colorHeader-sidebar':'#263949',
        'custom-gray': '#2F4050',
        'custom-blue':'#61DAFB',
        'navcolor':'#F3F3F4',
      },
    },
  },
  plugins: [],
}

