const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: path.join(__dirname, "../src/js/index.js"), //入口文件，若不配置webpack4将自动查找src目录下的index.js文件

  output: {
    filename: "[name].[hash:8].js", //输出文件名，[name]表示入口文件js名
    path: path.join(__dirname, "../dist") //输出文件路径
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        exclude: /(node_modules)/,
        include: [path.resolve(__dirname, "../src")]
      },
      {
        test: /\.js$/,
        loader: "eslint-loader",
        enforce: "pre", //编译前检查
        exclude: /(node_modules)/, //不检查的
        include: [path.resolve(__dirname, "../src")], // 指定检查的目录
        options: {
          // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
          formatter: require("eslint-friendly-formatter") // 指定错误报告的格式规范（需要安装）
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        //babel-preset-env/es2015区别
        exclude: /(node_modules)/,
        loader: "babel-loader"
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(eot|ttf|svg|woff)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1024 * 10
          }
          // .woff，woff2一定要url-loader处理成DataURL，否则会报错跨域问题
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css" // 设置最终输出的文件名
    }),
    new CleanWebpackPlugin({
      //默认对应output.path
    }),
    new HtmlWebpackPlugin({
      // 打包输出HTML
      title: "Hello Webpack",
      minify: {
        // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        minifyCSS: true // 压缩内联css
      },
      filename: "index.html",
      hash: true,
      template: path.join(__dirname, "../public/index.html"), //模板文件地址，不一定是html格式的
      inject: true, //注入位置为html文件body底部
      favicon: path.join(__dirname, "../public/favicon.jpg"),
      cache: true, //默认是true的，表示内容变化的时候生成一个新的文件。
      showErrors: true //如果 webpack 编译出现错误，webpack会将错误信息包裹在一个 pre 标签内
    }),

    new CopyWebpackPlugin([
      {
        from: "./src/assets/docs",
        to: "publicDocs"
      }
    ]),
    new VueLoaderPlugin({})
  ],
  optimization: {
    minimizer: []
  }
};
