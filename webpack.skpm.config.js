const path = require('path')
// TODO: js loader add exclude
module.exports = (config) => {
  console.log('config: ', config)

  config.module.rules = config.module.rules.map((rule) => ({
    ...rule,
    exclude: {
      and: [
        path.resolve(__dirname, '/platforms/adobe'),
        path.resolve(__dirname, '/platforms/figma'),
        path.resolve(__dirname, '/src/platforms/Adobe'),
        path.resolve(__dirname, '/src/platforms/Figma'),
        path.resolve(__dirname, '/node_modules'),
      ],
    },
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
    exclude: {
      and: [
        path.resolve(__dirname, '/platforms/adobe'),
        path.resolve(__dirname, '/platforms/figma'),
        path.resolve(__dirname, '/src/platforms/Adobe'),
        path.resolve(__dirname, '/src/platforms/Figma'),
        path.resolve(__dirname, '/node_modules'),
      ],
    },
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
    exclude: [
      path.resolve(__dirname, '/platforms/adobe'),
      path.resolve(__dirname, '/platforms/figma'),
      path.resolve(__dirname, '/src/platforms/Figma'),
      path.resolve(__dirname, '/src/platforms/Adobe'),
      path.resolve(__dirname, '/node_modules'),
    ],
    loader: [{ loader: 'url-loader' }],
  })

  config.externals = {
    scenegraph: 'scenegraph',
    application: 'application',
    uxp: 'uxp',
  }

  config.module.rules.push({
    test: /\.(css)$/,
    exclude: {
      and: [
        path.resolve(__dirname, '/platforms/adobe'),
        path.resolve(__dirname, '/platforms/figma'),
        path.resolve(__dirname, '/src/platforms/Adobe'),
        path.resolve(__dirname, '/src/platforms/Figma'),
        path.resolve(__dirname, '/node_modules'),
      ],
    },
    use: ['css-loader'],
  })
}
