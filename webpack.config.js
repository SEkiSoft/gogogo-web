const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/javascripts/Site.js',
	],
	output: {
		publicPath: '/public/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loaders: ['react-hot', 'babel-loader'],
				include: path.join(__dirname, 'src')
			},
		]
	},
	plugins: [
  	new webpack.HotModuleReplacementPlugin()
	]
}