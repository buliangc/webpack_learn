const path = require("path");
const srcPath = path.join(__dirname, '.', 'src')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: { 
        main: "./src/index.js",
        // content: './src/content.js'
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
            {
                test: /\.(css|scss)$/,
                use: [ 
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            // modules: true,
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ]
            },
        ]
    },
    output: {
        // publicPath: "/",    // 在打包生成的目录文件前都加一个根路径
        filename: "[name].js",
        path:   path.resolve(__dirname, '../dist')   // path后面跟着绝对路径 返回的是D:\前端学习\webpack\webpack_demo\bundle
    },
    plugins: [
        new HtmlWebpackPlugin({
        // template: path.join(srcPath, 'index.html'),
        template: 'src/index.html', // 指定你生成的文件所依赖哪一个html文件模板
        filename: 'index.html'  // 就是html文件的文件名
    }),
        new CleanWebpackPlugin(),   // 打包之前先删除掉之前的dist目录下打包生成的文件
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 20000, // 20KB大小
            minRemainingSize: 0,
            minChunks: 1,   // 当一个模块用了多少次之后才对其进行代码分割,minChunks = 1,使用1次就进行
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {   
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                    filename: 'vendors.js',
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                    filename: 'common.js'
                }
            },
        }
    }

}