import React, { Component } from 'react'

export default class App extends Component {
  constructor()
  {
    super()
    this.state={
      name:"Hey Priya",
      count:0
    }
  }
handlechange=()=>{
  this.setState({name:"Welcome."})
}
handlenum=()=>{
  this.setState({count:22})
}
  render() {
    return (
      <div style={{textAlign:"center"}}>
      <h1 >{this.state.name}</h1>
      <h2 >{this.state.count}</h2>
      <button onClick={this.handlechange} style={{height:"30px"}}>Click here.</button>
      <button onClick={this.handlenum} style={{height:"30px"}}>Click to change the number..</button>
      </div>
    )
  }
}
