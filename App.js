import React, { Component } from 'react'
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.copyUrl2 = this.copyUrl2.bind(this);
    this.reftext = this.reftext.bind(this)
  }
  copyUrl2(){
    const texta = this.texta
    texta.select()
    document.execCommand("Copy");
    console.log('fuzhi')
  }
  reftext(node){
    this.texta = node
  }
  render() {
    return (
      <div>
        <input ref={this.reftext} defaultValue='fffffffffffffff' readOnly style={{background:'#fff',border:0}}></input>
        <input type="button" onClick={this.copyUrl2} value="点击复制代码" />
      </div>
    );
  }
}

export default App
