/** @type {import('tailwindcss').Config} */
module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      18: "18px",
    },
    extend: {
      colors: {
        "app-yellow": "#E1B168",
        "app-purple": "#3C1742", //#212529
        "app-dark-purple": "#230a28",
        "app-gray": "#555555",
        "app-green": "#A0AEAF",
      },
    },
  },
  plugins: [],
};
