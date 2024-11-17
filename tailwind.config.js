/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
	safelist: [{ pattern: /rotate-(0|90|180|270)/ }],
}
