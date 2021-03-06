const path = require("path");
const srcPath = path.join(__dirname, '.', 'src')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require("clean-")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { webpack } = require("webpack");
const { HotModuleReplacementPlugin } = require("webpack");
module.exports = {
    mode: "development",
    devtool: 'eval-cheap-module-source-map',
    entry: {
        main: "./src/index.js",
    },
    devServer: {
        // contentBase是用来指定被访问html页面所在目录的。
        contentBase: path.join(__dirname, 'dist'), // 告诉服务器内容的来源。仅在需要提供静态文件时才进行配置
        compress: true,    // 启用gzip 压缩：
        open: true,     // 自动开启本地服务浏览器
        port: 9000,
        // hot: true,
        // hotOnly: true
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, // 不包括node_modules中的js文件
                loader: "babel-loader" ,
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "images/",
                        limit: 10240,
                    }
                }
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "fonts/"
                    }
                }
            },
            // {
            //     test: /\.(css|scss)$/,
            //     use: [ 
            //         'style-loader', 
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 importLoaders: 2,
            //                 // modules: true,
            //             }
            //         },
            //         'sass-loader',
            //         'postcss-loader'
            //     ]
            // },
            {
                test: /\.css$/,
                use: [ 
                    'style-loader', 
                    'css-loader',
                ]
            },
        ]
    },
    output: {
        // publicPath: "/",    // 在打包生成的目录文件前都加一个根路径
        filename: "[name].js",
        path:   path.resolve(__dirname, "dist")   // path后面跟着绝对路径 返回的是D:\前端学习\webpack\webpack_demo\bundle
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: path.join(srcPath, 'index.html'),
        filename: 'index.html'
    }),
        new CleanWebpackPlugin(),
        // new HotModuleReplacementPlugin()    // 控制热模块加载
    ],
    // optimization: {
    //     usedExports: true
    // }
}