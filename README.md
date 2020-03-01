# @budu/jsx-template

一个中等大小的 React+Webpack4 SPA 应用模板。

需要轻量的？来看看这个，一行配置都莫得（Tsx+React-Router）！[Parcel-Tsx-Boilerplate](https://github.com/linbudu599/Parcel-Tsx-Boilerplate)

- 基础配置
  - [x] 优化打包大小
    - 懒加载/按需打包/摇树优化等
  - [x] 优化打包速率
    - Thread-Loader
    - Terser 并行压缩
  - [x] 预置性能分析/时间记录插件
- 完善的 Lint 工具（大部分规则留空）
  - [x] ESLint（仅预装`esling-config-react-app`与`eslint-config-prettier`）
  - [x] StyleLint
  - [x] Prettier
- 开发体验
  - [x] HMR，包括 CSS。
  - [x] 清晰注释，大部分配置都有注释表明用途
  - [x] 可定制，这个模板的数据流方案、路由方案、CSS（预置处理器为 Less） 方案留空，可自由定制。
  - [x] 集成 webpackbar 与 friendlyerror，赏心悦目
- 测试
  - [ ] 集成 Jest 和 Enzyme
