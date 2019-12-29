const merge = require("webpack-merge");
const webpack = require("webpack");
const path = require("path");
const dotenv = require("dotenv").config({
    path: path.join(__dirname, "../.env")
});
const commonConfig = require("./webpack.common");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

const devConfig = {
    mode: "development",
    // eval :速度最快、效率最高，但没有生产映射
    // inline: 内联到对应js文件
    // cheap: 只提示错误在源文件的哪一行就行了，不用精确到哪一行哪一列
    // module: 指不光是我们写的代码，包括第三方模块的代码，它都会进行错误提示
    // devtools:"none",
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
            // "process.env": {
            //   NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            // },
            PRODUCTION: JSON.stringify(false),
            "process.env.USERNAMEBUDU": JSON.stringify(
                process.env.USERNAMEBUDU
            ),
            "process.env.FILENAME": JSON.stringify(process.env.FILENAME),
            "process.env.NODE_ENV": JSON.stringify("development")
        }),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: [
                    "You application is running here http://localhost:9999"
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
        // 在开发环境中加，生产环境不加
        // 摇树优化
        usedExports: true
    }
};
module.exports = merge(commonConfig, devConfig);
