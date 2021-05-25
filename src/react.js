import "@babel/polyfill"
import React, {Component} from 'react'
import ReactDom from 'react-dom'

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
