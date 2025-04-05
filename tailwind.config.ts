import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {},
		colors: {
			bones: {
				// Monos
				black: 'black', // IN USE
				dimgray:
					'color(display-p3 0.156863 0.156863 0.156863 / 1.000000)',
				gainsboro: 'gainsboro',
				darkgray: 'darkgray',
				ghostwhite: 'ghostwhite',
				gray: 'gray',
				lightsteelblue: 'lightsteelblue',
				slategray: 'slategray',
				white: 'white',
				whitesmoke: 'color(display-p3 0.929412 0.92549 0.898039/1)',
				// Yellows
				yellow: 'color(display-p3 1.000000 1.000000 0.000000 / 1.000000)',
				// gold: 'gold',
				gold: 'color(display-p3 0.964706 0.823529 0/1)',
				goldenrod: 'goldenrod',
				// Blues
				aliceblue:
					'color(display-p3 0.941176 0.972549 1.000000 / 1.000000)',
				cyan: 'cyan',
				lavender: 'lavender', // IN USE
				lightcyan: 'lightcyan',
				blue: 'color(display-p3 0.000000 0.000000 1.000000 / 1.000000)', // IN USE
				mediumblue: 'mediumblue',
				thistle: 'thistle',
				midnightblue:
					'color(display-p3 0.098039 0.098039 0.439216 / 1.000000)',
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

	darkMode: 'media',
};

export default config;
