module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		fontSize: {
			xs: ".75rem",
			sm: ".938rem",
			tiny: ".875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem",
			"7xl": "5rem",
		},
		borderRadius: {
			'none': '0',
			'sm': '0.125rem',
			DEFAULT: '0.25rem',
			DEFAULT: '4px',
			'md': '0.375rem',
			'lg': '0.5rem',
			'full': '20px',
			'large': '12px',
		}
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
