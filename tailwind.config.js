/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      //   backgroundImage: {
      //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //     "gradient-conic":
      //       "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      //   },
    },
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#3d899d",
          secondary: "#2f4e5b",
          accent: "#bcdee5",
          neutral: "#182a34",
          "base-100": "#ffffff",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#D3FFD1",
          secondary: "#2A4728",
          accent: "#6BFF66",
          neutral: "#181D1F",
          "base-100": "#000000",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
