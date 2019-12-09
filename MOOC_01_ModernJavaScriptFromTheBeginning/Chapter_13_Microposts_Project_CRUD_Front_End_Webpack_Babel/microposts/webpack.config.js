const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

console.log(__dirname);

module.exports = {
  // devServer: {
  //   open:
  //     "/Applications/Firefox Developer Edition.app/Contents/MacOS/firefox --start-debugger-server"
  // },
  entry: {
    app: ["@babel/polyfill", "./app.js"]
  },
  context: path.resolve(__dirname, "src"),
  devServer: {
    // contentBase: path.resolve(__dirname, "build"),
    // writeToDisk: true,
    // inline: true,
    port: 5000,
    historyApiFallback: true,
    disableHostCheck: true
  },
  devtool: "inline-source-map",
  // devtool: "eval-source-map",
  // devtool: "source-map",
  // output: {
  //   path: path.resolve(__dirname, "build"),
  //   filename: "app.bundle.js",
  //   publicPath: "/"
  // },
  // output: {
  //   path: path.resolve(__dirname, "dist"),
  //   filename: "js/[name].js",
  //   publicPath: "/"
  // },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new HtmlWebpackPlugin({
      template: "./index.html"
      // filename: "./index.html"
    })
  ]
};
