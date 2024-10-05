/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:'#E3A52D',
        "text-black": "#1F2937",
        "text-gray": "#6B7280",

      },
    },
  },
  plugins: [],
};
