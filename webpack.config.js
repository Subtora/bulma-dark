const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/docs"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jp?g|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 5000
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve("./public"),
    compress: true,
    historyApiFallback: true,
    port: 9000
  }
};
