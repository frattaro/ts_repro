const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const ExtractCssPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const styleLoaders = [
  {
    loader: 'css-loader',
    options: { importLoaders: 1 }
  },
  'postcss-loader'
]

const loader = 'vue-style-loader'

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
      },
      {
        test: /\.styl$/,
        use: [
          loader,
          ...styleLoaders,
          {
            loader: 'stylus-loader',
            options: { preferPathResolver: 'webpack' }
          }
        ]
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
    new VuetifyLoaderPlugin(),
    new ExtractCssPlugin({
      filename: '[name].[contenthash:8].css'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }]
      }
    })
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
