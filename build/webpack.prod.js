const path = require("path");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
// 压缩CSS文件
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
//去除重复css，有利有弊,依赖glob
const PurifyCSS = require("purifycss-webpack");
//引入node的glob对象使用
const glob = require("glob-all");
//压缩js代码
const TerserPlugin = require("terser-webpack-plugin");
// 生成一个html，以饼图描绘性能
const Visualizer = require("webpack-visualizer-plugin");
// 分析各个包的大小
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

const ImageminPlugin = require("imagemin-webpack-plugin").default;

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

const prodConfig = {
    mode: "production",
    profile: true,
    devtool: "cheap-module-source-map",
    output: {
        filename: "[name].[contenthash].js",
        chunkFilename: "[name].[contenthash].js"
    },
    module: {
        // 生产模式为了更好的压缩文件，需要对小于一定程度的图片进行base64编码
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
                path.resolve(__dirname, "../src/**/*.js")
            ])
        }),
        new ImageminPlugin({
            // disable: process.env.NODE_ENV !== 'production', // Disable during development
            pngquant: {
                quality: "70"
            }
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "server",
            analyzerPort: 9797
        }),

        new LodashModuleReplacementPlugin({
            collections: true,
            paths: true
        })
    ],
    optimization: {
        usedExports: true,
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true
            })
        ]
    }
};
module.exports = merge(commonConfig, prodConfig);
