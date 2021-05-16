// webpack 将 import导入的模块 打包到一起，就是一个模块打包工具
// ES module 模块引入方式
import Header from './header'
import './style.css'
console.log("Header",Header);
// import Content from './content'
// import Sidebar from './sidebar'
// CommonJS 模块引入方式
// const Header = require('./header')
// const Content = require('./content')
// const Sidebar = require('./sidebar')
import picture from '../assets/my_word.jpg' 
console.log(picture);
//  路径信息 file:///D:/%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0/webpack/webpack_demo/dist/4d9243cfe1eff926572422c36e8db3a0.jpg
const img = new Image();
img.src = picture;
img.alt = "未正确加载...";
img.classList.add('avatar')
// img.width = 500;
// img.height = 350;
var root = document.getElementById("root");
root.append(img);
// new Header();
// new Content();
// new Sidebar();