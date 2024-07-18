import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"blippo-mn"', "sans-serif"],
      'mono': ['"coordinates"', "monospace"],
    },
    extend: {
	  screens: {
		'xs': {'min': '0px', 'max': '647px'},
		'sm': {'min': '648px', 'max': '767px'},
		'lg': '1024px',
	  },
      backgroundImage: {
        'linear-gradient': 'linear-gradient(to bottom, transparent, rgba(var(--yellow-rgb), 0.1) 50%, rgba(var(--ui-white-rgb), 0.4) 100%)',
		'hero-background': "url('/images/ui/hero-bg.png')",
		'footer-bg': "url('/images/ui/footer-bg.svg')",
		'project-bg': "url('/images/ui/proj.png')",
		'body-bg': "url('/images/ui/body-bg.png')",
		'backdrop': "url('/images/backdrop.jpg')",
      },
      animation: {
				"fade-in": "fade-in 2.5s ease-in forwards",
				"fade-left": "fade-left 2s ease-in-out forwards",
				"fade-right": "fade-right 3s ease-in-out forwards",
				"ping": "ping 1s cubic-bezier(0, 0, 0.2, 1)",
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0%",
					}, 
					"100%": {
						opacity: "100%",
					},
				},
				"fade-left": {
					"0%": {
						transform: "translateX(100%)",
						opacity: "0%",
					},

					"100%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
				},
				"fade-right": {
					"0%": {
						transform: "translateX(-100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
			},
    },
  },
  plugins: [],
};
export default config;
