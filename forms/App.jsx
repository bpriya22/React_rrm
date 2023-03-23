// import React, { Component } from 'react'   ///normal js form

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <form action="">
//           <label htmlFor="username">Username</label>
//           <br />
//           <input type="text"id="username" />
//           <br />
//           <label htmlFor="password">Password</label>
//           <br />
//           <input type="password" id='password' />
//           <br />
//           <button onClick={(e)=>{e.preventDefault()
//                             let username=document.getElementById("username").value
//                             let password=document.getElementById("password").value
//                             console.log({username,password})}}>Submit</button>
//         </form>
//       </div>
//     )
//   }
// }

//using ucf
import React, { Component } from 'react'

export default class App extends Component {
  constructor()
  {
    super()
    this.userref=React.createRef()
    this.passref=React.createRef()
  }
  handlechange=(e)=>{
    e.preventDefault()
    let username = this.userref.current.value
    let password=this.passref.current.value
    console.log({username,password});
  }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handlechange}>
           <label htmlFor="username">Username</label>
           <br />
           <input type="text"id="username" ref={this.userref}/>
           <br />
           <label htmlFor="password">Password</label>
           <br />
           <input type="password" id='password' ref={this.passref}/>
           <br />
           <button type='submit'>Submit</button>
           </form>
      </div>
    )
  }
}

