const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
const { css } = require('styled-components')

const figmaConfig = (_, argv) => ({
  mode: argv.mode === 'production' ? 'production' : 'development',

  devtool: argv.mode === 'production' ? false : 'inline-source-map',

  entry: {
    ui: './platforms/figma/ui.js',
    code: './platforms/figma/code.js',
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: [
          './src/platforms/Adobe',
          './src/platforms/Sketch',
          './node_modules',
          './platforms/sketch',
          './platforms/adobe',
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react'],
          },
        },
      },

      {
        test: /\.css$/,
        exclude: [
          './src/platforms/Adobe',
          './src/platforms/Sketch',
          './platforms/sketch',
          './platforms/adobe',
        ],
        loader: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },

      {
        test: /\.(png|jpg|gif|webp|svg)$/,
        exclude: [
          './platforms/sketch',
          './platforms/adobe',
          './src/platforms/Adobe',
          './src/platforms/Sketch',
          './node_modules',
        ],
        loader: [{ loader: 'url-loader' }],
      },
    ],
  },
  externals: {
    uxp: 'uxp',
  },

  resolve: {
    alias: {
      ['@modules']: path.resolve(__dirname, 'src/modules'),
      ['@components']: path.resolve(__dirname, 'src/components'),
      ['@screens']: path.resolve(__dirname, 'src/screens'),
      ['@assets']: path.resolve(__dirname, 'src/assets'),
      ['@config']: path.resolve(__dirname, 'src/config'),
      ['@app']: path.join(__dirname, 'src'),
    },
  },

  output: {
    path: path.resolve(`${__dirname}/platforms/figma`, 'build'),
    filename: '[name].js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './platforms/figma/ui.html',
      filename: 'ui.html',
      inlineSource: '.(js)$',
      chunks: ['ui'],
    }),
    new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
  ],
})

const adobeConfig = {
  entry: './platforms/adobe/index.js',
  output: {
    path: path.resolve(`${__dirname}/platforms/adobe`, 'build'),
    filename: 'main.js',
    libraryTarget: 'commonjs2',
  },
  devtool: 'none',
  resolve: {
    alias: {
      ['@modules']: path.resolve(__dirname, 'src/modules'),
      ['@components']: path.resolve(__dirname, 'src/components'),
      ['@screens']: path.resolve(__dirname, 'src/screens'),
      ['@assets']: path.resolve(__dirname, 'src/assets'),
      ['@config']: path.resolve(__dirname, 'src/config'),
      ['@app']: path.join(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: [
          './platforms/sketch',
          './platforms/figma',
          './src/platforms/Figma',
          './src/platforms/Sketch',
          './node_modules',
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react'],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: [
          './src/platforms/Figma',
          './src/platforms/Sketch',
          './platforms/sketch',
          './platforms/figma',
        ],
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|webp|svg)$/,
        exclude: [
          './platforms/sketch',
          './platforms/figma',
          './src/platforms/Figma',
          './src/platforms/Sketch',
          './node_modules',
        ],
        loader: [{ loader: 'url-loader' }],
      },
    ],
  },
  externals: {
    scenegraph: 'scenegraph',
    application: 'application',
    uxp: 'uxp',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(`${__dirname}/platforms/adobe`, 'manifest.json'),
          to: path.resolve(`${__dirname}/platforms/adobe`, 'build'),
        },
      ],
      options: {
        concurrency: 100,
      },
    }),
  ],
}

module.exports = [figmaConfig, adobeConfig]
