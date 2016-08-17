module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'./src/javascripts/Site.jsx',
	],
	output: {
		publicPath: '/public/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
}