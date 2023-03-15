import React, { Component } from 'react'

export default class App extends Component {
  constructor()
  {
    super()
    this.state={
      count:0
    }
  }
handleincrement=()=>{
  this.setState({count:this.state.count+1})
}
handledecrement=()=>{
  this.setState({count:this.state.count-1})
}
handlereset=()=>{
  this.setState({count:0})
}

  render() {
    return (
      <div style={{textAlign:"center"}}>
      <h1 >{this.state.count}</h1>
    
      <button onClick={this.handleincrement} style={{height:"30px"}}>+</button>
      <button onClick={this.handledecrement} style={{height:"30px"}}>-</button>
      <button onClick={this.handlereset} style={{height:"30px"}}>RESET</button>
      </div>
    )
  }
}
