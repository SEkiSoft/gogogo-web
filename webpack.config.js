const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'./src/javascripts/Site.js'
	],
	output: {
		publicPath: '/public/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loaders: ['babel-loader'],
				include: path.join(__dirname, 'src')
			},
		]
	}
}