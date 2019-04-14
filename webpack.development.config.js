var path = require("path");
var webpack = require("webpack");
const baseConfig = require("./webpack.base.config.js");

module.exports = Object.assign({},baseConfig, {
  entry: {
    bundle: [
      'react-hot-loader/patch',
      // 'webpack-dev-server/client?http://127.0.0.1:6001/',
      './src/index.js'
    ],
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'react-router-dom'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://127.0.0.1:6001/',
    chunkFilename: '[hash]/[id].js',
  },
  plugins: baseConfig.plugins.concat([
    new webpack.DefinePlugin({
			'process.env': {
        // 直接写"development" 会报错。
				NODE_ENV: JSON.stringify("development")
			},
    }),
    new webpack.HotModuleReplacementPlugin()
  ]),
  devServer: {
    // host: '0.0.0.0',
    disableHostCheck: true,
    hot: true,
    inline: true,
    port: 6001,
    headers: {
      'Access-control-Allow-Orign': '*'
    }
  }
}); 

