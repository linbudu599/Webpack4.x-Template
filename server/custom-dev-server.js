const express = require("express");
const webpack = require("webpack");
const merge = require("webpack-merge");
const chalk = require("chalk");
const webpackDevMiddleware = require("webpack-dev-middleware");
const devConfig = require("../build/webpack.dev");

const config = merge(devConfig);
const complier = webpack(config);

const app = express();

app.use(
    webpackDevMiddleware(complier, {
        noInfo: true, // 控制台仅显示警告与错误
        stats: {
            //  用于形成统计信息的选项
            colors: true
        }
    })
);

app.listen(3000, () => {
    console.log(chalk.green("http://localhost:3000"));
});
