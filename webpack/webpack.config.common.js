/**
 *
 * @file webpack.config.common.js
 * @author Jérémy Levron <jeremylevron@19h47.fr> (https://19h47.fr)
 */

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const resolve = require('./webpack.utils');

module.exports = {
	entry: {
		dist: resolve('src/index.js'),
		docs: resolve('src/index.js'),
	},
	output: {
		library: 'Switch',
		libraryTarget: 'umd',
		filename: '../[name]/main.js',
		clean: true,
	},
	devServer: {
		contentBase: resolve('/'),
		compress: true,
		port: 3000,
		inline: true,
		disableHostCheck: true,
		writeToDisk: true,
	},
	resolve: {
		alias: {
			'@': resolve('src'),
			Utils: resolve('src/utils'),
		},
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: resolve('docs/index.html'),
			template: resolve('index.html'),
			inject: false,
			minify: { removeRedundantAttributes: false },
		}),
		new WebpackNotifierPlugin({
			title: 'Webpack',
			excludeWarnings: true,
			alwaysNotify: true,
		}),
	],
};
