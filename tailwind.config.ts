import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {},
		colors: {
			bones: {
				// Monos
				white: 'white',
				whitesmoke: 'whitesmoke',
				gray: 'gray',
				dimgray: 'dimgray',
				slategray: 'slategray',
				black: 'black',
				// Yellows
				yellow: 'yellow',
				gold: 'gold',
				goldenrod: 'goldenrod',
				// Blues
				cyan: 'cyan',
				blue: 'blue',
				mediumblue: 'mediumblue',
				midnightblue: 'midnightblue',
				// Reds
				red: 'red',
				firebrick: 'firebrick',
				darkred: 'darkred',
				// Purples
				magenta: 'magenta',
				rebeccapurple: 'rebeccapurple',
				indigo: 'indigo',
				// Utilities
				transparent: 'transparent',
			},
		},
		// fontFamily: {
		// 	sans: ['DM Sans', 'sans-serif'],
		// 	serif: ['DM Serif', 'serif'],
		// },
	},
	plugins: [],
	darkMode: 'media',
};

export default config;
