// import React, { useState } from 'react'

// const App = () => {
//     let [name,setName] = useState("priya");
    // let changeTheValue=(e)=>{

    //     setName(e.target.value)
    // }
//   return (
//     <>
//         <h2>{name}</h2>
//         <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
//     </>
//   )
// }

// export default App

// import React, { Component } from 'react'
// import {} from  'react-icons/fa';

// export default class App extends Component {
//   constructor()
//   {
//     super()
//     this.userref=React.createRef()
//     this.passref=React.createRef()
//   }
//   handlechange=(e)=>{
//     e.preventDefault()
//     let username = this.userref.current.value
//     let password=this.passref.current.value
//     console.log({username,password});
//   }
//   render() {
//     return (
//       <div>
//         <form action="" onSubmit={this.handlechange}>
//            <label htmlFor="username">Name</label>
//            <br />
//            <input type="text"id="username" ref={this.userref}/>
//            <br />
//            <label htmlFor="email">E-mail</label>
//            <br />
//            <input type="text" id='email'/>
//            <br />
//            <label htmlFor="password">Password</label>
//            <br />
//            <input type="password" id='password' ref={this.passref}/>
//            <br />
//            <button type='submit'>Submit</button>
//            </form>
//       </div>
//     )
//   }
// }

// import React from 'react'
// import { FaEye } from "react-icons/fa";
// import "./Toast/toast.css"

//  const App = () => {
//   return (
//     <section>
//       <form action="">
//         <div>
//           <label htmlFor="">name</label>
//           <input type="text" />
//         </div>
//         <div>
//           <label htmlFor="">Email</label>
//         <input type="text" />
//         </div>
//         <div>
//           <label htmlFor="">password</label>
//           <div className='icon'><FaEye/></div>
//           <input type="password" />
//         </div>
        
//       </form>
//     </section>
//   )
// }
// export default App


// import React from "react";
// import { useState } from "react";

// const App=()=>{
//   let [name,setname]=useState("")

//   // let handlechange=(e)=>{
//   //   setname(e.target.value)
//   // }
//   return(
//     <>
//      <h2>{name}</h2>
//      <input type="password" onChange={(e)=>{setname(e.target.value)}}  />
//     </>
//   )
// }
// export default App


// import React from "react";
// import { useState } from "react";

// const App=()=>{
//   let [count,Setcount]=useState(0)
  
//   // let [reset,Setreset]=useState(count=0)


//   return(
//     <>
//     <h1>{count}</h1>
//     <button onClick={()=>{Setcount(count+1)}}>+</button>
//     <button onClick={()=>{Setcount(count-1)}}>-</button>
//     <button onClick={()=>{Setcount(count=0)}}>reset</button>

//     </>
//   )
// }
// export default App


// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'

// export const App = () => {
  // let [userDate,SetUserData]=useState([])
  // useEffect(()=>{
  //   window.fetch("https://api.github.com/users")
  //   .then((x)=>x.json)
  //   .then((data)=>SetUserData(data))
  //   .catch((err)=>err)
  // })

  // return (
  //   <div></div>
  // )
//============================================
// import React from "react";
// import { useEffect,useState} from "react";
//   const App=()=>{

//   let [user,setUser]=useState([]);

//   let [search,setSearch]=useState("")
//   let [lenght,setLenght]=useState("")

//   let handleChange=(e)=>{
//     setSearch(e.target.value)
//       console.log(search);
//     setLenght(search.length)
//       console.log(lenght);
//   }

//     useEffect(()=>{
//       let fetchData = async()=>{
//         let data = await window.fetch("https://api.github.com/users")
//         let finalData = await data.json();
//         setUser(finalData);
//       }
//       fetchData();
//     },[])

//   return(
//     <>
//         <div>
//             <input placeholder="search" onChange={handleChange}/>
//             {search==null?"loading...": user.map((x)=>{
//               if(search == x.login.slice(0,lenght+1)){
//                 return(
//                   <h1>{x.login}</h1>
//                 )
//               }
//             })}
//         </div>
//         <div>
//           {user.map((x)=>{
//             return(
//               <div>{x.login}</div>
//             )
//           })}
//         </div>
//     </>
//   )

//   }
//   export default App

  

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       username:""
//     }
//   }
//   // componentDidMount(){
//   //   let input=document.querySelector('input')
//   //   input.addEventListener('keypress',(e)=>{
//   //     this.setState({username:e.target.value})
//   //   })
//   // }
//   render() {
//     return (
//       <>
//       <div>{this.state.username}</div>
//       <input type="text" onChange={(e)=>{this.setState({username:e.target.value})}}/>
//       </>
      
//     )
//   }
// }

// import React, { useState } from 'react'
// import { useRef } from 'react'
//  const App = () => {
//   let href=useRef()
//    let [name,Setname]=useState('eriya')
//    let handlechange=()=>{
//     Setname('priya')
//     href.current.style.color='orange'
//    }
//   return (
//     <><h1 ref={href}>{name}</h1>
//      <button onClick={handlechange}>click</button>  
//     </>
    
//   )
// }
// export default App








