var webpack = require('webpack');
var path = require("path");

module.exports = {

  entry: "./src/app.js",

  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },

  devtools: "inline-source-map",

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  },

  plugins: [
    //new webpack.optimize.UglifyJsPlugin({miniize: true})
  ]
};
