import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/background.png')",
      },
      borderRadius: {
        "3xl": "40px",
        "4xl": "47px",
      },
      fontFamily: {
        mono: ["Space Grotesk","Fira Code", "monospace"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      textColor: {
        'navy-blue' : '#373e58',
        'placeholder' : '#D3D3D3',
        'pink' : '#D79EB8'
      },
      borderColor: {
        'navy-blue' : '#373e58'
      },
      backgroundColor: {
        'navy-blue' : '#373e58',
        'light-blue': '#4d5f7c',
        'beige' : '#faebe6'
      }
    },
  },
  plugins: [],
};
export default config;
