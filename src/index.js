// webpack 将 import导入的模块 打包到一起，就是一个模块打包工具
// ES module 模块引入方式
import Content from './content'
// import Sidebar from './sidebar'
// CommonJS 模块引入方式
// const Header = require('./header')
// const Content = require('./content')
// const Sidebar = require('./sidebar')
import Header from './header'
import CreateAvarar from './createAvatar.js'
import './style.css'
import picture from '../assets/my_word.jpg' 
// import "@babel/polyfill"; 可省略
import React, {Component} from 'react';
import ReactDom from 'react-dom';

import { add, minus } from './math';

var root = document.getElementById("root");
// Header();   // new Header();
// CreateAvarar();
// //  路径信息 file:///D:/%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0/webpack/webpack_demo/dist/4d9243cfe1eff926572422c36e8db3a0.jpg
// const img = new Image();
// img.src = picture;
// img.alt = "未正确加载...";
// img.classList.add(style.avatar)

// root.append(img);
const box = document.createElement("div");
box.innerHTML = '<span class="iconfont iconeye">&#xe60e;&#xe61e;你好</span>';
{/* <span className="iconfont iconeye">&#xe60e;</span> */}
{/* <span class={style.iconfont ,style.iconeye}>&#xe60e;</span>  */}
root.append(box);

const btn = document.createElement('button');
btn.innerHTML = '新增';
// root.append(btn)
document.body.append(btn);
btn.onclick = function() {
    const div = document.createElement('div');
    div.innerHTML = 'item';
    document.body.append(div);
}
Content();

const arr = [
    new Promise( () => {} ),
    new Promise( () => {} ),
]

arr.map( (item, index) => {
    console.log(item);
})

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <h3>这是一个React组件</h3>
         );
    }
}

ReactDom.render(<App />, document.getElementById('root'))

add(3,5)
// new Content();
// new Sidebar();