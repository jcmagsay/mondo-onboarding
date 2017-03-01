var webpack = require('webpack');
var path = require('path');

module.exports = {
  'entry': {
    'app': path.resolve(__dirname, '../src/main.js')
  },
  'output': {
    'path': path.resolve(__dirname, '../dist'),
    'filename': 'js/app.js',
    'publicPath': 'http://localhost:8080/dist/',
  },
  'module': {
    'loaders': [
      {
        'test': /\.vue$/,
        'loader': 'vue'
      },
      {
        'test': /\.js$/,
        'loader': 'babel',
        'exclude': /node_modules/,
      },
      {
        'test': /\.(png|jpg|jpeg|gif)$/,
        'loader': 'url?limit=10000&name=images/[name].[ext]',
      },
      {
        'test': /\.css$/,
        'loader': ['style-loader', 'css-loader'],
      }
    ]
  },
  'resolve': {
    'alias': {
      'views': path.resolve(__dirname, '../src/views'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'layouts': path.resolve(__dirname, '../src/layouts'),
      'router': path.resolve(__dirname, '../src/router'),
      'vue': 'vue/dist/vue'
    },
    'extensions': ['.js', '.json', '.vue'],
    'modules': [ path.resolve(__dirname, '../src'), "node_modules" ]
  },
  'resolveLoader': {
    'moduleExtensions': ['-loader']
  }
};

if (process.env.NODE_ENV === 'dev') {
  module.exports.devServer = {
    'historyApiFallback': true,
    'hot': true,
    'proxy': {}
  };
  module.exports.devtool = '#cheap-module-eval-source-map';
  module.exports.plugins = [
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
  ];
}
