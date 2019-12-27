const path = require("path");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
//去除重复css，有利有弊,依赖glob
const PurifyCSS = require("purifycss-webpack");
//引入node的glob对象使用
const glob = require("glob-all");
//压缩js代码
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");

const Visualizer = require("webpack-visualizer-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
const StatsWriterPlugin = require("webpack-stats-plugin").StatsWriterPlugin;

const prodConfig = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        //url-loader能将小于某个大小的图片转为Base64编码
                        //！url-loader内实际包含了file-loader
                        loader: "url-loader",
                        options: {
                            limit: 25 * 1024, //是把小于25kB的文件转成Base64的格式，写入JS
                            publicPath: "../imgs",
                            outputPath: "imgs/" //图片打包后的地址
                        }
                    }
                ]
            }
            //
        ]
    },
    plugins: [
        new OptimizeCssAssetsPlugin({
            //用于优化\最小化CSS的CSS处理器，默认为cssnano
            cssProcessor: require("cssnano"), //引入cssnano配置压缩选项
            cssProcessorOptions: {
                discardComments: { removeAll: true } //去除注释
            },
            canPrint: true //是否将插件信息打印到控制台
        }),
        new PurifyCSS({
            paths: glob.sync([
                // 要做CSS Tree Shaking的路径文件
                path.resolve(__dirname, "../public/index.html"), // 请注意，我们同样需要对 html 文件进行 tree shaking
                path.resolve(__dirname, "../src/js/*.js")
            ])
        }),
        new ParallelUglifyPlugin({
            // 传递给 UglifyJS的参数如下：
            uglifyJS: {
                output: {
                    //是否输出可读性较强的代码，即会保留空格和制表符，默认为输出，为了达到更好的压缩效果，可以设置为false
                    beautify: true,
                    //  是否保留代码中的注释，默认为保留，为了达到更好的压缩效果，可以设置为false
                    comments: false
                },
                //  是否在UglifyJS删除没有用到的代码时输出警告信息，默认为输出，可以设置为false关闭这些作用不大的警告
                warnings: false,
                compress: {
                    //  是否删除代码中所有的console语句，默认为不删除，开启后，会删除所有的console语句
                    drop_console: false,
                    //  是否内嵌虽然已经定义了，但是只用到一次的变量，比如将 var x = 1; y = x, 转换成 y = 5, 默认为不转换，为了达到更好的压缩效果，可以设置为false
                    collapse_vars: true,
                    //  是否提取出现了多次但是没有定义成变量去引用的静态值，比如将 x = 'xxx'; y = 'xxx'  转换成
                    //  var a = 'xxxx'; x = a; y = a; 默认为不转换，为了达到更好的压缩效果，可以设置为false
                    reduce_vars: true
                }
            }
        }),
        new BundleAnalyzerPlugin({
            analyzerPort: 9797
        }),
        new Visualizer({
            filename: "./statistics.html"
        }),
        new StatsWriterPlugin({
            fields: null,
            stats: { chunkModules: true }
        })
    ]
};
module.exports = merge(commonConfig, prodConfig);
