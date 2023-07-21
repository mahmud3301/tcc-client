/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        myBLackTheme: {
          primary: "#0284c7",

          secondary: "#65a30d",

          accent: "#4f46e5",

          neutral: "#ffff",

          "base-100": "#000",

          "base-300":"#161616",

          info: "#0284c7",

          success: "#16a34a",

          warning: "#eab308",

          error: "#b91c1c"
        }
      },
      {
        myWhiteTheme: {
          primary: "#0284c7",

          secondary: "#65a30d",

          accent: "#4f46e5",

          neutral: "#ffff",

          "base-100": "#ffff",

          "base-300":"#f6f6f6",

          info: "#0284c7",

          success: "#16a34a",

          warning: "#eab308",

          error: "#b91c1c"
        }
      }
    ]
  },
  plugins: [require("daisyui")]
};
