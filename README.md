# 全局安装 global
 webpack index.js

# 局部安装 local
 npx webpack index.js
 npx webpack
 
 npm scripts中进行配置
 npm run bundle --> webpack

# webpack-cli的作用是使得在命令行中可以使用webpack 

# 启动指令
    "bundle": "webpack", 单纯执行webpack打包
    "watch": "webpack --watch", webpack打包并且监听文件变化
    "start": "webpack-dev-server",
    "dev-build": "webpack --config ./build/webpack.dev.js", 
    "dev": "webpack-dev-server --config ./build/webpack.dev.js",
    "build": "webpack --config ./build/webpack.prod.js",
    "server": "node server.js"


# webpack.config.js
入口文件 entry
出口文件

# mode 配置模式 
production模式 生产环境 会默认压缩代码并进行其他优化
development模式 开发环境 不会压缩代码

# loader
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

## plugins插件
plugins的作用是 可以在webpack运行到某一时刻的时候，帮你做一些事情
# html-webpack-plugin
使用html-webpack-plugin 会在打包结束后，[自动生成一个html文件]，并把打包生成的bundle.js文件[自己配置的输出文件名]自动引入到这个html文件之中。

# clean-webpack-plugin
CleanWebpackPlugin 在打包之前运行，[先删除dist目录里的内容]。options里面不需要填写内容, 有默认配置
[https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional]

## entry和output
对入口文件进行打包[main: "./src/index.js"], 对应的出口文件默认命名是main.js。
如果有多个入口文件，可以对入口文件的命名进行配置
如果静态资源放在后台的CND上, output中就需要进行CDN配置 publicPath: "http://cdn.com.cn"

[拓展知识script]: 之所以看到通过 HtmlWebpackPlugin 打包生成的html文件中的script标签在head中，默认加上了defer
加上ansyc和defer属性 当script被下载时，浏览器更安全而且可以并行下载（下载script并不阻断HTML解析）。

# devtool source-map [错误代码提示]
现在知道dist目录下的main.js文件的第96行出现了问题
sourceMap 它是一个映射关系, 它知道dist目录下的main.js文件的96行实际对应着src目录下的index.js文件中的第一行
当前其实就是index.js中的第一行代码出错了。

[补充知识:]
开发环境(developme), 错误代码提示效果比较好，可以使用cheap-mudole-eval-source-map 
线上代码(production)，按理来说是不需要配置devtool的，如果出现问题，可以使用devtool: cheap-module-source-map 错误代码提示效果更好
有source-map就会自动生成一个[.map]的文件; 
有inline就会将打包生成的.map文件放到打包生成的main.js中去,意思就是被合并到main.js中去了;
带cheap只提示你多少行，不提示你多少列出错, 只能负责业务代码里面的代码有没有问题, 不能负责loader中的错误代码; 
带module，意味着同时负责loader中的代码错误。
带eval, 通过eval的方式，对代码进行打包，配合source-map进行打包，提高我们的打包效率

# 使用Webpack DevServer
给我们提供了一个本地的node服务器
webpack-dev-server模块启动之后把我们的代码打包到node服务器，提供了热更新，后端代理，自动启动浏览器等实用功能。
1. "watch": "webpack --watch " webpack会帮我们进行监听watch，只要打包的文件发生变化, 就会自动进行重新打包，dist目录下的文件就会发生改变页面刷新即可
2. WebpackDevServer 提供一个本地服务(serve) 
也可以在nodejs中配置webpackDevServer 没有dist目录，而是放在电脑里面的内存中，从而提高了打包速度。
当运行npm run dev的时候，devServer首先会在内存中创建类似的dist目录，在由浏览器打开进行预览。


# 使用Hot Module Replacement热模块更新   
hot: true, hotOnly: true 并使用插件HotModuleReplacementPlugin 即开启HMR功能
在devServer中 => hot: true开启Hot Module Replacement热模块功能。hotOnly:true => 功能即使HMR功能不生效，浏览器也不自动刷新
适合样式调试 页面不会自动刷新 方便调试CSS

