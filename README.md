# 全局安装 global
 webpack index.js

# 局部安装 local
 npx webpack index.js

 npm scripts中进行配置
 npm run bundle --> webpack

# webpack-cli的作用是使得在命令行中可以使用webpack 

# webpack.config.js
入口文件 entry
出口文件
mode 配置模式 
production模式 会默认压缩代码并进行其他优化
development模式 不会压缩代码
loader的先后顺序 自下而上 自右而坐
针对css样式
style-loader css-loader 
css负责样式打包 style负责将样式挂载到页面上
针对scss样式
sass-loader
sass对样式进行翻译，转换成css
自动添加厂商前缀
postcss-loader
eg: transform: translate(100px,100px); --> -webkit-transform: translate(100px,100px);
在postcss-config.js中使用autoprefixer[有问题:网页上无法显示-webkit厂商前缀]

css-loader中的importLoaders作用是在css样式中，再进行css样式的引用, @import './xxx.css' 层叠样式表
modules: true 模块化的CSS，指当前的css只在当前的css有效

# 使用webpack打包字体样式
在src的fonts目录下引入当前的iconfont字体文件。
iconfont 使用file-loader 进行打包
