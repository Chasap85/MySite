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
		'project-bg': "url('/images/ui/project-bg.png')",
		'body-bg': "url('/images/ui/body-bg.png')",
		'backdrop': "url('/images/backdrop.jpg')",
      },
      animation: {
				"fade-in": "fade-in 2.5s ease-in forwards",
				title: "title 3s ease-out forwards",
				"fade-left": "fade-left 2s ease-in-out forwards",
				"fade-right": "fade-right 3s ease-in-out forwards",
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
				title: {
					"0%": {
						"line-height": "0%",
						"letter-spacing": "0.25em",
						opacity: "0",
					},
					"25%": {
						"line-height": "0%",
						opacity: "0%",
					},
					"80%": {
						opacity: "100%",
					},

					"100%": {
						"line-height": "100%",
						opacity: "100%",
					},
				},
			},
    },
  },
  plugins: [],
};
export default config;
