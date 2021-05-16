const path = require("path"); //导入模块

//path.resolve()表示的是什么呢？
console.log(__dirname);         // 结果： D:\前端学习\webpack\webpack_demo    （当前文件（你用node运行的文件）所在的文件夹地址）

console.log(path.resolve(__dirname,"bundle"));      //结果：D:\test\Lession03\path\server.js  （当前执行的文件路径）
console.log(path.join(__dirname,"bundle"));      //结果：D:\test\Lession03\path\server.js  （当前执行的文件路径）

