// import React from "react";
// import { Component,createRef } from "react";

// class App extends Component{
//   constructor()
//   {
//     super()
//     this.state={name:"hello world"}
//     this.h1ref=createRef()
//   }
//  componentDidMount(){
//   let h1=document.querySelector('h1')
//   console.log(h1,"DOM way");
//   console.log(this.h1ref.current,"React way");
//  }

//   render(){
//     return(
//       <h1 ref={this.h1ref}>{this.state.name}</h1>
//     )
//   }
// }
// export default App

// import React, { Component,createRef } from 'react'

// export default class App extends Component {

//   constructor()
//   {
//     super()
//     this.state={company:"Qspiders"}
//     this.spanref=createRef()
//     this.btnref=createRef()
//   }
  

//   render() {
//     return (
//       <div>
//       <span></span>
//       </div>
//     )
//   }
// }

// Function based component

// import React from "react";
// import { useRef } from "react";

// const App=()=>{
//   let h1ref=useRef()
// let handlecolor=()=>{
//   h1ref.current.style.color="red"
// }
//   return(
//     <>
//   <h1 ref={h1ref}>heyy</h1>
//   <button onClick={handlecolor}>click</button>
//   </>
//   )
// }
// export default App


import React,{useState,useRef} from 'react'
import video from "http://movietrailers.apple.com/movies/sony_pictures/spiderman-homecoming/spider-man-homecoming-trailer-3_h480p.mov"

function App() {
let [video,setvideo]=useState(video)

  return (
    <video src={video}></video>
  )
}

export default App
