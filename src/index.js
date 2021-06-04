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
import './fonts/iconfont.css'
import style from './style.css'
import picture from '../assets/my_word.jpg' 
// import "@babel/polyfill"; 可省略
import React, {Component} from 'react';
import ReactDom from 'react-dom';

import { add, minus } from './math';

// var root = document.getElementById("root");
// // Header();   // new Header();
// // CreateAvarar();
// // //  路径信息 file:///D:/%E5%89%8D%E7%AB%AF%E5%AD%A6%E4%B9%A0/webpack/webpack_demo/dist/4d9243cfe1eff926572422c36e8db3a0.jpg
// // const img = new Image();
// // img.src = picture;
// // img.alt = "未正确加载...";
// // img.classList.add('avatar')

// // root.append(img);
// const box = document.createElement("div");
// box.innerHTML = '<span class="iconfont iconeye">&#xe60e;&#xe61e;你好</span>';
// // box.innerHTML = '<span class={style.iconfont ,style.iconeye}>&#xe60e;</span>';
// {/* <span className="iconfont iconeye">&#xe60e;</span> */}
// <span class={style.iconfont ,style.iconeye}>&#xe60e;</span>  
// root.append(box);

// const btn = document.createElement('button');
// btn.innerHTML = '新增';
// // root.append(btn)
// document.body.append(btn);
// btn.onclick = function() {
//     const div = document.createElement('div');
//     div.innerHTML = 'item';
//     document.body.append(div);
// }
// Content();

// const arr = [
//     new Promise( () => {} ),
//     new Promise( () => {} ),
// ]

// arr.map( (item, index) => {
//     console.log(item);
// })
import _ from 'lodash';
// window._ = _;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { count:0 }
    }
    incrementCount() {
        // 注意：这样 *不会* 像预期的那样工作。
        this.setState({count: this.state.count + 1});
    }
      
    handleSomething() {
        // 假设 `this.state.count` 从 0 开始。
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        // 当 React 重新渲染该组件时，`this.state.count` 会变为 1，而不是你期望的 3。
      
        // 这是因为上面的 `incrementCount()` 函数是从 `this.state.count` 中读取数据的，
        // 但是 React 不会更新 `this.state.count`，直到该组件被重新渲染。
        // 所以最终 `incrementCount()` 每次读取 `this.state.count` 的值都是 0，并将它设为 1。
        console.log(this.state.count);
        // 问题的修复参见下面的说明。
    }

    componentDidMount() {
        console.log(_.join(['a', 'b', 'c'], '*-*'));
    }

    render() { 
        return ( 
            <>
            <h3>这是一个React组件</h3>
            <span className={style.iconfont ,style.iconeye}>&#xe60e;</span>  
            <button onClick={() => {this.handleSomething()}}>按钮</button>
            <span>哈哈</span>
            <span>哈哈</span>
            <span>哈哈</span>
            </>
         );
    }
}

ReactDom.render(<App />, document.getElementById('root'))

// add(3,5)
// new Content();
// new Sidebar();