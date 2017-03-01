var path = require('path')
var webpack = require('webpack')

module.exports = {
  'entry': './src/index.js',
  'output': {
    // the folling line is for running 'webpack'
    //'path': './public',
    // the folling line is for running 'webpack-dev-server --inline --hot'
    'path': path.resolve(__dirname, 'public'),
    'publicPath': 'http://localhost:8080/public/',
    'filename': 'bundle.js'
  },
  'module': {
    'loaders': [
      {
        'test': /\.js$/,
        'loader': 'babel',
        'exclude': /node_modules/
      },
      {
        'test': /\.vue$/,
        'loader': 'vue'
      },
    ]
  },
  'resolve': {
    'alias': {
      'layouts': path.resolve(__dirname, 'src/layouts/'),
      'vue': 'vue/dist/vue'
    },
    'extensions': ['.js', '.json', '.vue'],
    'modules': [ path.resolve(__dirname, "src"), "node_modules" ],
  },
  'resolveLoader': {
    'moduleExtensions': ['-loader']
  },
  'plugins': [
    new webpack.LoaderOptionsPlugin({
      'options': {
        'test': /\.vue$/,
        'vue': {
          'loaders': {
            'js': 'babel'
          }
        }
      }
    })
  ]
}
