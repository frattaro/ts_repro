const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 8080
  },
  devtool: 'inline-source-map',
  entry: './index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin()
  ],
  resolve: {
    alias: {
      'theme': 'vuetify/src/stylus/settings/_variables.styl',
      vuetify$: 'vuetify/lib',
      '@': path.resolve(__dirname)
    },
    extensions: ['.js', '.json', '.vue'],
    modules: ['node_modules', 'tests'],
    symlinks: false
  },
  node: {
    callsites: 'empty',
    'find-up': 'empty',
    fs: 'empty',
    module: 'empty'
  }
}
