const path = require("path");
const commonConfig = require('./webpack.common.js')
const { HotModuleReplacementPlugin } = require("webpack");
const { default: merge } = require("webpack-merge");

const devConfig =  {
    mode: "development",
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        contentBase: './dist', // 告诉服务器内容的来源, 从哪里读静态资源。仅在需要提供静态文件时才进行配置。
        compress: true,     
        open: true,     // 自动开启本地服务浏览器
        port: 9000,
        // hot: true,
        // hotOnly: true
    },
    plugins: [
        new HotModuleReplacementPlugin()    // 控制热模块加载
    ],
    optimization: {
        usedExports: true
    }
}

module.exports = merge(commonConfig, devConfig);