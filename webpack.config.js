const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js",
    },
    module: {
        rules: [
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
        filename: "bundle.js",
        path:   path.resolve(__dirname, "dist")   // path后面跟着绝对路径 返回的是D:\前端学习\webpack\webpack_demo\bundle
    }

}