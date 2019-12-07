const path = require("path");

module.exports = {
  // devServer: {
  //   open:
  //     "/Applications/Firefox Developer Edition.app/Contents/MacOS/firefox --start-debugger-server"
  // },
  entry: {
    app: ["@babel/polyfill", "./app.js"]
  },
  context: path.resolve(__dirname, "src"),

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundle.js"
  },
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
  }
};
