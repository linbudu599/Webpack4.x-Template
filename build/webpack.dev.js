const merge = require("webpack-merge");
const commenConfig = require("./webpack.common");
const devConfig = {
  mode: "development",
  devServer: {
    host: "localhost",
    open: true,
    hot: true,
    port: 9999
  },
  optimization: {
    minimizer: []
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              //发布目录
              publicPath: "../imgs",
              //输出目录
              outputPath: "imgs"
            }
          }
        ]
      }
    ]
  }
};
module.exports = merge(commenConfig, devConfig);
