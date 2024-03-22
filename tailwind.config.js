/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "text-green-500",
    "text-red-500",
    "text-yellow-500",
    "bg-green-500",
    "bg-red-500",
    "bg-yellow-500",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        yellow: {
          50: "#fff",
          100: "#fff",
          400: "#fbbf24",
          500: "#f59e0b",
        },
      },
    },
  },
  plugins: [],
};
