const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const { extendDefaultPlugins } = require('svgo')

module.exports = {
  webpack: {
    configure: webpackConfig => {
      webpackConfig.optimization.minimize = true
      webpackConfig.optimization.minimizer.push(
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              plugins: [
                [
                  'imagemin-svgo',
                  {
                    plugins: extendDefaultPlugins([
                      {
                        name: 'removeViewBox',
                        active: false
                      }
                    ])
                  }
                ],
                ['imagemin-webp', { quality: 75 }],
                ['imagemin-pngquant', { quality: [0.6, 0.8] }],
                ['imagemin-mozjpeg', { quality: 80 }]
              ]
            }
          }
        })
      )
      return webpackConfig
    }
  }
}