# 使用babel 将ES6的语法打包成为ES5的语法 
光转化成ES5的代码不够,还需要将ES6的方法和变量进行注入。这就需要使用polyfill, 但polyfill生成的main.js会十分的大,此时就需要使用里面的useBuiltIns属性,来进行按需加载,只会注入用到的包。以上均为业务代码的使用场景;在生成第三方模块与UI组件的时候, 我们生成的是一个库,我们不希望babel去污染全局环境。我们就需要使用babel-runtime
使用babel/polyfill 来对ES6的语法 弥补低版本浏览器的问题 
babel的presets属性中的useBuiltIns: 当做polyfill填充的时候,不是将低版本中的特性都加进来,而是根据业务代码中用到的高级语法规则,按需进行添加。
属性中的target: 按照target中的要求进行babel配置 chrome 67以上的高版本浏览器支持新的语法特性
如果仅进行业务代码的编写, 只需要配置presets,并引入polyfill即可

# 实现对React框架代码的打包
在babel.config.json中进行配置 "@babel/preset-react" 使babel支持对react的解析。

# Tree Shaking 摇树
当我引入一个模块的时候,我不引入模块中所有的代码,而是仅引入使用的代码部分
tree shaking 只支持ES Module引入方式 静态引入
CommonJS是一个动态引入的方式, tree shaking 不支持;
在packjsonz.config中进行配置 sideEffects: false 意思tree shaking对所有的模块一视同仁,都进行tree shaking ,就是没有特殊需要处理的东西
关于配置,production模式下,只需要配置cheap-module-source-map即可
development:cheap-module-eval-source-map,并且配置optimization:usedExports:true比如未使用的导出内容不会被生成

# development 和 production模式的区别打包
将配置文件的路径 webpack-dev-server --config webpack.dev.js 分别配置为 webpack.dev.js和webpack.prod.js
使用npm run dev 和 npm run prod 分别代表生产环境和开发环境
生产环境会通过webpack-dev-server生成一个本地node服务器,通过配置inline,可不生成dist目录里的打包内容。
而开发环境则不生成dist目录,直接在浏览器运行打包生成的文件,直接放至服务器即可。

再通过webpack-merge模块 可以将dev 和 prod中相同的config提取到common中,然后通过merge进行合并,减少重复代码。
[路径小问题] : 在将四个webpackp配置移到build目录下时,原先使用的__dirname 需要进行变动,导致输出的路径不同
1. plugins中template,用于指定生成的文件依赖哪一个模板html
2. output输出路径 dist目录
3. devServer中的contentBase 用于告诉生成的服务器的静态资源的来源。(2, 3路径保持一致)

# webpack 和 Code Splitting代码分割的关系
main.js
将业务逻辑和第三方模块一起打包,打包文件会很大,加载时间会很长。
业务逻辑经常会改变, 而lodash第三方库可以放在存缓中,可以单独拎出来。
1. 代码分割: 在入口文件中加入lodash.js, 作用是加载了一个lodash库,并将其挂载到全局的window上。下面的main.js就可以使用lodash.js中的全局变量 _, 当页面逻辑发生变化的时候,只需要重新加载main.js即可, lodash.js放在存缓中,无需重新加载。
[小细节补充]：在entry入口文件中引入两个js文件,先引入的放在上面的script,后引入的放在下面
2. 使用配置 optimization: [ splitChunks: { chunks: 'all' } ], webpack自动帮我们做代码分割code splitting
3. 对import _ from 'lodash 同步加载的代码, 会直接去分析代码,将该提取的部分放在vendors.js里面。
对异步加载的代码,import("lodash").then(({ default: _ }) => { }) 无需做任何配置, 直接会分配到0.js中。
[异步代码使用babel]：plugins中配置dynamic-import-webpack
chunk : all, async 和 initial 全部, 异步, 同步 
minsize: 引入的库的最小值, 大于xxx, 则做代码分割
//cacheGroups 判断规则
同步逻辑的代码分割
在splitChunks中,chunks:'all',表示对同步代码也打包; 接下来到cacheGroups的vendors,里面的test会检测引入的库是否在node_modules中。于是webpack就会单独将其打包到vendor组里面