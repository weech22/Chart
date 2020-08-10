const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'

module.exports = (config) => {
  config.mode = isProd ? 'production' : 'development'
  config.devtool = isProd ? 'none' : 'source-map'

  config.module.rules = config.module.rules.map((rule) => ({
    ...rule,
    exclude: /node_modules/,
  }))

  config.resolve = {
    ...config.resolve,
    extensions: ['.js', '.jsx'],
    alias: {
      ['@modules']: path.resolve(__dirname, 'src/modules'),
      ['@components']: path.resolve(__dirname, 'src/components'),
      ['@screens']: path.resolve(__dirname, 'src/screens'),
      ['@assets']: path.resolve(__dirname, 'src/assets'),
      ['@config']: path.resolve(__dirname, 'src/config'),
      ['@app']: path.join(__dirname, 'src'),
    },
  }

  config.module.rules.push({
    test: /\.(html)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'html-loader',
        options: {
          attrs: ['img:src', 'link:href'],
          interpolate: true,
        },
      },
    ],
  })

  config.module.rules.push({
    test: /\.(png|jpg|gif|webp|svg)$/,
    exclude: /node_modules/,
    loader: [{ loader: 'url-loader' }],
  })

  config.externals = {
    scenegraph: 'scenegraph',
    application: 'application',
    uxp: 'uxp',
  }

  config.module.rules.push({
    test: /\.(css)$/,
    exclude: /node_modules/,
    use: ['css-loader'],
  })

  config.plugins.push(
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(
            `${__dirname}/platforms/sketch/src/view`,
            'index.css'
          ),
          to: path.resolve(
            `${__dirname}/platforms/sketch/chart2.sketchplugin/Contents/Resources/_webpack_resources`
          ),
        },
      ],
      options: {
        concurrency: 100,
      },
    })
  )
}
