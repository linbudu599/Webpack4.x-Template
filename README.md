# Webpack 4.x : official Cli tools & customize template

There's no doubt that an offical cli like **Vue-cli** or **Create-React-App** can bring great convenience during development, but was that really beneficial for developing?
What do we lost at the same time we get time-saving?  

1. For example, when we are using the **Create-react-app**, we often need to implement some special changes on the config ejected, which can be confused on how and where to begin, but if u build a template DIY, the whole file structure can be distinct and clear.
2. emm, more points are still unkown for me so far.

## 已经实现的功能 Functions already accomplished

1. 基础 Eslint Babel(7.0) PostCss Less Vue
2. 拆分配置文件 split config file
3. Loader：  
  1.MiniCssExtractPlugin: 分离CSS文件  
  2.CleanWebpackPlugin: 清除旧的dist目录  
  3.HtmlWebpackPlugin: 生成HTML模板  
  4.CopyWebpackPlugin: 拷贝静态资源  
  5.merge:合并配置  
  6.OptimizeCssAssetsPlugin:压缩CSS  
  7.PurifyCSS:清理重复、无用CSS  
  8.ParallelUglifyPlugin:压缩JS  
  9.BundleAnalyzerPlugin:分析打包大小  
  10.Visualizer:也是分析打包大小，但我感觉这个更直观
  11.字体文件配置  
  ~~11.puzzle 但有个诡异的地方，明明字体文件加载到了，但就是不会显示...，应该也不是路径问题了，因为我直接把字体拷到dist文件夹里改了main.css，也不起作用~~  
  ⬆已解决，是字体文件的问题，因为图省事只配了每个字体的ttf格式，这个字体（汉咪简体）估计是刚好不行，换了个字体立马成功了，这么个小问题浪费了我一个多小时...

## 接下来实现/解决的功能 Functions remain unsolved

1. 环境变量
2. ~~字体文件配置~~
3. ~~ts支持~~
4. 多入口、多出口配置
5. 重新实现webpack-dev-server
6. 代码分割
7. 真·Tree-Shaking
8. Source-Map
9. 懒加载
10. 浏览器缓存
11. 垫片
12. 单页面实现
13. 多页面实现
14. 打包大小优化：dll
