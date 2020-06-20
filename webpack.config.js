const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const path = require("path");
const { css } = require("styled-components");

const figmaConfig = (_, argv) => ({
  mode: argv.mode === "production" ? "production" : "development",

  devtool: argv.mode === "production" ? false : "inline-source-map",

  entry: {
    ui: "./platforms/figma/ui.js",
    code: "./platforms/figma/code.ts",
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components|adobe|sketch)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/react"],
          },
        },
      },

      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /(node_modules|bower_components|adobe|sketch)/,
      },

      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components|adobe|sketch)/,
        loader: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },

      {
        test: /\.(png|jpg|gif|webp|svg)$/,
        exclude: /(node_modules|bower_components|adobe|sketch)/,
        loader: [{ loader: "url-loader" }],
      },
    ],
  },

  resolve: { extensions: [".tsx", ".ts", ".jsx", ".js"] },

  output: {
    path: path.resolve(`${__dirname}/platforms/figma`, "build"),
    filename: "[name].js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./platforms/figma/ui.html",
      filename: "ui.html",
      inlineSource: ".(js)$",
      chunks: ["ui"],
    }),
    new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
  ],
});

const adobeConfig = {
  entry: "./platforms/adobe/index.js",
  output: {
    path: path.resolve(`${__dirname}/platforms/adobe`, "build"),
    filename: "main.js",
    libraryTarget: "commonjs2",
  },
  devtool: "none",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components|figma|sketch)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/react"],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components|figma|sketch)/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|webp|svg)$/,
        exclude: /(node_modules|bower_components|figma|sketch)/,
        loader: [{ loader: "url-loader" }],
      },
    ],
  },
  externals: {
    scenegraph: "scenegraph",
  },
};

/*
const sketchConfig = {
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "lib.js",
  },
  //…
}; */

module.exports = [figmaConfig, adobeConfig /* sketchConfig */];
