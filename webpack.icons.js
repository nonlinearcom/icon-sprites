const path = require('path')
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');


module.exports = {
	mode: 'production',
	entry: ['./src/icons/index.js'],
	output: {
		path: path.resolve(__dirname, 'dist/sprite/'),
	},
	plugins: [
		new SVGSpritemapPlugin('src/icons/**/*.svg',{
			output: {
				filename: 'iconSprite.svg',
				svg: {
					sizes: false
				},
				chunk: {
					name: 'test',
					keep:false
				}
			},
			sprite: {
				prefix: false,
				generate: {
					title: true,
				}
			},
		})
	],
}