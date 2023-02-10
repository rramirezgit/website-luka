const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

module.exports = {
  webpack: {
    configure: webpackConfig => {
      webpackConfig.optimization.minimize = true
      webpackConfig.optimization.minimizer.push(
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              plugins: [['mozjpeg', { quality: 85 }]]
            }
          }
        })
      )
      return webpackConfig
    }
  }
}
