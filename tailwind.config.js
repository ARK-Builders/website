const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './content/**/*.md'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				arkOrange: '#DD7409',
				arkOrange2: '#EEA050',
				arkOrangeDeep: '#C96000',
				arkOrangeLight: '#FFF3E6',
				arkOrangeLight2: '#FFE0BF',
				arkOrangeLighter: '#FFF5DD',
				arkOrangeLightM: '#EEA050',

				arkBlueLight: '#A5D6FF',
				arkGray: '#302C2C',
				arkGray2: '#453F3F',
				arkGray3: '#685F5F',
				arkGray4: '#968D8D',
				arkGray5: '#F5F4F2',
				arkGray6: '#F9F9F9',
				arkGray7: '#E1E1E1',

				arkDeep: '#444444',
				arkDeep2: '#4F4F4F',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
