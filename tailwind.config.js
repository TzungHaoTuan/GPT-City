/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: "spin 1.2s linear infinite, fade 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fade: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  daisyui: {
    themes: [
      // "light",
      // "dark",
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
          secondary: "#104227",
          accent: "#6BFF66",
          neutral: "#181D1F",
          "neutral-content": "#181F11",
          "base-100": "#000000",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
