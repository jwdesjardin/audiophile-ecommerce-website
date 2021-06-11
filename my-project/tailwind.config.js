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
			sm: '.875rem',
			base: '.94rem',
			lg: '1.125rem',
			'2xl': '1.5rem',
			'3xl': '1.75rem',
			'4xl': '2rem',
			'5xl': '2.5rem',
			'6xl': '3.5rem',
		},
		screens: {
			md: '768px',
			lg: '1110px',
		},
		colors: {
			orange: {
				300: '#FBAF85',
				600: '#D87D4A',
			},
			red: {
				600: '#CD2C2C',
			},
			white: {
				100: '#FFFFFF',
				200: '#FAFAFA',
				400: '#F1F1F1',
			},
			black: {
				200: '#CFCFCF',
				400: '#979797',
				600: '#4c4c4c',
				800: '#101010',
				900: '#000000',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
}
