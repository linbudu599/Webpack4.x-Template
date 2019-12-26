# Webpack 4.x 模板配置

>🤖 这个项目目前还处于雏形之中，我奏是个弟弟

## 😃 已经实现的功能 Functions already accomplished

### 基础

- Eslint
  > 使用 [eslint-config-alloy](https://www.npmjs.com/package/eslint-config-alloy)
  > 格式化工具： [eslint-formatter-pretty](https://www.npmjs.com/package/eslint-formatter-pretty)
- Babel
  > 关于升级到 Babel7.0，可以看我的这篇小贴士: [Tips-Babel7](https://github.com/linbudu599/Penumbra/blob/master/Tips/babel7-config.md)
- PostCss
- Less
- StyleLint
- Vue
- React
  > 参见分支[react-pratice](https://github.com/linbudu599/Webpack4.x-Template/tree/react-pratice)
- Typescript

### Loader/Plugin/Feature

- [MiniCssExtractPlugin](https://www.npmjs.com/package/mini-css-extract-plugin): 分离 CSS 文件
- [CleanWebpackPlugin](https://www.npmjs.com/package/clean-webpack-plugin): 清除旧的 dist 目录
- [HtmlWebpackPlugin](https://www.npmjs.com/package/html-webpack-plugin): 生成 HTML 模板
- [CopyWebpackPlugin](https://www.npmjs.com/package/copy-webpack-plugin): 拷贝静态资源
- [merge](https://www.npmjs.com/package/webpack-merge): 合并配置
- [OptimizeCssAssetsPlugin](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin):压缩 CSS
- [PurifyCSS](https://www.npmjs.com/package/purifycss-webpack):清理重复、无用 CSS
- [ParallelUglifyPlugin](https://www.npmjs.com/package/uglifyjs-webpack-plugin):压缩 JS
- [BundleAnalyzerPlugin](https://www.npmjs.com/package/webpack-bundle-analyzer):分析打包大小
- [Visualizer](https://www.npmjs.com/package/webpack-visualizer-plugin):也是分析打包大小，但我感觉这个更直观
- 字体文件配置
  > ~~puzzle 但有个诡异的地方，明明字体文件加载到了，但就是不会显示...，应该也不是路径问题了，因为是字体文件的问题，因为图省事只配了每个字体的 ttf 格式，这个字体（汉咪简体）估计是刚好不行，换了个字体立马成功了，这么个小问题浪费了我一个多小时... 4.
- [friendly-errors-webpack-plugin](https://www.npmjs.com/package/friendly-errors-webpack-plugin)
- 环境变量 & DefinePlugin & [dotenv](https://www.npmjs.com/package/dotenv)

## ⚒ 接下来实现/解决的功能 Functions remain unsolved

- 各种各样的 lint
  > - eslint ✔
  > - stylelint ✔
  > - tslint ✔
- 环境变量 ✔
- 字体文件配置 ✔
- ts 支持 ✔
- 多入口、多出口相关配置
- 重新实现 webpack-dev-server
- 代码分割
  > - [为什么要进行代码分割？](./Analyze.md)
  > - 单页面下代码分割  ✔
  > - 多页面下代码分割
- 真·Tree-Shaking
- Source-Map
- 懒加载
- 浏览器缓存
- 垫片
- 单页面实现
  > 参见分支[react-pratice](https://github.com/linbudu599/Webpack4.x-Template/tree/react-pratice)，使用 `React-Router`
- 多页面实现
- 打包大小优化：dll
