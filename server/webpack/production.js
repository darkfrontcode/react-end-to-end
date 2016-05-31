var path = require('path'),
	webpack = require('webpack'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		path.join(__dirname, '../react/main.js')
	],
	output: {
		path: path.join(__dirname, '../../public'),
		filename: "app.js",
	},
	resolve: {
		extensions: ['', '.js', '.styl']
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.styl$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
			}
		]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.BannerPlugin("{copyright:['Dark Front Code','https://github.com/darkfrontcode']}"),
		new ExtractTextPlugin("main.css")
	]
}
