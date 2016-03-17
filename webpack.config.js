'use strict';

var webpack = require('webpack');
var path = require('path');

var plugins = [];
if(process.env.NODE_ENV === "production"){
	plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				warnings: false
			},
			output: {comments:false}
		})
	);
}

module.exports = {
	devtool: 'source-map',
	entry: ['pixi.js', './src/index.js'],
	output: {
		filename: 'build/game.js'
	},
  resolve: {
    extensions: ["", ".js"]
  },
	plugins: plugins,
	module: {
    postLoaders: [
      {
        loader: "transform/cacheable?brfs"
      }
    ],
		loaders: [
			{
				test: /\.json$/,
				include: path.join(__dirname, 'node_modules', 'pixi.js'),
				loader: 'json',
			},
			{
				test: /\.js$/,
				exclude: path.join(__dirname, 'node_modules'),
				loader: 'babel-loader',
        query: {
          presets: ['es2015','stage-0']
        }
			}
		]
	}
};
