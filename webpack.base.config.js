var path = require("path");
var webpack = require("webpack");
const os = require("os");
const HappyPacke = require("happypack");
const happyThreadPool = HappyPacke.ThreadPool({size: os.cpus().length})

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css'],
    alias: {
      modules: path.resolve(__dirname, 'node_modules'),
      containers: path.resolve(__dirname, 'src/containers'),
      components: path.resolve(__dirname, 'src/components'),
      actions: path.resolve(__dirname, 'src/actions'),
      utils: path.resolve(__dirname, 'src/utils')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'happypack/loader?id=js',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: 'happypack/loader?id=less',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }],
        include: path.join(__dirname, 'src')
      }
    ]

  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'bundle',
      // minChunks: Infinity
      children: true,
      minChunks: (module, count) => {
        return count>=3
      }
    }),
    new HappyPacke({
      id: 'less',
      loaders: [
        {
          loader: 'style-loader',
          options: {
            singleton: true
          }
        },
        'css-loader',
        'less-loader'
      ],
      threadPool: happyThreadPool,
      verbose: true
    }),
    new HappyPacke({
      id: 'js',
      loaders: [
        'babel-loader'
      ],
      threadPool: happyThreadPool,
      verbose: true
    })
  ]
};

