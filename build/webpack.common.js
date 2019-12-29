const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const PreloadWebpackPlugin = require("preload-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "../src/js/index.js"), //入口文件，若不配置webpack4将自动查找src目录下的index.js文件
    devtool: "source-map",
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
        // 需要写在 HtmlWebpackPlugin 配置之后
        // new PreloadWebpackPlugin({
        //     // preload强制浏览器获取当前需要的资源，优先级高，
        //     //  prefetch获取将来需要的资源， 把决定权留给浏览器， 所以一般浏览器会在闲置的时候下载，
        //     //  preload一定会及时下载资源， prefetch最后都不一定去下载。
        //     rel: "prefetch",
        //     // 会根据不用的文件类型来使用as属性
        //     // 如.css文件会被自动预加载为as=style
        //     // .woff2 文件 -> as=font
        //     // 其他文件会被设定为as=script
        //     // 这里将所有文件都指定为script
        //     as: "script",
        //     // 更细粒度的匹配
        //     // as(entry) {
        //     //   if (/\.css$/.test(entry)) return 'style';
        //     //   return 'script';
        //     // },
        //     include: "asyncChunks",
        //     // fileBlacklist: ["index.css"]
        //     fileBlacklist: [/\index.css|index.js|vendors.js/, /\.whatever/]
        // }),
        // https://cloud.tencent.com/developer/section/1477577
        // new webpack.SourceMapDevToolPlugin({
        //     filename: "[name].js.map",
        //     include: "/src/*.js"
        // }),
        new CopyWebpackPlugin([
            {
                from: "./src/assets/docs",
                to: "publicDocs"
            }
        ]),
        new VueLoaderPlugin(),
        // https://www.webpackjs.com/plugins/banner-plugin/
        new webpack.BannerPlugin({
            banner: "©️linbudu 2019",
            entryOnly: true
        })
    ],
    /**
     * webpack中实现代码分割的两种方式：
     * 1.同步代码：只需要在webpack配置文件总做optimization的配置即可
     * 2.异步代码(import)：异步代码，无需做任何配置，会自动进行代码分割，放置到新的文件中
     */
    optimization: {
        splitChunks: {
            chunks: "all", // async异步代码分割 initial同步代码分割 all同步异步分割都开启
            minSize: 30000, // 引入的文件大于30kb才进行分割
            //maxSize: 50000,         //50kb，尝试将大于50kb的文件拆分成n个50kb的文件
            minChunks: 1, // 将被分割打包的模块至少使用次数
            // 当需要分割的模块同步引入个数超出限时时，webpack之后分割限制值的模块，其它的将不做处理
            maxAsyncRequests: 5, // 同时加载的模块数量最多是5个，只分割出同时引入的前5个文件
            maxInitialRequests: 3, // 首页加载的时候引入的文件最多3个
            automaticNameDelimiter: "~", // 缓存组和生成文件名称之间的连接符
            name: true, // 缓存组里面的filename生效，覆盖默认命名
            cacheGroups: {
                // 缓存组，将所有加载模块放在缓存里面一起分割打包
                vendors: {
                    // 自定义打包模块
                    // vendors.test设置为/[\/]node_modules[\/]/，
                    // webpack将把使用npm命令安装的第三方库打包到vendors缓存组里面。
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10, // 优先级，先打包到哪个组里面，值越大，优先级越高
                    // 打包模块输出的文件名，默认为 缓存组名称（vendors） + 连接字符串（automaticNameDelimiter） + 模块入口文件（main.js）
                    // 例如：vendors~main.js
                    filename: "vendors.js"
                },
                default: {
                    // 默认打包模块
                    // default为默认模块打包的缓存组，一般情况下打包业务模块编码。
                    priority: -20,
                    reuseExistingChunk: true, // 模块嵌套引入时，判断是否复用已经被打包的模块
                    filename: "common.js"
                }
            }
        },
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true
            })
        ]
    }
};
