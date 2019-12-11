# Webpack 4.x : official Cli tools & customize template

There's no doubt that an offical cli like **Vue-cli** or **Create-React-App** can bring great convenience during development, but was that really beneficial for developing?
What do we lost at the same time we get time-saving?

1. For example, when we are using the **Create-react-app**, we often need to implement some special changes on the config ejected, which can be confused on how and where to begin, but if u build a template DIY, the whole file structure can be distinct and clear.
2. emm, more points are still unkown for me so far.

## 已经实现的功能 Functions already accomplished

### 基础 Eslint Babel(7.0) PostCss Less Vue

### 拆分配置文件 split config file

### Loader/Plugin/Feature

- MiniCssExtractPlugin: 分离 CSS 文件
- CleanWebpackPlugin: 清除旧的 dist 目录
- HtmlWebpackPlugin: 生成 HTML 模板
- CopyWebpackPlugin: 拷贝静态资源
- merge:**合并配置**
- OptimizeCssAssetsPlugin:压缩 CSS
- PurifyCSS:清理重复、无用 CSS
- ParallelUglifyPlugin:压缩 JS
- BundleAnalyzerPlugin:分析打包大小
- Visualizer:也是分析打包大小，但我感觉这个更直观
- 字体文件配置
  ~~puzzle 但有个诡异的地方，明明字体文件加载到了，但就是不会显示...，应该也不是路径问题了，因为我直接把字体拷到 dist 文件夹里改了 main.css，也不起作用~~
  ⬆ 已解决，是字体文件的问题，因为图省事只配了每个字体的 ttf 格式，这个字体（汉咪简体）估计是刚好不行，换了个字体立马成功了，这么个小问题浪费了我一个多小时... 4.
- [friendly-errors-webpack-plugin](https://www.npmjs.com/package/friendly-errors-webpack-plugin)
- Typescript
- 环境变量 & DefinePlugin & dotenv

## 接下来实现/解决的功能 Functions remain unsolved

- 各种各样的 lint
- ~~环境变量~~
- ~~字体文件配置~~
- ~~ts 支持~~
- 多入口、多出口配置
- 重新实现 webpack-dev-server
- 代码分割
- 真·Tree-Shaking
- Source-Map
- 懒加载
- 浏览器缓存
- 垫片
- 单页面实现
- 多页面实现
- 打包大小优化：dll
