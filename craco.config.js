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
          },
          generator: {
            preset: 'webp',
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: ['imagemin-webp']
            }
          }
        })
      )
      return webpackConfig
    }
  }
}
