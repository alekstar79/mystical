const TerserPlugin = require('terser-webpack-plugin')

module.exports = () => ({
  minimize: true,

  splitChunks: {
    chunks: 'all'
  },

  minimizer: [
    new TerserPlugin({
      test: /\.js(\?.*)?$/i,
      extractComments: false,
      minify: TerserPlugin.uglifyJsMinify,
      terserOptions: {
        //
      }
    })
  ]
})
