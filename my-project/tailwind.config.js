module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Manrope', 'sans-serif'],
		},
		fontSize: {
			xs: '.815rem',
			base: '.935rem',
			'3xl': '1.75rem',
			'4xl': '2rem',
			'5xl': '2.5rem',
			'6xl': '3.5rem',
		},
		screens: {
			md: '768px',
			xl: '1110px',
		},
		colors: {
			orange: {
				300: '#FBAF85',
				600: '#D87D4A',
			},
			red: {
				500: '#ff0000',
			},
			white: {
				100: '#FFFFFF',
				200: '#FAFAFA',
				400: '#F1F1F1',
			},
			black: {
				800: '#101010',
				900: '#000000',
			},
			transparent: {},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
