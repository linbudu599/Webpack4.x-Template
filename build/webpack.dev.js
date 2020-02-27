const merge = require("webpack-merge");
const webpack = require("webpack");
const path = require("path");
require("dotenv").config({
    path: path.join(__dirname, "../.env")
});
const commonConfig = require("./webpack.common");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

const devConfig = {
    mode: "development",
    profile: true,
    // eval :速度最快、效率最高，但没有生产映射，与inline一样不会生成map文件
    // inline: 内联到对应js文件
    // cheap: 只提示错误在源文件的哪一行就行了，不用精确到哪一行哪一列
    // module: 指不光是我们写的代码，包括第三方模块的代码，它都会进行错误提示
    // devtool: "cheap-module-source-map",
    // 以下选项只有在watch:true时才有意义
    watchOptions: {
        ignored: "/node_modules/",
        // 监听到变化后会等待300ms再去更新编译内容
        // aggregateTimeout: 300,
        // 判断文件是否发生变化是通过不停询问系统实现的
        // 默认每秒1000次
        poll: 1000
    },
    devServer: {
        host: "localhost",
        open: true,
        hot: true,
        port: 9999,
        inline: true, // 实时刷新
        hot: true, // 热模块替换机制
        compress: false, // 是否对服务器资源启用gzip压缩
        overlay: {
            // 在浏览器输出编译错误
            warnings: true,
            errors: true
        },
        stats: "errors-only" // 编译时shell上的输出内容
    },
    module: {
        rules: [
            {
                // 开发模式下直接使用file-loader
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
    },
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false),
            USERNAMEBUDU: JSON.stringify(process.env.USERNAMEBUDU),
            FILENAME: JSON.stringify(process.env.FILENAME)
        }),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: [
                    "Your application is running here http://localhost:9999"
                ],
                notes: ["一些注意事项"]
            },
            onErrors: function(severity, errors) {
                // You can listen to errors transformed and prioritized by the plugin
                // severity can be 'error' or 'warning'
            },
            // should the console be cleared between each compilation?
            // default is true
            clearConsole: true,

            // add formatters and transformers (see below)
            additionalFormatters: [],
            additionalTransformers: []
        })
    ],
    optimization: {
        usedExports: true
    }
};
module.exports = merge(commonConfig, devConfig);
