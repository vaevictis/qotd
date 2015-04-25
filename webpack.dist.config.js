var webpack = require("webpack");

module.exports = {
  entry: "./js/app.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style!css"
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
