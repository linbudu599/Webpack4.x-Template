# Webpack 4.x

![issues](https://img.shields.io/github/issues/linbudu599/Webpack4.x-Template)
![stars](https://img.shields.io/github/stars/linbudu599/Webpack4.x-Template)
![forks](https://img.shields.io/github/forks/linbudu599/Webpack4.x-Template)

> 🤖 这个项目目前还处于雏形之中，我奏是个弟弟

## 😃 已经实现的功能 **Functions** already accomplished

### 基础

- Eslint

  > - 使用 [eslint-config-alloy](https://www.npmjs.com/package/eslint-config-alloy)
  > - 格式化工具： [eslint-formatter-pretty](https://www.npmjs.com/package/eslint-formatter-pretty)

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

- [OptimizeCssAssetsPlugin](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin): 压缩 CSS
- [PurifyCSS](https://www.npmjs.com/package/purifycss-webpack): 清理重复、无用 CSS
- [ParallelUglifyPlugin](https://www.npmjs.com/package/uglifyjs-webpack-plugin): 压缩 JS
- [BundleAnalyzerPlugin](https://www.npmjs.com/package/webpack-bundle-analyzer): 分析打包大小
- [Visualizer](https://www.npmjs.com/package/webpack-visualizer-plugin): 也是分析打包大小，但我感觉这个更直观
- 字体文件配置

  > ~~puzzle 但有个诡异的地方，明明字体文件加载到了，但就是不会显示...~~

  > 是字体文件的问题，因为图省事只配了每个字体的 ttf 格式，这个字体（汉咪简体）估计是刚好不行，换了个字体立马成功了，这么个小问题浪费了我一个多小时...

- [friendly-errors-webpack-plugin](https://www.npmjs.com/package/friendly-errors-webpack-plugin)
- 环境变量 & DefinePlugin & [dotenv](https://www.npmjs.com/package/dotenv)

- [preload-webpack-plugin](https://github.com/GoogleChromeLabs/preload-webpack-plugin): 实现预加载

## ⚒ 接下来实现/解决的功能 Functions remain unsolved

- [x] 各种各样的 lint
  > - eslint
  > - stylelint
  > - tslint
- [x] 环境变量
- [x] 字体文件配置
- [x] ts 支持
- [x] 多入口、多出口相关配置
- [x] 重新实现 webpack-dev-server
- [x] 代码分割

  > - [为什么要进行代码分割？](./Analyze.md)
  > - 单页面下代码分割
  > - 多页面下代码分割
  > - 使用[dynamic-import-webpack](http://npm.taobao.org/package/babel-plugin-dynamic-import-webpack)进行代码分割

- [x] 真·Tree-Shaking

  > Tree Shaking：只支持 `ES Module` 例如 `import` 和 `export` 的静态结构特性的引入。
  > 当引入一个模块时，不引入所有的代码，只引入需要的代码.
  >
  > > 如果把代码打包比作制作蛋糕。传统的方式是把鸡蛋(带壳)全部丢进去搅拌，然后放入烤箱，最后把(没有用的)蛋壳全部挑选并剔除出去。而 `treeshaking` 则是一开始就把有用的蛋白蛋黄放入搅拌，最后直接做出蛋糕。

  - `webpack` 默认 `es6` 规范编写的模块都能使用 `tree-shaking`
  - ts 要使用，需要在 `tsconfig.json` 中将编译目标(target)设定为 `es6`
  - 4.0 中需要使用 `config.optimization.minimize` 来进行设置
  - 在 `package.json` 中:

    **对 所有的 css 文件 不使用 Tree shaking。如果填 false，就是都需要用到 Tree shaking**
    设置为 false 会告知 webpack，所有的代码都是无副作用的（即不会后面异步的再引入？）
    也就是可以放心的出去没有使用的引入和导出

    `{ "sideEffects": ["*.css"] }`

- [x] Source-Map

  > 注意，如果使用了 `UglifyJsPlugin` 则需要在其中也配置 sourceMap

  ```javascript
  new UglifyJsPlugin({
    sourceMap: true
  });
  ```

- [x] 懒加载
  > 有 `import()` 和 `require.ensure()` 两种写法，待整理
  >
  > - import()
  >   可以使用注释的方式指定打包名
  >
  > ```javascriptd
  > import(/* webpackChunkName: 'subPageA'*/ "./chunkA").then(function(
  >   subPageA
  > ) {
  >   console.log(subPageA);
  > });
  > ```
  >
  > - Babel 插件
  >   直接使用 `dynamic-import-webpack` 插件
- [ ] 预加载
  > [webpack 中的预加载](https://www.zcfy.cc/article/link-rel-prefetch-preload-in-webpack)
- [x] 浏览器缓存:通过设置生成的文件以及 chunk 的 name：

  > contenthash 代表从源代码内容生成 hash 值
  > 源代码不变，hash 值就不会变，解决浏览器缓存问题。打包上线时，用户只需要更新有变化的代码，没有变化的从浏览器缓存读取

  ```javascript
    output: {
          filename: "[name].[contenthash].js",
          chunkFilename: "[name].[contenthash].js"
      },
  ```

- [x] 垫片

  > 什么是垫片？请看以下例子：
  >
  > ```javascript
  > // index.js（入口文件）中
  > import \_ from "lodash";
  > import shimm_func from "./shimming";
  > shimm_func();
  >
  > // shimmimg.js
  > const shimm_func = () => {
  >   console.log(_.join(["linbudu", "shim", "success"], "-"));
  > };
  > export default shimm_func;
  > ```
  >
  > 原因也很简单，因为 shimming.js 中并没有引入 lodash，但是我们还想这样调用，就需要使用 `webpack.providerPlugin` ，这是一个内置插件，示例配置如下
  >
  > ```javascript
  > new webpack.ProvidePlugin({
  >   _: "lodash"
  > });
  > ```
  >
  > 这样 webpack 在打包时，如果发现某个模块中使用了 `_` ，便会自动引入 lodash 这个库，整个思想就是使用 webpack 向模块中注入全局可用的变量/函数等。

- [x] 单页面实现
  > - 使用`Vue-Router`
- [x] 多页面实现
- [x] 打包大小优化：DLL（Dynamic-Link Library，动态链接库）

  - 手动配置 dll:
    - 生成 dll 文件->打包时进行映射->把 dll 资源加到 html 里
  - 自动配置 dll
    - 使用 [autodll-webpack-plugin](https://www.npmjs.com/package/autodll-webpack-plugin)，这个插件曾经也被 `vue-cli` 使用
  - 摈弃 dll
    - webpack 4 有着比 dll 更好的打包性能~，dll 带来的收益并不大

- [hard-source-webpack-plugin](https://github.com/mzgoddard/hard-source-webpack-plugin)

  > 为模块提供中间缓存，能极大提升打包速度，已经被内置到 webpack5 中

- [webpackbar](https://github.com/nuxt/webpackbar)，在打包编译过程中生成进度条

- [speed-measure-webpack-plugin](https://github.com/stephencookdev/speed-measure-webpack-plugin)，显示在打包过程中各阶段/各 loader/各 plugin 耗时
