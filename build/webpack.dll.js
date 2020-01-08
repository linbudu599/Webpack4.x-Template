const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "production",
    entry: {
        vue: ["vue", "vue-router"],
        axios: ["axios"]
    },
    // 这个是输出 dll 文件
    output: {
        path: path.resolve(__dirname, "../dll"),
        filename: "_dll_[name].js",
        library: "_dll_[name]"
    },
    // 这个是输出映射表
    plugins: [
        new webpack.DllPlugin({
            name: "_dll_[name]", // name === output.library
            path: path.resolve(__dirname, "../dll/[name].manifest.json")
        })
    ]
};
