// import React,{Component} from 'react';
// export default class App extends Component{
//   constructor()
//   {
//     super()
//     this.state={
//       username:"UPENDRA"
//     }
//   }
//   componentDidMount()
//   {
//     let btn=document.querySelector('button')
//     btn.addEventListener('click',()=>{
//       this.setState({username:this.state.username="PRIYANKA"})
//     })

//   }
//   render(){
//     return(
//       <>
//       <div>{this.state.username}</div>
//       <button>Change</button>
//       </>
//     )
//   }
// }
import React, { Component } from 'react'  //textbox->type inside to display.

export default class App extends Component {
  constructor()
  {
    super()
    this.state={
      username:" "
    }
  }

  componentDidMount(){
   let input=document.querySelector('input')
   input.addEventListener("keypress",(x)=>{
     this.setState({username:x.target.value})
   })
  }
 
  render() {
    return (
      <>
      <h1>{this.state.username}</h1>
      <input type="text" />
      </>
    )
  }
}
