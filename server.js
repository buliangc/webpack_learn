const express = require("express")
const app = express();
const webpack = require("webpack")
const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require('./webpack.config.js')
const complier = webpack(config);   // 编译器
// 在node中使用webpack
app.use(webpackDevMiddleware(complier, {
    publicPath: config.output.publicPath
}))

app.listen(8080, () => {
    console.log("server is runing");
})