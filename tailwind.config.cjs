/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			fontWeight: {
				'regular': '400',
				'bold': '700',
			},


			fontFamily: {
				"poppins": ["Poppins", "sans-serif"],
			},

			fontSize: {
				"14": "14px",
				"16": "16px",
				"18": "18px",
				"20": "20px",
				"22": "22px",
				"24": "24px",
				"48": "48px",
			},

			colors: {
				primary: '#011627',
				gray: "#777b7d",
				orange: "#ee7a0f",
				green: "#0fffc5",
				blue: "#18B9FF"
			}
		},
	},
	
	plugins: [
		function ({ addComponents, theme }) {
			addComponents({
			  '.bg-gradient': {
				background: 'linear-gradient(269deg, #1099fd 0%, #0fcffe 30.32%, #0fffc5 100%)'
			  },

			  '.bg-glassmorphism': {
				background: 'linear-gradient(168deg, #ffffff66 0%, #ffffff1a 100%)'
			  },
			  
			  '.h1': {
				fontFamily: theme('fontFamily.poppins'),
				fontSize: theme('fontSize.48'),
				fontWeight: 'bold',
				textTransform: 'capitalize',
			  },

			  '.h2': {
			  fontFamily: theme('fontFamily.poppins'),
			  fontSize: theme('fontSize.48'),
			  fontWeight: 'bold',
			  textTransform: 'capitalize',
			}
			})
		  }
	],
}
