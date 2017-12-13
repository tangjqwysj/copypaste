import React, { Component } from 'react'
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.copyUrl2 = this.copyUrl2.bind(this);
    this.reftext = this.reftext.bind(this);
    this.getW = this.getW.bind(this)
    this.state = {
      defaultValue: '电风发的非反动的发地方第三方的双方的首发地方是地方第三方',
      divDW:0
    }
  }
  copyUrl2(){
    const texta = this.texta
    texta.select()
    document.execCommand("Copy");
  }
  componentDidMount(){
    this.setState({divDW:this.divD.getBoundingClientRect().width})
  }
  reftext(node){
    this.texta = node
  }
  getW(node){
    this.divD=node
  }
  render() {
    const style1 = {
      visibility:'hidden',
      fontSize:'14px',
      fontStyle:'normal',
      fontFamily:'Times New Roman',
    }
    const style2 = {
      background:'#fff',
      width:this.state.divDW+'px',
      fontSize:'14px',
      fontFamily:'Times New Roman',
      border:'none'
    }
    return (
      <div>
        <span style={style1} ref={this.getW}>{this.state.defaultValue}</span><br/>
        <div style={{position:'absolute',top:0}}>
          <input ref={this.reftext} defaultValue={this.state.defaultValue} readOnly style={style2} />
          <input type="button" onClick={this.copyUrl2} value="点击复制代码" />
        </div>
      </div>
    );
  }
}

export default App
