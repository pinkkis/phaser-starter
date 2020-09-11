const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { InjectManifest, GenerateSW } = require('workbox-webpack-plugin');

const { version, distOutput } = require('./buildConfig');

// Phaser webpack config
const phaserModule = path.join(__dirname, '/node_modules/phaser/');
const phaser = path.join(phaserModule, 'dist', process.env.NODE_ENV === 'production' ? 'phaser.min.js' : 'phaser.min.js');
const spinePlugin = path.join(phaserModule, 'plugins', 'spine', 'dist', process.env.NODE_ENV === 'production' ? 'SpinePlugin.min.js' : 'SpinePlugin.js');

module.exports = {
	output: {
		globalObject: 'this',
		path: distOutput,
	},
	entry: {
		game: ['./src/game.ts']
	},
	devtool: process.env.NODE_ENV === 'production' ? undefined : 'eval-source-map',
	module: {
		rules: [{
			test: /\.[t|j]sx?$/,
			use: 'babel-loader',
			exclude: /node_modules/
		},
		{
			test: /\.map.js$/,
			use: ["source-map-loader"],
			enforce: "pre"
		},
		{
			test: [/\.vert$/, /\.frag$/],
			use: 'raw-loader'
		},
		{
			test: /.worker.js$/,
			use: [{
				loader: 'worker-loader'
			}]
		},
		{
			test: /\.css$/,
			use: [
				MiniCssExtractPlugin.loader,
				"css-loader"
			]
		},
		{
			test: /phaser\.min\.js$/,
			use: [{
				loader: 'expose-loader',
				options: {
					exposes: ['Phaser'],
				}
			}]
		},
		{
			test: /\.(eot|svg|ttf|woff|woff2)$/,
			loader: 'file-loader?name=assets/fonts/[name].[ext]'
		}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.DefinePlugin({
            'typeof CANVAS_RENDERER': JSON.stringify(true),
            'typeof WEBGL_RENDERER': JSON.stringify(true),
            'typeof EXPERIMENTAL': JSON.stringify(true),
            'typeof PLUGIN_CAMERA3D': JSON.stringify(false),
            'typeof PLUGIN_FBINSTANT': JSON.stringify(false),
            'typeof FEATURE_SOUND': JSON.stringify(true)
		}),
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html',
			chunks: ['game', 'vendor'],
			buildType: process.env.NODE_ENV,
			version: version,
			favicon: './src/favicon.png',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: './assets/',
					to: './assets/',
				},
			]
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[name].css',
		}),
		// new GenerateSW(),
	],
	resolve: {
		extensions: ['.ts', '.js', '.jsx', '.tsx'],
		alias: {
			'phaser': phaser,
			'SpinePlugin': spinePlugin
		}
	},
	optimization: {
		minimizer: [
			new TerserPlugin(),
			new OptimizeCSSAssetsPlugin()
		],
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]|[\\/]src[\\/]plugins[\\/]/,
					name: 'vendor',
					chunks: 'initial'
				}
			}
		}
	},
	watchOptions: {
		ignored: [
			'node_modules',
			'assets/**/*'
		]
	}
};
