/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors:{
				'invalid': '#ff000080',
				'valid':  '#00ff0080'
			}
		}
	},
	plugins: []
};
