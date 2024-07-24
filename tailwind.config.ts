import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
		sans: ["Fira_Code", "sans-serif"],
    },
    extend: {
      backgroundImage: {
		'hero-profile': "url('/images/hero.webp')",
      },
      animation: {
				"ping": "ping 1s cubic-bezier(0, 0, 0.2, 1)",
			},
    },
  },
  plugins: [],
};
export default config;
