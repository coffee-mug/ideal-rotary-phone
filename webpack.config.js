var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
         test: /\.(png|woff|woff2|eot|ttf|svg)$/,
         loader: 'url-loader?limit=100000' 
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    proxy: {
        '/signup': {
            target: 'http://localhost:8000',
            secure: false
        },
        '/login': {
            target: 'http://localhost:8000',
            secure: false
        },
        '/logout': {
            target: 'http://localhost:8000',
            secure: false
        },
        '/users': {
            target: 'http://localhost:8000',
            secure: false
        },
        '/users/*': {
            target: 'http://localhost:8000',
            secure: false
        },
        '/admin/*': {
            target: 'http://localhost:8000',
            secure: false
        },
        '/prospection/*': {
            target: 'http://localhost:8000',
            secure: false
        },
        '/api/*': {
            target: 'http://localhost:8000',
            secure: false
        },
    },
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
